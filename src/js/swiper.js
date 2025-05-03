import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper('.gallery-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.gallery-pagination',
    clickable: true,
  },
});
