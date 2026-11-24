/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Formular/Input Select",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-input-select", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/form-inputs/select", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Bietet die Möglichkeit zur Auswahl einer Option aus einer ausklappbaren Liste von Optionen.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Pfeiltasten | wählen (nativ) |  |\n| Alt+Pfeil runter | öffnet die Liste (nativ, je System) |  |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-form-input` | Baustein |\n| `kern-label` | Baustein |\n| `kern-form-input__select-wrapper` | Bestandteil |\n| `kern-form-input__select` | Bestandteil |\n| `kern-label__optional` | Bestandteil |\n| `kern-form-input--error` | Variante |\n| `kern-hint` | Baustein |\n| `kern-form-input__select--error` | Variante |\n| `kern-error` | Baustein |\n| `kern-icon` | Baustein |\n| `kern-icon--danger` | Variante |\n| `kern-icon--md` | Variante |\n| `kern-body` | Baustein |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| 5 bis 15 Optionen, sonst andere Form | Anwendung |\n| Fehlerzusammenfassung als Statusmeldung (4.1.3) | kern-neu.js |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-form-input` | Eingabefeld | Form Input |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/form-inputs/select>\n\n---\n\n### English — Input Select\n\nOffers the choice of one option from a drop-down list of options.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Arrow keys | choose (native) |  |\n| Alt+Down arrow | opens the list (native, depends on the system) |  |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-form-input` | Baustein |\n| `kern-label` | Baustein |\n| `kern-form-input__select-wrapper` | Bestandteil |\n| `kern-form-input__select` | Bestandteil |\n| `kern-label__optional` | Bestandteil |\n| `kern-form-input--error` | Variante |\n| `kern-hint` | Baustein |\n| `kern-form-input__select--error` | Variante |\n| `kern-error` | Baustein |\n| `kern-icon` | Baustein |\n| `kern-icon--danger` | Variante |\n| `kern-icon--md` | Variante |\n| `kern-body` | Baustein |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| 5 to 15 options, otherwise another form |  |\n| Error summary as a status message (4.1.3) | data-kn-validate, groups with data-kn-required (M58) |\n" } }
  }
};

const html01 = "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"select\">Titel</label>\n    <div class=\"kern-form-input__select-wrapper\">\n      <select class=\"kern-form-input__select\" id=\"select\">\n        <option>Bitte auswählen</option>\n        <option>Dr.</option>\n        <option>Prof.</option>\n        <option>Dipl.-Ing.</option>\n        <option>M.Sc.</option>\n      </select>\n    </div>\n  </div>";
export const Beispiel01 = {
  name: "Default",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};

const html02 = "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"select2\">Titel</label>\n    <div class=\"kern-form-input__select-wrapper\">\n      <select class=\"kern-form-input__select\" id=\"select2\" disabled>\n        <option>Bitte auswählen</option>\n        <option>Dr.</option>\n        <option>Prof.</option>\n        <option>Dipl.-Ing.</option>\n        <option>M.Sc.</option>\n      </select>\n    </div>\n  </div>";
export const Beispiel02 = {
  name: "Disabled",
  render: () => html02,
  parameters: { docs: { source: { code: html02 } } }
};

const html03 = "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"select3\"\n      >Titel <span class=\"kern-label__optional\">- Optional</span></label\n    >\n    <div class=\"kern-form-input__select-wrapper\">\n      <select class=\"kern-form-input__select\" id=\"select3\">\n        <option>Bitte auswählen</option>\n        <option>Dr.</option>\n        <option>Prof.</option>\n        <option>Dipl.-Ing.</option>\n        <option>M.Sc.</option>\n      </select>\n    </div>\n  </div>";
export const Beispiel03 = {
  name: "Optional",
  render: () => html03,
  parameters: { docs: { source: { code: html03 } } }
};

const html04 = "<div class=\"kern-form-input kern-form-input--error\">\n    <label class=\"kern-label\" for=\"select4\">Titel</label>\n    <div class=\"kern-hint\" id=\"select-hint\">\n      Ein Hinweis gibt Hilfestellung zum Format oder eine Begründung, warum diese Information\n      benötigt wird.\n    </div>\n    <div class=\"kern-form-input__select-wrapper\">\n      <select\n        class=\"kern-form-input__select kern-form-input__select--error\"\n        id=\"select4\"\n        aria-invalid=\"true\"\n        aria-describedby=\"select-hint kern-input-error\"\n      >\n        <option>Bitte auswählen</option>\n        <option>Dr.</option>\n        <option>Prof.</option>\n        <option>Dipl.-Ing.</option>\n        <option>M.Sc.</option>\n      </select>\n    </div>\n    <p class=\"kern-error\" id=\"kern-input-error\">\n      <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"></span>\n      <span class=\"kern-body\"\n        >Eine konstruktive Fehlermeldung vermittelt, was Nutzende tun können, um das Problem zu\n        lösen.</span\n      >\n    </p>\n  </div>";
export const Beispiel04 = {
  name: "Hinweistext und Fehlermeldung",
  render: () => html04,
  parameters: { docs: { source: { code: html04 } } }
};
