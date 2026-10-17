# Website architecture

This document records the current information-architecture direction. The connected hierarchy of entry pages, feature hubs, and focused feature pages is maintained in [`SITEMAP.md`](SITEMAP.md). Delivery status and the complete page task list are maintained in [`WEBSITE-CHECKLIST.md`](WEBSITE-CHECKLIST.md). The current route-by-route record is maintained in [`PAGE-INVENTORY.md`](PAGE-INVENTORY.md).

## Page hierarchy

The website uses three levels of discovery: entry page, feature hub, and focused feature page. Home and Pricing are approved entry pages. Hub pages explain a connected capability area before directing visitors to deeper feature pages. See `SITEMAP.md` for the canonical tree, connection rules, naming decisions, and build order.

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

Qavyo Intelligence may appear in Products, Restaurants, and Solutions because each entry reflects a different visitor context. Every navigational occurrence leads to the canonical `intelligence.html` page.

The Resources menu includes `feature-directory.html` as the complete product-and-feature index. Desktop and mobile navigation expose the same live Product and Restaurant destinations. Focused feature pages use their breadcrumb and return action to link back to one canonical hub; hubs link onward to their focused pages.

## Page strategy

### Restaurant Software

Use one substantial Restaurant Software page initially. Restaurant capability links should deep-link to approved sections on that page rather than generating a separate page for every feature. Planned stories include POS & Ordering, Kitchen & Service, Inventory & Cost, Customers & Growth, Team & Operations, Multi-location, and an introduction to Qavyo Intelligence. Conceptual routes such as `/restaurant/#pos-ordering` are directional only; no routes are implemented yet.

### Retail Software

`retail.html` is the canonical Qavyo Retail Software overview. It presents connected retail operations across sales, products, stock, customer context, reporting, locations, and Qavyo Intelligence without asserting unconfirmed detailed capabilities. `retail-clothing-fashion.html` and `retail-electronics.html` are the canonical Clothing & Fashion and Electronics pages; both are linked from the global Products menu, Retail overview, and each other's Retail family context. Repair Shops, Grocery & Convenience, Salon & Spa, Hardware & Sanitary, Paints, and Tiles remain non-navigation labels until their individual pages are approved.

### Farm Software

Broiler Farming will eventually receive its own landing page. Farm Software must remain expandable, but no additional farming verticals are approved.

### Qavyo Intelligence

`intelligence.html` is the canonical Qavyo Intelligence page. It is a concise, visual product narrative rather than a collection of small AI feature pages. Existing Intelligence links across Products, Restaurants, Solutions, the homepage, Restaurant Software, mobile navigation, and the footer point to this page.

The Intelligence page should communicate the operating loop:

`WATCH → DETECT → EXPLAIN → RECOMMEND → ACT → MEASURE → LEARN`

### Pricing

`pricing.html` is the canonical pricing page for Qavyo Restaurant Software. It presents the confirmed Starter (£29/month), Growth (£79/month), and Business (£149/month) plans; the 30-day Full Qavyo experience; detailed plan comparison; Intelligence levels; and the separation of software, hardware, and payment-processing costs. Global Pricing links lead to this page, while the Restaurant Software page retains its concise contextual pricing overview.

### Marketing Solutions

`solutions.html` is the canonical Marketing Solutions overview. Its five services link to their canonical pages. `social-media-marketing.html` focuses on public presence; `sms-marketing.html` on short, direct communication; `email-marketing.html` on richer communication; `website-building.html` on a professional online home; and `website-seo.html` on connecting search intent with clear, relevant pages without promising rankings or unconfirmed technical scope. Qavyo Intelligence remains separate at `intelligence.html`.

The Marketing family is complete and frozen. Future work should preserve the distinct page identities and limit changes to approved content, verified defects, or intentional architecture updates.

## Navigation implementation

