// Initialise UI elements
const getLocationButton = document.getElementById("getLocation");
const locationText = document.getElementById("location");

// When 'Get Location' button is clicked, get current location and display in HTML paragraph
getLocationButton.addEventListener("click", () => {
    if("geolocation" in navigator){
        // Use navigator object to get current location
        navigator.geolocation.getCurrentPosition(
            // If successful, display data in HTML paragraph
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const accuracy = position.coords.accuracy;
                locationText.innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude} <br> Accuracy: ${accuracy}m`;
            }, 
            // If unsuccessful, log the error and alert user
            (error) => {
                console.error("Error:", error);
                navigator.permissions.query({name: "geolocation"}).then((result) => {
                    if(result.state === "granted"){
                        alert("Cannot get location.", error);
                        locationText.innerHTML = "Unable to get location."
                    }else if (result.state === "denied"){
                        alert("Cannot get location - Permissions previously denied. Please change the settings in your browser.");
                        locationText.innerHTML = "Location permissions previously denied. Please change the settings in your browser."
                    }
                })


            },
            // Request location with high accuracy
            {
                enableHighAccuracy: true // Optional
            }
        )

    }else{
        alert("Geolocation not supported. Please try a different browser.");
        locationText.innerHTML("Geolocation not supported in this browser.")
    }
});