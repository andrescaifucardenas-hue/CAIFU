const CACHE_NAME = 'caifu-v850';
const urlsToCache = [
  './',
  './index.html',
  'https://raw.githubusercontent.com/andrescaifucardenas-hue/CAIFU/main/logo.png.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});