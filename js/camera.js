// Initialise UI components
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const photo = document.getElementById("photo");
const openCamera = document.getElementById("openCamera");
const capture = document.getElementById("capture");

let stream;

// When 'Open Camera' button clicked, open camera, display live stream with getUserMedia(), allow capturing of image
openCamera.addEventListener("click", async () => {
    // Hide elements when button clicked
    photo.style.display = "none";
    canvas.style.display = "none";
    capture.style.display = "none"; 
    openCamera.style.display="none";

    // Display the video element for live stream
    video.style.display = "block";

    try {
        // Stop existing video stream if there is one
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }

        // Wait until promise is resolved, then get video stream
        stream = await navigator.mediaDevices.getUserMedia({ video: true });

        // When camera stream is available, display it in the video element
        video.srcObject = stream;

        // Show the capture button only if permission is granted (will go to catch clause and miss this if not granted)
        capture.style.display = "block";

        // When the capture button is clicked, get current video frame and display in image element
        capture.addEventListener("click", () => {
            if (!stream) return; // Return if there is no stream available

            const context = canvas.getContext("2d");
            // Set the canvas dimensions to match the video stream
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            // Draw the current frame of the video stream onto the canvas so it can be converted to PNG
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Convert camera content to PNG image
            photo.src = canvas.toDataURL("image/png");

            // Hide the video and canvas and show the captured image in the photo element
            video.style.display = "none";
            canvas.style.display = "none";
            photo.style.display = "block";

            // Hide the capture button after taking a photo
            capture.style.display = "none";

            // Display the 'Open Camera' button to allow the user to go again
            openCamera.style.display = "block";

        });
        
    } catch (error) {
        // If there's an error, log & alert user
        console.error("Error accessing camera", error);
        alert("Could not access camera. Please grant permission.");
        // Redisplay the 'Open Camera' button to allow the user to try again
        capture.style.display = "none";
        // Hide the capture button to avoid confusion
        openCamera.style.display = "block";
    }
});