(() => {
  "use strict";

  // --------------------------------------------------------------------------
  // Anchor Target Highlighting for Restaurant Capabilities
  // --------------------------------------------------------------------------
  const highlightTarget = () => {
    const hash = window.location.hash;
    if (!hash) {
      return;
    }

    try {
      const target = document.querySelector(hash);
      if (target && target.tagName === "LI") {
        target.classList.add("rst-capability-highlight");
        setTimeout(() => {
          target.classList.remove("rst-capability-highlight");
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
