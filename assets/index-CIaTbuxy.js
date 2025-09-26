(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const v of c.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function l(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function d(t){if(t.ep)return;t.ep=!0;const c=l(t);fetch(t.href,c)}})();const L=`<header class="header">\r
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
</header>`;function q(){document.body.style.overflow="hidden"}function E(){document.body.style.overflow="auto"}function P(){document.body.style.overflow==="hidden"?E():q()}function T(){const i=document.querySelector("#header");if(!i)return;i.innerHTML+=L;const m=document.querySelectorAll(".menu__toggle-btn");m.forEach(l=>{l.addEventListener("click",d=>{d.stopPropagation();const t=l.nextElementSibling,c=l.getAttribute("aria-expanded")==="true";l.classList.toggle("open"),l.setAttribute("aria-expanded",!c),t.classList.toggle("open",!c)})}),document.addEventListener("click",()=>{m.forEach(l=>{l.setAttribute("aria-expanded","false"),l.nextElementSibling.classList.remove("open"),l.classList.remove("open")})}),document.querySelector(".icon-menu")&&document.addEventListener("click",function(l){l.target.closest(".icon-menu")&&(P(),document.documentElement.classList.toggle("menu-open"))})}const w=document.querySelector(" .menu__item .menu__toggle-btn ");w&&w.addEventListener("click",i=>{i.target.blur()});const A=`<footer class="footer">\r
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
`;function H(){const i=document.querySelector("#footer");if(!i){console.warn("Елемент footerEl не знайдено");return}i.innerHTML=A;function m(){const d=document.querySelectorAll("[data-spollers]");if(d.length>0){let _=function(a,o=!1){a.forEach(s=>{s=o?s.item:s,o&&o.matches||!o?(s.classList.add("_spoller-init"),h(s)):(s.classList.remove("_spoller-init"),h(s,!1))})},h=function(a,o=!0){let s=a.querySelectorAll("details");s.length&&s.forEach(n=>{let r=n.querySelector("summary");o?(r.removeAttribute("tabindex"),n.hasAttribute("data-open")?(r.classList.add("_spoller-active"),n.open=!0):(n.open=!1,r.nextElementSibling.hidden=!0)):(r.setAttribute("tabindex","-1"),r.classList.remove("_spoller-active"),n.open=!0,r.nextElementSibling.hidden=!1)})},g=function(a){const o=a.target;if(o.closest("summary")&&o.closest("[data-spollers]")&&(a.preventDefault(),o.closest("[data-spollers]").classList.contains("_spoller-init"))){const s=o.closest("summary"),n=s.closest("details"),r=s.closest("[data-spollers]"),p=r.hasAttribute("data-one-spoller"),f=n.hasAttribute("data-spoller-scroll"),b=r.dataset.spollersSpeed?parseInt(r.dataset.spollersSpeed):500;if(!r.querySelectorAll("._slide").length&&(p&&!n.open&&S(r),n.open?setTimeout(()=>{n.open=!1},b):n.open=!0,s.classList.toggle("_spoller-active"),v(s.nextElementSibling,b),f&&s.classList.contains("_spoller-active"))){const y=n.dataset.spollerScroll,x=+y?+y:0,k=n.hasAttribute("data-spoller-scroll-noheader")?document.querySelector(".header").offsetHeight:0;window.scrollTo({top:n.offsetTop-(x+k),behavior:"smooth"})}}if(!o.closest("[data-spollers]")){const s=document.querySelectorAll("[data-spoller-close]");s.length&&s.forEach(n=>{const r=n.closest("[data-spollers]"),p=n.parentNode;if(r.classList.contains("_spoller-init")){const f=r.dataset.spollersSpeed?parseInt(r.dataset.spollersSpeed):500;n.classList.remove("_spoller-active"),t(n.nextElementSibling,f),setTimeout(()=>{p.open=!1},f)}})}},S=function(a){const o=a.querySelector("details[open]");if(o&&!a.querySelectorAll("._slide").length){const s=o.querySelector("summary"),n=a.dataset.spollersSpeed?parseInt(a.dataset.spollersSpeed):500;s.classList.remove("_spoller-active"),t(s.nextElementSibling,n),setTimeout(()=>{o.open=!1},n)}};var Q=_,Y=h,K=g,R=S;document.addEventListener("click",g);const e=Array.from(d).filter(function(a,o,s){return!a.dataset.spollers.split(",")[0]});e.length&&_(e);const u=Array.from(d).filter(function(a,o,s){return a.dataset.spollers.split(",")[0]});if(u.length>0){const a=[];u.forEach(s=>{const r=s.dataset.spollers.split(","),p={};p.value=r[0],p.type=r[1]?r[1].trim():"max",p.item=s,a.push(p)});const o=a.map(function(s){return"("+s.type+"-width: "+s.value+"px),"+s.value+","+s.type}).filter(function(s,n,r){return r.indexOf(s)===n});o&&o.length&&o.forEach(s=>{const n=s.split(","),r=n[1],p=n[2],f=window.matchMedia(n[0]),b=a.filter(function(y){return y.value===r&&y.type===p});f.addEventListener("change",function(){_(b,f)}),_(b,f)})}}let t=(e,u=500,_=0)=>{e.classList.contains("_slide")||(e.classList.add("_slide"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=u+"ms",e.style.height=`${e.offsetHeight}px`,e.offsetHeight,e.style.overflow="hidden",e.style.height=_?`${_}px`:"0px",e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout(()=>{e.hidden=!_,_||e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),_||e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideUpDone",{detail:{target:e}}))},u))},c=(e,u=500,_=0)=>{if(!e.classList.contains("_slide")){e.classList.add("_slide"),e.hidden=e.hidden?!1:null,_&&e.style.removeProperty("height");let h=e.offsetHeight;e.style.overflow="hidden",e.style.height=_?`${_}px`:"0px",e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=u+"ms",e.style.height=h+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideDownDone",{detail:{target:e}}))},u)}},v=(e,u=500)=>e.hidden?c(e,u):t(e,u)}m();const l=document.querySelector("[data-spollers]");l&&l.addEventListener("click",d=>{d.target.blur()})}const I=`<div class="page__hero hero">\r
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
`;function M(){const i=document.querySelector("#mainSection");if(!i)return;i.innerHTML+=I;function m(){const l=document.querySelector(".hero__swiper"),d=document.querySelector(".hero__swiper-button--next"),t=document.querySelector(".hero__swiper-button--prev");l&&d&&t&&new Swiper(l,{slidesPerView:1,loop:!0,grabCursor:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:{nextEl:d,prevEl:t}})}m()}const C=`<div class="insta">\r
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
</div>`;function O(){const i=document.querySelector("#insta");i&&(i.innerHTML+=C)}const D=`<div class="subscribe">\r
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
</div>`;function B(){const i=document.querySelector("#subscribe");i&&(i.innerHTML+=D)}const F=`<div class="testimonials">\r
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
</div>`;function N(){const i=document.querySelector("#testimonials");i&&(i.innerHTML+=F,new Swiper(".testimonials__slider",{loop:!0,slidesPerView:1,grabCursor:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:{nextEl:".testimonials__swiper-button--next",prevEl:".testimonials__swiper-button--prev"}}))}const j=`<div class="features">\r
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
</div>`;function U(){const i=document.querySelector("#features");i&&(i.innerHTML+=j)}T();H();M();O();B();N();U();
