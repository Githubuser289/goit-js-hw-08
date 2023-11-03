// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ulGallery = document.querySelector('.gallery');
ulGallery.style.listStyle = 'none';

var liList = [],
  modalLightBox;

galleryItems.forEach(item => {
  const newLiItem = document.createElement('li');
  newLiItem.classList.add('gallery__item');

  const newAnchor = document.createElement('a');
  newAnchor.classList.add('gallery__link');
  newAnchor.href = item.original;

  const newImg = document.createElement('img');
  newImg.classList.add('gallery__image');
  newImg.src = item.preview;
  newImg.dataset.source = item.original;
  newImg.alt = item.description;

  newAnchor.append(newImg);
  newLiItem.append(newAnchor);
  liList.push(newLiItem);
});

ulGallery.append(...liList);

(function () {
  var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
})();
