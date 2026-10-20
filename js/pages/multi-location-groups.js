/**
 * Qavyo — Multi-Location Interactive Components
 * Provides location selector, stock transfer simulation, accessible announcements, and smooth anchor scrolling.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Live Polite Announcer for Screen Readers
  let liveRegion = document.getElementById('mloc-live-announcer');
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'mloc-live-announcer';
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

  // 2. Location Overview Interactive Selector (Section 03)
  const siteCards = document.querySelectorAll('[data-site-id]');
  const detailTitle = document.getElementById('mloc-detail-title');
  const detailSales = document.getElementById('mloc-detail-sales');
  const detailOrders = document.getElementById('mloc-detail-orders');
  const detailAvg = document.getElementById('mloc-detail-avg');
  const detailFc = document.getElementById('mloc-detail-fc');
  const detailLabour = document.getElementById('mloc-detail-labour');
  const detailManager = document.getElementById('mloc-detail-manager');
  const detailStaff = document.getElementById('mloc-detail-staff');

  const siteData = {
    soho: {
      name: 'Soho (Flagship)',
      sales: '£8,240.00',
      orders: '286',
      avg: '£28.81',
      fc: '26.8%',
      labour: '22.4%',
      manager: 'Daniel Lewis',
      staff: '18 total (14 scheduled today)'
    },
    camden: {
      name: 'Camden',
      sales: '£6,880.00',
      orders: '231',
      avg: '£29.78',
      fc: '29.1% (Review)',
      labour: '24.0%',
      manager: 'Emma Jones',
      staff: '14 total (11 scheduled today)'
    },
    manchester: {
      name: 'Manchester',
      sales: '£7,410.00',
      orders: '248',
      avg: '£29.88',
      fc: '27.4%',
      labour: '23.1%',
      manager: 'James Carter',
      staff: '22 total (17 scheduled today)'
    },
    bristol: {
      name: 'Bristol',
      sales: '£5,960.00',
      orders: '201',
      avg: '£29.65',
      fc: '27.0%',
      labour: '23.0%',
      manager: 'Chloe Miller',
      staff: '16 total (12 scheduled today)'
    }
  };

  siteCards.forEach((card) => {
    card.addEventListener('click', () => {
      const siteId = card.getAttribute('data-site-id');
      const data = siteData[siteId];
      if (!data) return;

      siteCards.forEach((c) => {
        const isSelected = c === card;
        c.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        c.classList.toggle('is-active', isSelected);
      });

      if (detailTitle) detailTitle.textContent = data.name;
      if (detailSales) detailSales.textContent = data.sales;
      if (detailOrders) detailOrders.textContent = data.orders;
      if (detailAvg) detailAvg.textContent = data.avg;
      if (detailFc) detailFc.textContent = data.fc;
      if (detailLabour) detailLabour.textContent = data.labour;
      if (detailManager) detailManager.textContent = data.manager;
      if (detailStaff) detailStaff.textContent = data.staff;

      announce(`Viewing operational summary for ${data.name}`);
    });

    card.addEventListener('keydown', (e) => {
      const cardsArray = Array.from(siteCards);
      const currentIndex = cardsArray.indexOf(card);

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const next = cardsArray[(currentIndex + 1) % cardsArray.length];
        next.focus();
        next.click();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = cardsArray[(currentIndex - 1 + cardsArray.length) % cardsArray.length];
        prev.focus();
        prev.click();
      }
    });
  });

  // 3. Stock Transfer Action Simulation (Section 07)
  const transferBtn = document.getElementById('mloc-transfer-btn');
  const transferStatus = document.getElementById('mloc-transfer-status');
  const camdenStockDisplay = document.getElementById('mloc-camden-stock-val');

  if (transferBtn) {
    transferBtn.addEventListener('click', () => {
      if (transferStatus) {
        transferStatus.textContent = 'Transfer Dispatched ✓';
        transferStatus.className = 'mloc-status-badge mloc-status-badge--success';
      }
      if (camdenStockDisplay) {
        camdenStockDisplay.textContent = '11.1 kg (Replenished)';
        camdenStockDisplay.style.color = 'var(--color-success)';
      }
      transferBtn.setAttribute('disabled', 'true');
      transferBtn.textContent = 'Transfer In Transit';
      announce('Stock transfer dispatched from Bristol to Camden: 8 kg Chicken Breast. Camden inventory position updated to 11.1 kg.');
    });
  }

  // 4. In-page anchor navigation handled natively via html scroll-behavior: smooth
});
