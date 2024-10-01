const swiper = new Swiper(".slider-wrapper", {
  // Optional parameters
  //   direction: 'vertical',
  loop: true,
  grabCursor: true,
  spaceBetween: 50,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //   responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
});
