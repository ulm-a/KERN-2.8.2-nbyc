/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Navigation/Seitenweiser",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "seitenweiser", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Blättert durch lange Ergebnislisten.\n\n**Wann nehmen**\n\n- Ab etwa fünfzig Einträgen.\n\n**Wann nicht**\n\n- Wenn man vergleichen muss — dann besser nachladen als blättern.\n\n**Barrierefreiheit**\n\n- aria-current=\"page\" an der aktuellen Seite.\n- Die Standanzeige ist keine Zierde — sie sagt, wie viel noch kommt.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tab | von Seite zu Seite |  |\n| Enter | öffnet die Seite | aktuelle: „aktuelle Seite“ |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-pagination` | Leiste |\n| `kn-pagination__button` | eine Seite |\n| `kn-pagination__status` | Textangabe |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-pagination` | Seitenweiser | Pagination |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Pagination\n\nPages through long result lists.\n\n**When to use**\n\n- From about fifty entries.\n\n**When not to use**\n\n- When things must be compared — loading more is better than paging then.\n\n**Accessibility**\n\n- aria-current=\"page\" on the current page.\n- The position indicator is not decoration — it says how much is still to come.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Tab | from page to page |  |\n| Enter | opens the page | current one: “current page” |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-pagination` | Bar |\n| `kn-pagination__button` | a page |\n| `kn-pagination__status` | Text indication |\n" } }
  }
};

const html01 = "<nav class=\"kn-pagination\" aria-label=\"Seiten\">\n  <button class=\"kn-pagination__button\" aria-disabled=\"true\">Zurück</button>\n  <a class=\"kn-pagination__button\" href=\"#seitenweiser\" aria-current=\"page\">1</a>\n  <a class=\"kn-pagination__button\" href=\"#seitenweiser\">2</a>\n  <a class=\"kn-pagination__button\" href=\"#seitenweiser\">3</a>\n  <span class=\"kn-pagination__gap\">…</span>\n  <a class=\"kn-pagination__button\" href=\"#seitenweiser\">27</a>\n  <button class=\"kn-pagination__button\">Weiter</button>\n  <span class=\"kn-pagination__status\">1 bis 20 von 534</span>\n</nav>";
export const Beispiel01 = {
  name: "Mit Standanzeige",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
