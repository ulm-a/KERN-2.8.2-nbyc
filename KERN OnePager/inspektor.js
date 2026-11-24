/* KERN OnePager — Inspektor (Instruction Designer, Abschnitt 4b).
   Zeigt beim Zeigen mit der Maus (oder beim Tastaturfokus) alle Merkmale des Elements
   darunter — und den Token dahinter. Ein Klick auf einen Token öffnet ihn im Designer
   (über den Server, auch in einem anderen Browser).

   Reihenfolge im Tooltip (vom Erkennen zum Ändern):
     1 Baustein · Atomic-Stufe · Element und Klassen · Abschnitt   — was ist das?
     2 Barrierefreiheit: Kontrast, Zielgröße                          — stimmt es?
     3 Farbe: Text, Hintergrund, Rand                                  — wird am häufigsten geändert
     4 Schrift: Größe, Stärke, Zeilenhöhe, Schriftart
     5 Form: Radius, Randstärke, Höhe
     6 Abstände: Innen, Lücke, Außen
     Kopf rechts: [Aus ⌥I] [Esc ✕] (D21) · Fuß: Bedienhinweis
   Modus (D21): aus · zeigen (beim Zeigen und Tabben) · alt (nur mit gedrückter ⌥/Alt) —
   eine Einstellung für Designer und alle OnePager (über den Server), Schalter (Auge) im Seitenkopf.
   Je Merkmal: gemessener Wert · Kette der Tokens (Rolle → … → Grundwert), jeder klickbar.

   Woher der Token kommt: aus den CSS-Regeln, die auf das Element zutreffen (CSSOM,
   Kaskade nach Wichtigkeit, Spezifität, Reihenfolge). Ohne Server (file://) sperrt der
   Browser das Lesen der Regeln — dann nur gemessene Werte. ES5 wie onepager.js. */
