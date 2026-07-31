const images = [];
for (let i = 1; i <= 111; i++) {
  // All gallery files are tracked in git (and served by GitHub Pages) as
  // uppercase .JPG - Windows' filesystem can display some of them as
  // lowercase locally, but that's not what actually gets deployed.
  images.push(i + ".JPG");
}

// Fisher-Yates Shuffle
for (let i = images.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [images[i], images[j]] = [images[j], images[i]];
}

const galleryDiv = document.getElementById('gallery');

// Load images into gallery
images.forEach(filename => {
  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery-item';

  const imageContainer = document.createElement('div');
  imageContainer.className = 'image-container';

  const img = document.createElement('img');
  img.src = `/gallery/${filename}`;
  img.alt = filename;

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
