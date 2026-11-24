/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Inhalt/Badge",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-badge", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/badge", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Gibt einen knappen Status-Hinweis zu einem übergeordneten Element.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-badge` | Baustein |\n| `kern-badge--info` | Variante |\n| `kern-label` | Baustein |\n| `kern-badge--success` | Variante |\n| `kern-badge--warning` | Variante |\n| `kern-badge--danger` | Variante |\n| `kern-icon` | Baustein |\n| `kern-icon--info` | Variante |\n| `kern-icon--success` | Variante |\n| `kern-icon--warning` | Variante |\n| `kern-icon--danger` | Variante |\n| `kern-badge--small` | Variante |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Nicht interaktiv | KERN |\n| Dynamische Marke wird angesagt | Anwendung |\n| Bedeutung nicht nur über Farbe | KERN |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-badge` | Marke | Badge |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/badge>\n\n---\n\n### English — Badge\n\nGives a brief status note about a parent element.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-badge` | Baustein |\n| `kern-badge--info` | Variante |\n| `kern-label` | Baustein |\n| `kern-badge--success` | Variante |\n| `kern-badge--warning` | Variante |\n| `kern-badge--danger` | Variante |\n| `kern-icon` | Baustein |\n| `kern-icon--info` | Variante |\n| `kern-icon--success` | Variante |\n| `kern-icon--warning` | Variante |\n| `kern-icon--danger` | Variante |\n| `kern-badge--small` | Variante |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Not interactive | no control in the markup |\n| Dynamic badge is announced | via the central announcement (M61) |\n| Meaning not only through colour | text in the badge, icon aria-hidden |\n" } }
  }
};

const html01 = "<span class=\"kern-badge kern-badge--info\">\n    <span class=\"kern-label\">Information</span>\n  </span>\n  <span class=\"kern-badge kern-badge--success\">\n    <span class=\"kern-label\">Erfolg</span>\n  </span>\n  <span class=\"kern-badge kern-badge--warning\">\n    <span class=\"kern-label\">Warnung</span>\n  </span>\n  <span class=\"kern-badge kern-badge--danger\">\n    <span class=\"kern-label\">Fehler</span>\n  </span>";
export const Beispiel01 = {
  name: "Varianten",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};

const html02 = "<span class=\"kern-badge kern-badge--info\">\n    <span class=\"kern-icon kern-icon--info\" aria-hidden=\"true\"></span>\n    <span class=\"kern-label\">Information</span>\n  </span>\n\n  <span class=\"kern-badge kern-badge--success\">\n    <span class=\"kern-icon kern-icon--success\" aria-hidden=\"true\"></span>\n    <span class=\"kern-label\">Erfolg</span>\n  </span>\n\n  <span class=\"kern-badge kern-badge--warning\">\n    <span class=\"kern-icon kern-icon--warning\" aria-hidden=\"true\"></span>\n    <span class=\"kern-label\">Warnung</span>\n  </span>\n\n  <span class=\"kern-badge kern-badge--danger\">\n    <span class=\"kern-icon kern-icon--danger\" aria-hidden=\"true\"></span>\n    <span class=\"kern-label\">Fehler</span>\n  </span>";
export const Beispiel02 = {
  name: "Varianten mit Icon",
  render: () => html02,
  parameters: { docs: { source: { code: html02 } } }
};

const html03 = "<span class=\"kern-badge kern-badge--small kern-badge--success\">\n    <span class=\"kern-icon kern-icon--success\" aria-hidden=\"true\"></span>\n    <span class=\"kern-label\">Erfolg</span>\n  </span>\n  <span class=\"kern-badge kern-badge--success\">\n    <span class=\"kern-icon kern-icon--success\" aria-hidden=\"true\"></span>\n    <span class=\"kern-label\">Erfolg</span>\n  </span>";
export const Beispiel03 = {
  name: "Größenübersicht",
  render: () => html03,
  parameters: { docs: { source: { code: html03 } } }
};
