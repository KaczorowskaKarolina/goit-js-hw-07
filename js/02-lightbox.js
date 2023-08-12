import { galleryItems } from "./gallery-items.js";


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

// ----------------------------------------------

// Importuje obiekt galleryItems z pliku "./gallery-items.js".
// Pobiera element HTML o klasie "gallery" i przypisuje go do zmiennej gallery.
// Definiuje funkcję liItem, która jako argument przyjmuje obiekt zawierający pola preview, original i description. Funkcja ta zwraca kod HTML reprezentujący pojedynczy element listy (<li>) w galerii, zawierający link do oryginalnego obrazka i podglądową miniaturkę (<img>).
// Definiuje funkcję getImages, która jako argument przyjmuje tablicę obiektów img. Funkcja ta mapuje każdy obiekt item na kod HTML reprezentujący pojedynczy element listy przy użyciu funkcji liItem, a następnie łączy te kody w jedną wielką ciągłą linię za pomocą metody join("").
// Ustawia kod HTML wygenerowany przez funkcję getImages(galleryItems) jako zawartość elementu o klasie "gallery" przy użyciu właściwości innerHTML.
// Dodaje nasłuchiwanie na zdarzenie "click" na elemencie o klasie "gallery" i wywołuje funkcję onClickGallery w odpowiedzi na to zdarzenie.
// Inicjalizuje bibliotekę SimpleLightbox, która umożliwia wyświetlanie obrazków w większym rozmiarze po kliknięciu na ich miniaturkę w galerii. Ta biblioteka używa selektora ".gallery a" do znalezienia odpowiednich linków w galerii i konfiguruje, żeby opisy obrazków były pobierane z atrybutu "alt" elementów <img>, a opóźnienie na wyświetlanie podpisów wynosi 250ms.
// Definiuje funkcję onClickGallery, która zatrzymuje domyślną akcję po kliknięciu na element z klasą "gallery" (w tym przypadku linki z obrazkami).
// Wyświetla w konsoli zawartość tablicy galleryItems.