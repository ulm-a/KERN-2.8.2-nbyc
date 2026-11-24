/**
 * KERN 2.8.2 (nbyc) · in Arbeit — VERHALTEN (KERN 2.8.2 eingebunden, Erweiterungen aus KERN-Tokens)
 *
 * So wenig JavaScript wie möglich. Was ohne geht, geht ohne: Dialog
 * (natives <dialog>), Schalter und Ankreuzfeld (native Felder),
 * Schieberegler (natives <input type=range>).
 *
 * Klassisches Skript, kein Modul — öffnet per Doppelklick.
 * Jede Funktion sucht sich ihre Elemente über ein data-Attribut und
 * tut nichts, wenn keines da ist. Mehrfacher Aufruf ist harmlos.
 */
(function (global) {
"use strict";

function alle(w, e) { return Array.prototype.slice.call((e || document).querySelectorAll(w)); }

/* Esc schließt nur die INNERSTE Fläche (M100, Instruktion 9): wer auf Esc
   etwas geschlossen hat, verbraucht die Taste — die äußere Fläche
   (Schublade, Kurzhinweis, natives <dialog>) bekommt sie nicht mehr.
   Ohne das schloss ein Esc im Menü einer Schublade beide zugleich. */
function verbrauche(e) { e.preventDefault(); e.stopPropagation(); }

/* Merkt, dass ein Element für EINEN Zweck schon verdrahtet ist.
   Der Zweck gehört in den Schlüssel: Sortierung und Auswahl sitzen
   auf derselben Tabelle — mit nur einem Merker würde die zweite
   Funktion die Tabelle überspringen.
   ACHTUNG: "dataset" verlangt camelCase. Ein Schlüssel mit
   Bindestrich wirft einen SyntaxError und legt das Skript lahm. */
function neu(el, zweck) {
  /* EIGENER PRÄFIX "knFertig". Ohne ihn kollidiert der Merker mit dem
     Attribut, das die Komponente überhaupt erst auswählt:
     "data-kn-mode" liest sich als dataset.knMode — der Merker hätte
     denselben Namen, wäre von Anfang an gesetzt, und die Funktion
     hielte sich für schon verdrahtet. Ergebnis: der Knopf tut nichts,
     ohne jede Fehlermeldung. Betraf Modus, Reiter, Aufklapper, Menü. */
  var schluessel = "knFertig" + zweck.charAt(0).toUpperCase() + zweck.slice(1);
  if (el.dataset[schluessel]) return false;
  el.dataset[schluessel] = "1";
  return true;
}

/* ================================================================
   SPRACHE UND ANSAGE — Systemtexte DE/EN (M86), zentrale Ansage (M61)
   ================================================================
   Jeder Text, den das Skript zeigt oder ansagt, steht hier — je Sprache.
   Die Sprache kommt vom nächsten lang-Attribut (Element, sonst <html>):
   "en…" → Englisch, sonst Deutsch. Fachbegriffe nach katalog/begriffe.json. */

var TEXTE = {
  de: {
    nichtsGewaehlt: "Nichts ausgewählt",
    zeilenGewaehlt: function (n) { return n === 1 ? "1 Zeile ausgewählt" : n + " Zeilen ausgewählt"; },
    aktionenOben: "Aktionen über der Tabelle",
    anzahlGewaehlt: function (n) { return n + " ausgewählt"; },
    nochZeichen: function (n) { return n === 1 ? "Noch 1 Zeichen" : "Noch " + n + " Zeichen"; },
    zeichenZuViel: function (n) { return n === 1 ? "1 Zeichen zu viel" : n + " Zeichen zu viel"; },
    kopiert: "In die Zwischenablage kopiert.",
    treffer: function (n) { return n === 0 ? "Keine Treffer" : n === 1 ? "1 Treffer" : n + " Treffer"; },
    fehlerTitel: function (n) { return n === 1 ? "Es ist 1 Angabe zu prüfen" : "Es sind " + n + " Angaben zu prüfen"; },
    angabenVollstaendig: "Alle Angaben sind vollständig.",
    wirdGeladen: "Wird geladen …",
    geladen: "Geladen.",
    sortiert: function (spalte, auf) { return "Sortiert nach " + spalte + ", " + (auf ? "aufsteigend" : "absteigend"); },
    entfernen: "entfernen",
    eintragGewaehlt: function (name, n) { return name + " ausgewählt, " + n + " ausgewählt"; },
    eintragEntfernt: function (name, n) { return name + " entfernt, " + n + " ausgewählt"; },
    vorigerMonat: "Vorheriger Monat",
    naechsterMonat: "Nächster Monat",
    abbrechen: "Abbrechen",
    monate: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli",
      "August", "September", "Oktober", "November", "Dezember"],
    tage: [["Mo", "Montag"], ["Di", "Dienstag"], ["Mi", "Mittwoch"], ["Do", "Donnerstag"],
      ["Fr", "Freitag"], ["Sa", "Samstag"], ["So", "Sonntag"]],
    tagName: function (wt, d, m, j) { return wt + ", " + d + ". " + m + " " + j; },
    dichte: { compact: "kompakt", normal: "normal (KERN)", spacious: "weit" },
    dichteNormal: "Grundstellung: KERN 2.8.2 — keine Abweichung.",
    dichteStufe: function (name) { return "Stufe " + name + " — Abweichung von KERN."; },
    exportKopf: function (heute, name) {
      return "/* kern-anpassung.css — erzeugt " + heute + " von der Einstellseite (KERN 2.8.2 (nbyc))\n" +
        "   Bezug: KERN 2.8.2 · Stufe: " + name + "\n" +
        "   ABWEICHUNG VON KERN (E2): nur Maß-Tokens aus KERNs Skala.\n" +
        "   Einbinden NACH system/kern-neu.css. */\n";
    }
  },
  en: {
    nichtsGewaehlt: "Nothing selected",
    zeilenGewaehlt: function (n) { return n === 1 ? "1 row selected" : n + " rows selected"; },
    aktionenOben: "Actions above the table",
    anzahlGewaehlt: function (n) { return n + " selected"; },
    nochZeichen: function (n) { return n === 1 ? "1 character remaining" : n + " characters remaining"; },
    zeichenZuViel: function (n) { return n === 1 ? "1 character too many" : n + " characters too many"; },
    kopiert: "Copied to clipboard.",
    treffer: function (n) { return n === 0 ? "No results" : n === 1 ? "1 result" : n + " results"; },
    fehlerTitel: function (n) { return n === 1 ? "There is 1 problem" : "There are " + n + " problems"; },
    angabenVollstaendig: "All details are complete.",
    wirdGeladen: "Loading …",
    geladen: "Loaded.",
    sortiert: function (spalte, auf) { return "Sorted by " + spalte + ", " + (auf ? "ascending" : "descending"); },
    entfernen: "remove",
    eintragGewaehlt: function (name, n) { return name + " selected, " + n + " selected"; },
    eintragEntfernt: function (name, n) { return name + " removed, " + n + " selected"; },
    vorigerMonat: "Previous month",
    naechsterMonat: "Next month",
    abbrechen: "Cancel",
    monate: ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"],
    tage: [["Mo", "Monday"], ["Tu", "Tuesday"], ["We", "Wednesday"], ["Th", "Thursday"],
      ["Fr", "Friday"], ["Sa", "Saturday"], ["Su", "Sunday"]],
    tagName: function (wt, d, m, j) { return wt + ", " + d + " " + m + " " + j; },
    dichte: { compact: "compact", normal: "normal (KERN)", spacious: "spacious" },
    dichteNormal: "Default: KERN 2.8.2 — no deviation.",
    dichteStufe: function (name) { return "Level " + name + " — deviates from KERN."; },
    exportKopf: function (heute, name) {
      return "/* kern-anpassung.css — generated " + heute + " by the settings page (KERN 2.8.2 (nbyc))\n" +
        "   Based on: KERN 2.8.2 · Level: " + name + "\n" +
        "   DEVIATION FROM KERN (E2): size tokens from KERN's scale only.\n" +
        "   Include AFTER system/kern-neu.css. */\n";
    }
  }
};

function sprache(el) {
  var quelle = (el && el.closest && el.closest("[lang]")) || document.documentElement;
  return (quelle.getAttribute("lang") || "de").toLowerCase().indexOf("en") === 0 ? "en" : "de";
}

/* Text für ein Element in dessen Sprache; Funktionen bekommen die übrigen Werte. */
function txt(el, schluessel) {
  var w = TEXTE[sprache(el)][schluessel];
  return typeof w === "function" ? w.apply(null, Array.prototype.slice.call(arguments, 2)) : w;
}

/* EINE Stelle für alle Ansagen (M61). Zwei unsichtbare Bereiche: höflich
   (polite) für Rückmeldungen, dringlich (assertive) nur für Fehler, die
   sofort zählen. Der Text wird geleert und kurz danach gesetzt — so wird
   auch derselbe Text erneut angesagt.
   Ist ein modaler Dialog offen, ist alles außerhalb inert und würde nicht
   angesagt; dann liegen die Bereiche im obersten modalen Dialog.
   Sichtbare Statuszeilen (Auswahlzähler, Zeichenzähler …) tragen deshalb
   KEIN aria-live mehr — sonst käme jede Ansage doppelt. */
var ANSAGE_PAUSE = 100;

function ansageBereich(art) {
  var modal = alle("dialog[open]").filter(function (d) {
    try { return d.matches(":modal"); } catch (e) { return false; }
  }).pop();
  var ort = modal || document.body;
  var bereich = ort.querySelector(":scope > [data-kn-announce='" + art + "']");
  if (!bereich) {
    bereich = document.createElement("div");
    bereich.className = "kern-sr-only";
    bereich.setAttribute("data-kn-announce", art);
    bereich.setAttribute("aria-live", art);
    bereich.setAttribute("aria-atomic", "true");
    ort.appendChild(bereich);
  }
  return bereich;
}

var ANSAGE_DAUER = 5000;   /* danach geleert — alter Text soll im Lesemodus nicht herumstehen */

function melde(text, art) {
  var bereich = ansageBereich(art === "assertive" ? "assertive" : "polite");
  bereich.textContent = "";
  global.clearTimeout(bereich.knLeeren);
  global.setTimeout(function () { bereich.textContent = text; }, ANSAGE_PAUSE);
  bereich.knLeeren = global.setTimeout(function () { bereich.textContent = ""; }, ANSAGE_PAUSE + ANSAGE_DAUER);
}

/* ================================================================
   MODI
   ================================================================ */

/* Modus-Schalter (E9: englische Werte, Stufe 5c):
     data-kn-mode="theme"    value light | dark | system  → data-kern-theme
     data-kn-mode="contrast" value normal | high | system → data-kn-contrast
   Thema über KERNs eigenen Schalter (M18), Kontrast als Erweiterung
   (01b-erweiterung.css). Gemerkt wird je Gerät in localStorage. */
var SPEICHER = { theme: "kn-theme", contrast: "kn-contrast" };

function setzeModus(art, wert) {
  var attr = art === "theme" ? "data-kern-theme" : "data-kn-contrast";
  if (wert === "system") {
    document.documentElement.removeAttribute(attr);
    try { global.localStorage.removeItem(SPEICHER[art]); } catch (e) {}
  } else {
    document.documentElement.setAttribute(attr, wert);
    try { global.localStorage.setItem(SPEICHER[art], wert); } catch (e) {}
  }
  alle("[data-kn-mode='" + art + "']").forEach(function (k) {
    k.setAttribute("aria-pressed", String(k.value === wert));
  });
}

/* Ohne Knopf "system" (Katalog seit 13.10.2026): solange nichts gewählt ist,
   gilt das Betriebssystem — gedrückt ist der Knopf, der dem entspricht, und
   er folgt, wenn sich die Systemeinstellung ändert. */
var SYSTEMFRAGE = { theme: ["(prefers-color-scheme: dark)", "dark", "light"],
                    contrast: ["(prefers-contrast: more)", "high", "normal"] };
var systemBeobachtet = {};   /* KN.start läuft mehrfach (Katalog) — je Art nur ein Beobachter */

function zeigeSystemwert(art) {
  var knoepfe = alle("[data-kn-mode='" + art + "']");
  var mitSystem = knoepfe.some(function (k) { return k.value === "system"; });
  var f = SYSTEMFRAGE[art], wert = "system";
  if (!mitSystem) wert = global.matchMedia && global.matchMedia(f[0]).matches ? f[1] : f[2];
  knoepfe.forEach(function (k) { k.setAttribute("aria-pressed", String(k.value === wert)); });
}

function starteModi() {
  ["theme", "contrast"].forEach(function (art) {
    var w = null;
    try { w = global.localStorage.getItem(SPEICHER[art]); } catch (e) {}
    if (w) { setzeModus(art, w); } else { zeigeSystemwert(art); }
    if (global.matchMedia && !systemBeobachtet[art]) {
      systemBeobachtet[art] = true;
      var mq = global.matchMedia(SYSTEMFRAGE[art][0]);
      var folge = function () {
        var gewaehlt = null;
        try { gewaehlt = global.localStorage.getItem(SPEICHER[art]); } catch (e) {}
        if (!gewaehlt) zeigeSystemwert(art);
      };
      if (mq.addEventListener) mq.addEventListener("change", folge);
    }
  });
  alle("[data-kn-mode]").forEach(function (k) {
    if (!neu(k, "modus")) return;
    k.addEventListener("click", function () { setzeModus(k.dataset.knMode, k.value); });
  });
}

/* ================================================================
   SCHIEBEREGLER
   ================================================================
   WebKit hat kein "::-webkit-slider-progress". Der gefüllte Teil
   entsteht deshalb aus einem Verlauf, dessen Grenze in
   "--kn-fill" steht. Diese Funktion hält sie nach.
   ================================================================ */

function starteRegler() {
  alle("input[type='range'].kn-slider").forEach(function (r) {
    function nach() {
      var min = Number(r.min || 0), max = Number(r.max || 100);
      var anteil = max === min ? 0 : (Number(r.value) - min) / (max - min);
      r.style.setProperty("--kn-fill", (anteil * 100).toFixed(2));
      var ziel = r.dataset.knValueTarget && document.getElementById(r.dataset.knValueTarget);
      if (ziel) {
        ziel.textContent = r.dataset.knUnit
          ? r.value + " " + r.dataset.knUnit
          : r.value;
      }
    }
    if (neu(r, "regler")) {
      r.addEventListener("input", nach);
      r.addEventListener("change", nach);
    }
    nach();
  });
}

/* ================================================================
   UMSCHALTER UND ZAHLENFELD — jede Interaktion mit Rückmeldung (K15)
   ================================================================
   kn-filter-tag mit aria-pressed schaltet einzeln; kn-segmented wählt
   genau einen (Modusknöpfe data-kn-mode haben ihr eigenes Skript). Der
   Zustand wird über aria-pressed angesagt ("gedrückt").
   kn-number-stepper: erster Knopf −, letzter +; ändern um step, an min/max
   gesperrt (aria-disabled, Sperre M25); neuer Wert wird mit der
   Beschriftung angesagt — der Fokus bleibt ja auf dem Knopf. */

function starteUmschalter() {
  alle(".kn-filter-tag[aria-pressed]").forEach(function (k) {
    if (k.hasAttribute("data-kn-mode") || !neu(k, "umschalter")) return;
    k.addEventListener("click", function () {
      k.setAttribute("aria-pressed", String(k.getAttribute("aria-pressed") !== "true"));
    });
  });
  alle(".kn-segmented").forEach(function (gruppe) {
    if (gruppe.querySelector("[data-kn-mode]") || !neu(gruppe, "segmente")) return;
    var knoepfe = alle(".kn-segmented__button[aria-pressed]", gruppe);
    knoepfe.forEach(function (k) {
      k.addEventListener("click", function () {
        knoepfe.forEach(function (x) { x.setAttribute("aria-pressed", String(x === k)); });
      });
    });
  });
}

function starteZahlfeld() {
  alle(".kn-number-stepper").forEach(function (huelle) {
    if (!neu(huelle, "zahlfeld")) return;
    var feld = huelle.querySelector("input");
    var knoepfe = alle(".kn-number-stepper__button", huelle);
    if (!feld || knoepfe.length < 2) return;
    var weniger = knoepfe[0], mehr = knoepfe[knoepfe.length - 1];
    var beschriftung = feld.id && document.querySelector("label[for='" + feld.id + "']");
    function grenzen() {
      var v = Number(feld.value);
      var min = feld.min !== "" ? Number(feld.min) : -Infinity, max = feld.max !== "" ? Number(feld.max) : Infinity;
      weniger.setAttribute("aria-disabled", String(v <= min));
      mehr.setAttribute("aria-disabled", String(v >= max));
    }
    function schritt(richtung) {
      try { if (richtung > 0) { feld.stepUp(); } else { feld.stepDown(); } } catch (e) { return; }
      feld.dispatchEvent(new Event("input", { bubbles: true }));
      feld.dispatchEvent(new Event("change", { bubbles: true }));
      grenzen();
      melde((beschriftung ? beschriftung.textContent.trim() + ": " : "") + feld.value);
    }
    weniger.addEventListener("click", function () { schritt(-1); });
    mehr.addEventListener("click", function () { schritt(1); });
    feld.addEventListener("input", grenzen);
    grenzen();
  });
}

/* ================================================================
   REITER — Muster der WAI-ARIA Authoring Practices
   ================================================================ */

function starteReiter() {
  alle("[data-kn-tabs]").forEach(function (gruppe) {
    if (!neu(gruppe, "reiter")) return;
    var knoepfe = alle("[role='tab']", gruppe);
    if (!knoepfe.length) return;

    function waehle(i, fokus) {
      knoepfe.forEach(function (k, j) {
        var an = i === j;
        k.setAttribute("aria-selected", String(an));
        k.tabIndex = an ? 0 : -1;
        var feld = document.getElementById(k.getAttribute("aria-controls"));
        if (feld) feld.hidden = !an;
      });
      if (fokus) knoepfe[i].focus();
    }

    /* M59: ein Panel ohne bedienbaren Inhalt bekommt selbst einen Tab-Halt —
       sonst springt Tab vom Reiter am Inhalt vorbei */
    knoepfe.forEach(function (k) {
      var feld = document.getElementById(k.getAttribute("aria-controls"));
      if (feld && !feld.hasAttribute("tabindex") &&
          !feld.querySelector("a[href], button, input, select, textarea, [tabindex]")) feld.tabIndex = 0;
    });

    knoepfe.forEach(function (k, i) {
      k.addEventListener("click", function () { waehle(i, true); });
      k.addEventListener("keydown", function (e) {
        var z = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: knoepfe.length - 1 }[e.key];
        if (z === undefined) return;
        e.preventDefault();
        waehle((z + knoepfe.length) % knoepfe.length, true);
      });
    });
  });
}

