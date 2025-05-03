import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.gallery-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-scrollbar',
    clickable: true,
  },
});
