const MODAL_CSS_CLASS = ".modal";
const BUTTON_CSS_CLASS = ".btn";
const CLOSE_MODAL_CSS_CLASS = ".close-modal";

const modal = document.querySelector(MODAL_CSS_CLASS);
const button = document.querySelector(BUTTON_CSS_CLASS);
const closeModalButton = document.querySelector(CLOSE_MODAL_CSS_CLASS);

function openModal(event) {
    event.preventDefault();
    modal.style.display = "block";
}

button.addEventListener("click", openModal);

function closeModal(event) {
    modal.style.display = "none";
}

closeModalButton.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);