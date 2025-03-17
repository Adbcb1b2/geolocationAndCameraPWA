// Define cache name
const CACHE_NAME = "geo-cam-pwa";

// List of files to cache
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

// Listen for install event
self.addEventListener("install", (event) => {
    // Prevent installation until all files are cached
    event.waitUntil(
        // Open the cache (returns a promise)
        caches.open(CACHE_NAME).then((cache) => {
            // Once the promise is resolved, add all files to the cache
            return cache.addAll(FILES_TO_CACHE).catch((error) => {
                // Log any errors
                console.error('Failed to cache:', error);
            });
        })
    );
});

