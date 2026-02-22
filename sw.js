const CACHE_NAME = 'ramadan-web-v1';

// Compute BASE path exactly like app.js
const BASE = new URL(self.registration.scope).pathname;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                `${BASE}`,
                `${BASE}index.html`,
                `${BASE}manifest.json`,
                `${BASE}assets/css/styles.css`,
                `${BASE}assets/js/app.js`,
                `${BASE}assets/data/ramadan_2026_india.json`,
                `${BASE}assets/icons/icon-192.png`,
                `${BASE}assets/icons/icon-512.png`
            ]);
        })
    );
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).then((fetchResponse) => {
                let responseClone = fetchResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseClone);
                });
                return fetchResponse;
            });
        }).catch(() => {
            if (event.request.mode === 'navigate') {
                return caches.match(`${BASE}index.html`);
            }
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});
