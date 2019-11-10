self.addEventListener('fetch', function(event){

    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
          return response || fetch(event.request);
        })
      );

});


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('/').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/world.html',
       '/android-chrome-192x192.png',
       '/apple-touch-icon.png',
       '/favicon-16x16.png',
       '/favicon-32x32.png',
       '/icons-512.png',
     ]);
   })
 );
});