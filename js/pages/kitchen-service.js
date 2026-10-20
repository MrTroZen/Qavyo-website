(() => {
  "use strict";

  // Interactive ticket action demo in KDS
  const actionButtons = [...document.querySelectorAll("[data-kds-action]")];

  actionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const ticket = btn.closest(".kds-ticket");
      if (!ticket) return;

      const currentState = btn.dataset.kdsAction;
      if (currentState === "start") {
        btn.dataset.kdsAction = "ready";
        btn.textContent = "Bump to Ready";
        btn.classList.remove("kds-btn-action");
        btn.classList.add("kds-btn-action--ready");

        const timer = ticket.querySelector(".kds-timer");
        if (timer) {
          timer.textContent = "Prep Started";
        }
      } else if (currentState === "ready") {
        btn.textContent = "Completed ✓";
        btn.disabled = true;
        btn.style.opacity = "0.6";

        const timer = ticket.querySelector(".kds-timer");
        if (timer) {
          timer.textContent = "Pass Ready";
        }
      }
    });
  });

  // Smooth hash link activation
  const handleHash = () => {
    const hash = window.location.hash;
    if (!hash) return;
    const target = document.querySelector(hash);
    if (target) {
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ block: "start", behavior: "smooth" });
      });
    }
  };

  window.addEventListener("hashchange", handleHash);
})();
