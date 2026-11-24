/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Formular/Input Checkboxes",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-input-checkboxes", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/form-inputs/checkboxes", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Dient der Auswahl einer oder mehrerer Optionen.\n\n**Wann nehmen**\n\n- Für Möglichkeiten, die alle sichtbar sein sollen — mehrere zugleich wählbar.\n\n**Wann nicht**\n\n- Für viele Möglichkeiten: KERN nimmt die Auswahlliste für 5 bis 15; darüber eine Combobox mit Suche (kn-combobox).\n\n**Barrierefreiheit**\n\n- Gruppen immer in &lt;fieldset&gt; mit &lt;legend&gt; — sonst fehlt der Zusammenhang.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Leertaste | schaltet (nativ) |  |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-form-check` | Baustein |\n| `kern-form-check__checkbox` | Bestandteil |\n| `kern-label` | Baustein |\n| `kern-fieldset` | Baustein |\n| `kern-fieldset__body` | Bestandteil |\n| `kern-label__optional` | Bestandteil |\n| `kern-fieldset--error` | Variante |\n| `kern-hint` | Baustein |\n| `kern-form-check__checkbox--error` | Variante |\n| `kern-error` | Baustein |\n| `kern-icon` | Baustein |\n| `kern-icon--danger` | Variante |\n| `kern-icon--md` | Variante |\n| `kern-body` | Baustein |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Gruppe in fieldset/legend | KERN |\n| Zustand nicht nur über Farbe | KERN |\n| Fehlerzusammenfassung als Statusmeldung (4.1.3) | kern-neu.js |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-form-check` | Ankreuzfeld und Auswahlknopf | Checkbox and Radio |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/form-inputs/checkboxes>\n\n---\n\n### English — Input Checkboxes\n\nUsed to select one or more options.\n\n**When to use**\n\n- For options that should all be visible — several can be chosen at once.\n\n**When not to use**\n\n- For many options: KERN uses the select list for 5 to 15; beyond that a combo box with search (kn-combobox).\n\n**Accessibility**\n\n- Groups always in a &lt;fieldset&gt; with &lt;legend&gt; — otherwise the context is missing.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Space | toggles (native) |  |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-form-check` | Baustein |\n| `kern-form-check__checkbox` | Bestandteil |\n| `kern-label` | Baustein |\n| `kern-fieldset` | Baustein |\n| `kern-fieldset__body` | Bestandteil |\n| `kern-label__optional` | Bestandteil |\n| `kern-fieldset--error` | Variante |\n| `kern-hint` | Baustein |\n| `kern-form-check__checkbox--error` | Variante |\n| `kern-error` | Baustein |\n| `kern-icon` | Baustein |\n| `kern-icon--danger` | Variante |\n| `kern-icon--md` | Variante |\n| `kern-body` | Baustein |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Group in fieldset/legend |  |\n| State not only through colour | tick |\n| Error summary as a status message (4.1.3) | data-kn-validate, groups with data-kn-required (M58) |\n" } }
  }
};

const html01 = "<div class=\"kern-form-check\">\n<input class=\"kern-form-check__checkbox\" id=\"dsgvo1\" name=\"dsgvo1\" type=\"checkbox\">\n<label class=\"kern-label\" for=\"dsgvo1\">Ich akzeptiere die Datenschutzerklärung.</label>\n</div>";
export const Beispiel01 = {
  name: "Einzeln",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};

const html02 = "<fieldset class=\"kern-fieldset\">\n<legend class=\"kern-label\">\n  Für welchen Zweck wollen Sie die Fläche nutzen?\n</legend>\n<div class=\"kern-fieldset__body\">\n  <div class=\"kern-form-check\">\n    <input class=\"kern-form-check__checkbox\" id=\"baumassnahme\" name=\"flaechennutzung\" type=\"checkbox\">\n    <label class=\"kern-label\" for=\"baumassnahme\">Baumaßnahme</label>\n  </div>\n  <div class=\"kern-form-check\">\n    <input class=\"kern-form-check__checkbox\" id=\"veranstaltungen\" name=\"flaechennutzung\" type=\"checkbox\">\n    <label class=\"kern-label\" for=\"veranstaltungen\">Veranstaltungen</label>\n  </div>\n  <div class=\"kern-form-check\">\n    <input class=\"kern-form-check__checkbox\" id=\"waren\" name=\"flaechennutzung\" type=\"checkbox\">\n    <label class=\"kern-label\" for=\"waren\">Anbieten von Waren und Leistungen</label>\n  </div>\n</div>\n</fieldset>";
export const Beispiel02 = {
  name: "Gruppe",
  render: () => html02,
  parameters: { docs: { source: { code: html02 } } }
};

