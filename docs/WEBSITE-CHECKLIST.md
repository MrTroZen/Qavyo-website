# Qavyo website completion checklist

This is the master delivery checklist for the public website. Update it when a page or shared task is approved, completed, verified, committed, and pushed.

## Status key

- `[x]` Final and approved.
- `[ ]` Not final. Work, review, or approval remains.
- **Exists** means a page file is already present, but it is not final unless explicitly marked final.
- **Planned** means the page should not be linked publicly until it has been built and approved.

## Definition of done for every page

A page is complete only when all applicable items below are done:

- [ ] Purpose, audience, and parent hub are confirmed.
- [ ] Product claims and commercial details are confirmed.
- [ ] Page outline and section order are approved.
- [ ] Copy is complete and avoids unsupported claims.
- [ ] Semantic HTML and correct heading order are implemented.
- [ ] Existing design tokens and components are reused.
- [ ] Keyboard access, visible focus, contrast, and alternative text are checked.
- [ ] Reduced-motion behaviour is supported where motion exists.
- [ ] Desktop, laptop, tablet, and mobile layouts are inspected.
- [ ] Links to the parent hub, related pages, Pricing, and the next action are correct.
- [ ] Unbuilt destinations use safe prototype-link behaviour.
- [ ] Page title and metadata are correct.
- [ ] Obvious HTML, CSS, and JavaScript errors are checked.
- [ ] Relevant documentation is updated.
- [ ] Only task-related files are staged.
- [ ] Changes are committed and pushed successfully.

## Phase 0 — Approved pages and existing foundation

- [x] Home — `index.html`
- [x] Pricing — `pricing.html`
- [ ] Review and maintain the brand foundation — `docs/BRAND.md`
- [ ] Review and maintain the architecture foundation — `docs/ARCHITECTURE.md`
- [ ] Review and maintain the connected sitemap — `docs/SITEMAP.md`
- [ ] Audit shared design tokens — `css/tokens.css`
- [ ] Audit shared base, layout, and component styles.
- [ ] Audit the shared navigation JavaScript foundation.

Home and Pricing are frozen. Future work may connect approved destinations through a dedicated link-only pass, but should not redesign their content or visual system.

## Phase 1 — Shared website system

### Navigation and discovery

- [ ] Confirm the final public navigation labels.
- [ ] Confirm which feature hubs belong in the primary navigation.
- [ ] Define desktop hub-menu behaviour.
- [ ] Define mobile hub-menu behaviour.
- [ ] Add breadcrumbs to hub and focused feature pages.
- [ ] Create a reusable parent-hub link pattern.
- [ ] Create a reusable related-pages pattern.
- [ ] Create a reusable page-end next-step pattern.
- [ ] Audit all current navigation links and prototype links.
- [ ] Connect Home to approved hubs without redesigning Home.
- [ ] Connect Pricing feature labels to approved hubs in a link-only pass.
- [ ] Confirm footer information architecture.
- [ ] Add a public HTML sitemap only if it materially helps visitors.

### Shared page patterns

- [ ] Build and approve the feature-hub page pattern.
- [ ] Build and approve the focused feature-page pattern.
- [ ] Define hub feature-summary cards or rows.
- [ ] Define the connected-workflow visual pattern.
- [ ] Define related-capability cross-links.
- [ ] Define page status for unavailable feature destinations.
- [ ] Document approved reusable additions in `docs/COMPONENTS.md`.

### Global quality

- [ ] Check page titles and descriptions across the site.
- [ ] Fix incorrect titles on Website Building and Website SEO.
- [ ] Add or verify canonical URLs when the production domain is confirmed.
- [ ] Add or verify favicon and social-sharing metadata.
- [ ] Audit heading order across every page.
- [ ] Audit keyboard navigation and focus management.
- [ ] Audit colour contrast.
- [ ] Audit meaningful image alternative text.
- [ ] Audit touch targets on small screens.
- [ ] Audit reduced-motion support.
- [ ] Check for broken internal links and duplicate IDs.
- [ ] Check for unsupported or contradictory product claims.
- [ ] Check performance and unnecessary asset loading.
- [ ] Check all pages at desktop, laptop, tablet, and mobile widths.

## Phase 2 — Core product-family pages

