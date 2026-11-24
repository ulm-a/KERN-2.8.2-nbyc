/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Text/Text Title",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-text-title", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/text/title", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Dient als Titel innerhalb von Komponenten.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-title` | Baustein |\n| `kern-title--large` | Variante |\n| `kern-title--small` | Variante |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Immer mit h1–h6, Ebenen ohne Sprung | Anwendung |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-title` | Titel | Title |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/text/title>\n\n---\n\n### English — Text Title\n\nServes as a title within components.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-title` | Baustein |\n| `kern-title--large` | Variante |\n| `kern-title--small` | Variante |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Always with h1–h6, levels without gaps | KERN: text roles |\n" } }
  }
};

const html01 = "<h2 class=\"kern-title kern-title--large\">\n    Dieser Title ist in der Größe „large\" dargestellt. Diese Variante eignet sich für prominente\n    Titel in größeren UI-Elementen wie Dialogen oder Cards.\n  </h2>\n  <h3 class=\"kern-title\">\n    Dieser Title ist in der Größe „default\" dargestellt. Diese Standardgröße eignet sich für Cards,\n    Formularabschnitte und Tabellen.\n  </h3>\n  <h4 class=\"kern-title kern-title--small\">\n    Dieser Title ist in der Größe „small\" dargestellt. Er eignet sich für kompakte Layouts mit\n    begrenztem Raum.\n  </h4>";
export const Beispiel01 = {
  name: "Varianten",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
