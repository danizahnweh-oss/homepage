'use strict';
const FipsGuide = (() => {
 const guides = {
  nomen:[
   'Hier suchst du ein Nomen. Frage dich: Kann ich „der“, „die“ oder „das“ davorsetzen?',
   'Hier übst du Artikel. Sprich das Wort mit jedem Artikel und überlege, was richtig klingt.',
   'Hier geht es um Großschreibung. Ein Nomen beginnt mit einem großen Buchstaben.',
   'Hier suchst du den unbestimmten Artikel. Denke an „ein“ und „eine“.',
   'Hier geht es um Einzahl und Mehrzahl. Achte darauf, ob von einem oder mehreren die Rede ist.',
   'Hier ergänzt du den Artikel zu einem Gefühl. Auch Gefühle sind Nomen.'
  ],
  plural:[
   'Hier bildest du die Mehrzahl. Achte auf die Endung und auf einen möglichen Umlaut.',
   'Manche Nomen sehen in Einzahl und Mehrzahl gleich aus. Vergleiche die Wortformen.',
   'Hier suchst du die richtige Mehrzahl. Sprich die Möglichkeiten einmal laut aus.',
   'Hier wiederholst du den Begriff „Singular“. Denke an ein einzelnes Ding.',
   'Hier schreibst du die Mehrzahl selbst. Schau, welche Endung dazukommt.',
   'Hier verändert sich in der Mehrzahl ein Vokal. Achte auch auf die Endung.'
  ],
  verben:[
   'Hier suchst du das Tätigkeitswort. Frage: Was tut der Fuchs?',
   'Das Verb muss zur Person „du“ passen. Lies den Satz mit jeder Form.',
   'Hier passt du das Verb an „wir“ an. Denke an die passende Endung.',
   'Hier suchst du die Grundform. So steht das Verb im Wörterbuch.',
   'Hier ergänzt du eine Form von „sein“. Achte auf die Person „ich“.',
   'Hier passt du das Verb an „ihr“ an. Sprich den ganzen Satz laut.'
  ],
  adjektive:[
   'Hier suchst du ein Eigenschaftswort. Es beschreibt, wie etwas ist.',
   'Hier steigerst du ein Adjektiv. Manche Formen verändern sich stark.',
   'Hier vergleichst du zwei Dinge. Achte auf das Wort nach „höher“.',
   'Hier ordnest du die Vergleichsstufen. Beginne mit der Grundform.',
   'Hier vergleichst du Dinge, die gleich weich sind. Achte auf das Vergleichswort.',
   'Hier schreibst du eine Vergleichsstufe. Lies genau, welche Stufe gefragt ist.'
  ],
  pronomen:[
   'Hier ersetzt du ein Nomen durch ein Pronomen. Welches kleine Wort passt dazu?',
   'Hier suchst du ein Wort, das zeigt, wem etwas gehört.',
   'Hier ersetzt du mehrere Personen durch ein einziges Pronomen.',
   'Hier ersetzt du eine Gruppe von Kindern. Achte auf die Mehrzahl.',
   'Hier vermeidest du die Wiederholung eines Namens mit einem Pronomen.',
   'Hier unterscheidest du Personalpronomen von anderen Wörtern.'
  ],
  faelle:[
   'Hier bestimmst du den Fall. Frage zuerst: Wer oder was schläft?',
   'Hier passt eine Fallfrage. Überlege, wen oder wem geholfen wird.',
   'Hier bestimmst du den Fall von „den Hund“. Stelle die passende Frage.',
   'Hier zeigt „des“ eine Zugehörigkeit. Suche die Frage nach diesem Fall.',
   'Hier ergänzt du einen Artikel. Die Frage „Wem?“ kann dir helfen.',
   'Hier suchst du die Frage zum Dativ. Denke an die vier Fallfragen.'
  ],
  satzglieder:[
   'Hier suchst du das Subjekt. Frage: Wer oder was bellt?',
   'Hier suchst du das Prädikat. Es sagt, was geschieht.',
   'Hier fragst du nach einer Zeitangabe. Welche Frage passt dazu?',
   'Hier stellst du Satzglieder um. Der Satz muss danach noch sinnvoll klingen.',
   'Hier ordnest du eine Satzfrage dem passenden Satzglied zu.',
   'Hier bestimmst du ein Satzglied. Stelle die Frage vom Verb aus.'
  ],
  zeiten:[
   'Hier erkennst du eine Zeitform. Achte auf „habe“ und die Verbform dahinter.',
   'Hier suchst du die einfache Vergangenheitsform eines Verbs.',
   'Hier baust du das Perfekt. Welche Form von „haben“ oder „sein“ passt?',
   'Hier sprichst du über die Zukunft. Denke an „werden“ und die Grundform.',
   'Hier erkennst du die Vorvergangenheit. Achte auf „hatte“.',
   'Hier schreibst du ein Verb im Präteritum. Manche Verben ändern ihren Stamm.'
  ],
  praepositionen:[
   'Hier ergänzt du einen Artikel nach „mit“. Frage dich: Mit wem oder was?',
   'Hier beschreibst du einen Ort. Achte auf den Unterschied zwischen Wo und Wohin.',
   'Hier wird etwas bewegt. Frage: Wohin lege ich das Buch?',
   'Hier prüfst du Präposition und Artikel als zusammengehörige Wortgruppe.',
   'Hier suchst du ein Verhältniswort. Es kann zum Beispiel einen Ort angeben.',
   'Hier ergänzt du den Artikel nach „mit“. Stelle die Frage „Mit wem?“.'
  ],
  saetze:[
   'Hier setzt du ein Satzzeichen. Lies den Satz: Ist es eine Frage?',
   'Hier geht es um die Wortstellung in einer Frage.',
   'Hier prüfst du, ob ein Satz richtig gebaut ist.',
   'Hier beendest du einen Nebensatz. Achte darauf, wo das Verb steht.',
   'Hier setzt du das Satzzeichen für einen Ausruf oder Befehl.',
   'Hier erkennst du einen Aussagesatz. Er erzählt oder berichtet etwas.'
  ],
  gross:[
   'Hier prüfst du, welche Wörter großgeschrieben werden müssen.',
   'Hier wird aus einem Tätigkeitswort ein Nomen. Achte auf den Artikel davor.',
   'Hier suchst du die richtige Groß- und Kleinschreibung.',
   'Hier kann ein Eigenschaftswort wie ein Nomen gebraucht werden.',
   'Hier korrigierst du nur das Nomen. Beginne es mit einem Großbuchstaben.',
   'Hier vergleichst du Wortgruppen. Achte besonders auf die Nomen.'
  ],
  verbindungen:[
   'Hier suchst du ein Bindewort, das einen Grund einleitet.',
   'Hier verbindest du zwei Gedanken. Passt eher ein Gegensatz?',
   'Hier prüfst du die Schreibweise eines verbundenen Satzes.',
   'Hier ergänzt du ein kleines Wort, das sich auf „Buch“ bezieht.',
   'Hier nennst du einen Grund. Frage dich: Warum trinke ich?',
   'Hier prüfst du Bindewort, Komma und Wortstellung gemeinsam.'
  ],
  'lesen-schluessel':[
   'Hier suchst du den Fundort. Lies nach, wohin Herr Ali zeigt.',
   'Hier suchst du eine Information im ersten Absatz.',
   'Hier geht es um ein Erkennungszeichen. Suche es im letzten Absatz.',
   'Hier klärst du ein Wort aus dem Zusammenhang. Wie fühlt sich Nila am Ende?',
   'Hier ordnest du Ereignisse. Was passiert zuerst, danach und zuletzt?',
   'Hier suchst du einen Grund. Was möchte Nila künftig vermeiden?'
  ],
  'lesen-buecherbus':[
   'Hier suchst du eine Zeitangabe gleich am Anfang.',
   'Hier beschreibst du, was Samir im Bus entdeckt.',
   'Hier suchst du Samirs Gedanken. Warum ist er erst unsicher?',
   'Hier achtest du darauf, was das neue Buch für Samir leichter macht.',
   'Hier erklärst du einen Ausdruck. Was macht Samir mit dem Buch?',
   'Hier fasst du die ganze Geschichte in einer passenden Überschrift zusammen.'
  ],
  'lesen-regen':[
   'Hier suchst du die Erklärung für eine Veränderung der Pfütze.',
   'Hier findest du einen Einfluss auf das Verdunsten.',
   'Hier prüfst du Aussagen am Text. Welche lässt sich wirklich belegen?',
   'Hier klärst du ein Fachwort. Lies den Satz mit „versickern“ noch einmal.',
   'Hier ordnest du Schritte im Wasserkreislauf.',
   'Hier erklärst du das Wort „Kreislauf“ mit dem Weg des Wassers.'
  ],
  'lesen-projekttag':[
   'Hier suchst du den ersten Treffpunkt im Plan.',
   'Hier achtest du auf die Liste für die Gruppe Plakate.',
   'Hier brauchst du die Regel für Regenwetter.',
   'Hier vergleichst du den Plan bei gutem Wetter und bei Regen.',
   'Hier suchst du die Uhrzeit der gemeinsamen Pause.',
   'Hier fragst du nach dem Zweck: Was sollen die Kinder nach dem Lesen wissen?'
  ],
  'lesen-bruecke':[
   'Hier suchst du eine Zahl in den Regeln für die Brücke.',
   'Hier deutest du Esras Verhalten. Lies, was direkt davor passiert.',
   'Hier suchst du eine Veränderung in der Zusammenarbeit.',
   'Hier klärst du „stabiler“ aus dem Zusammenhang der Brücke.',
   'Hier musst du genau zählen und den letzten Versuch beachten.',
   'Hier fasst du Anfang, Problem und Lösung der Geschichte zusammen.'
  ],
  'lesen-nachricht':[
   'Hier suchst du den geänderten Termin auf dem Zettel.',
   'Hier liest du die Liste der Dinge, die mitgebracht werden sollen.',
   'Hier klärst du „ausnahmsweise“: Was ist dieses Mal anders?',
   'Hier unterscheidest du Gesagtes von Vermutetem. Was steht nicht sicher da?',
   'Hier deutest du Bens Gefühl anhand seiner Reaktion.',
   'Hier erklärst du, warum Bens Handlung am Ende hilfreich ist.'
  ]
 };
 const pageGuides={
  start:'Hallo, ich bin Fips! Wähle eine Lernstation oder einen Lesetext. Ich begleite dich Schritt für Schritt.',
  lesen:'Hier suchst du einen Lesetext aus. Lies erst in Ruhe; danach helfe ich dir bei jeder Frage.',
  spiel:'Hier mischst du Aufgaben oder wiederholst Kniffliges. Du kannst jederzeit eine Pause machen.',
  wissen:'Hier findest du Regeln und Beispiele. Suche ein Thema und lies nach, wenn du unsicher bist.',
  fortschritt:'Hier siehst du, was du schon geschafft hast. Jeder Versuch bringt dich weiter.',
  info:'Hier erfahren Erwachsene, wie sie Kinder beim Lernen mit Wortreise begleiten können.',
  speicher:'Hier erfährst du, was in deinem Browser gespeichert wird und wie du neu anfangen kannst.',
  result:'Deine Runde ist geschafft! Schau dir an, was du schon kannst, und übe Schwieriges später noch einmal.'
 };
 function escape(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
 function bubble(message,extraClass=''){
  return `<aside class="fips-guide ${extraClass}" aria-label="Fips erklärt"><img class="fips-face" src="fips.svg" alt="" width="80" height="80"><div class="fips-speech"><strong>Fips erklärt</strong><p>${escape(message)}</p></div></aside>`;
 }
 function page(page,lesson){
  if(page==='lernen'&&lesson){return bubble(lesson.kind==='reading'?`In „${lesson.title}“ liest du zuerst den Text. Danach suchst du zu jeder Frage eine passende Textstelle.`:`Hier geht es um ${lesson.title}. Lies dir die Regel und das Beispiel an. Danach lösen wir sechs kleine Aufgaben.`);}
  return bubble(pageGuides[page]||pageGuides.start);
 }
 function question(item){const list=guides[item.lesson.id];return bubble(list?.[Number(item.id.slice(item.lesson.id.length+1))]||'Lies die Aufgabe genau. Du kannst die Regel oder den Lesetext jederzeit noch einmal ansehen.','fips-quiz');}
 function writing(){return bubble('Hier schreibst du deine eigenen Gedanken zum Text. Zwei oder drei vollständige Sätze sind ein guter Anfang.','fips-writing');}
 return {bubble,page,question,writing};
})();
