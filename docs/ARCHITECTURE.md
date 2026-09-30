# Website architecture

This document records the current information-architecture direction. It is intentionally not a finalized sitemap.

## Global navigation

```text
Qavyo
├── Products
│   ├── Restaurant Software
│   │   ├── Qavyo Intelligence
│   │   ├── Hardware
│   │   └── Payments
│   ├── Retail Software
│   │   ├── Clothing & Fashion
│   │   ├── Electronics
│   │   ├── Repair Shops
│   │   ├── Grocery & Convenience
│   │   ├── Salon & Spa
│   │   ├── Hardware & Sanitary
│   │   └── Paint & Tiles
│   └── Farm Software
│       └── Broiler Farming
├── Restaurants
│   ├── Run Your Restaurant
│   │   ├── POS & Ordering
│   │   ├── Kitchen & Service
│   │   ├── Tables & Floor
│   │   ├── Inventory & Stock
│   │   ├── Recipes & Costing
│   │   └── Purchasing & Suppliers
│   ├── Grow Your Restaurant
│   │   ├── Online Ordering
│   │   ├── Restaurant Website
│   │   ├── Reservations
│   │   ├── Customers & CRM
│   │   └── Loyalty
│   ├── Manage Your Business
│   │   ├── Staff & Scheduling
│   │   ├── Attendance & Payroll
│   │   ├── Reporting
│   │   └── Multi-location
│   └── Qavyo Intelligence
└── Solutions
    ├── Marketing & Communication
    │   ├── Social Media Marketing
    │   ├── SMS Marketing
    │   └── Email Marketing
    ├── Web & Growth
    │   ├── Website Building
    │   └── Website SEO
    └── Qavyo Intelligence
```

The primary header order is Products, Restaurants, Solutions, Pricing, and Resources, followed by Sign In, Talk to Sales, and Start Free. Company information belongs within Resources and the future public footer rather than as another top-level item.

The three primary dropdowns answer different questions:

- Products identifies the software family or business category relevant to a visitor.
- Restaurants explains what Qavyo Restaurant Software can help a restaurant operator do.
- Solutions presents additional marketing, communication, web, growth, and intelligence capabilities.

Qavyo Intelligence may appear in Products, Restaurants, and Solutions because each entry reflects a different visitor context. Every occurrence will lead to the same future Intelligence destination.

## Page strategy

### Restaurant Software

Use one substantial Restaurant Software page initially. Restaurant capability links should deep-link to approved sections on that page rather than generating a separate page for every feature. Planned stories include POS & Ordering, Kitchen & Service, Inventory & Cost, Customers & Growth, Team & Operations, Multi-location, and an introduction to Qavyo Intelligence. Conceptual routes such as `/restaurant/#pos-ordering` are directional only; no routes are implemented yet.

### Retail Software

Retail business types will eventually receive individual landing pages because their workflows and messaging differ. Planned destinations are Clothing & Fashion, Electronics, Repair Shops, Grocery & Convenience, Salon & Spa, Hardware & Sanitary, and Paint & Tiles. These pages are not part of the current task.

### Farm Software

Broiler Farming will eventually receive its own landing page. Farm Software must remain expandable, but no additional farming verticals are approved.

### Qavyo Intelligence

Qavyo Intelligence will initially have one comprehensive page, not a collection of small AI feature pages. That page may tell stories about protecting margins, inventory, waste, sales, revenue, customer behaviour, purchasing, supplier changes, forecasting, anomalies, management time, multi-location visibility, recommendations, expected impact, and actions. These are page sections and stories, not separate destinations.

The Intelligence page should communicate the operating loop:

`WATCH → DETECT → EXPLAIN → RECOMMEND → ACT → MEASURE → LEARN`

## Navigation implementation

Unavailable destinations use the existing safe prototype-link behavior. Do not create empty pages or fake production routes to satisfy navigation links. As pages and sections are approved, replace prototype links with their real destinations.

## Page development principles

- Build one page and section at a time.
- Preserve approved sections unless a requested change requires touching them.
- Use shared tokens and components before adding page-specific styling.
- Keep page-specific CSS in `css/pages/` once real pages are introduced.
- Validate each section at desktop, laptop, tablet, and mobile widths.
- Do not publish product claims, prices, compatibility statements, integrations, or proof points without confirmation.

## Current repository state

The project is a static prototype using semantic HTML, CSS, and small amounts of vanilla JavaScript. `index.html` contains the complete approved homepage with global navigation and public footer. `restaurant.html` contains the reframed Qavyo Restaurant Software page organized into a concise, conversion-focused 8-section narrative:
- Section 1: Hero (`.rst-hero`) — One stable illustrative operations interface and confirmed commercial reassurance (£29/month, Full Qavyo for 30 days, 24/7 support)
- Section 2: One Connected System (`#platform-overview`) — Operational connection flow (Order → Kitchen → Inventory → Customer → Reporting → Intelligence) and four compact capability groups preserving deep-link anchors (`#pos`, `#pos-ordering`, `#kitchen`, `#tables`, `#inventory`, `#recipes`, `#purchasing`, `#customers`, `#loyalty`, `#online-ordering`, `#reservations`, `#restaurant-website`, `#website`, `#staff`, `#team`, `#payroll`, `#reporting`, `#multi-location`)
- Section 3: Qavyo Intelligence (`#intelligence`) — Operational loop (Watch → Detect → Explain → Recommend → Act → Measure → Learn) with one qualitative diagnostic example and explicit human control
- Section 4: Clear Pricing (`#pricing`, `#plans`) — Three transparent software tiers: Starter (£29/mo), Growth (£79/mo), Business (£149/mo); hardware and payment processing separate
- Section 5: 30 Days. Full Qavyo. (`#full-access`) — Unrestricted full-platform experience before choosing a plan
- Section 6: Work Where Your Restaurant Works (`#hardware`, `#devices`) — Software first, hardware when needed (supported phones, tablets, compatible equipment, dedicated hardware)
- Section 7: 24/7 Support & Getting Started (`#support`, `#getting-started`) — A concise statement of confirmed round-the-clock support
- Section 8: Final CTA (`#get-started`) — High-conversion closure with primary/secondary actions
- Global public footer integration

### Confirmed Architectural &amp; Product Facts
- **One Connected Platform:** Qavyo Restaurant Software is one connected platform spanning front and back of house.
- **Qavyo Intelligence:** A core operational intelligence capability that tracks live operational signals, not a generic chatbot.
- **Device Flexibility:** Qavyo experiences may run on supported phones, tablets, and compatible equipment where appropriate; compatibility must be confirmed for the intended setup.
- **Hardware Separation:** Dedicated restaurant hardware is available where needed and priced separately from software plans.
- **Payment Processing:** Payment processing is separate from software pricing.
- **24/7 Support:** Continuous round-the-clock operational support is confirmed and provided for restaurant operations.
