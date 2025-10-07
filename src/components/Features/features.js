import "./features.scss";
import featuresHtml from "./features.html?raw";

export function renderFeatures() {
  const container = document.querySelector('#features');
  if (!container) return;
  container.innerHTML += featuresHtml;
}