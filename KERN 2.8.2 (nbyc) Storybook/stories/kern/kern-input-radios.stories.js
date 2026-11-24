/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Formular/Input Radios",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-input-radios", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/form-inputs/radios", "ids_in_mehreren_beispielen": ["ausland", "hamburg"]},
    docs: { description: { component: "Dienen der Auswahl nur einer Option aus sich gegenseitig ausschließenden Optionen.\n\n**Wann nehmen**\n\n- Für genau eine Wahl aus wenigen, sichtbaren Möglichkeiten. KERN bevorzugt Auswahlknöpfe vor der Auswahlliste.\n\n**Wann nicht**\n\n- Vorauswahl nur bei Einstellungen (KERN).\n\n**Barrierefreiheit**\n\n- Gruppen immer in &lt;fieldset&gt; mit &lt;legend&gt;.\n- Pfeiltasten wechseln die Wahl innerhalb der Gruppe; Tab verlässt sie.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Pfeiltasten | wählen in der Gruppe (nativ) |  |\n| Tab | verlässt die Gruppe |  |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-fieldset` | Baustein |\n| `kern-label` | Baustein |\n| `kern-fieldset__body` | Bestandteil |\n| `kern-form-check` | Baustein |\n| `kern-form-check__radio` | Bestandteil |\n| `kern-label__optional` | Bestandteil |\n| `kern-fieldset--error` | Variante |\n| `kern-hint` | Baustein |\n| `kern-form-check__radio--error` | Variante |\n| `kern-error` | Baustein |\n| `kern-icon` | Baustein |\n| `kern-icon--danger` | Variante |\n| `kern-icon--md` | Variante |\n| `kern-body` | Baustein |\n| `kern-fieldset__body--horizontal` | Variante |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Gruppe in fieldset/legend | KERN |\n| Vorauswahl nur bei Einstellungen | Anwendung |\n| Fehlerzusammenfassung als Statusmeldung (4.1.3) | kern-neu.js |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-form-check` | Ankreuzfeld und Auswahlknopf | Checkbox and Radio |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/form-inputs/radios>\n\n---\n\n### English — Input Radios\n\nUsed to select exactly one option from mutually exclusive options.\n\n**When to use**\n\n- For exactly one choice from a few visible options. KERN prefers radio buttons to the select list.\n\n**When not to use**\n\n- Preselection only for settings (KERN).\n\n**Accessibility**\n\n- Groups always in a &lt;fieldset&gt; with &lt;legend&gt;.\n- Arrow keys change the choice within the group; Tab leaves it.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Arrow keys | choose within the group (native) |  |\n| Tab | leaves the group |  |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-fieldset` | Baustein |\n| `kern-label` | Baustein |\n| `kern-fieldset__body` | Bestandteil |\n| `kern-form-check` | Baustein |\n| `kern-form-check__radio` | Bestandteil |\n| `kern-label__optional` | Bestandteil |\n| `kern-fieldset--error` | Variante |\n| `kern-hint` | Baustein |\n| `kern-form-check__radio--error` | Variante |\n| `kern-error` | Baustein |\n| `kern-icon` | Baustein |\n| `kern-icon--danger` | Variante |\n| `kern-icon--md` | Variante |\n| `kern-body` | Baustein |\n| `kern-fieldset__body--horizontal` | Variante |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Group in fieldset/legend |  |\n| Preselection only for settings |  |\n| Error summary as a status message (4.1.3) | data-kn-validate, groups with data-kn-required (M58) |\n" }, story: { inline: false, iframeHeight: 420 } }
  }
};

const html01 = "<fieldset class=\"kern-fieldset\">\n    <legend class=\"kern-label\">Wo sind Sie aktuell gemeldet?</legend>\n    <div class=\"kern-fieldset__body\">\n      <div class=\"kern-form-check\">\n        <input class=\"kern-form-check__radio\" id=\"hamburg\" name=\"meldeadresse\" type=\"radio\" />\n        <label class=\"kern-label\" for=\"hamburg\">in Hamburg</label>\n      </div>\n      <div class=\"kern-form-check\">\n        <input class=\"kern-form-check__radio\" id=\"ausland\" name=\"meldeadresse\" type=\"radio\" />\n        <label class=\"kern-label\" for=\"ausland\">im Ausland</label>\n      </div>\n    </div>\n  </fieldset>";
export const Beispiel01 = {
  name: "Default",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};

