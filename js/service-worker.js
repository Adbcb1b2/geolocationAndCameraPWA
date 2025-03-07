// Define cache name and which files to cache
const CACHE_NAME = "geo-cam-pwa";
const FILES_TO_CACHE = [
    "/~2111532/PWA/geolocationAndCameraPWA/index.html", 
    "/~2111532/PWA/geolocationAndCameraPWA/css/styles.css", 
    "/~2111532/PWA/geolocationAndCameraPWA/pages/camera.html", 
    "/~2111532/PWA/geolocationAndCameraPWA/pages/geolocation.html", 
    "/~2111532/PWA/geolocationAndCameraPWA/js/camera.js", 
    "/~2111532/PWA/geolocationAndCameraPWA/js/geolocation.js", 
    "/~2111532/PWA/geolocationAndCameraPWA/js/app.js", 
    "/~2111532/PWA/geolocationAndCameraPWA/icons/icon-192x192.png", 
    "/~2111532/PWA/geolocationAndCameraPWA/icons/icon-512x512.png"
];

// Cache items when service worker is installed
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FILES_TO_CACHE).catch((error) => {
                console.error('Failed to cache:', error);
            });
        })
    );
});