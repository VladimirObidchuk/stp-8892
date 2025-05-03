import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.gallery-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-scrollbar',
    clickable: true,
  },
});