const html02 = "<fieldset class=\"kern-fieldset\">\n    <legend class=\"kern-label\">\n      Wo sind Sie aktuell gemeldet?\n      <span class=\"kern-label__optional\">- Optional</span>\n    </legend>\n    <div class=\"kern-fieldset__body\">\n      <div class=\"kern-form-check\">\n        <input class=\"kern-form-check__radio\" id=\"hamburg\" name=\"meldeadresse\" type=\"radio\" />\n        <label class=\"kern-label\" for=\"hamburg\">in Hamburg</label>\n      </div>\n      <div class=\"kern-form-check\">\n        <input class=\"kern-form-check__radio\" id=\"ausland\" name=\"meldeadresse\" type=\"radio\" />\n        <label class=\"kern-label\" for=\"ausland\">im Ausland</label>\n      </div>\n    </div>\n  </fieldset>";
export const Beispiel02 = {
  name: "Optional",
  render: () => html02,
  parameters: { docs: { source: { code: html02 } } }
};

const html03 = "<fieldset\n    class=\"kern-fieldset kern-fieldset--error\"\n    aria-describedby=\"hint-text kern-input-error\"\n  >\n    <legend class=\"kern-label\">Wo sind Sie aktuell gemeldet?</legend>\n    <div class=\"kern-hint\" id=\"hint-text\">\n      Ein Hinweis gibt Hilfestellung zum Format oder eine Begründung, warum diese Information\n      benötigt wird.\n    </div>\n    <div class=\"kern-fieldset__body\">\n      <div class=\"kern-form-check\">\n        <input\n          class=\"kern-form-check__radio kern-form-check__radio--error\"\n          id=\"hamburg\"\n          name=\"meldeadresse\"\n          type=\"radio\"\n          aria-invalid=\"true\"\n        />\n        <label class=\"kern-label\" for=\"hamburg\">in Hamburg</label>\n      </div>\n      <div class=\"kern-form-check\">\n        <input\n          class=\"kern-form-check__radio kern-form-check__radio--error\"\n          id=\"ausland\"\n          name=\"meldeadresse\"\n          type=\"radio\"\n          aria-invalid=\"true\"\n        />\n        <label class=\"kern-label\" for=\"ausland\">im Ausland</label>\n      </div>\n    </div>\n    <p class=\"kern-error\" id=\"kern-input-error\">\n      <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"></span>\n      <span class=\"kern-body\"\n        >Eine konstruktive Fehlermeldung vermittelt, was Nutzende tun können, um das Problem zu\n        lösen.</span\n      >\n    </p>\n  </fieldset>";
export const Beispiel03 = {
  name: "Hinweistext und Fehlermeldung",
  render: () => html03,
  parameters: { docs: { source: { code: html03 } } }
};

const html04 = "<fieldset class=\"kern-fieldset\">\n    <legend class=\"kern-label\">Wo sind Sie aktuell gemeldet?</legend>\n    <div class=\"kern-fieldset__body kern-fieldset__body--horizontal\">\n      <div class=\"kern-form-check\">\n        <input class=\"kern-form-check__radio\" id=\"hamburg\" name=\"meldeadresse\" type=\"radio\" />\n        <label class=\"kern-label\" for=\"hamburg\">in Hamburg</label>\n      </div>\n      <div class=\"kern-form-check\">\n        <input class=\"kern-form-check__radio\" id=\"ausland\" name=\"meldeadresse\" type=\"radio\" />\n        <label class=\"kern-label\" for=\"ausland\">im Ausland</label>\n      </div>\n    </div>\n  </fieldset>";
export const Beispiel04 = {
  name: "Horizontale Ausrichtung",
  render: () => html04,
  parameters: { docs: { source: { code: html04 } } }
};
