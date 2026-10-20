/**
 * Qavyo — Payments Capability Page Interactions
 * Provides accessible tender selection, payment completion simulation, and cash change calculator.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Screen Reader Live Announcer
  let liveRegion = document.getElementById('pay-live-announcer');
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'pay-live-announcer';
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

  // 2. Hero Interactive Tender & Payment Simulation
  const tenderButtons = document.querySelectorAll('[data-hero-tender]');
  const heroTakePaymentBtn = document.getElementById('hero-take-payment-btn');
  const heroPaymentCompleteBanner = document.getElementById('hero-payment-complete');
  const heroPaymentSelector = document.getElementById('hero-payment-selector');
  const heroResetBtn = document.getElementById('hero-reset-btn');
  const heroTenderDisplay = document.getElementById('hero-tender-display');

  let currentTender = 'Card';

  tenderButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tenderButtons.forEach((b) => {
        b.setAttribute('aria-pressed', 'false');
        b.classList.remove('is-active');
      });
      btn.setAttribute('aria-pressed', 'true');
      btn.classList.add('is-active');

      currentTender = btn.getAttribute('data-hero-tender');
      if (heroTenderDisplay) {
        heroTenderDisplay.textContent = currentTender;
      }
      announce(`Selected tender method: ${currentTender}`);
    });
  });

  if (heroTakePaymentBtn) {
    heroTakePaymentBtn.addEventListener('click', () => {
      if (heroPaymentSelector) {
        heroPaymentSelector.setAttribute('hidden', '');
      }
      if (heroPaymentCompleteBanner) {
        heroPaymentCompleteBanner.removeAttribute('hidden');
      }
      announce(`Payment of £30.20 completed via ${currentTender}. Order #482 closed and logged to Day Close.`);
    });
  }

  if (heroResetBtn) {
    heroResetBtn.addEventListener('click', () => {
      if (heroPaymentCompleteBanner) {
        heroPaymentCompleteBanner.setAttribute('hidden', '');
      }
      if (heroPaymentSelector) {
        heroPaymentSelector.removeAttribute('hidden');
      }
      announce('Hero payment demonstration reset. Order #482 ready for payment.');
    });
  }

  // 3. Cash Flow Change Calculator (Section 06)
  const cashInput = document.getElementById('cash-received-input');
  const changeDisplay = document.getElementById('cash-change-display');
  const quickCashButtons = document.querySelectorAll('[data-quick-cash]');
  const orderTotal = 30.20;

  function updateChange(amount) {
    const received = parseFloat(amount);
    if (!isNaN(received) && received >= orderTotal) {
      const change = received - orderTotal;
      if (changeDisplay) {
        changeDisplay.textContent = `£${change.toFixed(2)}`;
      }
      announce(`Cash received £${received.toFixed(2)}. Change due £${change.toFixed(2)}.`);
    } else {
      if (changeDisplay) {
        changeDisplay.textContent = '£0.00';
      }
    }
  }

  if (cashInput) {
    cashInput.addEventListener('input', (e) => {
      quickCashButtons.forEach((b) => b.classList.remove('is-active'));
      updateChange(e.target.value);
    });
  }

  quickCashButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      quickCashButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const val = btn.getAttribute('data-quick-cash');
      if (cashInput) {
        cashInput.value = val;
      }
      updateChange(val);
    });
  });
});