Unavailable destinations use the existing safe prototype-link behavior. Scaffolded product and feature routes are valid structural destinations, but must remain clearly labelled as pending detailed content until approved. As content is completed, replace the scaffold without changing its canonical route or parent-hub relationship.

## Page development principles

- Build one page and section at a time.
- Preserve approved sections unless a requested change requires touching them.
- Use shared tokens and components before adding page-specific styling.
- Keep page-specific CSS in `css/pages/` once real pages are introduced.
- Validate each section at desktop, laptop, tablet, and mobile widths.
- Do not publish product claims, prices, compatibility statements, integrations, or proof points without confirmation.

## Current repository state

The project is a static prototype using semantic HTML, CSS, and small amounts of vanilla JavaScript. `index.html` contains the complete approved homepage with global navigation and public footer. The planned product, capability-hub, focused-feature, retail-vertical, Farm, Intelligence-detail, and Payments routes now exist as connected structural pages. These scaffolded routes are not final content and are recorded in `PAGE-INVENTORY.md`.

`restaurant.html` contains the Qavyo Restaurant Software platform overview and capability directory, organized into a concise, conversion-focused 8-section narrative:
- Section 1: Hero (`.rst-hero`) — One stable illustrative operations interface and confirmed commercial reassurance (£29/month, Full Qavyo for 30 days, 24/7 support)
- Section 2: One Connected System (`#platform-overview`) — Operational connection flow (Order → Kitchen → Inventory → Customer → Reporting → Intelligence) and a capability directory covering Ordering, Kitchen, Inventory, Customers, Workforce, HR & Payroll, Business Apps, Reporting, Marketing, Multi-location, Payments, and Qavyo Intelligence while preserving established deep-link anchors
- Section 3: Qavyo Intelligence (`#intelligence`) — Operational loop (Watch → Detect → Explain → Recommend → Act → Measure → Learn) with one qualitative diagnostic example and explicit human control
- Section 4: Clear Pricing (`#pricing`, `#plans`) — Concise Starter (£29/month), Growth (£79/month), and Business (£149/month) summary directing visitors to the canonical Pricing page, plus the approved 30-day Full Qavyo access strip; hardware and payment processing remain separate
- Section 5: 30 Days. Full Qavyo. (`#full-access`) — Unrestricted full-platform experience before choosing a plan
- Section 6: Work Where Your Restaurant Works (`#hardware`, `#devices`) — Software first, hardware when needed (supported phones, tablets, compatible equipment, dedicated hardware)
- Section 7: 24/7 Support & Getting Started (`#support`, `#getting-started`) — A concise statement of confirmed round-the-clock support
- Section 8: Final CTA (`#get-started`) — High-conversion closure with primary/secondary actions
- Global public footer integration

`intelligence.html` contains the approved six-section Qavyo Intelligence narrative:
- Hero with the illustrative "Qavyo Intelligence · Today" interface
- From Signal to Decision (`#how-it-works`) with the complete operating loop and one qualitative restaurant example
- Daily, weekly, and monthly Intelligence briefings (`#briefings`) with compact operational-area coverage
- An unquantified time-saving comparison focused on reducing manual report searching
- Connected operational data and human control (`#connected-control`)
- Final 30-day Full Qavyo CTA (`#get-started`)

### Confirmed Architectural &amp; Product Facts
- **One Connected Platform:** Qavyo Restaurant Software is one connected platform spanning front and back of house.
- **Qavyo Intelligence:** A core operational intelligence capability that tracks live operational signals, not a generic chatbot.
- **Device Flexibility:** Qavyo experiences may run on supported phones, tablets, and compatible equipment where appropriate; compatibility must be confirmed for the intended setup.
- **Hardware Separation:** Dedicated restaurant hardware is available where needed and priced separately from software plans.
- **Payment Processing:** Payment processing is separate from software pricing.
- **24/7 Support:** Continuous round-the-clock operational support is confirmed and provided for restaurant operations.
