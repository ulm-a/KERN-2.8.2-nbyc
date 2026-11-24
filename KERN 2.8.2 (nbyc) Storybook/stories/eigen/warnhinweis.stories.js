/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Rückmeldung/Warnhinweis",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "warnhinweis", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Eine Folge, die man kennen muss, bevor man weitermacht.\n\n**Wann nehmen**\n\n- Vor unumkehrbaren Schritten: Ablehnung, Löschung, Fristablauf.\n- Wenn eine Angabe rechtliche Folgen hat.\n\n**Wann nicht**\n\n- Für gewöhnliche Hinweise — dafür die Meldung.\n- Mehr als einer je Seite. Wer alles warnt, warnt nichts.\n\n**Barrierefreiheit**\n\n- Das Ausrufezeichen kommt aus dem CSS und wird nicht vorgelesen — die Warnung muss vollständig im Text stehen.\n- Kein role=\"alert\": der Hinweis steht von Anfang an da und unterbricht nicht.\n- Der Kreis ist Text auf Fläche und erreicht in allen vier Modi den geforderten Kontrast.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-warning-text` | Text mit Ausrufezeichen davor |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-warning-text` | Warnhinweis | Warning Text |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Warning text\n\nA consequence you must know before continuing.\n\n**When to use**\n\n- Before irreversible steps: rejection, deletion, expiry of a deadline.\n- When a statement has legal consequences.\n\n**When not to use**\n\n- For ordinary hints — use the alert.\n- More than one per page. Whoever warns about everything warns about nothing.\n\n**Accessibility**\n\n- The exclamation mark comes from the CSS and is not read out — the warning must be complete in the text.\n- No role=\"alert\": the hint is there from the start and does not interrupt.\n- The circle is text on a surface and reaches the required contrast in all four modes.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-warning-text` | Text with an exclamation mark in front |\n" } }
  }
};

const html01 = "<p class=\"kn-warning-text\">Mit der Ablehnung beginnt die Widerspruchsfrist von einem Monat.\nDas Mahnverfahren läuft ab dem Folgetag weiter.</p>";
export const Beispiel01 = {
  name: "Vor der Ablehnung",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
