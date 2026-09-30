(() => {
  "use strict";

  // --------------------------------------------------------------------------
  // Qavyo Intelligence Signal Themes Tab Switching
  // --------------------------------------------------------------------------
  const tabList = document.querySelector("[data-intel-tablist]");
  if (!tabList) {
    return;
  }

  const tabs = [...tabList.querySelectorAll("[role='tab']")];
  const panels = [...document.querySelectorAll("[data-intel-panel]")];

  const switchTab = (selectedTab) => {
    const targetId = selectedTab.getAttribute("aria-controls");

    tabs.forEach((tab) => {
      const isSelected = tab === selectedTab;
      tab.setAttribute("aria-selected", String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;
    });

    panels.forEach((panel) => {
      panel.hidden = panel.id !== targetId;
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      switchTab(tab);
    });

    tab.addEventListener("keydown", (event) => {
      let targetIndex = null;

      if (event.key === "ArrowRight") {
        targetIndex = (index + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        targetIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (event.key === "Home") {
        targetIndex = 0;
      } else if (event.key === "End") {
        targetIndex = tabs.length - 1;
      }

      if (targetIndex !== null) {
        event.preventDefault();
        tabs[targetIndex].focus();
        switchTab(tabs[targetIndex]);
      }
    });
  });
})();