/* ================================================================
   MENÜ (M54)
   ================================================================
   kn-menu: Aktionsmenü nach APG "Menu Button". Knopf data-kn-menu mit
   aria-controls, aria-haspopup, aria-expanded; Liste role=menu, Einträge
   role=menuitem (Knöpfe). Am Knopf: ↓ Enter Leertaste öffnen beim ersten,
   ↑ beim letzten Eintrag. Im Menü: ↓ ↑ (rundum), Pos1/Ende, Buchstabe
   springt (Tippsuche), Esc schließt mit Fokus zurück, Tab schließt.
   Nach einer Aktion schließt das Menü, der Fokus geht zum Knopf.
   Auswahlmenü (z. B. Filter): Einträge role=menuitemradio mit aria-checked
   und value. Die Wahl setzt aria-checked (genau einer je Menü), meldet
   sich als Ereignis "kn-menu-wahl" am Menü (detail.value) und schließt.
   kern-dropdown (KERN, <details>, "in Bearbeitung" — nur CSS für Links
   und Filter): Tasten nach dem Offenlegungs-Muster, siehe unten. */

function starteMenues() {
  alle("[data-kn-menu]").forEach(function (knopf) {
    if (!neu(knopf, "menue")) return;
    var menue = document.getElementById(knopf.getAttribute("aria-controls"));
    /* ohne aria-controls: das Menü direkt hinter dem Knopf — und die
       Verbindung eintragen (im Teilknopf-Beispiel fehlte sie bis 13.10.2026,
       das Menü ließ sich nie öffnen) */
    if (!menue && knopf.nextElementSibling && knopf.nextElementSibling.getAttribute("role") === "menu") {
      menue = knopf.nextElementSibling;
      if (!menue.id) menue.id = "kn-menu-" + Math.random().toString(36).slice(2, 8);
      knopf.setAttribute("aria-controls", menue.id);
    }
    if (!menue) return;
    if (!knopf.hasAttribute("aria-haspopup")) knopf.setAttribute("aria-haspopup", "menu");
    /* li um die Einträge sind nur Gerüst (APG: role=none) */
    alle(":scope > li", menue).forEach(function (li) { li.setAttribute("role", "none"); });
    function punkte() { return alle("[role='menuitem'], [role='menuitemradio']", menue); }
    punkte().forEach(function (p) { p.tabIndex = -1; });

    function zu(zurueck) {
      if (menue.hidden) return;
      menue.hidden = true;
      knopf.setAttribute("aria-expanded", "false");
      if (zurueck) knopf.focus();
    }
    function auf(wo) {
      menue.hidden = false;
      knopf.setAttribute("aria-expanded", "true");
      var p = punkte();
      if (p.length) p[wo === "ende" ? p.length - 1 : 0].focus();
    }

    knopf.addEventListener("click", function (e) {
      e.stopPropagation();
      if (menue.hidden) { auf("anfang"); } else { zu(false); }
    });
    knopf.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); auf("anfang"); }
      else if (e.key === "ArrowUp") { e.preventDefault(); auf("ende"); }
      else if (e.key === "Escape" && !menue.hidden) { verbrauche(e); zu(false); }
    });

    menue.addEventListener("keydown", function (e) {
      var p = punkte(), i = p.indexOf(document.activeElement), z = null;
      if (e.key === "Escape") { verbrauche(e); zu(true); return; }
      if (e.key === "Tab") { zu(false); return; }
      if (e.key === "ArrowDown") z = p[(i + 1) % p.length];
      else if (e.key === "ArrowUp") z = p[(i - 1 + p.length) % p.length];
      else if (e.key === "Home") z = p[0];
      else if (e.key === "End") z = p[p.length - 1];
      else if (e.key.length === 1 && /\S/.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey) {
        var l = sprache(menue), b = e.key.toLocaleLowerCase(l);
        var rest = p.slice(i + 1).concat(p.slice(0, i + 1));
        z = rest.filter(function (x) { return x.textContent.trim().toLocaleLowerCase(l).indexOf(b) === 0; })[0] || null;
        if (!z) return;
      } else { return; }
      e.preventDefault();
      z.focus();
    });
    /* nach einer Aktion: zu, Fokus zum Knopf (gesperrte Einträge tun nichts — Sperre M25) */
    menue.addEventListener("click", function (e) {
      var radio = e.target.closest("[role='menuitemradio']");
      if (radio && radio.getAttribute("aria-disabled") !== "true") {
        alle("[role='menuitemradio']", menue).forEach(function (r) {
          r.setAttribute("aria-checked", String(r === radio));
        });
        zu(true);
        menue.dispatchEvent(new CustomEvent("kn-menu-wahl", { detail: { value: radio.value || radio.textContent.trim() } }));
        return;
      }
      if (e.target.closest("[role='menuitem']")) zu(true);
    });

    document.addEventListener("click", function (e) {
      if (!menue.hidden && !menue.contains(e.target) && e.target !== knopf) zu(false);
    });
  });

  /* kern-dropdown (<details class="kern-dropdown">): Esc schließt und gibt
     den Fokus an die Kopfzeile; ↓ aus der Kopfzeile in die Liste; ↓ ↑
     Pos1/Ende wandern zwischen Links und Feldern; Tab bleibt frei. */
  alle("details.kern-dropdown").forEach(function (d) {
    if (!neu(d, "kernDropdown")) return;
    var kopf = d.querySelector("summary");
    function ziele() { return alle(".kern-dropdown__body a[href], .kern-dropdown__body input, .kern-dropdown__body button", d); }
    d.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && d.open) { verbrauche(e); d.open = false; if (kopf) kopf.focus(); return; }
      var z = ziele(); if (!z.length) return;
      var i = z.indexOf(document.activeElement), n = null;
      if (e.key === "ArrowDown") {
        if (document.activeElement === kopf && !d.open) d.open = true;
        n = z[Math.min(i + 1, z.length - 1)];
      } else if (e.key === "ArrowUp") { n = i > 0 ? z[i - 1] : kopf; }
      else if ((e.key === "Home" || e.key === "End") && i >= 0) { n = e.key === "Home" ? z[0] : z[z.length - 1]; }
      if (!n || !d.open) return;
      e.preventDefault();
      n.focus();
    });
  });
}

