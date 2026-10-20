/**
 * Qavyo — Inventory & Food Cost Interactive Components
 * Provides recipe toggles, stock table filtering, and smooth navigation.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Live Polite Announcer for Screen Readers
  let liveRegion = document.getElementById('inv-live-announcer');
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'inv-live-announcer';
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

  // 2. Recipe Switcher in Recipes & Costing Section
  const recipeTabs = document.querySelectorAll('[data-recipe-toggle]');
  const recipePanels = document.querySelectorAll('[data-recipe-panel]');

  recipeTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetRecipe = tab.getAttribute('data-recipe-toggle');

      recipeTabs.forEach((t) => {
        const isSelected = t === tab;
        t.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        t.tabIndex = isSelected ? 0 : -1;
      });

      recipePanels.forEach((panel) => {
        if (panel.getAttribute('data-recipe-panel') === targetRecipe) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      });

      announce(`Showing recipe and costing for ${tab.textContent.trim()}`);
    });

    tab.addEventListener('keydown', (e) => {
      const tabsArray = Array.from(recipeTabs);
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

  // 3. Stock Table Filter (All / Low / Healthy)
  const filterBtns = document.querySelectorAll('[data-stock-filter]');
  const stockRows = document.querySelectorAll('[data-stock-row]');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-stock-filter');

      filterBtns.forEach((b) => {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });

      let matchCount = 0;
      stockRows.forEach((row) => {
        const rowStatus = row.getAttribute('data-stock-row');
        if (filter === 'all' || rowStatus === filter) {
          row.style.display = '';
          matchCount++;
        } else {
          row.style.display = 'none';
        }
      });

      announce(`Showing ${matchCount} ingredients with filter: ${btn.textContent.trim()}`);
    });
  });

  // 4. In-page anchor navigation handled natively via html scroll-behavior: smooth
});
