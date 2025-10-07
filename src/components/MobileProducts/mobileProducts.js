import "./mobileProducts.scss";

import mobileProductsHtml from "./mobileProducts.html?raw";

export function rendermobileProducts() {
  const container = document.querySelector('#mobileProducts');
  if (!container) return;
  container.innerHTML += mobileProductsHtml;
}