import "./header.scss";

// Підтягуємо HTML як строку 
import headerHtml from "./header.html?raw";



function bodyLock() {
  document.body.style.overflow = 'hidden';
}

function bodyUnlock() {
  document.body.style.overflow = 'auto';
}

function bodyLockToggle() {
  if (document.body.style.overflow === 'hidden') {
    bodyUnlock()
  } else {
    bodyLock()
  }
}



export function renderHeader() {
const container =  document.querySelector("#header");
  if (!container) return;
 container.innerHTML += headerHtml;
  const btns = document.querySelectorAll('.menu__toggle-btn')

  btns.forEach(button => {
    button.addEventListener('click', (event) => {
      event.stopPropagation(); // Зупинити подальшу обробку події
      const subMenu = button.nextElementSibling;
      const expanded = button.getAttribute('aria-expanded') === 'true';

      button.classList.toggle('open');


      //Відкрити поточне підменю
      button.setAttribute('aria-expanded', !expanded);
      subMenu.classList.toggle('open', !expanded);
    });
  });

  // Закрити всі підменю при кліку поза ними
  document.addEventListener('click', () => {
    btns.forEach(button => { 
      button.setAttribute('aria-expanded', 'false');
      button.nextElementSibling.classList.remove('open');
      button.classList.remove('open');
    });
  }); 

  // Логіка менб бургер
    if (document.querySelector(".icon-menu")) {
      document.addEventListener("click", function (e) {
        if (e.target.closest('.icon-menu')) {
          bodyLockToggle();
          document.documentElement.classList.toggle("menu-open");
        }
      });
    };
}




// Прибераю фокус після кліку
const menuItemFocus = document.querySelector(' .menu__item .menu__toggle-btn ');
if (menuItemFocus) {
  menuItemFocus.addEventListener('click', (e) => {
    e.target.blur();
  });
}