### Restaurant Software

- [ ] Restaurant Software overview — `restaurant.html` — **Exists; not final**
  - [ ] Establish it as the main restaurant platform overview and directory.
  - [ ] Present the connected platform without duplicating every hub.
  - [ ] Link to each approved restaurant capability hub.
  - [ ] Preserve verified pricing, device, support, and Intelligence facts.
  - [ ] Remove or replace deep links that no longer match the final hierarchy.

### Retail Software

- [ ] Retail Software overview — `retail.html` — **Exists; not final**
- [ ] Clothing & Fashion — `retail-clothing-fashion.html` — **Exists; not final**
- [ ] Electronics — `retail-electronics.html` — **Exists; not final**
- [ ] Repair Shops — **Planned**
- [ ] Grocery & Convenience — **Planned**
- [ ] Salon & Spa — **Planned**
- [ ] Hardware & Sanitary — **Planned**
- [ ] Paint & Tiles — **Planned**
- [ ] Confirm whether retail needs capability hubs shared with Restaurant Software.
- [ ] Confirm which capabilities differ by retail vertical before writing claims.

### Farm Software

- [ ] Farm Software overview — **Planned**
- [ ] Broiler Farming — **Planned**
- [ ] Confirm the Broiler Farming product scope before page planning.
- [ ] Keep other farm verticals out of the public architecture until approved.

## Phase 3 — Restaurant capability hubs

### POS & Ordering hub

- [ ] Create POS & Ordering hub page.
- [ ] Restaurant POS overview.
- [ ] Tables & Floor Plan overview.
- [ ] Online & QR Ordering overview.
- [ ] Self-Service Kiosk overview.
- [ ] Customer-Facing Display overview.
- [ ] Offline Mode overview.
- [ ] Refund & Void Tracking overview.
- [ ] Connect to Kitchen, Customers, Reporting, Payments, and Pricing.

### Kitchen & Service hub

- [ ] Create Kitchen & Service hub page.
- [ ] Kitchen Display System overview.
- [ ] Order Routing & Stations overview.
- [ ] Prep-Time & Order Tracking overview.
- [ ] Kitchen Alerts overview.
- [ ] Kitchen Performance overview.
- [ ] Connect to POS, Inventory, Workforce, and Intelligence.

### Inventory & Purchasing hub

- [ ] Create Inventory & Purchasing hub page.
- [ ] Ingredient Inventory overview.
- [ ] Recipes & Costing overview.
- [ ] Recipe Versioning overview.
- [ ] Waste Tracking overview.
- [ ] Inventory Valuation overview.
- [ ] Low-Stock Alerts overview.
- [ ] Vendor Management overview.
- [ ] Purchases & Orders overview.
- [ ] Purchase Suggestions overview.
- [ ] Vendor Price Tracking overview.
- [ ] Advanced Inventory Analysis overview.
- [ ] Connect to Reporting, Multi-Location, and Intelligence.

### Customers & Growth hub

- [ ] Create Customers & Growth hub page.
- [ ] Customer Accounts & Profiles overview.
- [ ] CRM & Preferences overview.
- [ ] Customer Order History overview.
- [ ] Reservations & Waitlist overview.
- [ ] Loyalty & Gift Cards overview.
- [ ] Customer Analytics overview.
- [ ] Restaurant Website overview.
- [ ] Connect to Business Apps, Marketing Solutions, Intelligence, and Pricing.

### Workforce hub

- [ ] Create Workforce hub page.
- [ ] Staff Accounts overview.
- [ ] Roles & Permissions overview.
- [ ] Scheduling & Shifts overview.
- [ ] Attendance & Timesheets overview.
- [ ] Staff Performance overview.
- [ ] Tip Management overview.
- [ ] Connect to HR & Payroll, Staff App, Intelligence, and Reporting.

### HR & Payroll hub

- [ ] Create HR & Payroll hub page.
- [ ] HR & Employee Records overview.
- [ ] Payroll & Salary Management overview.
- [ ] Labour Costs & Forecasting overview.
- [ ] Confirm legal, regional, and payroll-processing scope before detailed claims.
- [ ] Connect to Workforce, Reporting, Intelligence, and Pricing.

### Business Apps hub

