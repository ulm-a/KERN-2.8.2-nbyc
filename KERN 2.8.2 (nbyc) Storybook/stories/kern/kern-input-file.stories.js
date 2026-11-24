/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Formular/Input File",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-input-file", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/form-inputs/file", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Ermöglicht das Hochladen einer oder mehrerer Dateien.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Enter, Leertaste | öffnet die Dateiauswahl (nativ) |  |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-form-input` | Baustein |\n| `kern-label` | Baustein |\n| `kern-hint` | Baustein |\n| `kern-form-input__input` | Bestandteil |\n| `kern-label__optional` | Bestandteil |\n| `kern-form-input--error` | Variante |\n| `kern-form-input__input--error` | Variante |\n| `kern-error` | Baustein |\n| `kern-icon` | Baustein |\n| `kern-icon--danger` | Variante |\n| `kern-icon--md` | Variante |\n| `kern-body` | Baustein |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Erlaubte Formate und Größe im Hinweis | Anwendung |\n| Hochladestatus programmatisch melden (4.1.3) | Anwendung |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-form-input` | Eingabefeld | Form Input |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/form-inputs/file>\n\n---\n\n### English — Input File\n\nAllows one or more files to be uploaded.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Enter, Space | opens the file picker (native) |  |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-form-input` | Baustein |\n| `kern-label` | Baustein |\n| `kern-hint` | Baustein |\n| `kern-form-input__input` | Bestandteil |\n| `kern-label__optional` | Bestandteil |\n| `kern-form-input--error` | Variante |\n| `kern-form-input__input--error` | Variante |\n| `kern-error` | Baustein |\n| `kern-icon` | Baustein |\n| `kern-icon--danger` | Variante |\n| `kern-icon--md` | Variante |\n| `kern-body` | Baustein |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Allowed formats and size in the hint |  |\n| Report upload status programmatically (4.1.3) | via KN.melde or KN.lade (M57, M61) |\n" } }
  }
};

const html01 = "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"input-file\">Datei hochladen</label>\n    <div class=\"kern-hint\" id=\"input-file-hint\">\n      Erlaubte Formate: JPG, PNG, PDF. Maximale Dateigröße ist 350 MB.\n    </div>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"input-file\"\n      name=\"inputFile\"\n      type=\"file\"\n      aria-describedby=\"input-file-hint\"\n    /></div\n>";
export const Beispiel01 = {
  name: "Default",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};

const html02 = "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"input-file4\">Datei hochladen</label>\n    <div class=\"kern-hint\" id=\"input-file-hint4\">\n      Erlaubte Formate: JPG, PNG, PDF. Maximale Dateigröße ist 350 MB.\n    </div>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"input-file4\"\n      name=\"inputFile\"\n      type=\"file\"\n      disabled\n      aria-describedby=\"input-file-hint4\"\n    /></div\n>";
export const Beispiel02 = {
  name: "Disabled",
  render: () => html02,
  parameters: { docs: { source: { code: html02 } } }
};

const html03 = "<div class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"input-file6\"\n      >Datei hochladen\n      <span class=\"kern-label__optional\">- Optional</span>\n    </label>\n    <div class=\"kern-hint\" id=\"input-file-hint6\">\n      Erlaubte Formate: JPG, PNG, PDF. Maximale Dateigröße ist 350 MB.\n    </div>\n    <input\n      class=\"kern-form-input__input\"\n      id=\"input-file6\"\n      name=\"inputFile\"\n      type=\"file\"\n      aria-describedby=\"input-file-hint6\"\n    /></div\n>";
export const Beispiel03 = {
  name: "Optional",
  render: () => html03,
  parameters: { docs: { source: { code: html03 } } }
};

const html04 = "<div class=\"kern-form-input kern-form-input--error\">\n    <label class=\"kern-label\" for=\"input-file5\">Datei hochladen</label>\n    <div class=\"kern-hint\" id=\"input-file-hint5\">\n      Erlaubte Formate: JPG, PNG, PDF. Maximale Dateigröße ist 350 MB.\n    </div>\n    <input\n      class=\"kern-form-input__input kern-form-input__input--error\"\n      id=\"input-file5\"\n      name=\"inputFile\"\n      type=\"file\"\n      aria-invalid=\"true\"\n      aria-describedby=\"input-file-hint5 input-file-error5\"\n    />\n    <p class=\"kern-error\" id=\"input-file-error5\">\n      <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"></span>\n      <span class=\"kern-body\"\n        >Die Datei ist zu groß. Bitte laden Sie eine Datei mit maximal 350 MB hoch.</span\n      >\n    </p>\n  </div>";
export const Beispiel04 = {
  name: "Fehlermeldung",
  render: () => html04,
  parameters: { docs: { source: { code: html04 } } }
};
