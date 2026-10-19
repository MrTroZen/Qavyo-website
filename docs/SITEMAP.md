# Qavyo connected website map

This document defines the approved target hierarchy and connection model for the Qavyo public website. It does not make unbuilt routes public and does not authorize unconfirmed product claims.

## Navigation principle

The public website uses a two-level product-content model:

```text
Entry or overview page
  -> Major product, vertical, capability, or solution page
    -> Supporting sections and anchor links
```

A separate third-level feature page is exceptional. Create one only when buyers need substantial help understanding a distinct workflow and the page passes the scoring and evidence gates in `WEBSITE-DELIVERY-PLAN.md`.

The primary navigation is:

```text
Retail | Restaurants | Solutions | Pricing | Resources
```

This structure answers five buyer questions:

- Retail: Which type of retail business do I run?
- Restaurants: Which major part of restaurant operation do I need to understand?
- Solutions: Which additional growth or communication service do I need?
- Pricing: What is included and what does it cost?
- Resources: Where can I find complete, supporting, company, or help information?

Farm Software is outside the current public website scope. Existing Farm files are legacy route candidates pending a separate redirect and removal task. They must not appear in public navigation, the feature directory, internal recommendations, or the XML sitemap.

## Canonical tree

```text
Qavyo
|-- Home
|
|-- Retail
|   |-- Retail Software Overview
|   |-- Clothing & Fashion
|   |-- Electronics
|   |-- Repair Shops
|   |-- Grocery & Convenience
|   |-- Salon & Spa
|   |-- Hardware & Sanitary
|   `-- Paint & Tiles
|
|-- Restaurants
|   |-- Restaurant Software Overview
|   |
|   |-- Run service
|   |   |-- Restaurant POS
|   |   |   |-- Order entry, menus, and modifiers [section]
|   |   |   |-- Tables & Floor Plan [section]
|   |   |   |-- Customer-Facing Display [section]
|   |   |   |-- Offline Mode [section]
|   |   |   `-- Refunds & Voids [section]
|   |   |
|   |   |-- Online & QR Ordering
|   |   |   |-- Online Ordering [section]
|   |   |   |-- QR Ordering [section]
|   |   |   |-- Self-Service Kiosk [section]
|   |   |   `-- Mobile Ordering [section]
|   |   |
|   |   |-- Kitchen Operations
|   |   |   |-- Kitchen Display [section]
|   |   |   |-- Routing & Stations [section]
|   |   |   |-- Preparation Tracking [section]
|   |   |   |-- Kitchen Alerts [section]
|   |   |   `-- Kitchen Performance [section]
|   |   |
|   |   `-- Inventory & Food Cost
|   |       |-- Ingredient Inventory [section]
|   |       |-- Recipes & Costing [section]
|   |       |-- Waste & Valuation [section]
|   |       |-- Stock Alerts [section]
|   |       |-- Suppliers & Purchase Orders [section]
|   |       `-- Purchasing Decisions [section]
|   |
|   |-- Manage the business
|   |   |-- HR, Payroll & Team
|   |   |   |-- Employee Records [section]
|   |   |   |-- Staff Accounts, Roles & Permissions [section]
|   |   |   |-- Scheduling & Attendance [section]
|   |   |   |-- Payroll & Tips [section]
|   |   |   |-- Performance & Labour Review [section]
|   |   |   `-- Qavyo Staff App [section]
|   |   |
|   |   |-- Reporting & Day Close
|   |   |   |-- Cash & Expenses [section]
|   |   |   |-- Day Close & Reconciliation [section]
|   |   |   |-- Profit & Loss [section]
|   |   |   `-- Reporting, Channels & Export [section]
|   |   |
|   |   |-- Multi-Location
|   |   |   |-- Locations & Central Menus [section]
|   |   |   |-- Stock Transfers & Purchasing [section]
|   |   |   |-- Permissions & Group Control [section]
|   |   |   `-- Consolidated Reporting & Comparison [section]
|   |   |
|   |   `-- Qavyo Intelligence
|   |       |-- Daily View & Reviews [section]
|   |       |-- Changes & Unusual Activity [section]
|   |       |-- Stock & Purchasing [example]
|   |       |-- Profit & Pricing [example]
|   |       |-- Staff & Labour [example]
|   |       |-- Locations & Groups [example]
|   |       `-- Executive View [section]
|   |
|   |-- Customers & growth
|   |   |-- Customers & CRM
|   |   |   |-- Profiles, Preferences & Order History [section]
|   |   |   |-- Reservations & Waitlist [section]
|   |   |   |-- Loyalty & Gift Cards [section]
|   |   |   |-- Customer Analytics [section]
|   |   |   |-- Restaurant Website [section]
|   |   |   `-- Customer App & Notifications [section]
|   |   |
|   |   |-- Reservations & Loyalty [anchor into Customers & CRM]
|   |   |-- Delivery Operations [conditional page]
|   |   `-- Marketing Solutions [cross-link]
|   |
|   `-- Choose & start
|       |-- Pricing
|       |-- Hardware & Devices [conditional page or overview section]
|       |-- Payments [conditional page or overview section]
|       `-- Start 30 Days Free [conversion destination]
|
|-- Solutions
|   |-- Marketing Solutions Overview
|   |-- Social Media Marketing
|   |-- SMS Marketing
|   |-- Email Marketing
|   |-- Website Building
|   |-- Website SEO
|   `-- Qavyo Intelligence [shared canonical page]
|
|-- Pricing
|   |-- Restaurant plans
|   |-- Full Qavyo for 30 days
|   |-- Plan comparison
|   |-- Qavyo Intelligence
|   |-- Hardware qualification
|   `-- Payments qualification
|
|-- Resources
|   |-- All Products & Features
|   |-- Help & Support
|   |-- About Qavyo
|   |-- Contact
|   |-- Privacy
|   |-- Terms
|   `-- Accessibility
|
`-- Utility and conversion
    |-- Sign In
    |-- Start Free
    |-- Talk to Sales
    |-- Form Success
    |-- Form Error
    `-- 404
```

