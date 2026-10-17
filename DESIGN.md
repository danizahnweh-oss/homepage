# Visual system

Vollständig neu gestalteter Schuleinstieg, 11. Oktober 2026. Helle neutrale Fläche, bestehender Chartreuse-Akzent und Avenir-/Segoe-Systemschrift. Typografie und echte Zielangebote bestimmen die Hierarchie.

## Aufbau
Persönliche, kompakte Kopfzeile, kurzer Einstieg und Coverflow-Fachauswahl. Die Karten und die direkten Fachlinks öffnen die eigenen Seiten `/wirtschaft-recht/`, `/deutsch/`, `/englisch/` und `/schulleben/`. Die Startseite enthält keine nachfolgenden Fachabschnitte mehr. Jede Fachseite hat einen klaren Seitentitel, passende Angebote, eine Bereichsnavigation mit markiertem aktuellem Fach und einen Rückweg zur Startseite. Alle vorhandenen Angebote bleiben in ihrem Bereich erreichbar.

## Bedienung
Die Lernangebote bleiben normale HTML-Links, ohne externe Schriftdateien oder Analysewerkzeuge. Nur die auf Wunsch ergänzte Coverflow-Auswahl nutzt JavaScript. Große Touchziele, sichtbarer Tastaturfokus, Umbruch statt seitlichem Überlauf. Auf iPad-Größen bleiben direkte Zugänge und Inhalte lesbar. Handyansicht stapelt die Abschnitte. Kurze Hover-Rückmeldung und manuell gesteuerte Kartenbewegung; reduced-motion wird berücksichtigt.

Design-Master-Überarbeitung, 17. Oktober 2026: Fachwahl mit Klassenstufen direkt im Einstieg, kürzere Texte, einheitliche Abstände und große getrennte Englisch-Aktionen auf dem Handy. Sprungziele sind fokussierbar; der Fokus im Fabrikmotiv liegt innerhalb der Bildfläche, damit er nicht abgeschnitten wird. Bestehende Farben, Schriftfamilie und Zieladressen bleiben erhalten.

Die Fachauswahl nutzt auf ausdrücklichen Wunsch eine Coverflow-Komponente nach der bereitgestellten React-Vorlage. Vier Bildkarten mit Fach und Klassenstufe, Wischen, Pfeiltasten, Home/End und beschriftete 48px-Pfeiltasten. Kein automatisches Weiterblättern; Tastaturaktionen und reduzierte Bewegung wechseln sofort. Vier direkte Fachlinks bleiben jederzeit zugänglich, auch ohne JavaScript. Die Bilder werden lokal ausgeliefert; fremde Webseiten werden beim Anzeigen nicht aufgerufen. Die separat gebaute React-/TypeScript-Insel liegt unter `homepage-ui/src/components/ui`, mit Tailwind und shadcn-kompatiblen Aliasen. Fertige Dateien unter `dist/subject-carousel` werden versioniert; nach Quelländerungen `npm ci --prefix homepage-ui` und `npm run build --prefix homepage-ui` ausführen.

## Bestehende Lernangebote
Alle vorhandenen Zieladressen bleiben erhalten. Die Fabrikdateien unter dist/Q12/Fabrik werden durch Änderungen an der Startseite nicht verändert. Das Portal verlinkt die reguläre Spielversion.

Mission Traumschiff (15.10.2026): maritime Spielwelt in Marineblau und Messing, inspiriert von der Atmosphäre der Fabrik. Realistische Schiffsansicht mit anklickbarem Deckplan, Kabinentüren mit Bullaugen, beleuchtete Raumkopfzeilen, Nachhaltigkeitskompass und helle Bordakten. Georgia für Überschriften, Systemschrift für Arbeitsmaterial. Lineare Mission mit ständig erreichbarer Diskussion und Quellen; mobile Anordnung und separate Druckgestaltung.

Die Einstiegswerbung steht vor der Schiffsmission: sonniges Pooldeck, Türkis/Koralle, große Georgia-Schlagzeile, runder Preisaufkleber, selbst formuliertes Wohlfühlversprechen und Reiseticket. Eigene Präsentationsansicht unter #werbung ohne Routenspalte. Fiktion ist sichtbar gekennzeichnet; Ersteindruck wird wie bisher lokal gespeichert.


Eigenständige Fachseiten, 17. Oktober 2026: normale, direkt aufrufbare HTML-Seiten. Relative Bild- und CSS-Pfade wurden für Unterseiten angepasst. Die Karten öffnen Seiten statt Scrollziele; alte Startseitenlinks mit #wirtschaft, #deutsch, #englisch oder #schulleben werden bei geladenem JavaScript auf die jeweilige neue Seite weitergeleitet. Die React-Komponente wird nur auf der Startseite geladen.
