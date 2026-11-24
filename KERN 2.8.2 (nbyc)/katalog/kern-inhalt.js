/* ERZEUGT von pruefung/kern-katalog-bauen.py — nicht von Hand ändern.
   KERN-Bausteine 2.8.2 für den Katalog: Steckbriefe und Original-Beispiele
   aus _ Resources/kern, Pflichten aus der Auswertung (Teil 3). */
var KERN_BAUSTEINE = [
 {
  "id": "kern-text-heading",
  "name": "Text Heading",
  "gruppe": "KERN · Text",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/text/heading",
  "zweck": "Ist eine Überschrift für Seiten und Abschnitte.",
  "synonyme": [
   "Überschrift",
   "Seitentitel"
  ],
  "aehnlich": [
   "Title",
   "Preline",
   "Subline"
  ],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Varianten",
    "html": "<h1 class=\"kern-heading-display\">Heading-display<\/h1>\n  <h2 class=\"kern-heading-x-large\">Heading-x-large<\/h2>\n  <h3 class=\"kern-heading-large\">Heading-large<\/h3>\n  <h4 class=\"kern-heading-medium\">Heading-medium<\/h4>\n  <h5 class=\"kern-heading-small\">Heading-small<\/h5>"
   }
  ],
  "pflichten": [
   [
    "Immer mit h1–h6, Ebenen ohne Sprung",
    "Anwendung",
    "KERN: Textrollen"
   ]
  ],
  "tasten": [],
  "barriere": [],
  "klassen": [
   [
    "kern-heading-display",
    "Baustein"
   ],
   [
    "kern-heading-x-large",
    "Baustein"
   ],
   [
    "kern-heading-large",
    "Baustein"
   ],
   [
    "kern-heading-medium",
    "Baustein"
   ],
   [
    "kern-heading-small",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-text-title",
  "name": "Text Title",
  "gruppe": "KERN · Text",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/text/title",
  "zweck": "Dient als Titel innerhalb von Komponenten.",
  "synonyme": [
   "Komponententitel",
   "Abschnittstitel"
  ],
  "aehnlich": [
   "Heading",
   "Subline"
  ],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Varianten",
    "html": "<h2 class=\"kern-title kern-title--large\">\n    Dieser Title ist in der Größe „large\" dargestellt. Diese Variante eignet sich für prominente\n    Titel in größeren UI-Elementen wie Dialogen oder Cards.\n  <\/h2>\n  <h3 class=\"kern-title\">\n    Dieser Title ist in der Größe „default\" dargestellt. Diese Standardgröße eignet sich für Cards,\n    Formularabschnitte und Tabellen.\n  <\/h3>\n  <h4 class=\"kern-title kern-title--small\">\n    Dieser Title ist in der Größe „small\" dargestellt. Er eignet sich für kompakte Layouts mit\n    begrenztem Raum.\n  <\/h4>"
   }
  ],
  "pflichten": [
   [
    "Immer mit h1–h6, Ebenen ohne Sprung",
    "Anwendung",
    "KERN: Textrollen"
   ]
  ],
  "tasten": [],
  "barriere": [],
  "klassen": [
   [
    "kern-title",
    "Baustein"
   ],
   [
    "kern-title--large",
    "Variante"
   ],
   [
    "kern-title--small",
    "Variante"
   ]
  ]
 },
 {
  "id": "kern-text-preline",
  "name": "Text Preline",
  "gruppe": "KERN · Text",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/text/preline",
  "zweck": "Ergänzt Title oder Heading mit unterstützenden Informationen.",
  "synonyme": [
   "Sekundärüberschrift",
   "Unterüberschrift",
   "Caption",
   "Kategorie"
  ],
  "aehnlich": [
   "Heading",
   "Title",
   "Subline"
  ],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Varianten",
    "html": "<p class=\"kern-preline kern-preline--large\">\n    Diese Preline ist in der Größe „large\" dargestellt. Verwende sie gemeinsam mit einem großen\n    Title oder Heading – z.&#8239;B. in prominenten Modulen oder Dialogen.\n  <\/p>\n  <p class=\"kern-preline\">\n    Diese Preline ist in der Größe „default\" dargestellt. Diese Standardgröße eignet sich für Cards\n    und Formularabschnitte.\n  <\/p>\n  <p class=\"kern-preline kern-preline--small\">\n    Diese Preline ist in der Größe „small\" dargestellt. Ideal für kompakte Layouts mit kurzen\n    Erklärungen direkt unter kleinen Titles.\n  <\/p>"
   }
  ],
  "pflichten": [
   [
    "Nur gleiche Größenstufe kombinieren",
    "Anwendung",
    "KERN: Textrollen"
   ]
  ],
  "tasten": [],
  "barriere": [],
  "klassen": [
   [
    "kern-preline",
    "Baustein"
   ],
   [
    "kern-preline--large",
    "Variante"
   ],
   [
    "kern-preline--small",
    "Variante"
   ]
  ]
 },
 {
  "id": "kern-text-subline",
  "name": "Text Subline",
  "gruppe": "KERN · Text",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/text/subline",
  "zweck": "Ergänzt Title oder Heading mit unterstützenden Informationen.",
  "synonyme": [
   "Sekundärüberschrift",
   "Unterüberschrift",
   "Caption",
   "Subheading"
  ],
  "aehnlich": [
   "Heading",
   "Preline",
   "Title"
  ],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Varianten",
    "html": "<p class=\"kern-subline kern-subline--large\">\n    Diese Subline ist in der Größe „large\" dargestellt. Verwende sie gemeinsam mit einem großen\n    Title oder Heading – z.&#8239;B. in prominenten Modulen oder Dialogen.\n  <\/p>\n  <p class=\"kern-subline\">\n    Diese Subline ist in der Größe „default\" dargestellt. Diese Standardgröße eignet sich für Cards,\n    Formularabschnitte und Tabellen.\n  <\/p>\n  <p class=\"kern-subline kern-subline--small\">\n    Diese Subline ist in der Größe „small\" dargestellt. Ideal für kompakte Layouts mit kurzen\n    Erklärungen direkt unter kleinen Überschriften.\n  <\/p>"
   }
  ],
  "pflichten": [
   [
    "Nur gleiche Größenstufe kombinieren",
    "Anwendung",
    "KERN: Textrollen"
   ]
  ],
  "tasten": [],
  "barriere": [],
  "klassen": [
   [
    "kern-subline",
    "Baustein"
   ],
   [
    "kern-subline--large",
    "Variante"
   ],
   [
    "kern-subline--small",
    "Variante"
   ]
  ]
 },
 {
  "id": "kern-text-body",
  "name": "Text Body",
  "gruppe": "KERN · Text",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/text/body",
  "zweck": "Wird für Fließtext, Hilfetexte und inhaltliche Absätze verwendet.",
  "synonyme": [
   "Fließtext",
   "Paragraph",
   "Text",
   "Body-Text"
  ],
  "aehnlich": [
   "Subline"
  ],
  "wann": [
   "Für jede Textstelle eine KERN-Textrolle — nie eine eigene Größe."
  ],
  "nicht": [
   "Die Größe sagt nichts über die Gliederungsebene: Überschriftenebene (h1–h6) und Textrolle sind zweierlei."
  ],
  "bsp": [
   {
    "titel": "Varianten",
    "html": "<p class=\"kern-body kern-body--large\">\n    Dieser Body-Text ist in der Größe „large\" geschrieben. Diese Größe sollte nur sparsam eingesetzt\n    werden, z.&#8239;B. auf Startseiten.\n  <\/p>\n  <p class=\"kern-body\">\n    Dieser Body-Text ist in der Größe „default\" geschrieben. Diese Größe bietet eine gute Lesbarkeit\n    und sollte standardmäßig verwendet werden.\n  <\/p>\n  <p class=\"kern-body kern-body--small\">\n    Dieser Body-Text ist in der Größe „small\" geschrieben. Diese Größe sollte nur wenig verwendet\n    werden, z.&#8239;B. wenn wenig Platz vorhanden ist.\n  <\/p>\n  <br />\n  <p class=\"kern-body kern-body--bold\">\n    Ein Body-Text jeglicher Größe kann gefettet werden. Dies sollte nur in Ausnahmefällen verwendet\n    werden, z.&#8239;B. um eine wichtige Information hervorzuheben.\n  <\/p>\n  <p class=\"kern-body kern-body--muted\">\n    Unabhängig von seiner Größe kann ein Body-Text in einer zurückhaltenden Form verwendet werden.\n    Dies sollte jedoch nur in Ausnahmefällen geschehen, z.&#8239;B. um ergänzende Randbemerkungen\n    abzubilden.\n  <\/p>"
   }
  ],
  "pflichten": [
   [
    "Nur gleiche Größenstufe kombinieren",
    "Anwendung",
    "KERN: Textrollen"
   ]
  ],
  "tasten": [],
  "barriere": [
   "WCAG 1.4.12: Text bleibt lesbar, wenn Nutzende Zeilenhöhe, Abstände und Laufweite vergrößern — keine festen Höhen um Text.",
   "Keine Schrift unter KERNs kleinster Stufe."
  ],
  "klassen": [
   [
    "kern-body",
    "Baustein"
   ],
   [
    "kern-body--large",
    "Variante"
   ],
   [
    "kern-body--small",
    "Variante"
   ],
   [
    "kern-body--bold",
    "Variante"
   ],
   [
    "kern-body--muted",
    "Variante"
   ]
  ]
 },
 {
  "id": "kern-text-label",
  "name": "Text Label",
  "gruppe": "KERN · Text",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/text/label",
  "zweck": "Beschriftet Eingabefelder, Buttons oder andere interaktive Elemente.",
  "synonyme": [
   "Beschriftung",
   "Kennzeichnung",
   "Bezeichnung"
  ],
  "aehnlich": [
   "Body"
  ],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Varianten",
    "html": "<p class=\"kern-label kern-label--large\">\n    Dieses Label ist in der Größe „large\" dargestellt. Es eignet sich für hervorgehobene\n    Eingabebereiche oder komplexere Formularstrukturen.\n  <\/p>\n  <p class=\"kern-label\">\n    Dieses Label ist in der Größe „default\" dargestellt. Es dient der eindeutigen Beschriftung von\n    Eingabe- oder Auswahlfeldern und sollte standardmäßig verwendet werden.\n  <\/p>\n  <p class=\"kern-label kern-label--small\">\n    Dieses Label ist in der Größe „small\" dargestellt. Es wird verwendet, wenn wenig Platz zur\n    Verfügung steht – z.&#8239;B. in Cards. Aufgrund der geringeren Lesbarkeit sollte diese Variante\n    nur sparsam eingesetzt werden.\n  <\/p>"
   }
  ],
  "pflichten": [
   [
    "Nur gleiche Größenstufe kombinieren",
    "Anwendung",
    "KERN: Textrollen"
   ]
  ],
  "tasten": [],
  "barriere": [],
  "klassen": [
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-label--large",
    "Variante"
   ],
   [
    "kern-label--small",
    "Variante"
   ]
  ]
 },
 {
  "id": "kern-button",
  "name": "Button",
  "gruppe": "KERN · Aktion",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/button",
  "zweck": "Löst eine Aktion aus, seine Beschriftung benennt diese Aktion.",
  "synonyme": [
   "Schaltfläche",
   "Befehlsschaltfläche",
   "Schalter",
   "Push Button"
  ],
  "aehnlich": [
   "Link"
  ],
  "wann": [
   "Für eine Handlung: absenden, speichern, löschen, öffnen.",
   "Genau ein Hauptknopf (kern-btn--primary) je Bildschirmabschnitt — KERN: einer je Seite."
  ],
  "nicht": [
   "Für einen Ortswechsel — dafür ist der Link da.",
   "Nie zwei Hauptknöpfe nebeneinander: dann ist keiner mehr der Hauptknopf."
  ],
  "bsp": [
   {
    "titel": "Varianten",
    "html": "<button type=\"button\" class=\"kern-btn kern-btn--primary\">\n    <span class=\"kern-label\">Primary Button<\/span>\n  <\/button>\n  <button type=\"button\" class=\"kern-btn kern-btn--secondary\">\n    <span class=\"kern-label\">Secondary Button<\/span>\n  <\/button>\n  <button type=\"button\" class=\"kern-btn kern-btn--tertiary\">\n    <span class=\"kern-label\">Tertiary Button<\/span>\n  <\/button>"
   },
   {
    "titel": "Varianten mit Icon",
    "html": "<button class=\"kern-btn kern-btn--primary\">\n    <span class=\"kern-icon kern-icon--edit\" aria-hidden=\"true\"><\/span>\n    <span class=\"kern-label\">Primary Button<\/span>\n  <\/button>\n\n  <button class=\"kern-btn kern-btn--secondary\">\n    <span class=\"kern-label\">Secondary Button<\/span>\n    <span class=\"kern-icon kern-icon--arrow-forward\" aria-hidden=\"true\"><\/span>\n  <\/button>\n\n  <button class=\"kern-btn kern-btn--tertiary\">\n    <span class=\"kern-icon kern-icon--edit\" aria-hidden=\"true\"><\/span>\n    <span class=\"kern-label kern-sr-only\">Bearbeiten<\/span>\n  <\/button>"
   },
   {
    "titel": "Größenübersicht",
    "html": "<button class=\"kern-btn kern-btn--x-small kern-btn--primary\">\n    <span class=\"kern-label\">X-Small Button<\/span>\n  <\/button>\n  <button class=\"kern-btn kern-btn--primary\">\n    <span class=\"kern-label\">Default Button<\/span>\n  <\/button>"
   },
   {
    "titel": "Block-Button für mobilen Kontext",
    "html": "<button class=\"kern-btn kern-btn--block kern-btn--primary\">\n    <span class=\"kern-label\">Primary Block<\/span>\n  <\/button>"
   },
   {
    "titel": "Zusatzbeispiel KERN 2.8.2 (nbyc): die Größen, die KERNs Beispiel nicht zeigt",
    "html": "<!-- kern.css 2.8.2 kennt fuenf Knopfgroessen. KERNs \"Groessenuebersicht\"\n     zeigt nur x-small und die Grundgroesse; small, large und x-large\n     blieben ohne Beispiel (Befund B4 des Assessments vom 16.11.2026).\n     Markup und Klassen sind KERNs eigene, nichts davon ist neu. -->\n<button class=\"kern-btn kern-btn--small kern-btn--primary\">\n  <span class=\"kern-label\">Small Button<\/span>\n<\/button>\n<button class=\"kern-btn kern-btn--large kern-btn--primary\">\n  <span class=\"kern-label\">Large Button<\/span>\n<\/button>\n<button class=\"kern-btn kern-btn--x-large kern-btn--primary\">\n  <span class=\"kern-label\">X-Large Button<\/span>\n<\/button>"
   },
   {
    "titel": "Zusatzbeispiel KERN 2.8.2 (nbyc): dieselben Größen als Secondary und Tertiary",
    "html": "<button class=\"kern-btn kern-btn--small kern-btn--secondary\">\n  <span class=\"kern-label\">Small Secondary<\/span>\n<\/button>\n<button class=\"kern-btn kern-btn--large kern-btn--secondary\">\n  <span class=\"kern-label\">Large Secondary<\/span>\n<\/button>\n<button class=\"kern-btn kern-btn--x-large kern-btn--tertiary\">\n  <span class=\"kern-label\">X-Large Tertiary<\/span>\n<\/button>"
   }
  ],
  "pflichten": [
   [
    "Nur-Symbol-Knopf mit verborgenem Text",
    "KERN",
    "kern-sr-only"
   ],
   [
    "Gesperrt für Hilfsmittel zugänglich",
    "kern-neu.js",
    "aria-disabled + Sperre (E4, M25)"
   ],
   [
    "Zustand programmatisch (aria-pressed/-expanded)",
    "Anwendung",
    "je nach Zweck des Knopfs"
   ],
   [
    "Ein Hauptknopf je Seite",
    "Anwendung",
    ""
   ]
  ],
  "tasten": [
   [
    "Tab",
    "erreicht den Knopf"
   ],
   [
    "Enter, Leertaste",
    "löst aus (nativ)"
   ]
  ],
  "barriere": [
   "Immer <button>, nie ein <div> mit Klickereignis.",
   "Bedienziel nach WCAG 2.5.8 mindestens 24 × 24 px; KERNs Regelhöhe ist 48 px.",
   "Gesperrt nach KERN: lieber ausblenden; wenn nötig aria-disabled=\"true\" statt disabled — der Knopf bleibt per Tab erreichbar und wird vorgelesen, kern-neu.js sperrt Klick, Enter und Leertaste.",
   "Ladezustand (Erweiterung data-kn-loading): nicht bedienbar, die Beschriftung bleibt für Hilfsmittel erhalten."
  ],
  "klassen": [
   [
    "kern-btn",
    "Baustein"
   ],
   [
    "kern-btn--primary",
    "Variante"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-btn--secondary",
    "Variante"
   ],
   [
    "kern-btn--tertiary",
    "Variante"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--edit",
    "Variante"
   ],
   [
    "kern-icon--arrow-forward",
    "Variante"
   ],
   [
    "kern-sr-only",
    "Baustein"
   ],
   [
    "kern-btn--x-small",
    "Variante"
   ],
   [
    "kern-btn--block",
    "Variante"
   ]
  ]
 },
 {
  "id": "kern-link",
  "name": "Link",
  "gruppe": "KERN · Aktion",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/link",
  "zweck": "Ist eine direkte Verbindung zu anderen Inhalten.",
  "synonyme": [
   "Querverweis",
   "Verweis",
   "Verknüpfung",
   "Hypertext-Link",
   "Hyperlink"
  ],
  "aehnlich": [
   "Button",
   "Navigation"
  ],
  "wann": [
   "Für jeden Ortswechsel — auch innerhalb der Seite."
  ],
  "nicht": [
   "Für eine Handlung. Ein Link, der etwas löscht, ist ein Knopf."
  ],
  "bsp": [
   {
    "titel": "Varianten",
    "html": "<div>\n    <a href=\"#\" class=\"kern-link\">Link default<\/a>\n  <\/div>\n\n  <div>\n    <a href=\"#\" class=\"kern-link kern-link--small\">Link small<\/a>\n  <\/div>"
   },
   {
    "titel": "Varianten mit Icon",
    "html": "<div>\n    <a href=\"#\" class=\"kern-link\"\n      ><span class=\"kern-icon kern-icon--arrow-forward\" aria-hidden=\"true\"><\/span>Link default<\/a\n    >\n  <\/div>\n  <div>\n    <a href=\"#\" class=\"kern-link kern-link--small\"\n      ><span class=\"kern-icon kern-icon--arrow-forward\" aria-hidden=\"true\"><\/span>Link small<\/a\n    >\n  <\/div>"
   },
   {
    "titel": "Link als Button darstellen",
    "html": "<a href=\"#\" class=\"kern-btn kern-btn--tertiary\">\n    <span class=\"kern-label\">Linktext<\/span>\n    <span class=\"kern-icon kern-icon--arrow-forward\" aria-hidden=\"true\"><\/span> <\/a\n>"
   },
   {
    "titel": "Link ohne besuchten Zustand",
    "html": "<a href=\"#\" class=\"kern-link kern-link--no-visited-state\">Link<\/a>"
   }
  ],
  "pflichten": [
   [
    "Linkzweck aus dem Zusammenhang",
    "Anwendung",
    ""
   ],
   [
    "Externe Links gekennzeichnet",
    "Anwendung",
    "Symbol im Beispiel möglich"
   ],
   [
    "Nie nur ein Symbol",
    "Anwendung",
    ""
   ]
  ],
  "tasten": [
   [
    "Tab",
    "erreicht den Verweis"
   ],
   [
    "Enter",
    "folgt dem Verweis (nativ)"
   ]
  ],
  "barriere": [
   "Die Beschriftung muss allein verständlich sein. Nie „hier klicken“.",
   "Die Unterstreichung bleibt — sie wirkt auch ohne Farbwahrnehmung."
  ],
  "klassen": [
   [
    "kern-link",
    "Baustein"
   ],
   [
    "kern-link--small",
    "Variante"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--arrow-forward",
    "Variante"
   ],
   [
    "kern-btn",
    "Baustein"
   ],
   [
    "kern-btn--tertiary",
    "Variante"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-link--no-visited-state",
    "Variante"
   ]
  ]
 },
 {
  "id": "kern-input-text-text",
  "name": "Input Text",
  "gruppe": "KERN · Formular",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/form-inputs/text",
  "zweck": "Ermöglicht Nutzenden, Buchstaben, Zahlen und Sonderzeichen einzugeben.",
  "synonyme": [
   "Textfeld",
   "Edit",
   "Input",
   "Input field",
   "Eingabefeld",
   "Text field",
   "Text input"
  ],
  "aehnlich": [
   "Input Date",
   "Input E-Mail",
   "Input Password"
  ],
  "wann": [
   "Für jede freie Eingabe."
  ],
  "nicht": [
   "Nie ohne Beschriftung. Ein Platzhaltertext ist keine Beschriftung: er verschwindet beim Tippen."
  ],
  "bsp": [
   {
    "titel": "Default",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"text\">Familienname<\/label>\n    <input class=\"kern-form-input__input\" id=\"text\" name=\"text\" type=\"text\" /><\/div\n>"
   },
   {
    "titel": "Readonly",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"text3\">Familienname<\/label>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"text3\"\n      name=\"text3\"\n      type=\"text\"\n      value=\"Kim Musterperson\"\n      readonly\n    /><\/div\n>"
   },
   {
    "titel": "Disabled",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"text4\">Familienname<\/label>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"text4\"\n      name=\"text4\"\n      type=\"text\"\n      value=\"Kim Musterperson\"\n      disabled\n    /><\/div\n>"
   },
   {
    "titel": "Optional",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"text\"\n      >Familienname <span class=\"kern-label__optional\">- Optional<\/span><\/label\n    >\n    <input class=\"kern-form-input__input\" id=\"text\" name=\"text\" type=\"text\" /><\/div\n>"
   },
   {
    "titel": "Hinweistext und Fehlermeldung",
    "html": "<div class=\"kern-form-input kern-form-input--error\">\n    <label class=\"kern-label\" for=\"text6\">Familienname<\/label>\n    <div class=\"kern-hint\" id=\"text-hint2\">\n      Ein Hinweis gibt Hilfestellung zum Format oder eine Begründung, warum diese Information\n      benötigt wird.\n    <\/div>\n    <input\n      class=\"kern-form-input__input kern-form-input__input--error\"\n      id=\"text6\"\n      name=\"text6\"\n      type=\"text\"\n      aria-invalid=\"true\"\n      aria-describedby=\"text-hint2 text-error\"\n    />\n    <p class=\"kern-error\" id=\"text-error\">\n      <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"><\/span>\n      <span class=\"kern-body\"\n        >Eine konstruktive Fehlermeldung vermittelt, was Nutzende tun können, um das Problem zu\n        lösen.<\/span\n      >\n    <\/p>\n  <\/div>"
   }
  ],
  "pflichten": [
   [
    "autocomplete passend (1.3.5)",
    "Anwendung",
    ""
   ],
   [
    "Beschriftung sichtbar und eindeutig (3.3.2)",
    "KERN",
    "kern-label mit for/id im Beispiel"
   ],
   [
    "Fehler klar benannt, mit Lösung (3.3.1, 3.3.3)",
    "Anwendung",
    "Text der Fehlermeldung"
   ],
   [
    "Fehlerzusammenfassung als Statusmeldung (4.1.3)",
    "kern-neu.js",
    "form[data-kn-validate]: Liste mit role=alert und Fokus, Verweise ins Feld (M58)"
   ],
   [
    "Pflicht über aria-required, optional mit \"- Optional\"",
    "Anwendung",
    "Prüfung 16 meldet natives required"
   ]
  ],
  "tasten": [],
  "barriere": [
   "<label for> ist Pflicht.",
   "Hinweis und Fehler über aria-describedby verbinden — sonst liest der Screenreader sie nicht.",
   "aria-invalid=\"true\" am fehlerhaften Feld.",
   "Die Fehlerleiste links (kern-form-input--error) macht den Fehler auch ohne Farbwahrnehmung sichtbar."
  ],
  "klassen": [
   [
    "kern-form-input",
    "Baustein"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-form-input__input",
    "Bestandteil"
   ],
   [
    "kern-label__optional",
    "Bestandteil"
   ],
   [
    "kern-form-input--error",
    "Variante"
   ],
   [
    "kern-hint",
    "Baustein"
   ],
   [
    "kern-form-input__input--error",
    "Variante"
   ],
   [
    "kern-error",
    "Baustein"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--danger",
    "Variante"
   ],
   [
    "kern-icon--md",
    "Variante"
   ],
   [
    "kern-body",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-input-text-email",
  "name": "Input E-Mail",
  "gruppe": "KERN · Formular",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/form-inputs/e-mail",
  "zweck": "Unterstützt Nutzende bei der Eingabe einer E-Mail-Adresse.",
  "synonyme": [
   "E-Mail-Eingabefeld",
   "E-mail input field",
   "Email input field"
  ],
  "aehnlich": [
   "Input Date",
   "Input Password",
   "Input Text"
  ],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Default",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"email\">E-Mail-Adresse<\/label>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"email\"\n      name=\"email\"\n      type=\"email\"\n      autocomplete=\"email\"\n    /><\/div\n>"
   },
   {
    "titel": "Readonly",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"email3\">E-Mail-Adresse<\/label>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"email3\"\n      name=\"email3\"\n      type=\"email\"\n      autocomplete=\"email\"\n      value=\"kim@musterperson.de\"\n      readonly\n    /><\/div\n>"
   },
   {
    "titel": "Disabled",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"email4\">E-Mail-Adresse<\/label>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"email4\"\n      name=\"email4\"\n      type=\"email\"\n      autocomplete=\"email\"\n      value=\"kim@musterperson.de\"\n      disabled\n    /><\/div\n>"
   },
   {
    "titel": "Optional",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"email6\"\n      >Email\n      <span class=\"kern-label__optional\">- Optional<\/span>\n    <\/label>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"email\"\n      name=\"email\"\n      type=\"email\"\n      autocomplete=\"email\"\n    /><\/div\n>"
   },
   {
    "titel": "Hinweistext und Fehlermeldung",
    "html": "<div class=\"kern-form-input kern-form-input--error\">\n    <label class=\"kern-label\" for=\"email6\">E-Mail-Adresse<\/label>\n    <div class=\"kern-hint\" id=\"email-hint\">\n      Ein Hinweis gibt Hilfestellung zum Format oder eine Begründung, warum diese Information\n      benötigt wird.\n    <\/div>\n    <input\n      class=\"kern-form-input__input kern-form-input__input--error\"\n      id=\"email6\"\n      name=\"email6\"\n      type=\"email\"\n      autocomplete=\"email\"\n      aria-invalid=\"true\"\n      aria-describedby=\"email-hint kern-input-error\"\n    />\n    <p class=\"kern-error\" id=\"kern-input-error\">\n      <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"><\/span>\n      <span class=\"kern-body\"\n        >Eine konstruktive Fehlermeldung vermittelt, was Nutzende tun können, um das Problem zu\n        lösen.<\/span\n      >\n    <\/p>\n  <\/div>"
   }
  ],
  "pflichten": [
   [
    "autocomplete=\"email\"",
    "KERN",
    "im Beispiel"
   ],
   [
    "Beschriftung sichtbar und eindeutig (3.3.2)",
    "KERN",
    "kern-label mit for/id im Beispiel"
   ],
   [
    "Fehler klar benannt, mit Lösung (3.3.1, 3.3.3)",
    "Anwendung",
    "Text der Fehlermeldung"
   ],
   [
    "Fehlerzusammenfassung als Statusmeldung (4.1.3)",
    "kern-neu.js",
    "form[data-kn-validate]: Liste mit role=alert und Fokus, Verweise ins Feld (M58)"
   ],
   [
    "Pflicht über aria-required, optional mit \"- Optional\"",
    "Anwendung",
    "Prüfung 16 meldet natives required"
   ]
  ],
  "tasten": [],
  "barriere": [],
  "klassen": [
   [
    "kern-form-input",
    "Baustein"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-form-input__input",
    "Bestandteil"
   ],
   [
    "kern-label__optional",
    "Bestandteil"
   ],
   [
    "kern-form-input--error",
    "Variante"
   ],
   [
    "kern-hint",
    "Baustein"
   ],
   [
    "kern-form-input__input--error",
    "Variante"
   ],
   [
    "kern-error",
    "Baustein"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--danger",
    "Variante"
   ],
   [
    "kern-icon--md",
    "Variante"
   ],
   [
    "kern-body",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-input-text-tel",
  "name": "Input Tel",
  "gruppe": "KERN · Formular",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/form-inputs/tel",
  "zweck": "Unterstützt Nutzende bei der Eingabe einer Telefonnummer.",
  "synonyme": [
   "Rufnummer-Eingabe",
   "Telefonisches Kontaktfeld",
   "Mobilnummer-Eingabe"
  ],
  "aehnlich": [
   "Input Number",
   "Input Text",
   "Input Date"
  ],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Default",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"tel\">Telefonnummer<\/label>\n    <input class=\"kern-form-input__input\" id=\"tel\" name=\"tel\" type=\"tel\" autocomplete=\"tel\" /><\/div\n>"
   },
   {
    "titel": "Readonly",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"tel3\">Telefonnummer<\/label>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"tel3\"\n      name=\"tel3\"\n      type=\"tel\"\n      value=\"+49 0132 1234567\"\n      readonly\n    /><\/div\n>"
   },
   {
    "titel": "Disabled",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"tel4\">Telefonnummer<\/label>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"tel4\"\n      name=\"tel4\"\n      type=\"tel\"\n      value=\"+49 0132 1234567\"\n      disabled\n    /><\/div\n>"
   },
   {
    "titel": "Optional",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"tel\"\n      >Telefonnummer <span class=\"kern-label__optional\">- Optional<\/span><\/label\n    >\n    <input class=\"kern-form-input__input\" id=\"tel\" name=\"tel\" type=\"tel\" autocomplete=\"tel\" /><\/div\n>"
   },
   {
    "titel": "Hinweistext und Fehlermeldung",
    "html": "<div class=\"kern-form-input kern-form-input--error\">\n    <label class=\"kern-label\" for=\"tel6\">Telefonnummer<\/label>\n    <div class=\"kern-hint\" id=\"tel-hint2\">\n      Ein Hinweis gibt Hilfestellung zum Format oder eine Begründung, warum diese Information\n      benötigt wird.\n    <\/div>\n    <input\n      class=\"kern-form-input__input kern-form-input__input--error\"\n      id=\"tel6\"\n      name=\"tel6\"\n      type=\"tel\"\n      autocomplete=\"tel\"\n      aria-invalid=\"true\"\n      aria-describedby=\"tel-hint2 tel-error\"\n    />\n    <p class=\"kern-error\" id=\"tel-error\">\n      <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"><\/span>\n      <span class=\"kern-body\"\n        >Eine konstruktive Fehlermeldung vermittelt, was Nutzende tun können, um das Problem zu\n        lösen.<\/span\n      >\n    <\/p>\n  <\/div>"
   }
  ],
  "pflichten": [
   [
    "autocomplete=\"tel\"",
    "KERN",
    "im Beispiel"
   ],
   [
    "Beschriftung sichtbar und eindeutig (3.3.2)",
    "KERN",
    "kern-label mit for/id im Beispiel"
   ],
   [
    "Fehler klar benannt, mit Lösung (3.3.1, 3.3.3)",
    "Anwendung",
    "Text der Fehlermeldung"
   ],
   [
    "Fehlerzusammenfassung als Statusmeldung (4.1.3)",
    "kern-neu.js",
    "form[data-kn-validate]: Liste mit role=alert und Fokus, Verweise ins Feld (M58)"
   ],
   [
    "Pflicht über aria-required, optional mit \"- Optional\"",
    "Anwendung",
    "Prüfung 16 meldet natives required"
   ]
  ],
  "tasten": [],
  "barriere": [],
  "klassen": [
   [
    "kern-form-input",
    "Baustein"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-form-input__input",
    "Bestandteil"
   ],
   [
    "kern-label__optional",
    "Bestandteil"
   ],
   [
    "kern-form-input--error",
    "Variante"
   ],
   [
    "kern-hint",
    "Baustein"
   ],
   [
    "kern-form-input__input--error",
    "Variante"
   ],
   [
    "kern-error",
    "Baustein"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--danger",
    "Variante"
   ],
   [
    "kern-icon--md",
    "Variante"
   ],
   [
    "kern-body",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-input-text-url",
  "name": "Input URL",
  "gruppe": "KERN · Formular",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/form-inputs/url",
  "zweck": "Unterstützt Nutzende bei der Eingabe einer einer Internetadresse (URL).",
  "synonyme": [
   "URL-Eingabefeld",
   "Internetadresse",
   "Link-Eingabefeld",
   "Web-Adresse"
  ],
  "aehnlich": [
   "Input Text",
   "Input E-Mail"
  ],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Default",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"url\">Internetadresse (URL)<\/label>\n    <input class=\"kern-form-input__input\" id=\"url\" name=\"url\" type=\"url\" /><\/div\n>"
   },
   {
    "titel": "Readonly",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"url3\">Internetadresse (URL)<\/label>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"url3\"\n      name=\"url3\"\n      type=\"url\"\n      value=\"www.kern-ux.de\"\n      readonly\n    /><\/div\n>"
   },
   {
    "titel": "Disabled",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"url4\">Internetadresse (URL)<\/label>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"url4\"\n      name=\"url4\"\n      type=\"url\"\n      value=\"www.kern-ux.de\"\n      disabled\n    /><\/div\n>"
   },
   {
    "titel": "Optional",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"url\"\n      >Internetadresse (URL) <span class=\"kern-label__optional\">- Optional<\/span><\/label\n    >\n    <input class=\"kern-form-input__input\" id=\"url\" name=\"url\" type=\"url\" /><\/div\n>"
   },
   {
    "titel": "Hinweistext und Fehlermeldung",
    "html": "<div class=\"kern-form-input kern-form-input--error\">\n    <label class=\"kern-label\" for=\"url6\">Internetadresse (URL)<\/label>\n    <div class=\"kern-hint\" id=\"url-hint2\">\n      Ein Hinweis gibt Hilfestellung zum Format oder eine Begründung, warum diese Information\n      benötigt wird.\n    <\/div>\n    <input\n      class=\"kern-form-input__input kern-form-input__input--error\"\n      id=\"url6\"\n      name=\"url6\"\n      type=\"url\"\n      aria-invalid=\"true\"\n      aria-describedby=\"url-hint2 url-error\"\n    />\n    <p class=\"kern-error\" id=\"url-error\">\n      <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"><\/span>\n      <span class=\"kern-body\"\n        >Eine konstruktive Fehlermeldung vermittelt, was Nutzende tun können, um das Problem zu\n        lösen.<\/span\n      >\n    <\/p>\n  <\/div>"
   }
  ],
  "pflichten": [
   [
    "autocomplete passend (1.3.5)",
    "Anwendung",
    ""
   ],
   [
    "Beschriftung sichtbar und eindeutig (3.3.2)",
    "KERN",
    "kern-label mit for/id im Beispiel"
   ],
   [
    "Fehler klar benannt, mit Lösung (3.3.1, 3.3.3)",
    "Anwendung",
    "Text der Fehlermeldung"
   ],
   [
    "Fehlerzusammenfassung als Statusmeldung (4.1.3)",
    "kern-neu.js",
    "form[data-kn-validate]: Liste mit role=alert und Fokus, Verweise ins Feld (M58)"
   ],
   [
    "Pflicht über aria-required, optional mit \"- Optional\"",
    "Anwendung",
    "Prüfung 16 meldet natives required"
   ]
  ],
  "tasten": [],
  "barriere": [],
  "klassen": [
   [
    "kern-form-input",
    "Baustein"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-form-input__input",
    "Bestandteil"
   ],
   [
    "kern-label__optional",
    "Bestandteil"
   ],
   [
    "kern-form-input--error",
    "Variante"
   ],
   [
    "kern-hint",
    "Baustein"
   ],
   [
    "kern-form-input__input--error",
    "Variante"
   ],
   [
    "kern-error",
    "Baustein"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--danger",
    "Variante"
   ],
   [
    "kern-icon--md",
    "Variante"
   ],
   [
    "kern-body",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-input-text-number",
  "name": "Input Number",
  "gruppe": "KERN · Formular",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/form-inputs/number",
  "zweck": "Unterstützt Nutzende bei der Eingabe einer Zahl.",
  "synonyme": [
   "Zahlenfeld",
   "Zahlen-Eingabefeld",
   "Nummernfeld",
   "Nummern-Eingabefeld"
  ],
  "aehnlich": [
   "Input Date",
   "Input Tel",
   "Input Text"
  ],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Default",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"plz\">Postleitzahl<\/label>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"plz\"\n      name=\"plz\"\n      type=\"text\"\n      inputmode=\"numeric\"\n    /><\/div\n>"
   },
   {
    "titel": "Readonly",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"plz3\">Postleitzahl<\/label>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"plz3\"\n      name=\"plz3\"\n      type=\"text\"\n      inputmode=\"numeric\"\n      value=\"20537\"\n      readonly\n    /><\/div\n>"
   },
   {
    "titel": "Disabled",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"plz4\">Postleitzahl<\/label>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"plz4\"\n      name=\"plz4\"\n      type=\"text\"\n      inputmode=\"numeric\"\n      value=\"20537\"\n      disabled\n    /><\/div\n>"
   },
   {
    "titel": "Optional",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"plz\"\n      >Postleitzahl <span class=\"kern-label__optional\">- Optional<\/span><\/label\n    >\n    <input\n      class=\"kern-form-input__input\"\n      id=\"plz\"\n      name=\"plz\"\n      type=\"text\"\n      inputmode=\"numeric\"\n    /><\/div\n>"
   },
   {
    "titel": "Hinweistext und Fehlermeldung",
    "html": "<div class=\"kern-form-input kern-form-input--error\">\n    <label class=\"kern-label\" for=\"plz6\">Postleitzahl<\/label>\n    <div class=\"kern-hint\" id=\"plz-hint\">\n      Ein Hinweis gibt Hilfestellung zum Format oder eine Begründung, warum diese Information\n      benötigt wird.\n    <\/div>\n    <input\n      class=\"kern-form-input__input kern-form-input__input--error\"\n      id=\"plz6\"\n      name=\"plz6\"\n      type=\"text\"\n      inputmode=\"numeric\"\n      aria-invalid=\"true\"\n      aria-describedby=\"plz-hint kern-input-error\"\n    />\n    <p class=\"kern-error\" id=\"kern-input-error\">\n      <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"><\/span>\n      <span class=\"kern-body\"\n        >Eine konstruktive Fehlermeldung vermittelt, was Nutzende tun können, um das Problem zu\n        lösen.<\/span\n      >\n    <\/p>\n  <\/div>"
   }
  ],
  "pflichten": [
   [
    "inputmode=\"numeric\"",
    "KERN",
    "im Beispiel"
   ],
   [
    "Wertebereich per Attribut",
    "Anwendung",
    ""
   ],
   [
    "Beschriftung sichtbar und eindeutig (3.3.2)",
    "KERN",
    "kern-label mit for/id im Beispiel"
   ],
   [
    "Fehler klar benannt, mit Lösung (3.3.1, 3.3.3)",
    "Anwendung",
    "Text der Fehlermeldung"
   ],
   [
    "Fehlerzusammenfassung als Statusmeldung (4.1.3)",
    "kern-neu.js",
    "form[data-kn-validate]: Liste mit role=alert und Fokus, Verweise ins Feld (M58)"
   ],
   [
    "Pflicht über aria-required, optional mit \"- Optional\"",
    "Anwendung",
    "Prüfung 16 meldet natives required"
   ]
  ],
  "tasten": [],
  "barriere": [],
  "klassen": [
   [
    "kern-form-input",
    "Baustein"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-form-input__input",
    "Bestandteil"
   ],
   [
    "kern-label__optional",
    "Bestandteil"
   ],
   [
    "kern-form-input--error",
    "Variante"
   ],
   [
    "kern-hint",
    "Baustein"
   ],
   [
    "kern-form-input__input--error",
    "Variante"
   ],
   [
    "kern-error",
    "Baustein"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--danger",
    "Variante"
   ],
   [
    "kern-icon--md",
    "Variante"
   ],
   [
    "kern-body",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-input-text-date",
  "name": "Input Date",
  "gruppe": "KERN · Formular",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/form-inputs/date",
  "zweck": "Unterstützt Nutzende bei der Eingabe eines Datums.",
  "synonyme": [
   "Date",
   "Datum-Eingabefeld"
  ],
  "aehnlich": [
   "Input Text",
   "Input Password",
   "Input E-Mail"
  ],
  "wann": [
   "Für Geburtsdaten, Fristende, weit zurückliegende Termine — überall, wo Tippen schneller ist als Blättern."
  ],
  "nicht": [
   "Für die Wahl eines nahen Termins in den nächsten Wochen — dafür kommt das Kalender-Datum (kn-date-picker, M89)."
  ],
  "bsp": [
   {
    "titel": "Default",
    "html": "<fieldset class=\"kern-fieldset\" aria-describedby=\"hint-text\">\n<legend class=\"kern-label\">\n  Wann wurde der Ausweis ausgestellt?\n<\/legend>\n<div class=\"kern-hint\" id=\"hint-text\">Beispielsweise: 17 3 2015<\/div>\n<div class=\"kern-fieldset__body kern-fieldset__body--horizontal\">\n  <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"tag\">Tag<\/label>\n    <input class=\"kern-form-input__input kern-form-input__input--width-2\" id=\"tag\" name=\"tag\" type=\"text\" inputmode=\"numeric\">\n  <\/div>\n  <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"monat\">Monat<\/label>\n    <input class=\"kern-form-input__input kern-form-input__input--width-2\" id=\"monat\" name=\"monat\" type=\"text\" inputmode=\"numeric\">\n  <\/div>\n    <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"jahr\">Jahr<\/label>\n    <input class=\"kern-form-input__input kern-form-input__input--width-4\" id=\"jahr\" name=\"jahr\" type=\"text\" inputmode=\"numeric\">\n  <\/div>\n<div>\n<\/fieldset>",
    "markup": {
     "offen": {
      "div": 2
     },
     "zuviel": {}
    }
   },
   {
    "titel": "Readonly",
    "html": "<fieldset class=\"kern-fieldset\" aria-describedby=\"hint-text4\">\n<legend class=\"kern-label\">\n  Wann wurde der Ausweis ausgestellt?\n<\/legend>\n<div class=\"kern-hint\" id=\"hint-text4\">Beispielsweise: 17 3 2015<\/div>\n<div class=\"kern-fieldset__body kern-fieldset__body--horizontal\">\n  <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"tag3\">Tag<\/label>\n    <input class=\"kern-form-input__input kern-form-input__input--width-2\" id=\"tag3\" name=\"tag3\" type=\"text\" inputmode=\"numeric\" value=\"17\" readonly>\n  <\/div>\n  <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"monat3\">Monat<\/label>\n    <input class=\"kern-form-input__input kern-form-input__input--width-2\" id=\"monat3\" name=\"monat3\" type=\"text\" inputmode=\"numeric\" value=\"3\" readonly>\n  <\/div>\n    <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"jahr3\">Jahr<\/label>\n    <input class=\"kern-form-input__input kern-form-input__input--width-4\" id=\"jahr3\" name=\"jahr3\" type=\"text\" inputmode=\"numeric\" value=\"2019\" readonly>\n  <\/div>\n<div>\n<\/fieldset>",
    "markup": {
     "offen": {
      "div": 2
     },
     "zuviel": {}
    }
   },
   {
    "titel": "Disabled",
    "html": "<fieldset class=\"kern-fieldset\" aria-describedby=\"hint-text5\">\n<legend class=\"kern-label\">\n  Wann wurde der Ausweis ausgestellt?\n<\/legend>\n<div class=\"kern-hint\" id=\"hint-text5\">Beispielsweise: 17 3 2015<\/div>\n<div class=\"kern-fieldset__body kern-fieldset__body--horizontal\">\n  <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"tag4\">Tag<\/label>\n    <input class=\"kern-form-input__input kern-form-input__input--width-2\" id=\"tag4\" name=\"tag4\" type=\"text\" inputmode=\"numeric\" value=\"7\" disabled>\n  <\/div>\n  <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"monat4\">Monat<\/label>\n    <input class=\"kern-form-input__input kern-form-input__input--width-2\" id=\"monat4\" name=\"monat4\" type=\"text\" inputmode=\"numeric\" value=\"3\" disabled>\n  <\/div>\n    <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"jahr4\">Jahr<\/label>\n    <input class=\"kern-form-input__input kern-form-input__input--width-4\" id=\"jahr4\" name=\"jahr4\" type=\"text\" inputmode=\"numeric\" value=\"2019\" disabled>\n  <\/div>\n<div>\n<\/fieldset>",
    "markup": {
     "offen": {
      "div": 2
     },
     "zuviel": {}
    }
   },
   {
    "titel": "Optional",
    "html": "<fieldset class=\"kern-fieldset\" aria-describedby=\"hint-text\">\n<legend class=\"kern-label\">\n  Wann wurde der Ausweis ausgestellt?\n  <span class=\"kern-label__optional\">- Optional<\/span>\n<\/legend>\n<div class=\"kern-hint\" id=\"hint-text\">Beispielsweise: 17 3 2015<\/div>\n<div class=\"kern-fieldset__body kern-fieldset__body--horizontal\">\n  <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"tag\">Tag<\/label>\n    <input class=\"kern-form-input__input kern-form-input__input--width-2\" id=\"tag\" name=\"tag\" type=\"text\" inputmode=\"numeric\">\n  <\/div>\n  <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"monat\">Monat<\/label>\n    <input class=\"kern-form-input__input kern-form-input__input--width-2\" id=\"monat\" name=\"monat\" type=\"text\" inputmode=\"numeric\">\n  <\/div>\n    <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"jahr\">Jahr<\/label>\n    <input class=\"kern-form-input__input kern-form-input__input--width-4\" id=\"jahr\" name=\"jahr\" type=\"text\" inputmode=\"numeric\">\n  <\/div>\n<div>\n<\/fieldset>",
    "markup": {
     "offen": {
      "div": 2
     },
     "zuviel": {}
    }
   },
   {
    "titel": "Hinweistext und Fehlermeldung",
    "html": "<fieldset class=\"kern-fieldset kern-fieldset--error\" aria-describedby=\"hint-text6 kern-error\">\n<legend class=\"kern-label\">\n  Wann wurde der Ausweis ausgestellt?\n<\/legend>\n<div class=\"kern-hint\" id=\"hint-text6\">Beispielsweise: 17 3 2015<\/div>\n<div class=\"kern-fieldset__body kern-fieldset__body--horizontal\">\n  <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"tag5\">Tag<\/label>\n    <input class=\"kern-form-input__input kern-form-input__input--width-2 kern-form-input__input--error\" id=\"tag5\" name=\"tag5\" type=\"text\" inputmode=\"numeric\" value=\"1\" aria-invalid=\"true\" aria-describedby=\"kern-error\">\n  <\/div>\n  <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"monat5\">Monat<\/label>\n    <input class=\"kern-form-input__input kern-form-input__input--width-2 kern-form-input__input--error\" id=\"monat5\" name=\"monat5\" type=\"text\" inputmode=\"numeric\" value=\"5\" aria-invalid=\"true\" aria-describedby=\"kern-error\">\n  <\/div>\n    <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"jahr5\">Jahr<\/label>\n    <input class=\"kern-form-input__input kern-form-input__input--width-4 kern-form-input__input--error\" id=\"jahr5\" name=\"jahr5\" type=\"text\" inputmode=\"numeric\" value=\"2027\" aria-invalid=\"true\" aria-describedby=\"kern-error\">\n  <\/div>\n<\/div>\n  <p class=\"kern-error\" id=\"kern-error\">\n  <span class=\"kern-icon kern-icon--danger\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-body\">Das Ausstellungsdatum deines Ausweises muss in der Vergangenheit liegen.<\/span>\n<\/p>\n<\/fieldset>"
   }
  ],
  "pflichten": [
   [
    "Drei Felder in fieldset, inputmode numeric",
    "KERN",
    "im Beispiel"
   ],
   [
    "autocomplete (z. B. bday-day)",
    "Anwendung",
    "im Beispiel nicht gesetzt"
   ],
   [
    "Beschriftung sichtbar und eindeutig (3.3.2)",
    "KERN",
    "kern-label mit for/id im Beispiel"
   ],
   [
    "Fehler klar benannt, mit Lösung (3.3.1, 3.3.3)",
    "Anwendung",
    "Text der Fehlermeldung"
   ],
   [
    "Fehlerzusammenfassung als Statusmeldung (4.1.3)",
    "kern-neu.js",
    "form[data-kn-validate]: Liste mit role=alert und Fokus, Verweise ins Feld (M58)"
   ],
   [
    "Pflicht über aria-required, optional mit \"- Optional\"",
    "Anwendung",
    "Prüfung 16 meldet natives required"
   ]
  ],
  "tasten": [],
  "barriere": [
   "Ein <fieldset> mit <legend> — sonst hört man dreimal „Tag, Monat, Jahr“, ohne zu wissen, wozu.",
   "inputmode=\"numeric\" statt type=\"number\": kein Drehrad, aber die Zifferntastatur auf dem Telefon.",
   "Jedes Teilfeld hat eine eigene sichtbare Beschriftung."
  ],
  "klassen": [
   [
    "kern-fieldset",
    "Baustein"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-hint",
    "Baustein"
   ],
   [
    "kern-fieldset__body",
    "Bestandteil"
   ],
   [
    "kern-fieldset__body--horizontal",
    "Variante"
   ],
   [
    "kern-form-input",
    "Baustein"
   ],
   [
    "kern-form-input__input",
    "Bestandteil"
   ],
   [
    "kern-form-input__input--width-2",
    "Variante"
   ],
   [
    "kern-form-input__input--width-4",
    "Variante"
   ],
   [
    "kern-label__optional",
    "Bestandteil"
   ],
   [
    "kern-fieldset--error",
    "Variante"
   ],
   [
    "kern-form-input__input--error",
    "Variante"
   ],
   [
    "kern-error",
    "Baustein"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--danger",
    "Variante"
   ],
   [
    "kern-body",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-input-text-password",
  "name": "Input Password",
  "gruppe": "KERN · Formular",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/form-inputs/password",
  "zweck": "Ermöglicht die Eingabe oder Erstellung eines Passworts.",
  "synonyme": [
   "Passwort-Eingabefeld",
   "Passwortfeld",
   "Password input field"
  ],
  "aehnlich": [
   "Input Date",
   "Input E-Mail",
   "Input Text"
  ],
  "wann": [
   "Bei jeder Anmeldung.",
   "Der Anzeigen-Knopf ist keine Bequemlichkeit, sondern Barrierefreiheit: wer nicht blind tippen kann, braucht ihn."
  ],
  "nicht": [
   "Nicht für Kennungen, die kein Geheimnis sind.",
   "Niemals das Einfügen aus der Zwischenablage sperren — das treibt Menschen zu schlechteren Passwörtern."
  ],
  "bsp": [
   {
    "titel": "Default",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"password\">Passwort<\/label>\n    <div class=\"kern-input-group\">\n      <input\n        class=\"kern-form-input__input\"\n        id=\"password\"\n        name=\"password\"\n        type=\"password\"\n        autocomplete=\"current-password\"\n      />\n      <button class=\"kern-btn kern-btn--secondary\" type=\"button\" aria-pressed=\"false\">\n        <span class=\"kern-icon kern-icon--visibility-off\" aria-hidden=\"true\"><\/span>\n        <span class=\"kern-label kern-sr-only\">Passwort anzeigen<\/span>\n      <\/button>\n    <\/div>\n  <\/div>"
   },
   {
    "titel": "Hinweistext und Fehlermeldung",
    "html": "<div class=\"kern-form-input kern-form-input--error\">\n    <label class=\"kern-label\" for=\"password6\">Passwort<\/label>\n    <div class=\"kern-hint\" id=\"password-hint\">\n      Wählen Sie ein sicheres Passwort mit mindestens 10 Zeichen, inklusive ein Sonderzeichen und\n      eine Zahl.\n    <\/div>\n    <div class=\"kern-input-group\">\n      <input\n        class=\"kern-form-input__input kern-form-input__input--error\"\n        id=\"password6\"\n        name=\"password6\"\n        type=\"password\"\n        autocomplete=\"new-password\"\n        aria-invalid=\"true\"\n        aria-describedby=\"password-hint kern-input-error\"\n      />\n      <button class=\"kern-btn kern-btn--secondary\" type=\"button\" aria-pressed=\"false\">\n        <span class=\"kern-icon kern-icon--visibility-off\" aria-hidden=\"true\"><\/span>\n        <span class=\"kern-label kern-sr-only\">Passwort anzeigen<\/span>\n      <\/button>\n    <\/div>\n    <p class=\"kern-error\" id=\"kern-input-error\">\n      <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"><\/span>\n      <span class=\"kern-body\">Geben Sie ein Passwort ein, um fortzufahren.<\/span>\n    <\/p>\n  <\/div>"
   }
  ],
  "pflichten": [
   [
    "Anzeigen-Knopf mit aria-pressed schaltet",
    "kern-neu.js",
    "Beschriftung bleibt gleich (ARIA)"
   ],
   [
    "autocomplete current-/new-password",
    "KERN",
    "im Beispiel"
   ],
   [
    "Neutrale Anmeldefehler",
    "Anwendung",
    ""
   ],
   [
    "Beschriftung sichtbar und eindeutig (3.3.2)",
    "KERN",
    "kern-label mit for/id im Beispiel"
   ],
   [
    "Fehler klar benannt, mit Lösung (3.3.1, 3.3.3)",
    "Anwendung",
    "Text der Fehlermeldung"
   ],
   [
    "Fehlerzusammenfassung als Statusmeldung (4.1.3)",
    "kern-neu.js",
    "form[data-kn-validate]: Liste mit role=alert und Fokus, Verweise ins Feld (M58)"
   ],
   [
    "Pflicht über aria-required, optional mit \"- Optional\"",
    "Anwendung",
    "Prüfung 16 meldet natives required"
   ]
  ],
  "tasten": [
   [
    "Tab",
    "vom Feld zum Anzeigen-Knopf"
   ],
   [
    "Enter, Leertaste",
    "zeigt oder verbirgt das Passwort (kern-neu.js)"
   ]
  ],
  "barriere": [
   "Der Anzeigen-Knopf hat einen Namen für Hilfsmittel (kern-sr-only „Passwort anzeigen“); aria-pressed sagt, ob das Passwort gerade sichtbar ist.",
   "autocomplete current-password bzw. new-password, damit Passwortverwaltungen das Feld erkennen."
  ],
  "klassen": [
   [
    "kern-form-input",
    "Baustein"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-input-group",
    "Baustein"
   ],
   [
    "kern-form-input__input",
    "Bestandteil"
   ],
   [
    "kern-btn",
    "Baustein"
   ],
   [
    "kern-btn--secondary",
    "Variante"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--visibility-off",
    "Variante"
   ],
   [
    "kern-sr-only",
    "Baustein"
   ],
   [
    "kern-form-input--error",
    "Variante"
   ],
   [
    "kern-hint",
    "Baustein"
   ],
   [
    "kern-form-input__input--error",
    "Variante"
   ],
   [
    "kern-error",
    "Baustein"
   ],
   [
    "kern-icon--danger",
    "Variante"
   ],
   [
    "kern-icon--md",
    "Variante"
   ],
   [
    "kern-body",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-input-textarea",
  "name": "Input Textarea",
  "gruppe": "KERN · Formular",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/form-inputs/textarea",
  "zweck": "Ermöglicht eine Eingabe von langen Textinhalten durch Nutzende.",
  "synonyme": [
   "Textfeld",
   "Textarea",
   "multi-line text input",
   "mehrzeiliges Eingabefeld"
  ],
  "aehnlich": [
   "Input Text",
   "Input Date",
   "Input E-Mail",
   "Input Password"
  ],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Default",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"textarea\">Ortsbeschreibung<\/label>\n    <textarea class=\"kern-form-input__input\" id=\"textarea\" name=\"textarea\"><\/textarea><\/div\n>"
   },
   {
    "titel": "Readonly",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"textarea1\">Ortsbeschreibung<\/label>\n    <textarea\n      class=\"kern-form-input__input\"\n      id=\"textarea1\"\n      name=\"textarea1\"\n      value=\"Der Marktstand wird an der Ecke Kirchplatz und Jakobistraße aufgebaut, dort befinden sich auch die Stromanschlüsse.\"\n      readonly\n    >\nText<\/textarea>\n  <\/div>"
   },
   {
    "titel": "Disabled",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"textarea2\">Ortsbeschreibung<\/label>\n    <textarea\n      class=\"kern-form-input__input\"\n      id=\"textarea2\"\n      name=\"textarea2\"\n      value=\"Der Marktstand wird an der Ecke Kirchplatz und Jakobistraße aufgebaut, dort befinden sich auch die Stromanschlüsse.\"\n      disabled\n    ><\/textarea><\/div\n>"
   },
   {
    "titel": "Optional",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"textarea\"\n      >Ortsbeschreibung <span class=\"kern-label__optional\">- Optional<\/span><\/label\n    >\n    <textarea class=\"kern-form-input__input\" id=\"textarea\" name=\"textarea\"><\/textarea><\/div\n>"
   },
   {
    "titel": "Hinweistext und Fehlermeldung",
    "html": "<div class=\"kern-form-input kern-form-input--error\">\n    <label class=\"kern-label\" for=\"textarea3\">Ortsbeschreibung<\/label>\n    <div class=\"kern-hint\" id=\"textarea-hint\">\n      Ein Hinweis gibt Hilfestellung zum Format oder eine Begründung, warum diese Information\n      benötigt wird.\n    <\/div>\n    <textarea\n      class=\"kern-form-input__input kern-form-input__input--error\"\n      id=\"textarea3\"\n      name=\"textarea\"\n      aria-invalid=\"true\"\n      aria-describedby=\"textarea-hint textarea-error\"\n    ><\/textarea>\n    <p class=\"kern-error\" id=\"textarea-error\">\n      <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"><\/span>\n      <span class=\"kern-body\"\n        >Eine konstruktive Fehlermeldung vermittelt, was Nutzende tun können, um das Problem zu\n        lösen.<\/span\n      >\n    <\/p>\n  <\/div>"
   }
  ],
  "pflichten": [
   [
    "Größe veränderbar",
    "KERN",
    ""
   ],
   [
    "Beschriftung sichtbar und eindeutig (3.3.2)",
    "KERN",
    "kern-label mit for/id im Beispiel"
   ],
   [
    "Fehler klar benannt, mit Lösung (3.3.1, 3.3.3)",
    "Anwendung",
    "Text der Fehlermeldung"
   ],
   [
    "Fehlerzusammenfassung als Statusmeldung (4.1.3)",
    "kern-neu.js",
    "form[data-kn-validate]: Liste mit role=alert und Fokus, Verweise ins Feld (M58)"
   ],
   [
    "Pflicht über aria-required, optional mit \"- Optional\"",
    "Anwendung",
    "Prüfung 16 meldet natives required"
   ]
  ],
  "tasten": [],
  "barriere": [],
  "klassen": [
   [
    "kern-form-input",
    "Baustein"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-form-input__input",
    "Bestandteil"
   ],
   [
    "kern-label__optional",
    "Bestandteil"
   ],
   [
    "kern-form-input--error",
    "Variante"
   ],
   [
    "kern-hint",
    "Baustein"
   ],
   [
    "kern-form-input__input--error",
    "Variante"
   ],
   [
    "kern-error",
    "Baustein"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--danger",
    "Variante"
   ],
   [
    "kern-icon--md",
    "Variante"
   ],
   [
    "kern-body",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-input-select",
  "name": "Input Select",
  "gruppe": "KERN · Formular",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/form-inputs/select",
  "zweck": "Bietet die Möglichkeit zur Auswahl einer Option aus einer ausklappbaren Liste von Optionen.",
  "synonyme": [
   "Listenfeld",
   "Mehrzeilige Auswahlliste",
   "Listbox",
   "Ausklappliste",
   "Klappliste"
  ],
  "aehnlich": [
   "Radio",
   "Checkboxes"
  ],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Default",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"select\">Titel<\/label>\n    <div class=\"kern-form-input__select-wrapper\">\n      <select class=\"kern-form-input__select\" id=\"select\">\n        <option>Bitte auswählen<\/option>\n        <option>Dr.<\/option>\n        <option>Prof.<\/option>\n        <option>Dipl.-Ing.<\/option>\n        <option>M.Sc.<\/option>\n      <\/select>\n    <\/div>\n  <\/div>"
   },
   {
    "titel": "Disabled",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"select2\">Titel<\/label>\n    <div class=\"kern-form-input__select-wrapper\">\n      <select class=\"kern-form-input__select\" id=\"select2\" disabled>\n        <option>Bitte auswählen<\/option>\n        <option>Dr.<\/option>\n        <option>Prof.<\/option>\n        <option>Dipl.-Ing.<\/option>\n        <option>M.Sc.<\/option>\n      <\/select>\n    <\/div>\n  <\/div>"
   },
   {
    "titel": "Optional",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"select3\"\n      >Titel <span class=\"kern-label__optional\">- Optional<\/span><\/label\n    >\n    <div class=\"kern-form-input__select-wrapper\">\n      <select class=\"kern-form-input__select\" id=\"select3\">\n        <option>Bitte auswählen<\/option>\n        <option>Dr.<\/option>\n        <option>Prof.<\/option>\n        <option>Dipl.-Ing.<\/option>\n        <option>M.Sc.<\/option>\n      <\/select>\n    <\/div>\n  <\/div>"
   },
   {
    "titel": "Hinweistext und Fehlermeldung",
    "html": "<div class=\"kern-form-input kern-form-input--error\">\n    <label class=\"kern-label\" for=\"select4\">Titel<\/label>\n    <div class=\"kern-hint\" id=\"select-hint\">\n      Ein Hinweis gibt Hilfestellung zum Format oder eine Begründung, warum diese Information\n      benötigt wird.\n    <\/div>\n    <div class=\"kern-form-input__select-wrapper\">\n      <select\n        class=\"kern-form-input__select kern-form-input__select--error\"\n        id=\"select4\"\n        aria-invalid=\"true\"\n        aria-describedby=\"select-hint kern-input-error\"\n      >\n        <option>Bitte auswählen<\/option>\n        <option>Dr.<\/option>\n        <option>Prof.<\/option>\n        <option>Dipl.-Ing.<\/option>\n        <option>M.Sc.<\/option>\n      <\/select>\n    <\/div>\n    <p class=\"kern-error\" id=\"kern-input-error\">\n      <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"><\/span>\n      <span class=\"kern-body\"\n        >Eine konstruktive Fehlermeldung vermittelt, was Nutzende tun können, um das Problem zu\n        lösen.<\/span\n      >\n    <\/p>\n  <\/div>"
   }
  ],
  "pflichten": [
   [
    "5 bis 15 Optionen, sonst andere Form",
    "Anwendung",
    ""
   ],
   [
    "Fehlerzusammenfassung als Statusmeldung (4.1.3)",
    "kern-neu.js",
    "data-kn-validate, Gruppen mit data-kn-required (M58)"
   ]
  ],
  "tasten": [
   [
    "Pfeiltasten",
    "wählen (nativ)"
   ],
   [
    "Alt+Pfeil runter",
    "öffnet die Liste (nativ, je System)"
   ]
  ],
  "barriere": [],
  "klassen": [
   [
    "kern-form-input",
    "Baustein"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-form-input__select-wrapper",
    "Bestandteil"
   ],
   [
    "kern-form-input__select",
    "Bestandteil"
   ],
   [
    "kern-label__optional",
    "Bestandteil"
   ],
   [
    "kern-form-input--error",
    "Variante"
   ],
   [
    "kern-hint",
    "Baustein"
   ],
   [
    "kern-form-input__select--error",
    "Variante"
   ],
   [
    "kern-error",
    "Baustein"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--danger",
    "Variante"
   ],
   [
    "kern-icon--md",
    "Variante"
   ],
   [
    "kern-body",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-input-checkboxes",
  "name": "Input Checkboxes",
  "gruppe": "KERN · Formular",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/form-inputs/checkboxes",
  "zweck": "Dient der Auswahl einer oder mehrerer Optionen.",
  "synonyme": [
   "Kontrollkästchen",
   "Kontrollfeld",
   "Auswahlkästchen"
  ],
  "aehnlich": [
   "Radios"
  ],
  "wann": [
   "Für Möglichkeiten, die alle sichtbar sein sollen — mehrere zugleich wählbar."
  ],
  "nicht": [
   "Für viele Möglichkeiten: KERN nimmt die Auswahlliste für 5 bis 15; darüber eine Combobox mit Suche (kn-combobox)."
  ],
  "bsp": [
   {
    "titel": "Einzeln",
    "html": "<div class=\"kern-form-check\">\n<input class=\"kern-form-check__checkbox\" id=\"dsgvo1\" name=\"dsgvo1\" type=\"checkbox\">\n<label class=\"kern-label\" for=\"dsgvo1\">Ich akzeptiere die Datenschutzerklärung.<\/label>\n<\/div>"
   },
   {
    "titel": "Gruppe",
    "html": "<fieldset class=\"kern-fieldset\">\n<legend class=\"kern-label\">\n  Für welchen Zweck wollen Sie die Fläche nutzen?\n<\/legend>\n<div class=\"kern-fieldset__body\">\n  <div class=\"kern-form-check\">\n    <input class=\"kern-form-check__checkbox\" id=\"baumassnahme\" name=\"flaechennutzung\" type=\"checkbox\">\n    <label class=\"kern-label\" for=\"baumassnahme\">Baumaßnahme<\/label>\n  <\/div>\n  <div class=\"kern-form-check\">\n    <input class=\"kern-form-check__checkbox\" id=\"veranstaltungen\" name=\"flaechennutzung\" type=\"checkbox\">\n    <label class=\"kern-label\" for=\"veranstaltungen\">Veranstaltungen<\/label>\n  <\/div>\n  <div class=\"kern-form-check\">\n    <input class=\"kern-form-check__checkbox\" id=\"waren\" name=\"flaechennutzung\" type=\"checkbox\">\n    <label class=\"kern-label\" for=\"waren\">Anbieten von Waren und Leistungen<\/label>\n  <\/div>\n<\/div>\n<\/fieldset>"
   },
   {
    "titel": "Gruppe Optional",
    "html": "<fieldset class=\"kern-fieldset\">\n <legend class=\"kern-label\">\n  Für welchen Zweck wollen Sie die Fläche nutzen?\n   <span class=\"kern-label__optional\">- Optional<\/span>\n<\/legend>\n<div class=\"kern-fieldset__body\">\n  <div class=\"kern-form-check\">\n    <input class=\"kern-form-check__checkbox\" id=\"baumassnahme2\" name=\"flaechennutzung2\" type=\"checkbox\">\n    <label class=\"kern-label\" for=\"baumassnahme2\">Baumaßnahme<\/label>\n  <\/div>\n  <div class=\"kern-form-check\">\n    <input class=\"kern-form-check__checkbox\" id=\"veranstaltungen2\" name=\"flaechennutzung2\" type=\"checkbox\">\n    <label class=\"kern-label\" for=\"veranstaltungen2\">Veranstaltungen<\/label>\n  <\/div>\n  <div class=\"kern-form-check\">\n    <input class=\"kern-form-check__checkbox\" id=\"waren2\" name=\"flaechennutzung2\" type=\"checkbox\">\n    <label class=\"kern-label\" for=\"waren2\">Anbieten von Waren und Leistungen<\/label>\n  <\/div>\n<\/div>\n<\/fieldset>"
   },
   {
    "titel": "Gruppe mit Hinweistext und Fehlermeldung",
    "html": "<fieldset class=\"kern-fieldset kern-fieldset--error\" aria-describedby=\"hint-text1 kern-input-error1\">\n<legend class=\"kern-label\">\n  Für welchen Zweck wollen Sie die Fläche nutzen?\n<\/legend>\n<div class=\"kern-hint\" id=\"hint-text1\">Ein Hinweis gibt Hilfestellung zum Format oder eine Begründung, warum diese Information benötigt wird.<\/div>\n<div class=\"kern-fieldset__body\">\n  <div class=\"kern-form-check\">\n    <input class=\"kern-form-check__checkbox kern-form-check__checkbox--error\" id=\"baumassnahme1\" name=\"flaechennutzung1\" type=\"checkbox\" aria-invalid=\"true\">\n    <label class=\"kern-label\" for=\"baumassnahme1\">Baumaßnahme<\/label>\n  <\/div>\n  <div class=\"kern-form-check\">\n    <input class=\"kern-form-check__checkbox kern-form-check__checkbox--error\" id=\"veranstaltungen1\" name=\"flaechennutzung1\" type=\"checkbox\" aria-invalid=\"true\">\n    <label class=\"kern-label\" for=\"veranstaltungen1\">Veranstaltungen<\/label>\n  <\/div>\n  <div class=\"kern-form-check\">\n    <input class=\"kern-form-check__checkbox kern-form-check__checkbox--error\" id=\"waren1\" name=\"flaechennutzung1\" type=\"checkbox\" aria-invalid=\"true\">\n    <label class=\"kern-label\" for=\"waren1\">Anbieten von Waren und Leistungen<\/label>\n  <\/div>\n  <\/div>\n<\/div>\n<p class=\"kern-error\" id=\"kern-input-error1\">\n  <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-body\">Eine konstruktive Fehlermeldung vermittelt, was Nutzende tun können, um das Problem zu lösen.<\/span>\n<\/p>\n<\/fieldset>",
    "markup": {
     "offen": {},
     "zuviel": {
      "div": 1
     }
    }
   }
  ],
  "pflichten": [
   [
    "Gruppe in fieldset/legend",
    "KERN",
    ""
   ],
   [
    "Zustand nicht nur über Farbe",
    "KERN",
    "Häkchen"
   ],
   [
    "Fehlerzusammenfassung als Statusmeldung (4.1.3)",
    "kern-neu.js",
    "data-kn-validate, Gruppen mit data-kn-required (M58)"
   ]
  ],
  "tasten": [
   [
    "Leertaste",
    "schaltet (nativ)"
   ]
  ],
  "barriere": [
   "Gruppen immer in <fieldset> mit <legend> — sonst fehlt der Zusammenhang."
  ],
  "klassen": [
   [
    "kern-form-check",
    "Baustein"
   ],
   [
    "kern-form-check__checkbox",
    "Bestandteil"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-fieldset",
    "Baustein"
   ],
   [
    "kern-fieldset__body",
    "Bestandteil"
   ],
   [
    "kern-label__optional",
    "Bestandteil"
   ],
   [
    "kern-fieldset--error",
    "Variante"
   ],
   [
    "kern-hint",
    "Baustein"
   ],
   [
    "kern-form-check__checkbox--error",
    "Variante"
   ],
   [
    "kern-error",
    "Baustein"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--danger",
    "Variante"
   ],
   [
    "kern-icon--md",
    "Variante"
   ],
   [
    "kern-body",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-input-radios",
  "name": "Input Radios",
  "gruppe": "KERN · Formular",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/form-inputs/radios",
  "zweck": "Dienen der Auswahl nur einer Option aus sich gegenseitig ausschließenden Optionen.",
  "synonyme": [
   "Optionsfelder",
   "Auswahlschalter",
   "Radiobuttongruppe",
   "Radiobuttons",
   "Radio Buttons",
   "Radio Group"
  ],
  "aehnlich": [
   "Checkboxes"
  ],
  "wann": [
   "Für genau eine Wahl aus wenigen, sichtbaren Möglichkeiten. KERN bevorzugt Auswahlknöpfe vor der Auswahlliste."
  ],
  "nicht": [
   "Vorauswahl nur bei Einstellungen (KERN)."
  ],
  "bsp": [
   {
    "titel": "Default",
    "html": "<fieldset class=\"kern-fieldset\">\n    <legend class=\"kern-label\">Wo sind Sie aktuell gemeldet?<\/legend>\n    <div class=\"kern-fieldset__body\">\n      <div class=\"kern-form-check\">\n        <input class=\"kern-form-check__radio\" id=\"hamburg\" name=\"meldeadresse\" type=\"radio\" />\n        <label class=\"kern-label\" for=\"hamburg\">in Hamburg<\/label>\n      <\/div>\n      <div class=\"kern-form-check\">\n        <input class=\"kern-form-check__radio\" id=\"ausland\" name=\"meldeadresse\" type=\"radio\" />\n        <label class=\"kern-label\" for=\"ausland\">im Ausland<\/label>\n      <\/div>\n    <\/div>\n  <\/fieldset>"
   },
   {
    "titel": "Optional",
    "html": "<fieldset class=\"kern-fieldset\">\n    <legend class=\"kern-label\">\n      Wo sind Sie aktuell gemeldet?\n      <span class=\"kern-label__optional\">- Optional<\/span>\n    <\/legend>\n    <div class=\"kern-fieldset__body\">\n      <div class=\"kern-form-check\">\n        <input class=\"kern-form-check__radio\" id=\"hamburg\" name=\"meldeadresse\" type=\"radio\" />\n        <label class=\"kern-label\" for=\"hamburg\">in Hamburg<\/label>\n      <\/div>\n      <div class=\"kern-form-check\">\n        <input class=\"kern-form-check__radio\" id=\"ausland\" name=\"meldeadresse\" type=\"radio\" />\n        <label class=\"kern-label\" for=\"ausland\">im Ausland<\/label>\n      <\/div>\n    <\/div>\n  <\/fieldset>"
   },
   {
    "titel": "Hinweistext und Fehlermeldung",
    "html": "<fieldset\n    class=\"kern-fieldset kern-fieldset--error\"\n    aria-describedby=\"hint-text kern-input-error\"\n  >\n    <legend class=\"kern-label\">Wo sind Sie aktuell gemeldet?<\/legend>\n    <div class=\"kern-hint\" id=\"hint-text\">\n      Ein Hinweis gibt Hilfestellung zum Format oder eine Begründung, warum diese Information\n      benötigt wird.\n    <\/div>\n    <div class=\"kern-fieldset__body\">\n      <div class=\"kern-form-check\">\n        <input\n          class=\"kern-form-check__radio kern-form-check__radio--error\"\n          id=\"hamburg\"\n          name=\"meldeadresse\"\n          type=\"radio\"\n          aria-invalid=\"true\"\n        />\n        <label class=\"kern-label\" for=\"hamburg\">in Hamburg<\/label>\n      <\/div>\n      <div class=\"kern-form-check\">\n        <input\n          class=\"kern-form-check__radio kern-form-check__radio--error\"\n          id=\"ausland\"\n          name=\"meldeadresse\"\n          type=\"radio\"\n          aria-invalid=\"true\"\n        />\n        <label class=\"kern-label\" for=\"ausland\">im Ausland<\/label>\n      <\/div>\n    <\/div>\n    <p class=\"kern-error\" id=\"kern-input-error\">\n      <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"><\/span>\n      <span class=\"kern-body\"\n        >Eine konstruktive Fehlermeldung vermittelt, was Nutzende tun können, um das Problem zu\n        lösen.<\/span\n      >\n    <\/p>\n  <\/fieldset>"
   },
   {
    "titel": "Horizontale Ausrichtung",
    "html": "<fieldset class=\"kern-fieldset\">\n    <legend class=\"kern-label\">Wo sind Sie aktuell gemeldet?<\/legend>\n    <div class=\"kern-fieldset__body kern-fieldset__body--horizontal\">\n      <div class=\"kern-form-check\">\n        <input class=\"kern-form-check__radio\" id=\"hamburg\" name=\"meldeadresse\" type=\"radio\" />\n        <label class=\"kern-label\" for=\"hamburg\">in Hamburg<\/label>\n      <\/div>\n      <div class=\"kern-form-check\">\n        <input class=\"kern-form-check__radio\" id=\"ausland\" name=\"meldeadresse\" type=\"radio\" />\n        <label class=\"kern-label\" for=\"ausland\">im Ausland<\/label>\n      <\/div>\n    <\/div>\n  <\/fieldset>"
   }
  ],
  "pflichten": [
   [
    "Gruppe in fieldset/legend",
    "KERN",
    ""
   ],
   [
    "Vorauswahl nur bei Einstellungen",
    "Anwendung",
    ""
   ],
   [
    "Fehlerzusammenfassung als Statusmeldung (4.1.3)",
    "kern-neu.js",
    "data-kn-validate, Gruppen mit data-kn-required (M58)"
   ]
  ],
  "tasten": [
   [
    "Pfeiltasten",
    "wählen in der Gruppe (nativ)"
   ],
   [
    "Tab",
    "verlässt die Gruppe"
   ]
  ],
  "barriere": [
   "Gruppen immer in <fieldset> mit <legend>.",
   "Pfeiltasten wechseln die Wahl innerhalb der Gruppe; Tab verlässt sie."
  ],
  "klassen": [
   [
    "kern-fieldset",
    "Baustein"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-fieldset__body",
    "Bestandteil"
   ],
   [
    "kern-form-check",
    "Baustein"
   ],
   [
    "kern-form-check__radio",
    "Bestandteil"
   ],
   [
    "kern-label__optional",
    "Bestandteil"
   ],
   [
    "kern-fieldset--error",
    "Variante"
   ],
   [
    "kern-hint",
    "Baustein"
   ],
   [
    "kern-form-check__radio--error",
    "Variante"
   ],
   [
    "kern-error",
    "Baustein"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--danger",
    "Variante"
   ],
   [
    "kern-icon--md",
    "Variante"
   ],
   [
    "kern-body",
    "Baustein"
   ],
   [
    "kern-fieldset__body--horizontal",
    "Variante"
   ]
  ]
 },
 {
  "id": "kern-input-file",
  "name": "Input File",
  "gruppe": "KERN · Formular",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/form-inputs/file",
  "zweck": "Ermöglicht das Hochladen einer oder mehrerer Dateien.",
  "synonyme": [
   "Upload",
   "File input",
   "File uploader",
   "File upload"
  ],
  "aehnlich": [],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Default",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"input-file\">Datei hochladen<\/label>\n    <div class=\"kern-hint\" id=\"input-file-hint\">\n      Erlaubte Formate: JPG, PNG, PDF. Maximale Dateigröße ist 350 MB.\n    <\/div>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"input-file\"\n      name=\"inputFile\"\n      type=\"file\"\n      aria-describedby=\"input-file-hint\"\n    /><\/div\n>"
   },
   {
    "titel": "Disabled",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"input-file4\">Datei hochladen<\/label>\n    <div class=\"kern-hint\" id=\"input-file-hint4\">\n      Erlaubte Formate: JPG, PNG, PDF. Maximale Dateigröße ist 350 MB.\n    <\/div>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"input-file4\"\n      name=\"inputFile\"\n      type=\"file\"\n      disabled\n      aria-describedby=\"input-file-hint4\"\n    /><\/div\n>"
   },
   {
    "titel": "Optional",
    "html": "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"input-file6\"\n      >Datei hochladen\n      <span class=\"kern-label__optional\">- Optional<\/span>\n    <\/label>\n    <div class=\"kern-hint\" id=\"input-file-hint6\">\n      Erlaubte Formate: JPG, PNG, PDF. Maximale Dateigröße ist 350 MB.\n    <\/div>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"input-file6\"\n      name=\"inputFile\"\n      type=\"file\"\n      aria-describedby=\"input-file-hint6\"\n    /><\/div\n>"
   },
   {
    "titel": "Fehlermeldung",
    "html": "<div class=\"kern-form-input kern-form-input--error\">\n    <label class=\"kern-label\" for=\"input-file5\">Datei hochladen<\/label>\n    <div class=\"kern-hint\" id=\"input-file-hint5\">\n      Erlaubte Formate: JPG, PNG, PDF. Maximale Dateigröße ist 350 MB.\n    <\/div>\n    <input\n      class=\"kern-form-input__input kern-form-input__input--error\"\n      id=\"input-file5\"\n      name=\"inputFile\"\n      type=\"file\"\n      aria-invalid=\"true\"\n      aria-describedby=\"input-file-hint5 input-file-error5\"\n    />\n    <p class=\"kern-error\" id=\"input-file-error5\">\n      <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"><\/span>\n      <span class=\"kern-body\"\n        >Die Datei ist zu groß. Bitte laden Sie eine Datei mit maximal 350 MB hoch.<\/span\n      >\n    <\/p>\n  <\/div>"
   }
  ],
  "pflichten": [
   [
    "Erlaubte Formate und Größe im Hinweis",
    "Anwendung",
    ""
   ],
   [
    "Hochladestatus programmatisch melden (4.1.3)",
    "Anwendung",
    "über KN.melde bzw. KN.lade (M57, M61)"
   ]
  ],
  "tasten": [
   [
    "Enter, Leertaste",
    "öffnet die Dateiauswahl (nativ)"
   ]
  ],
  "barriere": [],
  "klassen": [
   [
    "kern-form-input",
    "Baustein"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-hint",
    "Baustein"
   ],
   [
    "kern-form-input__input",
    "Bestandteil"
   ],
   [
    "kern-label__optional",
    "Bestandteil"
   ],
   [
    "kern-form-input--error",
    "Variante"
   ],
   [
    "kern-form-input__input--error",
    "Variante"
   ],
   [
    "kern-error",
    "Baustein"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--danger",
    "Variante"
   ],
   [
    "kern-icon--md",
    "Variante"
   ],
   [
    "kern-body",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-fieldset",
  "name": "Fieldset",
  "gruppe": "KERN · Formular",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/fieldset",
  "zweck": "Gruppiert zusammengehörige Formularfelder und kann eine Hierarchie aufbauen.",
  "synonyme": [
   "Formulargruppe",
   "Eingabebereich",
   "Formularabschnitt"
  ],
  "aehnlich": [],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Gruppierte Formularfelder",
    "html": "<fieldset class=\"kern-fieldset\">\n<legend class=\"kern-label kern-label--large\">\n  Ansprechpartner\n<\/legend>\n<div class=\"kern-fieldset__body\">\n  <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"vorname\">Vorname<\/label>\n    <input class=\"kern-form-input__input\" id=\"vorname\" name=\"vorname\" type=\"text\">\n  <\/div>\n  <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"name\">Familienname<\/label>\n    <input class=\"kern-form-input__input\" id=\"name\" name=\"name\" type=\"text\">\n  <\/div>\n<div>\n<\/fieldset>",
    "markup": {
     "offen": {
      "div": 2
     },
     "zuviel": {}
    }
   },
   {
    "titel": "Hinweistext und Fehlermeldung",
    "html": "<fieldset class=\"kern-fieldset kern-fieldset--error\" aria-describedby=\"hint-text kern-error\">\n<legend class=\"kern-label kern-label--large\">\n  Ansprechpartner\n<\/legend>\n<div class=\"kern-hint\" id=\"hint-text\">Ein Hinweis gibt Hilfestellung zum Format oder eine Begründung, warum diese Information benötigt wird.<\/div>\n<div class=\"kern-fieldset__body\">\n  <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"vorname\">Vorname<\/label>\n    <input class=\"kern-form-input__input\" id=\"vorname\" name=\"vorname\" type=\"text\" aria-describedby=\"kern-error\">\n  <\/div>\n  <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"name\">Familienname<\/label>\n    <input class=\"kern-form-input__input kern-form-input__input--error\" id=\"name\" name=\"name\" type=\"text\" aria-invalid=\"true\" aria-describedby=\"kern-error\">\n  <\/div>\n<\/div>\n<p class=\"kern-error\" id=\"kern-error\">\n  <span class=\"kern-icon kern-icon--danger\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-body\">Eine konstruktive Fehlermeldung vermittelt, was Nutzende tun können, um das Problem zu lösen.<\/span>\n<\/p>\n<\/fieldset>"
   },
   {
    "titel": "Horizontale Ausrichtung",
    "html": "<fieldset class=\"kern-fieldset\">\n<legend class=\"kern-label\">\nWo sind Sie aktuell gemeldet?\n<\/legend>\n<div class=\"kern-fieldset__body kern-fieldset__body--horizontal\">\n<div class=\"kern-form-check\">\n  <input class=\"kern-form-check__radio\" id=\"hamburg\" name=\"meldeadresse\" type=\"radio\">\n  <label class=\"kern-label\" for=\"hamburg\">in Hamburg<\/label>\n<\/div>\n<div class=\"kern-form-check\">\n  <input class=\"kern-form-check__radio\" id=\"ausland\" name=\"meldeadresse\" type=\"radio\">\n  <label class=\"kern-label\" for=\"ausland\">im Ausland<\/label>\n<\/div>\n<div>\n<\/fieldset>",
    "markup": {
     "offen": {
      "div": 2
     },
     "zuviel": {}
    }
   }
  ],
  "pflichten": [
   [
    "Aussagekräftige Legende",
    "KERN",
    "legend im Beispiel"
   ],
   [
    "Nicht verschachteln, nicht für ein einzelnes Feld",
    "Anwendung",
    ""
   ]
  ],
  "tasten": [],
  "barriere": [],
  "klassen": [
   [
    "kern-fieldset",
    "Baustein"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-label--large",
    "Variante"
   ],
   [
    "kern-fieldset__body",
    "Bestandteil"
   ],
   [
    "kern-form-input",
    "Baustein"
   ],
   [
    "kern-form-input__input",
    "Bestandteil"
   ],
   [
    "kern-fieldset--error",
    "Variante"
   ],
   [
    "kern-hint",
    "Baustein"
   ],
   [
    "kern-form-input__input--error",
    "Variante"
   ],
   [
    "kern-error",
    "Baustein"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--danger",
    "Variante"
   ],
   [
    "kern-body",
    "Baustein"
   ],
   [
    "kern-fieldset__body--horizontal",
    "Variante"
   ],
   [
    "kern-form-check",
    "Baustein"
   ],
   [
    "kern-form-check__radio",
    "Bestandteil"
   ]
  ]
 },
 {
  "id": "kern-search",
  "name": "Search",
  "gruppe": "KERN · Formular",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/search",
  "zweck": "Ermöglicht es Nutzenden, Inhalte und Informationen mithilfe eines Suchbegriffs schnell zu finden.",
  "synonyme": [
   "Suche",
   "Suchfeld",
   "Search Field",
   "Search Input",
   "Search Box",
   "Suchbox"
  ],
  "aehnlich": [
   "Input Text",
   "Button",
   "Input Group"
  ],
  "wann": [
   "Überall, wo in einer Menge gesucht wird — Vorgänge, Nachweise, Personen."
  ],
  "nicht": [
   "Nicht für das Filtern einer kurzen, sichtbaren Liste. Dafür reichen Filtermarken (kn-filter-tag).",
   "Der Platzhaltertext ersetzt keine Beschriftung."
  ],
  "bsp": [
   {
    "titel": "Search mit Label",
    "html": "<search class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"search-input-with-label\">Suche<\/label>\n    <div class=\"kern-input-group\">\n      <input\n        class=\"kern-form-input__input\"\n        id=\"search-input-with-label\"\n        name=\"search\"\n        type=\"search\"\n      />\n      <button class=\"kern-btn kern-btn--primary\">\n        <span class=\"kern-icon kern-icon--search\" aria-hidden=\"true\"><\/span>\n        <span class=\"kern-label\">Suchen<\/span>\n      <\/button>\n    <\/div>\n  <\/search>"
   },
   {
    "titel": "Search mit Label und Icon-Only Button",
    "html": "<search class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"search-input-icon-only\">Suche<\/label>\n    <div class=\"kern-input-group\">\n      <input\n        class=\"kern-form-input__input\"\n        id=\"search-input-icon-only\"\n        name=\"search\"\n        type=\"search\"\n      />\n      <button class=\"kern-btn kern-btn--primary\">\n        <span class=\"kern-icon kern-icon--search\" aria-hidden=\"true\"><\/span>\n        <span class=\"kern-label kern-sr-only\">Suchen<\/span>\n      <\/button>\n    <\/div>\n  <\/search>"
   },
   {
    "titel": "Search ohne Label",
    "html": "<search class=\"kern-input-group\">\n    <input\n      class=\"kern-form-input__input\"\n      id=\"search-input-without-label\"\n      name=\"search\"\n      type=\"search\"\n      aria-label=\"Suche\"\n    />\n    <button class=\"kern-btn kern-btn--primary\">\n      <span class=\"kern-icon kern-icon--search\" aria-hidden=\"true\"><\/span>\n      <span class=\"kern-label\">Suchen<\/span>\n    <\/button>\n  <\/search>"
   }
  ],
  "pflichten": [
   [
    "Bereich als <search> mit Namen",
    "KERN",
    "search mit aria-label im Beispiel"
   ],
   [
    "Suchbegriff bleibt nach dem Absenden stehen",
    "Anwendung",
    ""
   ]
  ],
  "tasten": [
   [
    "Enter",
    "sendet die Suche (nativ)"
   ]
  ],
  "barriere": [
   "type=\"search\" — Hilfsmittel kündigen das Feld dann als Suche an.",
   "KERN: Beschriftung sichtbar; nur die globale Suche im Seitenkopf darf sie verbergen (kern-sr-only).",
   "Ein Knopf mit Lupe allein braucht einen Namen (kern-sr-only)."
  ],
  "klassen": [
   [
    "kern-form-input",
    "Baustein"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-input-group",
    "Baustein"
   ],
   [
    "kern-form-input__input",
    "Bestandteil"
   ],
   [
    "kern-btn",
    "Baustein"
   ],
   [
    "kern-btn--primary",
    "Variante"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--search",
    "Variante"
   ],
   [
    "kern-sr-only",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-accordion",
  "name": "Accordion",
  "gruppe": "KERN · Inhalt",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/accordion",
  "zweck": "Fasst Informationen in Überschriften zusammen und ermöglicht das Ein- und Ausblenden der zugehörigen Inhalte.",
  "synonyme": [
   "Expansion Panel",
   "Collapse",
   "Akkordeon"
  ],
  "aehnlich": [
   "Tabs"
  ],
  "wann": [
   "Für Zusatzerklärungen, häufige Fragen, seltene Angaben."
  ],
  "nicht": [
   "Für Pflichtangaben. Was alle ausfüllen müssen, darf nicht verborgen sein.",
   "Nie für Fehlermeldungen."
  ],
  "bsp": [
   {
    "titel": "Einzeln",
    "html": "<details class=\"kern-accordion\">\n    <summary class=\"kern-accordion__header\">\n      <span class=\"kern-title\">Welche Voraussetzungen muss ich erfüllen?<\/span>\n    <\/summary>\n    <section class=\"kern-accordion__body\">\n      <p class=\"kern-body\">Zur Nutzung dieses Dienstes benötigen Sie ein einfaches Servicekonto.<\/p>\n    <\/section>\n  <\/details>"
   },
   {
    "titel": "Gruppe",
    "html": "<div class=\"kern-accordion-group\">\n    <details class=\"kern-accordion\">\n      <summary class=\"kern-accordion__header\">\n        <span class=\"kern-title\">Welche Voraussetzungen muss ich erfüllen?<\/span>\n      <\/summary>\n      <section class=\"kern-accordion__body\">\n        <p class=\"kern-body\">\n          Zur Nutzung dieses Dienstes benötigen Sie ein einfaches Servicekonto.\n        <\/p>\n      <\/section>\n    <\/details>\n\n    <details class=\"kern-accordion\">\n      <summary class=\"kern-accordion__header\">\n        <span class=\"kern-title\">Wie hoch sind die Kosten?<\/span>\n      <\/summary>\n      <section class=\"kern-accordion__body\">\n        <p class=\"kern-body\">\n          Die Online-Anmeldung kostet 31 Euro (ab 2024). Damit sparen Sie gegenüber der klassischen\n          Anmeldung im Bezirksamt erheblich.\n        <\/p>\n      <\/section>\n    <\/details>\n\n    <details class=\"kern-accordion\">\n      <summary class=\"kern-accordion__header\">\n        <span class=\"kern-title\">Wie lange dauert der Prozess?<\/span>\n      <\/summary>\n      <section class=\"kern-accordion__body\">\n        <p class=\"kern-body\">Etwa 10 Minuten.<\/p>\n      <\/section>\n    <\/details>\n  <\/div>"
   },
   {
    "titel": "Geöffnet",
    "html": "<details class=\"kern-accordion\" open>\n    <summary class=\"kern-accordion__header\">\n      <span class=\"kern-title\">Wie lange dauert der Prozess?<\/span>\n    <\/summary>\n    <section class=\"kern-accordion__body\">\n      <p class=\"kern-body\">Etwa 10 Minuten.<\/p>\n    <\/section>\n  <\/details>"
   }
  ],
  "pflichten": [
   [
    "Bedienung mit Enter/Leertaste",
    "nativ",
    "details/summary"
   ],
   [
    "Kopfzeile eindeutig beschriften (3.3.2)",
    "Anwendung",
    ""
   ],
   [
    "Nicht verschachteln, nicht automatisch schließen",
    "Anwendung",
    ""
   ]
  ],
  "tasten": [
   [
    "Tab",
    "erreicht die Kopfzeile"
   ],
   [
    "Enter, Leertaste",
    "öffnet und schließt (nativ)"
   ]
  ],
  "barriere": [
   "Natives <details>/<summary>: Zustand und Tastatur (Enter, Leertaste) liefert der Browser — ohne ARIA und ohne Skript."
  ],
  "klassen": [
   [
    "kern-accordion",
    "Baustein"
   ],
   [
    "kern-accordion__header",
    "Bestandteil"
   ],
   [
    "kern-title",
    "Baustein"
   ],
   [
    "kern-accordion__body",
    "Bestandteil"
   ],
   [
    "kern-body",
    "Baustein"
   ],
   [
    "kern-accordion-group",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-card",
  "name": "Card",
  "gruppe": "KERN · Inhalt",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/card",
  "zweck": "Zeigt zusammengehörige Inhalte kompakt in einem visuell abgegrenzten Bereich, oft mit Titel, Bild und Aktionen.",
  "synonyme": [
   "Karte",
   "Kachel",
   "Content-Box"
  ],
  "aehnlich": [
   "Dialog"
  ],
  "wann": [
   "Für gleichrangige Einheiten nebeneinander."
  ],
  "nicht": [
   "Für Fließtext. Karten um alles herum machen eine Seite unruhig."
  ],
  "bsp": [
   {
    "titel": "Varianten",
    "html": "<div class=\"kern-container\">\n    <div class=\"kern-row\">\n      <div class=\"kern-col-xl-4 kern-col-sm-12\">\n        <article class=\"kern-card\">\n          <div class=\"kern-card__media\">\n            <img src=\"/img/kern-img-media.png\" alt=\"ALT Text\" />\n          <\/div>\n          <div class=\"kern-card__container\">\n            <header class=\"kern-card__header\">\n              <hgroup class=\"kern-hgroup\">\n                <h2 class=\"kern-title\" id=\"card-heading-1\">Default<\/h2>\n                <p class=\"kern-preline\">Vorzeile<\/p>\n                <p class=\"kern-subline\">Unterzeile<\/p>\n              <\/hgroup>\n            <\/header>\n            <section class=\"kern-card__body\">\n              <p class=\"kern-body\">\n                Hier werden soviele Informationen zur Verfügung gestellt, wie benötigt und nicht\n                mehr. Ein Maximum von 150 characters empfohlen.\n              <\/p>\n            <\/section>\n            <footer class=\"kern-card__footer\">\n              <button class=\"kern-btn kern-btn--primary\" aria-describedby=\"card-heading-1\">\n                <span class=\"kern-label\">Primäraktion<\/span>\n              <\/button>\n              <button class=\"kern-btn kern-btn--secondary\" aria-describedby=\"card-heading-1\">\n                <span class=\"kern-label\">Aktion<\/span>\n              <\/button>\n            <\/footer>\n          <\/div>\n        <\/article>\n      <\/div>\n      <div class=\"kern-col-xl-4 kern-col-sm-12\">\n        <article class=\"kern-card kern-card--interactive\">\n          <div class=\"kern-card__media\">\n            <img src=\"/img/kern-img-media.png\" alt=\"ALT Text\" />\n          <\/div>\n          <div class=\"kern-card__container\">\n            <header class=\"kern-card__header\">\n              <hgroup class=\"kern-hgroup\">\n                <h2 class=\"kern-title\"><a href=\"#\" class=\"kern-link--stretched\">Interaktiv<\/a><\/h2>\n                <p class=\"kern-preline\">Vorzeile<\/p>\n                <p class=\"kern-subline\">Unterzeile<\/p>\n              <\/hgroup>\n            <\/header>\n            <section class=\"kern-card__body\">\n              <p class=\"kern-body\">\n                Hier werden soviele Informationen zur Verfügung gestellt, wie benötigt und nicht\n                mehr. Ein Maximum von 150 characters empfohlen.\n              <\/p>\n            <\/section>\n          <\/div>\n        <\/article>\n      <\/div>\n      <div class=\"kern-col-xl-4 kern-col-sm-12\">\n        <article class=\"kern-card\">\n          <div class=\"kern-card__media\">\n            <img src=\"/img/kern-img-media.png\" alt=\"ALT Text\" />\n          <\/div>\n          <div class=\"kern-card__container\">\n            <header class=\"kern-card__header\">\n              <hgroup class=\"kern-hgroup\">\n                <h2 class=\"kern-title\">Info<\/h2>\n                <p class=\"kern-preline\">Vorzeile<\/p>\n                <p class=\"kern-subline\">Unterzeile<\/p>\n              <\/hgroup>\n            <\/header>\n            <section class=\"kern-card__body\">\n              <p class=\"kern-body\">\n                Hier werden soviele Informationen zur Verfügung gestellt, wie benötigt und nicht\n                mehr. Ein Maximum von 150 characters empfohlen.\n              <\/p>\n            <\/section>\n          <\/div>\n        <\/article>\n      <\/div>\n    <\/div>\n  <\/div>\n  <style>\n    @media (max-width: 768px) {\n      .kern-card {\n        width: 100%;\n      }\n    }\n  <\/style>"
   },
   {
    "titel": "Größen",
    "html": "<div class=\"kern-container\">\n    <div class=\"kern-row\">\n      <div class=\"kern-col-xl-4 kern-col-sm-12\">\n        <article class=\"kern-card kern-card--interactive kern-card--small\">\n          <div class=\"kern-card__media\">\n            <img src=\"/img/kern-img-media.png\" alt=\"ALT Text\" />\n            <!-- max-width is just an example and should be removed, the width is solved with grid system -->\n          <\/div>\n          <div class=\"kern-card__container\">\n            <header class=\"kern-card__header\">\n              <hgroup class=\"kern-hgroup\">\n                <h2 class=\"kern-title\">\n                  <a href=\"#\" class=\"kern-link--stretched\">Card Größe small<\/a>\n                <\/h2>\n                <p class=\"kern-preline\">Vorzeile<\/p>\n                <p class=\"kern-subline\">Unterzeile<\/p>\n              <\/hgroup>\n            <\/header>\n            <section class=\"kern-card__body\">\n              <p class=\"kern-body\">\n                Hier werden soviele Informationen zur Verfügung gestellt, wie benötigt und nicht\n                mehr. Ein Maximum von 150 characters empfohlen.\n              <\/p>\n            <\/section>\n          <\/div>\n        <\/article>\n      <\/div>\n      <div class=\"kern-col-xl-4 kern-col-sm-12\">\n        <article class=\"kern-card kern-card--interactive\">\n          <div class=\"kern-card__media\">\n            <img src=\"/img/kern-img-media.png\" alt=\"ALT Text\" />\n          <\/div>\n          <div class=\"kern-card__container\">\n            <header class=\"kern-card__header\">\n              <hgroup class=\"kern-hgroup\">\n                <h2 class=\"kern-title\">\n                  <a href=\"#\" class=\"kern-link--stretched\">Card Größe default<\/a>\n                <\/h2>\n                <p class=\"kern-preline\">Vorzeile<\/p>\n                <p class=\"kern-subline\">Unterzeile<\/p>\n              <\/hgroup>\n            <\/header>\n            <section class=\"kern-card__body\">\n              <p class=\"kern-body\">\n                Hier werden soviele Informationen zur Verfügung gestellt, wie benötigt und nicht\n                mehr. Ein Maximum von 150 characters empfohlen.\n              <\/p>\n            <\/section>\n          <\/div>\n        <\/article>\n      <\/div>\n      <div class=\"kern-col-xl-4 kern-col-sm-12\">\n        <article class=\"kern-card kern-card--interactive kern-card--large\">\n          <div class=\"kern-card__media\">\n            <img src=\"/img/kern-img-media.png\" alt=\"ALT Text\" />\n          <\/div>\n          <div class=\"kern-card__container\">\n            <header class=\"kern-card__header\">\n              <hgroup class=\"kern-hgroup\">\n                <h2 class=\"kern-title\">\n                  <a href=\"#\" class=\"kern-link--stretched\">Card Größe large<\/a>\n                <\/h2>\n                <p class=\"kern-preline\">Vorzeile<\/p>\n                <p class=\"kern-subline\">Unterzeile<\/p>\n              <\/hgroup>\n            <\/header>\n            <section class=\"kern-card__body\">\n              <p class=\"kern-body\">\n                Hier werden soviele Informationen zur Verfügung gestellt, wie benötigt und nicht\n                mehr. Ein Maximum von 150 characters empfohlen.\n              <\/p>\n            <\/section>\n          <\/div>\n        <\/article>\n      <\/div>\n    <\/div>\n  <\/div>"
   }
  ],
  "pflichten": [
   [
    "Passende Überschriftenebene",
    "Anwendung",
    "hgroup/h* im Beispiel, Ebene je Seite"
   ],
   [
    "Bildalternative",
    "Anwendung",
    ""
   ],
   [
    "Bedienelemente mind. 44 × 44 px",
    "KERN",
    ""
   ]
  ],
  "tasten": [],
  "barriere": [
   "Eine klickbare Karte (kern-card--interactive) ist EIN Link — nicht mehrere darin. Sonst weiß niemand, was der Klick tut."
  ],
  "klassen": [
   [
    "kern-container",
    "Baustein"
   ],
   [
    "kern-row",
    "Baustein"
   ],
   [
    "kern-col-xl-4",
    "Baustein"
   ],
   [
    "kern-col-sm-12",
    "Baustein"
   ],
   [
    "kern-card",
    "Baustein"
   ],
   [
    "kern-card__media",
    "Bestandteil"
   ],
   [
    "kern-card__container",
    "Bestandteil"
   ],
   [
    "kern-card__header",
    "Bestandteil"
   ],
   [
    "kern-hgroup",
    "Baustein"
   ],
   [
    "kern-title",
    "Baustein"
   ],
   [
    "kern-preline",
    "Baustein"
   ],
   [
    "kern-subline",
    "Baustein"
   ],
   [
    "kern-card__body",
    "Bestandteil"
   ],
   [
    "kern-body",
    "Baustein"
   ],
   [
    "kern-card__footer",
    "Bestandteil"
   ],
   [
    "kern-btn",
    "Baustein"
   ],
   [
    "kern-btn--primary",
    "Variante"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-btn--secondary",
    "Variante"
   ],
   [
    "kern-card--interactive",
    "Variante"
   ],
   [
    "kern-link--stretched",
    "Variante"
   ],
   [
    "kern-card--small",
    "Variante"
   ],
   [
    "kern-card--large",
    "Variante"
   ]
  ]
 },
 {
  "id": "kern-description-list",
  "name": "Description List",
  "gruppe": "KERN · Inhalt",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/descriptionlist",
  "zweck": "Strukturiert die Darstellung von Begriffen und deren Definitionen.",
  "synonyme": [
   "Definitionsliste",
   "Begriffsliste",
   "Beschreibungsliste"
  ],
  "aehnlich": [
   "Accordion"
  ],
  "wann": [
   "Für alles, was zu einem Vorgang feststeht: Aktenzeichen, Darlehenssumme, Frist — wenn nichts davon bearbeitet wird."
  ],
  "nicht": [
   "Wenn Werte änderbar sein sollen — dafür Summary mit Ändern-Link je Zeile.",
   "Für Vergleiche zwischen mehreren Fällen. Das ist eine Tabelle."
  ],
  "bsp": [
   {
    "titel": "Default",
    "html": "<dl class=\"kern-description-list\">\n    <div class=\"kern-description-list-item\">\n      <dt class=\"kern-description-list-item__key\">Name<\/dt>\n      <dd class=\"kern-description-list-item__value\">Musterperson<\/dd>\n    <\/div>\n    <div class=\"kern-description-list-item\">\n      <dt class=\"kern-description-list-item__key\">Vorname<\/dt>\n      <dd class=\"kern-description-list-item__value\">Kim<\/dd>\n    <\/div>\n    <div class=\"kern-description-list-item\">\n      <dt class=\"kern-description-list-item__key\">E-Mail<\/dt>\n      <dd class=\"kern-description-list-item__value\">kim@musterperson.de<\/dd>\n    <\/div>\n    <div class=\"kern-description-list-item\">\n      <dt class=\"kern-description-list-item__key\">Adresse<\/dt>\n      <dd class=\"kern-description-list-item__value\">Musterstraße 2, 23456 Musterstadt<\/dd>\n    <\/div>\n  <\/dl>"
   },
   {
    "titel": "Column",
    "html": "<dl class=\"kern-description-list kern-description-list--col\">\n    <div class=\"kern-description-list-item\">\n      <dt class=\"kern-description-list-item__key\">Bürgerämter<\/dt>\n      <dd class=\"kern-description-list-item__value\">\n        Zuständig für Bürgerservices wie Anmeldungen, Ausweisangelegenheiten, Eheschließungen und\n        Geburten oder Anträge für Veranstaltungen.\n      <\/dd>\n    <\/div>\n    <div class=\"kern-description-list-item\">\n      <dt class=\"kern-description-list-item__key\">Bezirksregierungen<\/dt>\n      <dd class=\"kern-description-list-item__value\">\n        Wichtige Verwaltungseinheiten in einigen deutschen Bundesländern, die als Mittler zwischen\n        der Landesregierung und den Kommunen fungieren. \n      <\/dd>\n    <\/div>\n    <div class=\"kern-description-list-item\">\n      <dt class=\"kern-description-list-item__key\">Bundesagentur für Arbeit<\/dt>\n      <dd class=\"kern-description-list-item__value\">\n        Ist eine zentrale Institution auf dem deutschen Arbeitsmarkt mit vielfältigen Aufgaben und\n        Dienstleistungen wie Arbeitsvermittlung und Arbeitslosenversicherung, Berufsberatung oder\n        Aus- und Weiterbildung.\n      <\/dd>\n    <\/div>\n  <\/dl>"
   }
  ],
  "pflichten": [
   [
    "Begriff und Beschreibung zuordenbar",
    "nativ",
    "dl/dt/dd"
   ]
  ],
  "tasten": [],
  "barriere": [
   "Eine echte <dl> mit <dt> und <dd> — Screenreader lesen dann Paare, nicht zwei Spalten.",
   "Beträge mit gleich breiten Ziffern — KERN setzt tabellarische Ziffern seitenweit."
  ],
  "klassen": [
   [
    "kern-description-list",
    "Baustein"
   ],
   [
    "kern-description-list-item",
    "Baustein"
   ],
   [
    "kern-description-list-item__key",
    "Bestandteil"
   ],
   [
    "kern-description-list-item__value",
    "Bestandteil"
   ],
   [
    "kern-description-list--col",
    "Variante"
   ]
  ]
 },
 {
  "id": "kern-table",
  "name": "Table",
  "gruppe": "KERN · Inhalt",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/table",
  "zweck": "Stellt Daten tabellarisch dar für schnellen Vergleich und Überblick.",
  "synonyme": [
   "Tabelle",
   "DataTable"
  ],
  "aehnlich": [
   "Description List",
   "Summary"
  ],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Varianten",
    "html": "<table class=\"kern-table\">\n    <caption class=\"kern-title\">\n      Table default\n    <\/caption>\n\n    <thead class=\"kern-table__head\">\n      <tr class=\"kern-table__row\">\n        <th scope=\"col\" class=\"kern-table__header\">Dienstleistung<\/th>\n        <th scope=\"col\" class=\"kern-table__header\">Gebühr 2025<\/th>\n        <th scope=\"col\" class=\"kern-table__header kern-table__header--numeric\">Erhöhung<\/th>\n      <\/tr>\n    <\/thead>\n\n    <tbody class=\"kern-table__body\">\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\">Hausmüllentsorgung<\/th>\n        <td class=\"kern-table__cell\">3,30 € pro Liter (wöchentliche Leerung)<\/td>\n        <td class=\"kern-table__cell kern-table__cell--numeric\">4,8%<\/td>\n      <\/tr>\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\">Reinigung öffentlicher Wege<\/th>\n        <td class=\"kern-table__cell\">2,69 € pro m<\/td>\n        <td class=\"kern-table__cell kern-table__cell--numeric\">5,6%<\/td>\n      <\/tr>\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\">Schmutzwasserbeseitigung<\/th>\n        <td class=\"kern-table__cell\">2,41 € pro Kubikmeter<\/td>\n        <td class=\"kern-table__cell kern-table__cell--numeric\">4,3%<\/td>\n      <\/tr>\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\">Niederschlagswasserbeseitigung<\/th>\n        <td class=\"kern-table__cell\">0,83 € pro m² befestigter Fläche<\/td>\n        <td class=\"kern-table__cell kern-table__cell--numeric\">3,7%<\/td>\n      <\/tr>\n    <\/tbody>\n  <\/table>"
   },
   {
    "titel": "Varianten",
    "html": "<table class=\"kern-table kern-table--small\">\n    <caption class=\"kern-title\">\n      Table small\n    <\/caption>\n\n    <thead class=\"kern-table__head\">\n      <tr class=\"kern-table__row\">\n        <th scope=\"col\" class=\"kern-table__header\">Dienstleistung<\/th>\n        <th scope=\"col\" class=\"kern-table__header\">Gebühr 2025<\/th>\n        <th scope=\"col\" class=\"kern-table__header kern-table__header--numeric\">Erhöhung<\/th>\n      <\/tr>\n    <\/thead>\n\n    <tbody class=\"kern-table__body\">\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\">Hausmüllentsorgung<\/th>\n        <td class=\"kern-table__cell\">3,30 € pro Liter (wöchentliche Leerung)<\/td>\n        <td class=\"kern-table__cell kern-table__cell--numeric\">4,8%<\/td>\n      <\/tr>\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\">Reinigung öffentlicher Wege<\/th>\n        <td class=\"kern-table__cell\">2,69 € pro m<\/td>\n        <td class=\"kern-table__cell kern-table__cell--numeric\">5,6%<\/td>\n      <\/tr>\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\">Schmutzwasserbeseitigung<\/th>\n        <td class=\"kern-table__cell\">2,41 € pro Kubikmeter<\/td>\n        <td class=\"kern-table__cell kern-table__cell--numeric\">4,3%<\/td>\n      <\/tr>\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\">Niederschlagswasserbeseitigung<\/th>\n        <td class=\"kern-table__cell\">0,83 € pro m² befestigter Fläche<\/td>\n        <td class=\"kern-table__cell kern-table__cell--numeric\">3,7%<\/td>\n      <\/tr>\n    <\/tbody>\n  <\/table>"
   },
   {
    "titel": "Striped",
    "html": "<table class=\"kern-table kern-table--striped\">\n    <caption class=\"kern-title\">\n      Städtische Gebühren\n    <\/caption>\n\n    <thead class=\"kern-table__head\">\n      <tr class=\"kern-table__row\">\n        <th scope=\"col\" class=\"kern-table__header\">Dienstleistung<\/th>\n        <th scope=\"col\" class=\"kern-table__header\">Gebühr 2025<\/th>\n        <th scope=\"col\" class=\"kern-table__header kern-table__header--numeric\">Erhöhung<\/th>\n      <\/tr>\n    <\/thead>\n\n    <tbody class=\"kern-table__body\">\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\">Hausmüllentsorgung<\/th>\n        <td class=\"kern-table__cell\">3,30 € pro Liter (wöchentliche Leerung)<\/td>\n        <td class=\"kern-table__cell kern-table__cell--numeric\">4,8%<\/td>\n      <\/tr>\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\">Reinigung öffentlicher Wege<\/th>\n        <td class=\"kern-table__cell\">2,69 € pro m<\/td>\n        <td class=\"kern-table__cell kern-table__cell--numeric\">5,6%<\/td>\n      <\/tr>\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\">Schmutzwasserbeseitigung<\/th>\n        <td class=\"kern-table__cell\">2,41 € pro Kubikmeter<\/td>\n        <td class=\"kern-table__cell kern-table__cell--numeric\">4,3%<\/td>\n      <\/tr>\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\">Niederschlagswasserbeseitigung<\/th>\n        <td class=\"kern-table__cell\">0,83 € pro m² befestigter Fläche<\/td>\n        <td class=\"kern-table__cell kern-table__cell--numeric\">3,7%<\/td>\n      <\/tr>\n    <\/tbody>\n  <\/table>"
   },
   {
    "titel": "Footer",
    "html": "<table class=\"kern-table\">\n    <caption class=\"kern-title\">\n      Kino Besucherzahlen\n    <\/caption>\n\n    <thead class=\"kern-table__head\">\n      <tr class=\"kern-table__row\">\n        <th scope=\"col\" class=\"kern-table__header\">Dienstleistung<\/th>\n        <th scope=\"col\" class=\"kern-table__header\">Gebühr 2025<\/th>\n        <th scope=\"col\" class=\"kern-table__header kern-table__header--numeric\">Erhöhung<\/th>\n      <\/tr>\n    <\/thead>\n\n    <tbody class=\"kern-table__body\">\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\">Hausmüllentsorgung<\/th>\n        <td class=\"kern-table__cell\">3,30 € pro Liter (wöchentliche Leerung)<\/td>\n        <td class=\"kern-table__cell kern-table__cell--numeric\">4,8%<\/td>\n      <\/tr>\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\">Reinigung öffentlicher Wege<\/th>\n        <td class=\"kern-table__cell\">2,69 € pro m<\/td>\n        <td class=\"kern-table__cell kern-table__cell--numeric\">5,6%<\/td>\n      <\/tr>\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\">Schmutzwasserbeseitigung<\/th>\n        <td class=\"kern-table__cell\">2,41 € pro Kubikmeter<\/td>\n        <td class=\"kern-table__cell kern-table__cell--numeric\">4,3%<\/td>\n      <\/tr>\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\">Niederschlagswasserbeseitigung<\/th>\n        <td class=\"kern-table__cell\">0,83 € pro m² befestigter Fläche<\/td>\n        <td class=\"kern-table__cell kern-table__cell--numeric\">3,7%<\/td>\n      <\/tr>\n    <\/tbody>\n\n    <tfoot class=\"kern-table__footer\">\n      <tr class=\"kern-table__row\">\n        <th scope=\"col\" class=\"kern-table__header\">Durchschnitt<\/th>\n        <th scope=\"col\" class=\"kern-table__header\">-<\/th>\n        <th scope=\"col\" class=\"kern-table__header kern-table__header--numeric\">4,6%<\/th>\n      <\/tr>\n    <\/tfoot>\n  <\/table>"
   },
   {
    "titel": "Responsiv",
    "html": "<div class=\"kern-table-responsive\" tabindex=\"0\">\n    <table class=\"kern-table kern-table--striped\">\n      <caption class=\"kern-title\">\n        Gebührenänderungen\n      <\/caption>\n      <thead class=\"kern-table__head\">\n        <tr class=\"kern-table__row\">\n          <th scope=\"col\" class=\"kern-table__header\">Dienstleistung<\/th>\n          <th scope=\"col\" class=\"kern-table__header\">Alte Gebühr<\/th>\n          <th scope=\"col\" class=\"kern-table__header\">Neue Gebühr<\/th>\n          <th scope=\"col\" class=\"kern-table__header kern-table__header--numeric\">Erhöhung in %<\/th>\n          <th scope=\"col\" class=\"kern-table__header kern-table__header--numeric\">Erhöhung in €<\/th>\n          <th scope=\"col\" class=\"kern-table__header\">Zeitraum<\/th>\n          <th scope=\"col\" class=\"kern-table__header\">Begründung<\/th>\n          <th scope=\"col\" class=\"kern-table__header\">Auswirkung<\/th>\n        <\/tr>\n      <\/thead>\n      <tbody class=\"kern-table__body\">\n        <tr class=\"kern-table__row\">\n          <th scope=\"row\" class=\"kern-table__header\">Hausmüllentsorgung<\/th>\n          <td class=\"kern-table__cell\">3,15 € pro Liter<\/td>\n          <td class=\"kern-table__cell\">3,30 € pro Liter<\/td>\n          <td class=\"kern-table__cell kern-table__cell--numeric\">4,8%<\/td>\n          <td class=\"kern-table__cell kern-table__cell--numeric\">0,15 €<\/td>\n          <td class=\"kern-table__cell\">jährlich<\/td>\n          <td class=\"kern-table__cell\">Tarifabschlüsse, Inflation<\/td>\n          <td class=\"kern-table__cell\">Durchschnittshaushalt zahlt 0,99 € mehr pro Monat<\/td>\n        <\/tr>\n        <tr class=\"kern-table__row\">\n          <th scope=\"row\" class=\"kern-table__header\">Schmutzwasserbeseitigung<\/th>\n          <td class=\"kern-table__cell\">2,31 € pro m³<\/td>\n          <td class=\"kern-table__cell\">2,41 € pro m³<\/td>\n          <td class=\"kern-table__cell kern-table__cell--numeric\">4,3%<\/td>\n          <td class=\"kern-table__cell kern-table__cell--numeric\">0,10 €<\/td>\n          <td class=\"kern-table__cell\">-<\/td>\n          <td class=\"kern-table__cell\">Kostendeckung<\/td>\n          <td class=\"kern-table__cell\">Teil der 9,69 € Mehrbelastung für Durchschnittshaushalt<\/td>\n        <\/tr>\n        <tr class=\"kern-table__row\">\n          <th scope=\"row\" class=\"kern-table__header\">Niederschlagswasserbeseitigung<\/th>\n          <td class=\"kern-table__cell\">0,80 € pro m²<\/td>\n          <td class=\"kern-table__cell\">0,83 € pro m²<\/td>\n          <td class=\"kern-table__cell kern-table__cell--numeric\">3,7%<\/td>\n          <td class=\"kern-table__cell kern-table__cell--numeric\">0,03 €<\/td>\n          <td class=\"kern-table__cell\">-<\/td>\n          <td class=\"kern-table__cell\">Kostendeckung<\/td>\n          <td class=\"kern-table__cell\">Teil der 9,69 € Mehrbelastung für Durchschnittshaushalt<\/td>\n        <\/tr>\n      <\/tbody>\n    <\/table>\n  <\/div>"
   },
   {
    "titel": "Buttons in Tabellen",
    "html": "<table class=\"kern-table\" tabindex=\"0\" role=\"region\" aria-labelledby=\"title\">\n    <caption class=\"kern-title\" id=\"title\">\n      Table mit Aktionen\n    <\/caption>\n\n    <thead class=\"kern-table__head\">\n      <tr class=\"kern-table__row\">\n        <th scope=\"col\" class=\"kern-table__header\">Dienstleistung<\/th>\n        <th scope=\"col\" class=\"kern-table__header\">Gebühr 2025<\/th>\n        <th scope=\"col\" class=\"kern-table__header kern-table__header--action\">Aktionen<\/th>\n      <\/tr>\n    <\/thead>\n\n    <tbody class=\"kern-table__body\">\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\" id=\"hausmuellentsorgung\">Hausmüllentsorgung<\/th>\n        <td class=\"kern-table__cell\">3,30 € pro Liter (wöchentliche Leerung)<\/td>\n        <td class=\"kern-table__cell kern-table__cell--action\">\n          <button\n            class=\"kern-btn kern-btn--tertiary kern-btn--x-small\"\n            id=\"btn-copy-hausmuellentsorgung\"\n            aria-describedby=\"hausmuellentsorgung\"\n            title=\"Kopieren\"\n          >\n            <span class=\"kern-icon kern-icon--content-copy\" aria-hidden=\"true\"><\/span>\n            <span class=\"kern-label kern-sr-only\">Kopieren<\/span>\n          <\/button>\n          <button\n            class=\"kern-btn kern-btn--tertiary kern-btn--x-small\"\n            id=\"btn-edit-hausmuellentsorgung\"\n            aria-describedby=\"hausmuellentsorgung\"\n            title=\"Editieren\"\n          >\n            <span class=\"kern-icon kern-icon--edit\" aria-hidden=\"true\"><\/span>\n            <span class=\"kern-label kern-sr-only\">Editieren<\/span>\n          <\/button>\n          <button\n            class=\"kern-btn kern-btn--tertiary kern-btn--x-small\"\n            id=\"btn-delete-hausmuellentsorgung\"\n            aria-describedby=\"hausmuellentsorgung\"\n            title=\"Löschen\"\n          >\n            <span class=\"kern-icon kern-icon--delete\" aria-hidden=\"true\"><\/span>\n            <span class=\"kern-label kern-sr-only\">Löschen<\/span>\n          <\/button>\n        <\/td>\n      <\/tr>\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\" id=\"reinigung\">Reinigung öffentlicher Wege<\/th>\n        <td class=\"kern-table__cell\">2,69 € pro m<\/td>\n        <td class=\"kern-table__cell kern-table__cell--action\">\n          <button\n            class=\"kern-btn kern-btn--tertiary kern-btn--x-small\"\n            id=\"btn-copy-reinigung\"\n            aria-describedby=\"reinigung\"\n            title=\"Kopieren\"\n          >\n            <span class=\"kern-icon kern-icon--content-copy\" aria-hidden=\"true\"><\/span>\n            <span class=\"kern-label kern-sr-only\">Kopieren<\/span>\n          <\/button>\n          <button\n            class=\"kern-btn kern-btn--tertiary kern-btn--x-small\"\n            id=\"btn-edit-reinigung\"\n            aria-describedby=\"reinigung\"\n            title=\"Editieren\"\n          >\n            <span class=\"kern-icon kern-icon--edit\" aria-hidden=\"true\"><\/span>\n            <span class=\"kern-label kern-sr-only\">Editieren<\/span>\n          <\/button>\n          <button\n            class=\"kern-btn kern-btn--tertiary kern-btn--x-small\"\n            id=\"btn-delete-reinigung\"\n            aria-describedby=\"reinigung\"\n            title=\"Löschen\"\n          >\n            <span class=\"kern-icon kern-icon--delete\" aria-hidden=\"true\"><\/span>\n            <span class=\"kern-label kern-sr-only\">Löschen<\/span>\n          <\/button>\n        <\/td>\n      <\/tr>\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\" id=\"schmutzwasserbeseitigung\">\n          Schmutzwasserbeseitigung\n        <\/th>\n        <td class=\"kern-table__cell\">2,41 € pro Kubikmeter<\/td>\n        <td class=\"kern-table__cell kern-table__cell--action\">\n          <button\n            class=\"kern-btn kern-btn--tertiary kern-btn--x-small\"\n            id=\"btn-copy-schmutzwasserbeseitigung\"\n            aria-describedby=\"schmutzwasserbeseitigung\"\n            title=\"Kopieren\"\n          >\n            <span class=\"kern-icon kern-icon--content-copy\" aria-hidden=\"true\"><\/span>\n            <span class=\"kern-label kern-sr-only\">Kopieren<\/span>\n          <\/button>\n          <button\n            class=\"kern-btn kern-btn--tertiary kern-btn--x-small\"\n            id=\"btn-edit-schmutzwasserbeseitigung\"\n            aria-describedby=\"schmutzwasserbeseitigung\"\n            title=\"Editieren\"\n          >\n            <span class=\"kern-icon kern-icon--edit\" aria-hidden=\"true\"><\/span>\n            <span class=\"kern-label kern-sr-only\">Editieren<\/span>\n          <\/button>\n          <button\n            class=\"kern-btn kern-btn--tertiary kern-btn--x-small\"\n            id=\"btn-delete-schmutzwasserbeseitigung\"\n            aria-describedby=\"schmutzwasserbeseitigung\"\n            title=\"Löschen\"\n          >\n            <span class=\"kern-icon kern-icon--delete\" aria-hidden=\"true\"><\/span>\n            <span class=\"kern-label kern-sr-only\">Löschen<\/span>\n          <\/button>\n        <\/td>\n      <\/tr>\n      <tr class=\"kern-table__row\">\n        <th scope=\"row\" class=\"kern-table__header\" id=\"niederschlagswasserbeseitigung\">\n          Niederschlagswasserbeseitigung\n        <\/th>\n        <td class=\"kern-table__cell\">0,83 € pro m² befestigter Fläche<\/td>\n        <td class=\"kern-table__cell kern-table__cell--action\">\n          <button\n            class=\"kern-btn kern-btn--tertiary kern-btn--x-small\"\n            id=\"btn-copy-niederschlagswasserbeseitigung\"\n            aria-describedby=\"niederschlagswasserbeseitigung\"\n            title=\"Kopieren\"\n          >\n            <span class=\"kern-icon kern-icon--content-copy\" aria-hidden=\"true\"><\/span>\n            <span class=\"kern-label kern-sr-only\">Kopieren<\/span>\n          <\/button>\n          <button\n            class=\"kern-btn kern-btn--tertiary kern-btn--x-small\"\n            id=\"btn-edit-niederschlagswasserbeseitigung\"\n            aria-describedby=\"niederschlagswasserbeseitigung\"\n            title=\"Editieren\"\n          >\n            <span class=\"kern-icon kern-icon--edit\" aria-hidden=\"true\"><\/span>\n            <span class=\"kern-label kern-sr-only\">Editieren<\/span>\n          <\/button>\n          <button\n            class=\"kern-btn kern-btn--tertiary kern-btn--x-small\"\n            id=\"btn-delete-niederschlagswasserbeseitigung\"\n            aria-describedby=\"niederschlagswasserbeseitigung\"\n            title=\"Löschen\"\n          >\n            <span class=\"kern-icon kern-icon--delete\" aria-hidden=\"true\"><\/span>\n            <span class=\"kern-label kern-sr-only\">Löschen<\/span>\n          <\/button>\n        <\/td>\n      <\/tr>\n    <\/tbody>\n  <\/table>"
   }
  ],
  "pflichten": [
   [
    "Beschriftung (caption)",
    "KERN",
    "im Beispiel"
   ],
   [
    "Breite Tabelle per Tastatur scrollbar",
    "KERN",
    "tabindex=\"0\" am Bereich"
   ],
   [
    "Zahlen rechtsbündig",
    "KERN",
    "Zellenklasse numeric"
   ]
  ],
  "tasten": [
   [
    "Tab",
    "erreicht den Tabellenbereich"
   ],
   [
    "Pfeiltasten",
    "scrollen eine breite Tabelle"
   ]
  ],
  "barriere": [],
  "klassen": [
   [
    "kern-table",
    "Baustein"
   ],
   [
    "kern-title",
    "Baustein"
   ],
   [
    "kern-table__head",
    "Bestandteil"
   ],
   [
    "kern-table__row",
    "Bestandteil"
   ],
   [
    "kern-table__header",
    "Bestandteil"
   ],
   [
    "kern-table__header--numeric",
    "Variante"
   ],
   [
    "kern-table__body",
    "Bestandteil"
   ],
   [
    "kern-table__cell",
    "Bestandteil"
   ],
   [
    "kern-table__cell--numeric",
    "Variante"
   ],
   [
    "kern-table--small",
    "Variante"
   ],
   [
    "kern-table--striped",
    "Variante"
   ],
   [
    "kern-table__footer",
    "Bestandteil"
   ],
   [
    "kern-table-responsive",
    "Baustein"
   ],
   [
    "kern-table__header--action",
    "Variante"
   ],
   [
    "kern-table__cell--action",
    "Variante"
   ],
   [
    "kern-btn",
    "Baustein"
   ],
   [
    "kern-btn--tertiary",
    "Variante"
   ],
   [
    "kern-btn--x-small",
    "Variante"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--content-copy",
    "Variante"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-sr-only",
    "Baustein"
   ],
   [
    "kern-icon--edit",
    "Variante"
   ],
   [
    "kern-icon--delete",
    "Variante"
   ]
  ]
 },
 {
  "id": "kern-summary",
  "name": "Summary",
  "gruppe": "KERN · Inhalt",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/summary",
  "zweck": "Fasst zuvor eingegebene Informationen zusammen und ermöglicht deren Bearbeitung.",
  "synonyme": [
   "Zusammenfassung",
   "Ergebnisliste"
  ],
  "aehnlich": [
   "Task List",
   "Description List"
  ],
  "wann": [
   "Am Ende jeder Antragsstrecke. Ohne sie sendet man blind ab."
  ],
  "nicht": [
   "Für Daten, die man nicht ändern kann — dort genügt die Description List."
  ],
  "bsp": [
   {
    "titel": "Einzeln",
    "html": "<div class=\"kern-summary\">\n    <div class=\"kern-summary__header\">\n      <h3 class=\"kern-title kern-title--small kern-summary__title-wrapper\" id=\"title\">\n        <span class=\"kern-number\">1<\/span>\n        <span>Angaben zur Person<\/span>\n      <\/h3>\n    <\/div>\n\n    <div class=\"kern-summary__body\">\n      <dl class=\"kern-description-list\">\n        <div class=\"kern-description-list-item\">\n          <dt class=\"kern-description-list-item__key\">Name<\/dt>\n          <dd class=\"kern-description-list-item__value\">Musterperson<\/dd>\n        <\/div>\n        <div class=\"kern-description-list-item\">\n          <dt class=\"kern-description-list-item__key\">Vorname<\/dt>\n          <dd class=\"kern-description-list-item__value\">Kim<\/dd>\n        <\/div>\n        <div class=\"kern-description-list-item\">\n          <dt class=\"kern-description-list-item__key\">E-Mail<\/dt>\n          <dd class=\"kern-description-list-item__value\">kim@musterperson.de<\/dd>\n        <\/div>\n        <div class=\"kern-description-list-item\">\n          <dt class=\"kern-description-list-item__key\">Adresse<\/dt>\n          <dd class=\"kern-description-list-item__value\">Musterstraße 2, 23456 Musterstadt<\/dd>\n        <\/div>\n      <\/dl>\n      <div class=\"kern-summary__actions\">\n        <a href=\"#\" class=\"kern-link\" aria-describedby=\"title\">\n          <span class=\"kern-icon kern-icon--edit\" aria-hidden=\"true\"><\/span>\n          Bearbeiten\n        <\/a>\n      <\/div>\n    <\/div>\n  <\/div>"
   },
   {
    "titel": "Gruppe",
    "html": "<div class=\"kern-summary-group\">\n    <div class=\"kern-summary-group__header\">\n      <h2 class=\"kern-heading-medium\">Angaben zum Antragstellenden<\/h2>\n    <\/div>\n\n    <div class=\"kern-summary\">\n      <div class=\"kern-summary__header\">\n        <h3 class=\"kern-title kern-title--small kern-summary__title-wrapper\">\n          <span class=\"kern-number\">1<\/span>\n          <span>Angabe zur Person<\/span>\n        <\/h3>\n      <\/div>\n      <div class=\"kern-summary__body\">\n        <dl class=\"kern-description-list\">\n          <div class=\"kern-description-list-item\">\n            <dt class=\"kern-description-list-item__key\">Name<\/dt>\n            <dd class=\"kern-description-list-item__value\">Musterperson<\/dd>\n          <\/div>\n          <div class=\"kern-description-list-item\">\n            <dt class=\"kern-description-list-item__key\">Vorname<\/dt>\n            <dd class=\"kern-description-list-item__value\">Kim<\/dd>\n          <\/div>\n          <div class=\"kern-description-list-item\">\n            <dt class=\"kern-description-list-item__key\">E-Mail<\/dt>\n            <dd class=\"kern-description-list-item__value\">kim@musterperson.de<\/dd>\n          <\/div>\n          <div class=\"kern-description-list-item\">\n            <dt class=\"kern-description-list-item__key\">Adresse<\/dt>\n            <dd class=\"kern-description-list-item__value\">Musterstraße 2, 23456 Musterstadt<\/dd>\n          <\/div>\n        <\/dl>\n        <div class=\"kern-summary__actions\">\n          <a href=\"#\" class=\"kern-link\" aria-describedby=\"title\">\n            <span class=\"kern-icon kern-icon--edit\" aria-hidden=\"true\"><\/span>\n            Bearbeiten\n          <\/a>\n        <\/div>\n      <\/div>\n    <\/div>\n\n    <div class=\"kern-summary\">\n      <div class=\"kern-summary__header\">\n        <h3 class=\"kern-title kern-title--small kern-summary__title-wrapper\">\n          <span class=\"kern-number\">2<\/span>\n          <span>Adresse Gebührenbescheid<\/span>\n        <\/h3>\n      <\/div>\n      <div class=\"kern-summary__body\">\n        <dl class=\"kern-description-list\">\n          <div class=\"kern-description-list-item\">\n            <dt class=\"kern-description-list-item__key\">Straße<\/dt>\n            <dd class=\"kern-description-list-item__value\">Nebengasse 3<\/dd>\n          <\/div>\n          <div class=\"kern-description-list-item\">\n            <dt class=\"kern-description-list-item__key\">Ort<\/dt>\n            <dd class=\"kern-description-list-item__value\">23456 Musterstadt<\/dd>\n          <\/div>\n        <\/dl>\n        <div class=\"kern-summary__actions\">\n          <a href=\"#\" class=\"kern-link\" aria-describedby=\"title\">\n            <span class=\"kern-icon kern-icon--edit\" aria-hidden=\"true\"><\/span>\n            Bearbeiten\n          <\/a>\n        <\/div>\n      <\/div>\n    <\/div>\n\n    <div class=\"kern-summary\">\n      <div class=\"kern-summary__header\">\n        <h3 class=\"kern-title kern-title--small kern-summary__title-wrapper\">\n          <span class=\"kern-number\">3<\/span>\n          <span>Name der Veranstaltung<\/span>\n        <\/h3>\n      <\/div>\n      <div class=\"kern-summary__body\">\n        <dl class=\"kern-description-list\">\n          <div class=\"kern-description-list-item\">\n            <dt class=\"kern-description-list-item__key\">Name<\/dt>\n            <dd class=\"kern-description-list-item__value\">Maskenball<\/dd>\n          <\/div>\n          <div class=\"kern-description-list-item\">\n            <dt class=\"kern-description-list-item__key\">Beschreibung<\/dt>\n            <dd class=\"kern-description-list-item__value\">\n              Der Maskenball findet zugunsten einer Spendenaktion statt.\n            <\/dd>\n          <\/div>\n        <\/dl>\n        <div class=\"kern-summary__actions\">\n          <a href=\"#\" class=\"kern-link\" aria-describedby=\"title\">\n            <span class=\"kern-icon kern-icon--edit\" aria-hidden=\"true\"><\/span>\n            Bearbeiten\n          <\/a>\n        <\/div>\n      <\/div>\n    <\/div>\n\n    <div class=\"kern-summary\">\n      <div class=\"kern-summary__header\">\n        <h3 class=\"kern-title kern-title--small kern-summary__title-wrapper\">\n          <span class=\"kern-number\">4<\/span>\n          <span>Veranstaltungszeitraum<\/span>\n        <\/h3>\n      <\/div>\n      <div class=\"kern-summary__body\">\n        <dl class=\"kern-description-list\">\n          <div class=\"kern-description-list-item\">\n            <dt class=\"kern-description-list-item__key\">Datum<\/dt>\n            <dd class=\"kern-description-list-item__value\">24.05.2025<\/dd>\n          <\/div>\n          <div class=\"kern-description-list-item\">\n            <dt class=\"kern-description-list-item__key\">Uhrzeit<\/dt>\n            <dd class=\"kern-description-list-item__value\">18:00 Uhr<\/dd>\n          <\/div>\n        <\/dl>\n        <div class=\"kern-summary__actions\">\n          <a href=\"#\" class=\"kern-link\" aria-describedby=\"title\">\n            <span class=\"kern-icon kern-icon--edit\" aria-hidden=\"true\"><\/span>\n            Bearbeiten\n          <\/a>\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/div>"
   }
  ],
  "pflichten": [
   [
    "Gleiche Begriffe und Reihenfolge wie die Aufgabenliste",
    "Anwendung",
    ""
   ]
  ],
  "tasten": [],
  "barriere": [
   "Jeder Ändern-Link braucht verborgenen Zusatztext — sonst hört man dreimal nur „Ändern“.",
   "<dl> mit <dt> und <dd>, damit der Zusammenhang erhalten bleibt."
  ],
  "klassen": [
   [
    "kern-summary",
    "Baustein"
   ],
   [
    "kern-summary__header",
    "Bestandteil"
   ],
   [
    "kern-title",
    "Baustein"
   ],
   [
    "kern-title--small",
    "Variante"
   ],
   [
    "kern-summary__title-wrapper",
    "Bestandteil"
   ],
   [
    "kern-number",
    "Baustein"
   ],
   [
    "kern-summary__body",
    "Bestandteil"
   ],
   [
    "kern-description-list",
    "Baustein"
   ],
   [
    "kern-description-list-item",
    "Baustein"
   ],
   [
    "kern-description-list-item__key",
    "Bestandteil"
   ],
   [
    "kern-description-list-item__value",
    "Bestandteil"
   ],
   [
    "kern-summary__actions",
    "Bestandteil"
   ],
   [
    "kern-link",
    "Baustein"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--edit",
    "Variante"
   ],
   [
    "kern-summary-group",
    "Baustein"
   ],
   [
    "kern-summary-group__header",
    "Bestandteil"
   ],
   [
    "kern-heading-medium",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-tasklist",
  "name": "Task List",
  "gruppe": "KERN · Inhalt",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/tasklist",
  "zweck": "Listet Aufgaben auf und zeigt deren Bearbeitungsstatus.",
  "synonyme": [
   "Aufgabenliste",
   "Todo-Liste"
  ],
  "aehnlich": [
   "Summary"
  ],
  "wann": [
   "Für mehrteilige Verfahren: welche Nachweise fehlen, welche Prüfschritte offen sind — in beliebiger Reihenfolge erledigbar."
  ],
  "nicht": [
   "Wenn die Reihenfolge zwingend ist — dafür die Schrittfolge (kn-steps).",
   "Ohne Angabe, wie viele von wie vielen erledigt sind."
  ],
  "bsp": [
   {
    "titel": "Default",
    "html": "<div class=\"kern-task-list\">\n    <div class=\"kern-task-list__header\">\n      <h2 class=\"kern-heading-medium\">Persönliche Daten<\/h2>\n    <\/div>\n\n    <ol class=\"kern-task-list__list\">\n      <li class=\"kern-task-list__item\">\n        <div class=\"kern-task-list__title\" id=\"task1-title\">\n          <a\n            href=\"#\"\n            class=\"kern-link kern-link--stretched kern-task-list__content-wrapper\"\n            aria-describedby=\"task1-status\"\n          >\n            <span class=\"kern-number\">1<\/span>\n            <span>Angaben zur Person machen<\/span>\n          <\/a>\n          <div class=\"kern-task-list__status\" id=\"task1-status\">\n            <span class=\"kern-badge kern-badge--success\">\n              <span class=\"kern-icon kern-icon--success kern-icon--sm\" aria-hidden=\"true\"><\/span>\n              <span class=\"kern-label kern-label--small\">Erledigt<\/span>\n            <\/span>\n          <\/div>\n        <\/div>\n      <\/li>\n      <li class=\"kern-task-list__item\">\n        <div class=\"kern-task-list__title\" id=\"task2-title\">\n          <a\n            href=\"#\"\n            class=\"kern-link kern-link--stretched kern-task-list__content-wrapper\"\n            aria-describedby=\"task2-status\"\n          >\n            <span class=\"kern-number\">2<\/span>\n            <span>Aktuelle Meldeadresse angeben<\/span>\n          <\/a>\n          <div class=\"kern-task-list__status\" id=\"task2-status\">\n            <span class=\"kern-badge kern-badge--warning\">\n              <span class=\"kern-label kern-label--small\">Unvollständig<\/span>\n            <\/span>\n          <\/div>\n        <\/div>\n      <\/li>\n      <li class=\"kern-task-list__item\">\n        <div class=\"kern-task-list__title\" id=\"task3-title\">\n          <div class=\"kern-task-list__content-wrapper\">\n            <span class=\"kern-number\">3<\/span>\n            <p class=\"kern-body\">Versandadresse meiner Briefwahlunterlagen angeben<\/p>\n          <\/div>\n          <div class=\"kern-task-list__status\" id=\"task3-status\">\n            <span class=\"kern-badge kern-badge--info\">\n              <span class=\"kern-label kern-label--small\">Noch nicht zu bearbeiten<\/span>\n            <\/span>\n          <\/div>\n        <\/div>\n      <\/li>\n    <\/ol>\n\n    <div class=\"kern-task-list__header\">\n      <h2 class=\"kern-heading-medium\">Zusammenfassung<\/h2>\n    <\/div>\n\n    <ol class=\"kern-task-list__list\">\n      <li class=\"kern-task-list__item\">\n        <div class=\"kern-task-list__title\">\n          <div class=\"kern-task-list__content-wrapper\">\n            <span class=\"kern-number\">4<\/span>\n            <p class=\"kern-body\">\n              Wenn Sie alle Angaben gemacht haben, können Sie diese hier noch einmal prüfen.\n            <\/p>\n          <\/div>\n          <div class=\"kern-task-list__status\">\n            <span class=\"kern-badge kern-badge--info\">\n              <span class=\"kern-label kern-label--small\">Noch nicht zu bearbeiten<\/span>\n            <\/span>\n          <\/div>\n        <\/div>\n      <\/li>\n    <\/ol>\n  <\/div>"
   },
   {
    "titel": "Ohne Nummerierung",
    "html": "<div class=\"kern-task-list\">\n    <div class=\"kern-task-list__header\">\n      <h2 class=\"kern-heading-medium\">Persönliche Daten<\/h2>\n    <\/div>\n\n    <ul class=\"kern-task-list__list\">\n      <li class=\"kern-task-list__item\">\n        <div class=\"kern-task-list__title\" id=\"task1-title\">\n          <a\n            href=\"#\"\n            class=\"kern-link kern-link--stretched kern-task-list__content-wrapper\"\n            aria-describedby=\"task3-status\"\n          >\n            <span>Angaben zur Person machen<\/span>\n          <\/a>\n          <div class=\"kern-task-list__status\" id=\"task3-status\">\n            <span class=\"kern-badge kern-badge--success\">\n              <span class=\"kern-icon kern-icon--success kern-icon--sm\" aria-hidden=\"true\"><\/span>\n              <span class=\"kern-label kern-label--small\">Erledigt<\/span>\n            <\/span>\n          <\/div>\n        <\/div>\n      <\/li>\n      <li class=\"kern-task-list__item\">\n        <div class=\"kern-task-list__title\" id=\"task2-title\">\n          <a\n            href=\"#\"\n            class=\"kern-link kern-link--stretched kern-task-list__content-wrapper\"\n            aria-describedby=\"task4-status\"\n          >\n            <span>Aktuelle Meldeadresse angeben<\/span>\n          <\/a>\n          <div class=\"kern-task-list__status\" id=\"task4-status\">\n            <span class=\"kern-badge kern-badge--warning\">\n              <span class=\"kern-label kern-label--small\">Unvollständig<\/span>\n            <\/span>\n          <\/div>\n        <\/div>\n      <\/li>\n      <li class=\"kern-task-list__item\">\n        <div class=\"kern-task-list__title\" id=\"task3-title\">\n          <div class=\"kern-task-list__content-wrapper\">\n            <p class=\"kern-body\">Versandadresse meiner Briefwahlunterlagen angeben<\/p>\n          <\/div>\n          <div class=\"kern-task-list__status\" id=\"task3-status\">\n            <span class=\"kern-badge kern-badge--info\">\n              <span class=\"kern-label kern-label--small\">Noch nicht zu bearbeiten<\/span>\n            <\/span>\n          <\/div>\n        <\/div>\n      <\/li>\n    <\/ul>\n\n    <div class=\"kern-task-list__header\">\n      <h2 class=\"kern-heading-medium\">Zusammenfassung<\/h2>\n    <\/div>\n\n    <ul class=\"kern-task-list__list\">\n      <li class=\"kern-task-list__item\">\n        <div class=\"kern-task-list__title\" id=\"task3-title\">\n          <div class=\"kern-task-list__content-wrapper\">\n            <p class=\"kern-body\">\n              Wenn Sie alle Angaben gemacht haben, können Sie diese hier noch einmal prüfen.\n            <\/p>\n          <\/div>\n          <div class=\"kern-task-list__status\" id=\"task3-status\">\n            <span class=\"kern-badge kern-badge--info\">\n              <span class=\"kern-label kern-label--small\">Noch nicht zu bearbeiten<\/span>\n            <\/span>\n          <\/div>\n        <\/div>\n      <\/li>\n    <\/ul>\n  <\/div>"
   }
  ],
  "pflichten": [
   [
    "Höchstens 7 Aufgaben, durchgehend nummeriert",
    "Anwendung",
    ""
   ]
  ],
  "tasten": [],
  "barriere": [
   "Der Stand steht als Text in der Marke, nicht nur als Farbe.",
   "Die Zählung „2 von 4“ gehört über die Liste.",
   "Eine echte Liste, damit die Anzahl angesagt wird."
  ],
  "klassen": [
   [
    "kern-task-list",
    "Baustein"
   ],
   [
    "kern-task-list__header",
    "Bestandteil"
   ],
   [
    "kern-heading-medium",
    "Baustein"
   ],
   [
    "kern-task-list__list",
    "Bestandteil"
   ],
   [
    "kern-task-list__item",
    "Bestandteil"
   ],
   [
    "kern-task-list__title",
    "Bestandteil"
   ],
   [
    "kern-link",
    "Baustein"
   ],
   [
    "kern-link--stretched",
    "Variante"
   ],
   [
    "kern-task-list__content-wrapper",
    "Bestandteil"
   ],
   [
    "kern-number",
    "Baustein"
   ],
   [
    "kern-task-list__status",
    "Bestandteil"
   ],
   [
    "kern-badge",
    "Baustein"
   ],
   [
    "kern-badge--success",
    "Variante"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--success",
    "Variante"
   ],
   [
    "kern-icon--sm",
    "Variante"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-label--small",
    "Variante"
   ],
   [
    "kern-badge--warning",
    "Variante"
   ],
   [
    "kern-body",
    "Baustein"
   ],
   [
    "kern-badge--info",
    "Variante"
   ]
  ]
 },
 {
  "id": "kern-badge",
  "name": "Badge",
  "gruppe": "KERN · Inhalt",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/badge",
  "zweck": "Gibt einen knappen Status-Hinweis zu einem übergeordneten Element.",
  "synonyme": [
   "Hinweis",
   "Plakette",
   "Kennzeichen"
  ],
  "aehnlich": [
   "Alert",
   "Chips",
   "Toast"
  ],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Varianten",
    "html": "<span class=\"kern-badge kern-badge--info\">\n    <span class=\"kern-label\">Information<\/span>\n  <\/span>\n  <span class=\"kern-badge kern-badge--success\">\n    <span class=\"kern-label\">Erfolg<\/span>\n  <\/span>\n  <span class=\"kern-badge kern-badge--warning\">\n    <span class=\"kern-label\">Warnung<\/span>\n  <\/span>\n  <span class=\"kern-badge kern-badge--danger\">\n    <span class=\"kern-label\">Fehler<\/span>\n  <\/span>"
   },
   {
    "titel": "Varianten mit Icon",
    "html": "<span class=\"kern-badge kern-badge--info\">\n    <span class=\"kern-icon kern-icon--info\" aria-hidden=\"true\"><\/span>\n    <span class=\"kern-label\">Information<\/span>\n  <\/span>\n\n  <span class=\"kern-badge kern-badge--success\">\n    <span class=\"kern-icon kern-icon--success\" aria-hidden=\"true\"><\/span>\n    <span class=\"kern-label\">Erfolg<\/span>\n  <\/span>\n\n  <span class=\"kern-badge kern-badge--warning\">\n    <span class=\"kern-icon kern-icon--warning\" aria-hidden=\"true\"><\/span>\n    <span class=\"kern-label\">Warnung<\/span>\n  <\/span>\n\n  <span class=\"kern-badge kern-badge--danger\">\n    <span class=\"kern-icon kern-icon--danger\" aria-hidden=\"true\"><\/span>\n    <span class=\"kern-label\">Fehler<\/span>\n  <\/span>"
   },
   {
    "titel": "Größenübersicht",
    "html": "<span class=\"kern-badge kern-badge--small kern-badge--success\">\n    <span class=\"kern-icon kern-icon--success\" aria-hidden=\"true\"><\/span>\n    <span class=\"kern-label\">Erfolg<\/span>\n  <\/span>\n  <span class=\"kern-badge kern-badge--success\">\n    <span class=\"kern-icon kern-icon--success\" aria-hidden=\"true\"><\/span>\n    <span class=\"kern-label\">Erfolg<\/span>\n  <\/span>"
   }
  ],
  "pflichten": [
   [
    "Nicht interaktiv",
    "KERN",
    "kein Bedienelement im Markup"
   ],
   [
    "Dynamische Marke wird angesagt",
    "Anwendung",
    "über die zentrale Ansage (M61)"
   ],
   [
    "Bedeutung nicht nur über Farbe",
    "KERN",
    "Text in der Marke, Symbol aria-hidden"
   ]
  ],
  "tasten": [],
  "barriere": [],
  "klassen": [
   [
    "kern-badge",
    "Baustein"
   ],
   [
    "kern-badge--info",
    "Variante"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-badge--success",
    "Variante"
   ],
   [
    "kern-badge--warning",
    "Variante"
   ],
   [
    "kern-badge--danger",
    "Variante"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--info",
    "Variante"
   ],
   [
    "kern-icon--success",
    "Variante"
   ],
   [
    "kern-icon--warning",
    "Variante"
   ],
   [
    "kern-icon--danger",
    "Variante"
   ],
   [
    "kern-badge--small",
    "Variante"
   ]
  ]
 },
 {
  "id": "kern-icon",
  "name": "Icon",
  "gruppe": "KERN · Inhalt",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/icon",
  "zweck": "Visualisieren Aktionen, Inhalte oder Statusinformationen.",
  "synonyme": [
   "Symbol",
   "Piktogramm",
   "Bildzeichen"
  ],
  "aehnlich": [],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Default",
    "html": "<span class=\"kern-icon kern-icon--home kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--arrow-up kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--arrow-down kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--arrow-forward kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--arrow-back kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--info kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--success kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--warning kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--danger kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--open-in-new kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--download kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--logout kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--checklist kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--mail kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--edit kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--sign-language kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--easy-language kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--autorenew kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--add kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--close kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--delete kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--search kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--question-mark kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--more-vert kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--content-copy kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--visibility kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--visibility-off kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--check kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span\n    class=\"kern-icon kern-icon--drive-folder-upload kern-icon--default\"\n    aria-hidden=\"true\"\n  ><\/span>\n  <span class=\"kern-icon kern-icon--chevron-left kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--chevron-right kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span\n    class=\"kern-icon kern-icon--keyboard-double-arrow-left kern-icon--default\"\n    aria-hidden=\"true\"\n  ><\/span>\n  <span\n    class=\"kern-icon kern-icon--keyboard-double-arrow-right kern-icon--default\"\n    aria-hidden=\"true\"\n  ><\/span>\n  <span class=\"kern-icon kern-icon--language kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--dehaze kern-icon--default\" aria-hidden=\"true\"><\/span>\n  <span class=\"kern-icon kern-icon--account-circle kern-icon--default\" aria-hidden=\"true\"><\/span\n>"
   },
   {
    "titel": "Varianten",
    "html": "<p>Icon small<\/p>\n  <span class=\"kern-icon kern-icon--home kern-icon--small\"><\/span>\n  <p>Icon default<\/p>\n  <span class=\"kern-icon kern-icon--home\"><\/span>\n  <p>Icon large<\/p>\n  <span class=\"kern-icon kern-icon--home kern-icon--large\"><\/span>\n  <p>Icon x-large<\/p>\n  <span class=\"kern-icon kern-icon--home kern-icon--x-large\"><\/span\n>"
   }
  ],
  "pflichten": [
   [
    "Schmückend: aria-hidden; bedeutungstragend: Name",
    "Anwendung",
    ""
   ],
   [
    "In Links mind. 24 px, bedienbar mind. 44 × 44 px",
    "Anwendung",
    ""
   ]
  ],
  "tasten": [],
  "barriere": [],
  "klassen": [
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--home",
    "Variante"
   ],
   [
    "kern-icon--default",
    "Variante"
   ],
   [
    "kern-icon--arrow-up",
    "Variante"
   ],
   [
    "kern-icon--arrow-down",
    "Variante"
   ],
   [
    "kern-icon--arrow-forward",
    "Variante"
   ],
   [
    "kern-icon--arrow-back",
    "Variante"
   ],
   [
    "kern-icon--info",
    "Variante"
   ],
   [
    "kern-icon--success",
    "Variante"
   ],
   [
    "kern-icon--warning",
    "Variante"
   ],
   [
    "kern-icon--danger",
    "Variante"
   ],
   [
    "kern-icon--open-in-new",
    "Variante"
   ],
   [
    "kern-icon--download",
    "Variante"
   ],
   [
    "kern-icon--logout",
    "Variante"
   ],
   [
    "kern-icon--checklist",
    "Variante"
   ],
   [
    "kern-icon--mail",
    "Variante"
   ],
   [
    "kern-icon--edit",
    "Variante"
   ],
   [
    "kern-icon--sign-language",
    "Variante"
   ],
   [
    "kern-icon--easy-language",
    "Variante"
   ],
   [
    "kern-icon--autorenew",
    "Variante"
   ],
   [
    "kern-icon--add",
    "Variante"
   ],
   [
    "kern-icon--close",
    "Variante"
   ],
   [
    "kern-icon--delete",
    "Variante"
   ],
   [
    "kern-icon--search",
    "Variante"
   ],
   [
    "kern-icon--question-mark",
    "Variante"
   ],
   [
    "kern-icon--more-vert",
    "Variante"
   ],
   [
    "kern-icon--content-copy",
    "Variante"
   ],
   [
    "kern-icon--visibility",
    "Variante"
   ],
   [
    "kern-icon--visibility-off",
    "Variante"
   ],
   [
    "kern-icon--check",
    "Variante"
   ],
   [
    "kern-icon--drive-folder-upload",
    "Variante"
   ],
   [
    "kern-icon--chevron-left",
    "Variante"
   ],
   [
    "kern-icon--chevron-right",
    "Variante"
   ],
   [
    "kern-icon--keyboard-double-arrow-left",
    "Variante"
   ],
   [
    "kern-icon--keyboard-double-arrow-right",
    "Variante"
   ],
   [
    "kern-icon--language",
    "Variante"
   ],
   [
    "kern-icon--dehaze",
    "Variante"
   ],
   [
    "kern-icon--account-circle",
    "Variante"
   ],
   [
    "kern-icon--small",
    "Variante"
   ],
   [
    "kern-icon--large",
    "Variante"
   ],
   [
    "kern-icon--x-large",
    "Variante"
   ]
  ]
 },
 {
  "id": "kern-divider",
  "name": "Divider",
  "gruppe": "KERN · Inhalt",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/divider",
  "zweck": "Unterteilt Inhaltsblöcke visuell in verschiedene Gruppen und kann eine Hierarchie aufbauen.",
  "synonyme": [
   "Trenner",
   "Separator",
   "Window Splitter",
   "Splitter",
   "Horizonal rule",
   "Trennlinie"
  ],
  "aehnlich": [],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Beispiele",
    "html": "<hr class=\"kern-divider\" aria-hidden=\"true\" />"
   }
  ],
  "pflichten": [
   [
    "Rein schmückend, für Hilfsmittel verborgen",
    "KERN",
    "aria-hidden im Beispiel"
   ]
  ],
  "tasten": [],
  "barriere": [],
  "klassen": [
   [
    "kern-divider",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-alert",
  "name": "Alert",
  "gruppe": "KERN · Rückmeldung",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/alert",
  "zweck": "Gibt einen Hinweis zu einer wichtigen Information mit knapper Erläuterung und optionalem Link.",
  "synonyme": [
   "Hinweis",
   "Meldung",
   "Warnung",
   "Information",
   "Mitteilung",
   "Rückmeldung"
  ],
  "aehnlich": [
   "Badge"
  ],
  "wann": [
   "Im Fluss der Seite, dort wo es hingehört."
  ],
  "nicht": [
   "Als einziger Träger einer Farbe. Die Art steht immer auch als Wort im Titel."
  ],
  "bsp": [
   {
    "titel": "Varianten",
    "html": "<div class=\"kern-alert kern-alert--info\" role=\"alert\">\n    <div class=\"kern-alert__header\">\n      <span class=\"kern-icon kern-icon--info\" aria-hidden=\"true\"><\/span>\n      <h2 class=\"kern-title\">Information<\/h2>\n    <\/div>\n  <\/div>\n\n  <br />\n\n  <div class=\"kern-alert kern-alert--success\" role=\"alert\">\n    <div class=\"kern-alert__header\">\n      <span class=\"kern-icon kern-icon--success\" aria-hidden=\"true\"><\/span>\n      <h2 class=\"kern-title\">Erfolg<\/h2>\n    <\/div>\n  <\/div>\n\n  <br />\n\n  <div class=\"kern-alert kern-alert--warning\" role=\"alert\">\n    <div class=\"kern-alert__header\">\n      <span class=\"kern-icon kern-icon--warning\" aria-hidden=\"true\"><\/span>\n      <h2 class=\"kern-title\">Warnung<\/h2>\n    <\/div>\n  <\/div>\n\n  <br />\n\n  <div class=\"kern-alert kern-alert--danger\" role=\"alert\">\n    <div class=\"kern-alert__header\">\n      <span class=\"kern-icon kern-icon--danger\" aria-hidden=\"true\"><\/span>\n      <h2 class=\"kern-title\">Fehler<\/h2>\n    <\/div>\n  <\/div>"
   },
   {
    "titel": "Varianten mit Beschreibung",
    "html": "<div class=\"kern-alert kern-alert--info\" role=\"alert\">\n    <div class=\"kern-alert__header\">\n      <span class=\"kern-icon kern-icon--info\" aria-hidden=\"true\"><\/span>\n      <h2 class=\"kern-title\">Information<\/h2>\n    <\/div>\n    <div class=\"kern-alert__body\">\n      <p class=\"kern-body\">\n        Die Beschreibung liefert mehr Kontext und sollte auch Handlungsoptionen aufzeigen, falls\n        nötig.\n      <\/p>\n      <a href=\"#\" class=\"kern-link\">\n        <span class=\"kern-icon kern-icon--arrow-forward\" aria-hidden=\"true\"><\/span>\n        Linktext\n      <\/a>\n    <\/div>\n  <\/div>\n\n  <br />\n\n  <div class=\"kern-alert kern-alert--success\" role=\"alert\">\n    <div class=\"kern-alert__header\">\n      <span class=\"kern-icon kern-icon--success\" aria-hidden=\"true\"><\/span>\n      <h2 class=\"kern-title\">Erfolg<\/h2>\n    <\/div>\n    <div class=\"kern-alert__body\">\n      <p class=\"kern-body\">\n        Die Beschreibung liefert mehr Kontext und sollte auch Handlungsoptionen aufzeigen, falls\n        nötig.\n      <\/p>\n      <a href=\"#\" class=\"kern-link\">\n        <span class=\"kern-icon kern-icon--arrow-forward\" aria-hidden=\"true\"><\/span>\n        Linktext\n      <\/a>\n    <\/div>\n  <\/div>\n\n  <br />\n\n  <div class=\"kern-alert kern-alert--warning\" role=\"alert\">\n    <div class=\"kern-alert__header\">\n      <span class=\"kern-icon kern-icon--warning\" aria-hidden=\"true\"><\/span>\n      <h2 class=\"kern-title\">Warnung<\/h2>\n    <\/div>\n    <div class=\"kern-alert__body\">\n      <p class=\"kern-body\">\n        Die Beschreibung liefert mehr Kontext und sollte auch Handlungsoptionen aufzeigen, falls\n        nötig.\n      <\/p>\n      <a href=\"#\" class=\"kern-link\">\n        <span class=\"kern-icon kern-icon--arrow-forward\" aria-hidden=\"true\"><\/span>\n        Linktext\n      <\/a>\n    <\/div>\n  <\/div>\n\n  <br />\n\n  <div class=\"kern-alert kern-alert--danger\" role=\"alert\">\n    <div class=\"kern-alert__header\">\n      <span class=\"kern-icon kern-icon--danger\" aria-hidden=\"true\"><\/span>\n      <h2 class=\"kern-title\">Fehler<\/h2>\n    <\/div>\n    <div class=\"kern-alert__body\">\n      <p class=\"kern-body\">\n        Die Beschreibung liefert mehr Kontext und sollte auch Handlungsoptionen aufzeigen, falls\n        nötig.\n      <\/p>\n      <a href=\"#\" class=\"kern-link\">\n        <span class=\"kern-icon kern-icon--arrow-forward\" aria-hidden=\"true\"><\/span>\n        Linktext\n      <\/a>\n    <\/div>\n  <\/div>"
   }
  ],
  "pflichten": [
   [
    "Rolle programmatisch erkennbar",
    "KERN",
    "role=\"alert\" im Beispiel"
   ],
   [
    "Titel als echtes Überschriftenelement",
    "KERN",
    "h2.kern-title im Beispiel"
   ],
   [
    "Schließbare Meldung per Tastatur bedienbar",
    "offen",
    "KERN-Markup hat keinen Schließen-Knopf; erst mit eigenem Baustein"
   ],
   [
    "Lösung oder nächste Handlung nennen",
    "Anwendung",
    ""
   ]
  ],
  "tasten": [],
  "barriere": [
   "Der Titel nennt die Art in Worten: Hinweis, Erfolgreich, Achtung, Fehler.",
   "KERNs Beispiele setzen role=\"alert\" bei allen Arten. Empfehlung [W]: role=\"alert\" nur für Meldungen, die nach einer Handlung erscheinen; ein Hinweis, der beim Laden schon dasteht, braucht keine Live-Rolle — sonst unterbricht jede Seite beim Laden."
  ],
  "klassen": [
   [
    "kern-alert",
    "Baustein"
   ],
   [
    "kern-alert--info",
    "Variante"
   ],
   [
    "kern-alert__header",
    "Bestandteil"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--info",
    "Variante"
   ],
   [
    "kern-title",
    "Baustein"
   ],
   [
    "kern-alert--success",
    "Variante"
   ],
   [
    "kern-icon--success",
    "Variante"
   ],
   [
    "kern-alert--warning",
    "Variante"
   ],
   [
    "kern-icon--warning",
    "Variante"
   ],
   [
    "kern-alert--danger",
    "Variante"
   ],
   [
    "kern-icon--danger",
    "Variante"
   ],
   [
    "kern-alert__body",
    "Bestandteil"
   ],
   [
    "kern-body",
    "Baustein"
   ],
   [
    "kern-link",
    "Baustein"
   ],
   [
    "kern-icon--arrow-forward",
    "Variante"
   ]
  ]
 },
 {
  "id": "kern-dialog",
  "name": "Dialog",
  "gruppe": "KERN · Rückmeldung",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/dialog",
  "zweck": "Vermitteln Informationen und fordern eine Reaktion von Nutzenden.",
  "synonyme": [
   "Modal",
   "Overlay",
   "Popup",
   "Modaler Dialog"
  ],
  "aehnlich": [
   "Alert",
   "Accordion"
  ],
  "wann": [
   "Vor zerstörenden Handlungen.",
   "Wenn ohne Antwort nicht weitergearbeitet werden kann."
  ],
  "nicht": [
   "Für Bestätigungen, die man verpassen darf — dafür die flüchtige Meldung (kn-toast).",
   "Für Formulare mit mehr als drei Feldern. Dann eine eigene Seite."
  ],
  "bsp": [
   {
    "titel": "Default",
    "html": "<dialog id=\"modal1\" class=\"kern-dialog\" aria-labelledby=\"modal1_heading\" open>\n    <header class=\"kern-dialog__header\">\n      <h2 class=\"kern-title kern-title--large\" id=\"modal1_heading\">Frage?<\/h2>\n      <button class=\"kern-btn kern-btn--tertiary\">\n        <span class=\"kern-icon kern-icon--close\" aria-hidden=\"true\"><\/span>\n        <span class=\"kern-sr-only\">Schließen<\/span>\n      <\/button>\n    <\/header>\n    <section class=\"kern-dialog__body\">\n      <p class=\"kern-body\">\n        Die Beschreibung liefert mehr Kontext, z.&#8239;B. um vor kritischen Aktionen eine bewusste\n        Bestätigung des Nutzenden zu erhalten.\n      <\/p>\n    <\/section>\n    <footer class=\"kern-dialog__footer\">\n      <button class=\"kern-btn kern-btn--secondary\">\n        <span class=\"kern-label\">Abbrechen<\/span>\n      <\/button>\n      <button id=\"confirmBtn\" class=\"kern-btn kern-btn--primary\">\n        <span class=\"kern-label\">Speichern<\/span>\n      <\/button>\n    <\/footer>\n    <!-- only for displaying it properly on documentation page -->\n    <style>\n      #modal1 {\n        position: relative;\n      }\n    <\/style>\n  <\/dialog>"
   },
   {
    "titel": "Variante",
    "html": "<dialog id=\"modal2\" class=\"kern-dialog\" aria-labelledby=\"modal2_heading\" open>\n    <header class=\"kern-dialog__header\">\n      <h2 class=\"kern-title kern-title--large\" id=\"modal2_heading\">Information<\/h2>\n      <button class=\"kern-btn kern-btn--tertiary\">\n        <span class=\"kern-icon kern-icon--close\" aria-hidden=\"true\"><\/span>\n        <span class=\"kern-sr-only\">Schließen<\/span>\n      <\/button>\n    <\/header>\n    <section class=\"kern-dialog__body\">\n      <p class=\"kern-body\">\n        Die Beschreibung liefert mehr Kontext. Es kann nur mit einem Button zugestimmt werden, es\n        ergeben sich keine unumkehrbaren Konsequenzen.\n      <\/p>\n    <\/section>\n    <footer class=\"kern-dialog__footer\">\n      <button id=\"confirmBtn\" class=\"kern-btn kern-btn--primary\">\n        <span class=\"kern-label\">Verstanden<\/span>\n      <\/button>\n    <\/footer>\n    <!-- only for displaying it properly on documentation page -->\n    <style>\n      #modal2 {\n        position: relative;\n      }\n    <\/style>\n  <\/dialog>"
   },
   {
    "titel": "Zusatzbeispiel KERN 2.8.2 (nbyc): modal öffnen (data-dialog-target, wie in KERNs Doku)",
    "html": "<button class=\"kern-btn kern-btn--primary\" data-dialog-target=\"kn-dialog-probe\"><span class=\"kern-label\">Dialog öffnen<\/span><\/button>\n<dialog id=\"kn-dialog-probe\" class=\"kern-dialog\" aria-labelledby=\"kn-dialog-probe-titel\">\n  <header class=\"kern-dialog__header\">\n    <h2 class=\"kern-title kern-title--large\" id=\"kn-dialog-probe-titel\">Änderungen verwerfen?<\/h2>\n    <button class=\"kern-btn kern-btn--tertiary\">\n      <span class=\"kern-icon kern-icon--close\" aria-hidden=\"true\"><\/span>\n      <span class=\"kern-sr-only\">Schließen<\/span>\n    <\/button>\n  <\/header>\n  <section class=\"kern-dialog__body\">\n    <p class=\"kern-body\">Ihre Eingaben gehen verloren.<\/p>\n  <\/section>\n  <form method=\"dialog\" class=\"kern-dialog__footer\">\n    <button class=\"kern-btn kern-btn--secondary\" value=\"abbrechen\"><span class=\"kern-label\">Abbrechen<\/span><\/button>\n    <button class=\"kern-btn kern-btn--primary\" value=\"verwerfen\"><span class=\"kern-label\">Verwerfen<\/span><\/button>\n  <\/form>\n<\/dialog>"
   }
  ],
  "pflichten": [
   [
    "Esc schließt, Fokus bleibt im Dialog",
    "nativ",
    "showModal()"
   ],
   [
    "Öffnen per Knopf (data-dialog-target)",
    "kern-neu.js",
    "wie in KERNs Doku"
   ],
   [
    "X-Knopf schließt",
    "kern-neu.js",
    "Doku-Skript von KERN tut es nicht (F20)"
   ],
   [
    "Fokus nach dem Schließen zurück zum Auslöser",
    "kern-neu.js",
    ""
   ],
   [
    "Außen unzugänglich, Scrollen gesperrt",
    "nativ",
    "modal; Scrollsperre per KERN-CSS"
   ],
   [
    "Hintergrund-Klick schließt nur Infodialoge",
    "kern-neu.js",
    "nur mit data-kn-close-on-backdrop"
   ],
   [
    "Titel über aria-labelledby",
    "KERN",
    "im Beispiel; fehlt er, ergänzt kern-neu.js ihn aus der Überschrift; Prüfung 13"
   ],
   [
    "Erstfokus: erstes Feld oder Titel, nie Schließen",
    "kern-neu.js",
    "autofocus geht vor (M60)"
   ],
   [
    "Ohne Auslöser: Fokus danach an den Hauptinhalt",
    "kern-neu.js",
    "KERN-Regel (M60)"
   ]
  ],
  "tasten": [
   [
    "Tab, Umschalt+Tab",
    "bleibt im Dialog (nativ)"
   ],
   [
    "Esc",
    "schließt (nativ)"
   ],
   [
    "Enter, Leertaste auf X",
    "schließt (kern-neu.js)"
   ],
   [
    "beim Öffnen",
    "Fokus auf das erste Feld, sonst den Titel — nie auf Schließen (kern-neu.js, M60)"
   ],
   [
    "nach dem Schließen",
    "Fokus auf dem Auslöser; ohne Auslöser auf dem Hauptinhalt (kern-neu.js, M60)"
   ]
  ],
  "barriere": [
   "Natives <dialog> mit showModal(): der Rest der Seite wird für Hilfsmittel unerreichbar.",
   "Tab bleibt im Dialog, Esc schließt; nach dem Schließen geht der Fokus auf den Auslöser zurück (kern-neu.js).",
   "aria-labelledby zeigt auf die Überschrift.",
   "Der Titel ist eine Frage, die Knöpfe sind Antworten — nie „OK“ und „Abbrechen“."
  ],
  "klassen": [
   [
    "kern-dialog",
    "Baustein"
   ],
   [
    "kern-dialog__header",
    "Bestandteil"
   ],
   [
    "kern-title",
    "Baustein"
   ],
   [
    "kern-title--large",
    "Variante"
   ],
   [
    "kern-btn",
    "Baustein"
   ],
   [
    "kern-btn--tertiary",
    "Variante"
   ],
   [
    "kern-icon",
    "Baustein"
   ],
   [
    "kern-icon--close",
    "Variante"
   ],
   [
    "kern-sr-only",
    "Baustein"
   ],
   [
    "kern-dialog__body",
    "Bestandteil"
   ],
   [
    "kern-body",
    "Baustein"
   ],
   [
    "kern-dialog__footer",
    "Bestandteil"
   ],
   [
    "kern-btn--secondary",
    "Variante"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-btn--primary",
    "Variante"
   ]
  ]
 },
 {
  "id": "kern-loader",
  "name": "Loader",
  "gruppe": "KERN · Rückmeldung",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/loader",
  "zweck": "Ist ein animiertes, sich drehendes Symbol, das die Nutzenden darauf hinweist, dass ein Inhalt geladen wird.",
  "synonyme": [
   "Ladeanzeige",
   "Loading Indicator",
   "Spinner",
   "Wartekreisel",
   "Spinning Wheel",
   "Loading Spinner"
  ],
  "aehnlich": [
   "Progress"
  ],
  "wann": [
   "Beim Abruf aus einem Fachverfahren, dessen Antwortzeit niemand kennt — KERN: erst ab 1 s Wartezeit.",
   "Immer mit einem Satz daneben, was gerade passiert."
  ],
  "nicht": [
   "Länger als etwa zehn Sekunden ohne weitere Erklärung.",
   "Nicht, wenn der Fortschritt bezifferbar ist — dann den Fortschrittsbalken (kn-progress-bar)."
  ],
  "bsp": [
   {
    "titel": "Beispiel",
    "html": "<div class=\"kern-loader kern-loader--visible\" role=\"status\">\n    <span class=\"kern-sr-only\">Wird geladen...<\/span>\n  <\/div>"
   }
  ],
  "pflichten": [
   [
    "Statusänderung für Hilfsmittel",
    "KERN",
    "role=\"status\" im Beispiel"
   ],
   [
    "Bewegung abschaltbar (2.2.2, 2.3.3)",
    "kern-neu.js",
    "Erweiterung \"ruhige Bewegung\" (AB03)"
   ],
   [
    "Erst ab 1 s Wartezeit, nie mehrere",
    "kern-neu.js",
    "KN.lade(bereich, an): aria-busy, Lader nach 1 s, einer je Bereich (M57)"
   ]
  ],
  "tasten": [],
  "barriere": [
   "Die Ansage trägt role=\"status\" (im KERN-Beispiel vorhanden).",
   "Bei „Bewegung reduzieren“ hört die Drehung auf (Erweiterung AB03)."
  ],
  "klassen": [
   [
    "kern-loader",
    "Baustein"
   ],
   [
    "kern-loader--visible",
    "Variante"
   ],
   [
    "kern-sr-only",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-progress",
  "name": "Progress",
  "gruppe": "KERN · Rückmeldung",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/progress",
  "zweck": "Zeigt die Gesamtdauer und den Fortschritt eines mehrstufigen Prozesses an.",
  "synonyme": [
   "Stepper",
   "Fortschrittsanzeige"
  ],
  "aehnlich": [
   "Loader"
  ],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Progress mit Label oben",
    "html": "<div class=\"kern-progress\">\n    <label class=\"kern-label\" for=\"progress1\">Schritt 2 von 5<\/label>\n    <progress id=\"progress1\" value=\"2\" max=\"5\"><\/progress><\/div\n>"
   },
   {
    "titel": "Progress mit Label unten",
    "html": "<div class=\"kern-progress\">\n    <progress id=\"progress2\" value=\"5\" max=\"8\"><\/progress>\n    <label class=\"kern-label\" for=\"progress2\">Schritt 5 von 8<\/label>\n  <\/div>"
   },
   {
    "titel": "Progress ohne Label",
    "html": "<div class=\"kern-progress\">\n    <progress value=\"35\" max=\"100\"><\/progress><\/div\n>"
   }
  ],
  "pflichten": [
   [
    "Schrittfortschritt, nicht für Laden",
    "Anwendung",
    ""
   ],
   [
    "Änderung angesagt (4.1.3)",
    "Anwendung",
    "über die zentrale Ansage (M61)"
   ]
  ],
  "tasten": [],
  "barriere": [],
  "klassen": [
   [
    "kern-progress",
    "Baustein"
   ],
   [
    "kern-label",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-grid",
  "name": "Grid",
  "gruppe": "KERN · Layout",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/layout/grid-system",
  "zweck": "Ermöglicht strukturierte Layouts durch Aufteilung in Zeilen und Spalten.",
  "synonyme": [
   "Raster",
   "Layout-System"
  ],
  "aehnlich": [
   "/"
  ],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Responsive Spalten",
    "html": "<div class=\"kern-container\">\n    <div class=\"kern-col-md-9 kern-col-lg-4\">\n      <div class=\"kern-form-input\">\n        <label class=\"kern-label\" for=\"text-1\">Name<\/label>\n        <input class=\"kern-form-input__input\" id=\"text-1\" name=\"text-1\" type=\"text\" />\n      <\/div>\n    <\/div><\/div\n>"
   },
   {
    "titel": "Spaltenversatz (Offset)",
    "html": "<div class=\"kern-container\">\n    <div class=\"kern-row\">\n      <div class=\"kern-col-12 kern-col-md-9 kern-col-md-offset-3\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"text-2\">Name<\/label>\n          <input class=\"kern-form-input__input\" id=\"text-2\" name=\"text-2\" type=\"text\" />\n        <\/div>\n      <\/div>\n    <\/div><\/div\n>"
   },
   {
    "titel": "Horizonale Ausrichtung",
    "html": "<div class=\"kern-container\">\n    <div class=\"kern-row kern-justify-content-start\" style=\"min-height: 6rem\">\n      <div class=\"kern-col-3\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"text-start\">Name<\/label>\n          <input class=\"kern-form-input__input\" id=\"text-start\" name=\"text-start\" type=\"text\" />\n        <\/div>\n      <\/div>\n      <div class=\"kern-col-3\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"vorname-start\">Vorname<\/label>\n          <input\n            class=\"kern-form-input__input\"\n            id=\"vorname-start\"\n            name=\"vorname-start\"\n            type=\"text\"\n          />\n        <\/div>\n      <\/div>\n    <\/div>\n\n    <div class=\"kern-row kern-justify-content-center\" style=\"min-height: 6rem\">\n      <div class=\"kern-col-3\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"text-center\">Name<\/label>\n          <input class=\"kern-form-input__input\" id=\"text-center\" name=\"text-center\" type=\"text\" />\n        <\/div>\n      <\/div>\n      <div class=\"kern-col-3\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"vorname-center\">Vorname<\/label>\n          <input\n            class=\"kern-form-input__input\"\n            id=\"vorname-center\"\n            name=\"vorname-center\"\n            type=\"text\"\n          />\n        <\/div>\n      <\/div>\n    <\/div>\n\n    <div class=\"kern-row kern-justify-content-end\" style=\"min-height: 6rem\">\n      <div class=\"kern-col-3\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"text-end\">Name<\/label>\n          <input class=\"kern-form-input__input\" id=\"text-end\" name=\"text-end\" type=\"text\" />\n        <\/div>\n      <\/div>\n      <div class=\"kern-col-3\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"vorname-end\">Vorname<\/label>\n          <input class=\"kern-form-input__input\" id=\"vorname-end\" name=\"vorname-end\" type=\"text\" />\n        <\/div>\n      <\/div>\n    <\/div>\n\n    <div class=\"kern-row kern-justify-content-around\" style=\"min-height: 6rem\">\n      <div class=\"kern-col-3\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"text-around\">Name<\/label>\n          <input class=\"kern-form-input__input\" id=\"text-around\" name=\"text-around\" type=\"text\" />\n        <\/div>\n      <\/div>\n      <div class=\"kern-col-3\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"vorname-around\">Vorname<\/label>\n          <input\n            class=\"kern-form-input__input\"\n            id=\"vorname-around\"\n            name=\"vorname-around\"\n            type=\"text\"\n          />\n        <\/div>\n      <\/div>\n    <\/div>\n\n    <div class=\"kern-row kern-justify-content-between\" style=\"min-height: 6rem\">\n      <div class=\"kern-col-3\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"text-between\">Name<\/label>\n          <input class=\"kern-form-input__input\" id=\"text-between\" name=\"text-between\" type=\"text\" />\n        <\/div>\n      <\/div>\n      <div class=\"kern-col-3\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"vorname-between\">Vorname<\/label>\n          <input\n            class=\"kern-form-input__input\"\n            id=\"vorname-between\"\n            name=\"vorname-between\"\n            type=\"text\"\n          />\n        <\/div>\n      <\/div>\n    <\/div>\n\n    <div class=\"kern-row kern-justify-content-evenly\" style=\"min-height: 6rem\">\n      <div class=\"kern-col-3\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"text-evenly\">Name<\/label>\n          <input class=\"kern-form-input__input\" id=\"text-evenly\" name=\"text-evenly\" type=\"text\" />\n        <\/div>\n      <\/div>\n      <div class=\"kern-col-3\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"vorname-evenly\">Vorname<\/label>\n          <input\n            class=\"kern-form-input__input\"\n            id=\"vorname-evenly\"\n            name=\"vorname-evenly\"\n            type=\"text\"\n          />\n        <\/div>\n      <\/div>\n    <\/div><\/div\n>"
   },
   {
    "titel": "Selbstausrichtung",
    "html": "<div class=\"kern-container\">\n    <div\n      class=\"kern-row kern-align-items-start\"\n      style=\"min-height: 12rem; background-color: var(--kern-neutral-bright-100)\"\n    >\n      <div class=\"kern-col-4\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"text-align-start\">Name<\/label>\n          <input\n            class=\"kern-form-input__input\"\n            id=\"text-align-start\"\n            name=\"text-align-start\"\n            type=\"text\"\n          />\n        <\/div>\n      <\/div>\n      <div class=\"kern-col-4\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"vorname-align-start\">Vorname<\/label>\n          <input\n            class=\"kern-form-input__input\"\n            id=\"vorname-align-start\"\n            name=\"vorname-align-start\"\n            type=\"text\"\n          />\n        <\/div>\n      <\/div>\n      <div class=\"kern-col-4\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"alter-align-start\">Alter<\/label>\n          <input\n            class=\"kern-form-input__input\"\n            id=\"alter-align-start\"\n            name=\"alter-align-start\"\n            type=\"text\"\n          />\n        <\/div>\n      <\/div>\n    <\/div><\/div\n>"
   },
   {
    "titel": "Selbstausrichtung",
    "html": "<div class=\"kern-container\">\n    <div\n      class=\"kern-row kern-align-items-center\"\n      style=\"min-height: 12rem; background-color: var(--kern-neutral-bright-100)\"\n    >\n      <div class=\"kern-col-4\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"text-align-center\">Name<\/label>\n          <input\n            class=\"kern-form-input__input\"\n            id=\"text-align-center\"\n            name=\"text-align-center\"\n            type=\"text\"\n          />\n        <\/div>\n      <\/div>\n      <div class=\"kern-col-4\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"vorname-align-center\">Vorname<\/label>\n          <input\n            class=\"kern-form-input__input\"\n            id=\"vorname-align-center\"\n            name=\"vorname-align-center\"\n            type=\"text\"\n          />\n        <\/div>\n      <\/div>\n      <div class=\"kern-col-4\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"alter-align-center\">Alter<\/label>\n          <input\n            class=\"kern-form-input__input\"\n            id=\"alter-align-center\"\n            name=\"alter-align-center\"\n            type=\"text\"\n          />\n        <\/div>\n      <\/div>\n    <\/div><\/div\n>"
   },
   {
    "titel": "Selbstausrichtung",
    "html": "<div class=\"kern-container\">\n    <div\n      class=\"kern-row kern-align-items-end\"\n      style=\"min-height: 12rem; background-color: var(--kern-neutral-bright-100)\"\n    >\n      <div class=\"kern-col-4\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"text-align-end\">Name<\/label>\n          <input\n            class=\"kern-form-input__input\"\n            id=\"text-align-end\"\n            name=\"text-align-end\"\n            type=\"text\"\n          />\n        <\/div>\n      <\/div>\n      <div class=\"kern-col-4\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"vorname-align-end\">Vorname<\/label>\n          <input\n            class=\"kern-form-input__input\"\n            id=\"vorname-align-end\"\n            name=\"vorname-align-end\"\n            type=\"text\"\n          />\n        <\/div>\n      <\/div>\n      <div class=\"kern-col-4\">\n        <div class=\"kern-form-input\">\n          <label class=\"kern-label\" for=\"alter-align-end\">Alter<\/label>\n          <input\n            class=\"kern-form-input__input\"\n            id=\"alter-align-end\"\n            name=\"alter-align-end\"\n            type=\"text\"\n          />\n        <\/div>\n      <\/div>\n    <\/div><\/div\n>"
   }
  ],
  "pflichten": [
   [
    "Umbruch bei 320 px und 200 % ohne Verlust (1.4.10)",
    "KERN",
    ""
   ]
  ],
  "tasten": [],
  "barriere": [],
  "klassen": [
   [
    "kern-container",
    "Baustein"
   ],
   [
    "kern-col-md-9",
    "Baustein"
   ],
   [
    "kern-col-lg-4",
    "Baustein"
   ],
   [
    "kern-form-input",
    "Baustein"
   ],
   [
    "kern-label",
    "Baustein"
   ],
   [
    "kern-form-input__input",
    "Bestandteil"
   ],
   [
    "kern-row",
    "Baustein"
   ],
   [
    "kern-col-12",
    "Baustein"
   ],
   [
    "kern-col-md-offset-3",
    "Baustein"
   ],
   [
    "kern-justify-content-start",
    "Baustein"
   ],
   [
    "kern-col-3",
    "Baustein"
   ],
   [
    "kern-justify-content-center",
    "Baustein"
   ],
   [
    "kern-justify-content-end",
    "Baustein"
   ],
   [
    "kern-justify-content-around",
    "Baustein"
   ],
   [
    "kern-justify-content-between",
    "Baustein"
   ],
   [
    "kern-justify-content-evenly",
    "Baustein"
   ],
   [
    "kern-align-items-start",
    "Baustein"
   ],
   [
    "kern-col-4",
    "Baustein"
   ],
   [
    "kern-align-items-center",
    "Baustein"
   ],
   [
    "kern-align-items-end",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-hilfsklassen",
  "name": "Hilfsklassen",
  "gruppe": "KERN · Layout",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/layout/hilfsklassen",
  "zweck": "Übersicht der Hilfsklassen für Layout und Abstände.",
  "synonyme": [],
  "aehnlich": [],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Ausrichtung (Justify & Align)",
    "html": "<div class=\"kern-flex kern-align-items-center kern-justify-content-between\">\n    <div>Start<\/div>\n    <div>Mitte<\/div>\n    <div>Ende<\/div>\n  <\/div>"
   },
   {
    "titel": "Ausrichtung (Justify & Align)",
    "html": "<div class=\"kern-flex kern-flex-row kern-flex-col-md kern-align-items-center\">\n    <div>Item 1 (Mobil: Row, MD: Col)<\/div>\n    <div>Item 2<\/div>\n    <div>Item 3<\/div>\n  <\/div>"
   },
   {
    "titel": "Order",
    "html": "<div class=\"kern-flex kern-align-items-center kern-justify-content-between\">\n    <div class=\"kern-order-2 kern-order-first-sm\">A (Mobil: 2, SM: 1)<\/div>\n    <div class=\"kern-order-3 kern-order-2-sm\">B (Mobil: 3, SM: 2)<\/div>\n    <div class=\"kern-order-1 kern-order-last-sm\">C (Mobil: 1 SM: 3)<\/div>\n  <\/div>"
   },
   {
    "titel": "Spalten-Platzierung (Items)",
    "html": "<!-- Grid mit 3 Spalten und kleinem Abstand, größer ab md -->\n  <div class=\"kern-grid kern-grid-cols-3 kern-gap-sm kern-gap-xl-md\">\n    <div>Item 1<\/div>\n    <div>Item 2<\/div>\n    <div>Item 3<\/div>\n  <\/div>"
   },
   {
    "titel": "Spalten-Platzierung (Items)",
    "html": "<div class=\"kern-grid kern-grid-cols-3 kern-gap-sm\">\n    <div class=\"kern-col-2\">Item 1 (Span 2)<\/div>\n    <div>Item 2<\/div>\n    <div>Item 3<\/div>\n    <div class=\"kern-col-2\">Item 4 (Span 2)<\/div>\n  <\/div>"
   },
   {
    "titel": "Drei Spalten Layout",
    "html": "<div class=\"kern-grid\">\n    <div class=\"kern-col-4\">.kern-col-4<\/div>\n    <div class=\"kern-col-4\">.kern-col-4<\/div>\n    <div class=\"kern-col-4\">.kern-col-4<\/div>\n    <div class=\"kern-col-4\">.kern-col-4<\/div>\n    <div class=\"kern-col-4\">.kern-col-4<\/div>\n  <\/div>"
   },
   {
    "titel": "Responsive Anpassung",
    "html": "<div class=\"kern-grid kern-gap-sm\">\n    <div class=\"kern-col-12 kern-col-6-sm kern-col-4-md\">\n      .kern-col-12 .kern-col-6-sm .kern-col-4-md\n    <\/div>\n    <div class=\"kern-col-12 kern-col-6-sm kern-col-4-md\">\n      .kern-col-12 .kern-col-6-sm .kern-col-4-md\n    <\/div>\n    <div class=\"kern-col-12 kern-col-6-sm kern-col-4-md\">\n      .kern-col-12 .kern-col-6-sm .kern-col-4-md\n    <\/div>\n    <div class=\"kern-col-12 kern-col-6-sm kern-col-4-md\">\n      .kern-col-12 .kern-col-6-sm .kern-col-4-md\n    <\/div>\n  <\/div>"
   },
   {
    "titel": "3. Wrapping",
    "html": "<div class=\"kern-grid kern-grid-cols-12 kern-gap-sm\">\n    <!-- 4 Items à 6 Spalten = 24 Spalten = 2 Zeilen -->\n    <div class=\"kern-col-6\">.kern-col-6<\/div>\n    <div class=\"kern-col-6\">.kern-col-6<\/div>\n    <div class=\"kern-col-6\">.kern-col-6<\/div>\n    <div class=\"kern-col-6\">.kern-col-6<\/div>\n  <\/div>"
   },
   {
    "titel": "4. Positionierung (Starts & Ends)",
    "html": "<div class=\"kern-grid kern-grid-cols-6 kern-gap-sm\">\n    <div class=\"kern-col-2 kern-col-start-2\">.kern-col-start-2<\/div>\n    <div class=\"kern-col-start-5 kern-col-end-1\">.kern-col-start-5<\/div>\n  <\/div>"
   },
   {
    "titel": "5. Automatische Spalten (Auto Columns)",
    "html": "<div class=\"kern-grid kern-grid-cols-12 kern-gap-sm\">\n    <div class=\"kern-col-3\">.kern-col-3<\/div>\n    <div class=\"kern-col-auto\">.kern-col-auto<\/div>\n    <div class=\"kern-col-3\">.kern-col-3<\/div>\n  <\/div>"
   },
   {
    "titel": "6. Verschachtelung (Nesting)",
    "html": "<div class=\"kern-grid kern-grid-cols-2 kern-gap-md\">\n    <div>Spalte 1<\/div>\n    <div class=\"kern-grid kern-grid-cols-2 kern-gap-xs\">\n      <div>Nested 1<\/div>\n      <div>Nested 2<\/div>\n    <\/div>\n  <\/div>"
   },
   {
    "titel": "7. Ausrichtung (Alignment)",
    "html": "<!-- Container Level -->\n  <div class=\"kern-grid kern-grid-cols-3 kern-gap-sm kern-align-items-center\">\n    <div>Default (Center)<\/div>\n    <!-- Item Level Overrides -->\n    <div class=\"kern-align-self-start\">.kern-align-self-start<\/div>\n    <div class=\"kern-align-self-end\">.kern-align-self-end<\/div>\n  <\/div>"
   },
   {
    "titel": "Gap (Abstände)",
    "html": "<p class=\"kern-body\">Beispiel: None (Default)<\/p>\n  <div class=\"kern-flex\">\n    <div>1<\/div>\n    <div>3<\/div>\n    <div>2<\/div>\n  <\/div>\n\n  <p class=\"kern-body\">Beispiel: 2x-small<\/p>\n  <div class=\"kern-flex kern-gap-xxs\">\n    <div>1<\/div>\n    <div>2<\/div>\n    <div>3<\/div>\n  <\/div>\n\n  <p class=\"kern-body\">Beispiel: x-small<\/p>\n  <div class=\"kern-flex kern-gap-xs\">\n    <div>1<\/div>\n    <div>2<\/div>\n    <div>3<\/div>\n  <\/div>\n\n  <p class=\"kern-body\">Beispiel: small<\/p>\n  <div class=\"kern-flex kern-gap-sm\">\n    <div>1<\/div>\n    <div>2<\/div>\n    <div>3<\/div>\n  <\/div>\n\n  <p class=\"kern-body\">Beispiel: Default<\/p>\n  <div class=\"kern-flex kern-gap-md\">\n    <div>1<\/div>\n    <div>2<\/div>\n    <div>3<\/div>\n  <\/div>\n\n  <p class=\"kern-body\">Beispiel: Large<\/p>\n  <div class=\"kern-flex kern-gap-lg\">\n    <div>1<\/div>\n    <div>2<\/div>\n    <div>3<\/div>\n  <\/div>\n\n  <p class=\"kern-body\">Beispiel: X-Large<\/p>\n  <div class=\"kern-flex kern-gap-xl\">\n    <div>1<\/div>\n    <div>2<\/div>\n    <div>3<\/div>\n  <\/div>"
   },
   {
    "titel": "Gap (Abstände)",
    "html": "<div\n    class=\"kern-grid kern-grid-cols-2 kern-grid-rows-2 kern-gap-md kern-gap-xxs-sm kern-gap-xl-md kern-gap-xs-xl kern-gap-xl-xxl\"\n  >\n    <div>1<\/div>\n    <div>2<\/div>\n    <div>3<\/div>\n    <div>4<\/div>\n  <\/div>"
   },
   {
    "titel": "Verfügbare Breakpoints",
    "html": "<!-- Außenabstand (Margin) oben und unten: Mittel (16px) -->\n  <div class=\"kern-my-md\">Inhalt mit vertikalem Margin<\/div>\n\n  <!-- Innenabstand (Padding) überall: Groß (24px) -->\n  <div class=\"kern-p-lg\">Inhalt mit viel Padding<\/div>"
   },
   {
    "titel": "Verfügbare Breakpoints",
    "html": "<div class=\"kern-p-sm kern-p-lg-md\">\n    Responsive Padding: Klein (8px) auf Mobile Groß (24px) ab Tablet.\n  <\/div>"
   },
   {
    "titel": "Verfügbare Breakpoints",
    "html": "<div class=\"kern-mx-auto\">Zentriertes Element (50% Breite)<\/div>"
   },
   {
    "titel": "Stack",
    "html": "<div class=\"kern-stack kern-stack-lg\">\n    <div>Item Oben<\/div>\n    <div>Item Mitte<\/div>\n    <div>Item Unten<\/div>\n  <\/div>"
   },
   {
    "titel": "Verschachtelter Stack",
    "html": "<div class=\"kern-stack\">\n    <p class=\"kern-body\">Zeile 1 (stack)<\/p>\n    <p class=\"kern-body\">Zeile 2 (stack)<\/p>\n    <div class=\"kern-stack-sm\">\n      <p class=\"kern-body\">Zeile 3-1 (stack-sm)<\/p>\n      <p class=\"kern-body\">Zeile 3-2 (stack-sm)<\/p>\n    <\/div>\n    <p class=\"kern-body\">Zeile 4 (stack)<\/p>\n    <p class=\"kern-body\">Zeile 5 (stack)<\/p>\n    <div class=\"kern-stack-lg\">\n      <p class=\"kern-body\">Zeile 6-1 (stack-lg)<\/p>\n      <p class=\"kern-body\">Zeile 6-2 (stack-lg)<\/p>\n      <div class=\"kern-stack-sm\">\n        <p class=\"kern-body\">Zeile 6-3-1 (stack-sm)<\/p>\n        <p class=\"kern-body\">Zeile 6-3-2 (stack-sm)<\/p>\n      <\/div>\n      <p class=\"kern-body\">Zeile 6-4 (stack-lg)<\/p>\n      <p class=\"kern-body\">Zeile 6-5 (stack-lg)<\/p>\n      <div class=\"kern-stack-none\">\n        <p class=\"kern-body\">Zeile 6-6-1 (stack-none)<\/p>\n        <p class=\"kern-body\">Zeile 6-6-2 (stack-none)<\/p>\n      <\/div>\n      <p class=\"kern-body\">Zeile 6-7 (stack-lg)<\/p>\n      <p class=\"kern-body\">Zeile 6-8 (stack-lg)<\/p>\n      <div class=\"kern-stack-xl\">\n        <p class=\"kern-body\">Zeile 6-9-1 (stack-xl)<\/p>\n        <p class=\"kern-body\">Zeile 6-9-2 (stack-xl)<\/p>\n      <\/div>\n      <p class=\"kern-body\">Zeile 6-10 (stack-lg)<\/p>\n      <p class=\"kern-body\">Zeile 6-11 (stack-lg)<\/p>\n    <\/div>\n    <p class=\"kern-body\">Zeile 7 (stack)<\/p>\n    <p class=\"kern-body\">Zeile 8 (stack)<\/p>\n  <\/div>"
   },
   {
    "titel": "Responsive Stack",
    "html": "<div class=\"kern-stack kern-stack-none-md\">\n    <p class=\"kern-body\">kern-stack kern-stack-none-md<\/p>\n    <p class=\"kern-body\">kern-stack kern-stack-none-md<\/p>\n    <p class=\"kern-body\">kern-stack kern-stack-none-md<\/p>\n  <\/div>\n\n  <div class=\"kern-stack kern-stack-xs kern-stack-xl-lg\">\n    <p class=\"kern-body\">kern-stack-xs kern-stack-xl-lg<\/p>\n    <p class=\"kern-body\">kern-stack-xs kern-stack-xl-lg<\/p>\n    <p class=\"kern-body\">kern-stack-xs kern-stack-xl-lg<\/p>\n  <\/div>"
   },
   {
    "titel": "Visibility & Display",
    "html": "<div>\n    <!-- Nur für Screenreader -->\n    <span class=\"kern-sr-only\">Wichtige Info für seheingeschränkte Personen<\/span>\n\n    <!-- Visuelle Demo -->\n    <div class=\"kern-block\">Immer sichtbar<\/div>\n\n    <div class=\"kern-hidden-md\">Sichtbar auf Mobile, versteckt ab MD.<\/div>\n\n    <div class=\"kern-sr-only-mobile\">Versteckt auf Mobile (sr-only) sichtbar auf Desktop.<\/div>\n  <\/div>"
   },
   {
    "titel": "Aspect Ratio mit Beispielen",
    "html": "<div class=\"kern-grid kern-grid-cols-3 kern-gap-md\">\n    <div class=\"kern-aspect-square\">Square (1:1)<\/div>\n    <div class=\"kern-aspect-video\">Video (16:9)<\/div>\n    <div class=\"kern-aspect-auto\">Auto<\/div>\n  <\/div>"
   },
   {
    "titel": "Overflow",
    "html": "<div class=\"kern-grid kern-grid-cols-2 kern-gap-md\">\n    <div class=\"kern-overflow-auto\">\n      <p class=\"kern-boby\" style=\"width: 120%; height: 120px\">\n        .kern-overflow-<strong>auto<\/strong>: Scrollbars erscheinen nur, weil der Text zu lang ist.\n      <\/p>\n    <\/div>\n\n    <div class=\"kern-overflow-hidden\">\n      <p class=\"kern-boby\" style=\"width: 120%; height: 120px\">\n        .kern-overflow-<strong>hidden<\/strong>: Dieser Text wird abgeschnitten, es gibt keine\n        Scrollbars.\n      <\/p>\n    <\/div>\n\n    <div class=\"kern-overflow-y-scroll\">\n      <p class=\"kern-boby\" style=\"width: 90%; height: 120px\">\n        .kern-overflow-y-<strong>scroll<\/strong>: Hier gibt es nur eine vertikale Scrollbar.\n      <\/p>\n    <\/div>\n\n    <div class=\"kern-overflow-visible\">\n      <p class=\"kern-boby\" style=\"width: 120%; height: 120px\">\n        .kern-overflow-<strong>visible<\/strong>: Inhalt ragt über die Grenzen hinaus.\n      <\/p>\n    <\/div>\n  <\/div>"
   }
  ],
  "pflichten": [
   [
    "kern-sr-only nur für zusätzliche Hinweise",
    "Anwendung",
    ""
   ]
  ],
  "tasten": [],
  "barriere": [],
  "klassen": [
   [
    "kern-flex",
    "Baustein"
   ],
   [
    "kern-align-items-center",
    "Baustein"
   ],
   [
    "kern-justify-content-between",
    "Baustein"
   ],
   [
    "kern-flex-row",
    "Baustein"
   ],
   [
    "kern-flex-col-md",
    "Baustein"
   ],
   [
    "kern-order-2",
    "Baustein"
   ],
   [
    "kern-order-first-sm",
    "Baustein"
   ],
   [
    "kern-order-3",
    "Baustein"
   ],
   [
    "kern-order-2-sm",
    "Baustein"
   ],
   [
    "kern-order-1",
    "Baustein"
   ],
   [
    "kern-order-last-sm",
    "Baustein"
   ],
   [
    "kern-grid",
    "Baustein"
   ],
   [
    "kern-grid-cols-3",
    "Baustein"
   ],
   [
    "kern-gap-sm",
    "Baustein"
   ],
   [
    "kern-gap-xl-md",
    "Baustein"
   ],
   [
    "kern-col-2",
    "Baustein"
   ],
   [
    "kern-col-4",
    "Baustein"
   ],
   [
    "kern-col-12",
    "Baustein"
   ],
   [
    "kern-col-6-sm",
    "Baustein"
   ],
   [
    "kern-col-4-md",
    "Baustein"
   ],
   [
    "kern-grid-cols-12",
    "Baustein"
   ],
   [
    "kern-col-6",
    "Baustein"
   ],
   [
    "kern-grid-cols-6",
    "Baustein"
   ],
   [
    "kern-col-start-2",
    "Baustein"
   ],
   [
    "kern-col-start-5",
    "Baustein"
   ],
   [
    "kern-col-end-1",
    "Baustein"
   ],
   [
    "kern-col-3",
    "Baustein"
   ],
   [
    "kern-col-auto",
    "Baustein"
   ],
   [
    "kern-grid-cols-2",
    "Baustein"
   ],
   [
    "kern-gap-md",
    "Baustein"
   ],
   [
    "kern-gap-xs",
    "Baustein"
   ],
   [
    "kern-align-self-start",
    "Baustein"
   ],
   [
    "kern-align-self-end",
    "Baustein"
   ],
   [
    "kern-body",
    "Baustein"
   ],
   [
    "kern-gap-xxs",
    "Baustein"
   ],
   [
    "kern-gap-lg",
    "Baustein"
   ],
   [
    "kern-gap-xl",
    "Baustein"
   ],
   [
    "kern-grid-rows-2",
    "Baustein"
   ],
   [
    "kern-gap-xxs-sm",
    "Baustein"
   ],
   [
    "kern-gap-xs-xl",
    "Baustein"
   ],
   [
    "kern-gap-xl-xxl",
    "Baustein"
   ],
   [
    "kern-my-md",
    "Baustein"
   ],
   [
    "kern-p-lg",
    "Baustein"
   ],
   [
    "kern-p-sm",
    "Baustein"
   ],
   [
    "kern-p-lg-md",
    "Baustein"
   ],
   [
    "kern-mx-auto",
    "Baustein"
   ],
   [
    "kern-stack",
    "Baustein"
   ],
   [
    "kern-stack-lg",
    "Baustein"
   ],
   [
    "kern-stack-sm",
    "Baustein"
   ],
   [
    "kern-stack-none",
    "Baustein"
   ],
   [
    "kern-stack-xl",
    "Baustein"
   ],
   [
    "kern-stack-none-md",
    "Baustein"
   ],
   [
    "kern-stack-xs",
    "Baustein"
   ],
   [
    "kern-stack-xl-lg",
    "Baustein"
   ],
   [
    "kern-sr-only",
    "Baustein"
   ],
   [
    "kern-block",
    "Baustein"
   ],
   [
    "kern-hidden-md",
    "Baustein"
   ],
   [
    "kern-sr-only-mobile",
    "Baustein"
   ],
   [
    "kern-aspect-square",
    "Baustein"
   ],
   [
    "kern-aspect-video",
    "Baustein"
   ],
   [
    "kern-aspect-auto",
    "Baustein"
   ],
   [
    "kern-overflow-auto",
    "Baustein"
   ],
   [
    "kern-boby",
    "Baustein"
   ],
   [
    "kern-overflow-hidden",
    "Baustein"
   ],
   [
    "kern-overflow-y-scroll",
    "Baustein"
   ],
   [
    "kern-overflow-visible",
    "Baustein"
   ]
  ]
 },
 {
  "id": "kern-kopfzeile",
  "name": "Kopfzeile",
  "gruppe": "KERN · Layout",
  "herkunft": "KERN 2.8.2",
  "quelle": "https://www.kern-ux.de/komponenten/kopfzeile",
  "zweck": "Kennzeichnet digitale Auftritte der öffentlichen Verwaltung, wie Behörden, Online-Dienste oder Serviceportale.",
  "synonyme": [
   "Banner",
   "Site Banner",
   "Identifier"
  ],
  "aehnlich": [],
  "wann": [],
  "nicht": [],
  "bsp": [
   {
    "titel": "Container Kopfzeile",
    "html": "<div class=\"kern-kopfzeile\">\n    <div class=\"kern-container\">\n      <div class=\"kern-kopfzeile__content\">\n        <span class=\"kern-kopfzeile__flagge\" aria-hidden=\"true\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 16\">\n            <path fill=\"#000\" d=\"M0 .5h24v5.333H0z\" />\n            <path fill=\"red\" d=\"M0 5.833h24v5.333H0z\" />\n            <path fill=\"#FACA2C\" d=\"M0 11.167h24V16.5H0z\" />\n          <\/svg>\n        <\/span>\n        <span class=\"kern-kopfzeile__label\"> Offizielle Website – Bundesrepublik Deutschland <\/span>\n      <\/div>\n    <\/div>\n  <\/div>"
   },
   {
    "titel": "Fluid Kopfzeile",
    "html": "<div class=\"kern-kopfzeile\">\n    <div class=\"kern-container-fluid\">\n      <div class=\"kern-kopfzeile__content\">\n        <span class=\"kern-kopfzeile__flagge\" aria-hidden=\"true\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 16\">\n            <path fill=\"#000\" d=\"M0 .5h24v5.333H0z\" />\n            <path fill=\"red\" d=\"M0 5.833h24v5.333H0z\" />\n            <path fill=\"#FACA2C\" d=\"M0 11.167h24V16.5H0z\" />\n          <\/svg>\n        <\/span>\n        <span class=\"kern-kopfzeile__label\"> Offizielle Website – Bundesrepublik Deutschland <\/span>\n      <\/div>\n    <\/div>\n  <\/div>"
   }
  ],
  "pflichten": [
   [
    "Nur für öffentliche Stellen, unverändert, nie sticky",
    "Anwendung",
    "KERN-Vorgabe"
   ]
  ],
  "tasten": [],
  "barriere": [],
  "klassen": [
   [
    "kern-kopfzeile",
    "Baustein"
   ],
   [
    "kern-container",
    "Baustein"
   ],
   [
    "kern-kopfzeile__content",
    "Bestandteil"
   ],
   [
    "kern-kopfzeile__flagge",
    "Bestandteil"
   ],
   [
    "kern-kopfzeile__label",
    "Bestandteil"
   ],
   [
    "kern-container-fluid",
    "Baustein"
   ]
  ]
 }
];
