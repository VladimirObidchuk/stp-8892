import Swiper from 'swiper';
import 'swiper/css';
import { EffectCoverflow, Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

const gallery = new Swiper('.gallery-swiper', {
  modules: [Navigation, Scrollbar, EffectCoverflow],
  effect: 'coverflow',
  spaceBetween: 20,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: -30,
    depth: 100,
    modifier: 1.7,
    slideShadows: true,
  },
  breakpoints: {
    320: {
      spaceBetween: 20,
      coverflowEffect: {
        stretch: 0,
        depth: 0,
        modifier: 0,
      },
    },
    1200: {
      spaceBetween: 0,
      centeredSlides: true,
      grabCursor: true,
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

let reviews;

function initSwiper() {
  if (window.innerWidth < 1200) {
    reviews = new Swiper('.reviews-swiper', {
      centeredSlides: true,
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    document.querySelector('.swiper-button-next').style.display = 'block';
    document.querySelector('.swiper-button-prev').style.display = 'block';
  } else {
    if (reviews) {
      reviews.destroy(true, true);
    }

    document.querySelector('.swiper-button-next').style.display = 'none';
    document.querySelector('.swiper-button-prev').style.display = 'none';
  }
}

initSwiper();

window.addEventListener('resize', () => {
  initSwiper();
});