- [ ] Create Business Apps hub page.
- [ ] Branded Customer App overview.
- [ ] Qavyo Staff App overview.
- [ ] Mobile Ordering & Loyalty overview.
- [ ] Push Notifications overview.
- [ ] Confirm device platforms, availability, and app-store details before claims.
- [ ] Connect to POS, Customers, Workforce, and Pricing.

### Money, Reporting & Close hub

- [ ] Create Money, Reporting & Close hub page.
- [ ] Full Cash Management overview.
- [ ] Expense Tracking overview.
- [ ] Profit & Loss Reporting overview.
- [ ] Day Close & Till Reconciliation overview.
- [ ] Refund & Void Tracking detail or cross-link to POS.
- [ ] Advanced Reporting overview.
- [ ] Sales by Channel overview.
- [ ] Report Filters & Export overview.
- [ ] Connect to Payments, Inventory, Multi-Location, Intelligence, and Pricing.

### Delivery Operations hub

- [ ] Decide whether Delivery Operations needs a full hub or a section within Ordering.
- [ ] Fleet & Driver Assignment overview.
- [ ] GPS Tracking & Routes overview.
- [ ] Delivery Performance overview.
- [ ] Distance-Based Fees overview.
- [ ] Confirm mapping, tracking, driver, and regional availability claims.

### Multi-Location & Groups hub

- [ ] Create Multi-Location & Groups hub page.
- [ ] Locations & Central Menus overview.
- [ ] Stock Transfers overview.
- [ ] Consolidated Reporting overview.
- [ ] Location Comparisons overview.
- [ ] Group, Franchise & Regional Management overview.
- [ ] Central Purchasing & Inventory overview.
- [ ] Central Menu Controls overview.
- [ ] Location-Level Permissions overview.
- [ ] Benchmarking & Group Reporting overview.
- [ ] Connect to Inventory, Reporting, Workforce, Intelligence, and Pricing.

## Phase 4 — Shared capability hubs

### Qavyo Intelligence

- [ ] Qavyo Intelligence hub — `intelligence.html` — **Exists; not final**
- [ ] Preserve the Watch -> Detect -> Explain -> Recommend -> Act -> Measure -> Learn loop.
- [ ] Daily Intelligence overview.
- [ ] Weekly & Monthly Reviews overview.
- [ ] Changes & Unusual Activity overview.
- [ ] Stock & Purchasing Intelligence overview.
- [ ] Profit & Pricing Intelligence overview.
- [ ] Staff & Labour Intelligence overview.
- [ ] Location & Group Intelligence overview.
- [ ] Executive Reports & Health View overview.
- [ ] Keep human control explicit.
- [ ] Confirm predictive, recommendation, health-score, and impact-estimate claims.
- [ ] Link back to the operational hub behind each Intelligence story.

### Payments

- [ ] Confirm the Payments product and commercial scope.
- [ ] Create Payments hub only after scope confirmation.
- [ ] Taking Payments overview — **Scope to confirm**
- [ ] Payment Providers overview — **Scope to confirm**
- [ ] Fees & Processing overview — **Scope to confirm**
- [ ] Reconciliation overview — **Scope to confirm**
- [ ] Preserve the confirmed separation between software and payment-processing costs.
- [ ] Do not publish provider, rate, terminal, or compatibility claims without confirmation.

### Hardware

- [ ] Decide whether Hardware remains a Restaurant Software section or becomes a hub.
- [ ] Confirm supported-device and dedicated-hardware scope.
- [ ] Explain existing compatible devices versus optional dedicated hardware.
- [ ] Keep hardware pricing separate from software pricing.
- [ ] Do not name devices, vendors, or compatibility without confirmation.

## Phase 5 — Marketing Solutions

### Marketing hub

- [ ] Marketing Solutions overview — `solutions.html` — **Exists; not final**
- [ ] Confirm its relationship to the Business plan without presenting Marketing as core restaurant operations.
- [ ] Connect all five approved service pages.
- [ ] Add contextual routes back to relevant product capability hubs where appropriate.

### Focused marketing pages

