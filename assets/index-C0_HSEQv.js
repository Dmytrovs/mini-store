(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))f(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const b of c.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&f(b)}).observe(document,{childList:!0,subtree:!0});function p(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function f(r){if(r.ep)return;r.ep=!0;const c=p(r);fetch(r.href,c)}})();const x=`<header class="header">\r
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
</header>`;function A(){document.body.style.overflow="hidden"}function P(){document.body.style.overflow="auto"}function E(){document.body.style.overflow==="hidden"?P():A()}function T(){document.querySelector("#header").innerHTML+=x;const d=document.querySelectorAll(".menu__toggle-btn");d.forEach(l=>{l.addEventListener("click",p=>{p.stopPropagation();const f=l.nextElementSibling,r=l.getAttribute("aria-expanded")==="true";l.classList.toggle("open"),l.setAttribute("aria-expanded",!r),f.classList.toggle("open",!r)})}),document.addEventListener("click",()=>{d.forEach(l=>{l.setAttribute("aria-expanded","false"),l.nextElementSibling.classList.remove("open"),l.classList.remove("open")})}),document.querySelector(".icon-menu")&&document.addEventListener("click",function(l){l.target.closest(".icon-menu")&&(E(),document.documentElement.classList.toggle("menu-open"))})}T();const q=document.querySelector(" .menu__item .menu__toggle-btn ");q.addEventListener("click",d=>{d.target.blur()});const w=`<footer class="footer">\r
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
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">Home</a></li>\r
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
`;function H(){document.querySelector("#footer").innerHTML+=w}H();function D(){const d=document.querySelectorAll("[data-spollers]");if(d.length>0){let a=function(i,o=!1){i.forEach(n=>{n=o?n.item:n,o&&o.matches||!o?(n.classList.add("_spoller-init"),v(n)):(n.classList.remove("_spoller-init"),v(n,!1))})},v=function(i,o=!0){let n=i.querySelectorAll("details");n.length&&n.forEach(s=>{let t=s.querySelector("summary");o?(t.removeAttribute("tabindex"),s.hasAttribute("data-open")?(t.classList.add("_spoller-active"),s.open=!0):(s.open=!1,t.nextElementSibling.hidden=!0)):(t.setAttribute("tabindex","-1"),t.classList.remove("_spoller-active"),s.open=!0,t.nextElementSibling.hidden=!1)})},g=function(i){const o=i.target;if(o.closest("summary")&&o.closest("[data-spollers]")&&(i.preventDefault(),o.closest("[data-spollers]").classList.contains("_spoller-init"))){const n=o.closest("summary"),s=n.closest("details"),t=n.closest("[data-spollers]"),u=t.hasAttribute("data-one-spoller"),_=s.hasAttribute("data-spoller-scroll"),y=t.dataset.spollersSpeed?parseInt(t.dataset.spollersSpeed):500;if(!t.querySelectorAll("._slide").length&&(u&&!s.open&&S(t),s.open?setTimeout(()=>{s.open=!1},y):s.open=!0,n.classList.toggle("_spoller-active"),f(n.nextElementSibling,y),_&&n.classList.contains("_spoller-active"))){const h=s.dataset.spollerScroll,k=+h?+h:0,L=s.hasAttribute("data-spoller-scroll-noheader")?document.querySelector(".header").offsetHeight:0;window.scrollTo({top:s.offsetTop-(k+L),behavior:"smooth"})}}if(!o.closest("[data-spollers]")){const n=document.querySelectorAll("[data-spoller-close]");n.length&&n.forEach(s=>{const t=s.closest("[data-spollers]"),u=s.parentNode;if(t.classList.contains("_spoller-init")){const _=t.dataset.spollersSpeed?parseInt(t.dataset.spollersSpeed):500;s.classList.remove("_spoller-active"),l(s.nextElementSibling,_),setTimeout(()=>{u.open=!1},_)}})}},S=function(i){const o=i.querySelector("details[open]");if(o&&!i.querySelectorAll("._slide").length){const n=o.querySelector("summary"),s=i.dataset.spollersSpeed?parseInt(i.dataset.spollersSpeed):500;n.classList.remove("_spoller-active"),l(n.nextElementSibling,s),setTimeout(()=>{o.open=!1},s)}};var r=a,c=v,b=g,O=S;document.addEventListener("click",g);const e=Array.from(d).filter(function(i,o,n){return!i.dataset.spollers.split(",")[0]});e.length&&a(e);const m=Array.from(d).filter(function(i,o,n){return i.dataset.spollers.split(",")[0]});if(m.length>0){const i=[];m.forEach(n=>{const t=n.dataset.spollers.split(","),u={};u.value=t[0],u.type=t[1]?t[1].trim():"max",u.item=n,i.push(u)});const o=i.map(function(n){return"("+n.type+"-width: "+n.value+"px),"+n.value+","+n.type}).filter(function(n,s,t){return t.indexOf(n)===s});o&&o.length&&o.forEach(n=>{const s=n.split(","),t=s[1],u=s[2],_=window.matchMedia(s[0]),y=i.filter(function(h){return h.value===t&&h.type===u});_.addEventListener("change",function(){a(y,_)}),a(y,_)})}}let l=(e,m=500,a=0)=>{e.classList.contains("_slide")||(e.classList.add("_slide"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=m+"ms",e.style.height=`${e.offsetHeight}px`,e.offsetHeight,e.style.overflow="hidden",e.style.height=a?`${a}px`:"0px",e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout(()=>{e.hidden=!a,a||e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),a||e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideUpDone",{detail:{target:e}}))},m))},p=(e,m=500,a=0)=>{if(!e.classList.contains("_slide")){e.classList.add("_slide"),e.hidden=e.hidden?!1:null,a&&e.style.removeProperty("height");let v=e.offsetHeight;e.style.overflow="hidden",e.style.height=a?`${a}px`:"0px",e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=m+"ms",e.style.height=v+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideDownDone",{detail:{target:e}}))},m)}},f=(e,m=500)=>e.hidden?p(e,m):l(e,m)}D();const C=document.querySelector("[data-spollers]");C.addEventListener("click",d=>{d.target.blur()});
