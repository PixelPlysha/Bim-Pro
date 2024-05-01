import Swiper from 'swiper';
import 'swiper/css';

export const useVisualSlider = () => {
  new Swiper('.visual__slider', {
    slidesPerView: 'auto',
    spaceBetween: 22,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },


  });
};
