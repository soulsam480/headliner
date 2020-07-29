var cacheName = "static-v15";

// Cache our known resources during install
self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches
      .open(cacheName)
      .then(cache =>
        cache.addAll([
          "./assets/style.css",
          "./assets/menustyle.css",
          "infiliner.html",
          "infitech.html",
          "infihealth.html",
          "./assets/js/index.js",
          "./assets/js/jquery-3.4.1.slim.min.js",
          "./assets/js/feednami-client-v1.1.js",
          "./assets/js/infin.js",
          "./assets/js/infit.js",
          "./assets/js/infil.js",
          "./assets/js/common.js",
          "./assets/js/lazyload.min.js",
          "./assets/img/moon.png",
          "./assets/img/android-chrome-192x192.png",
          "./assets/img/apple-touch-icon.png",
          "./assets/img/favicon-16x16.png",
          "./assets/img/favicon-32x32.png",
          "./assets/img/favicon.ico",
          "./assets/img/icons-512.png",
          "./assets/img/mstile-150x150.png",
          "./assets/img/safari-pinned-tab.svg",
          "./cat/bbc.html",
          "./cat/ndtv.html",
          "./cat/nyt.html",
          "./cat/tg.html",
          "./cat/th.html",
          "./cat/toi.html",
          "./cat/ars.html",
          "./cat/g360.html",
          "./cat/gsm.html",
          "./cat/mash.html",
          "about.html",
          "contact.html",
          "offline.html",
          "privacy-policy.html",
          "OneSignalSDKUpdaterWorker.js",
          "OneSignalSDKWorker.js"
        ])
      )
  );
});

self.addEventListener('activate', event => {
  // delete any caches that aren't in expectedCaches
  // which will get rid of static-v1
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (!cacheName.includes(key)) {
          return caches.delete(key);
        }
      })
    )).then(() => {
      console.log('V2 now ready to handle fetches!');
    })
  );
});

// Cache any new resources as they are fetched
self.addEventListener("fetch", event => {
  if (
    event.request.mode === "navigate" ||
    (event.request.method === "GET" &&
      event.request.headers.get("accept").includes("text/html"))
  ) {
    event.respondWith(
      fetch(event.request.url).catch(error => {
        // Return the offline page
        return caches.match("offline.html");
      })
    );
  } else {
    caches
      .match(event.request, { ignoreSearch: true })
      .then(async  (response) => {
        if (response) {
          return response;
        }

        var requestToCache = event.request.clone();

        return fetch(requestToCache).then( (response) => {
          if (!response || response.status !== 200) {
            return response;
          }

          return response;
        });
      });
  }
});
