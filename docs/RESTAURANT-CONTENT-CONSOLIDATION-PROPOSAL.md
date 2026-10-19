# Restaurant content consolidation and menu proposal

Status: proposal for approval. This document does not authorize navigation changes, redirects, route deletion, or publication.

## Decision

Qavyo Restaurant Software should use a two-level content model:

```text
Restaurant Software overview
  -> Major capability page
    -> Supporting feature sections
```

A third-level feature page is exceptional. It must help a buyer understand a substantial workflow, answer meaningful buying objections, or serve proven search demand.

Small features do not need standalone pages or category pages. They receive clear sections and direct anchor links inside the closest major capability page.

## Page test

A capability deserves a full page when most of these statements are true:

- It represents a major buying concern.
- Buyers need help understanding its workflow or commercial value.
- It combines several connected features.
- It creates substantial objections, implementation questions, or switching concerns.
- Qavyo has enough confirmed product detail and proof to support a useful page.
- It has distinct search or campaign demand.
- It can support a meaningful primary CTA without repeating another page.

A capability remains a section when most of these statements are true:

- It is easy to understand from a short explanation or visual.
- It supports a larger workflow rather than creating one.
- It would produce a thin or repetitive page.
- Buyers rarely evaluate it independently.
- Product scope or proof is still limited.
- Its strongest destination is a parent page with more context.

## Recommended Restaurant page set

### Core pages

| Page | Existing route | Purpose | Main sections |
|---|---|---|---|
| Restaurant Software | `restaurant.html` | Explain the connected platform and direct visitors to major capabilities | Platform overview, capability directory, Intelligence, pricing, devices, support |
| Restaurant POS | `restaurant-pos.html` | Explain daily order and service operation | Order entry, menus and modifiers, tables and floor plan, customer display, offline continuity, refunds and voids |
| Online & QR Ordering | `online-qr-ordering.html` | Explain customer and self-service ordering channels | Online ordering, QR ordering, kiosk, mobile ordering, order handoff |
| Kitchen Operations | `kitchen-service.html` | Explain front-to-kitchen execution | Kitchen display, station routing, preparation tracking, alerts, performance review |
| Inventory & Food Cost | `inventory-purchasing.html` | Explain control from ingredients through purchasing | Ingredient stock, recipes, food cost, waste, valuation, alerts, suppliers, purchase orders, purchasing decisions |
| Customers & CRM | `customers-growth.html` | Explain customer context and retention | Profiles, preferences, order history, reservations, loyalty, analytics, website and customer-app touchpoints |
| HR, Payroll & Team | `hr-payroll.html` | Explain the complete employee lifecycle | Employee records, staff accounts, roles, scheduling, attendance, payroll, tips, performance, labour review, Staff App |
| Reporting & Day Close | `money-reporting-close.html` | Explain financial visibility and operating control | Cash, expenses, day close, reconciliation, profit and loss, channel reporting, filters and exports |
| Multi-Location | `multi-location-groups.html` | Explain group control across locations | Central menus, permissions, transfers, purchasing, consolidated reporting, comparisons, benchmarking |
| Qavyo Intelligence | `intelligence.html` | Explain how Qavyo turns connected operating signals into human-controlled action | Daily view, unusual changes, stock, profit, labour, location, executive review, operating loop |

### Conditional full pages

These pages remain conditional until product scope and buyer demand are confirmed.

| Page | Existing route | Keep as a full page when | Otherwise |
|---|---|---|---|
| Delivery Operations | `delivery-operations.html` | Qavyo provides a substantial end-to-end delivery workflow | Make it a section within Online & QR Ordering or Kitchen Operations |
| Payments | `payments.html` | Providers, processing, fees, settlement, and reconciliation are confirmed | Keep only a qualified Payments section on Restaurant and Pricing |
| Hardware & Devices | `hardware.html` | Buyers need meaningful device, compatibility, and purchase guidance | Keep the current device section on Restaurant and Pricing |

### Existing approved buying page

`pricing.html` remains the canonical buying and comparison page. It is not duplicated inside Restaurant capability pages.

## Route consolidation map

Do not delete routes during planning. Remove unapproved routes from navigation and indexation first. Add permanent redirects only after destination sections exist and hosting support is confirmed.

### Restaurant POS

| Existing route | Proposed treatment | Destination |
|---|---|---|
| `pos-ordering.html` | Retire category-only page | `restaurant-pos.html` |
| `tables-floor-plan.html` | Convert to section | `restaurant-pos.html#tables-floor-plan` |
| `customer-facing-display.html` | Convert to section | `restaurant-pos.html#customer-facing-display` |
| `offline-mode.html` | Convert to section | `restaurant-pos.html#offline-mode` |
| `refund-void-tracking.html` | Convert to section | `restaurant-pos.html#refunds-voids` |

### Online and self-service ordering

| Existing route | Proposed treatment | Destination |
|---|---|---|
| `self-service-kiosk.html` | Convert to section | `online-qr-ordering.html#self-service-kiosk` |
| `mobile-ordering-loyalty.html` | Split into relevant sections | `online-qr-ordering.html#mobile-ordering` and `customers-growth.html#loyalty` |

