/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Text/Text Heading",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-text-heading", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/text/heading", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Ist eine Überschrift für Seiten und Abschnitte.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-heading-display` | Baustein |\n| `kern-heading-x-large` | Baustein |\n| `kern-heading-large` | Baustein |\n| `kern-heading-medium` | Baustein |\n| `kern-heading-small` | Baustein |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Immer mit h1–h6, Ebenen ohne Sprung | Anwendung |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-heading` | Überschrift | Heading |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/text/heading>\n\n---\n\n### English — Text Heading\n\nA heading for pages and sections.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-heading-display` | Baustein |\n| `kern-heading-x-large` | Baustein |\n| `kern-heading-large` | Baustein |\n| `kern-heading-medium` | Baustein |\n| `kern-heading-small` | Baustein |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Always with h1–h6, levels without gaps | KERN: text roles |\n" } }
  }
};

const html01 = "<h1 class=\"kern-heading-display\">Heading-display</h1>\n  <h2 class=\"kern-heading-x-large\">Heading-x-large</h2>\n  <h3 class=\"kern-heading-large\">Heading-large</h3>\n  <h4 class=\"kern-heading-medium\">Heading-medium</h4>\n  <h5 class=\"kern-heading-small\">Heading-small</h5>";
export const Beispiel01 = {
  name: "Varianten",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