- [ ] Social Media Marketing — `social-media-marketing.html` — **Exists; not final**
- [ ] SMS Marketing — `sms-marketing.html` — **Exists; not final**
- [ ] Email Marketing — `email-marketing.html` — **Exists; not final**
- [ ] Website Building — `website-building.html` — **Exists; not final**
- [ ] Website SEO — `website-seo.html` — **Exists; not final**
- [ ] Confirm Google Business Profile Optimization scope before creating a page or adding claims.
- [ ] Decide whether Google Business Profile Optimization belongs within Website SEO or needs its own page.

## Phase 6 — Focused feature pages

Focused pages should be created only after their parent hub is approved. Use one checklist item per actual route when implementation begins.

### First-wave focused pages

- [ ] Restaurant POS.
- [ ] Kitchen Display System.
- [ ] Online & QR Ordering.
- [ ] Inventory & Food Cost.
- [ ] Recipes & Costing.
- [ ] Reservations & Waitlist.
- [ ] CRM & Customer Profiles.
- [ ] Scheduling & Shifts.
- [ ] Attendance & Timesheets.
- [ ] Payroll & Salary Management.
- [ ] Branded Customer App.
- [ ] Qavyo Staff App.
- [ ] Cash Management & Day Close.
- [ ] Multi-Location Operations.

### Second-wave focused pages

- [ ] Tables & Floor Plan.
- [ ] Self-Service Kiosk.
- [ ] Customer-Facing Display.
- [ ] Order Routing & Stations.
- [ ] Prep-Time & Order Tracking.
- [ ] Waste Tracking.
- [ ] Suppliers & Purchasing.
- [ ] Loyalty & Gift Cards.
- [ ] Customer Analytics.
- [ ] Roles & Permissions.
- [ ] Staff Performance.
- [ ] Labour Costs & Forecasting.
- [ ] Mobile Ordering & Loyalty.
- [ ] Advanced Reporting.
- [ ] Delivery Operations.
- [ ] Restaurant Group Control.

### Later focused pages

- [ ] Create remaining focused routes only when the hub shows that visitors need more depth.
- [ ] Avoid creating thin pages that repeat a hub without adding useful explanation.

## Phase 7 — Supporting public pages

- [ ] About Qavyo.
- [ ] Contact.
- [ ] Talk to Sales destination or form.
- [ ] Start Free destination or signup flow.
- [ ] Sign In destination.
- [ ] Support overview.
- [ ] Help or documentation destination, if applicable.
- [ ] Resources hub, if there is confirmed content to support it.
- [ ] Privacy policy.
- [ ] Terms and conditions.
- [ ] Cookie notice and consent behaviour, if legally required.
- [ ] Accessibility statement.
- [ ] 404 page.
- [ ] Thank-you and form-success states.
- [ ] Form-error and unavailable-service states.

## Phase 8 — Final connection and launch audit

- [ ] Every approved page has one clear parent.
- [ ] Every focused page links back to its hub.
- [ ] Every hub links to relevant focused pages.
- [ ] Every hub offers a relevant next action.
- [ ] Cross-links are selective and useful rather than repetitive.
- [ ] Home links only to approved canonical destinations.
- [ ] Pricing links only to approved canonical destinations.
- [ ] Desktop and mobile navigation contain the same essential destinations.
- [ ] Footer links are complete and accurate.
- [ ] No public link leads to a placeholder or empty page.
- [ ] No unsupported claims, fabricated proof, or unconfirmed compatibility remain.
- [ ] No temporary screenshots, test files, caches, secrets, or editor files are tracked.
- [ ] All pages pass the page definition-of-done checklist.
- [ ] Production-domain metadata and analytics requirements are confirmed.
- [ ] Final repository status is clean and all commits are pushed.

## Recommended execution order

1. Approve the shared hub-page pattern.
2. Finish Restaurant Software as the platform overview and directory.
3. Build POS & Ordering as the first hub.
4. Build Kitchen, Inventory, Customers, and Reporting hubs.
5. Build Workforce and HR & Payroll as separate but connected hubs.
6. Build Business Apps and Multi-Location hubs.
7. Confirm and build Payments and Hardware architecture.
8. Finish Qavyo Intelligence as the shared capability hub.
9. Review and finish Retail, Farm, and Marketing families.
10. Build focused feature pages in demand order.
11. Add supporting company, contact, legal, and conversion pages.
12. Run the final connection, accessibility, responsive, content, and launch audit.
