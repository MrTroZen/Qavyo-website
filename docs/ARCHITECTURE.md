# Website architecture

This document records the current information-architecture direction. It is intentionally not a finalized sitemap.

## Brand hierarchy

```text
Qavyo (parent technology company)
├── Products (software customers use to operate)
│   ├── Restaurant Software
│   │   └── Cafeo
│   │       ├── POS & Ordering
│   │       ├── Kitchen
│   │       ├── Inventory & Purchasing
│   │       ├── Customers & Loyalty
│   │       ├── Team & Workforce
│   │       ├── Multi-location
│   │       └── Cafeo Intelligence
│   ├── Qavyo Retail Software
│   │   ├── Clothing & Fashion
│   │   ├── Electronics
│   │   ├── Repair Shops
│   │   ├── Grocery & Convenience
│   │   ├── Salon & Spa
│   │   ├── Hardware & Sanitary
│   │   ├── Paint
│   │   └── Tiles
│   └── Qavyo Farm Software
│       └── Broiler Farming
└── Solutions (additional capabilities and services)
    ├── Marketing & Communication
    │   ├── SMS Marketing
    │   ├── Email Marketing
    │   └── Marketing Automation
    ├── Web & Growth
    │   ├── Website Building
    │   └── Website SEO
    └── Intelligence
        └── Cafeo Intelligence
```

Cafeo is Qavyo's connected restaurant operating software, not merely a POS. Its named navigation capabilities belong to Cafeo and must not be presented as unrelated Qavyo products.

Qavyo Retail Software is one software family organized by retail business type. Qavyo Farm Software is a separate family and currently includes only Broiler Farming. Do not invent additional verticals. Products are software customers use to operate; Solutions are additional capabilities and services that help businesses market, communicate, grow, or understand operations.

Cafeo Intelligence appears in both architectures for different reasons: as a Cafeo capability under Products and as an operational intelligence outcome under Solutions. These links may lead to the same future destination and must not imply duplicate products or pages.

## Corporate navigation direction

The global navigation structure is Products, Solutions, Pricing, Resources, and Company, followed by Sign In, Talk to Sales, and the primary Start Free action. Products organizes Restaurant Software/Cafeo, Qavyo Retail Software, and Qavyo Farm Software. Solutions separately organizes Marketing & Communication, Web & Growth, and Intelligence.

This establishes the navigation hierarchy and reusable interaction pattern, not a finalized sitemap. Most destinations remain safe prototype links until their pages and routes are approved.

## Page development principles

- Build one page and section at a time.
- Preserve approved sections unless a requested change requires touching them.
- Use shared tokens and components before adding page-specific styling.
- Keep page-specific CSS in `css/pages/` once real pages are introduced.
- Validate each section at desktop, laptop, tablet, and mobile widths.
- Do not publish product claims, prices, compatibility statements, integrations, or proof points without confirmation.

## Current repository state

The project is a static prototype using semantic HTML, CSS, and small amounts of vanilla JavaScript. `index.html` is currently a foundation verification page, not a homepage. No public sitemap or page routes are approved yet.
