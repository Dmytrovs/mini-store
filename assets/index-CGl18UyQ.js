(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))f(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const b of c.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&f(b)}).observe(document,{childList:!0,subtree:!0});function l(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function f(a){if(a.ep)return;a.ep=!0;const c=l(a);fetch(a.href,c)}})();const P=`<header class="header">\r
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
</header>`;function E(){document.body.style.overflow="hidden"}function A(){document.body.style.overflow="auto"}function T(){document.body.style.overflow==="hidden"?A():E()}function q(){const o=document.querySelector("#header");if(!o)return;o.innerHTML+=P;const u=document.querySelectorAll(".menu__toggle-btn");u.forEach(l=>{l.addEventListener("click",f=>{f.stopPropagation();const a=l.nextElementSibling,c=l.getAttribute("aria-expanded")==="true";l.classList.toggle("open"),l.setAttribute("aria-expanded",!c),a.classList.toggle("open",!c)})}),document.addEventListener("click",()=>{u.forEach(l=>{l.setAttribute("aria-expanded","false"),l.nextElementSibling.classList.remove("open"),l.classList.remove("open")})}),document.querySelector(".icon-menu")&&document.addEventListener("click",function(l){l.target.closest(".icon-menu")&&(T(),document.documentElement.classList.toggle("menu-open"))})}const k=document.querySelector(" .menu__item .menu__toggle-btn ");k&&k.addEventListener("click",o=>{o.target.blur()});const H=`<footer class="footer">\r
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
`;function I(){const o=document.querySelector("#footer");if(!o){console.warn("Елемент footerEl не знайдено");return}o.innerHTML=H}function C(){const o=document.querySelectorAll("[data-spollers]");if(o.length>0){let d=function(i,r=!1){i.forEach(n=>{n=r?n.item:n,r&&r.matches||!r?(n.classList.add("_spoller-init"),v(n)):(n.classList.remove("_spoller-init"),v(n,!1))})},v=function(i,r=!0){let n=i.querySelectorAll("details");n.length&&n.forEach(s=>{let t=s.querySelector("summary");r?(t.removeAttribute("tabindex"),s.hasAttribute("data-open")?(t.classList.add("_spoller-active"),s.open=!0):(s.open=!1,t.nextElementSibling.hidden=!0)):(t.setAttribute("tabindex","-1"),t.classList.remove("_spoller-active"),s.open=!0,t.nextElementSibling.hidden=!1)})},g=function(i){const r=i.target;if(r.closest("summary")&&r.closest("[data-spollers]")&&(i.preventDefault(),r.closest("[data-spollers]").classList.contains("_spoller-init"))){const n=r.closest("summary"),s=n.closest("details"),t=n.closest("[data-spollers]"),m=t.hasAttribute("data-one-spoller"),p=s.hasAttribute("data-spoller-scroll"),h=t.dataset.spollersSpeed?parseInt(t.dataset.spollersSpeed):500;if(!t.querySelectorAll("._slide").length&&(m&&!s.open&&S(t),s.open?setTimeout(()=>{s.open=!1},h):s.open=!0,n.classList.toggle("_spoller-active"),f(n.nextElementSibling,h),p&&n.classList.contains("_spoller-active"))){const y=s.dataset.spollerScroll,L=+y?+y:0,x=s.hasAttribute("data-spoller-scroll-noheader")?document.querySelector(".header").offsetHeight:0;window.scrollTo({top:s.offsetTop-(L+x),behavior:"smooth"})}}if(!r.closest("[data-spollers]")){const n=document.querySelectorAll("[data-spoller-close]");n.length&&n.forEach(s=>{const t=s.closest("[data-spollers]"),m=s.parentNode;if(t.classList.contains("_spoller-init")){const p=t.dataset.spollersSpeed?parseInt(t.dataset.spollersSpeed):500;s.classList.remove("_spoller-active"),u(s.nextElementSibling,p),setTimeout(()=>{m.open=!1},p)}})}},S=function(i){const r=i.querySelector("details[open]");if(r&&!i.querySelectorAll("._slide").length){const n=r.querySelector("summary"),s=i.dataset.spollersSpeed?parseInt(i.dataset.spollersSpeed):500;n.classList.remove("_spoller-active"),u(n.nextElementSibling,s),setTimeout(()=>{r.open=!1},s)}};var a=d,c=v,b=g,O=S;document.addEventListener("click",g);const e=Array.from(o).filter(function(i,r,n){return!i.dataset.spollers.split(",")[0]});e.length&&d(e);const _=Array.from(o).filter(function(i,r,n){return i.dataset.spollers.split(",")[0]});if(_.length>0){const i=[];_.forEach(n=>{const t=n.dataset.spollers.split(","),m={};m.value=t[0],m.type=t[1]?t[1].trim():"max",m.item=n,i.push(m)});const r=i.map(function(n){return"("+n.type+"-width: "+n.value+"px),"+n.value+","+n.type}).filter(function(n,s,t){return t.indexOf(n)===s});r&&r.length&&r.forEach(n=>{const s=n.split(","),t=s[1],m=s[2],p=window.matchMedia(s[0]),h=i.filter(function(y){return y.value===t&&y.type===m});p.addEventListener("change",function(){d(h,p)}),d(h,p)})}}let u=(e,_=500,d=0)=>{e.classList.contains("_slide")||(e.classList.add("_slide"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=_+"ms",e.style.height=`${e.offsetHeight}px`,e.offsetHeight,e.style.overflow="hidden",e.style.height=d?`${d}px`:"0px",e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout(()=>{e.hidden=!d,d||e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),d||e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideUpDone",{detail:{target:e}}))},_))},l=(e,_=500,d=0)=>{if(!e.classList.contains("_slide")){e.classList.add("_slide"),e.hidden=e.hidden?!1:null,d&&e.style.removeProperty("height");let v=e.offsetHeight;e.style.overflow="hidden",e.style.height=d?`${d}px`:"0px",e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=_+"ms",e.style.height=v+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideDownDone",{detail:{target:e}}))},_)}},f=(e,_=500)=>e.hidden?l(e,_):u(e,_)}C();const w=document.querySelector("[data-spollers]");w&&w.addEventListener("click",o=>{o.target.blur()});const D=`<div class="page__hero hero">\r
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
`;function M(){const o=document.querySelector("#mainSection");o&&(o.innerHTML+=D,B())}function B(){const o=document.querySelector(".hero__swiper"),u=document.querySelector(".hero__swiper-button--next"),l=document.querySelector(".hero__swiper-button--prev");o&&u&&l&&new Swiper(o,{slidesPerView:1,loop:!0,grabCursor:!0,navigation:{nextEl:u,prevEl:l}})}q();I();M();
