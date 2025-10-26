(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))h(r);new MutationObserver(r=>{for(const v of r)if(v.type==="childList")for(const w of v.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&h(w)}).observe(document,{childList:!0,subtree:!0});function o(r){const v={};return r.integrity&&(v.integrity=r.integrity),r.referrerPolicy&&(v.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?v.credentials="include":r.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function h(r){if(r.ep)return;r.ep=!0;const v=o(r);fetch(r.href,v)}})();const T=`<header class="header">\r
  <div class="header__container">\r
    <div class="header__logo">\r
      <a href="index.html">MiniStore<span>.</span></a>\r
    </div>\r
    <div class="header__menu menu">\r
      <!-- <button type="button" class="menu__icon icon-menu"><span></span></button> -->\r
      <nav class="menu__body">\r
        <ul class="menu__list">\r
          <li class="menu__item"><a href="index.html" class="menu__link">Home</a></li>\r
\r
\r
          <li class="menu__item">\r
            <button type="button" class="menu__toggle-btn" aria-expanded="false" aria-label="Toggle sub menu">Pages\r
              <span class="_icon-ion_caret-down"></span></button>\r
            <ul class="menu__subnav">\r
              <li class="menu__subnav-item"><a href="about.html" class="menu__subnav-link">About us</a></li>\r
              <li class="menu__subnav-item"><a href="shop.html" class="menu__subnav-link">Shop</a></li>\r
              <li class="menu__subnav-item"><a href="product.html" class="menu__subnav-link">Product</a></li>\r
              <li class="menu__subnav-item"><a href="cart.html" class="menu__subnav-link">Cart</a></li>\r
              <li class="menu__subnav-item"><a href="checkout.html" class="menu__subnav-link">Checkout</a></li>\r
              <li class="menu__subnav-item"><a href="#" class="menu__subnav-link">Blog</a></li>\r
              <li class="menu__subnav-item"><a href="#" class="menu__subnav-link">Blog-Post</a></li>\r
              <li class="menu__subnav-item"><a href="#" class="menu__subnav-link">Contact</a></li>\r
            </ul>\r
\r
          </li>\r
          <li class="menu__item"><a href="about.html" class="menu__link">About</a></li>\r
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
</header>`;function I(){document.body.style.overflow="hidden"}function H(){document.body.style.overflow="auto"}function j(){document.body.style.overflow==="hidden"?H():I()}function $(){const e=document.querySelector("#header");if(!e)return;e.innerHTML+=T;const d=document.querySelectorAll(".menu__toggle-btn");d.forEach(o=>{o.addEventListener("click",h=>{h.stopPropagation();const r=o.nextElementSibling,v=o.getAttribute("aria-expanded")==="true";o.classList.toggle("open"),o.setAttribute("aria-expanded",!v),r.classList.toggle("open",!v)})}),document.addEventListener("click",()=>{d.forEach(o=>{o.setAttribute("aria-expanded","false"),o.nextElementSibling.classList.remove("open"),o.classList.remove("open")})}),document.querySelector(".icon-menu")&&document.addEventListener("click",function(o){o.target.closest(".icon-menu")&&(j(),document.documentElement.classList.toggle("menu-open"))})}const P=document.querySelector(" .menu__item .menu__toggle-btn ");P&&P.addEventListener("click",e=>{e.target.blur()});const D=`<footer class="footer">\r
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
`;function M(){const e=document.querySelector("#footer");if(!e){console.warn("Елемент footerEl не знайдено");return}e.innerHTML=D;function d(){const h=document.querySelectorAll("[data-spollers]");if(h.length>0){let i=function(c,m=!1){c.forEach(n=>{n=m?n.item:n,m&&m.matches||!m?(n.classList.add("_spoller-init"),_(n)):(n.classList.remove("_spoller-init"),_(n,!1))})},_=function(c,m=!0){let n=c.querySelectorAll("details");n.length&&n.forEach(l=>{let f=l.querySelector("summary");m?(f.removeAttribute("tabindex"),l.hasAttribute("data-open")?(f.classList.add("_spoller-active"),l.open=!0):(l.open=!1,f.nextElementSibling.hidden=!0)):(f.setAttribute("tabindex","-1"),f.classList.remove("_spoller-active"),l.open=!0,f.nextElementSibling.hidden=!1)})},p=function(c){const m=c.target;if(m.closest("summary")&&m.closest("[data-spollers]")&&(c.preventDefault(),m.closest("[data-spollers]").classList.contains("_spoller-init"))){const n=m.closest("summary"),l=n.closest("details"),f=n.closest("[data-spollers]"),b=f.hasAttribute("data-one-spoller"),y=l.hasAttribute("data-spoller-scroll"),S=f.dataset.spollersSpeed?parseInt(f.dataset.spollersSpeed):500;if(!f.querySelectorAll("._slide").length&&(b&&!l.open&&u(f),l.open?setTimeout(()=>{l.open=!1},S):l.open=!0,n.classList.toggle("_spoller-active"),w(n.nextElementSibling,S),y&&n.classList.contains("_spoller-active"))){const A=l.dataset.spollerScroll,k=+A?+A:0,E=l.hasAttribute("data-spoller-scroll-noheader")?document.querySelector(".header").offsetHeight:0;window.scrollTo({top:l.offsetTop-(k+E),behavior:"smooth"})}}if(!m.closest("[data-spollers]")){const n=document.querySelectorAll("[data-spoller-close]");n.length&&n.forEach(l=>{const f=l.closest("[data-spollers]"),b=l.parentNode;if(f.classList.contains("_spoller-init")){const y=f.dataset.spollersSpeed?parseInt(f.dataset.spollersSpeed):500;l.classList.remove("_spoller-active"),r(l.nextElementSibling,y),setTimeout(()=>{b.open=!1},y)}})}},u=function(c){const m=c.querySelector("details[open]");if(m&&!c.querySelectorAll("._slide").length){const n=m.querySelector("summary"),l=c.dataset.spollersSpeed?parseInt(c.dataset.spollersSpeed):500;n.classList.remove("_spoller-active"),r(n.nextElementSibling,l),setTimeout(()=>{m.open=!1},l)}};var L=i,x=_,t=p,g=u;document.addEventListener("click",p);const s=Array.from(h).filter(function(c,m,n){return!c.dataset.spollers.split(",")[0]});s.length&&i(s);const a=Array.from(h).filter(function(c,m,n){return c.dataset.spollers.split(",")[0]});if(a.length>0){const c=[];a.forEach(n=>{const f=n.dataset.spollers.split(","),b={};b.value=f[0],b.type=f[1]?f[1].trim():"max",b.item=n,c.push(b)});const m=c.map(function(n){return"("+n.type+"-width: "+n.value+"px),"+n.value+","+n.type}).filter(function(n,l,f){return f.indexOf(n)===l});m&&m.length&&m.forEach(n=>{const l=n.split(","),f=l[1],b=l[2],y=window.matchMedia(l[0]),S=c.filter(function(A){return A.value===f&&A.type===b});y.addEventListener("change",function(){i(S,y)}),i(S,y)})}}let r=(s,a=500,i=0)=>{s.classList.contains("_slide")||(s.classList.add("_slide"),s.style.transitionProperty="height, margin, padding",s.style.transitionDuration=a+"ms",s.style.height=`${s.offsetHeight}px`,s.offsetHeight,s.style.overflow="hidden",s.style.height=i?`${i}px`:"0px",s.style.paddingTop=0,s.style.paddingBottom=0,s.style.marginTop=0,s.style.marginBottom=0,window.setTimeout(()=>{s.hidden=!i,i||s.style.removeProperty("height"),s.style.removeProperty("padding-top"),s.style.removeProperty("padding-bottom"),s.style.removeProperty("margin-top"),s.style.removeProperty("margin-bottom"),i||s.style.removeProperty("overflow"),s.style.removeProperty("transition-duration"),s.style.removeProperty("transition-property"),s.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideUpDone",{detail:{target:s}}))},a))},v=(s,a=500,i=0)=>{if(!s.classList.contains("_slide")){s.classList.add("_slide"),s.hidden=s.hidden?!1:null,i&&s.style.removeProperty("height");let _=s.offsetHeight;s.style.overflow="hidden",s.style.height=i?`${i}px`:"0px",s.style.paddingTop=0,s.style.paddingBottom=0,s.style.marginTop=0,s.style.marginBottom=0,s.offsetHeight,s.style.transitionProperty="height, margin, padding",s.style.transitionDuration=a+"ms",s.style.height=_+"px",s.style.removeProperty("padding-top"),s.style.removeProperty("padding-bottom"),s.style.removeProperty("margin-top"),s.style.removeProperty("margin-bottom"),window.setTimeout(()=>{s.style.removeProperty("height"),s.style.removeProperty("overflow"),s.style.removeProperty("transition-duration"),s.style.removeProperty("transition-property"),s.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideDownDone",{detail:{target:s}}))},a)}},w=(s,a=500)=>s.hidden?v(s,a):r(s,a)}d();const o=document.querySelector("[data-spollers]");o&&o.addEventListener("click",h=>{h.target.blur()})}const C=`<div class="page__hero hero">\r
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
`;function O(){const e=document.querySelector("#mainSection");if(!e)return;e.innerHTML+=C;function d(){const o=document.querySelector(".hero__swiper"),h=document.querySelector(".hero__swiper-button--next"),r=document.querySelector(".hero__swiper-button--prev");o&&h&&r&&new Swiper(o,{slidesPerView:1,loop:!0,grabCursor:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:{nextEl:h,prevEl:r}})}d()}const N=`<div class="insta">\r
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
</div>`;function B(){const e=document.querySelector("#insta");e&&(e.innerHTML+=N)}const U=`<div class="subscribe">\r
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
</div>`;function G(){const e=document.querySelector("#subscribe");e&&(e.innerHTML+=U)}const R=`<div class="testimonials">\r
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
</div>`;function W(){const e=document.querySelector("#testimonials");e&&(e.innerHTML+=R,new Swiper(".testimonials__slider",{loop:!0,slidesPerView:1,grabCursor:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:{nextEl:".testimonials__swiper-button--next",prevEl:".testimonials__swiper-button--prev"}}))}const F=`<div class="features">\r
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
</div>`;function Y(){const e=document.querySelector("#features");e&&(e.innerHTML+=F)}const K=`<div class="mobile-products ">\r
  <div class="mobile-products__products-section">\r
    <div class="products-section">\r
      <div class="products-section__container">\r
\r
        <div class="products-section__header">\r
          <h2 class="products-section__title title">Mobile Products</h2>\r
          <a href="shop.html" class="products-section__link">Go to Shop</a>\r
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
</div>`;function V(){const e=document.querySelector("#mobileProducts");e&&(e.innerHTML+=K)}const J=`<div class="smart-watches">\r
  <div class="smart-watches__products-section">\r
    <div class="products-section">\r
      <div class="products-section__container">\r
\r
        <div class="products-section__header">\r
          <h2 class="products-section__title title">Smart Watches</h2>\r
          <a href="shop.html" class="products-section__link">Go to Shop</a>\r
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
</div>`;function Q(){const e=document.querySelector("#smartWatches");e&&(e.innerHTML+=J)}const z=`<div class="page__sale">\r
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
</div>-->`;function X(){const e=document.querySelector("#sale");e&&(e.innerHTML+=z)}const Z=`<div class="latest">\r
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
</div>`;function ss(){const e=document.querySelector("#latest");e&&(e.innerHTML+=Z)}$();M();O();B();G();W();Y();V();Q();X();ss();rs();as();is();new Swiper(".products-section__slider",{loop:!0,grabCursor:!0,pagination:{el:".products-section__swiper-pagination",clickable:!0,renderBullet:function(e,d){return'<button type="button" class="'+d+'"></button>'}}});const ts=document.querySelector(".promo-video__icon"),es=document.querySelector(".promo-video__play-video"),q=document.querySelector("iframe");ts.addEventListener("click",()=>{es.classList.add("active");const e=new URL(q.src);e.searchParams.set("autoplay","1"),q.src=e.toString()});function rs(){document.querySelectorAll(".quantity").forEach(e=>{const d=e.querySelector(".quantity__input");e.addEventListener("click",o=>{const h=o.target.closest("[data-action]");if(!h)return;const r=h.dataset.action;let v=parseInt(d.value);isNaN(v)&&(v=1),r==="increase"&&(d.value=v+1),r==="decrease"&&(d.value=Math.max(1,v-1))})})}function as(){const e=document.querySelectorAll("[data-tabs]");let d=[];if(e.length>0){let g=function(a,i){const _=Array.from(a).filter(u=>u.dataset[i]),p={};return _.forEach(u=>{const c=u.dataset[i];p[c]||(p[c]=[]),p[c].push(u)}),Object.entries(p).map(([u,c])=>{const m=window.matchMedia(`(max-width: ${u}px)`);return{itemsArray:c,matchMedia:m}})};var x=g;const t=ns();t&&t.startsWith("tab-")&&(d=t.replace("tab-","").split("-")),e.forEach((a,i)=>{a.classList.add("_tab-init"),a.setAttribute("data-tabs-index",i),a.addEventListener("click",v),h(a)});let s=g(e,"tabs");s&&s.length&&s.forEach(a=>{a.matchMedia.addEventListener("change",function(){o(a.itemsArray,a.matchMedia)}),o(a.itemsArray,a.matchMedia)})}function o(t,g){t.forEach(s=>{let a=s.querySelector("[data-tabs-titles]"),i=s.querySelectorAll("[data-tabs-title]"),_=s.querySelector("[data-tabs-body]"),p=s.querySelectorAll("[data-tabs-item]");i=Array.from(i).filter(u=>u.closest("[data-tabs]")===s),p=Array.from(p).filter(u=>u.closest("[data-tabs]")===s),p.forEach((u,c)=>{g.matches?(_.append(i[c]),_.append(u),s.classList.add("_tab-spoller")):(a.append(i[c]),s.classList.remove("_tab-spoller"))})})}function h(t){let g=t.querySelectorAll("[data-tabs-titles]>*"),s=t.querySelectorAll("[data-tabs-body]>*");const a=t.dataset.tabsIndex,i=d[0]==a;if(i){const _=t.querySelector("[data-tabs-titles]>._tab-active");_&&_.classList.remove("_tab-active")}s.length&&s.forEach((_,p)=>{g[p].setAttribute("data-tabs-title",""),_.setAttribute("data-tabs-item",""),_.hidden=!0,i&&p==d[1]&&(g[p].classList.add("_tab-active"),g[p].classList.add("_tab-animated")),_.hidden=!g[p].classList.contains("_tab-active")})}function r(t){let g=t.querySelectorAll("[data-tabs-title]"),s=t.querySelectorAll("[data-tabs-item]");const a=t.dataset.tabsIndex;function i(p){if(p.hasAttribute("data-tabs-animate"))return p.dataset.tabsAnimate>0?Number(p.dataset.tabsAnimate):500}const _=i(t);if(s.length>0){const p=t.hasAttribute("data-tabs-hash");s=Array.from(s).filter(u=>u.closest("[data-tabs]")===t),g=Array.from(g).filter(u=>u.closest("[data-tabs]")===t),s.forEach((u,c)=>{g[c].classList.contains("_tab-active")?(_?L(u,_):u.hidden=!1,p&&!u.closest(".popup")&&setHash(`tab-${a}-${c}`)):_?w(u,_):u.hidden=!0})}}function v(t){const g=t.target;if(g.closest("[data-tabs-title]")){const s=g.closest("[data-tabs-title]"),a=s.closest("[data-tabs]");if(!s.classList.contains("_tab-active")&&!a.querySelector("._slide")){let i=a.querySelectorAll("[data-tabs-title]._tab-active");if(i.length&&(i=Array.from(i).filter(_=>_.closest("[data-tabs]")===a)),i.length&&i[0].classList.remove("_tab-active"),s.classList.add("_tab-active"),s.classList.add("_tab-animated"),r(a),isSpoller){const _=p=>{if(p.detail.target.closest("[data-tabs]")===a){const u=s.getBoundingClientRect(),c=window.scrollY+u.top-20;window.scrollTo({top:c,behavior:"smooth"}),document.removeEventListener("slideDownDone",_)}};document.addEventListener("slideDownDone",_)}}t.preventDefault()}}let w=(t,g=500,s=0)=>{t.classList.contains("_slide")||(t.classList.add("_slide"),t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=g+"ms",t.style.height=`${t.offsetHeight}px`,t.offsetHeight,t.style.overflow="hidden",t.style.height=s?`${s}px`:"0px",t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,t.style.position="absolute",t.style.visibility="hidden",window.setTimeout(()=>{t.hidden=!s,t.style.removeProperty("position"),t.style.removeProperty("visibility"),s||t.style.removeProperty("height"),t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),s||t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property"),t.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideUpDone",{detail:{target:t}}))},g))},L=(t,g=500,s=0)=>{if(!t.classList.contains("_slide")){t.classList.add("_slide"),t.hidden=t.hidden?!1:null,s&&t.style.removeProperty("height");let a=t.offsetHeight;t.style.overflow="hidden",t.style.height=s?`${s}px`:"0px",t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,t.offsetHeight,t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=g+"ms",t.style.height=a+"px",t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),window.setTimeout(()=>{t.style.removeProperty("height"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property"),t.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideDownDone",{detail:{target:t}}))},g)}}}function ns(){if(location.hash)return location.hash.replace("#","")}function is(){document.querySelectorAll("[data-select]").forEach(e=>{const d=e.querySelector("[data-select-trigger]"),o=e.querySelector("[data-select-list]"),h=e.querySelector("[data-select-input]");d.addEventListener("click",()=>{const r=d.getAttribute("aria-expanded")==="true";d.setAttribute("aria-expanded",!r),o.hidden=r}),o.querySelectorAll(".custom-select__option").forEach(r=>{r.addEventListener("click",()=>{d.textContent=r.textContent,h.value=r.dataset.value,o.hidden=!0,d.setAttribute("aria-expanded","false")})}),document.addEventListener("click",r=>{e.contains(r.target)||(o.hidden=!0,d.setAttribute("aria-expanded","false"))})})}
