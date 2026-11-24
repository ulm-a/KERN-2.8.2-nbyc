/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Formular/Fieldset",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-fieldset", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/fieldset", "ids_in_mehreren_beispielen": ["name", "vorname"]},
    docs: { description: { component: "Gruppiert zusammengehörige Formularfelder und kann eine Hierarchie aufbauen.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-fieldset` | Baustein |\n| `kern-label` | Baustein |\n| `kern-label--large` | Variante |\n| `kern-fieldset__body` | Bestandteil |\n| `kern-form-input` | Baustein |\n| `kern-form-input__input` | Bestandteil |\n| `kern-fieldset--error` | Variante |\n| `kern-hint` | Baustein |\n| `kern-form-input__input--error` | Variante |\n| `kern-error` | Baustein |\n| `kern-icon` | Baustein |\n| `kern-icon--danger` | Variante |\n| `kern-body` | Baustein |\n| `kern-fieldset__body--horizontal` | Variante |\n| `kern-form-check` | Baustein |\n| `kern-form-check__radio` | Bestandteil |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Aussagekräftige Legende | KERN |\n| Nicht verschachteln, nicht für ein einzelnes Feld | Anwendung |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-fieldset` | Feldgruppe | Fieldset |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/fieldset>\n\n---\n\n### English — Fieldset\n\nGroups related form fields and can build a hierarchy.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-fieldset` | Baustein |\n| `kern-label` | Baustein |\n| `kern-label--large` | Variante |\n| `kern-fieldset__body` | Bestandteil |\n| `kern-form-input` | Baustein |\n| `kern-form-input__input` | Bestandteil |\n| `kern-fieldset--error` | Variante |\n| `kern-hint` | Baustein |\n| `kern-form-input__input--error` | Variante |\n| `kern-error` | Baustein |\n| `kern-icon` | Baustein |\n| `kern-icon--danger` | Variante |\n| `kern-body` | Baustein |\n| `kern-fieldset__body--horizontal` | Variante |\n| `kern-form-check` | Baustein |\n| `kern-form-check__radio` | Bestandteil |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Meaningful legend | legend in the example |\n| Do not nest, not for a single field |  |\n" }, story: { inline: false, iframeHeight: 420 } }
  }
};

const html01 = "<fieldset class=\"kern-fieldset\">\n<legend class=\"kern-label kern-label--large\">\n  Ansprechpartner\n</legend>\n<div class=\"kern-fieldset__body\">\n  <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"vorname\">Vorname</label>\n    <input class=\"kern-form-input__input\" id=\"vorname\" name=\"vorname\" type=\"text\">\n  </div>\n  <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"name\">Familienname</label>\n    <input class=\"kern-form-input__input\" id=\"name\" name=\"name\" type=\"text\">\n  </div>\n<div>\n</fieldset>";
export const Beispiel01 = {
  name: "Gruppierte Formularfelder",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};

const html02 = "<fieldset class=\"kern-fieldset kern-fieldset--error\" aria-describedby=\"hint-text kern-error\">\n<legend class=\"kern-label kern-label--large\">\n  Ansprechpartner\n</legend>\n<div class=\"kern-hint\" id=\"hint-text\">Ein Hinweis gibt Hilfestellung zum Format oder eine Begründung, warum diese Information benötigt wird.</div>\n<div class=\"kern-fieldset__body\">\n  <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"vorname\">Vorname</label>\n    <input class=\"kern-form-input__input\" id=\"vorname\" name=\"vorname\" type=\"text\" aria-describedby=\"kern-error\">\n  </div>\n  <div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"name\">Familienname</label>\n    <input class=\"kern-form-input__input kern-form-input__input--error\" id=\"name\" name=\"name\" type=\"text\" aria-invalid=\"true\" aria-describedby=\"kern-error\">\n  </div>\n</div>\n<p class=\"kern-error\" id=\"kern-error\">\n  <span class=\"kern-icon kern-icon--danger\" aria-hidden=\"true\"></span>\n  <span class=\"kern-body\">Eine konstruktive Fehlermeldung vermittelt, was Nutzende tun können, um das Problem zu lösen.</span>\n</p>\n</fieldset>";
export const Beispiel02 = {
  name: "Hinweistext und Fehlermeldung",
  render: () => html02,
  parameters: { docs: { source: { code: html02 } } }
};

const html03 = "<fieldset class=\"kern-fieldset\">\n<legend class=\"kern-label\">\nWo sind Sie aktuell gemeldet?\n</legend>\n<div class=\"kern-fieldset__body kern-fieldset__body--horizontal\">\n<div class=\"kern-form-check\">\n  <input class=\"kern-form-check__radio\" id=\"hamburg\" name=\"meldeadresse\" type=\"radio\">\n  <label class=\"kern-label\" for=\"hamburg\">in Hamburg</label>\n</div>\n<div class=\"kern-form-check\">\n  <input class=\"kern-form-check__radio\" id=\"ausland\" name=\"meldeadresse\" type=\"radio\">\n  <label class=\"kern-label\" for=\"ausland\">im Ausland</label>\n</div>\n<div>\n</fieldset>";
export const Beispiel03 = {
  name: "Horizontale Ausrichtung",
  render: () => html03,
  parameters: { docs: { source: { code: html03 } } }
};
