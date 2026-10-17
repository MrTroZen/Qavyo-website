# Qavyo connected website map

This document defines the intended page hierarchy and connection model for the Qavyo public website. It is the planning source of truth for future hub and feature pages. It does not make unbuilt routes public, and it does not authorize new product claims.

## Navigation principle

Visitors should be able to move through the website in three clear levels:

```text
Entry page
  -> Feature hub
    -> Focused feature page
```

- Entry pages help visitors choose a relevant area. The approved Home and Pricing pages are the primary entry points.
- Feature hubs explain a complete capability area, show how its parts connect, and direct visitors to focused pages.
- Focused feature pages explain one workflow or feature group in depth and always provide a route back to the hub and onward to a relevant next area.

A visitor should not need to return to the homepage to continue exploring related capabilities.

## Canonical tree

```text
Qavyo
|-- Home [approved entry page]
|   |-- Restaurant Software
|   |-- Retail Software
|   |-- Farm Software [planned]
|   |-- Qavyo Intelligence
|   |-- Marketing Solutions
|   `-- Pricing [approved entry page]
|
|-- Restaurant Software [platform overview]
|   |-- POS & Ordering [hub]
|   |   |-- Restaurant POS
|   |   |-- Tables & Floor Plan
|   |   |-- Online & QR Ordering
|   |   |-- Self-Service Kiosk
|   |   |-- Customer-Facing Display
|   |   |-- Offline Mode
|   |   `-- Refund & Void Tracking
|   |
|   |-- Kitchen & Service [hub]
|   |   |-- Kitchen Display System
|   |   |-- Order Routing & Stations
|   |   |-- Prep-Time & Order Tracking
|   |   |-- Kitchen Alerts
|   |   `-- Kitchen Performance
|   |
|   |-- Inventory & Purchasing [hub]
|   |   |-- Ingredient Inventory
|   |   |-- Recipes & Costing
|   |   |-- Waste Tracking
|   |   |-- Inventory Valuation
|   |   |-- Suppliers & Purchasing
|   |   `-- Stock & Purchasing Insights
|   |
|   |-- Customers & Growth [hub]
|   |   |-- Customer Accounts & CRM
|   |   |-- Reservations & Waitlist
|   |   |-- Loyalty & Gift Cards
|   |   |-- Customer Analytics
|   |   `-- Restaurant Website
|   |
|   |-- Workforce [hub]
|   |   |-- Staff Accounts
|   |   |-- Roles & Permissions
|   |   |-- Scheduling & Shifts
|   |   |-- Attendance & Timesheets
|   |   |-- Staff Performance
|   |   `-- Tip Management
|   |
|   |-- HR & Payroll [hub]
|   |   |-- HR & Employee Records
|   |   |-- Payroll & Salary Management
|   |   `-- Labour Costs & Forecasting
|   |
|   |-- Business Apps [hub]
|   |   |-- Branded Customer App
|   |   |-- Qavyo Staff App
|   |   |-- Mobile Ordering & Loyalty
|   |   `-- Push Notifications
|   |
|   |-- Money, Reporting & Close [hub]
|   |   |-- Cash Management
|   |   |-- Expense Tracking
|   |   |-- Day Close & Till Reconciliation
|   |   |-- Profit & Loss Reporting
|   |   `-- Advanced Reporting
|   |
|   |-- Delivery Operations [hub or hub section]
|   |   |-- Fleet & Driver Assignment
|   |   |-- GPS Tracking & Routes
|   |   |-- Delivery Performance
|   |   `-- Distance-Based Fees
|   |
|   |-- Multi-Location & Groups [hub]
|   |   |-- Locations & Central Menus
|   |   |-- Stock Transfers
|   |   |-- Consolidated Reporting
|   |   |-- Group, Franchise & Regional Management
|   |   |-- Central Purchasing & Inventory
|   |   |-- Location-Level Permissions
|   |   `-- Benchmarking & Group Reporting
|   |
|   |-- Qavyo Intelligence [shared capability hub]
|   `-- Payments [hub]
|
|-- Qavyo Intelligence [shared capability hub]
|   |-- Daily Intelligence
|   |-- Weekly & Monthly Reviews
|   |-- Changes & Unusual Activity
|   |-- Stock & Purchasing Intelligence
|   |-- Profit & Pricing Intelligence
|   |-- Staff & Labour Intelligence
|   |-- Location & Group Intelligence
|   `-- Executive Reports & Health View
|
|-- Marketing Solutions [solution hub]
|   |-- Social Media Marketing [focused page exists]
|   |-- SMS Marketing [focused page exists]
|   |-- Email Marketing [focused page exists]
|   |-- Website Building [focused page exists]
|   `-- Website SEO [focused page exists]
|
|-- Retail Software [product-family hub]
|   |-- Clothing & Fashion [vertical page exists]
|   |-- Electronics [vertical page exists]
|   |-- Repair Shops [planned]
|   |-- Grocery & Convenience [planned]
|   |-- Salon & Spa [planned]
|   |-- Hardware & Sanitary [planned]
|   `-- Paint & Tiles [planned]
|
|-- Farm Software [planned product-family hub]
|   `-- Broiler Farming [planned vertical page]
|
|-- Payments [shared capability hub]
|   |-- Taking Payments [scope to confirm]
|   |-- Payment Providers [scope to confirm]
|   |-- Fees & Processing [scope to confirm]
|   `-- Reconciliation [scope to confirm]
|
`-- Pricing [approved entry page]
    |-- Relevant feature hub from each plan category
    |-- Qavyo Intelligence
    |-- Hardware
    `-- Payments
