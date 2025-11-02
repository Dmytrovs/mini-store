import "@scss/main.scss";
import "@scss/_common.scss";
import "@scss/_about.scss";
import "@scss/_shop.scss";
import "@scss/_product.scss";
import "@scss/_cart.scss";
import "@scss/_checkout.scss";
import "@scss/_blog.scss";
import "@scss/_blog-post.scss";
import "@scss/_contact.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';


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
initQuantityCounter();
tabs();
customSelect();

AOS.init();



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

playBtn.addEventListener("click", () => {
  playBlock.classList.add("active");
  const url = new URL(iframe.src)
  url.searchParams.set('autoplay', '1');
  iframe.src = url.toString()
});

//========================================================================================================================================================
//Counter actions-summary__quantity

function initQuantityCounter() {
  document.querySelectorAll(".quantity").forEach(quantity => {
    const input = quantity.querySelector(".quantity__input");

    quantity.addEventListener("click", (e) => {
      const actionBtn = e.target.closest("[data-action]");
      if (!actionBtn) return;
      const action = actionBtn.dataset.action
      let currentValue = parseInt(input.value);
      if (isNaN(currentValue)) currentValue = 1;

      if (action === "increase") {
        input.value = currentValue + 1;
      }
      if (action === "decrease") {
        input.value = Math.max(1, currentValue - 1);
      }
    })
  })
}


