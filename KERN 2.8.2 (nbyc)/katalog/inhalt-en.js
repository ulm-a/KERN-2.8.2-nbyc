/* Englische Katalogtexte (E10, M87) — von Hand gepflegt, je Eintrag-ID.
   Gilt für die eigenen Einträge (inhalt.js) und die KERN-Einträge (kern-inhalt.js).
   Felder wie im Deutschen: name, zweck, wann[], nicht[], barriere[], bsp[{titel, hinweis}],
   tasten[[Taste, Wirkung, Ansage]]; klassen[] nur, wo die Bedeutung nicht Baustein/
   Bestandteil/Variante ist; pflichten[[Pflicht, Anmerkung]] (Stand übersetzt die Seite);
   herkunft nur, wo eigen. Prüfung 17 (pruefe.py) prüft Vollständigkeit und Zeilenzahl.
   Englisch: britische Schreibung, KERNs Ton (kurz, aktiv). Die Beispiele selbst bleiben
   deutsche Musterdaten. */
window.KATALOG_EN = {
 "farbe": {
  "name": "Colour",
  "zweck": "Three layers: primitives without meaning, semantics with meaning, component tokens per component. Components use only the semantic layer.",
  "wann": [
   "Always through the semantic names — never through primitives."
  ],
  "nicht": [
   "Never write a colour value directly. Every mode breaks if you do."
  ],
  "barriere": [
   "All pairs reach 4.5 to 1 for text and 3 to 1 for borders — in all four modes.",
   "Colour is never the only carrier of meaning. Every state also has a sign or a word."
  ],
  "bsp": [
   {
    "titel": "Semantic surfaces and texts",
    "hinweis": "Switch the mode in the bar at the top — same names, different values."
   }
  ],
  "tasten": [],
  "klassen": [
   "Surfaces",
   "Text colours",
   "Action colour and what sits on it",
   "Feedback",
   "the same roles per layer (.kern-level-1/-2) — for own components"
  ]
 },
 "dichte": {
  "name": "Density levels (settings page)",
  "zweck": "Three fixed levels for control height and table rows — compact, normal (= KERN), spacious. Try them out and download them as kern-anpassung.css.",
  "wann": [
   "For specialist applications with long tables (compact) or for people who need larger targets (spacious).",
   "Only after weighing it up: KERN advises leaving typography, colours and spacing as they are."
  ],
  "nicht": [
   "Not for citizen-facing forms — KERN (normal) stays there.",
   "No values of your own: the levels only use values from KERN’s scale; colours can never be set."
  ],
  "barriere": [
   "Even compact stays above WCAG 2.5.8: 40 px instead of the required 24 px.",
   "The status line shows whether the level deviates from KERN; the change is announced (central announcement, M61).",
   "The export is locked in the default setting (aria-disabled) — there is nothing to deviate from."
  ],
  "bsp": [
   {
    "titel": "Choose a level, preview, download",
    "hinweis": "The values live only in 01b-erweiterung.css (section 7); this page reads them from there. The file is included AFTER kern-neu.css."
   }
  ],
  "tasten": [
   [
    "← → in the level choice",
    "selects the level (native)",
    "“Level … — deviates from KERN.”"
   ],
   [
    "Enter on Export",
    "downloads kern-anpassung.css; locked in the default setting",
    ""
   ]
  ],
  "klassen": [
   "Level for one area or the whole page (<html>)",
   "Choice group → preview",
   "Download kern-anpassung.css"
  ]
 },
 "sprache": {
  "name": "Language and text",
  "zweck": "How text in interfaces sounds. KERN’s “Sprache und Tonalität” (language and tone) applies — this page only lists the rules for text inside components: error message, label and hint, button and link, date and number.",
  "herkunft": "Foundation — refers to KERN’s “Sprache und Tonalität”, rules from KERN (V14, V16)",
  "wann": [
   "For every text in an interface: label, hint, error message, button, message, heading.",
   "KERN’s basic rules (original linked): plain language, at most 20 words per sentence, main clauses with at most two subordinate clauses, active voice instead of nominal style, formal address (“Sie”), clear and friendly — never servile."
  ],
  "nicht": [
   "No second guideline next to KERN: what KERN rules on is stated there and is not copied here.",
   "Easy-to-read language (Leichte Sprache) is not the same as plain language: it needs its own, completely rewritten texts (KERN: decide case by case)."
  ],
  "barriere": [
   "Button and link texts must make sense without their surroundings (WCAG 2.4.4, 2.4.6): screen readers list them one by one.",
   "The error message at the field and the link in the error summary use the same wording; the message is linked to the field via aria-describedby.",
   "The kind of message is stated as a word in the text (hint, error), not only by colour or icon.",
   "The page language goes in the lang attribute. The system texts of kern-neu.js (announcements, calendar, error summary) follow it: German or English."
  ],
  "bsp": [
   {
    "titel": "Style — examples from KERN"
   },
   {
    "titel": "Error message at the field (KERN, V14)",
    "hinweis": "KERN: constructive, clear, concise, empathetic — one cause and what to do about it. The same wording appears at the field and in the error summary. Show it only on submit, not on every keystroke."
   },
   {
    "titel": "Error messages — do and don’t"
   },
   {
    "titel": "Label, hint, optional (KERN, V14)",
    "hinweis": "Label without a colon, on one line. Required is the rule and is not marked; the few voluntary fields carry “- Optional” (no asterisk). The hint is a full sentence, without links."
   },
   {
    "titel": "Button and link, date and number"
   }
  ],
  "tasten": [
   [
    "Tab",
    "reaches the field",
    "label, “Optional”, hint and error message"
   ]
  ],
  "klassen": [
   "Label, without a colon",
   "“- Optional” for voluntary fields",
   "Hint, full sentence",
   "Error message at the field"
  ]
 },
 "segmente": {
  "name": "Segmented control",
  "zweck": "Switches between two to four mutually exclusive views of the SAME data.",
  "wann": [
   "List versus cards versus timeline.",
   "Light versus dark."
  ],
  "nicht": [
   "When the CONTENT changes — that is what tabs are for.",
   "From five options on: use a select field."
  ],
  "barriere": [
   "State via aria-pressed, not via a class alone.",
   "In Windows contrast mode the system colour Highlight carries the state."
  ],
  "bsp": [
   {
    "titel": "Three views"
   }
  ],
  "tasten": [
   [
    "Tab",
    "reaches each option",
    ""
   ],
   [
    "Enter, Space",
    "selects this one, deselects the others",
    "“pressed” / “not pressed”"
   ]
  ],
  "klassen": [
   "Frame",
   "per view",
   "State"
  ]
 },
 "schalter": {
  "name": "Switch",
  "zweck": "Turns a setting on or off immediately.",
  "wann": [
   "When the effect is IMMEDIATE and nothing is submitted."
  ],
  "nicht": [
   "In a form with a submit button — a checkbox belongs there. Otherwise nobody knows whether the setting already applies."
  ],
  "barriere": [
   "The native checkbox stays underneath — keyboard and assistive technology work without extra effort.",
   "The state lives in the field itself, not only in the position of the knob.",
   "Disabled as in KERN (E4): aria-disabled=\"true\" and KERN’s opacity token — stays reachable and readable; kern-neu.js blocks operation."
  ],
  "bsp": [
   {
    "titel": "On, off, disabled"
   }
  ],
  "tasten": [
   [
    "Tab",
    "reaches the switch",
    ""
   ],
   [
    "Space",
    "toggles (native)",
    "“checked” / “not checked”"
   ]
  ],
  "klassen": [
   "Wrapper",
   "the native field, invisible",
   "Track",
   "Knob"
  ]
 },
 "regler": {
  "name": "Slider",
  "zweck": "Selects a value from a range when the approximate position matters more than the exact number.",
  "wann": [
   "Time, quantity, share — when the range should be visible."
  ],
  "nicht": [
   "When an exact value is needed. Use a number field.",
   "Never without the number next to it."
  ],
  "barriere": [
   "Native <input type=range>: arrow keys, Home, End and Page Up/Down work without extra effort.",
   "The value is shown as a number next to it and connected via <output>.",
   "Thumb 32 pixels (like KERN’s radio button), target area as tall as KERN’s fields (48, 40 in compact density)."
  ],
  "bsp": [
   {
    "titel": "With value display",
    "hinweis": "Arrow keys change the value step by step, Home/End jump to the ends. Thumb like KERN’s radio button (32 px), track 4 px — KERN tokens only."
   }
  ],
  "tasten": [
   [
    "← → ↑ ↓",
    "one step (native)",
    "new value"
   ],
   [
    "Page Up / Page Down",
    "large step (native)",
    "new value"
   ],
   [
    "Home / End",
    "start / end (native)",
    "new value"
   ]
  ],
  "klassen": [
   "the native field",
   "Label and value",
   "the number",
   "Start and end",
   "ID of the output field"
  ]
 },
 "combobox": {
  "name": "Combo box",
  "zweck": "Select field with search. For long lists.",
  "wann": [
   "From about twelve entries. Public authorities have lists with hundreds."
  ],
  "nicht": [
   "Below eight entries — a select field is simpler there."
  ],
  "barriere": [
   "role=combobox on the field, role=listbox on the list, role=option for each entry.",
   "The active entry is reported via aria-activedescendant — focus stays in the field.",
   "“No entry found” must be visible, otherwise the list seems broken."
  ],
  "bsp": [
   {
    "titel": "Typing filters",
    "hinweis": "Typing filters, the number of matches is announced. ↓ ↑ choose (Home/End jump within the list), Enter accepts, Esc closes — a second Esc clears the field. Pattern from the WAI-ARIA Authoring Practices."
   }
  ],
  "tasten": [
   [
    "Typing",
    "filters the list",
    "“n results” after a short pause"
   ],
   [
    "↓ / ↑",
    "open the list, move",
    "active entry"
   ],
   [
    "Home / End",
    "first / last entry while one is active; otherwise the text cursor",
    ""
   ],
   [
    "Enter",
    "accepts",
    ""
   ],
   [
    "Esc",
    "closes; a second Esc clears the field",
    ""
   ]
  ],
  "klassen": [
   "Wrapper",
   "List",
   "Entry",
   "Empty message"
  ]
 },
 "fehlerliste": {
  "name": "Error summary",
  "zweck": "After submitting, collects all errors at the top of the form and links to each field.",
  "wann": [
   "After every failed submit. Always at the top of the form."
  ],
  "nicht": [
   "While typing. Show errors only on submit, not on every keystroke."
  ],
  "barriere": [
   "Status message as in KERN (V14, WCAG 4.1.3): role=alert AND focus on the summary (tabindex=-1) — otherwise nobody notices that something happened.",
   "Links move the focus into the field and bring its label into view (not just a jump to the spot).",
   "At the field, KERN’s error state: aria-invalid, message via aria-describedby (only while the error exists), classes as in KERN’s examples; groups on the fieldset.",
   "Required via aria-required on the field (check 16); for groups data-kn-required on the fieldset — aria-required is not allowed on role=group; the requirement belongs in the legend.",
   "The link text is the same as at the field. Two different wordings confuse."
  ],
  "bsp": [
   {
    "titel": "Form with validation (data-kn-validate)",
    "hinweis": "Submit it empty: the summary appears at the top and receives focus; each link moves the focus into its field. A completed field loses its error state. Complete: message “All details are complete.” (check-only: no submit)."
   }
  ],
  "tasten": [
   [
    "Enter on “Weiter”",
    "validates; focus on the summary",
    "title and links (role=alert)"
   ],
   [
    "Tab",
    "from link to link",
    ""
   ],
   [
    "Enter on a link",
    "focus into the field, label in view",
    "field with error message"
   ]
  ],
  "klassen": [
   "on the form: validates on submit (\"check-only\": validate only)",
   "Required for a group (fieldset)",
   "on the form: the spacing between the fields. Without it label, field and button stick together — KERN\u2019s fields bring no outer spacing of their own (corrected 25.11.2026)",
   "keeps the submit button at its own width; otherwise the stack pulls it across the whole row",
   "Box (hidden, role=alert)",
   "Heading (count set by the script)",
   "List of links (set by the script)",
   "the kern-error message per field"
  ]
 },
 "reiter": {
  "name": "Tabs",
  "zweck": "Switches between contents on the same level.",
  "wann": [
   "When the content changes but the place stays the same.",
   "Two to seven tabs."
  ],
  "nicht": [
   "For steps in a sequence — that is what the step indicator is for.",
   "When the contents are to be compared: show them side by side."
  ],
  "barriere": [
   "role=tablist, role=tab, role=tabpanel and aria-controls are mandatory.",
   "Only the active tab has tabindex=0 — otherwise you tab through all of them.",
   "Hide panels with hidden, not with display:none via a class."
  ],
  "bsp": [
   {
    "titel": "Three tabs",
    "hinweis": "Arrow keys switch, Home and End jump to the ends. Only the active tab is in the tab order."
   }
  ],
  "tasten": [
   [
    "← / →",
    "previous / next tab, shows its panel",
    "name of the tab, “selected”"
   ],
   [
    "Home / End",
    "first / last tab",
    ""
   ],
   [
    "Tab",
    "from the tab into the panel (without a control, the panel itself is a tab stop)",
    ""
   ]
  ],
  "klassen": [
   "wires up the group",
   "Bar",
   "a tab",
   "the content"
  ]
 },
 "seitennav": {
  "name": "Side navigation",
  "zweck": "Guides through a larger area on the left. The navigation of this catalogue is itself an example.",
  "wann": [
   "From about eight destinations.",
   "When the destinations fall into groups."
  ],
  "nicht": [
   "For fewer than five destinations — the main navigation at the top is enough."
  ],
  "barriere": [
   "<nav> with aria-label so that assistive technology can tell several navigations apart.",
   "aria-current=\"page\" on the current item — not just a class.",
   "The current item also carries a bar on the left, not just a colour."
  ],
  "bsp": [
   {
    "titel": "With groups"
   }
  ],
  "tasten": [
   [
    "Tab",
    "from entry to entry",
    ""
   ],
   [
    "Enter",
    "follows the link",
    "current entry: “current page”"
   ]
  ],
  "klassen": [
   "Wrapper",
   "Group",
   "Group heading",
   "a destination"
  ]
 },
 "schritte": {
  "name": "Step indicator",
  "zweck": "Shows where you are in a multi-step process.",
  "wann": [
   "From three steps that come in a fixed order."
  ],
  "nicht": [
   "When the order is free — that is what the task list is for."
  ],
  "barriere": [
   "<ol>, because the order carries meaning.",
   "The current step gets aria-current=\"step\".",
   "Done carries a tick, not just green."
  ],
  "bsp": [
   {
    "titel": "Four steps",
    "hinweis": "The state is in the sign AND in the attribute, not only in the colour."
   }
  ],
  "tasten": [],
  "klassen": [
   "List",
   "a step",
   "done or current",
   "the number in the circle"
  ]
 },
 "menue": {
  "name": "Overflow menu",
  "zweck": "Collects rarely used actions behind one button.",
  "wann": [
   "From four actions, most of which are rarely needed."
  ],
  "nicht": [
   "For the main action. What is used often belongs visibly on the page."
  ],
  "barriere": [
   "Pattern from the WAI-ARIA Authoring Practices (Menu Button): aria-haspopup=menu and aria-expanded on the button, role=menu, entries role=menuitem with tabindex=-1, li role=none.",
   "The button needs a name (kern-sr-only) — three dots are not text.",
   "After Esc and after an action, focus returns to the button; Tab leaves the menu and closes it.",
   "Choice menu (third example): role=menuitemradio with aria-checked — the screen reader says “selected”; the choice is also visible through a tick and semi-bold, not only through colour. The page announces the result (e.g. “11 components”) via KN.melde.",
   "kn-menu is for actions and for choosing one of a few options. For links and for filters with several ticks there is KERN’s kern-dropdown (last example) — “in progress” at KERN, so no further rules."
  ],
  "bsp": [
   {
    "titel": "Three dots",
    "hinweis": "On the button: ↓, Enter or Space open at the first entry, ↑ at the last. In the menu: ↓ ↑, Home/End, the first letter jumps, Esc closes and returns focus, Tab closes. After an action: closed, focus back on the button."
   },
   {
    "titel": "Choice menu (filter)",
    "hinweis": "Entries role=menuitemradio with aria-checked: exactly one is chosen (tick and semi-bold). The choice closes the menu and returns focus to the button; the page listens for the event “kn-menu-wahl” (detail.value), filters and announces the result via KN.melde. This is how the filter in this catalogue’s header bar works."
   },
   {
    "titel": "KERN dropdown for links (kern-dropdown)",
    "hinweis": "KERN’s dropdown (<details>, “in progress” at KERN, CSS only). Enter/Space opens, ↓ into the list, ↓ ↑ Home/End move, Esc closes and returns focus to the header."
   }
  ],
  "tasten": [
   [
    "↓, Enter, Space on the button",
    "opens, focus on the first entry",
    "“menu”"
   ],
   [
    "↑ on the button",
    "opens, focus on the last entry",
    ""
   ],
   [
    "↓ / ↑",
    "next / previous entry (wraps)",
    ""
   ],
   [
    "Home / End",
    "first / last entry",
    ""
   ],
   [
    "Letter",
    "next entry starting with it",
    ""
   ],
   [
    "Enter, Space",
    "triggers; menu closes, focus to the button",
    ""
   ],
   [
    "Esc",
    "closes, focus to the button",
    ""
   ],
   [
    "Tab",
    "closes, focus moves on",
    ""
   ],
   [
    "Enter, Space on an option",
    "selects it (aria-checked), menu closes, focus to the button",
    "“selected”; the page announces the result"
   ]
  ],
  "klassen": [
   "Anchor",
   "wires up the button",
   "Entry",
   "Destructive entry",
   "Option in a choice menu",
   "Tick of the chosen option",
   "Filter icon (extension, after Material Symbols)",
   "KERN’s dropdown (details) for links and filters with several ticks"
  ]
 },
 "seitenweiser": {
  "name": "Pagination",
  "zweck": "Pages through long result lists.",
  "wann": [
   "From about fifty entries."
  ],
  "nicht": [
   "When things must be compared — loading more is better than paging then."
  ],
  "barriere": [
   "aria-current=\"page\" on the current page.",
   "The position indicator is not decoration — it says how much is still to come."
  ],
  "bsp": [
   {
    "titel": "With position indicator"
   }
  ],
  "tasten": [
   [
    "Tab",
    "from page to page",
    ""
   ],
   [
    "Enter",
    "opens the page",
    "current one: “current page”"
   ]
  ],
  "klassen": [
   "Bar",
   "a page",
   "Text indication"
  ]
 },
 "tabelle": {
  "name": "Table: sorting, selection, sticky header",
  "zweck": "Shows records of the same kind in rows and columns. With sorting, selection, sticky header and three densities.",
  "wann": [
   "When values are to be compared column by column.",
   "Almost always in case management."
  ],
  "nicht": [
   "For layout. A table is for data, not for arrangement.",
   "On narrow devices from about five columns — cards work better there."
  ],
  "barriere": [
   "<caption> is mandatory, even if it is visible only to assistive technology.",
   "The sortable column header is a <button>, not a <th> with a click handler.",
   "aria-sort on the <th> reports the direction.",
   "Every checkbox needs its own aria-label with the row identifier."
  ],
  "bsp": [
   {
    "titel": "Sortable and selectable",
    "hinweis": "Click the column headers or reach them with the keyboard. Amounts sort numerically, not alphabetically."
   }
  ],
  "tasten": [
   [
    "Tab",
    "column headers and checkboxes in order",
    ""
   ],
   [
    "Enter on a column header",
    "sorts; again: reverses",
    "“Sorted by …, ascending / descending”"
   ],
   [
    "Space on a checkbox",
    "selects the row",
    "“n rows selected”"
   ]
  ],
  "klassen": [
   "Base (KERN)",
   "Row states and selection (extension)",
   "Header stays while scrolling (extension)",
   "Zebra stripes (KERN)",
   "sortable header (extension)",
   "right-aligned (KERN)",
   "wires up the sorting"
  ]
 },
 "zeitleiste": {
  "name": "Timeline",
  "zweck": "Shows the history of a case as one strand.",
  "wann": [
   "For procedural histories: what happened when, what is still open."
  ],
  "nicht": [
   "For lists of equal items without a time reference."
  ],
  "barriere": [
   "<ol>, because the order carries meaning.",
   "The time is given as text, not only as a position on the axis."
  ],
  "bsp": [
   {
    "titel": "Four events",
    "hinweis": "Adapts to ITS space via a container query, not to the window width. Make the window narrower — or collapse the rail."
   }
  ],
  "tasten": [],
  "klassen": [
   "List",
   "an event",
   "State",
   "enables container queries"
  ]
 },
 "leer": {
  "name": "Empty state and skeleton",
  "zweck": "“Nothing found” is a state, not an oversight. The loading skeleton shows the shape before the content arrives.",
  "wann": [
   "Whenever a list can be empty.",
   "Whenever data is loaded later."
  ],
  "nicht": [
   "Never an empty area without an explanation."
  ],
  "barriere": [
   "The empty state names the REASON and a next step.",
   "The skeleton gets aria-hidden — it has no content to read out.",
   "With reduced motion the shimmer stops, the area stays visible."
  ],
  "bsp": [
   {
    "titel": "Both"
   }
  ],
  "tasten": [],
  "klassen": [
   "Empty state",
   "Loading skeleton",
   "Shapes"
  ]
 },
 "toast": {
  "name": "Toast",
  "zweck": "Briefly confirms that something worked. Disappears on its own.",
  "wann": [
   "For confirmations that may be missed: saved, copied, sent."
  ],
  "nicht": [
   "For errors. Whoever misses them never learns about them.",
   "For anything that requires a decision — that is what the dialog is for."
  ],
  "barriere": [
   "The region is only visual; the announcement goes through the central announcement (M61, polite) — after the current sentence.",
   "No button (decision E5): the message only contains what may be missed. Anything that needs action is a persistent message (kern-alert).",
   "Eight seconds — not shorter, so that slow readers can keep up; nothing in it needs to be operated (WCAG 2.2.1)."
  ],
  "bsp": [
   {
    "titel": "Try it",
    "hinweis": "Stays for eight seconds. Not shorter — slow readers must be able to keep up."
   }
  ],
  "tasten": [
   [
    "Enter, Space on an example button",
    "shows the message; it disappears on its own after 8 s, nothing in it is operable",
    "the message text (central announcement)"
   ]
  ],
  "klassen": [
   "creates a confirmation (without type: neutral)",
   "Region with role=status"
  ]
 },
 "marke": {
  "name": "Badge and filter tag",
  "zweck": "The badge labels a state. The filter tag is clickable and toggles.",
  "wann": [
   "Badge: status of a case.",
   "Filter tag: quickly showing and hiding."
  ],
  "nicht": [
   "The badge is not a button. If it is meant to be clicked, it is a filter tag."
  ],
  "barriere": [
   "The filter tag is a <button> with aria-pressed.",
   "The selected state also carries a tick — not just colour.",
   "The badge needs no state because it is not operable."
  ],
  "bsp": [
   {
    "titel": "Both"
   }
  ],
  "tasten": [
   [
    "Tab",
    "reaches each filter tag",
    ""
   ],
   [
    "Enter, Space",
    "toggles the filter",
    "“pressed” / “not pressed”"
   ]
  ],
  "klassen": [
   "Label (KERN)",
   "Type (KERN)",
   "outline only (extension)",
   "clickable",
   "State"
  ]
 },
 "seitenrahmen": {
  "name": "Header, main navigation and footer",
  "zweck": "The frame of every page: brand and tools at the top, legal information at the bottom.",
  "wann": [
   "On every page of an application, so that each one starts and ends the same way.",
   "The main navigation only for the top-level areas — everything else belongs in the side navigation."
  ],
  "nicht": [
   "No more than seven items in the main navigation. Anything beyond that is no longer navigation but a list.",
   "Never use the footer for controls needed for work — nobody looks for them there."
  ],
  "barriere": [
   "The navigation needs an aria-label as soon as there is more than one on the page — otherwise they all have the same name.",
   "The current page gets aria-current=\"page\". Colour alone is not enough.",
   "Header and footer as <header> and <footer>: screen readers can jump via them."
  ],
  "bsp": [
   {
    "titel": "Header with brand, navigation and footer",
    "hinweis": "The header is a <header>, the footer a <footer> — the role comes from the element, not from a class."
   },
   {
    "titel": "With KERN’s header bar (public bodies only)",
    "hinweis": "KERN: header bar at the very top, unchanged, never sticky, aligned left with the content. Only for websites of public bodies — an internal specialist application does not need it. The skip link stays the first element of the page."
   }
  ],
  "tasten": [
   [
    "Tab",
    "brand, main areas, footer links in order",
    ""
   ],
   [
    "Enter",
    "follows the link",
    "current area: “current page”"
   ]
  ],
  "klassen": [
   "Header bar",
   "Authority and application",
   "everything to the right of it",
   "Navigation list",
   "an item",
   "Footer area",
   "multi-column",
   "Column heading",
   "Link list",
   "Line at the very bottom"
  ]
 },
 "krumen": {
  "name": "Breadcrumbs",
  "zweck": "Shows where you are and how to get back.",
  "wann": [
   "As soon as an application is more than two levels deep.",
   "Especially for cases: work queue → case → document."
  ],
  "nicht": [
   "Not as a replacement for the browser’s back button.",
   "Not when the application is flat. A single crumb is an embarrassment."
  ],
  "barriere": [
   "An <ol>, not a <ul> — the order carries the meaning.",
   "The last item is NOT a link. It carries aria-current=\"page\".",
   "The separators come from the CSS, not from the text — otherwise the screen reader reads them out."
  ],
  "bsp": [
   {
    "titel": "Three levels"
   }
  ],
  "tasten": [
   [
    "Tab",
    "from link to link",
    ""
   ],
   [
    "Enter",
    "follows the link",
    "last one: “current page”"
   ]
  ],
  "klassen": [
   "the list, as <ol>",
   "where you are"
  ]
 },
 "sprungmarke": {
  "name": "Skip link",
  "zweck": "Lets keyboard users skip the navigation.",
  "wann": [
   "On every page. As the very first element in <body>."
  ],
  "nicht": [
   "Never leave it out. Without it, anyone working with the keyboard has to tab through the whole navigation again on every page."
  ],
  "barriere": [
   "It must be the FIRST focusable element of the page.",
   "It must not be hidden permanently (no display:none) — otherwise the keyboard cannot reach it. KERN 2.8.2 (nbyc) moves it out of view with transform.",
   "Its colour pair deliberately does NOT depend on the focus helper ring: that is black in dark mode. The error was in the system until 12.08.2026 and gave 1.31 to 1."
  ],
  "bsp": [
   {
    "titel": "Skip link",
    "hinweis": "It becomes visible only with keyboard focus. Tab to it — then it appears at the top left."
   }
  ],
  "tasten": [
   [
    "Tab (first thing on the page)",
    "shows the skip link",
    ""
   ],
   [
    "Enter",
    "jumps to the content",
    ""
   ]
  ],
  "klassen": [
   "the link",
   "points to the id of the main area"
  ]
 },
 "teilknopf": {
  "name": "Split button",
  "zweck": "One main action with a menu of the rarer ones next to it.",
  "wann": [
   "When there is one obviously most frequent action and two to four rarer ones.",
   "Example: “Approve” as the main action, next to it “Approve and print”, “Approve without notice”."
  ],
  "nicht": [
   "When all actions are equally important — then place them side by side.",
   "When there are more than five. Then it is an overflow menu."
  ],
  "barriere": [
   "The second button needs an aria-label — an arrow alone tells a screen reader nothing.",
   "aria-haspopup and aria-expanded belong on the menu button.",
   "Both buttons must be reachable individually with the keyboard."
  ],
  "bsp": [
   {
    "titel": "Approve with variants"
   }
  ],
  "tasten": [
   [
    "Tab",
    "first the main action, then the arrow",
    ""
   ],
   [
    "Enter, Space on the main action",
    "triggers it",
    ""
   ],
   [
    "↓, Enter, Space on the arrow",
    "opens the menu; then as the overflow menu",
    "“menu”, first entry"
   ]
  ],
  "klassen": [
   "the bracket around both",
   "both parts are real KERN buttons",
   "wires up the menu part",
   "announces the menu"
  ]
 },
 "werkzeuge": {
  "name": "Toolbar",
  "zweck": "Collects search, filters and actions above a list or table.",
  "wann": [
   "Above every table that can be searched, filtered or edited as a whole."
  ],
  "nicht": [
   "Not as a dump for everything that fits nowhere else.",
   "Not with more than six elements — beyond that nobody finds anything."
  ],
  "barriere": [
   "The divider is purely visual and stays empty — no text in it.",
   "Filter tags are buttons with aria-pressed, not links.",
   "The search field needs a label, even if it is invisible (kern-sr-only)."
  ],
  "bsp": [
   {
    "titel": "Search, filter and action"
   }
  ],
  "tasten": [
   [
    "Tab",
    "field, button, filters in order — the bar is a group, not role=toolbar, so no arrow keys",
    ""
   ],
   [
    "Enter, Space on a filter",
    "toggles it",
    "“pressed” / “not pressed”"
   ]
  ],
  "klassen": [
   "the bar",
   "vertical line",
   "filter that can be switched on and off"
  ]
 },
 "zahlfeld": {
  "name": "Number stepper",
  "zweck": "Enter a number, with buttons to step it.",
  "wann": [
   "For small, manageable quantities: number of children, number of instalments.",
   "When plausible values are close together."
  ],
  "nicht": [
   "For amounts and years. Nobody who wants to type 24,000 euros clicks their way there — use a normal field.",
   "For file numbers. That is not a number but an identifier."
  ],
  "barriere": [
   "Both buttons need an aria-label — “+” and “−” alone are silent for a screen reader.",
   "min and max belong on the field, not only in the validation.",
   "The field must also be typeable without the buttons."
  ],
  "bsp": [
   {
    "titel": "Number of children"
   }
  ],
  "tasten": [
   [
    "Tab",
    "−, field, + in order",
    ""
   ],
   [
    "Enter, Space on − / +",
    "one step; disabled at the limit",
    "“Number of children: 3”"
   ],
   [
    "↑ / ↓ in the field",
    "one step (native)",
    "new value"
   ]
  ],
  "klassen": [
   "Field with two buttons",
   "more or less",
   "the number field as in KERN (tabular figures: KERN page-wide)"
  ]
 },
 "zaehler": {
  "name": "Character count",
  "zweck": "Says how much space is left.",
  "wann": [
   "For free-text fields with a hard limit — reasons, notes, remarks.",
   "Only if the limit is real. Invented limits only annoy."
  ],
  "nicht": [
   "For fields without a limit.",
   "Not as the only sign that too much was entered — an error message on submit is needed as well."
  ],
  "barriere": [
   "The counter is announced only from 20 remaining characters and only once typing pauses briefly (central announcement, M61). Otherwise the screen reader talks on every keystroke.",
   "aria-describedby connects field and counter.",
   "maxlength on the field is the truth — the counter only reads it."
  ],
  "bsp": [
   {
    "titel": "Note with a limit",
    "hinweis": "Type — the counter below keeps count. From 20 characters left it is also announced."
   }
  ],
  "tasten": [
   [
    "Typing",
    "counts along",
    "from 20 characters left “n characters left”, after a short pause"
   ]
  ],
  "klassen": [
   "the display",
   "wires up the field",
   "id of the display",
   "set from 20 left",
   "set when exceeded"
  ]
 },
 "ablage": {
  "name": "File upload",
  "zweck": "Upload documents and show the uploaded ones.",
  "wann": [
   "For proof of income, certificates, receipts — everyday work in the exemption procedure."
  ],
  "nicht": [
   "Without stating the allowed formats and the maximum size. Whoever only learns that after a failure uploads twice.",
   "Never without a way to remove a file again."
  ],
  "barriere": [
   "State formats and maximum size BEFORE the field, connected via aria-describedby.",
   "The remove button needs the file name in its name or an aria-label — otherwise you hear “Remove” three times.",
   "The list is a real <ul>, so that the count is announced.",
   "The field belongs inside KERN\u2019s wrapper kern-form-input \u2014 without it KERN\u2019s styling of the file field does not apply and it sits raw in the drop area (corrected 25.11.2026).",
   "\u201cChoose Files / no files selected\u201d on the button comes from the browser, not from the system: CSS cannot translate that text, it follows the browser\u2019s language. KERN\u2019s own file field shows the same. Anyone who needs it in German has to hide the native field and put an own button (label) in front of it \u2014 that changes the component, not its styling."
  ],
  "bsp": [
   {
    "titel": "Documents with a list"
   }
  ],
  "tasten": [
   [
    "Tab",
    "reaches the file field",
    ""
   ],
   [
    "Enter, Space",
    "opens the file picker (native)",
    "chosen files"
   ]
  ],
  "klassen": [
   "the unit",
   "KERN\u2019s wrapper around label, hint and field",
   "uploaded files",
   "a row",
   "File size"
  ]
 },
 "fortschritt": {
  "name": "Progress bar",
  "zweck": "Shows how far something has got when it can be quantified.",
  "wann": [
   "When uploading, generating a notice, in bulk runs.",
   "Also for shares: how many documents out of how many are there."
  ],
  "nicht": [
   "When the duration is unknown. Use the loader then — a bar stuck at 90 percent is worse than none at all."
  ],
  "barriere": [
   "role=\"progressbar\" with aria-valuenow, -valuemin and -valuemax.",
   "The value ALSO belongs next to it as text — not everyone hears the announcement.",
   "The bar is 8 pixels high; colour alone does not carry the information, hence the text."
  ],
  "bsp": [
   {
    "titel": "Seven of ten documents"
   }
  ],
  "tasten": [],
  "klassen": [
   "the track",
   "the filled part",
   "the share, in percent"
  ]
 },
 "kurzhinweis": {
  "name": "Tooltip",
  "zweck": "A short explanation that appears on hover or focus.",
  "wann": [
   "For abbreviations and technical terms that would disrupt the running text.",
   "For the meaning of an icon."
  ],
  "nicht": [
   "NEVER for something needed to get work done — use an accordion (kern-accordion) or the toggletip instead. On touch screens it only appears on tap.",
   "Not for long texts. Anything that needs more than two lines belongs in an accordion."
  ],
  "barriere": [
   "tabindex=\"0\" on the anchor, otherwise the hint cannot be reached with the keyboard.",
   "aria-describedby connects anchor and bubble, role=\"tooltip\" on the bubble.",
   "WCAG 1.4.13: Esc hides it (without moving focus), the bubble can be hovered (bridge across the gap) and stays while pointer or focus is on it.",
   "Because it is easily overlooked, it must never be the only source of information."
  ],
  "bsp": [
   {
    "titel": "Explanation of an abbreviation",
    "hinweis": "Hover, tab into it or tap it. Esc hides it without moving the focus."
   }
  ],
  "tasten": [
   [
    "Tab",
    "focus on the anchor shows the hint",
    "hint via aria-describedby"
   ],
   [
    "Esc",
    "hides it, focus stays",
    ""
   ]
  ],
  "klassen": [
   "the anchor",
   "the text",
   "connects both"
  ]
 },
 "banner": {
  "name": "Page banner",
  "zweck": "A message that concerns the whole page — at the top, before the content.",
  "wann": [
   "After a completed action when the page changes afterwards: “Application saved” on the overview.",
   "For time-limited information that concerns all users of the page (maintenance, end of a deadline)."
  ],
  "nicht": [
   "For a message about a section or field — use kern-alert where it belongs.",
   "For form errors — use the error summary.",
   "More than one per page."
  ],
  "barriere": [
   "role=\"region\" with aria-labelledby pointing to the header: the banner is a landmark and has a name.",
   "The type is stated as a word in the header (Important, Success, Error) — colour alone says nothing.",
   "Success after a page change: focus on the banner (tabindex=\"-1\"), not role=\"alert\" — focus is enough and interrupts nothing."
  ],
  "bsp": [
   {
    "titel": "Information"
   },
   {
    "titel": "Success after an action",
    "hinweis": "After the page change the banner receives focus (tabindex=\"-1\") so that the screen reader reads it first."
   }
  ],
  "tasten": [
   [
    "Tab",
    "reaches the link in the banner",
    ""
   ],
   [
    "Enter",
    "follows the link",
    ""
   ]
  ],
  "klassen": [
   "Frame in the colour of the type",
   "Header as heading, on the tinted surface",
   "Content",
   "Type; without modifier: information"
  ]
 },
 "warnhinweis": {
  "name": "Warning text",
  "zweck": "A consequence you must know before continuing.",
  "wann": [
   "Before irreversible steps: rejection, deletion, expiry of a deadline.",
   "When a statement has legal consequences."
  ],
  "nicht": [
   "For ordinary hints — use the alert.",
   "More than one per page. Whoever warns about everything warns about nothing."
  ],
  "barriere": [
   "The exclamation mark comes from the CSS and is not read out — the warning must be complete in the text.",
   "No role=\"alert\": the hint is there from the start and does not interrupt.",
   "The circle is text on a surface and reaches the required contrast in all four modes."
  ],
  "bsp": [
   {
    "titel": "Before the rejection"
   }
  ],
  "tasten": [],
  "klassen": [
   "Text with an exclamation mark in front"
  ]
 },
 "bestaetigung": {
  "name": "Confirmation",
  "zweck": "The conclusion: it worked, and this is the number that goes with it.",
  "wann": [
   "As a page of its own after submitting an application or a decision.",
   "Always with a reference that can be noted down and with what happens next."
  ],
  "nicht": [
   "As a toast. A confirmation that disappears after four seconds is not one.",
   "Without saying what happens next."
  ],
  "barriere": [
   "The number is set in monospace so that digits cannot be confused.",
   "The green frame is an extra — the statement is in the text.",
   "After submitting, focus belongs on the heading of this page."
  ],
  "bsp": [
   {
    "titel": "Application sent"
   }
  ],
  "tasten": [],
  "klassen": [
   "the surface",
   "the reference, monospaced"
  ]
 },
 "schublade": {
  "name": "Drawer",
  "zweck": "A surface that slides in from the side without interrupting the work.",
  "wann": [
   "For additional information on a case: history, documents, notes.",
   "When the main content should stay visible."
  ],
  "nicht": [
   "For decisions that force an answer — use the dialog.",
   "Not several at the same time."
  ],
  "barriere": [
   "Explicitly not modal (M51): the background stays operable. So that focus is never hidden behind the surface (WCAG 2.4.11), it closes as soon as focus leaves it.",
   "Opening: aria-expanded=true, focus on the drawer (name from aria-label). Esc or Close: focus back to the trigger.",
   "When closed it is invisible and not focusable (visibility) — nothing invisible in the tab path.",
   "The close button needs a name (kern-sr-only) — a cross alone is silent."
  ],
  "bsp": [
   {
    "titel": "Show the history",
    "hinweis": "The button opens it, focus moves in. Esc or Close: closed, focus back. Tabbing out or clicking next to it also closes it."
   }
  ],
  "tasten": [
   [
    "Enter, Space on the trigger",
    "opens, focus into the drawer",
    "name of the drawer"
   ],
   [
    "Esc",
    "closes, focus back to the trigger",
    ""
   ],
   [
    "Tab out of the drawer",
    "closes it",
    ""
   ]
  ],
  "klassen": [
   "the surface",
   "Title and close",
   "the content, scrolls",
   "wires up the button",
   "set while it is open"
  ]
 },
 "einschub": {
  "name": "Inset text",
  "zweck": "Highlights a paragraph with a vertical line.",
  "wann": [
   "For the wording of a law, a quotation, a justification.",
   "In the “action” variant for a proposal that still has to be confirmed."
  ],
  "nicht": [
   "For warnings — use the warning text.",
   "Not several in a row. What is highlighted all the time is no longer highlighted."
  ],
  "barriere": [
   "The line is visual. For a quotation the <blockquote> element belongs around it, not just the class.",
   "The “action” variant differs only in colour — the meaning must be in the text."
  ],
  "bsp": [
   {
    "titel": "Legal wording and proposal"
   }
  ],
  "tasten": [],
  "klassen": [
   "Paragraph with a line",
   "Line in the action colour"
  ]
 },
 "phase": {
  "name": "Phase banner",
  "zweck": "Says at the top of a page what stage of maturity it has reached.",
  "wann": [
   "As long as something is a draft, a trial or work in progress.",
   "Together with a sentence on what this means for users."
  ],
  "nicht": [
   "On a finished application. A badge that never goes away is no longer read."
  ],
  "barriere": [
   "The badge alone is not enough — the sentence next to it says what follows.",
   "At the very top of the content, before the heading, so that it is not missed."
  ],
  "bsp": [
   {
    "titel": "Work in progress"
   }
  ],
  "tasten": [],
  "klassen": [
   "the line",
   "the badge inside it (KERN)"
  ]
 },
 "kennzahl": {
  "name": "Metric",
  "zweck": "A large number with its meaning below it.",
  "wann": [
   "On an overview page: open cases, missed deadlines, backlog.",
   "At most four side by side."
  ],
  "nicht": [
   "Without a reference value. “9” says nothing, “9 of 47” says something.",
   "For numbers that are to be compared — use a table."
  ],
  "barriere": [
   "Number and label are in the same element so that they are read out together.",
   "The number alone is not a heading — no <h2> around it.",
   "Metrics must never be breakable down to individual employees (staff representation law, § 80 BPersVG)."
  ],
  "bsp": [
   {
    "titel": "Three metrics"
   }
  ],
  "tasten": [],
  "klassen": [
   "the card",
   "the large number",
   "what it means"
  ]
 },
 "bildnis": {
  "name": "Avatar",
  "zweck": "Round initials for a person.",
  "wann": [
   "In lists where several caseworkers appear.",
   "In the header, for the signed-in person."
  ],
  "nicht": [
   "As the only identifier. Initials are ambiguous — the name belongs next to them.",
   "For things. A case is not a person."
  ],
  "barriere": [
   "aria-hidden=\"true\" when the name is next to it — otherwise you hear “A B, A. Berger”.",
   "The avatar sets its own text colour. Without it, it inherits the surrounding one and becomes dark on dark in the header: 1.30 to 1. The error was in the system until 12.08.2026."
  ],
  "bsp": [
   {
    "titel": "Three sizes"
   }
  ],
  "tasten": [],
  "klassen": [
   "40 pixels",
   "32 pixels",
   "64 pixels"
  ]
 },
 "popover": {
  "name": "Popover and toggletip",
  "zweck": "Shows additional information only on click — on touch devices too. The toggletip announces a short text; the popover may contain links and buttons.",
  "wann": [
   "Help for a field that not everyone needs.",
   "A short term you want to look up without leaving the page."
  ],
  "nicht": [
   "For required information or errors — they belong visibly on the page.",
   "When the content requires a decision — use the dialog.",
   "Not as a replacement for a good label."
  ],
  "barriere": [
   "The button has a name (kern-sr-only) — a question mark alone is silent.",
   "Toggletip: the text goes into the bubble only on click and is announced (central announcement, M61) (WCAG 4.1.3).",
   "Popover: aria-expanded on the button; Esc closes and returns focus; no focus trap, because it is not modal.",
   "Unlike the tooltip, it can also be operated on touch (WCAG 1.4.13)."
  ],
  "bsp": [
   {
    "titel": "Toggletip",
    "hinweis": "Click or Enter on the icon writes the text into a status region — screen readers announce it. Esc or a click elsewhere closes it."
   },
   {
    "titel": "Popover with a link",
    "hinweis": "Enter opens it and moves focus into the area; Esc closes it and returns focus."
   }
  ],
  "tasten": [
   [
    "Enter, Space on the button (popover)",
    "opens, focus on the first element inside",
    ""
   ],
   [
    "Esc",
    "closes, focus back",
    ""
   ],
   [
    "Tab out",
    "closes",
    ""
   ],
   [
    "Enter, Space (toggletip)",
    "shows the text",
    "the text"
   ],
   [
    "Esc",
    "hides it",
    ""
   ]
  ],
  "klassen": [
   "Wrapper of the toggletip",
   "Text of the toggletip",
   "Status region (role=status)",
   "Wrapper",
   "Button, with aria-controls",
   "the area (hidden)"
  ]
 },
 "ki-kennzeichnung": {
  "name": "AI label",
  "zweck": "Makes it recognisable that content was generated or supported by AI — with an explanation on click.",
  "wann": [
   "On every text, proposal or image that comes wholly or partly from an AI system.",
   "For decision proposals in case management: who proposed, who decides."
  ],
  "nicht": [
   "Not as a disclaimer in small print — the label sits right at the content.",
   "Not for mere spelling help without an effect on content."
  ],
  "barriere": [
   "The label is text (“AI-assisted”), not just an icon or a colour.",
   "The explanation comes via the toggletip and is announced.",
   "In content: who created it (AI) and who decides (a person) — in plain language."
  ],
  "bsp": [
   {
    "titel": "Proposal with label"
   }
  ],
  "tasten": [
   [
    "Enter, Space on the info button",
    "shows the explanation",
    "the text"
   ],
   [
    "Esc",
    "hides it",
    ""
   ]
  ],
  "klassen": [
   "Wrapper: badge + toggletip",
   "the badge (KERN)"
  ]
 },
 "fab": {
  "name": "Floating action button (FAB)",
  "zweck": "The one main action of a view, floating at the bottom right — small and round with an icon, or wide with text.",
  "wann": [
   "In long lists and work queues, when the main action (e.g. “New case”) should stay reachable while scrolling.",
   "At most one FAB per page."
  ],
  "nicht": [
   "Not in forms — the submit button sits at the end of the form there.",
   "Not for destructive or rare actions.",
   "Not when the action stays visible anyway."
  ],
  "barriere": [
   "Small and round: name via kern-sr-only — the plus alone is silent.",
   "56 × 56 px — above WCAG 2.5.5 (44 px).",
   "Without a shadow (KERN uses none visibly): the 4 px border in the page colour separates the button from the content beneath; the boundary between button and border is above 3 : 1.",
   "A scrollable area needs keyboard access and a name (tabindex=0, role=region, aria-label) — otherwise it cannot be moved without a mouse.",
   "The page keeps space free at the bottom (kn-page:has(.kn-fab)) so that the button never covers the last content (WCAG 2.4.11).",
   "It sits in the tab order where it is in the markup — which is where it belongs (e.g. after the list)."
  ],
  "bsp": [
   {
    "titel": "Above scrolling content",
    "hinweis": "Scroll the work queue in the box (mouse wheel, or Tab into the list, then ↓ / Page Down): the content runs beneath the buttons. They are set off without a shadow — as in KERN — by a 4 px border in the page colour. In this preview the buttons float within their box (CSS transform on the box); on a real page they sit at the bottom right of the window."
   }
  ],
  "tasten": [
   [
    "Tab",
    "reaches the button where it is in the markup (after the list)",
    ""
   ],
   [
    "Enter, Space",
    "triggers",
    ""
   ],
   [
    "↓ ↑ Page Down Page Up in the list",
    "scrolls the content under the button (example)",
    "name of the area on entering"
   ]
  ],
  "klassen": [
   "on kern-btn kern-btn--primary: small and round",
   "wide with text"
  ]
 },
 "zaehler-marke": {
  "name": "Count badge",
  "zweck": "Shows on an icon button how many new entries there are.",
  "wann": [
   "On messages, follow-ups, tasks — when the number leads to action."
  ],
  "nicht": [
   "Not for numbers without a link to action — use a metric.",
   "Not above 99: use “99+”."
  ],
  "barriere": [
   "The number is aria-hidden; the button name states it in full (“Messages, 3 new”).",
   "When the number changes, announce the change via the central announcement (M61).",
   "White number on the danger colour: contrast as for the danger button (6.01 light / 6.99 dark)."
  ],
  "bsp": [
   {
    "titel": "Messages with a count"
   }
  ],
  "tasten": [
   [
    "Tab",
    "reaches the button",
    ""
   ],
   [
    "Enter, Space",
    "triggers",
    "name including the number (“Messages, 3 new”) — the visible number is hidden from assistive technology"
   ]
  ],
  "klassen": [
   "the number on the button"
  ]
 },
 "codeblock": {
  "name": "Code block",
  "zweck": "Shows source code or identifiers for copying — with a copy button.",
  "wann": [
   "For embed code, configuration, long identifiers."
  ],
  "nicht": [
   "Not for running text — code within a sentence is kn-code."
  ],
  "barriere": [
   "The button carries text (“Copy”), not just an icon.",
   "The confirmation comes as a toast (role=status).",
   "Wide code scrolls horizontally inside the block, not the page (WCAG 1.4.10).",
   "The block is therefore reachable by keyboard (tabindex=0, role=region with a name) — otherwise it could not be scrolled in Firefox and Safari (WCAG 2.1.1)."
  ],
  "bsp": [
   {
    "titel": "Copy the embed code"
   }
  ],
  "tasten": [
   [
    "Tab",
    "first the code (scrolls with ← →), then “Copy”",
    ""
   ],
   [
    "Enter on “Copy”",
    "copies",
    "“Copied to the clipboard.”"
   ]
  ],
  "klassen": [
   "Wrapper",
   "Copy button",
   "id of the element whose text is copied"
  ]
 },
 "baum": {
  "name": "Tree view",
  "zweck": "Shows an outline with levels that can be expanded and collapsed — filing plan, folders, organisation chart.",
  "wann": [
   "When the entries have a real hierarchy and you navigate or select within it.",
   "From about three levels; for two levels a grouped list is often enough."
  ],
  "nicht": [
   "Not for the page navigation of a website — use the side navigation.",
   "Not for data with columns — use the table.",
   "Not deeper than necessary: every level costs a keystroke."
  ],
  "barriere": [
   "Roles tree / treeitem / group, aria-expanded on branches, aria-selected for the choice.",
   "Keys per the WAI-ARIA Authoring Practices (Tree View); roving tab stop.",
   "The focus ring sits on the row, not on the whole subtree.",
   "Expanding is announced via aria-expanded; the level follows from the nesting."
  ],
  "bsp": [
   {
    "titel": "Filing plan",
    "hinweis": "Arrow keys move, → expands, ← collapses, Enter selects, a letter jumps. Only one entry is reachable with Tab."
   }
  ],
  "tasten": [
   [
    "↓ / ↑",
    "next / previous visible entry",
    ""
   ],
   [
    "→",
    "expands or moves to the first child",
    "“expanded”"
   ],
   [
    "←",
    "collapses or moves to the parent",
    "“collapsed”"
   ],
   [
    "Home / End",
    "first / last entry",
    ""
   ],
   [
    "Enter, Space",
    "selects",
    "“selected”"
   ],
   [
    "Letter",
    "next entry starting with it",
    ""
   ]
  ],
  "klassen": [
   "the tree (ul, role=tree)",
   "wires up the keys",
   "the row of an entry",
   "placeholder instead of an arrow for leaves"
  ]
 },
 "mehrfachauswahl": {
  "name": "Multi-select",
  "zweck": "Selects several entries from a long list — with search. The choices appear as tags above the field.",
  "wann": [
   "Responsibilities, categories, filters with many options.",
   "From about eight options; below that, checkboxes (kern-form-check)."
  ],
  "nicht": [
   "Up to about seven options — checkboxes show everything at a glance.",
   "Not for a single choice — use the combo box."
  ],
  "barriere": [
   "Combo box with aria-multiselectable; aria-activedescendant shows the current option, aria-selected the choice.",
   "Every change is announced (“… selected, 2 selected”) (central announcement, M61).",
   "Each tag is a button with a name (“Remove …”); afterwards focus returns to the field.",
   "Selected = ticked box, not just colour."
  ],
  "bsp": [
   {
    "titel": "Responsible offices",
    "hinweis": "↓ opens, Enter selects or removes, Backspace in the empty field removes the last choice. Every change is announced."
   }
  ],
  "tasten": [
   [
    "↓",
    "opens, moves",
    ""
   ],
   [
    "Home / End",
    "first / last entry while one is active; otherwise the text cursor",
    ""
   ],
   [
    "Enter",
    "selects or removes",
    "“… selected, n selected”"
   ],
   [
    "Esc",
    "closes",
    ""
   ],
   [
    "Backspace in the empty field",
    "removes the last choice",
    "“… removed, n selected”"
   ],
   [
    "Tab to a tag, Enter",
    "removes it, focus back into the field",
    "“… removed, n selected”"
   ]
  ],
  "klassen": [
   "on kern-form-input and kn-combobox",
   "wires it up",
   "List of chosen tags",
   "current option (set by the script)"
  ]
 },
 "kalender": {
  "name": "Date picker",
  "zweck": "A date field with a calendar to look things up. Typing remains the main way; the calendar helps when the weekday or the month matters.",
  "wann": [
   "Appointments, deadlines, dates of receipt — when users need to see the calendar (weekday, next week).",
   "Periods in the near future or past."
  ],
  "nicht": [
   "Known dates such as the date of birth — use KERN’s date with three fields (day, month, year).",
   "Not as the only way to enter: the field always stays editable."
  ],
  "barriere": [
   "Pattern per the WAI-ARIA Authoring Practices (Date Picker Dialog): modal dialog, grid with a roving tab stop.",
   "Every day has a full name (“Wednesday, 14 October 2026”); today carries aria-current=date, the chosen day aria-pressed.",
   "The month title is announced when paging (central announcement, M61); in the modal dialog the announcement lives inside the dialog.",
   "After choosing or cancelling, focus returns to the calendar button.",
   "The week starts on Monday (DIN 1355 / ISO 8601).",
   "Typed input is validated on leaving: KERN’s error state with a message on how to do it right; the error ID is in aria-describedby only while there is an error."
  ],
  "bsp": [
   {
    "titel": "Date of receipt",
    "hinweis": "The button opens the calendar; typing “31.02.2026” and leaving with Tab shows the error state. ← → day, ↑ ↓ week, Home/End start/end of week, Page Up/Down month, with Shift year, Enter accepts, Esc cancels."
   }
  ],
  "tasten": [
   [
    "Enter, Space on the calendar button",
    "opens; focus on the chosen day or today",
    "full day name"
   ],
   [
    "← → ↑ ↓",
    "day / week",
    "day name; a new month is announced"
   ],
   [
    "Home / End",
    "start / end of week",
    ""
   ],
   [
    "Page Up / Page Down, with Shift",
    "month / year",
    "month and year"
   ],
   [
    "Enter, Space",
    "accepts, focus back to the button",
    ""
   ],
   [
    "Esc",
    "cancels, focus back to the button",
    ""
   ],
   [
    "Tab (leaving the field)",
    "validates the input",
    "error message via aria-describedby"
   ]
  ],
  "klassen": [
   "Wrapper; wires up field and button",
   "the button that opens the calendar",
   "the calendar (built by the script)",
   "a day in the grid (--outside: adjacent month)",
   "the kern-error message for invalid input"
  ]
 },
 "uhrzeit": {
  "name": "Time input",
  "zweck": "A text field for a time of day. Short forms are normalised on leaving: “930”, “9.30”, “9:30” → 09:30.",
  "wann": [
   "Appointments and deadlines with a time.",
   "Together with the date picker."
  ],
  "nicht": [
   "No native type=time: operation and announcement differ greatly between browsers.",
   "Not for durations (“2 hours”) — use a number field with a unit."
  ],
  "barriere": [
   "The format is visible in the hint, not only as a placeholder.",
   "Errors with KERN’s error state: aria-invalid and a message via aria-describedby — the message says how to do it right.",
   "The error ID is in aria-describedby only while there is an error (hidden messages would otherwise be read out too)."
  ],
  "bsp": [
   {
    "titel": "Time with error state",
    "hinweis": "Type “930” and leave with Tab → 09:30. “25:00” shows KERN’s error state with a constructive message."
   }
  ],
  "tasten": [
   [
    "Tab (leaving the field)",
    "normalises (930 → 09:30) or shows the error",
    "error message via aria-describedby"
   ]
  ],
  "klassen": [
   "on the field; normalises and validates on leaving",
   "the kern-error message that the script shows and hides"
  ]
 },
 "datentabelle": {
  "name": "Data table, extended",
  "zweck": "Extends KERN’s table for case management: toolbar (search, filter, columns), batch actions for selected rows and expandable rows.",
  "wann": [
   "Work queue, inbox, result lists — many cases that are filtered and processed together.",
   "Expanding when details are needed only sometimes and a page of their own would be too much."
  ],
  "nicht": [
   "For short, fixed overviews kern-table alone is enough.",
   "Do not expand when the details are almost always needed — then they belong in the row or on a detail page.",
   "No batch action without confirmation if it cannot be undone (kern-dialog, kn-dialog--danger)."
  ],
  "barriere": [
   "Batch actions and tools sit on top of each other; whatever is invisible is also not focusable via visibility and is not read out. The bar keeps its height — the table does not jump when you tick.",
   "The number of selected rows is announced; on the first tick once with “Actions above the table”.",
   "“Clear selection” moves focus to “Select all” so that it does not vanish with the bar.",
   "Expanding per the WAI-ARIA Authoring Practices (Disclosure): button with aria-expanded and aria-controls, its name names the row (“Details for notice …”).",
   "Column choice with KERN’s checkboxes in a fieldset with a legend."
  ],
  "bsp": [
   {
    "titel": "Toolbar, batch actions and column choice",
    "hinweis": "Tick a box: the batch actions replace the tools, the number is announced. “Clear selection” returns focus to “Select all”. “Columns” hides columns."
   },
   {
    "titel": "Expandable rows",
    "hinweis": "The button in front of the row opens the details below it (Enter or Space). Sorting takes the details along."
   }
  ],
  "tasten": [
   [
    "Space on a checkbox",
    "selects; batch actions replace the tools",
    "“n rows selected. Actions above the table” (once)"
   ],
   [
    "Enter on “Clear selection”",
    "clears; focus on “Select all”",
    "“Nothing selected”"
   ],
   [
    "Enter on “Columns”",
    "opens the column choice; Space hides / shows a column",
    ""
   ],
   [
    "Enter, Space on the expand button",
    "shows / hides the details",
    "“expanded” / “collapsed”"
   ],
   [
    "Enter on a column header",
    "sorts",
    "“Sorted by …”"
   ]
  ],
  "klassen": [
   "Columns popover at the end of the bar: panel aligned to the end",
   "Bar flush above the table",
   "Search, filter, columns",
   "the search field, grows",
   "Batch actions; data-kn-table-batch=\"table ID\"",
   "Number of selected rows",
   "“Clear selection”; data-kn-table-batch-clear",
   "Fieldset of the column choice; data-kn-columns-for=\"table ID\", fields data-kn-column=\"n\"",
   "Column of the expand button",
   "the button; data-kn-table-expand, aria-controls",
   "the detail row (hidden)"
  ]
 },
 "seitenleiste": {
  "name": "Navigation rail",
  "zweck": "A narrow vertical bar for three to seven main areas of a specialist application — icon with a label below it.",
  "wann": [
   "Specialist applications with a few main areas that are switched often, when the full side navigation takes too much space."
  ],
  "nicht": [
   "More than seven areas or sub-levels — use kn-side-nav.",
   "Not without labels: an icon alone is not unambiguous for many people.",
   "Not as the only navigation on narrow screens — use kn-drawer there."
  ],
  "barriere": [
   "Labels always visible (M94) — the name is the visible text.",
   "nav with its own name (aria-label), current area with aria-current=page, not just colour: indicator surface and bold text.",
   "Each entry is at least 80 wide and clearly taller than 48 — target size met."
  ],
  "bsp": [
   {
    "titel": "Main areas",
    "hinweis": "Tab moves from area to area; the current one carries aria-current=page."
   }
  ],
  "tasten": [
   [
    "Tab",
    "from area to area",
    ""
   ],
   [
    "Enter",
    "opens the area",
    "current one: “current page”"
   ]
  ],
  "klassen": [
   "the bar (nav)",
   "an area (a)",
   "Surface around the icon, shows the state",
   "the label"
  ]
 },
 "kern-text-heading": {
  "name": "Text Heading",
  "zweck": "A heading for pages and sections.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Variants"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Always with h1–h6, levels without gaps",
    "KERN: text roles"
   ]
  ]
 },
 "kern-text-title": {
  "name": "Text Title",
  "zweck": "Serves as a title within components.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Variants"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Always with h1–h6, levels without gaps",
    "KERN: text roles"
   ]
  ]
 },
 "kern-text-preline": {
  "name": "Text Preline",
  "zweck": "Adds supporting information to a title or heading.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Variants"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Only combine the same size level",
    "KERN: text roles"
   ]
  ]
 },
 "kern-text-subline": {
  "name": "Text Subline",
  "zweck": "Adds supporting information to a title or heading, below it.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Variants"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Only combine the same size level",
    "KERN: text roles"
   ]
  ]
 },
 "kern-text-body": {
  "name": "Text Body",
  "zweck": "Used for running text, help texts and content paragraphs.",
  "wann": [
   "Use a KERN text role for every piece of text — never a size of your own."
  ],
  "nicht": [
   "The size says nothing about the outline level: heading level (h1–h6) and text role are two different things."
  ],
  "barriere": [
   "WCAG 1.4.12: text stays readable when users increase line height, spacing and letter spacing — no fixed heights around text.",
   "No type smaller than KERN’s smallest level."
  ],
  "bsp": [
   {
    "titel": "Variants"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Only combine the same size level",
    "KERN: text roles"
   ]
  ]
 },
 "kern-text-label": {
  "name": "Text Label",
  "zweck": "Labels input fields, buttons or other interactive elements.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Variants"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Only combine the same size level",
    "KERN: text roles"
   ]
  ]
 },
 "kern-button": {
  "name": "Button",
  "zweck": "Triggers an action; its label names that action.",
  "wann": [
   "For an action: submit, save, delete, open.",
   "Exactly one primary button (kern-btn--primary) per screen section — KERN: one per page."
  ],
  "nicht": [
   "For a change of location — that is what the link is for.",
   "Never two primary buttons side by side: then neither is the primary one any more."
  ],
  "barriere": [
   "Always <button>, never a <div> with a click handler.",
   "Target size per WCAG 2.5.8 at least 24 × 24 px; KERN’s standard height is 48 px.",
   "Disabled as in KERN: better hide it; if necessary aria-disabled=\"true\" instead of disabled — the button stays reachable with Tab and is read out, kern-neu.js blocks click, Enter and Space.",
   "Loading state (extension data-kn-loading): not operable, the label is kept for assistive technology."
  ],
  "bsp": [
   {
    "titel": "Variants"
   },
   {
    "titel": "Variants with icon"
   },
   {
    "titel": "Size overview"
   },
   {
    "titel": "Block button for mobile context"
   },
   {
    "titel": "Additional example KERN 2.8.2 (nbyc): the sizes KERN\u2019s example does not show"
   },
   {
    "titel": "Additional example KERN 2.8.2 (nbyc): the same sizes as secondary and tertiary"
   }
  ],
  "tasten": [
   [
    "Tab",
    "reaches the button"
   ],
   [
    "Enter, Space",
    "triggers (native)"
   ]
  ],
  "pflichten": [
   [
    "Icon-only button with hidden text",
    "kern-sr-only"
   ],
   [
    "Disabled but accessible to assistive technology",
    "aria-disabled + block (E4, M25)"
   ],
   [
    "State exposed programmatically (aria-pressed/-expanded)",
    "depending on the button’s purpose"
   ],
   [
    "One primary button per page",
    ""
   ]
  ]
 },
 "kern-link": {
  "name": "Link",
  "zweck": "A direct connection to other content.",
  "wann": [
   "For every change of location — also within the page."
  ],
  "nicht": [
   "For an action. A link that deletes something is a button."
  ],
  "barriere": [
   "The label must make sense on its own. Never “click here”.",
   "The underline stays — it works without colour perception too."
  ],
  "bsp": [
   {
    "titel": "Variants"
   },
   {
    "titel": "Variants with icon"
   },
   {
    "titel": "Link styled as a button"
   },
   {
    "titel": "Link without visited state"
   }
  ],
  "tasten": [
   [
    "Tab",
    "reaches the link"
   ],
   [
    "Enter",
    "follows the link (native)"
   ]
  ],
  "pflichten": [
   [
    "Link purpose clear from context",
    ""
   ],
   [
    "External links marked",
    "icon possible in the example"
   ],
   [
    "Never just an icon",
    ""
   ]
  ]
 },
 "kern-input-text-text": {
  "name": "Input Text",
  "zweck": "Lets users enter letters, numbers and special characters.",
  "wann": [
   "For any free input."
  ],
  "nicht": [
   "Never without a label. Placeholder text is not a label: it disappears when you type."
  ],
  "barriere": [
   "<label for> is mandatory.",
   "Connect hint and error via aria-describedby — otherwise the screen reader does not read them.",
   "aria-invalid=\"true\" on the field with the error.",
   "The error bar on the left (kern-form-input--error) makes the error visible without colour perception too."
  ],
  "bsp": [
   {
    "titel": "Default"
   },
   {
    "titel": "Read-only"
   },
   {
    "titel": "Disabled"
   },
   {
    "titel": "Optional"
   },
   {
    "titel": "Hint and error message"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Suitable autocomplete (1.3.5)",
    ""
   ],
   [
    "Label visible and unambiguous (3.3.2)",
    "kern-label with for/id in the example"
   ],
   [
    "Error clearly named, with a solution (3.3.1, 3.3.3)",
    "Text of the error message"
   ],
   [
    "Error summary as a status message (4.1.3)",
    "form[data-kn-validate]: list with role=alert and focus, links into the field (M58)"
   ],
   [
    "Required via aria-required, optional with \"- Optional\"",
    "check 16 reports native required"
   ]
  ]
 },
 "kern-input-text-email": {
  "name": "Input E-Mail",
  "zweck": "Helps users enter an email address.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Default"
   },
   {
    "titel": "Read-only"
   },
   {
    "titel": "Disabled"
   },
   {
    "titel": "Optional"
   },
   {
    "titel": "Hint and error message"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "autocomplete=\"email\"",
    "in the example"
   ],
   [
    "Label visible and unambiguous (3.3.2)",
    "kern-label with for/id in the example"
   ],
   [
    "Error clearly named, with a solution (3.3.1, 3.3.3)",
    "Text of the error message"
   ],
   [
    "Error summary as a status message (4.1.3)",
    "form[data-kn-validate]: list with role=alert and focus, links into the field (M58)"
   ],
   [
    "Required via aria-required, optional with \"- Optional\"",
    "check 16 reports native required"
   ]
  ]
 },
 "kern-input-text-tel": {
  "name": "Input Tel",
  "zweck": "Helps users enter a telephone number.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Default"
   },
   {
    "titel": "Read-only"
   },
   {
    "titel": "Disabled"
   },
   {
    "titel": "Optional"
   },
   {
    "titel": "Hint and error message"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "autocomplete=\"tel\"",
    "in the example"
   ],
   [
    "Label visible and unambiguous (3.3.2)",
    "kern-label with for/id in the example"
   ],
   [
    "Error clearly named, with a solution (3.3.1, 3.3.3)",
    "Text of the error message"
   ],
   [
    "Error summary as a status message (4.1.3)",
    "form[data-kn-validate]: list with role=alert and focus, links into the field (M58)"
   ],
   [
    "Required via aria-required, optional with \"- Optional\"",
    "check 16 reports native required"
   ]
  ]
 },
 "kern-input-text-url": {
  "name": "Input URL",
  "zweck": "Helps users enter a web address (URL).",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Default"
   },
   {
    "titel": "Read-only"
   },
   {
    "titel": "Disabled"
   },
   {
    "titel": "Optional"
   },
   {
    "titel": "Hint and error message"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Suitable autocomplete (1.3.5)",
    ""
   ],
   [
    "Label visible and unambiguous (3.3.2)",
    "kern-label with for/id in the example"
   ],
   [
    "Error clearly named, with a solution (3.3.1, 3.3.3)",
    "Text of the error message"
   ],
   [
    "Error summary as a status message (4.1.3)",
    "form[data-kn-validate]: list with role=alert and focus, links into the field (M58)"
   ],
   [
    "Required via aria-required, optional with \"- Optional\"",
    "check 16 reports native required"
   ]
  ]
 },
 "kern-input-text-number": {
  "name": "Input Number",
  "zweck": "Helps users enter a number.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Default"
   },
   {
    "titel": "Read-only"
   },
   {
    "titel": "Disabled"
   },
   {
    "titel": "Optional"
   },
   {
    "titel": "Hint and error message"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "inputmode=\"numeric\"",
    "in the example"
   ],
   [
    "Value range via attributes",
    ""
   ],
   [
    "Label visible and unambiguous (3.3.2)",
    "kern-label with for/id in the example"
   ],
   [
    "Error clearly named, with a solution (3.3.1, 3.3.3)",
    "Text of the error message"
   ],
   [
    "Error summary as a status message (4.1.3)",
    "form[data-kn-validate]: list with role=alert and focus, links into the field (M58)"
   ],
   [
    "Required via aria-required, optional with \"- Optional\"",
    "check 16 reports native required"
   ]
  ]
 },
 "kern-input-text-date": {
  "name": "Input Date",
  "zweck": "Helps users enter a date.",
  "wann": [
   "For dates of birth, end of a deadline, appointments far in the past — wherever typing is faster than paging."
  ],
  "nicht": [
   "For choosing a nearby appointment in the coming weeks — use the date picker (kn-date-picker, M89)."
  ],
  "barriere": [
   "A <fieldset> with <legend> — otherwise you hear “day, month, year” three times without knowing what for.",
   "inputmode=\"numeric\" instead of type=\"number\": no spinner, but the numeric keypad on the phone.",
   "Each part field has its own visible label."
  ],
  "bsp": [
   {
    "titel": "Default"
   },
   {
    "titel": "Read-only"
   },
   {
    "titel": "Disabled"
   },
   {
    "titel": "Optional"
   },
   {
    "titel": "Hint and error message"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Three fields in a fieldset, inputmode numeric",
    "in the example"
   ],
   [
    "autocomplete (e.g. bday-day)",
    "not set in the example"
   ],
   [
    "Label visible and unambiguous (3.3.2)",
    "kern-label with for/id in the example"
   ],
   [
    "Error clearly named, with a solution (3.3.1, 3.3.3)",
    "Text of the error message"
   ],
   [
    "Error summary as a status message (4.1.3)",
    "form[data-kn-validate]: list with role=alert and focus, links into the field (M58)"
   ],
   [
    "Required via aria-required, optional with \"- Optional\"",
    "check 16 reports native required"
   ]
  ]
 },
 "kern-input-text-password": {
  "name": "Input Password",
  "zweck": "Lets users enter or create a password.",
  "wann": [
   "For every sign-in.",
   "The show button is not a convenience but accessibility: whoever cannot touch-type needs it."
  ],
  "nicht": [
   "Not for identifiers that are not a secret.",
   "Never block pasting from the clipboard — it drives people to worse passwords."
  ],
  "barriere": [
   "The show button has a name for assistive technology (kern-sr-only “Show password”); aria-pressed says whether the password is currently visible.",
   "autocomplete current-password or new-password, so that password managers recognise the field."
  ],
  "bsp": [
   {
    "titel": "Default"
   },
   {
    "titel": "Hint and error message"
   }
  ],
  "tasten": [
   [
    "Tab",
    "from the field to the show button"
   ],
   [
    "Enter, Space",
    "shows or hides the password (kern-neu.js)"
   ]
  ],
  "pflichten": [
   [
    "Show button toggles with aria-pressed",
    "label stays the same (ARIA)"
   ],
   [
    "autocomplete current-/new-password",
    "in the example"
   ],
   [
    "Neutral sign-in errors",
    ""
   ],
   [
    "Label visible and unambiguous (3.3.2)",
    "kern-label with for/id in the example"
   ],
   [
    "Error clearly named, with a solution (3.3.1, 3.3.3)",
    "Text of the error message"
   ],
   [
    "Error summary as a status message (4.1.3)",
    "form[data-kn-validate]: list with role=alert and focus, links into the field (M58)"
   ],
   [
    "Required via aria-required, optional with \"- Optional\"",
    "check 16 reports native required"
   ]
  ]
 },
 "kern-input-textarea": {
  "name": "Input Textarea",
  "zweck": "Lets users enter long text content.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Default"
   },
   {
    "titel": "Read-only"
   },
   {
    "titel": "Disabled"
   },
   {
    "titel": "Optional"
   },
   {
    "titel": "Hint and error message"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Size can be changed",
    ""
   ],
   [
    "Label visible and unambiguous (3.3.2)",
    "kern-label with for/id in the example"
   ],
   [
    "Error clearly named, with a solution (3.3.1, 3.3.3)",
    "Text of the error message"
   ],
   [
    "Error summary as a status message (4.1.3)",
    "form[data-kn-validate]: list with role=alert and focus, links into the field (M58)"
   ],
   [
    "Required via aria-required, optional with \"- Optional\"",
    "check 16 reports native required"
   ]
  ]
 },
 "kern-input-select": {
  "name": "Input Select",
  "zweck": "Offers the choice of one option from a drop-down list of options.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Default"
   },
   {
    "titel": "Disabled"
   },
   {
    "titel": "Optional"
   },
   {
    "titel": "Hint and error message"
   }
  ],
  "tasten": [
   [
    "Arrow keys",
    "choose (native)"
   ],
   [
    "Alt+Down arrow",
    "opens the list (native, depends on the system)"
   ]
  ],
  "pflichten": [
   [
    "5 to 15 options, otherwise another form",
    ""
   ],
   [
    "Error summary as a status message (4.1.3)",
    "data-kn-validate, groups with data-kn-required (M58)"
   ]
  ]
 },
 "kern-input-checkboxes": {
  "name": "Input Checkboxes",
  "zweck": "Used to select one or more options.",
  "wann": [
   "For options that should all be visible — several can be chosen at once."
  ],
  "nicht": [
   "For many options: KERN uses the select list for 5 to 15; beyond that a combo box with search (kn-combobox)."
  ],
  "barriere": [
   "Groups always in a <fieldset> with <legend> — otherwise the context is missing."
  ],
  "bsp": [
   {
    "titel": "Single"
   },
   {
    "titel": "Group"
   },
   {
    "titel": "Group, optional"
   },
   {
    "titel": "Group with hint and error message"
   }
  ],
  "tasten": [
   [
    "Space",
    "toggles (native)"
   ]
  ],
  "pflichten": [
   [
    "Group in fieldset/legend",
    ""
   ],
   [
    "State not only through colour",
    "tick"
   ],
   [
    "Error summary as a status message (4.1.3)",
    "data-kn-validate, groups with data-kn-required (M58)"
   ]
  ]
 },
 "kern-input-radios": {
  "name": "Input Radios",
  "zweck": "Used to select exactly one option from mutually exclusive options.",
  "wann": [
   "For exactly one choice from a few visible options. KERN prefers radio buttons to the select list."
  ],
  "nicht": [
   "Preselection only for settings (KERN)."
  ],
  "barriere": [
   "Groups always in a <fieldset> with <legend>.",
   "Arrow keys change the choice within the group; Tab leaves it."
  ],
  "bsp": [
   {
    "titel": "Default"
   },
   {
    "titel": "Optional"
   },
   {
    "titel": "Hint and error message"
   },
   {
    "titel": "Horizontal alignment"
   }
  ],
  "tasten": [
   [
    "Arrow keys",
    "choose within the group (native)"
   ],
   [
    "Tab",
    "leaves the group"
   ]
  ],
  "pflichten": [
   [
    "Group in fieldset/legend",
    ""
   ],
   [
    "Preselection only for settings",
    ""
   ],
   [
    "Error summary as a status message (4.1.3)",
    "data-kn-validate, groups with data-kn-required (M58)"
   ]
  ]
 },
 "kern-input-file": {
  "name": "Input File",
  "zweck": "Allows one or more files to be uploaded.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Default"
   },
   {
    "titel": "Disabled"
   },
   {
    "titel": "Optional"
   },
   {
    "titel": "Error message"
   }
  ],
  "tasten": [
   [
    "Enter, Space",
    "opens the file picker (native)"
   ]
  ],
  "pflichten": [
   [
    "Allowed formats and size in the hint",
    ""
   ],
   [
    "Report upload status programmatically (4.1.3)",
    "via KN.melde or KN.lade (M57, M61)"
   ]
  ]
 },
 "kern-fieldset": {
  "name": "Fieldset",
  "zweck": "Groups related form fields and can build a hierarchy.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Grouped form fields"
   },
   {
    "titel": "Hint and error message"
   },
   {
    "titel": "Horizontal alignment"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Meaningful legend",
    "legend in the example"
   ],
   [
    "Do not nest, not for a single field",
    ""
   ]
  ]
 },
 "kern-search": {
  "name": "Search",
  "zweck": "Lets users find content and information quickly with a search term.",
  "wann": [
   "Wherever a set is searched — cases, documents, people."
  ],
  "nicht": [
   "Not for filtering a short, visible list. Filter tags (kn-filter-tag) are enough for that.",
   "The placeholder text does not replace a label."
  ],
  "barriere": [
   "type=\"search\" — assistive technology then announces the field as a search.",
   "KERN: label visible; only the global search in the page header may hide it (kern-sr-only).",
   "A button with only a magnifier needs a name (kern-sr-only)."
  ],
  "bsp": [
   {
    "titel": "Search with label"
   },
   {
    "titel": "Search with label and icon-only button"
   },
   {
    "titel": "Search without label"
   }
  ],
  "tasten": [
   [
    "Enter",
    "submits the search (native)"
   ]
  ],
  "pflichten": [
   [
    "Area as <search> with a name",
    "search with aria-label in the example"
   ],
   [
    "Search term stays after submitting",
    ""
   ]
  ]
 },
 "kern-accordion": {
  "name": "Accordion",
  "zweck": "Groups information under headings and lets users show and hide the related content.",
  "wann": [
   "For additional explanations, frequently asked questions, rarely needed details."
  ],
  "nicht": [
   "For required information. What everyone must fill in must not be hidden.",
   "Never for error messages."
  ],
  "barriere": [
   "Native <details>/<summary>: the browser provides state and keyboard (Enter, Space) — without ARIA and without script."
  ],
  "bsp": [
   {
    "titel": "Single"
   },
   {
    "titel": "Group"
   },
   {
    "titel": "Open"
   }
  ],
  "tasten": [
   [
    "Tab",
    "reaches the header"
   ],
   [
    "Enter, Space",
    "opens and closes (native)"
   ]
  ],
  "pflichten": [
   [
    "Operation with Enter/Space",
    "details/summary"
   ],
   [
    "Label the header unambiguously (3.3.2)",
    ""
   ],
   [
    "Do not nest, do not close automatically",
    ""
   ]
  ]
 },
 "kern-card": {
  "name": "Card",
  "zweck": "Shows related content compactly in a visually separated area, often with a title, image and actions.",
  "wann": [
   "For units of equal rank side by side."
  ],
  "nicht": [
   "For running text. Cards around everything make a page restless."
  ],
  "barriere": [
   "A clickable card (kern-card--interactive) is ONE link — not several inside it. Otherwise nobody knows what the click does."
  ],
  "bsp": [
   {
    "titel": "Variants"
   },
   {
    "titel": "Sizes"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Suitable heading level",
    "hgroup/h* in the example, level per page"
   ],
   [
    "Image alternative",
    ""
   ],
   [
    "Controls at least 44 × 44 px",
    ""
   ]
  ]
 },
 "kern-description-list": {
  "name": "Description List",
  "zweck": "Structures the presentation of terms and their definitions.",
  "wann": [
   "For everything that is fixed for a case: file number, loan amount, deadline — when none of it is edited."
  ],
  "nicht": [
   "When values are to be changeable — use the summary with a change link per row.",
   "For comparisons between several cases. That is a table."
  ],
  "barriere": [
   "A real <dl> with <dt> and <dd> — screen readers then read pairs, not two columns.",
   "Amounts with tabular figures — KERN sets tabular figures page-wide."
  ],
  "bsp": [
   {
    "titel": "Default"
   },
   {
    "titel": "Column"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Term and description can be associated",
    "dl/dt/dd"
   ]
  ]
 },
 "kern-table": {
  "name": "Table",
  "zweck": "Presents data in a table for quick comparison and overview.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Variants"
   },
   {
    "titel": "Variants"
   },
   {
    "titel": "Striped"
   },
   {
    "titel": "Footer"
   },
   {
    "titel": "Responsive"
   },
   {
    "titel": "Buttons in tables"
   }
  ],
  "tasten": [
   [
    "Tab",
    "reaches the table area"
   ],
   [
    "Arrow keys",
    "scroll a wide table"
   ]
  ],
  "pflichten": [
   [
    "Caption",
    "in the example"
   ],
   [
    "Wide table scrollable by keyboard",
    "tabindex=\"0\" on the area"
   ],
   [
    "Numbers right-aligned",
    "cell class numeric"
   ]
  ]
 },
 "kern-summary": {
  "name": "Summary",
  "zweck": "Summarises previously entered information and lets users edit it.",
  "wann": [
   "At the end of every application journey. Without it you submit blind."
  ],
  "nicht": [
   "For data that cannot be changed — the description list is enough there."
  ],
  "barriere": [
   "Every change link needs hidden additional text — otherwise you hear just “Change” three times.",
   "<dl> with <dt> and <dd>, so that the context is kept."
  ],
  "bsp": [
   {
    "titel": "Single"
   },
   {
    "titel": "Group"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Same terms and order as the task list",
    ""
   ]
  ]
 },
 "kern-tasklist": {
  "name": "Task List",
  "zweck": "Lists tasks and shows their status.",
  "wann": [
   "For multi-part procedures: which documents are missing, which checks are open — can be done in any order."
  ],
  "nicht": [
   "When the order is mandatory — use the step indicator (kn-steps).",
   "Without saying how many of how many are done."
  ],
  "barriere": [
   "The status is text in the badge, not just colour.",
   "The count “2 of 4” belongs above the list.",
   "A real list, so that the count is announced."
  ],
  "bsp": [
   {
    "titel": "Default"
   },
   {
    "titel": "Without numbering"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "At most 7 tasks, numbered throughout",
    ""
   ]
  ]
 },
 "kern-badge": {
  "name": "Badge",
  "zweck": "Gives a brief status note about a parent element.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Variants"
   },
   {
    "titel": "Variants with icon"
   },
   {
    "titel": "Size overview"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Not interactive",
    "no control in the markup"
   ],
   [
    "Dynamic badge is announced",
    "via the central announcement (M61)"
   ],
   [
    "Meaning not only through colour",
    "text in the badge, icon aria-hidden"
   ]
  ]
 },
 "kern-icon": {
  "name": "Icon",
  "zweck": "Visualises actions, content or status information.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Default"
   },
   {
    "titel": "Variants"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Decorative: aria-hidden; meaningful: a name",
    ""
   ],
   [
    "In links at least 24 px, operable at least 44 × 44 px",
    ""
   ]
  ]
 },
 "kern-divider": {
  "name": "Divider",
  "zweck": "Visually divides blocks of content into groups and can build a hierarchy.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Examples"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Purely decorative, hidden from assistive technology",
    "aria-hidden in the example"
   ]
  ]
 },
 "kern-alert": {
  "name": "Alert",
  "zweck": "Points out important information with a brief explanation and an optional link.",
  "wann": [
   "In the flow of the page, where it belongs."
  ],
  "nicht": [
   "As the only carrier of a colour. The type is always also stated as a word in the title."
  ],
  "barriere": [
   "The title names the type in words: Note, Success, Attention, Error.",
   "KERN’s examples set role=\"alert\" for all types. Recommendation [W]: role=\"alert\" only for messages that appear after an action; a note that is already there on load needs no live role — otherwise every page interrupts on load."
  ],
  "bsp": [
   {
    "titel": "Variants"
   },
   {
    "titel": "Variants with description"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Role programmatically identifiable",
    "role=\"alert\" in the example"
   ],
   [
    "Title as a real heading element",
    "h2.kern-title in the example"
   ],
   [
    "Dismissible message operable by keyboard",
    "KERN’s markup has no close button; only with a component of our own"
   ],
   [
    "Name a solution or the next action",
    ""
   ]
  ]
 },
 "kern-dialog": {
  "name": "Dialog",
  "zweck": "Conveys information and asks users to respond.",
  "wann": [
   "Before destructive actions.",
   "When work cannot continue without an answer."
  ],
  "nicht": [
   "For confirmations that may be missed — use the toast (kn-toast).",
   "For forms with more than three fields. Use a page of its own."
  ],
  "barriere": [
   "Native <dialog> with showModal(): the rest of the page becomes unreachable for assistive technology.",
   "Tab stays in the dialog, Esc closes it; after closing, focus returns to the trigger (kern-neu.js).",
   "aria-labelledby points to the heading.",
   "The title is a question, the buttons are answers — never “OK” and “Cancel”."
  ],
  "bsp": [
   {
    "titel": "Default"
   },
   {
    "titel": "Variant"
   },
   {
    "titel": "Additional example KERN 2.8.2 (nbyc): open modally (data-dialog-target, as in KERN’s documentation)"
   }
  ],
  "tasten": [
   [
    "Tab, Shift+Tab",
    "stays in the dialog (native)"
   ],
   [
    "Esc",
    "closes (native)"
   ],
   [
    "Enter, Space on X",
    "closes (kern-neu.js)"
   ],
   [
    "on opening",
    "focus on the first field, otherwise the title — never on Close (kern-neu.js, M60)"
   ],
   [
    "after closing",
    "focus on the trigger; without a trigger on the main content (kern-neu.js, M60)"
   ]
  ],
  "pflichten": [
   [
    "Esc closes, focus stays in the dialog",
    "showModal()"
   ],
   [
    "Open via a button (data-dialog-target)",
    "as in KERN’s documentation"
   ],
   [
    "X button closes",
    "KERN’s documentation script does not do it (F20)"
   ],
   [
    "Focus back to the trigger after closing",
    ""
   ],
   [
    "Outside inaccessible, scrolling locked",
    "modal; scroll lock via KERN’s CSS"
   ],
   [
    "Background click closes information dialogs only",
    "only with data-kn-close-on-backdrop"
   ],
   [
    "Title via aria-labelledby",
    "in the example; if missing, kern-neu.js adds it from the heading; check 13"
   ],
   [
    "First focus: first field or title, never Close",
    "autofocus takes precedence (M60)"
   ],
   [
    "Without a trigger: focus to the main content afterwards",
    "KERN rule (M60)"
   ]
  ]
 },
 "kern-loader": {
  "name": "Loader",
  "zweck": "An animated, spinning symbol that tells users content is loading.",
  "wann": [
   "When fetching from a specialist system whose response time nobody knows — KERN: only from 1 s of waiting.",
   "Always with a sentence next to it saying what is happening."
  ],
  "nicht": [
   "Longer than about ten seconds without further explanation.",
   "Not when the progress can be quantified — use the progress bar (kn-progress-bar)."
  ],
  "barriere": [
   "The announcement carries role=\"status\" (present in KERN’s example).",
   "With “reduce motion” the spinning stops (extension AB03)."
  ],
  "bsp": [
   {
    "titel": "Example"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Status change for assistive technology",
    "role=\"status\" in the example"
   ],
   [
    "Motion can be switched off (2.2.2, 2.3.3)",
    "extension “reduced motion” (AB03)"
   ],
   [
    "Only from 1 s of waiting, never several",
    "KN.lade(area, on): aria-busy, loader after 1 s, one per area (M57)"
   ]
  ]
 },
 "kern-progress": {
  "name": "Progress",
  "zweck": "Shows the overall length and the progress of a multi-step process.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Progress with label above"
   },
   {
    "titel": "Progress with label below"
   },
   {
    "titel": "Progress without label"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Step progress, not for loading",
    ""
   ],
   [
    "Change announced (4.1.3)",
    "via the central announcement (M61)"
   ]
  ]
 },
 "kern-grid": {
  "name": "Grid",
  "zweck": "Enables structured layouts by dividing them into rows and columns.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Responsive columns"
   },
   {
    "titel": "Column offset"
   },
   {
    "titel": "Horizontal alignment"
   },
   {
    "titel": "Self-alignment"
   },
   {
    "titel": "Self-alignment"
   },
   {
    "titel": "Self-alignment"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Reflow at 320 px and 200 % without loss (1.4.10)",
    ""
   ]
  ]
 },
 "kern-hilfsklassen": {
  "name": "Utility classes",
  "zweck": "Overview of the utility classes for layout and spacing.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Alignment (justify & align)"
   },
   {
    "titel": "Alignment (justify & align)"
   },
   {
    "titel": "Order"
   },
   {
    "titel": "Column placement (items)"
   },
   {
    "titel": "Column placement (items)"
   },
   {
    "titel": "Three-column layout"
   },
   {
    "titel": "Responsive adjustment"
   },
   {
    "titel": "3. Wrapping"
   },
   {
    "titel": "4. Positioning (starts & ends)"
   },
   {
    "titel": "5. Automatic columns (auto columns)"
   },
   {
    "titel": "6. Nesting"
   },
   {
    "titel": "7. Alignment"
   },
   {
    "titel": "Gap (spacing)"
   },
   {
    "titel": "Gap (spacing)"
   },
   {
    "titel": "Available breakpoints"
   },
   {
    "titel": "Available breakpoints"
   },
   {
    "titel": "Available breakpoints"
   },
   {
    "titel": "Stack"
   },
   {
    "titel": "Nested stack"
   },
   {
    "titel": "Responsive stack"
   },
   {
    "titel": "Visibility & display"
   },
   {
    "titel": "Aspect ratio with examples"
   },
   {
    "titel": "Overflow"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "kern-sr-only only for additional notes",
    ""
   ]
  ]
 },
 "kern-kopfzeile": {
  "name": "Header bar (Kopfzeile)",
  "zweck": "Identifies digital presences of the public administration, such as authorities, online services or service portals.",
  "wann": [],
  "nicht": [],
  "barriere": [],
  "bsp": [
   {
    "titel": "Header bar, container"
   },
   {
    "titel": "Header bar, fluid"
   }
  ],
  "tasten": [],
  "pflichten": [
   [
    "Only for public bodies, unchanged, never sticky",
    "KERN requirement"
   ]
  ]
 }
};
