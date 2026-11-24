/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Formular/Search",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-search", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/search", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Ermöglicht es Nutzenden, Inhalte und Informationen mithilfe eines Suchbegriffs schnell zu finden.\n\n**Wann nehmen**\n\n- Überall, wo in einer Menge gesucht wird — Vorgänge, Nachweise, Personen.\n\n**Wann nicht**\n\n- Nicht für das Filtern einer kurzen, sichtbaren Liste. Dafür reichen Filtermarken (kn-filter-tag).\n- Der Platzhaltertext ersetzt keine Beschriftung.\n\n**Barrierefreiheit**\n\n- type=\"search\" — Hilfsmittel kündigen das Feld dann als Suche an.\n- KERN: Beschriftung sichtbar; nur die globale Suche im Seitenkopf darf sie verbergen (kern-sr-only).\n- Ein Knopf mit Lupe allein braucht einen Namen (kern-sr-only).\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Enter | sendet die Suche (nativ) |  |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-form-input` | Baustein |\n| `kern-label` | Baustein |\n| `kern-input-group` | Baustein |\n| `kern-form-input__input` | Bestandteil |\n| `kern-btn` | Baustein |\n| `kern-btn--primary` | Variante |\n| `kern-icon` | Baustein |\n| `kern-icon--search` | Variante |\n| `kern-sr-only` | Baustein |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Bereich als &lt;search&gt; mit Namen | KERN |\n| Suchbegriff bleibt nach dem Absenden stehen | Anwendung |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-input-group` | Suche | Search |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/search>\n\n---\n\n### English — Search\n\nLets users find content and information quickly with a search term.\n\n**When to use**\n\n- Wherever a set is searched — cases, documents, people.\n\n**When not to use**\n\n- Not for filtering a short, visible list. Filter tags (kn-filter-tag) are enough for that.\n- The placeholder text does not replace a label.\n\n**Accessibility**\n\n- type=\"search\" — assistive technology then announces the field as a search.\n- KERN: label visible; only the global search in the page header may hide it (kern-sr-only).\n- A button with only a magnifier needs a name (kern-sr-only).\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Enter | submits the search (native) |  |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-form-input` | Baustein |\n| `kern-label` | Baustein |\n| `kern-input-group` | Baustein |\n| `kern-form-input__input` | Bestandteil |\n| `kern-btn` | Baustein |\n| `kern-btn--primary` | Variante |\n| `kern-icon` | Baustein |\n| `kern-icon--search` | Variante |\n| `kern-sr-only` | Baustein |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Area as &lt;search&gt; with a name | search with aria-label in the example |\n| Search term stays after submitting |  |\n" } }
  }
};

const html01 = "<search class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"search-input-with-label\">Suche</label>\n    <div class=\"kern-input-group\">\n      <input\n        class=\"kern-form-input__input\"\n        id=\"search-input-with-label\"\n        name=\"search\"\n        type=\"search\"\n      />\n      <button class=\"kern-btn kern-btn--primary\">\n        <span class=\"kern-icon kern-icon--search\" aria-hidden=\"true\"></span>\n        <span class=\"kern-label\">Suchen</span>\n      </button>\n    </div>\n  </search>";
export const Beispiel01 = {
  name: "Search mit Label",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};

const html02 = "<search class=\"kern-form-input\">\n    <label class=\"kern-label\" for=\"search-input-icon-only\">Suche</label>\n    <div class=\"kern-input-group\">\n      <input\n        class=\"kern-form-input__input\"\n        id=\"search-input-icon-only\"\n        name=\"search\"\n        type=\"search\"\n      />\n      <button class=\"kern-btn kern-btn--primary\">\n        <span class=\"kern-icon kern-icon--search\" aria-hidden=\"true\"></span>\n        <span class=\"kern-label kern-sr-only\">Suchen</span>\n      </button>\n    </div>\n  </search>";
export const Beispiel02 = {
  name: "Search mit Label und Icon-Only Button",
  render: () => html02,
  parameters: { docs: { source: { code: html02 } } }
};

const html03 = "<search class=\"kern-input-group\">\n    <input\n      class=\"kern-form-input__input\"\n      id=\"search-input-without-label\"\n      name=\"search\"\n      type=\"search\"\n      aria-label=\"Suche\"\n    />\n    <button class=\"kern-btn kern-btn--primary\">\n      <span class=\"kern-icon kern-icon--search\" aria-hidden=\"true\"></span>\n      <span class=\"kern-label\">Suchen</span>\n    </button>\n  </search>";
export const Beispiel03 = {
  name: "Search ohne Label",
  render: () => html03,
  parameters: { docs: { source: { code: html03 } } }
};
