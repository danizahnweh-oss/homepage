# daniel-zahnweh.de

Vollständige Migration der Hauptseite und der vier über ChatGPT Sites verbundenen Unterangebote.

## Inhalte

- `dist/`: Hauptseite, `/5/Deutsch/wortreise/`, `/Q12/Fabrik/`, `/10/Kreuzfahrt/` inklusive Bilder und Audio.
- `sites/wirtschaftsordnung/`: kompletter Sites-Quellstand des Lernzirkels.
- `sites/jahrgangsstufentest7/` und `sites/jahrgangsstufentest10/`: komplette Quellstände inklusive Prüfungs-PDFs und Hördateien.
- `sites/smv/`: kompletter SMV-Quellstand inklusive Supabase-Funktionen und SQL; zusätzliche Pages-Build-Konfiguration.
- `unterricht/`: vorhandene Unterrichtsunterlagen aus dem Hauptprojekt.

## Build

Node 22.13 oder neuer: `npm ci` und `npm run build`. Das veröffentlichbare Ergebnis liegt in `_site/`. Die Unterangebote stehen dort unter `/wirtschaftsordnung/`, `/jahrgangsstufentest7/`, `/jahrgangsstufentest10/` und `/smv/`. Der Build passt die Verweise auf der Hauptseite an. Die ursprünglichen Quellstände und bestehenden Websites bleiben erhalten. Vokabelangebote liegen bereits auf GitHub und bleiben verlinkt.

Die SMV-Oberfläche spricht weiterhin direkt mit der vorhandenen Supabase-Datenbank und deren Edge-Funktionen. Es werden keine Buchungen oder Konten kopiert, gelöscht oder zurückgesetzt. `config.json` enthält ausschließlich die schon öffentlich ausgelieferten Supabase-Verbindungsdaten mit Publishable-/Anon-Schlüssel. Niemals Service-Role-Schlüssel eintragen. Die Datenschutzhinweise stehen unter `/smv/datenschutz/`.

## Noch nötige Freischaltung

GitHub Pages benötigt für private Repositories einen unterstützten Tarif; alternativ ein ausdrücklich freigegebenes öffentliches Repository. Die Domain zeigt derzeit noch auf ChatGPT Sites. DNS erst nach erfolgreicher Pages-Veröffentlichung umstellen. Bestehende Subdomain-Adressen brauchen anschließend eigene Pages-Weiterleitungen oder eine Weiterleitung beim Domainanbieter. Für SMV-Anmeldelinks muss die neue URL in Supabase als Redirect-URL zugelassen sein.

Stand: 16. Oktober 2026. Originale aus Sites gesichert; Produktionsumschaltung noch nicht erfolgt.
