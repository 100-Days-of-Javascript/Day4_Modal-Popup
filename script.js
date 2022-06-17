const MODAL_CSS_CLASS = ".modal";
const MODAL_CONTENT_CLASS = ".modal-content";
const BUTTON_CSS_CLASS = ".btn";
const CLOSE_MODAL_CSS_CLASS = ".close-modal";

const modal = document.querySelector(MODAL_CSS_CLASS);
const button = document.querySelector(BUTTON_CSS_CLASS);
const closeModalButton = document.querySelector(CLOSE_MODAL_CSS_CLASS);
const modalContent = document.querySelector(MODAL_CONTENT_CLASS);

function openModal(event) {
    event.preventDefault();
    modal.style.display = "block";
}

function closeModal() {
    modalContent.classList.add("slide-up");
    setTimeout(() => {
        modal.style.display = "none";
        modalContent.classList.remove("slide-up");
    }, 500);
}

button.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);