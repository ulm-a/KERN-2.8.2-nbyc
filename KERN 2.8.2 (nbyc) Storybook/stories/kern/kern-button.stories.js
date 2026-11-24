/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Aktion/Button",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-button", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/button", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Löst eine Aktion aus, seine Beschriftung benennt diese Aktion.\n\n**Wann nehmen**\n\n- Für eine Handlung: absenden, speichern, löschen, öffnen.\n- Genau ein Hauptknopf (kern-btn--primary) je Bildschirmabschnitt — KERN: einer je Seite.\n\n**Wann nicht**\n\n- Für einen Ortswechsel — dafür ist der Link da.\n- Nie zwei Hauptknöpfe nebeneinander: dann ist keiner mehr der Hauptknopf.\n\n**Barrierefreiheit**\n\n- Immer &lt;button&gt;, nie ein &lt;div&gt; mit Klickereignis.\n- Bedienziel nach WCAG 2.5.8 mindestens 24 × 24 px; KERNs Regelhöhe ist 48 px.\n- Gesperrt nach KERN: lieber ausblenden; wenn nötig aria-disabled=\"true\" statt disabled — der Knopf bleibt per Tab erreichbar und wird vorgelesen, kern-neu.js sperrt Klick, Enter und Leertaste.\n- Ladezustand (Erweiterung data-kn-loading): nicht bedienbar, die Beschriftung bleibt für Hilfsmittel erhalten.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tab | erreicht den Knopf |  |\n| Enter, Leertaste | löst aus (nativ) |  |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-btn` | Baustein |\n| `kern-btn--primary` | Variante |\n| `kern-label` | Baustein |\n| `kern-btn--secondary` | Variante |\n| `kern-btn--tertiary` | Variante |\n| `kern-icon` | Baustein |\n| `kern-icon--edit` | Variante |\n| `kern-icon--arrow-forward` | Variante |\n| `kern-sr-only` | Baustein |\n| `kern-btn--x-small` | Variante |\n| `kern-btn--block` | Variante |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Nur-Symbol-Knopf mit verborgenem Text | KERN |\n| Gesperrt für Hilfsmittel zugänglich | kern-neu.js |\n| Zustand programmatisch (aria-pressed/-expanded) | Anwendung |\n| Ein Hauptknopf je Seite | Anwendung |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-btn` | Knopf | Button |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/button>\n\n---\n\n### English — Button\n\nTriggers an action; its label names that action.\n\n**When to use**\n\n- For an action: submit, save, delete, open.\n- Exactly one primary button (kern-btn--primary) per screen section — KERN: one per page.\n\n**When not to use**\n\n- For a change of location — that is what the link is for.\n- Never two primary buttons side by side: then neither is the primary one any more.\n\n**Accessibility**\n\n- Always &lt;button&gt;, never a &lt;div&gt; with a click handler.\n- Target size per WCAG 2.5.8 at least 24 × 24 px; KERN’s standard height is 48 px.\n- Disabled as in KERN: better hide it; if necessary aria-disabled=\"true\" instead of disabled — the button stays reachable with Tab and is read out, kern-neu.js blocks click, Enter and Space.\n- Loading state (extension data-kn-loading): not operable, the label is kept for assistive technology.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Tab | reaches the button |  |\n| Enter, Space | triggers (native) |  |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-btn` | Baustein |\n| `kern-btn--primary` | Variante |\n| `kern-label` | Baustein |\n| `kern-btn--secondary` | Variante |\n| `kern-btn--tertiary` | Variante |\n| `kern-icon` | Baustein |\n| `kern-icon--edit` | Variante |\n| `kern-icon--arrow-forward` | Variante |\n| `kern-sr-only` | Baustein |\n| `kern-btn--x-small` | Variante |\n| `kern-btn--block` | Variante |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Icon-only button with hidden text | kern-sr-only |\n| Disabled but accessible to assistive technology | aria-disabled + block (E4, M25) |\n| State exposed programmatically (aria-pressed/-expanded) | depending on the button’s purpose |\n| One primary button per page |  |\n" } }
  }
};

