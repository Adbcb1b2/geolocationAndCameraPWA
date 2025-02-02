// Define cache name and which files to cache
const CACHE_NAME = "geo-cam-pwa"
const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/css/styles.css",
    "/pages/camera.html",
    "/pages/geolocation.html",
    "/js/camera.js",
    "/js/geolocation.js",
    "/js/app.js",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png"
];

// Cache items when service worker is istalled
self.addEventListener("install", (event) => {
    // Wait until cache is populated before completing istall
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            // Add all the files to the cache
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});