/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Aktion/Segmentwahl",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "segmente", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Wechselt zwischen zwei bis vier sich ausschließenden Sichten auf DIESELBEN Daten.\n\n**Wann nehmen**\n\n- Liste gegen Karten gegen Zeitleiste.\n- Hell gegen Dunkel.\n\n**Wann nicht**\n\n- Wenn sich der INHALT ändert — dafür sind Reiter da.\n- Ab fünf Möglichkeiten: dann ein Auswahlfeld.\n\n**Barrierefreiheit**\n\n- Zustand über aria-pressed, nicht über eine Klasse allein.\n- Im Windows-Kontrastmodus trägt die Systemfarbe Highlight den Zustand.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tab | erreicht jede Wahl |  |\n| Enter, Leertaste | wählt diese, die anderen nicht mehr | „gedrückt“ / „nicht gedrückt“ |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-segmented` | Rahmen |\n| `kn-segmented__button` | je Sicht |\n| `aria-pressed` | Zustand |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-segmented` | Segmentwahl | Segmented Control |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Segmented control\n\nSwitches between two to four mutually exclusive views of the SAME data.\n\n**When to use**\n\n- List versus cards versus timeline.\n- Light versus dark.\n\n**When not to use**\n\n- When the CONTENT changes — that is what tabs are for.\n- From five options on: use a select field.\n\n**Accessibility**\n\n- State via aria-pressed, not via a class alone.\n- In Windows contrast mode the system colour Highlight carries the state.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Tab | reaches each option |  |\n| Enter, Space | selects this one, deselects the others | “pressed” / “not pressed” |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-segmented` | Frame |\n| `kn-segmented__button` | per view |\n| `aria-pressed` | State |\n" } }
  }
};

const html01 = "<div class=\"kn-segmented\" role=\"group\" aria-label=\"Ansicht\">\n  <button class=\"kn-segmented__button\" aria-pressed=\"true\">Liste</button>\n  <button class=\"kn-segmented__button\" aria-pressed=\"false\">Karten</button>\n  <button class=\"kn-segmented__button\" aria-pressed=\"false\">Zeitleiste</button>\n</div>";
export const Beispiel01 = {
  name: "Drei Sichten",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
