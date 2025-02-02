// If the browser has service worker capability
if('serviceWorker' in navigator){
    // Wait for page to load before registering service worker
    window.addEventListener('load', () => {
        // Register the service worler
        navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker registered');
        })
        .catch(error => {
            console.log('Failed to register service worker');
        });

    });
}