/*jshint esversion: 6 */

const cacheName = 'v1::static';

self.addEventListener('install', function(e) {
  // once the SW is installed, go ahead and fetch the resources
  // to make this work offline
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        './android-chrome-192x192.png',
        './android-chrome-512x512.png',
        './apple-touch-icon.png',
        './browserconfig.xml',
        './favicon-16x16.png',
        './favicon-32x32.png',
        './favicon.ico',
        './mstile-150x150.png',
        './safari-pinned-tab.svg',
        './site.webmanifest',
        './sw.js',
        './trailTracker.css',
        './trailTracker.html',
        './trailTracker.js'

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

// var cacheName = 'hello-pwa';
// var filesToCache = [
//   '/',
//   '/index.html',
//   '/css/style.css',
//   '/js/main.js'
// ];



// /* Serve cached content when offline */
// self.addEventListener('fetch', function(e) {
//   e.respondWith(
//     caches.match(e.request).then(function(response) {
//       return response || fetch(e.request);