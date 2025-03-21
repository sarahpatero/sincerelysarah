document.addEventListener("DOMContentLoaded", () => {
    // Elements for the lightbox functionality
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const close = document.querySelector(".close");

    // Elements for the pop-up and gallery
    const popupOverlay = document.getElementById("popup-overlay");
    const gallery = document.querySelector(".gallery");
    const continueButton = document.getElementById("continue-button");

    // Lightbox functionality
    document.querySelectorAll(".gallery-item").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;  // Set the lightbox image to the clicked image's source
        });
    });

    close.addEventListener("click", () => {
        lightbox.style.display = "none";  // Close the lightbox when the close button is clicked
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";  // Close the lightbox if the area outside the image is clicked
        }
    });

    // Show pop-up when page loads
    popupOverlay.style.display = "flex"; // Display the pop-up

    // Function to hide pop-up and reveal gallery
    continueButton.addEventListener("click", () => {
        // Fade-out the pop-up overlay
        popupOverlay.style.opacity = "0";
        popupOverlay.style.transition = "opacity 1s ease";

        // After the fade-out completes, hide the pop-up and show the gallery
        setTimeout(() => {
            popupOverlay.style.display = "none"; // Hide the pop-up completely
            gallery.style.opacity = "1"; // Show the gallery
            gallery.style.visibility = "visible"; // Ensure it's visible after the fade-in
        }, 1000); // Wait 1 second to match the fade-out duration
    });
});