/* ================================================================
   TABELLE — Sortierung und Auswahl
   ================================================================ */

function wert(zelle) {
  var t = (zelle.dataset.knValue || zelle.textContent).trim();
  var d = t.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (d) return d[3] + d[2] + d[1];
  var z = t.replace(/\./g, "").replace(",", ".").replace(/[^\d.-]/g, "");
  if (z !== "" && !isNaN(Number(z))) return Number(z);
  return t.toLocaleLowerCase("de");
}

function starteSortierung() {
  alle("table[data-kn-sortable]").forEach(function (tabelle) {
    if (!neu(tabelle, "sortierung")) return;
    var rumpf = tabelle.tBodies[0];
    if (!rumpf) return;

    alle("th.kn-table-sort", tabelle).forEach(function (kopf) {
      var knopf = kopf.querySelector(".kn-table-sort__button");
      if (!knopf) return;
      knopf.addEventListener("click", function () {
        var richtung = kopf.getAttribute("aria-sort") === "ascending" ? "descending" : "ascending";
        alle("th", tabelle).forEach(function (h) { h.setAttribute("aria-sort", "none"); });
        kopf.setAttribute("aria-sort", richtung);
        melde(txt(tabelle, "sortiert", knopf.textContent.trim(), richtung === "ascending"));   /* M56 */
        var index = alle("th", tabelle).indexOf(kopf);
        /* Detailzeilen (kn-table-expand) wandern mit ihrer Zeile */
        var zeilen = alle("tr", rumpf).filter(function (z) { return !z.classList.contains("kn-table-expand__detail"); });
        zeilen.sort(function (a, b) {
          var x = wert(a.cells[index]), y = wert(b.cells[index]);
          var v = x < y ? -1 : x > y ? 1 : 0;
          return richtung === "ascending" ? v : -v;
        });
        zeilen.forEach(function (z) {
          rumpf.appendChild(z);
          var auf = z.querySelector("[data-kn-table-expand]");
          var detail = auf && document.getElementById(auf.getAttribute("aria-controls"));
          if (detail) rumpf.appendChild(detail);
        });
      });
    });
  });
}

function starteAuswahl() {
  alle("table[data-kn-selectable]").forEach(function (tabelle) {
    if (!neu(tabelle, "auswahl")) return;
    var kaestchen = alle("tbody [data-kn-row-select]", tabelle);
    var kopf = tabelle.querySelector("thead [data-kn-select-all]");
    /* Stapelaktionen (M93): ersetzen die Werkzeuge, solange etwas gewählt ist */
    var stapel = document.querySelector("[data-kn-table-batch='" + tabelle.id + "']");
    var leiste = stapel && stapel.closest(".kn-table-toolbar");
    var vorher = 0;
    var anzeige = document.querySelector("[data-kn-status-of='" + tabelle.id + "']");
    if (anzeige) anzeige.removeAttribute("aria-live");   /* Ansage läuft zentral (M61) */

    function zaehle(ansagen) {
      var n = kaestchen.filter(function (k) { return k.checked; }).length;
      if (leiste) leiste.toggleAttribute("data-kn-batch-active", n > 0);
      if (stapel) {
        var zahl = stapel.querySelector(".kn-table-batch__count");
        if (zahl) zahl.textContent = txt(tabelle, "anzahlGewaehlt", n);
      }
      if (kopf) {
        kopf.checked = n === kaestchen.length && n > 0;
        kopf.indeterminate = n > 0 && n < kaestchen.length;
      }
      var text = n === 0 ? txt(tabelle, "nichtsGewaehlt") : txt(tabelle, "zeilenGewaehlt", n);
      if (anzeige) anzeige.textContent = text;
      /* beim ersten Ankreuzen einmal sagen, wo die Aktionen sind */
      if (stapel && n > 0 && vorher === 0) text += ". " + txt(tabelle, "aktionenOben");
      /* Auswahlzähler immer angesagt (M56) — auch ohne sichtbare Zeile */
      if (ansagen) melde(text);
      vorher = n;
    }

    function setze(an) {
      kaestchen.forEach(function (k) {
        k.checked = an;
        var z = k.closest("tr");
        if (z) z.setAttribute("aria-selected", String(an));
      });
      zaehle(true);
    }

    if (stapel) alle("[data-kn-table-batch-clear]", stapel).forEach(function (b) {
      b.addEventListener("click", function () {
        setze(false);
        /* die Leiste wird unsichtbar — Fokus nicht verlieren */
        (kopf || kaestchen[0] || tabelle).focus();
      });
    });

    kaestchen.forEach(function (k) {
      k.addEventListener("change", function () {
        var z = k.closest("tr");
        if (z) z.setAttribute("aria-selected", String(k.checked));
        zaehle(true);
      });
    });

    if (kopf) kopf.addEventListener("change", function () { setze(kopf.checked); });

    zaehle(false);
  });
}

/* ================================================================
   COMBOBOX
   ================================================================ */

