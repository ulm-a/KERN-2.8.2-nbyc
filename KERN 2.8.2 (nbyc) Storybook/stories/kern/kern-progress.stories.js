/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Rückmeldung/Progress",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-progress", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/progress", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Zeigt die Gesamtdauer und den Fortschritt eines mehrstufigen Prozesses an.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-progress` | Baustein |\n| `kern-label` | Baustein |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Schrittfortschritt, nicht für Laden | Anwendung |\n| Änderung angesagt (4.1.3) | Anwendung |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-progress` | Fortschrittsbalken | Progress |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/progress>\n\n---\n\n### English — Progress\n\nShows the overall length and the progress of a multi-step process.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-progress` | Baustein |\n| `kern-label` | Baustein |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Step progress, not for loading |  |\n| Change announced (4.1.3) | via the central announcement (M61) |\n" } }
  }
};

const html01 = "<div class=\"kern-progress\">\n    <label class=\"kern-label\" for=\"progress1\">Schritt 2 von 5</label>\n    <progress id=\"progress1\" value=\"2\" max=\"5\"></progress></div\n>";
export const Beispiel01 = {
  name: "Progress mit Label oben",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};

const html02 = "<div class=\"kern-progress\">\n    <progress id=\"progress2\" value=\"5\" max=\"8\"></progress>\n    <label class=\"kern-label\" for=\"progress2\">Schritt 5 von 8</label>\n  </div>";
export const Beispiel02 = {
  name: "Progress mit Label unten",
  render: () => html02,
  parameters: { docs: { source: { code: html02 } } }
};

const html03 = "<div class=\"kern-progress\">\n    <progress value=\"35\" max=\"100\"></progress></div\n>";
export const Beispiel03 = {
  name: "Progress ohne Label",
  render: () => html03,
  parameters: { docs: { source: { code: html03 } } }
};