const html01 = "<button type=\"button\" class=\"kern-btn kern-btn--primary\">\n    <span class=\"kern-label\">Primary Button</span>\n  </button>\n  <button type=\"button\" class=\"kern-btn kern-btn--secondary\">\n    <span class=\"kern-label\">Secondary Button</span>\n  </button>\n  <button type=\"button\" class=\"kern-btn kern-btn--tertiary\">\n    <span class=\"kern-label\">Tertiary Button</span>\n  </button>";
export const Beispiel01 = {
  name: "Varianten",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};

const html02 = "<button class=\"kern-btn kern-btn--primary\">\n    <span class=\"kern-icon kern-icon--edit\" aria-hidden=\"true\"></span>\n    <span class=\"kern-label\">Primary Button</span>\n  </button>\n\n  <button class=\"kern-btn kern-btn--secondary\">\n    <span class=\"kern-label\">Secondary Button</span>\n    <span class=\"kern-icon kern-icon--arrow-forward\" aria-hidden=\"true\"></span>\n  </button>\n\n  <button class=\"kern-btn kern-btn--tertiary\">\n    <span class=\"kern-icon kern-icon--edit\" aria-hidden=\"true\"></span>\n    <span class=\"kern-label kern-sr-only\">Bearbeiten</span>\n  </button>";
export const Beispiel02 = {
  name: "Varianten mit Icon",
  render: () => html02,
  parameters: { docs: { source: { code: html02 } } }
};

const html03 = "<button class=\"kern-btn kern-btn--x-small kern-btn--primary\">\n    <span class=\"kern-label\">X-Small Button</span>\n  </button>\n  <button class=\"kern-btn kern-btn--primary\">\n    <span class=\"kern-label\">Default Button</span>\n  </button>";
export const Beispiel03 = {
  name: "Größenübersicht",
  render: () => html03,
  parameters: { docs: { source: { code: html03 } } }
};

const html04 = "<button class=\"kern-btn kern-btn--block kern-btn--primary\">\n    <span class=\"kern-label\">Primary Block</span>\n  </button>";
export const Beispiel04 = {
  name: "Block-Button für mobilen Kontext",
  render: () => html04,
  parameters: { docs: { source: { code: html04 } } }
};

const html05 = "<!-- kern.css 2.8.2 kennt fuenf Knopfgroessen. KERNs \"Groessenuebersicht\"\n     zeigt nur x-small und die Grundgroesse; small, large und x-large\n     blieben ohne Beispiel (Befund B4 des Assessments vom 16.11.2026).\n     Markup und Klassen sind KERNs eigene, nichts davon ist neu. -->\n<button class=\"kern-btn kern-btn--small kern-btn--primary\">\n  <span class=\"kern-label\">Small Button</span>\n</button>\n<button class=\"kern-btn kern-btn--large kern-btn--primary\">\n  <span class=\"kern-label\">Large Button</span>\n</button>\n<button class=\"kern-btn kern-btn--x-large kern-btn--primary\">\n  <span class=\"kern-label\">X-Large Button</span>\n</button>";
export const Beispiel05 = {
  name: "Zusatzbeispiel KERN 2.8.2 (nbyc): die Größen, die KERNs Beispiel nicht zeigt",
  render: () => html05,
  parameters: { docs: { source: { code: html05 } } }
};

const html06 = "<button class=\"kern-btn kern-btn--small kern-btn--secondary\">\n  <span class=\"kern-label\">Small Secondary</span>\n</button>\n<button class=\"kern-btn kern-btn--large kern-btn--secondary\">\n  <span class=\"kern-label\">Large Secondary</span>\n</button>\n<button class=\"kern-btn kern-btn--x-large kern-btn--tertiary\">\n  <span class=\"kern-label\">X-Large Tertiary</span>\n</button>";
export const Beispiel06 = {
  name: "Zusatzbeispiel KERN 2.8.2 (nbyc): dieselben Größen als Secondary und Tertiary",
  render: () => html06,
  parameters: { docs: { source: { code: html06 } } }
};
