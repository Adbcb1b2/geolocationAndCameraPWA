// Initialise UI components
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const photo = document.getElementById("photo");
const openCamera = document.getElementById("openCamera");
const capture = document.getElementById("capture");

// Open camera, display live stream with getUserMedia()
openCamera.addEventListener("click", async() => {
    try{
        // Pause execution until promise resolved
        stream = await navigator.mediaDevices.getUserMedia({video: true});
        // When camera stream is available, display it in the video element
        video.srcObject = stream;
    }catch (error){
        // If there's an error, log & alert user
        console.error("Error accessing camera", error);
        alert("Could not access camera. Please grant permission.");
    }
});

// Capture image and display it in canvas
capture.addEventListener("click", () => {
    if(!stream) return; // Return if there is no stream available
    
    const context = canvas.getContext("2d");
    // Set the canvas dimensions to match the video stream
    canvas.clientWidth = video.videoWidth;
    canvas.clientHeight = video.videoHeight;

    // Draw the current frame of the video stream onto the canvas (i.e capture it)
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert camera content to PNG image
    photo.src = canvas.toDataURL("image/png");

});

