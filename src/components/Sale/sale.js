import "./sale.scss";

import saleHtml from "./sale.html?raw";

export function renderSale() {
  const container = document.querySelector('#sale');
  if (!container) return;
  container.innerHTML += saleHtml;
}