function starteCombobox() {
  alle("[data-kn-combobox]").forEach(function (huelle) {
    if (!neu(huelle, "combobox")) return;
    var feld = huelle.querySelector("input");
    var liste = huelle.querySelector("[role='listbox']");
    if (!feld || !liste) return;

    var punkte = alle("[role='option']", liste);
    var i = -1, warte = null, stumm = false;

    function zeige(auf) {
      liste.hidden = !auf;
      feld.setAttribute("aria-expanded", String(auf));
      if (!auf) { i = -1; feld.removeAttribute("aria-activedescendant"); }
    }

    function markiere(neuI) {
      var s = punkte.filter(function (p) { return !p.hidden; });
      if (!s.length) return;
      i = (neuI + s.length) % s.length;
      punkte.forEach(function (p) { p.setAttribute("aria-selected", "false"); });
      s[i].setAttribute("aria-selected", "true");
      if (s[i].id) feld.setAttribute("aria-activedescendant", s[i].id);
      s[i].scrollIntoView({ block: "nearest" });
    }

    function uebernimm(p) { feld.value = p.textContent.trim(); zeige(false); feld.focus(); }

    feld.addEventListener("input", function () {
      var l = sprache(huelle), such = feld.value.trim().toLocaleLowerCase(l);
      var treffer = 0;
      punkte.forEach(function (p) {
        var passt = p.textContent.toLocaleLowerCase(l).indexOf(such) !== -1;
        p.hidden = !passt;
        if (passt) treffer++;
      });
      var leer = liste.querySelector(".kn-combobox__empty");
      if (leer) leer.hidden = treffer > 0;
      zeige(true);
      i = -1;
      feld.removeAttribute("aria-activedescendant");
      /* Trefferzahl ansagen (M55), erst wenn das Tippen kurz ruht */
      global.clearTimeout(warte);
      if (!stumm) warte = global.setTimeout(function () { melde(txt(huelle, "treffer", treffer)); }, 600);
    });

    feld.addEventListener("keydown", function (e) {
      var offen = !liste.hidden, aktiv = offen && i >= 0;
      if (e.key === "ArrowDown") { e.preventDefault(); if (!offen) zeige(true); markiere(i + 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); if (!offen) zeige(true); markiere(i < 0 ? -1 : i - 1); }
      /* Pos1/Ende springen in der Liste, solange dort ein Eintrag aktiv ist;
         sonst bewegen sie wie gewohnt die Schreibmarke im Feld */
      else if ((e.key === "Home" || e.key === "End") && aktiv) {
        e.preventDefault();
        markiere(e.key === "Home" ? 0 : punkte.filter(function (p) { return !p.hidden; }).length - 1);
      }
      else if (e.key === "Enter") {
        var s = punkte.filter(function (p) { return !p.hidden; })[i];
        if (s && offen) { e.preventDefault(); uebernimm(s); }
      }
      /* Esc: erst schließen, beim zweiten Mal leeren (APG) */
      else if (e.key === "Escape") {
        if (offen) { verbrauche(e); zeige(false); }
        else if (feld.value) {
          verbrauche(e);
          feld.value = "";
          stumm = true; feld.dispatchEvent(new Event("input", { bubbles: true })); stumm = false;
          zeige(false);
        }
      }
    });

    punkte.forEach(function (p) { p.addEventListener("click", function () { uebernimm(p); }); });
    document.addEventListener("click", function (e) { if (!huelle.contains(e.target)) zeige(false); });
  });
}

/* ================================================================
   ZEICHENZÄHLER, PASSWORT, SCHUBLADE, TOAST
   ================================================================ */

function starteZaehler() {
  alle("[data-kn-char-count]").forEach(function (feld) {
    if (!neu(feld, "zaehler")) return;
    var grenze = Number(feld.getAttribute("maxlength") || feld.dataset.knCharCount);
    var anzeige = document.getElementById(feld.dataset.knCharCountTarget);
    if (!anzeige || !grenze) return;
    anzeige.removeAttribute("aria-live");   /* Ansage läuft zentral (M61) */
    var warte = null;

    function zeige(ansagen) {
      var rest = grenze - feld.value.length;
      var text = rest >= 0 ? txt(feld, "nochZeichen", rest) : txt(feld, "zeichenZuViel", Math.abs(rest));
      anzeige.textContent = text;
      anzeige.toggleAttribute("data-kn-near-limit", rest <= 20 && rest >= 0);
      anzeige.toggleAttribute("data-kn-over-limit", rest < 0);
      /* Erst ab 20 Zeichen Rest ansagen, und erst wenn das Tippen kurz
         ruht — sonst redet der Screenreader bei jedem Tastendruck. */
      global.clearTimeout(warte);
      if (ansagen && rest <= 20) warte = global.setTimeout(function () { melde(text); }, 700);
    }

    feld.addEventListener("input", function () { zeige(true); });
    zeige(false);
  });
}

/* SCHUBLADE (M51) — ausdrücklich NICHT modal.
   Knöpfe mit data-kn-drawer und aria-controls öffnen/schließen; Knöpfe
   IN der Schublade schließen nur. Öffnen: Fokus in die Schublade (sie
   selbst, tabindex=-1, Name aus aria-label). Esc oder Schließen: zu,
   Fokus zurück auf den Auslöser. Verlässt der Fokus die Schublade (Tab
   hinaus, Klick daneben), schließt sie — so liegt er nie verdeckt hinter
   ihr (WCAG 2.4.11). Geschlossen ist sie inert (sofort) und unsichtbar
   (CSS: visibility, nach der Bewegung). Immer nur eine offen. */
function starteSchubladen() {
  alle("[data-kn-drawer]").forEach(function (knopf) {
    if (!neu(knopf, "schublade")) return;
    var s = document.getElementById(knopf.getAttribute("aria-controls"));
    if (!s) return;
    var innen = s.contains(knopf);
    if (!innen) knopf.setAttribute("aria-expanded", String(s.hasAttribute("data-kn-open")));
    if (neu(s, "schubladeFlaeche")) {
      s.tabIndex = -1;
      /* inert wirkt SOFORT — visibility erst nach der Ausfahr-Bewegung; ohne
         inert war die Fläche 200 ms lang noch per Umschalt+Tab erreichbar */
      s.inert = !s.hasAttribute("data-kn-open");
      s.addEventListener("keydown", function (e) {
        /* ein inneres Menü, eine Liste oder ein Popover hat Esc schon verbraucht (M100) */
        if (e.key === "Escape" && !e.defaultPrevented && s.hasAttribute("data-kn-open")) { verbrauche(e); schliesseSchublade(s, true); }
      });
      s.addEventListener("focusout", function (e) {
        /* nur wenn der Fokus wirklich hinausgeht — nicht beim Schließen selbst */
        if (s.hasAttribute("data-kn-open") && e.relatedTarget && !s.contains(e.relatedTarget)) schliesseSchublade(s, false);
      });
      document.addEventListener("pointerdown", function (e) {
        if (!s.hasAttribute("data-kn-open") || s.contains(e.target)) return;
        if (e.target.closest && e.target.closest("[data-kn-drawer][aria-controls='" + s.id + "']")) return;
        schliesseSchublade(s, false);
      });
    }
    knopf.addEventListener("click", function () {
      if (innen || s.hasAttribute("data-kn-open")) { schliesseSchublade(s, true); return; }
      alle(".kn-drawer[data-kn-open]").forEach(function (andere) { schliesseSchublade(andere, false); });
      s.knAusloeser = knopf;
      s.inert = false;
      s.setAttribute("data-kn-open", "");
      alle("[data-kn-drawer][aria-controls='" + s.id + "']").forEach(function (k) {
        if (!s.contains(k)) k.setAttribute("aria-expanded", "true");
      });
      s.focus();
    });
  });
}

function schliesseSchublade(s, fokusZurueck) {
  if (!s.hasAttribute("data-kn-open")) return;
  s.removeAttribute("data-kn-open");
  s.inert = true;
  alle("[data-kn-drawer][aria-controls='" + s.id + "']").forEach(function (k) {
    if (!s.contains(k)) k.setAttribute("aria-expanded", "false");
  });
  if (fokusZurueck && s.knAusloeser) s.knAusloeser.focus();
}

/* KURZHINWEIS (M53, WCAG 1.4.13): erscheint bei Zeigen, Fokus und —
   für Touch — beim Antippen; bleibt, solange Zeiger oder Fokus darauf
   sind (die Blase ist überfahrbar, CSS-Brücke über die Lücke); Esc blendet
   ihn aus, ohne den Fokus zu bewegen. */
function starteKurzhinweis() {
  alle(".kn-tooltip").forEach(function (anker) {
    if (!neu(anker, "kurzhinweis")) return;
    function zurueck() { anker.removeAttribute("data-kn-dismissed"); }
    anker.addEventListener("mouseleave", zurueck);
    anker.addEventListener("focusout", function () { zurueck(); anker.removeAttribute("data-kn-shown"); });
    anker.addEventListener("click", function () {
      zurueck();
      anker.toggleAttribute("data-kn-shown");
    });
  });
  if (neu(document.documentElement, "kurzhinweisEsc")) {
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape" || e.defaultPrevented) return;
      alle(".kn-tooltip").forEach(function (anker) {
        if (anker.matches(":hover, :focus-within, [data-kn-shown]")) {
          anker.setAttribute("data-kn-dismissed", "");
          anker.removeAttribute("data-kn-shown");
        }
      });
    });
    document.addEventListener("pointerdown", function (e) {
      alle(".kn-tooltip[data-kn-shown]").forEach(function (anker) { if (!anker.contains(e.target)) anker.removeAttribute("data-kn-shown"); });
    });
  }
}

/* Flüchtige Meldung (E5): NUR Bestätigungen ohne Handlungsbedarf,
   verschwindet von selbst, KEIN Knopf — was eine Handlung braucht, ist
   eine stehende kern-alert. Art "success" oder keine (neutral). */
function toast(text, art) {
  var feld = document.querySelector(".kn-toast-region");
  if (!feld) {
    /* nur sichtbar — angesagt wird über die zentrale Ansage (M52, M61) */
    feld = document.createElement("div");
    feld.className = "kn-toast-region";
    document.body.appendChild(feld);
  }
  var t = document.createElement("div");
  t.className = "kn-toast" + (art === "success" ? " kn-toast--success" : "");
  t.innerHTML = '<span class="kn-toast__text"></span>';
  t.querySelector(".kn-toast__text").textContent = text;
  feld.appendChild(t);
  melde(text);
  global.setTimeout(function () { t.remove(); }, 8000);
  return t;
}

/* ================================================================
   GESPERRT (E4, M25) — aria-disabled statt disabled
   ================================================================
   KERN: "disabled" möglichst vermeiden; wenn nötig aria-disabled="true"
   — das Element bleibt per Tab erreichbar und für Screenreader lesbar,
   JavaScript muss aber jede Bedienung sperren (kern-ux.de, Form Inputs).
   Eine Stelle für das ganze System: Abfänger auf Dokumentebene in der
   Einfangphase, also VOR jedem Baustein-Skript. Gesperrt ist ein Element,
   wenn es selbst oder ein Vorfahr aria-disabled="true" trägt.
   Tab, Umschalt, Esc und das Bewegen der Schreibmarke bleiben frei. */

