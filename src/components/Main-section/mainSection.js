import "./mainSection.scss";

import mainSectionHtml from "./mainSection.html?raw";

export function rendermainSection() {
  const container = document.querySelector('#mainSection');
  if (!container) return;
  container.innerHTML += mainSectionHtml;


  function initSwiperHero() {
    const swiperEl = document.querySelector('.hero__swiper');
    const nextBtn = document.querySelector('.hero__swiper-button--next');
    const prevBtn = document.querySelector('.hero__swiper-button--prev');

    if (swiperEl && nextBtn && prevBtn) {
      new Swiper(swiperEl, {
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        }
      });
    }
  };

  initSwiperHero();
}

















