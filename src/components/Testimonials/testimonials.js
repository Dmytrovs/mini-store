import "./testimonials.scss";

import testimonialsHtml from "./testimonials.html?raw";

export function renderTestimonials() {
  const container = document.querySelector('#testimonials');
  if (!container) return;
  container.innerHTML += testimonialsHtml;

  const testimonialsSwiper = new Swiper(".testimonials__slider", {
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".testimonials__swiper-button--next",
      prevEl: ".testimonials__swiper-button--prev",
    },
  });
}