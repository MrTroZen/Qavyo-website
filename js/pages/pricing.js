
(() => {
  "use strict";
  const selectors = Array.from(document.querySelectorAll("[data-plan-selector]"));
  const columns = Array.from(document.querySelectorAll("[data-plan-column]"));
  if (!selectors.length || !columns.length) return;
  const activate = (plan) => {
    selectors.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.planSelector === plan)));
    columns.forEach((column) => column.classList.toggle("is-active-plan", column.dataset.planColumn === plan));
  };
  selectors.forEach((button) => button.addEventListener("click", () => activate(button.dataset.planSelector)));
  activate("starter");
})();


