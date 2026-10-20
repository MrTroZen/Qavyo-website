/**
 * Qavyo Intelligence Page Logic
 * Scope: Briefing period tab switching with accessible roving keyboard control
 */

document.addEventListener('DOMContentLoaded', () => {
  initBriefingTabs();
});

/**
 * Handles tab switching for Daily, Weekly, Monthly briefings
 */
function initBriefingTabs() {
  const tabs = Array.from(document.querySelectorAll('[data-briefing-tab]'));
  const panels = Array.from(document.querySelectorAll('[data-briefing-panel]'));

  if (!tabs.length || !panels.length) return;

  const activateTab = (tab, moveFocus = false) => {
    tabs.forEach(item => {
      const isActive = item === tab;
      item.setAttribute('aria-selected', String(isActive));
      item.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach(panel => {
      const match = panel.id === tab.getAttribute('aria-controls');
      panel.hidden = !match;
    });

    if (moveFocus) {
      tab.focus();
    }
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));

    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;

      event.preventDefault();
      let nextIndex = index;

      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;

      activateTab(tabs[nextIndex], true);
    });
  });
}
