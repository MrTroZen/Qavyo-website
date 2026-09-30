(() => {
  "use strict";

  const year = String(new Date().getFullYear());

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = year;
  });

  const header = document.querySelector("[data-site-header]");

  if (!header) {
    return;
  }

  const desktopTriggers = [...header.querySelectorAll("[data-dropdown-trigger]")];
  const mobileMenuTrigger = header.querySelector("[data-mobile-menu-trigger]");
  const mobileMenu = header.querySelector("[data-mobile-menu]");
  const mobileAccordionTriggers = [...header.querySelectorAll("[data-mobile-accordion-trigger]")];

  const closeDesktopMenus = (exception = null) => {
    desktopTriggers.forEach((trigger) => {
      if (trigger === exception) {
        return;
      }

      const menu = document.getElementById(trigger.getAttribute("aria-controls"));
      trigger.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    });
  };

  const setDesktopMenu = (trigger, open) => {
    const menu = document.getElementById(trigger.getAttribute("aria-controls"));
    closeDesktopMenus(open ? trigger : null);
    trigger.setAttribute("aria-expanded", String(open));
    menu.hidden = !open;
  };

  desktopTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const shouldOpen = trigger.getAttribute("aria-expanded") !== "true";
      setDesktopMenu(trigger, shouldOpen);
    });

    trigger.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowDown") {
        return;
      }

      event.preventDefault();
      setDesktopMenu(trigger, true);
      const menu = document.getElementById(trigger.getAttribute("aria-controls"));
      menu.querySelector("a")?.focus();
    });
  });

  const closeMobileMenu = ({ restoreFocus = false } = {}) => {
    mobileMenuTrigger.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
    document.body.classList.remove("mobile-menu-open");

    if (restoreFocus) {
      mobileMenuTrigger.focus();
    }
  };

  mobileMenuTrigger.addEventListener("click", () => {
    const shouldOpen = mobileMenuTrigger.getAttribute("aria-expanded") !== "true";
    closeDesktopMenus();
    mobileMenuTrigger.setAttribute("aria-expanded", String(shouldOpen));
    mobileMenu.hidden = !shouldOpen;
    document.body.classList.toggle("mobile-menu-open", shouldOpen);

    if (shouldOpen) {
      mobileMenu.querySelector("button, a")?.focus();
    }
  });

  mobileAccordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const panel = document.getElementById(trigger.getAttribute("aria-controls"));
      const shouldOpen = trigger.getAttribute("aria-expanded") !== "true";

      if (shouldOpen) {
        mobileAccordionTriggers.forEach((otherTrigger) => {
          if (otherTrigger === trigger) {
            return;
          }

          const otherPanel = document.getElementById(otherTrigger.getAttribute("aria-controls"));
          otherTrigger.setAttribute("aria-expanded", "false");
          otherPanel.hidden = true;
        });
      }

      trigger.setAttribute("aria-expanded", String(shouldOpen));
      panel.hidden = !shouldOpen;
    });
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) {
      closeDesktopMenus();
    }
  });

  document.addEventListener("focusin", (event) => {
    if (!header.contains(event.target)) {
      closeDesktopMenus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    const openDesktopTrigger = desktopTriggers.find((trigger) => trigger.getAttribute("aria-expanded") === "true");

    if (openDesktopTrigger) {
      setDesktopMenu(openDesktopTrigger, false);
      openDesktopTrigger.focus();
    }

    if (mobileMenuTrigger.getAttribute("aria-expanded") === "true") {
      closeMobileMenu({ restoreFocus: true });
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 60.0625rem)").matches) {
      closeMobileMenu();
    } else {
      closeDesktopMenus();
    }
  });

  document.querySelectorAll("[data-prototype-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
})();
