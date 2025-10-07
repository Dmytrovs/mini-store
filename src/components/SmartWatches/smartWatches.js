import "./smartWatches.scss";

import smartWatchesHtml from "./smartWatches.html?raw";

export function renderSmartWatches() {
  const container = document.querySelector('#smartWatches');
  if (!container) return;
  container.innerHTML += smartWatchesHtml;
}