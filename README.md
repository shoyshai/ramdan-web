# Ramadan Utility Dashboard 2026

A modern, responsive, fully offline-capable Progressive Web App built with Vanilla HTML, CSS, and JS. Contains NO external dependencies, NO build tools, and is fully tailored to be hosted on GitHub Pages in a subfolder.

## Modules included
- **Schedule**: Full 30-day lookup for 10 Indian cities.
- **Tasbeeh**: Persistent counter.
- **Taraweeh**: 30 day checklist grid.
- **Quran**: 30 Juz Tracker.
- **Qibla Direction**: Geolocation and compass bearing logic based on city selection.
- **Calculators**: Zakat and Fitrana basic calculators.

## GitHub Pages Deployment
1. Commit the code.
2. Ensure repository name is `ramadan-web`.
3. Enable GitHub pages pointing to `/ (root)`.
4. The JS dynamically handles relative paths (`getBasePath()`) allowing the JSON fetch and PWA components to register dynamically under the subfolder path `/<username>/ramadan-web/`.

## Base64 Image Generation Instruction
Replace `icon-192.png` and `icon-512.png` with actual binary PNG icons. For the prototype, an empty or base64 icon could be generated, but standard image files placed in `assets/icons/` are expected for the PWA manifest to fully function in Chrome/Safari.
