/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Rückmeldung/Flüchtige Meldung",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "toast", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Bestätigt kurz, dass etwas geklappt hat. Verschwindet von selbst.\n\n**Wann nehmen**\n\n- Für Bestätigungen, die man auch verpassen darf: gespeichert, kopiert, gesendet.\n\n**Wann nicht**\n\n- Für Fehler. Wer sie verpasst, erfährt nie davon.\n- Für alles, was eine Entscheidung verlangt — dafür ist der Dialog da.\n\n**Barrierefreiheit**\n\n- Die Sammelstelle ist nur sichtbar; angesagt wird über die zentrale Ansage (M61, höflich) — nach dem laufenden Satz.\n- Kein Knopf (Entscheidung E5): Die Meldung enthält nur, was man auch verpassen darf. Alles mit Handlungsbedarf ist eine stehende Meldung (kern-alert).\n- Acht Sekunden — nicht kürzer, damit auch langsam Lesende mitkommen; nichts darin muss bedient werden (WCAG 2.2.1).\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Enter, Leertaste auf einem Beispielknopf | zeigt die Meldung; sie verschwindet nach 8 s von selbst, nichts darin ist bedienbar | der Meldungstext (zentrale Ansage) |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `KN.toast(text, \"success\")` | erzeugt eine Bestätigung (ohne Art: neutral) |\n| `kn-toast-region` | Sammelstelle mit role=status |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-toast` | Flüchtige Meldung | Toast |\n| `kn-toast-region` | Meldungsbereich | Toast Region |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Toast\n\nBriefly confirms that something worked. Disappears on its own.\n\n**When to use**\n\n- For confirmations that may be missed: saved, copied, sent.\n\n**When not to use**\n\n- For errors. Whoever misses them never learns about them.\n- For anything that requires a decision — that is what the dialog is for.\n\n**Accessibility**\n\n- The region is only visual; the announcement goes through the central announcement (M61, polite) — after the current sentence.\n- No button (decision E5): the message only contains what may be missed. Anything that needs action is a persistent message (kern-alert).\n- Eight seconds — not shorter, so that slow readers can keep up; nothing in it needs to be operated (WCAG 2.2.1).\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Enter, Space on an example button | shows the message; it disappears on its own after 8 s, nothing in it is operable | the message text (central announcement) |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `KN.toast(text, \"success\")` | creates a confirmation (without type: neutral) |\n| `kn-toast-region` | Region with role=status |\n" } }
  }
};

const html01 = "<div class=\"kern-flex kern-flex-wrap kern-align-items-center kern-gap-sm\">\n  <button class=\"kern-btn kern-btn--secondary\" onclick=\"KN.toast('Änderungen gespeichert.', 'success')\"><span class=\"kern-label\">Erfolgsmeldung</span></button>\n  <button class=\"kern-btn kern-btn--secondary\" onclick=\"KN.toast('Aktenzeichen kopiert.')\"><span class=\"kern-label\">Neutrale Bestätigung</span></button>\n</div>";
export const Beispiel01 = {
  name: "Ausprobieren",
  render: () => html01,
  parameters: { docs: { source: { code: html01 }, description: { story: "Bleibt acht Sekunden. Nicht kürzer — wer langsam liest, muss mitkommen.\n\nStays for eight seconds. Not shorter — slow readers must be able to keep up." } } }
};
