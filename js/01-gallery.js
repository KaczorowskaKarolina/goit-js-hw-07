import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
let lightbox;

const divItem = ({ preview, original, description }) => `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
`;

const getImages = (img) => img.map((item) => divItem(item)).join("");

gallery.innerHTML = getImages(galleryItems);

gallery.addEventListener("click", onClickGallery);

const genBigImg = ({ url, description }) => `
  <img
    class="gallery__image"
    src="${url}"
    width="1280"
    alt="${description}"/>
`;

function onClickGallery(e) {
  e.preventDefault();

  const url = e.target.dataset.source;
  const description = e.target.alt;

  if (!(url && description)) return;

  lightbox = basicLightbox.create(genBigImg({ url, description }), {
    onClose: () => {
      gallery.removeEventListener("keydown", onKeyDownEsc);
    },
  });
  lightbox.show();
  gallery.addEventListener("keydown", onKeyDownEsc);
}

const onKeyDownEsc = (e) => {
  if (e.key === "Escape" || e.keyCode === 27) {
    lightbox.close();
  }
  console.log(e.key);
};

// -------------------------------------------------

// Importuje się tablicę galleryItems z pliku gallery-items.js.
// Ustala się zmienną gallery, która odnosi się do elementu o klasie "gallery".
// Ustala się zmienną lightbox.
// Tworzona jest funkcja divItem, która przyjmuje obiekt z właściwościami preview, original i description. Tworzy ona kod HTML dla pojedynczego elementu galerii i zwraca go.
// Tworzona jest funkcja getImages, która przyjmuje tablicę obiektów i za pomocą funkcji map i join tworzy kod HTML dla wszystkich elementów galerii i zwraca go.
// Przypisuje się kod HTML dla wszystkich elementów galerii do wewnętrznego HTML elementu gallery za pomocą gallery.innerHTML.
// Dodaje się nasłuchiwanie na kliknięcie w galerii za pomocą gallery.addEventListener i funkcji onClickGallery.
// Tworzona jest funkcja genBigImg, która przyjmuje obiekt z właściwościami url i description. Tworzy ona kod HTML dla dużego obrazu (lightbox) i zwraca go.
// Tworzona jest funkcja onClickGallery, która przyjmuje zdarzenie e. Zatrzymuje ona domyślne działanie zdarzenia. Pobiera adres URL i opis obrazu z atrybutów dataset i alt klikniętego elementu. Jeśli któryś z atrybutów jest pusty, zwraca early return. Tworzony jest lightbox za pomocą funkcji basicLightbox.create, która przyjmuje kod HTML dużego obrazu i obiekt z funkcją onClose, która jest wywoływana przy zamykaniu lightboxa. Wyświetla się lightbox za pomocą lightbox.show(). Dodaje się nasłuchiwanie na naciśnięcie klawisza "Escape" za pomocą addEventListener i funkcji onKeyDownEsc.
// Tworzona jest funkcja onKeyDownEsc, która przyjmuje zdarzenie e. Jeśli kliknięty klawisz to "Escape" lub jego odwzorowanie to 27, zamyka się lightbox za pomocą lightbox.close().