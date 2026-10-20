/**
 * Qavyo — HR, Payroll & Team Interactive Components
 * Provides schedule day selector, accessible announcements, and smooth in-page navigation.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Live Polite Announcer for Screen Readers
  let liveRegion = document.getElementById('team-live-announcer');
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'team-live-announcer';
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

  // 2. Schedule Day Tab Selector
  const dayTabs = document.querySelectorAll('[data-day-tab]');
  const dayPanels = document.querySelectorAll('[data-day-panel]');

  dayTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const selectedDay = tab.getAttribute('data-day-tab');

      dayTabs.forEach((t) => {
        const isSelected = t === tab;
        t.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        t.tabIndex = isSelected ? 0 : -1;
      });

      dayPanels.forEach((panel) => {
        if (panel.getAttribute('data-day-panel') === selectedDay) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      });

      announce(`Viewing restaurant schedule for ${tab.textContent.trim()}`);
    });

    tab.addEventListener('keydown', (e) => {
      const tabsArray = Array.from(dayTabs);
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

  // 3. Smooth In-Page Anchor Navigation
  const localLinks = document.querySelectorAll('a[href^="#"]');
  localLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#' || href === '#prototype-navigation') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        target.focus({ preventScroll: true });
        if (document.activeElement !== target) {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      }
    });
  });
});
