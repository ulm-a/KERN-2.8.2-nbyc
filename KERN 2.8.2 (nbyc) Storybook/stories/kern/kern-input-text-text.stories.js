/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Formular/Input Text",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-input-text-text", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/form-inputs/text", "ids_in_mehreren_beispielen": ["text"]},
    docs: { description: { component: "Ermöglicht Nutzenden, Buchstaben, Zahlen und Sonderzeichen einzugeben.\n\n**Wann nehmen**\n\n- Für jede freie Eingabe.\n\n**Wann nicht**\n\n- Nie ohne Beschriftung. Ein Platzhaltertext ist keine Beschriftung: er verschwindet beim Tippen.\n\n**Barrierefreiheit**\n\n- &lt;label for&gt; ist Pflicht.\n- Hinweis und Fehler über aria-describedby verbinden — sonst liest der Screenreader sie nicht.\n- aria-invalid=\"true\" am fehlerhaften Feld.\n- Die Fehlerleiste links (kern-form-input--error) macht den Fehler auch ohne Farbwahrnehmung sichtbar.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-form-input` | Baustein |\n| `kern-label` | Baustein |\n| `kern-form-input__input` | Bestandteil |\n| `kern-label__optional` | Bestandteil |\n| `kern-form-input--error` | Variante |\n| `kern-hint` | Baustein |\n| `kern-form-input__input--error` | Variante |\n| `kern-error` | Baustein |\n| `kern-icon` | Baustein |\n| `kern-icon--danger` | Variante |\n| `kern-icon--md` | Variante |\n| `kern-body` | Baustein |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| autocomplete passend (1.3.5) | Anwendung |\n| Beschriftung sichtbar und eindeutig (3.3.2) | KERN |\n| Fehler klar benannt, mit Lösung (3.3.1, 3.3.3) | Anwendung |\n| Fehlerzusammenfassung als Statusmeldung (4.1.3) | kern-neu.js |\n| Pflicht über aria-required, optional mit \"- Optional\" | Anwendung |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-form-input` | Eingabefeld | Form Input |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/form-inputs/text>\n\n---\n\n### English — Input Text\n\nLets users enter letters, numbers and special characters.\n\n**When to use**\n\n- For any free input.\n\n**When not to use**\n\n- Never without a label. Placeholder text is not a label: it disappears when you type.\n\n**Accessibility**\n\n- &lt;label for&gt; is mandatory.\n- Connect hint and error via aria-describedby — otherwise the screen reader does not read them.\n- aria-invalid=\"true\" on the field with the error.\n- The error bar on the left (kern-form-input--error) makes the error visible without colour perception too.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-form-input` | Baustein |\n| `kern-label` | Baustein |\n| `kern-form-input__input` | Bestandteil |\n| `kern-label__optional` | Bestandteil |\n| `kern-form-input--error` | Variante |\n| `kern-hint` | Baustein |\n| `kern-form-input__input--error` | Variante |\n| `kern-error` | Baustein |\n| `kern-icon` | Baustein |\n| `kern-icon--danger` | Variante |\n| `kern-icon--md` | Variante |\n| `kern-body` | Baustein |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Suitable autocomplete (1.3.5) |  |\n| Label visible and unambiguous (3.3.2) | kern-label with for/id in the example |\n| Error clearly named, with a solution (3.3.1, 3.3.3) | Text of the error message |\n| Error summary as a status message (4.1.3) | form\\[data-kn-validate\\]: list with role=alert and focus, links into the field (M58) |\n| Required via aria-required, optional with \"- Optional\" | check 16 reports native required |\n" }, story: { inline: false, iframeHeight: 420 } }
  }
};

const html01 = "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"text\">Familienname</label>\n    <input class=\"kern-form-input__input\" id=\"text\" name=\"text\" type=\"text\" /></div\n>";
export const Beispiel01 = {
  name: "Default",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};

const html02 = "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"text3\">Familienname</label>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"text3\"\n      name=\"text3\"\n      type=\"text\"\n      value=\"Kim Musterperson\"\n      readonly\n    /></div\n>";
export const Beispiel02 = {
  name: "Readonly",
  render: () => html02,
  parameters: { docs: { source: { code: html02 } } }
};

const html03 = "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"text4\">Familienname</label>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"text4\"\n      name=\"text4\"\n      type=\"text\"\n      value=\"Kim Musterperson\"\n      disabled\n    /></div\n>";
export const Beispiel03 = {
  name: "Disabled",
  render: () => html03,
  parameters: { docs: { source: { code: html03 } } }
};

const html04 = "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"text\"\n      >Familienname <span class=\"kern-label__optional\">- Optional</span></label\n    >\n    <input class=\"kern-form-input__input\" id=\"text\" name=\"text\" type=\"text\" /></div\n>";
export const Beispiel04 = {
  name: "Optional",
  render: () => html04,
  parameters: { docs: { source: { code: html04 } } }
};

const html05 = "<div class=\"kern-form-input kern-form-input--error\">\n    <label class=\"kern-label\" for=\"text6\">Familienname</label>\n    <div class=\"kern-hint\" id=\"text-hint2\">\n      Ein Hinweis gibt Hilfestellung zum Format oder eine Begründung, warum diese Information\n      benötigt wird.\n    </div>\n    <input\n      class=\"kern-form-input__input kern-form-input__input--error\"\n      id=\"text6\"\n      name=\"text6\"\n      type=\"text\"\n      aria-invalid=\"true\"\n      aria-describedby=\"text-hint2 text-error\"\n    />\n    <p class=\"kern-error\" id=\"text-error\">\n      <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"></span>\n      <span class=\"kern-body\"\n        >Eine konstruktive Fehlermeldung vermittelt, was Nutzende tun können, um das Problem zu\n        lösen.</span\n      >\n    </p>\n  </div>";
export const Beispiel05 = {
  name: "Hinweistext und Fehlermeldung",
  render: () => html05,
  parameters: { docs: { source: { code: html05 } } }
};
