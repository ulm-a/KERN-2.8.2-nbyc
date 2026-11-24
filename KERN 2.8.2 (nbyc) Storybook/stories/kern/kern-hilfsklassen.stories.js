/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Layout/Hilfsklassen",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-hilfsklassen", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/layout/hilfsklassen", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Übersicht der Hilfsklassen für Layout und Abstände.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-flex` | Baustein |\n| `kern-align-items-center` | Baustein |\n| `kern-justify-content-between` | Baustein |\n| `kern-flex-row` | Baustein |\n| `kern-flex-col-md` | Baustein |\n| `kern-order-2` | Baustein |\n| `kern-order-first-sm` | Baustein |\n| `kern-order-3` | Baustein |\n| `kern-order-2-sm` | Baustein |\n| `kern-order-1` | Baustein |\n| `kern-order-last-sm` | Baustein |\n| `kern-grid` | Baustein |\n| `kern-grid-cols-3` | Baustein |\n| `kern-gap-sm` | Baustein |\n| `kern-gap-xl-md` | Baustein |\n| `kern-col-2` | Baustein |\n| `kern-col-4` | Baustein |\n| `kern-col-12` | Baustein |\n| `kern-col-6-sm` | Baustein |\n| `kern-col-4-md` | Baustein |\n| `kern-grid-cols-12` | Baustein |\n| `kern-col-6` | Baustein |\n| `kern-grid-cols-6` | Baustein |\n| `kern-col-start-2` | Baustein |\n| `kern-col-start-5` | Baustein |\n| `kern-col-end-1` | Baustein |\n| `kern-col-3` | Baustein |\n| `kern-col-auto` | Baustein |\n| `kern-grid-cols-2` | Baustein |\n| `kern-gap-md` | Baustein |\n| `kern-gap-xs` | Baustein |\n| `kern-align-self-start` | Baustein |\n| `kern-align-self-end` | Baustein |\n| `kern-body` | Baustein |\n| `kern-gap-xxs` | Baustein |\n| `kern-gap-lg` | Baustein |\n| `kern-gap-xl` | Baustein |\n| `kern-grid-rows-2` | Baustein |\n| `kern-gap-xxs-sm` | Baustein |\n| `kern-gap-xs-xl` | Baustein |\n| `kern-gap-xl-xxl` | Baustein |\n| `kern-my-md` | Baustein |\n| `kern-p-lg` | Baustein |\n| `kern-p-sm` | Baustein |\n| `kern-p-lg-md` | Baustein |\n| `kern-mx-auto` | Baustein |\n| `kern-stack` | Baustein |\n| `kern-stack-lg` | Baustein |\n| `kern-stack-sm` | Baustein |\n| `kern-stack-none` | Baustein |\n| `kern-stack-xl` | Baustein |\n| `kern-stack-none-md` | Baustein |\n| `kern-stack-xs` | Baustein |\n| `kern-stack-xl-lg` | Baustein |\n| `kern-sr-only` | Baustein |\n| `kern-block` | Baustein |\n| `kern-hidden-md` | Baustein |\n| `kern-sr-only-mobile` | Baustein |\n| `kern-aspect-square` | Baustein |\n| `kern-aspect-video` | Baustein |\n| `kern-aspect-auto` | Baustein |\n| `kern-overflow-auto` | Baustein |\n| `kern-boby` | Baustein |\n| `kern-overflow-hidden` | Baustein |\n| `kern-overflow-y-scroll` | Baustein |\n| `kern-overflow-visible` | Baustein |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| kern-sr-only nur für zusätzliche Hinweise | Anwendung |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-sr-only` | Nur für Hilfsmittel | Screen reader only |\n| `kern-flex` | Hilfsklassen | Utility Classes |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/layout/hilfsklassen>\n\n---\n\n### English — Utility classes\n\nOverview of the utility classes for layout and spacing.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-flex` | Baustein |\n| `kern-align-items-center` | Baustein |\n| `kern-justify-content-between` | Baustein |\n| `kern-flex-row` | Baustein |\n| `kern-flex-col-md` | Baustein |\n| `kern-order-2` | Baustein |\n| `kern-order-first-sm` | Baustein |\n| `kern-order-3` | Baustein |\n| `kern-order-2-sm` | Baustein |\n| `kern-order-1` | Baustein |\n| `kern-order-last-sm` | Baustein |\n| `kern-grid` | Baustein |\n| `kern-grid-cols-3` | Baustein |\n| `kern-gap-sm` | Baustein |\n| `kern-gap-xl-md` | Baustein |\n| `kern-col-2` | Baustein |\n| `kern-col-4` | Baustein |\n| `kern-col-12` | Baustein |\n| `kern-col-6-sm` | Baustein |\n| `kern-col-4-md` | Baustein |\n| `kern-grid-cols-12` | Baustein |\n| `kern-col-6` | Baustein |\n| `kern-grid-cols-6` | Baustein |\n| `kern-col-start-2` | Baustein |\n| `kern-col-start-5` | Baustein |\n| `kern-col-end-1` | Baustein |\n| `kern-col-3` | Baustein |\n| `kern-col-auto` | Baustein |\n| `kern-grid-cols-2` | Baustein |\n| `kern-gap-md` | Baustein |\n| `kern-gap-xs` | Baustein |\n| `kern-align-self-start` | Baustein |\n| `kern-align-self-end` | Baustein |\n| `kern-body` | Baustein |\n| `kern-gap-xxs` | Baustein |\n| `kern-gap-lg` | Baustein |\n| `kern-gap-xl` | Baustein |\n| `kern-grid-rows-2` | Baustein |\n| `kern-gap-xxs-sm` | Baustein |\n| `kern-gap-xs-xl` | Baustein |\n| `kern-gap-xl-xxl` | Baustein |\n| `kern-my-md` | Baustein |\n| `kern-p-lg` | Baustein |\n| `kern-p-sm` | Baustein |\n| `kern-p-lg-md` | Baustein |\n| `kern-mx-auto` | Baustein |\n| `kern-stack` | Baustein |\n| `kern-stack-lg` | Baustein |\n| `kern-stack-sm` | Baustein |\n| `kern-stack-none` | Baustein |\n| `kern-stack-xl` | Baustein |\n| `kern-stack-none-md` | Baustein |\n| `kern-stack-xs` | Baustein |\n| `kern-stack-xl-lg` | Baustein |\n| `kern-sr-only` | Baustein |\n| `kern-block` | Baustein |\n| `kern-hidden-md` | Baustein |\n| `kern-sr-only-mobile` | Baustein |\n| `kern-aspect-square` | Baustein |\n| `kern-aspect-video` | Baustein |\n| `kern-aspect-auto` | Baustein |\n| `kern-overflow-auto` | Baustein |\n| `kern-boby` | Baustein |\n| `kern-overflow-hidden` | Baustein |\n| `kern-overflow-y-scroll` | Baustein |\n| `kern-overflow-visible` | Baustein |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| kern-sr-only only for additional notes |  |\n" } }
  }
};

