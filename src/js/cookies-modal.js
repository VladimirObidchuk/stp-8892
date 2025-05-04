const cookiesModal = document.querySelector('[data-accept]');
const acceptCookies = document.querySelector('[data-cookies-accept]');
const declineCookies = document.querySelector('[data-cookies-decline]');

document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('cookies')) {
    document.body.classList.add('no-scroll'); // Блокуємо прокрутку, якщо модалка активна
    cookiesModal.classList.add('is-accept');
  }

  if (acceptCookies && declineCookies) {
    acceptCookies.addEventListener('click', cookiesAccept);
    declineCookies.addEventListener('click', cookiesDecline);
  }
});

function cookiesAccept() {
  cookiesModal.classList.remove('is-accept');
  localStorage.setItem('cookies', 'accept cookies');
  document.body.classList.remove('no-scroll');
}

function cookiesDecline() {
  cookiesModal.classList.remove('is-accept');
  localStorage.setItem('cookies', 'decline cookies');
  document.body.classList.remove('no-scroll');
}
