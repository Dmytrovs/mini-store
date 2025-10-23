(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))h(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const w of u.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&h(w)}).observe(document,{childList:!0,subtree:!0});function d(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function h(c){if(c.ep)return;c.ep=!0;const u=d(c);fetch(c.href,u)}})();const T=`<header class="header">\r
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
              <li class="menu__subnav-item"><a href="#" class="menu__subnav-link">Card</a></li>\r
              <li class="menu__subnav-item"><a href="#" class="menu__subnav-link">Checkout</a></li>\r
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
</header>`;function I(){document.body.style.overflow="hidden"}function H(){document.body.style.overflow="auto"}function j(){document.body.style.overflow==="hidden"?H():I()}function $(){const r=document.querySelector("#header");if(!r)return;r.innerHTML+=T;const g=document.querySelectorAll(".menu__toggle-btn");g.forEach(d=>{d.addEventListener("click",h=>{h.stopPropagation();const c=d.nextElementSibling,u=d.getAttribute("aria-expanded")==="true";d.classList.toggle("open"),d.setAttribute("aria-expanded",!u),c.classList.toggle("open",!u)})}),document.addEventListener("click",()=>{g.forEach(d=>{d.setAttribute("aria-expanded","false"),d.nextElementSibling.classList.remove("open"),d.classList.remove("open")})}),document.querySelector(".icon-menu")&&document.addEventListener("click",function(d){d.target.closest(".icon-menu")&&(j(),document.documentElement.classList.toggle("menu-open"))})}const P=document.querySelector(" .menu__item .menu__toggle-btn ");P&&P.addEventListener("click",r=>{r.target.blur()});const M=`<footer class="footer">\r
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
`;function D(){const r=document.querySelector("#footer");if(!r){console.warn("Елемент footerEl не знайдено");return}r.innerHTML=M;function g(){const h=document.querySelectorAll("[data-spollers]");if(h.length>0){let n=function(i,_=!1){i.forEach(a=>{a=_?a.item:a,_&&_.matches||!_?(a.classList.add("_spoller-init"),m(a)):(a.classList.remove("_spoller-init"),m(a,!1))})},m=function(i,_=!0){let a=i.querySelectorAll("details");a.length&&a.forEach(o=>{let p=o.querySelector("summary");_?(p.removeAttribute("tabindex"),o.hasAttribute("data-open")?(p.classList.add("_spoller-active"),o.open=!0):(o.open=!1,p.nextElementSibling.hidden=!0)):(p.setAttribute("tabindex","-1"),p.classList.remove("_spoller-active"),o.open=!0,p.nextElementSibling.hidden=!1)})},v=function(i){const _=i.target;if(_.closest("summary")&&_.closest("[data-spollers]")&&(i.preventDefault(),_.closest("[data-spollers]").classList.contains("_spoller-init"))){const a=_.closest("summary"),o=a.closest("details"),p=a.closest("[data-spollers]"),b=p.hasAttribute("data-one-spoller"),y=o.hasAttribute("data-spoller-scroll"),S=p.dataset.spollersSpeed?parseInt(p.dataset.spollersSpeed):500;if(!p.querySelectorAll("._slide").length&&(b&&!o.open&&l(p),o.open?setTimeout(()=>{o.open=!1},S):o.open=!0,a.classList.toggle("_spoller-active"),w(a.nextElementSibling,S),y&&a.classList.contains("_spoller-active"))){const A=o.dataset.spollerScroll,k=+A?+A:0,E=o.hasAttribute("data-spoller-scroll-noheader")?document.querySelector(".header").offsetHeight:0;window.scrollTo({top:o.offsetTop-(k+E),behavior:"smooth"})}}if(!_.closest("[data-spollers]")){const a=document.querySelectorAll("[data-spoller-close]");a.length&&a.forEach(o=>{const p=o.closest("[data-spollers]"),b=o.parentNode;if(p.classList.contains("_spoller-init")){const y=p.dataset.spollersSpeed?parseInt(p.dataset.spollersSpeed):500;o.classList.remove("_spoller-active"),c(o.nextElementSibling,y),setTimeout(()=>{b.open=!1},y)}})}},l=function(i){const _=i.querySelector("details[open]");if(_&&!i.querySelectorAll("._slide").length){const a=_.querySelector("summary"),o=i.dataset.spollersSpeed?parseInt(i.dataset.spollersSpeed):500;a.classList.remove("_spoller-active"),c(a.nextElementSibling,o),setTimeout(()=>{_.open=!1},o)}};var L=n,x=m,t=v,f=l;document.addEventListener("click",v);const s=Array.from(h).filter(function(i,_,a){return!i.dataset.spollers.split(",")[0]});s.length&&n(s);const e=Array.from(h).filter(function(i,_,a){return i.dataset.spollers.split(",")[0]});if(e.length>0){const i=[];e.forEach(a=>{const p=a.dataset.spollers.split(","),b={};b.value=p[0],b.type=p[1]?p[1].trim():"max",b.item=a,i.push(b)});const _=i.map(function(a){return"("+a.type+"-width: "+a.value+"px),"+a.value+","+a.type}).filter(function(a,o,p){return p.indexOf(a)===o});_&&_.length&&_.forEach(a=>{const o=a.split(","),p=o[1],b=o[2],y=window.matchMedia(o[0]),S=i.filter(function(A){return A.value===p&&A.type===b});y.addEventListener("change",function(){n(S,y)}),n(S,y)})}}let c=(s,e=500,n=0)=>{s.classList.contains("_slide")||(s.classList.add("_slide"),s.style.transitionProperty="height, margin, padding",s.style.transitionDuration=e+"ms",s.style.height=`${s.offsetHeight}px`,s.offsetHeight,s.style.overflow="hidden",s.style.height=n?`${n}px`:"0px",s.style.paddingTop=0,s.style.paddingBottom=0,s.style.marginTop=0,s.style.marginBottom=0,window.setTimeout(()=>{s.hidden=!n,n||s.style.removeProperty("height"),s.style.removeProperty("padding-top"),s.style.removeProperty("padding-bottom"),s.style.removeProperty("margin-top"),s.style.removeProperty("margin-bottom"),n||s.style.removeProperty("overflow"),s.style.removeProperty("transition-duration"),s.style.removeProperty("transition-property"),s.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideUpDone",{detail:{target:s}}))},e))},u=(s,e=500,n=0)=>{if(!s.classList.contains("_slide")){s.classList.add("_slide"),s.hidden=s.hidden?!1:null,n&&s.style.removeProperty("height");let m=s.offsetHeight;s.style.overflow="hidden",s.style.height=n?`${n}px`:"0px",s.style.paddingTop=0,s.style.paddingBottom=0,s.style.marginTop=0,s.style.marginBottom=0,s.offsetHeight,s.style.transitionProperty="height, margin, padding",s.style.transitionDuration=e+"ms",s.style.height=m+"px",s.style.removeProperty("padding-top"),s.style.removeProperty("padding-bottom"),s.style.removeProperty("margin-top"),s.style.removeProperty("margin-bottom"),window.setTimeout(()=>{s.style.removeProperty("height"),s.style.removeProperty("overflow"),s.style.removeProperty("transition-duration"),s.style.removeProperty("transition-property"),s.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideDownDone",{detail:{target:s}}))},e)}},w=(s,e=500)=>s.hidden?u(s,e):c(s,e)}g();const d=document.querySelector("[data-spollers]");d&&d.addEventListener("click",h=>{h.target.blur()})}const O=`<div class="page__hero hero">\r
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
`;function C(){const r=document.querySelector("#mainSection");if(!r)return;r.innerHTML+=O;function g(){const d=document.querySelector(".hero__swiper"),h=document.querySelector(".hero__swiper-button--next"),c=document.querySelector(".hero__swiper-button--prev");d&&h&&c&&new Swiper(d,{slidesPerView:1,loop:!0,grabCursor:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:{nextEl:h,prevEl:c}})}g()}const N=`<div class="insta">\r
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
</div>`;function U(){const r=document.querySelector("#insta");r&&(r.innerHTML+=N)}const B=`<div class="subscribe">\r
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
</div>`;function G(){const r=document.querySelector("#subscribe");r&&(r.innerHTML+=B)}const W=`<div class="testimonials">\r
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
</div>`;function F(){const r=document.querySelector("#testimonials");r&&(r.innerHTML+=W,new Swiper(".testimonials__slider",{loop:!0,slidesPerView:1,grabCursor:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:{nextEl:".testimonials__swiper-button--next",prevEl:".testimonials__swiper-button--prev"}}))}const R=`<div class="features">\r
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
</div>`;function Y(){const r=document.querySelector("#features");r&&(r.innerHTML+=R)}const K=`<div class="mobile-products ">\r
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
</div>`;function V(){const r=document.querySelector("#mobileProducts");r&&(r.innerHTML+=K)}const J=`<div class="smart-watches">\r
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
</div>`;function Q(){const r=document.querySelector("#smartWatches");r&&(r.innerHTML+=J)}const z=`<div class="page__sale">\r
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
</div>-->`;function X(){const r=document.querySelector("#sale");r&&(r.innerHTML+=z)}const Z=`<div class="latest">\r
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
</div>`;function ss(){const r=document.querySelector("#latest");r&&(r.innerHTML+=Z)}$();D();C();U();G();F();Y();V();Q();X();ss();es();as();new Swiper(".products-section__slider",{loop:!0,grabCursor:!0,pagination:{el:".products-section__swiper-pagination",clickable:!0,renderBullet:function(r,g){return'<button type="button" class="'+g+'"></button>'}}});const ts=document.querySelector(".promo-video__icon"),rs=document.querySelector(".promo-video__play-video"),q=document.querySelector("iframe");ts.addEventListener("click",()=>{rs.classList.add("active");const r=new URL(q.src);r.searchParams.set("autoplay","1"),q.src=r.toString()});function es(){document.querySelectorAll(".quantity").forEach(r=>{const g=r.querySelector(".quantity__input");r.addEventListener("click",d=>{const h=d.target.closest("[data-action]");if(!h)return;const c=h.dataset.action;let u=parseInt(g.value);isNaN(u)&&(u=1),c==="increase"&&(g.value=u+1),c==="decrease"&&(g.value=Math.max(1,u-1))})})}function as(){const r=document.querySelectorAll("[data-tabs]");let g=[];if(r.length>0){let f=function(e,n){const m=Array.from(e).filter(l=>l.dataset[n]),v={};return m.forEach(l=>{const i=l.dataset[n];v[i]||(v[i]=[]),v[i].push(l)}),Object.entries(v).map(([l,i])=>{const _=window.matchMedia(`(max-width: ${l}px)`);return{itemsArray:i,matchMedia:_}})};var x=f;const t=ns();t&&t.startsWith("tab-")&&(g=t.replace("tab-","").split("-")),r.forEach((e,n)=>{e.classList.add("_tab-init"),e.setAttribute("data-tabs-index",n),e.addEventListener("click",u),h(e)});let s=f(r,"tabs");s&&s.length&&s.forEach(e=>{e.matchMedia.addEventListener("change",function(){d(e.itemsArray,e.matchMedia)}),d(e.itemsArray,e.matchMedia)})}function d(t,f){t.forEach(s=>{let e=s.querySelector("[data-tabs-titles]"),n=s.querySelectorAll("[data-tabs-title]"),m=s.querySelector("[data-tabs-body]"),v=s.querySelectorAll("[data-tabs-item]");n=Array.from(n).filter(l=>l.closest("[data-tabs]")===s),v=Array.from(v).filter(l=>l.closest("[data-tabs]")===s),v.forEach((l,i)=>{f.matches?(m.append(n[i]),m.append(l),s.classList.add("_tab-spoller")):(e.append(n[i]),s.classList.remove("_tab-spoller"))})})}function h(t){let f=t.querySelectorAll("[data-tabs-titles]>*"),s=t.querySelectorAll("[data-tabs-body]>*");const e=t.dataset.tabsIndex,n=g[0]==e;if(n){const m=t.querySelector("[data-tabs-titles]>._tab-active");m&&m.classList.remove("_tab-active")}s.length&&s.forEach((m,v)=>{f[v].setAttribute("data-tabs-title",""),m.setAttribute("data-tabs-item",""),n&&v==g[1]&&f[v].classList.add("_tab-active"),m.hidden=!f[v].classList.contains("_tab-active")})}function c(t){let f=t.querySelectorAll("[data-tabs-title]"),s=t.querySelectorAll("[data-tabs-item]");const e=t.dataset.tabsIndex;function n(v){if(v.hasAttribute("data-tabs-animate"))return v.dataset.tabsAnimate>0?Number(v.dataset.tabsAnimate):500}const m=n(t);if(s.length>0){const v=t.hasAttribute("data-tabs-hash");s=Array.from(s).filter(l=>l.closest("[data-tabs]")===t),f=Array.from(f).filter(l=>l.closest("[data-tabs]")===t),s.forEach((l,i)=>{f[i].classList.contains("_tab-active")?(m?L(l,m):l.hidden=!1,v&&!l.closest(".popup")&&setHash(`tab-${e}-${i}`)):m?w(l,m):l.hidden=!0})}}function u(t){const f=t.target;if(f.closest("[data-tabs-title]")){const s=f.closest("[data-tabs-title]"),e=s.closest("[data-tabs]");if(!s.classList.contains("_tab-active")&&!e.querySelector("._slide")){let n=e.querySelectorAll("[data-tabs-title]._tab-active");n.length&&(n=Array.from(n).filter(m=>m.closest("[data-tabs]")===e)),n.length&&n[0].classList.remove("_tab-active"),s.classList.add("_tab-active"),c(e)}t.preventDefault()}}let w=(t,f=500,s=0)=>{t.classList.contains("_slide")||(t.classList.add("_slide"),t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=f+"ms",t.style.height=`${t.offsetHeight}px`,t.offsetHeight,t.style.overflow="hidden",t.style.height=s?`${s}px`:"0px",t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,window.setTimeout(()=>{t.hidden=!s,s||t.style.removeProperty("height"),t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),s||t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property"),t.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideUpDone",{detail:{target:t}}))},f))},L=(t,f=500,s=0)=>{if(!t.classList.contains("_slide")){t.classList.add("_slide"),t.hidden=t.hidden?!1:null,s&&t.style.removeProperty("height");let e=t.offsetHeight;t.style.overflow="hidden",t.style.height=s?`${s}px`:"0px",t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,t.offsetHeight,t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=f+"ms",t.style.height=e+"px",t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),window.setTimeout(()=>{t.style.removeProperty("height"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property"),t.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideDownDone",{detail:{target:t}}))},f)}}}function ns(){if(location.hash)return location.hash.replace("#","")}
