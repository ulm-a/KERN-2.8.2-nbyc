/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Fläche/Einschub",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "einschub", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Hebt einen Absatz mit einem senkrechten Strich hervor.\n\n**Wann nehmen**\n\n- Für einen Gesetzeswortlaut, ein Zitat, eine Begründung.\n- In der Ausführung „Aktion“ für einen Vorschlag, der noch bestätigt werden muss.\n\n**Wann nicht**\n\n- Für Warnungen — dafür der Warnhinweis.\n- Nicht mehrfach hintereinander. Was ständig hervorgehoben wird, ist nicht mehr hervorgehoben.\n\n**Barrierefreiheit**\n\n- Der Strich ist zeichnerisch. Bei einem Zitat gehört das Element &lt;blockquote&gt; darum, nicht nur die Klasse.\n- Die Ausführung „Aktion“ unterscheidet sich nur in der Farbe — die Bedeutung muss im Text stehen.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-inset-text` | Absatz mit Strich |\n| `kn-inset-text--action` | Strich in der Aktionsfarbe |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-inset-text` | Einschub | Inset Text |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Inset text\n\nHighlights a paragraph with a vertical line.\n\n**When to use**\n\n- For the wording of a law, a quotation, a justification.\n- In the “action” variant for a proposal that still has to be confirmed.\n\n**When not to use**\n\n- For warnings — use the warning text.\n- Not several in a row. What is highlighted all the time is no longer highlighted.\n\n**Accessibility**\n\n- The line is visual. For a quotation the &lt;blockquote&gt; element belongs around it, not just the class.\n- The “action” variant differs only in colour — the meaning must be in the text.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-inset-text` | Paragraph with a line |\n| `kn-inset-text--action` | Line in the action colour |\n" } }
  }
};

const html01 = "<div>\n  <div class=\"kn-inset-text\">\n    <p class=\"kern-body\" style=\"margin:0\">„Auf Antrag sind Darlehensnehmende von der\n    Verpflichtung zur Rückzahlung freizustellen, soweit ihr Einkommen den\n    Freibetrag nicht übersteigt.“ § 18a Absatz 1 BAföG</p>\n  </div>\n  <div class=\"kn-inset-text kn-inset-text--action\" style=\"margin-block-start:1rem\">\n    <p class=\"kern-body\" style=\"margin:0\">Vorschlag: Freistellung für zwölf Monate.\n    Das anrechenbare Einkommen liegt 214 Euro unter dem Freibetrag.</p>\n  </div>\n</div>";
export const Beispiel01 = {
  name: "Gesetzeswortlaut und Vorschlag",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
