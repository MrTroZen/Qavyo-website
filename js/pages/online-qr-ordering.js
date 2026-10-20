(() => {
  "use strict";

  // Comparison Tabs Handling
  const tabSet = document.querySelector("[data-ord-tabs]");

  if (tabSet) {
    const tabs = [...tabSet.querySelectorAll('[role="tab"]')];
    const panels = [...tabSet.querySelectorAll('[role="tabpanel"]')];

    const activateTab = (nextTab, { moveFocus = false } = {}) => {
      tabs.forEach((tab) => {
        const selected = tab === nextTab;
        tab.setAttribute("aria-selected", String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });

      panels.forEach((panel) => {
        panel.hidden = panel.id !== nextTab.getAttribute("aria-controls");
      });

      if (moveFocus) {
        nextTab.focus();
      }
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activateTab(tab));
      tab.addEventListener("keydown", (event) => {
        let nextIndex = index;

        if (["ArrowRight", "ArrowDown"].includes(event.key)) {
          nextIndex = (index + 1) % tabs.length;
        } else if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
          nextIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = tabs.length - 1;
        } else {
          return;
        }

        event.preventDefault();
        activateTab(tabs[nextIndex], { moveFocus: true });
      });
    });

    const activateLinkedPanel = () => {
      const linkedPanel = panels.find((panel) => `#${panel.id}` === window.location.hash);

      if (linkedPanel) {
        const linkedTab = tabs.find((tab) => tab.getAttribute("aria-controls") === linkedPanel.id);

        if (linkedTab) {
          activateTab(linkedTab);
          window.requestAnimationFrame(() => linkedPanel.scrollIntoView({ block: "start" }));
        }
      }
    };

    activateLinkedPanel();
    window.addEventListener("hashchange", activateLinkedPanel);
  }

  // Web Ordering Demo Interaction
  const webCategories = [...document.querySelectorAll("[data-web-category]")];
  const webProductTitle = document.querySelector("[data-web-product-title]");
  const webProductPrice = document.querySelector("[data-web-product-price]");
  const webProductDesc = document.querySelector("[data-web-product-desc]");

  const productData = {
    Burgers: {
      title: "Chicken Burger",
      price: "£10.90",
      desc: "Crispy chicken breast, house relish, fresh lettuce, toasted brioche bun."
    },
    Pizza: {
      title: "Margherita Pizza",
      price: "£11.50",
      desc: "Slow-fermented dough, San Marzano tomato sauce, fior di latte mozzarella."
    },
    Sides: {
      title: "Seasoned Skin-on Fries",
      price: "£3.80",
      desc: "Hand-cut daily potatoes with rosemary sea salt."
    },
    Drinks: {
      title: "Artisan Craft Soda",
      price: "£3.20",
      desc: "Naturally flavoured botanical ginger beer & cane sugar."
    }
  };

  webCategories.forEach((btn) => {
    btn.addEventListener("click", () => {
      webCategories.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const cat = btn.dataset.webCategory;
      if (productData[cat] && webProductTitle && webProductPrice && webProductDesc) {
        webProductTitle.textContent = productData[cat].title;
        webProductPrice.textContent = productData[cat].price;
        webProductDesc.textContent = productData[cat].desc;
      }
    });
  });

  // Kiosk Demo Category Switcher
  const kioskTabs = [...document.querySelectorAll("[data-kiosk-tab]")];
  const kioskItemTitle = document.querySelector("[data-kiosk-item-title]");
  const kioskItemPrice = document.querySelector("[data-kiosk-item-price]");
  const kioskItemDesc = document.querySelector("[data-kiosk-item-desc]");

  const kioskData = {
    Burgers: {
      title: "Double Bacon Cheeseburger",
      price: "£12.50",
      desc: "Dry-aged British beef patties, smoked cheddar, house pickles, relish."
    },
    Pizza: {
      title: "Margherita Pizza",
      price: "£11.50",
      desc: "Stone-baked dough, San Marzano tomato, fresh mozzarella."
    },
    Sides: {
      title: "Truffle & Parmesan Fries",
      price: "£4.80",
      desc: "Crispy skin-on fries, aged parmesan, white truffle oil."
    },
    Drinks: {
      title: "Cold Pressed Orange Juice",
      price: "£3.60",
      desc: "100% freshly squeezed Valencia oranges."
    }
  };

  kioskTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      kioskTabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      const cat = tab.dataset.kioskTab;
      if (kioskData[cat] && kioskItemTitle && kioskItemPrice && kioskItemDesc) {
        kioskItemTitle.textContent = kioskData[cat].title;
        kioskItemPrice.textContent = kioskData[cat].price;
        kioskItemDesc.textContent = kioskData[cat].desc;
      }
    });
  });
})();
