# Planer

Dienste und Verdienst im Blick – eine schlanke Web-App (PWA) für BVG-Kollegen in Gelb und Schwarz.
Abgeleitet von der App [Dienstplan](https://github.com/topbas79/dienstplan), aber mit eigenen Daten und ohne Admin, Chat und Einladungen.

- **Adresse:** https://topbas79.github.io/planer
- **Technik:** reines HTML/CSS/JS ohne Build-Schritt, Daten in Supabase (eigene Tabellen mit Präfix `planer_`)
- **Bauplan und Entwürfe:** [PLANER.md](PLANER.md), Ordner `planer-entwurf/`
- **Datenbank einrichten:** `planer-setup.sql` im Supabase-SQL-Editor ausführen (nur additiv)

## Lokal ansehen

Die Dateien mit einem beliebigen statischen Webserver ausliefern, zum Beispiel `npx serve .`, und im Browser öffnen.
