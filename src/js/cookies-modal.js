const cookiesModal = document.querySelector('[data-accept]');
const acceptCookies = document.querySelector('[data-cookies-accept]');
const declineCookies = document.querySelector('[data-cookies-decline]');

if (acceptCookies && declineCookies) {
  acceptCookies.addEventListener('click', cookiesAccept);
  declineCookies.addEventListener('click', cookiesDecline);
} else if (localStorage.getItem('cookies')) {
  cookiesModal.classList.remove('is-accept');
  document.removeEventListener('click', cookiesDecline);
  document.removeEventListener('click', cookiesAccept);
} else {
  acceprCookies.addEventListener('click', cookiesAccept);
  declineCookies.addEventListener('click', cookiesDecline);
}

function cookiesAccept() {
  cookiesModal.classList.remove('is-accept');
  localStorage.setItem('cookies', 'accept cookies');
}

function cookiesDecline() {
  cookiesModal.classList.remove('is-accept');
  localStorage.setItem('cookies', 'decline cookies');
}
