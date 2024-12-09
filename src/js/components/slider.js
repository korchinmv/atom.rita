// Подключение свайпера
import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Thumbs,
  Autoplay,
  EffectFade,
} from "swiper/modules";
Swiper.use([Navigation, Pagination, Thumbs, Autoplay, EffectFade]);

const servicesSwiper = new Swiper(".tasks__list-slider", {
  enabled: true,
  slidesPerView: 1.1,
  spaceBetween: 16,
  pagination: {
    el: ".tasks__progressbar",
    type: "progressbar",
  },
  breakpoints: {
    // when window width is >= 1200px
    768: {
      enabled: false,
      width: "100%",
    },
  },
});

const rpaPlatformSwiper = new Swiper(".horizontal-tabs__panel-swiper", {
  slidesPerView: 1.3,
  spaceBetween: 16,
  breakpoints: {
    // when window width is >= 1200px
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
});

const decicionsSwiper = new Swiper(".decicions__slider", {
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: ".decicions__slider-controls-next",
    prevEl: ".decicions__slider-controls-prev",
  },
  pagination: {
    el: ".decicions__pagination",
    clickable: true,
  },
});

const newsSwiper = new Swiper(".news__slider", {
  slidesPerView: 1.3,
  spaceBetween: 16,
  loop: true,
  navigation: {
    nextEl: ".news__slider-controls-next",
    prevEl: ".news__slider-controls-prev",
  },
  pagination: {
    el: ".news__pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 1200px
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
});
