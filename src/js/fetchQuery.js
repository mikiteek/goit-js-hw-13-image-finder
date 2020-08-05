import searchOpt from './search-options';
//https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы
// &per_page=12&key=твой_ключ
// let page = 1;
export default {
  searchQuery: '',
  page: 1,
  fetchImages() {
    const url = `${searchOpt.BASE_URL}?image_type=${searchOpt.IMAGE_TYPE}&orientation=${searchOpt.ORIENTATION}&q=${this.query}&page=${this.page}&per_page=${searchOpt.PER_PAGE}&key=${searchOpt.API_KEY}`;
    return fetch(url)
      .then(res => res.json())
      .then(({ hits }) => {
        this.incrementPage();

        return hits;
      });
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
  getUrl() {
    return `${searchOpt.BASE_URL}?image_type=${searchOpt.IMAGE_TYPE}&orientation=${searchOpt.ORIENTATION}&q=${this.query}&page=${this.page}&per_page=${searchOpt.PER_PAGE}&key=${searchOpt.API_KEY}`;
  }
};

