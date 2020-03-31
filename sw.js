var cacheName = "static";

// Cache our known resources during install
self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(cacheName)
      .then(cache =>
        cache.addAll([
          "./assets/style.css",
          "./assets/js/index.js",
          "./assets/js/jquery-3.4.1.slim.min.js",
          "./assets/js/feednami-client-v1.1.js",
          "./assets/js/infin.js",
          "./assets/js/infit.js",
          "./assets/js/infil.js",
          "./assets/js/lazyload.min.js",
          "./assets/img/android-chrome-192x192.png",
          "./assets/img/apple-touch-icon.png",
          "./assets/img/favicon-16x16.png",
          "./assets/img/favicon-32x32.png",
          "./assets/img/favicon.ico",
          "./assets/img/icons-512.png",
          "./assets/img/mstile-150x150.png",
          "./assets/img/safari-pinned-tab.svg",
          "offline.html",
          "privacy-policy.html"
        ])
      )
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
      .then(async function (response) {
        if (response) {
          return response;
        }

        var requestToCache = event.request.clone();

        return fetch(requestToCache).then(function (response) {
          if (!response || response.status !== 200) {
            return response;
          }

          return response;
        });
      });
  }
});