## Retail menu and page model

Retail is the first top-level menu. It replaces the current Products menu.

The menu contains:

```text
Retail
|-- Retail Software Overview
|-- Clothing & Fashion
|-- Electronics
|-- Repair Shops
|-- Grocery & Convenience
|-- Salon & Spa
|-- Hardware & Sanitary
`-- Paint & Tiles
```

The Retail overview explains connected retail operation across sales, products, stock, customers, reporting, locations, and Qavyo Intelligence. Retail business-type pages explain workflows that materially differ for that business type.

Do not create generic Retail feature pages merely because Restaurant has a page with a similar name. Shared capabilities remain sections until Retail-specific scope, buyer demand, and proof justify more depth.

Only approved Retail pages may become live links. A target destination may remain a non-interactive label until its content passes the page definition of done.

## Restaurant menu

Restaurant menu column headings organize links. They are not category pages.

```text
Run service
|-- Restaurant POS
|-- Online & QR Ordering
|-- Kitchen Operations
`-- Inventory & Food Cost

Manage the business
|-- HR, Payroll & Team
|-- Reporting & Day Close
|-- Multi-Location
`-- Qavyo Intelligence

Customers & growth
|-- Customers & CRM
|-- Reservations & Loyalty [section anchor]
|-- Delivery Operations [only if approved]
`-- Marketing Solutions

Choose & start
|-- Restaurant Software Overview
|-- Pricing
|-- Hardware & Devices [page or section]
|-- Payments [page or section]
`-- Start 30 Days Free
```

Desktop and mobile navigation must use the same taxonomy and essential destinations.

## Major capability-page model

Every major Restaurant capability page answers:

1. What operational problem does this area solve?
2. How does the workflow run from start to finish?
3. Which supporting features participate in that workflow?
4. How does this area connect to the rest of Qavyo?
5. What does a buyer need to understand before starting?
6. Where should the visitor go next?

Supporting features receive clear headings, concise explanations, meaningful product visuals, and stable anchor IDs. They do not receive separate pages by default.

## Separate-page rule

A supporting feature receives a standalone page only when it:

- Represents a major buying concern.
- Requires substantial workflow explanation.
- Has confirmed product depth and evidence.
- Has distinct search or campaign demand.
- Answers objections not covered by its parent page.
- Passes the focused-page score in `WEBSITE-DELIVERY-PLAN.md`.

Otherwise, keep it as a section.

The route-by-route Restaurant consolidation proposal is maintained in `RESTAURANT-CONTENT-CONSOLIDATION-PROPOSAL.md`.

## Connection rules

### Home

Home remains the parent-brand orientation page. Its approved content is not redesigned during sitemap implementation. A later link-only pass removes Farm destinations and connects approved Retail, Restaurant, Intelligence, Solutions, and Pricing destinations.

### Retail

- Retail overview links to each approved Retail business type.
- Every Retail business-type page links back to Retail overview.
- Related Retail business types may cross-link selectively.
- Retail pages may link to Qavyo Intelligence only when the example is confirmed for Retail.

### Restaurants

- Restaurant overview links directly to major capability pages.
- Major capability pages link back to Restaurant overview.
- Restaurant POS links to Online Ordering, Kitchen, Reporting, and Payments when relevant.
- Online Ordering links to Customers, Kitchen, Delivery when approved, and Marketing Solutions when relevant.
- Kitchen links to Inventory, HR and Team, Reporting, and Intelligence.
- Inventory links to Reporting, Multi-Location, and Intelligence.
- Customers links to Online Ordering, Marketing Solutions, and Intelligence.
- HR and Team links to Reporting, Multi-Location, and Intelligence.
- Reporting links to Payments, Inventory, Multi-Location, and Intelligence.
- Multi-Location links to Inventory, HR and Team, Reporting, and Intelligence.
- Cross-links remain editorial and selective.

### Pricing

Pricing remains the canonical buying and comparison page. Named plan categories may link to approved major pages or stable section anchors in a dedicated link-only pass.

### Solutions

Marketing Solutions remains conceptually separate from core restaurant and retail software. Contextual cross-links may connect relevant customer-growth stories without implying automated integration.

## Canonical shared pages

- `intelligence.html` is the only Qavyo Intelligence overview.
- `pricing.html` is the only Restaurant Software pricing page.
- `solutions.html` is the only Marketing Solutions overview.
- `retail.html` is the only Retail Software overview.
- `restaurant.html` is the only Restaurant Software overview.
- Payments and Hardware remain conditional canonical pages until scope is approved.

## Page-status and indexation rules

- Approved pages may be linked and indexed.
- Unfinished pages must not appear as finished destinations.
- Scaffold pages must not enter the XML sitemap.
- Unfinished reachable pages require an approved `noindex` strategy.
- Retired routes require a destination and permanent redirect plan before deletion.
- Farm routes are excluded from the target public sitemap and navigation.
- Home and Pricing remain frozen except for approved link, metadata, accessibility, performance, or defect work.

## Sitemap implementation order

1. Approve this target sitemap.
2. Classify every current route as Keep, Merge, Defer, Retire, or Utility.
3. Confirm the 10 core Restaurant pages.
4. Confirm conditional Delivery, Payments, and Hardware treatment.
5. Confirm which Retail vertical pages are ready for public links.
6. Build destination sections before redirecting small feature routes.
7. Implement the Retail and Restaurant menus together on desktop and mobile.
8. Remove Farm links from Home, navigation, footer, feature directory, and internal recommendations in a dedicated implementation task.
9. Apply `noindex`, redirects, canonical tags, and XML sitemap changes only after hosting behaviour is confirmed.
10. Connect Pricing in a dedicated link-only pass.
