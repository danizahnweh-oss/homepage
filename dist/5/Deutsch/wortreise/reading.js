'use strict';
const readings = [
{
 id:'lesen-schluessel',title:'Der Schlüssel im Blumentopf',icon:'🔑',level:'Leichter Einstieg',genre:'Geschichte',intro:'Eine kleine Suche mit einer überraschenden Entdeckung.',
 tip:'Suche die Stelle, an der der Schlüssel zum ersten Mal auftaucht. Lies auch den Satz davor und danach.',
 paragraphs:[
 'Nach der Schule steht Nila vor der Haustür. Sie greift in ihre Jackentasche. Ihr Schlüssel ist weg! Nila schaut in den Rucksack. Zwischen den Heften findet sie nur einen Apfel. Sie atmet tief durch.',
 'Da sieht sie ihren Nachbarn Herrn Ali im Garten. „Suchst du etwas?“, fragt er. Nila nickt. Herr Ali zeigt auf den blauen Blumentopf neben der Tür. Dort liegt ein Schlüssel mit einem gelben Band.',
 '„Den habe ich heute Morgen auf dem Weg gefunden“, erklärt er. Nila erkennt das Band sofort. Ihr Bruder hat es für sie geknüpft. „Danke!“, ruft sie erleichtert. Bevor sie die Tür öffnet, steckt sie den Schlüssel in ein kleines Fach mit Reißverschluss. Dort soll er von nun an bleiben.'
 ],
 vocab:[['erleichtert','froh, weil eine Sorge verschwunden ist'],['geknüpft','aus Fäden mit Knoten hergestellt'],['von nun an','ab jetzt']],
 writing:'Was würdest du Nila raten, damit sie ihren Schlüssel wiederfindet? Schreibe zwei Sätze mit einem Grund.',
 qs:[
 ['Wo liegt Nilas Schlüssel?',['Unter einem Heft','Im blauen Blumentopf','In ihrer Jackentasche'],1,'In Absatz 2 zeigt Herr Ali auf den blauen Blumentopf. Dort liegt der Schlüssel.'],
 ['Was findet Nila zwischen ihren Heften?','Apfel','In Absatz 1 steht: Zwischen den Heften findet sie nur einen Apfel.'],
 ['Woran erkennt Nila ihren Schlüssel?',['Am gelben Band','Am Namen auf dem Schlüssel','An einem roten Anhänger'],0,'In Absatz 3 erkennt Nila das gelbe Band, das ihr Bruder geknüpft hat.'],
 ['Was bedeutet „erleichtert“ in dieser Geschichte?',['Nila trägt einen leichten Rucksack.','Nila möchte schlafen.','Nila ist froh, weil ihre Sorge vorbei ist.'],2,'Der Schlüssel ist wieder da. Deshalb ist Nila erleichtert: Sie muss sich keine Sorgen mehr darum machen.'],
 ['Welche Reihenfolge stimmt?',['Nila sucht → Herr Ali zeigt den Topf → Nila verstaut den Schlüssel','Nila verstaut den Schlüssel → Nila sucht → Herr Ali zeigt den Topf','Herr Ali zeigt den Topf → Nila verstaut den Schlüssel → Nila sucht'],0,'Erst sucht Nila. Dann zeigt der Nachbar den Fundort. Zum Schluss legt sie den Schlüssel in ein sicheres Fach.'],
 ['Warum steckt Nila den Schlüssel in ein Fach mit Reißverschluss?',['Sie möchte ihn vor ihrem Bruder verstecken.','Sie möchte ihn sicher aufbewahren.','Sie möchte ihn verschenken.'],1,'Das sichere Fach ist ihre Lösung für das Problem. Das kannst du aus dem letzten Absatz schließen.']
 ]
},
{
 id:'lesen-buecherbus',title:'Ein Bus voller Geschichten',icon:'🚌',level:'Leichter Einstieg',genre:'Geschichte',intro:'Samir entdeckt einen ungewöhnlichen Ort zum Lesen.',
 tip:'Achte auf Samirs Gedanken am Anfang und am Ende. Was verändert sich?',
 paragraphs:[
 'Jeden Mittwoch hält ein großer Bus vor Samirs Schule. Heute steigt Samir zum ersten Mal ein. Statt Sitzreihen sieht er Regale voller Bücher. Eine Frau begrüßt ihn: „Willkommen im Bücherbus!“',
 'Samir möchte am liebsten gleich wieder gehen. In seinem letzten Buch gab es viele schwierige Wörter. Die Frau fragt, wofür er sich interessiert. „Für das Weltall“, antwortet er leise. Sie zeigt ihm ein Buch mit kurzen Texten und großen Bildern von Planeten.',
 'Samir setzt sich ans Fenster. Nach ein paar Seiten schaut er auf die Uhr. Die Pause ist fast vorbei! Er leiht das Buch aus. Auf dem Rückweg erzählt er seiner Freundin Jule von den Bildern. „Nächsten Mittwoch komme ich wieder“, sagt er. „Vielleicht finde ich dann ein Buch über Raketen.“'
 ],
 vocab:[['ausleihen','etwas für eine bestimmte Zeit mitnehmen und später zurückgeben'],['Weltall','der Raum, in dem sich Sterne und Planeten befinden'],['Regal','ein Möbelstück mit Fächern für Bücher oder andere Dinge']],
 writing:'Welches Buch würdest du im Bücherbus suchen? Erkläre in zwei oder drei Sätzen, was dich daran interessiert.',
 qs:[
 ['An welchem Wochentag kommt der Bücherbus?','Mittwoch','Gleich der erste Satz nennt den Mittwoch.'],
 ['Was sieht Samir im Bus?',['Regale voller Bücher','Nur leere Sitzreihen','Einen Laden mit Spielzeug'],0,'In Absatz 1 entdeckt Samir statt Sitzreihen Bücherregale.'],
 ['Warum möchte Samir zuerst wieder gehen?',['Er darf kein Buch ausleihen.','Sein letztes Buch hatte viele schwierige Wörter.','Der Bus fährt sofort los.'],1,'Absatz 2 nennt seine vorherige Erfahrung: Viele Wörter im letzten Buch waren schwierig.'],
 ['Was hilft Samir beim neuen Buch?',['Es hat besonders viele Seiten.','Es enthält keine Bilder.','Es passt zu seinem Interesse und hat kurze Texte.'],2,'Die Frau wählt ein Weltall-Buch mit kurzen Texten und großen Bildern. Thema und Gestaltung passen zu Samir.'],
 ['Was bedeutet „Er leiht das Buch aus“?',['Er nimmt es für eine Zeit mit und gibt es später zurück.','Er kauft es und behält es für immer.','Er schreibt es selbst.'],0,'Ausleihen bedeutet: etwas vorübergehend mitnehmen und später zurückgeben.'],
 ['Welche Überschrift passt ebenfalls?',['Ein Bus ohne Bücher','Samir findet ein passendes Buch','Jule verpasst den Unterricht'],1,'Im Mittelpunkt steht, wie Samir ein Buch findet, das ihn interessiert und zum Lesen einlädt.']
 ]
},
{
 id:'lesen-regen',title:'Die Reise eines Wassertropfens',icon:'💧',level:'Weiter entdecken',genre:'Sachtext',intro:'Lies, wie Wasser zwischen Erde und Himmel unterwegs ist.',
 tip:'Die Wörter verdunsten, abkühlen und sammeln zeigen wichtige Schritte. Suche sie im Text.',
 paragraphs:[
 'Nach einem Regenschauer liegt auf dem Schulhof eine Pfütze. Am Nachmittag ist sie kleiner geworden, obwohl niemand das Wasser weggewischt hat. Ein Teil des Wassers ist verdunstet: Flüssiges Wasser wird zu unsichtbarem Wasserdampf. Wärme kann diesen Vorgang beschleunigen.',
 'Wasserdampf befindet sich auch in der Luft. Kühlt feuchte Luft ausreichend ab, können sich winzige Wassertropfen bilden. Viele solcher Tropfen zusammen können eine Wolke bilden. Eine Wolke besteht also nicht einfach aus unsichtbarem Wasserdampf. Man sieht ihre kleinen Wassertröpfchen; manche Wolken enthalten auch Eiskristalle.',
 'Werden Tropfen in der Wolke groß und schwer genug, fallen sie als Regen zur Erde. Das Wasser sammelt sich zum Beispiel in Bächen, Seen oder neuen Pfützen. Ein Teil versickert im Boden. Auch Pflanzen nehmen Wasser auf und geben Wasser an die Luft ab. So gelangt Wasser auf verschiedenen Wegen wieder in die Luft. Diese Reise nennen wir Wasserkreislauf.'
 ],
 vocab:[['verdunsten','vom flüssigen Zustand zu Wasserdampf werden'],['versickern','langsam in den Boden eindringen'],['Kreislauf','ein Ablauf, der sich immer wiederholt']],
 writing:'Erkläre einem jüngeren Kind den Wasserkreislauf in drei Sätzen. Verwende zuerst, dann und schließlich.',
 qs:[
 ['Warum wird die Pfütze im Text kleiner?',['Ein Teil des Wassers verdunstet.','Die Schule wischt sie weg.','Das Wasser verschwindet für immer.'],0,'Absatz 1 erklärt: Flüssiges Wasser wird zu unsichtbarem Wasserdampf.'],
 ['Was kann das Verdunsten beschleunigen?','Wärme','Im letzten Satz von Absatz 1 steht: Wärme kann diesen Vorgang beschleunigen.'],
 ['Welche Aussage stimmt laut Text?',['Wolken bestehen nur aus unsichtbarem Wasserdampf.','Wolken können kleine Wassertropfen und Eiskristalle enthalten.','Jede Wolke besteht nur aus Regenbogenfarben.'],1,'Absatz 2 unterscheidet unsichtbaren Wasserdampf von sichtbaren Wassertröpfchen und erwähnt Eiskristalle.'],
 ['Was bedeutet „versickern“?',['In den Himmel fliegen','Im Boden gefrieren','Langsam in den Boden eindringen'],2,'In Absatz 3 versickert Wasser im Boden. Es dringt langsam hinein.'],
 ['Welche Reihenfolge beschreibt einen möglichen Weg des Wassers?',['Regen → Wolke → Verdunsten aus der Pfütze','Verdunsten → Wolkenbildung → Regen','Wolkenbildung → Pfütze → Regen'],1,'Wasser verdunstet. Beim Abkühlen können Tropfen und Wolken entstehen. Später kann Regen fallen.'],
 ['Warum heißt die Reise „Wasserkreislauf“?',['Weil jedes Wasserteilchen einen Kreis zeichnet.','Weil Wasser nur einmal auf die Erde fällt.','Weil Wasser auf verschiedenen Wegen immer wieder zwischen Erde und Luft unterwegs ist.'],2,'Der letzte Absatz beschreibt, wie Wasser erneut in die Luft gelangt. Der Ablauf wiederholt sich.']
 ]
},
{
 id:'lesen-projekttag',title:'Ein Plan für den Projekttag',icon:'🗓️',level:'Weiter entdecken',genre:'Alltagstext',intro:'Finde wichtige Informationen in einer Schulmitteilung.',
 tip:'Lies die Frage zuerst. Suche dann gezielt nach Uhrzeit, Ort oder Material. Nicht jede Information ist für jede Frage wichtig.',
 paragraphs:[
 'Mitteilung an die Klasse 5b: Am Freitag findet unser Projekttag „Unsere Schule wird grüner“ statt. Wir treffen uns um 8:15 Uhr im Klassenraum. Dort besprechen wir die Aufgaben. Um 8:30 Uhr beginnen die Gruppen mit ihrer Arbeit.',
 'Die Gruppe Garten pflanzt im Innenhof Blumen. Bringt dafür Gartenhandschuhe mit. Die Gruppe Plakate gestaltet im Kunstraum Hinweisschilder zum Wassersparen. Sie braucht Buntstifte. Die Gruppe Reporter führt in der Bibliothek Interviews und schreibt kurze Berichte. Bringt einen Schreibblock und einen Stift mit.',
 'Um 10:00 Uhr machen alle Gruppen auf dem Schulhof eine Pause. Denkt an eine Trinkflasche und ein Frühstück. Um 10:30 Uhr arbeiten die Gruppen weiter. Um 11:30 Uhr stellen wir die Ergebnisse in der Aula vor. Der Projekttag endet um 12:15 Uhr.',
 'Wichtig bei Regen: Nur die Gruppe Garten wechselt ihren Arbeitsort. Sie pflanzt dann im Werkraum Kräuter in Töpfe. Die Pause findet für alle in den Klassenräumen statt. Die Abschlussvorstellung bleibt in der Aula. Wenn ihr nicht sicher seid, zu welcher Gruppe ihr gehört, fragt am Donnerstag eure Klassenleitung.'
 ],
 vocab:[['Aula','ein großer Raum in der Schule für gemeinsame Veranstaltungen'],['Interview','ein Gespräch, bei dem jemand gezielt Fragen stellt'],['Abschlussvorstellung','ein Treffen am Ende, bei dem Ergebnisse gezeigt werden']],
 writing:'Schreibe für die Gruppe Reporter eine kurze Packliste und notiere, wo sie bei Regen arbeitet. Vergleiche danach mit Absatz 2 und 4.',
 qs:[
 ['Wo trifft sich die Klasse zuerst?',['Im Klassenraum','In der Aula','Im Innenhof'],0,'Absatz 1 nennt den Treffpunkt um 8:15 Uhr: den Klassenraum.'],
 ['Was soll die Gruppe Plakate mitbringen?','Buntstifte','In Absatz 2 steht, dass die Gruppe Plakate Buntstifte braucht.'],
 ['Wo arbeitet die Gruppe Garten bei Regen?',['In der Bibliothek','Im Werkraum','Im Innenhof'],1,'Absatz 4 nennt für die Gruppe Garten den Werkraum als Ersatzort.'],
 ['Welche Aussage stimmt bei Regen?',['Alle Gruppen arbeiten im Werkraum.','Die Abschlussvorstellung fällt aus.','Die Gruppe Reporter arbeitet weiterhin in der Bibliothek.'],2,'Laut Absatz 4 wechselt nur die Gruppe Garten den Arbeitsort. Die Reporter bleiben deshalb in der Bibliothek.'],
 ['Wann beginnt die gemeinsame Pause?',['Um 10:00 Uhr','Um 10:30 Uhr','Um 11:30 Uhr'],0,'Absatz 3 beginnt mit der Pause um 10:00 Uhr. Um 10:30 Uhr geht die Arbeit weiter.'],
 ['Was ist der wichtigste Zweck der Mitteilung?',['Eine erfundene Abenteuergeschichte erzählen','Über Ablauf und Vorbereitung des Projekttags informieren','Für einen Urlaub werben'],1,'Die Mitteilung nennt Zeiten, Orte, Materialien und den Regenplan. Sie hilft bei der Vorbereitung.']
 ]
},
{
 id:'lesen-bruecke',title:'Die Brücke aus Papier',icon:'🌉',level:'Genau hinschauen',genre:'Geschichte',intro:'Eine Teamaufgabe, bei der Zuhören den Unterschied macht.',
 tip:'Nicht jedes Gefühl wird direkt genannt. Achte auch darauf, was die Figuren tun und sagen.',
 paragraphs:[
 '„Baut eine Brücke aus zwei Blättern Papier“, sagt Herr Weber. „Sie soll zwischen zwei Bücherstapeln liegen und möglichst viele Münzen tragen.“ Mila und Tom legen sofort los. Sie legen die beiden Blätter flach übereinander. Schon bei der zweiten Münze knickt ihre Brücke ein.',
 '„Wir brauchen mehr Papier“, sagt Tom. Mila schüttelt den Kopf. Mehr als zwei Blätter sind nicht erlaubt. Neben ihnen faltet Esra ein Blatt hin und her. Tom winkt ab: „Für einen Fächer haben wir keine Zeit.“ Esra legt das Blatt auf den Tisch und sagt nichts mehr. Mila bemerkt, dass Esra den Blick senkt.',
 'Mila schiebt die Münzen beiseite. „Warte, Tom. Esra, was wolltest du ausprobieren?“ Esra erklärt, dass die Falten das Papier stabiler machen könnten. Mila kennt solche Falten von einer Verpackung. Gemeinsam falten die drei beide Blätter und legen sie zwischen die Bücherstapel.',
 'Eine Münze bleibt liegen, dann eine zweite und eine dritte. Bei der achten Münze biegen sich die Blätter deutlich durch. Die Kinder beenden den Versuch und notieren: sieben Münzen sicher getragen. Tom schaut zu Esra. „Gut, dass du deine Idee noch erklärt hast.“ Esra lächelt. Auf ihrem Ergebniszettel steht nicht nur die Zahl sieben, sondern auch: Erst zuhören, dann ausprobieren.'
 ],
 vocab:[['stabil','so fest, dass etwas nicht leicht umkippt oder nachgibt'],['abwinken','mit einer Handbewegung oder Worten etwas ablehnen'],['notieren','etwas kurz aufschreiben']],
 writing:'War Milas Verhalten hilfreich? Begründe deine Meinung in drei Sätzen und nenne eine Handlung aus dem Text als Beleg.',
 qs:[
 ['Wie viele Blätter dürfen die Kinder für ihre Brücke verwenden?',['Zwei','Drei','Sieben'],0,'Herr Weber gibt in Absatz 1 zwei Blätter vor. Mila erinnert in Absatz 2 noch einmal an diese Regel.'],
 ['Warum sagt Esra zunächst nichts mehr?',['Sie hat keine Idee.','Tom lehnt ihre Idee ab, bevor sie sie erklärt hat.','Der Unterricht ist zu Ende.'],1,'Tom winkt ab und spricht von einem Fächer. Danach legt Esra ihr Blatt hin und schweigt. Daraus lässt sich ihre Reaktion erklären.'],
 ['Wodurch verändert Mila die Zusammenarbeit?',['Sie nimmt sich heimlich mehr Papier.','Sie beendet die Gruppenarbeit.','Sie bittet Esra, ihre Idee zu erklären.'],2,'In Absatz 3 hält Mila kurz inne und fragt Esra nach ihrem Vorschlag. So bekommt die Idee eine Chance.'],
 ['Was bedeutet „stabiler“ hier?',['Die Brücke kann eher Belastung aushalten.','Die Brücke ist bunter.','Die Brücke wird unsichtbar.'],0,'Esra vermutet, dass gefaltetes Papier weniger leicht nachgibt und dadurch mehr Münzen tragen kann.'],
 ['Warum schreiben die Kinder sieben und nicht acht auf?',['Sie haben nur sieben Münzen.','Bei der achten Münze biegen sich die Blätter deutlich durch.','Herr Weber verbietet die Zahl acht.'],1,'Im letzten Absatz steht, dass sieben Münzen sicher getragen wurden. Bei der achten stoppen die Kinder den Versuch.'],
 ['Welche Zusammenfassung passt am besten?',['Drei Kinder kaufen eine fertige Brücke.','Tom baut allein eine Brücke und gewinnt einen Wettbewerb.','Nach einem Fehlschlag hört die Gruppe Esra zu und verbessert gemeinsam ihre Papierbrücke.'],2,'Diese Zusammenfassung enthält das Problem, die entscheidende Veränderung und das Ergebnis. Ein Wettbewerb wird nicht erwähnt.']
 ]
},
{
 id:'lesen-nachricht',title:'Die Nachricht am schwarzen Brett',icon:'📌',level:'Genau hinschauen',genre:'Geschichte',intro:'Prüfe, ob eine Behauptung wirklich im Text steht.',
 tip:'Unterscheide: Was steht wirklich da? Was vermutet eine Figur? Suche einen Satz als Beleg.',
 paragraphs:[
 'Vor dem Unterricht bleibt Ben am schwarzen Brett stehen. Auf einem gelben Zettel liest er: „Die Theater-AG probt diese Woche nicht am Dienstag, sondern am Donnerstag um 14 Uhr. Treffpunkt ist ausnahmsweise die Bibliothek. Bitte bringt eure Texthefte mit.“ Ben läuft zu seinen Freunden. „Die Theateraufführung fällt aus!“, ruft er.',
 'Lea schaut überrascht. Sie spielt in der Theater-AG und freut sich seit Wochen auf die Aufführung. „Wo steht das?“, fragt sie. Ben zeigt auf den Zettel. Gemeinsam gehen sie zurück. Lea liest die Nachricht langsam und zeigt auf das Wort „probt“. „Hier steht nur, dass sich unsere Probe verschiebt“, sagt sie. „Über die Aufführung steht hier gar nichts.“',
 'Ben liest noch einmal. Jetzt bemerkt er auch, dass die Bibliothek nur für diesen einen Termin als Treffpunkt genannt wird. Er hat die Nachricht im Vorbeilaufen gelesen und mehrere Dinge ergänzt, die gar nicht auf dem Zettel stehen. Seine Ohren werden warm.',
 'In der Pause trifft Ben die Freunde wieder. „Ich habe vorhin etwas falsch verstanden“, sagt er. „Die Probe ist am Donnerstag. Ob sich an der Aufführung etwas ändert, wissen wir durch diesen Zettel nicht.“ Lea nickt. „Wenn wir das wissen wollen, fragen wir die AG-Leitung.“ Ben nimmt sich vor, beim nächsten Mal erst genau zu lesen und dann eine Nachricht weiterzugeben.'
 ],
 vocab:[['ausnahmsweise','dieses Mal anders als sonst'],['Probe','ein Treffen zum Üben einer Aufführung'],['Behauptung','etwas, das jemand als richtig darstellt und das man prüfen kann']],
 writing:'Formuliere eine sachliche Nachricht an ein Kind aus der Theater-AG. Nenne Tag, Uhrzeit, Treffpunkt und das benötigte Material. Erfinde nichts dazu.',
 qs:[
 ['An welchem Tag findet die Probe in dieser Woche statt?','Donnerstag','Auf dem gelben Zettel steht: nicht am Dienstag, sondern am Donnerstag.'],
 ['Was sollen die Kinder mitbringen?',['Sportkleidung','Ihre Texthefte','Eine Eintrittskarte'],1,'Die letzte Bitte auf dem Zettel lautet: Bitte bringt eure Texthefte mit.'],
 ['Was bedeutet „ausnahmsweise“ auf dem Zettel?',['Die AG trifft sich ab jetzt immer in der Bibliothek.','Die AG trifft sich nie in der Bibliothek.','Für diesen Termin ist der Treffpunkt anders als sonst.'],2,'Ausnahmsweise beschreibt eine Ausnahme. Absatz 3 verdeutlicht, dass es um diesen einen Termin geht.'],
 ['Welche Information lässt sich aus dem Zettel NICHT sicher entnehmen?',['Ob sich der Termin der Aufführung ändert','Wann die nächste Probe stattfindet','Wo der Treffpunkt für diese Probe ist'],0,'Der Zettel betrifft die Probe. Über den Aufführungstermin sagt er nichts.'],
 ['Warum werden Bens Ohren vermutlich warm?',['In der Bibliothek brennt ein Feuer.','Ihm ist sein vorschneller Fehler unangenehm.','Er hat gerade Sport gemacht.'],1,'Ben merkt, dass er eine falsche Nachricht weitergegeben hat. Die warmen Ohren deuten im Zusammenhang darauf hin, dass ihm das peinlich ist.'],
 ['Was ist an Bens Verhalten am Ende hilfreich?',['Er tut so, als habe er nichts gesagt.','Er behauptet jetzt, die Aufführung finde ganz sicher statt.','Er berichtigt seinen Fehler und unterscheidet Wissen von Vermutung.'],2,'Ben sagt, was der Zettel tatsächlich mitteilt, und lässt offen, was daraus nicht hervorgeht.']
 ]
}
];
for (const reading of readings) {
 reading.kind='reading';
 reading.group='Lesen & Verstehen';
 lessons.push(reading);
}
