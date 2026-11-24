/* KERN OnePager — Verhalten der Seite (ES5, ohne Module, wie kern-neu.js).
   1  Live-Verbindung zum KERN Designer (Instruction Designer, Abschnitt 3):
      Entwurf übernehmen ohne Neuladen, Vorschau-Einstellungen, Statusstreifen.
   2  Fallliste: Suche und Filter (Sortierung macht kern-neu.js, data-kn-sortable).
   3  Dialog öffnen und schließen.
   4  Messen (Instruction Designer, Abschnitt 7): jedes sichtbare Textelement gegen
      seinen tatsächlichen Hintergrund, jedes Bedienelement auf Zielgröße — mit
      denselben Schwellen (KD_REGELN) und derselben Farbrechnung (KD_FARBE) wie der
      Designer. Ergebnis geht an den Designer. */
(function () {
  "use strict";

  var $ = function (s, w) { return (w || document).querySelector(s); };
  var $$ = function (s, w) { return [].slice.call((w || document).querySelectorAll(s)); };
  var melde = function (t) { if (window.KN && KN.melde) KN.melde(t); };

  /* ---------------- 0  Sprachen (Instruction Designer, Abschnitt 9) ----------------
     Deutsch steht im HTML (data-t, data-t-aria, data-t-title); andere Sprachen in
     texte/<code>.js (KD_OP_TEXTE). Fehlt ein Text, bleibt Deutsch stehen und die Lücke
     wird gezählt (window.KD_OP_LUECKEN) — nie leer. */
  var JS_DE = {
    "titel": "KERN OnePager — Musterstadt Bürgerservice (fiktiv)",
    "ohne_designer": "ohne Designer geöffnet — zeigt die gespeicherte Fassung",
    "live": "live mit dem KERN Designer verbunden",
    "unterbrochen": "Verbindung zum Designer unterbrochen — versuche erneut",
    "faelle_n": "{n} Fälle",
    "faelle_von": "{s} von {n} Fällen",
    "faelle_angezeigt": "{s} von {n} Fällen angezeigt",
    "keine_faelle": "Keine Fälle gefunden",
    "sprache_gewechselt": "Sprache: Deutsch",
    "kopiert": "{a} kopiert",
    "laedt": "Fälle werden aktualisiert",
    "aktualisiert": "{n} Fälle aktualisiert",
    "insp_an": "Inspektor an",
    "insp_aus": "Inspektor aus",
    "insp_titel": "Inspektor",
    "insp_baustein": "Baustein",
    "insp_ohne_baustein": "kein KERN-Baustein",
    "insp_element": "Element",
    "insp_abschnitt": "Abschnitt",
    "insp_a11y": "Barrierefreiheit",
    "insp_kontrast": "Kontrast",
    "insp_ziel": "Zielgröße",
    "insp_im_text": "Link im Fließtext (Ausnahme 2.5.8)",
    "insp_rot": "verletzt",
    "insp_gelb": "unter KERN-Anspruch",
    "insp_gruen": "erfüllt",
    "insp_farbe": "Farbe",
    "insp_text": "Text",
    "insp_hintergrund": "Hintergrund",
    "insp_rand": "Rand",
    "insp_fokus": "Fokusrahmen",
    "insp_schrift": "Schrift",
    "insp_groesse": "Größe",
    "insp_staerke": "Stärke",
    "insp_zeile": "Zeilenhöhe",
    "insp_familie": "Schriftart",
    "insp_form": "Form",
    "insp_radius": "Radius",
    "insp_randstaerke": "Randstärke",
    "insp_hoehe": "Höhe",
    "insp_abstaende": "Abstände",
    "insp_innen": "Innenabstand",
    "insp_luecke": "Lücke",
    "insp_aussen": "Außenabstand",
    "insp_geerbt": "geerbt von {von}",
    "insp_von": "von {von}",
    "insp_fest": "fester Wert, kein Token",
    "insp_ohne_server": "Ohne Server sind die Regeln nicht lesbar — nur gemessene Werte.",
    "insp_fuss": "Klick auf einen Token öffnet ihn im Designer.",
    "insp_an_alt": "Inspektor an — Tooltip nur mit gedrückter Taste {taste}",
    "insp_schliessen": "Tooltip schließen",
    "insp_aus_kurz": "Aus",
    "insp_ausschalten": "Inspektor ausschalten",
    "insp_ecke": "Inspektor ein- und ausschalten ({taste} I)",
    "insp_ecke_an": "an",
    "insp_ecke_aus": "aus",
    "insp_ecke_alt": "mit {taste}",
    "insp_geoeffnet": "{name} im Designer geöffnet",
    "insp_nicht_verbunden": "Designer nicht verbunden — Token nicht geöffnet"
  };
  var sprache = "de", deutsch = [];
  function TJ(k, w) {
    var quelle = sprache !== "de" && window.KD_OP_TEXTE && KD_OP_TEXTE[sprache] ? KD_OP_TEXTE[sprache].js : null;
    var s = (quelle && quelle[k]) || JS_DE[k] || k;
    return s.replace(/\{(\w+)\}/g, function (_, x) { return w && w[x] != null ? w[x] : ""; });
  }
  function textknoten(el) {
    for (var i = 0; i < el.childNodes.length; i++) if (el.childNodes[i].nodeType === 3 && el.childNodes[i].nodeValue.trim()) return el.childNodes[i];
    return null;
  }
  function merkeDeutsch() {
    $$("[data-t]").forEach(function (el) { var k = textknoten(el); if (k) deutsch.push([k, el.getAttribute("data-t"), "text"]); });
    $$("[data-t-aria]").forEach(function (el) { deutsch.push([el, el.getAttribute("data-t-aria"), "aria-label", el.getAttribute("aria-label")]); });
    $$("[data-t-title]").forEach(function (el) { deutsch.push([el, el.getAttribute("data-t-title"), "title", el.getAttribute("title")]); });
    $$("[data-t-alt]").forEach(function (el) { deutsch.push([el, el.getAttribute("data-t-alt"), "alt", el.getAttribute("alt")]); });
    deutsch.forEach(function (e) { if (e[2] === "text") e[3] = e[0].nodeValue; });
  }
  function setzeSprache(code, ansagen) {
    var tab = code !== "de" && window.KD_OP_TEXTE && KD_OP_TEXTE[code] ? KD_OP_TEXTE[code].texte : null;
    if (code !== "de" && !tab) code = "de";
    sprache = code;
    var luecken = 0;
    deutsch.forEach(function (e) {
      var v = tab ? tab[e[1]] : null;
      if (tab && v == null) luecken++;
      var wert = v != null ? v : e[3];
      if (e[2] === "text") { var alt = e[3]; e[0].nodeValue = alt.replace(alt.trim(), wert); }
      else e[0].setAttribute(e[2], wert);
    });
    window.KD_OP_LUECKEN = luecken;
    document.documentElement.lang = code;
    document.title = TJ("titel");
    try { localStorage.setItem("op.sprache", code); } catch (e) { /* privat: egal */ }
    var wahl = $("#op-sprache"); if (wahl) wahl.value = code;
    if (typeof filtere === "function") filtere(false);
    if (status) zeigeVerbindung(status.getAttribute("data-op-live") === "ja", feldVerbindung.getAttribute("data-op-text-schluessel") ? TJ(feldVerbindung.getAttribute("data-op-text-schluessel")) : feldVerbindung.textContent);
    if (ansagen) melde(TJ("sprache_gewechselt"));
    if (typeof planeMessung === "function") planeMessung();
  }

  /* ---------------- 1  Live-Verbindung ---------------- */
  var entwurf = $("#op-entwurf");
  var status = $(".op-status");
  var feldFassung = $("[data-op-fassung]");
  var feldVerbindung = $("[data-op-verbindung]");
  var letzteNummer = -1;          // späte Rückmeldungen verwerfen (GI §8)
  var stand = {};                 // aktuelle Abweichungen von KERN (Entwurf, sonst Thema) — für den Inspektor
  function meldeAenderung() { document.dispatchEvent(new CustomEvent("kd:stil")); }
  /* Modus-Schalter im Kopf (D22): ein Knopf schaltet ein und aus. kern-neu.js setzt nur
     den Wert des Knopfs — darum hier vorher abfangen; aria-pressed setzt KN.setzeModus. */
  document.addEventListener("click", function (ev) {
    var k = ev.target.closest && ev.target.closest("[data-op-umschalten]");
    if (!k || !window.KN || !KN.setzeModus) return;
    ev.stopPropagation(); ev.preventDefault();
    KN.setzeModus(k.getAttribute("data-kn-mode"), k.getAttribute("aria-pressed") === "true" ? k.getAttribute("data-op-umschalten") : k.value);
    meldeAenderung();
    if (typeof planeMessung === "function") planeMessung();
  }, true);

  function zeigeFassung(f) {
    if (f && f.system && f.fassung) feldFassung.textContent = f.system + " " + f.fassung;
  }
  function zeigeVerbindung(live, schluessel) {
    status.setAttribute("data-op-live", live ? "ja" : "nein");
    if (JS_DE[schluessel]) feldVerbindung.setAttribute("data-op-text-schluessel", schluessel);
    feldVerbindung.textContent = JS_DE[schluessel] ? TJ(schluessel) : schluessel;
  }
  function uebernimmEntwurf(css, nummer) {
    if (typeof nummer === "number") {
      if (nummer < letzteNummer) return;
      letzteNummer = nummer;
    }
    entwurf.textContent = css || "";
    meldeAenderung();
    planeMessung();
  }

  /* Ohne Server (Doppelklick, file://): gespeicherte Fassung aus dem Thema lesen. */
  function fassungAusThema() {
    var wert = getComputedStyle(document.documentElement).getPropertyValue("--kd-thema-fassung").trim();
    if (wert) feldFassung.textContent = "KERN 2.8.2 (nbyc) " + wert.replace(/["']/g, "");
  }

  function hervorheben(selektor) {
    $$("[data-op-hervor]").forEach(function (el) { el.removeAttribute("data-op-hervor"); });
    if (!selektor) return;
    var ziel;
    try { ziel = $(selektor); } catch (e) { return; }
    if (!ziel) return;
    ziel.setAttribute("data-op-hervor", "");
    ziel.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  function verbinde() {
    if (!/^https?:$/.test(location.protocol) || !window.EventSource) {
      fassungAusThema();
      zeigeVerbindung(false, "ohne_designer");
      return;
    }
    fetch("/api/zustand", { cache: "no-store" })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (z) { stand = z.entwurf || z.thema || {}; zeigeFassung(z.fassung); uebernimmEntwurf(z.entwurfCss, z.nummer); })
      .catch(function () { fassungAusThema(); });

    var quelle = new EventSource("/api/ereignisse");
    quelle.addEventListener("open", function () { zeigeVerbindung(true, "live"); });
    quelle.addEventListener("error", function () { zeigeVerbindung(false, "unterbrochen"); });
    quelle.addEventListener("entwurf", function (e) {
      var d = JSON.parse(e.data);
      if (typeof d.nummer === "number" && d.nummer < letzteNummer) return;
      stand = d.werte || {};
      uebernimmEntwurf(d.css, d.nummer);
    });
    quelle.addEventListener("gespeichert", function (e) {
      var d = JSON.parse(e.data);
      zeigeFassung(d.fassung);
      stand = d.thema || {};
      /* Neues Thema laden, ohne die Seite neu zu laden */
      var link = $("#op-thema");
      link.href = link.href.split("?")[0] + "?f=" + encodeURIComponent(d.fassung.fassung);
      uebernimmEntwurf("", d.nummer);
      link.addEventListener("load", function () { meldeAenderung(); planeMessung(); }, { once: true });
    });
    quelle.addEventListener("vorschau", function (e) {
      var d = JSON.parse(e.data);
      if (d.modus && window.KN && KN.setzeModus) {
        if (d.modus.theme) KN.setzeModus("theme", d.modus.theme);
        if (d.modus.contrast) KN.setzeModus("contrast", d.modus.contrast);
        meldeAenderung();
        planeMessung();
      }
      if ("hervorheben" in d) hervorheben(d.hervorheben);
      if (d.inspektor && window.KD_OP && KD_OP.inspektorModus) KD_OP.inspektorModus(d.inspektor);
    });
  }

  /* ---------------- 2  Fallliste: Suche und Filter ---------------- */
  var tabelle = $("#faelle");
  var suche = $("[data-op-suche='faelle']");
  var leer = $("[data-op-leer]");
  var zaehler = $("[data-op-zaehler]");

  function aktiveFilter() {
    return $$("[data-op-filter]").filter(function (k) { return k.getAttribute("aria-pressed") === "true"; })
      .map(function (k) { return k.getAttribute("data-op-filter"); });
  }

  function filtere(ansagen) {
    if (!tabelle) return;
    var text = (suche.value || "").trim().toLowerCase();
    var filter = aktiveFilter();
    var zeilen = $$("tbody tr", tabelle);
    var sichtbar = 0;
    zeilen.forEach(function (z) {
      var passt = (!text || z.textContent.toLowerCase().indexOf(text) !== -1) &&
                  (!filter.length || filter.indexOf(z.getAttribute("data-op-stand")) !== -1);
      z.hidden = !passt;
      if (passt) sichtbar++;
    });
    var gefiltert = !!text || filter.length > 0;
    tabelle.closest(".kern-table-responsive").hidden = sichtbar === 0;
    leer.hidden = sichtbar !== 0;
    zaehler.textContent = gefiltert ? TJ("faelle_von", { s: sichtbar, n: zeilen.length }) : TJ("faelle_n", { n: zeilen.length });
    if (ansagen) melde(sichtbar === 0 ? TJ("keine_faelle") : TJ("faelle_angezeigt", { s: sichtbar, n: zeilen.length }));
  }

  if (tabelle) {
    suche.addEventListener("input", function () { filtere(false); });
    suche.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); filtere(true); } });
    $("[data-op-suche-los='faelle']").addEventListener("click", function () { filtere(true); });
    /* Delegiert am Dokument: läuft NACH kern-neu.js, das aria-pressed umschaltet. */
    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-op-filter]")) filtere(true);
    });
    $("[data-op-zuruecksetzen]").addEventListener("click", function () {
      suche.value = "";
      $$("[data-op-filter]").forEach(function (k) { k.setAttribute("aria-pressed", "false"); });
      filtere(true);
      suche.focus();
    });
    filtere(false);
  }

  /* Aktenzeichen kopieren (KERN-Beispiel "Buttons in Tabellen") */
  $$("[data-op-kopieren]").forEach(function (k) {
    k.addEventListener("click", function () {
      var a = k.getAttribute("data-op-kopieren");
      var fertig = function () { melde(TJ("kopiert", { a: a })); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(a).then(fertig, fertig); else fertig();
    });
  });
  /* Aktualisieren: Ladeanzeige sichtbar (kern-loader--visible), Tabelle beschäftigt (aria-busy) */
  var neuLaden = $("[data-op-neu-laden]"), lader = $("[data-op-lader]");
  if (neuLaden && lader) neuLaden.addEventListener("click", function () {
    var rahmen = tabelle.closest(".kern-table-responsive");
    lader.classList.add("kern-loader--visible"); rahmen.setAttribute("aria-busy", "true"); melde(TJ("laedt"));
    setTimeout(function () {
      lader.classList.remove("kern-loader--visible"); rahmen.removeAttribute("aria-busy");
      melde(TJ("aktualisiert", { n: $$("tbody tr", tabelle).length }));
    }, 1200);
  });

  /* ---------------- 3  Dialog ---------------- */
  $$("[data-op-dialog]").forEach(function (knopf) {
    var dialog = document.getElementById(knopf.getAttribute("data-op-dialog"));
    if (!dialog || !dialog.showModal) return;
    knopf.addEventListener("click", function () { dialog.showModal(); });
    $$("[data-op-schliessen]", dialog).forEach(function (s) {
      s.addEventListener("click", function () { dialog.close(); knopf.focus(); });
    });
  });

  /* ---------------- 4  Messen ---------------- */
  var messUhr = null;
  var live = /^https?:$/.test(location.protocol) && window.KD_FARBE && window.KD_REGELN;
  function planeMessung() {
    if (!live) return;
    clearTimeout(messUhr);
    messUhr = setTimeout(messe, 250);
  }
  function pfad(el) {
    var teile = [];
    while (el && el.nodeType === 1 && el !== document.body) {
      if (el.id) { teile.unshift("#" + CSS.escape(el.id)); break; }
      var n = 1, s = el;
      while ((s = s.previousElementSibling)) if (s.tagName === el.tagName) n++;
      teile.unshift(el.tagName.toLowerCase() + ":nth-of-type(" + n + ")");
      el = el.parentElement;
    }
    return teile.join(" > ") || "body";
  }
  function sichtbar(el) {
    if (!el.getClientRects().length) return false;
    var r = el.getBoundingClientRect();
    if (r.width <= 1 || r.height <= 1) return false;                 // nur für Hilfsmittel
    var s = getComputedStyle(el);
    return s.visibility !== "hidden" && +s.opacity !== 0;
  }
  function hintergruende(el) {
    var liste = [], F = KD_FARBE;
    for (var n = el; n && n.nodeType === 1; n = n.parentElement) {
      var s = getComputedStyle(n);
      if (s.backgroundImage && s.backgroundImage !== "none") return null;   // Bild/Verlauf: nicht prüfbar
      var a = F.alpha(s.backgroundColor);
      if (a > 0) { liste.unshift(s.backgroundColor); if (a >= 1) return liste; }
    }
    liste.unshift(document.documentElement.getAttribute("data-kern-theme") === "dark" ? "#000" : "#fff");
    return liste;
  }
  /* KERN "kern-link--stretched": die ganze Karte bzw. Zeile ist die Zielfläche (::after) */
  function zielflaeche(el) {
    return el.classList && el.classList.contains("kern-link--stretched")
      ? (el.closest(".kern-card, .kern-task-list__item, li") || el) : el;
  }
    function eigenerText(el) {
    for (var i = 0; i < el.childNodes.length; i++) {
      var k = el.childNodes[i];
      if (k.nodeType === 3 && k.nodeValue.trim()) return k.nodeValue.trim();
    }
    return "";
  }
  function messe() {
    var S = KD_REGELN.schwellen, F = KD_FARBE;
    var zahlen = { rot: 0, gelb: 0, gruen: 0, grau: 0 }, befunde = [], anzahl = 0;
    function trage(b) { zahlen[b.stufe]++; if (b.stufe !== "gruen") befunde.push(b); }
    $$("body *").forEach(function (el) {
      if (/^(SCRIPT|STYLE|TEMPLATE|SVG|PATH|OPTION)$/i.test(el.tagName) || el.closest("[data-kd-werkzeug]")) return;
      var text = eigenerText(el);
      if (!text || el.closest("[aria-disabled='true'], :disabled") || !sichtbar(el)) return;
      anzahl++;
      var s = getComputedStyle(el), hinten = hintergruende(el);
      var groesse = parseFloat(s.fontSize), fett = parseInt(s.fontWeight, 10) >= 700;
      var gross = groesse >= 24 || (groesse >= 18.66 && fett);
      var b = { art: "kontrast", kriterium: "WCAG 1.4.3", text: text.slice(0, 40), selektor: pfad(el), stufe: "grau", wert: null };
      if (hinten) {
        var h = F.zuRgb(hinten), v = F.zuRgb(hinten.concat(s.color));
        b.wert = F.kontrast(v, h);
        var rot = gross ? S.textGross : S.text, gelb = gross ? S.kernGross : S.kernText;
        b.stufe = b.wert < rot ? "rot" : b.wert < gelb ? "gelb" : "gruen";
        b.schwelle = (b.wert < rot ? rot : gelb).toFixed(1);
        if (b.stufe === "gelb") b.kriterium = "KERN K30";
      }
      trage(b);
    });
    $$("a[href], button, input:not([type=hidden]), select, textarea, summary, [tabindex]:not([tabindex='-1'])").forEach(function (el) {
      if (!sichtbar(el) || el.closest("[aria-disabled='true'], :disabled, [data-kd-werkzeug]")) return;
      var r = zielflaeche(el).getBoundingClientRect(), klein = Math.min(r.width, r.height);
      /* Ausnahme 2.5.8: Link im Fließtext */
      if (el.tagName === "A" && el.parentElement && el.parentElement.textContent.trim() !== el.textContent.trim() &&
          /^(P|LI|DD|TD|SPAN)$/.test(el.parentElement.tagName)) return;
      var b = { art: "ziel", kriterium: "WCAG 2.5.8", wert: klein, schwelle: S.ziel, selektor: pfad(el),
                text: (el.getAttribute("aria-label") || el.textContent || el.value || el.type || "").trim().slice(0, 40),
                stufe: klein < S.ziel ? "rot" : "gruen" };
      trage(b);
    });
    fetch("/api/messung", { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ modus: document.documentElement.getAttribute("data-kern-theme") === "dark" ? "dunkel" : "hell",
        anzahl: anzahl, zahlen: zahlen, befunde: befunde.slice(0, 200), zeit: Date.now(), nummer: letzteNummer }) }).catch(function () {});
  }
  window.addEventListener("resize", planeMessung);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(planeMessung);

  /* Schnittstelle für den Inspektor (inspektor.js) — dieselben Helfer, EINE Quelle */
  window.KD_OP = {
    TJ: TJ, sprache: function () { return sprache; }, stand: function () { return stand; },
    live: function () { return status.getAttribute("data-op-live") === "ja"; },
    pfad: pfad, sichtbar: sichtbar, zielflaeche: zielflaeche, hintergruende: hintergruende, eigenerText: eigenerText, melde: melde,
    sende: function (daten) {
      return fetch("/api/vorschau", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.assign({ quelle: "onepager" }, daten)) });
    }
  };

  merkeDeutsch();
  var gemerkt = "de";
  try { gemerkt = localStorage.getItem("op.sprache") || "de"; } catch (e) { /* privat: egal */ }
  if (gemerkt !== "de") setzeSprache(gemerkt, false);
  var wahl = $("#op-sprache");
  if (wahl) { wahl.value = sprache; wahl.addEventListener("change", function () { setzeSprache(wahl.value, true); }); }
  verbinde();
})();