var WERTTASTEN = /^(ArrowUp|ArrowDown|ArrowLeft|ArrowRight|Home|End|PageUp|PageDown)$/;

function gesperrt(el) {
  return el && el.closest ? el.closest('[aria-disabled="true"]') : null;
}

function waehltPerTaste(el) {
  return el.tagName === "SELECT" || el.type === "range" || el.type === "radio";
}

function starteSperre() {
  if (!neu(document.documentElement, "sperre")) return;
  function halt(e) { e.preventDefault(); e.stopImmediatePropagation(); }
  document.addEventListener("click", function (e) {
    if (gesperrt(e.target)) halt(e);
  }, true);
  document.addEventListener("beforeinput", function (e) {
    if (gesperrt(e.target)) halt(e);
  }, true);
  document.addEventListener("keydown", function (e) {
    if (!gesperrt(e.target)) return;
    if (e.key === "Enter" || e.key === " " ||
        (WERTTASTEN.test(e.key) && waehltPerTaste(e.target))) halt(e);
  }, true);
  ["pointerdown", "mousedown"].forEach(function (art) {
    document.addEventListener(art, function (e) {
      if (gesperrt(e.target) && waehltPerTaste(e.target)) halt(e);
    }, true);
  });
}

/* ================================================================
   KERN-BAUSTEINE: VERHALTEN (Stufe 4, M39, M32)
   ================================================================
   KERN 2.8.2 liefert CSS, aber (außer der Kopfzeile) kein JavaScript:
   "CSS allein liefert keine Interaktionslogik … KERN-JavaScript
   einbinden oder gleichwertig implementieren" (kern-ux.de, Übertragung
   auf eigene Technologien). Hier das Gleichwertige — angehängt an KERNs
   eigenes Markup, damit ein eingefügtes Original-Beispiel ohne
   Zusatzattribute funktioniert. */

/* DIALOG — Öffnen nach KERNs Doku: Knopf mit data-dialog-target="<id>".
   Esc, Fokus hinein und Fokusfalle: natives showModal(). Ergänzt, was
   KERN verlangt, das Doku-Skript aber nicht tut (F20): Der X-Knopf
   (kern-btn mit kern-icon--close) schließt; der Fokus kehrt zum Auslöser
   zurück; Klick auf den Hintergrund schließt NUR, wenn der Dialog
   data-kn-close-on-backdrop trägt (KERN: nur bei Infodialogen). */
function starteKernDialoge() {
  alle("[data-dialog-target]").forEach(function (knopf) {
    if (!neu(knopf, "kernDialogAuf")) return;
    knopf.addEventListener("click", function () {
      var dialog = document.getElementById(knopf.getAttribute("data-dialog-target"));
      if (!dialog || dialog.open || !dialog.showModal) return;
      dialog.knAusloeser = knopf;
      dialog.showModal();
      erstfokus(dialog);
    });
  });
  alle("dialog.kern-dialog").forEach(function (dialog) {
    if (!neu(dialog, "kernDialog")) return;
    /* M60: Name Pflicht — fehlt er, kommt er aus der ersten Überschrift */
    var titel = dialog.querySelector("h1, h2, h3, h4, .kern-title");
    if (!dialog.hasAttribute("aria-labelledby") && !dialog.hasAttribute("aria-label") && titel) {
      if (!titel.id) titel.id = "kn-dialog-titel-" + Math.random().toString(36).slice(2, 8);
      dialog.setAttribute("aria-labelledby", titel.id);
    }
    alle(".kern-btn", dialog).forEach(function (b) {
      if (b.querySelector(".kern-icon--close")) {
        b.addEventListener("click", function () { dialog.close(); });
      }
    });
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog && dialog.hasAttribute("data-kn-close-on-backdrop")) dialog.close();
    });
    dialog.addEventListener("close", function () {
      var a = dialog.knAusloeser;
      dialog.knAusloeser = null;
      if (a && document.contains(a)) { a.focus(); return; }
      /* geöffnet ohne Auslöser (z. B. vom Programm): Fokus an den Hauptinhalt (KERN, M60) */
      var haupt = document.querySelector("main") || document.body;
      if (!haupt.hasAttribute("tabindex")) haupt.tabIndex = -1;
      haupt.focus();
    });
  });
}

/* Erstfokus im Dialog (M60): [autofocus] gewinnt; sonst das erste Feld (Formular-
   dialog); sonst der Titel (tabindex=-1). Nie der Schließen-Knopf — den wählt
   showModal() von sich aus, wenn er das erste Bedienelement ist. */
function erstfokus(dialog) {
  if (dialog.querySelector("[autofocus]")) return;
  var feld = dialog.querySelector("input:not([type='hidden']), select, textarea");
  if (feld) { feld.focus(); return; }
  var id = dialog.getAttribute("aria-labelledby");
  var titel = (id && document.getElementById(id)) || dialog.querySelector("h1, h2, h3, h4, .kern-title");
  if (titel) {
    if (!titel.hasAttribute("tabindex")) titel.tabIndex = -1;
    titel.focus();
  }
}

/* PASSWORT — KERN-Markup: kern-input-group mit Passwortfeld und einem
   Knopf mit aria-pressed. Der Knopf schaltet Klartext/maskiert; das
   Symbol wechselt (visibility-off = verborgen, visibility = sichtbar).
   Die Beschriftung bleibt gleich ("Passwort anzeigen"): bei aria-pressed
   sagt der Zustand "gedrückt/nicht gedrückt", nicht der Text (ARIA). */
function starteKernPasswort() {
  alle(".kern-input-group").forEach(function (gruppe) {
    var feld = gruppe.querySelector('input[type="password"]');
    var knopf = gruppe.querySelector("button[aria-pressed]");
    if (!feld || !knopf || !neu(knopf, "kernPasswort")) return;
    var symbol = knopf.querySelector(".kern-icon");
    knopf.addEventListener("click", function () {
      var zeigen = knopf.getAttribute("aria-pressed") !== "true";
      feld.type = zeigen ? "text" : "password";
      knopf.setAttribute("aria-pressed", String(zeigen));
      if (symbol) {
        symbol.classList.toggle("kern-icon--visibility", zeigen);
        symbol.classList.toggle("kern-icon--visibility-off", !zeigen);
      }
    });
  });
}

/* ================================================================
   DICHTE-STUFEN (E2, M77–M79)
   ================================================================
   Markup: eine Auswahlgruppe mit data-kn-density-for="<id der Vorschau>"
   und Optionen value="compact|normal|spacious"; optional eine Tabelle
   (tbody data-kn-density-table), ein Export-Knopf (data-kn-density-export)
   und eine Statuszeile (data-kn-density-status). Die Werte stehen NUR in
   01b-erweiterung.css, Abschnitt 7 — hier werden sie aus dem geladenen
   CSS gelesen, nie abgeschrieben. */

function dichteRegeln() {
  var stufen = {};
  function lies(blatt) {
    var regeln;
    try { regeln = blatt.cssRules; } catch (e) { return; }
    Array.prototype.forEach.call(regeln, function (r) {
      if (r.styleSheet) { lies(r.styleSheet); return; }
      var m = r.selectorText && r.selectorText.match(/^\[data-kn-density="(compact|spacious)"\]$/);
      if (!m) return;
      stufen[m[1]] = [];
      for (var i = 0; i < r.style.length; i++) {
        var n = r.style[i];
        stufen[m[1]].push([n, r.style.getPropertyValue(n).trim()]);
      }
    });
  }
  Array.prototype.forEach.call(document.styleSheets, lies);
  return stufen;
}

function starteDichte() {
  alle("[data-kn-density-for]").forEach(function (gruppe) {
    if (!neu(gruppe, "dichte")) return;
    var ziel = document.getElementById(gruppe.getAttribute("data-kn-density-for"));
    var tabelle = document.querySelector("[data-kn-density-table]");
    var knopf = document.querySelector("[data-kn-density-export]");
    var status = document.querySelector("[data-kn-density-status]");
    var stufen = dichteRegeln();
    var namen = txt(gruppe, "dichte");
    if (status) status.removeAttribute("role");   /* Ansage läuft zentral (M61) */
    if (tabelle) {
      var alle_ = {};
      Object.keys(stufen).forEach(function (s) { stufen[s].forEach(function (p) { alle_[p[0]] = 1; }); });
      tabelle.innerHTML = Object.keys(alle_).map(function (n) {
        function w(s) { var f = (stufen[s] || []).filter(function (p) { return p[0] === n; })[0]; return f ? f[1] : "—"; }
        return '<tr class="kern-table__row"><td class="kern-table__cell kn-code">' + n + '</td>' +
          '<td class="kern-table__cell kn-code">' + w("compact") + '</td>' +
          '<td class="kern-table__cell">KERN</td>' +
          '<td class="kern-table__cell kn-code">' + w("spacious") + '</td></tr>';
      }).join("");
    }
    function setze(stufe, ansagen) {
      if (stufe === "normal") { ziel.removeAttribute("data-kn-density"); }
      else { ziel.setAttribute("data-kn-density", stufe); }
      if (knopf) knopf.setAttribute("aria-disabled", String(stufe === "normal"));
      var text = stufe === "normal" ? txt(gruppe, "dichteNormal") : txt(gruppe, "dichteStufe", namen[stufe]);
      if (status) status.textContent = text;
      if (ansagen) melde(text);
      gruppe.dataset.knDensityStage = stufe;
    }
    alle("input[type='radio']", gruppe).forEach(function (r) {
      r.addEventListener("change", function () { if (r.checked) setze(r.value, true); });
      if (r.checked) setze(r.value, false);
    });
    if (knopf) knopf.addEventListener("click", function () {
      var stufe = gruppe.dataset.knDensityStage;
      if (!stufe || stufe === "normal" || !stufen[stufe]) return;
      var heute = new Date().toISOString().slice(0, 10);
      var text = txt(gruppe, "exportKopf", heute, namen[stufe]) + ":root {\n" +
        stufen[stufe].map(function (p) { return "  " + p[0] + ": " + p[1] + ";"; }).join("\n") + "\n}\n";
      var a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([text], { type: "text/css" }));
      a.download = "kern-anpassung.css";
      document.body.appendChild(a);
      a.click();
      global.setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 0);
    });
  });
}