const html01 = "<div class=\"kern-flex kern-align-items-center kern-justify-content-between\">\n    <div>Start</div>\n    <div>Mitte</div>\n    <div>Ende</div>\n  </div>";
export const Beispiel01 = {
  name: "Ausrichtung (Justify & Align)",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};

const html02 = "<div class=\"kern-flex kern-flex-row kern-flex-col-md kern-align-items-center\">\n    <div>Item 1 (Mobil: Row, MD: Col)</div>\n    <div>Item 2</div>\n    <div>Item 3</div>\n  </div>";
export const Beispiel02 = {
  name: "Ausrichtung (Justify & Align)",
  render: () => html02,
  parameters: { docs: { source: { code: html02 } } }
};

const html03 = "<div class=\"kern-flex kern-align-items-center kern-justify-content-between\">\n    <div class=\"kern-order-2 kern-order-first-sm\">A (Mobil: 2, SM: 1)</div>\n    <div class=\"kern-order-3 kern-order-2-sm\">B (Mobil: 3, SM: 2)</div>\n    <div class=\"kern-order-1 kern-order-last-sm\">C (Mobil: 1 SM: 3)</div>\n  </div>";
export const Beispiel03 = {
  name: "Order",
  render: () => html03,
  parameters: { docs: { source: { code: html03 } } }
};

const html04 = "<!-- Grid mit 3 Spalten und kleinem Abstand, größer ab md -->\n  <div class=\"kern-grid kern-grid-cols-3 kern-gap-sm kern-gap-xl-md\">\n    <div>Item 1</div>\n    <div>Item 2</div>\n    <div>Item 3</div>\n  </div>";
export const Beispiel04 = {
  name: "Spalten-Platzierung (Items)",
  render: () => html04,
  parameters: { docs: { source: { code: html04 } } }
};

const html05 = "<div class=\"kern-grid kern-grid-cols-3 kern-gap-sm\">\n    <div class=\"kern-col-2\">Item 1 (Span 2)</div>\n    <div>Item 2</div>\n    <div>Item 3</div>\n    <div class=\"kern-col-2\">Item 4 (Span 2)</div>\n  </div>";
export const Beispiel05 = {
  name: "Spalten-Platzierung (Items)",
  render: () => html05,
  parameters: { docs: { source: { code: html05 } } }
};

