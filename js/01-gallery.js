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
    const lightbox = basicLightBox.create(lightboxImage.outerHTML);
    lightbox.show();
  }
});

// document.addEventListener('keyup', (event) => {
//   if (event.keyCode === 27) {
//     const lightbox = document.querySelector('#lightbox');
//     lightbox.close();
//   }
// });

// ---------------------------------------------

// import { galleryItems } from './gallery-items.js';

// function renderGallery() {
//   const galleryElement = document.querySelector('.gallery');
//   galleryItems.forEach((item) => {
//     const listItem = document.createElement('li');
//     listItem.classList.add('galleryitem');

// const link = document.createElement('a');
// link.classList.add('gallerylink');
// link.href = '#';

// const image = document.createElement('img');
// image.src = item.preview;
// image.alt = item.alt;
// image.classList.add('gallery__image');
// image.dataset.source = item.original;

// link.appendChild(image);
// listItem.appendChild(link);

// galleryElement.appendChild(listItem);
// });
// }

// window.addEventListener('DOMContentLoaded', () => {
//   renderGallery();
// });

// const galleryElement = document.querySelector('.gallery');
// galleryElement.addEventListener('click', (event) => {
//   if (event.target.classList.contains('gallery__image')) {
//     event.preventDefault();
//     const largeImageURL = event.target.dataset.source;
//     const lightboxImage = document.querySelector('#lightbox');
//     lightboxImage.src = largeImageURL;
//     const lightbox = basicLightBox.create(lightboxImage.outerHTML);
//     lightbox.show();
//   }
// });

// document.addEventListener('keyup', (event) => {
//   if (event.keyCode === 27) {
//     const lightbox = document.querySelector('#lightbox');
//     lightbox.close();
//   }
// });

// --------------------------------------------------------------

// import { galleryItems } from './gallery-items.js';

// function renderGallery() {
//   const galleryElement = document.querySelector('.gallery');
//   galleryItems.forEach((item) => {
//     const listItem = document.createElement('li');
//     listItem.classList.add('galleryitem');

// const link = document.createElement('a');
// link.classList.add('gallerylink');
// link.href = '#';

// const image = document.createElement('img');
// image.src = item.preview;
// image.alt = item.alt;
// image.classList.add('gallery__image');
// image.dataset.source = item.original;

// link.appendChild(image);
// listItem.appendChild(link);

// galleryElement.appendChild(listItem);
// });
// }

// window.addEventListener('DOMContentLoaded', () => {
//   renderGallery();
// });

// const galleryElement = document.querySelector('.gallery');
// galleryElement.addEventListener('click', (event) => {
//   if (event.target.classList.contains('gallery__image')) {
//     event.preventDefault();
//     const largeImageURL = event.target.dataset.source;
//     const lightboxImage = document.querySelector('#lightbox');
//     lightboxImage.src = largeImageURL;
//     const lightbox = basicLightBox.create(lightboxImage);
//     lightbox.show();
//   }
// });

// document.addEventListener('keyup', (event) => {
//   if (event.keyCode === 27) {
//     const lightbox = document.querySelector('#lightbox');
//     lightbox.close();
//   }
// });

// const galleryItems = [ { preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820480.jpg', original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-42028201280.jpg', description: 'Hokkaido Flower', }, { preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677340.jpg', original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-42036771280.jpg', description: 'Container Haulage Freight', }, { preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785340.jpg', original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-42067851280.jpg', description: 'Aerial Beach View', }, { preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619340.jpg', original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-18356191280.jpg', description: 'Flower Blooms', }, { preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334340.jpg', original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-36743341280.jpg', description: 'Alpine Mountains', }, { preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571340.jpg', original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-42085711280.jpg', description: 'Mountain Lake Sailing', }, { preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272340.jpg', original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-42092721280.jpg', description: 'Alpine Spring Meadows', }, { preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255340.jpg', original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-42082551280.jpg', description: 'Nature Landscape', }, { preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_340.jpg', original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-42088431280.jpg', description: 'Lighthouse Coast Sea', }, ];

// renderGallery();