(function () {
  "use strict";
  var OP = window.KD_OP, F = window.KD_FARBE;
  if (!OP || !F) return;
  var T = OP.TJ;
  var SYSTEM = "../KERN%202.8.2%20(nbyc)/";
  var VERZOEGERUNG = 350;           // ms Ruhe, bevor der Tooltip erscheint
  var NACHLAUF = 300;               // ms, um mit der Maus in den Tooltip zu wechseln (WCAG 1.4.13)

  /* ---------------- Daten: Tokens, Namen ---------------- */
  var tokens = null, begriffe = {};
  if (/^https?:$/.test(location.protocol)) {
    fetch(SYSTEM + "token.json", { cache: "no-store" }).then(function (r) { return r.json(); })
      .then(function (d) { tokens = {}; Object.keys(d.kern).forEach(function (n) { tokens[n] = d.kern[n]; });
        Object.keys(d.erweiterung).forEach(function (n) { if (!tokens[n]) tokens[n] = d.erweiterung[n]; }); }).catch(function () {});
    fetch(SYSTEM + "katalog/begriffe.json", { cache: "no-store" }).then(function (r) { return r.json(); })
      .then(function (b) { b.kern.concat(b.erweiterungen).forEach(function (e) { begriffe[e.code] = e; }); }).catch(function () {});
  }

  /* ---------------- Regeln sammeln (CSSOM) ---------------- */
  var regeln = null, lesbar = true;
  function sammle(quelle, liste) {
    var r;
    try { r = quelle.cssRules; } catch (e) { lesbar = false; return; }
    for (var i = 0; i < r.length; i++) {
      var x = r[i];
      if (x.type === 3) { if (x.styleSheet && (!x.media.length || matchMedia(x.media.mediaText).matches)) sammle(x.styleSheet, liste); }
      else if (x.type === 4) { if (matchMedia(x.conditionText || x.media.mediaText).matches) sammle(x, liste); }
      else if (x.type === 12) { if (CSS.supports(x.conditionText)) sammle(x, liste); }
      else if (x.type === 1) liste.push({ teile: teileSelektor(x.selectorText), style: x.style, nr: liste.length });
      else if (x.cssRules) sammle(x, liste);       // @layer, @container: einschließen
    }
  }
  function verzeichnis() {
    if (regeln) return regeln;
    regeln = []; lesbar = true;
    for (var i = 0; i < document.styleSheets.length; i++) {
      var s = document.styleSheets[i];
      if (s.ownerNode && s.ownerNode.closest && s.ownerNode.closest("[data-kd-werkzeug]")) continue;
      if (/inspektor\.css|designer-tokens\.css/.test(s.href || "")) continue;
      sammle(s, regeln);
    }
    return regeln;
  }
  document.addEventListener("kd:stil", function () { regeln = null; });
  window.addEventListener("resize", function () { regeln = null; });
  if (window.MutationObserver) new MutationObserver(function () { regeln = null; })
    .observe(document.documentElement, { attributes: true, attributeFilter: ["data-kern-theme", "data-kn-contrast", "data-kn-density"] });

  /* Selektorliste an Kommas auf oberster Ebene teilen */
  function teileSelektor(s) {
    var aus = [], tiefe = 0, start = 0;
    for (var i = 0; i < s.length; i++) {
      var z = s[i];
      if (z === "(" || z === "[") tiefe++;
      else if (z === ")" || z === "]") tiefe--;
      else if (z === "," && !tiefe) { aus.push(s.slice(start, i).trim()); start = i + 1; }
    }
    aus.push(s.slice(start).trim());
    return aus.map(function (t) { return { text: t, spez: null }; });
  }
  /* Spezifität [a, b, c] (Selectors Level 4, vereinfacht) */
  function spez(sel) {
    var a = 0, b = 0, c = 0;
    sel = sel.replace(/::[\w-]+(\([^)]*\))?/g, function () { c++; return " "; });
    sel = sel.replace(/:(is|not|has|where|matches)\(((?:[^()]|\([^()]*\))*)\)/g, function (_, f, innen) {
      if (f === "where") return " ";
      var m = [0, 0, 0];
      teileSelektor(innen).forEach(function (t) { var s = spez(t.text); if (vergleiche(s, m) > 0) m = s; });
      a += m[0]; b += m[1]; c += m[2]; return " ";
    });
    sel = sel.replace(/\[[^\]]*\]/g, function () { b++; return " "; });
    sel = sel.replace(/#[\w-]+/g, function () { a++; return " "; });
    sel = sel.replace(/\.[\w\\:-]+/g, function () { b++; return " "; });
    sel = sel.replace(/:[\w-]+(\([^)]*\))?/g, function () { b++; return " "; });
    sel.replace(/(^|[\s>+~])([a-zA-Z][\w-]*)/g, function () { c++; return ""; });
    return [a, b, c];
  }
  function vergleiche(x, y) { for (var i = 0; i < x.length; i++) if (x[i] !== y[i]) return x[i] - y[i]; return 0; }

  /* Gewinnende Deklaration für eine Eigenschaft am Element (nicht geerbt) */
  function gewinner(el, namen) {
    var best = null;
    function pruefe(wert, wichtig, sp, nr, sel) {
      if (!wert) return;
      var k = [wichtig ? 1 : 0].concat(sp, [nr]);
      if (!best || vergleiche(k, best.k) > 0) best = { k: k, wert: wert, sel: sel };
    }
    verzeichnis().forEach(function (r) {
      var passend = null;
      r.teile.forEach(function (t) {
        var ok = false;
        try { ok = el.matches(t.text); } catch (e) { ok = false; }
        if (ok) { if (!t.spez) t.spez = spez(t.text); if (!passend || vergleiche(t.spez, passend.spez) > 0) passend = t; }
      });
      if (!passend) return;
      namen.forEach(function (n) {
        pruefe(r.style.getPropertyValue(n).trim(), r.style.getPropertyPriority(n) === "important", passend.spez, r.nr, passend.text);
      });
    });
    namen.forEach(function (n) { pruefe(el.style.getPropertyValue(n).trim(), el.style.getPropertyPriority(n) === "important", [1, 0, 0, 0].slice(1), 1e9, "style"); });
    return best;
  }

  /* Eigenschaft → Langform, logische Form, Kurzformen; art steuert die Auswahl in Kurzformen */
  var MERKMALE = {
    "color": { namen: ["color"], art: "farbe", erbt: true },
    "background-color": { namen: ["background-color", "background"], art: "farbe" },
    "border-color": { namen: ["border-top-color", "border-block-start-color", "border-color", "border-top", "border-block-start", "border-block", "border",
                              "border-bottom-color", "border-block-end-color", "border-bottom", "border-block-end"], art: "farbe" },
    "outline-color": { namen: ["outline-color", "outline"], art: "farbe" },
    "font-size": { namen: ["font-size", "font"], art: "size", erbt: true },
    "font-weight": { namen: ["font-weight", "font"], art: "weight", erbt: true },
    "line-height": { namen: ["line-height", "font"], art: "line-height", erbt: true },
    "font-family": { namen: ["font-family", "font"], art: "family", erbt: true },
    "hoehe": { namen: ["min-height", "min-block-size", "height", "block-size"], art: "hoehe" },
    "border-radius": { namen: ["border-top-left-radius", "border-start-start-radius", "border-radius"], art: "radius" },
    "border-width": { namen: ["border-top-width", "border-block-start-width", "border-width", "border-top", "border-block-start", "border-block", "border",
                              "border-bottom-width", "border-bottom", "border-block-end"], art: "width" },
    "padding": { namen: ["padding-top", "padding-left", "padding-block-start", "padding-inline-start", "padding-block", "padding-inline", "padding"], art: "raum" },
    "gap": { namen: ["row-gap", "column-gap", "gap"], art: "raum" },
    "margin": { namen: ["margin-top", "margin-bottom", "margin-block-start", "margin-block-end", "margin-block", "margin"], art: "raum" }
  };
  function varsIn(wert) { var m, aus = [], re = /var\((--[\w-]+)/g; while ((m = re.exec(wert))) if (aus.indexOf(m[1]) < 0) aus.push(m[1]); return aus; }
  function passendeVars(wert, art) {
    var alle = varsIn(wert);
    if (alle.length <= 1) return alle;
    var muster = { farbe: /color/, size: /size/, weight: /weight/, "line-height": /line-height/, family: /family/, radius: /radius/, width: /width/ }[art];
    var treffer = muster ? alle.filter(function (v) { return muster.test(v); }) : alle;
    return treffer.length ? treffer : alle;
  }
  function bestimme(el, schluessel) {
    var m = MERKMALE[schluessel];
    var quelle = el, g = gewinner(el, m.namen);
    if (!g && m.erbt) {
      for (var n = el.parentElement; n && !g; n = n.parentElement) { g = gewinner(n, m.namen); if (g) quelle = n; }
    }
    if (!g) return null;
    return { wert: g.wert, vars: passendeVars(g.wert, m.art), quelle: quelle, geerbt: quelle !== el, sel: g.sel };
  }

  /* Kette eines Tokens im aktuellen Zusammenhang: Ebene → Modus → grund */
  function kette(name, el) {
    var stand = OP.stand() || {}, aus = [name];
    var dunkel = document.documentElement.getAttribute("data-kern-theme") === "dark" ||
                 (!document.documentElement.getAttribute("data-kern-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
    var ebene = el.closest(".kern-level-2") ? "ebene-2" : el.closest(".kern-level-1") ? "ebene-1" : "ebene-0";
    var modi = [ebene, matchMedia("(min-width: 768px)").matches ? "ab-md" : null, dunkel ? "dunkel" : "hell", "grund"];
    for (var i = 0; i < 8 && tokens; i++) {
      var t = tokens[name], wert = null;
      for (var j = 0; j < modi.length && wert == null; j++) {
        var m = modi[j]; if (!m) continue;
        if (stand[m] && stand[m][name] != null) wert = stand[m][name];
        else if (t && t.werte && t.werte[m] != null) wert = t.werte[m];
      }
      var naechster = wert && /^var\((--[\w-]+)\)$/.exec(String(wert).trim());
      if (!naechster) { if (wert != null) aus.push("= " + wert); break; }
      name = naechster[1]; aus.push(name);
    }
    return aus;
  }

  /* ---------------- Baustein erkennen ---------------- */
  function baustein(el) {
    var ids = window.KD_VERWENDUNG ? Object.keys(KD_VERWENDUNG.bausteine) : [];
    for (var n = el; n && n.nodeType === 1 && n !== document.body; n = n.parentElement) {
      var bester = null;
      [].forEach.call(n.classList, function (k) {
        ids.forEach(function (id) {
          if ((k === id || k.indexOf(id + "-") === 0 || k.indexOf(id + "_") === 0) && (!bester || id.length > bester.length)) bester = id;
        });
      });
      if (bester && bester !== "kern-flex") return { id: bester, el: n };
    }
    return null;
  }
  function bausteinName(id) {
    var spr = OP.sprache(), t = (window.KD_TEXTE || {})[spr] || {};
    if (t.bausteine && t.bausteine[id]) return t.bausteine[id];
    var b = begriffe[id];
    return b ? (spr === "de" ? b.de : b.en) : id;
  }
  function stufeName(stufe) {
    var t = (window.KD_TEXTE || {})[OP.sprache()] || (window.KD_TEXTE || {}).de || {};
    return (t.atomic || {})[stufe] || stufe;
  }
  /* Kasten = nächstes Element (selbst oder darüber, bis zur Grenze des Bausteins) mit
     sichtbarer Fläche (Hintergrund, Rand, Radius); sonst das erste mit Innenabstand. */
  function kasten(el, grenze) {
    var mitAbstand = null;
    for (var n = el; n && n.nodeType === 1; n = n.parentElement) {
      var s = getComputedStyle(n);
      if (F.alpha(s.backgroundColor) > 0 || parseFloat(s.borderTopWidth) > 0 || parseFloat(s.borderBottomWidth) > 0 ||
          parseFloat(s.borderTopLeftRadius) > 0) return n;
      if (!mitAbstand && (parseFloat(s.paddingTop) > 0 || parseFloat(s.paddingLeft) > 0)) mitAbstand = n;
      if (n === grenze) break;
    }
    return mitAbstand || el;
  }
  function beschreibe(el) {
    var k = el.tagName.toLowerCase();
    if (el.id) k += "#" + el.id;
    var klassen = [].filter.call(el.classList, function (c) { return /^(kern|kn)-/.test(c); });
    return k + (klassen.length ? "." + klassen.join(".") : "");
  }

  /* ---------------- Tooltip ---------------- */
  var MAC = /mac|iphone|ipad/i.test(navigator.platform || navigator.userAgent);
  var ALT = MAC ? "⌥" : "Alt";
  var modus = "zeigen", vorher = "zeigen";           // vorher: Modus, zu dem "an" zurückkehrt
  try {
    modus = { an: "zeigen", aus: "aus", zeigen: "zeigen", alt: "alt" }[localStorage.getItem("op.inspektor")] || "zeigen";
    vorher = localStorage.getItem("op.inspektor.vorher") === "alt" ? "alt" : "zeigen";
  } catch (e) { /* privat: egal */ }
  var an = modus !== "aus";
  var box = document.createElement("div");
  box.className = "kd-insp";
  box.setAttribute("data-kd-werkzeug", "");
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "false");
  box.hidden = true;
  document.body.appendChild(box);
  var knopf = document.querySelector("[data-op-inspektor]");
  /* Schalter im Seitenkopf (D21, D22, D24): immer sichtbar, Werkzeug-Ebene (Messung lässt ihn aus) */
  var ecke = document.createElement("button");
  /* D24: im Aussehen der KERN-Schalter daneben (☀, ◐) — Auge zeigt den Zustand, ⌥ den Modus "nur mit ⌥" */
  ecke.type = "button"; ecke.className = "kd-insp-ecke op-modus op-modus--insp";
  ecke.setAttribute("data-kd-werkzeug", ""); ecke.setAttribute("aria-keyshortcuts", "Alt+I");
  ecke.innerHTML = '<span class="kern-icon kern-icon--visibility-off op-modus__aus" aria-hidden="true"></span>' +
    '<span class="kern-icon kern-icon--visibility op-modus__an" aria-hidden="true"></span>' +
    '<span class="op-modus__taste" aria-hidden="true" hidden></span><span class="kern-sr-only"></span>';
  /* Ort (D22, D25): im Seitenkopf nach der Sprache, vor ☀ und ◐; ohne Kopf oben rechts fest */
  var ort = document.querySelector(".kn-header__end");
  if (ort) ort.insertBefore(ecke, ort.querySelector(".op-modus")); else document.body.appendChild(ecke);
  function zeichneEcke() {
    var zustand = T(modus === "alt" ? "insp_ecke_alt" : an ? "insp_ecke_an" : "insp_ecke_aus", { taste: ALT });
    ecke.title = T("insp_titel") + ": " + zustand + " · " + T("insp_ecke", { taste: ALT });
    ecke.querySelector(".kern-sr-only").textContent = T("insp_titel") + (modus === "alt" ? " (" + zustand + ")" : "");
    var taste = ecke.querySelector(".op-modus__taste");
    taste.textContent = ALT; taste.hidden = modus !== "alt";
  }
  new MutationObserver(zeichneEcke).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

  function e(tag, cls, text) { var x = document.createElement(tag); if (cls) x.className = cls; if (text != null) x.textContent = text; return x; }
  function px(v) { var z = parseFloat(v); return isNaN(z) ? v : (Math.round(z * 100) / 100) + " px"; }
  function farbeHex(v) { try { return F.alpha(v) === 0 ? "—" : F.hex(F.zuRgb([v])); } catch (er) { return v; } }

  function tokenKnopf(name, el) {
    var b = e("button", "kd-insp__token", name);
    b.type = "button";
    b.addEventListener("click", function () {
      var dunkel = document.documentElement.getAttribute("data-kern-theme") === "dark";
      if (!OP.live()) { zeigeHinweis(T("insp_nicht_verbunden")); return; }
      OP.sende({ zeige_token: name, token_modus: dunkel ? "dunkel" : "hell" })
        .then(function () { zeigeHinweis(T("insp_geoeffnet", { name: name })); OP.melde(T("insp_geoeffnet", { name: name })); })
        .catch(function () { zeigeHinweis(T("insp_nicht_verbunden")); });
    });
    return b;
  }
  function zeigeHinweis(text) { var h = box.querySelector(".kd-insp__hinweis"); if (h) h.textContent = text; }

  function zeile(beschr, wert, info, el, muster) {
    var z = e("div", "kd-insp__zeile");
    z.appendChild(e("span", "kd-insp__was", beschr));
    var w = e("span", "kd-insp__wert");
    if (muster) { var f = e("span", "kd-insp__muster"); f.style.background = muster; f.setAttribute("aria-hidden", "true"); w.appendChild(f); }
    w.appendChild(document.createTextNode(wert));
    z.appendChild(w);
    var t = e("span", "kd-insp__kette");
    if (info && info.vars && info.vars.length) {
      info.vars.forEach(function (v, i) {
        if (i) t.appendChild(e("span", "kd-insp__trenner", " · "));
        kette(v, el).forEach(function (glied, j) {
          if (j) t.appendChild(e("span", "kd-insp__pfeil", " → "));
          if (glied.indexOf("= ") === 0) t.appendChild(e("span", "kd-insp__roh", glied));
          else t.appendChild(tokenKnopf(glied, el));
        });
      });
    } else if (info) t.appendChild(e("span", "kd-insp__roh", T("insp_fest") + ": " + info.wert));
    if (info && (info.geerbt || info.quelle !== el)) t.appendChild(e("span", "kd-insp__herkunft", " " + T(info.geerbt ? "insp_geerbt" : "insp_von", { von: beschreibe(info.quelle) })));
    z.appendChild(t);
    return z;
  }
  function gruppe(titel, zeilen) {
    zeilen = zeilen.filter(Boolean);
    if (!zeilen.length) return null;
    var g = e("section", "kd-insp__gruppe");
    g.appendChild(e("h3", "kd-insp__titel", titel));
    zeilen.forEach(function (z) { g.appendChild(z); });
    return g;
  }

  function baue(el) {
    var s = getComputedStyle(el);
    var bs = baustein(el);
    /* Baustein im Baustein (z. B. Beschriftung im Knopf): beide nennen, Fläche vom äußeren */
    var aussen = bs && bs.el.parentElement ? baustein(bs.el.parentElement) : null;
    if (aussen && aussen.id === bs.id) aussen = null;
    var grenze = aussen ? aussen.el : bs ? bs.el : null;
    var k = kasten(el, grenze), ks = getComputedStyle(k);
    verzeichnis();
    var teile = [];

    /* 1 Was ist das? */
    var kopf = e("header", "kd-insp__kopf");
    var v = window.KD_VERWENDUNG && bs ? KD_VERWENDUNG.bausteine[bs.id] : null;
    kopf.appendChild(e("strong", "kd-insp__name", bs ? (aussen ? bausteinName(aussen.id) + " › " : "") + bausteinName(bs.id) : T("insp_ohne_baustein")));
    if (v) kopf.appendChild(e("span", "kd-insp__stufe", stufeName(v.stufe)));
    /* Steuerung oben rechts (D21): Inspektor aus · Tooltip schließen */
    var steuer = e("span", "kd-insp__steuer");
    var aus = e("button", "kd-insp__steuerknopf", T("insp_aus_kurz"));
    aus.type = "button"; aus.title = T("insp_ausschalten") + " (" + ALT + " I)";
    aus.setAttribute("aria-label", T("insp_ausschalten")); aus.setAttribute("aria-keyshortcuts", "Alt+I");
    aus.appendChild(e("kbd", "kd-insp__taste", ALT + " I"));
    aus.addEventListener("click", function () { schalte(false, true); });
    var zu = e("button", "kd-insp__steuerknopf");
    zu.type = "button"; zu.title = T("insp_schliessen") + " (Esc)";
    zu.setAttribute("aria-label", T("insp_schliessen")); zu.setAttribute("aria-keyshortcuts", "Escape");
    zu.appendChild(e("kbd", "kd-insp__taste", "Esc"));
    zu.appendChild(e("span", "kd-insp__kreuz", "✕")).setAttribute("aria-hidden", "true");
    zu.addEventListener("click", schliesse);
    steuer.appendChild(aus); steuer.appendChild(zu);
    kopf.appendChild(steuer);
    kopf.appendChild(e("code", "kd-insp__code", beschreibe(el)));
    var ab = el.closest("[data-abschnitt]");
    if (ab) kopf.appendChild(e("span", "kd-insp__klein", T("insp_abschnitt") + " #" + ab.getAttribute("data-abschnitt")));
    teile.push(kopf);
    if (!lesbar) teile.push(e("p", "kd-insp__klein", T("insp_ohne_server")));

    /* 2 Barrierefreiheit */
    var a11y = [], text = OP.eigenerText(el), S = window.KD_REGELN ? KD_REGELN.schwellen : null;
    if (text && S) {
      var hinten = OP.hintergruende(el);
      if (hinten) {
        var wert = F.kontrast(F.zuRgb(hinten.concat(s.color)), F.zuRgb(hinten));
        var gross = parseFloat(s.fontSize) >= 24 || (parseFloat(s.fontSize) >= 18.66 && parseInt(s.fontWeight, 10) >= 700);
        var rot = gross ? S.textGross : S.text, gelb = gross ? S.kernGross : S.kernText;
        var stufe = wert < rot ? "rot" : wert < gelb ? "gelb" : "gruen";
        var z = zeile(T("insp_kontrast"), wert.toFixed(2) + " : 1", null, el);
        z.querySelector(".kd-insp__kette").appendChild(e("span", "kd-insp__marke kd-insp__marke--" + stufe, T("insp_" + stufe)));
        a11y.push(z);
      }
    }
    if (el.matches("a[href], button, input, select, textarea, summary") && S) {
      var r = OP.zielflaeche(el).getBoundingClientRect(), klein = Math.min(r.width, r.height);
      var ausnahme = el.tagName === "A" && el.parentElement && el.parentElement.textContent.trim() !== el.textContent.trim() && /^(P|LI|DD|TD|SPAN)$/.test(el.parentElement.tagName);
      var zz = zeile(T("insp_ziel"), Math.round(r.width) + " × " + Math.round(r.height) + " px", null, el);
      zz.querySelector(".kd-insp__kette").appendChild(ausnahme ? e("span", "kd-insp__klein", T("insp_im_text"))
        : e("span", "kd-insp__marke kd-insp__marke--" + (klein < S.ziel ? "rot" : "gruen"), T(klein < S.ziel ? "insp_rot" : "insp_gruen")));
      a11y.push(zz);
    }
    teile.push(gruppe(T("insp_a11y"), a11y));

    /* 3 Farbe */
    var randBreite = parseFloat(ks.borderTopWidth) || parseFloat(ks.borderBottomWidth);
    var randFarbe = parseFloat(ks.borderTopWidth) ? ks.borderTopColor : ks.borderBottomColor;
    teile.push(gruppe(T("insp_farbe"), [
      text ? zeile(T("insp_text"), farbeHex(s.color), bestimme(el, "color"), el, s.color) : null,
      F.alpha(ks.backgroundColor) > 0 ? zeile(T("insp_hintergrund"), farbeHex(ks.backgroundColor), bestimme(k, "background-color"), el, ks.backgroundColor) : null,
      randBreite ? zeile(T("insp_rand"), farbeHex(randFarbe), bestimme(k, "border-color"), el, randFarbe) : null,
      el.matches(":focus-visible") && parseFloat(s.outlineWidth) ? zeile(T("insp_fokus"), farbeHex(s.outlineColor) + " · " + px(s.outlineWidth), bestimme(el, "outline-color"), el, s.outlineColor) : null
    ]));

    /* 4 Schrift */
    if (text) teile.push(gruppe(T("insp_schrift"), [
      zeile(T("insp_groesse"), px(s.fontSize), bestimme(el, "font-size"), el),
      zeile(T("insp_staerke"), s.fontWeight, bestimme(el, "font-weight"), el),
      zeile(T("insp_zeile"), px(s.lineHeight), bestimme(el, "line-height"), el),
      zeile(T("insp_familie"), s.fontFamily.split(",")[0].replace(/["']/g, ""), bestimme(el, "font-family"), el)
    ]));

    /* 5 Form — Höhe (D20): gemessen am Kasten; Kette, wenn eine Höhe gesetzt ist; bei Bedienelementen immer */
    var hoehe = bestimme(k, "hoehe");
    if (hoehe && !hoehe.vars.length && /^(auto|0|0px|none)$/.test(hoehe.wert.trim())) hoehe = null;
    var zeigeHoehe = !!hoehe || k.matches("a[href], button, input, select, textarea, summary");
    teile.push(gruppe(T("insp_form"), [
      parseFloat(ks.borderTopLeftRadius) ? zeile(T("insp_radius"), px(ks.borderTopLeftRadius), bestimme(k, "border-radius"), el) : null,
      randBreite ? zeile(T("insp_randstaerke"), px(randBreite), bestimme(k, "border-width"), el) : null,
      zeigeHoehe ? zeile(T("insp_hoehe"), px(k.getBoundingClientRect().height + "px"), hoehe, el) : null
    ]));

    /* 6 Abstände */
    var innen = [ks.paddingTop, ks.paddingRight, ks.paddingBottom, ks.paddingLeft].map(px);
    var gapWert = getComputedStyle(el).rowGap;
    teile.push(gruppe(T("insp_abstaende"), [
      innen.some(function (x) { return parseFloat(x) > 0; }) ? zeile(T("insp_innen"), innen.join(" / "), bestimme(k, "padding"), el) : null,
      parseFloat(gapWert) > 0 ? zeile(T("insp_luecke"), px(gapWert), bestimme(el, "gap"), el) : null,
      (parseFloat(s.marginTop) || parseFloat(s.marginBottom)) ? zeile(T("insp_aussen"), px(s.marginTop) + " / " + px(s.marginBottom), bestimme(el, "margin"), el) : null
    ]));

    var fuss = e("footer", "kd-insp__fuss");
    fuss.appendChild(e("p", "kd-insp__hinweis", ""));
    fuss.appendChild(e("p", "kd-insp__klein", T("insp_fuss")));
    teile.push(fuss);

    box.replaceChildren.apply(box, teile.filter(Boolean));
    box.setAttribute("aria-label", T("insp_titel") + ": " + (bs ? bausteinName(bs.id) : beschreibe(el)));
  }

  /* ---------------- Zeigen, Folgen, Schließen ---------------- */
  var ziel = null, uhr = null, wegUhr = null, gesperrt = null;
  /* Platz suchen, der das Element nicht verdeckt: unter, über, rechts oder links davon */
  function platziere(x, y, unter) {
    box.style.left = "0px"; box.style.top = "0px";
    var b = box.getBoundingClientRect(), rand = 8, abstand = 16;
    var r = unter || { left: x, right: x, top: y, bottom: y };
    var klemmeX = function (v) { return Math.min(Math.max(rand, v), innerWidth - b.width - rand); };
    var klemmeY = function (v) { return Math.min(Math.max(rand, v), innerHeight - b.height - rand); };
    var links, oben;
    if (r.bottom + abstand + b.height <= innerHeight - rand) { oben = r.bottom + abstand; links = klemmeX(x + abstand); }
    else if (r.top - abstand - b.height >= rand) { oben = r.top - abstand - b.height; links = klemmeX(x + abstand); }
    else if (r.right + abstand + b.width <= innerWidth - rand) { links = r.right + abstand; oben = klemmeY(y - b.height / 2); }
    else if (r.left - abstand - b.width >= rand) { links = r.left - abstand - b.width; oben = klemmeY(y - b.height / 2); }
    else { links = klemmeX(x + abstand); oben = klemmeY(y + abstand); }
    box.style.left = links + "px"; box.style.top = oben + "px";
  }
  function zeige(el, x, y, unter) {
    if (!an || !el || el.closest("[data-kd-werkzeug]") || el === document.body || el === document.documentElement) return;
    ziel = el;
    try { baue(el); } catch (er) { return; }
    box.hidden = false;
    platziere(x, y, unter);
  }
  function verberge() { box.hidden = true; ziel = null; clearTimeout(uhr); }
  /* Esc oder ✕: dieser Tooltip zu; er kommt beim nächsten Element wieder. Fokus zurück zum Element. */
  var ruhig = false;
  function schliesse() {
    var war = ziel, imTooltip = box.contains(document.activeElement);
    gesperrt = war; verberge();
    if (imTooltip && war && war.focus) { ruhig = true; war.focus(); }
  }
  var zuletzt = null;                       // letztes Element unter der Maus (für "nur mit ⌥")

  document.addEventListener("pointermove", function (ev) {
    if (!an || ev.pointerType === "touch") return;
    var t = ev.target;
    zuletzt = { t: t, x: ev.clientX, y: ev.clientY };
    if (t.closest && t.closest(".kd-insp")) { clearTimeout(wegUhr); return; }     // im Tooltip bleiben
    if (t === ziel || t === gesperrt) return;
    if (modus === "alt" && !ev.altKey) {    // ohne ⌥: nichts Neues zeigen, offenen Tooltip nach dem Nachlauf schließen
      clearTimeout(uhr);
      if (!box.hidden) { clearTimeout(wegUhr); wegUhr = setTimeout(verberge, NACHLAUF); }
      return;
    }
    gesperrt = null;
    clearTimeout(uhr);
    if (!box.hidden) { clearTimeout(wegUhr); wegUhr = setTimeout(function () { zeige(t, ev.clientX, ev.clientY, t.getBoundingClientRect()); }, NACHLAUF); return; }
    uhr = setTimeout(function () { zeige(t, ev.clientX, ev.clientY, t.getBoundingClientRect()); }, VERZOEGERUNG);
  }, { passive: true });
  document.addEventListener("pointerleave", verberge);
  document.documentElement.addEventListener("mouseleave", verberge);
  window.addEventListener("scroll", function () { if (!box.hidden && !box.contains(document.activeElement)) verberge(); }, { passive: true });
  document.addEventListener("focusin", function (ev) {
    if (ruhig) { ruhig = false; return; }
    if (!an || modus === "alt" || box.contains(ev.target)) return;
    var t = ev.target;
    if (t.matches && t.matches(":focus-visible")) { var r = t.getBoundingClientRect(); zeige(t, r.left, r.bottom, r); }
  });
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && !box.hidden) { schliesse(); ev.stopPropagation(); return; }
    if (ev.key === "Alt" && modus === "alt" && zuletzt && box.hidden && !ev.repeat) {
      gesperrt = null; zeige(zuletzt.t, zuletzt.x, zuletzt.y, zuletzt.t.getBoundingClientRect()); return;
    }
    if (ev.altKey && ev.code === "KeyI") { ev.preventDefault(); schalte(!an, true); }
  }, true);

  function setzeModus(m, ansagen, senden) {
    if (["aus", "zeigen", "alt"].indexOf(m) < 0) return;
    if (m !== "aus") vorher = m;
    modus = m; an = m !== "aus";
    try { localStorage.setItem("op.inspektor", m); localStorage.setItem("op.inspektor.vorher", vorher); } catch (er) { /* privat: egal */ }
    if (!an) verberge();
    if (knopf) knopf.setAttribute("aria-pressed", String(an));
    ecke.setAttribute("aria-pressed", String(an));
    zeichneEcke();
    if (ansagen) OP.melde(T(m === "alt" ? "insp_an_alt" : an ? "insp_an" : "insp_aus", { taste: ALT }));
    if (senden && /^https?:$/.test(location.protocol)) OP.sende({ inspektor: m }).catch(function () { /* ohne Designer: nur hier */ });
  }
  /* Schnittstelle für onepager.js: Modus aus dem Designer/Server übernehmen, ohne zurückzusenden */
  OP.inspektorModus = function (m) { if (m !== modus) setzeModus(m, false, false); };
  OP.inspektorModusJetzt = function () { return modus; };
  function schalte(neu, ansagen) {
    setzeModus(neu ? vorher : "aus", ansagen, true);
  }
  if (knopf) knopf.addEventListener("click", function () { schalte(!an, true); });
  ecke.addEventListener("click", function () { schalte(!an, true); });
  setzeModus(modus, false, false);
  /* Abgleich mit dem Server (D21): kennt er einen Modus, gilt der; sonst den eigenen melden */
  if (/^https?:$/.test(location.protocol)) {
    fetch("/api/zustand", { cache: "no-store" }).then(function (r) { return r.json(); })
      .then(function (z) { if (z.inspektor) OP.inspektorModus(z.inspektor); else OP.sende({ inspektor: modus }).catch(function () {}); })
      .catch(function () { /* ohne Designer: nur hier */ });
  }
})();
