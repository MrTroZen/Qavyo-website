# Website architecture

This document records the current information-architecture direction. The connected hierarchy of overview pages, major pages, and supporting sections is maintained in [`SITEMAP.md`](SITEMAP.md). Delivery status and the complete page task list are maintained in [`WEBSITE-CHECKLIST.md`](WEBSITE-CHECKLIST.md). The current route-by-route record is maintained in [`PAGE-INVENTORY.md`](PAGE-INVENTORY.md).

## Page hierarchy

The website uses a two-level product-content model: entry or overview page, then a major product, vertical, capability, or solution page. Supporting features normally appear as sections with stable anchor links. A third-level feature page is exceptional and requires demonstrated buyer need, confirmed product depth, distinct intent, and enough evidence to justify a useful page. See `SITEMAP.md` for the canonical tree, connection rules, naming decisions, and build order.

## Global navigation

```text
Qavyo
├── Retail
│   ├── Retail Software Overview
│   ├── Clothing & Fashion
│   ├── Electronics
│   ├── Repair Shops
│   ├── Grocery & Convenience
│   ├── Salon & Spa
│   ├── Hardware & Sanitary
│   └── Paint & Tiles
├── Restaurants
│   ├── Run service
│   │   ├── Restaurant POS
│   │   ├── Online & QR Ordering
│   │   ├── Kitchen Operations
│   │   └── Inventory & Food Cost
│   ├── Manage the business
│   │   ├── HR, Payroll & Team
│   │   ├── Reporting & Day Close
│   │   ├── Multi-Location
│   │   └── Qavyo Intelligence
│   ├── Customers & growth
│   │   ├── Customers & CRM
│   │   ├── Reservations & Loyalty
│   │   ├── Delivery Operations
│   │   └── Marketing Solutions
│   └── Choose & start
│       ├── Restaurant Software Overview
│       ├── Pricing
│       ├── Hardware & Devices
│       ├── Payments
│       └── Start 30 Days Free
├── Solutions
│   ├── Marketing & Communication
│   │   ├── Social Media Marketing
│   │   ├── SMS Marketing
│   │   └── Email Marketing
│   ├── Web & Growth
│   │   ├── Website Building
│   │   └── Website SEO
│   └── Qavyo Intelligence
├── Pricing
└── Resources
```

The primary header order is Retail, Restaurants, Solutions, Pricing, and Resources, followed by Sign In, Talk to Sales, and Start Free. Company information belongs within Resources and the future public footer rather than as another top-level item.

The three primary dropdowns answer different questions:

- Retail identifies the Retail Software overview and relevant retail business type.
- Restaurants explains the major operating areas that Qavyo Restaurant Software can help a restaurant operator understand.
- Solutions presents additional marketing, communication, web, growth, and intelligence capabilities.

Qavyo Intelligence may appear in Restaurants and Solutions because each entry reflects a different visitor context. Every navigational occurrence leads to the canonical `intelligence.html` page.

The Resources menu includes `feature-directory.html` as the complete product-and-feature index. Desktop and mobile navigation expose the same live Retail and Restaurant destinations. Major capability and vertical pages use breadcrumbs and return actions to link back to their canonical overview.

## Page strategy

### Restaurant Software

`restaurant.html` is the canonical Restaurant Software overview. It links directly to the major Restaurant pages: Restaurant POS, Online & QR Ordering, Kitchen Operations, Inventory & Food Cost, Customers & CRM, HR, Payroll & Team, Reporting & Day Close, Multi-Location, Qavyo Intelligence, Delivery Operations, Hardware & Devices, and Payments. Small features such as Floor Plan, Offline Mode, Kiosk, Recipes, Scheduling, and report export remain sections inside the closest major page. The approved route-by-route proposal is recorded in `RESTAURANT-CONTENT-CONSOLIDATION-PROPOSAL.md`.

### Retail Software

`retail.html` is the canonical Qavyo Retail Software overview and the lead destination in the top-level Retail menu. It presents connected retail operations across sales, products, stock, customer context, reporting, locations, and Qavyo Intelligence without asserting unconfirmed detailed capabilities. The target Retail menu includes Clothing & Fashion, Electronics, Repair Shops, Grocery & Convenience, Salon & Spa, Hardware & Sanitary, and Paint & Tiles. Only approved pages become live links; unfinished destinations remain outside public navigation until they pass the page definition of done.

### Farm Software

