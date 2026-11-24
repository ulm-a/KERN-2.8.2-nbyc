/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Text/Text Body",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-text-body", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/text/body", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Wird für Fließtext, Hilfetexte und inhaltliche Absätze verwendet.\n\n**Wann nehmen**\n\n- Für jede Textstelle eine KERN-Textrolle — nie eine eigene Größe.\n\n**Wann nicht**\n\n- Die Größe sagt nichts über die Gliederungsebene: Überschriftenebene (h1–h6) und Textrolle sind zweierlei.\n\n**Barrierefreiheit**\n\n- WCAG 1.4.12: Text bleibt lesbar, wenn Nutzende Zeilenhöhe, Abstände und Laufweite vergrößern — keine festen Höhen um Text.\n- Keine Schrift unter KERNs kleinster Stufe.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-body` | Baustein |\n| `kern-body--large` | Variante |\n| `kern-body--small` | Variante |\n| `kern-body--bold` | Variante |\n| `kern-body--muted` | Variante |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Nur gleiche Größenstufe kombinieren | Anwendung |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-body` | Fließtext | Body |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/text/body>\n\n---\n\n### English — Text Body\n\nUsed for running text, help texts and content paragraphs.\n\n**When to use**\n\n- Use a KERN text role for every piece of text — never a size of your own.\n\n**When not to use**\n\n- The size says nothing about the outline level: heading level (h1–h6) and text role are two different things.\n\n**Accessibility**\n\n- WCAG 1.4.12: text stays readable when users increase line height, spacing and letter spacing — no fixed heights around text.\n- No type smaller than KERN’s smallest level.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-body` | Baustein |\n| `kern-body--large` | Variante |\n| `kern-body--small` | Variante |\n| `kern-body--bold` | Variante |\n| `kern-body--muted` | Variante |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Only combine the same size level | KERN: text roles |\n" } }
  }
};

const html01 = "<p class=\"kern-body kern-body--large\">\n    Dieser Body-Text ist in der Größe „large\" geschrieben. Diese Größe sollte nur sparsam eingesetzt\n    werden, z.&#8239;B. auf Startseiten.\n  </p>\n  <p class=\"kern-body\">\n    Dieser Body-Text ist in der Größe „default\" geschrieben. Diese Größe bietet eine gute Lesbarkeit\n    und sollte standardmäßig verwendet werden.\n  </p>\n  <p class=\"kern-body kern-body--small\">\n    Dieser Body-Text ist in der Größe „small\" geschrieben. Diese Größe sollte nur wenig verwendet\n    werden, z.&#8239;B. wenn wenig Platz vorhanden ist.\n  </p>\n  <br />\n  <p class=\"kern-body kern-body--bold\">\n    Ein Body-Text jeglicher Größe kann gefettet werden. Dies sollte nur in Ausnahmefällen verwendet\n    werden, z.&#8239;B. um eine wichtige Information hervorzuheben.\n  </p>\n  <p class=\"kern-body kern-body--muted\">\n    Unabhängig von seiner Größe kann ein Body-Text in einer zurückhaltenden Form verwendet werden.\n    Dies sollte jedoch nur in Ausnahmefällen geschehen, z.&#8239;B. um ergänzende Randbemerkungen\n    abzubilden.\n  </p>";
export const Beispiel01 = {
  name: "Varianten",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
