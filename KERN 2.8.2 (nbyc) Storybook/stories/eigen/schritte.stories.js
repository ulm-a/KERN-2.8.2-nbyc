/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Navigation/Schrittfolge",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "schritte", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Zeigt, wo man in einem mehrstufigen Ablauf steht.\n\n**Wann nehmen**\n\n- Ab drei Schritten, die in fester Reihenfolge kommen.\n\n**Wann nicht**\n\n- Wenn die Reihenfolge frei ist — dafür ist die Aufgabenliste da.\n\n**Barrierefreiheit**\n\n- &lt;ol&gt;, weil die Reihenfolge Bedeutung hat.\n- Der aktuelle Schritt bekommt aria-current=\"step\".\n- Erledigt trägt ein Häkchen, nicht nur Grün.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-steps` | Liste |\n| `kn-step` | ein Schritt |\n| `data-kn-state` | fertig oder jetzt |\n| `data-kn-number` | die Zahl im Kreis |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-steps` | Schrittfolge | Steps |\n| `kn-step` | Schritt | Step |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Step indicator\n\nShows where you are in a multi-step process.\n\n**When to use**\n\n- From three steps that come in a fixed order.\n\n**When not to use**\n\n- When the order is free — that is what the task list is for.\n\n**Accessibility**\n\n- &lt;ol&gt;, because the order carries meaning.\n- The current step gets aria-current=\"step\".\n- Done carries a tick, not just green.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-steps` | List |\n| `kn-step` | a step |\n| `data-kn-state` | done or current |\n| `data-kn-number` | the number in the circle |\n" } }
  }
};

const html01 = "<ol class=\"kn-steps\">\n  <li class=\"kn-step\" data-kn-state=\"done\"><span class=\"kn-step__marker\" data-kn-number=\"1\"></span><span class=\"kn-step__label\">Person</span></li>\n  <li class=\"kn-step\" data-kn-state=\"done\"><span class=\"kn-step__marker\" data-kn-number=\"2\"></span><span class=\"kn-step__label\">Einkommen</span></li>\n  <li class=\"kn-step\" data-kn-state=\"current\"><span class=\"kn-step__marker\" data-kn-number=\"3\"></span><span class=\"kn-step__label\">Nachweise</span></li>\n  <li class=\"kn-step\"><span class=\"kn-step__marker\" data-kn-number=\"4\"></span><span class=\"kn-step__label\">Prüfen</span></li>\n</ol>";
export const Beispiel01 = {
  name: "Vier Schritte",
  render: () => html01,
  parameters: { docs: { source: { code: html01 }, description: { story: "Der Zustand steht im Zeichen UND im Attribut, nicht nur in der Farbe.\n\nThe state is in the sign AND in the attribute, not only in the colour." } } }
};
