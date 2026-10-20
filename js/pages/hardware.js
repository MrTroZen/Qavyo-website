/**
 * Qavyo — Hardware & Devices Page Interactive Components
 * Provides accessible station explorer in Hero and venue configuration selector.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Screen Reader Live Announcer
  let liveRegion = document.getElementById('hw-live-announcer');
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'hw-live-announcer';
    liveRegion.className = 'sr-only';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    document.body.appendChild(liveRegion);
  }

  function announce(msg) {
    if (liveRegion) {
      liveRegion.textContent = '';
      setTimeout(() => {
        liveRegion.textContent = msg;
      }, 50);
    }
  }

  // 2. Hero Station Explorer Tabs
  const stationTabs = document.querySelectorAll('[data-station-tab]');
  const stationPanels = document.querySelectorAll('[data-station-panel]');

  stationTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-station-tab');

      stationTabs.forEach((t) => {
        const isSelected = t === tab;
        t.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        t.tabIndex = isSelected ? 0 : -1;
        t.classList.toggle('is-active', isSelected);
      });

      stationPanels.forEach((panel) => {
        if (panel.getAttribute('data-station-panel') === target) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      });

      announce(`Viewing hardware role: ${tab.textContent.trim()}`);
    });

    tab.addEventListener('keydown', (e) => {
      const tabsArray = Array.from(stationTabs);
      const currentIndex = tabsArray.indexOf(tab);

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const nextTab = tabsArray[(currentIndex + 1) % tabsArray.length];
        nextTab.focus();
        nextTab.click();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevTab = tabsArray[(currentIndex - 1 + tabsArray.length) % tabsArray.length];
        prevTab.focus();
        prevTab.click();
      } else if (e.key === 'Home') {
        e.preventDefault();
        tabsArray[0].focus();
        tabsArray[0].click();
      } else if (e.key === 'End') {
        e.preventDefault();
        tabsArray[tabsArray.length - 1].focus();
        tabsArray[tabsArray.length - 1].click();
      }
    });
  });

  // 3. Section 10: Restaurant Configuration Selector
  const configTabs = document.querySelectorAll('[data-config-tab]');
  const configPanels = document.querySelectorAll('[data-config-panel]');

  configTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-config-tab');

      configTabs.forEach((t) => {
        const isSelected = t === tab;
        t.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        t.tabIndex = isSelected ? 0 : -1;
        t.classList.toggle('is-active', isSelected);
      });

      configPanels.forEach((panel) => {
        if (panel.getAttribute('data-config-panel') === target) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      });

      announce(`Viewing configuration setup: ${tab.textContent.trim()}`);
    });

    tab.addEventListener('keydown', (e) => {
      const tabsArray = Array.from(configTabs);
      const currentIndex = tabsArray.indexOf(tab);

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const nextTab = tabsArray[(currentIndex + 1) % tabsArray.length];
        nextTab.focus();
        nextTab.click();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevTab = tabsArray[(currentIndex - 1 + tabsArray.length) % tabsArray.length];
        prevTab.focus();
        prevTab.click();
      }
    });
  });
});
