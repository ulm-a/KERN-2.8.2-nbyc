/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Text/Text Preline",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-text-preline", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/text/preline", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Ergänzt Title oder Heading mit unterstützenden Informationen.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-preline` | Baustein |\n| `kern-preline--large` | Variante |\n| `kern-preline--small` | Variante |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Nur gleiche Größenstufe kombinieren | Anwendung |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-preline` | Vorzeile | Preline |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/text/preline>\n\n---\n\n### English — Text Preline\n\nAdds supporting information to a title or heading.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-preline` | Baustein |\n| `kern-preline--large` | Variante |\n| `kern-preline--small` | Variante |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Only combine the same size level | KERN: text roles |\n" } }
  }
};

const html01 = "<p class=\"kern-preline kern-preline--large\">\n    Diese Preline ist in der Größe „large\" dargestellt. Verwende sie gemeinsam mit einem großen\n    Title oder Heading – z.&#8239;B. in prominenten Modulen oder Dialogen.\n  </p>\n  <p class=\"kern-preline\">\n    Diese Preline ist in der Größe „default\" dargestellt. Diese Standardgröße eignet sich für Cards\n    und Formularabschnitte.\n  </p>\n  <p class=\"kern-preline kern-preline--small\">\n    Diese Preline ist in der Größe „small\" dargestellt. Ideal für kompakte Layouts mit kurzen\n    Erklärungen direkt unter kleinen Titles.\n  </p>";
export const Beispiel01 = {
  name: "Varianten",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
