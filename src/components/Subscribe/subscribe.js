import "./subscribe.scss";

import subscribeHtml from "./subscribe.html?raw";

export function renderSubscribe() {
  const container = document.querySelector('#subscribe');
  if (!container) return;
  container.innerHTML += subscribeHtml;
}