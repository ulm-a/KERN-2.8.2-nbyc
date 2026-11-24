/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Aktion/Link",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-link", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/link", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Ist eine direkte Verbindung zu anderen Inhalten.\n\n**Wann nehmen**\n\n- Für jeden Ortswechsel — auch innerhalb der Seite.\n\n**Wann nicht**\n\n- Für eine Handlung. Ein Link, der etwas löscht, ist ein Knopf.\n\n**Barrierefreiheit**\n\n- Die Beschriftung muss allein verständlich sein. Nie „hier klicken“.\n- Die Unterstreichung bleibt — sie wirkt auch ohne Farbwahrnehmung.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tab | erreicht den Verweis |  |\n| Enter | folgt dem Verweis (nativ) |  |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-link` | Baustein |\n| `kern-link--small` | Variante |\n| `kern-icon` | Baustein |\n| `kern-icon--arrow-forward` | Variante |\n| `kern-btn` | Baustein |\n| `kern-btn--tertiary` | Variante |\n| `kern-label` | Baustein |\n| `kern-link--no-visited-state` | Variante |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Linkzweck aus dem Zusammenhang | Anwendung |\n| Externe Links gekennzeichnet | Anwendung |\n| Nie nur ein Symbol | Anwendung |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-link` | Verweis | Link |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/link>\n\n---\n\n### English — Link\n\nA direct connection to other content.\n\n**When to use**\n\n- For every change of location — also within the page.\n\n**When not to use**\n\n- For an action. A link that deletes something is a button.\n\n**Accessibility**\n\n- The label must make sense on its own. Never “click here”.\n- The underline stays — it works without colour perception too.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Tab | reaches the link |  |\n| Enter | follows the link (native) |  |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-link` | Baustein |\n| `kern-link--small` | Variante |\n| `kern-icon` | Baustein |\n| `kern-icon--arrow-forward` | Variante |\n| `kern-btn` | Baustein |\n| `kern-btn--tertiary` | Variante |\n| `kern-label` | Baustein |\n| `kern-link--no-visited-state` | Variante |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Link purpose clear from context |  |\n| External links marked | icon possible in the example |\n| Never just an icon |  |\n" } }
  }
};

const html01 = "<div>\n    <a href=\"#\" class=\"kern-link\">Link default</a>\n  </div>\n\n  <div>\n    <a href=\"#\" class=\"kern-link kern-link--small\">Link small</a>\n  </div>";
export const Beispiel01 = {
  name: "Varianten",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};

const html02 = "<div>\n    <a href=\"#\" class=\"kern-link\"\n      ><span class=\"kern-icon kern-icon--arrow-forward\" aria-hidden=\"true\"></span>Link default</a\n    >\n  </div>\n  <div>\n    <a href=\"#\" class=\"kern-link kern-link--small\"\n      ><span class=\"kern-icon kern-icon--arrow-forward\" aria-hidden=\"true\"></span>Link small</a\n    >\n  </div>";
export const Beispiel02 = {
  name: "Varianten mit Icon",
  render: () => html02,
  parameters: { docs: { source: { code: html02 } } }
};

const html03 = "<a href=\"#\" class=\"kern-btn kern-btn--tertiary\">\n    <span class=\"kern-label\">Linktext</span>\n    <span class=\"kern-icon kern-icon--arrow-forward\" aria-hidden=\"true\"></span> </a\n>";
export const Beispiel03 = {
  name: "Link als Button darstellen",
  render: () => html03,
  parameters: { docs: { source: { code: html03 } } }
};

const html04 = "<a href=\"#\" class=\"kern-link kern-link--no-visited-state\">Link</a>";
export const Beispiel04 = {
  name: "Link ohne besuchten Zustand",
  render: () => html04,
  parameters: { docs: { source: { code: html04 } } }
};
