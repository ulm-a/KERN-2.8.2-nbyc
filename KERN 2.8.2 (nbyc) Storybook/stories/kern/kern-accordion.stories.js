/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Inhalt/Accordion",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-accordion", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/accordion", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Fasst Informationen in Überschriften zusammen und ermöglicht das Ein- und Ausblenden der zugehörigen Inhalte.\n\n**Wann nehmen**\n\n- Für Zusatzerklärungen, häufige Fragen, seltene Angaben.\n\n**Wann nicht**\n\n- Für Pflichtangaben. Was alle ausfüllen müssen, darf nicht verborgen sein.\n- Nie für Fehlermeldungen.\n\n**Barrierefreiheit**\n\n- Natives &lt;details&gt;/&lt;summary&gt;: Zustand und Tastatur (Enter, Leertaste) liefert der Browser — ohne ARIA und ohne Skript.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tab | erreicht die Kopfzeile |  |\n| Enter, Leertaste | öffnet und schließt (nativ) |  |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-accordion` | Baustein |\n| `kern-accordion__header` | Bestandteil |\n| `kern-title` | Baustein |\n| `kern-accordion__body` | Bestandteil |\n| `kern-body` | Baustein |\n| `kern-accordion-group` | Baustein |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Bedienung mit Enter/Leertaste | nativ |\n| Kopfzeile eindeutig beschriften (3.3.2) | Anwendung |\n| Nicht verschachteln, nicht automatisch schließen | Anwendung |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-accordion` | Aufklapper | Accordion |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/accordion>\n\n---\n\n### English — Accordion\n\nGroups information under headings and lets users show and hide the related content.\n\n**When to use**\n\n- For additional explanations, frequently asked questions, rarely needed details.\n\n**When not to use**\n\n- For required information. What everyone must fill in must not be hidden.\n- Never for error messages.\n\n**Accessibility**\n\n- Native &lt;details&gt;/&lt;summary&gt;: the browser provides state and keyboard (Enter, Space) — without ARIA and without script.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Tab | reaches the header |  |\n| Enter, Space | opens and closes (native) |  |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-accordion` | Baustein |\n| `kern-accordion__header` | Bestandteil |\n| `kern-title` | Baustein |\n| `kern-accordion__body` | Bestandteil |\n| `kern-body` | Baustein |\n| `kern-accordion-group` | Baustein |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Operation with Enter/Space | details/summary |\n| Label the header unambiguously (3.3.2) |  |\n| Do not nest, do not close automatically |  |\n" } }
  }
};

const html01 = "<details class=\"kern-accordion\">\n    <summary class=\"kern-accordion__header\">\n      <span class=\"kern-title\">Welche Voraussetzungen muss ich erfüllen?</span>\n    </summary>\n    <section class=\"kern-accordion__body\">\n      <p class=\"kern-body\">Zur Nutzung dieses Dienstes benötigen Sie ein einfaches Servicekonto.</p>\n    </section>\n  </details>";
export const Beispiel01 = {
  name: "Einzeln",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};

const html02 = "<div class=\"kern-accordion-group\">\n    <details class=\"kern-accordion\">\n      <summary class=\"kern-accordion__header\">\n        <span class=\"kern-title\">Welche Voraussetzungen muss ich erfüllen?</span>\n      </summary>\n      <section class=\"kern-accordion__body\">\n        <p class=\"kern-body\">\n          Zur Nutzung dieses Dienstes benötigen Sie ein einfaches Servicekonto.\n        </p>\n      </section>\n    </details>\n\n    <details class=\"kern-accordion\">\n      <summary class=\"kern-accordion__header\">\n        <span class=\"kern-title\">Wie hoch sind die Kosten?</span>\n      </summary>\n      <section class=\"kern-accordion__body\">\n        <p class=\"kern-body\">\n          Die Online-Anmeldung kostet 31 Euro (ab 2024). Damit sparen Sie gegenüber der klassischen\n          Anmeldung im Bezirksamt erheblich.\n        </p>\n      </section>\n    </details>\n\n    <details class=\"kern-accordion\">\n      <summary class=\"kern-accordion__header\">\n        <span class=\"kern-title\">Wie lange dauert der Prozess?</span>\n      </summary>\n      <section class=\"kern-accordion__body\">\n        <p class=\"kern-body\">Etwa 10 Minuten.</p>\n      </section>\n    </details>\n  </div>";
export const Beispiel02 = {
  name: "Gruppe",
  render: () => html02,
  parameters: { docs: { source: { code: html02 } } }
};

const html03 = "<details class=\"kern-accordion\" open>\n    <summary class=\"kern-accordion__header\">\n      <span class=\"kern-title\">Wie lange dauert der Prozess?</span>\n    </summary>\n    <section class=\"kern-accordion__body\">\n      <p class=\"kern-body\">Etwa 10 Minuten.</p>\n    </section>\n  </details>";
export const Beispiel03 = {
  name: "Geöffnet",
  render: () => html03,
  parameters: { docs: { source: { code: html03 } } }
};
