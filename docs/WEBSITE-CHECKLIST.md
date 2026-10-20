# Qavyo website completion checklist

This is the route-level completion checklist for the public website. [`WEBSITE-DELIVERY-PLAN.md`](WEBSITE-DELIVERY-PLAN.md) defines delivery order, dependencies, research requirements, and approval gates. Update this checklist when a page or shared task is approved, completed, verified, committed, and pushed.

## Status key

- `[x]` Final and approved.
- `[ ]` Not final. Work, review, or approval remains.
- **Exists** means a page file is already present, but it is not final unless explicitly marked final.
- **Planned** means the page should not be linked publicly until it has been built and approved.

## Definition of done for every page

A page is complete only when all applicable items below are done:

- [ ] Purpose, audience, and parent overview or major page are confirmed.
- [ ] Product claims and commercial details are confirmed.
- [ ] Page outline and section order are approved.
- [ ] Copy is complete and avoids unsupported claims.
- [ ] Semantic HTML and correct heading order are implemented.
- [ ] Existing design tokens and components are reused.
- [ ] Keyboard access, visible focus, contrast, and alternative text are checked.
- [ ] Reduced-motion behaviour is supported where motion exists.
- [ ] Desktop, laptop, tablet, and mobile layouts are inspected.
- [ ] Links to the parent overview or major page, related pages, Pricing, and the next action are correct.
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

- [x] Approve the target sitemap and consolidated Restaurant menu direction.
- [x] Replace Products with Retail in desktop navigation.
- [x] Replace Products with Retail in mobile navigation.
- [x] Link the approved Retail overview and business-type destinations.
- [x] Apply the consolidated Restaurant menu to desktop navigation.
- [x] Apply the same consolidated Restaurant taxonomy to mobile navigation.
- [ ] Remove Farm from navigation, Home links, footer, feature directory, and internal recommendations.
- [ ] Add breadcrumbs to major capability and vertical pages.
- [ ] Create a reusable parent-overview link pattern.
- [ ] Create a reusable related-pages pattern.
- [ ] Create a reusable page-end next-step pattern.
- [ ] Audit all current navigation links and prototype links.
- [ ] Connect Home to approved major pages without redesigning Home.
- [ ] Connect Pricing feature labels to approved major pages or section anchors in a link-only pass.
- [ ] Confirm footer information architecture.
- [ ] Add a public HTML sitemap only if it materially helps visitors.

### Shared page patterns

- [x] Record the existing structural hub and feature scaffolds for route disposition.
- [ ] Define major-page supporting-section summaries or rows.
- [ ] Define the connected-workflow visual pattern.
- [ ] Define related-capability cross-links.
- [x] Define and display scaffolded/content-pending page status.
- [x] Document approved reusable additions in `docs/COMPONENTS.md`.

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
  - [ ] Link to each approved Restaurant major capability page.
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
- [ ] Confirm whether Retail needs any major capability pages beyond its overview and business-type pages.
- [ ] Confirm which capabilities differ by retail vertical before writing claims.

### Farm Software

- [x] Remove Farm Software from the target public sitemap.
- [ ] Remove Farm links from public navigation and discovery surfaces.
- [ ] Exclude `farm.html` and `broiler-farming.html` from public indexation and XML sitemaps.
- [ ] Approve redirect, archive, or deletion treatment before changing the legacy files.

## Phase 3 — Restaurant major pages and supporting sections

### Restaurant POS

- [x] Finish `restaurant-pos.html` as the major service-operation page.
- [x] Add order entry, menus, and modifier sections.
- [x] Add Tables & Floor Plan as a section.
- [x] Add Customer-Facing Display as a section.
- [x] Add Offline Mode as a section.
- [x] Add Refunds & Voids as a section.
- [x] Connect to Online Ordering, Kitchen, Reporting, Payments, and Pricing.

### Online & QR Ordering

- [x] Finish `online-qr-ordering.html` as the major customer-ordering page.
- [x] Add online ordering and QR ordering sections.
- [x] Add Self-Service Kiosk as a section.
- [x] Add Mobile Ordering as a section.
- [x] Connect to POS, Kitchen, Customers, Delivery, and Pricing.

### Kitchen Operations

- [x] Finish `kitchen-service.html` as the major Kitchen Operations page.
- [x] Add Kitchen Display, routing, preparation tracking, alerts, and performance sections.
- [x] Connect to POS, Inventory, HR and Team, Reporting, and Intelligence.

### Inventory & Food Cost

- [x] Finish `inventory-purchasing.html` as the major Inventory & Food Cost page.
- [x] Add Ingredient Inventory, Recipes & Costing, Waste, Valuation, and Stock Alert sections.
- [x] Add Suppliers, Purchase Orders, purchasing decisions, and analysis sections.
- [x] Connect to Reporting, Multi-Location, and Intelligence.

### Customers & CRM

- [x] Finish `customers-growth.html` as the major Customers & CRM page.
- [x] Add profiles, preferences, and order-history sections.
- [x] Add Reservations & Waitlist and Loyalty & Gift Cards sections.
- [x] Add customer analytics, Restaurant Website, Customer App, and notification sections.
- [x] Connect to Online Ordering, Marketing Solutions, Intelligence, and Pricing.

### HR, Payroll & Team

- [x] Finish `hr-payroll.html` as the combined people-operations page.
- [x] Add employee records, staff accounts, roles, and permissions sections.
- [x] Add scheduling, attendance, timesheets, payroll, tips, performance, and labour sections.
- [x] Add Qavyo Staff App as a section.
- [x] Confirm legal, regional, payroll-processing, device, and availability scope before claims.
- [x] Connect to Reporting, Multi-Location, Intelligence, and Pricing.

