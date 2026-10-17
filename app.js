    // ============================================================
    //  ICON-BIBLIOTHEK — Strichzeichnungen statt Emoji, dynamisch erzeugtes Markup
    // ============================================================
    const ICONS = {
        home: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"></path><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"></path></svg>',
        camera: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8.5a2 2 0 0 1 2-2h1.2l1-1.5h7.6l1 1.5H19a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8.5Z"></path><circle cx="12" cy="13" r="3.1"></circle></svg>',
        calendar: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5.5" width="17" height="15" rx="2.5"></rect><path d="M3.5 9.5h17"></path><path d="M8 3.5v4M16 3.5v4"></path></svg>',
        chat: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5h16a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H9l-4 3.5V17.5H4A1.5 1.5 0 0 1 2.5 16V7A1.5 1.5 0 0 1 4 5.5Z"></path></svg>',
        more: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>',
        gear: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path><path d="M19.4 13.5a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V19.5a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H4.5a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.56-1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H10.6a1.7 1.7 0 0 0 1-1.55V4.5a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V10.6a1.7 1.7 0 0 0 1 .9h.19a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1Z"></path></svg>',
        chart: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="12" width="3.4" height="8" rx="1"></rect><rect x="10.3" y="7" width="3.4" height="13" rx="1"></rect><rect x="16.6" y="3.5" width="3.4" height="16.5" rx="1"></rect></svg>',
        history: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3.2 2"></path></svg>',
        fileText: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3.5h7l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V5A1.5 1.5 0 0 1 7 3.5Z"></path><path d="M14 3.5V8h4"></path><path d="M8.5 12.5h7M8.5 15.5h7M8.5 9.5h2"></path></svg>',
        mapPin: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.2 7-11.7A7 7 0 0 0 5 9.3C5 14.8 12 21 12 21Z"></path><circle cx="12" cy="9.3" r="2.4"></circle></svg>',
        calendarDownload: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5.5" width="17" height="15" rx="2.5"></rect><path d="M3.5 9.5h17"></path><path d="M12 12v5.5M9.7 15.3 12 17.6l2.3-2.3"></path></svg>',
        download: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11.5M8 11l4 4 4-4"></path><path d="M4.5 17.5v2A1.5 1.5 0 0 0 6 21h12a1.5 1.5 0 0 0 1.5-1.5v-2"></path></svg>',
        upload: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.5V9M8 13l4-4 4 4"></path><path d="M4.5 17.5v2A1.5 1.5 0 0 0 6 21h12a1.5 1.5 0 0 0 1.5-1.5v-2"></path></svg>',
        users: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.5" cy="8" r="3"></circle><path d="M2.8 19.5a5.7 5.7 0 0 1 11.4 0"></path><circle cx="17" cy="9" r="2.4"></circle><path d="M15 12.2c2.6.2 4.6 1.9 5.2 4.3"></path></svg>',
        chevronRight: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5.5 15.5 12 9 18.5"></path></svg>',
        chevronLeft: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5.5 8.5 12 15 18.5"></path></svg>',
        euro: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"></circle><path d="M14.6 9.3a3 3 0 0 0-2.4-1.1c-1.9 0-3.4 1.7-3.4 3.8s1.5 3.8 3.4 3.8a3 3 0 0 0 2.4-1.1M8 11h5.2M8 13.3h5.2"></path></svg>',
        trendUp: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 16.5 10 10l4 4 6.5-6.5"></path><path d="M15.5 7.5H20.5V12.5"></path></svg>',
        star: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5.5" width="17" height="15" rx="2.5"></rect><path d="M3.5 9.5h17"></path><path d="M12 12.3l1 2 2.2.2-1.7 1.5.5 2.1-2-1.2-2 1.2.5-2.1-1.7-1.5 2.2-.2Z"></path></svg>',
        trash: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path><path d="M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13"></path><path d="M10 11v6M14 11v6"></path></svg>',
        pencil: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20.5 4.6 17.2 15.8 6l3 3L7.6 20.2 4 20.5Z"></path><path d="M13.8 7.2l3 3"></path></svg>',
        lock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10.5" width="14" height="9.5" rx="2.2"></rect><path d="M8 10.5V7.8a4 3.9 0 0 1 8 0v2.7"></path></svg>',
        unlock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10.5" width="14" height="9.5" rx="2.2"></rect><path d="M8 10.5V7.8A4 3.6 0 0 1 15.5 6.4"></path></svg>',
        check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 6.5"></path></svg>',
        x: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12"></path><path d="M18 6 6 18"></path></svg>',
        hourglass: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 3.5h11M6.5 20.5h11"></path><path d="M7.5 3.5v3.2c0 1.9 1.7 3.5 4.5 5.3 2.8-1.8 4.5-3.4 4.5-5.3V3.5"></path><path d="M7.5 20.5v-3.2c0-1.9 1.7-3.5 4.5-5.3 2.8 1.8 4.5 3.4 4.5 5.3v3.2"></path></svg>',
        robot: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="8.5" width="15" height="11" rx="2.5"></rect><path d="M12 8.5V5"></path><circle cx="12" cy="3.7" r="1.1"></circle><circle cx="9" cy="14" r="1.3"></circle><circle cx="15" cy="14" r="1.3"></circle><path d="M2.5 12v4M21.5 12v4"></path></svg>',
        coffee: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 9.5h12v6a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-6Z"></path><path d="M16.5 11h1.7a2.3 2.3 0 0 1 0 4.6h-1.7"></path><path d="M8 6.5c0-1 1-1 1-2s-1-1-1-2M12 6.5c0-1 1-1 1-2s-1-1-1-2"></path></svg>',
        bus: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="4.5" width="17" height="12" rx="2.5"></rect><path d="M3.5 11h17"></path><path d="M7 19.5v1.5M17 19.5v1.5"></path><circle cx="7.5" cy="16.5" r="0.1"></circle><circle cx="16.5" cy="16.5" r="0.1"></circle></svg>',
        share: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12 20 4l-6 16-3-7-7-3Z"></path></svg>',
        play: '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M6 4.5v15l14-7.5Z"></path></svg>',
        stop: '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="5.5" y="5.5" width="13" height="13" rx="2"></rect></svg>',
        handoverOut: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 12h13M12.5 7l4.5 5-4.5 5"></path></svg>',
        handoverIn: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 12h-13M11.5 7l-4.5 5 4.5 5"></path></svg>',
        busStop: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v13"></path><path d="M12 4.5h6v6h-6"></path><path d="M8 21c0-2 1.8-3 4-3s4 1 4 3"></path></svg>',
        warning: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4 21.5 20H2.5Z"></path><path d="M12 10v4.3"></path><path d="M12 17.2h.01"></path></svg>',
        person: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8.3" r="3.6"></circle><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"></path></svg>',
        arrowDown: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v15.5M6.5 14l5.5 5.5 5.5-5.5"></path></svg>',
        arrowUp: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V4.5M6.5 10l5.5-5.5L17.5 10"></path></svg>',
        swap: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8h13.5M13.5 4.5 17 8l-3.5 3.5"></path><path d="M20.5 16h-13.5M10.5 12.5 7 16l3.5 3.5"></path></svg>'
    };

    document.getElementById('datum').valueAsDate = new Date();
    let aktuellesBerechnetesErgebnis = null;

    let aktuellesDatumAnzeige = new Date();
    let gespeicherteSchichten = {};

    // Tagesereignisse (z. B. Meldeformular, Mängelzettel): Foto + optionaler
    // Titel, einem Tag zugeordnet. ereignisTage merkt sich, an welchen Tagen
    // mind. ein Ereignis existiert (für die Markierung im Kalender).
    let ereignisTage = new Set();
    let ereignisAktuellesDatum = null;
    let ereignisListeAktuell = [];
    let ereignisAusstehendesFoto = null;

    // ============================================================
    //  SUPABASE: Verbindung und Anmeldung (freie Registrierung)
    // ============================================================
    let sb = null;                 // Supabase-Client
    let aktuellerNutzer = null;    // eingeloggter auth-User
    let authModus = 'login';       // 'login' oder 'registrieren'

    function zeigeMeldung(elId, text, typ) {
        const el = document.getElementById(elId);
        el.className = 'meldung ' + (typ || 'ok');
        el.innerText = text;
    }
    function versteckeMeldung(elId) {
        document.getElementById(elId).className = 'meldung';
    }


    const APP_ADRESSE = 'https://topbas79.github.io/planer';

    function setzeAppSichtbarkeit(zustand) {
        // zustand: 'login' | 'app'
        const appSichtbar = (zustand === 'app');
        document.getElementById('authScreen').classList.toggle('aktiv', !appSichtbar);
        document.body.classList.toggle('abgemeldet', !appSichtbar);
        document.querySelector('.tabbar').style.display = appSichtbar ? 'grid' : 'none';
        if (!appSichtbar) schliesseMehrPanel();

        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        if (appSichtbar) document.getElementById('page-start').classList.add('active');
    }



    function authModusSetzen(modus) {
        authModus = modus;
        authOberflaecheAnpassen();
        versteckeMeldung('authMeldung');
    }


    // Beschriftungen und Felder je nach Modus: 'login', 'registrieren' oder 'neuesPasswort' (nach dem Link aus der Reset-Mail)
    function authOberflaecheAnpassen() {
        const istReg = authModus === 'registrieren';
        const istNeu = authModus === 'neuesPasswort';
        document.getElementById('authSegment').style.display = istNeu ? 'none' : '';
        document.getElementById('authTabLogin').classList.toggle('aktiv', authModus === 'login');
        document.getElementById('authTabReg').classList.toggle('aktiv', istReg);
        document.getElementById('authHinweis').innerText = istNeu
            ? 'Vergib jetzt ein neues Passwort (mindestens 8 Zeichen).'
            : (istReg
                ? 'Erstelle ein Konto. Das Passwort braucht mindestens 8 Zeichen.'
                : 'Melde dich mit deiner E-Mail-Adresse an.');
        document.getElementById('authButton').innerText = istNeu ? 'Passwort speichern' : (istReg ? 'Konto erstellen' : 'Anmelden');
        document.getElementById('authVergessen').style.display = (authModus === 'login') ? '' : 'none';
        document.getElementById('authEmailGruppe').style.display = istNeu ? 'none' : '';
        document.getElementById('authPasswortLabel').innerText = istNeu ? 'Neues Passwort' : 'Passwort';
        document.getElementById('authPasswort').setAttribute('autocomplete', (istReg || istNeu) ? 'new-password' : 'current-password');
    }

    // Verständliche deutsche Kurzfassung eines Fehlers (Details stehen in der Konsole, nicht auf dem Bildschirm)
    function fehlerText(e) {
        console.warn('Fehler:', e);
        const t = String((e && (e.message || e.details)) || e || '');
        if (istNetzwerkFehler(e)) return 'Keine Internetverbindung.';
        if (/row-level security|permission denied|not allowed|forbidden/i.test(t)) return 'Dafür fehlt dir die Berechtigung.';
        if (/violates check constraint|value too long|too large/i.test(t)) return 'Die Eingabe ist zu lang oder ungültig.';
        if (/jwt|not authenticated|token/i.test(t)) return 'Bitte melde dich neu an.';
        if (/duplicate key|already exists/i.test(t)) return 'Diesen Eintrag gibt es schon.';
        return 'Das hat leider nicht geklappt. Bitte versuche es erneut.';
    }

    // Verständliche deutsche Meldungen statt der englischen Texte des Servers
    function authFehlerText(e) {
        const t = String((e && e.message) || e || '');
        if (istNetzwerkFehler(e)) return 'Keine Internetverbindung. Bitte später erneut versuchen.';
        if (/invalid login credentials/i.test(t)) return 'E-Mail oder Passwort ist falsch.';
        if (/email not confirmed/i.test(t)) return 'Bitte bestätige zuerst deine E-Mail-Adresse (Link in der E-Mail).';
        if (/already registered|already been registered/i.test(t)) return 'Für diese E-Mail gibt es schon ein Konto. Bitte melde dich an.';
        if (/at least|too short|weak|pwned|compromised|easy to guess/i.test(t)) return 'Das Passwort ist zu schwach oder zu kurz (mindestens 8 Zeichen, nicht zu einfach).';
        if (/rate limit|too many|security purposes/i.test(t)) return 'Zu viele Versuche. Bitte warte kurz und versuche es dann erneut.';
        if (/invalid.*email|valid email/i.test(t)) return 'Bitte eine gültige E-Mail-Adresse eingeben.';
        if (/same password|different from the old/i.test(t)) return 'Das neue Passwort muss sich vom alten unterscheiden.';
        return 'Das hat leider nicht geklappt. Bitte versuche es erneut.';
    }

    // "Passwort vergessen": schickt einen Link per E-Mail (Supabase), der zur App zurückführt
    async function passwortVergessen() {
        const email = document.getElementById('authEmail').value.trim();
        if (!email) {
            zeigeMeldung('authMeldung', 'Bitte oben deine E-Mail-Adresse eingeben und dann erneut auf „Passwort vergessen?" tippen.', 'fehler');
            return;
        }
        try {
            const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: APP_ADRESSE + '/' });
            if (error) throw error;
            // Bewusst dieselbe Antwort, egal ob es das Konto gibt (verrät nichts über vorhandene Konten)
            zeigeMeldung('authMeldung', 'Wenn es zu dieser E-Mail ein Konto gibt, wurde ein Link zum Zurücksetzen geschickt. Öffne ihn auf diesem Gerät.', 'ok');
        } catch (e) {
            zeigeMeldung('authMeldung', authFehlerText(e), 'fehler');
        }
    }

    let passwortWiederherstellung = false;   // true, solange man über den Reset-Link in der App ist

    function neuesPasswortZeigen() {
        passwortWiederherstellung = true;
        authModus = 'neuesPasswort';
        setzeAppSichtbarkeit('login');
        authOberflaecheAnpassen();
        versteckeMeldung('authMeldung');
    }


    async function authAbsenden() {
        const email = document.getElementById('authEmail').value.trim();
        const passwort = document.getElementById('authPasswort').value;
        const btn = document.getElementById('authButton');
        const beschriftung = () => authModus === 'neuesPasswort' ? 'Passwort speichern' : (authModus === 'registrieren' ? 'Konto erstellen' : 'Anmelden');

        if (authModus === 'neuesPasswort') {
            if (passwort.length < 8) {
                zeigeMeldung('authMeldung', 'Das Passwort braucht mindestens 8 Zeichen.', 'fehler');
                return;
            }
            btn.disabled = true;
            try {
                const { error } = await sb.auth.updateUser({ password: passwort });
                if (error) throw error;
                document.getElementById('authPasswort').value = '';
                passwortWiederherstellung = false;
                authModus = 'login';
                authOberflaecheAnpassen();
                history.replaceState(null, '', location.pathname);
                await nutzerLaden();
            } catch (e) {
                zeigeMeldung('authMeldung', authFehlerText(e), 'fehler');
            } finally {
                btn.disabled = false;
                btn.innerText = beschriftung();
            }
            return;
        }

        if (!email || !passwort) {
            zeigeMeldung('authMeldung', 'Bitte E-Mail und Passwort eingeben.', 'fehler');
            return;
        }
        if (authModus === 'registrieren' && passwort.length < 8) {
            zeigeMeldung('authMeldung', 'Das Passwort braucht mindestens 8 Zeichen.', 'fehler');
            return;
        }

        btn.disabled = true;
        btn.innerText = 'Bitte warten...';

        try {
            if (authModus === 'registrieren') {
                // Der Bestätigungslink in der E-Mail führt direkt zur App
                const { data, error } = await sb.auth.signUp({
                    email,
                    password: passwort,
                    options: { emailRedirectTo: APP_ADRESSE + '/', data: { app: 'planer' } }
                });
                if (error) throw error;
                // Gibt es zu dieser E-Mail schon ein Konto (z. B. aus der App Dienstplan), schickt Supabase keine Mail
                // und liefert ein Konto ohne "identities" zurück - das dem Nutzer ehrlich sagen.
                if (data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) {
                    authModusSetzen('login');
                    zeigeMeldung('authMeldung',
                        'Für diese E-Mail gibt es schon ein Konto (Planer und Dienstplan nutzen dasselbe Konto). Bitte melde dich mit diesem Passwort an – oder tippe auf „Passwort vergessen?".', 'fehler');
                    return;
                }
                if (!data.session) {
                    zeigeMeldung('authMeldung',
                        'Konto erstellt. Bitte bestätige jetzt die E-Mail, die dir geschickt wurde (auch im Spam-Ordner nachsehen), und melde dich danach an.', 'ok');
                    return;
                }
                await nutzerLaden();
            } else {
                const { error } = await sb.auth.signInWithPassword({ email, password: passwort });
                if (error) throw error;
                await nutzerLaden();
            }
        } catch (e) {
            zeigeMeldung('authMeldung', authFehlerText(e), 'fehler');
        } finally {
            btn.disabled = false;
            btn.innerText = beschriftung();
        }
    }


    async function abmelden() {
        if (!confirm('Wirklich abmelden?')) return;
        await sb.auth.signOut({ scope: 'local' });   // nur dieses Gerät - eine Anmeldung in Dienstplan bleibt bestehen
        await kvLeeren();
        // Nichts vom bisherigen Konto auf den Widgets zurücklassen
        const WB = widgetPlugin();
        clearTimeout(widgetSyncTimer);
        if (WB) { try { await WB.leeren(); } catch (_e) { /* Widgets sind dann eben noch alt */ } }
        Object.keys(bvgCache).forEach(k => delete bvgCache[k]);
        // Nichts vom bisherigen Konto auf dem Gerät zurücklassen
        try {
            ['planer_einstellungen', 'planer_einstellungen_von', 'planer_bundesland', 'planer_darstellung'].forEach(k => localStorage.removeItem(k));
        } catch (_e) { /* ohne Speicher: nichts zu löschen */ }
        ein = { ...EIN_STANDARD };
        aktuellerNutzer = null;
        gespeicherteSchichten = {};
        haltestellen = {};
        ereignisTage = new Set();
        darstellungAnwenden();
        authModus = 'login';
        authOberflaecheAnpassen();
        setzeAppSichtbarkeit('login');
    }


    // ---------- Kleiner lokaler Zwischenspeicher (IndexedDB) für den Betrieb ohne Netz ----------
    // Enthält nur die eigenen Daten dieses Geräts; wird beim Abmelden geleert.
    function kvOeffnen() {
        return new Promise((ok, fehler) => {
            try {
                const anfrage = indexedDB.open('planer-cache', 1);
                anfrage.onupgradeneeded = () => anfrage.result.createObjectStore('kv');
                anfrage.onsuccess = () => ok(anfrage.result);
                anfrage.onerror = () => fehler(anfrage.error);
            } catch (e) { fehler(e); }
        });
    }
    async function kvSpeichern(schluessel, wert) {
        try {
            const db = await kvOeffnen();
            await new Promise((ok, fehler) => {
                const t = db.transaction('kv', 'readwrite');
                t.objectStore('kv').put({ wert, zeit: Date.now() }, schluessel);
                t.oncomplete = ok; t.onerror = () => fehler(t.error);
            });
            db.close();
        } catch (e) { console.warn('Zwischenspeicher nicht verfügbar:', e); }
    }
    async function kvLesenMitZeit(schluessel) {
        try {
            const db = await kvOeffnen();
            const eintrag = await new Promise((ok, fehler) => {
                const a = db.transaction('kv', 'readonly').objectStore('kv').get(schluessel);
                a.onsuccess = () => ok(a.result); a.onerror = () => fehler(a.error);
            });
            db.close();
            return eintrag || null;
        } catch (e) { return null; }
    }
    async function kvLesen(schluessel) {
        const e = await kvLesenMitZeit(schluessel);
        return e ? e.wert : null;
    }
    async function kvLeeren() {
        try {
            const db = await kvOeffnen();
            await new Promise((ok) => {
                const t = db.transaction('kv', 'readwrite');
                t.objectStore('kv').clear();
                t.oncomplete = ok; t.onerror = ok;
            });
            db.close();
        } catch (e) { /* nichts zu leeren */ }
    }

    function istNetzwerkFehler(e) {
        const text = String((e && (e.message || e.details)) || e || '');
        return (typeof navigator !== 'undefined' && navigator.onLine === false) ||
            /failed to fetch|networkerror|network request|load failed|fetch failed|timeout|err_internet/i.test(text);
    }

    // Kleines Banner unter der Kopfzeile: "Kein Netz - gespeicherter Stand von ..." (null = ausblenden)
    function offlineHinweisZeigen(zeit) {
        const el = document.getElementById('offlineHinweis');
        if (!el) return;
        if (!zeit) { el.style.display = 'none'; return; }
        const t = new Date(zeit);
        el.innerText = `Kein Netz – gespeicherter Stand vom ${t.toLocaleDateString('de-DE')} ${t.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}`;
        el.style.display = 'block';
    }


    async function nutzerLaden() {
        const { data: { session } } = await sb.auth.getSession();
        if (!session) {
            setzeAppSichtbarkeit('login');
            return;
        }
        if (passwortWiederherstellung) { neuesPasswortZeigen(); return; }
        aktuellerNutzer = session.user;

        // Einstellungen (Verdienst, Name, Bundesland ...) aus der Cloud; ohne Netz gelten die zuletzt gespeicherten
        await einstellungenAusCloud();
        setzeAppSichtbarkeit('app');
        tarifListenFuellen('einrEG', 'einrStufe');
        tarifListenFuellen('setEG', 'setStufe');
        einstellungenLaden();

        await haltestellenLaden();
        await haltestellenErsteListe();
        await schichtenLaden();
        updatePruefen();

        // Beim ersten Mal nur "Verdienst einrichten", danach die App
        if (!ein.eingerichtetAm) {
            wechselSeite('einrichten');
        } else {
            tarifErinnerungPruefen();
            widgetTagPruefen();
        }
    }


    async function schichtenLaden() {
        if (!sb || !aktuellerNutzer) return;
        try {
            const { data, error } = await sb
                .from('planer_schichten').select('datum, daten').eq('user_id', aktuellerNutzer.id);
            if (error) throw error;

            gespeicherteSchichten = {};
            (data || []).forEach(zeile => { gespeicherteSchichten[zeile.datum] = zeile.daten; });
            // Eigene Schichten für den Betrieb ohne Netz merken
            kvSpeichern('schichten_' + aktuellerNutzer.id, gespeicherteSchichten);
            offlineHinweisZeigen(null);
            renderCalendar();
            startseiteAktualisieren();   // sonst bleibt die Startseite nach dem Start bei den Platzhaltern
            widgetSyncPlanen();
            ereignisTageLaden();
        } catch (e) {
            console.error('Laden fehlgeschlagen:', e);
            const zwischenspeicher = istNetzwerkFehler(e)
                ? await kvLesenMitZeit('schichten_' + aktuellerNutzer.id) : null;
            if (zwischenspeicher) {
                gespeicherteSchichten = zwischenspeicher.wert || {};
                offlineHinweisZeigen(zwischenspeicher.zeit);
                renderCalendar();
                startseiteAktualisieren();
                widgetSyncPlanen();
                return;
            }
            alert(istNetzwerkFehler(e)
                ? 'Keine Internetverbindung. Die Schichten können gerade nicht geladen werden.'
                : 'Schichten konnten nicht geladen werden. Bitte später erneut versuchen.');
        }
    }

    // ============================================================
    //  FEIERTAGE (automatisch je Bundesland berechnet, ohne Internet)
    // ============================================================

    // Gaußsche Osterformel -> Ostersonntag
    function ostersonntag(jahr) {
        const a = jahr % 19, b = Math.floor(jahr / 100), c = jahr % 100;
        const d = Math.floor(b / 4), e = b % 4;
        const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3);
        const h = (19 * a + b - d - g + 15) % 30;
        const i = Math.floor(c / 4), k = c % 4;
        const l = (32 + 2 * e + 2 * i - h - k) % 7;
        const m = Math.floor((a + 11 * h + 22 * l) / 451);
        const monat = Math.floor((h + l - 7 * m + 114) / 31);
        const tag = ((h + l - 7 * m + 114) % 31) + 1;
        return new Date(jahr, monat - 1, tag);
    }

    function tageVersetzen(datum, tage) {
        const d = new Date(datum.getTime());
        d.setDate(d.getDate() + tage);
        return d;
    }

    function alsDatumsText(d) {
        const pad = (n) => n < 10 ? '0' + n : n;
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    }

    // Buß- und Bettag: Mittwoch vor dem 23. November
    function bussUndBettag(jahr) {
        const d = new Date(jahr, 10, 23);
        do { d.setDate(d.getDate() - 1); } while (d.getDay() !== 3);
        return d;
    }

    const feiertagsCache = {};

    function feiertageFuer(jahr, land) {
        const schluessel = jahr + '_' + land;
        if (feiertagsCache[schluessel]) return feiertagsCache[schluessel];

        const o = ostersonntag(jahr);
        const liste = {};
        const add = (datum, name, art) => {
            liste[alsDatumsText(datum)] = { name, art: art || 'feiertag' };
        };

        // Bundesweit
        add(new Date(jahr, 0, 1), 'Neujahr');
        add(tageVersetzen(o, -2), 'Karfreitag');
        add(tageVersetzen(o, 1), 'Ostermontag');
        add(new Date(jahr, 4, 1), 'Tag der Arbeit');
        add(tageVersetzen(o, 39), 'Christi Himmelfahrt');
        add(tageVersetzen(o, 50), 'Pfingstmontag');
        add(new Date(jahr, 9, 3), 'Tag der Deutschen Einheit');
        add(new Date(jahr, 11, 25), '1. Weihnachtstag');
        add(new Date(jahr, 11, 26), '2. Weihnachtstag');

        if (['BW', 'BY', 'ST'].includes(land)) add(new Date(jahr, 0, 6), 'Heilige Drei Könige');
        if (['BE', 'MV'].includes(land)) add(new Date(jahr, 2, 8), 'Internationaler Frauentag');
        if (['BW', 'BY', 'HE', 'NW', 'RP', 'SL'].includes(land)) add(tageVersetzen(o, 60), 'Fronleichnam');
        if (land === 'SL') add(new Date(jahr, 7, 15), 'Mariä Himmelfahrt');
        if (land === 'TH') add(new Date(jahr, 8, 20), 'Weltkindertag');
        if (['BB', 'HB', 'HH', 'MV', 'NI', 'SN', 'ST', 'SH', 'TH'].includes(land)) add(new Date(jahr, 9, 31), 'Reformationstag');
        if (['BW', 'BY', 'NW', 'RP', 'SL'].includes(land)) add(new Date(jahr, 10, 1), 'Allerheiligen');
        if (land === 'SN') add(bussUndBettag(jahr), 'Buß- und Bettag');

        // Sondertage (+40%)
        add(tageVersetzen(o, -1), 'Karsamstag', 'sonderstichtag');
        add(tageVersetzen(o, 48), 'Pfingstsamstag', 'sonderstichtag');
        add(new Date(jahr, 11, 24), 'Heiligabend', 'sonderstichtag');
        add(new Date(jahr, 11, 31), 'Silvester', 'sonderstichtag');

        feiertagsCache[schluessel] = liste;
        return liste;
    }

    // Kurzform des Feiertagsnamens für die kleine Kalenderkachel
    function feiertagKurz(name) {
        const kurz = {
            'Neujahr': 'Neujahr',
            'Karfreitag': 'Karfr.',
            'Karsamstag': 'Karsa.',
            'Ostermontag': 'Ostermo.',
            'Tag der Arbeit': '1. Mai',
            'Internationaler Frauentag': 'Frauentag',
            'Christi Himmelfahrt': 'Himmelf.',
            'Pfingstsamstag': 'Pfingstsa.',
            'Pfingstmontag': 'Pfingstmo.',
            'Tag der Deutschen Einheit': 'Einheit',
            'Heiligabend': 'Heiligab.',
            '1. Weihnachtstag': '1. Weihn.',
            '2. Weihnachtstag': '2. Weihn.',
            'Silvester': 'Silvester'
        };
        return kurz[name] || name;
    }

    function feiertagAm(datumStr) {
        if (!datumStr) return null;
        const jahr = Number(datumStr.slice(0, 4));
        const land = document.getElementById('bundesland').value;
        return feiertageFuer(jahr, land)[datumStr] || null;
    }

    function bundeslandGespeichert() {
        localStorage.setItem('planer_bundesland', document.getElementById('bundesland').value);
    }

    // Setzt die Feiertagsauswahl passend zum gewählten Datum
    function feiertagPruefen() {
        const datumStr = document.getElementById('datum').value;
        const hinweisEl = document.getElementById('feiertagHinweis');
        const auswahlEl = document.getElementById('feiertagsArt');
        const treffer = feiertagAm(datumStr);

        if (treffer) {
            auswahlEl.value = treffer.art;
            const zuschlag = treffer.art === 'feiertag' ? '+135%' : '+40%';
            hinweisEl.innerHTML = `<span style="display:flex; align-items:flex-start; gap:6px;">${ICONS.star} <span><b>${treffer.name}</b> – automatisch als ${zuschlag} gesetzt. Du kannst es oben überschreiben.</span></span>`;
        } else {
            // nur zurücksetzen, wenn vorher automatisch gesetzt war
            if (auswahlEl.dataset.autoGesetzt === 'ja') auswahlEl.value = 'normal';
            hinweisEl.innerText = '';
        }
        auswahlEl.dataset.autoGesetzt = treffer ? 'ja' : 'nein';
    }

    // Bundesland aus dem Speicher laden und auf Datumsänderungen reagieren
    (function feiertageInitialisieren() {
        document.getElementById('datum').addEventListener('change', feiertagPruefen);
        feiertagPruefen();
    })();


    // ============================================================
    //  DIENSTLISTE (aus der Jahresübersicht) + PDF-Export
    // ============================================================
    let listeDatum = new Date();

    const MONATSNAMEN = ["Januar","Februar","März","April","Mai","Juni",
                         "Juli","August","September","Oktober","November","Dezember"];

    function listeOeffnen(jahr) {
        if (jahr) listeDatum = new Date(jahr, aktuellesDatumAnzeige.getMonth(), 1);
        wechselSeite('liste');
        listeRendern();
    }

    function listeMonatWechseln(delta) {
        listeDatum.setMonth(listeDatum.getMonth() + delta);
        listeRendern();
    }

    // Volle Dauer eines Dienstes von Anfang bis Ende in Minuten (inkl. Pausen,
    // NICHT die bezahlte Arbeitszeit — nur für die Anzeige in der Dienstliste)
    function schichtDauerMinuten(datumStr, startStr, endeStr) {
        if (!datumStr || !startStr || !endeStr) return 0;
        const [jahr, monat, tag] = datumStr.split('-').map(Number);
        const [hStart, mStart] = startStr.split(':').map(Number);
        const [hEnde, mEnde] = endeStr.split(':').map(Number);
        const start = new Date(jahr, monat - 1, tag, hStart, mStart);
        const ende = new Date(jahr, monat - 1, tag, hEnde, mEnde);
        if (ende <= start) ende.setDate(ende.getDate() + 1);
        return (ende - start) / 60000;
    }

    // Minuten als "8h 25m"
    function stundenMinutenKurz(minuten) {
        const m = Math.max(0, Math.round(minuten));
        return `${Math.floor(m / 60)}h ${m % 60}m`;
    }

    // Anzeigename fuer einen Ort: Klartext-Name, sonst Kuerzel als Rueckfall
    // (Variante-B-Dienstzettel liefern nur ein Kuerzel, siehe dienstplan-lesen).
    // Zentral definiert, damit Dienstliste und Wegstrecken-Buch denselben
    // Ort immer gleich benennen - sonst findet das Wegstrecken-Buch einen
    // per Kuerzel angezeigten Ort nicht wieder.
    function ortAnzeige(name, kuerzel) {
        const n = (name || '').trim(), kz = (kuerzel || '').trim();
        if (!n && !kz) return '';
        if (!n) return kz;
        return n;
    }

    // Sammelt die Schichten eines Monats als Zeilen: Datum, Beginn, Ende
    function listeZeilen() {
        const pad = (n) => n < 10 ? '0' + n : n;
        const praefix = `${listeDatum.getFullYear()}-${pad(listeDatum.getMonth() + 1)}`;
        return listeZeilenFuerPraefix(praefix);
    }

    // Wie listeZeilen(), aber für einen beliebigen Datums-Präfix - mit dem
    // ganzen Jahr ("2026") statt Jahr-Monat für den Jahres-Export.
    function listeZeilenFuerPraefix(praefix) {
        return Object.keys(gespeicherteSchichten)
            .filter(k => k.startsWith(praefix) && !gespeicherteSchichten[k].typ)
            .sort()
            .map(k => {
                const s = gespeicherteSchichten[k];
                const d = s.details || {};
                const linie = (l, u) => {
                    const teile = [];
                    if (l) teile.push(String(l));
                    if (u) teile.push('Umlauf ' + u);
                    return teile.join(' / ');
                };
                return {
                    datum: k,
                    datumKurz: k.split('-').reverse().join('.'),
                    dienst: s.dienstnummer || '',
                    beginnZeit: s.startStr || '',
                    beginnOrt: ortAnzeige(d.beginn_ort, d.beginn_ort_kuerzel),
                    beginnLinie: linie(d.beginn_linie, d.beginn_umlauf),
                    endeZeit: (s.endeStr || '') + (d.ende_folgetag ? '+' : ''),
                    endeOrt: ortAnzeige(d.ende_ort, d.ende_ort_kuerzel),
                    endeLinie: linie(d.ende_linie, d.ende_umlauf),
                    dauerMinuten: schichtDauerMinuten(k, s.startStr, s.endeIst || s.endeStr),
                    verdienst: s.zuschlagSumme || 0
                };
            })
            .map(z => ({
                ...z,
                // Abwesenheit von der Wohnung = Anfahrt + Dienst + Rückfahrt
                abwesenheitMinuten: ein.fahrzeitMin + z.dauerMinuten + ein.fahrzeitMin,
                fahrzeitAbweichend: false
            }));
    }


    function listeRendern() {
        document.getElementById('listeTitel').innerText =
            `${MONATSNAMEN[listeDatum.getMonth()]} ${listeDatum.getFullYear()}`;

        const zeilen = listeZeilen();
        const el = document.getElementById('listeInhalt');

        if (!zeilen.length) {
            el.innerHTML = '<p class="seiten-hinweis">Für diesen Monat sind keine Dienste gespeichert.</p>';
            return;
        }

        const pad = (n) => n < 10 ? '0' + n : n;
        const z = monatsZahlen(`${listeDatum.getFullYear()}-${pad(listeDatum.getMonth() + 1)}`);
        const wochentag = (datum) => WOCHENTAGE_KURZ[new Date(datum + 'T12:00:00').getDay()];

        el.innerHTML = `<div class="liste-summe">
                <small>${z.anzahl} ${z.anzahl === 1 ? 'Dienst' : 'Dienste'} · ${Math.floor(z.minuten / 60)}:${String(Math.round(z.minuten) % 60).padStart(2, '0')} Std.</small>
                <b>${euroText(z.brutto)}</b>
            </div>` + zeilen.map(r => `
            <div class="dienst-karte klickbar" role="button" tabindex="0" onclick="dienstVerlaufOeffnen('${r.datum}')">
                <div class="dienst-kopf">
                    <span class="dk-tag">${wochentag(r.datum)} ${sicher(r.datumKurz.slice(0, 2))}.</span>
                    <span>${r.dienst ? 'Dienst ' + sicher(r.dienst) : ''}</span>
                    <span class="dk-dauer">${sicher(stundenMinutenKurz(r.dauerMinuten))}</span>
                </div>
                <div class="dienst-zeile">
                    <span class="dienst-marke">Beginn</span>
                    <span>${sicher(r.beginnZeit)} · ${sicher(r.beginnOrt || '–')}${r.beginnLinie ? '<br><small>' + sicher(r.beginnLinie) + '</small>' : ''}</span>
                </div>
                <div class="dienst-zeile">
                    <span class="dienst-marke">Ende</span>
                    <span>${sicher(r.endeZeit)} · ${sicher(r.endeOrt || '–')}${r.endeLinie ? '<br><small>' + sicher(r.endeLinie) + '</small>' : ''}</span>
                </div>
            </div>`).join('');
    }

    function listeAlsPdf() {
        const zeilen = listeZeilen();
        if (!zeilen.length) {
            alert('Für diesen Monat sind keine Dienste gespeichert.');
            return;
        }
        if (!window.jspdf) {
            alert('PDF-Bibliothek konnte nicht geladen werden. Bitte mit Internetverbindung erneut versuchen.');
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ orientation: 'landscape' });
        const monat = `${MONATSNAMEN[listeDatum.getMonth()]} ${listeDatum.getFullYear()}`;
        const name = (ein.name || '').trim();

        doc.setFontSize(15);
        doc.text(`Dienstübersicht ${monat}`, 14, 16);
        if (name) {
            doc.setFontSize(10);
            doc.setTextColor(110);
            doc.text(name, 14, 22);
            doc.setTextColor(0);
        }

        const kopf = [['Datum', 'Dienst', 'Beginn', 'Ort', 'Linie', 'Ende', 'Ort', 'Linie', 'Dauer']];
        const koerper = zeilen.map(z => [
            z.datumKurz, z.dienst,
            z.beginnZeit, z.beginnOrt, z.beginnLinie,
            z.endeZeit, z.endeOrt, z.endeLinie,
            stundenMinutenKurz(z.dauerMinuten)
        ]);

        const summeMinuten = zeilen.reduce((a, z) => a + z.dauerMinuten, 0);

        doc.autoTable({
            head: kopf,
            body: koerper,
            startY: name ? 27 : 22,
            styles: { fontSize: 8, cellPadding: 2 },
            headStyles: { fillColor: [37, 99, 235], textColor: 255 },
            alternateRowStyles: { fillColor: [246, 248, 252] },
            columnStyles: {
                0: { cellWidth: 20 }, 1: { cellWidth: 16 },
                2: { cellWidth: 16 }, 3: { cellWidth: 48 }, 4: { cellWidth: 26 },
                5: { cellWidth: 16 }, 6: { cellWidth: 48 }, 7: { cellWidth: 26 },
                8: { cellWidth: 15, halign: 'right' }
            },
            didDrawPage: (daten) => {
                const y = daten.cursor.y + 8;
                doc.setFontSize(10);
                doc.text(
                    `${zeilen.length} Dienste · ${stundenMinutenKurz(summeMinuten)}`,
                    14, y
                );
            }
        });

        const pad = (n) => n < 10 ? '0' + n : n;
        dateiSpeichernOderTeilen(`Dienstuebersicht_${listeDatum.getFullYear()}-${pad(listeDatum.getMonth() + 1)}.pdf`, doc.output('blob'));
    }

    // Datei speichern: im Browser wie bisher per Download-Link. In der nativen App gibt es keinen Download-Ordner -
    // dort wird die Datei ins App-eigene Cache-Verzeichnis geschrieben und direkt der native Teilen-Dialog
    // geoeffnet (speichern/WhatsApp/Drucken uebernimmt der Nutzer dort).
    async function dateiSpeichernOderTeilen(dateiname, blob) {
        if (!capacitorAktiv()) {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.setAttribute('download', dateiname);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return;
        }
        try {
            const Filesystem = window.Capacitor.Plugins.Filesystem;
            const Share = window.Capacitor.Plugins.Share;
            const base64 = await blobZuBase64(blob);
            const geschrieben = await Filesystem.writeFile({ path: dateiname, data: base64, directory: 'CACHE' });
            await Share.share({ title: dateiname, url: geschrieben.uri });
        } catch (e) {
            if (e && e.message === 'Share canceled') return;   // Nutzer hat den Teilen-Dialog abgebrochen
            console.log('Datei speichern/teilen fehlgeschlagen:', e);
            alert('Datei konnte nicht erstellt werden.');
        }
    }

    // ============================================================
    //  VERPFLEGUNGSMEHRAUFWAND — PDF-Exporte für die Steuererklärung
    // ============================================================
    // Werte nach § 9 Abs. 4a EStG (Stand 2026) bzw. Reisekosten-Kilometersatz Pkw.
    // Bitte vor dem Steuerjahr-Export einmal gegenprüfen, ob sich die Sätze geändert haben.
    const VERPFLEGUNGSPAUSCHALE_EURO = 14;
    const VERPFLEGUNGSPAUSCHALE_SCHWELLE_MIN = 8 * 60;
    const KILOMETERPAUSCHALE_EURO_PRO_KM = 0.30;

    function listeAlsPdfVerpflegung() {
        const zeilen = listeZeilen().filter(z => z.abwesenheitMinuten > VERPFLEGUNGSPAUSCHALE_SCHWELLE_MIN);
        if (!zeilen.length) {
            alert('Für diesen Monat gibt es keine Dienste über 8 Stunden.');
            return;
        }
        if (!window.jspdf) {
            alert('PDF-Bibliothek konnte nicht geladen werden. Bitte mit Internetverbindung erneut versuchen.');
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const monat = `${MONATSNAMEN[listeDatum.getMonth()]} ${listeDatum.getFullYear()}`;
        const name = (ein.name || '').trim();
        const satzText = VERPFLEGUNGSPAUSCHALE_EURO.toFixed(2).replace('.', ',') + ' €';

        doc.setFontSize(15);
        doc.text(`Verpflegungsmehraufwand ${monat}`, 14, 16);
        let y = 22;
        if (name) {
            doc.setFontSize(10);
            doc.setTextColor(110);
            doc.text(name, 14, y);
            doc.setTextColor(0);
            y += 6;
        }
        doc.setFontSize(9);
        doc.setTextColor(110);
        doc.text(`Abwesenheit jeweils mehr als 8 Stunden — Pauschale ${satzText} pro Tag`, 14, y);
        y += 5;
        const fahrzeitHinweis = `Abwesenheit einschließlich Anfahrt und Rückfahrt, pauschal ${ein.fahrzeitMin} Minuten je Richtung.`;
        doc.text(fahrzeitHinweis, 14, y);
        doc.setTextColor(0);

        const kopf = [['Datum', 'Dienst', 'Beginn', 'Ende', 'Dauer', 'Abwesenheit', 'Pauschale']];
        const koerper = zeilen.map(z => [
            z.datumKurz, z.dienst, z.beginnZeit, z.endeZeit,
            stundenMinutenKurz(z.dauerMinuten), stundenMinutenKurz(z.abwesenheitMinuten), satzText
        ]);

        doc.autoTable({
            head: kopf,
            body: koerper,
            startY: y + 6,
            styles: { fontSize: 9, cellPadding: 2.5 },
            headStyles: { fillColor: [37, 99, 235], textColor: 255 },
            alternateRowStyles: { fillColor: [246, 248, 252] },
            columnStyles: { 5: { halign: 'right' }, 6: { halign: 'right' } },
            didDrawPage: (daten) => {
                const fussY = daten.cursor.y + 8;
                doc.setFontSize(10);
                doc.text(
                    `${zeilen.length} Tage × ${satzText} = ` +
                    `${(zeilen.length * VERPFLEGUNGSPAUSCHALE_EURO).toFixed(2).replace('.', ',')} €`,
                    14, fussY
                );
            }
        });

        const pad = (n) => n < 10 ? '0' + n : n;
        dateiSpeichernOderTeilen(`Verpflegungsmehraufwand_${listeDatum.getFullYear()}-${pad(listeDatum.getMonth() + 1)}.pdf`, doc.output('blob'));
    }

    // Wie listeAlsPdfVerpflegung(), aber über das ganze Jahr von listeDatum
    // statt nur den aktuell angezeigten Monat - für den Steuerberater am
    // Jahresende, eine PDF statt zwölf einzelner Monats-Exporte.
    function listeAlsPdfVerpflegungJahr() {
        const jahr = listeDatum.getFullYear();
        const zeilen = listeZeilenFuerPraefix(String(jahr)).filter(z => z.abwesenheitMinuten > VERPFLEGUNGSPAUSCHALE_SCHWELLE_MIN);
        if (!zeilen.length) {
            alert(`Für ${jahr} gibt es keine Dienste über 8 Stunden.`);
            return;
        }
        if (!window.jspdf) {
            alert('PDF-Bibliothek konnte nicht geladen werden. Bitte mit Internetverbindung erneut versuchen.');
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const name = (ein.name || '').trim();
        const satzText = VERPFLEGUNGSPAUSCHALE_EURO.toFixed(2).replace('.', ',') + ' €';

        doc.setFontSize(15);
        doc.text(`Verpflegungsmehraufwand ${jahr}`, 14, 16);
        let y = 22;
        if (name) {
            doc.setFontSize(10);
            doc.setTextColor(110);
            doc.text(name, 14, y);
            doc.setTextColor(0);
            y += 6;
        }
        doc.setFontSize(9);
        doc.setTextColor(110);
        doc.text(`Abwesenheit jeweils mehr als 8 Stunden — Pauschale ${satzText} pro Tag`, 14, y);
        y += 5;
        const fahrzeitHinweis = `Abwesenheit einschließlich Anfahrt und Rückfahrt, pauschal ${ein.fahrzeitMin} Minuten je Richtung.`;
        doc.text(fahrzeitHinweis, 14, y);
        doc.setTextColor(0);

        const kopf = [['Datum', 'Dienst', 'Beginn', 'Ende', 'Dauer', 'Abwesenheit', 'Pauschale']];
        const koerper = zeilen.map(z => [
            z.datumKurz, z.dienst, z.beginnZeit, z.endeZeit,
            stundenMinutenKurz(z.dauerMinuten), stundenMinutenKurz(z.abwesenheitMinuten), satzText
        ]);

        doc.autoTable({
            head: kopf,
            body: koerper,
            startY: y + 6,
            styles: { fontSize: 9, cellPadding: 2.5 },
            headStyles: { fillColor: [37, 99, 235], textColor: 255 },
            alternateRowStyles: { fillColor: [246, 248, 252] },
            columnStyles: { 5: { halign: 'right' }, 6: { halign: 'right' } },
            didDrawPage: (daten) => {
                const fussY = daten.cursor.y + 8;
                doc.setFontSize(10);
                doc.text(
                    `${zeilen.length} Tage × ${satzText} = ` +
                    `${(zeilen.length * VERPFLEGUNGSPAUSCHALE_EURO).toFixed(2).replace('.', ',')} €`,
                    14, fussY
                );
            }
        });

        dateiSpeichernOderTeilen(`Verpflegungsmehraufwand_${jahr}.pdf`, doc.output('blob'));
    }




    // ============================================================
    //  EINSTELLUNGEN (Verdienstwerte aus der Abrechnung)
    // ============================================================
    const EIN_STANDARD = {
        monatsentgelt: 3365.46, unregelm: 255.00, dienstklasse: 80.00, zz: 19.85,
        nacht: 25, samstag: 20, sonntag: 25, feiertag: 135, sonder: 40, mehrarbeit: 30,
        nachtVon: 21, nachtBis: 6, samstagAb: 13,
        wochenstunden: 37.5, entgeltgruppe: '', stufe: '', tarifStand: '', eingerichtetAm: '',
        fahrzeitMin: 30,
        name: '', bundesland: 'BE', darstellung: 'auto', haltestellenKopiert: false
    };
    let ein = { ...EIN_STANDARD };


    const BUNDESLAENDER = [
        ['BW', 'Baden-Württemberg'], ['BY', 'Bayern'], ['BE', 'Berlin'], ['BB', 'Brandenburg'], ['HB', 'Bremen'],
        ['HH', 'Hamburg'], ['HE', 'Hessen'], ['MV', 'Mecklenburg-Vorpommern'], ['NI', 'Niedersachsen'],
        ['NW', 'Nordrhein-Westfalen'], ['RP', 'Rheinland-Pfalz'], ['SL', 'Saarland'], ['SN', 'Sachsen'],
        ['ST', 'Sachsen-Anhalt'], ['SH', 'Schleswig-Holstein'], ['TH', 'Thüringen']
    ];

    function einstellungenLaden() {
        try {
            const roh = localStorage.getItem('planer_einstellungen');
            if (roh) ein = { ...EIN_STANDARD, ...JSON.parse(roh) };
        } catch (e) { ein = { ...EIN_STANDARD }; }

        const setze = (id, wert) => { const el = document.getElementById(id); if (el) el.value = wert; };
        setze('einMonatsentgelt', ein.monatsentgelt);
        setze('einWochenstunden', ein.wochenstunden);
        setze('einUnregelm', ein.unregelm);
        setze('einDienstklasse', ein.dienstklasse);
        setze('einZZ', ein.zz);
        setze('einNacht', ein.nacht);
        setze('einSamstag', ein.samstag);
        setze('einSonntag', ein.sonntag);
        setze('einFeiertag', ein.feiertag);
        setze('einSonder', ein.sonder);
        setze('einMehrarbeit', ein.mehrarbeit);
        setze('einNachtVon', ein.nachtVon);
        setze('einNachtBis', ein.nachtBis);
        setze('einSamstagAb', ein.samstagAb);
        setze('einFahrzeit', ein.fahrzeitMin);
        setze('einName', ein.name || '');

        const land = document.getElementById('einBundesland');
        if (land) {
            if (!land.options.length) {
                land.innerHTML = BUNDESLAENDER.map(([k, n]) => `<option value="${k}">${n}</option>`).join('');
            }
            land.value = ein.bundesland || 'BE';
        }
        setze('bundesland', ein.bundesland || 'BE');   // die Feiertags-Berechnung liest dieses Feld

        tarifListenFuellen('setEG', 'setStufe');
        if (ein.entgeltgruppe) setze('setEG', ein.entgeltgruppe);
        if (ein.stufe) setze('setStufe', ein.stufe);
        const hinweis = document.getElementById('tarifHinweis');
        if (hinweis && ein.entgeltgruppe) {
            hinweis.innerText = `Aus der TV-N-Berlin-Tabelle: EG ${ein.entgeltgruppe} Stufe ${ein.stufe}` +
                (ein.tarifStand ? ` · gültig ${ein.tarifStand}` : '');
        }

        // Hell-/Dunkelmodus: die Wahl aus den Einstellungen gilt (auch auf einem neuen Gerät)
        try { localStorage.setItem('planer_darstellung', ein.darstellung || 'auto'); } catch (_e) { /* ohne Speicher */ }
        darstellungAnwenden();
    }


    function einstellungenSpeichern() {
        const hole = (id, standard) => {
            const w = parseFloat(document.getElementById(id).value);
            return isNaN(w) ? standard : w;
        };
        ein = {
            monatsentgelt: hole('einMonatsentgelt', EIN_STANDARD.monatsentgelt),
            wochenstunden: hole('einWochenstunden', EIN_STANDARD.wochenstunden),
            unregelm: hole('einUnregelm', EIN_STANDARD.unregelm),
            dienstklasse: hole('einDienstklasse', EIN_STANDARD.dienstklasse),
            zz: hole('einZZ', EIN_STANDARD.zz),
            nacht: hole('einNacht', EIN_STANDARD.nacht),
            samstag: hole('einSamstag', EIN_STANDARD.samstag),
            sonntag: hole('einSonntag', EIN_STANDARD.sonntag),
            feiertag: hole('einFeiertag', EIN_STANDARD.feiertag),
            sonder: hole('einSonder', EIN_STANDARD.sonder),
            mehrarbeit: hole('einMehrarbeit', EIN_STANDARD.mehrarbeit),
            nachtVon: hole('einNachtVon', EIN_STANDARD.nachtVon),
            nachtBis: hole('einNachtBis', EIN_STANDARD.nachtBis),
            samstagAb: hole('einSamstagAb', EIN_STANDARD.samstagAb),
            fahrzeitMin: hole('einFahrzeit', EIN_STANDARD.fahrzeitMin),
            name: document.getElementById('einName').value.trim().slice(0, 80),
            bundesland: document.getElementById('einBundesland').value || 'BE',
            darstellung: darstellungLesen(),
            haltestellenKopiert: !!ein.haltestellenKopiert,
            // Tarif-Angaben unveraendert uebernehmen
            entgeltgruppe: ein.entgeltgruppe || '',
            stufe: ein.stufe || '',
            tarifStand: ein.tarifStand || '',
            eingerichtetAm: ein.eingerichtetAm || new Date().toISOString()
        };
        document.getElementById('bundesland').value = ein.bundesland;
        einstellungenSpeichernLocal();
        zeigeMeldung('einMeldung', 'Gespeichert.', 'ok');
        renderCalendar();
        startseiteAktualisieren();
        feiertagPruefen();
    }



    function einstellungenSpeichernLocal() {
        try {
            localStorage.setItem('planer_einstellungen', JSON.stringify(ein));
            // Wem gehören die gespeicherten Einstellungen? (Sicherung, falls auf demselben Gerät ein anderes Konto anmeldet)
            if (aktuellerNutzer) localStorage.setItem('planer_einstellungen_von', aktuellerNutzer.id);
        } catch (_e) { /* ohne Speicher: nur Cloud */ }
        einstellungenCloudSpeichern();
    }

    // Sichert die Einstellungen zusätzlich in der Cloud (Tabelle planer_einstellungen),
    // damit sie ein Löschen der Browserdaten und einen Gerätewechsel überstehen.
    async function einstellungenCloudSpeichern() {
        if (!sb || !aktuellerNutzer) return;
        try {
            const { error } = await sb.from('planer_einstellungen').upsert(
                { user_id: aktuellerNutzer.id, daten: ein, aktualisiert_am: new Date().toISOString() },
                { onConflict: 'user_id' });
            if (error) throw error;
        } catch (e) { console.warn('Einstellungen nicht in der Cloud gesichert:', e); }
    }


    // Beim Anmelden: Cloud-Stand übernehmen; gibt es dort noch keinen (erstes Mal auf diesem Konto), den lokalen hochladen.
    async function einstellungenAusCloud() {
        if (!sb || !aktuellerNutzer) return;
        try {
            // Gehören die lokal gespeicherten Einstellungen einem anderen Konto? Dann verwerfen, nie weitergeben.
            const besitzer = localStorage.getItem('planer_einstellungen_von');
            if (besitzer !== aktuellerNutzer.id) {
                localStorage.removeItem('planer_einstellungen');
                localStorage.removeItem('planer_einstellungen_von');
                ein = { ...EIN_STANDARD, darstellung: darstellungLesen() };
            }
        } catch (_e) { /* ohne Speicher */ }
        try {
            const { data, error } = await sb.from('planer_einstellungen')
                .select('daten').eq('user_id', aktuellerNutzer.id).maybeSingle();
            if (error) throw error;
            if (data && data.daten && Object.keys(data.daten).length) {
                try {
                    localStorage.setItem('planer_einstellungen', JSON.stringify(data.daten));
                    localStorage.setItem('planer_einstellungen_von', aktuellerNutzer.id);
                } catch (_e) { /* ohne Speicher */ }
            } else if (ein && ein.eingerichtetAm) {
                einstellungenSpeichernLocal();
            }
        } catch (e) { console.warn('Einstellungen nicht aus der Cloud geladen:', e); }
    }

    // ============================================================
    //  PAUSENLISTE
    // ============================================================
    let pausenEintraege = [];   // {von, bis, unbezahlt, ausgefallen}

    const PAUSENREGEL_HINWEIS = {
        B30: '30 Min. unbezahlt',
        sechste: 'Pausen über den Dienst verteilt, jede mindestens 10 Min.',
        reserve: 'Alles bezahlt'
    };

    function pausenregelSetzen(regel) {
        document.getElementById('pausenregel').value = regel;
        pausenregelGeaendert();
    }

    function pausenregelGeaendert() {
        const regel = document.getElementById('pausenregel').value;
        document.querySelectorAll('#pausenregelSegment .segment-btn').forEach(b => b.classList.toggle('aktiv', b.dataset.regel === regel));
        const regelHinweis = document.getElementById('pausenregelHinweis');
        if (regelHinweis) regelHinweis.innerText = PAUSENREGEL_HINWEIS[regel] || '';
        document.getElementById('pausenBereich').style.display =
            regel === 'reserve' ? 'none' : 'block';
        if (regel === 'B30') {
            // B30 kennt nur EINE unbezahlte Pause - aber bezahlte Pausen (BEZPAU)
            // koennen trotzdem mehrfach vorkommen und bleiben unangetastet.
            let ersteUnbezahlteGesehen = false;
            pausenEintraege = pausenEintraege.filter(p => {
                if (p.art === 'BEZPAU') return true;
                if (ersteUnbezahlteGesehen) return false;
                ersteUnbezahlteGesehen = true;
                return true;
            });
        }
        pausenRendern();
    }

    // Fasst direkt aneinandergrenzende Pausen (gleiche bis/von-Grenze - z. B. der
    // bezahlte und der unbezahlte Anteil derselben Unterbrechung laut Dienstzettel)
    // zu einem Eintrag zusammen, damit man sie als eine durchgehende Pause sieht
    // und bearbeitet. Die "unbezahlt"-Minuten liegen laut Berechnung immer am Ende
    // des Zeitfensters, daher ist die Summe rechnerisch identisch zu den Einzelteilen.
    function pausenZusammenfassen(liste) {
        const ergebnis = [];
        (liste || []).forEach(p => {
            const letzte = ergebnis[ergebnis.length - 1];
            if (letzte && letzte.bis === p.von) {
                letzte.bis = p.bis;
                letzte.unbezahlt = (Number(letzte.unbezahlt) || 0) + (Number(p.unbezahlt) || 0);
                letzte.gearbeitet = (Number(letzte.gearbeitet) || 0) + (Number(p.gearbeitet) || 0);
                if (letzte.art !== p.art) letzte.art = 'GEMISCHT';
            } else {
                ergebnis.push({ ...p });
            }
        });
        return ergebnis;
    }

    function pauseHinzufuegen() {
        pausenEintraege.push({ von: '', bis: '', unbezahlt: 30, gearbeitet: 0, art: 'UNBPAU' });
        pausenRendern();
    }

    function pauseEntfernen(i) {
        pausenEintraege.splice(i, 1);
        pausenRendern();
    }

    function pauseGeaendert(i, feld, wert) {
        const p = pausenEintraege[i];
        if (feld === 'unbezahlt' || feld === 'gearbeitet') {
            p[feld] = Math.max(0, Number(wert) || 0);
            const dauer = minutenZwischen(p.von, p.bis);
            if (dauer) p.unbezahlt = Math.min(p.unbezahlt, dauer);
            // "Gearbeitet" ist unabhaengig von bezahlt/unbezahlt: es zaehlt fuer
            // die Sechstel-Gueltigkeitspruefung (effektive Pause = Dauer minus
            // gearbeitet), nicht mehr nur fuer die Mehrarbeit-Umrechnung. Fuer
            // die Bezahlung selbst bleibt es dort weiterhin auf "unbezahlt" gedeckelt.
            if (dauer) p.gearbeitet = Math.min(Number(p.gearbeitet) || 0, dauer);
        } else {
            p[feld] = wert;
        }
        pausenSummeAktualisieren();
    }

    function minutenZwischen(von, bis) {
        if (!von || !bis) return 0;
        const [vh, vm] = von.split(':').map(Number);
        const [bh, bm] = bis.split(':').map(Number);
        let dauer = (bh * 60 + bm) - (vh * 60 + vm);
        if (dauer < 0) dauer += 24 * 60;     // über Mitternacht
        return dauer;
    }

    // Prueft eine kurze Unterbrechung laut Dienstzettel (NB, Ruest und/oder UeWegZ)
    // vor einer Pause: reichte die erste kurze Zeile allein schon nicht fuer die
    // 8-Minuten-Mindestdauer, muss die tatsaechlich eingetragene Pause danach
    // mind. 8 Minuten haben - wichtig, wenn sich durch Verspaetung die echte
    // Pausenzeit verschiebt. "p.davorZeit" wird beim Anlegen des Pausen-Eintrags
    // gespeichert (siehe felderSetzen/klickKalenderTag) und bleibt so auch nach
    // Bearbeiten der Zeiten oder Zusammenfassen mehrerer Zettel-Zeilen erhalten.
    const AUSSETZEN_KURZ_TYPEN = ['NB', 'Ruest', 'UeWegZ'];
    function aussetzenPruefung(p) {
        if (!p || !p.davorZeit || !aktuelleDetails) return null;

        const fahrten = aktuelleDetails.fahrten || [];
        const startIndex = fahrten.findIndex(f => AUSSETZEN_KURZ_TYPEN.includes(f.typ) && f.von_zeit === p.davorZeit);
        if (startIndex === -1) return null;

        const start = fahrten[startIndex];
        const startMin = minutenZwischen(start.von_zeit, start.bis_zeit);
        if (startMin >= 8) return null;

        const next = fahrten[startIndex + 1];
        const hatNext = next && AUSSETZEN_KURZ_TYPEN.includes(next.typ) && next.von_zeit === start.bis_zeit;
        const nextMin = hatNext ? minutenZwischen(next.von_zeit, next.bis_zeit) : 0;
        const teile = [`${start.typ} ${startMin} Min.`];
        if (hatNext) teile.push(`${next.typ} ${nextMin} Min.`);

        // NB/Ruest/UeWegZ zaehlen mit in die noetige Pause hinein: sie sind Teil
        // der Unterbrechung und werden zur tatsaechlich eingetragenen Pause dazu-
        // gerechnet, statt nur als Kontext danebenzustehen.
        return { teile, kurzMin: startMin + nextMin };
    }

    function pausenRendern() {
        const el = document.getElementById('pausenListe');
        if (!el) return;

        const regel = document.getElementById('pausenregel').value;
        const istSechste = regel === 'sechste';
        const sechsteHinweis = document.getElementById('sechsteHinweis');
        if (sechsteHinweis) sechsteHinweis.style.display = istSechste ? 'block' : 'none';

        if (!pausenEintraege.length) {
            el.innerHTML = '<p class="auth-hinweis" style="margin:0;">Keine Pause eingetragen.</p>';
            pausenSummeAktualisieren();
            return;
        }

        el.innerHTML = pausenEintraege.map((p, i) => {
            const dauer = minutenZwischen(p.von, p.bis);
            const gearbeitet = Number(p.gearbeitet) || 0;
            const unbezahlt = Number(p.unbezahlt) || 0;
            const wirklichUnbezahlt = Math.max(0, unbezahlt - gearbeitet);
            // Wurde in der Pause gearbeitet, ist sie unabhaengig von bezahlt/
            // unbezahlt entsprechend kuerzer wirksam - das zaehlt fuer die
            // Sechstel-Gueltigkeitspruefung (nicht fuer die Mehrarbeit-Bezahlung,
            // die bleibt auf "unbezahlt" begrenzt, siehe wirklichUnbezahlt oben).
            const effektiveDauer = Math.max(0, dauer - gearbeitet);
            const marke = unbezahlt <= 0 ? { text: 'Bezahlt', farbe: 'gruen' }
                : (dauer > 0 && unbezahlt >= dauer) ? { text: 'Unbezahlt', farbe: 'rot' }
                : { text: 'Teilweise bezahlt', farbe: 'gelb' };
            const aussetzen = istSechste ? aussetzenPruefung(p) : null;
            const zuKurz = istSechste && !aussetzen && effektiveDauer > 0 && effektiveDauer < 10;

            return `
            <div class="pause-karte ${gearbeitet > 0 ? 'ausgefallen' : ''}">
                <span class="dienst-marke ${marke.farbe}" style="display:inline-block; margin-bottom:6px;">${marke.text}</span>
                <div class="pause-zeilen">
                    <input type="time" value="${p.von}" onchange="pauseGeaendert(${i},'von',this.value); pausenRendern();">
                    <span>bis</span>
                    <input type="time" value="${p.bis}" onchange="pauseGeaendert(${i},'bis',this.value); pausenRendern();">
                    <button class="btn-danger pause-weg" onclick="pauseEntfernen(${i})">${ICONS.x}</button>
                </div>
                <div class="pause-zeilen" style="margin-top:6px;">
                    <span style="font-size:.8rem; white-space:nowrap;">davon unbezahlt</span>
                    <input type="number" min="0" step="1" value="${unbezahlt}"
                           onchange="pauseGeaendert(${i},'unbezahlt',this.value); pausenRendern();" style="max-width:80px;">
                    <span style="font-size:.8rem;">von ${dauer} Min.</span>
                </div>
                <div class="pause-zeilen" style="margin-top:6px;">
                    <span style="font-size:.8rem; white-space:nowrap;">davon gearbeitet</span>
                    <input type="number" min="0" max="${dauer}" step="1" value="${gearbeitet}"
                           onchange="pauseGeaendert(${i},'gearbeitet',this.value); pausenRendern();" style="max-width:80px;">
                    <span style="font-size:.8rem;">Min.</span>
                </div>
                ${gearbeitet > 0 ? `<div class="pause-info">
                    ${gearbeitet} Min. gearbeitet · davon ${Math.min(gearbeitet, unbezahlt)} Min. als Mehrarbeit · ${wirklichUnbezahlt} Min. bleiben unbezahlt
                </div>` : ''}
                ${zuKurz ? `<div class="pause-info">
                    Nur ${effektiveDauer} Min. wirksam${gearbeitet > 0 ? ` (${dauer} – ${gearbeitet} gearbeitet)` : ''} – bei „Sechste" sollten hier mind. 10 Min. stehen (8 Min. + 2 Min. Nacharbeit).
                </div>` : ''}
                ${aussetzen ? (() => {
                    const erforderlich = aussetzen.kurzMin + 8;
                    const gesamt = aussetzen.kurzMin + effektiveDauer;
                    return `<div class="pause-info ${gesamt >= erforderlich ? 'ok' : ''}">
                        Laut Dienstzettel: ${aussetzen.teile.join(' + ')} + Pause ${effektiveDauer} Min.${gearbeitet > 0 ? ` (${dauer} – ${gearbeitet} gearbeitet)` : ''} = ${gesamt} Min. (nötig: ${erforderlich} Min.) ${gesamt >= erforderlich ? '✓ erfüllt' : '– es fehlen ' + (erforderlich - gesamt) + ' Min.'}
                    </div>`;
                })() : ''}
            </div>`;
        }).join('');

        pausenSummeAktualisieren();
    }

    function pausenSummeAktualisieren() {
        const el = document.getElementById('pausenSumme');
        if (!el) return;
        const regel = document.getElementById('pausenregel').value;
        if (regel === 'reserve') { el.innerText = 'Reservedienst – die gesamte Zeit ist bezahlt.'; return; }

        let summeUnbezahlt = 0, summeGearbeitet = 0;
        pausenEintraege.forEach(p => {
            const dauer = minutenZwischen(p.von, p.bis);
            const unbezahlt = Math.min(Number(p.unbezahlt) || 0, dauer || Number(p.unbezahlt) || 0);
            const gearbeitet = Math.min(Number(p.gearbeitet) || 0, unbezahlt);
            summeUnbezahlt += Math.max(0, unbezahlt - gearbeitet);
            summeGearbeitet += gearbeitet;
        });

        el.innerText = `Unbezahlt insgesamt: ${summeUnbezahlt} Min.` +
            (summeGearbeitet ? ` · ${summeGearbeitet} Min. gearbeitet → Mehrarbeit` : '');
        document.getElementById('pause').value = summeUnbezahlt;
    }






    function zeitKurz(iso) {
        if (!iso) return '';
        const d = new Date(iso);
        const heute = new Date();
        const gleicherTag = d.toDateString() === heute.toDateString();
        const pad = n => n < 10 ? '0' + n : n;
        if (gleicherTag) return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
        return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}. ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }

    // Macht Text für HTML unschädlich - auch innerhalb von Attributen (dort zusätzlich Anführungszeichen).
    // In onclick="…" reicht das NICHT (der Browser entschlüsselt die Zeichen vor dem Ausführen):
    // dort Werte über data-Attribute und this.dataset übergeben.
    function sicher(text) {
        return (text == null ? '' : String(text))
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    // Für Anzeige-Bereiche, die aus Vorlagen mit eingesetzten Daten (KI, PDF, Datenbank) zusammengebaut werden
    // und keine Klick-Funktionen brauchen: lässt nur harmlose Tags/Attribute durch (Erlaubnisliste).
    const ERLAUBTE_TAGS = new Set(['DIV', 'SPAN', 'SMALL', 'B', 'BR', 'DETAILS', 'SUMMARY', 'P', 'SVG', 'PATH', 'CIRCLE',
        'RECT', 'LINE', 'POLYLINE', 'POLYGON', 'G', 'ELLIPSE']);
    const ERLAUBTE_ATTRIBUTE = new Set(['class', 'style', 'width', 'height', 'viewbox', 'fill', 'stroke', 'stroke-width',
        'stroke-linecap', 'stroke-linejoin', 'd', 'cx', 'cy', 'r', 'x', 'y', 'rx', 'ry', 'x1', 'y1', 'x2', 'y2', 'points',
        'transform', 'opacity', 'xmlns']);
    function anzeigeHtmlBereinigen(html) {
        const dok = new DOMParser().parseFromString('<body>' + html + '</body>', 'text/html');
        const bereinigen = (knoten) => {
            Array.from(knoten.childNodes).forEach(kind => {
                if (kind.nodeType === 3) return;                          // Text
                if (kind.nodeType !== 1 || !ERLAUBTE_TAGS.has(kind.tagName.toUpperCase())) { kind.remove(); return; }
                Array.from(kind.attributes).forEach(a => {
                    const name = a.name.toLowerCase();
                    const wert = a.value.toLowerCase();
                    const gefaehrlich = name.startsWith('on') || wert.includes('javascript:') || wert.includes('url(') || wert.includes('expression(');
                    if (!ERLAUBTE_ATTRIBUTE.has(name) || gefaehrlich) kind.removeAttribute(a.name);
                });
                bereinigen(kind);
            });
        };
        bereinigen(dok.body);
        return dok.body.innerHTML;
    }

    // ---------- Dienstverlauf teilen ----------
    // Stellt die zu teilenden Punkte zusammen: nur Beginn, Pausen, Ende
    function teilPunkteBauen() {
        const d = aktuelleDetails;
        if (!d) return null;

        const punkte = [];

        if (d.beginn) {
            punkte.push({
                art: 'Beginn', zeit: d.beginn,
                ort: d.beginn_ort || d.beginn_ort_kuerzel || '',
                linie: d.beginn_linie, umlauf: d.beginn_umlauf,
                nach: d.beginn_nach || d.beginn_nach_kuerzel || ''
            });
        }

        (d.pausen || []).forEach(p => {
            punkte.push({
                art: 'Pause', zeit: p.von, bis: p.bis,
                ort: p.ort || p.ort_kuerzel || ''
            });
        });

        if (d.ende) {
            punkte.push({
                art: 'Ende', zeit: d.ende, folgetag: d.ende_folgetag === true,
                ort: d.ende_ort || d.ende_ort_kuerzel || '',
                linie: d.ende_linie, umlauf: d.ende_umlauf,
                nach: d.ende_nach || d.ende_nach_kuerzel || ''
            });
        }

        return {
            datum: document.getElementById('datum').value,
            dienstnummer: document.getElementById('dienstnummer').value.trim(),
            punkte: punkte
        };
    }

    // Dieselben Daten als reiner Text, z. B. für WhatsApp
    function teilTextBauen(d) {
        const symbol = { 'Beginn': '▶️', 'Pause': '☕', 'Ende': '⏹️' };
        let text = `Dienst${d.dienstnummer ? ' ' + d.dienstnummer : ''}`;
        if (d.datum) text += ' · ' + d.datum.split('-').reverse().join('.');
        text += '\n';

        d.punkte.forEach(p => {
            const zeit = p.art === 'Pause'
                ? `${p.zeit || ''}–${p.bis || ''}`
                : `${p.zeit || ''}${p.folgetag ? '+' : ''}`;
            text += `\n${symbol[p.art] || '•'} ${p.art} ${zeit}\n`;
            if (p.ort) text += `${p.ort}\n`;

            const teile = [];
            if (p.linie) teile.push('Linie ' + p.linie);
            if (p.umlauf) teile.push('Umlauf ' + p.umlauf);
            let zusatz = teile.join(' · ');
            if (p.nach) zusatz += (zusatz ? ' → ' : '→ ') + p.nach;
            if (zusatz) text += zusatz + '\n';
        });

        return text.trim();
    }


    // Über WhatsApp und andere Apps teilen
    async function verlaufExternTeilen() {
        const d = teilPunkteBauen();
        if (!d || !d.punkte.length) { alert('Kein Dienstverlauf vorhanden.'); return; }
        const text = teilTextBauen(d);

        try {
            if (navigator.share) {
                await navigator.share({ title: 'Dienstverlauf', text: text });
                return;
            }
            await navigator.clipboard.writeText(text);
            alert('Dienstverlauf in die Zwischenablage kopiert – jetzt in WhatsApp einfügen.');
        } catch (e) {
            if (e && e.name === 'AbortError') return;   // Teilen abgebrochen
            alert('Teilen nicht möglich. Text:\n\n' + text);
        }
    }


    // ============================================================
    //  HALTESTELLEN (Kürzel -> voller Name, eigene Liste je Nutzer)
    // ============================================================
    let haltestellen = {};   // { KUERZEL: name }


    async function haltestellenLaden() {
        if (!sb || !aktuellerNutzer) return;
        try {
            const { data, error } = await sb.from('planer_haltestellen').select('kuerzel, name').eq('user_id', aktuellerNutzer.id);
            if (error) throw error;
            haltestellen = {};
            (data || []).forEach(h => { haltestellen[h.kuerzel.toUpperCase()] = h.name; });
        } catch (e) {
            console.warn('Haltestellen konnten nicht geladen werden:', e);
        }
    }

    // Beim allerersten Anmelden einmal die Dienstplan-Liste als Grundstock übernehmen.
    // Danach pflegt jeder nur noch seine eigene Liste (die beiden Apps sind nicht verbunden).
    async function haltestellenErsteListe() {
        if (!sb || !aktuellerNutzer || ein.haltestellenKopiert) return;
        try {
            const { error } = await sb.rpc('planer_haltestellen_kopieren');
            if (error) throw error;
            ein.haltestellenKopiert = true;
            einstellungenSpeichernLocal();
            await haltestellenLaden();
        } catch (e) {
            console.warn('Haltestellen-Grundliste nicht übernommen:', e);
        }
    }

    // Schlägt einen Namen zum Kürzel nach
    function haltestelleName(kuerzel) {
        if (!kuerzel) return '';
        return haltestellen[String(kuerzel).trim().toUpperCase()] || '';
    }

    // Lernt neue Paare aus einem gescannten Dienstzettel
    async function haltestellenLernen(details) {
        if (!sb || !aktuellerNutzer || !details) return;
        const paare = {};
        const merke = (kuerzel, name) => {
            const k = (kuerzel || '').trim().toUpperCase();
            const n = (name || '').trim();
            // Nur echte Paare: Name muss sich vom Kürzel unterscheiden
            if (k && n && k !== n.toUpperCase() && !haltestellen[k]) paare[k] = n;
        };

        merke(details.beginn_ort_kuerzel, details.beginn_ort);
        merke(details.beginn_nach_kuerzel, details.beginn_nach);
        merke(details.ende_ort_kuerzel, details.ende_ort);
        merke(details.ende_nach_kuerzel, details.ende_nach);
        (details.wechsel || []).forEach(w => {
            merke(w.ort_kuerzel, w.ort); merke(w.nach_kuerzel, w.nach);
        });
        (details.pausen || []).forEach(p => {
            merke(p.ort_kuerzel, p.ort);
            merke(p.davor_ort_kuerzel, p.davor_ort);
            merke(p.danach_nach_kuerzel, p.danach_nach);
        });
        (details.fahrten || []).forEach(f => {
            merke(f.von_kuerzel, f.von); merke(f.nach_kuerzel, f.nach);
        });

        const neue = Object.keys(paare);
        if (!neue.length) return;

        try {
            const zeilen = neue.map(k => ({ user_id: aktuellerNutzer.id, kuerzel: k, name: paare[k], automatisch: true }));
            const { error } = await sb.from('planer_haltestellen').upsert(zeilen, { onConflict: 'user_id,kuerzel', ignoreDuplicates: true });
            if (error) throw error;
            neue.forEach(k => { haltestellen[k] = paare[k]; });
        } catch (e) {
            console.warn('Haltestellen konnten nicht gelernt werden:', e);
        }
    }

    // Ergänzt fehlende Namen aus der Liste
    function detailsMitHaltestellen(d) {
        if (!d) return d;
        const fuelle = (obj, kuerzelFeld, nameFeld) => {
            const k = obj[kuerzelFeld];
            if (k && !(obj[nameFeld] || '').trim()) {
                const name = haltestelleName(k);
                if (name) obj[nameFeld] = name;
            }
        };
        fuelle(d, 'beginn_ort_kuerzel', 'beginn_ort');
        fuelle(d, 'beginn_nach_kuerzel', 'beginn_nach');
        fuelle(d, 'ende_ort_kuerzel', 'ende_ort');
        fuelle(d, 'ende_nach_kuerzel', 'ende_nach');
        (d.wechsel || []).forEach(w => {
            fuelle(w, 'ort_kuerzel', 'ort'); fuelle(w, 'nach_kuerzel', 'nach');
        });
        (d.pausen || []).forEach(p => {
            fuelle(p, 'ort_kuerzel', 'ort');
            fuelle(p, 'davor_ort_kuerzel', 'davor_ort');
            fuelle(p, 'danach_nach_kuerzel', 'danach_nach');
        });
        (d.fahrten || []).forEach(f => {
            fuelle(f, 'von_kuerzel', 'von'); fuelle(f, 'nach_kuerzel', 'nach');
        });
        return d;
    }

    async function haltestelleSpeichern() {
        const kuerzel = document.getElementById('hsKuerzel').value.trim().toUpperCase();
        const name = document.getElementById('hsName').value.trim();
        if (!kuerzel || !name) {
            zeigeMeldung('hsMeldung', 'Bitte Kürzel und Namen eingeben.', 'fehler');
            return;
        }
        try {
            const { error } = await sb.from('planer_haltestellen')
                .upsert({ user_id: aktuellerNutzer.id, kuerzel, name, automatisch: false, aktualisiert_am: new Date().toISOString() },
                        { onConflict: 'user_id,kuerzel' });
            if (error) throw error;
            haltestellen[kuerzel] = name;
            document.getElementById('hsKuerzel').value = '';
            document.getElementById('hsName').value = '';
            zeigeMeldung('hsMeldung', kuerzel + ' gespeichert.', 'ok');
            haltestellenRendern();
        } catch (e) {
            zeigeMeldung('hsMeldung', 'Fehler: ' + fehlerText(e), 'fehler');
        }
    }

    async function haltestelleLoeschen(kuerzel) {
        if (!confirm('Haltestelle ' + kuerzel + ' löschen?')) return;
        try {
            const { error } = await sb.from('planer_haltestellen').delete().eq('user_id', aktuellerNutzer.id).eq('kuerzel', kuerzel);
            if (error) throw error;
            delete haltestellen[kuerzel];
            haltestellenRendern();
        } catch (e) {
            zeigeMeldung('hsMeldung', 'Fehler: ' + fehlerText(e), 'fehler');
        }
    }

    function haltestelleBearbeiten(kuerzel) {
        document.getElementById('hsKuerzel').value = kuerzel;
        document.getElementById('hsName').value = haltestellen[kuerzel] || '';
        document.getElementById('hsKuerzel').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }


    function haltestellenRendern() {
        const el = document.getElementById('hsListe');
        if (!el) return;
        const suche = (document.getElementById('hsSuche').value || '').toLowerCase();

        const treffer = Object.keys(haltestellen).sort().filter(k =>
            !suche || k.toLowerCase().includes(suche) || haltestellen[k].toLowerCase().includes(suche));

        if (!treffer.length) {
            el.innerHTML = '<p class="hs-anzahl">' + (suche ? 'Nichts gefunden.' : 'Noch keine Haltestellen gespeichert.') + '</p>';
            return;
        }

        el.innerHTML = `<p class="hs-anzahl">${treffer.length} von ${Object.keys(haltestellen).length} Einträgen</p>` +
            treffer.map(k => `
            <div class="hs-zeile">
                <span class="hs-kuerzel">${sicher(k)}</span>
                <span class="hs-name">${sicher(haltestellen[k])}</span>
                <span class="hs-aktionen">
                    <button data-k="${sicher(k)}" onclick="haltestelleBearbeiten(this.dataset.k)" aria-label="Haltestelle bearbeiten">${ICONS.pencil}</button>
                    <button data-k="${sicher(k)}" onclick="haltestelleLoeschen(this.dataset.k)" aria-label="Haltestelle löschen">${ICONS.trash}</button>
                </span>
            </div>`).join('');
    }

    // ============================================================
    //  TV-N BERLIN – ENTGELTTABELLE
    //  Quelle: TV-N Berlin, gültig 01.06.2026 – 31.12.2026
    //  Monatsentgelte (Vollzeit 39 Std./Woche laut Tabelle)
    // ============================================================
    const TARIF_GUELTIG = '01.06.2026 – 31.12.2026';
    const TARIF_TABELLE = {
        1:  [2585.18, 2622.87, 2660.54, 2698.21, 2735.91, 2773.61],
        2:  [2784.50, 2828.53, 2872.55, 2916.62, 2960.62, 3004.62],
        3:  [2939.24, 2988.66, 3038.07, 3087.47, 3136.84, 3186.21],
        4:  [3002.93, 3054.36, 3105.80, 3157.24, 3217.98, 3278.72],
        5:  [3130.06, 3183.41, 3236.79, 3290.12, 3365.46, 3440.80],
        6:  [3314.21, 3374.17, 3434.11, 3494.04, 3554.00, 3613.96],
        7:  [3541.27, 3608.44, 3675.62, 3742.82, 3810.02, 3877.22],
        8:  [3763.52, 3838.69, 3913.87, 3989.03, 4064.18, 4139.33],
        9:  [4016.02, 4099.95, 4183.88, 4267.82, 4351.73, 4435.64],
        10: [4264.57, 4356.82, 4449.13, 4541.41, 4633.70, 4725.99],
        11: [4592.37, 4695.12, 4797.86, 4900.59, 5003.36, 5106.13],
        12: [4952.94, 5067.22, 5181.47, 5295.72, 5418.56, 5541.40],
        13: [5353.36, 5490.44, 5627.49, 5764.59, 5901.65, 6038.71],
        14: [5824.59, 5976.69, 6128.78, 6280.93, 6433.02, 6585.11],
        15: [6342.92, 6511.59, 6680.23, 6848.90, 7017.55, 7186.20]
    };

    function tarifBetrag(eg, stufe) {
        const zeile = TARIF_TABELLE[Number(eg)];
        if (!zeile) return null;
        return zeile[Number(stufe) - 1] || null;
    }


    function tarifListenFuellen(egId, stufeId) {
        const egEl = document.getElementById(egId);
        const stEl = document.getElementById(stufeId);
        if (!egEl || !stEl || egEl.options.length) return;

        egEl.innerHTML = '<option value="">– wählen –</option>' +
            Object.keys(TARIF_TABELLE).map(g => `<option value="${g}">E ${g}</option>`).join('');
        if (stEl.tagName === 'SELECT') {
            stEl.innerHTML = '<option value="">– wählen –</option>' +
                [1, 2, 3, 4, 5, 6].map(st => `<option value="${st}">Stufe ${st}</option>`).join('');
        } else {
            einrichtenStufenRendern();   // Auf der Einrichtungsseite sind die Stufen Knöpfe
        }
    }

    function einrichtenStufenRendern() {
        const box = document.getElementById('einrStufen');
        const aktiv = document.getElementById('einrStufe').value;
        if (!box) return;
        box.innerHTML = [1, 2, 3, 4, 5, 6].map(n =>
            `<button type="button" class="${String(n) === aktiv ? 'aktiv' : ''}" aria-pressed="${String(n) === aktiv}" onclick="einrichtenStufeWaehlen(${n})">${n}</button>`).join('');
    }

    function einrichtenStufeWaehlen(n) {
        document.getElementById('einrStufe').value = String(n);
        einrichtenStufenRendern();
        tarifVorschau();
    }


    // Vorschau auf der Einrichtungsseite
    function tarifVorschau() {
        const eg = document.getElementById('einrEG').value;
        const stufe = document.getElementById('einrStufe').value;
        const betrag = tarifBetrag(eg, stufe);

        document.getElementById('tarifBetrag').innerText = betrag ? euroText(betrag) : '–';
        document.getElementById('tarifGueltig').innerText = betrag
            ? `TV-N Berlin, E ${eg} Stufe ${stufe} · gültig ${TARIF_GUELTIG}` : '';
    }

    function tarifUebernehmen() {
        const eg = document.getElementById('einrEG').value;
        const stufe = document.getElementById('einrStufe').value;
        const betrag = tarifBetrag(eg, stufe);

        if (!betrag) {
            zeigeMeldung('einrMeldung', 'Bitte Entgeltgruppe und Stufe wählen.', 'fehler');
            return;
        }

        ein.monatsentgelt = betrag;
        ein.entgeltgruppe = eg;
        ein.stufe = stufe;
        ein.tarifStand = TARIF_GUELTIG;
        ein.eingerichtetAm = new Date().toISOString();
        einstellungenSpeichernLocal();

        einstellungenLaden();
        wechselSeite('einstellungen');
        zeigeMeldung('einMeldung',
            'Monatsentgelt übernommen. Bitte jetzt noch Wochenstunden, Zulagen und das Zuschlagsentgelt von deiner Abrechnung eintragen.', 'ok');
    }

    function einrichtungUeberspringen() {
        ein.eingerichtetAm = new Date().toISOString();
        einstellungenSpeichernLocal();
        wechselSeite('start');
    }

    // Auswahl in den Einstellungen -> Monatsentgelt setzen
    function tarifInEinstellungen() {
        const eg = document.getElementById('setEG').value;
        const stufe = document.getElementById('setStufe').value;
        const betrag = tarifBetrag(eg, stufe);
        const hinweis = document.getElementById('tarifHinweis');

        if (!betrag) { hinweis.innerText = ''; return; }
        document.getElementById('einMonatsentgelt').value = betrag.toFixed(2);
        hinweis.innerText = `Aus der TV-N-Berlin-Tabelle: EG ${eg} Stufe ${stufe} · gültig ${TARIF_GUELTIG}`;
    }

    // Einmal im Jahr an die Tarifrunde erinnern
    function tarifErinnerungPruefen() {
        if (!ein.eingerichtetAm) return;
        const letzte = new Date(ein.eingerichtetAm);
        const tage = (Date.now() - letzte.getTime()) / 86400000;
        if (tage < 365) return;

        const box = document.getElementById('tarifErinnerung');
        if (box) box.style.display = 'block';
    }

    function tarifErinnerungErledigt() {
        ein.eingerichtetAm = new Date().toISOString();
        einstellungenSpeichernLocal();
        document.getElementById('tarifErinnerung').style.display = 'none';
        wechselSeite('einstellungen');
    }

    // ============================================================
    //  STARTSEITE
    // ============================================================
    const WOCHENTAGE_KURZ = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    const WOCHENTAGE_LANG = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    const MONATE_KURZ = ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'];

    // Summen eines Monats ("2026-10") aus den gespeicherten Diensten
    function monatsZahlen(praefix) {
        const r = { anzahl: 0, minuten: 0, zuschlaege: 0, nachtMin: 0, samstagMin: 0, sonntagMin: 0, mehrMin: 0 };
        Object.keys(gespeicherteSchichten).forEach(k => {
            if (!k.startsWith(praefix)) return;
            const sch = gespeicherteSchichten[k];
            if (sch.typ) { r.zuschlaege += sch.aufschlagEuro || 0; return; }   // Krank/Urlaub: Aufschlag zählt zum Verdienst
            r.anzahl++;
            r.minuten += sch.nettoMinuten || 0;
            r.zuschlaege += sch.zuschlagSumme || 0;
            r.nachtMin += nachtMinutenVon(sch);
            r.samstagMin += sch.samstagMin || 0;
            r.sonntagMin += sch.sonntagMin || 0;
            r.mehrMin += sch.mehrarbeitMinuten || 0;
        });
        r.fest = ein.monatsentgelt + ein.unregelm + ein.dienstklasse;
        r.brutto = r.fest + r.zuschlaege;
        return r;
    }

    // Nachtminuten eines gespeicherten Dienstes. Ältere Einträge ohne nachtMin werden
    // aus dem Nachtzuschlag zurückgerechnet (Euro ÷ Zuschlagsentgelt ÷ Prozentsatz).
    function nachtMinutenVon(sch) {
        if (typeof sch.nachtMin === 'number') return sch.nachtMin;
        if (sch.nachtEuro > 0 && sch.zz > 0 && ein.nacht > 0) {
            return Math.round(sch.nachtEuro / (sch.zz * ein.nacht / 100) * 60);
        }
        return 0;
    }

    function jahresNachtMinuten(jahr) {
        let summe = 0;
        Object.keys(gespeicherteSchichten).forEach(k => {
            const sch = gespeicherteSchichten[k];
            if (k.startsWith(String(jahr)) && !sch.typ) summe += nachtMinutenVon(sch);
        });
        return summe;
    }

    let startDienstSchluessel = null;   // Datum des Dienstes, der auf der Startseite gezeigt wird
    let startDienstManuell = null;      // per Pfeil gewählter Dienst (null = automatisch der nächste)

    function startseiteAktualisieren() {
        const jetzt = new Date();
        const heuteStr = heutigesDatumStr();
        const z = monatsZahlen(heuteStr.slice(0, 7));
        const setze = (id, t) => { const el = document.getElementById(id); if (el) el.innerText = t; };

        setze('startDatum', `${WOCHENTAGE_KURZ[jetzt.getDay()]}, ${jetzt.getDate()}. ${MONATE_KURZ[jetzt.getMonth()]}`);
        setze('startMonatLabel', 'Verdienst ' + MONATSNAMEN[jetzt.getMonth()]);
        setze('startBrutto', euroText(z.brutto));
        setze('startSchichten', z.anzahl + (z.anzahl === 1 ? ' Dienst' : ' Dienste'));
        setze('startStunden', stundenKomma(z.minuten));
        setze('startZuschlaege', '+' + euroText(z.zuschlaege) + ' Zuschl.');

        startUebersichtRendern(z, jetzt);
        startNaechsterRendern(heuteStr);

        // Nächster Feiertag (nach Bundesland aus den Einstellungen)
        let naechster = null;
        const land = ein.bundesland || 'BE';
        for (let jahr = jetzt.getFullYear(); jahr <= jetzt.getFullYear() + 1 && !naechster; jahr++) {
            const liste = feiertageFuer(jahr, land);
            Object.keys(liste).sort().forEach(datum => {
                if (!naechster && datum >= heuteStr && liste[datum].art === 'feiertag') naechster = { datum, ...liste[datum] };
            });
        }
        setze('startFeiertagName', naechster ? naechster.name : '–');
        setze('startFeiertagDatum', naechster ? naechster.datum.split('-').reverse().slice(0, 2).join('.') + '.' : '');
    }

    // "Monat im Überblick" (hell: Balken) und "Stunden nach Art" (dunkel: Streifen), dazu die Nachtstunden des Jahres
    function startUebersichtRendern(z, jetzt) {
        const setze = (id, t) => { const el = document.getElementById(id); if (el) el.innerText = t; };
        setze('startUebersichtMonat', MONATSNAMEN[jetzt.getMonth()]);

        const gesamt = Math.max(z.minuten, 1);
        const zeilen = [
            { name: 'Nachtstunden', min: z.nachtMin },
            { name: 'Samstag', min: z.samstagMin },
            { name: 'Sonntag', min: z.sonntagMin },
            { name: 'Überstunden', min: z.mehrMin, weiss: true }
        ];
        document.getElementById('startBalken').innerHTML = zeilen.map(r => `
            <div class="balken-zeile">
                <div class="balken-kopf"><span>${r.name}</span><span>${stundenKomma(r.min)}</span></div>
                <div class="balken-bahn"><div class="balken-fuell${r.weiss ? ' weiss' : ''}" style="width:${Math.min(100, Math.round(r.min / gesamt * 100))}%"></div></div>
            </div>`).join('');

        const werktag = Math.max(0, z.minuten - z.samstagMin - z.sonntagMin - z.nachtMin);
        const teile = [
            { name: 'Werktag', min: werktag, farbe: '#F5F5F5' },
            { name: 'Samstag', min: z.samstagMin, farbe: '#FFD100' },
            { name: 'Sonntag', min: z.sonntagMin, farbe: '#FF8A3D' },
            { name: 'Nacht', min: z.nachtMin, farbe: '#6B6B73' }
        ];
        const summe = Math.max(teile.reduce((a, t) => a + t.min, 0), 1);
        document.getElementById('startStapel').innerHTML =
            `<div class="stapel-leiste">${teile.filter(t => t.min > 0).map(t =>
                `<div class="stapel-teil" style="flex:${t.min / summe}; background:${t.farbe}"></div>`).join('') ||
                '<div class="stapel-teil" style="flex:1; background:#3A3A3F"></div>'}</div>` +
            `<div class="stapel-legende">${teile.map(t =>
                `<span><i style="background:${t.farbe}"></i>${t.name} ${(t.min / 60).toFixed(1).replace('.', ',')}</span>`).join('')}</div>`;

        const jahrHtml = `<span>Nachtstunden ${jetzt.getFullYear()}</span><b>${stundenKomma(jahresNachtMinuten(jetzt.getFullYear()))}</b>`;
        ['startJahrZeile', 'startJahrZeile2'].forEach(id => { const el = document.getElementById(id); if (el) el.innerHTML = jahrHtml; });
    }

    // Der Dienst, der auf der Startseite steht: der nächste, der noch nicht vorbei ist - sonst der letzte vergangene
    function naechsterDienstSchluessel(heuteStr) {
        const alle = Object.keys(gespeicherteSchichten).filter(k => !gespeicherteSchichten[k].typ).sort();
        if (!alle.length) return null;
        const jetzt = Date.now();
        const vorbei = (k) => {
            const sch = gespeicherteSchichten[k];
            const beginn = dienstBeginnZeit(k, sch.startStr);
            if (!beginn) return k < heuteStr;
            return beginn + schichtDauerMinuten(k, sch.startStr, sch.endeIst || sch.endeStr) * 60000 <= jetzt;
        };
        const kommend = alle.find(k => k >= heuteStr && !vorbei(k));
        return kommend || alle[alle.length - 1];
    }

    function dienstBeginnZeit(datumStr, startStr) {
        const t = /^(\d{1,2}):(\d{2})/.exec(startStr || '');
        if (!t) return null;
        const [j, m, tg] = datumStr.split('-').map(Number);
        return new Date(j, m - 1, tg, Number(t[1]), Number(t[2])).getTime();
    }

    // "in 9 Std.", "in 25 Min.", "morgen", "in 3 Tagen", "läuft", "vorbei"
    function inZeitText(datumStr, sch) {
        const beginn = dienstBeginnZeit(datumStr, sch.startStr);
        if (beginn === null) return '';
        const jetzt = Date.now();
        const ende = beginn + schichtDauerMinuten(datumStr, sch.startStr, sch.endeIst || sch.endeStr) * 60000;
        if (jetzt >= ende) return 'vorbei';
        if (jetzt >= beginn) return 'läuft';
        const min = (beginn - jetzt) / 60000;
        if (min < 60) return `in ${Math.max(1, Math.round(min))} Min.`;
        if (min < 24 * 60) return `in ${Math.round(min / 60)} Std.`;
        const tage = Math.round((new Date(datumStr + 'T00:00:00') - new Date(heutigesDatumStr() + 'T00:00:00')) / 86400000);
        return tage === 1 ? 'morgen' : `in ${tage} Tagen`;
    }

    function startNaechsterRendern(heuteStr) {
        const box = document.getElementById('startNaechsterBox');
        const inhalt = document.getElementById('startNaechster');
        const auto = naechsterDienstSchluessel(heuteStr);
        // Mit den Pfeilen gewählter Dienst, solange es ihn noch gibt - sonst der nächste Dienst
        const manuellOk = !!startDienstManuell && !!gespeicherteSchichten[startDienstManuell] && !gespeicherteSchichten[startDienstManuell].typ;
        if (!manuellOk) startDienstManuell = null;
        const k = manuellOk ? startDienstManuell : auto;
        startDienstSchluessel = k;

        const heuteDienst = gespeicherteSchichten[heuteStr] && !gespeicherteSchichten[heuteStr].typ;
        const knoepfe = document.querySelector('.start-knoepfe');
        if (knoepfe) knoepfe.classList.toggle('mit-fahrt', !!heuteDienst);
        ['startAktuelleFahrtBtn', 'startAktuelleFahrtBtn2'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = heuteDienst ? '' : 'none';
        });

        if (!k) {
            box.style.display = 'none';
            inhalt.innerHTML = '';
            bvgStartHinweisTerminieren();
            return;
        }
        box.style.display = 'block';

        const sch = gespeicherteSchichten[k];
        const d = sch.details || {};
        const [, , tag] = k.split('-');
        const wochentag = WOCHENTAGE_KURZ[new Date(k + 'T12:00:00').getDay()].toUpperCase();
        const dienstText = sch.dienstnummer ? 'Dienst ' + sch.dienstnummer : '';
        const linieText = d.beginn_linie ? 'Linie ' + d.beginn_linie + (d.beginn_umlauf ? ' · Umlauf ' + d.beginn_umlauf : '') : '';
        const meta = [dienstText, linieText].filter(Boolean).join(' · ');
        // Richtung der ersten Linie: zeigt, auf welcher Seite man steht, wenn man übernimmt
        const richtung = d.beginn_linie ? dienstRichtung(d) : '';
        const startOrt = d.beginn_ort ? aktuelleFahrtOrtName(d.beginn_ort, d.beginn_ort_kuerzel) : '';
        const chip = inZeitText(k, sch);
        const alleDienste = alleDienstSchluessel();
        const position = alleDienste.indexOf(k);
        const [, monat] = k.split('-');
        const ueberschrift = k === auto ? (k >= heuteStr ? 'Nächster Dienst' : 'Letzter Dienst')
            : k === heuteStr ? 'Dienst heute'
            : `${k > heuteStr ? 'Dienst' : 'Früherer Dienst'} · ${Number(tag)}.${Number(monat)}.`;
        const pfeilLinks = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m15 6-6 6 6 6"></path></svg>';
        const pfeilRechts = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"></path></svg>';

        inhalt.innerHTML = `
            <div class="dienst-start klickbar" role="button" tabindex="0" onclick="dienstVerlaufOeffnen('${k}')" onkeydown="if(event.key==='Enter') dienstVerlaufOeffnen('${k}')">
                <div class="dienst-tag"><small>${wochentag}</small><b>${sicher(String(Number(tag)))}</b></div>
                <div class="dienst-start-text">
                    <div class="dienst-start-kopf">
                        <span class="ueberschrift-klein">${sicher(ueberschrift)}</span>
                        ${chip ? `<span class="chip-in">${sicher(chip)}</span>` : ''}
                    </div>
                    <div class="dienst-start-zeit">${sicher(sch.startStr || '')} – ${sicher(sch.endeStr || '')}</div>
                    ${meta ? `<div class="dienst-start-meta">${sicher(meta)}</div>` : ''}
                    ${richtung ? `<div class="dienst-start-richtung">→ Richtung <b>${sicher(richtung)}</b></div>` : ''}
                    ${startOrt ? `<div class="dienst-start-meta">Start: ${sicher(startOrt)}</div>` : ''}
                </div>
            </div>
            ${alleDienste.length > 1 ? `<div class="dienst-nav">
                <button class="kopf-btn kopf-btn-klein" onclick="startDienstWeiter(-1)" aria-label="Früherer Dienst" ${position <= 0 ? 'disabled' : ''}>${pfeilLinks}</button>
                ${k !== auto
                    ? '<button class="dienst-nav-zurueck" onclick="startDienstWeiter(0)">Zum nächsten Dienst</button>'
                    : `<span class="dienst-nav-pos">${position + 1} von ${alleDienste.length} Diensten</span>`}
                <button class="kopf-btn kopf-btn-klein" onclick="startDienstWeiter(1)" aria-label="Späterer Dienst" ${position >= alleDienste.length - 1 ? 'disabled' : ''}>${pfeilRechts}</button>
            </div>` : ''}`;
        bvgStartHinweisTerminieren();   // BVG-Meldungen zu den Linien dieses Dienstes
    }

    function alleDienstSchluessel() {
        return Object.keys(gespeicherteSchichten).filter(k => !gespeicherteSchichten[k].typ).sort();
    }

    // Pfeile auf der Startseite: -1 früherer Dienst, 1 späterer Dienst, 0 zurück zum nächsten Dienst
    function startDienstWeiter(richtung) {
        const alle = alleDienstSchluessel();
        if (!alle.length) return;
        if (richtung === 0) {
            startDienstManuell = null;
        } else {
            const i = alle.indexOf(startDienstSchluessel);
            const ziel = Math.max(0, Math.min(alle.length - 1, (i < 0 ? alle.length - 1 : i) + richtung));
            startDienstManuell = alle[ziel];
        }
        startNaechsterRendern(heutigesDatumStr());
    }

    // Öffnet den Dienstverlauf eines bestimmten Tages
    function dienstVerlaufOeffnen(datumStr) {
        const sch = gespeicherteSchichten[datumStr];
        if (!sch) return;
        klickKalenderTag(datumStr);
        wechselSeite('verlauf');
    }

    // ============================================================
    //  TAGESEREIGNISSE — Foto + optionaler Titel zu einem bestimmten Tag
    //  (z. B. Meldeformular, Mängelzettel). Wird im Dienstverlauf gezeigt
    //  und im Kalender mit einem "*" markiert.
    // ============================================================

    // Lädt, an welchen Tagen mind. ein Ereignis existiert (Kalender-Markierung).
    async function ereignisTageLaden() {
        if (!sb || !aktuellerNutzer) return;
        try {
            const { data, error } = await sb.from('planer_ereignisse')
                .select('datum').eq('user_id', aktuellerNutzer.id);
            if (error) throw error;
            ereignisTage = new Set((data || []).map(r => r.datum));
            renderCalendar();
        } catch (e) { console.log('Ereignis-Tage laden fehlgeschlagen:', e); }
    }

    // Zeigt die Ereignisliste für den aktuell im Dienstverlauf offenen Tag.
    async function ereignisseAnzeigen(datumStr) {
        ereignisAktuellesDatum = datumStr || null;
        const el = document.getElementById('ereignisListe');
        if (!el) return;
        if (!sb || !aktuellerNutzer || !datumStr) { el.innerHTML = ''; return; }

        el.innerHTML = '<p class="auth-hinweis">Lädt …</p>';
        try {
            const { data, error } = await sb.from('planer_ereignisse')
                .select('id, titel, foto_pfad, erstellt_am')
                .eq('user_id', aktuellerNutzer.id).eq('datum', datumStr)
                .order('erstellt_am', { ascending: true });
            if (error) throw error;

            ereignisListeAktuell = data || [];
            if (!ereignisListeAktuell.length) {
                el.innerHTML = '<p class="auth-hinweis">Noch keine Ereignisse für diesen Tag.</p>';
                return;
            }

            const zeilen = await Promise.all(ereignisListeAktuell.map(async (e) => {
                try {
                    const { data: sig } = await sb.storage.from('planer-ereignis-fotos').createSignedUrl(e.foto_pfad, 3600);
                    e._url = (sig && sig.signedUrl) || '';
                } catch (_e) { e._url = ''; }
                const zeit = e.erstellt_am
                    ? new Date(e.erstellt_am).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })
                    : '';
                return `<div class="ereignis-eintrag">
                    <img src="${e._url}" alt="" class="ereignis-miniatur" onclick="ereignisDetailOeffnen('${e.id}')">
                    <span class="ereignis-info" onclick="ereignisDetailOeffnen('${e.id}')">
                        <b>${sicher(e.titel || 'Ereignis')}</b>
                        <small>${zeit}</small>
                    </span>
                    <button class="btn-danger" aria-label="Ereignis löschen" onclick="ereignisLoeschen('${e.id}')">${ICONS.trash}</button>
                </div>`;
            }));
            el.innerHTML = zeilen.join('');
        } catch (e) {
            el.innerHTML = '<p class="auth-hinweis">Ereignisse konnten nicht geladen werden.</p>';
            console.log('Ereignisse laden fehlgeschlagen:', e);
        }
    }

    function ereignisDetailOeffnen(id) {
        const e = ereignisListeAktuell.find(x => x.id === id);
        if (!e) return;
        document.getElementById('ereignisDetailBild').src = e._url || '';
        document.getElementById('ereignisDetailTitel').innerText = e.titel || 'Ereignis';
        document.getElementById('ereignisDetailOverlay').style.display = 'flex';
    }

    function ereignisDetailSchliessen(ev) {
        if (ev && ev.target !== document.getElementById('ereignisDetailOverlay')) return;
        document.getElementById('ereignisDetailOverlay').style.display = 'none';
    }

    async function ereignisLoeschen(id) {
        const e = ereignisListeAktuell.find(x => x.id === id);
        if (!e) return;
        if (!confirm('Dieses Ereignis wirklich löschen?')) return;
        try {
            await sb.storage.from('planer-ereignis-fotos').remove([e.foto_pfad]);
            const { error } = await sb.from('planer_ereignisse').delete().eq('id', id);
            if (error) throw error;
            await ereignisseAnzeigen(ereignisAktuellesDatum);
            await ereignisTageLaden();
        } catch (err) {
            alert('Löschen fehlgeschlagen: ' + (err.message || err));
        }
    }


    // "Ereignis hinzufügen": der Datei-Dialog des Handys bietet die Kamera direkt an
    function ereignisFotoButton() {
        if (!ereignisAktuellesDatum) return;
        if (capacitorAktiv()) { ereignisFotoNativ(); return; }
        document.getElementById('ereignisBild').click();
    }

    function ereignisDateiVerarbeiten(input) {
        if (!input.files || !input.files[0]) return;
        ereignisFotoAusgewaehlt(input.files[0]);
        input.value = '';
    }

    // Foto ist gewählt (Kamera oder Galerie) - vor dem Speichern noch einen
    // optionalen Titel abfragen.
    function ereignisFotoAusgewaehlt(blob) {
        ereignisAusstehendesFoto = blob;
        document.getElementById('ereignisTitelBild').src = URL.createObjectURL(blob);
        document.getElementById('ereignisTitelEingabe').value = '';
        document.getElementById('ereignisTitelOverlay').style.display = 'flex';
    }

    function ereignisTitelAbbrechen() {
        ereignisAusstehendesFoto = null;
        document.getElementById('ereignisTitelOverlay').style.display = 'none';
    }

    async function ereignisTitelSpeichern() {
        if (!ereignisAusstehendesFoto || !ereignisAktuellesDatum || !aktuellerNutzer) return;
        const titel = document.getElementById('ereignisTitelEingabe').value.trim();
        const blob = ereignisAusstehendesFoto;
        document.getElementById('ereignisTitelOverlay').style.display = 'none';
        ereignisAusstehendesFoto = null;

        try {
            const pfad = `${aktuellerNutzer.id}/${ereignisAktuellesDatum}/${Date.now()}.jpg`;
            const { error: uploadError } = await sb.storage.from('planer-ereignis-fotos')
                .upload(pfad, blob, { contentType: blob.type || 'image/jpeg' });
            if (uploadError) throw uploadError;

            const { error: insertError } = await sb.from('planer_ereignisse').insert({
                user_id: aktuellerNutzer.id, datum: ereignisAktuellesDatum,
                titel: titel || null, foto_pfad: pfad
            });
            if (insertError) throw insertError;

            await ereignisseAnzeigen(ereignisAktuellesDatum);
            await ereignisTageLaden();
        } catch (e) {
            alert('Ereignis konnte nicht gespeichert werden: ' + fehlerText(e));
        }
    }

    // ============================================================
    //  AKTUELLE FAHRT — großformatige Ansicht für den Fahrtbericht bei
    //  jeder Wende: zeigt Soll-Ankunft/-Abfahrt am Punkt, an dem der
    //  Fahrer gerade ist oder der als nächstes kommt. Aktualisiert sich
    //  selbst; Erinnerungen bei gesperrtem/ausgeschaltetem Bildschirm
    //  übernimmt stattdessen das native Homescreen-Widget.
    // ============================================================
    let aktuelleFahrtPunkte = [];
    let aktuelleFahrtDetails = null;          // die Dienst-Details, aus denen aktuelleFahrtPunkte gebaut wurden
    let aktuelleFahrtManuellerIndex = null;   // null = automatisch anhand der Uhrzeit
    let aktuelleFahrtIntervall = null;

    // Heutiges Datum als "YYYY-MM-DD" in der lokalen Zeitzone (nicht UTC).
    function heutigesDatumStr() {
        const heute = new Date();
        const pad = (n) => n < 10 ? '0' + n : n;
        return `${heute.getFullYear()}-${pad(heute.getMonth() + 1)}-${pad(heute.getDate())}`;
    }

    // Uhrzeit "HH:MM" auf den Kalendertag von "heuteStr" gelegt, plus die
    // Folgetag-Verschiebung aus p.sort (>= 24*60 bei Zeiten nach Mitternacht).
    function aktuelleFahrtAlsDatum(heuteStr, sortMinuten) {
        if (sortMinuten == null) return null;
        const [jahr, monat, tag] = heuteStr.split('-').map(Number);
        const d = new Date(jahr, monat - 1, tag, 0, 0, 0, 0);
        d.setMinutes(sortMinuten);
        return d;
    }

    // Richtung = Endziel der Linienfahrt. So sieht man, auf welcher Seite man steht, wenn man das Fahrzeug übernimmt.
    // Dienstzettel nennen beim Dienstbeginn/Einsetzen oft kein Ziel (dort steht nur die Fahrt zum Linienanfang):
    // dann gilt das Ziel der ersten Linienfahrt dieser Linie (nachFahrt = erst danach suchen).
    function richtungDerLinie(fahrten, linie, nachFahrt) {
        const l = String(linie || '').trim();
        const alle = fahrten || [];
        const start = nachFahrt ? alle.indexOf(nachFahrt) + 1 : 0;
        for (let i = start; i < alle.length; i++) {
            const f = alle[i];
            if (String(f.typ || '').toUpperCase() !== 'L' || !f.linie) continue;
            if (l && String(f.linie).trim() !== l) continue;
            const ziel = aktuelleFahrtOrtName(f.nach, f.nach_kuerzel);
            if (ziel) return ziel;
        }
        return '';
    }

    // Richtung zum Dienstbeginn: erst ein vom Zettel genanntes Ziel, dann das der ersten Linienfahrt, zuletzt das Kürzel
    function dienstRichtung(d) {
        if (!d) return '';
        const ausZettel = String(d.beginn_nach || '').trim();
        if (ausZettel) return ausZettel;
        return richtungDerLinie(d.fahrten, d.beginn_linie) || aktuelleFahrtOrtName('', d.beginn_nach_kuerzel);
    }

    // Zeigt den vollen Haltestellennamen: Klartext, sonst aus der gelernten
    // Haltestellen-Liste, sonst als letzten Rückfall das rohe Kürzel.
    function aktuelleFahrtOrtName(name, kuerzel) {
        const n = (name || '').trim();
        if (n) return n;
        const gelernt = haltestelleName(kuerzel);
        if (gelernt) return gelernt;
        return (kuerzel || '').trim();
    }

    const AKTUELLEFAHRT_STANDTYPEN = ['wenden', 'ruest', 'rüst', 'nb', 'uewegz', 'üwegz'];

    // Zeigt den Punkt-Typ als kurzes, lesbares Label auf der Karte
    // (die KI schreibt manche Typen nur als ASCII, z. B. "Ruest").
    const AKTUELLEFAHRT_LABEL_ANZEIGE = { ruest: 'Rüst', uewegz: 'ÜWegZ', weiter: 'Weiter' };
    function aktuelleFahrtLabelText(label) {
        const key = (label || '').toLowerCase();
        return AKTUELLEFAHRT_LABEL_ANZEIGE[key] || label || '';
    }

    // Manche Dienstzettel listen Wenden als eigene Tabellenzeile (Typ
    // "Wenden"/"NB"/...), andere reihen die Linienfahrten einfach direkt
    // aneinander und die KI übernimmt dann keine eigene Zeile für die
    // Standzeit dazwischen. Diese Funktion ergänzt genau solche fehlenden
    // Wenden: jede Lücke zwischen zwei aufeinanderfolgenden Linienfahrten
    // an DERSELBEN Haltestelle wird als zusätzliche "Wenden"-Zeile
    // eingefügt, sofern dafür nicht schon eine eigene Zeile existiert.
    // Wird sowohl von der Dienstverlauf- ("Alle Fahrten") als auch der
    // "Aktuelle Fahrt"-Ansicht genutzt, damit beide dieselben Wenden zeigen.
    // "pausen" (optional) sind die separat gespeicherten Pausen des Dienstes -
    // liegt eine echte Pause bereits in der Lücke, wird dort nichts
    // Zusätzliches eingefügt (sonst Überlappung mit den Pausen-Punkten).
    function fahrtenMitAbgeleitetenWenden(fahrten, beginnZeit, pausen) {
        const beginnMin = (() => {
            if (!beginnZeit) return 0;
            const [h, m] = beginnZeit.split(':').map(Number);
            return isNaN(h) ? 0 : h * 60 + m;
        })();
        const sortWert = (zeit) => {
            if (!zeit) return null;
            const [h, m] = String(zeit).split(':').map(Number);
            if (isNaN(h)) return null;
            let wert = h * 60 + m;
            if (wert < beginnMin) wert += 24 * 60;   // Folgetag
            return wert;
        };

        const liste = (fahrten || []).slice()
            .filter(f => sortWert(f.von_zeit) !== null)
            .sort((a, b) => sortWert(a.von_zeit) - sortWert(b.von_zeit));
        const explizit = new Set();
        liste.forEach(f => {
            if (!f.linie) explizit.add(`${f.von_zeit}|${f.bis_zeit}|${f.von_kuerzel || f.von || ''}`);
        });

        // Nur WIRKLICH direkt benachbarte Zeilen (nichts dazwischen) prüfen -
        // liegt bereits eine eigene Zeile (Rüst, Pause, ...) in der Lücke,
        // sind die direkten Nachbarn keine zwei Linienfahrten mehr und es
        // wird nichts Zusätzliches eingefügt (sonst Überlappung).
        const zusaetzliche = [];
        for (let i = 0; i < liste.length - 1; i++) {
            const aktuell = liste[i], naechste = liste[i + 1];
            if (!aktuell.linie || !naechste.linie) continue;
            const gleicherOrt = aktuell.nach_kuerzel && naechste.von_kuerzel &&
                aktuell.nach_kuerzel === naechste.von_kuerzel;
            if (!gleicherOrt) continue;
            const ankunftSort = sortWert(aktuell.bis_zeit), abfahrtSort = sortWert(naechste.von_zeit);
            if (ankunftSort === null || abfahrtSort === null || abfahrtSort <= ankunftSort) continue;
            const schluessel = `${aktuell.bis_zeit}|${naechste.von_zeit}|${aktuell.nach_kuerzel}`;
            if (explizit.has(schluessel)) continue;   // schon als eigene Zeile erfasst
            const durchPauseAbgedeckt = (pausen || []).some(p => {
                if ((p.ort_kuerzel || '') !== aktuell.nach_kuerzel) return false;
                const pVon = sortWert(p.von), pBis = sortWert(p.bis);
                return pVon !== null && pBis !== null && pVon < abfahrtSort && pBis > ankunftSort;
            });
            if (durchPauseAbgedeckt) continue;   // Luecke ist bereits eine erfasste Pause
            zusaetzliche.push({
                von_zeit: aktuell.bis_zeit, von: aktuell.nach, von_kuerzel: aktuell.nach_kuerzel,
                bis_zeit: naechste.von_zeit, nach: aktuell.nach, nach_kuerzel: aktuell.nach_kuerzel,
                typ: 'Wenden', linie: '', umlauf: aktuell.umlauf || naechste.umlauf || '',
                abgeleitet: true
            });
        }

        return liste.concat(zusaetzliche).sort((a, b) => (sortWert(a.von_zeit) ?? 0) - (sortWert(b.von_zeit) ?? 0));
    }

    // Baut aus den Dienst-Details eine chronologische Liste aller Punkte,
    // für die ein Fahrtbericht anfällt: Wendezeiten, Pausen, Übernahme/
    // Übergabe - jeweils mit Ankunft/Abfahrt und der anschließenden Fahrt.
    function aktuelleFahrtPunkteBauen(d) {
        if (!d) return [];
        const beginnMin = (() => {
            if (!d.beginn) return 0;
            const [h, m] = d.beginn.split(':').map(Number);
            return isNaN(h) ? 0 : h * 60 + m;
        })();
        const sortWert = (zeit) => {
            if (!zeit) return null;
            const [h, m] = String(zeit).split(':').map(Number);
            if (isNaN(h)) return null;
            let wert = h * 60 + m;
            if (wert < beginnMin) wert += 24 * 60;   // Folgetag
            return wert;
        };

        const fahrten = fahrtenMitAbgeleitetenWenden(d.fahrten, d.beginn, d.pausen);

        // Nächste Linienfahrt ab einem Zeitpunkt (für die "danach"-Zeile bei
        // Standzeilen, die selbst keine Linie tragen).
        const naechsteLinie = (abZeit) => {
            const ab = sortWert(abZeit);
            if (ab === null) return null;
            return fahrten.find(f => f.linie && sortWert(f.von_zeit) !== null && sortWert(f.von_zeit) >= ab) || null;
        };

        const punkte = [];

        // Dienstbeginn/-ende: reine Abfahrt- bzw. Ankunft-Punkte am Rand.
        // Faellt der Dienstbeginn zeitlich und oertlich genau mit der ersten
        // Uebernahme zusammen (Dienst beginnt direkt durch Uebernahme eines
        // fremden Wagens), reicht der Uebernahme-Punkt allein - sonst
        // erscheinen zwei fast identische Punkte fuer denselben Moment.
        const beginnIstUebernahme = (d.wechsel || []).some(w =>
            (w.art || '').toLowerCase().startsWith('uebernahme') &&
            w.zeit === d.beginn && w.ort_kuerzel && w.ort_kuerzel === d.beginn_ort_kuerzel);
        if (d.beginn && !beginnIstUebernahme) {
            punkte.push({
                ankunft: null, abfahrt: d.beginn,
                ort: aktuelleFahrtOrtName(d.beginn_ort, d.beginn_ort_kuerzel),
                ortKuerzel: d.beginn_ort_kuerzel || '',
                sort: sortWert(d.beginn),
                folgeLinie: d.beginn_linie || '', folgeUmlauf: d.beginn_umlauf || '',
                folgeNach: dienstRichtung(d),
                label: 'Dienstbeginn'
            });
        }
        if (d.ende) {
            punkte.push({
                ankunft: d.ende, abfahrt: null,
                ort: aktuelleFahrtOrtName(d.ende_ort, d.ende_ort_kuerzel),
                ortKuerzel: d.ende_ort_kuerzel || '',
                sort: sortWert(d.ende),
                label: 'Dienstende'
            });
        }

        // Einsetzen/Aussetzen: eigener Punkt an dem Rand, an dem der Fahrer
        // in den bzw. aus dem Fahrgastbetrieb wechselt (Betriebshof).
        fahrten.forEach(f => {
            const typ = (f.typ || '').toLowerCase();
            if (typ === 'e') {
                punkte.push({
                    ankunft: null, abfahrt: f.von_zeit || null,
                    ort: aktuelleFahrtOrtName(f.von, f.von_kuerzel),
                    ortKuerzel: f.von_kuerzel || '',
                    sort: sortWert(f.von_zeit),
                    folgeLinie: f.linie || '', folgeUmlauf: f.umlauf || '',
                    folgeNach: String(f.nach || '').trim() || richtungDerLinie(fahrten, f.linie, f) || aktuelleFahrtOrtName(f.nach, f.nach_kuerzel),
                    label: 'Einsetzen'
                });
            } else if (typ === 'a') {
                punkte.push({
                    ankunft: f.bis_zeit || null, abfahrt: null,
                    ort: aktuelleFahrtOrtName(f.nach, f.nach_kuerzel),
                    ortKuerzel: f.nach_kuerzel || '',
                    sort: sortWert(f.bis_zeit),
                    label: 'Aussetzen'
                });
            }
        });

        (d.wechsel || []).forEach(w => {
            const art = (w.art || '').toLowerCase();
            if (art.startsWith('uebernahme')) {
                // "w.abfahrt" ist in der Praxis unzuverlässig (bezieht sich
                // teils auf die Fahrt des ABGEBENDEN Fahrers, nicht auf die
                // eigene Abfahrt) - stattdessen die tatsächlich folgende
                // Linienfahrt ab dem Übernahme-Zeitpunkt nachschlagen.
                const folgeAbfahrt = naechsteLinie(w.zeit);
                punkte.push({
                    ankunft: w.zeit || null,
                    abfahrt: (folgeAbfahrt && folgeAbfahrt.von_zeit) || w.abfahrt || null,
                    ort: aktuelleFahrtOrtName(w.ort, w.ort_kuerzel),
                    ortKuerzel: w.ort_kuerzel || '',
                    sort: sortWert(w.zeit),
                    folgeLinie: w.linie, folgeUmlauf: w.umlauf,
                    folgeNach: aktuelleFahrtOrtName(w.nach, w.nach_kuerzel),
                    label: 'Übernahme'
                });
            } else if (art.startsWith('uebergabe')) {
                punkte.push({
                    ankunft: null, abfahrt: w.zeit || null,
                    ort: aktuelleFahrtOrtName(w.ort, w.ort_kuerzel),
                    ortKuerzel: w.ort_kuerzel || '',
                    sort: sortWert(w.zeit),
                    label: 'Übergabe'
                });
            }
        });

        (d.pausen || []).forEach(p => {
            const folge = naechsteLinie(p.bis);
            punkte.push({
                ankunft: p.von || null, abfahrt: p.bis || null,
                ort: aktuelleFahrtOrtName(p.ort, p.ort_kuerzel),
                ortKuerzel: p.ort_kuerzel || '',
                sort: sortWert(p.von),
                folgeLinie: p.danach_linie || (folge && folge.linie) || '',
                folgeUmlauf: p.danach_umlauf || (folge && folge.umlauf) || '',
                folgeNach: aktuelleFahrtOrtName(p.danach_nach, p.danach_nach_kuerzel) ||
                    (folge ? aktuelleFahrtOrtName(folge.nach, folge.nach_kuerzel) : ''),
                label: p.art === 'BEZPAU' ? 'Bezahlte Pause' : 'Pause'
            });
        });

        // Standzeiten (Wenden/Rüst/NB/ÜWegZ) - eigene Zeilen der KI plus die
        // von fahrtenMitAbgeleitetenWenden ergänzten Lücken zwischen zwei
        // Linienfahrten an derselben Haltestelle.
        fahrten.forEach(f => {
            if (f.linie) return;   // normale Linienfahrt - kein Report-Punkt
            const typ = (f.typ || '').toLowerCase();
            if (!AKTUELLEFAHRT_STANDTYPEN.includes(typ)) return;
            const folge = naechsteLinie(f.bis_zeit);
            const ortBis = (f.nach_kuerzel && f.nach_kuerzel !== f.von_kuerzel)
                ? aktuelleFahrtOrtName(f.nach, f.nach_kuerzel) : '';
            punkte.push({
                ankunft: f.von_zeit || null, abfahrt: f.bis_zeit || null,
                ort: aktuelleFahrtOrtName(f.von, f.von_kuerzel) + (ortBis ? ' → ' + ortBis : ''),
                ortKuerzel: f.von_kuerzel || '',
                sort: sortWert(f.von_zeit),
                folgeLinie: (folge && folge.linie) || '', folgeUmlauf: (folge && folge.umlauf) || '',
                folgeNach: folge ? aktuelleFahrtOrtName(folge.nach, folge.nach_kuerzel) : '',
                label: f.typ || 'Wenden'
            });
        });

        // Übergänge OHNE Wartezeit zwischen zwei direkt aufeinanderfolgenden
        // Fahrten an derselben Haltestelle (z. B. Einsetzen endet genau da,
        // wo die erste Linienfahrt beginnt) - fahrtenMitAbgeleitetenWenden
        // ergänzt nur echte Standzeiten, diese 0-Minuten-Übergänge fehlen
        // sonst als Punkt.
        const linienfolge = fahrten.filter(f => f.linie && sortWert(f.von_zeit) !== null)
            .sort((a, b) => sortWert(a.von_zeit) - sortWert(b.von_zeit));
        for (let i = 0; i < linienfolge.length - 1; i++) {
            const aktuell = linienfolge[i], naechste = linienfolge[i + 1];
            if (!aktuell.nach_kuerzel || aktuell.nach_kuerzel !== naechste.von_kuerzel) continue;
            const ankunftSort = sortWert(aktuell.bis_zeit), abfahrtSort = sortWert(naechste.von_zeit);
            if (ankunftSort === null || abfahrtSort !== ankunftSort) continue;   // nur echte 0-Minuten-Übergänge
            punkte.push({
                ankunft: aktuell.bis_zeit, abfahrt: naechste.von_zeit,
                ort: aktuelleFahrtOrtName(aktuell.nach, aktuell.nach_kuerzel),
                ortKuerzel: aktuell.nach_kuerzel || '',
                sort: ankunftSort,
                folgeLinie: naechste.linie || '', folgeUmlauf: naechste.umlauf || '',
                folgeNach: aktuelleFahrtOrtName(naechste.nach, naechste.nach_kuerzel),
                label: 'Weiter'
            });
        }

        const sortiert = punkte.filter(p => p.sort !== null).sort((a, b) => a.sort - b.sort);
        return aktuelleFahrtPunkteZusammenfassen(sortiert);
    }

    // Fasst mehrere lückenlos aufeinanderfolgende Punkte an DERSELBEN
    // Haltestelle (z. B. Rüst, dann bezahlte, dann unbezahlte Pause direkt
    // hintereinander an einem Ort) zu einem einzigen Ankunft/Abfahrt-Punkt
    // zusammen - für den Fahrtbericht zählt nur die erste Ankunft und die
    // letzte Abfahrt an diesem Ort, nicht die Unterteilung dazwischen.
    // Grenzpunkte bleiben immer eigenständig, auch wenn sie lückenlos an
    // einen Wenden-/Pausen-Punkt anschließen - sie markieren einen fürs
    // Melden wichtigen Wechsel (Dienstbeginn/-ende, Betriebshof, Fahrerwechsel).
    const AKTUELLEFAHRT_GRENZPUNKTE = ['Dienstbeginn', 'Dienstende', 'Einsetzen', 'Aussetzen', 'Übernahme', 'Übergabe'];

    function aktuelleFahrtPunkteZusammenfassen(punkte) {
        const ergebnis = [];
        punkte.forEach(p => {
            const letzter = ergebnis[ergebnis.length - 1];
            const gleicherOrt = letzter && letzter.ortKuerzel && p.ortKuerzel &&
                letzter.ortKuerzel === p.ortKuerzel;
            const nahtlos = letzter && letzter.abfahrt && p.ankunft && letzter.abfahrt === p.ankunft;
            const grenzpunkt = AKTUELLEFAHRT_GRENZPUNKTE.includes(letzter && letzter.label) ||
                AKTUELLEFAHRT_GRENZPUNKTE.includes(p.label);
            if (letzter && gleicherOrt && nahtlos && !grenzpunkt) {
                if (p.abfahrt) letzter.abfahrt = p.abfahrt;
                if (p.folgeLinie) {
                    letzter.folgeLinie = p.folgeLinie;
                    letzter.folgeUmlauf = p.folgeUmlauf;
                    letzter.folgeNach = p.folgeNach;
                }
            } else {
                ergebnis.push({ ...p });
            }
        });
        return ergebnis;
    }

    // Anhand der tatsächlichen Uhrzeit den aktuellen Punkt bestimmen: der
    // letzte Punkt, dessen (Folgetag-korrigierte) Zeit schon erreicht ist.
    // Nutzt echte Date-Objekte statt reiner Minuten-Arithmetik, damit z. B.
    // ein Öffnen VOR Dienstbeginn (Uhrzeit liegt vor der ersten Wende, ohne
    // dass der Dienst über Mitternacht geht) nicht faelschlich als "schon
    // fast am Ende, muss ueber Mitternacht gelaufen sein" missverstanden wird.
    function aktuelleFahrtAutoIndex(punkte) {
        if (!punkte.length) return 0;
        const heuteStr = heutigesDatumStr();
        const jetzt = new Date();
        let index = 0;
        for (let i = 0; i < punkte.length; i++) {
            const wann = aktuelleFahrtAlsDatum(heuteStr, punkte[i].sort);
            if (wann && wann.getTime() <= jetzt.getTime()) index = i; else break;
        }
        return index;
    }

    function aktuelleFahrtZeile(text) {
        return text ? `<div class="af-zeile">${sicher(text)}</div>` : '';
    }


    function aktuelleFahrtRendern() {
        const box = document.getElementById('afInhalt');
        if (!box) return;

        if (!aktuelleFahrtPunkte.length) {
            box.innerHTML = '<p class="seiten-hinweis">Für den heutigen Dienst wurden keine Wende-, Pausen- oder Übergabepunkte erkannt.</p>';
            const nEl = document.getElementById('afNaechste');
            if (nEl) nEl.innerHTML = '';
            return;
        }

        const istManuell = aktuelleFahrtManuellerIndex !== null;
        const index = Math.max(0, Math.min(aktuelleFahrtPunkte.length - 1,
            istManuell ? aktuelleFahrtManuellerIndex : aktuelleFahrtAutoIndex(aktuelleFahrtPunkte)));
        const p = aktuelleFahrtPunkte[index];

        const folgeTeile = [];
        if (p.folgeLinie) folgeTeile.push('Linie ' + p.folgeLinie);
        if (p.folgeUmlauf) folgeTeile.push('Umlauf ' + p.folgeUmlauf);
        let folge = folgeTeile.join(' · ');
        if (p.folgeNach) folge += (folge ? ' → ' : '→ ') + p.folgeNach;

        // Eigene Dienstnummer nur auf den ersten beiden Punkten des Tages
        // zeigen (Übernahme/Dienstbeginn + erste Endhaltestelle) - dort
        // steht sie auch auf dem Fahrtbericht.
        const eigeneDienstnummer = aktuelleFahrtDetails && aktuelleFahrtDetails.dienstnummer;
        const zeigeDienstnummer = index < 2 && eigeneDienstnummer;
        const kopfzeile = aktuelleFahrtLabelText(p.label) +
            (zeigeDienstnummer ? ' · Dienst ' + eigeneDienstnummer : '');

        const nurAbfahrt = p.ankunft && p.ankunft === p.abfahrt;
        const zeitFelder = nurAbfahrt
            ? `<div class="af-zeiten"><div class="af-zeit-feld ab"><small>Abfahrt</small><b>${sicher(p.abfahrt)}</b></div></div>`
            : ((p.ankunft || p.abfahrt) ? `<div class="af-zeiten">
                ${p.ankunft ? `<div class="af-zeit-feld"><small>Ankunft</small><b>${sicher(p.ankunft)}</b></div>` : '<div></div>'}
                ${p.abfahrt ? `<div class="af-zeit-feld ab"><small>Abfahrt</small><b>${sicher(p.abfahrt)}</b></div>` : '<div></div>'}
            </div>` : '');

        box.innerHTML = `
            <div class="af-gross">
                <div class="af-label"><span>${sicher(kopfzeile)}</span><span class="af-zaehler">${index + 1}/${aktuelleFahrtPunkte.length}</span></div>
                <div class="af-ort">${sicher(p.ort || '–')}</div>
                ${zeitFelder}
                ${folge ? `<div class="af-folge">danach: <b>${sicher(folge)}</b></div>` : ''}
            </div>
            <div class="af-nav">
                <button onclick="aktuelleFahrtZurueck()" ${index === 0 ? 'disabled' : ''}>‹ Zurück</button>
                <button onclick="aktuelleFahrtJetzt()" ${istManuell ? '' : 'disabled'}>Jetzt</button>
                <button onclick="aktuelleFahrtWeiter()" ${index === aktuelleFahrtPunkte.length - 1 ? 'disabled' : ''}>Weiter ›</button>
            </div>`;

        const naechste = aktuelleFahrtPunkte.slice(index + 1, index + 3);
        const naechsteEl = document.getElementById('afNaechste');
        if (naechsteEl) {
            naechsteEl.innerHTML = naechste.length ? '<div class="af-abschnitt">Als Nächstes</div>' + naechste.map(np => `
                <div class="af-kleine-karte">
                    <span class="af-kleine-zeit">${sicher(np.ankunft || np.abfahrt || '')}</span>
                    <span class="af-kleine-ort">${np.label && !/^(Wenden|Weiter)$/i.test(np.label) ? sicher(aktuelleFahrtLabelText(np.label)) + ' · ' : ''}${sicher(np.ort || '–')}</span>
                </div>`).join('') : '';
        }
    }

    function aktuelleFahrtWeiter() {
        const aktuell = aktuelleFahrtManuellerIndex !== null
            ? aktuelleFahrtManuellerIndex : aktuelleFahrtAutoIndex(aktuelleFahrtPunkte);
        aktuelleFahrtManuellerIndex = Math.min(aktuelleFahrtPunkte.length - 1, aktuell + 1);
        aktuelleFahrtRendern();
    }
    function aktuelleFahrtZurueck() {
        const aktuell = aktuelleFahrtManuellerIndex !== null
            ? aktuelleFahrtManuellerIndex : aktuelleFahrtAutoIndex(aktuelleFahrtPunkte);
        aktuelleFahrtManuellerIndex = Math.max(0, aktuell - 1);
        aktuelleFahrtRendern();
    }
    function aktuelleFahrtJetzt() {
        aktuelleFahrtManuellerIndex = null;
        aktuelleFahrtRendern();
    }

    // Von der Startseite: heutigen Dienst laden und die Ansicht öffnen.
    function aktuelleFahrtOeffnen() {
        const heuteStr = heutigesDatumStr();
        const sch = gespeicherteSchichten[heuteStr];
        if (!sch || sch.typ) return;
        aktuelleFahrtManuellerIndex = null;
        aktuelleFahrtDetails = sch.details || null;
        aktuelleFahrtPunkte = aktuelleFahrtPunkteBauen(aktuelleFahrtDetails);
        wechselSeite('aktuellefahrt');
        bvgFahrtHinweisAktualisieren();
    }

    function aktuelleFahrtIntervallStarten() {
        aktuelleFahrtIntervallStoppen();
        aktuelleFahrtIntervall = setInterval(aktuelleFahrtRendern, 15000);
    }
    function aktuelleFahrtIntervallStoppen() {
        if (aktuelleFahrtIntervall) { clearInterval(aktuelleFahrtIntervall); aktuelleFahrtIntervall = null; }
    }

    // ============================================================
    //  FEHLERMELDUNG AM FAHRERPULT - Piktogramme nachschlagen. Alle Eintraege stammen ausschliesslich aus
    //  dem Handbuch-Auszug "Steuerungselemente" des jeweiligen Busmodells -
    //  bei weiteren Busmodellen hier einfach einen neuen Eintrag ergaenzen.
    // ============================================================
    // Jedes Busmodell hat "gruppen" (frueher fest "rot"/"gelb") - eine Liste
    // beliebig vieler Farbkategorien mit eigener Handlungsanweisung. So lassen
    // sich Modelle mit anderen Kategorien (z. B. zusaetzlich Gruen oder eine
    // nicht farblich sortierte Gruppe) ergaenzen, ohne den Code zu aendern.
    const BUSMODELLE = {
        'solaris-urbino-12-electric': {
            name: 'Solaris Urbino 12 electric', kurz: 'Solaris Urbino 12',
            gruppen: [{
                farbe: 'rot', label: 'Rot',
                hinweis: 'Fahrzeug sofort anhalten, ohne eine Verkehrsgefahr zu verursachen. Weitere Fahrt ist untersagt.',
                eintraege: [
                { symbol: 'MUX 1.1 / 1.2 / 1.3 / 1.4 / 2.1 / 2.2 / 2.3 / 2.4', bedeutung: 'Störung MUX (1.1; 1.2; 1.3; 1.4; 2.1; 2.2; 2.3; 2.4)' },
                { symbol: 'MUX', bedeutung: 'Störung mehr als eines Multiplexers' },
                { symbol: 'PCAN', bedeutung: 'CAN (PCAN)-Störung' },
                { symbol: 'XCAN', bedeutung: 'CAN (XCAN)-Störung' },
                { symbol: 'Batterie-Symbol', bedeutung: 'Nicht aufgeladen' },
                { symbol: 'Batterie-Symbol', bedeutung: 'Spannung unter 21 V' },
                { symbol: 'Batterie mit Ausrufezeichen', bedeutung: 'Störung des Ladegeräts' },
                { symbol: 'P im Kreis', bedeutung: 'Feststellbremse' },
                { symbol: 'Durchgestrichenes Feststellbrems-Symbol', bedeutung: 'Störung des Feststellbremsventils' },
                { symbol: 'Dreieck mit Ausrufezeichen', bedeutung: 'Fehler / Störung der Isolierung' },
                { symbol: 'Dreieck (Türnotöffnung)', bedeutung: 'Türnotöffnung eingeschaltet' },
                { symbol: 'Doppeltür-Symbol', bedeutung: 'Tür Störung' },
                { symbol: 'Tür-Symbol', bedeutung: 'BCAN-Kommunikationsfehler' },
                { symbol: 'EBS', bedeutung: 'Störung des EBS' },
                { symbol: 'ECAS + PCAN', bedeutung: 'PCAN-Kommunikationsfehler (ECAS)' },
                { bedeutung: 'Störung des DC/AC-Wandlers' },
                { bedeutung: 'Störung des ECAS-Systems' },
                { symbol: 'ECAS + PCAN', bedeutung: 'PCAN-Kommunikationsfehler (ECAS)' },
                { symbol: 'R im Kreis', bedeutung: 'Störung Retarder' },
                { symbol: 'R + PCAN', bedeutung: 'PCAN-Kommunikationsfehler (Retarder)' },
                { bedeutung: 'Störung des Elektroantriebs' },
                { symbol: '(1)', bedeutung: 'Störung – Bremskreis 1' },
                { symbol: '(2)', bedeutung: 'Störung – Bremskreis 1' },
                { bedeutung: 'Störung – Luftdruck' },
                { symbol: 'F + Hauptplatine', bedeutung: 'Brand der Hauptplatine' },
                { symbol: 'F + Hilfspumpenkammer', bedeutung: 'Brand in der Hilfspumpenkammer' },
                { symbol: 'F + Antriebssystem', bedeutung: 'Brand in der Kammer des Antriebssystems' },
                { symbol: 'F + Dach', bedeutung: 'Brand auf dem Dach' },
                { symbol: 'F + Kompressorkammer', bedeutung: 'Brand in der Kompressorkammer' },
                { symbol: 'F + Fahrmotor', bedeutung: 'Brand in der Kammer des Fahrmotors' },
                { symbol: 'F + Batterienkammer', bedeutung: 'Brand in der Batterienkammer' },
                { symbol: 'F', bedeutung: 'Fehler des Brandmeldesystems' },
                { bedeutung: 'Zu hohe Temperatur der Kühlflüssigkeit' },
                { bedeutung: 'Überhitzung des Kühlsystems' },
                { bedeutung: 'Überhitzung des Kompressors' },
                { symbol: 'I CAN', bedeutung: 'Kommunikationsfehler (Tachograph)' },
                { symbol: 'Batterie-Symbol', bedeutung: 'Störung der Antriebsbatterien' },
                { symbol: 'NOTSTOPP', bedeutung: 'NOTSTOPP' },
                { bedeutung: 'Störung der Sicherung' },
                { bedeutung: 'Sehr niedriger Reifendruck' },
                { bedeutung: 'Trennschalter des Antriebsbehälters ist offen' },
                { bedeutung: 'Retarder CAN' },
                { bedeutung: 'Kompressorfehler' },
                    { symbol: 'STOP', bedeutung: 'STOP' }
                ]
            }, {
                farbe: 'gelb', label: 'Gelb',
                hinweis: 'Fahrzeug anhalten, ohne Gefährdung des Straßenverkehrs. Bei einer Störung ist das Service zu benachrichtigen.',
                eintraege: [
                { symbol: 'Batterie-Symbol', bedeutung: 'Spannung unter 23 V' },
                { symbol: 'Batterie mit Ausrufezeichen', bedeutung: 'Fehler des Ladegeräts' },
                { symbol: 'Dreieck mit Ausrufezeichen', bedeutung: 'Fehler / Störung der Isolierung' },
                { bedeutung: 'Niedriges Niveau des Kühlmittels' },
                { bedeutung: 'Niedriger Scheibenwischwasserstand' },
                { bedeutung: 'Türfehler' },
                { symbol: 'Dreieck (Türnotöffnung)', bedeutung: 'Türnotöffnung eingeschaltet' },
                { bedeutung: 'Niedriger Heizflüssigkeitsstand' },
                { bedeutung: 'Hoher Verbrauch der Bremsbeläge' },
                { symbol: 'ASR', bedeutung: 'Auslösung des ASR-Systems' },
                { symbol: 'ABS', bedeutung: 'Auslösung des ABS' },
                { symbol: 'EBS', bedeutung: 'Fehler des EBS' },
                { symbol: 'ATC', bedeutung: 'ATC-Fehler' },
                { symbol: 'ATC', bedeutung: 'ATC-Kommunikationsfehler' },
                { bedeutung: 'Fehler des DC/AC-Wandlers' },
                { bedeutung: 'Fehler des ECAS-Systems' },
                { symbol: 'R', bedeutung: 'Fehler des Retarders' },
                { bedeutung: 'Ladefehler' },
                { bedeutung: 'Fehler des Elektroantriebs' },
                { bedeutung: 'Notlösung Haltestellenbremse' },
                { symbol: 'F', bedeutung: 'Fehler des Brandmeldesystems' },
                { symbol: 'F + Dach', bedeutung: 'Fehler der Meldeleitung auf dem Dach' },
                { symbol: 'F + Antriebssystem', bedeutung: 'Fehler der Meldeleitung in der Kammer des Antriebssystems' },
                { bedeutung: 'Niedriger Ölstand im Luftkompressor' },
                { bedeutung: 'Überwachungsfehler' },
                { bedeutung: 'Hohe Temperatur des Kühlmittels' },
                { bedeutung: 'Sicherungsfehler' },
                { bedeutung: 'Blockade - Alkomat' },
                { bedeutung: 'Fehler des zentralen Schmiersystems' },
                { bedeutung: 'Niedriger Schmiermittelstand im zentralen Schmiersystem' },
                { bedeutung: 'Niedriger Druck im zentralen Schmiersystem' },
                { bedeutung: 'Niedriger Reifendruck' },
                { bedeutung: 'Fehler des Systems zur Überwachung des Reifendrucks' },
                { bedeutung: 'Hohe Temperatur der Reifen' },
                { bedeutung: 'Reserve Ofenkraftstoff' },
                { bedeutung: 'Ölstand für Servolenkung niedrig' },
                { bedeutung: 'Fehler der Servolenkung' },
                { bedeutung: 'Fehler der Außenbeleuchtung' },
                { symbol: 'ESC', bedeutung: 'ESC aktiv' },
                { bedeutung: 'FEHLER des DC/AC-Umformers' },
                { symbol: 'Batterie-Symbol', bedeutung: 'Fehler der Antriebsbatterien' },
                { bedeutung: 'Öffnen der Fahrerkabine' },
                { bedeutung: 'Niedriger Kühlmittelstand im Generator-/Fahrmotorsystem' },
                { bedeutung: 'Niedriger Kühlmittelstand des Hochspannungsumrichters' },
                { symbol: 'A/C', bedeutung: 'Konverterfehler A/C' },
                { bedeutung: 'Keine Möglichkeit, die Traktionsbatterien aufzuladen' },
                { bedeutung: 'Keine Möglichkeit, die Traktionsbatterien zu entladen' },
                { bedeutung: 'Ladefehler' },
                { bedeutung: 'Antriebausschalten' },
                { bedeutung: 'Reduzierung des Drehmoments' },
                { symbol: 'MAX km/h', bedeutung: 'Geschwindigkeitsüberschreitung' },
                { bedeutung: 'Notfahrt' },
                    { bedeutung: 'Ausfall des Hilfswechselrichters' }
                ]
            }]
        },
        'adl-enviro500': {
            name: 'Alexander Dennis Enviro500', kurz: 'ADL Enviro500',
            gruppen: [{
                // Nicht farblich einsortiert - im Original ohne Rahmenfarbe abgebildet.
                farbe: 'allgemein', label: 'Allgemeine Warnleuchten', hinweis: '',
                eintraege: [
                    { bedeutung: 'Stop-Warnung (RSL): Leuchtet auf, wenn ein Fehler vorliegt. Wird mit einer Bildschirmwarnung angezeigt. Leuchtet, bis der Fehler behoben ist.' },
                    { bedeutung: 'Motorstörung: Zeigt an, dass der Motor eine Fehlfunktion hat.' },
                    { bedeutung: 'ABS/ASR: Leuchtet auf, wenn ein Fehler (rot) oder eine Störung (gelb) im ABS oder ASR-System vorliegt.' },
                    { bedeutung: 'Niedriger Luftdruck: Zeigt an, dass der Luftdruck zu niedrig ist.' }
                ]
            }, {
                farbe: 'rot', label: 'Rot',
                hinweis: 'Fahrzeug sofort sicher anhalten, Motor abstellen und Service/Werkstatt kontaktieren.',
                eintraege: [
                    { bedeutung: 'Niveauregulierung Fehler' },
                    { bedeutung: 'Motorhaube geöffnet' },
                    { bedeutung: 'Tür offen / Fehler' },
                    { bedeutung: 'Zentrale Steuerung Fehler' },
                    { bedeutung: 'E – Kühlung Fehler' },
                    { bedeutung: 'Notabschaltung Aktiv' },
                    { bedeutung: 'Feuerlöschanlage Aktiv' },
                    { bedeutung: 'Rampe Ausgefahren' }
                ]
            }, {
                farbe: 'gelb', label: 'Gelb',
                hinweis: 'Baldmöglichst prüfen lassen. Vorsichtig weiterfahren und die Anzeige im Blick behalten.',
                eintraege: [
                    { bedeutung: 'Motor prüfen' },
                    { bedeutung: 'Motor Öldruck niedrig' },
                    { bedeutung: 'Temperatur Kühlflüssigkeit hoch' },
                    { bedeutung: 'Motor-Kühlflüssigkeitsstand niedrig' },
                    { bedeutung: 'Luftsystem Fehler' },
                    { bedeutung: 'EBS Warnung' },
                    { bedeutung: 'ESC Fehler' },
                    { bedeutung: 'Retarder Fehler' },
                    { bedeutung: 'Getriebefehler' },
                    { bedeutung: 'Getriebetemperatur zu hoch' },
                    { bedeutung: 'Getriebeschutzfunktion' },
                    { bedeutung: 'Lenkachse hinten Fehler' },
                    { bedeutung: 'Geschwindigkeitsbegrenzer aktiv' },
                    { bedeutung: 'Lichtmaschine Fehler' },
                    { bedeutung: 'Batterieschutz aktiviert' },
                    { bedeutung: 'Niveauregulierung Fehler' },
                    { bedeutung: 'Fehler in Abgasreinigung' },
                    { bedeutung: 'Diesel Partikelfilter Rußpegel hoch' },
                    { bedeutung: 'Haltebremse Fehler' },
                    { bedeutung: 'Notschalter' },
                    { bedeutung: 'E – Kühlung Fehler' },
                    { bedeutung: 'Motorhaube Geöffnet' },
                    { bedeutung: 'Motor-Kühlflüssigkeitsstand niedrig' },
                    { bedeutung: 'Fehlfunktion OBD' },
                    { bedeutung: 'ESC Fehler' },
                    { bedeutung: 'ESC deaktiviert' },
                    { bedeutung: 'EBS Umkehrtest aktiv' },
                    { bedeutung: 'Retarder Aus' },
                    { bedeutung: 'Bremsbelag-Verschleiß' },
                    { bedeutung: 'Berganfahrhilfe Aus' },
                    { bedeutung: 'Lenkachse hinten Fehler' },
                    { bedeutung: 'Tankinhalt niedrig' },
                    { bedeutung: 'DEF Füllstand niedrig' },
                    { bedeutung: 'Fehler in Abgasreinigung' },
                    { bedeutung: 'Diesel Partikelfilter Rußpegel zu hoch' },
                    { bedeutung: 'Partikelfilter Regeneration geblockt' },
                    { bedeutung: 'Abgastemperatur hoch' },
                    { bedeutung: 'Motor gestoppt' },
                    { bedeutung: 'Stand Ölfüll-System niedrig' },
                    { bedeutung: 'Wischerflüssigkeit niedrig' },
                    { bedeutung: 'Umgebungstemperatur niedrig' },
                    { bedeutung: 'Zusatz-Kühlmittelheizung Fehler' },
                    { bedeutung: 'Zusatz-Kühlmittelheizung Aus' },
                    { bedeutung: 'Lampenausfall' },
                    { bedeutung: 'Nebelleuchte hinten aktiv' },
                    { bedeutung: 'Aussentür-Notkontrolle isoliert' },
                    { bedeutung: 'Nächste Haltestelle anhalten' },
                    { bedeutung: 'Rollstuhl/Rampe Stop' },
                    { bedeutung: 'Vorrang Stop (Kinderwagen)' },
                    { bedeutung: 'Vorrang Stop (ältere Person)' },
                    { bedeutung: 'Tür Fehler' },
                    { bedeutung: 'Fahrtenschreiber Fehler' },
                    { bedeutung: 'Feststellbremse betätigen' }
                ]
            }, {
                farbe: 'gruen', label: 'Grün (Info)',
                hinweis: 'Nur Information, keine Handlung nötig.',
                eintraege: [
                    { bedeutung: 'Partikelfilter Regeneration aktiv' },
                    { bedeutung: 'Anfahrhilfe aktiv' },
                    { bedeutung: 'Niveauregulierung aktiv' },
                    { bedeutung: 'Anzeige Gaspedalsperre aktiv' },
                    { bedeutung: 'Anzeige Retarder aktiv' },
                    { bedeutung: 'Seitenbeleuchtung aktiv' },
                    { bedeutung: 'Haltestellenbremse aktiv' },
                    { bedeutung: 'Prüfung Aussenbeleuchtung aktiviert' },
                    { bedeutung: 'Motorstart hinten aktiv' },
                    { bedeutung: 'Aussenspiegel Beheizung aktiv' },
                    { bedeutung: 'Zusatz-Kühlmittelheizung aktiv' },
                    { bedeutung: 'Bremspedal betätigen' },
                    { bedeutung: 'Tür geschlossen' }
                ]
            }]
        }
    };

    let fmModell = null;   // gewähltes Busmodell (Schlüssel in BUSMODELLE)

    // Kurzer Hinweis neben dem Farbnamen; Details stehen im Fenster beim Antippen eines Symbols
    function fehlermeldungKurzhinweis(gruppe) {
        if (gruppe.farbe === 'rot') return 'sofort anhalten';
        if (gruppe.farbe === 'gruen') return 'nur Information';
        if (gruppe.farbe === 'gelb') return /Service/.test(gruppe.hinweis || '') ? 'anhalten, Service melden' : 'baldmöglichst prüfen';
        return '';
    }

    function fehlermeldungSeiteOeffnen() {
        const schluessel = Object.keys(BUSMODELLE);
        if (!fmModell || !BUSMODELLE[fmModell]) fmModell = schluessel[0];
        document.getElementById('fmTabs').innerHTML = schluessel.map(k =>
            `<button type="button" class="segment-btn${k === fmModell ? ' aktiv' : ''}" data-modell="${sicher(k)}" onclick="fehlermeldungModellWaehlen(this.dataset.modell)">${sicher(BUSMODELLE[k].kurz || BUSMODELLE[k].name)}</button>`).join('');
        fehlermeldungListeRendern();
    }

    function fehlermeldungModellWaehlen(schluessel) {
        fmModell = schluessel;
        fehlermeldungSeiteOeffnen();
    }

    function fehlermeldungIconPfad(modellSchluessel, farbe, index) {
        return `busfehler-icons/${modellSchluessel}/${farbe}-${String(index).padStart(2, '0')}.png`;
    }

    // Nur Piktogramme als Kacheln, nach Farbe gruppiert. Die Beschriftung erscheint erst beim Antippen (Fenster).
    // Die Suche filtert nach Bedeutung und Symboltext.
    function fehlermeldungListeRendern() {
        const modellSchluessel = fmModell;
        const modell = BUSMODELLE[modellSchluessel];
        const el = document.getElementById('fmListe');
        if (!modell || !el) return;
        const suchfeld = document.getElementById('fmSuche');
        const suchbegriff = (suchfeld && suchfeld.value || '').toLowerCase().trim();

        const inhalt = modell.gruppen.map((gruppe) => {
            const kacheln = gruppe.eintraege.map((e, i) => {
                const text = [e.symbol, e.bedeutung].filter(Boolean).join(' ').toLowerCase();
                if (suchbegriff && !text.includes(suchbegriff)) return '';
                return `<button type="button" class="fm-kachel" data-modell="${sicher(modellSchluessel)}" data-farbe="${sicher(gruppe.farbe)}" data-index="${i + 1}"
                            onclick="fehlermeldungDetailOeffnen(this.dataset.modell, this.dataset.farbe, Number(this.dataset.index))"
                            aria-label="${sicher(e.bedeutung)}">
                        <img src="${fehlermeldungIconPfad(modellSchluessel, gruppe.farbe, i + 1)}" alt="" loading="lazy">
                    </button>`;
            }).join('');
            if (!kacheln) return '';
            const kurz = fehlermeldungKurzhinweis(gruppe);
            return `<div class="fm-gruppe">
                <div class="fm-gruppen-kopf fm-farbe-${sicher(gruppe.farbe)}">${sicher(gruppe.label)}${kurz ? `<span class="fm-kurz">${sicher(kurz)}</span>` : ''}</div>
                <div class="fm-raster">${kacheln}</div>
            </div>`;
        }).join('');
        el.innerHTML = inhalt || '<p class="seiten-hinweis">Kein Symbol gefunden.</p>';
    }

    const FM_FARBEN = { rot: '#EF4444', gelb: '#FFD100', gruen: '#22C55E' };

    // Fenster mit grossem Symbol + Bedeutung + Handlungshinweis, wenn eine Kachel angetippt wird.
    function fehlermeldungDetailOeffnen(modellSchluessel, farbe, index) {
        const modell = BUSMODELLE[modellSchluessel];
        const gruppe = modell && modell.gruppen.find((g) => g.farbe === farbe);
        const eintrag = gruppe && gruppe.eintraege[index - 1];
        if (!eintrag) return;
        document.getElementById('fmDetailBild').src = fehlermeldungIconPfad(modellSchluessel, farbe, index);
        document.getElementById('fmDetailText').innerText = eintrag.bedeutung;
        document.getElementById('fmDetailEtikett').innerHTML =
            `<i style="background:${FM_FARBEN[farbe] || '#9CA3AF'}"></i>${sicher(gruppe.label)} · ${sicher(modell.kurz || modell.name)}`;
        // Handlungsanweisung der Farbstufe (aus dem Handbuch-Auszug), z. B. bei Rot "sofort anhalten"
        const hinweisEl = document.getElementById('fmDetailHinweis');
        if (gruppe.hinweis) {
            hinweisEl.className = 'fm-hinweis fm-hinweis-' + gruppe.farbe;
            hinweisEl.innerHTML = `<b>${sicher(gruppe.label)} – was zu tun ist</b><br>${sicher(gruppe.hinweis)}`;
            hinweisEl.style.display = 'block';
        } else {
            hinweisEl.style.display = 'none';
        }
        document.getElementById('fmDetailOverlay').style.display = 'flex';
    }

    function fehlermeldungDetailSchliessen(ereignis) {
        if (ereignis && ereignis.target !== document.getElementById('fmDetailOverlay')) return;
        document.getElementById('fmDetailOverlay').style.display = 'none';
    }





    // ---------- Native App via Capacitor ----------
    // Im normalen Browser/PWA gibt es kein window.Capacitor - dort bleiben diese Funktionen
    // wirkungslose No-Ops bzw. der bisherige Web-Weg greift.
    function capacitorAktiv() {
        return typeof window !== 'undefined' && !!window.Capacitor &&
            typeof window.Capacitor.isNativePlatform === 'function' && window.Capacitor.isNativePlatform();
    }

    function widgetPlugin() {
        return capacitorAktiv() && window.Capacitor.Plugins ? window.Capacitor.Plugins.WidgetBridge : null;
    }

    function blobZuBase64(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const ergebnis = reader.result || '';
                const kommaIndex = ergebnis.indexOf(',');
                resolve(kommaIndex >= 0 ? ergebnis.slice(kommaIndex + 1) : ergebnis);
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    // Foto fuer ein Ereignis: Im Browser oeffnet der Datei-Dialog des Handys die Kamera/Galerie. In der
    // nativen App zeigt Capacitors WebView bei einem einfachen <input type=file> nur den Galerie-Picker -
    // dort fragt das Camera-Plugin per Auswahldialog, ob fotografiert oder aus der Galerie gewaehlt wird.
    async function ereignisFotoNativ() {
        try {
            const foto = await window.Capacitor.Plugins.Camera.getPhoto({ resultType: 'uri', source: 'PROMPT', quality: 85 });
            const antwort = await fetch(foto.webPath);
            ereignisFotoAusgewaehlt(await antwort.blob());
        } catch (e) {
            if (e && /cancel/i.test(e.message || '')) return;   // Nutzer hat abgebrochen
            console.log('Kamera-Aufnahme fehlgeschlagen:', e);
            alert('Kamera konnte nicht geöffnet werden.');
        }
    }

    // Uhrzeit "HH:MM" auf den Kalendertag von "heuteStr" gelegt, plus die Folgetag-Verschiebung aus
    // p.sort (>= 24*60 bei Zeiten nach Mitternacht).
    function aktuelleFahrtAlsDatum(heuteStr, sortMinuten) {
        if (sortMinuten == null) return null;
        const [jahr, monat, tag] = heuteStr.split('-').map(Number);
        const d = new Date(jahr, monat - 1, tag, 0, 0, 0, 0);
        d.setMinutes(sortMinuten);
        return d;
    }

    // Baut die Fahrtpunkte-Liste (wie in der "Aktuelle Fahrt"-Ansicht) fuer einen einzelnen gespeicherten
    // Tag auf, im fuers Widget passenden Format.
    function widgetPunkteFuerTag(datumStr, sch) {
        const punkte = aktuelleFahrtPunkteBauen(sch.details || null);
        // Dienstnummer auf jeder Uebernahme (kann mehrfach am Tag vorkommen) und auf der ersten Wende zeigen -
        // dort steht sie auch auf dem Fahrtbericht.
        const dienstnummer = sch.details && sch.details.dienstnummer;
        const ersteWendeIndex = punkte.findIndex(p => p.label === 'Wenden');
        return punkte.map((p, i) => {
            const zeitpunkt = aktuelleFahrtAlsDatum(datumStr, p.sort);
            const folgeTeile = [];
            if (p.folgeLinie) folgeTeile.push('Linie ' + p.folgeLinie);
            if (p.folgeUmlauf) folgeTeile.push('Umlauf ' + p.folgeUmlauf);
            let folge = folgeTeile.join(' · ');
            if (p.folgeNach) folge += (folge ? ' → ' : '→ ') + p.folgeNach;
            const zeigeDienstnummer = dienstnummer && (p.label === 'Übernahme' || i === ersteWendeIndex);
            const label = aktuelleFahrtLabelText(p.label) + (zeigeDienstnummer ? ' · Dienst ' + dienstnummer : '');
            return {
                label,
                ort: p.ort || '',
                ankunft: p.ankunft || '',
                abfahrt: p.abfahrt || '',
                folge,
                zeitMs: zeitpunkt ? zeitpunkt.getTime() : null
            };
        }).filter(p => p.zeitMs !== null);
    }

    // Die letzten 3 + heute (falls ein eigener Dienst ansteht) + die naechsten 3 gespeicherten Dienste fuers
    // Widget, damit sich dort per Pfeile durchblaettern laesst.
    function widgetTageBauen() {
        const heuteStr = heutigesDatumStr();
        const alleTage = Object.keys(gespeicherteSchichten)
            .filter(k => !gespeicherteSchichten[k].typ)
            .sort();
        const vor = alleTage.filter(k => k < heuteStr).slice(-3);
        const nach = alleTage.filter(k => k > heuteStr).slice(0, 3);
        // Ist heute frei, Urlaub oder krank, zeigt das Widget das für heute an (statt eines anderen Dienstes)
        const heuteEintrag = gespeicherteSchichten[heuteStr];
        const heuteTyp = heuteEintrag && heuteEintrag.typ && SONDERTAG_INFO[heuteEintrag.typ] ? heuteEintrag.typ : '';
        const heuteDabei = alleTage.includes(heuteStr) || !!heuteTyp;
        const tage = [...vor, ...(heuteDabei ? [heuteStr] : []), ...nach];

        return tage.map(datumStr => {
            const sch = gespeicherteSchichten[datumStr];
            const [, m, t] = datumStr.split('-');
            const typ = sch.typ && SONDERTAG_INFO[sch.typ] ? sch.typ : '';
            return {
                datumStr,
                datumKurz: `${t}.${m}.`,
                typ,
                dienstnummer: typ ? '' : ((sch.details && sch.details.dienstnummer) || sch.dienstnummer || ''),
                punkte: typ ? [] : widgetPunkteFuerTag(datumStr, sch)
            };
        });
    }

    // Alles, was das Kalender-Widget anzeigt, in kompakter Form: je gespeichertem Tag Dienstbeginn (s), Art
    // (t: krank/urlaub/frei) und Mehrarbeit (m), dazu die Feiertage der naechsten/letzten 2 Jahre.
    function widgetKalenderDatenBauen() {
        const schichten = {};
        Object.keys(gespeicherteSchichten).forEach(datumStr => {
            const sch = gespeicherteSchichten[datumStr];
            if (!sch) return;
            const eintrag = {};
            if (sch.typ && SONDERTAG_INFO[sch.typ]) {
                eintrag.t = sch.typ;
            } else {
                eintrag.s = sch.startStr || '';
                if (sch.istMehrarbeitTag) eintrag.m = true;
            }
            schichten[datumStr] = eintrag;
        });

        const feiertage = {};
        const heute = new Date();
        const pad = (n) => n < 10 ? '0' + n : String(n);
        const ende = new Date(heute.getFullYear(), heute.getMonth() + 25, 0);
        for (let d = new Date(heute.getFullYear(), heute.getMonth() - 24, 1); d <= ende; d.setDate(d.getDate() + 1)) {
            const datumStr = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
            const ft = feiertagAm(datumStr);
            if (ft) feiertage[datumStr] = { a: ft.art === 'feiertag' ? 'f' : 's', k: feiertagKurz(ft.name) };
        }
        return { schichten, feiertage };
    }

    async function kalenderWidgetSync() {
        const WB = widgetPlugin();
        if (!WB || !WB.kalenderSpeichern) return;
        try {
            await WB.kalenderSpeichern({ kalenderJson: JSON.stringify(widgetKalenderDatenBauen()) });
        } catch (e) { console.log('Kalender-Widget-Sync fehlgeschlagen:', e); }
    }

    // Speist beide Homescreen-Widgets mit den aktuellen Daten und plant Alarme, damit sich "Aktuelle Fahrt"
    // exakt bei jedem Wende-/Pausenwechsel umschaltet - unabhaengig davon, ob die App offen ist.
    async function aktuelleFahrtWidgetSyncHeute() {
        const WB = widgetPlugin();
        if (!WB || !aktuellerNutzer) return;
        kalenderWidgetSync();
        const heuteStr = heutigesDatumStr();
        const tage = widgetTageBauen();
        if (!tage.length) {
            try { await WB.leeren(); } catch (e) { console.log('Widget leeren fehlgeschlagen:', e); }
            kalenderWidgetSync();   // leeren() raeumt beide Widgets - der Kalender (Krank/Urlaub/Frei) soll bleiben
            return;
        }
        const heuteIndex = tage.findIndex(t => t.datumStr === heuteStr);

        try {
            await WB.tageSpeichern({ tageJson: JSON.stringify(tage), heuteIndex });
            // Alarme: jeder Wende-/Pausenwechsel von heute, dazu kurz nach Mitternacht, damit das Widget auf den neuen Tag umspringt
            const zeiten = heuteIndex !== -1 ? tage[heuteIndex].punkte.map(p => p.zeitMs) : [];
            const mitternacht = new Date();
            mitternacht.setHours(24, 0, 30, 0);
            zeiten.push(mitternacht.getTime());
            await WB.updatesPlanen({ zeitenMs: zeiten });
        } catch (e) { console.log('Widget-Sync fehlgeschlagen:', e); }
    }

    // Wie oben, aber gebuendelt: beim PDF-Import werden viele Tage hintereinander gespeichert.
    let widgetSyncTimer = null;
    function widgetSyncPlanen() {
        if (!widgetPlugin()) return;
        clearTimeout(widgetSyncTimer);
        widgetSyncTimer = setTimeout(aktuelleFahrtWidgetSyncHeute, 700);
    }

    // Tipp auf einen Tag im Kalender-Widget: Kalender auf diesen Monat stellen und den Tag genauso oeffnen wie
    // beim Antippen im Kalender der App. Ist die App noch nicht angemeldet/eingerichtet, bleibt der Tag beim
    // Plugin gemerkt und wird nach dem Anmelden abgeholt.
    async function widgetTagPruefen() {
        if (!capacitorAktiv() || !aktuellerNutzer || !ein.eingerichtetAm) return;
        const WB = widgetPlugin();
        if (!WB || !WB.offenesDatum) return;
        let antwort;
        try { antwort = await WB.offenesDatum(); } catch (e) { return; }
        const datumStr = antwort && antwort.datum;
        if (!datumStr || !/^\d{4}-\d{2}-\d{2}$/.test(datumStr)) return;
        const [jahr, monat] = datumStr.split('-').map(Number);
        aktuellesDatumAnzeige = new Date(jahr, monat - 1, 1);
        wechselSeite('kalender');
        kalenderTagKlick(datumStr);
    }

    // Bittet Android, ein Widget auf den Startbildschirm zu legen (Systemdialog zum Bestaetigen)
    async function widgetAufStartbildschirm(art) {
        const el = document.getElementById('widgetMeldung');
        const WB = widgetPlugin();
        if (!el || !WB) return;
        try {
            const { unterstuetzt } = await WB.widgetHinzufuegen({ art });
            el.innerText = unterstuetzt
                ? 'Android fragt dich jetzt, ob das Widget hinzugefügt werden soll.'
                : 'Dein Startbildschirm kann das nicht automatisch. Halte eine freie Stelle gedrückt → Widgets → Planer.';
        } catch (e) {
            el.innerText = 'Das hat nicht geklappt. Halte eine freie Stelle auf dem Startbildschirm gedrückt → Widgets → Planer.';
        }
    }

    // Zeigt in den Einstellungen, ob das Widget sich punktgenau bei jedem Wende-/Pausenwechsel aktualisieren
    // darf, oder nur alle 30 Minuten (Android-Fallback ohne die Berechtigung "Alarme & Erinnerungen").
    async function widgetGenauigkeitPruefen() {
        const WB = widgetPlugin();
        const el = document.getElementById('widgetGenauigkeitStatus');
        if (!WB || !el) return;
        try {
            const { erlaubt } = await WB.alarmBerechtigungStatus();
            el.innerHTML = erlaubt
                ? `<span style="display:flex; align-items:flex-start; gap:6px;">${ICONS.check} Eingeschaltet – das Widget aktualisiert sich punktgenau bei jedem Wende-/Pausenwechsel.</span>`
                : `<span style="display:flex; align-items:flex-start; gap:6px;">${ICONS.warning} Noch nicht eingeschaltet – das Widget aktualisiert sich nur alle 30 Minuten von selbst.</span>`;
        } catch (e) { el.innerText = ''; }
    }

    function widgetGenauigkeitOeffnen() {
        const WB = widgetPlugin();
        if (WB) WB.alarmBerechtigungOeffnen();
        // Nach der Rueckkehr aus den Android-Einstellungen den Status neu abfragen
        setTimeout(widgetGenauigkeitPruefen, 1500);
    }

    // ---------- Update-Hinweis (nur Android-App) ----------
    // Beim Start (und beim Zurückkehren in die App) wird höchstens alle 6 Stunden bei GitHub nachgesehen, ob es
    // eine neuere Version gibt. Dann erscheint oben auf der Startseite ein Hinweis mit Link zur Download-Seite.
    // Die Web-Version aktualisiert sich selbst und braucht das nicht.
    const UPDATE_API = 'https://api.github.com/repos/topbas79/planer/releases/latest';
    const UPDATE_SEITE = 'https://topbas79.github.io/planer/app/';
    const UPDATE_ABSTAND_MS = 6 * 3600 * 1000;

    // Ist Version a neuer als Version b? ("1.0.10" > "1.0.9")
    function versionNeuer(a, b) {
        const teile = (v) => String(v || '').replace(/^v/, '').split('.').map(n => parseInt(n, 10) || 0);
        const x = teile(a), y = teile(b);
        for (let i = 0; i < Math.max(x.length, y.length); i++) {
            const d = (x[i] || 0) - (y[i] || 0);
            if (d) return d > 0;
        }
        return false;
    }

    function speicherLesen(schluessel) {
        try { return localStorage.getItem(schluessel) || ''; } catch (_e) { return ''; }
    }
    function speicherSchreiben(schluessel, wert) {
        try { localStorage.setItem(schluessel, wert); } catch (_e) { /* ohne Speicher: nächstes Mal wieder */ }
    }

    async function updatePruefen() {
        const WB = widgetPlugin();
        if (!WB || !WB.appVersion) return;
        let installiert = '';
        try { installiert = String((await WB.appVersion()).version || ''); } catch (_e) { return; }
        if (!installiert) return;
        const zeile = document.getElementById('appVersionZeile');
        if (zeile) zeile.innerText = 'Planer ' + installiert;

        let neueste = speicherLesen('planer_update_neueste');
        const geprueft = Number(speicherLesen('planer_update_geprueft')) || 0;
        if (Date.now() - geprueft > UPDATE_ABSTAND_MS) {
            try {
                const antwort = await fetch(UPDATE_API, { headers: { Accept: 'application/vnd.github+json' } });
                if (antwort.ok) {
                    const release = await antwort.json();
                    neueste = String(release.tag_name || '').replace(/^v/, '');
                    speicherSchreiben('planer_update_neueste', neueste);
                }
                speicherSchreiben('planer_update_geprueft', String(Date.now()));
            } catch (_e) { /* ohne Netz: der zuletzt gemerkte Stand gilt */ }
        }
        updateHinweisZeigen(installiert, neueste);
    }

    function updateHinweisZeigen(installiert, neueste) {
        const box = document.getElementById('updateHinweis');
        if (!box) return;
        // Weggetippt: für diese Version 24 Stunden nicht mehr zeigen
        const [zuVersion, zuZeit] = speicherLesen('planer_update_zu').split('|');
        const weggetippt = zuVersion === neueste && Date.now() - (Number(zuZeit) || 0) < 24 * 3600 * 1000;
        if (!neueste || !versionNeuer(neueste, installiert) || weggetippt) { box.style.display = 'none'; return; }
        document.getElementById('updateHinweisText').innerText = `Neue Version ${neueste} verfügbar (du hast ${installiert})`;
        const link = document.getElementById('updateHinweisLink');
        link.href = UPDATE_SEITE;
        box.dataset.version = neueste;
        box.style.display = 'flex';
    }

    function updateHinweisSchliessen() {
        const box = document.getElementById('updateHinweis');
        if (!box) return;
        speicherSchreiben('planer_update_zu', (box.dataset.version || '') + '|' + Date.now());
        box.style.display = 'none';
    }

    // ---------- App starten ----------
    // Verbindungsdaten des Supabase-Projekts (dürfen öffentlich sein –
    // der Zugriffsschutz passiert über die Regeln in der Datenbank).
    const SB_URL_STANDARD = 'https://ixbvmzvnubtccmwmxukv.supabase.co';
    const SB_KEY_STANDARD = 'sb_publishable_lYFhhVM7sitKYiDbBJWnUA_ytCQEMIh';


    function starteApp() {
        // Manche Einstellungen (z. B. Widgets) gibt es nur in der nativen App (Klasse "nur-nativ")
        document.body.classList.toggle('ist-nativ', capacitorAktiv());
        // Kommt man über den Link aus der "Passwort vergessen"-Mail, zuerst das neue Passwort abfragen (nicht in die App springen)
        if (/type=recovery/.test(location.hash)) passwortWiederherstellung = true;
        // Eigener Speicherschlüssel: Planer und Dienstplan liegen auf derselben Domain (topbas79.github.io)
        // und würden sich sonst gegenseitig abmelden.
        sb = supabase.createClient(SB_URL_STANDARD, SB_KEY_STANDARD, { auth: { storageKey: 'planer-auth' } });
        sb.auth.onAuthStateChange((ereignis) => {
            if (ereignis === 'PASSWORD_RECOVERY') neuesPasswortZeigen();
        });
        // Tipp auf einen Tag im Kalender-Widget, waehrend die App schon laeuft
        try {
            const WB = widgetPlugin();
            if (WB && WB.addListener) WB.addListener('widgetTag', () => { widgetTagPruefen(); });
        } catch (e) { console.log('Widget-Listener nicht verfügbar:', e); }
        // Zurück in der App (z. B. nach dem Herunterladen): nach einer neuen Version sehen
        document.addEventListener('visibilitychange', () => { if (!document.hidden && aktuellerNutzer) updatePruefen(); });
        // Wieder Netz: Daten neu laden und den Offline-Hinweis entfernen
        window.addEventListener('online', () => { if (aktuellerNutzer && !passwortWiederherstellung) schichtenLaden(); });
        nutzerLaden();
    }

    // ---------- Tabs ----------
    // Unterseiten ohne eigenen Tab: welcher Tab bleibt markiert? (Rest: keiner)
    const TAB_ZUORDNUNG = { aktuellefahrt: 'start' };

    function oeffneMehrPanel() {
        document.getElementById('mehrPanel').classList.add('aktiv');
        document.getElementById('mehrPanelBackdrop').classList.add('aktiv');
    }
    function schliesseMehrPanel() {
        document.getElementById('mehrPanel').classList.remove('aktiv');
        document.getElementById('mehrPanelBackdrop').classList.remove('aktiv');
    }


    function wechselSeite(seite) {
        const seitenEl = document.getElementById('page-' + seite);
        if (!seitenEl) return;
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
        seitenEl.classList.add('active');
        alleFahrtenSchliessen();

        const tab = document.getElementById('tab-' + (TAB_ZUORDNUNG[seite] || seite));
        if (tab) tab.classList.add('active');
        // Bei "Verdienst einrichten" gibt es noch keine Navigation
        document.querySelector('.tabbar').style.display = (seite === 'einrichten') ? 'none' : 'grid';

        window.scrollTo(0, 0);

        if (seite === 'start') { startDienstManuell = null; startseiteAktualisieren(); }
        if (seite === 'kalender') renderCalendar();
        if (seite === 'liste') listeRendern();
        if (seite === 'haltestellen') haltestellenRendern();
        if (seite === 'einstellungen') { einstellungenLaden(); versteckeMeldung('einMeldung'); widgetGenauigkeitPruefen(); }
        if (seite === 'fehlermeldung') fehlermeldungSeiteOeffnen();

        if (seite === 'aktuellefahrt') {
            aktuelleFahrtRendern();
            aktuelleFahrtIntervallStarten();
            widgetSyncPlanen();
        } else {
            aktuelleFahrtIntervallStoppen();
        }
    }

    // ---------- Hell-/Dunkelmodus ----------
    // Wahl: 'auto' (folgt dem Handy), 'hell' oder 'dunkel'. Gemerkt in der Einstellung "Darstellung".
    const dunkelAbfrage = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

    function darstellungLesen() {
        try { return localStorage.getItem('planer_darstellung') || 'auto'; } catch (_e) { return 'auto'; }
    }

    function darstellungAnwenden() {
        const wahl = darstellungLesen();
        const dunkel = wahl === 'dunkel' || (wahl === 'auto' && !!dunkelAbfrage && dunkelAbfrage.matches);
        document.body.classList.toggle('dark', dunkel);
        document.querySelectorAll('.icon-mond').forEach(el => el.style.display = dunkel ? 'none' : '');
        document.querySelectorAll('.icon-sonne').forEach(el => el.style.display = dunkel ? '' : 'none');
        const schalter = document.getElementById('mehrDunkelSchalter');
        if (schalter) schalter.setAttribute('aria-checked', dunkel ? 'true' : 'false');
        document.querySelectorAll('#darstellungSegment .segment-btn').forEach(b => b.classList.toggle('aktiv', b.dataset.wert === wahl));
        const farbe = document.querySelector('meta[name="theme-color"]');
        if (farbe) farbe.setAttribute('content', dunkel ? '#0B0B0C' : '#FFD100');
    }

    function darstellungSetzen(wahl) {
        try { localStorage.setItem('planer_darstellung', wahl); } catch (_e) { /* ohne Speicher: nur bis zum Neuladen */ }
        ein.darstellung = wahl;
        darstellungAnwenden();
        if (aktuellerNutzer && ein.eingerichtetAm) einstellungenSpeichernLocal();
    }

    function toggleDarkMode() {
        darstellungSetzen(document.body.classList.contains('dark') ? 'hell' : 'dunkel');
    }

    if (dunkelAbfrage && dunkelAbfrage.addEventListener) {
        dunkelAbfrage.addEventListener('change', () => { if (darstellungLesen() === 'auto') darstellungAnwenden(); });
    }
    darstellungAnwenden();

    function endeTatsaechlichAnzeigen() {
        document.getElementById('endeTatsaechlichBereich').style.display = 'block';
        document.getElementById('endeTatsaechlichZeigen').style.display = 'none';
    }
    function endeTatsaechlichVerbergen() {
        document.getElementById('endeTatsaechlichBereich').style.display = 'none';
        document.getElementById('endeTatsaechlichZeigen').style.display = 'block';
    }

    function oeffneErfassenAktionen() {
        document.getElementById('erfassenAktionenOverlay').style.display = 'flex';
    }
    function schliesseErfassenAktionen() {
        document.getElementById('erfassenAktionenOverlay').style.display = 'none';
    }

    function oeffneListeAktionen() {
        document.getElementById('listeAktionenOverlay').style.display = 'flex';
    }
    function schliesseListeAktionen() {
        document.getElementById('listeAktionenOverlay').style.display = 'none';
    }

    // ============================================================
    //  MEHRERE DIENSTZETTEL AUF EINMAL
    // ============================================================
    let stapel = [];   // {datei, name, status, ergebnis, fehler}

    function istPdfDatei(datei) {
        return !!datei && (datei.type === 'application/pdf' || /\.pdf$/i.test(datei.name || ''));
    }


    async function dateienVerarbeiten(input) {
        if (!input.files || !input.files.length) return;
        const dateien = Array.from(input.files);

        // Einzelne Datei: Formular wird befüllt
        if (dateien.length === 1) {
            document.getElementById('stapelBox').style.display = 'none';
            const einzeln = dateien[0];
            input.value = '';   // damit dieselbe Datei erneut gewählt werden kann
            return starteAnalysePdf(einzeln);
        }

        stapel = dateien.map(d => ({ datei: d, name: d.name, status: 'wartet', ergebnis: null, fehler: null }));
        document.getElementById('stapelBox').style.display = 'block';
        document.getElementById('stapelSpeichern').style.display = 'none';
        stapelRendern();

        for (let i = 0; i < stapel.length; i++) {
            stapel[i].status = 'liest';
            stapelRendern();
            try {
                if (!istPdfDatei(stapel[i].datei)) throw new Error('Nur PDF-Dienstzettel möglich');
                const ergebnis = await DienstzettelPdf.pdfDateiZuErgebnis(stapel[i].datei);
                if (!ergebnis.abwesenheit && (!ergebnis.datum || !ergebnis.beginn || !ergebnis.ende)) {
                    throw new Error('Datum oder Zeiten nicht erkannt');
                }
                stapel[i].ergebnis = ergebnis;
                stapel[i].status = 'fertig';
            } catch (e) {
                stapel[i].status = 'fehler';
                stapel[i].fehler = e.message || String(e);
            }
            stapelRendern();
        }

        const fertige = stapel.filter(s => s.status === 'fertig' && !s.ergebnis.abwesenheit).length;
        document.getElementById('stapelSpeichern').style.display = fertige ? 'block' : 'none';
        input.value = '';
    }


    function stapelRendern() {
        const el = document.getElementById('stapelListe');
        el.innerHTML = stapel.map((s, i) => {
            const symbol = { wartet: ICONS.hourglass, liest: ICONS.robot, fertig: ICONS.check, fehler: ICONS.warning }[s.status];
            let text = s.name;
            if (s.status === 'liest') text = 'wird gelesen...';
            else if (s.status === 'fertig') {
                const e = s.ergebnis;
                text = e.abwesenheit
                    ? pdfAbwesenheitText(e)
                    : `${e.datum.split('-').reverse().join('.')}` +
                      `${e.dienstnummer ? ' · ' + e.dienstnummer : ''} · ${e.beginn}–${e.ende}`;
            } else if (s.status === 'fehler') text = s.fehler;

            return `<div class="result-item">
                <span class="label">${symbol} ${sicher(text)}</span>
                ${s.status === 'fertig'
                    ? `<button class="btn-secondary stapel-btn" onclick="stapelUebernehmen(${i})">${s.ergebnis.abwesenheit ? 'Eintragen' : 'Öffnen'}</button>` : ''}
            </div>`;
        }).join('');
    }

    // Einen Dienst aus dem Stapel ins Formular laden
    function stapelUebernehmen(i) {
        const e = stapel[i].ergebnis;
        if (!e) return;
        if (e.abwesenheit) { pdfAbwesenheitOeffnen(e); return; }
        felderSetzen(e);
        if (e.kontrolle && aktuelleDetails) aktuelleDetails.kontrolle = e.kontrolle;
        berechneSchicht();
        document.getElementById('stapelBox').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Alle erkannten Dienste berechnen und in die Datenbank schreiben
    async function stapelAlleSpeichern() {
        // Urlaub/Krank aus PDFs werden nicht mitgespeichert: dort werden die Stunden im Fenster bestaetigt ("Eintragen")
        const fertige = stapel.filter(s => s.status === 'fertig' && !s.ergebnis.abwesenheit);
        if (!fertige.length) return;

        const knopf = document.getElementById('stapelSpeichern');
        knopf.disabled = true;
        knopf.innerHTML = 'Speichere...';

        let gespeichert = 0, fehlgeschlagen = 0;
        bvgHinweiseGesperrt = true;   // nicht nach jedem einzelnen Dienst bei der BVG nachfragen
        for (const eintrag of fertige) {
            try {
                felderSetzen(eintrag.ergebnis);
                if (eintrag.ergebnis.kontrolle && aktuelleDetails) {
                    aktuelleDetails.kontrolle = eintrag.ergebnis.kontrolle;
                }
                berechneSchicht();
                await schichtSpeichern(aktuellesBerechnetesErgebnis, true);
                gespeichert++;
            } catch (e) {
                console.error('Speichern fehlgeschlagen:', e);
                fehlgeschlagen++;
            }
        }

        knopf.disabled = false;
        knopf.innerHTML = `${ICONS.download} Alle speichern`;
        bvgHinweiseGesperrt = false;
        bvgHinweiseTerminieren();   // einmal fuer den zuletzt geladenen Dienst
        await schichtenLaden();
        alert(`✅ ${gespeichert} Dienste gespeichert.` +
              (fehlgeschlagen ? ` ${fehlgeschlagen} fehlgeschlagen.` : ''));
    }



    // ---------- BVG-Meldungen (Umleitungen, verlegte Haltestellen ...) zu den Linien eines Dienstes ----------
    // Fragt über die Funktion "bvg-meldungen" (Supabase) die aktuellen Meldungen der BVG zu allen Linien
    // ab, die in einem Dienst vorkommen, und zeigt sie beim Erfassen und im Dienstverlauf an - mit Link
    // zur Karte der BVG. Die BVG erlaubt den direkten Abruf aus der App nicht, daher der Umweg.
    // Es werden nur Dienste von heute bis 14 Tage voraus geprüft: die Meldungen beschreiben den aktuellen
    // Stand und sagen über alte oder weit entfernte Dienste nichts Verlässliches aus.
    const BVG_CACHE_MS = 10 * 60 * 1000;
    const BVG_TAGE_VORAUS = 14;
    const bvgCache = {};            // "171,M46" -> { zeit, daten }
    const bvgLaeufe = { dienst: 0, start: 0, fahrt: 0 };   // je Anzeige-Gruppe: nur die neueste Abfrage darf zeichnen
    let bvgTimer = null;
    let bvgStartTimer = null;
    let bvgHinweiseGesperrt = false;   // beim Stapel-Speichern: nicht nach jedem Dienst neu abfragen
    let bvgOffenFuer = '';             // welche Meldungsliste der Nutzer aufgeklappt hat ("Linien|Datum")

    function bvgToggle(el) {
        bvgOffenFuer = el.open ? (el.dataset.schluessel || '') : '';
        // Die zweite Karte (Erfassen/Verlauf) gleich mitziehen
        document.querySelectorAll('details.bvg-einklapp').forEach(d => {
            if (d !== el && (d.dataset.schluessel || '') === (el.dataset.schluessel || '') && d.open !== el.open) d.open = el.open;
        });
    }

    // Alle Liniennummern, die in den Dienstdaten vorkommen (Beginn, Ende, Wechsel, Pausen, Fahrten)
    function dienstLinien(d) {
        const menge = new Set();
        if (!d) return [];
        const merke = (l) => {
            const k = String(l == null ? '' : l).trim().toUpperCase();
            if (/^[A-Z0-9]{1,5}$/.test(k)) menge.add(k);
        };
        merke(d.beginn_linie); merke(d.ende_linie);
        (d.wechsel || []).forEach(w => merke(w && w.linie));
        (d.pausen || []).forEach(p => { if (p) { merke(p.davor_linie); merke(p.danach_linie); } });
        (d.fahrten || []).forEach(f => merke(f && f.linie));
        return [...menge].sort();
    }

    // Gilt die Meldung an diesem Diensttag? (hat spätestens an dem Tag begonnen und ist nicht schon vorbei)
    function bvgMeldungGiltAm(m, datumStr) {
        const von = String(m.von || '').slice(0, 10);
        const bis = String(m.bis || '').slice(0, 10);
        if (von && von > datumStr) return false;
        if (bis && bis < datumStr) return false;
        return true;
    }

    function bvgDatumKurz(iso) {
        const t = String(iso || '').slice(0, 10).split('-');
        return t.length === 3 ? `${t[2]}.${t[1]}.${t[0]}` : '';
    }

    async function bvgMeldungenLaden(linien) {
        const schluessel = linien.join(',');
        const gemerkt = bvgCache[schluessel];
        if (gemerkt && Date.now() - gemerkt.zeit < BVG_CACHE_MS) return gemerkt.daten;
        const { data, error } = await sb.functions.invoke('planer-bvg-meldungen', { body: { linien } });
        if (error) throw error;
        if (!data || data.fehler || !Array.isArray(data.linien)) throw new Error((data && data.fehler) || 'Keine Antwort');
        bvgCache[schluessel] = { zeit: Date.now(), daten: data };
        return data;
    }

    function bvgHinweiseHtml(daten, linien, datumStr, kompakt) {
        // Eine Meldung kann mehrere Linien betreffen (z. B. "Bus M46, 171") - nur einmal zeigen
        const nachId = new Map();
        const ungeprueft = [];
        daten.linien.forEach(l => {
            if (l.fehler) { ungeprueft.push(l.linie); return; }
            (l.meldungen || []).forEach(m => {
                if (!bvgMeldungGiltAm(m, datumStr)) return;
                const schluessel = m.id || (l.linie + '|' + m.text);
                if (!nachId.has(schluessel)) nachId.set(schluessel, { m, abgefragt: l.linie });
            });
        });

        const rang = (art) => /umleitung/i.test(art) ? 0 : /kein halt/i.test(art) ? 1 : /verlegt/i.test(art) ? 2 : 3;
        // Neueste Meldungen zuerst (nach Beginn, bei gleichem Beginn nach letzter Aktualisierung)
        const zeit = (iso) => Date.parse(iso || '') || 0;
        const eintraege = [...nachId.values()].sort((a, b) =>
            (zeit(b.m.von) - zeit(a.m.von)) || (zeit(b.m.aktualisiert) - zeit(a.m.aktualisiert)));
        const istNeu = (m) => zeit(m.von) > Date.now() - 7 * 86400000;
        const neuAnzahl = eintraege.filter(e => istNeu(e.m)).length;
        const linienText = linien.join(', ');
        const stand = daten.abgerufen
            ? new Date(daten.abgerufen).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) : '';
        const quelle = `<div class="bvg-stand">Quelle: BVG${stand ? ', Stand ' + sicher(stand) + ' Uhr' : ''}${ungeprueft.length ? ' · nicht geprüft: ' + sicher(ungeprueft.join(', ')) : ''}</div>`;

        if (!eintraege.length) {
            // Auf der Startseite bleibt es ruhig: ohne Meldungen wird nichts gezeigt
            return kompakt ? '' : `<div class="bvg-titel">${ICONS.check} Keine Meldungen der BVG zu ${sicher(linienText)}</div>${quelle}`;
        }

        if (kompakt) {
            const n = eintraege.length;
            return `<span class="bvg-marke" aria-hidden="true">!</span>` +
                `<span class="bvg-text-kurz">${n} BVG-Meldung${n === 1 ? '' : 'en'} zu ${sicher(linienText)}${neuAnzahl ? ' · ' + neuAnzahl + ' neu' : ''}</span>` +
                `<span class="bvg-ansehen">Ansehen</span>`;
        }

        const kartenHtml = eintraege.map(({ m, abgefragt }) => {
            const betroffen = (m.linien || []).filter(l => linien.includes(l));
            const lt = betroffen.length ? betroffen : [abgefragt];
            const artKlasse = rang(m.art) === 0 ? 'bvg-art-umleitung' : rang(m.art) === 1 ? 'bvg-art-keinhalt' : rang(m.art) === 2 ? 'bvg-art-verlegt' : '';
            const von = bvgDatumKurz(m.von);
            const bis = bvgDatumKurz(m.bis);
            const zeitraum = bis ? `${von} – ${bis}` : (von ? `seit ${von}` : '');
            let text = String(m.text || '');
            if (text.length > 500) text = text.slice(0, 500).replace(/\s+\S*$/, '') + ' …';
            const kartenLink = (typeof m.karte === 'string' && m.karte.startsWith('https://fahrinfo.vbb.de/'))
                ? `<a href="${sicher(m.karte)}" target="_blank" rel="noopener noreferrer">Karte ansehen</a>` : '';
            const bvgLink = `<a href="https://www.bvg.de/de/verbindungen/linienuebersicht/${sicher(encodeURIComponent(lt[0].toLowerCase()))}#stoerungsmeldungen" target="_blank" rel="noopener noreferrer">Auf bvg.de ansehen</a>`;
            return `<div class="bvg-meldung">
                <div class="bvg-kopf">
                    ${lt.map(l => `<span class="bvg-linien">${sicher(l)}</span>`).join('')}
                    <span class="bvg-art ${artKlasse}">${sicher(m.art || 'Meldung')}</span>
                    ${istNeu(m) ? '<span class="bvg-neu">Neu</span>' : ''}
                    ${zeitraum ? `<span class="bvg-seit">${sicher(zeitraum)}</span>` : ''}
                </div>
                <div class="bvg-text">${sicher(text)}</div>
                <div class="bvg-links">${kartenLink}${bvgLink}</div>
            </div>`;
        });

        // Alles zugeklappt: nur eine Zeile ("7 Meldungen ...", ggf. mit "n neu"), Antippen zeigt die Liste.
        // Ob sie offen war, merkt sich bvgToggle, damit sie beim Neuzeichnen nicht wieder zuklappt.
        const anzahl = eintraege.length;
        const schluessel = linien.join(',') + '|' + datumStr;
        const offen = bvgOffenFuer === schluessel ? ' open' : '';
        return `<details class="bvg-einklapp"${offen} data-schluessel="${sicher(schluessel)}" ontoggle="bvgToggle(this)">
            <summary class="bvg-titel">
                ${ICONS.warning}
                <span class="bvg-titel-text">${kompakt
                    ? `${anzahl} BVG-Meldung${anzahl === 1 ? '' : 'en'}`
                    : `${anzahl} Meldung${anzahl === 1 ? '' : 'en'} der BVG zu ${sicher(linienText)}`}${neuAnzahl ? ` <span class="bvg-neu">${neuAnzahl} neu</span>` : ''}</span>
                <span class="bvg-pfeil" aria-hidden="true">▾</span>
            </summary>
            ${kartenHtml.join('')}${quelle}
        </details>`;
    }

    function bvgHinweiseTerminieren() {
        if (bvgHinweiseGesperrt) return;
        clearTimeout(bvgTimer);
        // Kurz warten: beim Einlesen eines Dienstes werden Datum und Details nacheinander gesetzt
        bvgTimer = setTimeout(bvgHinweiseAktualisieren, 150);
    }

    function bvgStartHinweisTerminieren() {
        if (bvgHinweiseGesperrt) return;
        clearTimeout(bvgStartTimer);
        bvgStartTimer = setTimeout(bvgStartHinweisAktualisieren, 150);
    }

    // Zeichnet die Meldungen zu den Linien von "details" in die Zielelemente. kompakt = Startseite:
    // kuerzere Zeile, und ohne Meldungen, waehrend des Ladens und bei Fehlern wird nichts gezeigt.
    async function bvgHinweiseZeichnen(gruppe, ziele, details, datumStr, kompakt) {
        ziele = ziele.filter(Boolean);
        if (!ziele.length) return;
        const zeigen = (html, ruhig) => ziele.forEach(z => {
            z.innerHTML = html;
            z.classList.toggle('bvg-ruhig', !!ruhig);
            z.style.display = html ? (kompakt ? 'flex' : 'block') : 'none';
            if (kompakt) {
                // Die Leiste führt zum Dienstverlauf, dort stehen die Meldungen im Einzelnen
                z.onclick = html ? () => dienstVerlaufOeffnen(datumStr) : null;
                z.onkeydown = html ? (ev) => { if (ev.key === 'Enter') dienstVerlaufOeffnen(datumStr); } : null;
                if (html) { z.setAttribute('role', 'button'); z.setAttribute('tabindex', '0'); }
            }
        });

        const lauf = ++bvgLaeufe[gruppe];
        const linien = dienstLinien(details);
        if (!sb || !aktuellerNutzer || !linien.length || !/^\d{4}-\d{2}-\d{2}$/.test(datumStr)) { zeigen(''); return; }

        const tage = Math.round((new Date(datumStr + 'T00:00:00') - new Date(heutigesDatumStr() + 'T00:00:00')) / 86400000);
        if (tage < 0 || tage > BVG_TAGE_VORAUS) { zeigen(''); return; }

        const gemerkt = bvgCache[linien.join(',')];
        if (!kompakt && (!gemerkt || Date.now() - gemerkt.zeit >= BVG_CACHE_MS)) {
            zeigen(`<div class="bvg-titel bvg-leise">Prüfe BVG-Meldungen zu ${sicher(linien.join(', '))} …</div>`, true);
        }
        try {
            const daten = await bvgMeldungenLaden(linien);
            if (lauf !== bvgLaeufe[gruppe]) return;   // inzwischen wurde ein anderer Dienst geöffnet
            const html = bvgHinweiseHtml(daten, linien, datumStr, kompakt);
            zeigen(html, !/bvg-meldung"/.test(html));
        } catch (e) {
            if (lauf !== bvgLaeufe[gruppe]) return;
            console.log('BVG-Meldungen nicht geladen:', e);
            zeigen(kompakt ? '' : `<div class="bvg-titel bvg-leise">BVG-Meldungen zu ${sicher(linien.join(', '))} konnten gerade nicht geprüft werden.</div>`, true);
        }
    }

    // Erfassen-Seite und Dienstverlauf: der gerade geladene Dienst
    function bvgHinweiseAktualisieren() {
        return bvgHinweiseZeichnen('dienst',
            ['bvgHinweiseErfassen', 'bvgHinweiseVerlauf'].map(id => document.getElementById(id)),
            aktuelleDetails, (document.getElementById('datum') || {}).value || '', false);
    }


    // Startseite: der Dienst, der im "Nächster Dienst"-Kasten steht
    function bvgStartHinweisAktualisieren() {
        const k = startDienstSchluessel;
        const sch = k ? gespeicherteSchichten[k] : null;
        return bvgHinweiseZeichnen('start', [document.getElementById('bvgHinweiseStart')],
            sch && !sch.typ ? sch.details : null, k || '', true);
    }

    function bvgFahrtHinweisAktualisieren() {
        return bvgHinweiseZeichnen('fahrt', [document.getElementById('bvgHinweiseFahrt')],
            aktuelleFahrtDetails, heutigesDatumStr(), true);
    }

    // Merkt sich die von der KI gelesenen Dienstdetails zur aktuellen Schicht
    let aktuelleDetails = null;

    // Zeigt den vollen Haltestellennamen; weicht das Kuerzel ab, steht es dahinter.
    function ortText(name, kuerzel) {
        const n = sicher((name || '').trim());
        const k = sicher((kuerzel || '').trim());
        if (!n && !k) return '';
        if (!n) return k;
        if (!k || n === k) return n;
        return `${n} <small style="opacity:.7;">(${k})</small>`;
    }

    // Baut einen Kurztext wie "Linie M46 · Umlauf 2 → Zoologischer Garten (ab 12:45)"
    function fahrtInfo(linie, umlauf, nach, nachKuerzel, abfahrt) {
        const teile = [];
        const l = (linie === 0 || linie) ? sicher(String(linie).trim()) : '';
        const u = (umlauf === 0 || umlauf) ? sicher(String(umlauf).trim()) : '';
        if (l) teile.push('Linie ' + l);
        if (u) teile.push('Umlauf ' + u);
        let text = teile.join(' · ');
        const ziel = ortText(nach, nachKuerzel);
        if (ziel) text += (text ? ' → ' : '→ ') + ziel;
        if (abfahrt) text += (text ? ' ' : '') + '(ab ' + sicher(abfahrt) + ')';
        return text;
    }

    // Schöne Schreibweise für die Art eines Wechsels (Dienstzettel schreiben "Uebernahme")
    function anzeigeArt(art) {
        const a = String(art || '').trim();
        const karte = { uebernahme: 'Übernahme', uebergabe: 'Übergabe', ueberg: 'Übergabe', uebern: 'Übernahme' };
        return karte[a.toLowerCase()] || a;
    }

    // Symbol je Wechsel-Art
    function wechselSymbol(art) {
        const a = (art || '').toLowerCase();
        if (a.startsWith('überg') || a.startsWith('uberg') || a.startsWith('ueberg') || a.startsWith('übg')) return ICONS.handoverOut;
        if (a.startsWith('übern') || a.startsWith('ubern') || a.startsWith('uebern')) return ICONS.handoverIn;
        if (a.startsWith('aussetz')) return ICONS.stop;
        if (a.startsWith('einsetz')) return ICONS.busStop;
        if (a.startsWith('ankunft')) return ICONS.arrowDown;
        if (a.startsWith('abfahrt')) return ICONS.arrowUp;
        return ICONS.swap;
    }

    function detailsAnzeigen(d) {
        const box = document.getElementById('dienstDetails');
        const inhalt = document.getElementById('dienstDetailsInhalt');
        const leerEl = document.getElementById('verlaufLeer');
        aktuelleDetails = d;
        bvgHinweiseTerminieren();   // BVG-Meldungen zu den Linien dieses Dienstes (auch wenn d leer ist: Anzeige leeren)

        if (!d || (!d.beginn_ort && !d.ende_ort &&
                   !(d.wechsel || []).length && !(d.pausen || []).length)) {
            box.style.display = 'none';
            inhalt.innerHTML = '';
            if (leerEl) leerEl.style.display = 'block';
            const knopf = document.getElementById('alleFahrtenBtn');
            if (knopf) knopf.style.display = 'none';
            return;
        }
        if (leerEl) leerEl.style.display = 'none';

        const farbKlasse = (art) => {
            const a = (art || '').toLowerCase();
            if (a.startsWith('übern') || a.startsWith('ubern') || a.startsWith('uebern') ||
                a.startsWith('überg') || a.startsWith('uberg') || a.startsWith('ueberg') ||
                a.startsWith('übg')) return 'verlauf-gruen';
            if (a.startsWith('aussetz') || a.startsWith('einsetz')) return 'verlauf-rot';
            if (a.startsWith('pause')) return 'verlauf-pause';
            return '';
        };

        // Uhrzeit in Minuten, für die Sortierung. Zeiten nach Mitternacht
        // (kleiner als der Dienstbeginn) kommen ans Ende.
        const beginnMin = (() => {
            if (!d.beginn) return 0;
            const [h, m] = d.beginn.split(':').map(Number);
            return h * 60 + m;
        })();
        const sortWert = (zeit) => {
            if (!zeit) return 99999;
            const [h, m] = String(zeit).split(':').map(Number);
            if (isNaN(h)) return 99999;
            let wert = h * 60 + m;
            if (wert < beginnMin) wert += 24 * 60;      // Folgetag
            return wert;
        };

        // --- Alle Punkte sammeln, dann chronologisch sortieren ---
        const punkte = [];

        if (d.beginn) {
            punkte.push({
                zeit: d.beginn, sort: sortWert(d.beginn) - 1,   // immer ganz vorn
                symbol: ICONS.play, titel: 'Dienstbeginn',
                ort: ortText(d.beginn_ort, d.beginn_ort_kuerzel),
                unten: fahrtInfo(d.beginn_linie, d.beginn_umlauf, dienstRichtung(d), '', d.beginn_abfahrt),
                klasse: ''
            });
        }

        // Faellt ein Wechsel-Eintrag zeitlich und oertlich genau mit dem
        // Dienstbeginn zusammen (Dienst startet direkt durch Uebernahme
        // eines fremden Wagens), reicht "Dienstbeginn" allein - der sonst
        // fast identische Uebernahme-Punkt entfaellt.
        const istBeginnUebernahme = (w) => {
            const art = (w.art || '').toLowerCase();
            return (art.startsWith('übern') || art.startsWith('ubern') || art.startsWith('uebern')) &&
                w.zeit === d.beginn && w.ort_kuerzel && w.ort_kuerzel === d.beginn_ort_kuerzel;
        };

        (d.wechsel || []).forEach(w => {
            if (d.beginn && istBeginnUebernahme(w)) return;

            // Beim Aussetzen interessiert, von wo aus ausgesetzt wurde - das
            // steht nicht im Wechsel-Eintrag selbst, sondern in der
            // passenden "A"-Fahrt (gleiche Endhaltestelle/Uhrzeit).
            let unten = fahrtInfo(w.linie, w.umlauf, w.nach, w.nach_kuerzel, w.abfahrt);
            if ((w.art || '').toLowerCase().startsWith('aussetz')) {
                const passendeFahrt = (d.fahrten || []).find(f =>
                    (f.typ || '').toLowerCase() === 'a' &&
                    (f.nach_kuerzel === w.ort_kuerzel || f.bis_zeit === w.zeit));
                if (passendeFahrt && (passendeFahrt.von || passendeFahrt.von_kuerzel)) {
                    const teile = [];
                    const l = passendeFahrt.linie || w.linie;
                    const u = passendeFahrt.umlauf || w.umlauf;
                    if (l) teile.push('Linie ' + l);
                    if (u) teile.push('Umlauf ' + u);
                    unten = teile.join(' · ') + (teile.length ? ' · ' : '') +
                        `von ${ortText(passendeFahrt.von, passendeFahrt.von_kuerzel)}`;
                }
            }

            punkte.push({
                zeit: w.zeit, sort: sortWert(w.zeit),
                schluessel: `${(w.art || '').toLowerCase()}|${w.zeit}`,
                symbol: wechselSymbol(w.art), titel: anzeigeArt(w.art) || 'Wechsel',
                ort: ortText(w.ort, w.ort_kuerzel) + (w.von_dienst ? ` (Dienst ${w.von_dienst})` : ''),
                unten,
                klasse: farbKlasse(w.art)
            });
        });

        // Bezahlter und unbezahlter Teil derselben Unterbrechung sind zwei
        // aufeinanderfolgende Pausen-Einträge (gleicher Ort, direkt
        // aneinander) - zu einer einzigen Pause-Zeile zusammenfassen. Nur
        // der erste "davor"- und der letzte "danach"-Punkt sind eigene
        // Ereignisse, der Übergang zwischen den Teilen nicht.
        const pausenZusammengefasst = [];
        (d.pausen || []).forEach(p => {
            const letzte = pausenZusammengefasst[pausenZusammengefasst.length - 1];
            const gleicherOrt = letzte && (letzte.ort_kuerzel || letzte.ort) === (p.ort_kuerzel || p.ort);
            if (letzte && gleicherOrt && letzte.bis === p.von) {
                letzte.bis = p.bis;
                letzte.danach_art = p.danach_art;
                letzte.danach_linie = p.danach_linie;
                letzte.danach_umlauf = p.danach_umlauf;
                letzte.danach_nach = p.danach_nach;
                letzte.danach_nach_kuerzel = p.danach_nach_kuerzel;
                letzte.danach_abfahrt = p.danach_abfahrt;
            } else {
                pausenZusammengefasst.push({ ...p });
            }
        });

        pausenZusammengefasst.forEach(p => {
            if (p.davor_art) {
                punkte.push({
                    zeit: p.davor_zeit, sort: sortWert(p.davor_zeit),
                    schluessel: `${p.davor_art.toLowerCase()}|${p.davor_zeit}`,
                    symbol: wechselSymbol(p.davor_art), titel: anzeigeArt(p.davor_art),
                    ort: ortText(p.davor_ort, p.davor_ort_kuerzel),
                    unten: fahrtInfo(p.davor_linie, p.davor_umlauf, null, null, null),
                    klasse: farbKlasse(p.davor_art)
                });
            }

            punkte.push({
                zeit: p.von, sort: sortWert(p.von),
                symbol: ICONS.coffee, titel: 'Pause',
                ort: `bis ${sicher(p.bis || '')} · ${ortText(p.ort, p.ort_kuerzel)}`,
                unten: '', klasse: 'verlauf-pause'
            });

            const weiter = fahrtInfo(p.danach_linie, p.danach_umlauf, p.danach_nach, p.danach_nach_kuerzel, p.danach_abfahrt);
            if (weiter || p.danach_art) {
                punkte.push({
                    zeit: p.danach_abfahrt || p.bis,
                    sort: sortWert(p.danach_abfahrt || p.bis) + 0.5,   // direkt nach der Pause
                    schluessel: `${(p.danach_art || '').toLowerCase()}|${p.danach_abfahrt}`,
                    symbol: wechselSymbol(p.danach_art || 'abfahrt'),
                    titel: anzeigeArt(p.danach_art) || 'Weiter nach Pause',
                    ort: '', unten: weiter,
                    klasse: farbKlasse(p.danach_art)
                });
            }
        });

        if (d.ende) {
            const folgetag = d.ende_folgetag ? ' <small style="opacity:.7;">(Folgetag)</small>' : '';
            punkte.push({
                zeit: d.ende, sort: 999998,                       // immer ganz hinten
                symbol: ICONS.stop, titel: 'Dienstende',
                ort: ortText(d.ende_ort, d.ende_ort_kuerzel) + folgetag,
                unten: fahrtInfo(d.ende_linie, d.ende_umlauf, d.ende_nach, d.ende_nach_kuerzel, null),
                klasse: ''
            });
        }

        // Doppelte Einträge entfernen (gleiche Art zur gleichen Zeit)
        const gesehen = new Set();
        const gefiltert = punkte.filter(pt => {
            if (!pt.schluessel) return true;
            if (gesehen.has(pt.schluessel)) return false;
            gesehen.add(pt.schluessel);
            return true;
        });

        gefiltert.sort((a, b) => a.sort - b.sort);

        // --- Ausgeben, Abschnitte durch kräftige Linie trennen ---
        // Ein neuer Abschnitt beginnt bei jeder Pause und beim Dienstende.
        let html = '';
        gefiltert.forEach((pt, i) => {
            const rolle = pt.titel === 'Dienstbeginn' ? ' tl-beginn' : (pt.titel === 'Dienstende' ? ' tl-ende' : '');
            html += `<div class="tl-zeile ${pt.klasse}${rolle}">` +
                    `<div class="tl-zeit">${sicher(pt.zeit || '')}</div>` +
                    `<div class="tl-punkt"><span class="tl-dot"></span></div>` +
                    `<div class="tl-text"><b>${pt.titel}</b>` +
                    `<span>${pt.ort || ''}${pt.unten ? (pt.ort ? '<br>' : '') + pt.unten : ''}</span></div></div>`;
        });

        // "Alle Fahrten" öffnet die ganze Seite (Knopf unter der Zeitleiste)
        const anzahlFahrten = fahrtenMitAbgeleitetenWenden(d.fahrten, d.beginn, d.pausen).length;
        const fahrtenKnopf = document.getElementById('alleFahrtenBtn');
        if (fahrtenKnopf) {
            fahrtenKnopf.style.display = anzahlFahrten ? '' : 'none';
            document.getElementById('alleFahrtenAnzahl').innerText = anzahlFahrten ? `(${anzahlFahrten})` : '';
        }

        inhalt.innerHTML = anzeigeHtmlBereinigen(html);
        box.style.display = html ? 'block' : 'none';

        const dat = document.getElementById('datum').value;
        const titelEl = document.getElementById('verlaufTitel');
        if (titelEl) {
            const nr = document.getElementById('dienstnummer').value.trim();
            const wt = dat ? WOCHENTAGE_KURZ[new Date(dat + 'T12:00:00').getDay()] : '';
            titelEl.innerText = (dat ? `${wt} ${dat.split('-').reverse().slice(0, 2).join('.')}.` : '') +
                (nr ? (dat ? ' · ' : '') + 'Dienst ' + nr : '');
        }
        ereignisseAnzeigen(dat);
    }

    // ---------- "Alle Fahrten" als ganze Seite ----------
    // Zeigt alle Fahrten des Dienstes der Reihe nach, Wenden und Pausen farbig hervorgehoben.
    // Schließen: Knopf "X" oben rechts oder die Escape-Taste.
    function zeitInMinutenOderNull(z) {
        const t = /^(\d{1,2}):(\d{2})/.exec(String(z || ''));
        return t ? Number(t[1]) * 60 + Number(t[2]) : null;
    }

    function dauerInMinuten(von, bis) {
        const a = zeitInMinutenOderNull(von), b = zeitInMinutenOderNull(bis);
        if (a === null || b === null) return null;
        return (b - a + 1440) % 1440;
    }

    function alleFahrtenHtml(d) {
        const beginnMin = zeitInMinutenOderNull(d.beginn) || 0;
        const sortWert = (z) => {
            const m = zeitInMinutenOderNull(z);
            return m === null ? null : (m < beginnMin ? m + 1440 : m);   // nach Mitternacht = Folgetag
        };

        // Bezahlter und unbezahlter Teil derselben Unterbrechung = eine Pause
        const pausen = [];
        (d.pausen || []).forEach(p => {
            const letzte = pausen[pausen.length - 1];
            if (letzte && (letzte.ort_kuerzel || letzte.ort) === (p.ort_kuerzel || p.ort) && letzte.bis === p.von) {
                letzte.bis = p.bis;
                letzte.unbezahlt_minuten = (Number(letzte.unbezahlt_minuten) || 0) + (Number(p.unbezahlt_minuten) || 0);
            } else {
                pausen.push({ ...p, unbezahlt_minuten: Number(p.unbezahlt_minuten) || 0 });
            }
        });

        const zeilen = [];
        fahrtenMitAbgeleitetenWenden(d.fahrten, d.beginn, d.pausen).forEach(f =>
            zeilen.push({ art: 'fahrt', sort: sortWert(f.von_zeit), f }));
        pausen.forEach(p => zeilen.push({ art: 'pause', sort: sortWert(p.von), p }));
        zeilen.sort((x, y) => (x.sort ?? 99999) - (y.sort ?? 99999));

        let anzahlFahrten = 0, anzahlWenden = 0;
        const html = zeilen.map(z => {
            if (z.art === 'pause') {
                const p = z.p;
                const dauer = dauerInMinuten(p.von, p.bis);
                const teile = [];
                if (dauer !== null) teile.push(`${dauer} Min.`);
                if (p.unbezahlt_minuten) teile.push(`${p.unbezahlt_minuten} Min. unbezahlt`);
                return `<div class="fz-zeile fz-pause">
                    <div class="fz-zeit"><b>${sicher(p.von || '')}</b><small>bis ${sicher(p.bis || '')}</small></div>
                    <div class="fz-text">
                        <div class="fz-titel"><span class="fz-marke">Pause</span></div>
                        <div class="fz-unter">${sicher(aktuelleFahrtOrtName(p.ort, p.ort_kuerzel))}${teile.length ? ' · ' + sicher(teile.join(' · ')) : ''}</div>
                    </div>
                </div>`;
            }

            const f = z.f;
            const typ = String(f.typ || '').trim();
            const istWenden = !f.linie && /^wenden$/i.test(typ);
            const dauer = dauerInMinuten(f.von_zeit, f.bis_zeit);
            const von = aktuelleFahrtOrtName(f.von, f.von_kuerzel);
            const nach = aktuelleFahrtOrtName(f.nach, f.nach_kuerzel);
            const zeit = `<div class="fz-zeit"><b>${sicher(f.von_zeit || '')}</b><small>${f.bis_zeit && f.bis_zeit !== f.von_zeit ? 'bis ' + sicher(f.bis_zeit) : ''}</small></div>`;

            if (istWenden) {
                anzahlWenden++;
                return `<div class="fz-zeile fz-wenden">${zeit}
                    <div class="fz-text">
                        <div class="fz-titel"><span class="fz-marke">Wenden</span></div>
                        <div class="fz-unter">${sicher(von)}${dauer !== null ? ' · ' + dauer + ' Min.' : ''}</div>
                    </div>
                </div>`;
            }
            if (f.linie) {
                anzahlFahrten++;
                const umlauf = (f.umlauf || f.umlauf === 0) ? ' · Umlauf ' + sicher(f.umlauf) : '';
                const typChip = typ && typ.toUpperCase() !== 'L' ? `<span class="fz-typ">${sicher(typ)}</span>` : '';
                const ziel = String(f.nach || '').trim() || nach;
                return `<div class="fz-zeile">${zeit}
                    <div class="fz-text">
                        <div class="fz-titel"><span class="fz-linie">${sicher(f.linie)}</span>${ziel ? ' → ' + sicher(ziel) : ''}${typChip}</div>
                        <div class="fz-unter">${von ? 'ab ' + sicher(von) : ''}${umlauf}${dauer !== null ? ' · ' + dauer + ' Min.' : ''}</div>
                    </div>
                </div>`;
            }
            // übrige Standzeiten und Sonderfahrten ohne Linie (Rüst, NB, ÜWegZ, VB ...)
            return `<div class="fz-zeile fz-leise">${zeit}
                <div class="fz-text">
                    <div class="fz-titel">${sicher(typ || 'Standzeit')}</div>
                    <div class="fz-unter">${sicher(von)}${nach && nach !== von ? ' → ' + sicher(nach) : ''}${dauer !== null ? ' · ' + dauer + ' Min.' : ''}</div>
                </div>
            </div>`;
        }).join('');

        const kurz = [`${anzahlFahrten} Fahrten`, `${anzahlWenden} Wenden`, `${pausen.length} ${pausen.length === 1 ? 'Pause' : 'Pausen'}`];
        return { html, kurz: kurz.join(' · ') };
    }

    function alleFahrtenOeffnen() {
        const d = aktuelleDetails;
        const seite = document.getElementById('alleFahrtenSeite');
        if (!d || !seite) return;
        const dat = document.getElementById('datum').value;
        const nr = document.getElementById('dienstnummer').value.trim();
        const wt = dat ? WOCHENTAGE_KURZ[new Date(dat + 'T12:00:00').getDay()] : '';
        document.getElementById('alleFahrtenUnter').innerText =
            (dat ? `${wt} ${dat.split('-').reverse().slice(0, 2).join('.')}.` : '') + (nr ? (dat ? ' · ' : '') + 'Dienst ' + nr : '');
        const ergebnis = alleFahrtenHtml(d);
        document.getElementById('alleFahrtenKurz').innerText = ergebnis.kurz;
        document.getElementById('alleFahrtenInhalt').innerHTML = ergebnis.html || '<p class="seiten-hinweis">Keine Fahrten im Dienstzettel.</p>';
        seite.classList.add('offen');
        document.body.style.overflow = 'hidden';
        seite.scrollTop = 0;
        document.getElementById('alleFahrtenZu').focus();
    }

    function alleFahrtenSchliessen() {
        const seite = document.getElementById('alleFahrtenSeite');
        if (!seite || !seite.classList.contains('offen')) return;
        seite.classList.remove('offen');
        document.body.style.overflow = '';
    }

    document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') alleFahrtenSchliessen(); });

    // Nimmt "15:37", "00:29+", "9:05" und macht daraus "15:37" / "00:29" / "09:05"
    function zeitBereinigen(wert) {
        if (wert === null || wert === undefined) return '';
        const treffer = String(wert).replace('+', '').trim().match(/^(\d{1,2}):(\d{2})/);
        if (!treffer) return '';
        return treffer[1].padStart(2, '0') + ':' + treffer[2];
    }

    function felderSetzen(ergebnis) {
        const gefunden = [];
        if (ergebnis.datum && /^\d{4}-\d{2}-\d{2}$/.test(ergebnis.datum)) {
            document.getElementById('datum').value = ergebnis.datum;
            gefunden.push('Datum');
        }
        const beginn = zeitBereinigen(ergebnis.beginn);
        if (beginn) {
            document.getElementById('start').value = beginn;
            gefunden.push('Beginn');
        }
        const ende = zeitBereinigen(ergebnis.ende);
        if (ende) {
            document.getElementById('ende').value = ende;
            gefunden.push('Ende');
        }
        if (ergebnis.pausenregel) {
            const auswahl = document.getElementById('pausenregel');
            const regel = String(ergebnis.pausenregel).toLowerCase();
            if (regel.startsWith('b')) auswahl.value = 'B30';
            else if (regel.includes('sechst')) auswahl.value = 'sechste';
            else if (regel.includes('res')) auswahl.value = 'reserve';
            gefunden.push('Pausenregel');
        } else if (ergebnis.quelle === 'pdf') {
            // Nennt das PDF keine Pausenregel, nicht die Auswahl vom vorherigen Dienst mitnehmen (Standard: B30)
            document.getElementById('pausenregel').value = 'B30';
        }

        if (ergebnis.dienstnummer) {
            document.getElementById('dienstnummer').value = ergebnis.dienstnummer;
        }
        // Vor dem Rendern der Pausen setzen, damit aussetzenPruefung() bereits
        // die richtigen Fahrten-Daten zur Verfuegung hat.
        detailsMitHaltestellen(ergebnis);
        detailsAnzeigen(ergebnis);
        if (aktuelleDetails && ergebnis.kontrolle) aktuelleDetails.kontrolle = ergebnis.kontrolle;
        haltestellenLernen(ergebnis);

        // Pausen aus dem Dienstzettel in die Liste uebernehmen (bezahlt UND unbezahlt)
        pausenEintraege = pausenZusammenfassen((ergebnis.pausen || [])
            .filter(p => p.von && p.bis)
            .map(p => ({
                von: p.von, bis: p.bis,
                unbezahlt: Number(p.unbezahlt_minuten) || 0,
                gearbeitet: 0,
                art: String(p.art || '').toUpperCase() === 'BEZPAU' ? 'BEZPAU' : 'UNBPAU',
                davorZeit: p.davor_zeit || null
            })));

        if (!pausenEintraege.length && Number(ergebnis.pause_minuten) > 0) {
            document.getElementById('pause').value = Number(ergebnis.pause_minuten);
        }
        pausenregelGeaendert();
        if (pausenEintraege.length) gefunden.push('Pausen');
        if (gefunden.includes('Datum')) feiertagPruefen();

        return gefunden;
    }

    function datumKurz(datumStr) { return datumStr.split('-').reverse().join('.'); }

    // Abwesenheits-PDF (Urlaub/Krank): das vorhandene Urlaubs-/Krank-Fenster mit dem Zeitraum oeffnen,
    // dort bestaetigt man die Stunden und speichert. Gespeichert wird nichts von allein.
    function pdfAbwesenheitOeffnen(e) {
        const von = new Date(e.von), bis = new Date(e.bis);
        const mitDienst = [];
        for (let d = new Date(von), n = 0; d <= bis && n < 62; d.setDate(d.getDate() + 1), n++) {
            const tagStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
            const sch = gespeicherteSchichten[tagStr];
            if (sch && !sch.typ) mitDienst.push(datumKurz(tagStr));
        }
        if (mitDienst.length && !confirm(`Am ${mitDienst.join(', ')} ist bereits ein Dienst gespeichert. Speicherst du den ${SONDERTAG_INFO[e.typ].label}, wird dieser Dienst ersetzt.\n\nTrotzdem öffnen?`)) {
            return false;
        }
        krankFormularOeffnen(e.von, e.typ);
        if (e.bis && e.bis !== e.von) {
            document.getElementById('krankBis').value = e.bis;
            krankBerechnen();
        }
        return true;
    }

    function pdfAbwesenheitText(e) {
        const zeitraum = e.bis && e.bis !== e.von ? `vom ${datumKurz(e.von)} bis ${datumKurz(e.bis)}` : `am ${datumKurz(e.von)}`;
        return `${SONDERTAG_INFO[e.typ].label} ${zeitraum}`;
    }

    // PDF-Dienstzettel: Text direkt aus der Datei lesen - keine KI, keine Kosten, kein Scan-Kontingent.
    async function starteAnalysePdf(file) {
        const statusEl = document.getElementById('statusText');
        if (!istPdfDatei(file)) {
            statusEl.style.color = "inherit";
            statusEl.innerText = "Bitte den Dienstzettel als PDF auswählen.";
            return;
        }
        statusEl.style.color = "inherit";
        statusEl.innerText = "PDF wird gelesen...";
        try {
            const ergebnis = await DienstzettelPdf.pdfDateiZuErgebnis(file);
            if (ergebnis.abwesenheit) {
                const geoeffnet = pdfAbwesenheitOeffnen(ergebnis);
                statusEl.style.color = geoeffnet ? "#047857" : "#d97706";
                statusEl.innerText = geoeffnet
                    ? `${pdfAbwesenheitText(ergebnis)} aus dem PDF erkannt. Bitte im Fenster die Stunden prüfen und speichern.`
                    : `${pdfAbwesenheitText(ergebnis)} erkannt, aber nicht übernommen.`;
                return;
            }
            const gefunden = felderSetzen(ergebnis);
            const dienst = ergebnis.dienstnummer ? ` (Dienst ${ergebnis.dienstnummer})` : '';
            if (ergebnis.sicher === false) {
                statusEl.style.color = "inherit";
                statusEl.innerText = `PDF gelesen${dienst}, aber nicht alles passt zusammen: ${ergebnis.pruefhinweise.join(' ')} Bitte die Werte genau prüfen.`;
            } else {
                statusEl.style.color = "inherit";
                statusEl.innerText = `Aus dem PDF gelesen: ${gefunden.join(', ')}${dienst}. Bitte prüfen und auf "Berechnen" tippen.`;
            }
        } catch (e) {
            console.warn('PDF-Import fehlgeschlagen:', e);
            statusEl.style.color = "inherit";
            statusEl.innerText = 'Fehler: ' + (e && e.message ? e.message : 'Das PDF konnte nicht gelesen werden.');
        }
    }



    function berechneSchicht() {
        const datumStr = document.getElementById('datum').value;
        const startStr = document.getElementById('start').value;
        const endeStr = document.getElementById('ende').value;
        const endeIst = document.getElementById('endeTatsaechlich').value;
        // "Feiertags-/Sonderregelung" deckt per Dropdown auch die Mehrarbeit-
        // Kombinationen ab (offener Dienst zusaetzlich an einem Feiertag/
        // Sondertag) - fuer die minutenweise Zuschlagsberechnung wird daraus
        // die zugrundeliegende Tagesart abgeleitet, "istMehrarbeitTag" steuert
        // separat die Grundverguetung fuers Ganzetagesarbeit.
        const feiertagsArtRoh = document.getElementById('feiertagsArt').value;
        const istMehrarbeitTag = feiertagsArtRoh.startsWith('mehrarbeit');
        const feiertagsArt = feiertagsArtRoh === 'mehrarbeit_feiertag' ? 'feiertag'
            : feiertagsArtRoh === 'mehrarbeit_sonderstichtag' ? 'sonderstichtag'
            : feiertagsArtRoh === 'mehrarbeit' ? 'normal'
            : feiertagsArtRoh;
        const dienstnummer = document.getElementById('dienstnummer').value.trim();
        const pausenregel = document.getElementById('pausenregel').value;
        const details = aktuelleDetails;

        if (!datumStr || !startStr || !endeStr) return;

        const [jahr, monat, tag] = datumStr.split('-').map(Number);
        const baue = (zeitStr, referenz) => {
            const [h, m] = zeitStr.split(':').map(Number);
            const d = new Date(jahr, monat - 1, tag, h, m);
            if (referenz && d <= referenz) d.setDate(d.getDate() + 1);
            return d;
        };

        const dStart = baue(startStr);
        const dPlanEnde = baue(endeStr, dStart);
        const dEnde = endeIst ? baue(endeIst, dStart) : dPlanEnde;

        // --- Unbezahlte Fenster: immer am ENDE der jeweiligen Pause ---
        const unbezahlteFenster = [];
        let ausgefallenMin = 0;

        if (pausenregel !== 'reserve') {
            pausenEintraege.forEach(p => {
                if (!p.von || !p.bis) return;
                const von = baue(p.von, dStart);
                const bis = baue(p.bis, von);
                const dauer = (bis - von) / 60000;

                const unbezahlt = Math.max(0, Math.min(Number(p.unbezahlt) || 0, dauer));
                if (unbezahlt === 0) return;

                // Die unbezahlte Zeit liegt am ENDE der Pause.
                const unbezahltVon = new Date(bis.getTime() - unbezahlt * 60000);

                // Wurde ein Teil davon gearbeitet, sind das die ERSTEN Minuten
                // der unbezahlten Zeit -> sie zaehlen als Mehrarbeit.
                const gearbeitet = Math.max(0, Math.min(Number(p.gearbeitet) || 0, unbezahlt));
                ausgefallenMin += gearbeitet;

                const restVon = new Date(unbezahltVon.getTime() + gearbeitet * 60000);
                if (restVon < bis) {
                    unbezahlteFenster.push({ von: restVon, bis: bis });
                }
            });
        }

        const unbezahltMinuten = unbezahlteFenster
            .reduce((sum, f) => sum + (f.bis - f.von) / 60000, 0);

        // Pauschale Rueckfallebene, falls keine Pausenzeiten eingetragen sind
        const pauschalPause = parseFloat(document.getElementById('pause').value) || 0;
        const genau = pausenregel === 'reserve' || unbezahlteFenster.length > 0 || pauschalPause === 0;

        const istUnbezahlt = (z) => unbezahlteFenster.some(f => z >= f.von && z < f.bis);

        // Tagesart je Kalendertag: Am Starttag gilt die gewählte Feiertagsregelung. Reicht der Dienst über
        // Mitternacht, gilt für die Zeit danach der Folgetag - ist der kein Feiertag, gibt es dafür auch keinen
        // Feiertagszuschlag (Samstag/Sonntag richten sich schon minutengenau nach dem Wochentag).
        const tagesArtCache = {};
        const tagesArt = (d) => {
            const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
            if (key === datumStr) return feiertagsArt;
            if (!(key in tagesArtCache)) {
                const treffer = feiertagAm(key);
                tagesArtCache[key] = treffer ? treffer.art : 'normal';
            }
            return tagesArtCache[key];
        };

        // --- Minutenweise durchgehen ---
        let gearbeitet = 0, nachtMin = 0, samstagMin = 0, sonntagMin = 0, feiertagMin = 0, sonderMin = 0;
        let mehrMin = 0;
        let curr = new Date(dStart.getTime());

        while (curr < dEnde) {
            if (genau && istUnbezahlt(curr)) { curr.setMinutes(curr.getMinutes() + 1); continue; }

            const wochentag = curr.getDay();
            const stunde = curr.getHours();
            const nachPlan = curr >= dPlanEnde;

            if (nachPlan) mehrMin++;
            else gearbeitet++;

            if (stunde >= ein.nachtVon || stunde < ein.nachtBis) nachtMin++;

            const tagArt = tagesArt(curr);
            if (tagArt === 'feiertag') feiertagMin++;
            else if (tagArt === 'sonderstichtag') sonderMin++;
            else if (wochentag === 6 && stunde >= ein.samstagAb) samstagMin++;
            else if (wochentag === 0) sonntagMin++;

            curr.setMinutes(curr.getMinutes() + 1);
        }

        // Bei genauer Rechnung sind die in der Pause gearbeiteten Minuten schon
        // in "gearbeitet" enthalten (sie liegen nicht im unbezahlten Fenster).
        // Nur bei der pauschalen Rueckfallebene muessen sie ergaenzt werden.
        const nettoMinuten = genau
            ? gearbeitet
            : Math.max(0, (dPlanEnde - dStart) / 60000 - pauschalPause) + ausgefallenMin;
        const nettoStunden = nettoMinuten / 60;

        // Bei einem kompletten Mehrarbeit-Tag (offener Dienst am dienstfreien
        // Tag) zaehlt die GESAMTE gearbeitete Zeit als Ueberstunden, nicht nur
        // die Minuten nach dem Plan-Ende bzw. in der Pause.
        const mehrarbeitMinuten = istMehrarbeitTag ? nettoMinuten : (mehrMin + ausgefallenMin);
        const mehrarbeitStunden = mehrarbeitMinuten / 60;

        // --- Zuschlaege auf das Zuschlagsentgelt (ZZ) ---
        const zuschlag = (min, prozent) => (min / 60) * ein.zz * (prozent / 100);

        const nachtEuro = zuschlag(nachtMin, ein.nacht);
        const samstagEuro = zuschlag(samstagMin, ein.samstag);
        const sonntagEuro = zuschlag(sonntagMin, ein.sonntag);
        const feiertagEuro = zuschlag(feiertagMin, ein.feiertag);
        const sonderEuro = zuschlag(sonderMin, ein.sonder);
        const mehrarbeitEuro = zuschlag(mehrarbeitMinuten, ein.mehrarbeit);

        // Ein Mehrarbeit-Tag ist nicht Teil des regulaeren Dienstplans, dessen
        // Grundlohn bereits durchs Monatsentgelt abgedeckt ist - hier kommt
        // deshalb zusaetzlich zu den Zuschlaegen auch die volle Grundverguetung
        // fuer die gearbeitete Zeit dazu.
        const grundverguetungEuro = istMehrarbeitTag ? (mehrarbeitMinuten / 60) * ein.zz : 0;

        const zuschlagSumme = nachtEuro + samstagEuro + sonntagEuro +
                              feiertagEuro + sonderEuro + mehrarbeitEuro + grundverguetungEuro;

        aktuellesBerechnetesErgebnis = {
            datumStr, startStr, endeStr, endeIst, feiertagsArt: feiertagsArtRoh, dienstnummer, details,
            pausenregel, pausen: JSON.parse(JSON.stringify(pausenEintraege)),
            pauseMinuten: unbezahltMinuten,
            genau, nettoStunden, nettoMinuten, unbezahltMinuten,
            nachtMin, samstagMin, sonntagMin, feiertagMin, sonderMin,
            mehrarbeitMinuten, mehrarbeitStunden,
            nachtEuro, samstagEuro, sonntagEuro, feiertagEuro, sonderEuro, mehrarbeitEuro,
            istMehrarbeitTag, grundverguetungEuro,
            zuschlagSumme, zz: ein.zz,
            dEnde
        };

        zeigeErgebnis(aktuellesBerechnetesErgebnis);
        pruefeGegenZettel(aktuellesBerechnetesErgebnis, details);

        document.getElementById('ausgabe').style.display = 'block';
        document.getElementById('erfassenAktionenBtn').style.display = 'block';
        document.getElementById('btnDelete').style.display = gespeicherteSchichten[datumStr] ? 'block' : 'none';

        const verlaufHinweis = document.getElementById('verlaufHinweis');
        const hatVerlauf = aktuelleDetails && (aktuelleDetails.beginn_ort ||
            (aktuelleDetails.wechsel || []).length || (aktuelleDetails.pausen || []).length);
        if (verlaufHinweis) verlaufHinweis.style.display = hatVerlauf ? 'block' : 'none';
    }

    // Zeit als "8.42 Std. (8h 25m)"
    function zeitText(minuten) {
        const m = Math.round(minuten);
        return `${(m / 60).toFixed(2)} Std. (${Math.floor(m / 60)}h ${m % 60}m)`;
    }

    function euroText(betrag) {
        return (betrag || 0).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
    }

    // Stunden mit einer Nachkommastelle: "112,5 Std."
    function stundenKomma(minuten) {
        return ((minuten || 0) / 60).toFixed(1).replace('.', ',') + ' Std.';
    }


    function zeigeErgebnis(r) {
        const setze = (id, text) => { const el = document.getElementById(id); if (el) el.innerText = text; };
        // "7:58 Std." (Stunden:Minuten)
        const hmm = (min) => `${Math.floor(Math.round(min) / 60)}:${String(Math.round(min) % 60).padStart(2, '0')} Std.`;
        const mitEuro = (min, euro) => min ? `${hmm(min)} → ${euroText(euro)}` : '–';

        const wochentag = r.datumStr ? WOCHENTAGE_KURZ[new Date(r.datumStr + 'T12:00:00').getDay()] : '';
        setze('resDatum', r.datumStr ? `${wochentag} ${r.datumStr.split('-').reverse().slice(0, 2).join('.')}.` : '');

        setze('resNetto', hmm(r.nettoMinuten));
        setze('resNacht', mitEuro(r.nachtMin, r.nachtEuro));
        setze('resSamstag', mitEuro(r.samstagMin, r.samstagEuro));
        setze('resSonntag', mitEuro(r.sonntagMin, r.sonntagEuro));
        setze('resFeiertag', mitEuro(r.feiertagMin, r.feiertagEuro));
        setze('resSonder', mitEuro(r.sonderMin, r.sonderEuro));
        setze('resMehrarbeit', mitEuro(r.mehrarbeitMinuten, r.mehrarbeitEuro));

        const grundZeile = document.getElementById('resGrundZeile');
        if (grundZeile) grundZeile.style.display = r.istMehrarbeitTag ? 'flex' : 'none';
        setze('resGrundverguetung', euroText(r.grundverguetungEuro || 0));

        setze('resGesamtLabel', r.istMehrarbeitTag ? 'Extra-Lohn gesamt' : 'Zuschläge gesamt');
        setze('resGesamt', euroText(r.zuschlagSumme));

        mehrarbeitHinweisAktualisieren();
    }

    // Blendet den Mehrarbeit-Hinweistext unter dem Feiertags-/Sonderregelung-
    // Dropdown ein/aus - unabhaengig davon, ob schon ein Ergebnis berechnet
    // wurde (z. B. direkt nach Auswahl, bevor Start-/Endzeit ausgefuellt sind).
    function mehrarbeitHinweisAktualisieren() {
        const hinweis = document.getElementById('mehrarbeitHinweis');
        const art = document.getElementById('feiertagsArt');
        if (hinweis && art) hinweis.style.display = art.value.startsWith('mehrarbeit') ? 'block' : 'none';
        // Faerbt das Dropdown gelb (wie die anderen Buttons) und bei einer
        // getroffenen Auswahl gruen, damit man die aktive Regelung sofort sieht.
        if (art) art.classList.toggle('hat-auswahl', art.value !== 'normal');
    }

    // Vergleich mit den Kopfwerten des Dienstzettels
    function pruefeGegenZettel(r, details) {
        const box = document.getElementById('kontrolleBox');
        if (!box) return;
        const k = details && details.kontrolle;
        if (!k) { box.style.display = 'none'; return; }

        const inMin = (hhmm) => {
            if (!hhmm) return null;
            const [h, m] = hhmm.split(':').map(Number);
            return isNaN(h) ? null : h * 60 + m;
        };
        const alsText = (min) =>
            `${Math.floor(min / 60).toString().padStart(2, '0')}:${Math.round(min % 60).toString().padStart(2, '0')}`;

        const abweichungen = [];

        const sollBezahlt = inMin(k.bezahlte_zeit);
        if (sollBezahlt !== null && Math.abs(sollBezahlt - r.nettoMinuten) > 1) {
            abweichungen.push(`Bezahlte Zeit: Zettel ${k.bezahlte_zeit}, berechnet ${alsText(r.nettoMinuten)}`);
        }

        const sollPause = inMin(k.unbezahlte_pausenzeit);
        if (sollPause !== null && Math.abs(sollPause - r.unbezahltMinuten) > 1) {
            abweichungen.push(`Unbezahlte Pause: Zettel ${k.unbezahlte_pausenzeit}, eingetragen ${alsText(r.unbezahltMinuten)}`);
        }

        (k.zuschlagsfelder || []).forEach(z => {
            const soll = inMin(z.wert);
            if (soll === null) return;
            const name = (z.name || '').toLowerCase();
            let ist = null;
            if (name.includes('nacht')) ist = r.nachtMin;
            else if (name.includes('samstag')) ist = r.samstagMin;
            else if (name.includes('sonntag')) ist = r.sonntagMin;
            else if (name.includes('feiertag')) ist = r.feiertagMin;
            if (ist !== null && Math.abs(soll - ist) > 1) {
                abweichungen.push(`${z.name}: Zettel ${z.wert}, berechnet ${alsText(ist)}`);
            }
        });

        box.style.display = 'block';
        if (!abweichungen.length) {
            box.className = 'kontrolle-box ok';
            box.innerHTML = `<span style="display:flex; align-items:flex-start; gap:6px;">${ICONS.check} Stimmt mit den Werten auf dem Dienstzettel überein.</span>`;
        } else {
            box.className = 'kontrolle-box abweichung';
            box.innerHTML = `<span style="display:flex; align-items:flex-start; gap:6px;">${ICONS.warning}<span>Abweichung zum Dienstzettel:<br>• ` + abweichungen.join('<br>• ') + '</span></span>';
        }
    }

    // Schreibt ein Berechnungsergebnis in die Datenbank
    async function schichtSpeichern(ergebnis, stillschweigend) {
        if (!ergebnis) return;
        const datumStr = ergebnis.datumStr;
        const { error } = await sb.from('planer_schichten').upsert({
            user_id: aktuellerNutzer.id,
            datum: datumStr,
            daten: ergebnis,
            aktualisiert_am: new Date().toISOString()
        }, { onConflict: 'user_id,datum' });
        if (error) throw error;

        gespeicherteSchichten[datumStr] = ergebnis;
        if (!stillschweigend) renderCalendar();
        widgetSyncPlanen();
    }

    async function speichereTagInKalender() {
        if (!aktuellesBerechnetesErgebnis) return;
        try {
            await schichtSpeichern(aktuellesBerechnetesErgebnis);
            alert(`✅ Schicht für den ${aktuellesBerechnetesErgebnis.datumStr} gespeichert!`);
        } catch (e) {
            alert('❌ Speichern fehlgeschlagen: ' + fehlerText(e));
        }
    }

    async function loescheTagAusKalender() {
        const datumStr = document.getElementById('datum').value;
        if (!gespeicherteSchichten[datumStr]) return;

        try {
            const { error } = await sb.from('planer_schichten').delete()
                .eq('user_id', aktuellerNutzer.id).eq('datum', datumStr);
            if (error) throw error;

            delete gespeicherteSchichten[datumStr];
            document.getElementById('ausgabe').style.display = 'none';
            document.getElementById('erfassenAktionenBtn').style.display = 'none';
            renderCalendar();
            widgetSyncPlanen();
            alert(`🗑️ Schicht für ${datumStr} gelöscht.`);
        } catch (e) {
            alert('❌ Löschen fehlgeschlagen: ' + fehlerText(e));
        }
    }

    // Baut aus den Dienstdetails einen lesbaren Verlaufstext fuer Kalendereintraege
    function verlaufAlsText(res, nl) {
        const d = res.details;
        if (!d) return '';

        const ort = (name, kuerzel) => {
            const n = (name || '').trim(), k = (kuerzel || '').trim();
            if (!n && !k) return '';
            if (!n) return k;
            if (!k || n === k) return n;
            return `${n} (${k})`;
        };

        const info = (linie, umlauf, nach, nachK, abfahrt) => {
            const teile = [];
            const l = (linie === 0 || linie) ? String(linie).trim() : '';
            const u = (umlauf === 0 || umlauf) ? String(umlauf).trim() : '';
            if (l) teile.push('Linie ' + l);
            if (u) teile.push('Umlauf ' + u);
            let t = teile.join(' - ');
            const ziel = ort(nach, nachK);
            if (ziel) t += (t ? ' -> ' : '-> ') + ziel;
            if (abfahrt) t += (t ? ' ' : '') + '(ab ' + abfahrt + ')';
            return t;
        };

        let t = '';
        if (d.beginn_ort || d.beginn_ort_kuerzel) {
            const f = info(d.beginn_linie, d.beginn_umlauf, d.beginn_nach, d.beginn_nach_kuerzel, d.beginn_abfahrt);
            t += `${nl}\u25b6\ufe0f Beginn: ${res.startStr} ${ort(d.beginn_ort, d.beginn_ort_kuerzel)}` + (f ? ` | ${f}` : '');
        }
        (d.wechsel || []).forEach(w => {
            const f = info(w.linie, w.umlauf, w.nach, w.nach_kuerzel, w.abfahrt);
            t += `${nl}\u2022 ${w.art || 'Wechsel'}: ${w.zeit || ''} ${ort(w.ort, w.ort_kuerzel)}` +
                 `${w.von_dienst ? ' (Dienst ' + w.von_dienst + ')' : ''}` + (f ? ` | ${f}` : '');
        });
        const gezeigt = new Set((d.wechsel || []).map(w => `${w.art}|${w.zeit}`));
        (d.pausen || []).forEach(p => {
            if (p.davor_art && !gezeigt.has(`${p.davor_art}|${p.davor_zeit}`)) {
                const fv = info(p.davor_linie, p.davor_umlauf, null, null, null);
                t += `${nl}\u2022 ${p.davor_art}: ${p.davor_zeit || ''} ${ort(p.davor_ort, p.davor_ort_kuerzel)}` + (fv ? ` | ${fv}` : '');
            }
            t += `${nl}\u2615 Pause: ${p.von || ''}-${p.bis || ''} ${ort(p.ort, p.ort_kuerzel)}`;
            const f = info(p.danach_linie, p.danach_umlauf, p.danach_nach, p.danach_nach_kuerzel, p.danach_abfahrt);
            if (f) t += `${nl}   ${p.danach_art || 'danach'}: ${f}`;
        });
        if (d.ende_ort || d.ende_ort_kuerzel) {
            const f = info(d.ende_linie, d.ende_umlauf, d.ende_nach, d.ende_nach_kuerzel, null);
            t += `${nl}\u23f9\ufe0f Ende: ${res.endeStr}${d.ende_folgetag ? ' (Folgetag)' : ''} ${ort(d.ende_ort, d.ende_ort_kuerzel)}` + (f ? ` | ${f}` : '');
        }
        return t ? `${nl}${nl}\ud83d\uddfa\ufe0f DIENSTVERLAUF:${t}${nl}` : '';
    }

    function exportToGoogleCalendar() {
        if (!aktuellesBerechnetesErgebnis) return;
        const res = aktuellesBerechnetesErgebnis;
        const startIso = res.datumStr.replace(/-/g, '') + 'T' + res.startStr.replace(':', '') + '00';

        const pad = (n) => n < 10 ? '0' + n : n;
        const dEndeObj = new Date(res.dEnde);
        const endeIso = dEndeObj.getFullYear() +
            pad(dEndeObj.getMonth() + 1) +
            pad(dEndeObj.getDate()) + 'T' +
            pad(dEndeObj.getHours()) +
            pad(dEndeObj.getMinutes()) + '00';

        const title = encodeURIComponent(res.dienstnummer ? "Dienst " + res.dienstnummer : "Dienstschicht");
        const descriptionText =
            `📊 SCHICHT-AUSWERTUNG\n----------------------------------\n` +
            verlaufAlsText(res, '\n') +
            `⏱️ Bezahlte Arbeitszeit: ${zeitText(res.nettoMinuten)}\n` +
            `☕ Unbezahlte Pause: ${Math.round(res.unbezahltMinuten || 0)} Min.\n\n` +
            `💰 ZUSCHLÄGE:\n` +
            `- Nacht: ${euroText(res.nachtEuro || 0)}\n` +
            `- Samstag: ${euroText(res.samstagEuro || 0)}\n` +
            `- Sonntag: ${euroText(res.sonntagEuro || 0)}\n` +
            `- Feiertag: ${euroText(res.feiertagEuro || 0)}\n` +
            `- Sondertag: ${euroText(res.sonderEuro || 0)}\n` +
            `- Mehrarbeit: ${euroText(res.mehrarbeitEuro || 0)}\n` +
            `----------------------------------\n` +
            `💶 ZUSCHLÄGE GESAMT: ${euroText(res.zuschlagSumme || 0)}`;

        const details = encodeURIComponent(descriptionText);
        const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endeIso}&details=${details}`;
        window.open(gCalUrl, '_blank');
    }





    let kalenderGewaehlt = null;   // angetippter Tag mit Dienst (zeigt die Karte unter dem Kalender)

    function renderCalendar() {
        const grid = document.getElementById('calendarGrid');
        if (!grid) return;
        grid.innerHTML = '';

        const jahr = aktuellesDatumAnzeige.getFullYear();
        const monat = aktuellesDatumAnzeige.getMonth();
        document.getElementById('calendarMonthTitle').innerText = `${MONATSNAMEN[monat]} ${jahr}`;

        ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].forEach(t => {
            const h = document.createElement('div');
            h.className = 'cal-day-header';
            h.innerText = t;
            grid.appendChild(h);
        });

        const tageImMonat = new Date(jahr, monat + 1, 0).getDate();
        let startOffset = new Date(jahr, monat, 1).getDay() - 1;
        if (startOffset === -1) startOffset = 6;
        for (let i = 0; i < startOffset; i++) {
            const leer = document.createElement('div');
            leer.className = 'cal-day empty';
            grid.appendChild(leer);
        }

        const heuteStr = heutigesDatumStr();
        const pad = (n) => n < 10 ? '0' + n : n;

        for (let d = 1; d <= tageImMonat; d++) {
            const datum = `${jahr}-${pad(monat + 1)}-${pad(d)}`;
            const sch = gespeicherteSchichten[datum];
            const feiertag = feiertagAm(datum);
            const zelle = document.createElement('div');
            zelle.className = 'cal-day';
            zelle.setAttribute('role', 'button');
            zelle.setAttribute('tabindex', '0');
            if (datum === heuteStr) zelle.classList.add('heute');
            if (datum === kalenderGewaehlt) zelle.classList.add('gewaehlt');
            if (feiertag) {
                zelle.classList.add(feiertag.art === 'feiertag' ? 'feiertag' : 'sondertag');
                zelle.title = feiertag.name;
            }

            const zahl = document.createElement('div');
            zahl.innerText = d;
            zelle.appendChild(zahl);

            let unterzeile = feiertag ? feiertagKurz(feiertag.name) : '';
            let beschreibung = `${d}. ${MONATSNAMEN[monat]}`;
            if (sch) {
                if (sch.typ && SONDERTAG_INFO[sch.typ]) {
                    zelle.classList.add(SONDERTAG_INFO[sch.typ].cssKlasse);
                    unterzeile = SONDERTAG_INFO[sch.typ].label;
                    beschreibung += ', ' + SONDERTAG_INFO[sch.typ].label;
                } else {
                    zelle.classList.add('has-shift');
                    unterzeile = sch.startStr || '';
                    beschreibung += ', Dienst ab ' + (sch.startStr || '');
                    if (sch.istMehrarbeitTag) zelle.classList.add('mehrarbeit-tag');
                }
            } else if (feiertag) {
                beschreibung += ', ' + feiertag.name;
            }
            // Zuschläge dieses Tages (bei Krank/Urlaub der Aufschlag) als kleine dritte Zeile
            const zuschlagTag = sch ? (sch.typ ? (sch.aufschlagEuro || 0) : (sch.zuschlagSumme || 0)) : 0;
            if (zuschlagTag >= 0.5) beschreibung += ', Zuschläge ' + euroText(zuschlagTag);
            zelle.setAttribute('aria-label', beschreibung);
            if (unterzeile) {
                const u = document.createElement('div');
                u.className = 'euro';
                u.innerText = unterzeile;
                zelle.appendChild(u);
            }
            if (zuschlagTag >= 0.5) {
                const z = document.createElement('div');
                z.className = 'euro zuschlag';
                z.innerText = '+' + Math.round(zuschlagTag) + ' €';
                zelle.appendChild(z);
            }

            if (ereignisTage.has(datum)) {
                const marker = document.createElement('div');
                marker.className = 'ereignis-marker';
                marker.innerText = '*';
                marker.title = 'Ereignis vorhanden';
                zelle.appendChild(marker);
            }

            zelle.onclick = () => kalenderTagKlick(datum);
            zelle.onkeydown = (ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); kalenderTagKlick(datum); } };
            grid.appendChild(zelle);
        }

        kalenderTagKarteRendern();
        kalenderMonatKarteRendern();
    }

    // Stunden mit zwei Nachkommastellen wie auf der Abrechnung: "24,48 Std."
    function stdAbrechnung(minuten) {
        return (minuten / 60).toFixed(2).replace('.', ',') + ' Std.';
    }

    // Aufschlüsselung der Zuschläge eines Dienstes: [{ name, minuten, euro }], nur Positionen mit Wert.
    // Was von zuschlagSumme übrig bleibt (volle Vergütung bei einem Mehrarbeit-Tag), steht als eigene Zeile.
    function zuschlagPositionen(sch) {
        const roh = [
            ['Nacht', nachtMinutenVon(sch), sch.nachtEuro],
            ['Samstag', sch.samstagMin, sch.samstagEuro],
            ['Sonntag', sch.sonntagMin, sch.sonntagEuro],
            ['Feiertag', sch.feiertagMin, sch.feiertagEuro],
            ['Sondertag', sch.sonderMin, sch.sonderEuro],
            ['Mehrarbeit', sch.mehrarbeitMinuten, sch.mehrarbeitEuro]
        ];
        const liste = roh.map(([name, minuten, euro]) => ({ name, minuten: minuten || 0, euro: euro || 0 }))
            .filter(p => p.euro > 0.004);
        const rest = (sch.zuschlagSumme || 0) - liste.reduce((a, p) => a + p.euro, 0);
        if (rest > 0.005) liste.push({ name: 'Vergütung Mehrarbeit-Tag', minuten: sch.mehrarbeitMinuten || 0, euro: rest });
        return liste;
    }

    // Übersicht unter dem Kalender: alle Zuschläge des angezeigten Monats, nach Art aufgeteilt.
    // Sie werden zwei Monate später mit der Abrechnung ausgezahlt (Zuschläge vom August stehen auf der Oktober-Abrechnung).
    function kalenderMonatKarteRendern() {
        const el = document.getElementById('kalenderMonatKarte');
        if (!el) return;
        const jahr = aktuellesDatumAnzeige.getFullYear();
        const monat = aktuellesDatumAnzeige.getMonth();
        const praefix = `${jahr}-${String(monat + 1).padStart(2, '0')}`;
        const summen = {};
        const reihenfolge = ['Nacht', 'Samstag', 'Sonntag', 'Feiertag', 'Sondertag', 'Mehrarbeit', 'Vergütung Mehrarbeit-Tag'];
        let gesamt = 0, aufschlag = 0, dienste = 0;
        Object.keys(gespeicherteSchichten).forEach(k => {
            if (!k.startsWith(praefix)) return;
            const sch = gespeicherteSchichten[k];
            if (sch.typ) { aufschlag += sch.aufschlagEuro || 0; return; }
            dienste++;
            gesamt += sch.zuschlagSumme || 0;
            zuschlagPositionen(sch).forEach(p => {
                const e = summen[p.name] || (summen[p.name] = { minuten: 0, euro: 0 });
                e.minuten += p.minuten;
                e.euro += p.euro;
            });
        });
        if (!dienste && aufschlag < 0.005) { el.innerHTML = ''; return; }

        const zeilen = reihenfolge.filter(n => summen[n]).map(n =>
            `<div class="zuschlag-zeile"><span>${sicher(n)}</span><span>${n.startsWith('Vergütung') ? '' : stdAbrechnung(summen[n].minuten)}</span><span>${euroText(summen[n].euro)}</span></div>`);
        if (aufschlag >= 0.005) {
            zeilen.push(`<div class="zuschlag-zeile"><span>Krank-/Urlaubsaufschlag</span><span></span><span>${euroText(aufschlag)}</span></div>`);
        }
        const zahlMonat = MONATSNAMEN[(monat + 2) % 12];
        el.innerHTML = `<div class="zuschlag-karte">
            <div class="zuschlag-kopf">
                <span class="ueberschrift-klein">Zuschläge im ${MONATSNAMEN[monat]}</span>
                <b>${euroText(gesamt + aufschlag)}</b>
            </div>
            ${zeilen.join('')}
            <p class="zuschlag-hinweis">Wird mit der Abrechnung im ${zahlMonat} ausgezahlt.</p>
        </div>`;
    }

    // Karte zum angetippten Dienst: Zeit, bezahlte Stunden, Zuschläge, Bearbeiten, Google Kalender
    function kalenderTagKarteRendern() {
        const el = document.getElementById('kalenderTagKarte');
        if (!el) return;
        const k = kalenderGewaehlt;
        const sch = k ? gespeicherteSchichten[k] : null;
        if (!sch || sch.typ) { el.innerHTML = ''; return; }
        const [, m, t] = k.split('-');
        el.innerHTML = `<div class="tag-karte">
            <div class="tag-karte-kopf">
                <span class="tag-karte-datum">${WOCHENTAGE_LANG[new Date(k + 'T12:00:00').getDay()]}, ${t}.${m}.</span>
                ${sch.dienstnummer ? `<span class="tag-karte-dienst">Dienst ${sicher(sch.dienstnummer)}</span>` : ''}
            </div>
            <div class="tag-karte-zeit">${sicher(sch.startStr || '')} – ${sicher(sch.endeStr || '')}</div>
            <div class="tag-karte-meta">${sicher(stundenMinutenKurz(sch.nettoMinuten || 0))} bezahlt · Zuschläge ${euroText(sch.zuschlagSumme || 0)}</div>
            ${zuschlagPositionen(sch).length ? `<div class="tag-karte-zuschlaege">${zuschlagPositionen(sch).map(p =>
                `<span>${sicher(p.name)}${p.minuten && !p.name.startsWith('Vergütung') ? ' ' + stdAbrechnung(p.minuten) : ''} · ${euroText(p.euro)}</span>`).join('')}</div>` : ''}
            <div class="tag-karte-knoepfe">
                <button onclick="klickKalenderTag('${k}')">Bearbeiten</button>
                <button class="btn-umriss" onclick="kalenderTagGoogle('${k}')">In Google Kalender</button>
            </div>
        </div>`;
    }

    function kalenderTagGoogle(datumStr) {
        klickKalenderTag(datumStr);
        exportToGoogleCalendar();
    }

    // ---------- Krankheitsaufschlag (§ 14 Abs. 1 i.V.m. § 6 Abs. 3 TV-N Berlin) ----------
    // Fuer jede krankheitsbedingt ausgefallene Arbeitsstunde wird zusaetzlich der
    // Durchschnitt der Zuschlaege (Nacht/Samstag/Sonntag/Feiertag/Sondertag - NICHT
    // Ueberstunden/Mehrarbeit) der letzten drei Kalendermonate vor dem Krankheitsmonat
    // gezahlt. Basis sind die in der App gespeicherten Dienste dieser drei Monate.
    function zuschlagsDurchschnittBerechnen(datumStr) {
        const [jahr, monat] = datumStr.split('-').map(Number); // monat: 1-12
        const monate = [];
        for (let i = 3; i >= 1; i--) {
            const d = new Date(jahr, monat - 1 - i, 1);
            monate.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
        }
        let summe = 0, minuten = 0, anzahl = 0;
        Object.keys(gespeicherteSchichten).forEach(key => {
            if (!monate.includes(key.slice(0, 7))) return;
            const sch = gespeicherteSchichten[key];
            if (sch.typ) return;
            summe += (sch.nachtEuro || 0) + (sch.samstagEuro || 0) + (sch.sonntagEuro || 0)
                + (sch.feiertagEuro || 0) + (sch.sonderEuro || 0);
            minuten += sch.nettoMinuten || 0;
            anzahl++;
        });
        const stunden = minuten / 60;
        return { monate, anzahl, summe, stunden, satz: stunden > 0 ? summe / stunden : 0 };
    }

    // "Krank" und "Urlaub" laufen tariflich ueber dieselbe Regel (§ 14 Abs. 1 bzw.
    // § 15 Abs. 1 i.V.m. § 6 Abs. 3 TV-N Berlin: Durchschnitt der Zuschlaege der
    // letzten drei Kalendermonate x ausgefallene Stunden) - daher gemeinsames
    // Formular, nur Titel/Label/Kalenderfarbe unterscheiden sich.
    const SONDERTAG_INFO = {
        krank: {
            titel: 'Krank melden', label: 'Krank', cssKlasse: 'krank-tag',
            hinweis: 'Krankheitsaufschlag nach § 14 Abs. 1 i. V. m. § 6 Abs. 3 TV-N Berlin: Durchschnitt deiner Zuschläge der letzten drei Monate × ausgefallene Stunden.'
        },
        urlaub: {
            titel: 'Urlaub eintragen', label: 'Urlaub', cssKlasse: 'urlaub-tag',
            hinweis: 'Aufschlag nach § 15 Abs. 1 i. V. m. § 6 Abs. 3 TV-N Berlin: Durchschnitt deiner Zuschläge der letzten drei Monate × ausgefallene Stunden.'
        },
        frei: {
            titel: 'Freien Tag eintragen', label: 'Frei', cssKlasse: 'frei-tag',
            hinweis: 'Nur eine Markierung für deine Übersicht – kein Zuschlag, keine Berechnung.',
            keineBerechnung: true
        }
    };
    let krankAktuellTyp = 'krank';


    // Klick auf einen Kalendertag: Krank-/Urlaubstag bearbeiten, Dienst als Karte zeigen,
    // oder bei einem freien Tag wählen lassen, was eingetragen werden soll.
    function kalenderTagKlick(datumStr) {
        const sch = gespeicherteSchichten[datumStr];
        if (sch && sch.typ) { krankBearbeiten(datumStr); return; }
        if (!sch) { kalenderWahlOeffnen(datumStr); return; }
        kalenderGewaehlt = datumStr;
        renderCalendar();
    }

    let kalenderWahlDatum = null;
    function kalenderWahlOeffnen(datumStr) {
        kalenderWahlDatum = datumStr;
        document.getElementById('kalenderWahlDatum').innerText = datumStr.split('-').reverse().join('.');
        document.getElementById('kalenderWahlOverlay').style.display = 'flex';
    }
    function kalenderWahlSchliessen() {
        document.getElementById('kalenderWahlOverlay').style.display = 'none';
    }
    function kalenderWahlDienst() {
        const datumStr = kalenderWahlDatum;
        kalenderWahlSchliessen();
        klickKalenderTag(datumStr);
    }
    function kalenderWahlKrank() {
        const datumStr = kalenderWahlDatum;
        kalenderWahlSchliessen();
        krankFormularOeffnen(datumStr, 'krank');
    }
    function kalenderWahlUrlaub() {
        const datumStr = kalenderWahlDatum;
        kalenderWahlSchliessen();
        krankFormularOeffnen(datumStr, 'urlaub');
    }
    function kalenderWahlFrei() {
        const datumStr = kalenderWahlDatum;
        kalenderWahlSchliessen();
        krankFormularOeffnen(datumStr, 'frei');
    }

    function krankFormularOeffnen(datumStr, typ) {
        const bestehend = gespeicherteSchichten[datumStr];
        krankAktuellTyp = typ || (bestehend && bestehend.typ) || 'krank';
        const info = SONDERTAG_INFO[krankAktuellTyp];
        document.getElementById('krankTitel').innerText = info.titel;
        document.getElementById('krankHinweis').innerText = info.hinweis;
        document.getElementById('krankVon').value = datumStr;
        document.getElementById('krankBis').value = datumStr;
        document.getElementById('krankStunden').value = (bestehend && bestehend.ausgefallenStunden) || (ein.wochenstunden / 5).toFixed(2);
        document.getElementById('krankStundenBereich').style.display = info.keineBerechnung ? 'none' : 'block';
        document.getElementById('krankLoeschenBtn').style.display = bestehend ? 'block' : 'none';
        document.getElementById('krankOverlay').style.display = 'flex';
        krankBerechnen();
    }
    function krankFormularSchliessen() {
        document.getElementById('krankOverlay').style.display = 'none';
    }

    function krankBerechnen() {
        const von = document.getElementById('krankVon').value;
        const bis = document.getElementById('krankBis').value;
        const stundenProTag = parseFloat(document.getElementById('krankStunden').value) || 0;
        const box = document.getElementById('krankErgebnis');
        if (!von || !bis || von > bis) { box.innerHTML = ''; return; }

        const dVon = new Date(von), dBis = new Date(bis);
        const tage = Math.round((dBis - dVon) / 86400000) + 1;

        if (SONDERTAG_INFO[krankAktuellTyp].keineBerechnung) {
            box.innerHTML = `<div class="pause-info ok">${tage} Tag${tage === 1 ? '' : 'e'} als „Frei" markiert.</div>`;
            return;
        }

        const ref = zuschlagsDurchschnittBerechnen(von);
        const gesamt = stundenProTag * tage * ref.satz;

        if (!ref.anzahl) {
            box.innerHTML = `<div class="pause-info">Für die Referenzmonate (${ref.monate.join(', ')}) sind keine Dienste in der App gespeichert – der Zuschlagssatz kann nicht berechnet werden.</div>`;
            return;
        }
        const dezimal = (n) => n.toFixed(2).replace('.', ',');
        box.innerHTML = `<div class="pause-info ok">
            Referenzzeitraum ${ref.monate.join(', ')}: ${euroText(ref.summe)} Zuschläge ÷ ${dezimal(ref.stunden)} Std. = <b>${dezimal(ref.satz)} €/Std.</b><br>
            ${dezimal(stundenProTag)} Std./Tag × ${tage} Tag${tage === 1 ? '' : 'e'} × ${dezimal(ref.satz)} €/Std. = <b>${euroText(gesamt)}</b>
        </div>`;
    }

    async function krankSpeichern() {
        const von = document.getElementById('krankVon').value;
        const bis = document.getElementById('krankBis').value;
        const info = SONDERTAG_INFO[krankAktuellTyp];
        const keineBerechnung = info.keineBerechnung;
        const stundenProTag = keineBerechnung ? 0 : (parseFloat(document.getElementById('krankStunden').value) || 0);
        if (!von || !bis || von > bis || (!keineBerechnung && stundenProTag <= 0)) {
            alert('Bitte Von-/Bis-Datum' + (keineBerechnung ? '' : ' und Stunden pro Tag') + ' prüfen.');
            return;
        }

        let ref = { satz: 0, monate: [] };
        if (!keineBerechnung) {
            ref = zuschlagsDurchschnittBerechnen(von);
            if (!ref.anzahl) {
                const weiter = confirm(`Für die Referenzmonate (${ref.monate.join(', ')}) sind keine Dienste in der App gespeichert. Der Zuschlagssatz kann nicht berechnet werden und würde mit 0 €/Std. gespeichert.\n\nTrotzdem speichern?`);
                if (!weiter) return;
            }
        }

        const dVon = new Date(von), dBis = new Date(bis);
        const tage = Math.round((dBis - dVon) / 86400000) + 1;
        const pad = (n) => n < 10 ? '0' + n : n;

        try {
            for (let i = 0; i < tage; i++) {
                const d = new Date(dVon.getTime() + i * 86400000);
                const tagStr = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
                await schichtSpeichern(keineBerechnung ? {
                    typ: krankAktuellTyp,
                    datumStr: tagStr
                } : {
                    typ: krankAktuellTyp,
                    datumStr: tagStr,
                    ausgefallenStunden: stundenProTag,
                    zuschlagSatz: ref.satz,
                    aufschlagEuro: stundenProTag * ref.satz,
                    referenzMonate: ref.monate
                }, true);
            }
            renderCalendar();
            krankFormularSchliessen();
            const zusatz = keineBerechnung ? '' : ` (Gesamt: ${euroText(stundenProTag * tage * ref.satz)})`;
            alert(`✅ ${tage} ${info.label}-Tag${tage === 1 ? '' : 'e'} gespeichert${zusatz}.`);
        } catch (e) {
            alert('❌ Speichern fehlgeschlagen: ' + fehlerText(e));
        }
    }

    function krankBearbeiten(datumStr) {
        const sch = gespeicherteSchichten[datumStr];
        krankFormularOeffnen(datumStr, sch && sch.typ);
    }

    async function krankLoeschen() {
        const datumStr = document.getElementById('krankVon').value;
        if (!gespeicherteSchichten[datumStr]) return;
        try {
            const { error } = await sb.from('planer_schichten').delete()
                .eq('user_id', aktuellerNutzer.id).eq('datum', datumStr);
            if (error) throw error;
            delete gespeicherteSchichten[datumStr];
            renderCalendar();
            widgetSyncPlanen();
            krankFormularSchliessen();
        } catch (e) {
            alert('❌ Löschen fehlgeschlagen: ' + fehlerText(e));
        }
    }

    function klickKalenderTag(datumStr) {
        document.getElementById('datum').value = datumStr;
        const sch = gespeicherteSchichten[datumStr];

        if (sch) {
            document.getElementById('start').value = sch.startStr || '';
            document.getElementById('ende').value = sch.endeStr || '';
            document.getElementById('endeTatsaechlich').value = sch.endeIst || '';
            if (sch.endeIst) endeTatsaechlichAnzeigen(); else endeTatsaechlichVerbergen();
            document.getElementById('dienstnummer').value = sch.dienstnummer || '';
            // Aeltere gespeicherte Mehrarbeit-Tage (vor Zusammenlegung mit der
            // Feiertags-/Sonderregelung ins selbe Dropdown) kannten "istMehrarbeitTag"
            // noch als eigenes Flag neben einem einfachen feiertagsArt-Wert.
            let feiertagsArtWert = sch.feiertagsArt || 'normal';
            if (sch.istMehrarbeitTag && !feiertagsArtWert.startsWith('mehrarbeit')) {
                feiertagsArtWert = feiertagsArtWert === 'feiertag' ? 'mehrarbeit_feiertag'
                    : feiertagsArtWert === 'sonderstichtag' ? 'mehrarbeit_sonderstichtag'
                    : 'mehrarbeit';
            }
            document.getElementById('feiertagsArt').value = feiertagsArtWert;
            document.getElementById('pausenregel').value = sch.pausenregel || 'B30';
            // Vor dem Rendern der Pausen setzen, damit aussetzenPruefung() bereits
            // die richtigen Fahrten-Daten fuer diesen Tag zur Verfuegung hat.
            detailsAnzeigen(sch.details || null);
            pausenEintraege = pausenZusammenfassen((sch.pausen || []).map((p, idx) => ({
                von: p.von || '', bis: p.bis || '',
                unbezahlt: Number(p.unbezahlt) || 0,
                // Aeltere Eintraege kannten nur "ausgefallen" (alles gearbeitet)
                gearbeitet: p.gearbeitet !== undefined
                    ? (Number(p.gearbeitet) || 0)
                    : (p.ausgefallen ? (Number(p.unbezahlt) || 0) : 0),
                // Aeltere gespeicherte Dienste kannten nur unbezahlte Pausen
                art: p.art === 'BEZPAU' ? 'BEZPAU' : 'UNBPAU',
                // Aeltere gespeicherte Dienste kennen davorZeit noch nicht direkt -
                // dann anhand des (noch unzusammengefassten) Index aus den
                // urspruenglichen Zettel-Daten nachschlagen.
                davorZeit: p.davorZeit || (sch.details && sch.details.pausen && sch.details.pausen[idx] && sch.details.pausen[idx].davor_zeit) || null
            })));
            pausenregelGeaendert();
            berechneSchicht();
        } else {
            document.getElementById('feiertagsArt').value = 'normal';
            mehrarbeitHinweisAktualisieren();
            document.getElementById('ausgabe').style.display = 'none';
            document.getElementById('erfassenAktionenBtn').style.display = 'none';
            endeTatsaechlichVerbergen();
            feiertagPruefen();
        }
        wechselSeite('erfassen');
    }

    function wechselMonat(delta) {
        aktuellesDatumAnzeige.setMonth(aktuellesDatumAnzeige.getMonth() + delta);
        renderCalendar();
    }

    // Formatierungsfunktion für Dezimal + Normale Zeit + Euro
    function formatVollstaendig(val, lohn) {
        if (!val || val === 0) return '0.00 Std. (0h 0m) → 0,00 €';

        const mins = Math.round(val * 60);
        const h = Math.floor(mins / 60);
        const m = mins % 60;

        const euro = (val * lohn).toFixed(2).replace('.', ',');
        const dezimal = val.toFixed(2);

        return `${dezimal} Std. (${h}h ${m}m) → ${euro} €`;
    }

    // Einstellungen laden, dann App starten
    einstellungenLaden();
    pausenregelGeaendert();
    starteApp();

    // PWA: Service Worker registrieren (ermöglicht Offline-Nutzung & Installation).
    // Browser prüfen von sich aus höchstens einmal pro 24 Stunden auf eine neue
    // service-worker.js - das reicht nicht, wenn mehrmals am Tag ein Update
    // erscheint. Deshalb selbst aktiv nach Updates suchen (bei jedem Start und
    // wann immer die App wieder in den Vordergrund kommt) und, sobald eine
    // neue Version übernimmt, die Seite automatisch neu laden.
    if ('serviceWorker' in navigator) {
        let neuladenLaeuft = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (neuladenLaeuft) return;
            neuladenLaeuft = true;
            window.location.reload();
        });

        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js').then((reg) => {
                reg.update().catch(() => {});
                document.addEventListener('visibilitychange', () => {
                    if (document.visibilityState === 'visible') reg.update().catch(() => {});
                });
            }).catch((err) => console.log('Service Worker Registrierung fehlgeschlagen:', err));
        });
    }
