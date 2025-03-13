// Initialise UI elements
const getLocationButton = document.getElementById("getLocation");
const locationText = document.getElementById("location");

// When 'Get Location' button is clicked, get current location and display in HTML paragraph
getLocationButton.addEventListener("click", () => {
    
    // Check if the browser supports geolocation
    if("geolocation" in navigator){
        locationText.innerHTML = "Getting location...";
        // Use navigator object to get current location
        navigator.geolocation.getCurrentPosition(

            // If location retrieval successful, display data in HTML paragraph
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const accuracy = position.coords.accuracy;
                console.log("Getting location successful:", latitude, longitude, accuracy);
                // Display location data in HTML paragraph
                locationText.innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude} <br> Accuracy: ${accuracy}m`;
            }, 

            // If location retrieval unsuccessful, log the error and alert user
            (error) => {
                console.error("Error:", error);
                // Check the user's geolocation permissions
                navigator.permissions.query({name: "geolocation"}).then((result) => {
                    // If already granted, something else went wrong
                    if(result.state === "granted"){
                        alert("Permissions granted but cannot get location. Please try again", error);
                        locationText.innerHTML = "Permissions granted but cannot get location. Please try again";
                    // If permission previously denied, alert user to change settings
                    }else if (result.state === "denied"){
                        alert("Cannot get location - Permissions previously denied. Please enable geolocation permissions in your browser settings.");
                        locationText.innerHTML = "Cannot get location - Permissions previously denied. Please enable geolocation permissions in your browser settings.";
                    // If permission state cannot be confirmed, alert user to check their browser or device settings
                    }else{
                        alert("Please check browser or device location settings and try again.");
                        locationText.innerHTML = "Please check browser or device location settings and try again.";
                    }
                })


            },
            // Request location with high accuracy
            {
                enableHighAccuracy: true 
            }
        )
    // If geolocation is not supported by the browser, alert user
    }else{
        alert("Geolocation not supported. Please try a different browser.");
        locationText.innerHTML = "Geolocation not supported in this browser.";
    }
});