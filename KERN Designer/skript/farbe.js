/* KERN Designer — Farbrechnung, gemeinsam für Designer und OnePager (EINE Quelle, GI §3).
   Jede CSS-Farbe (auch oklch, auch mit Alpha) wird über Canvas in sRGB umgerechnet;
   Kontrast nach WCAG 2.2 (relative Luminanz). ES5, damit der OnePager es wie
   kern-neu.js laden kann. */
(function (global) {
  "use strict";
  var leinwand = document.createElement("canvas");
  leinwand.width = leinwand.height = 1;
  var pinsel = leinwand.getContext("2d", { willReadFrequently: true });

  /* farben: Liste von außen nach innen; jede wird auf die vorige gemalt.
     Ergebnis: [r, g, b] 0–255 der obersten Schicht nach Verrechnung. */
  function zuRgb(farben) {
    pinsel.clearRect(0, 0, 1, 1);
    for (var i = 0; i < farben.length; i++) {
      pinsel.fillStyle = "#000";
      pinsel.fillStyle = farben[i];
      pinsel.fillRect(0, 0, 1, 1);
    }
    var p = pinsel.getImageData(0, 0, 1, 1).data;
    return [p[0], p[1], p[2]];
  }
  /* Deckkraft einer CSS-Farbe 0–1 (für "durchsichtig?") */
  function alpha(farbe) {
    pinsel.clearRect(0, 0, 1, 1);
    pinsel.fillStyle = "#000";
    pinsel.fillStyle = farbe;
    pinsel.fillRect(0, 0, 1, 1);
    return pinsel.getImageData(0, 0, 1, 1).data[3] / 255;
  }
  function luminanz(rgb) {
    var c = rgb.map(function (v) { v /= 255; return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }
  function kontrast(a, b) {
    var x = luminanz(a), y = luminanz(b);
    return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
  }
  function hex(rgb) {
    return "#" + rgb.map(function (x) { return ("0" + x.toString(16)).slice(-2); }).join("").toUpperCase();
  }
  /* "oklch(42.84% 0.1689 265.02)" → {l: 42.84, c: 0.1689, h: 265.02} oder null */
  function liesOklch(wert) {
    var m = /^oklch\(\s*([\d.]+)%\s+([\d.]+)\s+([\d.]+)\s*\)$/.exec(String(wert).trim());
    return m ? { l: +m[1], c: +m[2], h: +m[3] } : null;
  }
  function schreibOklch(o) {
    var r = function (x, n) { return (Math.round(x * Math.pow(10, n)) / Math.pow(10, n)).toString(); };
    return "oklch(" + r(o.l, 2) + "% " + r(Math.max(0, o.c), 4) + " " + r(((o.h % 360) + 360) % 360, 2) + ")";
  }
  global.KD_FARBE = { zuRgb: zuRgb, alpha: alpha, kontrast: kontrast, hex: hex, liesOklch: liesOklch, schreibOklch: schreibOklch };
})(window);
