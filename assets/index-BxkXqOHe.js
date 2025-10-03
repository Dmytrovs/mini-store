(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))_(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const g of l.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&_(g)}).observe(document,{childList:!0,subtree:!0});function c(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function _(n){if(n.ep)return;n.ep=!0;const l=c(n);fetch(n.href,l)}})();const L=`<header class="header">\r
  <div class="header__container">\r
    <div class="header__logo">\r
      <a href="/">MiniStore<span>.</span></a>\r
    </div>\r
    <div class="header__menu menu">\r
      <!-- <button type="button" class="menu__icon icon-menu"><span></span></button> -->\r
      <nav class="menu__body">\r
        <ul class="menu__list">\r
          <li class="menu__item"><a href="#" class="menu__link">Home</a></li>\r
\r
\r
          <li class="menu__item">\r
            <button type="button" class="menu__toggle-btn" aria-expanded="false" aria-label="Toggle sub menu">Pages\r
              <span class="_icon-ion_caret-down"></span></button>\r
            <ul class="menu__subnav">\r
              <li class="menu__subnav-item"><a href="#" class="menu__subnav-link">About us</a></li>\r
              <li class="menu__subnav-item"><a href="#" class="menu__subnav-link">Shop</a></li>\r
              <li class="menu__subnav-item"><a href="#" class="menu__subnav-link">Product</a></li>\r
              <li class="menu__subnav-item"><a href="#" class="menu__subnav-link">Card</a></li>\r
              <li class="menu__subnav-item"><a href="#" class="menu__subnav-link">Checkout</a></li>\r
              <li class="menu__subnav-item"><a href="#" class="menu__subnav-link">Blog</a></li>\r
              <li class="menu__subnav-item"><a href="#" class="menu__subnav-link">Blog-Post</a></li>\r
              <li class="menu__subnav-item"><a href="#" class="menu__subnav-link">Contact</a></li>\r
            </ul>\r
\r
          </li>\r
          <li class="menu__item"><a href="#" class="menu__link">About</a></li>\r
          <li class="menu__item"><a href="#" class="menu__link">Blogs</a></li>\r
          <li class="menu__item"><a href="#" class="menu__link">Contact</a></li>\r
        </ul>\r
      </nav>\r
\r
\r
          <div class="header__actions actions-header">\r
            <ul class="actions-header__items">\r
              <li class="actions-header__item">\r
                <a class="actions-header__link _icon-ion_search" href="#"></a>\r
              </li>\r
              <li class="actions-header__item">\r
                <a class="actions-header__link _icon-ion_person" href="#"></a>\r
              </li>\r
              <li class="actions-header__item">\r
                <a class="actions-header__link _icon-ion_cart" href="#"><span>(0)</span></a>\r
              </li>\r
            </ul>\r
          </div>\r
\r
      <button type="button" class="menu__icon icon-menu"><span></span></button>\r
\r
    </div>\r
\r
  </div>\r
</header>`;function A(){document.body.style.overflow="hidden"}function x(){document.body.style.overflow="auto"}function P(){document.body.style.overflow==="hidden"?x():A()}function q(){const r=document.querySelector("#header");if(!r)return;r.innerHTML+=L;const u=document.querySelectorAll(".menu__toggle-btn");u.forEach(c=>{c.addEventListener("click",_=>{_.stopPropagation();const n=c.nextElementSibling,l=c.getAttribute("aria-expanded")==="true";c.classList.toggle("open"),c.setAttribute("aria-expanded",!l),n.classList.toggle("open",!l)})}),document.addEventListener("click",()=>{u.forEach(c=>{c.setAttribute("aria-expanded","false"),c.nextElementSibling.classList.remove("open"),c.classList.remove("open")})}),document.querySelector(".icon-menu")&&document.addEventListener("click",function(c){c.target.closest(".icon-menu")&&(P(),document.documentElement.classList.toggle("menu-open"))})}const S=document.querySelector(" .menu__item .menu__toggle-btn ");S&&S.addEventListener("click",r=>{r.target.blur()});const E=`<footer class="footer">\r
  <div class="footer__top">\r
    <div class="footer__container">\r
      <div class="footer_company company-footer">\r
        <div class="company-footer__logo">\r
          <a href="/">MiniStore<span>.</span></a>\r
        </div>\r
        <div class="company-footer__text">\r
          <p>Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat\r
            nullam\r
            fringilla.</p>\r
        </div>\r
        <div class="company-footer__cocial social-footer">\r
          <a href="#" class="social-footer__link _icon-s-facebook"></a>\r
          <a href="#" class="social-footer__link _icon-s-instagram"></a>\r
          <a href="#" class="social-footer__link _icon-s-twitter"></a>\r
          <a href="#" class="social-footer__link _icon-s-linkedin"></a>\r
          <a href="#" class="social-footer__link _icon-s-youtube"></a>\r
        </div>\r
      </div>\r
      <div data-spollers="767.98,max" class="footer__menu menu-footer">\r
        <details class="menu-footer__item ">\r
          <summary data-spoller-close class="menu-footer__title">Quick links</summary>\r
          <ul class="menu-footer__list">\r
            <li class="menu-footer__element"><a href="№" class="menu-footer__link">Home</a></li>\r
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">About</a></li>\r
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">Shop</a></li>\r
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">Blogs</a></li>\r
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">Contact</a></li>\r
          </ul>\r
        </details>\r
        <details class="menu-footer__item ">\r
          <summary data-spoller-close class="menu-footer__title">Help & info</summary>\r
          <ul class="menu-footer__list">\r
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">Track Your Order</a></li>\r
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">Returns policies</a></li>\r
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">Shipping + Delivery</a></li>\r
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">Contact Us</a></li>\r
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">Faqs</a></li>\r
          </ul>\r
        </details>\r
        <details class="menu-footer__item ">\r
          <summary data-spoller-close class="menu-footer__title">Contact us</summary>\r
          <div class="menu-footer__contact contact-footer">\r
            <div class="contact-footer__body">\r
              <div class="contact-footer__text">\r
                <p>Do you have any queries or suggestions?</p>\r
              </div>\r
              <a href="mailto:yourinfo@gmail.com" class="contact-footer__link">yourinfo@gmail.com</a>\r
            </div>\r
            <div class="contact-footer__body">\r
              <div class="contact-footer__text">\r
                <p>If you need support? Just give us a call.</p>\r
              </div>\r
              <a href="tel:+5511122233344" class="contact-footer__link">+55 111 222 333 44</a>\r
            </div>\r
          </div>\r
        </details>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="footer__bottom bottom-footer">\r
    <div class="bottom-footer__container">\r
      <div class="bottom-footer__left left-bottom">\r
        <div class="left-bottom__item item-left">\r
          <div class="item-left__body">\r
            <div class="item-left__text">\r
              <p>We ship with:</p>\r
            </div>\r
            <div class="item-left__icon">\r
                  <img src="images/copyright/fa-brands_dhl.svg" alt="Image">\r
            </div>\r
            <div class="item-left__icon">\r
                  <img src="images/copyright/arcticons_post.svg" alt="Image">\r
            </div>\r
          </div>\r
\r
          <div class="item-left__body">\r
            <div class="item-left__text">\r
              <p>Payment options:</p>\r
            </div>\r
            <div class="item-left__icon">\r
              <img src="images/copyright/brandico_visa.svg" alt="Image">\r
            </div>\r
            <div class="item-left__icon">\r
              <img src="images/copyright/brandico_mastercard.svg" alt="Image">\r
            </div>\r
            <div class="item-left__icon">\r
              <img src="images/copyright/fontisto_paypal.svg" alt="Image">\r
            </div>\r
          </div>\r
\r
        </div>\r
      </div>\r
      <div class="bottom-footer__right">\r
        <p>© Copyright 2023 MiniStore. Design by <a href="#">TemplatesJungle</a></p>\r
      </div>\r
    </div>\r
\r
  </div>\r
</footer>\r
`;function T(){const r=document.querySelector("#footer");if(!r){console.warn("Елемент footerEl не знайдено");return}r.innerHTML=E;function u(){const _=document.querySelectorAll("[data-spollers]");if(_.length>0){let d=function(o,i=!1){o.forEach(t=>{t=i?t.item:t,i&&i.matches||!i?(t.classList.add("_spoller-init"),v(t)):(t.classList.remove("_spoller-init"),v(t,!1))})},v=function(o,i=!0){let t=o.querySelectorAll("details");t.length&&t.forEach(e=>{let a=e.querySelector("summary");i?(a.removeAttribute("tabindex"),e.hasAttribute("data-open")?(a.classList.add("_spoller-active"),e.open=!0):(e.open=!1,a.nextElementSibling.hidden=!0)):(a.setAttribute("tabindex","-1"),a.classList.remove("_spoller-active"),e.open=!0,a.nextElementSibling.hidden=!1)})},y=function(o){const i=o.target;if(i.closest("summary")&&i.closest("[data-spollers]")&&(o.preventDefault(),i.closest("[data-spollers]").classList.contains("_spoller-init"))){const t=i.closest("summary"),e=t.closest("details"),a=t.closest("[data-spollers]"),m=a.hasAttribute("data-one-spoller"),f=e.hasAttribute("data-spoller-scroll"),h=a.dataset.spollersSpeed?parseInt(a.dataset.spollersSpeed):500;if(!a.querySelectorAll("._slide").length&&(m&&!e.open&&w(a),e.open?setTimeout(()=>{e.open=!1},h):e.open=!0,t.classList.toggle("_spoller-active"),g(t.nextElementSibling,h),f&&t.classList.contains("_spoller-active"))){const b=e.dataset.spollerScroll,k=+b?+b:0,I=e.hasAttribute("data-spoller-scroll-noheader")?document.querySelector(".header").offsetHeight:0;window.scrollTo({top:e.offsetTop-(k+I),behavior:"smooth"})}}if(!i.closest("[data-spollers]")){const t=document.querySelectorAll("[data-spoller-close]");t.length&&t.forEach(e=>{const a=e.closest("[data-spollers]"),m=e.parentNode;if(a.classList.contains("_spoller-init")){const f=a.dataset.spollersSpeed?parseInt(a.dataset.spollersSpeed):500;e.classList.remove("_spoller-active"),n(e.nextElementSibling,f),setTimeout(()=>{m.open=!1},f)}})}},w=function(o){const i=o.querySelector("details[open]");if(i&&!o.querySelectorAll("._slide").length){const t=i.querySelector("summary"),e=o.dataset.spollersSpeed?parseInt(o.dataset.spollersSpeed):500;t.classList.remove("_spoller-active"),n(t.nextElementSibling,e),setTimeout(()=>{i.open=!1},e)}};var J=d,z=v,X=y,Z=w;document.addEventListener("click",y);const s=Array.from(_).filter(function(o,i,t){return!o.dataset.spollers.split(",")[0]});s.length&&d(s);const p=Array.from(_).filter(function(o,i,t){return o.dataset.spollers.split(",")[0]});if(p.length>0){const o=[];p.forEach(t=>{const a=t.dataset.spollers.split(","),m={};m.value=a[0],m.type=a[1]?a[1].trim():"max",m.item=t,o.push(m)});const i=o.map(function(t){return"("+t.type+"-width: "+t.value+"px),"+t.value+","+t.type}).filter(function(t,e,a){return a.indexOf(t)===e});i&&i.length&&i.forEach(t=>{const e=t.split(","),a=e[1],m=e[2],f=window.matchMedia(e[0]),h=o.filter(function(b){return b.value===a&&b.type===m});f.addEventListener("change",function(){d(h,f)}),d(h,f)})}}let n=(s,p=500,d=0)=>{s.classList.contains("_slide")||(s.classList.add("_slide"),s.style.transitionProperty="height, margin, padding",s.style.transitionDuration=p+"ms",s.style.height=`${s.offsetHeight}px`,s.offsetHeight,s.style.overflow="hidden",s.style.height=d?`${d}px`:"0px",s.style.paddingTop=0,s.style.paddingBottom=0,s.style.marginTop=0,s.style.marginBottom=0,window.setTimeout(()=>{s.hidden=!d,d||s.style.removeProperty("height"),s.style.removeProperty("padding-top"),s.style.removeProperty("padding-bottom"),s.style.removeProperty("margin-top"),s.style.removeProperty("margin-bottom"),d||s.style.removeProperty("overflow"),s.style.removeProperty("transition-duration"),s.style.removeProperty("transition-property"),s.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideUpDone",{detail:{target:s}}))},p))},l=(s,p=500,d=0)=>{if(!s.classList.contains("_slide")){s.classList.add("_slide"),s.hidden=s.hidden?!1:null,d&&s.style.removeProperty("height");let v=s.offsetHeight;s.style.overflow="hidden",s.style.height=d?`${d}px`:"0px",s.style.paddingTop=0,s.style.paddingBottom=0,s.style.marginTop=0,s.style.marginBottom=0,s.offsetHeight,s.style.transitionProperty="height, margin, padding",s.style.transitionDuration=p+"ms",s.style.height=v+"px",s.style.removeProperty("padding-top"),s.style.removeProperty("padding-bottom"),s.style.removeProperty("margin-top"),s.style.removeProperty("margin-bottom"),window.setTimeout(()=>{s.style.removeProperty("height"),s.style.removeProperty("overflow"),s.style.removeProperty("transition-duration"),s.style.removeProperty("transition-property"),s.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideDownDone",{detail:{target:s}}))},p)}},g=(s,p=500)=>s.hidden?l(s,p):n(s,p)}u();const c=document.querySelector("[data-spollers]");c&&c.addEventListener("click",_=>{_.target.blur()})}const H=`<div class="page__hero hero">\r
  <div class="hero__inner">\r
    <button type="button" class="hero__swiper-button hero__swiper-button--prev _icon-arrow"></button>\r
\r
    <div class="hero__wraper">\r
      <div class="hero__swiper swiper">\r
        <!--Обгортка для слайдів-->\r
        <div class="swiper-wrapper hero__swiper-wrapper">\r
          <div class="swiper-slide hero__slide">\r
            <div class="hero__content  content-slide">\r
              <div class="content-slide__body">\r
                <div class="product-praise">\r
                  <h2 class="product-praise__title ">Your Products are great.</h2>\r
                  <a href="#" class="product-praise__button">Shop Product</a>\r
                </div>\r
              </div>\r
              <div class="content-slide__image">\r
                <img src="images/hero/daniel-korpai-hbTKIbuMmBI-unsplash.png" alt="Image">\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="swiper-slide hero__slide">\r
            <div class="hero__content  content-slide">\r
              <div class="content-slide__body">\r
                <div class="product-praise">\r
                  <h2 class="product-praise__title ">Your Products are great.</h2>\r
                  <a href="#" class="product-praise__button">Shop Product</a>\r
                </div>\r
              </div>\r
              <div class="content-slide__image">\r
                <img src="images/hero/daniel-korpai-hbTKIbuMmBI-unsplash.png" alt="Image">\r
              </div>\r
            </div>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
    <button type="button" class="hero__swiper-button hero__swiper-button--next _icon-arrow"></button>\r
  </div>\r
</div>\r
\r
`;function j(){const r=document.querySelector("#mainSection");if(!r)return;r.innerHTML+=H;function u(){const c=document.querySelector(".hero__swiper"),_=document.querySelector(".hero__swiper-button--next"),n=document.querySelector(".hero__swiper-button--prev");c&&_&&n&&new Swiper(c,{slidesPerView:1,loop:!0,grabCursor:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:{nextEl:_,prevEl:n}})}u()}const $=`<div class="insta">\r
  <div class="insta__container">\r
    <h3 class="insta__title title">Shop our insta</h3>\r
    <div class="insta__items">\r
      <a href="#" class="insta__item _icon-social-hover">\r
        <img src="images/insta/01.jpg" alt="image" class="insta__image">\r
      </a>\r
      <a href="#" class="insta__item _icon-social-hover">\r
        <img src="images/insta/02.jpg" alt="image" class="insta__image">\r
      </a>\r
      <a href="#" class="insta__item _icon-social-hover">\r
        <img src="images/insta/03.jpg" alt="image" class="insta__image">\r
      </a>\r
      <a href="#" class="insta__item _icon-social-hover">\r
        <img src="images/insta/04.jpg" alt="image" class="insta__image">\r
      </a>\r
      <a href="#" class="insta__item _icon-social-hover">\r
        <img src="images/insta/05.jpg" alt="image" class="insta__image">\r
      </a>\r
    </div>\r
  </div>\r
</div>`;function M(){const r=document.querySelector("#insta");r&&(r.innerHTML+=$)}const O=`<div class="subscribe">\r
  <div class="subscribe__container">\r
    <div class="subscribe__body">\r
      <div class="subscribe__content">\r
          <h3 class="subscribe__title title">Subscribe Us now</h3>\r
          <p class="subscribe__text">Get latest news, updates and deals directly mailed to your inbox.</p>\r
      </div>\r
      <div class="subscribe__form form">\r
        <form class="form__form" required action="#" method="POST">\r
          <input type="text" name="form[email]" data-error="Error" placeholder="Your email address here" class="form__input">\r
          <button type="submit" class="form__button button">Subscribe</button>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
</div>`;function C(){const r=document.querySelector("#subscribe");r&&(r.innerHTML+=O)}const D=`<div class="testimonials">\r
  <div class="testimonials__container">\r
    <div class="testimonials__slider swiper">\r
      <div class="testimonials__wrapper swiper-wrapper">\r
        <div class="testimonials__slide swiper-slide">\r
          <div class="testimonials__content">\r
            <div class="testimonials__quote-top">\r
              <div class="testimonials__quotation-element _icon-blockquote-icon"></div>\r
              <div class="testimonials__text">\r
                <p>“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen\r
                  tesque pretium\r
                  feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.”</p>\r
              </div>\r
            </div>\r
            <div class="testimonials__quote-bottom">\r
              <ul class="testimonials__stars">\r
                <li class="testimonials__star _icon-ion_star"></li>\r
                <li class="testimonials__star _icon-ion_star"></li>\r
                <li class="testimonials__star _icon-ion_star"></li>\r
                <li class="testimonials__star _icon-ion_star"></li>\r
                <li class="testimonials__star _icon-ion_star"></li>\r
              </ul>\r
              <h4 class="testimonials__name">Emma Chamberlin</h4>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="testimonials__slide swiper-slide">\r
          <div class="testimonials__content">\r
            <div class="testimonials__quote-top">\r
              <div class="testimonials__quotation-element _icon-blockquote-icon"></div>\r
              <div class="testimonials__text">\r
                <p>“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen\r
                  tesque pretium\r
                  feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.”</p>\r
              </div>\r
            </div>\r
            <div class="testimonials__quote-bottom">\r
              <ul class="testimonials__stars">\r
                <li class="testimonials__star _icon-ion_star"></li>\r
                <li class="testimonials__star _icon-ion_star"></li>\r
                <li class="testimonials__star _icon-ion_star"></li>\r
                <li class="testimonials__star _icon-ion_star"></li>\r
                <li class="testimonials__star _icon-ion_star"></li>\r
              </ul>\r
              <h4 class="testimonials__name">Emma Chamberlin</h4>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <button class="testimonials__swiper-button testimonials__swiper-button--next _icon-arrow"></button>\r
      <button class="testimonials__swiper-button testimonials__swiper-button--prev _icon-arrow"></button>\r
    </div>\r
  </div>\r
</div>`;function N(){const r=document.querySelector("#testimonials");r&&(r.innerHTML+=D,new Swiper(".testimonials__slider",{loop:!0,slidesPerView:1,grabCursor:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:{nextEl:".testimonials__swiper-button--next",prevEl:".testimonials__swiper-button--prev"}}))}const B=`<div class="features">\r
  <div class="features__container">\r
    <ul class="features__items">\r
      <li class="features__item">\r
        <div class="features__icon">\r
          <img class="features__image" src="images/features/01.svg" alt="Image">\r
        </div>\r
        <div class="features__text">\r
          <h3 class="features__label">Free delivery</h3>\r
          <p class="features__descr">Consectetur adipi elit lorem ipsum dolor sit amet.</p>\r
        </div>\r
      </li>\r
      <li class="features__item">\r
        <div class="features__icon">\r
          <img class="features__image" src="images/features/02.svg" alt="Image">\r
        </div>\r
        <div class="features__text">\r
          <h3 class="features__label">Quality guarantee</h3>\r
          <p class="features__descr">Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>\r
        </div>\r
      </li>\r
      <li class="features__item">\r
        <div class="features__icon">\r
          <img class="features__image" src="images/features/03.svg" alt="Image">\r
        </div>\r
        <div class="features__text">\r
          <h3 class="features__label">Daily offers</h3>\r
          <p class="features__descr">Amet consectetur adipi elit loreme ipsum dolor sit.</p>\r
        </div>\r
      </li>\r
      <li class="features__item">\r
        <div class="features__icon">\r
          <img class="features__image" src="images/features/04.svg" alt="Image">\r
        </div>\r
        <div class="features__text">\r
          <h3 class="features__label">100% secure payment</h3>\r
          <p class="features__descr">Rem Lopsum dolor sit amet, consectetur adipi elit.</p>\r
        </div>\r
      </li>\r
    </ul>\r
  </div>\r
</div>`;function G(){const r=document.querySelector("#features");r&&(r.innerHTML+=B)}const F=`<div class="mobile-products ">\r
  <div class="mobile-products__products-section">\r
    <div class="products-section">\r
      <div class="products-section__container">\r
\r
        <div class="products-section__header">\r
          <h2 class="products-section__title title">Mobile Products</h2>\r
          <a href="#" class="products-section__link">Go to Shop</a>\r
        </div>\r
\r
        <div class="products-section__slider swiper">\r
          <div class="products-section__wrapper swiper-wrapper">\r
            <div class="products-section__slide swiper-slide">\r
              <div class="products-section__carts cards-products">\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/01.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 10</h4>\r
                    <p class="cards-products__price">$980</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/02.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 11</h4>\r
                    <p class="cards-products__price">$1100</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/03.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 8</h4>\r
                    <p class="cards-products__price">$780</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/04.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 13</h4>\r
                    <p class="cards-products__price">$1500</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
              </div>\r
            </div>\r
            <div class="products-section__slide swiper-slide">\r
              <div class="products-section__carts cards-products">\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/01.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 10</h4>\r
                    <p class="cards-products__price">$980</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/02.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 11</h4>\r
                    <p class="cards-products__price">$1100</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/03.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 8</h4>\r
                    <p class="cards-products__price">$780</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/04.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 13</h4>\r
                    <p class="cards-products__price">$1500</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
              </div>\r
            </div>\r
            <div class="products-section__slide swiper-slide">\r
              <div class="products-section__carts cards-products">\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/01.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 10</h4>\r
                    <p class="cards-products__price">$980</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/02.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 11</h4>\r
                    <p class="cards-products__price">$1100</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/03.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 8</h4>\r
                    <p class="cards-products__price">$780</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/04.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 13</h4>\r
                    <p class="cards-products__price">$1500</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
              </div>\r
            </div>\r
          </div>\r
          <div class="products-section__swiper-pagination"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`;function W(){const r=document.querySelector("#mobileProducts");r&&(r.innerHTML+=F)}const R=`<div class="smart-watches">\r
  <div class="smart-watches__products-section">\r
    <div class="products-section">\r
      <div class="products-section__container">\r
\r
        <div class="products-section__header">\r
          <h2 class="products-section__title title">Smart Watches</h2>\r
          <a href="#" class="products-section__link">Go to Shop</a>\r
        </div>\r
\r
        <div class="products-section__slider swiper">\r
          <div class="products-section__wrapper swiper-wrapper">\r
            <div class="products-section__slide swiper-slide">\r
              <div class="products-section__carts cards-products">\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/01.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Pink watch</h4>\r
                    <p class="cards-products__price">$870</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/02.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Heavy watch</h4>\r
                    <p class="cards-products__price">$680</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/03.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">spotted watch</h4>\r
                    <p class="cards-products__price">$750</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/04.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">black watch</h4>\r
                    <p class="cards-products__price">$650</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
              </div>\r
            </div>\r
            <div class="products-section__slide swiper-slide">\r
              <div class="products-section__carts cards-products">\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/01.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Pink watch</h4>\r
                    <p class="cards-products__price">$870</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/02.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Heavy watch</h4>\r
                    <p class="cards-products__price">$680</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/03.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">spotted watch</h4>\r
                    <p class="cards-products__price">$750</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/04.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">black watch</h4>\r
                    <p class="cards-products__price">$650</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
              </div>\r
            </div>\r
            <div class="products-section__slide swiper-slide">\r
              <div class="products-section__carts cards-products">\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/01.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Pink watch</h4>\r
                    <p class="cards-products__price">$870</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/02.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Heavy watch</h4>\r
                    <p class="cards-products__price">$680</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/03.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">spotted watch</h4>\r
                    <p class="cards-products__price">$750</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/04.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">black watch</h4>\r
                    <p class="cards-products__price">$650</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
              </div>\r
            </div>\r
\r
          </div>\r
          <div class="products-section__swiper-pagination"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`;function U(){const r=document.querySelector("#smartWatches");r&&(r.innerHTML+=R)}const Y=`<div class="page__sale">\r
  <div class="sale">\r
    <div class="sale__content">\r
      <div class="sale__body">\r
        <div class="sale__text-wrapper">\r
          <div class="sale__subtext title">\r
            <p>10% off</p>\r
          </div>\r
          <div class="product-praise">\r
            <h2 class="product-praise__title product-praise__title--margin">New year sale </h2>\r
            <a href="#" class="product-praise__button">Shop sale</a>\r
          </div>\r
        </div>\r
  \r
      </div>\r
      <div class="sale__image">\r
        <img src="images/sale/mobile1.png" alt="mobile-image" class="sale__img">\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
<!--<div class="page__featured featured">\r
  <div class="featured__content">\r
    <div class="featured__body">\r
      <h1 class="featured__title">\r
        New year sale\r
      </h1>\r
      <div class="featured__items">\r
        <article class="featured__item item-featured">\r
          <a href="#" class="item-featured__link">\r
            <img class="item-featured__image" src="images/insta/04.jpg" alt="Image">\r
          </a>\r
          <div class="item-featured__body">\r
            <time datetime="2025-10-01" class="item-featured__date"></time>\r
            <h2 class="item-featured__title">\r
              <a href="#" class="item-featured__link-title">\r
                A beatuful solo trip to the Lake\r
              </a>\r
            </h2>\r
            <div class="item-featured__text">\r
              <p>\r
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis saepe quasi facere, esse delectus\r
                ad placeat cum.\r
              </p>\r
            </div>\r
          </div>\r
        </article>\r
        <article class="featured__item item-featured">\r
          <a href="#" class="item-featured__link">\r
            <img class="item-featured__image" src="images/insta/01.jpg" alt="Image">\r
          </a>\r
          <div class="item-featured__body">\r
            <time datetime="2025-10-01" class="item-featured__date"></time>\r
            <h2 class="item-featured__title">\r
              <a href="#" class="item-featured__link-title">\r
                A beatuful solo trip to the Lake\r
              </a>\r
            </h2>\r
            <div class="item-featured__text">\r
              <p>\r
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis saepe quasi facere, esse delectus\r
                ad\r
                placeat cum.\r
              </p>\r
            </div>\r
          </div>\r
        </article>\r
        <article class="featured__item item-featured">\r
          <a href="#" class="item-featured__link">\r
            <img class="item-featured__image" src="images/insta/02.jpg" alt="Image">\r
          </a>\r
          <div class="item-featured__body">\r
            <time datetime="2025-10-01" class="item-featured__date"></time>\r
            <h2 class="item-featured__title">\r
              <a href="#" class="item-featured__link-title">\r
                A beatuful solo trip to the Lake\r
              </a>\r
            </h2>\r
            <div class="item-featured__text">\r
              <p>\r
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis saepe quasi facere, esse delectus\r
                ad\r
                placeat cum.\r
              </p>\r
            </div>\r
          </div>\r
        </article>\r
      </div>\r
    </div>\r
    <div class="featured__destinations destinations-featured">\r
      <div class="destinations-featured__content">\r
        <h2 class="destinations-featured__title">\r
          <a href="#" class="destinations-featured__link-title">\r
            Lorem ipsum dolor sit amet\r
          </a>\r
        </h2>\r
        <div class="destinations-featured__text">\r
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r
        </div>\r
      </div>\r
      <img src="images/sale/mobile.png" alt="image" class="destinations-featured__image">\r
    </div>\r
  </div>\r
</div>-->`;function K(){const r=document.querySelector("#sale");r&&(r.innerHTML+=Y)}const Q=`<div class="latest">\r
  <div class="latest__container">\r
    <div class="latest__header">\r
      <h2 class="latest__title title">Latest Posts</h2>\r
      <button class="latest__button">Read blogs</button>\r
    </div>\r
    <div class="latest__items">\r
      <article class="latest__post-card card-post">\r
        <a href="#" class="card-post__image">\r
          <img src="images/latest/01.jpg" alt="image-latest" class="card-post__img">\r
        </a>\r
        <div class="card-post__meta-post post-meta">\r
          <time datetime="2023-02-22" class="post-meta__time">feb 22, 2023</time>\r
          <div class="post-meta__arrow">-</div>\r
          <span class="post-meta__category">Gadgets</span>\r
        </div>\r
        <h3 class="card-post__title-post">\r
          <a href="#" class="card-post__link-post">Get some cool gadgets in 2023</a>\r
        </h3>\r
      </article>\r
      <article class="latest__post-card card-post">\r
        <a href="#" class="card-post__image">\r
          <img src="images/latest/02.jpg" alt="image-latest" class="card-post__img">\r
        </a>\r
        <div class="card-post__meta-post post-meta">\r
          <time datetime="2023-02-22" class="post-meta__time">feb 22, 2023</time>\r
          <div class="post-meta__arrow">-</div>\r
          <span class="post-meta__category">technology</span>\r
        </div>\r
        <h3 class="card-post__title-post">\r
          <a href="#" class="card-post__link-post">TECHNOLOGY HACK YOU WON’T GET</a>\r
        </h3>\r
      </article>\r
      <article class="latest__post-card card-post">\r
        <a href="#" class="card-post__image">\r
          <img src="images/latest/03.jpg" alt="image-latest" class="card-post__img">\r
        </a>\r
        <div class="card-post__meta-post post-meta">\r
          <time datetime="2023-02-22" class="post-meta__time">feb 22, 2023</time>\r
          <div class="post-meta__arrow">-</div>\r
          <span class="post-meta__category">camera</span>\r
        </div>\r
        <h3 class="card-post__title-post">\r
          <a href="#" class="card-post__link-post">toP 10 SMALL cAMERA IN THE WORLD</a>\r
        </h3>\r
      </article>\r
    </div>\r
\r
  </div>\r
</div>`;function V(){const r=document.querySelector("#latest");r&&(r.innerHTML+=Q)}q();T();j();M();C();N();G();W();U();K();V();new Swiper(".products-section__slider",{loop:!0,grabCursor:!0,pagination:{el:".products-section__swiper-pagination",clickable:!0,renderBullet:function(r,u){return'<button type="button" class="'+u+'"></button>'}}});
