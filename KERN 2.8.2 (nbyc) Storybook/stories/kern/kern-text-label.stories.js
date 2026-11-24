/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Text/Text Label",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-text-label", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/text/label", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Beschriftet Eingabefelder, Buttons oder andere interaktive Elemente.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-label` | Baustein |\n| `kern-label--large` | Variante |\n| `kern-label--small` | Variante |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Nur gleiche Größenstufe kombinieren | Anwendung |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-label` | Beschriftung | Label |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/text/label>\n\n---\n\n### English — Text Label\n\nLabels input fields, buttons or other interactive elements.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-label` | Baustein |\n| `kern-label--large` | Variante |\n| `kern-label--small` | Variante |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Only combine the same size level | KERN: text roles |\n" } }
  }
};

const html01 = "<p class=\"kern-label kern-label--large\">\n    Dieses Label ist in der Größe „large\" dargestellt. Es eignet sich für hervorgehobene\n    Eingabebereiche oder komplexere Formularstrukturen.\n  </p>\n  <p class=\"kern-label\">\n    Dieses Label ist in der Größe „default\" dargestellt. Es dient der eindeutigen Beschriftung von\n    Eingabe- oder Auswahlfeldern und sollte standardmäßig verwendet werden.\n  </p>\n  <p class=\"kern-label kern-label--small\">\n    Dieses Label ist in der Größe „small\" dargestellt. Es wird verwendet, wenn wenig Platz zur\n    Verfügung steht – z.&#8239;B. in Cards. Aufgrund der geringeren Lesbarkeit sollte diese Variante\n    nur sparsam eingesetzt werden.\n  </p>";
export const Beispiel01 = {
  name: "Varianten",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
