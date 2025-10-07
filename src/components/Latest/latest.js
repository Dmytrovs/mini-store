import "./latest.scss";

import latestHtml from "./latest.html?raw";

export function renderLatest() {
  const container = document.querySelector('#latest');
  if (!container) return;
  container.innerHTML += latestHtml;
}

