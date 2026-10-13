import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { type Meldung, vereinfachen } from "./bvg.ts";

// Planer: holt die aktuellen Störungs-/Umleitungsmeldungen der BVG für einzelne Linien und reicht sie
// in kompakter Form an die App weiter. Die BVG erlaubt den Abruf aus fremden Webseiten/Apps nicht
// direkt (kein CORS) - daher der Umweg über diese Funktion. Meldungen werden 5 Minuten zwischen-
// gespeichert, damit die BVG nicht bei jedem Öffnen eines Dienstes abgefragt wird.
//
// Eigene Funktion für Planer (getrennt von der Funktion "bvg-meldungen" der App Dienstplan).
// Zugriff haben angemeldete Nutzer; je Nutzer gilt eine Mengenbegrenzung.

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const QUELLE = "https://www.bvg.de/disruption-reports-service/disruptions/v1/de/line/";
const CACHE_MS = 5 * 60 * 1000;
const MAX_LINIEN = 12;
const MAX_MELDUNGEN_JE_LINIE = 20;

type Ergebnis = { linie: string; meldungen: Meldung[]; fehler?: boolean };
const cache = new Map<string, { zeit: number; ergebnis: Ergebnis }>();

// Prüft über den Auth-Dienst von Supabase, ob die Anfrage von einem angemeldeten Nutzer kommt
// (der öffentliche Anon-Schlüssel allein ist kein Nutzer). Liefert die Nutzer-ID oder null.
async function nutzerPruefen(auth: string, apikeyHeader: string | null): Promise<string | null> {
  const url = Deno.env.get("SUPABASE_URL");
  const anon = Deno.env.get("SUPABASE_ANON_KEY") || apikeyHeader;
  if (!url || !anon || !auth) return null;
  const r = await fetch(`${url}/auth/v1/user`, { headers: { apikey: anon, Authorization: auth } });
  if (!r.ok) return null;
  const nutzer = await r.json().catch(() => null);
  return nutzer && typeof nutzer.id === "string" ? nutzer.id : null;
}

// Höchstens so viele Anfragen je Nutzer und Minute (schützt die BVG-Schnittstelle vor Dauerfeuer)
const MAX_ANFRAGEN_JE_MINUTE = 30;
const anfragen = new Map<string, number[]>();
function zuViele(nutzerId: string): boolean {
  const jetzt = Date.now();
  const liste = (anfragen.get(nutzerId) ?? []).filter((t) => jetzt - t < 60_000);
  liste.push(jetzt);
  anfragen.set(nutzerId, liste);
  if (anfragen.size > 5000) anfragen.delete(anfragen.keys().next().value as string);
  return liste.length > MAX_ANFRAGEN_JE_MINUTE;
}

async function holen(linie: string): Promise<Ergebnis> {
  const gemerkt = cache.get(linie);
  if (gemerkt && Date.now() - gemerkt.zeit < CACHE_MS) return gemerkt.ergebnis;

  try {
    const antwort = await fetch(QUELLE + encodeURIComponent(linie), {
      headers: { Accept: "application/json", "User-Agent": "Dienstplan-App (privates Projekt)" },
      signal: AbortSignal.timeout(6000),
    });
    if (!antwort.ok) return { linie, meldungen: [], fehler: true };
    const roh = await antwort.json();
    const meldungen = (Array.isArray(roh) ? roh : [])
      .map(vereinfachen)
      .filter((m): m is Meldung => m !== null)
      .slice(0, MAX_MELDUNGEN_JE_LINIE);
    const ergebnis: Ergebnis = { linie, meldungen };
    cache.set(linie, { zeit: Date.now(), ergebnis });
    if (cache.size > 200) cache.delete(cache.keys().next().value as string);
    return ergebnis;
  } catch {
    return { linie, meldungen: [], fehler: true };
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  const json = (body: unknown) =>
    new Response(JSON.stringify(body), { status: 200, headers: { ...cors, "Content-Type": "application/json" } });

  try {
    // Nur angemeldete Nutzer (der öffentliche Anon-Schlüssel allein reicht nicht)
    const nutzerId = await nutzerPruefen(req.headers.get("Authorization") || "", req.headers.get("apikey"));
    if (!nutzerId) return json({ fehler: "Nicht angemeldet." });
    if (zuViele(nutzerId)) return json({ fehler: "Zu viele Anfragen. Bitte kurz warten." });

    const body = await req.json().catch(() => ({}));
    const roh: unknown[] = Array.isArray(body?.linien) ? body.linien : [];
    const linien = [...new Set(
      roh.map((x) => String(x ?? "").trim().toUpperCase()).filter((x) => /^[A-Z0-9]{1,5}$/.test(x)),
    )].slice(0, MAX_LINIEN);
    if (!linien.length) return json({ linien: [] });

    const ergebnisse = await Promise.all(linien.map(holen));
    return json({ abgerufen: new Date().toISOString(), linien: ergebnisse });
  } catch {
    return json({ fehler: "Die Meldungen konnten nicht geladen werden." });
  }
});
