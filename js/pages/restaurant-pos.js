(() => {
  "use strict";

  const tabSet = document.querySelector("[data-pos-tabs]");

  if (tabSet) {
    const tabs = [...tabSet.querySelectorAll('[role="tab"]')];
    const panels = [...tabSet.querySelectorAll('[role="tabpanel"]')];

    const activateTab = (nextTab, { moveFocus = false } = {}) => {
      tabs.forEach((tab) => {
        const selected = tab === nextTab;
        tab.setAttribute("aria-selected", String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });

      panels.forEach((panel) => {
        panel.hidden = panel.id !== nextTab.getAttribute("aria-controls");
      });

      if (moveFocus) {
        nextTab.focus();
      }
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activateTab(tab));
      tab.addEventListener("keydown", (event) => {
        let nextIndex = index;

        if (["ArrowRight", "ArrowDown"].includes(event.key)) {
          nextIndex = (index + 1) % tabs.length;
        } else if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
          nextIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = tabs.length - 1;
        } else {
          return;
        }

        event.preventDefault();
        activateTab(tabs[nextIndex], { moveFocus: true });
      });
    });

    const activateLinkedPanel = () => {
      const linkedPanel = panels.find((panel) => `#${panel.id}` === window.location.hash);

      if (linkedPanel) {
        const linkedTab = tabs.find((tab) => tab.getAttribute("aria-controls") === linkedPanel.id);

        if (linkedTab) {
          activateTab(linkedTab);
          window.requestAnimationFrame(() => linkedPanel.scrollIntoView({ block: "start" }));
        }
      }
    };

    activateLinkedPanel();
    window.addEventListener("hashchange", activateLinkedPanel);
  }

  const floorButtons = [...document.querySelectorAll("[data-floor-table]")];
  const floorLabel = document.querySelector("[data-floor-label]");
  const floorStatus = document.querySelector("[data-floor-status]");
  const floorOrder = document.querySelector("[data-floor-order]");
  const floorTotal = document.querySelector("[data-floor-total]");

  floorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      floorButtons.forEach((otherButton) => {
        const selected = otherButton === button;
        otherButton.classList.toggle("is-selected", selected);
        otherButton.setAttribute("aria-pressed", String(selected));
      });

      floorLabel.textContent = button.dataset.table;
      floorStatus.textContent = button.dataset.status;
      floorOrder.textContent = button.dataset.order;
      floorTotal.textContent = button.dataset.total;
    });
  });

  const menuItems = [...document.querySelectorAll("[data-menu-item]")];
  const modifierTitle = document.querySelector("[data-modifier-title]");

  menuItems.forEach((button) => {
    button.addEventListener("click", () => {
      menuItems.forEach((otherButton) => {
        const selected = otherButton === button;
        otherButton.classList.toggle("is-selected", selected);
        otherButton.setAttribute("aria-pressed", String(selected));
      });

      modifierTitle.textContent = button.dataset.menuItem;
    });
  });
})();
