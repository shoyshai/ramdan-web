# Ramadan Web

A vanilla HTML/CSS/JS Ramadan companion app with city-based timings, ibadah tools, and PWA support.

## Features

- Multi-section app: Home, Tools, Schedule, Duas, Sadqa
- Dynamic Ramadan day/date + city schedule rendering from dataset
- City switching with geolocation-assisted selection
- Tools: Tasbeeh, Taraweeh tracker, Zakat calculator, Quran progress, Fitrana, Qibla
- Header install flow with real PWA prompt (`beforeinstallprompt`) on supported browsers
- iOS fallback install guidance banner (Add to Home Screen instructions)
- Offline support after first load (service worker app-shell caching)
- Responsive, centered poster-style layout on desktop
- Mobile timing visibility safeguards (no clipped Sehri/Iftar/prayer times on small screens)
- GitHub Pages subpath compatible + localhost compatible

## Data Source

- `assets/data/ramadan_2026_india.json`

## Project Structure

- `index.html` - App markup and sections
- `assets/css/styles.css` - Styling, responsive layout, branding
- `assets/js/app.js` - App logic, timing updates, tools, install prompt handling
- `manifest.webmanifest` - PWA manifest
- `sw.js` - Service worker (app shell + runtime caching)
- `assets/icons/` - app icons + maskable icons

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

- Manifest: `manifest.webmanifest`
- Service worker: `sw.js`
- Icons:
  - `assets/icons/icon-192.png`
  - `assets/icons/icon-512.png`
  - `assets/icons/maskable-192.png`
  - `assets/icons/maskable-512.png`

`Install App` appears when `beforeinstallprompt` is available, hides after install, and shows iOS-specific guidance when prompt API is unavailable.

## Local Run

Serve from any static server (or XAMPP) and open:

- `http://localhost/ramadan-web/` (or your configured subpath)
