-- ============================================================
--  Planer – Datenbank-Einrichtung (Supabase, gleiches Projekt wie Dienstplan)
--
--  Eigene Tabellen mit Präfix planer_: Die Daten sind komplett getrennt von Dienstplan.
--  Jeder sieht und ändert nur seine eigenen Zeilen (user_id = auth.uid()).
--  Planer prüft NICHT, ob ein Konto in Dienstplan freigeschaltet ist (profile.aktiv):
--  Ein Planer-Konto bleibt dort "nicht freigeschaltet" und kommt in Dienstplan nicht hinein.
--
--  Das Skript ist nur additiv (neue Tabellen, Bucket, Funktion) und lässt sich gefahrlos
--  mehrmals ausführen.
-- ============================================================

-- ---------- Schichten ----------
create table if not exists public.planer_schichten (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  datum date not null,
  daten jsonb not null,
  aktualisiert_am timestamptz not null default now(),
  unique (user_id, datum),
  constraint planer_schichten_daten_groesse check (octet_length(daten::text) <= 200000)
);

-- ---------- Einstellungen (Verdienst, Zuschläge, Zeitfenster, Name für PDFs, Bundesland, Darstellung ...) ----------
create table if not exists public.planer_einstellungen (
  user_id uuid primary key references auth.users(id) on delete cascade,
  daten jsonb not null default '{}'::jsonb,
  aktualisiert_am timestamptz not null default now(),
  constraint planer_einstellungen_groesse check (octet_length(daten::text) <= 20000)
);

-- ---------- Tagesereignisse (Foto + Titel) ----------
create table if not exists public.planer_ereignisse (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  datum date not null,
  titel text,
  foto_pfad text not null,
  erstellt_am timestamptz not null default now(),
  constraint planer_ereignisse_titel_laenge check (char_length(titel) <= 100),
  constraint planer_ereignisse_pfad_laenge check (char_length(foto_pfad) <= 300)
);
create index if not exists planer_ereignisse_user_datum on public.planer_ereignisse (user_id, datum);

-- ---------- Haltestellen (eigene Liste je Nutzer) ----------
create table if not exists public.planer_haltestellen (
  user_id uuid not null references auth.users(id) on delete cascade,
  kuerzel text not null,
  name text not null,
  automatisch boolean not null default false,
  erstellt_am timestamptz not null default now(),
  aktualisiert_am timestamptz not null default now(),
  primary key (user_id, kuerzel),
  constraint planer_haltestellen_kuerzel_laenge check (char_length(kuerzel) <= 20),
  constraint planer_haltestellen_name_laenge check (char_length(name) <= 100)
);

-- ---------- Zugriffsregeln (RLS): jeder nur seine eigenen Zeilen ----------
alter table public.planer_schichten enable row level security;
alter table public.planer_einstellungen enable row level security;
alter table public.planer_ereignisse enable row level security;
alter table public.planer_haltestellen enable row level security;

do $$
declare
  t text;
begin
  foreach t in array array['planer_schichten', 'planer_einstellungen', 'planer_ereignisse', 'planer_haltestellen']
  loop
    execute format('drop policy if exists %I on public.%I', t || '_lesen', t);
    execute format('drop policy if exists %I on public.%I', t || '_anlegen', t);
    execute format('drop policy if exists %I on public.%I', t || '_aendern', t);
    execute format('drop policy if exists %I on public.%I', t || '_loeschen', t);
    execute format('create policy %I on public.%I for select to authenticated using (user_id = (select auth.uid()))', t || '_lesen', t);
    execute format('create policy %I on public.%I for insert to authenticated with check (user_id = (select auth.uid()))', t || '_anlegen', t);
    execute format('create policy %I on public.%I for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()))', t || '_aendern', t);
    execute format('create policy %I on public.%I for delete to authenticated using (user_id = (select auth.uid()))', t || '_loeschen', t);
  end loop;
end $$;

-- Anonyme Besucher haben keinen Zugriff
revoke all on public.planer_schichten, public.planer_einstellungen, public.planer_ereignisse, public.planer_haltestellen from anon;

-- ---------- Foto-Speicher für Ereignisse (privat, Pfad beginnt mit der Nutzer-ID) ----------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('planer-ereignis-fotos', 'planer-ereignis-fotos', false, 15728640,
        array['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'])
on conflict (id) do nothing;

drop policy if exists planer_foto_hochladen on storage.objects;
drop policy if exists planer_foto_lesen on storage.objects;
drop policy if exists planer_foto_loeschen on storage.objects;

create policy planer_foto_hochladen on storage.objects for insert to authenticated
  with check (bucket_id = 'planer-ereignis-fotos' and (storage.foldername(name))[1] = (select auth.uid())::text);
create policy planer_foto_lesen on storage.objects for select to authenticated
  using (bucket_id = 'planer-ereignis-fotos' and (storage.foldername(name))[1] = (select auth.uid())::text);
create policy planer_foto_loeschen on storage.objects for delete to authenticated
  using (bucket_id = 'planer-ereignis-fotos' and (storage.foldername(name))[1] = (select auth.uid())::text);

-- ---------- Haltestellen einmalig aus der Dienstplan-Liste kopieren ----------
-- Beim ersten Anmelden ruft Planer diese Funktion auf. Danach pflegt jeder nur noch seine eigene Liste.
create or replace function public.planer_haltestellen_kopieren()
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  anzahl integer;
begin
  if auth.uid() is null then
    raise exception 'Nicht angemeldet';
  end if;
  insert into public.planer_haltestellen (user_id, kuerzel, name, automatisch)
  select auth.uid(), kuerzel, name, true from public.haltestellen
  on conflict (user_id, kuerzel) do nothing;
  get diagnostics anzahl = row_count;
  return anzahl;
end;
$$;

revoke all on function public.planer_haltestellen_kopieren() from public, anon;
grant execute on function public.planer_haltestellen_kopieren() to authenticated;
