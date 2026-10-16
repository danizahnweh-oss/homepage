# Mission Traumschiff

90 Minuten Wirtschaft & Recht, Klasse 10, ohne Nachhaltigkeitsvorwissen. Öffentlicher Einstieg: `/10/Kreuzfahrt/`; eigener Link im Wirtschaftsbereich der Startseite.

## Umsetzung

Statische HTML/CSS/JS-Dateien in `dist/10/Kreuzfahrt`. Kein Build, kein Backend, keine Anmeldung, keine externen Ressourcen. Drei aufeinanderfolgende Akten; Brücke, Diskussion, Quellen und Logbuch sind stets erreichbar. Der Browser speichert Antworten, Fortschritt und Notizen unter `dz-traumschiff-v1`. Bei deaktiviertem Speicher bleibt die Sitzung nutzbar und zeigt einen Hinweis. Ein Neustart löscht nur diesen Spielstand. Antworten im statischen Quelltext sind einsehbar; kein Prüfungssystem.

## Lehrkraftmaterial

`unterricht/Mission_Traumschiff_Lehrerleitfaden.pdf`: Seiten 1–6 für Lehrkräfte; Seiten 7–18 als Kopiervorlagen ohne Lösungen. Außerhalb von `dist`, daher nicht auf der öffentlichen Website. Reproduzierbar mit `scripts/create_guide.py` (ReportLab, Arial aus macOS). `unterricht/stationen.json` und `dist/10/Kreuzfahrt/data.js` enthalten dieselben redaktionellen Stationsdaten und sind gemeinsam zu pflegen.

Quellen: bereitgestelltes Joachim-Herz-Material, Umweltbundesamt (05.08.2025), IMO (01.05.2025). Recherche 15.10.2026. Historische Lohndaten sind ausdrücklich 2016; wirtschaftliche Kalkulation und Schiff sind fiktiv. Original-PDF nicht im Repository.

## Validierung

`tests/traumschiff.cjs` mit Playwright und optional axe-core. Umgebungsvariablen `PLAYWRIGHT_PATH`, `AXE_PATH`, `BASE_URL` und `QA_DIR` erlauben lokale Werkzeuge; Browser Chrome. Standard-URL: http://127.0.0.1:8765. Start: `python3 -m http.server 8765 --bind 127.0.0.1 --directory dist`.

Am 15.10.2026 bestanden: vollständiger Spielablauf, falsche und richtige Codes, Hilfen, Neuladen, Notizenspeicherung, Neustart, deaktivierter Speicher, Tastaturzugang, neun axe-Prüfungen ohne WCAG-A/AA-Verstöße, 45 Layoutprüfungen (320/390/768/1024/1440 px), bestehende Startseite/Fabrik/Wortreise erreichbar, keine JavaScript-Ausnahmen. Lehrkraft-PDF: zwölf Seiten gerendert und geprüft, Aufgaben/Lösungen und Rechenwege abgeglichen. Automatische Prüfungen ersetzen keinen Unterrichtstest mit der Lerngruppe.

Zusätzlicher WebKit-Test mit dem vorhandenen Browser: Akte öffnen, Speichern/Neuladen, Dialog und Tablet-Layout bestanden.

## Maritime Neugestaltung, 15.10.2026

Deckplan, Bullaugen, Kabinentüren, Messingkompass und Schiffsansichten ergänzen die bestehende Spielmechanik. Inhalt, Codes und gespeicherte Spielstände bleiben kompatibel. Vollständiger Chrome-Test erneut bestanden: neun axe-Prüfungen ohne Verstöße und 45 Layoutprüfungen. Zusätzlich WebKit: Deckplan, gesperrte Räume, Freischalten und Tablet-Layout bestanden. Desktop-, Handy- und Aufgabenansichten visuell geprüft.

Bild: `dist/10/Kreuzfahrt/assets/morgenwind.webp`, erzeugt mit dem eingebauten Imagegen-Werkzeug (Neugenerierung, stilisiertes Konzept), anschließend verlustbehaftet als WebP optimiert. Fiktive Illustration, kein technischer Schiffsplan.

Prompt: Create a production website game illustration, landscape 1536x1024. A richly detailed realistic architectural cutaway of a modern premium cruise ship at blue hour, viewed obliquely from the port side, bow pointing right, entire ship visible with margins. The near-side hull is selectively cut away like a museum diorama, revealing four believable rooms: deep lower aft engine room with large marine machinery pipes and steel walkways; lower middle crew quarters with modest bunks and lockers; middle aft ship operations office with desk and paper files; upper forward bridge with panoramic windows and navigation consoles. Several passenger decks, white hull, railings, lifeboats, small pool on the upper deck, warm amber interior lighting. Calm deep navy ocean and understated twilight sky. Premium investigative escape-game atmosphere like a highly realistic miniature architectural model. Physically plausible cruise ship, detailed natural materials and warm brass highlights, cinematic but crisp. No lettering, no text, no logos, no labels, no UI, no watermark. Fill the frame with the ship, keep background subdued. This is a fictional educational game, not an engineering diagram.

