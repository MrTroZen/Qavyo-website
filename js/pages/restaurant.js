(() => {
  "use strict";

  const highlightTarget = () => {
    const hash = window.location.hash;
    if (!hash) {
      return;
    }

    try {
      const target = document.querySelector(hash);
      const capability = target?.closest("li[id], article[id]");
      if (capability) {
        capability.classList.add("rst-capability-highlight");
        setTimeout(() => {
          capability.classList.remove("rst-capability-highlight");
        }, 2400);
      }
    } catch {
      // Ignore invalid selectors
    }
  };

  window.addEventListener("hashchange", highlightTarget);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", highlightTarget);
  } else {
    highlightTarget();
  }
})();
