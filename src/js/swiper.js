import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const swiper = new Swiper('.gallery-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
