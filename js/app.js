// Registering the service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/~2111532/PWA/geolocationAndCameraPWA/js/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered');
            })
            .catch(error => {
                console.log('Failed to register service worker', error);
            });
    });
}