/* ================================================================
   POPOVER und HINWEIS AUF KLICK (M92) — nicht modal
   ================================================================
   Popover: Knopf data-kn-popover mit aria-controls → Bereich (hidden).
     Öffnen setzt aria-expanded und den Fokus in den Bereich; Esc schließt
     und gibt den Fokus zurück; Klick daneben oder Fokus hinaus schließt.
   Hinweis auf Klick (Toggletip): Knopf data-kn-toggletip="Text" mit
     Namen; daneben die leere Blase .kn-toggletip__bubble. Der Klick
     schreibt den Text hinein und sagt ihn über die zentrale Ansage an
     (WCAG 4.1.3, M61). Esc und Klick daneben leeren sie wieder.
   Das native "popover"-Attribut fehlt in der Browser-Untergrenze
   (Chrome 111, Firefox 121, Safari 16.2) — deshalb Skript. */

function starteAufKlick() {
  alle("[data-kn-popover]").forEach(function (knopf) {
    if (!neu(knopf, "popover")) return;
    var feld = document.getElementById(knopf.getAttribute("aria-controls"));
    if (!feld) return;
    function zu(zurueck) {
      if (feld.hidden) return;
      feld.hidden = true;
      knopf.setAttribute("aria-expanded", "false");
      if (zurueck) knopf.focus();
    }
    knopf.addEventListener("click", function (e) {
      e.stopPropagation();
      if (feld.hidden) {
        feld.hidden = false;
        knopf.setAttribute("aria-expanded", "true");
        var erstes = feld.querySelector("a[href], button, input, select, textarea, [tabindex]");
        (erstes || feld).focus();
      } else { zu(false); }
    });
    feld.addEventListener("keydown", function (e) { if (e.key === "Escape" && !feld.hidden) { verbrauche(e); zu(true); } });
    knopf.addEventListener("keydown", function (e) { if (e.key === "Escape" && !feld.hidden) { verbrauche(e); zu(false); } });
    feld.addEventListener("focusout", function (e) {
      if (e.relatedTarget && !feld.contains(e.relatedTarget) && e.relatedTarget !== knopf) zu(false);
    });
    document.addEventListener("click", function (e) {
      if (!feld.contains(e.target) && e.target !== knopf) zu(false);
    });
  });
  alle("[data-kn-toggletip]").forEach(function (knopf) {
    if (!neu(knopf, "toggletip")) return;
    var blase = knopf.parentNode.querySelector(".kn-toggletip__bubble");
    if (!blase) return;
    blase.removeAttribute("role");   /* Ansage läuft zentral (M61) */
    function leer() { blase.textContent = ""; knopf.setAttribute("aria-expanded", "false"); }
    knopf.setAttribute("aria-expanded", "false");
    knopf.addEventListener("click", function (e) {
      e.stopPropagation();
      if (blase.textContent) { leer(); return; }
      blase.textContent = knopf.getAttribute("data-kn-toggletip");
      knopf.setAttribute("aria-expanded", "true");
      melde(blase.textContent);
    });
    knopf.addEventListener("keydown", function (e) { if (e.key === "Escape" && blase.textContent) { verbrauche(e); leer(); } });
    document.addEventListener("click", function (e) { if (e.target !== knopf) leer(); });
  });
}

/* KOPIEREN (Codeblock, M95): data-kn-copy="<id>" kopiert den Text des
   Elements; die Bestätigung kommt als flüchtige Meldung (E5). */
function starteKopieren() {
  alle("[data-kn-copy]").forEach(function (knopf) {
    if (!neu(knopf, "kopieren")) return;
    knopf.addEventListener("click", function () {
      var quelle = document.getElementById(knopf.getAttribute("data-kn-copy"));
      if (!quelle || !global.navigator.clipboard) return;
      global.navigator.clipboard.writeText(quelle.textContent).then(function () {
        toast(txt(knopf, "kopiert"), "success");
      });
    });
  });
}

/* ================================================================
   BAUMANSICHT (M91) — APG Tree View
   ================================================================
   Markup: <ul class="kn-tree" role="tree" aria-label="…" data-kn-tree>
   mit <li role="treeitem" [aria-expanded]> und darin <span
   class="kn-tree__label"> und ggf. <ul role="group">. Tasten: ↓ ↑ nächster/
   voriger sichtbarer Eintrag; → öffnet bzw. geht zum ersten Kind; ← schließt
   bzw. geht zum Elternteil; Pos1/Ende; Enter/Leertaste wählt; Buchstabe
   springt. Wandernder Tab-Halt: genau ein Eintrag hat tabindex=0. */

function starteBaum() {
  alle("[data-kn-tree]").forEach(function (baum) {
    if (!neu(baum, "baum")) return;
    var eintraege = alle("[role='treeitem']", baum);
    function sichtbar() {
      return eintraege.filter(function (e) {
        var p = e.parentNode.closest("[role='treeitem']");
        while (p) { if (p.getAttribute("aria-expanded") === "false") return false; p = p.parentNode.closest("[role='treeitem']"); }
        return true;
      });
    }
    function text(e) { return e.querySelector(".kn-tree__label").textContent.trim(); }
    function fokus(e) {
      eintraege.forEach(function (x) { x.tabIndex = -1; });
      e.tabIndex = 0;
      e.focus();
    }
    function waehle(e) {
      eintraege.forEach(function (x) { x.setAttribute("aria-selected", "false"); });
      e.setAttribute("aria-selected", "true");
    }
    eintraege.forEach(function (e, i) { e.tabIndex = i === 0 ? 0 : -1; if (!e.hasAttribute("aria-selected")) e.setAttribute("aria-selected", "false"); });
    baum.addEventListener("keydown", function (ev) {
      var e = ev.target.closest("[role='treeitem']");
      if (!e) return;
      var s = sichtbar(), i = s.indexOf(e), offen = e.getAttribute("aria-expanded");
      var k = ev.key, ziel = null;
      if (k === "ArrowDown") ziel = s[i + 1];
      else if (k === "ArrowUp") ziel = s[i - 1];
      else if (k === "Home") ziel = s[0];
      else if (k === "End") ziel = s[s.length - 1];
      else if (k === "ArrowRight") {
        if (offen === "false") { e.setAttribute("aria-expanded", "true"); ev.preventDefault(); return; }
        if (offen === "true") ziel = e.querySelector("[role='treeitem']");
      } else if (k === "ArrowLeft") {
        if (offen === "true") { e.setAttribute("aria-expanded", "false"); ev.preventDefault(); return; }
        ziel = e.parentNode.closest("[role='treeitem']");
      } else if (k === "Enter" || k === " ") { waehle(e); ev.preventDefault(); return; }
      else if (k.length === 1 && /\S/.test(k)) {
        var rest = s.slice(i + 1).concat(s.slice(0, i + 1));
        var l = sprache(baum);
        ziel = rest.filter(function (x) { return text(x).toLocaleLowerCase(l).indexOf(k.toLocaleLowerCase(l)) === 0; })[0];
      } else { return; }
      ev.preventDefault();
      if (ziel) fokus(ziel);
    });
    baum.addEventListener("click", function (ev) {
      var label = ev.target.closest(".kn-tree__label");
      if (!label) return;
      var e = label.parentNode;
      if (e.hasAttribute("aria-expanded")) e.setAttribute("aria-expanded", String(e.getAttribute("aria-expanded") !== "true"));
      waehle(e);
      fokus(e);
    });
  });
}

/* ================================================================
   MEHRFACHAUSWAHL (M90) — Combobox mit aria-multiselectable
   ================================================================
   Markup: Hülle data-kn-multiselect mit Liste der Marken
   (.kn-multiselect__chips), Feld role=combobox, Liste role=listbox
   aria-multiselectable=true; Ansagen über die zentrale Ansage (M61). Tasten im Feld:
   ↓ öffnet/wandert, ↑ wandert, Pos1/Ende springen zum ersten/letzten
   Eintrag, solange einer aktiv ist (M101), Enter wählt oder entfernt, Esc schließt,
   Rücktaste im leeren Feld entfernt die letzte Wahl. Marken: Enter/
   Leertaste entfernt, Fokus zurück ins Feld. Jede Änderung wird angesagt. */

function starteMehrfachauswahl() {
  alle("[data-kn-multiselect]").forEach(function (huelle) {
    if (!neu(huelle, "mehrfach")) return;
    var feld = huelle.querySelector("[role='combobox']");
    var liste = huelle.querySelector("[role='listbox']");
    var marken = huelle.querySelector(".kn-multiselect__chips");
    var punkte = alle("[role='option']", liste);
    var i = -1;
    function sichtbare() { return punkte.filter(function (p) { return !p.hidden; }); }
    function zeige(auf) {
      liste.hidden = !auf;
      feld.setAttribute("aria-expanded", String(auf));
      if (!auf) { i = -1; markiere(-1); }
    }
    function markiere(n) {
      var s = sichtbare();
      punkte.forEach(function (p) { p.classList.remove("kn-is-active"); });
      if (n < 0 || !s.length) { feld.removeAttribute("aria-activedescendant"); return; }
      i = (n + s.length) % s.length;
      s[i].classList.add("kn-is-active");
      feld.setAttribute("aria-activedescendant", s[i].id);
      s[i].scrollIntoView({ block: "nearest" });
    }
    function gewaehlt() { return punkte.filter(function (p) { return p.getAttribute("aria-selected") === "true"; }); }
    function zeichne() {
      marken.innerHTML = "";
      gewaehlt().forEach(function (p) {
        var li = document.createElement("li");
        var b = document.createElement("button");
        b.type = "button";
        b.className = "kn-filter-tag";
        b.innerHTML = '<span></span><span class="kern-sr-only"></span><span aria-hidden="true"> ×</span>';
        b.firstChild.textContent = p.textContent.trim();
        b.children[1].textContent = " " + txt(huelle, "entfernen");
        b.addEventListener("click", function () { schalte(p); feld.focus(); });
        li.appendChild(b);
        marken.appendChild(li);
      });
    }
    function schalte(p) {
      var an = p.getAttribute("aria-selected") !== "true";
      p.setAttribute("aria-selected", String(an));
      zeichne();
      melde(txt(huelle, an ? "eintragGewaehlt" : "eintragEntfernt", p.textContent.trim(), gewaehlt().length));
    }
    feld.addEventListener("input", function () {
      var l = sprache(huelle), such = feld.value.trim().toLocaleLowerCase(l);
      punkte.forEach(function (p) { p.hidden = p.textContent.toLocaleLowerCase(l).indexOf(such) === -1; });
      zeige(true);
      markiere(-1);
    });
    feld.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); if (liste.hidden) zeige(true); markiere(i + 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); markiere(i - 1); }
      /* Pos1/Ende wie in der Combobox: in der Liste nur mit aktivem Eintrag,
         sonst bewegen sie die Schreibmarke im Feld (M101) */
      else if ((e.key === "Home" || e.key === "End") && !liste.hidden && i >= 0) {
        e.preventDefault();
        markiere(e.key === "Home" ? 0 : sichtbare().length - 1);
      }
      else if (e.key === "Enter") { var s = sichtbare()[i]; if (s && !liste.hidden) { e.preventDefault(); schalte(s); } }
      else if (e.key === "Escape" && !liste.hidden) { verbrauche(e); zeige(false); }
      else if (e.key === "Backspace" && !feld.value) { var g = gewaehlt(); if (g.length) schalte(g[g.length - 1]); }
    });
    punkte.forEach(function (p) { p.addEventListener("click", function () { schalte(p); feld.focus(); }); });
    document.addEventListener("click", function (e) { if (!huelle.contains(e.target)) zeige(false); });
    zeichne();
  });
}