### Kitchen Operations

| Existing route | Proposed treatment | Destination |
|---|---|---|
| `kitchen-display-system.html` | Convert to substantial section; reconsider only after demand research | `kitchen-service.html#kitchen-display` |
| `order-routing-stations.html` | Convert to section | `kitchen-service.html#routing-stations` |
| `prep-time-order-tracking.html` | Convert to section | `kitchen-service.html#preparation-tracking` |
| `kitchen-alerts.html` | Convert to section | `kitchen-service.html#alerts` |
| `kitchen-performance.html` | Convert to section | `kitchen-service.html#performance` |

### Inventory and Food Cost

| Existing route | Proposed treatment | Destination |
|---|---|---|
| `ingredient-inventory.html` | Convert to section | `inventory-purchasing.html#ingredient-inventory` |
| `recipes-costing.html` | Convert to substantial section | `inventory-purchasing.html#recipes-food-cost` |
| `recipe-versioning.html` | Convert to subsection | `inventory-purchasing.html#recipes-food-cost` |
| `waste-tracking.html` | Convert to section | `inventory-purchasing.html#waste` |
| `inventory-valuation.html` | Convert to section | `inventory-purchasing.html#valuation` |
| `low-stock-alerts.html` | Convert to subsection | `inventory-purchasing.html#stock-alerts` |
| `vendor-management.html` | Convert to section | `inventory-purchasing.html#suppliers` |
| `purchases-orders.html` | Convert to section | `inventory-purchasing.html#purchase-orders` |
| `purchase-suggestions.html` | Convert to section | `inventory-purchasing.html#purchasing-decisions` |
| `vendor-price-tracking.html` | Convert to subsection | `inventory-purchasing.html#suppliers` |
| `advanced-inventory-analysis.html` | Convert to section | `inventory-purchasing.html#analysis` |

### Customers and CRM

| Existing route | Proposed treatment | Destination |
|---|---|---|
| `customer-accounts-profiles.html` | Convert to section | `customers-growth.html#customer-profiles` |
| `crm-preferences.html` | Convert to subsection | `customers-growth.html#customer-profiles` |
| `customer-order-history.html` | Convert to subsection | `customers-growth.html#order-history` |
| `reservations-waitlist.html` | Convert to substantial section; reconsider only after scope and demand research | `customers-growth.html#reservations-waitlist` |
| `loyalty-gift-cards.html` | Convert to section | `customers-growth.html#loyalty-gift-cards` |
| `customer-analytics.html` | Convert to section | `customers-growth.html#customer-analytics` |
| `restaurant-website-feature.html` | Convert to section and cross-link Marketing Solutions | `customers-growth.html#restaurant-website` |
| `branded-customer-app.html` | Convert to section | `customers-growth.html#customer-app` |
| `push-notifications.html` | Convert to subsection | `customers-growth.html#customer-app` |

### HR, Payroll and Team

| Existing route | Proposed treatment | Destination |
|---|---|---|
| `workforce.html` | Retire overlapping category page | `hr-payroll.html` |
| `staff-accounts.html` | Convert to section | `hr-payroll.html#staff-accounts` |
| `roles-permissions.html` | Convert to section | `hr-payroll.html#roles-permissions` |
| `scheduling-shifts.html` | Convert to substantial section | `hr-payroll.html#scheduling` |
| `attendance-timesheets.html` | Convert to section | `hr-payroll.html#attendance-timesheets` |
| `staff-performance.html` | Convert to section | `hr-payroll.html#staff-performance` |
| `tip-management.html` | Convert to subsection | `hr-payroll.html#tips` |
| `hr-employee-records.html` | Convert to section | `hr-payroll.html#employee-records` |
| `payroll-salary-management.html` | Convert to substantial section | `hr-payroll.html#payroll` |
| `labour-costs-forecasting.html` | Convert to section with qualified claims | `hr-payroll.html#labour-costs` |
| `qavyo-staff-app.html` | Convert to section | `hr-payroll.html#staff-app` |
| `business-apps.html` | Retire category-only page | Relevant Customer, Ordering, and HR sections |

### Reporting and Day Close

| Existing route | Proposed treatment | Destination |
|---|---|---|
| `cash-management.html` | Convert to section | `money-reporting-close.html#cash-management` |
| `expense-tracking.html` | Convert to section | `money-reporting-close.html#expenses` |
| `day-close-till-reconciliation.html` | Convert to substantial section | `money-reporting-close.html#day-close` |
| `profit-loss-reporting.html` | Convert to section | `money-reporting-close.html#profit-loss` |
| `advanced-reporting.html` | Convert to section | `money-reporting-close.html#reporting` |
| `sales-by-channel.html` | Convert to subsection | `money-reporting-close.html#reporting` |
| `report-filters-export.html` | Convert to subsection | `money-reporting-close.html#reporting` |

### Multi-Location

