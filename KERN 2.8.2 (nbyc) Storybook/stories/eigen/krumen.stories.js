/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Navigation/Brotkrumen",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "krumen", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Zeigt, wo man ist und wie man zurückkommt.\n\n**Wann nehmen**\n\n- Sobald eine Anwendung mehr als zwei Ebenen tief wird.\n- Besonders bei Vorgängen: Arbeitsvorrat → Vorgang → Nachweis.\n\n**Wann nicht**\n\n- Nicht als Ersatz für den Zurück-Knopf des Browsers.\n- Nicht, wenn die Anwendung flach ist. Eine einzige Krume ist eine Verlegenheit.\n\n**Barrierefreiheit**\n\n- Eine &lt;ol&gt;, keine &lt;ul&gt; — die Reihenfolge trägt die Bedeutung.\n- Der letzte Punkt ist KEIN Verweis. Er trägt aria-current=\"page\".\n- Die Trennzeichen kommen aus dem CSS, nicht aus dem Text — sonst liest der Screenreader sie mit.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tab | von Verweis zu Verweis |  |\n| Enter | folgt dem Verweis | letzter: „aktuelle Seite“ |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-breadcrumb__list` | die Liste, als &lt;ol&gt; |\n| `aria-current` | wo man ist |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-breadcrumb` | Brotkrumen | Breadcrumb |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Breadcrumbs\n\nShows where you are and how to get back.\n\n**When to use**\n\n- As soon as an application is more than two levels deep.\n- Especially for cases: work queue → case → document.\n\n**When not to use**\n\n- Not as a replacement for the browser’s back button.\n- Not when the application is flat. A single crumb is an embarrassment.\n\n**Accessibility**\n\n- An &lt;ol&gt;, not a &lt;ul&gt; — the order carries the meaning.\n- The last item is NOT a link. It carries aria-current=\"page\".\n- The separators come from the CSS, not from the text — otherwise the screen reader reads them out.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Tab | from link to link |  |\n| Enter | follows the link | last one: “current page” |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-breadcrumb__list` | the list, as &lt;ol&gt; |\n| `aria-current` | where you are |\n" } }
  }
};

const html01 = "<nav aria-label=\"Sie sind hier\">\n  <ol class=\"kn-breadcrumb__list\">\n    <li><a class=\"kern-link\" href=\"#\">Arbeitsvorrat</a></li>\n    <li><a class=\"kern-link\" href=\"#\">Vorgang 2026-BAF-10482</a></li>\n    <li aria-current=\"page\">Nachweise</li>\n  </ol>\n</nav>";
export const Beispiel01 = {
  name: "Drei Ebenen",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
