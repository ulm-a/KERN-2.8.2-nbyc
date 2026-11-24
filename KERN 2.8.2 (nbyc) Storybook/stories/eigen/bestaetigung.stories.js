/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Rückmeldung/Bestätigung",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "bestaetigung", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Der Abschluss: es hat geklappt, und das ist die Nummer dazu.\n\n**Wann nehmen**\n\n- Als eigene Seite nach dem Absenden eines Antrags oder einer Entscheidung.\n- Immer mit einer Kennung, die man notieren kann, und mit dem, was als Nächstes geschieht.\n\n**Wann nicht**\n\n- Als flüchtige Meldung. Eine Bestätigung, die nach vier Sekunden verschwindet, ist keine.\n- Ohne Angabe, wie es weitergeht.\n\n**Barrierefreiheit**\n\n- Die Nummer steht in fester Schrift, damit Ziffern nicht zu verwechseln sind.\n- Der grüne Rahmen ist Zugabe — die Aussage steht im Text.\n- Nach dem Absenden gehört der Fokus auf die Überschrift dieser Seite.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-confirmation` | die Fläche |\n| `kn-confirmation__number` | die Kennung, fest gesetzt |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-confirmation` | Bestätigung | Confirmation |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Confirmation\n\nThe conclusion: it worked, and this is the number that goes with it.\n\n**When to use**\n\n- As a page of its own after submitting an application or a decision.\n- Always with a reference that can be noted down and with what happens next.\n\n**When not to use**\n\n- As a toast. A confirmation that disappears after four seconds is not one.\n- Without saying what happens next.\n\n**Accessibility**\n\n- The number is set in monospace so that digits cannot be confused.\n- The green frame is an extra — the statement is in the text.\n- After submitting, focus belongs on the heading of this page.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-confirmation` | the surface |\n| `kn-confirmation__number` | the reference, monospaced |\n" } }
  }
};

const html01 = "<div class=\"kn-confirmation\">\n  <p class=\"kern-heading-small\" style=\"margin:0 0 .5rem\">Antrag ist eingegangen</p>\n  <p class=\"kn-confirmation__number\">2026-BAF-10482</p>\n  <p class=\"kern-body\" style=\"margin:0\">Sie erhalten eine Nachricht in Ihr Postfach, sobald die\n  Prüfung abgeschlossen ist. Das dauert in der Regel vier Wochen.</p>\n</div>";
export const Beispiel01 = {
  name: "Antrag abgeschickt",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
