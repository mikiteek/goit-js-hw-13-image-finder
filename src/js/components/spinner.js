import refs from "../refs";
function showSpinner() {
  refs.spinner.classList.remove("js-is-hidden");
}

function hideSpinner() {
  refs.spinner.classList.add("js-is-hidden");
}

export default {
  hideSpinner,
  showSpinner
}
