import { galleryItems } from './gallery-items.js';

function renderGallery() {
  const galleryElement = document.querySelector('.gallery');
  const galleryHTML = galleryItems.map((item) => `
    <li class="gallery__item">
      <a href="#" class="gallery__link">
        <img src="${item.preview}" alt="${item.alt}" class="gallery__image" data-source="${item.original}">
      </a>
    </li>
  `).join('');
  galleryElement.innerHTML = galleryHTML;
}

window.addEventListener('DOMContentLoaded', () => {
  renderGallery();
});

const galleryElement = document.querySelector('.gallery');
galleryElement.addEventListener('click', (event) => {
  if (event.target.classList.contains('gallery__image')) {
    event.preventDefault();
    const largeImageURL = event.target.dataset.source;
    const lightboxImage = document.querySelector('#lightbox');
    lightboxImage.src = largeImageURL;
    const lightbox = BasicLightbox.create(lightboxImage.outerHTML);
    lightbox.show();
  }
});

document.addEventListener('keyup', (event) => {
  if (event.keyCode === 27) {
    const lightbox = document.querySelector('#lightbox');
    lightbox.close();
  }
});