Farm Software is removed from the current public sitemap and navigation. Existing `farm.html` and `broiler-farming.html` files remain legacy route candidates until a separate task approves their indexation, redirect, archive, or deletion treatment.

### Qavyo Intelligence

`intelligence.html` is the canonical Qavyo Intelligence page. It is a concise, visual product narrative rather than a collection of small AI feature pages. Intelligence links across Restaurants, Solutions, the homepage, Restaurant Software, mobile navigation, and the footer point to this page.

The Intelligence page should communicate the operating loop:

`WATCH → DETECT → EXPLAIN → RECOMMEND → ACT → MEASURE → LEARN`

### Pricing

`pricing.html` is the canonical pricing page for Qavyo Restaurant Software. It presents the confirmed Starter (£29/month), Growth (£79/month), and Business (£149/month) plans; the 30-day Full Qavyo experience; detailed plan comparison; Intelligence levels; and the separation of software, hardware, and payment-processing costs. Global Pricing links lead to this page, while the Restaurant Software page retains its concise contextual pricing overview.

### Marketing Solutions

`solutions.html` is the canonical Marketing Solutions overview. Its five services link to their canonical pages. `social-media-marketing.html` focuses on public presence; `sms-marketing.html` on short, direct communication; `email-marketing.html` on richer communication; `website-building.html` on a professional online home; and `website-seo.html` on connecting search intent with clear, relevant pages without promising rankings or unconfirmed technical scope. Qavyo Intelligence remains separate at `intelligence.html`.

The Marketing family is complete and frozen. Future work should preserve the distinct page identities and limit changes to approved content, verified defects, or intentional architecture updates.

## Navigation implementation

Unavailable destinations use the existing safe prototype-link behavior. Scaffolded routes are route-inventory candidates, not automatically valid public destinations. As major pages gain their approved supporting sections, apply the route treatment from `RESTAURANT-CONTENT-CONSOLIDATION-PROPOSAL.md` and the final route-disposition plan.

The shared header uses flat, full-width mega menus for Retail, Restaurants, Solutions, and Resources. Desktop columns use thin dividers, concise title-and-description links, and a directional arrow revealed on hover, keyboard focus, or the current page. Mobile keeps the same taxonomy in one-open-at-a-time disclosure panels. Farm is absent from both header modes.

## Page development principles

- Build one page and section at a time.
- Preserve approved sections unless a requested change requires touching them.
- Use shared tokens and components before adding page-specific styling.
- Keep page-specific CSS in `css/pages/` once real pages are introduced.
- Validate each section at desktop, laptop, tablet, and mobile widths.
- Do not publish product claims, prices, compatibility statements, integrations, or proof points without confirmation.

## Current repository state

The project is a static prototype using semantic HTML, CSS, and small amounts of vanilla JavaScript. `index.html` contains the complete approved homepage with global navigation and public footer. Major-page, supporting-feature, Retail-vertical, Intelligence-detail, Payments, and legacy Farm scaffold routes exist in the repository. These scaffolded routes are not final content and are recorded in `PAGE-INVENTORY.md`; their presence does not guarantee a public page.

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

`intelligence.html` contains the approved Qavyo Intelligence narrative:
- Hero with the illustrative "Qavyo Intelligence · Today" interface
- From Signal to Decision (`#how-it-works`) with the complete operating loop and one qualitative restaurant example
- Daily, weekly, and monthly Intelligence briefings (`#briefings`) with compact operational-area coverage
- An unquantified time-saving comparison focused on reducing manual report searching
- Connected operational data and human control (`#connected-control`)
- A focused Intelligence route index (`#intelligence-details`) connecting the overview to its detailed structural pages
- Final 30-day Full Qavyo CTA (`#get-started`)

### Confirmed Architectural &amp; Product Facts
- **One Connected Platform:** Qavyo Restaurant Software is one connected platform spanning front and back of house.
- **Qavyo Intelligence:** A core operational intelligence capability that tracks live operational signals, not a generic chatbot.
- **Device Flexibility:** Qavyo experiences may run on supported phones, tablets, and compatible equipment where appropriate; compatibility must be confirmed for the intended setup.
- **Hardware Separation:** Dedicated restaurant hardware is available where needed and priced separately from software plans.
- **Payment Processing:** Payment processing is separate from software pricing.
- **24/7 Support:** Continuous round-the-clock operational support is confirmed and provided for restaurant operations.