| Existing route | Proposed treatment | Destination |
|---|---|---|
| `locations-central-menus.html` | Convert to section | `multi-location-groups.html#locations-menus` |
| `central-menu-controls.html` | Merge with central menus section | `multi-location-groups.html#locations-menus` |
| `stock-transfers.html` | Convert to section | `multi-location-groups.html#stock-transfers` |
| `central-purchasing-inventory.html` | Convert to section | `multi-location-groups.html#central-purchasing` |
| `consolidated-reporting.html` | Convert to section | `multi-location-groups.html#consolidated-reporting` |
| `location-comparisons.html` | Convert to subsection | `multi-location-groups.html#consolidated-reporting` |
| `group-franchise-regional-management.html` | Convert to section | `multi-location-groups.html#group-control` |
| `location-level-permissions.html` | Convert to section | `multi-location-groups.html#permissions` |
| `benchmarking-group-reporting.html` | Convert to section with qualified claims | `multi-location-groups.html#benchmarking` |

### Qavyo Intelligence

| Existing route | Proposed treatment | Destination |
|---|---|---|
| `daily-intelligence.html` | Convert to section | `intelligence.html#daily-view` |
| `weekly-monthly-reviews.html` | Convert to section | `intelligence.html#reviews` |
| `changes-unusual-activity.html` | Convert to section | `intelligence.html#unusual-changes` |
| `stock-purchasing-intelligence.html` | Convert to example | `intelligence.html#stock-purchasing` |
| `profit-pricing-intelligence.html` | Convert to example | `intelligence.html#profit-pricing` |
| `staff-labour-intelligence.html` | Convert to example | `intelligence.html#staff-labour` |
| `location-group-intelligence.html` | Convert to example | `intelligence.html#locations-groups` |
| `executive-reports-health-view.html` | Convert to section with qualified claims | `intelligence.html#executive-view` |

### Conditional Delivery page

| Existing route | Proposed treatment | Destination if Delivery page is approved |
|---|---|---|
| `fleet-driver-assignment.html` | Convert to section | `delivery-operations.html#fleet-assignment` |
| `gps-tracking-routes.html` | Convert to section after scope confirmation | `delivery-operations.html#routes-tracking` |
| `delivery-performance.html` | Convert to section | `delivery-operations.html#performance` |
| `distance-based-fees.html` | Convert to section after scope confirmation | `delivery-operations.html#distance-fees` |

If Delivery is not approved as a full page, distribute confirmed sections between Online & QR Ordering and Kitchen Operations.

### Conditional Payments page

| Existing route | Proposed treatment | Destination if Payments page is approved |
|---|---|---|
| `taking-payments.html` | Convert to section | `payments.html#taking-payments` |
| `payment-providers.html` | Convert to qualified section | `payments.html#providers` |
| `fees-processing.html` | Convert to qualified section | `payments.html#fees-processing` |
| `payment-reconciliation.html` | Convert to section and cross-link Reporting | `payments.html#reconciliation` |

## Restaurant menu proposal

The menu should expose important buying and operating areas. It should not reproduce the feature directory.

Column headings organize links. They are not category pages.

```text
Restaurants

Run service
├── Restaurant POS
├── Online & QR Ordering
├── Kitchen Operations
└── Inventory & Food Cost

Manage the business
├── HR, Payroll & Team
├── Reporting & Day Close
├── Multi-Location
└── Qavyo Intelligence

Customers & growth
├── Customers & CRM
├── Reservations & Loyalty        [anchor into Customers & CRM]
├── Delivery Operations           [only if approved]
└── Marketing Solutions

Choose & start
├── Restaurant Software Overview
├── Pricing
├── Hardware & Devices             [page or Restaurant anchor]
├── Payments                       [page or qualified Restaurant anchor]
└── Start 30 Days Free             [primary action]
```

### Desktop behaviour

- Use four clear columns.
- Keep column headings non-interactive.
- Give Qavyo Intelligence restrained emphasis.
- Keep Start 30 Days Free as the single primary action.
- Do not list Floor Plan, Kiosk, Offline Mode, Recipes, Scheduling, or other supporting features.
- Keep All Products & Features under Resources for visitors who want the complete inventory.

### Mobile behaviour

- Use the same order and destinations as desktop.
- Put the overview first.
- Use one Restaurants accordion, then the four labelled groups.
- Keep the primary Start Free action visible after the grouped links.
- Do not create a different mobile taxonomy.

## Expected result

This proposal reduces the Restaurant architecture from dozens of thin destinations to:

- 10 core Restaurant capability pages, including the overview and Intelligence.
- Up to 3 conditional product pages.
- Pricing as the existing buying page.
- Supporting features explained as anchored sections.
- One feature directory for exhaustive browsing.

The final count depends on product-truth, buyer-research, and route-scoring gates.

## Approval decisions

Before implementation, approve:

1. The 10 core pages.
2. Whether Delivery deserves a full page.
3. Whether Payments deserves a full page.
4. Whether Hardware deserves a full page.
5. Whether Reservations & Loyalty should appear as a direct menu anchor.
6. The four menu groups and their order.
7. The route redirect and indexation approach.
