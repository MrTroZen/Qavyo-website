/**
 * Delivery Operations Capability Page Logic
 * Scope: Interactive order intake switching, detail view updates, and handoff state demonstration
 */

document.addEventListener('DOMContentLoaded', () => {
  initOrderIntakeSwitcher();
  initHandoffDemo();
});

/**
 * Order details data mapped by order ID
 */
const ORDER_DATA = {
  '342': {
    id: '#342',
    channel: 'Delivery',
    channelBadgeClass: 'del-badge--new',
    customer: 'Sarah Mitchell',
    items: [
      { name: '2 × Chicken Burger', notes: ['No onion', 'Extra cheese'], price: '£19.00' },
      { name: '1 × Fries', notes: [], price: '£3.80' },
      { name: '2 × Cola', notes: [], price: '£5.60' }
    ],
    total: '£28.40',
    time: '18:22',
    status: 'Ready for Handoff',
    statusBadgeClass: 'del-badge--ready',
    destination: 'Delivery Fulfilment (Direct)'
  },
  '343': {
    id: '#343',
    channel: 'Dine-in',
    channelBadgeClass: 'del-badge--prep',
    customer: 'Table 4 (Walk-in)',
    items: [
      { name: '2 × Sirloin Steak', notes: ['Medium rare'], price: '£36.00' },
      { name: '1 × Caesar Salad', notes: [], price: '£6.60' }
    ],
    total: '£42.60',
    time: '18:28',
    status: 'Preparing in Kitchen',
    statusBadgeClass: 'del-badge--prep',
    destination: 'Table Service'
  },
  '344': {
    id: '#344',
    channel: 'Delivery',
    channelBadgeClass: 'del-badge--new',
    customer: 'Daniel Clarke',
    items: [
      { name: '1 × Margherita Pizza', notes: ['Extra crispy'], price: '£14.50' },
      { name: '1 × Garlic Bread', notes: [], price: '£5.40' }
    ],
    total: '£19.90',
    time: '18:32',
    status: 'New Order Received',
    statusBadgeClass: 'del-badge--new',
    destination: 'Delivery Fulfilment (Direct)'
  },
  '345': {
    id: '#345',
    channel: 'QR Order',
    channelBadgeClass: 'del-badge--prep',
    customer: 'Table 9 (Self-service)',
    items: [
      { name: '1 × Beef Burger', notes: [], price: '£12.50' },
      { name: '1 × Halloumi Fries', notes: [], price: '£6.20' },
      { name: '2 × Craft Soda', notes: [], price: '£12.50' }
    ],
    total: '£31.20',
    time: '18:35',
    status: 'Preparing in Kitchen',
    statusBadgeClass: 'del-badge--prep',
    destination: 'Table Service'
  }
};

/**
 * Handles switching between orders in the intake list
 */
function initOrderIntakeSwitcher() {
  const orderButtons = document.querySelectorAll('[data-del-order-id]');
  const detailOrderId = document.getElementById('del-detail-id');
  const detailCustomer = document.getElementById('del-detail-customer');
  const detailChannel = document.getElementById('del-detail-channel');
  const detailTotal = document.getElementById('del-detail-total');
  const detailTime = document.getElementById('del-detail-time');
  const detailItemsContainer = document.getElementById('del-detail-items');
  const detailStatusBadge = document.getElementById('del-detail-status-badge');

  if (!orderButtons.length || !detailOrderId) return;

  orderButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const orderId = btn.getAttribute('data-del-order-id');
      const order = ORDER_DATA[orderId];
      if (!order) return;

      // Update active button state
      orderButtons.forEach(b => {
        b.classList.remove('is-selected');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-selected');
      btn.setAttribute('aria-selected', 'true');

      // Update detail panel
      detailOrderId.textContent = `ORDER ${order.id}`;
      detailCustomer.textContent = order.customer;
      detailChannel.textContent = order.channel;
      detailTotal.textContent = order.total;
      detailTime.textContent = order.time;

      if (detailStatusBadge) {
        detailStatusBadge.className = `del-badge ${order.statusBadgeClass}`;
        detailStatusBadge.innerHTML = `<span class="del-dot" aria-hidden="true"></span> ${order.status}`;
      }

      // Render items
      if (detailItemsContainer) {
        detailItemsContainer.innerHTML = order.items.map(item => `
          <div class="del-detail-item-block" style="padding-block: 0.5rem; border-bottom: 1px solid var(--color-border);">
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: var(--text-sm);">
              <strong style="color: var(--color-ink);">${escapeHTML(item.name)}</strong>
              <span style="font-family: var(--font-mono); color: var(--color-muted);">${escapeHTML(item.price)}</span>
            </div>
            ${item.notes.length ? `
              <ul style="margin: 0.25rem 0 0 1rem; padding: 0; font-size: var(--text-xs); color: var(--color-muted);">
                ${item.notes.map(n => `<li>${escapeHTML(n)}</li>`).join('')}
              </ul>
            ` : ''}
          </div>
        `).join('');
      }
    });
  });
}

/**
 * Handles simulating handoff progression
 */
function initHandoffDemo() {
  const handoffActionBtn = document.getElementById('del-handoff-action-btn');
  const handoffStatusNode = document.getElementById('del-handoff-current-status');
  const handoffStatusDesc = document.getElementById('del-handoff-status-desc');

  if (!handoffActionBtn || !handoffStatusNode) return;

  let isCompleted = false;

  handoffActionBtn.addEventListener('click', () => {
    isCompleted = !isCompleted;

    if (isCompleted) {
      handoffStatusNode.className = 'del-badge del-badge--dispatched';
      handoffStatusNode.innerHTML = '<span class="del-dot" aria-hidden="true"></span> Dispatched / Collected';
      if (handoffStatusDesc) {
        handoffStatusDesc.textContent = 'Order has been handed over at the counter and marked dispatched in Qavyo.';
      }
      handoffActionBtn.textContent = 'Reset Handoff Demo';
      handoffActionBtn.classList.remove('button--primary');
      handoffActionBtn.classList.add('button--secondary');
    } else {
      handoffStatusNode.className = 'del-badge del-badge--ready';
      handoffStatusNode.innerHTML = '<span class="del-dot" aria-hidden="true"></span> Ready — Waiting for Collection';
      if (handoffStatusDesc) {
        handoffStatusDesc.textContent = 'Order is packed, verified, and placed on the collection pass.';
      }
      handoffActionBtn.textContent = 'Confirm Handoff / Dispatch';
      handoffActionBtn.classList.remove('button--secondary');
      handoffActionBtn.classList.add('button--primary');
    }
  });
}

function escapeHTML(str) {
  const p = document.createElement('p');
  p.textContent = str;
  return p.innerHTML;
}
