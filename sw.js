// Cambia la primera línea a v890
const CACHE_NAME = 'caifu-v890'; 
const urlsToCache = [ './', './index.html' ];

self.addEventListener('install', e => {
  self.skipWaiting(); // Esto obliga a la nueva versión a activarse
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache)));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => {
    if(k !== CACHE_NAME) return caches.delete(k);
  }))));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});