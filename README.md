# Ramadan Web

A vanilla HTML/CSS/JS Ramadan companion app with city-based timings, ibadah tools, and PWA support.

## Features

- Multi-section app: Home, Tools, Schedule, Duas, Sadqa
- Dynamic Ramadan day/date + city schedule rendering from dataset
- City switching with geolocation-assisted selection
- Tools: Tasbeeh, Taraweeh tracker, Zakat calculator, Quran progress, Fitrana, Qibla
- PWA install support with header `Install App` button
- Offline support after first load (service worker cache)
- GitHub Pages subpath compatible + localhost compatible
- Centered, narrow desktop layout (poster-style) with responsive mobile behavior

## Data Source

- `assets/data/ramadan_2026_india.json`

## Project Structure

- `index.html` - App markup and sections
- `assets/css/styles.css` - Styling, responsive layout, branding
- `assets/js/app.js` - App logic, timing updates, tools, install prompt handling
- `manifest.json` - PWA manifest
- `sw.js` - Service worker (cache-first behavior)

## Hosting / Base Path

The app derives a base path from the current URL and uses it for:

- data fetch paths
- service worker registration
- cache scope behavior

Supported deployments include:

- `https://<user>.github.io/ramadan-web/`
- `http://localhost/ramadan-web/`
- `http://localhost/ramdan-web/`

## PWA Notes

- Manifest: `manifest.json`
- Service worker: `sw.js`
- Icons:
  - `assets/icons/icon-192.png`
  - `assets/icons/icon-512.png`

`Install App` appears when `beforeinstallprompt` is available and hides after install.

## Local Run

Serve from any static server (or XAMPP) and open:

- `http://localhost/ramadan-web/` (or your configured subpath)