const html06 = "<div class=\"kern-grid\">\n    <div class=\"kern-col-4\">.kern-col-4</div>\n    <div class=\"kern-col-4\">.kern-col-4</div>\n    <div class=\"kern-col-4\">.kern-col-4</div>\n    <div class=\"kern-col-4\">.kern-col-4</div>\n    <div class=\"kern-col-4\">.kern-col-4</div>\n  </div>";
export const Beispiel06 = {
  name: "Drei Spalten Layout",
  render: () => html06,
  parameters: { docs: { source: { code: html06 } } }
};

const html07 = "<div class=\"kern-grid kern-gap-sm\">\n    <div class=\"kern-col-12 kern-col-6-sm kern-col-4-md\">\n      .kern-col-12 .kern-col-6-sm .kern-col-4-md\n    </div>\n    <div class=\"kern-col-12 kern-col-6-sm kern-col-4-md\">\n      .kern-col-12 .kern-col-6-sm .kern-col-4-md\n    </div>\n    <div class=\"kern-col-12 kern-col-6-sm kern-col-4-md\">\n      .kern-col-12 .kern-col-6-sm .kern-col-4-md\n    </div>\n    <div class=\"kern-col-12 kern-col-6-sm kern-col-4-md\">\n      .kern-col-12 .kern-col-6-sm .kern-col-4-md\n    </div>\n  </div>";
export const Beispiel07 = {
  name: "Responsive Anpassung",
  render: () => html07,
  parameters: { docs: { source: { code: html07 } } }
};

const html08 = "<div class=\"kern-grid kern-grid-cols-12 kern-gap-sm\">\n    <!-- 4 Items à 6 Spalten = 24 Spalten = 2 Zeilen -->\n    <div class=\"kern-col-6\">.kern-col-6</div>\n    <div class=\"kern-col-6\">.kern-col-6</div>\n    <div class=\"kern-col-6\">.kern-col-6</div>\n    <div class=\"kern-col-6\">.kern-col-6</div>\n  </div>";
export const Beispiel08 = {
  name: "3. Wrapping",
  render: () => html08,
  parameters: { docs: { source: { code: html08 } } }
};

const html09 = "<div class=\"kern-grid kern-grid-cols-6 kern-gap-sm\">\n    <div class=\"kern-col-2 kern-col-start-2\">.kern-col-start-2</div>\n    <div class=\"kern-col-start-5 kern-col-end-1\">.kern-col-start-5</div>\n  </div>";
export const Beispiel09 = {
  name: "4. Positionierung (Starts & Ends)",
  render: () => html09,
  parameters: { docs: { source: { code: html09 } } }
};

const html10 = "<div class=\"kern-grid kern-grid-cols-12 kern-gap-sm\">\n    <div class=\"kern-col-3\">.kern-col-3</div>\n    <div class=\"kern-col-auto\">.kern-col-auto</div>\n    <div class=\"kern-col-3\">.kern-col-3</div>\n  </div>";
export const Beispiel10 = {
  name: "5. Automatische Spalten (Auto Columns)",
  render: () => html10,
  parameters: { docs: { source: { code: html10 } } }
};

const html11 = "<div class=\"kern-grid kern-grid-cols-2 kern-gap-md\">\n    <div>Spalte 1</div>\n    <div class=\"kern-grid kern-grid-cols-2 kern-gap-xs\">\n      <div>Nested 1</div>\n      <div>Nested 2</div>\n    </div>\n  </div>";
export const Beispiel11 = {
  name: "6. Verschachtelung (Nesting)",
  render: () => html11,
  parameters: { docs: { source: { code: html11 } } }
};

const html12 = "<!-- Container Level -->\n  <div class=\"kern-grid kern-grid-cols-3 kern-gap-sm kern-align-items-center\">\n    <div>Default (Center)</div>\n    <!-- Item Level Overrides -->\n    <div class=\"kern-align-self-start\">.kern-align-self-start</div>\n    <div class=\"kern-align-self-end\">.kern-align-self-end</div>\n  </div>";
export const Beispiel12 = {
  name: "7. Ausrichtung (Alignment)",
  render: () => html12,
  parameters: { docs: { source: { code: html12 } } }
};

