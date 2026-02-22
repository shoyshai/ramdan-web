# Ramadan Web (Parity Build)



## Features

- Multi-section Ramadan app: Home, Tools, Schedule, Duas, Sadqa
- Dynamic Ramadan day/date and city-based timings
- Tasbeeh, Taraweeh tracker, Zakat, Quran progress, Fitrana, Qibla
- Geolocation city detection and city switching
- Offline support after first load (service worker)
- Install prompt support (PWA)
- Works on GitHub Pages subpath and localhost

## Data

- City schedules are loaded from:
  - `assets/data/ramadan_2026_india.json`

## Paths / Hosting

The app auto-detects a base path from the current URL and uses it for:

- JSON data loading
- Service worker registration
- Cache scope

So it works at:

- `https://<user>.github.io/ramadan-web/`
- `http://localhost/ramadan-web/`
- `http://localhost/ramdan-web/`

## PWA

- Manifest: `manifest.json`
- Service worker: `sw.js`
- Icons: `assets/icons/icon-192.png`, `assets/icons/icon-512.png`
