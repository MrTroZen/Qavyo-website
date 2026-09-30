# Website architecture

This document records the current information-architecture direction. It is intentionally not a finalized sitemap.

## Brand hierarchy

```text
Qavyo (parent technology company)
├── Restaurant Software
│   ├── POS & Ordering
│   ├── Kitchen
│   ├── Inventory & Purchasing
│   ├── Customers & Loyalty
│   ├── Team & Workforce
│   ├── Multi-location
│   └── Qavyo Intelligence
├── Retail Software (Qavyo Retail Software)
│   ├── Clothing & Fashion
│   ├── Electronics
│   ├── Repair Shops
│   ├── Grocery & Convenience
│   ├── Salon & Spa
│   ├── Hardware & Sanitary
│   ├── Paint
│   └── Tiles
├── Farm Software (Qavyo Farm Software)
│   └── Broiler Farming
└── Solutions
    ├── Marketing & Communication
    │   ├── SMS Marketing
    │   ├── Email Marketing
    │   └── Marketing Automation
    ├── Web & Growth
    │   ├── Website Building
    │   └── Website SEO
    └── Intelligence
        └── Qavyo Intelligence
```

Qavyo Restaurant Software is Qavyo's connected restaurant operating platform, not merely a POS. Its named navigation capabilities belong to the Restaurant Software category and must not be presented as unrelated products or as a separate sub-brand.

Qavyo Retail Software is one software family organized by retail business type. Qavyo Farm Software is a separate family and currently includes only Broiler Farming. Do not invent additional verticals. Products are software customers use to operate; Solutions are additional capabilities and services that help businesses market, communicate, grow, or understand operations.

Qavyo Intelligence appears in both architectures for different reasons: as an important Restaurant Software capability under Products and as an operational intelligence outcome under Solutions. Its name belongs to the Qavyo brand. These links may lead to the same future destination and must not imply duplicate products or pages.

## Corporate navigation direction

The global navigation structure is Products, Solutions, Pricing, Resources, and Company, followed by Sign In, Talk to Sales, and the primary Start Free action. Products organizes Qavyo Restaurant Software, Qavyo Retail Software, and Farm Software. Solutions separately organizes Marketing & Communication, Web & Growth, and Intelligence. Do not introduce separate sub-brands unless explicitly approved.

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
