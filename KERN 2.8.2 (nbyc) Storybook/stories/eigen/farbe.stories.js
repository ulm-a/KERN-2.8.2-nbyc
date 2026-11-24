/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Grundlagen/Farbe",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "farbe", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Drei Schichten: Primitive ohne Bedeutung, Semantik mit Bedeutung, Komponententoken je Baustein. Komponenten benutzen nur die Semantik.\n\n**Wann nehmen**\n\n- Immer über die semantischen Namen — nie über Primitive.\n\n**Wann nicht**\n\n- Nie einen Farbwert direkt schreiben. Dann bricht jeder Modus.\n\n**Barrierefreiheit**\n\n- Alle Paare erreichen 4,5 zu 1 für Text, 3 zu 1 für Ränder — in allen vier Modi.\n- Farbe ist nie der einzige Träger einer Aussage. Jeder Zustand hat zusätzlich ein Zeichen oder ein Wort.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `--kern-color-layout-background-default, -hued` | Flächen |\n| `--kern-color-layout-text-default, -muted` | Textfarben |\n| `--kern-color-action-default, -on-default` | Aktionsfarbe und was darauf steht |\n| `--kern-color-feedback-info/-success/-warning/-danger(-background)` | Rückmeldung |\n| `*-contextual` | dieselben Rollen je Ebene (.kern-level-1/-2) — für eigene Bausteine |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Colour\n\nThree layers: primitives without meaning, semantics with meaning, component tokens per component. Components use only the semantic layer.\n\n**When to use**\n\n- Always through the semantic names — never through primitives.\n\n**When not to use**\n\n- Never write a colour value directly. Every mode breaks if you do.\n\n**Accessibility**\n\n- All pairs reach 4.5 to 1 for text and 3 to 1 for borders — in all four modes.\n- Colour is never the only carrier of meaning. Every state also has a sign or a word.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `--kern-color-layout-background-default, -hued` | Surfaces |\n| `--kern-color-layout-text-default, -muted` | Text colours |\n| `--kern-color-action-default, -on-default` | Action colour and what sits on it |\n| `--kern-color-feedback-info/-success/-warning/-danger(-background)` | Feedback |\n| `*-contextual` | the same roles per layer (.kern-level-1/-2) — for own components |\n" } }
  }
};

const html01 = "<div class=\"kn-auto-grid\" style=\"--kn-auto-grid-min:11rem\">\n  <div class=\"kn-swatch\" style=\"background:var(--kern-color-layout-background-default)\">layout-background-default</div>\n  <div class=\"kn-swatch\" style=\"background:var(--kern-color-layout-background-hued)\">layout-background-hued</div>\n  <div class=\"kn-swatch\" style=\"background:var(--kern-color-action-default);color:var(--kern-color-action-on-default)\">action-default</div>\n  <div class=\"kn-swatch\" style=\"background:var(--kern-color-feedback-info-background)\">feedback-info-background</div>\n  <div class=\"kn-swatch\" style=\"background:var(--kern-color-feedback-success-background)\">feedback-success-background</div>\n  <div class=\"kn-swatch\" style=\"background:var(--kern-color-feedback-danger-background)\">feedback-danger-background</div>\n</div>";
export const Beispiel01 = {
  name: "Semantische Flächen und Texte",
  render: () => html01,
  parameters: { docs: { source: { code: html01 }, description: { story: "Oben in der Leiste den Modus umschalten — dieselben Namen, andere Werte.\n\nSwitch the mode in the bar at the top — same names, different values." } } }
};
