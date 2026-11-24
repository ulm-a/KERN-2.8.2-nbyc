/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Inhalt/Description List",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-description-list", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/descriptionlist", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Strukturiert die Darstellung von Begriffen und deren Definitionen.\n\n**Wann nehmen**\n\n- Für alles, was zu einem Vorgang feststeht: Aktenzeichen, Darlehenssumme, Frist — wenn nichts davon bearbeitet wird.\n\n**Wann nicht**\n\n- Wenn Werte änderbar sein sollen — dafür Summary mit Ändern-Link je Zeile.\n- Für Vergleiche zwischen mehreren Fällen. Das ist eine Tabelle.\n\n**Barrierefreiheit**\n\n- Eine echte &lt;dl&gt; mit &lt;dt&gt; und &lt;dd&gt; — Screenreader lesen dann Paare, nicht zwei Spalten.\n- Beträge mit gleich breiten Ziffern — KERN setzt tabellarische Ziffern seitenweit.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-description-list` | Baustein |\n| `kern-description-list-item` | Baustein |\n| `kern-description-list-item__key` | Bestandteil |\n| `kern-description-list-item__value` | Bestandteil |\n| `kern-description-list--col` | Variante |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Begriff und Beschreibung zuordenbar | nativ |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-description-list` | Wertepaare | Description List |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/descriptionlist>\n\n---\n\n### English — Description List\n\nStructures the presentation of terms and their definitions.\n\n**When to use**\n\n- For everything that is fixed for a case: file number, loan amount, deadline — when none of it is edited.\n\n**When not to use**\n\n- When values are to be changeable — use the summary with a change link per row.\n- For comparisons between several cases. That is a table.\n\n**Accessibility**\n\n- A real &lt;dl&gt; with &lt;dt&gt; and &lt;dd&gt; — screen readers then read pairs, not two columns.\n- Amounts with tabular figures — KERN sets tabular figures page-wide.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-description-list` | Baustein |\n| `kern-description-list-item` | Baustein |\n| `kern-description-list-item__key` | Bestandteil |\n| `kern-description-list-item__value` | Bestandteil |\n| `kern-description-list--col` | Variante |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Term and description can be associated | dl/dt/dd |\n" } }
  }
};

const html01 = "<dl class=\"kern-description-list\">\n    <div class=\"kern-description-list-item\">\n      <dt class=\"kern-description-list-item__key\">Name</dt>\n      <dd class=\"kern-description-list-item__value\">Musterperson</dd>\n    </div>\n    <div class=\"kern-description-list-item\">\n      <dt class=\"kern-description-list-item__key\">Vorname</dt>\n      <dd class=\"kern-description-list-item__value\">Kim</dd>\n    </div>\n    <div class=\"kern-description-list-item\">\n      <dt class=\"kern-description-list-item__key\">E-Mail</dt>\n      <dd class=\"kern-description-list-item__value\">kim@musterperson.de</dd>\n    </div>\n    <div class=\"kern-description-list-item\">\n      <dt class=\"kern-description-list-item__key\">Adresse</dt>\n      <dd class=\"kern-description-list-item__value\">Musterstraße 2, 23456 Musterstadt</dd>\n    </div>\n  </dl>";
export const Beispiel01 = {
  name: "Default",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};

const html02 = "<dl class=\"kern-description-list kern-description-list--col\">\n    <div class=\"kern-description-list-item\">\n      <dt class=\"kern-description-list-item__key\">Bürgerämter</dt>\n      <dd class=\"kern-description-list-item__value\">\n        Zuständig für Bürgerservices wie Anmeldungen, Ausweisangelegenheiten, Eheschließungen und\n        Geburten oder Anträge für Veranstaltungen.\n      </dd>\n    </div>\n    <div class=\"kern-description-list-item\">\n      <dt class=\"kern-description-list-item__key\">Bezirksregierungen</dt>\n      <dd class=\"kern-description-list-item__value\">\n        Wichtige Verwaltungseinheiten in einigen deutschen Bundesländern, die als Mittler zwischen\n        der Landesregierung und den Kommunen fungieren. \n      </dd>\n    </div>\n    <div class=\"kern-description-list-item\">\n      <dt class=\"kern-description-list-item__key\">Bundesagentur für Arbeit</dt>\n      <dd class=\"kern-description-list-item__value\">\n        Ist eine zentrale Institution auf dem deutschen Arbeitsmarkt mit vielfältigen Aufgaben und\n        Dienstleistungen wie Arbeitsvermittlung und Arbeitslosenversicherung, Berufsberatung oder\n        Aus- und Weiterbildung.\n      </dd>\n    </div>\n  </dl>";
export const Beispiel02 = {
  name: "Column",
  render: () => html02,
  parameters: { docs: { source: { code: html02 } } }
};
