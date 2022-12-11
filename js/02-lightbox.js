import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const gallleryMarkup = makeGalleruMarkup(galleryItems);
galleryEl.insertAdjacentHTML("afterbegin", gallleryMarkup);


function makeGalleruMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join("");
}

const imageList = new SimpleLightbox(".gallery a", {
  captionData: "alt",
  captionDelay: 300,
  captionType: "alt",
});