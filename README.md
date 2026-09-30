# Emilio's Website

Moderne, dunkle One-Page-Website für **Emilio – Websites für Handwerksbetriebe** (Elektriker, Maler, Gartenbau, Gebäudereinigung, SHK) – reines HTML, CSS und JavaScript, ohne Build-Schritt.

## Dateien

- `index.html` – Startseite (Hero, Leistungen, Branchen, Ablauf, Preise, FAQ, Kontakt)
- `style.css` – Design (Farben oben in `:root` anpassbar)
- `script.js` – Menü, Animationen, Kontaktformular
- `impressum.html`, `datenschutz.html` – rechtliche Seiten (Platzhalter!)

## Lokal ansehen

`index.html` einfach im Browser öffnen, oder:

```bash
python3 -m http.server 8000
```

## Anpassen

1. Preise und Texte in `index.html` prüfen und anpassen.
2. E-Mail-Adresse und Telefonnummer in `index.html` sowie in `script.js` (`CONTACT_EMAIL`) eintragen.
3. WhatsApp-Nummer in `index.html` eintragen (beide `https://wa.me/490000000000`-Links, Nummer ohne + und Leerzeichen).
4. Impressum und Datenschutz mit echten Angaben ausfüllen.
5. Farben in `style.css` unter `:root` (`--accent`, `--accent-2`) ändern.

## Veröffentlichen

Z. B. kostenlos über **GitHub Pages**: Repository → Settings → Pages → Branch `main` / Ordner `/ (root)` auswählen.
