(() => {
  "use strict";

  const tabs = Array.from(document.querySelectorAll("[data-moment-tab]"));
  const panels = Array.from(document.querySelectorAll("[data-moment-panel]"));
  const activeBadge = document.getElementById("sms-active-moment-badge");

  if (!tabs.length || !panels.length) {
    return;
  }

  const activateTab = (selectedTab, moveFocus = false) => {
    tabs.forEach((tab) => {
      const isSelected = tab === selectedTab;
      tab.setAttribute("aria-selected", String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;
      if (isSelected) {
        tab.classList.add("is-active");
      } else {
        tab.classList.remove("is-active");
      }
    });

    const targetPanelId = selectedTab.getAttribute("aria-controls");
    panels.forEach((panel) => {
      const isTarget = panel.id === targetPanelId;
      panel.hidden = !isTarget;
      if (isTarget) {
        panel.classList.add("is-active");
      } else {
        panel.classList.remove("is-active");
      }
    });

    if (activeBadge) {
      const titleElem = selectedTab.querySelector(".sms-moment-tab__title");
      if (titleElem) {
        activeBadge.textContent = titleElem.textContent.trim();
      }
    }

    if (moveFocus) {
      selectedTab.focus();
    }
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
        return;
      }

      event.preventDefault();
      let nextIndex = index;

      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        nextIndex = (index + 1) % tabs.length;
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      }
      if (event.key === "Home") {
        nextIndex = 0;
      }
      if (event.key === "End") {
        nextIndex = tabs.length - 1;
      }

      activateTab(tabs[nextIndex], true);
    });
  });
})();
