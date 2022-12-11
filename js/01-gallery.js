import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = makeGalleruMarkup(galleryItems);
galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryEl.addEventListener("click", onGalleryImageClick);


function makeGalleruMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
      <a class="gallery__link href="${original}">
    <img class="gallery__image" src="${preview}"
    data-source="${original}"
    alt="${description}"
    /></a></div>`
    }).join("");
}

function onGalleryImageClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }

    const modalImg = evt.target.dataset.source;
    const modal = basicLightbox.create(`<img src="${modalImg}">`);

    modal.show();

}
