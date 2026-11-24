/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Layout/Kopfzeile",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-kopfzeile", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/kopfzeile", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Kennzeichnet digitale Auftritte der öffentlichen Verwaltung, wie Behörden, Online-Dienste oder Serviceportale.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-kopfzeile` | Baustein |\n| `kern-container` | Baustein |\n| `kern-kopfzeile__content` | Bestandteil |\n| `kern-kopfzeile__flagge` | Bestandteil |\n| `kern-kopfzeile__label` | Bestandteil |\n| `kern-container-fluid` | Baustein |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Nur für öffentliche Stellen, unverändert, nie sticky | Anwendung |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-kopfzeile` | Kopfzeile | Header Bar |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/kopfzeile>\n\n---\n\n### English — Header bar (Kopfzeile)\n\nIdentifies digital presences of the public administration, such as authorities, online services or service portals.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-kopfzeile` | Baustein |\n| `kern-container` | Baustein |\n| `kern-kopfzeile__content` | Bestandteil |\n| `kern-kopfzeile__flagge` | Bestandteil |\n| `kern-kopfzeile__label` | Bestandteil |\n| `kern-container-fluid` | Baustein |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Only for public bodies, unchanged, never sticky | KERN requirement |\n" } }
  }
};

const html01 = "<div class=\"kern-kopfzeile\">\n    <div class=\"kern-container\">\n      <div class=\"kern-kopfzeile__content\">\n        <span class=\"kern-kopfzeile__flagge\" aria-hidden=\"true\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 16\">\n            <path fill=\"#000\" d=\"M0 .5h24v5.333H0z\" />\n            <path fill=\"red\" d=\"M0 5.833h24v5.333H0z\" />\n            <path fill=\"#FACA2C\" d=\"M0 11.167h24V16.5H0z\" />\n          </svg>\n        </span>\n        <span class=\"kern-kopfzeile__label\"> Offizielle Website – Bundesrepublik Deutschland </span>\n      </div>\n    </div>\n  </div>";
export const Beispiel01 = {
  name: "Container Kopfzeile",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};

const html02 = "<div class=\"kern-kopfzeile\">\n    <div class=\"kern-container-fluid\">\n      <div class=\"kern-kopfzeile__content\">\n        <span class=\"kern-kopfzeile__flagge\" aria-hidden=\"true\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 16\">\n            <path fill=\"#000\" d=\"M0 .5h24v5.333H0z\" />\n            <path fill=\"red\" d=\"M0 5.833h24v5.333H0z\" />\n            <path fill=\"#FACA2C\" d=\"M0 11.167h24V16.5H0z\" />\n          </svg>\n        </span>\n        <span class=\"kern-kopfzeile__label\"> Offizielle Website – Bundesrepublik Deutschland </span>\n      </div>\n    </div>\n  </div>";
export const Beispiel02 = {
  name: "Fluid Kopfzeile",
  render: () => html02,
  parameters: { docs: { source: { code: html02 } } }
};
