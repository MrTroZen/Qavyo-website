
(() => {
  "use strict";

  const billingSection = document.querySelector("[data-billing-period]");
  const billingToggles = Array.from(document.querySelectorAll("[data-billing-toggle]"));
  const setBillingPeriod = (period) => {
    if (!billingSection || !["monthly", "annual"].includes(period)) return;
    billingSection.dataset.billingPeriod = period;
    document.documentElement.dataset.billingPeriod = period;
    billingToggles.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.billingToggle === period)));
    document.querySelectorAll("[data-monthly-only]").forEach((element) => {
      element.hidden = period !== "monthly";
    });
    document.querySelectorAll("[data-annual-only]").forEach((element) => {
      element.hidden = period !== "annual";
    });
    document.dispatchEvent(new CustomEvent("qavyo:billing-change", { detail: { period } }));
  };
  billingToggles.forEach((button, index) => {
    button.addEventListener("click", () => setBillingPeriod(button.dataset.billingToggle));
    button.addEventListener("keydown", (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const next = billingToggles[(index + direction + billingToggles.length) % billingToggles.length];
      next.focus();
      setBillingPeriod(next.dataset.billingToggle);
    });
  });
  setBillingPeriod("monthly");
})();