const html13 = "<p class=\"kern-body\">Beispiel: None (Default)</p>\n  <div class=\"kern-flex\">\n    <div>1</div>\n    <div>3</div>\n    <div>2</div>\n  </div>\n\n  <p class=\"kern-body\">Beispiel: 2x-small</p>\n  <div class=\"kern-flex kern-gap-xxs\">\n    <div>1</div>\n    <div>2</div>\n    <div>3</div>\n  </div>\n\n  <p class=\"kern-body\">Beispiel: x-small</p>\n  <div class=\"kern-flex kern-gap-xs\">\n    <div>1</div>\n    <div>2</div>\n    <div>3</div>\n  </div>\n\n  <p class=\"kern-body\">Beispiel: small</p>\n  <div class=\"kern-flex kern-gap-sm\">\n    <div>1</div>\n    <div>2</div>\n    <div>3</div>\n  </div>\n\n  <p class=\"kern-body\">Beispiel: Default</p>\n  <div class=\"kern-flex kern-gap-md\">\n    <div>1</div>\n    <div>2</div>\n    <div>3</div>\n  </div>\n\n  <p class=\"kern-body\">Beispiel: Large</p>\n  <div class=\"kern-flex kern-gap-lg\">\n    <div>1</div>\n    <div>2</div>\n    <div>3</div>\n  </div>\n\n  <p class=\"kern-body\">Beispiel: X-Large</p>\n  <div class=\"kern-flex kern-gap-xl\">\n    <div>1</div>\n    <div>2</div>\n    <div>3</div>\n  </div>";
export const Beispiel13 = {
  name: "Gap (Abstände)",
  render: () => html13,
  parameters: { docs: { source: { code: html13 } } }
};

const html14 = "<div\n    class=\"kern-grid kern-grid-cols-2 kern-grid-rows-2 kern-gap-md kern-gap-xxs-sm kern-gap-xl-md kern-gap-xs-xl kern-gap-xl-xxl\"\n  >\n    <div>1</div>\n    <div>2</div>\n    <div>3</div>\n    <div>4</div>\n  </div>";
export const Beispiel14 = {
  name: "Gap (Abstände)",
  render: () => html14,
  parameters: { docs: { source: { code: html14 } } }
};

const html15 = "<!-- Außenabstand (Margin) oben und unten: Mittel (16px) -->\n  <div class=\"kern-my-md\">Inhalt mit vertikalem Margin</div>\n\n  <!-- Innenabstand (Padding) überall: Groß (24px) -->\n  <div class=\"kern-p-lg\">Inhalt mit viel Padding</div>";
export const Beispiel15 = {
  name: "Verfügbare Breakpoints",
  render: () => html15,
  parameters: { docs: { source: { code: html15 } } }
};

const html16 = "<div class=\"kern-p-sm kern-p-lg-md\">\n    Responsive Padding: Klein (8px) auf Mobile Groß (24px) ab Tablet.\n  </div>";
export const Beispiel16 = {
  name: "Verfügbare Breakpoints",
  render: () => html16,
  parameters: { docs: { source: { code: html16 } } }
};

const html17 = "<div class=\"kern-mx-auto\">Zentriertes Element (50% Breite)</div>";
export const Beispiel17 = {
  name: "Verfügbare Breakpoints",
  render: () => html17,
  parameters: { docs: { source: { code: html17 } } }
};

const html18 = "<div class=\"kern-stack kern-stack-lg\">\n    <div>Item Oben</div>\n    <div>Item Mitte</div>\n    <div>Item Unten</div>\n  </div>";
export const Beispiel18 = {
  name: "Stack",
  render: () => html18,
  parameters: { docs: { source: { code: html18 } } }
};

const html19 = "<div class=\"kern-stack\">\n    <p class=\"kern-body\">Zeile 1 (stack)</p>\n    <p class=\"kern-body\">Zeile 2 (stack)</p>\n    <div class=\"kern-stack-sm\">\n      <p class=\"kern-body\">Zeile 3-1 (stack-sm)</p>\n      <p class=\"kern-body\">Zeile 3-2 (stack-sm)</p>\n    </div>\n    <p class=\"kern-body\">Zeile 4 (stack)</p>\n    <p class=\"kern-body\">Zeile 5 (stack)</p>\n    <div class=\"kern-stack-lg\">\n      <p class=\"kern-body\">Zeile 6-1 (stack-lg)</p>\n      <p class=\"kern-body\">Zeile 6-2 (stack-lg)</p>\n      <div class=\"kern-stack-sm\">\n        <p class=\"kern-body\">Zeile 6-3-1 (stack-sm)</p>\n        <p class=\"kern-body\">Zeile 6-3-2 (stack-sm)</p>\n      </div>\n      <p class=\"kern-body\">Zeile 6-4 (stack-lg)</p>\n      <p class=\"kern-body\">Zeile 6-5 (stack-lg)</p>\n      <div class=\"kern-stack-none\">\n        <p class=\"kern-body\">Zeile 6-6-1 (stack-none)</p>\n        <p class=\"kern-body\">Zeile 6-6-2 (stack-none)</p>\n      </div>\n      <p class=\"kern-body\">Zeile 6-7 (stack-lg)</p>\n      <p class=\"kern-body\">Zeile 6-8 (stack-lg)</p>\n      <div class=\"kern-stack-xl\">\n        <p class=\"kern-body\">Zeile 6-9-1 (stack-xl)</p>\n        <p class=\"kern-body\">Zeile 6-9-2 (stack-xl)</p>\n      </div>\n      <p class=\"kern-body\">Zeile 6-10 (stack-lg)</p>\n      <p class=\"kern-body\">Zeile 6-11 (stack-lg)</p>\n    </div>\n    <p class=\"kern-body\">Zeile 7 (stack)</p>\n    <p class=\"kern-body\">Zeile 8 (stack)</p>\n  </div>";
export const Beispiel19 = {
  name: "Verschachtelter Stack",
  render: () => html19,
  parameters: { docs: { source: { code: html19 } } }
};

