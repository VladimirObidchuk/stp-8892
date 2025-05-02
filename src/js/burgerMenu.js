const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

if (openModalBtn && closeModalBtn && modal) {
  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', handleClickOutside);
}

function openModal() {
  modal.classList.add('is-open');
  document.addEventListener('keydown', handleEscPress);
}

function closeModal() {
  modal.classList.remove('is-open');
  document.removeEventListener('keydown', handleEscPress);
  modal.removeEventListener('click', handleClickOutside);
}

function handleEscPress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function handleClickOutside(event) {
  if (event.target === modal) {
    closeModal();
  }
}
