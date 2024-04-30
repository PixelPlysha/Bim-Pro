import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      992: {
        centeredSlides: false,
      },
    },
  });
};



export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 22,
    loop: true,
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
  });
};


export const useAttentionSlider = () => {
    new Swiper('.attention__slider', {
      slidesPerView: 'auto',
      spaceBetween: 32,
      loop: true,
      
      breakpoints: {
        1250: {
          centeredSlides: false,
        },
      },
    });
  };


  export const useTeamSlider = () => {
    new Swiper('.team__slider', {
      slidesPerView: 'auto',
      spaceBetween: 32,
      loop: true,
      centeredSlides: true,
      breakpoints: {
        1250: {
          centeredSlides: false,
        },
      },
    });
  };


  export const useUpdatesSlider = () => {
    new Swiper('.updates__slider', {
      slidesPerView: 'auto',
      spaceBetween: 32,
      loop: true,
      centeredSlides: true,
      breakpoints: {
        992: {
          centeredSlides: false,
        },
      },
    });
  };



  export const useArticlesSlider = () => {
    new Swiper('.articles__slider', {
      modules: [Navigation],
      slidesPerView: 'auto',
      spaceBetween: 22,
      loop: true,
      navigation: {
        prevEl: '.articles__btn--prev',
        nextEl: '.articles__btn--next',
      },
    });
  };