const html20 = "<div class=\"kern-stack kern-stack-none-md\">\n    <p class=\"kern-body\">kern-stack kern-stack-none-md</p>\n    <p class=\"kern-body\">kern-stack kern-stack-none-md</p>\n    <p class=\"kern-body\">kern-stack kern-stack-none-md</p>\n  </div>\n\n  <div class=\"kern-stack kern-stack-xs kern-stack-xl-lg\">\n    <p class=\"kern-body\">kern-stack-xs kern-stack-xl-lg</p>\n    <p class=\"kern-body\">kern-stack-xs kern-stack-xl-lg</p>\n    <p class=\"kern-body\">kern-stack-xs kern-stack-xl-lg</p>\n  </div>";
export const Beispiel20 = {
  name: "Responsive Stack",
  render: () => html20,
  parameters: { docs: { source: { code: html20 } } }
};

const html21 = "<div>\n    <!-- Nur für Screenreader -->\n    <span class=\"kern-sr-only\">Wichtige Info für seheingeschränkte Personen</span>\n\n    <!-- Visuelle Demo -->\n    <div class=\"kern-block\">Immer sichtbar</div>\n\n    <div class=\"kern-hidden-md\">Sichtbar auf Mobile, versteckt ab MD.</div>\n\n    <div class=\"kern-sr-only-mobile\">Versteckt auf Mobile (sr-only) sichtbar auf Desktop.</div>\n  </div>";
export const Beispiel21 = {
  name: "Visibility & Display",
  render: () => html21,
  parameters: { docs: { source: { code: html21 } } }
};

const html22 = "<div class=\"kern-grid kern-grid-cols-3 kern-gap-md\">\n    <div class=\"kern-aspect-square\">Square (1:1)</div>\n    <div class=\"kern-aspect-video\">Video (16:9)</div>\n    <div class=\"kern-aspect-auto\">Auto</div>\n  </div>";
export const Beispiel22 = {
  name: "Aspect Ratio mit Beispielen",
  render: () => html22,
  parameters: { docs: { source: { code: html22 } } }
};

const html23 = "<div class=\"kern-grid kern-grid-cols-2 kern-gap-md\">\n    <div class=\"kern-overflow-auto\">\n      <p class=\"kern-boby\" style=\"width: 120%; height: 120px\">\n        .kern-overflow-<strong>auto</strong>: Scrollbars erscheinen nur, weil der Text zu lang ist.\n      </p>\n    </div>\n\n    <div class=\"kern-overflow-hidden\">\n      <p class=\"kern-boby\" style=\"width: 120%; height: 120px\">\n        .kern-overflow-<strong>hidden</strong>: Dieser Text wird abgeschnitten, es gibt keine\n        Scrollbars.\n      </p>\n    </div>\n\n    <div class=\"kern-overflow-y-scroll\">\n      <p class=\"kern-boby\" style=\"width: 90%; height: 120px\">\n        .kern-overflow-y-<strong>scroll</strong>: Hier gibt es nur eine vertikale Scrollbar.\n      </p>\n    </div>\n\n    <div class=\"kern-overflow-visible\">\n      <p class=\"kern-boby\" style=\"width: 120%; height: 120px\">\n        .kern-overflow-<strong>visible</strong>: Inhalt ragt über die Grenzen hinaus.\n      </p>\n    </div>\n  </div>";
export const Beispiel23 = {
  name: "Overflow",
  render: () => html23,
  parameters: { docs: { source: { code: html23 } } }
};