const html03 = "<fieldset class=\"kern-fieldset\">\n <legend class=\"kern-label\">\n  Für welchen Zweck wollen Sie die Fläche nutzen?\n   <span class=\"kern-label__optional\">- Optional</span>\n</legend>\n<div class=\"kern-fieldset__body\">\n  <div class=\"kern-form-check\">\n    <input class=\"kern-form-check__checkbox\" id=\"baumassnahme2\" name=\"flaechennutzung2\" type=\"checkbox\">\n    <label class=\"kern-label\" for=\"baumassnahme2\">Baumaßnahme</label>\n  </div>\n  <div class=\"kern-form-check\">\n    <input class=\"kern-form-check__checkbox\" id=\"veranstaltungen2\" name=\"flaechennutzung2\" type=\"checkbox\">\n    <label class=\"kern-label\" for=\"veranstaltungen2\">Veranstaltungen</label>\n  </div>\n  <div class=\"kern-form-check\">\n    <input class=\"kern-form-check__checkbox\" id=\"waren2\" name=\"flaechennutzung2\" type=\"checkbox\">\n    <label class=\"kern-label\" for=\"waren2\">Anbieten von Waren und Leistungen</label>\n  </div>\n</div>\n</fieldset>";
export const Beispiel03 = {
  name: "Gruppe Optional",
  render: () => html03,
  parameters: { docs: { source: { code: html03 } } }
};

const html04 = "<fieldset class=\"kern-fieldset kern-fieldset--error\" aria-describedby=\"hint-text1 kern-input-error1\">\n<legend class=\"kern-label\">\n  Für welchen Zweck wollen Sie die Fläche nutzen?\n</legend>\n<div class=\"kern-hint\" id=\"hint-text1\">Ein Hinweis gibt Hilfestellung zum Format oder eine Begründung, warum diese Information benötigt wird.</div>\n<div class=\"kern-fieldset__body\">\n  <div class=\"kern-form-check\">\n    <input class=\"kern-form-check__checkbox kern-form-check__checkbox--error\" id=\"baumassnahme1\" name=\"flaechennutzung1\" type=\"checkbox\" aria-invalid=\"true\">\n    <label class=\"kern-label\" for=\"baumassnahme1\">Baumaßnahme</label>\n  </div>\n  <div class=\"kern-form-check\">\n    <input class=\"kern-form-check__checkbox kern-form-check__checkbox--error\" id=\"veranstaltungen1\" name=\"flaechennutzung1\" type=\"checkbox\" aria-invalid=\"true\">\n    <label class=\"kern-label\" for=\"veranstaltungen1\">Veranstaltungen</label>\n  </div>\n  <div class=\"kern-form-check\">\n    <input class=\"kern-form-check__checkbox kern-form-check__checkbox--error\" id=\"waren1\" name=\"flaechennutzung1\" type=\"checkbox\" aria-invalid=\"true\">\n    <label class=\"kern-label\" for=\"waren1\">Anbieten von Waren und Leistungen</label>\n  </div>\n  </div>\n</div>\n<p class=\"kern-error\" id=\"kern-input-error1\">\n  <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"></span>\n  <span class=\"kern-body\">Eine konstruktive Fehlermeldung vermittelt, was Nutzende tun können, um das Problem zu lösen.</span>\n</p>\n</fieldset>";
export const Beispiel04 = {
  name: "Gruppe mit Hinweistext und Fehlermeldung",
  render: () => html04,
  parameters: { docs: { source: { code: html04 } } }
};
