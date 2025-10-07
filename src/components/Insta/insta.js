import "./insta.scss";

import instaHtml from "./insta.html?raw";

export function renderInsta() {
    const container = document.querySelector('#insta');
    if (!container) return;
  container.innerHTML += instaHtml;
}