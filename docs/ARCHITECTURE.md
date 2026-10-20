# Website architecture

This document records the current information-architecture direction. The connected hierarchy of overview pages, major pages, and supporting sections is maintained in [`SITEMAP.md`](SITEMAP.md). Delivery status and the complete page task list are maintained in [`WEBSITE-CHECKLIST.md`](WEBSITE-CHECKLIST.md). The current route-by-route record is maintained in [`PAGE-INVENTORY.md`](PAGE-INVENTORY.md).

## Page hierarchy

The website uses a two-level product-content model: entry or overview page, then a major product, vertical, capability, or solution page. Supporting features normally appear as sections with stable anchor links. A third-level feature page is exceptional and requires demonstrated buyer need, confirmed product depth, distinct intent, and enough evidence to justify a useful page. See `SITEMAP.md` for the canonical tree, connection rules, naming decisions, and build order.

## Global navigation

```text
Qavyo
├── Products
│   ├── Retail Software Overview
│   ├── Clothing & Fashion
│   ├── Electronics
│   ├── Repair Shops
│   ├── Grocery & Convenience
│   ├── Salon & Spa
│   ├── Hardware & Sanitary
│   ├── Paint & Tiles
│   ├── Farm Software
│   ├── Broiler Farming
│   ├── Healthcare Software
│   ├── Hospitals
│   └── Diagnostic Centres
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

The primary header order is Products, Restaurants, Solutions, Pricing, and Resources, followed by Sign In, Talk to Sales, and Start Free. Company information belongs within Resources and the future public footer rather than as another top-level item.

The three primary dropdowns answer different questions:

- Products groups the Retail, Farming, and Healthcare software families. Retail destinations remain live; Farm Software and Broiler Farming use their existing routes; Healthcare destinations remain safe prototype links until approved pages exist.
- Restaurants explains the major operating areas that Qavyo Restaurant Software can help a restaurant operator understand.
- Solutions presents additional marketing, communication, web, growth, and intelligence capabilities.

Qavyo Intelligence may appear in Restaurants and Solutions because each entry reflects a different visitor context. Every navigational occurrence leads to the canonical `intelligence.html` page.

The Resources menu includes `feature-directory.html` as the complete product-and-feature index. Desktop and mobile navigation expose the same essential Products and Restaurant destinations. Major capability and vertical pages use breadcrumbs and return actions to link back to their canonical overview.

## Page strategy

### Restaurant Software

`restaurant.html` is the canonical Restaurant Software overview. It links directly to the major Restaurant pages: Restaurant POS, Online & QR Ordering, Kitchen Operations, Inventory & Food Cost, Customers & CRM, HR, Payroll & Team, Reporting & Day Close, Multi-Location, Qavyo Intelligence, Delivery Operations, Hardware & Devices, and Payments. Small features such as Floor Plan, Offline Mode, Kiosk, Recipes, Scheduling, and report export remain sections inside the closest major page. The approved route-by-route proposal is recorded in `RESTAURANT-CONTENT-CONSOLIDATION-PROPOSAL.md`.

### Retail Software

`retail.html` is the canonical Qavyo Retail Software overview and the lead destination in the top-level Retail menu. It presents connected retail operations across sales, products, stock, customer context, reporting, locations, and Qavyo Intelligence without asserting unconfirmed detailed capabilities. The target Retail menu includes Clothing & Fashion, Electronics, Repair Shops, Grocery & Convenience, Salon & Spa, Hardware & Sanitary, and Paint & Tiles. Only approved pages become live links; unfinished destinations remain outside public navigation until they pass the page definition of done.

### Farm Software

Farm Software and Broiler Farming are available from the Products menu through the existing `farm.html` and `broiler-farming.html` routes. Their scaffold content remains provisional until each page receives an approved product narrative.

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

`restaurant.html` is the master implementation of the reusable conversion-page standard recorded in `CONVERSION-STANDARD.md`. Its narrative is:
- Section 1: Conversion hero (`.rst-hero`) — outcome-led promise, primary and secondary actions, confirmed commercial reassurance, and one clearly labelled illustrative connected-operation interface
- Section 2: Operational problem (`.rst-problem`) — recognisable friction across service, costs, teams, and reporting without unsupported quantitative claims
- Section 3: Qavyo Connected Operations (`#platform-overview`) — Order → Kitchen → Inventory → Customer → Reporting → Intelligence, followed by three outcome-led explanations
- Section 4: Major capability directory (`.rst-directory`) — dedicated Restaurant routes grouped as Run service, Manage the business, Customers & growth, and Choose & start; small features remain supporting context and legacy deep-link anchors are preserved
- Section 5: Qavyo Intelligence (`#intelligence`) — Watch → Detect → Explain → Recommend → Act → Measure → Learn, with a qualitative diagnostic example and explicit human control
- Section 6: Full Qavyo access (`#full-access`) — Start → Set up → Run → Choose, confirmed starting price, and clear separation of hardware and payment processing
- Section 7: Delivery, Hardware, and Payments (`.rst-decisions`) — three permanent decision areas with dedicated canonical routes
- Section 8: Buyer FAQ (`#support`) — native disclosure answers covering trial access, separate costs, compatible devices, feature hierarchy, human control, and 24/7 support
- Section 9: Final CTA (`#get-started`) — primary and secondary actions with a concise commercial postscript
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
