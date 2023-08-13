import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const liItem = ({ preview, original, description }) =>
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
  </li>
`;

const getImages = (img) => img.map((item) => liItem(item)).join("");

gallery.innerHTML = getImages(galleryItems);

gallery.addEventListener("click", onClickGallery);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function onClickGallery(e) {
  e.preventDefault();
}

console.log(galleryItems);

// ----------------------
// -importuje obiekt galleryItems z pliku "./gallery-items.js". Następnie kod tworzy galerię obrazów na podstawie tego obiektu i wstawia ją do elementu o klasie .gallery.

// -definiuje funkcję genLiItem, która tworzy element listy li zawierający link do oryginalnego obrazu i obrazek o podglądzie oraz opisie. Funkcja ta jest wykorzystywana w funkcji getImages, która mapuje elementy obiektu galleryItems i tworzy listę elementów li. Następnie funkcja getImages łączy te elementy w jedną ciągłą listę za pomocą metody join(""). Wynik tej funkcji jest przypisywany do innerHTML elementu .gallery, co efektywnie wstawia galerię obrazów do strony.

// -nasłuchuje na kliknięcie na elementy w galerii za pomocą metody addEventListener i przekierowuje do metodę onClickGallery, która wywołuje e.preventDefault() w celu zatrzymania domyślnej akcji.

// -na końcu kodu galleryItems jest wypisywane w konsoli.