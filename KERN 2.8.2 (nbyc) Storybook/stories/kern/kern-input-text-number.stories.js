/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Formular/Input Number",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-input-text-number", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/form-inputs/number", "ids_in_mehreren_beispielen": ["plz"]},
    docs: { description: { component: "Unterstützt Nutzende bei der Eingabe einer Zahl.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-form-input` | Baustein |\n| `kern-label` | Baustein |\n| `kern-form-input__input` | Bestandteil |\n| `kern-label__optional` | Bestandteil |\n| `kern-form-input--error` | Variante |\n| `kern-hint` | Baustein |\n| `kern-form-input__input--error` | Variante |\n| `kern-error` | Baustein |\n| `kern-icon` | Baustein |\n| `kern-icon--danger` | Variante |\n| `kern-icon--md` | Variante |\n| `kern-body` | Baustein |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| inputmode=\"numeric\" | KERN |\n| Wertebereich per Attribut | Anwendung |\n| Beschriftung sichtbar und eindeutig (3.3.2) | KERN |\n| Fehler klar benannt, mit Lösung (3.3.1, 3.3.3) | Anwendung |\n| Fehlerzusammenfassung als Statusmeldung (4.1.3) | kern-neu.js |\n| Pflicht über aria-required, optional mit \"- Optional\" | Anwendung |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-form-input` | Eingabefeld | Form Input |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/form-inputs/number>\n\n---\n\n### English — Input Number\n\nHelps users enter a number.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-form-input` | Baustein |\n| `kern-label` | Baustein |\n| `kern-form-input__input` | Bestandteil |\n| `kern-label__optional` | Bestandteil |\n| `kern-form-input--error` | Variante |\n| `kern-hint` | Baustein |\n| `kern-form-input__input--error` | Variante |\n| `kern-error` | Baustein |\n| `kern-icon` | Baustein |\n| `kern-icon--danger` | Variante |\n| `kern-icon--md` | Variante |\n| `kern-body` | Baustein |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| inputmode=\"numeric\" | in the example |\n| Value range via attributes |  |\n| Label visible and unambiguous (3.3.2) | kern-label with for/id in the example |\n| Error clearly named, with a solution (3.3.1, 3.3.3) | Text of the error message |\n| Error summary as a status message (4.1.3) | form\\[data-kn-validate\\]: list with role=alert and focus, links into the field (M58) |\n| Required via aria-required, optional with \"- Optional\" | check 16 reports native required |\n" }, story: { inline: false, iframeHeight: 420 } }
  }
};

const html01 = "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"plz\">Postleitzahl</label>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"plz\"\n      name=\"plz\"\n      type=\"text\"\n      inputmode=\"numeric\"\n    /></div\n>";
export const Beispiel01 = {
  name: "Default",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};

const html02 = "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"plz3\">Postleitzahl</label>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"plz3\"\n      name=\"plz3\"\n      type=\"text\"\n      inputmode=\"numeric\"\n      value=\"20537\"\n      readonly\n    /></div\n>";
export const Beispiel02 = {
  name: "Readonly",
  render: () => html02,
  parameters: { docs: { source: { code: html02 } } }
};

const html03 = "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"plz4\">Postleitzahl</label>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"plz4\"\n      name=\"plz4\"\n      type=\"text\"\n      inputmode=\"numeric\"\n      value=\"20537\"\n      disabled\n    /></div\n>";
export const Beispiel03 = {
  name: "Disabled",
  render: () => html03,
  parameters: { docs: { source: { code: html03 } } }
};

const html04 = "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"plz\"\n      >Postleitzahl <span class=\"kern-label__optional\">- Optional</span></label\n    >\n    <input\n      class=\"kern-form-input__input\"\n      id=\"plz\"\n      name=\"plz\"\n      type=\"text\"\n      inputmode=\"numeric\"\n    /></div\n>";
export const Beispiel04 = {
  name: "Optional",
  render: () => html04,
  parameters: { docs: { source: { code: html04 } } }
};

const html05 = "<div class=\"kern-form-input kern-form-input--error\">\n    <label class=\"kern-label\" for=\"plz6\">Postleitzahl</label>\n    <div class=\"kern-hint\" id=\"plz-hint\">\n      Ein Hinweis gibt Hilfestellung zum Format oder eine Begründung, warum diese Information\n      benötigt wird.\n    </div>\n    <input\n      class=\"kern-form-input__input kern-form-input__input--error\"\n      id=\"plz6\"\n      name=\"plz6\"\n      type=\"text\"\n      inputmode=\"numeric\"\n      aria-invalid=\"true\"\n      aria-describedby=\"plz-hint kern-input-error\"\n    />\n    <p class=\"kern-error\" id=\"kern-input-error\">\n      <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"></span>\n      <span class=\"kern-body\"\n        >Eine konstruktive Fehlermeldung vermittelt, was Nutzende tun können, um das Problem zu\n        lösen.</span\n      >\n    </p>\n  </div>";
export const Beispiel05 = {
  name: "Hinweistext und Fehlermeldung",
  render: () => html05,
  parameters: { docs: { source: { code: html05 } } }
};
