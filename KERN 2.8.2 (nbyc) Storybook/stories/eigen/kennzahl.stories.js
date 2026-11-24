/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Daten/Kennzahl",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kennzahl", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Eine große Zahl mit ihrer Bedeutung darunter.\n\n**Wann nehmen**\n\n- Auf einer Übersichtsseite: offene Vorgänge, überschrittene Fristen, Rückstand.\n- Höchstens vier nebeneinander.\n\n**Wann nicht**\n\n- Ohne Bezugsgröße. „9“ sagt nichts, „9 von 47“ sagt etwas.\n- Für Zahlen, die man vergleichen soll — dafür eine Tabelle.\n\n**Barrierefreiheit**\n\n- Zahl und Beschriftung stehen im selben Element, damit sie zusammen vorgelesen werden.\n- Die Zahl allein ist keine Überschrift — kein &lt;h2&gt; darum.\n- Kennzahlen dürfen niemals auf einzelne Beschäftigte herunterbrechbar sein (§ 80 BPersVG).\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-metric` | die Karte |\n| `kn-metric__value` | die große Zahl |\n| `kn-metric__label` | was sie bedeutet |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-metric` | Kennzahl | Metric |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Metric\n\nA large number with its meaning below it.\n\n**When to use**\n\n- On an overview page: open cases, missed deadlines, backlog.\n- At most four side by side.\n\n**When not to use**\n\n- Without a reference value. “9” says nothing, “9 of 47” says something.\n- For numbers that are to be compared — use a table.\n\n**Accessibility**\n\n- Number and label are in the same element so that they are read out together.\n- The number alone is not a heading — no &lt;h2&gt; around it.\n- Metrics must never be breakable down to individual employees (staff representation law, § 80 BPersVG).\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-metric` | the card |\n| `kn-metric__value` | the large number |\n| `kn-metric__label` | what it means |\n" } }
  }
};

const html01 = "<div class=\"kn-auto-grid\">\n  <div class=\"kn-metric\">\n    <span class=\"kn-metric__value\">9</span>\n    <span class=\"kn-metric__label\">offene Vorgänge</span>\n  </div>\n  <div class=\"kn-metric\">\n    <span class=\"kn-metric__value\">3</span>\n    <span class=\"kn-metric__label\">Fristen diese Woche</span>\n  </div>\n  <div class=\"kn-metric\">\n    <span class=\"kn-metric__value\">12</span>\n    <span class=\"kn-metric__label\">Wiedervorlagen</span>\n  </div>\n</div>";
export const Beispiel01 = {
  name: "Drei Kennzahlen",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
