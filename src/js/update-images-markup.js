import imagesTemplate from '../templates/images.hbs';
import refs from './refs';

function updateImagesMarkup(articles) {
  const markup = imagesTemplate(articles);
  refs.imagesUl.insertAdjacentHTML('beforeend', markup);
}

export default updateImagesMarkup;
