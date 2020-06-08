importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       'index.html',
       'COVID-19-TRACKER-BY-COUNTRY.htm',
       'Covid.css',
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 alert(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
