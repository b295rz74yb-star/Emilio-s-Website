# moc – Website

Schlichte, hochwertige Website für die Jeans-Marke **moc** (japanischer Denim der Kuroki-Weberei, gefertigt in Italien, Patch aus Cavallino) – reines HTML, CSS und JavaScript, ohne Build-Schritt.

## Dateien

- `index.html` – Startseite (Hero, Statement, Produkt „Modell 01“ mit Größenauswahl, Details, Kontakt)
- `style.css` – Design (Farben und Schriften oben in `:root`)
- `script.js` – Menü, Animationen, Größenauswahl, Bestellung per E-Mail
- `images/` – Produktbilder
- `impressum.html`, `datenschutz.html`, `widerruf.html` – rechtliche Seiten (Platzhalter!)

## Lokal ansehen

`index.html` im Browser öffnen, oder:

```bash
python3 -m http.server 8000
```

## Anpassen

1. E-Mail-Adresse in `index.html` (Kontakt) und `script.js` (`ORDER_EMAIL`) eintragen.
2. Verfügbare Größen in `index.html` im Abschnitt „Größenauswahl“ anpassen.
3. Impressum, Datenschutz und Widerrufsbelehrung mit echten Angaben ausfüllen.
4. Für echten Online-Verkauf (Bezahlung, Warenkorb) später ein Shop-System anbinden, z. B. Shopify Buy Button, Stripe Payment Links oder PayPal.

## Veröffentlichen

Z. B. kostenlos über **GitHub Pages**: Repository → Settings → Pages → Branch `main` / Ordner `/ (root)` auswählen.
