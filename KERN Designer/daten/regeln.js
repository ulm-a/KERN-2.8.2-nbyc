/* KERN Designer — Prüfregeln (Regeldatei, Instruction Designer Abschnitt 7 und 10).
   Schwellen = Instruction Designer, Abschnitt 0 (BARRIEREFREIHEIT); eine Prüfung
   vergleicht beide (folgt mit Stufe 5). Paare: Vordergrund-Token auf Hintergrund-Token,
   geprüft je Modus (hell, dunkel) und Ebene. */
window.KD_REGELN = {
 "schwellen": {
  "text": 4.5,            "_text": "WCAG 2.2 · 1.4.3",
  "textGross": 3.0,       "_textGross": "WCAG 2.2 · 1.4.3 (große Schrift)",
  "nichtText": 3.0,       "_nichtText": "WCAG 2.2 · 1.4.11",
  "kernText": 7.0,        "_kernText": "KERN-Anspruch K30",
  "kernGross": 4.5,       "_kernGross": "KERN-Anspruch K30 (groß, Knopftext)",
  "ziel": 24,             "_ziel": "WCAG 2.2 · 2.5.8 (Zielgröße in CSS-Pixeln)"
 },
 /* art: text | textGross | knopf | nichtText — bestimmt die Schwellen:
    text      → rot unter text, gelb unter kernText
    textGross → rot unter textGross, gelb unter kernGross
    knopf     → rot unter text, gelb unter kernGross
    nichtText → rot unter nichtText (kein KERN-Zusatz) */
 "paare": [
  { "id": "text-grund",      "name": "Fließtext auf Seitenhintergrund",    "vorne": "--kern-color-layout-text-default-contextual", "hinten": "--kern-color-layout-background-default-contextual", "art": "text" },
  { "id": "leise-grund",     "name": "Gedämpfter Text auf Seitenhintergrund", "vorne": "--kern-color-layout-text-muted-contextual", "hinten": "--kern-color-layout-background-default-contextual", "art": "text" },
  { "id": "text-getoent",    "name": "Text auf getöntem Hintergrund",      "vorne": "--kern-color-layout-text-default", "hinten": "--kern-color-layout-background-hued", "art": "text" },
  { "id": "link-grund",      "name": "Link auf Seitenhintergrund",         "vorne": "--kern-color-action-default-contextual", "hinten": "--kern-color-layout-background-default-contextual", "art": "text" },
  { "id": "besucht-grund",   "name": "Besuchter Link",                     "vorne": "--kern-color-action-visited-contextual", "hinten": "--kern-color-layout-background-default-contextual", "art": "text" },
  { "id": "knopftext",       "name": "Text im Hauptknopf",                 "vorne": "--kern-color-action-on-default", "hinten": "--kern-color-action-default", "art": "knopf" },
  { "id": "knopf-flaeche",   "name": "Hauptknopf gegen Hintergrund",       "vorne": "--kern-color-action-default", "hinten": "--kern-color-layout-background-default", "art": "nichtText" },
  { "id": "fokus",           "name": "Fokusrahmen gegen Hintergrund",      "vorne": "--kern-color-action-focus-default", "hinten": "--kern-color-layout-background-default", "art": "nichtText" },
  { "id": "eingabe-rand",    "name": "Rand eines Eingabefelds",            "vorne": "--kern-color-form-input-border", "hinten": "--kern-color-form-input-background", "art": "nichtText" },
  { "id": "fehler-text",     "name": "Fehlertext am Feld",                 "vorne": "--kern-color-feedback-danger", "hinten": "--kern-color-layout-background-default", "art": "text" },
  { "id": "hinweis-info",    "name": "Text im Hinweis Information",        "vorne": "--kern-color-layout-text-default", "hinten": "--kern-color-feedback-info-background", "art": "text" },
  { "id": "hinweis-erfolg",  "name": "Text im Hinweis Erfolg",             "vorne": "--kern-color-layout-text-default", "hinten": "--kern-color-feedback-success-background", "art": "text" },
  { "id": "hinweis-warnung", "name": "Text im Hinweis Warnung",            "vorne": "--kern-color-layout-text-default", "hinten": "--kern-color-feedback-warning-background", "art": "text" },
  { "id": "hinweis-fehler",  "name": "Text im Hinweis Fehler",             "vorne": "--kern-color-layout-text-default", "hinten": "--kern-color-feedback-danger-background", "art": "text" },
  { "id": "text-ebene-1",    "name": "Text auf Ebene 1",                   "vorne": "--kern-color-layout-text-default-contextual", "hinten": "--kern-color-layout-background-default-contextual", "art": "text", "ebene": 1 },
  { "id": "text-ebene-2",    "name": "Text auf Ebene 2",                   "vorne": "--kern-color-layout-text-default-contextual", "hinten": "--kern-color-layout-background-default-contextual", "art": "text", "ebene": 2 },
  { "id": "link-ebene-1",    "name": "Link auf Ebene 1",                   "vorne": "--kern-color-action-default-contextual", "hinten": "--kern-color-layout-background-default-contextual", "art": "text", "ebene": 1 }
 ],
 "modi": ["hell", "dunkel"],
 /* KERN-Freigabe (kern-ux.de, Branding/Anwendung; Recherche Abschnitt 6):
    erste passende Regel gewinnt. muster = regulärer Ausdruck auf den Token-Namen. */
 "freigabe": [
  { "muster": "^--kern-color-(layout-background|decorative|brand)", "frei": true },
  { "muster": "^--kern-metric-border-(radius|width)", "frei": true },
  { "muster": "^--kern-shadow", "frei": true },
  { "muster": ".", "frei": false }
 ]
};
