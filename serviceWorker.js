const staticCacheName = "cache-v1";

const assets = [
"/",
"/index pizza.html",
"/style.css",
"/page1.html",
"/page2.html",
"/page3.html",
"/page4.html",
"/page5.html",
"/page6.html",
];

//Ajout de fichiers en cache

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(staticCacheName).then((cache) =>{
            cache.addAll(assets);
        })
    );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
  
          // IMPORTANT: Cloner la requête.
          // Une requete est un flux et est à consommation unique
          // Il est donc nécessaire de copier la requete pour pouvoir l'utiliser et la servir
          var fetchRequest = event.request.clone();
  
          return fetch(fetchRequest).then(
            function(response) {
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
  
              // IMPORTANT: Même constat qu'au dessus, mais pour la mettre en cache
              var responseToCache = response.clone();
  
              caches.open(staticCacheName)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
  
              return response;
            }
          );
        })
    );
  });


