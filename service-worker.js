var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/Covid.css',
  'main.js',
  '/COVID-19-TRACKER-BY-COUNTRY.htm',
];

/* Start the service worker and cache all of the app's content */

// Listen for install event, set callback
self.addEventListener('install', function(event) {
    // Perform some task
     alert ("install");
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheName) {
      return Promise.all(
        cacheNames.filter(function(cacheNam) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
        }).map(function(cacheNam) {
          return caches.delete(cacheNam);
        })
      );
    })
  );
});
