/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Eingabe/Uhrzeit",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "uhrzeit", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Ein Textfeld für eine Uhrzeit. Kurzformen werden beim Verlassen vereinheitlicht: „930“, „9.30“, „9:30“ → 09:30.\n\n**Wann nehmen**\n\n- Termine und Fristen mit Uhrzeit.\n- Zusammen mit dem Kalender-Datum.\n\n**Wann nicht**\n\n- Kein natives type=time: Bedienung und Ansage unterscheiden sich je Browser stark.\n- Nicht für Dauern („2 Stunden“) — dafür ein Zahlfeld mit Einheit.\n\n**Barrierefreiheit**\n\n- Format steht sichtbar im Hinweis, nicht nur als Platzhalter.\n- Fehler mit KERNs Fehlerzustand: aria-invalid und Meldung über aria-describedby — die Meldung sagt, wie es richtig geht.\n- Die Fehler-ID steht nur bei Fehler in aria-describedby (versteckte Meldungen würden sonst mit vorgelesen).\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tab (Feld verlassen) | vereinheitlicht (930 → 09:30) oder zeigt den Fehler | Fehlermeldung über aria-describedby |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `data-kn-time-input` | am Feld; vereinheitlicht und prüft beim Verlassen |\n| `Feld-ID + \"-fehler\"` | die kern-error-Meldung, die das Skript ein- und ausblendet |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-time-input` | Uhrzeit | Time Input |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Time input\n\nA text field for a time of day. Short forms are normalised on leaving: “930”, “9.30”, “9:30” → 09:30.\n\n**When to use**\n\n- Appointments and deadlines with a time.\n- Together with the date picker.\n\n**When not to use**\n\n- No native type=time: operation and announcement differ greatly between browsers.\n- Not for durations (“2 hours”) — use a number field with a unit.\n\n**Accessibility**\n\n- The format is visible in the hint, not only as a placeholder.\n- Errors with KERN’s error state: aria-invalid and a message via aria-describedby — the message says how to do it right.\n- The error ID is in aria-describedby only while there is an error (hidden messages would otherwise be read out too).\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Tab (leaving the field) | normalises (930 → 09:30) or shows the error | error message via aria-describedby |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `data-kn-time-input` | on the field; normalises and validates on leaving |\n| `Feld-ID + \"-fehler\"` | the kern-error message that the script shows and hides |\n" } }
  }
};

const html01 = "<div class=\"kern-form-input\">\n  <label class=\"kern-label\" for=\"ti-1\">Termin um</label>\n  <div class=\"kern-hint\" id=\"ti-1-hinweis\">Format HH:MM, 24 Stunden, z. B. 09:30</div>\n  <input class=\"kern-form-input__input kern-form-input__input--width-4\" id=\"ti-1\" type=\"text\" inputmode=\"numeric\" autocomplete=\"off\" aria-describedby=\"ti-1-hinweis\" data-kn-time-input>\n  <p class=\"kern-error\" id=\"ti-1-fehler\" hidden>\n    <span class=\"kern-icon kern-icon--danger kern-icon--md\" aria-hidden=\"true\"></span>\n    <span class=\"kern-body\">Geben Sie die Uhrzeit als Stunden und Minuten ein, z. B. 09:30.</span>\n  </p>\n</div>";
export const Beispiel01 = {
  name: "Uhrzeit mit Fehlerzustand",
  render: () => html01,
  parameters: { docs: { source: { code: html01 }, description: { story: "„930“ eintippen und mit Tab verlassen → 09:30. „25:00“ zeigt KERNs Fehlerzustand mit konstruktiver Meldung.\n\nType “930” and leave with Tab → 09:30. “25:00” shows KERN’s error state with a constructive message." } } }
};
