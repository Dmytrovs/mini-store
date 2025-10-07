import "./footer.scss";

// Підтягуємо HTML як строку 
import footerHtml from "./footer.html?raw";
import { _slideDown, _slideUp } from "../../../../../Шаблон + документація/flsStartTemplateSeptember/src/js/files/functions";

export function renderFooter() {
 const footerEl = document.querySelector('#footer');
  if (!footerEl) {
    console.warn('Елемент footerEl не знайдено');
    return
  }
  footerEl.innerHTML = footerHtml;

  // Спойлери
  function spollers() {
    const spollersArray = document.querySelectorAll('[data-spollers]');
    if (spollersArray.length > 0) {
      // Подія кліку
      document.addEventListener("click", setSpollerAction);
      // Отримання звичайних спойлерів
      const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
        return !item.dataset.spollers.split(",")[0];
      });
      // Ініціалізація звичайних спойлерів
      if (spollersRegular.length) {
        initSpollers(spollersRegular);
      }
      // Отримання спойлерів з медіа-запитами
      const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
        return item.dataset.spollers.split(",")[0];
      });

      // Створення mdQueriesArray из spollersMedia
      if (spollersMedia.length > 0) {
        const mdQueriesArray = [];
        spollersMedia.forEach(item => {
          const params = item.dataset.spollers;
          const paramsArray = params.split(',');
          const breakpoint = {};
          breakpoint.value = paramsArray[0];
          breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
          breakpoint.item = item;
          mdQueriesArray.push(breakpoint);
        });

        const mediaQueries = mdQueriesArray.map(function (item) {
          return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
        }).filter(function (item, index, self) {
          return self.indexOf(item) === index;
        });

        if (mediaQueries && mediaQueries.length) {
          mediaQueries.forEach(mdQueriesItem => {
            const paramsArray = mdQueriesItem.split(',');
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);

            const itemsArray = mdQueriesArray.filter(function (item) {
              return item.value === mediaBreakpoint && item.type === mediaType;
            });

            // Подія
            matchMedia.addEventListener("change", function () {
              initSpollers(itemsArray, matchMedia);
            });
            initSpollers(itemsArray, matchMedia);
          });
        }
      }

      // Ініціалізація
      function initSpollers(spollersArray, matchMedia = false) {
        spollersArray.forEach(spollersBlock => {
          spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
          if (matchMedia && matchMedia.matches || !matchMedia) {
            spollersBlock.classList.add('_spoller-init');
            initSpollerBody(spollersBlock);
          } else {
            spollersBlock.classList.remove('_spoller-init');
            initSpollerBody(spollersBlock, false);
          }
        });
      }

      // Робота з контентом
      function initSpollerBody(spollersBlock, hideSpollerBody = true) {
        let spollerItems = spollersBlock.querySelectorAll('details');
        if (spollerItems.length) {
          spollerItems.forEach(spollerItem => {
            let spollerTitle = spollerItem.querySelector('summary');
            if (hideSpollerBody) {
              spollerTitle.removeAttribute('tabindex');
              if (!spollerItem.hasAttribute('data-open')) {
                spollerItem.open = false;
                spollerTitle.nextElementSibling.hidden = true;
              } else {
                spollerTitle.classList.add('_spoller-active');
                spollerItem.open = true;
              }
            } else {
              spollerTitle.setAttribute('tabindex', '-1');
              spollerTitle.classList.remove('_spoller-active');
              spollerItem.open = true;
              spollerTitle.nextElementSibling.hidden = false;
            }
          });
        }
      }

      function setSpollerAction(e) {
        const el = e.target;
        if (el.closest('summary') && el.closest('[data-spollers]')) {
          e.preventDefault();
          if (el.closest('[data-spollers]').classList.contains('_spoller-init')) {
            const spollerTitle = el.closest('summary');
            const spollerBlock = spollerTitle.closest('details');
            const spollersBlock = spollerTitle.closest('[data-spollers]');
            const oneSpoller = spollersBlock.hasAttribute('data-one-spoller');
            const scrollSpoller = spollerBlock.hasAttribute('data-spoller-scroll');
            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
            if (!spollersBlock.querySelectorAll('._slide').length) {
              if (oneSpoller && !spollerBlock.open) {
                hideSpollersBody(spollersBlock);
              }
              !spollerBlock.open ? spollerBlock.open = true : setTimeout(() => {
                spollerBlock.open = false
              }, spollerSpeed);
              spollerTitle.classList.toggle('_spoller-active');
              _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
              if (scrollSpoller && spollerTitle.classList.contains('_spoller-active')) {
                const scrollSpollerValue = spollerBlock.dataset.spollerScroll;
                const scrollSpollerOffset = +scrollSpollerValue ? +scrollSpollerValue : 0;
                const scrollSpollerNoHeader = spollerBlock.hasAttribute('data-spoller-scroll-noheader') ? document.querySelector('.header').offsetHeight : 0;
                window.scrollTo(
                  {
                    top: spollerBlock.offsetTop - (scrollSpollerOffset + scrollSpollerNoHeader),
                    behavior: "smooth",
                  }
                );
              }
            }
          }
        }

        // Закриття при кліку поза спойлером
        if (!el.closest('[data-spollers]')) {
          const spollersClose = document.querySelectorAll('[data-spoller-close]');
          if (spollersClose.length) {
            spollersClose.forEach(spollerClose => {
              const spollersBlock = spollerClose.closest('[data-spollers]');
              const spollerCloseBlock = spollerClose.parentNode;
              if (spollersBlock.classList.contains('_spoller-init')) {
                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                spollerClose.classList.remove('_spoller-active');
                _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                setTimeout(() => {
                  spollerCloseBlock.open = false
                }, spollerSpeed);
              }
            });
          }
        }
      }

      function hideSpollersBody(spollersBlock) {
        const spollerActiveBlock = spollersBlock.querySelector('details[open]');
        if (spollerActiveBlock && !spollersBlock.querySelectorAll('._slide').length) {
          const spollerActiveTitle = spollerActiveBlock.querySelector('summary');
          const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
          spollerActiveTitle.classList.remove('_spoller-active');
          _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
          setTimeout(() => {
            spollerActiveBlock.open = false
          }, spollerSpeed);
        }
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
        window.setTimeout(() => {
          target.hidden = !showmore ? true : false;
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

  spollers()

  // Прибераю фокус після кліку
  const spollersFocus = document.querySelector('[data-spollers]');
  if (spollersFocus) {
    spollersFocus.addEventListener('click', (e) => {
      e.target.blur();
    });
  }
}


































// function spollers() {
//   const media = window.matchMedia("(max-width: 767.98px)");

//   media.addEventListener("change", () => initSpollers(media));
//   initSpollers(media)

//   function initSpollers(matchMedia) {
//     if (matchMedia.matches) {
//       // Мобільний режим
//       document.addEventListener("click", setSpollerAction);
//       document.querySelectorAll("[data-spollers] details").forEach(spoller => {
//         if (!spoller.hasAttribute("data-open")) {
//           spoller.open = false
//           if (spoller.querySelector("summary").nextElementSibling) {
//             spoller.querySelector("summary").nextElementSibling.hidden = true;
//           }
//         }
//       });
//     } else {
//       // декстоп завжди відкриті
//       document.removeEventListener("click", setSpollerAction);
//       document.querySelectorAll("[data-spollers] details").forEach(spoller => {
//         spoller.open = true;
//         if (spoller.querySelector("summary").nextElementSibling) {
//           spoller.querySelector("summary").nextElementSibling.hidden = false;
//         }
//       })
//     }
//   }
  
//   const _slideUp = (target, duration = 500) => {
//     if (!target.classList.contains('_slide')) {
//       target.classList.add('_slide');
//       target.style.transitionProperty = 'height, margin, padding';
//       target.style.transitionDuration = duration + 'ms';
//       target.style.heigth = target.offsetHeight + 'px';
//       target.offsetHeight;
//       target.style.overflow = 'hidden';
//       target.style.heigth = 0;
//       target.style.paddingTop = 0;
//       target.style.paddingBottom = 0;
//       target.style.marginTop = 0;
//       target.style.marginBottom = 0;
//       window.setTimeout(() => {
//         target.hidden = true;
//         target.style.removeProperty('height');
//         target.style.removeProperty('padding-top');
//         target.style.removeProperty('padding-bottom');
//         target.style.removeProperty('margin-top');
//         target.style.removeProperty('margin-bottom');
//         target.style.removeProperty('overflow');
//         target.style.removeProperty('transition-duration');
//         target.style.removeProperty('transition-property');
//         target.style.remove('slide');
//       }, duration)
//     }
//   };

//   const _slideDown = (target, duration = 500) => {
//     if (!target.classList.contains('_slide')) {
//       target.classList.add('_slide');
//       target.hidden = false;
//       let height = target.offsetHeight;
//       target.style.overflow = 'hidden';
//       target.style.height = 0;
//       target.style.paddingTop = 0;
//       target.style.paddingBottom = 0;
//       target.style.marginTop = 0;
//       target.style.marginBottom = 0;
//       target.offsetHeight;
//       target.style.transitionProperty = 'height, margin, padding';
//       target.style.transitionDuration = duration + 'ms';
//       target.style.height = height + 'px';
//       target.style.removeProperty('padding-top');
//       target.style.removeProperty('padding-bottom');
//       target.style.removeProperty('margin-top');
//       target.style.removeProperty('margin-bottom');
//       window.setTimeout(()=> {
//         target.style.removeProperty('height');
//         target.style.removeProperty('overflow');
//         target.style.removeProperty('transition-duration');
//         target.style.removeProperty('transition-property');
//       })
//     }
//   }

  

//   function setSpollerAction(e) {
//     const el = e.target;
//     // Клік по summary
//     if (el.closest("summary") && el.closest("[data-spollers]")) {
//       e.preventDefault()
//       const spollerTitle = el.closest("summary");
//       const spollerBlock = spollerTitle.closest("details");
//       const spollerSpeed = 500;

//       if(!spollerBlock.open) {
//         spollerBlock.open = true;
//         _slideDown(spollerTitle.nextElementSibling, spollerSpeed);
//         spollerTitle.classList.add("_spoller-active");
//       } else {
//         _slideUp(spollerTitle.nextElementSibling, spollerSpeed);
//         setTimeout(() => {
//           spollerBlock.open = false;
//         }, spollerSpeed)
//       }
//     }

//    else if (!el.closest("[data-spollers]")) {
//       document.querySelectorAll("[data-spollers] details[open]").forEach(spoller => {
//         if (!spoller.hasAttribute("data-open")) {
//           const spollerTitle = spoller.querySelector("summary");
//           const spollerSpeed = 500;
//           _slideUp(spollerTitle.nextElementSibling, spollerSpeed);
//           setTimeout(() => { spoller.open = false }, spollerSpeed);
//           spollerTitle.classList.remove("_spoller-active")
//         }
//       })
//     }
//   }

// }

// spollers()
