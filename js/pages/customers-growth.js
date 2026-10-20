(() => {
  "use strict";

  // 1. Customer Profile Switcher Demo
  const customerTabs = [...document.querySelectorAll("[data-customer-tab]")];
  const customerData = {
    sarah: {
      initials: "SM",
      name: "Sarah Mitchell",
      role: "Regular Guest · Front-of-House Favorite",
      badge: "Regular Guest",
      badgeClass: "crm-badge--regular",
      since: "March 2025",
      visits: "18",
      orders: "24",
      lastVisit: "Saturday 20 Oct",
      favItem: "Margherita Pizza",
      spend: "£814",
      location: "Soho",
      timing: "Friday / Saturday evenings",
      notes: "Prefers window or quiet booth seating. Orders extra basil and sparkling water with meals."
    },
    daniel: {
      initials: "DC",
      name: "Daniel Clarke",
      role: "Corporate Account · Business Lunches",
      badge: "Corporate Account",
      badgeClass: "crm-badge--corporate",
      since: "January 2026",
      visits: "9",
      orders: "12",
      lastVisit: "Wednesday 16 Oct",
      favItem: "Sirloin Steak",
      spend: "£620",
      location: "City / Financial Branch",
      timing: "Weekday lunch (12:30–14:00)",
      notes: "Requires itemised VAT invoices. Frequently hosts groups of 4–6 clients."
    },
    mia: {
      initials: "MP",
      name: "Mia Patel",
      role: "Multi-Channel Guest · Web & Dine-in",
      badge: "Digital & Floor",
      badgeClass: "crm-badge--regular",
      since: "November 2025",
      visits: "14",
      orders: "21",
      lastVisit: "Thursday 18 Oct",
      favItem: "Chicken Burger",
      spend: "£495",
      location: "Soho & Online",
      timing: "Thursday takeaway / Sunday brunch",
      notes: "Regular user of online website ordering and table QR pay at Soho."
    }
  };

  const avatarEl = document.querySelector("[data-customer-avatar]");
  const nameEl = document.querySelector("[data-customer-name]");
  const roleEl = document.querySelector("[data-customer-role]");
  const badgeEl = document.querySelector("[data-customer-badge]");
  const sinceEl = document.querySelector("[data-customer-since]");
  const visitsEl = document.querySelector("[data-customer-visits]");
  const ordersEl = document.querySelector("[data-customer-orders]");
  const lastVisitEl = document.querySelector("[data-customer-last]");
  const favItemEl = document.querySelector("[data-customer-fav]");
  const spendEl = document.querySelector("[data-customer-spend]");
  const locationEl = document.querySelector("[data-customer-loc]");
  const timingEl = document.querySelector("[data-customer-timing]");
  const notesEl = document.querySelector("[data-customer-notes]");

  customerTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      customerTabs.forEach((t) => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      const key = tab.dataset.customerTab;
      const data = customerData[key];
      if (!data) return;

      if (avatarEl) avatarEl.textContent = data.initials;
      if (nameEl) nameEl.textContent = data.name;
      if (roleEl) roleEl.textContent = data.role;
      if (badgeEl) {
        badgeEl.textContent = data.badge;
        badgeEl.className = `crm-badge ${data.badgeClass}`;
      }
      if (sinceEl) sinceEl.textContent = data.since;
      if (visitsEl) visitsEl.textContent = data.visits;
      if (ordersEl) ordersEl.textContent = data.orders;
      if (lastVisitEl) lastVisitEl.textContent = data.lastVisit;
      if (favItemEl) favItemEl.textContent = data.favItem;
      if (spendEl) spendEl.textContent = data.spend;
      if (locationEl) locationEl.textContent = data.location;
      if (timingEl) timingEl.textContent = data.timing;
      if (notesEl) notesEl.textContent = data.notes;
    });
  });

  // 2. Timeline Card Toggle Details
  const timelineCards = [...document.querySelectorAll("[data-timeline-card]")];
  timelineCards.forEach((card) => {
    const summary = card.querySelector(".crm-timeline-card__summary");
    const details = card.querySelector(".crm-timeline-card__details");

    if (summary && details) {
      summary.addEventListener("click", () => {
        const isHidden = details.hidden;
        details.hidden = !isHidden;
        card.classList.toggle("is-active", isHidden);
      });
    }
  });

  // 3. Smooth Anchor Scroll (e.g. for #reservations-loyalty)
  const handleHash = () => {
    const hash = window.location.hash;
    if (!hash) return;
    const target = document.querySelector(hash);
    if (target) {
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ block: "start", behavior: "smooth" });
      });
    }
  };

  window.addEventListener("hashchange", handleHash);
  if (window.location.hash) {
    handleHash();
  }
})();
