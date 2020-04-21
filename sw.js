/*jshint esversion: 6 */

const cacheName = 'v1::static';

self.addEventListener('install', function(e) {
  // once the SW is installed, go ahead and fetch the resources
  // to make this work offline
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        './browserconfig.xml',
        './icons/android-chrome-192x192.png',
        './icons/android-chrome-512x512.png',
        './icons/apple-touch-icon.png',
        './icons/favicon.ico',
        './icons/mstile-150x150.png',
        './icons/safari-pinned-tab.svg',
        './site.webmanifest',
        './counting.css',
        './counting.html',
        './counting.js',
        './sw.js',
      ]).then(() => self.skipWaiting());
    })
  );
});

// when the browser fetches a url, either response with
// the cached object or go ahead and fetch the actual url
self.addEventListener('fetch', function(e) {
  e.respondWith(
    // ensure we check the *right* cache to match against
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});