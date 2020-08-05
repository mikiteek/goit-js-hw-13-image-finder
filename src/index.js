import fetchQuery from './js/fetchQuery';
import refs from "./js/refs"
// import LoadMoreBtn from "./js/components/load-more-btn";
import handleSpinner from "./js/components/spinner";
const throttle = require("lodash.throttle");
import updateImagesMarkup from "./js/update-images-markup"
import './sass/styles.scss';
// const loadMoreBtn = new LoadMoreBtn({
//   selector: ".load-more",
//   hidden: true,
// });

const throttleLoadMore = throttle(loadMore, 500);
refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
window.addEventListener("scroll", throttleLoadMore);
// loadMoreBtn.refs.button.addEventListener('click', fetchImages);

function searchFormSubmitHandler(event) {
  event.preventDefault();
  const form = event.currentTarget;
  fetchQuery.query = form.elements.query.value;

  clearImages();
  fetchQuery.resetPage();
  fetchImages();
  form.reset();
}
function fetchImages() {
  handleSpinner.showSpinner();
  // loadMoreBtn.disable();
  fetchQuery.fetchImages().then(images => {
    // console.log(images);
    updateImagesMarkup(images);
    windowSchrollTo();
    // loadMoreBtn.show();
    // loadMoreBtn.enable();
  });
  handleSpinner.hideSpinner();
}
function clearImages() {
  refs.imagesUl.innerHTML = '';
}

function loadMore() {
  const images = refs.imagesUl;
  if(window.pageYOffset + window.innerHeight >= images.offsetHeight) {
    fetchImages();
  }
}
function windowSchrollTo() {
  window.scrollTo({
    top: document.documentElement.offsetHeight - 320,
    behavior: "smooth"
  })
}
