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