```

## Hub-page model

Every feature hub should answer five questions in this order:

1. What part of the business does this area help run?
2. How do its features work together?
3. What individual capabilities are available?
4. How does this area connect with the rest of Qavyo?
5. Where should the visitor go next?

A hub should provide a useful overview without becoming a duplicate of its focused pages. Each feature summary should link to a dedicated page only after that page is approved and built. Until then, the summary remains unlinked or uses the established prototype-link behaviour.

## Focused feature-page model

Each focused page should include:

- A plain-language outcome and scope.
- The primary workflow from start to finish.
- Connected inputs and outputs from other Qavyo areas.
- A small set of verified capabilities.
- Any important device, human-control, compatibility, or commercial qualification.
- Links back to the parent hub and to one or two genuinely related next pages.
- A relevant pricing or start action.

Focused pages must not imply that conceptual connections are automated integrations unless that behaviour is confirmed.

## Connection rules

### From Home

Home remains an orientation page. Its existing links should continue to send visitors to product-family pages, Qavyo Intelligence, Marketing Solutions, and Pricing. Feature-level discovery begins on the relevant hub rather than adding a large feature directory to Home.

### From Pricing

Pricing remains a buying and comparison page. In a future navigation pass, named plan categories and important features may link to their canonical hubs or focused pages. Pricing copy, plan structure, and visual design remain unchanged.

### Between hubs

Use contextual cross-links where workflows genuinely meet:

- POS & Ordering -> Kitchen & Service, Customers & Growth, Money & Reporting, Payments
- Kitchen & Service -> Inventory & Purchasing, Workforce, Qavyo Intelligence
- Inventory & Purchasing -> Money & Reporting, Multi-Location, Qavyo Intelligence
- Workforce -> HR & Payroll, Business Apps, Qavyo Intelligence
- Customers & Growth -> Business Apps, Marketing Solutions, Qavyo Intelligence
- HR & Payroll -> Workforce, Money & Reporting, Qavyo Intelligence
- Business Apps -> POS & Ordering, Customers & Growth, Workforce
- Payments -> POS & Ordering, Money & Reporting, Pricing
- Every operational hub -> Qavyo Intelligence when a confirmed Intelligence story exists

Cross-links should be editorial and selective. Do not render every possible relationship as a link on every page.

## Naming decisions

- Use **Qavyo Intelligence**, not a separate AI brand. “AI” can appear as explanatory language only when accurate.
- Use **Workforce** for scheduling, attendance, timesheets, performance, and tips.
- Use **HR & Payroll** for employee records, salaries, payroll, and labour-cost planning.
- Use **Business Apps** as the hub label; individual customer and staff apps sit beneath it.
- Use **Payments** for payment acceptance and processing. Keep it commercially separate from software pricing.
- Keep **Marketing Solutions** conceptually separate from core restaurant software, even when a commercial plan includes access to marketing capabilities.

## Page-status rules

- Approved pages may be linked as canonical destinations.
- Planned pages must not be added to public navigation until their content and route are approved.
- Unconfirmed Payments detail areas above are structural placeholders only, not product claims.
- Home and Pricing are approved and should not be redesigned while the hub system is built.

## Recommended build order

1. Restaurant Software overview: reshape its directory role without changing Home or Pricing.
2. POS & Ordering hub: establish the reusable hub-page pattern.
3. Workforce hub and HR & Payroll hub: validate how adjacent hubs cross-link without duplicating content.
4. Business Apps hub.
5. Payments hub after its product scope is confirmed.
6. Expand Qavyo Intelligence into the shared capability hub while preserving its approved operating-loop story.
7. Add focused feature pages one workflow at a time.
8. Connect approved destinations from Pricing in a dedicated link-only pass.

