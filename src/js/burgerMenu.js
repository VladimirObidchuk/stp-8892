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
  document.body.classList.add('modal-open');
}

function closeModal() {
  modal.classList.remove('is-open');
  document.removeEventListener('keydown', handleEscPress);
  modal.removeEventListener('click', handleClickOutside);
  document.body.classList.remove('modal-open');
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

document.querySelectorAll('[data-link][href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 50;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    if (modal.classList.contains('is-open')) {
      closeModal();
    }
  });
});
