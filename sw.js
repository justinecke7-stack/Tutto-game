const cacheName = 'tutto-cache-v1';
const filesToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.PNG',
  './icon-512.PNG'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
