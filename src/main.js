import "@scss/main.scss";
import "@scss/_common.scss";
import "@scss/_about.scss";


import { renderHeader } from "@components/Header/header.js";
import { renderFooter } from "@components/Footer/footer.js";
import { rendermainSection } from "@components/Main-section/mainSection.js";
import { renderInsta } from "@components/Insta/insta.js";
import { renderSubscribe } from "@components/Subscribe/subscribe.js";
import { renderTestimonials } from "@components/Testimonials/testimonials.js";
import { renderFeatures } from "@components/Features/features.js";
import { rendermobileProducts } from "@components/MobileProducts/mobileProducts.js";
import { renderSmartWatches } from "@components/smartWatches/smartWatches.js";
import { renderSale } from "@components/Sale/sale.js";
import { renderLatest } from "@components/Latest/latest.js";










renderHeader();
renderFooter();
rendermainSection();
renderInsta();
renderSubscribe();
renderTestimonials();
renderFeatures();
rendermobileProducts();
renderSmartWatches();
renderSale();
renderLatest();


//========================================================================================================================================================

//Products section Slider Phone Watcher

const productSection = new Swiper('.products-section__slider', {
  loop: true,
  grabCursor: true,
  //autoplay: {
  //  delay: 4500,
  //  disableOnInteraction: false,
  //},
  pagination: {
    el: '.products-section__swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<button type="button" class="' + className + '"></button>';
    }
  },
});

//========================================================================================================================================================
// Promo-video
const playBtn = document.querySelector(".promo-video__icon");
const playBlock = document.querySelector(".promo-video__play-video");
const iframe = document.querySelector("iframe");

playBtn.addEventListener("click", ()=> {
  playBlock.classList.add("active");

  const src = iframe.getAttribute("src");
  if(!src.includes("autoplay=1")) {
    iframe.setAttribute('src', src + '?autoplay=1')
  }
});