### Reporting & Day Close

- [x] Finish `money-reporting-close.html` as the major reporting and close page.
- [x] Add cash, expenses, day close, reconciliation, and profit-and-loss sections.
- [x] Add reporting, sales-channel, filter, and export sections.
- [x] Cross-link refunds and voids to Restaurant POS.
- [x] Connect to Payments, Inventory, Multi-Location, Intelligence, and Pricing.

### Delivery Operations

- [x] Keep Delivery Operations as a permanent full page.
- [x] Add only confirmed fleet assignment, routes, performance, and distance-fee sections to `delivery-operations.html`.
- [x] Confirm mapping, tracking, driver, and regional availability claims without third-party logistics overreach.

### Multi-Location

- [x] Finish `multi-location-groups.html` as the major Multi-Location page.
- [x] Add locations, central menus, transfers, and central purchasing sections.
- [x] Add group control, permissions, consolidated reporting, comparison, and benchmarking sections.
- [x] Connect to Inventory, HR and Team, Reporting, Intelligence, and Pricing.

## Phase 4 — Shared capability pages

### Qavyo Intelligence

- [x] Finish `intelligence.html` as the canonical Qavyo Intelligence page.
- [x] Preserve the Watch -> Detect -> Explain -> Recommend -> Act -> Measure -> Learn loop.
- [x] Add Daily Intelligence and Weekly & Monthly Review sections.
- [x] Add Changes & Unusual Activity as a section.
- [x] Add Stock, Profit, Staff, and Location Intelligence as grounded examples.
- [x] Add Executive View as a qualified section.
- [x] Keep human control explicit.
- [x] Confirm predictive, recommendation, health-score, and impact-estimate claims without autonomous decision claims.
- [x] Link back to the major operational page behind each Intelligence story.

### Payments

- [x] Keep Payments as a permanent full page.
- [ ] Confirm the Payments product and commercial scope.
- [ ] Add confirmed Taking Payments, Providers, Fees & Processing, and Reconciliation sections.
- [ ] Preserve the confirmed separation between software and payment-processing costs.
- [ ] Do not publish provider, rate, terminal, or compatibility claims without confirmation.

### Hardware

- [x] Keep Hardware & Devices as a permanent full page.
- [ ] Confirm supported-device and dedicated-hardware scope.
- [ ] Explain existing compatible devices versus optional dedicated hardware.
- [ ] Keep hardware pricing separate from software pricing.
- [ ] Do not name devices, vendors, or compatibility without confirmation.

## Phase 5 — Marketing Solutions

### Marketing hub

- [ ] Marketing Solutions overview — `solutions.html` — **Exists; not final**
- [ ] Confirm its relationship to the Business plan without presenting Marketing as core restaurant operations.
- [ ] Connect all five approved service pages.
- [ ] Add contextual routes back to relevant product or major capability pages where appropriate.

### Focused marketing pages

- [ ] Social Media Marketing — `social-media-marketing.html` — **Exists; not final**
- [ ] SMS Marketing — `sms-marketing.html` — **Exists; not final**
- [ ] Email Marketing — `email-marketing.html` — **Exists; not final**
- [ ] Website Building — `website-building.html` — **Exists; not final**
- [ ] Website SEO — `website-seo.html` — **Exists; not final**
- [ ] Confirm Google Business Profile Optimization scope before creating a page or adding claims.
- [ ] Decide whether Google Business Profile Optimization belongs within Website SEO or needs its own page.

## Phase 6 — Exceptional focused feature pages

Supporting features remain sections by default. Create a standalone page only when it passes the focused-page score in `WEBSITE-DELIVERY-PLAN.md` and has confirmed product depth, distinct buyer intent, available proof, and enough unique content.

- [ ] Review buyer and search demand after each major capability page is live.
- [ ] Score candidate feature pages before adding them to the sitemap.
- [ ] Record the reason, parent page, canonical intent, and redirect impact for every approved exception.
- [ ] Avoid pages that repeat a major page or explain only one small control.

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

- [x] Every currently scaffolded page has one clear parent.
- [x] Every focused scaffold page links back to its hub.
- [x] Every scaffolded hub links to its relevant focused pages.
- [ ] Every hub offers a relevant next action.
- [ ] Cross-links are selective and useful rather than repetitive.
- [ ] Home links only to approved canonical destinations.
- [ ] Pricing links only to approved canonical destinations.
- [x] Desktop and mobile navigation contain the same essential product, hub, and feature-directory destinations.
- [ ] Footer links are complete and accurate.
- [ ] No public link leads to a placeholder or empty page.
- [ ] No unsupported claims, fabricated proof, or unconfirmed compatibility remain.
- [ ] No temporary screenshots, test files, caches, secrets, or editor files are tracked.
- [ ] All pages pass the page definition-of-done checklist.
- [ ] Production-domain metadata and analytics requirements are confirmed.
- [ ] Final repository status is clean and all commits are pushed.

## Recommended execution order

1. Approve the shared major-capability-page and supporting-section pattern.
2. Finish Restaurant Software as the platform overview and directory.
3. Build Restaurant POS as the first major capability page.
4. Build Online Ordering, Kitchen, Inventory, Customers, and Reporting major pages.
5. Build the combined HR, Payroll & Team page.
6. Build Multi-Location and place Business App features within their relevant major pages.
7. Build the permanent Delivery, Payments, and Hardware pages from confirmed product scope.
8. Finish Qavyo Intelligence as the shared canonical page.
9. Review and finish Retail and Marketing families.
10. Build exceptional focused feature pages only when demand and content depth justify them.
11. Add supporting company, contact, legal, and conversion pages.
12. Run the final connection, accessibility, responsive, content, and launch audit.