// Модуль роботи з табами =======================================================================================================================================================================================================================
function tabs() {
  const tabs = document.querySelectorAll('[data-tabs]');
  let tabsActiveHash = [];

  if (tabs.length > 0) {
    const hash = getHash();
    if (hash && hash.startsWith('tab-')) {
      tabsActiveHash = hash.replace('tab-', '').split('-');
    }
    tabs.forEach((tabsBlock, index) => {
      tabsBlock.classList.add('_tab-init');
      tabsBlock.setAttribute('data-tabs-index', index);
      tabsBlock.addEventListener("click", setTabsAction);
      initTabs(tabsBlock);
    });
    function dataMediaQueries(array, dataSetValue) {
      const mediaArray = Array.from(array).filter(item => item.dataset[dataSetValue]);
      const breakpoints = {};

      mediaArray.forEach(item => {
        const breakpoint = item.dataset[dataSetValue];
        if (!breakpoints[breakpoint]) {
          breakpoints[breakpoint] = [];
        }
        breakpoints[breakpoint].push(item);
      });

      return Object.entries(breakpoints).map(([breakpoint, itemsArray]) => {
        const matchMedia = window.matchMedia(`(max-width: ${breakpoint}px)`);
        return { itemsArray, matchMedia };
      });
    }



    // Отримання слойлерів з медіа-запитами
    let mdQueriesArray = dataMediaQueries(tabs, "tabs");
    if (mdQueriesArray && mdQueriesArray.length) {
      mdQueriesArray.forEach(mdQueriesItem => {
        // Подія
        mdQueriesItem.matchMedia.addEventListener("change", function () {
          setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        });
        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);

      });
    }
  }
  // Встановлення позицій заголовків
  function setTitlePosition(tabsMediaArray, matchMedia) {
    tabsMediaArray.forEach(tabsMediaItem => {
      let tabsTitles = tabsMediaItem.querySelector('[data-tabs-titles]');
      let tabsTitleItems = tabsMediaItem.querySelectorAll('[data-tabs-title]');
      let tabsContent = tabsMediaItem.querySelector('[data-tabs-body]');
      let tabsContentItems = tabsMediaItem.querySelectorAll('[data-tabs-item]');

      tabsTitleItems = Array.from(tabsTitleItems).filter(item => item.closest('[data-tabs]') === tabsMediaItem);
      tabsContentItems = Array.from(tabsContentItems).filter(item => item.closest('[data-tabs]') === tabsMediaItem);

      tabsContentItems.forEach((tabsContentItem, index) => {
        if (matchMedia.matches) {
          tabsContent.append(tabsTitleItems[index]);
          tabsContent.append(tabsContentItem);
          tabsMediaItem.classList.add('_tab-spoller');
        } else {
          tabsTitles.append(tabsTitleItems[index]);
          tabsMediaItem.classList.remove('_tab-spoller');
        }
      });
    });
  }

  // Робота з контентом
  function initTabs(tabsBlock) {
    let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-titles]>*');
    let tabsContent = tabsBlock.querySelectorAll('[data-tabs-body]>*');
    const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
    const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;

    if (tabsActiveHashBlock) {
      const tabsActiveTitle = tabsBlock.querySelector('[data-tabs-titles]>._tab-active');
      tabsActiveTitle ? tabsActiveTitle.classList.remove('_tab-active') : null;
    }
    if (tabsContent.length) {
      tabsContent.forEach((tabsContentItem, index) => {
        tabsTitles[index].setAttribute('data-tabs-title', '');
        tabsContentItem.setAttribute('data-tabs-item', '');
        tabsContentItem.hidden = true;
        if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
          tabsTitles[index].classList.add('_tab-active');
          tabsTitles[index].classList.add('_tab-animated');
        }


        tabsContentItem.hidden = !tabsTitles[index].classList.contains('_tab-active');
      });

    }


  }
  function setTabsStatus(tabsBlock) {
    let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-title]');
    let tabsContent = tabsBlock.querySelectorAll('[data-tabs-item]');
    const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
    function isTabsAnamate(tabsBlock) {
      if (tabsBlock.hasAttribute('data-tabs-animate')) {
        return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
      }
    }
    const tabsBlockAnimate = isTabsAnamate(tabsBlock);
    if (tabsContent.length > 0) {
      const isHash = tabsBlock.hasAttribute('data-tabs-hash');
      tabsContent = Array.from(tabsContent).filter(item => item.closest('[data-tabs]') === tabsBlock);
      tabsTitles = Array.from(tabsTitles).filter(item => item.closest('[data-tabs]') === tabsBlock);
      tabsContent.forEach((tabsContentItem, index) => {
        if (tabsTitles[index].classList.contains('_tab-active')) {
          if (tabsBlockAnimate) {
            _slideDown(tabsContentItem, tabsBlockAnimate);
          } else {
            tabsContentItem.hidden = false;
          }
          if (isHash && !tabsContentItem.closest('.popup')) {
            setHash(`tab-${tabsBlockIndex}-${index}`);
          }
        } else {
          if (tabsBlockAnimate) {
            _slideUp(tabsContentItem, tabsBlockAnimate);
          } else {
            tabsContentItem.hidden = true;
          }
        }
      });
    }
  }
  function setTabsAction(e) {
    const el = e.target;
    if (el.closest('[data-tabs-title]')) {
      const tabTitle = el.closest('[data-tabs-title]');
      const tabsBlock = tabTitle.closest('[data-tabs]');
      if (!tabTitle.classList.contains('_tab-active') && !tabsBlock.querySelector('._slide')) {
        let tabActiveTitle = tabsBlock.querySelectorAll('[data-tabs-title]._tab-active');
        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter(item => item.closest('[data-tabs]') === tabsBlock) : null;
        tabActiveTitle.length ? tabActiveTitle[0].classList.remove('_tab-active') : null;
        tabTitle.classList.add('_tab-active');
        tabTitle.classList.add('_tab-animated');

        setTabsStatus(tabsBlock);
        if (isSpoller) {
          const onSlideDone = (event) => {
            if (event.detail.target.closest('[data-tabs]') === tabsBlock) {
              const rect = tabTitle.getBoundingClientRect();
              const offset = window.scrollY + rect.top - 20;

              window.scrollTo({
                top: offset,
                behavior: 'smooth'
              });

              document.removeEventListener('slideDownDone', onSlideDone);
            }
          };
          document.addEventListener('slideDownDone', onSlideDone);
        }
      }
      e.preventDefault();
    }
  }

  let _slideUp = (target, duration = 500, showmore = 0) => {
    if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = `${target.offsetHeight}px`;
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = showmore ? `${showmore}px` : `0px`;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.style.position = 'absolute';
      target.style.visibility = 'hidden';

      window.setTimeout(() => {
        target.hidden = !showmore ? true : false;
        target.style.removeProperty('position');
        target.style.removeProperty('visibility');

        !showmore ? target.style.removeProperty('height') : null;
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        !showmore ? target.style.removeProperty('overflow') : null;
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
        // Створюємо подію 
        document.dispatchEvent(new CustomEvent("slideUpDone", {
          detail: {
            target: target
          }
        }));
      }, duration);
    }
  }
  let _slideDown = (target, duration = 500, showmore = 0) => {
    if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      target.hidden = target.hidden ? false : null;
      showmore ? target.style.removeProperty('height') : null;
      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = showmore ? `${showmore}px` : `0px`;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + 'ms';
      target.style.height = height + 'px';
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
        // Створюємо подію
        document.dispatchEvent(new CustomEvent("slideDownDone", {
          detail: {
            target: target
          }
        }));
      }, duration);
    }
  }
  let _slideToggle = (target, duration = 500) => {
    if (target.hidden) {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  }
}

// Отримання хешу на адресі сайту
function getHash() {
  if (location.hash) { return location.hash.replace('#', ''); }
}

//========================================================================================================================================================
//Custom Select

function customSelect() {
  document.querySelectorAll('[data-select]').forEach(select => {
    const trigger = select.querySelector('[data-select-trigger]');
    const list = select.querySelector('[data-select-list]');
    const input = select.querySelector('[data-select-input]');

    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', !expanded);
      list.hidden = expanded;
    });

    list.querySelectorAll('.custom-select__option').forEach(option => {
      option.addEventListener('click', () => {
        trigger.textContent = option.textContent;
        input.value = option.dataset.value;
        list.hidden = true;
        trigger.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', e => {
      if (!select.contains(e.target)) {
        list.hidden = true;
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

}

