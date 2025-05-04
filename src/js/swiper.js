import Swiper from 'swiper';
import 'swiper/css';
import { EffectCoverflow, Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

const swiper = new Swiper('.gallery-swiper', {
  modules: [Navigation, Scrollbar, EffectCoverflow],
  slidesPerView: 1,
  spaceBetween: 10,
  effect: 'coverflow',
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      coverflowEffect: {
        stretch: 0,
        depth: 0,
      },
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
      coverflowEffect: {
        rotate: 0,
        stretch: -30,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
