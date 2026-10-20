/**
 * Qavyo — Reporting & Day Close Interactive Components
 * Provides accessible report tabs, day close difference reviewer, export simulation, and smooth anchor scrolling.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Live Polite Announcer for Screen Readers
  let liveRegion = document.getElementById('rep-live-announcer');
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'rep-live-announcer';
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

  // 2. Report Category Tabs (Section 11)
  const reportTabs = document.querySelectorAll('[data-rep-tab]');
  const reportPanels = document.querySelectorAll('[data-rep-panel]');

  reportTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const selected = tab.getAttribute('data-rep-tab');

      reportTabs.forEach((t) => {
        const isSelected = t === tab;
        t.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        t.tabIndex = isSelected ? 0 : -1;
      });

      reportPanels.forEach((panel) => {
        if (panel.getAttribute('data-rep-panel') === selected) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      });

      announce(`Viewing ${tab.textContent.trim()} report view`);
    });

    tab.addEventListener('keydown', (e) => {
      const tabsArray = Array.from(reportTabs);
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

  // 3. Day Close & Reconciliation Controls (Section 05)
  const reviewDiffBtn = document.getElementById('rep-review-diff-btn');
  const explanationBox = document.getElementById('rep-diff-explanation');
  const closeDayBtn = document.getElementById('rep-close-day-btn');
  const closeStatusBadge = document.getElementById('rep-recon-status-badge');

  if (reviewDiffBtn && explanationBox) {
    reviewDiffBtn.addEventListener('click', () => {
      const isHidden = explanationBox.hasAttribute('hidden');
      if (isHidden) {
        explanationBox.removeAttribute('hidden');
        reviewDiffBtn.setAttribute('aria-expanded', 'true');
        announce('Variance explanation displayed: -£4 cash difference reviewed. Coin change rounding noted during dinner service.');
      } else {
        explanationBox.setAttribute('hidden', '');
        reviewDiffBtn.setAttribute('aria-expanded', 'false');
        announce('Variance explanation hidden.');
      }
    });
  }

  if (closeDayBtn) {
    closeDayBtn.addEventListener('click', () => {
      if (closeStatusBadge) {
        closeStatusBadge.textContent = 'Day Closed & Reconciled';
        closeStatusBadge.className = 'rep-status-badge rep-status-badge--success';
      }
      closeDayBtn.setAttribute('disabled', 'true');
      closeDayBtn.textContent = 'Day Closed ✓';
      announce('Day close confirmed. Figures locked and daily archive generated.');
    });
  }

  // 4. Export Report Simulation (Section 12)
  const exportBtn = document.getElementById('rep-export-btn');
  const exportNotice = document.getElementById('rep-export-feedback');

  if (exportBtn && exportNotice) {
    exportBtn.addEventListener('click', () => {
      exportNotice.removeAttribute('hidden');
      exportNotice.textContent = 'Report ready: Sales Summary (1–20 October). Supported reporting data generated for download.';
      announce('Report prepared for download: Sales Summary (1–20 October).');
    });
  }

  // 5. Smooth In-Page Anchor Navigation with Focus Management
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
