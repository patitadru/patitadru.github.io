// Define the cache name and the files to cache
const CACHE_NAME = 'my-pwa-cache';
const FILES_TO_CACHE = [
  '/',
  'index.html',
  'manifest.json',
  'images/icon.png',
  'style.css',

];

// Install the service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Cache opened');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Activate the service worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch the resources
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        console.log('Cached response:', response);
        return response;
      }
      console.log('Fetching from network:', event.request);
      return fetch(event.request);
    })
  );
});
