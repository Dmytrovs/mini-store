(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const v of a.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&u(v)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const x=`<header class="header">\r
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
</header>`;function E(){document.body.style.overflow="hidden"}function P(){document.body.style.overflow="auto"}function A(){document.body.style.overflow==="hidden"?P():E()}function T(){const c=document.querySelector("#header");if(!c)return;c.innerHTML+=x;const m=document.querySelectorAll(".menu__toggle-btn");m.forEach(o=>{o.addEventListener("click",u=>{u.stopPropagation();const t=o.nextElementSibling,a=o.getAttribute("aria-expanded")==="true";o.classList.toggle("open"),o.setAttribute("aria-expanded",!a),t.classList.toggle("open",!a)})}),document.addEventListener("click",()=>{m.forEach(o=>{o.setAttribute("aria-expanded","false"),o.nextElementSibling.classList.remove("open"),o.classList.remove("open")})}),document.querySelector(".icon-menu")&&document.addEventListener("click",function(o){o.target.closest(".icon-menu")&&(A(),document.documentElement.classList.toggle("menu-open"))})}const k=document.querySelector(" .menu__item .menu__toggle-btn ");k&&k.addEventListener("click",c=>{c.target.blur()});const q=`<footer class="footer">\r
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
`;function H(){const c=document.querySelector("#footer");if(!c){console.warn("Елемент footerEl не знайдено");return}c.innerHTML=q;function m(){const u=document.querySelectorAll("[data-spollers]");if(u.length>0){let d=function(l,i=!1){l.forEach(n=>{n=i?n.item:n,i&&i.matches||!i?(n.classList.add("_spoller-init"),h(n)):(n.classList.remove("_spoller-init"),h(n,!1))})},h=function(l,i=!0){let n=l.querySelectorAll("details");n.length&&n.forEach(s=>{let r=s.querySelector("summary");i?(r.removeAttribute("tabindex"),s.hasAttribute("data-open")?(r.classList.add("_spoller-active"),s.open=!0):(s.open=!1,r.nextElementSibling.hidden=!0)):(r.setAttribute("tabindex","-1"),r.classList.remove("_spoller-active"),s.open=!0,r.nextElementSibling.hidden=!1)})},b=function(l){const i=l.target;if(i.closest("summary")&&i.closest("[data-spollers]")&&(l.preventDefault(),i.closest("[data-spollers]").classList.contains("_spoller-init"))){const n=i.closest("summary"),s=n.closest("details"),r=n.closest("[data-spollers]"),p=r.hasAttribute("data-one-spoller"),f=s.hasAttribute("data-spoller-scroll"),y=r.dataset.spollersSpeed?parseInt(r.dataset.spollersSpeed):500;if(!r.querySelectorAll("._slide").length&&(p&&!s.open&&S(r),s.open?setTimeout(()=>{s.open=!1},y):s.open=!0,n.classList.toggle("_spoller-active"),v(n.nextElementSibling,y),f&&n.classList.contains("_spoller-active"))){const g=s.dataset.spollerScroll,w=+g?+g:0,L=s.hasAttribute("data-spoller-scroll-noheader")?document.querySelector(".header").offsetHeight:0;window.scrollTo({top:s.offsetTop-(w+L),behavior:"smooth"})}}if(!i.closest("[data-spollers]")){const n=document.querySelectorAll("[data-spoller-close]");n.length&&n.forEach(s=>{const r=s.closest("[data-spollers]"),p=s.parentNode;if(r.classList.contains("_spoller-init")){const f=r.dataset.spollersSpeed?parseInt(r.dataset.spollersSpeed):500;s.classList.remove("_spoller-active"),t(s.nextElementSibling,f),setTimeout(()=>{p.open=!1},f)}})}},S=function(l){const i=l.querySelector("details[open]");if(i&&!l.querySelectorAll("._slide").length){const n=i.querySelector("summary"),s=l.dataset.spollersSpeed?parseInt(l.dataset.spollersSpeed):500;n.classList.remove("_spoller-active"),t(n.nextElementSibling,s),setTimeout(()=>{i.open=!1},s)}};var D=d,B=h,N=b,j=S;document.addEventListener("click",b);const e=Array.from(u).filter(function(l,i,n){return!l.dataset.spollers.split(",")[0]});e.length&&d(e);const _=Array.from(u).filter(function(l,i,n){return l.dataset.spollers.split(",")[0]});if(_.length>0){const l=[];_.forEach(n=>{const r=n.dataset.spollers.split(","),p={};p.value=r[0],p.type=r[1]?r[1].trim():"max",p.item=n,l.push(p)});const i=l.map(function(n){return"("+n.type+"-width: "+n.value+"px),"+n.value+","+n.type}).filter(function(n,s,r){return r.indexOf(n)===s});i&&i.length&&i.forEach(n=>{const s=n.split(","),r=s[1],p=s[2],f=window.matchMedia(s[0]),y=l.filter(function(g){return g.value===r&&g.type===p});f.addEventListener("change",function(){d(y,f)}),d(y,f)})}}let t=(e,_=500,d=0)=>{e.classList.contains("_slide")||(e.classList.add("_slide"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=_+"ms",e.style.height=`${e.offsetHeight}px`,e.offsetHeight,e.style.overflow="hidden",e.style.height=d?`${d}px`:"0px",e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout(()=>{e.hidden=!d,d||e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),d||e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideUpDone",{detail:{target:e}}))},_))},a=(e,_=500,d=0)=>{if(!e.classList.contains("_slide")){e.classList.add("_slide"),e.hidden=e.hidden?!1:null,d&&e.style.removeProperty("height");let h=e.offsetHeight;e.style.overflow="hidden",e.style.height=d?`${d}px`:"0px",e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=_+"ms",e.style.height=h+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideDownDone",{detail:{target:e}}))},_)}},v=(e,_=500)=>e.hidden?a(e,_):t(e,_)}m();const o=document.querySelector("[data-spollers]");o&&o.addEventListener("click",u=>{u.target.blur()})}const I=`<div class="page__hero hero">\r
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
`;function M(){const c=document.querySelector("#mainSection");if(!c)return;c.innerHTML+=I;function m(){const o=document.querySelector(".hero__swiper"),u=document.querySelector(".hero__swiper-button--next"),t=document.querySelector(".hero__swiper-button--prev");o&&u&&t&&new Swiper(o,{slidesPerView:1,loop:!0,grabCursor:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:{nextEl:u,prevEl:t}})}m()}const O=`<div class="insta">\r
  <div class="insta__container">\r
    <h3 class="insta__title title">Shop our insta</h3>\r
    <div class="insta__items">\r
      <a href="#" class="insta__item">\r
        <img src="images/insta/01.jpg" alt="image" class="insta__image">\r
      </a>\r
      <a href="#" class="insta__item">\r
        <img src="images/insta/02.jpg" alt="image" class="insta__image">\r
      </a>\r
      <a href="#" class="insta__item">\r
        <img src="images/insta/03.jpg" alt="image" class="insta__image">\r
      </a>\r
      <a href="#" class="insta__item">\r
        <img src="images/insta/04.jpg" alt="image" class="insta__image">\r
      </a>\r
      <a href="#" class="insta__item">\r
        <img src="images/insta/05.jpg" alt="image" class="insta__image">\r
      </a>\r
    </div>\r
  </div>\r
</div>`;function C(){const c=document.querySelector("#insta");c&&(c.innerHTML+=O)}T();H();M();C();
