self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((r) => {
            console.log('[Service Worker] Fetching resource: '+e.request.url);
        return r || fetch(e.request).then((response) => {
                  return caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching new resource: '+e.request.url);
            cache.put(e.request, response.clone());
            return response;
          });
        });
      })
    );
  });
var cacheName = 'headliner';

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('headliner').then(function(cache) {
     return cache.addAll([
        './',
        './index.html',
        './world.html',
        './android-chrome-192x192.png',
       './apple-touch-icon.png',
       './favicon-16x16.png',
       './favicon-32x32.png',
       './icons-512.png',
       './mstile-150x150.png',
       './favicon.ico',
       './safari-pinned-tab.svg'
     ]);
   })
 );
});