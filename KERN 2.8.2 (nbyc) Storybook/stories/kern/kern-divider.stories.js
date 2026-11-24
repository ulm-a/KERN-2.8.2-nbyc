/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Inhalt/Divider",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-divider", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/divider", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Unterteilt Inhaltsblöcke visuell in verschiedene Gruppen und kann eine Hierarchie aufbauen.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-divider` | Baustein |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Rein schmückend, für Hilfsmittel verborgen | KERN |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-divider` | Trenner | Divider |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/divider>\n\n---\n\n### English — Divider\n\nVisually divides blocks of content into groups and can build a hierarchy.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-divider` | Baustein |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Purely decorative, hidden from assistive technology | aria-hidden in the example |\n" } }
  }
};

const html01 = "<hr class=\"kern-divider\" aria-hidden=\"true\" />";
export const Beispiel01 = {
  name: "Beispiele",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
