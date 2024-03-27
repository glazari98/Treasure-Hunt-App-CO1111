const cacheName = 'treasure-hunt';
const filesToCache = ['/','index.html','app.css',"main.js",'app.html','leadrboard.html','question.html','scoreboard.html','start.html','design.css','question.css','username.css',"app.js","index.js","instascan.min.js","scoreboard.js"];
//Start the service worker and cache all of the app's content.
self.addEventListener('install', function(e) {
    e.waitUntil(caches.open(cacheName)
    .then(function(cache) {
        return cache.addAll(filesToCache);
    }));
});
    //Define which content to retrieve when the app is offline.
self.addEventListener('fetch', function(e) {
    e.respondWith(caches.match(e.request)
    .then(function(response) {
        return response || fetch(e.request);
    }));
});