## Vertiefung mit Statistiken und Budget

Jede Akte enthält eine eigene Gegenprobe mit freier Zahleneingabe und zwei Rechenhilfen; sie ist zusätzlich zu den drei Antworten zum Öffnen nötig. Bestehende Freischaltungen bleiben erhalten. Drei neue Statistikdossiers liefern Lesetexte, Tabellen, eine Balkengrafik, Quellenkritik und eigene Notizfelder. U4: weltweites Passagieraufkommen 2023–2025 (CLIA, Branchenquelle); W4: fiktive Reisepreiskalkulation; S4: historische Löhne und Stunden, Stand 2016. Reale Daten und Modellannahmen bleiben getrennt.

Auf der Brücke kosten die sechs Maßnahmen unterschiedlich viel. Das Budget von 30.000 € ersetzt den bisherigen Pauschalbetrag. Eine Funkmeldung reduziert die Zahl der Gäste auf 950 bei unveränderten Grundkosten. Paketauswahl, Restbudget und Gewinne aktualisieren sich direkt; die freie Krisenentscheidung wird nicht benotet. Zahlen und Notizen erscheinen im druckbaren Logbuch.

Leitfaden auf 17 Seiten erweitert, einschließlich Lösungen und Papierfassung. Bei 90 Minuten Statistik arbeitsteilig/mündlich auswerten; für ausführliche schriftliche Bearbeitung aller Dossiers weitere Stunde einplanen.

Validiert: vollständiger Durchlauf inklusive falscher/fehlender Gegenproben, Kommaeingabe, Budgetüberschreitung, Krise, Neuladen, Neustart, deaktivierter Speicher; 9 axe-Scans ohne Verstöße und 45 Layoutprüfungen. WebKit prüft Gegenprobe, Speicherung, Budget und mobile Ansicht. Neue PDF-Seiten und Webansichten visuell geprüft.

## Kampagnenmotiv für den Einstieg

Die Werbung erscheint vor der Mission. Unter `/10/Kreuzfahrt/#werbung` ist sie separat präsentierbar. Notizen werden mit der Startseite geteilt, ohne doppelte Eingabefelder. Neue Grafik: `dist/10/Kreuzfahrt/assets/sonnendeck.webp`, eingebautes Imagegen, Neugenerierung; Original bleibt im Codex-Bildordner erhalten. Fiktives Angebot, keine Buchungsfunktion oder echte Nachhaltigkeitszertifizierung.

Vollständiger Spieltest erneut bestanden. Zusätzlich Werbeansicht bei 320/390/768/1024/1440 px geprüft, axe ohne Verstöße, Notizenspeicherung und Rückweg getestet. Desktop- und Handyansicht visuell geprüft.

Bildprompt: Use case: photorealistic travel campaign. Asset type: landscape background photograph for a fictional cruise advertisement in a classroom escape game. Create a spectacular premium travel advertising photograph, 1536x1024, shot from a cruise ship's luxurious open teak sun deck: a curved infinity pool with dazzling turquoise water in the lower foreground, elegant white loungers, a folded coral towel and tropical drink on a side table, beyond the white railings an impossibly inviting Mediterranean bay with tiny colorful cliffside houses and a lush island, a large elegant white cruise ship sailing in the mid-right distance. Sparkling sunlight, warm late-afternoon sun, bright blue sea, coral pink bougainvillea framing the upper right. Aspirational, glamorous, slightly too perfect commercial vacation fantasy, physically coherent premium resort photography. Keep left upper third mostly open blue sky/sea for web headline overlay. Entire composition crisp, panoramic feel, no people needed. No text, no lettering, no logos, no watermark, no infographic. This is the seductive advertising counterpart to a sustainability investigation.

## Zusammenhängende Handlung

Kapitänin Vera Holm stoppt die Veröffentlichung, nachdem technische Leitung, Reiseplanung und Crewvertretung die Werbung beanstandet haben. Ein unabhängiges Prüfungsteam prüft frei zugängliche Rohunterlagen; Codes öffnen Freigabevermerke. Nach jeder Akte erscheint eine figurenbezogene Überleitung. Die Rückgabe eines Veranstalterkontingents erklärt die 50 fehlenden Buchungen ohne unbelegten Kausalbezug zur Werbung. Empfehlung und Pressekonferenz münden in einen öffentlichen Prüfauftrag mit offenem Umsetzungsergebnis.

Storydaten in `unterricht/handlung.json`, Stationsszenen und Nachrichten in `unterricht/stationen.json`; beide werden in `data.js` gespiegelt. Lehrerleitfaden: 18 Seiten, Storymoderation auf Seite 5, Kopiervorlagen ab Seite 7. Neuer vollständiger Spieltest, neun axe-Scans und 45 Layoutprüfungen bestanden. Geänderte PDF-Seiten gerendert und visuell geprüft.
