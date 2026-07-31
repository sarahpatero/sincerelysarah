// galleryImages is injected by gallery.html, generated at build time from
// whatever files are actually in /gallery/ - see that file for details.
const images = galleryImages.slice();

// Fisher-Yates Shuffle
for (let i = images.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [images[i], images[j]] = [images[j], images[i]];
}

const galleryDiv = document.getElementById('gallery');

// Load images into gallery
images.forEach(path => {
  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery-item';

  const imageContainer = document.createElement('div');
  imageContainer.className = 'image-container';

  const img = document.createElement('img');
  img.src = path;
  img.alt = path.split('/').pop();

  imageContainer.appendChild(img);
  galleryItem.appendChild(imageContainer);
  galleryDiv.appendChild(galleryItem);
});

// Popup and gallery reveal logic
const popupOverlay = document.getElementById('popup-overlay');
const gallery = document.querySelector('.grid');
const continueButton = document.getElementById('continue-button');

continueButton.addEventListener('click', () => {
  // Remove dimming from each image-container to make images fully bright
  document.querySelectorAll('.image-container').forEach(container => {
    container.classList.add('bright');
  });

  // Fade out popup overlay
  popupOverlay.style.opacity = '0';

  setTimeout(() => {
    popupOverlay.style.display = 'none';
    gallery.style.visibility = 'visible';
    gallery.style.opacity = '1';
  }, 1000);
});