/* ================================================================
   DATENTABELLE ERWEITERT (M93) — aufklappbare Zeilen, Spaltenwahl
   ================================================================
   Aufklappen: Offenlegungs-Knopf (APG Disclosure) data-kn-table-expand
   mit aria-controls auf die Detailzeile. Spaltenwahl: Ankreuzfelder mit
   data-kn-column="n" (n = Spalte ab 1) in einer Hülle
   data-kn-columns-for="Tabellen-ID"; die Detailzeilen passen colspan an. */

function starteTabellenErweiterung() {
  alle("[data-kn-table-expand]").forEach(function (knopf) {
    if (!neu(knopf, "aufklappen")) return;
    var detail = document.getElementById(knopf.getAttribute("aria-controls"));
    if (!detail) return;
    knopf.addEventListener("click", function () {
      var auf = knopf.getAttribute("aria-expanded") !== "true";
      knopf.setAttribute("aria-expanded", String(auf));
      detail.hidden = !auf;
    });
  });

  alle("[data-kn-columns-for]").forEach(function (huelle) {
    if (!neu(huelle, "spalten")) return;
    var tabelle = document.getElementById(huelle.getAttribute("data-kn-columns-for"));
    if (!tabelle) return;
    var felder = alle("input[data-kn-column]", huelle);
    function wende() {
      var sichtbar = tabelle.tHead ? tabelle.tHead.rows[0].cells.length : 0;
      felder.forEach(function (f) {
        var i = Number(f.getAttribute("data-kn-column")) - 1;
        alle("tr", tabelle).forEach(function (z) {
          if (z.classList.contains("kn-table-expand__detail")) return;
          if (z.cells[i]) z.cells[i].hidden = !f.checked;
        });
        if (!f.checked) sichtbar--;
      });
      alle(".kn-table-expand__detail > td", tabelle).forEach(function (td) { td.colSpan = sichtbar; });
    }
    felder.forEach(function (f) { f.addEventListener("change", wende); });
    wende();
  });
}

/* ================================================================
   FORMULARPRÜFUNG UND FEHLERZUSAMMENFASSUNG (M58)
   ================================================================
   form[data-kn-validate]: beim Absenden die Pflichtfelder prüfen
   (aria-required="true" am Feld; data-kn-required am fieldset — aria-required
   ist an role=group nicht erlaubt). Fehler: KERNs Fehlerzustand
   am Feld (Meldung = Element Feld-ID + "-fehler"), oben die Zusammenfassung
   (.kn-error-summary im Formular) mit je einem Verweis, Fokus darauf
   (Statusmeldung, KERN V14). Verweise in JEDER .kn-error-summary setzen den
   Fokus ins Feld und holen seine Beschriftung ins Bild. Wird ein Feld
   ausgefüllt, geht sein Fehlerzustand weg. data-kn-validate="check-only":
   nur prüfen, nicht absenden (Beispiele). data-kn-validate="event": nicht
   absenden, sondern bei Erfolg das Ereignis "kn-gueltig" am Formular
   melden — die Seite entscheidet, was folgt (z. B. nächster Schritt einer
   Formularstrecke, Muster). */

function starteFormularPruefung() {
  alle("form[data-kn-validate]").forEach(function (form) {
    if (!neu(form, "pruefung")) return;
    form.noValidate = true;
    var liste = form.querySelector(".kn-error-summary");
    function leer(feld) {
      if (feld.tagName === "FIELDSET") return !feld.querySelector("input:checked");
      return !String(feld.value || "").trim();
    }
    function ziel(feld) { return feld.tagName === "FIELDSET" ? feld.querySelector("input") : feld; }
    function markiere(feld, ok) { feldFehler(feld, ok); }
    form.addEventListener("submit", function (e) {
      var fehler = alle("[aria-required='true'], fieldset[data-kn-required]", form).filter(function (feld) {
        var falsch = leer(feld);
        markiere(feld, !falsch);
        return falsch;
      });
      if (!fehler.length) {
        if (liste) liste.hidden = true;
        var art = form.getAttribute("data-kn-validate");
        if (art === "check-only") { e.preventDefault(); toast(txt(form, "angabenVollstaendig"), "success"); }
        else if (art === "event") { e.preventDefault(); form.dispatchEvent(new CustomEvent("kn-gueltig")); }
        return;
      }
      e.preventDefault();
      if (!liste) { ziel(fehler[0]).focus(); return; }
      var titel = liste.querySelector(".kn-error-summary__title");
      if (titel) titel.textContent = txt(form, "fehlerTitel", fehler.length);
      var ul = liste.querySelector(".kn-error-summary__list");
      ul.innerHTML = "";
      fehler.forEach(function (feld) {
        var meldung = document.getElementById(feld.id + "-fehler");
        var li = document.createElement("li"), a = document.createElement("a");
        a.className = "kern-link";
        a.href = "#" + ziel(feld).id;
        a.textContent = meldung ? meldung.textContent.trim() : feld.id;
        li.appendChild(a);
        ul.appendChild(li);
      });
      liste.hidden = false;
      if (!liste.hasAttribute("tabindex")) liste.tabIndex = -1;
      liste.focus();
    });
    form.addEventListener("input", function (e) {
      var feld = e.target.closest("[aria-required='true']") || e.target.closest("fieldset[data-kn-required]");
      if (feld && !leer(feld)) markiere(feld, true);
    });
    form.addEventListener("change", function (e) {
      var feld = e.target.closest("fieldset[data-kn-required]");
      if (feld && !leer(feld)) markiere(feld, true);
    });
  });
  if (neu(document.documentElement, "summaryLinks")) {
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest(".kn-error-summary a[href^='#']");
      if (!a) return;
      var feld = document.getElementById(a.getAttribute("href").slice(1));
      if (!feld) return;
      e.preventDefault();
      var beschriftung = (feld.id && document.querySelector("label[for='" + feld.id + "']")) ||
                         (feld.closest("fieldset") && feld.closest("fieldset").querySelector("legend"));
      (beschriftung || feld).scrollIntoView({ block: "start" });
      feld.focus({ preventScroll: true });
    });
  }
}

/* ================================================================
   LADEN (M57) — KN.lade(bereich, an)
   ================================================================
   an=true: aria-busy am Bereich; erst nach 1 s erscheint EIN KERN-Lader
   (kern-loader--visible) und "Wird geladen" wird angesagt — kurze Wartezeiten
   flackern nicht. an=false: aria-busy weg, Lader weg, "Geladen" angesagt,
   wenn der Lader sichtbar war. Ist der Bereich ein Knopf, zeigt er den
   Ladezustand (data-kn-loading) sofort und ist so lange gesperrt. */
var LADE_VERZUG = 1000;

function lade(bereich, an) {
  if (!bereich) return;
  var knopf = bereich.matches(".kern-btn");
  global.clearTimeout(bereich.knLadeUhr);
  if (an) {
    bereich.setAttribute("aria-busy", "true");
    if (knopf) { bereich.setAttribute("data-kn-loading", ""); bereich.setAttribute("aria-disabled", "true"); }
    bereich.knLadeUhr = global.setTimeout(function () {
      if (!knopf) {
        var lader = bereich.querySelector(":scope > .kern-loader[data-kn-loader]");
        if (!lader) {
          lader = document.createElement("div");
          lader.className = "kern-loader kern-loader--visible";
          lader.setAttribute("data-kn-loader", "");
          lader.innerHTML = '<span class="kern-sr-only"></span>';
          lader.firstChild.textContent = txt(bereich, "wirdGeladen");
          bereich.insertBefore(lader, bereich.firstChild);
        }
        lader.hidden = false;
      }
      bereich.knLadeSichtbar = true;
      melde(txt(bereich, "wirdGeladen"));
    }, LADE_VERZUG);
  } else {
    bereich.removeAttribute("aria-busy");
    if (knopf) { bereich.removeAttribute("data-kn-loading"); bereich.removeAttribute("aria-disabled"); }
    var l = bereich.querySelector(":scope > .kern-loader[data-kn-loader]");
    if (l) l.remove();
    if (bereich.knLadeSichtbar) melde(txt(bereich, "geladen"));
    bereich.knLadeSichtbar = false;
  }
}

/* ================================================================
   KALENDER-DATUM (M89) — APG "Date Picker Dialog"
   ================================================================
   Markup: Hülle data-kn-date-picker mit Feld (TT.MM.JJJJ) und Knopf
   (data-kn-date-picker-open). Der Dialog wird vom Skript gebaut (modal,
   showModal). Tasten im Raster: ← → ±1 Tag, ↑ ↓ ±1 Woche, Pos1/Ende
   Wochenanfang/-ende, Bild↑/↓ Monat, Umschalt+Bild↑/↓ Jahr, Enter/
   Leertaste übernimmt, Esc bricht ab. Fokus danach immer auf dem Knopf.
   Eingetipptes wird beim Verlassen geprüft ("1.2.2026", "01022026" →
   01.02.2026; "31.02.2026" → Fehlerzustand, Meldung Feld-ID + "-fehler"). */

