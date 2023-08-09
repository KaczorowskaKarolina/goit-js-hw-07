import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items.js';

function renderGallery() { const galleryElement = document.querySelector('.gallery'); const galleryHTML = galleryItems.map((item) =>
    <li class="galleryitem">
      <a class="gallerylink" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>
).join(''); galleryElement.innerHTML = galleryHTML; }

window.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  const lightbox = new SimpleLightbox('.gallerylink', {
    captionsData: 'description',
    captionPosition: 'bottom',
    captionDelay: 250
  });
});
console.log(galleryItems);