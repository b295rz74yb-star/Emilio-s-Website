# Emilio's Website

Moderne, dunkle One-Page-Website für eine Firma / Dienstleistung – reines HTML, CSS und JavaScript, ohne Build-Schritt.

## Dateien

- `index.html` – Startseite (Hero, Leistungen, Ablauf, Preise, FAQ, Kontakt)
- `style.css` – Design (Farben oben in `:root` anpassbar)
- `script.js` – Menü, Animationen, Kontaktformular
- `impressum.html`, `datenschutz.html` – rechtliche Seiten (Platzhalter!)

## Lokal ansehen

`index.html` einfach im Browser öffnen, oder:

```bash
python3 -m http.server 8000
```

## Anpassen

1. Texte in `index.html` durch echte Inhalte ersetzen (Leistungen, Preise, FAQ).
2. E-Mail-Adresse in `index.html` und in `script.js` (`CONTACT_EMAIL`) eintragen.
3. Impressum und Datenschutz mit echten Angaben ausfüllen.
4. Farben in `style.css` unter `:root` (`--accent`, `--accent-2`) ändern.

## Veröffentlichen

Z. B. kostenlos über **GitHub Pages**: Repository → Settings → Pages → Branch `main` / Ordner `/ (root)` auswählen.