function zweistellig(n) { return (n < 10 ? "0" : "") + n; }
function alsText(d) { return zweistellig(d.getDate()) + "." + zweistellig(d.getMonth() + 1) + "." + d.getFullYear(); }
function ausText(s) {
  var w = (s || "").trim();
  /* auch ohne Punkte: 14102026 */
  if (/^\d{8}$/.test(w)) w = w.slice(0, 2) + "." + w.slice(2, 4) + "." + w.slice(4);
  var m = w.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (!m) return null;
  var d = new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]));
  return d.getMonth() === Number(m[2]) - 1 ? d : null;
}
/* Monat verschieben, Tag am Monatsende kappen (31.01. + 1 Monat = 28./29.02., APG) */
function plusMonate(d, n) {
  var tag = d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth() + n);
  d.setDate(Math.min(tag, new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()));
}
function gleich(a, b) { return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }

function starteKalender() {
  alle("[data-kn-date-picker]").forEach(function (huelle, nr) {
    if (!neu(huelle, "kalender")) return;
    var feld = huelle.querySelector("input");
    var knopf = huelle.querySelector("[data-kn-date-picker-open]");
    if (!feld || !knopf || !global.HTMLDialogElement) return;
    var id = "kn-dp-" + nr;
    var T = TEXTE[sprache(huelle)];
    var dialog = document.createElement("dialog");
    dialog.className = "kn-date-picker__dialog";
    dialog.setAttribute("aria-labelledby", id + "-t");
    dialog.innerHTML =
      '<div class="kn-date-picker__head">' +
      '<button type="button" class="kern-btn kern-btn--tertiary" data-z="-1"><span class="kern-icon kern-icon--chevron-left" aria-hidden="true"></span><span class="kern-sr-only">' + T.vorigerMonat + '</span></button>' +
      '<h2 class="kn-date-picker__title" id="' + id + '-t"></h2>' +
      '<button type="button" class="kern-btn kern-btn--tertiary" data-z="1"><span class="kern-icon kern-icon--chevron-right" aria-hidden="true"></span><span class="kern-sr-only">' + T.naechsterMonat + '</span></button></div>' +
      '<table class="kn-date-picker__grid" role="grid" aria-labelledby="' + id + '-t"><thead><tr>' +
      T.tage.map(function (t) { return '<th scope="col"><abbr title="' + t[1] + '">' + t[0] + '</abbr></th>'; }).join("") +
      '</tr></thead><tbody></tbody></table>' +
      '<div class="kn-date-picker__foot"><button type="button" class="kern-btn kern-btn--secondary" data-zu><span class="kern-label">' + T.abbrechen + '</span></button></div>';
    huelle.appendChild(dialog);
    var titel = dialog.querySelector("h2"), koerper = dialog.querySelector("tbody");
    var fokusTag, gewaehlt, angesagt = null;

    function zeichne() {
      var erster = new Date(fokusTag.getFullYear(), fokusTag.getMonth(), 1);
      var start = new Date(erster);
      start.setDate(1 - ((erster.getDay() + 6) % 7));
      var heute = new Date();
      titel.textContent = T.monate[fokusTag.getMonth()] + " " + fokusTag.getFullYear();
      /* Monatswechsel ansagen (zentral, M61; im modalen Dialog landet die
         Ansage im Dialog) — nicht beim Öffnen: dort sagt der Tag den Monat */
      if (angesagt !== null && angesagt !== titel.textContent) melde(titel.textContent);
      angesagt = titel.textContent;
      var html = "";
      for (var w = 0; w < 6; w++) {
        html += "<tr>";
        for (var t = 0; t < 7; t++) {
          var d = new Date(start);
          d.setDate(start.getDate() + w * 7 + t);
          var aussen = d.getMonth() !== fokusTag.getMonth();
          html += '<td><button type="button" class="kn-date-picker__day' + (aussen ? " kn-date-picker__day--outside" : "") + '"' +
            ' data-datum="' + alsText(d) + '" tabindex="' + (gleich(d, fokusTag) ? 0 : -1) + '"' +
            (gleich(d, heute) ? ' aria-current="date"' : "") +
            ' aria-pressed="' + (gleich(d, gewaehlt) ? "true" : "false") + '"' +
            ' aria-label="' + T.tagName(T.tage[(d.getDay() + 6) % 7][1], d.getDate(), T.monate[d.getMonth()], d.getFullYear()) + '">' +
            d.getDate() + "</button></td>";
        }
        html += "</tr>";
      }
      koerper.innerHTML = html;
    }
    function fokussiere() {
      zeichne();
      var b = koerper.querySelector('[data-datum="' + alsText(fokusTag) + '"]');
      if (b) b.focus();
    }
    function schliesse() { dialog.close(); knopf.focus(); }

    knopf.addEventListener("click", function () {
      gewaehlt = ausText(feld.value);
      fokusTag = gewaehlt ? new Date(gewaehlt) : new Date();
      angesagt = null;
      dialog.showModal();
      fokussiere();
    });
    dialog.addEventListener("close", function () { knopf.focus(); });
    /* Eingetipptes prüfen (Mangel QK3): gültig → TT.MM.JJJJ, sonst Fehlerzustand */
    feld.addEventListener("blur", function () {
      if (!feld.value.trim()) { feldFehler(feld, true); return; }
      var d = ausText(feld.value);
      if (d) feld.value = alsText(d);
      feldFehler(feld, !!d);
    });
    dialog.querySelector("[data-zu]").addEventListener("click", schliesse);
    alle("[data-z]", dialog).forEach(function (b) {
      b.addEventListener("click", function () {
        plusMonate(fokusTag, Number(b.getAttribute("data-z")));
        zeichne();
      });
    });
    koerper.addEventListener("click", function (e) {
      var b = e.target.closest(".kn-date-picker__day");
      if (!b) return;
      feld.value = b.getAttribute("data-datum");
      feldFehler(feld, true);
      feld.dispatchEvent(new Event("change", { bubbles: true }));
      schliesse();
    });
    koerper.addEventListener("keydown", function (e) {
      var tage = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[e.key];
      var wt = (fokusTag.getDay() + 6) % 7;
      if (tage) { fokusTag.setDate(fokusTag.getDate() + tage); }
      else if (e.key === "Home") { fokusTag.setDate(fokusTag.getDate() - wt); }
      else if (e.key === "End") { fokusTag.setDate(fokusTag.getDate() + 6 - wt); }
      else if (e.key === "PageUp" || e.key === "PageDown") {
        var r = e.key === "PageUp" ? -1 : 1;
        plusMonate(fokusTag, e.shiftKey ? 12 * r : r);
      } else { return; }
      e.preventDefault();
      fokussiere();
    });
  });
}

/* UHRZEIT (M89): Feld data-kn-time-input in einer kern-form-input. Beim
   Verlassen wird vereinheitlicht ("930", "9.30", "9:30" → "09:30");
   Ungültiges bekommt KERNs Fehlerzustand und eine konstruktive Meldung. */
function starteUhrzeit() {
  alle("input[data-kn-time-input]").forEach(function (feld) {
    if (!neu(feld, "uhrzeit")) return;
    feld.addEventListener("blur", function () {
      var w = feld.value.trim();
      if (!w) { feldFehler(feld, true); return; }
      var h = -1, min = 0, m;
      if ((m = w.match(/^(\d{1,2})[:.](\d{2})$/))) { h = Number(m[1]); min = Number(m[2]); }
      else if (/^\d{1,2}$/.test(w)) { h = Number(w); }
      else if (/^\d{3,4}$/.test(w)) { h = Number(w.slice(0, -2)); min = Number(w.slice(-2)); }
      var ok = h >= 0 && h <= 23 && min <= 59;
      if (ok) feld.value = zweistellig(h) + ":" + zweistellig(min);
      feldFehler(feld, ok);
    });
  });
}

/* KERNs Fehlerzustand an einem Feld oder einer Feldgruppe (Uhrzeit, Kalender-
   Datum, Formularprüfung). Meldung: Element mit der ID Feld-ID + "-fehler"
   (p.kern-error). Klassen wie in KERNs Beispielen: Feld --error, Auswahlliste
   select--error; Gruppe: fieldset--error, jedes Kästchen/Optionsfeld --error
   und aria-invalid, aria-describedby am fieldset. */
function feldFehler(feld, ok) {
  var huelle = feld.closest(".kern-form-input");
  var fehler = document.getElementById(feld.id + "-fehler");
  if (feld.tagName === "FIELDSET") {
    feld.classList.toggle("kern-fieldset--error", !ok);
    alle("input[type='radio'], input[type='checkbox']", feld).forEach(function (f) {
      f.classList.toggle(f.type === "radio" ? "kern-form-check__radio--error" : "kern-form-check__checkbox--error", !ok);
      if (ok) { f.removeAttribute("aria-invalid"); } else { f.setAttribute("aria-invalid", "true"); }
    });
  } else {
    if (huelle) huelle.classList.toggle("kern-form-input--error", !ok);
    feld.classList.toggle(feld.tagName === "SELECT" ? "kern-form-input__select--error" : "kern-form-input__input--error", !ok);
    if (ok) { feld.removeAttribute("aria-invalid"); } else { feld.setAttribute("aria-invalid", "true"); }
  }
  if (!fehler) return;
  fehler.hidden = ok;
  /* aria-describedby liest auch Verstecktes vor — die Fehler-ID nur bei Fehler eintragen */
  var ids = (feld.getAttribute("aria-describedby") || "").split(/\s+/).filter(function (i) { return i && i !== fehler.id; });
  if (!ok) ids.push(fehler.id);
  if (ids.length) { feld.setAttribute("aria-describedby", ids.join(" ")); } else { feld.removeAttribute("aria-describedby"); }
}

/* ================================================================ */

function start(wurzel) {
  starteSperre();
  starteModi();
  starteRegler();
  starteReiter();
  starteMenues();
  starteSortierung();
  starteAuswahl();
  starteCombobox();
  starteZaehler();
  starteSchubladen();
  starteKernDialoge();
  starteKernPasswort();
  starteDichte();
  starteAufKlick();
  starteKopieren();
  starteBaum();
  starteMehrfachauswahl();
  starteKalender();
  starteUhrzeit();
  starteTabellenErweiterung();
  starteKurzhinweis();
  starteFormularPruefung();
  starteUmschalter();
  starteZahlfeld();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () { start(); });
} else {
  start();
}

global.KN = { start: start, toast: toast, setzeModus: setzeModus, melde: melde, lade: lade };

})(window);
