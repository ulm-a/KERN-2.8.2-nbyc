/**
 * KERN 2.8.2 (nbyc) — KATALOGINHALT
 *
 * Eine Komponente = ein Eintrag. Felder:
 *   id        Kennung, steht in der Adresse (#knopf)
 *   name      Anzeigename
 *   gruppe    Für die linke Navigation
 *   zweck     Ein Satz: wofür ist das da
 *   wann      Wann nimmt man es
 *   nicht     Wann nimmt man es NICHT — mit Angabe, was stattdessen
 *   bsp       Beispiele: { titel, hinweis, html }
 *   barriere  Was für die Barrierefreiheit zu beachten ist
 *   klassen   [Klasse, Bedeutung]
 *
 * Die Beispiele werden live gerendert UND als Quelltext gezeigt.
 * Beides aus demselben String — die Quelle kann nie abweichen.
 */
window.KATALOG = [

/* ================= GRUNDLAGEN ================= */
{
  id: "farbe", name: "Farbe", gruppe: "Grundlagen",
  zweck: "Drei Schichten: Primitive ohne Bedeutung, Semantik mit Bedeutung, " +
         "Komponententoken je Baustein. Komponenten benutzen nur die Semantik.",
  wann: ["Immer über die semantischen Namen — nie über Primitive."],
  nicht: ["Nie einen Farbwert direkt schreiben. Dann bricht jeder Modus."],
  bsp: [{
    titel: "Semantische Flächen und Texte",
    hinweis: "Oben in der Leiste den Modus umschalten — dieselben Namen, andere Werte.",
    html:
'<div class="kn-auto-grid" style="--kn-auto-grid-min:11rem">\n' +
'  <div class="kn-swatch" style="background:var(--kern-color-layout-background-default)">layout-background-default</div>\n' +
'  <div class="kn-swatch" style="background:var(--kern-color-layout-background-hued)">layout-background-hued</div>\n' +
'  <div class="kn-swatch" style="background:var(--kern-color-action-default);color:var(--kern-color-action-on-default)">action-default</div>\n' +
'  <div class="kn-swatch" style="background:var(--kern-color-feedback-info-background)">feedback-info-background</div>\n' +
'  <div class="kn-swatch" style="background:var(--kern-color-feedback-success-background)">feedback-success-background</div>\n' +
'  <div class="kn-swatch" style="background:var(--kern-color-feedback-danger-background)">feedback-danger-background</div>\n' +
'</div>'
  }],
  barriere: ["Alle Paare erreichen 4,5 zu 1 für Text, 3 zu 1 für Ränder — in allen vier Modi.",
             "Farbe ist nie der einzige Träger einer Aussage. Jeder Zustand hat zusätzlich ein Zeichen oder ein Wort."],
  klassen: [["--kern-color-layout-background-default, -hued", "Flächen"],
            ["--kern-color-layout-text-default, -muted", "Textfarben"],
            ["--kern-color-action-default, -on-default", "Aktionsfarbe und was darauf steht"],
            ["--kern-color-feedback-info/-success/-warning/-danger(-background)", "Rückmeldung"],
            ["*-contextual", "dieselben Rollen je Ebene (.kern-level-1/-2) — für eigene Bausteine"]]
},

/* ================= AKTION ================= */
{
  id: "dichte", name: "Dichte-Stufen (Einstellseite)", gruppe: "Grundlagen",
  zweck: "Drei feste Stufen für Bedienhöhe und Tabellenzeilen — kompakt, normal (= KERN), weit. Ausprobieren und als kern-anpassung.css herunterladen.",
  wann: ["Für Fachanwendungen mit langen Tabellen (kompakt) oder für Menschen, die größere Ziele brauchen (weit).",
         "Nur nach Abwägung: KERN rät, Typografie, Farben und Abstände so zu belassen, wie sie sind."],
  nicht: ["Nicht für Bürgerformulare — dort bleibt KERN (normal).",
          "Keine eigenen Werte: Die Stufen nehmen nur Werte aus KERNs Skala; Farben sind nie einstellbar."],
  bsp: [{
    titel: "Stufe wählen, Vorschau, herunterladen",
    hinweis: "Die Werte stehen nur in 01b-erweiterung.css (Abschnitt 7); diese Seite liest sie von dort. Die Datei wird NACH kern-neu.css eingebunden.",
    html:
'<fieldset class=\"kern-fieldset\" data-kn-density-for=\"dichte-vorschau\">\n' +
'  <legend class=\"kern-label\">Dichte</legend>\n' +
'  <div class=\"kern-fieldset__body kern-fieldset__body--horizontal\">\n' +
'    <div class=\"kern-form-check\"><input class=\"kern-form-check__radio\" id=\"d-kompakt\" name=\"dichte\" type=\"radio\" value=\"compact\"><label class=\"kern-label\" for=\"d-kompakt\">kompakt</label></div>\n' +
'    <div class=\"kern-form-check\"><input class=\"kern-form-check__radio\" id=\"d-normal\" name=\"dichte\" type=\"radio\" value=\"normal\" checked><label class=\"kern-label\" for=\"d-normal\">normal (KERN)</label></div>\n' +
'    <div class=\"kern-form-check\"><input class=\"kern-form-check__radio\" id=\"d-weit\" name=\"dichte\" type=\"radio\" value=\"spacious\"><label class=\"kern-label\" for=\"d-weit\">weit</label></div>\n' +
'  </div>\n' +
'</fieldset>\n' +
'<p class=\"kern-body kern-body--small\" data-kn-density-status></p>\n' +
'<div id=\"dichte-vorschau\" class=\"kern-stack\" style=\"margin-block:1rem\">\n' +
'  <div class=\"kern-flex kern-flex-wrap kern-gap-sm\">\n' +
'    <button class=\"kern-btn kern-btn--primary\" type=\"button\"><span class=\"kern-label\">Speichern</span></button>\n' +
'    <button class=\"kern-btn kern-btn--secondary\" type=\"button\"><span class=\"kern-label\">Abbrechen</span></button>\n' +
'  </div>\n' +
'  <div class=\"kern-form-input\"><label class=\"kern-label\" for=\"d-feld\">Aktenzeichen</label><input class=\"kern-form-input__input\" id=\"d-feld\" type=\"text\"></div>\n' +
'  <div class=\"kern-form-check\"><input class=\"kern-form-check__checkbox\" id=\"d-check\" type=\"checkbox\"><label class=\"kern-label\" for=\"d-check\">Wiedervorlage setzen</label></div>\n' +
'  <nav class=\"kn-pagination\" aria-label=\"Seiten (Vorschau)\"><a class=\"kn-pagination__button\" href=\"#\" aria-current=\"page\">1</a><a class=\"kn-pagination__button\" href=\"#\">2</a></nav>\n' +
'</div>\n' +
'<table class=\"kern-table kern-table--small\">\n' +
'  <caption class=\"kern-title\">Was jede Stufe setzt</caption>\n' +
'  <thead class=\"kern-table__head\"><tr class=\"kern-table__row\"><th class=\"kern-table__header\" scope=\"col\">Token</th><th class=\"kern-table__header\" scope=\"col\">kompakt</th><th class=\"kern-table__header\" scope=\"col\">normal</th><th class=\"kern-table__header\" scope=\"col\">weit</th></tr></thead>\n' +
'  <tbody class=\"kern-table__body\" data-kn-density-table></tbody>\n' +
'</table>\n' +
'<div class=\"kern-flex kern-flex-wrap kern-gap-sm\" style=\"margin-block-start:1rem\">\n' +
'  <button class=\"kern-btn kern-btn--primary\" type=\"button\" data-kn-density-export aria-disabled=\"true\"><span class=\"kern-label\">Anpassung herunterladen</span></button>\n' +
'  <button class=\"kern-btn kern-btn--secondary\" type=\"button\" onclick=\"document.getElementById(\'d-normal\').click()\"><span class=\"kern-label\">Auf KERN zurücksetzen</span></button>\n' +
'</div>'
  }],
  barriere: ["Auch kompakt bleibt über WCAG 2.5.8: 40 px statt der verlangten 24 px.",
             "Die Statuszeile zeigt, ob die Stufe von KERN abweicht; der Wechsel wird angesagt (zentrale Ansage, M61).",
             "Der Export ist in der Grundstellung gesperrt (aria-disabled) — es gibt nichts abzuweichen."],
  tasten: [["← → in der Stufenwahl", "wählt die Stufe (nativ)", "„Stufe … — Abweichung von KERN.“"], ["Enter auf Export", "lädt kern-anpassung.css; in der Grundstellung gesperrt", ""]],
  klassen: [["data-kn-density=\"compact|spacious\"", "Stufe für einen Bereich oder die ganze Seite (<html>)"],
            ["data-kn-density-for", "Auswahlgruppe → Vorschau"], ["data-kn-density-export", "Download kern-anpassung.css"]]
},
{
  id: "sprache", name: "Sprache und Texte", gruppe: "Grundlagen",
  herkunft: "Grundlage — Verweis auf KERN „Sprache und Tonalität“, Regeln aus KERN (V14, V16)",
  quelle: "https://www.kern-ux.de/design-system/sprache_und_tonalitaet",
  zweck: "Wie Texte in Oberflächen klingen. Es gilt KERNs „Sprache und Tonalität“ — hier stehen nur die Regeln für die Texte in Bausteinen: Fehlermeldung, Beschriftung und Hinweis, Knopf und Verweis, Datum und Zahl.",
  wann: ["Bei jedem Text in einer Oberfläche: Beschriftung, Hinweis, Fehlermeldung, Knopf, Meldung, Überschrift.",
         "KERNs Grundregeln (Original verlinkt): einfache Sprache, ein Satz höchstens 20 Wörter, Hauptsätze mit höchstens zwei Nebensätzen, aktiv statt Nominalstil, Anrede „Sie“, eindringlich und freundlich — nie servil."],
  nicht: ["Kein zweiter Leitfaden neben KERN: Was KERN regelt, steht dort und wird hier nicht abgeschrieben.",
          "Leichte Sprache ist etwas anderes als einfache Sprache: Sie braucht eigene, vollständig neu bearbeitete Texte (KERN: im Einzelfall abwägen)."],
  bsp: [{
    titel: "Stil — Beispiele aus KERN",
    html:
'<table class="kern-table">\n' +
'  <caption class="kern-sr-only">Stil: so und nicht so</caption>\n' +
'  <thead class="kern-table__head"><tr class="kern-table__row"><th class="kern-table__header" scope="col">So</th><th class="kern-table__header" scope="col">Nicht so</th><th class="kern-table__header" scope="col">Warum</th></tr></thead>\n' +
'  <tbody class="kern-table__body">\n' +
'    <tr class="kern-table__row"><td class="kern-table__cell">Einen Reisepass beantragen</td><td class="kern-table__cell">Antrag auf Ausstellung eines Reisepasses</td><td class="kern-table__cell">Verb statt Nominalstil</td></tr>\n' +
'    <tr class="kern-table__row"><td class="kern-table__cell">Wir bitten Sie, …</td><td class="kern-table__cell">Besucher werden gebeten, …</td><td class="kern-table__cell">aktiv, direkte Anrede</td></tr>\n' +
'    <tr class="kern-table__row"><td class="kern-table__cell">Für den Antrag brauchen Sie …</td><td class="kern-table__cell">Antragsteller/innen benötigen …</td><td class="kern-table__cell">direkte Anrede erspart das Gendern; wenn nötig: Doppelpunkt (Nutzer:innen)</td></tr>\n' +
'  </tbody>\n' +
'</table>'
  }, {
    titel: "Fehlermeldung am Feld (KERN, V14)",
    hinweis: "KERN: konstruktiv, verständlich, prägnant, empathisch — eine Ursache und was man tun kann. Der Wortlaut steht gleich am Feld und in der Fehlerzusammenfassung. Erst beim Absenden zeigen, nicht bei jedem Tastendruck.",
    html:
'<div class="kern-form-input kern-form-input--error">\n' +
'  <label class="kern-label" for="sp-geb">Geburtsdatum</label>\n' +
'  <div class="kern-hint" id="sp-geb-hint">Zum Beispiel 27.03.1985.</div>\n' +
'  <input class="kern-form-input__input kern-form-input__input--error kn-input--width-10" id="sp-geb" type="text" inputmode="numeric"\n' +
'         aria-invalid="true" aria-describedby="sp-geb-hint sp-geb-fehler" value="27.13.1985">\n' +
'  <p class="kern-error" id="sp-geb-fehler">\n' +
'    <span class="kern-icon kern-icon--danger kern-icon--md" aria-hidden="true"></span>\n' +
'    <span class="kern-body">Den Monat gibt es nicht. Geben Sie das Datum als Tag.Monat.Jahr ein, zum Beispiel 27.03.1985.</span>\n' +
'  </p>\n' +
'</div>'
  }, {
    titel: "Fehlermeldungen — so und nicht so",
    html:
'<table class="kern-table">\n' +
'  <caption class="kern-sr-only">Fehlermeldungen: so und nicht so</caption>\n' +
'  <thead class="kern-table__head"><tr class="kern-table__row"><th class="kern-table__header" scope="col">So</th><th class="kern-table__header" scope="col">Nicht so</th></tr></thead>\n' +
'  <tbody class="kern-table__body">\n' +
'    <tr class="kern-table__row"><td class="kern-table__cell">Geben Sie Ihren Familiennamen ein</td><td class="kern-table__cell">Pflichtfeld!</td></tr>\n' +
'    <tr class="kern-table__row"><td class="kern-table__cell">Die IBAN hat 22 Stellen. Sie haben 21 eingegeben.</td><td class="kern-table__cell">Ungültige Eingabe</td></tr>\n' +
'    <tr class="kern-table__row"><td class="kern-table__cell">Wählen Sie, wie wir Ihnen antworten sollen</td><td class="kern-table__cell">Fehler 422: Feld „weg“ leer</td></tr>\n' +
'  </tbody>\n' +
'</table>'
  }, {
    titel: "Beschriftung, Hinweis, Optional (KERN, V14)",
    hinweis: "Beschriftung ohne Doppelpunkt, einzeilig. Pflicht ist die Regel und wird nicht markiert; die wenigen freiwilligen Felder tragen „- Optional“ (kein Sternchen). Der Hinweis ist ein ganzer Satz, ohne Verweise.",
    html:
'<div class="kern-form-input">\n' +
'  <label class="kern-label" for="sp-tel">Telefonnummer <span class="kern-label__optional">- Optional</span></label>\n' +
'  <div class="kern-hint" id="sp-tel-hint">Wir rufen nur an, wenn eine Angabe unklar ist.</div>\n' +
'  <input class="kern-form-input__input kn-input--width-20" id="sp-tel" type="tel" autocomplete="tel" aria-describedby="sp-tel-hint">\n' +
'</div>'
  }, {
    titel: "Knopf und Verweis, Datum und Zahl",
    html:
'<table class="kern-table">\n' +
'  <caption class="kern-sr-only">Knopf, Verweis, Datum und Zahl</caption>\n' +
'  <thead class="kern-table__head"><tr class="kern-table__row"><th class="kern-table__header" scope="col">Was</th><th class="kern-table__header" scope="col">So</th><th class="kern-table__header" scope="col">Nicht so</th></tr></thead>\n' +
'  <tbody class="kern-table__body">\n' +
'    <tr class="kern-table__row"><td class="kern-table__cell">Knopf</td><td class="kern-table__cell">Antrag absenden · Vorgang löschen</td><td class="kern-table__cell">OK · Ja · Weiter, wo es nicht weitergeht</td></tr>\n' +
'    <tr class="kern-table__row"><td class="kern-table__cell">Verweis</td><td class="kern-table__cell">Bescheid vom 13.10.2026 ansehen</td><td class="kern-table__cell">hier klicken · mehr</td></tr>\n' +
'    <tr class="kern-table__row"><td class="kern-table__cell">Datum</td><td class="kern-table__cell">13.10.2026 · im Satz: 13. Oktober 2026</td><td class="kern-table__cell">2026-10-13 · 13.10.26</td></tr>\n' +
'    <tr class="kern-table__row"><td class="kern-table__cell">Uhrzeit</td><td class="kern-table__cell">14:30 Uhr</td><td class="kern-table__cell">14.30h · 2:30 PM</td></tr>\n' +
'    <tr class="kern-table__row"><td class="kern-table__cell">Zahl, Betrag</td><td class="kern-table__cell">1.640 · 1.640,50 €</td><td class="kern-table__cell">1640 · EUR 1,640.50</td></tr>\n' +
'  </tbody>\n' +
'</table>'
  }],
  barriere: ["Knopf- und Verweistexte müssen ohne Umgebung verständlich sein (WCAG 2.4.4, 2.4.6): Screenreader listen sie einzeln auf.",
             "Fehlermeldung am Feld und Verweis in der Fehlerzusammenfassung tragen denselben Wortlaut; die Meldung ist über aria-describedby mit dem Feld verbunden.",
             "Die Art einer Meldung steht als Wort im Text (Hinweis, Fehler), nicht nur in Farbe oder Symbol.",
             "Sprache der Seite im lang-Attribut. Die Systemtexte von kern-neu.js (Ansagen, Kalender, Fehlerzusammenfassung) folgen ihm: Deutsch oder Englisch."],
  tasten: [["Tab", "erreicht das Feld", "Beschriftung, „Optional“, Hinweis und Fehlermeldung"]],
  klassen: [["kern-label", "Beschriftung, ohne Doppelpunkt"], ["kern-label__optional", "„- Optional“ für freiwillige Felder"],
            ["kern-hint", "Hinweis, ganzer Satz"], ["kern-error", "Fehlermeldung am Feld"]]
},
{
  id: "segmente", name: "Segmentwahl", gruppe: "Aktion",
  zweck: "Wechselt zwischen zwei bis vier sich ausschließenden Sichten auf DIESELBEN Daten.",
  wann: ["Liste gegen Karten gegen Zeitleiste.", "Hell gegen Dunkel."],
  nicht: ["Wenn sich der INHALT ändert — dafür sind Reiter da.",
          "Ab fünf Möglichkeiten: dann ein Auswahlfeld."],
  bsp: [{
    titel: "Drei Sichten",
    html:
'<div class="kn-segmented" role="group" aria-label="Ansicht">\n' +
'  <button class="kn-segmented__button" aria-pressed="true">Liste</button>\n' +
'  <button class="kn-segmented__button" aria-pressed="false">Karten</button>\n' +
'  <button class="kn-segmented__button" aria-pressed="false">Zeitleiste</button>\n' +
'</div>'
  }],
  barriere: ["Zustand über aria-pressed, nicht über eine Klasse allein.",
             "Im Windows-Kontrastmodus trägt die Systemfarbe Highlight den Zustand."],
  tasten: [["Tab", "erreicht jede Wahl", ""], ["Enter, Leertaste", "wählt diese, die anderen nicht mehr", "„gedrückt“ / „nicht gedrückt“"]],
  klassen: [["kn-segmented", "Rahmen"], ["kn-segmented__button", "je Sicht"], ["aria-pressed", "Zustand"]]
},

/* ================= EINGABE ================= */
{
  id: "schalter", name: "Schalter", gruppe: "Eingabe",
  zweck: "Schaltet eine Einstellung sofort um.",
  wann: ["Wenn die Wirkung SOFORT eintritt und nichts abgesendet wird."],
  nicht: ["In einem Formular mit Absendeknopf — dort gehört ein Ankreuzfeld hin. " +
          "Sonst weiß niemand, ob die Einstellung schon gilt."],
  bsp: [{
    titel: "Ein, aus, gesperrt",
    html:
'<div class="kern-stack-sm">\n' +
'  <label class="kn-switch">\n' +
'    <input class="kn-switch__input" type="checkbox" checked>\n' +
'    <span class="kn-switch__track"><span class="kn-switch__thumb"></span></span>\n' +
'    <span class="kn-switch__label">Benachrichtigung bei Fristablauf</span>\n' +
'  </label>\n' +
'  <label class="kn-switch">\n' +
'    <input class="kn-switch__input" type="checkbox">\n' +
'    <span class="kn-switch__track"><span class="kn-switch__thumb"></span></span>\n' +
'    <span class="kn-switch__label">Erledigte Vorgänge anzeigen</span>\n' +
'  </label>\n' +
'  <label class="kn-switch">\n' +
'    <input class="kn-switch__input" type="checkbox" aria-disabled="true">\n' +
'    <span class="kn-switch__track"><span class="kn-switch__thumb"></span></span>\n' +
'    <span class="kn-switch__label">Gesperrt</span>\n' +
'  </label>\n' +
'</div>'
  }],
  barriere: ["Das native Ankreuzfeld bleibt darunter — Tastatur und Hilfsmittel funktionieren ohne Zutun.",
             "Der Zustand steht im Feld selbst, nicht nur in der Stellung des Griffs.",
             "Gesperrt wie KERN (E4): aria-disabled=\"true\" und KERNs Deckkraft-Token — bleibt erreichbar und vorlesbar; kern-neu.js sperrt die Bedienung."],
  tasten: [["Tab", "erreicht den Schalter", ""], ["Leertaste", "schaltet um (nativ)", "„aktiviert“ / „nicht aktiviert“"]],
  klassen: [["kn-switch", "Hülle"], ["kn-switch__input", "das native Feld, unsichtbar"],
            ["kn-switch__track", "Bahn"], ["kn-switch__thumb", "Knauf"]]
},
{
  id: "regler", name: "Schieberegler", gruppe: "Eingabe",
  zweck: "Wählt einen Wert aus einem Bereich, wenn die ungefähre Lage wichtiger ist als die genaue Zahl.",
  wann: ["Zeit, Menge, Anteil — wenn man den Bereich sehen soll."],
  nicht: ["Wenn ein genauer Wert nötig ist. Dann ein Zahlenfeld.",
          "Nie ohne die Zahl daneben."],
  bsp: [{
    titel: "Mit Wertanzeige",
    hinweis: "Pfeiltasten ändern den Wert in Schritten, Pos1/Ende springen an die Enden. Griff wie KERNs Optionsfeld (32 px), Spur 4 px — nur KERN-Tokens.",
    html:
'<div class="kern-form-input">\n' +
'  <div class="kn-slider__header">\n' +
'    <label class="kern-label" for="r-zeit">Zeit für den Arbeitsvorrat heute</label>\n' +
'    <output class="kn-slider__value" id="r-zeit-wert" for="r-zeit"></output>\n' +
'  </div>\n' +
'  <input class="kn-slider" id="r-zeit" type="range" min="30" max="480" step="30" value="150"\n' +
'         data-kn-value-target="r-zeit-wert" data-kn-unit="Minuten">\n' +
'  <div class="kn-slider__ends"><span>30 min</span><span>8 h</span></div>\n' +
'</div>\n' +
'<div class="kern-form-input">\n' +
'  <label class="kern-label" for="r-aus">Gesperrt</label>\n' +
'  <input class="kn-slider" id="r-aus" type="range" min="0" max="100" value="40" aria-disabled="true">\n' +
'</div>'
  }],
  barriere: ["Natives <input type=range>: Pfeiltasten, Pos1, Ende und Bild auf/ab funktionieren ohne Zutun.",
             "Der Wert steht als Zahl daneben und wird über <output> verbunden.",
             "Griff 32 Pixel (wie KERNs Optionsfeld), Bedienfläche so hoch wie KERNs Felder (48, in der kompakten Dichte 40)."],
  tasten: [["← → ↑ ↓", "ein Schritt (nativ)", "neuer Wert"], ["Bild↑ / Bild↓", "großer Schritt (nativ)", "neuer Wert"], ["Pos1 / Ende", "Anfang / Ende (nativ)", "neuer Wert"]],
  klassen: [["kn-slider", "das native Feld"], ["kn-slider__header", "Beschriftung und Wert"],
            ["kn-slider__value", "die Zahl"], ["kn-slider__ends", "Anfang und Ende"],
            ["data-kn-value-target", "Kennung des Ausgabefelds"]]
},
{
  id: "combobox", name: "Combobox", gruppe: "Eingabe",
  zweck: "Auswahlfeld mit Suche. Für lange Listen.",
  wann: ["Ab etwa zwölf Einträgen. Behörden haben Listen mit Hunderten."],
  nicht: ["Unter acht Einträgen — dort ist ein Auswahlfeld einfacher."],
  bsp: [{
    titel: "Tippen filtert",
    hinweis: "Tippen filtert, die Trefferzahl wird angesagt. ↓ ↑ wählen (Pos1/Ende springen in der Liste), Enter übernimmt, Esc schließt — ein zweites Esc leert das Feld. Muster der WAI-ARIA Authoring Practices.",
    html:
'<div class="kern-form-input kn-combobox" data-kn-combobox>\n' +
'  <label class="kern-label" for="cb">Zuständige Stelle</label>\n' +
'  <input class="kern-form-input__input" id="cb" role="combobox" aria-expanded="false"\n' +
'         aria-controls="cb-l" aria-autocomplete="list" autocomplete="off">\n' +
'  <ul class="kn-combobox__list" id="cb-l" role="listbox" hidden>\n' +
'    <li class="kn-combobox__option" role="option" id="cb-1">Bundesverwaltungsamt Köln</li>\n' +
'    <li class="kn-combobox__option" role="option" id="cb-2">Studierendenwerk Hamburg</li>\n' +
'    <li class="kn-combobox__option" role="option" id="cb-3">Studierendenwerk München</li>\n' +
'    <li class="kn-combobox__option" role="option" id="cb-4">Landesamt für Ausbildungsförderung</li>\n' +
'    <li class="kn-combobox__empty" hidden>Kein Eintrag gefunden.</li>\n' +
'  </ul>\n' +
'</div>'
  }],
  barriere: ["role=combobox am Feld, role=listbox an der Liste, role=option je Eintrag.",
             "Der aktive Eintrag wird über aria-activedescendant gemeldet — der Fokus bleibt im Feld.",
             "„Kein Eintrag gefunden“ muss sichtbar sein, sonst wirkt die Liste kaputt."],
  tasten: [["Tippen", "filtert die Liste", "„n Treffer“ nach kurzer Pause"], ["↓ / ↑", "öffnen die Liste, wandern", "aktiver Eintrag"], ["Pos1 / Ende", "erster / letzter Eintrag, solange einer aktiv ist; sonst Schreibmarke", ""], ["Enter", "übernimmt", ""], ["Esc", "schließt; ein zweites Esc leert das Feld", ""]],
  klassen: [["kn-combobox", "Hülle"], ["kn-combobox__list", "Liste"],
            ["kn-combobox__option", "Eintrag"], ["kn-combobox__empty", "Leermeldung"]]
},
{
  id: "fehlerliste", name: "Fehlerzusammenfassung", gruppe: "Eingabe",
  zweck: "Sammelt nach dem Absenden alle Fehler oben im Formular und verlinkt auf jedes Feld.",
  wann: ["Nach jedem fehlgeschlagenen Absenden. Immer oben im Formular."],
  nicht: ["Während der Eingabe. Fehler erst beim Absenden zeigen, nicht bei jedem Tastendruck."],
  bsp: [{
    titel: "Formular mit Prüfung (data-kn-validate)",
    hinweis: "Leer absenden: die Zusammenfassung erscheint oben und bekommt den Fokus; jeder Verweis setzt den Fokus ins Feld. Ein ausgefülltes Feld verliert seinen Fehlerzustand. Vollständig: Meldung „Alle Angaben sind vollständig.“ (check-only: kein Absenden).",
    html:
'<form data-kn-validate="check-only">\n' +
'  <div class="kn-error-summary" role="alert" hidden>\n' +
'    <h2 class="kn-error-summary__title"></h2>\n' +
'    <ul class="kn-error-summary__list"></ul>\n' +
'  </div>\n' +
'  <div class="kern-form-input">\n' +
'    <label class="kern-label" for="fl-betrag">Betrag in Euro</label>\n' +
'    <input class="kern-form-input__input kn-input--width-10" id="fl-betrag" type="text" inputmode="decimal" aria-required="true">\n' +
'    <p class="kern-error" id="fl-betrag-fehler" hidden>\n' +
'      <span class="kern-icon kern-icon--danger kern-icon--md" aria-hidden="true"></span>\n' +
'      <span class="kern-body">Bitte einen Betrag in Euro eingeben</span>\n' +
'    </p>\n' +
'  </div>\n' +
'  <div class="kern-form-input">\n' +
'    <label class="kern-label" for="fl-stelle">Zuständige Stelle</label>\n' +
'    <div class="kern-form-input__select-wrapper">\n' +
'      <select class="kern-form-input__select" id="fl-stelle" aria-required="true">\n' +
'        <option value="">Bitte auswählen</option>\n' +
'        <option>Studierendenwerk Hamburg</option>\n' +
'        <option>Studierendenwerk München</option>\n' +
'      </select>\n' +
'    </div>\n' +
'    <p class="kern-error" id="fl-stelle-fehler" hidden>\n' +
'      <span class="kern-icon kern-icon--danger kern-icon--md" aria-hidden="true"></span>\n' +
'      <span class="kern-body">Bitte die zuständige Stelle auswählen</span>\n' +
'    </p>\n' +
'  </div>\n' +
'  <fieldset class="kern-fieldset" id="fl-weg" data-kn-required>\n' +
'    <legend class="kern-label">Wie sollen wir Ihnen antworten?</legend>\n' +
'    <div class="kern-fieldset__body">\n' +
'      <div class="kern-form-check">\n' +
'        <input class="kern-form-check__radio" id="fl-weg-post" name="fl-weg" type="radio">\n' +
'        <label class="kern-label" for="fl-weg-post">per Post</label>\n' +
'      </div>\n' +
'      <div class="kern-form-check">\n' +
'        <input class="kern-form-check__radio" id="fl-weg-mail" name="fl-weg" type="radio">\n' +
'        <label class="kern-label" for="fl-weg-mail">per E-Mail</label>\n' +
'      </div>\n' +
'    </div>\n' +
'    <p class="kern-error" id="fl-weg-fehler" hidden>\n' +
'      <span class="kern-icon kern-icon--danger kern-icon--md" aria-hidden="true"></span>\n' +
'      <span class="kern-body">Bitte wählen Sie, wie wir antworten sollen</span>\n' +
'    </p>\n' +
'  </fieldset>\n' +
'  <button class="kern-btn kern-btn--primary" type="submit"><span class="kern-label">Weiter</span></button>\n' +
'</form>'
  }],
  barriere: ["Statusmeldung nach KERN (V14, WCAG 4.1.3): role=alert UND Fokus auf die Zusammenfassung (tabindex=-1) — sonst merkt niemand, dass etwas passiert ist.",
             "Verweise setzen den Fokus ins Feld und holen die Beschriftung ins Bild (nicht nur Sprung zur Stelle).",
             "Am Feld KERNs Fehlerzustand: aria-invalid, Meldung über aria-describedby (nur solange der Fehler besteht), Klassen wie in KERNs Beispielen; Gruppen am fieldset.",
             "Pflicht über aria-required am Feld (Prüfung 16); bei Gruppen data-kn-required am fieldset — aria-required ist an role=group nicht erlaubt; die Pflicht gehört in die Legende.",
             "Der Text im Verweis ist derselbe wie am Feld. Zwei verschiedene Formulierungen verwirren."],
  tasten: [["Enter auf „Weiter“", "prüft; Fokus auf die Zusammenfassung", "Titel und Verweise (role=alert)"], ["Tab", "von Verweis zu Verweis", ""], ["Enter auf einem Verweis", "Fokus ins Feld, Beschriftung im Bild", "Feld mit Fehlermeldung"]],
  klassen: [["data-kn-validate", "am form: prüft beim Absenden (\"check-only\": nur prüfen)"], ["data-kn-required", "Pflicht für eine Gruppe (fieldset)"],
            ["kn-error-summary", "Kasten (hidden, role=alert)"], ["kn-error-summary__title", "Überschrift (Anzahl vom Skript)"],
            ["kn-error-summary__list", "Liste der Verweise (vom Skript)"], ["Feld-ID + \"-fehler\"", "die kern-error-Meldung je Feld"]]
},

/* ================= NAVIGATION ================= */
{
  id: "reiter", name: "Reiter", gruppe: "Navigation",
  zweck: "Wechselt zwischen Inhalten, die auf derselben Ebene stehen.",
  wann: ["Wenn der Inhalt sich ändert, der Ort aber gleich bleibt.", "Zwei bis sieben Reiter."],
  nicht: ["Für Schritte in einer Reihenfolge — dafür ist die Schrittfolge da.",
          "Wenn man die Inhalte vergleichen will: dann nebeneinander zeigen."],
  bsp: [{
    titel: "Drei Reiter",
    hinweis: "Pfeiltasten wechseln, Pos1 und Ende springen an die Enden. Nur der aktive Reiter liegt in der Tabulatorreihenfolge.",
    html:
'<div data-kn-tabs>\n' +
'  <div class="kn-tabs">\n' +
'    <div class="kn-tabs__list" role="tablist" aria-label="Vorgang">\n' +
'      <button class="kn-tabs__tab" role="tab" id="rt-1" aria-controls="rp-1" aria-selected="true" tabindex="0">Entscheidung</button>\n' +
'      <button class="kn-tabs__tab" role="tab" id="rt-2" aria-controls="rp-2" aria-selected="false" tabindex="-1">Nachweise</button>\n' +
'      <button class="kn-tabs__tab" role="tab" id="rt-3" aria-controls="rp-3" aria-selected="false" tabindex="-1">Verlauf</button>\n' +
'    </div>\n' +
'  </div>\n' +
'  <div class="kn-tabs__panel" role="tabpanel" id="rp-1" aria-labelledby="rt-1">\n' +
'    <p class="kern-body">Das anrechenbare Einkommen liegt unter der maßgeblichen Grenze.</p></div>\n' +
'  <div class="kn-tabs__panel" role="tabpanel" id="rp-2" aria-labelledby="rt-2" hidden>\n' +
'    <p class="kern-body">Fünf Nachweise, zwei davon aus Registern.</p></div>\n' +
'  <div class="kn-tabs__panel" role="tabpanel" id="rp-3" aria-labelledby="rt-3" hidden>\n' +
'    <p class="kern-body">Dreizehn Ereignisse seit Oktober 2019.</p></div>\n' +
'</div>'
  }],
  barriere: ["role=tablist, role=tab, role=tabpanel und aria-controls sind Pflicht.",
             "Nur der aktive Reiter hat tabindex=0 — sonst tabbt man durch alle.",
             "Verborgene Felder mit hidden, nicht mit display:none per Klasse."],
  tasten: [["← / →", "voriger / nächster Reiter, zeigt sein Panel", "Name des Reiters, „ausgewählt“"], ["Pos1 / Ende", "erster / letzter Reiter", ""], ["Tab", "vom Reiter ins Panel (ohne Bedienelement hat das Panel selbst einen Tab-Halt)", ""]],
  klassen: [["data-kn-tabs", "verdrahtet die Gruppe"], ["kn-tabs__list", "Leiste"],
            ["kn-tabs__tab", "ein Reiter"], ["kn-tabs__panel", "der Inhalt"]]
},
{
  id: "seitennav", name: "Seitennavigation", gruppe: "Navigation",
  zweck: "Führt links durch einen größeren Bereich. Die Navigation dieses Katalogs ist selbst ein Beispiel.",
  wann: ["Ab etwa acht Zielen.", "Wenn die Ziele in Gruppen zerfallen."],
  nicht: ["Für weniger als fünf Ziele — dort genügt die Hauptnavigation oben."],
  bsp: [{
    titel: "Mit Gruppen",
    html:
'<nav class="kn-side-nav" aria-label="Beispiel">\n' +
'  <div class="kn-side-nav__group">\n' +
'    <p class="kn-side-nav__title">Vorgang</p>\n' +
'    <ul class="kn-side-nav__list">\n' +
'      <li><a class="kn-side-nav__item" href="#seitennav" aria-current="page">Übersicht <span class="kn-side-nav__count">9</span></a></li>\n' +
'      <li><a class="kn-side-nav__item" href="#seitennav">Nachweise</a></li>\n' +
'      <li><a class="kn-side-nav__item" href="#seitennav">Verlauf</a></li>\n' +
'    </ul>\n' +
'  </div>\n' +
'  <div class="kn-side-nav__group">\n' +
'    <p class="kn-side-nav__title">Verwaltung</p>\n' +
'    <ul class="kn-side-nav__list">\n' +
'      <li><a class="kn-side-nav__item" href="#seitennav">Fristen</a></li>\n' +
'      <li><a class="kn-side-nav__item" href="#seitennav">Erledigt</a></li>\n' +
'    </ul>\n' +
'  </div>\n' +
'</nav>'
  }],
  barriere: ["<nav> mit aria-label, damit Hilfsmittel mehrere Navigationen unterscheiden.",
             "aria-current=\"page\" am aktuellen Punkt — nicht nur eine Klasse.",
             "Der aktuelle Punkt trägt zusätzlich einen Balken links, nicht nur eine Farbe."],
  tasten: [["Tab", "von Eintrag zu Eintrag", ""], ["Enter", "folgt dem Verweis", "aktueller Eintrag: „aktuelle Seite“"]],
  klassen: [["kn-side-nav", "Hülle"], ["kn-side-nav__group", "Gruppe"],
            ["kn-side-nav__title", "Gruppenüberschrift"], ["kn-side-nav__item", "ein Ziel"]]
},
{
  id: "schritte", name: "Schrittfolge", gruppe: "Navigation",
  zweck: "Zeigt, wo man in einem mehrstufigen Ablauf steht.",
  wann: ["Ab drei Schritten, die in fester Reihenfolge kommen."],
  nicht: ["Wenn die Reihenfolge frei ist — dafür ist die Aufgabenliste da."],
  bsp: [{
    titel: "Vier Schritte",
    hinweis: "Der Zustand steht im Zeichen UND im Attribut, nicht nur in der Farbe.",
    html:
'<ol class="kn-steps">\n' +
'  <li class="kn-step" data-kn-state="done"><span class="kn-step__marker" data-kn-number="1"></span><span class="kn-step__label">Person</span></li>\n' +
'  <li class="kn-step" data-kn-state="done"><span class="kn-step__marker" data-kn-number="2"></span><span class="kn-step__label">Einkommen</span></li>\n' +
'  <li class="kn-step" data-kn-state="current"><span class="kn-step__marker" data-kn-number="3"></span><span class="kn-step__label">Nachweise</span></li>\n' +
'  <li class="kn-step"><span class="kn-step__marker" data-kn-number="4"></span><span class="kn-step__label">Prüfen</span></li>\n' +
'</ol>'
  }],
  barriere: ["<ol>, weil die Reihenfolge Bedeutung hat.",
             "Der aktuelle Schritt bekommt aria-current=\"step\".",
             "Erledigt trägt ein Häkchen, nicht nur Grün."],
  klassen: [["kn-steps", "Liste"], ["kn-step", "ein Schritt"],
            ["data-kn-state", "fertig oder jetzt"], ["data-kn-number", "die Zahl im Kreis"]]
},
{
  id: "menue", name: "Überlaufmenü", gruppe: "Navigation",
  zweck: "Sammelt selten gebrauchte Handlungen hinter einem Knopf.",
  wann: ["Ab vier Handlungen, von denen die meisten selten gebraucht werden."],
  nicht: ["Für die Haupthandlung. Was oft gebraucht wird, gehört sichtbar auf die Seite."],
  bsp: [{
    titel: "Drei Punkte",
    hinweis: "Am Knopf: ↓, Enter oder Leertaste öffnen beim ersten Eintrag, ↑ beim letzten. Im Menü: ↓ ↑, Pos1/Ende, Anfangsbuchstabe springt, Esc schließt mit Fokus zurück, Tab schließt. Nach einer Aktion: zu, Fokus zum Knopf.",
    html:
'<div class="kn-menu__anchor">\n' +
'  <button class="kern-btn kern-btn--secondary" data-kn-menu\n' +
'          aria-controls="m-1" aria-expanded="false" aria-haspopup="menu">\n' +
'    <span class="kern-icon kern-icon--more-vert" aria-hidden="true"></span>\n' +
'    <span class="kern-sr-only">Weitere Aktionen</span></button>\n' +
'  <ul class="kn-menu" id="m-1" role="menu" hidden>\n' +
'    <li role="none"><button class="kn-menu__item" role="menuitem" tabindex="-1">Bearbeiten</button></li>\n' +
'    <li role="none"><button class="kn-menu__item" role="menuitem" tabindex="-1">Wiedervorlage setzen</button></li>\n' +
'    <li role="none"><hr class="kn-menu__divider"></li>\n' +
'    <li role="none"><button class="kn-menu__item kn-menu__item--danger" role="menuitem" tabindex="-1">Vorgang löschen</button></li>\n' +
'  </ul>\n' +
'</div>'
  },
  {
    titel: "Auswahlmenü (Filter)",
    hinweis: "Einträge role=menuitemradio mit aria-checked: genau einer ist gewählt (Häkchen und halbfett). Die Wahl schließt das Menü, der Fokus geht zum Knopf; die Seite hört auf das Ereignis „kn-menu-wahl“ (detail.value), filtert und meldet das Ergebnis über KN.melde. So arbeitet der Filter in der Kopfleiste dieses Katalogs.",
    html:
'<div class="kn-menu__anchor">\n' +
'  <button class="kern-btn kern-btn--tertiary kern-btn--x-small" type="button" data-kn-menu\n' +
'          aria-controls="m-2" aria-expanded="false" aria-haspopup="menu">\n' +
'    <span class="kern-icon kn-icon--filter-list" aria-hidden="true"></span>\n' +
'    <span class="kern-sr-only">Vorgänge filtern</span></button>\n' +
'  <ul class="kn-menu" id="m-2" role="menu" aria-label="Vorgänge filtern" hidden>\n' +
'    <li role="none"><button class="kn-menu__item" role="menuitemradio" aria-checked="true" value="alle" tabindex="-1">\n' +
'      <span class="kern-icon kern-icon--check kn-menu__check" aria-hidden="true"></span>Alle</button></li>\n' +
'    <li role="none"><button class="kn-menu__item" role="menuitemradio" aria-checked="false" value="offen" tabindex="-1">\n' +
'      <span class="kern-icon kern-icon--check kn-menu__check" aria-hidden="true"></span>Offen</button></li>\n' +
'    <li role="none"><button class="kn-menu__item" role="menuitemradio" aria-checked="false" value="fristnah" tabindex="-1">\n' +
'      <span class="kern-icon kern-icon--check kn-menu__check" aria-hidden="true"></span>Fristnah</button></li>\n' +
'  </ul>\n' +
'</div>'
  },
  {
    titel: "KERN-Dropdown für Verweise (kern-dropdown)",
    hinweis: "KERNs Dropdown (<details>, bei KERN „in Bearbeitung“, nur CSS). Enter/Leertaste öffnet, ↓ in die Liste, ↓ ↑ Pos1/Ende wandern, Esc schließt mit Fokus zurück auf die Kopfzeile.",
    html:
'<details class="kern-dropdown">\n' +
'  <summary class="kern-dropdown__header"><span class="kern-label">Ansicht wechseln</span></summary>\n' +
'  <div class="kern-dropdown__body">\n' +
'    <ul class="kern-list">\n' +
'      <li><a class="kern-link" href="#">Alle Vorgänge</a></li>\n' +
'      <li><a class="kern-link" href="#">Meine Vorgänge</a></li>\n' +
'      <li><a class="kern-link" href="#">Fristnah</a></li>\n' +
'    </ul>\n' +
'  </div>\n' +
'</details>'
  }],
  barriere: ["Muster nach WAI-ARIA Authoring Practices (Menu Button): aria-haspopup=menu und aria-expanded am Knopf, role=menu, Einträge role=menuitem mit tabindex=-1, li role=none.",
             "Der Knopf braucht einen Namen (kern-sr-only) — drei Punkte sind kein Text.",
             "Nach Esc und nach einer Aktion geht der Fokus auf den Knopf zurück; Tab verlässt das Menü und schließt es.",
             "Auswahlmenü (drittes Beispiel): role=menuitemradio mit aria-checked — der Screenreader sagt „ausgewählt“; die Wahl ist zusätzlich durch Häkchen und Halbfett sichtbar, nicht nur durch Farbe. Das Ergebnis (z. B. „11 Komponenten“) meldet die Seite über KN.melde.",
             "kn-menu ist für Handlungen und für die Wahl einer von wenigen Optionen. Für Verweise und für Filter mit mehreren Häkchen gibt es KERNs kern-dropdown (letztes Beispiel) — bei KERN „in Bearbeitung“, deshalb keine weiteren Vorgaben."],
  tasten: [["↓, Enter, Leertaste am Knopf", "öffnet, Fokus auf den ersten Eintrag", "„Menü“"], ["↑ am Knopf", "öffnet, Fokus auf den letzten Eintrag", ""], ["↓ / ↑", "nächster / voriger Eintrag (rundum)", ""], ["Pos1 / Ende", "erster / letzter Eintrag", ""], ["Buchstabe", "nächster Eintrag mit diesem Anfang", ""], ["Enter, Leertaste", "löst aus; Menü zu, Fokus zum Knopf", ""], ["Esc", "schließt, Fokus zum Knopf", ""], ["Tab", "schließt, Fokus geht weiter", ""], ["Enter, Leertaste auf einer Option", "wählt sie (aria-checked), Menü zu, Fokus zum Knopf", "„ausgewählt“; das Ergebnis meldet die Seite"]],
  klassen: [["kn-menu__anchor", "Bezugspunkt"], ["data-kn-menu", "verdrahtet den Knopf"],
            ["kn-menu__item", "Eintrag"], ["kn-menu__item--danger", "zerstörender Eintrag"], ["role=menuitemradio, aria-checked", "Option im Auswahlmenü"],
            ["kn-menu__check", "Häkchen der gewählten Option"], ["kn-icon--filter-list", "Filtersymbol (Erweiterung, nach Material Symbols)"],
            ["kern-dropdown", "KERNs Dropdown (details) für Verweise und Filter mit mehreren Häkchen"]]
},
{
  id: "seitenweiser", name: "Seitenweiser", gruppe: "Navigation",
  zweck: "Blättert durch lange Ergebnislisten.",
  wann: ["Ab etwa fünfzig Einträgen."],
  nicht: ["Wenn man vergleichen muss — dann besser nachladen als blättern."],
  bsp: [{
    titel: "Mit Standanzeige",
    html:
'<nav class="kn-pagination" aria-label="Seiten">\n' +
'  <button class="kn-pagination__button" aria-disabled="true">Zurück</button>\n' +
'  <a class="kn-pagination__button" href="#seitenweiser" aria-current="page">1</a>\n' +
'  <a class="kn-pagination__button" href="#seitenweiser">2</a>\n' +
'  <a class="kn-pagination__button" href="#seitenweiser">3</a>\n' +
'  <span class="kn-pagination__gap">…</span>\n' +
'  <a class="kn-pagination__button" href="#seitenweiser">27</a>\n' +
'  <button class="kn-pagination__button">Weiter</button>\n' +
'  <span class="kn-pagination__status">1 bis 20 von 534</span>\n' +
'</nav>'
  }],
  barriere: ["aria-current=\"page\" an der aktuellen Seite.",
             "Die Standanzeige ist keine Zierde — sie sagt, wie viel noch kommt."],
  tasten: [["Tab", "von Seite zu Seite", ""], ["Enter", "öffnet die Seite", "aktuelle: „aktuelle Seite“"]],
  klassen: [["kn-pagination", "Leiste"], ["kn-pagination__button", "eine Seite"],
            ["kn-pagination__status", "Textangabe"]]
},

/* ================= DATEN ================= */
{
  id: "tabelle", name: "Tabelle", gruppe: "Daten",
  zweck: "Zeigt gleichartige Datensätze in Zeilen und Spalten. Mit Sortierung, Auswahl, festem Kopf und drei Dichten.",
  wann: ["Wenn man Werte spaltenweise vergleichen will.", "In der Fallbearbeitung fast immer."],
  nicht: ["Für Layout. Eine Tabelle ist für Daten, nicht für Anordnung.",
          "Auf schmalen Geräten ab etwa fünf Spalten — dort besser Karten."],
  bsp: [{
    titel: "Sortierbar und auswählbar",
    hinweis: "Spaltenköpfe anklicken oder mit der Tastatur ansteuern. Beträge werden numerisch sortiert, nicht alphabetisch.",
    html:
'<div class="kern-table-responsive kn-table-frame" tabindex="0" style="--kn-table-frame-height:15rem">\n' +
'  <table class="kern-table kn-table--selectable kn-table--sticky-head" id="tb"\n' +
'         data-kn-sortable data-kn-selectable>\n' +
'    <caption class="kern-sr-only">Offene Vorgänge</caption>\n' +
'    <thead class="kern-table__head"><tr class="kern-table__row">\n' +
'      <th class="kern-table__header kn-table-select-col"><input type="checkbox" data-kn-select-all aria-label="Alle auswählen"></th>\n' +
'      <th class="kern-table__header kn-table-sort" aria-sort="none"><button class="kn-table-sort__button">Vorgang</button></th>\n' +
'      <th class="kern-table__header kn-table-sort" aria-sort="none"><button class="kn-table-sort__button">Art</button></th>\n' +
'      <th class="kern-table__header kn-table-sort" aria-sort="none"><button class="kn-table-sort__button">Frist</button></th>\n' +
'      <th class="kern-table__header kn-table-sort" aria-sort="none"><button class="kn-table-sort__button">Betrag</button></th>\n' +
'    </tr></thead>\n' +
'    <tbody class="kern-table__body">\n' +
'      <tr class="kern-table__row" aria-selected="false"><td class="kern-table__cell kn-table-select-col"><input type="checkbox" data-kn-row-select aria-label="10455"></td>\n' +
'        <td class="kern-table__cell">2026-BAF-10455</td><td class="kern-table__cell">Freistellung</td><td class="kern-table__cell ">17.03.2026</td><td class="kern-table__cell--numeric">1.640,00 €</td></tr>\n' +
'      <tr class="kern-table__row" aria-selected="false"><td class="kern-table__cell kn-table-select-col"><input type="checkbox" data-kn-row-select aria-label="10482"></td>\n' +
'        <td class="kern-table__cell">2026-BAF-10482</td><td class="kern-table__cell">Freistellung</td><td class="kern-table__cell ">18.03.2026</td><td class="kern-table__cell--numeric">10.010,00 €</td></tr>\n' +
'      <tr class="kern-table__row" aria-selected="false"><td class="kern-table__cell kn-table-select-col"><input type="checkbox" data-kn-row-select aria-label="10390"></td>\n' +
'        <td class="kern-table__cell">2026-BAF-10390</td><td class="kern-table__cell">Stundung</td><td class="kern-table__cell ">20.03.2026</td><td class="kern-table__cell--numeric">780,00 €</td></tr>\n' +
'      <tr class="kern-table__row" aria-selected="false"><td class="kern-table__cell kn-table-select-col"><input type="checkbox" data-kn-row-select aria-label="10298"></td>\n' +
'        <td class="kern-table__cell">2026-BAF-10298</td><td class="kern-table__cell">Erlassprüfung</td><td class="kern-table__cell ">08.04.2026</td><td class="kern-table__cell--numeric">130,00 €</td></tr>\n' +
'    </tbody>\n' +
'  </table>\n' +
'</div>\n' +
'<p class="kern-body kern-body--small kern-body--muted" data-kn-status-of="tb"></p>'
  }],
  barriere: ["<caption> ist Pflicht, auch wenn sie nur für Hilfsmittel sichtbar ist.",
             "Der Spaltenkopf zum Sortieren ist ein <button>, kein <th> mit Klickereignis.",
             "aria-sort am <th> meldet die Richtung.",
             "Jedes Kästchen braucht ein eigenes aria-label mit der Zeilenkennung."],
  tasten: [["Tab", "Spaltenköpfe und Kästchen der Reihe nach", ""], ["Enter auf einem Spaltenkopf", "sortiert; noch einmal: umgekehrt", "„Sortiert nach …, aufsteigend / absteigend“"], ["Leertaste auf einem Kästchen", "wählt die Zeile", "„n Zeilen ausgewählt“"]],
  klassen: [["kern-table", "Grundlage (KERN)"], ["kn-table--selectable", "Zeilenzustände und Auswahl (Erweiterung)"],
            ["kn-table--sticky-head", "Kopf bleibt beim Rollen stehen (Erweiterung)"], ["kern-table--striped", "Zebrastreifen (KERN)"],
            ["kn-table-sort", "sortierbarer Kopf (Erweiterung)"], ["kern-table__cell--numeric", "rechtsbündig (KERN)"],
            ["data-kn-sortable", "verdrahtet die Sortierung"]]
},
{
  id: "zeitleiste", name: "Zeitleiste", gruppe: "Daten",
  zweck: "Zeigt den Verlauf eines Vorgangs als einen Strang.",
  wann: ["Für Verfahrensverläufe: was ist wann passiert, was steht offen."],
  nicht: ["Für gleichrangige Listen ohne Zeitbezug."],
  bsp: [{
    titel: "Vier Ereignisse",
    hinweis: "Passt sich über eine Container-Abfrage an IHREN Platz an, nicht an die Fensterbreite. Fenster schmaler ziehen — oder die Schiene einfahren.",
    html:
'<div class="kn-cq">\n' +
'  <ol class="kn-timeline">\n' +
'    <li class="kn-timeline__dot kn-timeline__dot--open">\n' +
'      <span class="kn-timeline__time">09:41</span><span class="kn-timeline__label"></span>\n' +
'      <div><p class="kn-timeline__title">Empfehlung: Freistellung für zwei Jahre</p>\n' +
'      <p class="kn-timeline__text">Einkommen liegt unter der maßgeblichen Grenze.</p></div></li>\n' +
'    <li class="kn-timeline__dot kn-timeline__dot--done">\n' +
'      <span class="kn-timeline__time">19:11</span><span class="kn-timeline__label"></span>\n' +
'      <div><p class="kn-timeline__title">Antrag vollständig eingereicht</p>\n' +
'      <p class="kn-timeline__text">Mahnverfahren ausgesetzt.</p></div></li>\n' +
'    <li class="kn-timeline__dot">\n' +
'      <span class="kn-timeline__time">08:20</span><span class="kn-timeline__label"></span>\n' +
'      <div><p class="kn-timeline__title">Bescheid bereitgestellt</p>\n' +
'      <p class="kn-timeline__text">Im Bürgerpostfach abgelegt.</p></div></li>\n' +
'  </ol>\n' +
'</div>'
  }],
  barriere: ["<ol>, weil die Reihenfolge Bedeutung hat.",
             "Die Zeitangabe steht als Text, nicht nur als Position auf der Achse."],
  klassen: [["kn-timeline", "Liste"], ["kn-timeline__dot", "ein Ereignis"],
            ["--offen, --fertig", "Zustand"], ["kn-cq", "aktiviert Container-Abfragen"]]
},
{
  id: "leer", name: "Leerzustand und Platzhalter", gruppe: "Daten",
  zweck: "„Nichts gefunden“ ist ein Zustand, kein Versehen. Der Ladeplatzhalter zeigt die Form, bevor der Inhalt da ist.",
  wann: ["Immer, wenn eine Liste leer sein kann.", "Immer, wenn Daten nachgeladen werden."],
  nicht: ["Nie eine leere Fläche ohne Erklärung."],
  bsp: [{
    titel: "Beides",
    html:
'<div class="kn-empty-state">\n' +
'  <p class="kn-empty-state__title">Kein Vorgang gefunden</p>\n' +
'  <p class="kern-body">Zu „Aktenzeichen 99999“ gibt es keinen Treffer. Prüfen Sie die Schreibweise.</p>\n' +
'</div>\n' +
'<div class="kern-stack-sm" style="margin-block-start:1.5rem">\n' +
'  <span class="kn-skeleton kn-skeleton--title"></span>\n' +
'  <span class="kn-skeleton"></span>\n' +
'  <span class="kn-skeleton kn-skeleton--short"></span>\n' +
'</div>'
  }],
  barriere: ["Der Leerzustand nennt den GRUND und einen nächsten Schritt.",
             "Der Platzhalter bekommt aria-hidden — er hat keinen Inhalt zum Vorlesen.",
             "Bei ruhiger Bewegung steht das Wandern still, die Fläche bleibt sichtbar."],
  klassen: [["kn-empty-state", "Leerzustand"], ["kn-skeleton", "Ladeplatzhalter"],
            ["--titel, --kurz, --rund", "Formen"]]
},

/* ================= FLÄCHE ================= */

/* ================= RÜCKMELDUNG ================= */
{
  id: "toast", name: "Flüchtige Meldung", gruppe: "Rückmeldung",
  zweck: "Bestätigt kurz, dass etwas geklappt hat. Verschwindet von selbst.",
  wann: ["Für Bestätigungen, die man auch verpassen darf: gespeichert, kopiert, gesendet."],
  nicht: ["Für Fehler. Wer sie verpasst, erfährt nie davon.",
          "Für alles, was eine Entscheidung verlangt — dafür ist der Dialog da."],
  bsp: [{
    titel: "Ausprobieren",
    hinweis: "Bleibt acht Sekunden. Nicht kürzer — wer langsam liest, muss mitkommen.",
    html:
'<div class="kern-flex kern-flex-wrap kern-align-items-center kern-gap-sm">\n' +
'  <button class="kern-btn kern-btn--secondary" onclick="KN.toast(\'Änderungen gespeichert.\', \'success\')"><span class="kern-label">Erfolgsmeldung</span></button>\n' +
'  <button class="kern-btn kern-btn--secondary" onclick="KN.toast(\'Aktenzeichen kopiert.\')"><span class="kern-label">Neutrale Bestätigung</span></button>\n' +
'</div>'
  }],
  barriere: ["Die Sammelstelle ist nur sichtbar; angesagt wird über die zentrale Ansage (M61, höflich) — nach dem laufenden Satz.",
             "Kein Knopf (Entscheidung E5): Die Meldung enthält nur, was man auch verpassen darf. Alles mit Handlungsbedarf ist eine stehende Meldung (kern-alert).",
             "Acht Sekunden — nicht kürzer, damit auch langsam Lesende mitkommen; nichts darin muss bedient werden (WCAG 2.2.1)."],
  tasten: [["Enter, Leertaste auf einem Beispielknopf", "zeigt die Meldung; sie verschwindet nach 8 s von selbst, nichts darin ist bedienbar", "der Meldungstext (zentrale Ansage)"]],
  klassen: [["KN.toast(text, \"success\")", "erzeugt eine Bestätigung (ohne Art: neutral)"], ["kn-toast-region", "Sammelstelle mit role=status"]]
},
{
  id: "marke", name: "Marke und Filtermarke", gruppe: "Rückmeldung",
  zweck: "Die Marke etikettiert einen Zustand. Die Filtermarke ist anklickbar und schaltet um.",
  wann: ["Marke: Stand eines Vorgangs.", "Filtermarke: schnelles Ein- und Ausblenden."],
  nicht: ["Die Marke ist kein Knopf. Wenn man darauf klicken soll, ist es eine Filtermarke."],
  bsp: [{
    titel: "Beide",
    html:
'<div class="kern-flex kern-flex-wrap kern-align-items-center kern-gap-sm" style="margin-block-end:1rem">\n' +
'  <span class="kern-badge"><span class="kern-label">Neu</span></span>\n' +
'  <span class="kern-badge kern-badge--success"><span class="kern-label">Vollständig</span></span>\n' +
'  <span class="kern-badge kern-badge--warning"><span class="kern-label">Rückfrage nötig</span></span>\n' +
'  <span class="kern-badge kern-badge--danger"><span class="kern-label">Frist abgelaufen</span></span>\n' +
'  <span class="kern-badge kn-badge--outline"><span class="kern-label">Nur intern</span></span>\n' +
'</div>\n' +
'<div class="kern-flex kern-flex-wrap kern-align-items-center kern-gap-sm">\n' +
'  <button class="kn-filter-tag" aria-pressed="true">Offen</button>\n' +
'  <button class="kn-filter-tag" aria-pressed="false">Fristen</button>\n' +
'  <button class="kn-filter-tag" aria-pressed="false">Nachweise</button>\n' +
'</div>'
  }],
  barriere: ["Die Filtermarke ist ein <button> mit aria-pressed.",
             "Der gewählte Zustand trägt zusätzlich ein Häkchen — nicht nur Farbe.",
             "Die Marke braucht keinen Zustand, weil sie nicht bedienbar ist."],
  tasten: [["Tab", "erreicht jede Filtermarke", ""], ["Enter, Leertaste", "schaltet den Filter", "„gedrückt“ / „nicht gedrückt“"]],
  klassen: [["kern-badge", "Etikett (KERN)"], ["kern-badge--success/-warning/-danger/-info", "Art (KERN)"], ["kn-badge--outline", "nur Rand (Erweiterung)"],
            ["kn-filter-tag", "anklickbar"], ["aria-pressed", "Zustand"]]
}
,

/* ================= NACHGETRAGEN 12.08.2026 =================
   Diese Bausteine lagen seit 0.5.6 im CSS, standen aber nicht im
   Katalog. Wer sie nicht kannte, fand sie nicht. ========== */

/* ----------------- NAVIGATION ----------------- */
{
  id: "seitenrahmen", name: "Kopf, Hauptnavigation und Fuß", gruppe: "Navigation",
  zweck: "Der Rahmen jeder Seite: oben Marke und Werkzeuge, unten Rechtliches.",
  wann: ["Auf jeder Seite einer Anwendung, damit sie überall gleich beginnt und endet.",
         "Die Hauptnavigation nur für die obersten Bereiche — alles Weitere gehört in die Seitennavigation."],
  nicht: ["Nicht mehr als sieben Punkte in die Hauptnavigation. Was darüber hinausgeht, ist keine Navigation mehr, sondern eine Liste.",
          "Nie den Fuß für Bedienelemente benutzen, die man zur Arbeit braucht — dort sucht sie niemand."],
  bsp: [{
    titel: "Kopf mit Marke, Navigation und Fuß",
    hinweis: "Der Kopf ist ein <header>, der Fuß ein <footer> — die Rolle steht im Element, nicht in einer Klasse.",
    html:
'<div>\n' +
'  <header class="kn-header">\n' +
'    <a class="kn-header__brand" href="#">Musterbehörde <span>Darlehen</span></a>\n' +
'    <nav class="kn-header__end" aria-label="Hauptbereiche">\n' +
'      <ul class="kn-main-nav__list">\n' +
'        <li><a class="kn-main-nav__item" href="#" aria-current="page">Arbeitsvorrat</a></li>\n' +
'        <li><a class="kn-main-nav__item" href="#">Vorgänge</a></li>\n' +
'        <li><a class="kn-main-nav__item" href="#">Auswertung</a></li>\n' +
'      </ul>\n' +
'    </nav>\n' +
'  </header>\n' +
'  <footer class="kn-footer">\n' +
'    <div class="kn-footer__columns">\n' +
'      <div>\n' +
'        <p class="kn-footer__title">Rechtliches</p>\n' +
'        <ul class="kn-footer__list">\n' +
'          <li><a class="kern-link" href="#">Barrierefreiheit</a></li>\n' +
'          <li><a class="kern-link" href="#">Datenschutz</a></li>\n' +
'        </ul>\n' +
'      </div>\n' +
'    </div>\n' +
'    <p class="kn-footer__legal">Musterbehörde</p>\n' +
'  </footer>\n' +
'</div>'
  }, {
    titel: "Mit KERN-Kopfzeile (nur öffentliche Stellen)",
    hinweis: "KERN: Kopfzeile ganz oben, unverändert, nie fest stehend (sticky), linksbündig mit dem Inhalt. Nur für Websites öffentlicher Stellen — eine interne Fachanwendung braucht sie nicht. Die Sprungmarke bleibt das erste Element der Seite.",
    html:
'<div>\n' +
'  <div class=\"kern-kopfzeile\">\n' +
'    <div class=\"kern-container\">\n' +
'      <div class=\"kern-kopfzeile__content\">\n' +
'        <span class=\"kern-kopfzeile__flagge\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 16\"> <path fill=\"#000\" d=\"M0 .5h24v5.333H0z\" /> <path fill=\"red\" d=\"M0 5.833h24v5.333H0z\" /> <path fill=\"#FACA2C\" d=\"M0 11.167h24V16.5H0z\" /> </svg></span>\n' +
'        <span class=\"kern-kopfzeile__label\">Offizielle Website – Bundesrepublik Deutschland</span>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'  <header class=\"kn-header\">\n' +
'    <a class=\"kn-header__brand\" href=\"#\">Musterbehörde <span>Darlehen</span></a>\n' +
'  </header>\n' +
'</div>'
  }],
  barriere: ["Die Navigation braucht ein aria-label, sobald es mehr als eine auf der Seite gibt — sonst heißen alle gleich.",
             "Die aktuelle Seite bekommt aria-current=\"page\". Farbe allein reicht nicht.",
             "Kopf und Fuß als <header> und <footer>: Screenreader können darüber springen."],
  tasten: [["Tab", "Marke, Hauptbereiche, Verweise im Fuß der Reihe nach", ""], ["Enter", "folgt dem Verweis", "aktueller Bereich: „aktuelle Seite“"]],
  klassen: [["kn-header", "Kopfleiste"], ["kn-header__brand", "Behörde und Anwendung"],
            ["kn-header__end", "alles rechts davon"], ["kn-main-nav__list", "Navigationsliste"],
            ["kn-main-nav__item", "ein Punkt"], ["kn-footer", "Fußbereich"],
            ["kn-footer__columns", "mehrspaltig"], ["kn-footer__title", "Spaltenüberschrift"],
            ["kn-footer__list", "Linkliste"], ["kn-footer__legal", "Zeile ganz unten"]]
},
{
  id: "krumen", name: "Brotkrumen", gruppe: "Navigation",
  zweck: "Zeigt, wo man ist und wie man zurückkommt.",
  wann: ["Sobald eine Anwendung mehr als zwei Ebenen tief wird.",
         "Besonders bei Vorgängen: Arbeitsvorrat → Vorgang → Nachweis."],
  nicht: ["Nicht als Ersatz für den Zurück-Knopf des Browsers.",
          "Nicht, wenn die Anwendung flach ist. Eine einzige Krume ist eine Verlegenheit."],
  bsp: [{
    titel: "Drei Ebenen",
    html:
'<nav aria-label="Sie sind hier">\n' +
'  <ol class="kn-breadcrumb__list">\n' +
'    <li><a class="kern-link" href="#">Arbeitsvorrat</a></li>\n' +
'    <li><a class="kern-link" href="#">Vorgang 2026-BAF-10482</a></li>\n' +
'    <li aria-current="page">Nachweise</li>\n' +
'  </ol>\n' +
'</nav>'
  }],
  barriere: ["Eine <ol>, keine <ul> — die Reihenfolge trägt die Bedeutung.",
             "Der letzte Punkt ist KEIN Verweis. Er trägt aria-current=\"page\".",
             "Die Trennzeichen kommen aus dem CSS, nicht aus dem Text — sonst liest der Screenreader sie mit."],
  tasten: [["Tab", "von Verweis zu Verweis", ""], ["Enter", "folgt dem Verweis", "letzter: „aktuelle Seite“"]],
  klassen: [["kn-breadcrumb__list", "die Liste, als <ol>"], ["aria-current", "wo man ist"]]
},
{
  id: "sprungmarke", name: "Sprungmarke", gruppe: "Navigation",
  zweck: "Lässt Tastaturnutzende die Navigation überspringen.",
  wann: ["Auf jeder Seite. Als allererstes Element im <body>."],
  nicht: ["Niemals weglassen. Ohne sie muss sich jemand, der mit der Tastatur arbeitet, auf jeder Seite erneut durch die ganze Navigation drücken."],
  bsp: [{
    titel: "Sprungmarke",
    hinweis: "Sie ist sichtbar erst beim Tastaturfokus. Mit der Tabulatortaste hierher springen — dann erscheint sie oben links.",
    html:
'<div style="position:relative;min-block-size:6rem">\n' +
'  <a class="kn-skip-link" href="#kat-inhalt">Zum Inhalt springen</a>\n' +
'  <p class="kern-body kern-body--muted">Mit dem Tabulator in dieses Beispiel springen — die Marke fährt oben ein.</p>\n' +
'</div>'
  }],
  barriere: ["Sie muss das ERSTE fokussierbare Element der Seite sein.",
             "Sie darf nicht dauerhaft versteckt werden (kein display:none) — sonst ist sie für die Tastatur nicht erreichbar. KERN 2.8.2 (nbyc) schiebt sie mit transform aus dem Bild.",
             "Ihr Farbpaar hängt bewusst NICHT am Fokus-Hilfsring: der ist im Dunkelmodus schwarz. Der Fehler stand bis zum 12.08.2026 im System und ergab 1,31 zu 1."],
  tasten: [["Tab (als Erstes auf der Seite)", "zeigt die Sprungmarke", ""], ["Enter", "springt zum Inhalt", ""]],
  klassen: [["kn-skip-link", "der Verweis"], ["href", "zeigt auf die id des Hauptbereichs"]]
},

/* ----------------- AKTION ----------------- */
{
  id: "teilknopf", name: "Teilknopf", gruppe: "Aktion",
  zweck: "Eine Hauptaktion und ein Menü mit den selteneren daneben.",
  wann: ["Wenn es eine offensichtlich häufigste Aktion gibt und zwei bis vier seltenere.",
         "Beispiel: „Bewilligen“ als Hauptaktion, daneben „Bewilligen und drucken“, „Bewilligen ohne Bescheid“."],
  nicht: ["Wenn alle Aktionen gleich wichtig sind — dann nebeneinanderstellen.",
          "Wenn es mehr als fünf sind. Dann ist es ein Überlaufmenü."],
  bsp: [{
    titel: "Bewilligen mit Varianten",
    html:
'<div class="kn-split-button">\n' +
'  <button class="kern-btn kern-btn--primary" type="button"><span class="kern-label">Bewilligen</span></button>\n' +
'  <button class="kern-btn kern-btn--primary" type="button" data-kn-menu\n' +
'          aria-controls="tk-1" aria-haspopup="menu" aria-expanded="false">\n' +
'    <span class="kern-icon kern-icon--arrow-down" aria-hidden="true"></span>\n' +
'    <span class="kern-sr-only">Weitere Bewilligungsarten</span></button>\n' +
'  <div class="kn-menu" id="tk-1" role="menu" hidden>\n' +
'    <button class="kn-menu__item" role="menuitem" type="button" tabindex="-1">Bewilligen und drucken</button>\n' +
'    <button class="kn-menu__item" role="menuitem" type="button" tabindex="-1">Bewilligen ohne Bescheid</button>\n' +
'  </div>\n' +
'</div>'
  }],
  barriere: ["Der zweite Knopf braucht ein aria-label — ein Pfeil allein sagt einem Screenreader nichts.",
             "aria-haspopup und aria-expanded gehören an den Menüknopf.",
             "Beide Knöpfe müssen einzeln mit der Tastatur erreichbar sein."],
  tasten: [["Tab", "erst die Haupthandlung, dann der Pfeil", ""], ["Enter, Leertaste auf der Haupthandlung", "löst sie aus", ""], ["↓, Enter, Leertaste auf dem Pfeil", "öffnet das Menü; weiter wie Überlaufmenü", "„Menü“, erster Eintrag"]],
  klassen: [["kn-split-button", "die Klammer um beide"], ["kern-btn", "beide Teile sind echte KERN-Knöpfe"],
            ["data-kn-menu", "verdrahtet den Menüteil"], ["aria-haspopup", "kündigt das Menü an"]]
},
{
  id: "werkzeuge", name: "Werkzeugleiste", gruppe: "Aktion",
  zweck: "Sammelt Suche, Filter und Aktionen über einer Liste oder Tabelle.",
  wann: ["Über jeder Tabelle, die man durchsuchen, filtern oder als Ganzes bearbeiten kann."],
  nicht: ["Nicht als Ablage für alles, was sonst nirgends passt.",
          "Nicht mit mehr als sechs Elementen — darüber findet niemand mehr etwas."],
  bsp: [{
    titel: "Suche, Filter und Aktion",
    html:
'<div class="kn-toolbar">\n' +
'  <search style="flex:1 1 14rem">\n' +
'    <label class="kern-label kern-sr-only" for="wz-suche">Vorgänge durchsuchen</label>\n' +
'    <div class="kern-input-group">\n' +
'      <input class="kern-form-input__input" id="wz-suche" type="search" placeholder="Aktenzeichen oder Name">\n' +
'      <button class="kern-btn kern-btn--primary" type="button"><span class="kern-label">Suchen</span></button>\n' +
'    </div>\n' +
'  </search>\n' +
'  <span class="kn-toolbar__divider"></span>\n' +
'  <button class="kn-filter-tag" type="button" aria-pressed="true">Fristnah</button>\n' +
'  <button class="kn-filter-tag" type="button" aria-pressed="false">Vollständig</button>\n' +
'</div>'
  }],
  barriere: ["Der Trenner ist rein zeichnerisch und bleibt leer — kein Text darin.",
             "Filtermarken sind Knöpfe mit aria-pressed, keine Verweise.",
             "Das Suchfeld braucht eine Beschriftung, auch wenn sie unsichtbar ist (kern-sr-only)."],
  tasten: [["Tab", "Feld, Knopf, Filter der Reihe nach — die Leiste ist eine Gruppe, kein role=toolbar, daher keine Pfeiltasten", ""], ["Enter, Leertaste auf einem Filter", "schaltet ihn", "„gedrückt“ / „nicht gedrückt“"]],
  klassen: [["kn-toolbar", "die Leiste"], ["kn-toolbar__divider", "senkrechter Strich"],
            ["kn-filter-tag", "an- und abschaltbarer Filter"]]
},

/* ----------------- EINGABE ----------------- */
{
  id: "zahlfeld", name: "Zahlenfeld", gruppe: "Eingabe",
  zweck: "Zahl eingeben, mit Knöpfen zum Schrittweisen.",
  wann: ["Für kleine, überschaubare Mengen: Anzahl Kinder, Anzahl Raten.",
         "Wenn plausible Werte nah beieinander liegen."],
  nicht: ["Für Beträge und Jahreszahlen. Wer 24 000 Euro eintippen will, klickt sich nicht dorthin — dafür ein normales Feld.",
          "Für Aktenzeichen. Das ist keine Zahl, sondern eine Kennung."],
  bsp: [{
    titel: "Anzahl der Kinder",
    html:
'<div class="kern-form-input" style="max-inline-size:16rem">\n' +
'  <label class="kern-label" for="zf-1">Anzahl der Kinder</label>\n' +
'  <p class="kern-hint" id="zf-1-hinweis">Nur Kinder, für die Freibetrag geltend gemacht wird.</p>\n' +
'  <div class="kn-number-stepper">\n' +
'    <button class="kn-number-stepper__button" type="button" aria-label="Weniger">−</button>\n' +
'    <input class="kern-form-input__input" id="zf-1" type="number"\n' +
'           value="2" min="0" max="12" aria-describedby="zf-1-hinweis">\n' +
'    <button class="kn-number-stepper__button" type="button" aria-label="Mehr">+</button>\n' +
'  </div>\n' +
'</div>'
  }],
  barriere: ["Beide Knöpfe brauchen aria-label — „+“ und „−“ allein sind für einen Screenreader stumm.",
             "min und max gehören ans Feld, nicht nur in die Prüfung.",
             "Das Feld muss auch ohne die Knöpfe zu tippen sein."],
  tasten: [["Tab", "−, Feld, + der Reihe nach", ""], ["Enter, Leertaste auf − / +", "ein Schritt; an der Grenze gesperrt", "„Anzahl der Kinder: 3“"], ["↑ / ↓ im Feld", "ein Schritt (nativ)", "neuer Wert"]],
  klassen: [["kn-number-stepper", "Feld mit zwei Knöpfen"], ["kn-number-stepper__button", "mehr oder weniger"],
            ["kern-form-input__input", "das Zahlenfeld nach KERN (Ziffern gleich breit: KERN seitenweit)"]]
},
{
  id: "zaehler", name: "Zeichenzähler", gruppe: "Eingabe",
  zweck: "Sagt, wie viel Platz noch bleibt.",
  wann: ["Bei Freitextfeldern mit harter Grenze — Begründungen, Vermerke, Bemerkungen.",
         "Nur, wenn die Grenze eine echte ist. Erfundene Grenzen ärgern nur."],
  nicht: ["Bei Feldern ohne Begrenzung.",
          "Nicht als einziges Zeichen dafür, dass zu viel eingegeben wurde — es braucht auch eine Fehlermeldung beim Absenden."],
  bsp: [{
    titel: "Vermerk mit Grenze",
    hinweis: "Tippen Sie — der Zähler unten rechnet mit. Ab 20 Zeichen Rest wird er auch angesagt.",
    html:
'<div class="kern-form-input">\n' +
'  <label class="kern-label" for="za-1">Vermerk zur Entscheidung</label>\n' +
'  <textarea class="kern-form-input__input" id="za-1" rows="3" maxlength="120"\n' +
'            data-kn-char-count data-kn-char-count-target="za-1-stand"\n' +
'            aria-describedby="za-1-stand"></textarea>\n' +
'  <p class="kn-char-count" id="za-1-stand"></p>\n' +
'</div>'
  }],
  barriere: ["Der Zähler wird erst ab 20 verbleibenden Zeichen angesagt und erst, wenn das Tippen kurz ruht (zentrale Ansage, M61). Sonst redet der Screenreader bei jedem Tastendruck.",
             "aria-describedby verbindet Feld und Zähler.",
             "maxlength am Feld ist die Wahrheit — der Zähler liest sie nur ab."],
  tasten: [["Tippen", "zählt mit", "ab 20 Zeichen Rest „Noch n Zeichen“, nach kurzer Pause"]],
  klassen: [["kn-char-count", "die Anzeige"], ["data-kn-char-count", "verdrahtet das Feld"],
            ["data-kn-char-count-target", "id der Anzeige"], ["data-kn-near-limit", "wird ab 20 Rest gesetzt"],
            ["data-kn-over-limit", "wird bei Überschreitung gesetzt"]]
},
{
  id: "ablage", name: "Dateiablage", gruppe: "Eingabe",
  zweck: "Nachweise hochladen und die hochgeladenen zeigen.",
  wann: ["Für Einkommensnachweise, Bescheinigungen, Belege — der Alltag im Freistellungsverfahren."],
  nicht: ["Ohne Angabe der erlaubten Formate und der Höchstgröße. Wer das erst nach dem Fehlschlag erfährt, lädt zweimal hoch.",
          "Nie ohne Möglichkeit, eine Datei wieder zu entfernen."],
  bsp: [{
    titel: "Nachweise mit Liste",
    html:
'<div class="kn-file-list">\n' +
'  <label class="kern-label" for="abl-1">Einkommensnachweise</label>\n' +
'  <p class="kern-hint" id="abl-1-hinweis">PDF oder JPG, höchstens 10 MB je Datei.</p>\n' +
'  <input class="kern-form-input__input" id="abl-1" type="file" multiple aria-describedby="abl-1-hinweis">\n' +
'  <ul class="kn-file-list__list">\n' +
'    <li class="kn-file-list__file">\n' +
'      <span>Lohnabrechnung-2025-12.pdf</span>\n' +
'      <span class="kn-file-list__size">240 KB</span>\n' +
'      <button class="kern-btn kern-btn--tertiary kern-btn--small" type="button"><span class="kern-label">Entfernen</span></button>\n' +
'    </li>\n' +
'    <li class="kn-file-list__file">\n' +
'      <span>Steuerbescheid-2024.pdf</span>\n' +
'      <span class="kn-file-list__size">1,2 MB</span>\n' +
'      <button class="kern-btn kern-btn--tertiary kern-btn--small" type="button"><span class="kern-label">Entfernen</span></button>\n' +
'    </li>\n' +
'  </ul>\n' +
'</div>'
  }],
  barriere: ["Formate und Höchstgröße VOR dem Feld nennen, verbunden über aria-describedby.",
             "Der Entfernen-Knopf braucht den Dateinamen im Namen oder ein aria-label — sonst hört man dreimal „Entfernen“.",
             "Die Liste ist eine echte <ul>, damit die Anzahl angesagt wird."],
  tasten: [["Tab", "erreicht das Dateifeld", ""], ["Enter, Leertaste", "öffnet die Dateiauswahl (nativ)", "gewählte Dateien"]],
  klassen: [["kn-file-list", "die Einheit"], ["kn-file-list__list", "hochgeladene Dateien"],
            ["kn-file-list__file", "eine Zeile"], ["kn-file-list__size", "Dateigröße"]]
},

/* ----------------- RÜCKMELDUNG ----------------- */
{
  id: "fortschritt", name: "Fortschrittsbalken", gruppe: "Rückmeldung",
  zweck: "Zeigt, wie weit etwas gediehen ist, wenn man es beziffern kann.",
  wann: ["Beim Hochladen, beim Erzeugen eines Bescheids, bei Massenläufen.",
         "Auch für Anteile: wie viele Nachweise von wie vielen liegen vor."],
  nicht: ["Wenn die Dauer unbekannt ist. Dann die Ladeanzeige nehmen — ein Balken, der bei 90 Prozent steht und sich nicht rührt, ist schlimmer als gar keiner."],
  bsp: [{
    titel: "Sieben von zehn Nachweisen",
    html:
'<div>\n' +
'  <p class="kern-body kern-body--small">Nachweise vollständig: 7 von 10</p>\n' +
'  <div class="kn-progress-bar" role="progressbar" aria-valuenow="70"\n' +
'       aria-valuemin="0" aria-valuemax="100" aria-label="Nachweise vollständig">\n' +
'    <div class="kn-progress-bar__bar" style="inline-size:70%"></div>\n' +
'  </div>\n' +
'</div>'
  }],
  barriere: ["role=\"progressbar\" mit aria-valuenow, -valuemin und -valuemax.",
             "Der Wert gehört ZUSÄTZLICH als Text daneben — nicht jeder hört die Ansage.",
             "Der Balken hat 8 Pixel Höhe; die Farbe allein trägt die Information nicht, deshalb der Text."],
  klassen: [["kn-progress-bar", "die Schiene"], ["kn-progress-bar__bar", "der gefüllte Teil"],
            ["inline-size", "der Anteil, in Prozent"]]
},
{
  id: "kurzhinweis", name: "Kurzhinweis", gruppe: "Rückmeldung",
  zweck: "Eine kurze Erklärung, die beim Zeigen oder Fokussieren erscheint.",
  wann: ["Für Abkürzungen und Fachbegriffe, die im Fließtext stören würden.",
         "Für die Bedeutung eines Symbols."],
  nicht: ["NIE für etwas, das man zum Arbeiten braucht — dafür einen Aufklapper (kern-accordion) oder den Hinweis auf Klick. Auf Berührungsbildschirmen erscheint er nur per Antippen.",
          "Nicht für lange Texte. Was mehr als zwei Zeilen braucht, gehört in einen Aufklapper."],
  bsp: [{
    titel: "Erklärung zu einer Abkürzung",
    hinweis: "Zeigen, mit dem Tabulator hineinspringen oder antippen. Esc blendet aus, ohne den Fokus zu bewegen.",
    html:
'<p class="kern-body">Der Vorgang liegt bei der\n' +
'  <span class="kn-tooltip" tabindex="0" aria-describedby="kh-1">FRB\n' +
'    <span class="kn-tooltip__bubble" role="tooltip" id="kh-1">Feststellungs- und Rückzahlungsbescheid</span>\n' +
'  </span>.\n' +
'</p>'
  }],
  barriere: ["tabindex=\"0\" am Anker, sonst ist der Hinweis mit der Tastatur nicht zu erreichen.",
             "aria-describedby verbindet Anker und Blase, role=\"tooltip\" an der Blase.",
             "WCAG 1.4.13: Esc blendet aus (ohne Fokuswechsel), die Blase ist überfahrbar (Brücke über die Lücke) und bleibt, solange Zeiger oder Fokus darauf sind.",
             "Weil er leicht übersehen wird, darf er nie die einzige Quelle einer Information sein."],
  tasten: [["Tab", "Fokus auf den Anker zeigt den Hinweis", "Hinweis über aria-describedby"], ["Esc", "blendet aus, Fokus bleibt", ""]],
  klassen: [["kn-tooltip", "der Anker"], ["kn-tooltip__bubble", "der Text"],
            ["aria-describedby", "verbindet beide"]]
},
{
  id: "banner", name: "Seitenbanner", gruppe: "Rückmeldung",
  zweck: "Eine Nachricht, die die ganze Seite betrifft — oben, vor dem Inhalt.",
  wann: ["Nach einer abgeschlossenen Handlung, wenn die Seite danach wechselt: „Antrag gespeichert“ auf der Übersicht.",
         "Für eine zeitlich begrenzte Information, die alle Nutzenden der Seite betrifft (Wartung, Fristende)."],
  nicht: ["Für eine Meldung zu einem Abschnitt oder Feld — dafür kern-alert dort, wo es hingehört.",
          "Für Fehler im Formular — dafür die Fehlerzusammenfassung.",
          "Mehr als eines je Seite."],
  bsp: [{
    titel: "Information",
    html:
'<div class="kn-banner" role="region" aria-labelledby="bn-1">\n' +
'  <h2 class="kn-banner__header" id="bn-1">Wichtig</h2>\n' +
'  <div class="kn-banner__body">\n' +
'    <p class="kern-body">Am 30.10.2026 ist das Bürgerpostfach von 18 bis 20 Uhr nicht erreichbar.</p>\n' +
'  </div>\n' +
'</div>'
  }, {
    titel: "Erfolg nach einer Handlung",
    hinweis: "Nach dem Seitenwechsel bekommt das Banner den Fokus (tabindex=\"-1\"), damit der Screenreader es zuerst liest.",
    html:
'<div class="kn-banner kn-banner--success" role="region" aria-labelledby="bn-2" tabindex="-1">\n' +
'  <h2 class="kn-banner__header" id="bn-2">Erfolgreich</h2>\n' +
'  <div class="kn-banner__body">\n' +
'    <p class="kern-body">Der Antrag 2026-BAF-10482 ist gespeichert. <a class="kern-link" href="#">Zum Vorgang</a></p>\n' +
'  </div>\n' +
'</div>'
  }],
  barriere: ["role=\"region\" mit aria-labelledby auf den Kopf: das Banner ist ein Orientierungspunkt und hat einen Namen.",
             "Die Art steht im Kopf als Wort (Wichtig, Erfolgreich, Fehler) — die Farbe allein sagt nichts.",
             "Erfolg nach Seitenwechsel: Fokus auf das Banner (tabindex=\"-1\"), nicht role=\"alert\" — der Fokus reicht und unterbricht nichts."],
  tasten: [["Tab", "erreicht den Verweis im Banner", ""], ["Enter", "folgt dem Verweis", ""]],
  klassen: [["kn-banner", "Rahmen in der Farbe der Art"], ["kn-banner__header", "Kopf als Überschrift, auf getönter Fläche"],
            ["kn-banner__body", "Inhalt"], ["kn-banner--success, --danger", "Art; ohne Zusatz: Information"]]
},
{
  id: "warnhinweis", name: "Warnhinweis", gruppe: "Rückmeldung",
  zweck: "Eine Folge, die man kennen muss, bevor man weitermacht.",
  wann: ["Vor unumkehrbaren Schritten: Ablehnung, Löschung, Fristablauf.",
         "Wenn eine Angabe rechtliche Folgen hat."],
  nicht: ["Für gewöhnliche Hinweise — dafür die Meldung.",
          "Mehr als einer je Seite. Wer alles warnt, warnt nichts."],
  bsp: [{
    titel: "Vor der Ablehnung",
    html:
'<p class="kn-warning-text">Mit der Ablehnung beginnt die Widerspruchsfrist von einem Monat.\n' +
'Das Mahnverfahren läuft ab dem Folgetag weiter.</p>'
  }],
  barriere: ["Das Ausrufezeichen kommt aus dem CSS und wird nicht vorgelesen — die Warnung muss vollständig im Text stehen.",
             "Kein role=\"alert\": der Hinweis steht von Anfang an da und unterbricht nicht.",
             "Der Kreis ist Text auf Fläche und erreicht in allen vier Modi den geforderten Kontrast."],
  klassen: [["kn-warning-text", "Text mit Ausrufezeichen davor"]]
},
{
  id: "bestaetigung", name: "Bestätigung", gruppe: "Rückmeldung",
  zweck: "Der Abschluss: es hat geklappt, und das ist die Nummer dazu.",
  wann: ["Als eigene Seite nach dem Absenden eines Antrags oder einer Entscheidung.",
         "Immer mit einer Kennung, die man notieren kann, und mit dem, was als Nächstes geschieht."],
  nicht: ["Als flüchtige Meldung. Eine Bestätigung, die nach vier Sekunden verschwindet, ist keine.",
          "Ohne Angabe, wie es weitergeht."],
  bsp: [{
    titel: "Antrag abgeschickt",
    html:
'<div class="kn-confirmation">\n' +
'  <p class="kern-heading-small" style="margin:0 0 .5rem">Antrag ist eingegangen</p>\n' +
'  <p class="kn-confirmation__number">2026-BAF-10482</p>\n' +
'  <p class="kern-body" style="margin:0">Sie erhalten eine Nachricht in Ihr Postfach, sobald die\n' +
'  Prüfung abgeschlossen ist. Das dauert in der Regel vier Wochen.</p>\n' +
'</div>'
  }],
  barriere: ["Die Nummer steht in fester Schrift, damit Ziffern nicht zu verwechseln sind.",
             "Der grüne Rahmen ist Zugabe — die Aussage steht im Text.",
             "Nach dem Absenden gehört der Fokus auf die Überschrift dieser Seite."],
  klassen: [["kn-confirmation", "die Fläche"], ["kn-confirmation__number", "die Kennung, fest gesetzt"]]
},

/* ----------------- FLÄCHE ----------------- */
{
  id: "schublade", name: "Schublade", gruppe: "Fläche",
  zweck: "Eine Fläche, die von der Seite einfährt, ohne die Arbeit zu unterbrechen.",
  wann: ["Für Zusatzinformationen zu einem Fall: Verlauf, Nachweise, Notizen.",
         "Wenn der Hauptinhalt sichtbar bleiben soll."],
  nicht: ["Für Entscheidungen, die eine Antwort erzwingen — dafür der Dialog.",
          "Nicht mehrere gleichzeitig."],
  bsp: [{
    titel: "Verlauf einblenden",
    hinweis: "Der Knopf öffnet, der Fokus geht hinein. Esc oder Schließen: zu, Fokus zurück. Tab hinaus oder Klick daneben schließt sie auch.",
    html:
'<div>\n' +
'  <button class="kern-btn kern-btn--secondary" type="button"\n' +
'          data-kn-drawer aria-controls="sch-1" aria-expanded="false"><span class="kern-label">Verlauf anzeigen</span></button>\n' +
'  <aside class="kn-drawer" id="sch-1" aria-label="Verlauf">\n' +
'    <div class="kn-drawer__header">\n' +
'      <p class="kern-title" style="margin:0">Verlauf</p>\n' +
'      <button class="kern-btn kern-btn--tertiary" type="button"\n' +
'              data-kn-drawer aria-controls="sch-1">\n' +
'        <span class="kern-icon kern-icon--close" aria-hidden="true"></span>\n' +
'        <span class="kern-sr-only">Verlauf schließen</span></button>\n' +
'    </div>\n' +
'    <div class="kn-drawer__body">\n' +
'      <p class="kern-body">Antrag eingegangen am 18.03.2026.</p>\n' +
'      <p class="kern-body">Nachweise vollständig seit 24.03.2026.</p>\n' +
'    </div>\n' +
'  </aside>\n' +
'</div>'
  }],
  barriere: ["Ausdrücklich nicht modal (M51): der Hintergrund bleibt bedienbar. Damit der Fokus nie verdeckt hinter der Fläche liegt (WCAG 2.4.11), schließt sie, sobald er sie verlässt.",
             "Öffnen: aria-expanded=true, Fokus auf die Schublade (Name aus aria-label). Esc oder Schließen: Fokus zurück auf den Auslöser.",
             "Geschlossen ist sie unsichtbar und nicht fokussierbar (visibility) — nichts Unsichtbares im Tab-Weg.",
             "Der Schließen-Knopf braucht einen Namen (kern-sr-only) — ein Kreuz allein ist stumm."],
  tasten: [["Enter, Leertaste am Auslöser", "öffnet, Fokus in die Schublade", "Name der Schublade"], ["Esc", "schließt, Fokus zurück zum Auslöser", ""], ["Tab aus der Schublade hinaus", "schließt sie", ""]],
  klassen: [["kn-drawer", "die Fläche"], ["kn-drawer__header", "Titel und Schließen"],
            ["kn-drawer__body", "der Inhalt, rollt"], ["data-kn-drawer", "verdrahtet den Knopf"],
            ["data-kn-open", "wird gesetzt, solange sie offen ist"]]
},
{
  id: "einschub", name: "Einschub", gruppe: "Fläche",
  zweck: "Hebt einen Absatz mit einem senkrechten Strich hervor.",
  wann: ["Für einen Gesetzeswortlaut, ein Zitat, eine Begründung.",
         "In der Ausführung „Aktion“ für einen Vorschlag, der noch bestätigt werden muss."],
  nicht: ["Für Warnungen — dafür der Warnhinweis.",
          "Nicht mehrfach hintereinander. Was ständig hervorgehoben wird, ist nicht mehr hervorgehoben."],
  bsp: [{
    titel: "Gesetzeswortlaut und Vorschlag",
    html:
'<div>\n' +
'  <div class="kn-inset-text">\n' +
'    <p class="kern-body" style="margin:0">„Auf Antrag sind Darlehensnehmende von der\n' +
'    Verpflichtung zur Rückzahlung freizustellen, soweit ihr Einkommen den\n' +
'    Freibetrag nicht übersteigt.“ § 18a Absatz 1 BAföG</p>\n' +
'  </div>\n' +
'  <div class="kn-inset-text kn-inset-text--action" style="margin-block-start:1rem">\n' +
'    <p class="kern-body" style="margin:0">Vorschlag: Freistellung für zwölf Monate.\n' +
'    Das anrechenbare Einkommen liegt 214 Euro unter dem Freibetrag.</p>\n' +
'  </div>\n' +
'</div>'
  }],
  barriere: ["Der Strich ist zeichnerisch. Bei einem Zitat gehört das Element <blockquote> darum, nicht nur die Klasse.",
             "Die Ausführung „Aktion“ unterscheidet sich nur in der Farbe — die Bedeutung muss im Text stehen."],
  klassen: [["kn-inset-text", "Absatz mit Strich"], ["kn-inset-text--action", "Strich in der Aktionsfarbe"]]
},
{
  id: "phase", name: "Phasenmarke", gruppe: "Fläche",
  zweck: "Sagt am Kopf einer Seite, welchen Reifegrad sie hat.",
  wann: ["Solange etwas Entwurf, Erprobung oder Arbeitsstand ist.",
         "Zusammen mit einem Satz, was das für die Nutzenden bedeutet."],
  nicht: ["Auf einer fertigen Anwendung. Eine Marke, die nie verschwindet, liest niemand mehr."],
  bsp: [{
    titel: "Arbeitsstand",
    html:
'<div class="kn-phase-banner">\n' +
'  <span class="kern-badge kern-badge--info"><span class="kern-label">Entwurf</span></span>\n' +
'  <span>Diese Ansicht ist ein Arbeitsstand. Zahlen sind Beispielwerte.</span>\n' +
'</div>'
  }],
  barriere: ["Die Marke allein reicht nicht — der Satz daneben sagt, was folgt.",
             "Ganz oben im Inhalt, vor der Überschrift, damit sie nicht überlesen wird."],
  klassen: [["kn-phase-banner", "die Zeile"], ["kern-badge", "die Marke darin (KERN)"]]
},

/* ----------------- DATEN ----------------- */
{
  id: "kennzahl", name: "Kennzahl", gruppe: "Daten",
  zweck: "Eine große Zahl mit ihrer Bedeutung darunter.",
  wann: ["Auf einer Übersichtsseite: offene Vorgänge, überschrittene Fristen, Rückstand.",
         "Höchstens vier nebeneinander."],
  nicht: ["Ohne Bezugsgröße. „9“ sagt nichts, „9 von 47“ sagt etwas.",
          "Für Zahlen, die man vergleichen soll — dafür eine Tabelle."],
  bsp: [{
    titel: "Drei Kennzahlen",
    html:
'<div class="kn-auto-grid">\n' +
'  <div class="kn-metric">\n' +
'    <span class="kn-metric__value">9</span>\n' +
'    <span class="kn-metric__label">offene Vorgänge</span>\n' +
'  </div>\n' +
'  <div class="kn-metric">\n' +
'    <span class="kn-metric__value">3</span>\n' +
'    <span class="kn-metric__label">Fristen diese Woche</span>\n' +
'  </div>\n' +
'  <div class="kn-metric">\n' +
'    <span class="kn-metric__value">12</span>\n' +
'    <span class="kn-metric__label">Wiedervorlagen</span>\n' +
'  </div>\n' +
'</div>'
  }],
  barriere: ["Zahl und Beschriftung stehen im selben Element, damit sie zusammen vorgelesen werden.",
             "Die Zahl allein ist keine Überschrift — kein <h2> darum.",
             "Kennzahlen dürfen niemals auf einzelne Beschäftigte herunterbrechbar sein (§ 80 BPersVG)."],
  klassen: [["kn-metric", "die Karte"], ["kn-metric__value", "die große Zahl"],
            ["kn-metric__label", "was sie bedeutet"]]
},
{
  id: "bildnis", name: "Bildnis", gruppe: "Daten",
  zweck: "Ein rundes Namenskürzel für eine Person.",
  wann: ["In Listen, wo mehrere Bearbeitende vorkommen.",
         "Im Kopf, für die angemeldete Person."],
  nicht: ["Als einziges Kennzeichen. Ein Kürzel ist mehrdeutig — der Name gehört daneben.",
          "Für Sachen. Ein Vorgang ist keine Person."],
  bsp: [{
    titel: "Drei Größen",
    html:
'<div style="display:flex;align-items:center;gap:1rem">\n' +
'  <span class="kn-avatar kn-avatar--small" aria-hidden="true">AB</span>\n' +
'  <span class="kn-avatar" aria-hidden="true">TO</span>\n' +
'  <span class="kn-avatar kn-avatar--large" aria-hidden="true">ML</span>\n' +
'  <span class="kern-body" style="margin:0">A. Berger, T. Okonkwo, M. Lindqvist</span>\n' +
'</div>'
  }],
  barriere: ["aria-hidden=\"true\", wenn der Name daneben steht — sonst hört man „A B, A. Berger“.",
             "Das Bildnis setzt seine Textfarbe selbst. Ohne das erbt es die des Umfelds und wird im Kopf dunkel auf dunkel: 1,30 zu 1. Der Fehler stand bis zum 12.08.2026 im System."],
  klassen: [["kn-avatar", "40 Pixel"], ["kn-avatar--small", "32 Pixel"],
            ["kn-avatar--large", "64 Pixel"]]
},
/* ================= NEU IN 2.8.2 (nbyc) — Vollständigkeit (Vergleich Teil 9) ================= */
{
  id: "popover", name: "Popover und Hinweis auf Klick", gruppe: "Fläche",
  zweck: "Zeigt zusätzliche Information erst auf Klick — auch auf Touch-Geräten. Der Hinweis auf Klick sagt einen kurzen Text an; das Popover darf Links und Knöpfe enthalten.",
  wann: ["Hilfe zu einem Feld, die nicht jeder braucht.",
           "Ein kurzer Begriff, den man nachschlagen will, ohne die Seite zu verlassen."],
  nicht: ["Für Pflichtangaben oder Fehler — die gehören sichtbar auf die Seite.",
           "Wenn der Inhalt eine Entscheidung verlangt — dafür der Dialog.",
           "Nicht als Ersatz für eine gute Beschriftung."],
  bsp: [
  {
    titel: "Hinweis auf Klick (Toggletip)",
    hinweis: "Klick oder Enter auf das Symbol schreibt den Text in eine Statusregion — Screenreader sagen ihn an. Esc oder Klick daneben schließt.",
    html:
'<p class=\"kern-body\">Anrechenbares Einkommen\n' +
'  <span class=\"kn-toggletip\">\n' +
'    <button class=\"kern-btn kern-btn--tertiary kern-btn--small\" type=\"button\" data-kn-toggletip=\"Einkommen nach Abzug der Freibeträge, gerechnet auf den Monat.\">\n' +
'      <span class=\"kern-icon kern-icon--help\" aria-hidden=\"true\"></span><span class=\"kern-sr-only\">Was heißt anrechenbares Einkommen?</span></button>\n' +
'    <span class=\"kn-toggletip__bubble\"></span>\n' +
'  </span>\n' +
'</p>'
  },
  {
    titel: "Popover mit Link",
    hinweis: "Enter öffnet und setzt den Fokus in den Bereich; Esc schließt und gibt den Fokus zurück.",
    html:
'<div class=\"kn-popover\">\n' +
'  <button class=\"kern-btn kern-btn--secondary\" type=\"button\" data-kn-popover aria-expanded=\"false\" aria-controls=\"po-1\"><span class=\"kern-label\">Rechtsgrundlage</span></button>\n' +
'  <div class=\"kn-popover__panel\" id=\"po-1\" hidden tabindex=\"-1\">\n' +
'    <p class=\"kern-body kern-body--small\">§ 18a Abs. 1 BAföG — Freistellung bei geringem Einkommen.</p>\n' +
'    <a class=\"kern-link\" href=\"#\">Gesetzestext öffnen</a>\n' +
'  </div>\n' +
'</div>'
  }],
  barriere: ["Der Knopf hat einen Namen (kern-sr-only) — ein Fragezeichen allein ist stumm.",
           "Hinweis auf Klick: Text erst beim Klick in die Blase und angesagt (zentrale Ansage, M61) (WCAG 4.1.3).",
           "Popover: aria-expanded am Knopf; Esc schließt und gibt den Fokus zurück; kein Fokus-Gefängnis, weil nicht modal.",
           "Anders als der Kurzhinweis auch auf Touch bedienbar (WCAG 1.4.13)."],
  tasten: [["Enter, Leertaste am Knopf (Popover)", "öffnet, Fokus auf das erste Element darin", ""], ["Esc", "schließt, Fokus zurück", ""], ["Tab hinaus", "schließt", ""], ["Enter, Leertaste (Hinweis auf Klick)", "zeigt den Text", "der Text"], ["Esc", "blendet ihn aus", ""]],
  klassen: [["kn-toggletip", "Hülle des Hinweises auf Klick"], ["data-kn-toggletip", "Text des Hinweises"], ["kn-toggletip__bubble", "Statusregion (role=status)"], ["kn-popover", "Hülle"], ["data-kn-popover", "Knopf, mit aria-controls"], ["kn-popover__panel", "der Bereich (hidden)"]]
},
{
  id: "ki-kennzeichnung", name: "KI-Kennzeichnung", gruppe: "Rückmeldung",
  zweck: "Macht erkennbar, dass ein Inhalt mit KI erzeugt oder unterstützt wurde — mit einer Erklärung auf Klick.",
  wann: ["An jedem Text, Vorschlag oder Bild, das ganz oder teilweise von einem KI-System stammt.",
           "Bei Entscheidungsvorschlägen in der Fallbearbeitung: wer hat vorgeschlagen, wer entscheidet."],
  nicht: ["Nicht als Haftungsausschluss in Kleindruck — die Kennzeichnung steht direkt am Inhalt.",
           "Nicht für reine Rechtschreibhilfe ohne inhaltliche Wirkung."],
  bsp: [
  {
    titel: "Vorschlag mit Kennzeichnung",
    html:
'<p class=\"kern-body\"><span class=\"kn-ai-label\">\n' +
'  <span class=\"kern-badge kern-badge--info\"><span class=\"kern-label\">KI-gestützt</span></span>\n' +
'  <span class=\"kn-toggletip\">\n' +
'    <button class=\"kern-btn kern-btn--tertiary kern-btn--small\" type=\"button\" data-kn-toggletip=\"Dieser Vorschlag wurde von einem KI-System aus den Nachweisen erstellt. Die Entscheidung trifft die Sachbearbeitung.\">\n' +
'      <span class=\"kern-icon kern-icon--info\" aria-hidden=\"true\"></span><span class=\"kern-sr-only\">Was heißt KI-gestützt?</span></button>\n' +
'    <span class=\"kn-toggletip__bubble\"></span>\n' +
'  </span>\n' +
'</span></p>\n' +
'<p class=\"kern-body\">Empfehlung: Freistellung bis 31.03.2028.</p>'
  }],
  barriere: ["Die Kennzeichnung ist Text („KI-gestützt“), nicht nur ein Symbol oder eine Farbe.",
           "Die Erklärung kommt über den Hinweis auf Klick und wird angesagt.",
           "Inhaltlich: wer erstellt hat (KI) und wer entscheidet (Mensch) — in einfacher Sprache."],
  tasten: [["Enter, Leertaste am Info-Knopf", "zeigt die Erklärung", "der Text"], ["Esc", "blendet sie aus", ""]],
  klassen: [["kn-ai-label", "Hülle: Marke + Hinweis auf Klick"], ["kern-badge--info", "die Marke (KERN)"]]
},
{
  id: "fab", name: "Schwebender Aktionsknopf (FAB)", gruppe: "Aktion",
  zweck: "Die eine Hauptaktion einer Ansicht, schwebend unten rechts — klein-rund mit Symbol oder breit mit Text.",
  wann: ["In langen Listen und Arbeitsvorräten, wenn die Hauptaktion (z. B. „Neuer Vorgang“) beim Scrollen erreichbar bleiben soll.",
           "Höchstens ein FAB je Seite."],
  nicht: ["Nicht in Formularen — dort steht der Absenden-Knopf am Ende des Formulars.",
           "Nicht für zerstörende oder seltene Aktionen.",
           "Nicht, wenn die Aktion ohnehin sichtbar bleibt."],
  bsp: [
  {
    titel: "Über scrollendem Inhalt",
    hinweis: "Den Arbeitsvorrat im Kasten scrollen (Mausrad oder Tab in die Liste, dann ↓ / Bild↓): der Inhalt läuft unter den Knöpfen durch. Abgegrenzt sind sie ohne Schatten — wie KERN — durch einen 4-px-Rand in der Seitenfarbe. In dieser Vorschau schweben die Knöpfe in ihrem Kasten (CSS transform am Kasten); auf einer echten Seite stehen sie unten rechts im Fenster.",
    html:
'<div style=\"position:relative;transform:translateZ(0)\">\n' +
'  <div style=\"max-block-size:18rem;overflow-y:auto;padding-block-end:6rem\" tabindex=\"0\" role=\"region\" aria-label=\"Arbeitsvorrat (Beispiel, scrollbar)\">\n' +
'    <table class=\"kern-table\">\n' +
'      <caption class=\"kern-title\">Arbeitsvorrat</caption>\n' +
'      <thead class=\"kern-table__head\"><tr class=\"kern-table__row\"><th class=\"kern-table__header\" scope=\"col\">Aktenzeichen</th><th class=\"kern-table__header\" scope=\"col\">Antrag</th><th class=\"kern-table__header\" scope=\"col\">Frist</th></tr></thead>\n' +
'      <tbody class=\"kern-table__body\">\n' +
'        <tr class=\"kern-table__row\"><td class=\"kern-table__cell\">2026-BAF-10482</td><td class=\"kern-table__cell\">Freistellung</td><td class=\"kern-table__cell\">17.03.2026</td></tr>\n' +
'        <tr class=\"kern-table__row\"><td class=\"kern-table__cell\">2026-BAF-10483</td><td class=\"kern-table__cell\">Ermäßigung</td><td class=\"kern-table__cell\">18.03.2026</td></tr>\n' +
'        <tr class=\"kern-table__row\"><td class=\"kern-table__cell\">2026-BAF-10484</td><td class=\"kern-table__cell\">Freistellung</td><td class=\"kern-table__cell\">20.03.2026</td></tr>\n' +
'        <tr class=\"kern-table__row\"><td class=\"kern-table__cell\">2026-BAF-10485</td><td class=\"kern-table__cell\">Erstattung</td><td class=\"kern-table__cell\">24.03.2026</td></tr>\n' +
'        <tr class=\"kern-table__row\"><td class=\"kern-table__cell\">2026-BAF-10486</td><td class=\"kern-table__cell\">Ermäßigung</td><td class=\"kern-table__cell\">25.03.2026</td></tr>\n' +
'        <tr class=\"kern-table__row\"><td class=\"kern-table__cell\">2026-BAF-10487</td><td class=\"kern-table__cell\">Freistellung</td><td class=\"kern-table__cell\">27.03.2026</td></tr>\n' +
'        <tr class=\"kern-table__row\"><td class=\"kern-table__cell\">2026-BAF-10488</td><td class=\"kern-table__cell\">Erstattung</td><td class=\"kern-table__cell\">31.03.2026</td></tr>\n' +
'        <tr class=\"kern-table__row\"><td class=\"kern-table__cell\">2026-BAF-10489</td><td class=\"kern-table__cell\">Freistellung</td><td class=\"kern-table__cell\">01.04.2026</td></tr>\n' +
'        <tr class=\"kern-table__row\"><td class=\"kern-table__cell\">2026-BAF-10490</td><td class=\"kern-table__cell\">Ermäßigung</td><td class=\"kern-table__cell\">03.04.2026</td></tr>\n' +
'        <tr class=\"kern-table__row\"><td class=\"kern-table__cell\">2026-BAF-10491</td><td class=\"kern-table__cell\">Freistellung</td><td class=\"kern-table__cell\">07.04.2026</td></tr>\n' +
'        <tr class=\"kern-table__row\"><td class=\"kern-table__cell\">2026-BAF-10492</td><td class=\"kern-table__cell\">Erstattung</td><td class=\"kern-table__cell\">08.04.2026</td></tr>\n' +
'        <tr class=\"kern-table__row\"><td class=\"kern-table__cell\">2026-BAF-10493</td><td class=\"kern-table__cell\">Freistellung</td><td class=\"kern-table__cell\">10.04.2026</td></tr>\n' +
'      </tbody>\n' +
'    </table>\n' +
'  </div>\n' +
'  <button class=\"kern-btn kern-btn--primary kn-fab\" type=\"button\" style=\"inset-inline-end:17rem\">\n' +
'    <span class=\"kern-icon kern-icon--add\" aria-hidden=\"true\"></span><span class=\"kern-sr-only\">Neuer Vorgang</span></button>\n' +
'  <button class=\"kern-btn kern-btn--primary kn-fab kn-fab--extended\" type=\"button\">\n' +
'    <span class=\"kern-icon kern-icon--add\" aria-hidden=\"true\"></span><span class=\"kern-label\">Neuer Vorgang</span></button>\n' +
'</div>'
  }],
  barriere: ["Klein-rund: Name über kern-sr-only — das Plus allein ist stumm.",
           "56 × 56 px — über WCAG 2.5.5 (44 px).",
           "Ohne Schatten (KERN setzt keine sichtbar ein): der 4-px-Rand in der Seitenfarbe trennt den Knopf vom Inhalt darunter; die Grenze Knopf/Rand liegt über 3 : 1.",
           "Eine scrollbare Fläche braucht Tastaturzugang und Namen (tabindex=0, role=region, aria-label) — sonst lässt sie sich ohne Maus nicht bewegen.",
           "Die Seite hält unten Platz frei (kn-page:has(.kn-fab)), damit der Knopf nie den letzten Inhalt verdeckt (WCAG 2.4.11).",
           "Er steht in der Tab-Reihenfolge dort, wo er im Markup steht — dorthin gehört er auch (z. B. nach der Liste)."],
  tasten: [["Tab", "erreicht den Knopf an seiner Stelle im Markup (nach der Liste)", ""], ["Enter, Leertaste", "löst aus", ""],
           ["↓ ↑ Bild↓ Bild↑ in der Liste", "scrollt den Inhalt unter dem Knopf (Beispiel)", "Name der Fläche beim Betreten"]],
  klassen: [["kn-fab", "an kern-btn kern-btn--primary: klein-rund"], ["kn-fab--extended", "breit mit Text"]]
},
{
  id: "zaehler-marke", name: "Zähler-Marke", gruppe: "Aktion",
  zweck: "Zeigt an einem Symbolknopf, wie viele neue Einträge es gibt.",
  wann: ["An Nachrichten, Wiedervorlagen, Aufgaben — wenn die Zahl zum Handeln führt."],
  nicht: ["Nicht für Zahlen ohne Handlungsbezug — dann eine Kennzahl.",
           "Nicht über 99: dann „99+“."],
  bsp: [
  {
    titel: "Nachrichten mit Zahl",
    html:
'<button class=\"kern-btn kern-btn--tertiary\" type=\"button\">\n' +
'  <span class=\"kern-icon kern-icon--mail\" aria-hidden=\"true\"></span>\n' +
'  <span class=\"kern-sr-only\">Nachrichten, 3 neu</span>\n' +
'  <span class=\"kn-count-badge\" aria-hidden=\"true\">3</span>\n' +
'</button>'
  }],
  barriere: ["Die Zahl ist aria-hidden; der Knopfname nennt sie vollständig („Nachrichten, 3 neu“).",
           "Ändert sich die Zahl, die Änderung über die zentrale Ansage melden (M61).",
           "Weiße Zahl auf Gefahrfarbe: Kontrast wie der Gefahr-Knopf (6,01 hell / 6,99 dunkel)."],
  tasten: [["Tab", "erreicht den Knopf", ""], ["Enter, Leertaste", "löst aus", "Name samt Zahl („Nachrichten, 3 neu“) — die sichtbare Zahl ist für Hilfsmittel verborgen"]],
  klassen: [["kn-count-badge", "die Zahl am Knopf"]]
},
{
  id: "codeblock", name: "Codeblock", gruppe: "Daten",
  zweck: "Zeigt Quelltext oder Kennungen zum Abschreiben — mit Kopieren-Knopf.",
  wann: ["Für Einbindungs-Code, Konfiguration, lange Kennungen."],
  nicht: ["Nicht für Fließtext — Code im Satz ist kn-code."],
  bsp: [
  {
    titel: "Einbindung kopieren",
    html:
'<div class=\"kn-code-block\">\n' +
'  <pre id=\"cb-1\" tabindex=\"0\" role=\"region\" aria-label=\"Code: Einbindung\">&lt;link rel=\"stylesheet\" href=\"system/kern-neu.css\"&gt;</pre>\n' +
'  <button class=\"kern-btn kern-btn--tertiary kern-btn--small kn-code-block__copy\" type=\"button\" data-kn-copy=\"cb-1\">\n' +
'    <span class=\"kern-icon kern-icon--content-copy\" aria-hidden=\"true\"></span><span class=\"kern-label\">Kopieren</span></button>\n' +
'</div>'
  }],
  barriere: ["Der Knopf trägt Text („Kopieren“), nicht nur ein Symbol.",
           "Die Bestätigung kommt als flüchtige Meldung (role=status).",
           "Breiter Code scrollt waagerecht im Block, nicht die Seite (WCAG 1.4.10).",
           "Der Block ist deshalb per Tastatur erreichbar (tabindex=0, role=region mit Namen) — sonst ließe er sich in Firefox und Safari nicht rollen (WCAG 2.1.1)."],
  tasten: [["Tab", "erst der Code (rollt mit ← →), dann „Kopieren“", ""], ["Enter auf „Kopieren“", "kopiert", "„In die Zwischenablage kopiert.“"]],
  klassen: [["kn-code-block", "Hülle"], ["kn-code-block__copy", "Kopieren-Knopf"], ["data-kn-copy", "id des Elements, dessen Text kopiert wird"]]
},
{
  id: "baum", name: "Baumansicht", gruppe: "Navigation",
  zweck: "Zeigt eine Gliederung mit Ebenen, die man auf- und zuklappen kann — Aktenplan, Ordner, Organigramm.",
  wann: ["Wenn die Einträge eine echte Hierarchie haben und man darin navigiert oder auswählt.",
           "Ab etwa drei Ebenen; bei zwei Ebenen reicht oft eine gruppierte Liste."],
  nicht: ["Nicht für die Seitennavigation einer Website — dafür die Seitennavigation.",
           "Nicht für Daten mit Spalten — dafür die Tabelle.",
           "Nicht tiefer als nötig: jede Ebene kostet einen Tastendruck."],
  bsp: [
  {
    titel: "Aktenplan",
    hinweis: "Pfeiltasten wandern, → öffnet, ← schließt, Enter wählt, ein Buchstabe springt. Nur ein Eintrag ist per Tab erreichbar.",
    html:
'<ul class=\"kn-tree\" role=\"tree\" aria-label=\"Aktenplan\" data-kn-tree>\n' +
'  <li role=\"treeitem\" aria-expanded=\"true\"><span class=\"kn-tree__label\"><span class=\"kern-icon kern-icon--chevron-right\" aria-hidden=\"true\"></span>1 Ausbildungsförderung</span>\n' +
'    <ul role=\"group\">\n' +
'      <li role=\"treeitem\"><span class=\"kn-tree__label\"><span class=\"kn-tree__spacer\"></span>1.1 Anträge</span></li>\n' +
'      <li role=\"treeitem\"><span class=\"kn-tree__label\"><span class=\"kn-tree__spacer\"></span>1.2 Bescheide</span></li>\n' +
'      <li role=\"treeitem\" aria-expanded=\"false\"><span class=\"kn-tree__label\"><span class=\"kern-icon kern-icon--chevron-right\" aria-hidden=\"true\"></span>1.3 Rückforderung</span>\n' +
'        <ul role=\"group\">\n' +
'          <li role=\"treeitem\"><span class=\"kn-tree__label\"><span class=\"kn-tree__spacer\"></span>1.3.1 Stundung</span></li>\n' +
'          <li role=\"treeitem\"><span class=\"kn-tree__label\"><span class=\"kn-tree__spacer\"></span>1.3.2 Erlass</span></li>\n' +
'        </ul>\n' +
'      </li>\n' +
'    </ul>\n' +
'  </li>\n' +
'  <li role=\"treeitem\" aria-expanded=\"false\"><span class=\"kn-tree__label\"><span class=\"kern-icon kern-icon--chevron-right\" aria-hidden=\"true\"></span>2 Darlehen</span>\n' +
'    <ul role=\"group\">\n' +
'      <li role=\"treeitem\"><span class=\"kn-tree__label\"><span class=\"kn-tree__spacer\"></span>2.1 Freistellung</span></li>\n' +
'      <li role=\"treeitem\"><span class=\"kn-tree__label\"><span class=\"kn-tree__spacer\"></span>2.2 Tilgung</span></li>\n' +
'    </ul>\n' +
'  </li>\n' +
'  <li role=\"treeitem\"><span class=\"kn-tree__label\"><span class=\"kn-tree__spacer\"></span>3 Organisation</span></li>\n' +
'</ul>'
  }],
  barriere: ["Rollen tree / treeitem / group, aria-expanded an Zweigen, aria-selected für die Wahl.",
           "Tasten nach WAI-ARIA Authoring Practices (Tree View); wandernder Tab-Halt.",
           "Der Fokusring liegt auf der Zeile, nicht auf dem ganzen Teilbaum.",
           "Das Aufklappen wird über aria-expanded angesagt; die Ebene ergibt sich aus der Verschachtelung."],
  tasten: [["↓ / ↑", "nächster / voriger sichtbarer Eintrag", ""], ["→", "öffnet bzw. geht zum ersten Kind", "„erweitert“"], ["←", "schließt bzw. geht zum Elternteil", "„reduziert“"], ["Pos1 / Ende", "erster / letzter Eintrag", ""], ["Enter, Leertaste", "wählt", "„ausgewählt“"], ["Buchstabe", "nächster Eintrag mit diesem Anfang", ""]],
  klassen: [["kn-tree", "der Baum (ul, role=tree)"], ["data-kn-tree", "verdrahtet die Tasten"], ["kn-tree__label", "die Zeile eines Eintrags"], ["kn-tree__spacer", "Platzhalter statt Pfeil bei Blättern"]]
},
{
  id: "mehrfachauswahl", name: "Mehrfachauswahl", gruppe: "Eingabe",
  zweck: "Wählt mehrere Einträge aus einer langen Liste — mit Suche. Die Wahl steht als Marken über dem Feld.",
  wann: ["Zuständigkeiten, Kategorien, Filter mit vielen Möglichkeiten.",
           "Ab etwa acht Möglichkeiten; darunter Ankreuzfelder (kern-form-check)."],
  nicht: ["Bis etwa sieben Möglichkeiten — Ankreuzfelder zeigen alles auf einen Blick.",
           "Nicht für eine einzige Wahl — dafür die Combobox."],
  bsp: [
  {
    titel: "Zuständige Stellen",
    hinweis: "↓ öffnet, Enter wählt oder entfernt, Rücktaste im leeren Feld entfernt die letzte Wahl. Jede Änderung wird angesagt.",
    html:
'<div class=\"kern-form-input kn-combobox kn-multiselect\" data-kn-multiselect>\n' +
'  <label class=\"kern-label\" for=\"ms-1\">Zuständige Stellen</label>\n' +
'  <div class=\"kern-hint\" id=\"ms-1-hinweis\">Mehrere möglich. Tippen filtert.</div>\n' +
'  <ul class=\"kn-multiselect__chips\" aria-label=\"Ausgewählt\"></ul>\n' +
'  <input class=\"kern-form-input__input\" id=\"ms-1\" role=\"combobox\" aria-expanded=\"false\" aria-controls=\"ms-1-l\" aria-autocomplete=\"list\" autocomplete=\"off\" aria-describedby=\"ms-1-hinweis\">\n' +
'  <ul class=\"kn-combobox__list\" id=\"ms-1-l\" role=\"listbox\" aria-multiselectable=\"true\" aria-label=\"Zuständige Stellen\" hidden>\n' +
'    <li class=\"kn-combobox__option\" role=\"option\" id=\"ms-1-1\" aria-selected=\"false\">Bundesverwaltungsamt Köln</li>\n' +
'    <li class=\"kn-combobox__option\" role=\"option\" id=\"ms-1-2\" aria-selected=\"true\">Studierendenwerk Hamburg</li>\n' +
'    <li class=\"kn-combobox__option\" role=\"option\" id=\"ms-1-3\" aria-selected=\"false\">Studierendenwerk München</li>\n' +
'    <li class=\"kn-combobox__option\" role=\"option\" id=\"ms-1-4\" aria-selected=\"false\">Landesamt für Ausbildungsförderung</li>\n' +
'    <li class=\"kn-combobox__option\" role=\"option\" id=\"ms-1-5\" aria-selected=\"false\">Bezirksamt Mitte</li>\n' +
'  </ul>\n' +
'</div>'
  }],
  barriere: ["Combobox mit aria-multiselectable; aria-activedescendant zeigt die aktuelle Option, aria-selected die Wahl.",
           "Jede Änderung wird angesagt („… ausgewählt, 2 ausgewählt“) (zentrale Ansage, M61).",
           "Jede Marke ist ein Knopf mit Namen („… entfernen“); danach geht der Fokus zurück ins Feld.",
           "Gewählt = Häkchen-Kästchen, nicht nur Farbe."],
  tasten: [["↓", "öffnet, wandert", ""], ["Pos1 / Ende", "erster / letzter Eintrag, solange einer aktiv ist; sonst Schreibmarke", ""], ["Enter", "wählt bzw. entfernt", "„… ausgewählt, n ausgewählt“"], ["Esc", "schließt", ""], ["Rücktaste im leeren Feld", "entfernt die letzte Wahl", "„… entfernt, n ausgewählt“"], ["Tab auf eine Marke, Enter", "entfernt sie, Fokus zurück ins Feld", "„… entfernt, n ausgewählt“"]],
  klassen: [["kn-multiselect", "an kern-form-input und kn-combobox"], ["data-kn-multiselect", "verdrahtet"], ["kn-multiselect__chips", "Liste der gewählten Marken"], ["kn-is-active", "aktuelle Option (vom Skript gesetzt)"]]
},
{
  id: "kalender", name: "Kalender-Datum", gruppe: "Eingabe",
  zweck: "Ein Datumsfeld mit Kalender zum Nachschlagen. Eintippen bleibt der Hauptweg; der Kalender hilft, wenn der Wochentag oder der Monat zählt.",
  wann: ["Termine, Fristen, Eingangsdaten — wenn Nutzende den Kalender sehen müssen (Wochentag, nächste Woche).",
           "Zeiträume in naher Zukunft oder Vergangenheit."],
  nicht: ["Bekannte Daten wie das Geburtsdatum — dafür KERNs Datum mit drei Feldern (Tag, Monat, Jahr).",
           "Nicht als einziger Eingabeweg: das Feld bleibt immer beschreibbar."],
  bsp: [
  {
    titel: "Eingangsdatum",
    hinweis: "Knopf öffnet den Kalender; „31.02.2026“ eintippen und mit Tab verlassen zeigt den Fehlerzustand. ← → Tag, ↑ ↓ Woche, Pos1/Ende Wochenanfang/-ende, Bild↑/↓ Monat, mit Umschalt Jahr, Enter übernimmt, Esc bricht ab.",
    html:
'<div class=\"kern-form-input\" data-kn-date-picker>\n' +
'  <label class=\"kern-label\" for=\"dp-1\">Antrag eingegangen am</label>\n' +
'  <div class=\"kern-hint\" id=\"dp-1-hinweis\">Format TT.MM.JJJJ, z. B. 14.10.2026</div>\n' +
'  <div class=\"kern-input-group\">\n' +
'    <input class=\"kern-form-input__input\" id=\"dp-1\" type=\"text\" inputmode=\"numeric\" autocomplete=\"off\" aria-describedby=\"dp-1-hinweis\">\n' +
'    <button class=\"kern-btn kern-btn--secondary\" type=\"button\" aria-haspopup=\"dialog\" data-kn-date-picker-open>\n' +
'      <span class=\"kern-icon kern-icon--calendar-today\" aria-hidden=\"true\"></span>\n' +
'      <span class=\"kern-label kern-sr-only\">Datum aus Kalender wählen</span>\n' +
'    </button>\n' +
'  </div>\n' +
'  <p class=\"kern-error\" id=\"dp-1-fehler\" hidden>\n' +
'    <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"></span>\n' +
'    <span class=\"kern-body\">Geben Sie ein gültiges Datum als Tag, Monat und Jahr ein, z. B. 14.10.2026.</span>\n' +
'  </p>\n' +
'</div>'
  }],
  barriere: ["Muster nach WAI-ARIA Authoring Practices (Date Picker Dialog): modaler Dialog, Raster mit wanderndem Tab-Halt.",
           "Jeder Tag hat einen vollen Namen („Mittwoch, 14. Oktober 2026“); heute trägt aria-current=date, der gewählte Tag aria-pressed.",
           "Der Monatstitel wird beim Blättern angesagt (zentrale Ansage, M61); im modalen Dialog liegt die Ansage im Dialog.",
           "Nach Wahl oder Abbruch geht der Fokus zurück auf den Kalender-Knopf.",
           "Woche beginnt am Montag (DIN 1355 / ISO 8601).",
           "Eingetipptes wird beim Verlassen geprüft: KERNs Fehlerzustand mit Meldung, wie es richtig geht; die Fehler-ID steht nur bei Fehler in aria-describedby."],
  tasten: [["Enter, Leertaste am Kalender-Knopf", "öffnet; Fokus auf dem gewählten Tag oder heute", "voller Tagesname"], ["← → ↑ ↓", "Tag / Woche", "Tagesname; neuer Monat wird angesagt"], ["Pos1 / Ende", "Wochenanfang / -ende", ""], ["Bild↑ / Bild↓, mit Umschalt", "Monat / Jahr", "Monat und Jahr"], ["Enter, Leertaste", "übernimmt, Fokus zurück zum Knopf", ""], ["Esc", "bricht ab, Fokus zurück zum Knopf", ""], ["Tab (Feld verlassen)", "prüft die Eingabe", "Fehlermeldung über aria-describedby"]],
  klassen: [["data-kn-date-picker", "Hülle; verdrahtet Feld und Knopf"], ["data-kn-date-picker-open", "der Knopf, der den Kalender öffnet"], ["kn-date-picker__dialog", "der Kalender (vom Skript gebaut)"], ["kn-date-picker__day", "ein Tag im Raster (--outside: Nachbarmonat)"], ["Feld-ID + \"-fehler\"", "die kern-error-Meldung bei ungültiger Eingabe"]]
},
{
  id: "uhrzeit", name: "Uhrzeit", gruppe: "Eingabe",
  zweck: "Ein Textfeld für eine Uhrzeit. Kurzformen werden beim Verlassen vereinheitlicht: „930“, „9.30“, „9:30“ → 09:30.",
  wann: ["Termine und Fristen mit Uhrzeit.", "Zusammen mit dem Kalender-Datum."],
  nicht: ["Kein natives type=time: Bedienung und Ansage unterscheiden sich je Browser stark.",
           "Nicht für Dauern („2 Stunden“) — dafür ein Zahlfeld mit Einheit."],
  bsp: [
  {
    titel: "Uhrzeit mit Fehlerzustand",
    hinweis: "„930“ eintippen und mit Tab verlassen → 09:30. „25:00“ zeigt KERNs Fehlerzustand mit konstruktiver Meldung.",
    html:
'<div class=\"kern-form-input\">\n' +
'  <label class=\"kern-label\" for=\"ti-1\">Termin um</label>\n' +
'  <div class=\"kern-hint\" id=\"ti-1-hinweis\">Format HH:MM, 24 Stunden, z. B. 09:30</div>\n' +
'  <input class=\"kern-form-input__input kern-form-input__input--width-4\" id=\"ti-1\" type=\"text\" inputmode=\"numeric\" autocomplete=\"off\" aria-describedby=\"ti-1-hinweis\" data-kn-time-input>\n' +
'  <p class=\"kern-error\" id=\"ti-1-fehler\" hidden>\n' +
'    <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"></span>\n' +
'    <span class=\"kern-body\">Geben Sie die Uhrzeit als Stunden und Minuten ein, z. B. 09:30.</span>\n' +
'  </p>\n' +
'</div>'
  }],
  barriere: ["Format steht sichtbar im Hinweis, nicht nur als Platzhalter.",
           "Fehler mit KERNs Fehlerzustand: aria-invalid und Meldung über aria-describedby — die Meldung sagt, wie es richtig geht.",
           "Die Fehler-ID steht nur bei Fehler in aria-describedby (versteckte Meldungen würden sonst mit vorgelesen)."],
  tasten: [["Tab (Feld verlassen)", "vereinheitlicht (930 → 09:30) oder zeigt den Fehler", "Fehlermeldung über aria-describedby"]],
  klassen: [["data-kn-time-input", "am Feld; vereinheitlicht und prüft beim Verlassen"], ["Feld-ID + \"-fehler\"", "die kern-error-Meldung, die das Skript ein- und ausblendet"]]
},
{
  id: "datentabelle", name: "Datentabelle erweitert", gruppe: "Daten",
  zweck: "Erweitert KERNs Tabelle für die Sachbearbeitung: Werkzeugleiste (Suche, Filter, Spalten), Stapelaktionen für gewählte Zeilen und aufklappbare Zeilen.",
  wann: ["Arbeitsvorrat, Posteingang, Trefferlisten — viele Vorgänge, die gefiltert und gemeinsam bearbeitet werden.",
           "Aufklappen, wenn Einzelheiten nur manchmal gebraucht werden und eine eigene Seite zu viel wäre."],
  nicht: ["Für kurze, feste Übersichten genügt kern-table allein.",
           "Nicht aufklappen, wenn die Einzelheiten fast immer gebraucht werden — dann gehören sie in die Zeile oder auf eine Detailseite.",
           "Keine Stapelaktion ohne Rückfrage, wenn sie nicht rückgängig zu machen ist (kern-dialog, kn-dialog--danger)."],
  bsp: [
  {
    titel: "Werkzeugleiste, Stapelaktionen und Spaltenwahl",
    hinweis: "Ein Häkchen setzen: die Stapelaktionen ersetzen die Werkzeuge, die Zahl wird angesagt. „Auswahl aufheben“ gibt den Fokus an „Alle auswählen“ zurück. „Spalten“ blendet Spalten aus.",
    html:
'<div class=\"kn-table-toolbar\">\n' +
'  <div class=\"kn-table-toolbar__tools\">\n' +
'    <search class=\"kn-table-toolbar__search\">\n' +
'      <label class=\"kern-sr-only\" for=\"dt-q\">Anträge durchsuchen</label>\n' +
'      <div class=\"kern-input-group\">\n' +
'        <input class=\"kern-form-input__input\" id=\"dt-q\" type=\"search\">\n' +
'        <button class=\"kern-btn kern-btn--secondary\" type=\"button\">\n' +
'          <span class=\"kern-icon kern-icon--search\" aria-hidden=\"true\"></span>\n' +
'          <span class=\"kern-label kern-sr-only\">Suchen</span>\n' +
'        </button>\n' +
'      </div>\n' +
'    </search>\n' +
'    <button class=\"kn-filter-tag\" type=\"button\" aria-pressed=\"false\">Fristnah</button>\n' +
'    <div class=\"kn-popover kn-popover--end\">\n' +
'      <button class=\"kern-btn kern-btn--secondary\" type=\"button\" data-kn-popover aria-expanded=\"false\" aria-controls=\"dt-sp\"><span class=\"kern-label\">Spalten</span></button>\n' +
'      <div class=\"kn-popover__panel\" id=\"dt-sp\" hidden tabindex=\"-1\">\n' +
'        <fieldset class=\"kn-table-columns\" data-kn-columns-for=\"dt-1\">\n' +
'          <legend class=\"kern-label\">Spalten anzeigen</legend>\n' +
'          <div class=\"kern-form-check\"><input class=\"kern-form-check__checkbox\" id=\"dt-c3\" type=\"checkbox\" data-kn-column=\"3\" checked><label class=\"kern-label\" for=\"dt-c3\">Art</label></div>\n' +
'          <div class=\"kern-form-check\"><input class=\"kern-form-check__checkbox\" id=\"dt-c4\" type=\"checkbox\" data-kn-column=\"4\" checked><label class=\"kern-label\" for=\"dt-c4\">Antragsteller</label></div>\n' +
'          <div class=\"kern-form-check\"><input class=\"kern-form-check__checkbox\" id=\"dt-c5\" type=\"checkbox\" data-kn-column=\"5\" checked><label class=\"kern-label\" for=\"dt-c5\">Frist</label></div>\n' +
'        </fieldset>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'  <div class=\"kn-table-batch\" data-kn-table-batch=\"dt-1\">\n' +
'    <span class=\"kn-table-batch__count\">0 ausgewählt</span>\n' +
'    <button class=\"kern-btn kern-btn--secondary kern-btn--small\" type=\"button\"><span class=\"kern-label\">Zuweisen</span></button>\n' +
'    <button class=\"kern-btn kern-btn--secondary kern-btn--small\" type=\"button\"><span class=\"kern-label\">Frist verlängern</span></button>\n' +
'    <button class=\"kern-btn kern-btn--tertiary kern-btn--small kn-table-batch__clear\" type=\"button\" data-kn-table-batch-clear><span class=\"kern-label\">Auswahl aufheben</span></button>\n' +
'  </div>\n' +
'</div>\n' +
'<div class=\"kern-table-responsive kn-table-frame\">\n' +
'  <table class=\"kern-table kn-table--selectable\" id=\"dt-1\" data-kn-selectable data-kn-sortable>\n' +
'    <caption class=\"kern-sr-only\">Anträge, auswählbar</caption>\n' +
'    <thead class=\"kern-table__head\"><tr class=\"kern-table__row\">\n' +
'      <th class=\"kern-table__header kn-table-select-col\" scope=\"col\"><input type=\"checkbox\" data-kn-select-all aria-label=\"Alle auswählen\"></th>\n' +
'      <th class=\"kern-table__header kn-table-sort\" scope=\"col\" aria-sort=\"none\"><button class=\"kn-table-sort__button\" type=\"button\">Aktenzeichen</button></th>\n' +
'      <th class=\"kern-table__header\" scope=\"col\">Art</th>\n' +
'      <th class=\"kern-table__header\" scope=\"col\">Antragsteller</th>\n' +
'      <th class=\"kern-table__header kn-table-sort\" scope=\"col\" aria-sort=\"none\"><button class=\"kn-table-sort__button\" type=\"button\">Frist</button></th>\n' +
'    </tr></thead>\n' +
'    <tbody class=\"kern-table__body\">\n' +
'    <tr class=\"kern-table__row\" aria-selected=\"false\"><td class=\"kern-table__cell kn-table-select-col\"><input type=\"checkbox\" data-kn-row-select aria-label=\"2026-BAF-10455 auswählen\"></td>\n' +
'      <td class=\"kern-table__cell\">2026-BAF-10455</td><td class=\"kern-table__cell\">Freistellung</td><td class=\"kern-table__cell\">T. Okonkwo</td><td class=\"kern-table__cell\">17.03.2026</td></tr>\n' +
'    <tr class=\"kern-table__row\" aria-selected=\"false\"><td class=\"kern-table__cell kn-table-select-col\"><input type=\"checkbox\" data-kn-row-select aria-label=\"2026-BAF-10482 auswählen\"></td>\n' +
'      <td class=\"kern-table__cell\">2026-BAF-10482</td><td class=\"kern-table__cell\">Freistellung</td><td class=\"kern-table__cell\">A. Berger</td><td class=\"kern-table__cell\">18.03.2026</td></tr>\n' +
'    <tr class=\"kern-table__row\" aria-selected=\"false\"><td class=\"kern-table__cell kn-table-select-col\"><input type=\"checkbox\" data-kn-row-select aria-label=\"2026-BAF-10390 auswählen\"></td>\n' +
'      <td class=\"kern-table__cell\">2026-BAF-10390</td><td class=\"kern-table__cell\">Stundung</td><td class=\"kern-table__cell\">M. Lindqvist</td><td class=\"kern-table__cell\">20.03.2026</td></tr>\n' +
'    <tr class=\"kern-table__row\" aria-selected=\"false\"><td class=\"kern-table__cell kn-table-select-col\"><input type=\"checkbox\" data-kn-row-select aria-label=\"2026-BAF-10501 auswählen\"></td>\n' +
'      <td class=\"kern-table__cell\">2026-BAF-10501</td><td class=\"kern-table__cell\">Widerspruch</td><td class=\"kern-table__cell\">K. Ferreira</td><td class=\"kern-table__cell\">24.03.2026</td></tr>\n' +
'    </tbody>\n' +
'  </table>\n' +
'</div>\n' +
'<p class=\"kern-body kern-body--small kern-body--muted\" data-kn-status-of=\"dt-1\"></p>'
  },
  {
    titel: "Aufklappbare Zeilen",
    hinweis: "Der Knopf vor der Zeile öffnet die Details darunter (Enter oder Leertaste). Sortieren nimmt die Details mit.",
    html:
'<div class=\"kern-table-responsive\">\n' +
'  <table class=\"kern-table\" id=\"dt-2\">\n' +
'    <caption class=\"kern-sr-only\">Bescheide mit aufklappbaren Details</caption>\n' +
'    <thead class=\"kern-table__head\"><tr class=\"kern-table__row\">\n' +
'      <th class=\"kern-table__header kn-table-expand__cell\" scope=\"col\"><span class=\"kern-sr-only\">Details</span></th>\n' +
'      <th class=\"kern-table__header\" scope=\"col\">Bescheid</th>\n' +
'      <th class=\"kern-table__header\" scope=\"col\">Datum</th>\n' +
'      <th class=\"kern-table__header\" scope=\"col\">Stand</th>\n' +
'    </tr></thead>\n' +
'    <tbody class=\"kern-table__body\">\n' +
'    <tr class=\"kern-table__row\">\n' +
'      <td class=\"kern-table__cell kn-table-expand__cell\"><button class=\"kern-btn kern-btn--tertiary kern-btn--small kn-table-expand__button\" type=\"button\" data-kn-table-expand aria-expanded=\"false\" aria-controls=\"dt-2-d1\">\n' +
'        <span class=\"kern-icon kern-icon--chevron-right\" aria-hidden=\"true\"></span><span class=\"kern-label kern-sr-only\">Details zu Bescheid 2026-0142</span></button></td>\n' +
'      <td class=\"kern-table__cell\">2026-0142</td><td class=\"kern-table__cell\">14.10.2026</td><td class=\"kern-table__cell\"><span class=\"kern-badge kern-badge--success\"><span class=\"kern-label\">Zugestellt</span></span></td>\n' +
'    </tr>\n' +
'    <tr class=\"kern-table__row kn-table-expand__detail\" id=\"dt-2-d1\" hidden>\n' +
'      <td class=\"kern-table__cell\" colspan=\"4\"><p class=\"kern-body kern-body--small\">Freistellung nach § 18a BAföG, zugestellt per Post am 16.10.2026. Bearbeitet von A. Berger.</p></td>\n' +
'    </tr>\n' +
'    <tr class=\"kern-table__row\">\n' +
'      <td class=\"kern-table__cell kn-table-expand__cell\"><button class=\"kern-btn kern-btn--tertiary kern-btn--small kn-table-expand__button\" type=\"button\" data-kn-table-expand aria-expanded=\"false\" aria-controls=\"dt-2-d2\">\n' +
'        <span class=\"kern-icon kern-icon--chevron-right\" aria-hidden=\"true\"></span><span class=\"kern-label kern-sr-only\">Details zu Bescheid 2026-0157</span></button></td>\n' +
'      <td class=\"kern-table__cell\">2026-0157</td><td class=\"kern-table__cell\">15.10.2026</td><td class=\"kern-table__cell\"><span class=\"kern-badge kern-badge--warning\"><span class=\"kern-label\">Rückfrage</span></span></td>\n' +
'    </tr>\n' +
'    <tr class=\"kern-table__row kn-table-expand__detail\" id=\"dt-2-d2\" hidden>\n' +
'      <td class=\"kern-table__cell\" colspan=\"4\"><p class=\"kern-body kern-body--small\">Einkommensnachweis 09/2026 fehlt. Rückfrage gesendet am 15.10.2026, Frist 29.10.2026.</p></td>\n' +
'    </tr>\n' +
'    </tbody>\n' +
'  </table>\n' +
'</div>'
  }],
  barriere: ["Stapelaktionen und Werkzeuge liegen übereinander; das Unsichtbare ist per visibility auch nicht fokussierbar und wird nicht vorgelesen. Die Leiste behält ihre Höhe — die Tabelle springt beim Ankreuzen nicht.",
           "Die Zahl der gewählten Zeilen wird angesagt; beim ersten Ankreuzen einmal mit „Aktionen über der Tabelle“.",
           "„Auswahl aufheben“ setzt den Fokus auf „Alle auswählen“, damit er nicht mit der Leiste verschwindet.",
           "Aufklappen nach WAI-ARIA Authoring Practices (Disclosure): Knopf mit aria-expanded und aria-controls, Name nennt die Zeile („Details zu Bescheid …“).",
           "Spaltenwahl mit KERNs Ankreuzfeldern in einer Feldgruppe mit Legende."],
  tasten: [["Leertaste auf einem Kästchen", "wählt; Stapelaktionen ersetzen die Werkzeuge", "„n Zeilen ausgewählt. Aktionen über der Tabelle“ (einmal)"], ["Enter auf „Auswahl aufheben“", "hebt auf; Fokus auf „Alle auswählen“", "„Nichts ausgewählt“"], ["Enter auf „Spalten“", "öffnet die Spaltenwahl; Leertaste blendet eine Spalte aus / ein", ""], ["Enter, Leertaste am Aufklapp-Knopf", "zeigt / verbirgt die Details", "„erweitert“ / „reduziert“"], ["Enter auf einem Spaltenkopf", "sortiert", "„Sortiert nach …“"]],
  klassen: [["kn-popover--end", "Spalten-Popover am Leistenende: Feld zum Ende hin ausgerichtet"], ["kn-table-toolbar", "Leiste bündig über der Tabelle"], ["kn-table-toolbar__tools", "Suche, Filter, Spalten"], ["kn-table-toolbar__search", "das Suchfeld, wächst mit"],
            ["kn-table-batch", "Stapelaktionen; data-kn-table-batch=\"Tabellen-ID\""], ["kn-table-batch__count", "Zahl der gewählten Zeilen"], ["kn-table-batch__clear", "„Auswahl aufheben“; data-kn-table-batch-clear"],
            ["kn-table-columns", "Feldgruppe der Spaltenwahl; data-kn-columns-for=\"Tabellen-ID\", Felder data-kn-column=\"n\""],
            ["kn-table-expand__cell", "Spalte des Aufklapp-Knopfs"], ["kn-table-expand__button", "der Knopf; data-kn-table-expand, aria-controls"], ["kn-table-expand__detail", "die Detailzeile (hidden)"]]
},
{
  id: "seitenleiste", name: "Schmale Seitenleiste", gruppe: "Navigation",
  zweck: "Eine schmale, senkrechte Leiste für drei bis sieben Hauptbereiche einer Fachanwendung — Symbol mit Beschriftung darunter.",
  wann: ["Fachanwendungen mit wenigen, oft gewechselten Hauptbereichen, wenn die volle Seitennavigation zu viel Platz nimmt."],
  nicht: ["Mehr als sieben Bereiche oder Unterebenen — dafür kn-side-nav.",
           "Nicht ohne Beschriftung: ein Symbol allein ist für viele nicht eindeutig.",
           "Nicht auf schmalen Bildschirmen als einzige Navigation — dort kn-drawer."],
  bsp: [
  {
    titel: "Hauptbereiche",
    hinweis: "Tab geht von Bereich zu Bereich; der aktuelle trägt aria-current=page.",
    html:
'<nav class=\"kn-nav-rail\" aria-label=\"Bereiche\">\n' +
'  <ul class=\"kn-nav-rail__list\">\n' +
'    <li><a class=\"kn-nav-rail__item\" href=\"#\"><span class=\"kn-nav-rail__indicator\"><span class=\"kern-icon kern-icon--home\" aria-hidden=\"true\"></span></span><span class=\"kn-nav-rail__label\">Start</span></a></li>\n' +
'    <li><a class=\"kn-nav-rail__item\" href=\"#\" aria-current=\"page\"><span class=\"kn-nav-rail__indicator\"><span class=\"kern-icon kern-icon--draft\" aria-hidden=\"true\"></span></span><span class=\"kn-nav-rail__label\">Vorgänge</span></a></li>\n' +
'    <li><a class=\"kn-nav-rail__item\" href=\"#\"><span class=\"kn-nav-rail__indicator\"><span class=\"kern-icon kern-icon--checklist\" aria-hidden=\"true\"></span></span><span class=\"kn-nav-rail__label\">Aufgaben</span></a></li>\n' +
'    <li><a class=\"kn-nav-rail__item\" href=\"#\"><span class=\"kn-nav-rail__indicator\"><span class=\"kern-icon kern-icon--mail\" aria-hidden=\"true\"></span></span><span class=\"kn-nav-rail__label\">Postfach</span></a></li>\n' +
'    <li><a class=\"kn-nav-rail__item\" href=\"#\"><span class=\"kn-nav-rail__indicator\"><span class=\"kern-icon kern-icon--calendar-today\" aria-hidden=\"true\"></span></span><span class=\"kn-nav-rail__label\">Termine</span></a></li>\n' +
'  </ul>\n' +
'</nav>'
  }],
  barriere: ["Beschriftung immer sichtbar (M94) — der Name ist der sichtbare Text.",
           "nav mit eigenem Namen (aria-label), aktueller Bereich mit aria-current=page, nicht nur Farbe: Anzeige-Fläche und fette Schrift.",
           "Jeder Eintrag ist mindestens 80 breit und deutlich höher als 48 — Zielgröße erfüllt."],
  tasten: [["Tab", "von Bereich zu Bereich", ""], ["Enter", "öffnet den Bereich", "aktueller: „aktuelle Seite“"]],
  klassen: [["kn-nav-rail", "die Leiste (nav)"], ["kn-nav-rail__item", "ein Bereich (a)"], ["kn-nav-rail__indicator", "Fläche um das Symbol, zeigt Zustand"], ["kn-nav-rail__label", "die Beschriftung"]]
},
];
