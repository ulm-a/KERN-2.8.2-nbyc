// Führt eine Prüfseite in WebKit (der Engine von Safari) aus — ohne Safari zu starten — und gibt ihr Ergebnis aus.
// Aufruf: swift pruefung/webkit-pruefen.swift <adresse> <js-ausdruck> [sekunden] [hell|dunkel]
//   adresse     http://localhost:8058/… (Prüfserver im Projektordner)
//   js-ausdruck wird wiederholt ausgewertet, bis er nicht null/undefined ist; sein Wert (als JSON) ist das Ergebnis
//               Beispiel Verhaltensprüfung:  window.VP_ERGEBNIS
//               Beispiel Prüfstand:          window.PK_FERTIG   (die Seite setzt es nach alle(); siehe unten)
//   sekunden    Höchstdauer (Standard 120)
//   hell|dunkel Erscheinungsbild des Systems für die Seite (Standard hell)
// Rückgabewert 0 = Ergebnis geliefert, 1 = Zeit abgelaufen oder Seite nicht geladen. Nie ein stilles "ok".
import AppKit
import WebKit

let args = CommandLine.arguments
guard args.count >= 3 else { print("Aufruf: swift webkit-pruefen.swift <adresse> <js-ausdruck> [sekunden] [hell|dunkel]"); exit(2) }
let adresse = URL(string: args[1])!
let ausdruck = args[2]
let frist = args.count > 3 ? Double(args[3]) ?? 120 : 120
let dunkel = args.count > 4 && args[4] == "dunkel"

@MainActor final class Laeufer: NSObject, WKNavigationDelegate {
    let view = WKWebView(frame: NSRect(x: 0, y: 0, width: 1280, height: 1000))
    let start = Date()
    func los() {
        view.navigationDelegate = self
        view.appearance = NSAppearance(named: dunkel ? .darkAqua : .aqua)
        view.load(URLRequest(url: adresse))
        frage()
    }
    func frage() {
        if Date().timeIntervalSince(start) > frist { print("ZEIT ABGELAUFEN nach \(Int(frist)) s"); exit(1) }
        view.evaluateJavaScript("(function(){ try { var w = (\(ausdruck)); return w == null ? null : JSON.stringify(w); } catch (e) { return null; } })()") { wert, _ in
            if let text = wert as? String {
                print(text)
                exit(0)
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) { self.frage() }
        }
    }
    func webView(_ w: WKWebView, didFail n: WKNavigation!, withError e: Error) { print("FEHLER beim Laden: \(e.localizedDescription)"); exit(1) }
    func webView(_ w: WKWebView, didFailProvisionalNavigation n: WKNavigation!, withError e: Error) { print("FEHLER beim Laden: \(e.localizedDescription)"); exit(1) }
}

MainActor.assumeIsolated {
    NSApplication.shared.setActivationPolicy(.prohibited)
    let laeufer = Laeufer()
    laeufer.los()
    while true { RunLoop.main.run(until: Date().addingTimeInterval(0.05)) }
}
