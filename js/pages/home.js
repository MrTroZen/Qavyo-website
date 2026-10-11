(() => {
  const workflow = document.querySelector("[data-business-workflow]");

  if (!workflow) {
    return;
  }

  const examples = {
    fashion: {
      business: "Fashion store",
      kicker: "Product",
      title: "Everyday Overshirt",
      meta: "Black · Store sale",
      status: "Sale recorded",
      steps: [["Sale", "Black / M"], ["Stock picture", "Product connected"], ["Reporting", "Activity included"]],
      note: "The sale stays connected to the product, stock picture and reporting.",
      observation: "A clothing product has recent sales activity to review alongside its stock picture.",
      reason: "The connected view can show whether the activity deserves closer attention before the next decision.",
      action: "Review the product and current stock context before deciding what to do next."
    },
    electronics: {
      business: "Electronics store",
      kicker: "Product",
      title: "Wireless Headphones",
      meta: "Audio · 1 item sold",
      status: "Sale completed",
      steps: [["Product", "Item recognised"], ["Stock", "Picture connected"], ["Reporting", "Sale included"]],
      note: "Product, sale, stock and reporting remain part of one operational picture.",
      observation: "Wireless audio activity differs from its recent product pattern.",
      reason: "The change may affect the current stock picture and deserves review in context.",
      action: "Compare recent sales with the connected product and stock information before acting."
    },
    repair: {
      business: "Repair shop",
      kicker: "Service item",
      title: "Customer device",
      meta: "Service work · Recorded",
      status: "Activity recorded",
      steps: [["Service", "Work recorded"], ["Customer", "Context connected"], ["Reporting", "Activity included"]],
      note: "Service activity stays connected to customer context and the wider business view.",
      observation: "Recent service activity is visible alongside customer context and reporting.",
      reason: "Keeping the connected picture together helps show which area deserves a closer look.",
      action: "Review the current service activity and its business context before setting priorities."
    },
    grocery: {
      business: "Grocery store",
      kicker: "Product sale",
      title: "Everyday item",
      meta: "Store sale · Quantity 1",
      status: "Sale recorded",
      steps: [["Sale", "Item recorded"], ["Stock", "Picture connected"], ["Reporting", "Activity included"]],
      note: "Each sale contributes to the connected product, stock and reporting picture.",
      observation: "Recent product activity is visible against the connected stock picture.",
      reason: "A change in everyday sales may deserve attention when viewed with current stock context.",
      action: "Review the affected product activity and stock information before the next decision."
    },
    salon: {
      business: "Salon & spa",
      kicker: "Service",
      title: "Customer visit",
      meta: "Service activity · Recorded",
      status: "Visit recorded",
      steps: [["Service", "Activity recorded"], ["Customer", "Context connected"], ["Reporting", "Visit included"]],
      note: "Service activity connects to customer context and the wider operating picture.",
      observation: "Recent service activity can be reviewed with connected customer and reporting context.",
      reason: "The combined view helps identify where the business may need attention without guessing.",
      action: "Review the service activity and customer context before choosing the next step."
    }
  };

  const tabs = [...workflow.querySelectorAll("[data-business-tab]")];
  const panel = workflow.querySelector("[role='tabpanel']");
  const fields = {
    business: workflow.querySelector("[data-business-name]"),
    kicker: workflow.querySelector("[data-run-kicker]"),
    title: workflow.querySelector("[data-run-title]"),
    meta: workflow.querySelector("[data-run-meta]"),
    status: workflow.querySelector("[data-run-status]"),
    stepLabels: [...workflow.querySelectorAll("[data-run-step-one-label], [data-run-step-two-label], [data-run-step-three-label]")],
    stepValues: [...workflow.querySelectorAll("[data-run-step-one], [data-run-step-two], [data-run-step-three]")],
    note: workflow.querySelector("[data-run-note]"),
    observation: workflow.querySelector("[data-intel-observation]"),
    reason: workflow.querySelector("[data-intel-reason]"),
    action: workflow.querySelector("[data-intel-action]")
  };

  const selectBusiness = (tab) => {
    const example = examples[tab.dataset.businessTab];

    tabs.forEach((item) => {
      const selected = item === tab;
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
    });

    panel.setAttribute("aria-labelledby", tab.id);
    fields.business.textContent = example.business;
    fields.kicker.textContent = example.kicker;
    fields.title.textContent = example.title;
    fields.meta.textContent = example.meta;
    fields.status.textContent = example.status;
    fields.note.textContent = example.note;
    fields.observation.textContent = example.observation;
    fields.reason.textContent = example.reason;
    fields.action.textContent = example.action;

    example.steps.forEach(([label, value], index) => {
      fields.stepLabels[index].textContent = label;
      fields.stepValues[index].textContent = value;
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectBusiness(tab));
    tab.addEventListener("keydown", (event) => {
      let nextIndex;

      if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      if (nextIndex === undefined) return;

      event.preventDefault();
      tabs[nextIndex].focus();
      selectBusiness(tabs[nextIndex]);
    });
  });
})();
