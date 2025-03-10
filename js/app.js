// Check if the browser supports service workers
if ('serviceWorker' in navigator) {
    // Wait for the window to load
    window.addEventListener('load', () => {
        // Register the service worker
        navigator.serviceWorker.register('/~2111532/PWA/geolocationAndCameraPWA/js/service-worker.js')
            // If the registration is successful, log to console
            .then(registration => {
                console.log('Service Worker registered');
            })
            // If the registration is uncsuccessfu, catch and log error
            .catch(error => {
                console.log('Failed to register service worker', error);
            });
    });
}else{
    console.log('Service Worker not supported');
}