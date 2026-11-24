/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Daten/Bildnis",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "bildnis", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Ein rundes Namenskürzel für eine Person.\n\n**Wann nehmen**\n\n- In Listen, wo mehrere Bearbeitende vorkommen.\n- Im Kopf, für die angemeldete Person.\n\n**Wann nicht**\n\n- Als einziges Kennzeichen. Ein Kürzel ist mehrdeutig — der Name gehört daneben.\n- Für Sachen. Ein Vorgang ist keine Person.\n\n**Barrierefreiheit**\n\n- aria-hidden=\"true\", wenn der Name daneben steht — sonst hört man „A B, A. Berger“.\n- Das Bildnis setzt seine Textfarbe selbst. Ohne das erbt es die des Umfelds und wird im Kopf dunkel auf dunkel: 1,30 zu 1. Der Fehler stand bis zum 12.08.2026 im System.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-avatar` | 40 Pixel |\n| `kn-avatar--small` | 32 Pixel |\n| `kn-avatar--large` | 64 Pixel |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-avatar` | Bildnis | Avatar |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Avatar\n\nRound initials for a person.\n\n**When to use**\n\n- In lists where several caseworkers appear.\n- In the header, for the signed-in person.\n\n**When not to use**\n\n- As the only identifier. Initials are ambiguous — the name belongs next to them.\n- For things. A case is not a person.\n\n**Accessibility**\n\n- aria-hidden=\"true\" when the name is next to it — otherwise you hear “A B, A. Berger”.\n- The avatar sets its own text colour. Without it, it inherits the surrounding one and becomes dark on dark in the header: 1.30 to 1. The error was in the system until 12.08.2026.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-avatar` | 40 pixels |\n| `kn-avatar--small` | 32 pixels |\n| `kn-avatar--large` | 64 pixels |\n" } }
  }
};

const html01 = "<div style=\"display:flex;align-items:center;gap:1rem\">\n  <span class=\"kn-avatar kn-avatar--small\" aria-hidden=\"true\">AB</span>\n  <span class=\"kn-avatar\" aria-hidden=\"true\">TO</span>\n  <span class=\"kn-avatar kn-avatar--large\" aria-hidden=\"true\">ML</span>\n  <span class=\"kern-body\" style=\"margin:0\">A. Berger, T. Okonkwo, M. Lindqvist</span>\n</div>";
export const Beispiel01 = {
  name: "Drei Größen",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
