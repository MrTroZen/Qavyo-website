# Website architecture

This document records the current information-architecture direction. It is intentionally not a finalized sitemap.

## Brand hierarchy

```text
Qavyo (parent technology company)
└── Products
    ├── Qavyo Restaurant (current lead product family)
    │   └── Grouped restaurant capability stories
    ├── Qavyo Retail (future)
    ├── Qavyo Marketing (future)
    └── Future products and services
```

Qavyo Restaurant is a connected restaurant operating platform, not merely a POS. Its broad capability set includes ordering, kitchen operations, online channels, customers, inventory, purchasing, workforce, reporting, multi-location operations, payments and hardware connections, and Qavyo Intelligence.

Do not create one page per capability. Group capabilities into understandable product stories, likely along themes such as service and ordering, inventory and operations, customers and growth, team and workforce, multi-location control, intelligence, hardware, payments, and pricing. These groups are directional and require approval before they become final navigation.

## Corporate navigation direction

The public navigation may eventually include Products, Solutions, Pricing, Resources, Company, Sign In, and conversion actions. It must be able to expose multiple Qavyo product families while making the current Restaurant offer easy to understand. Navigation and mega-menu structure are not yet approved.

## Page development principles

- Build one page and section at a time.
- Preserve approved sections unless a requested change requires touching them.
- Use shared tokens and components before adding page-specific styling.
- Keep page-specific CSS in `css/pages/` once real pages are introduced.
- Validate each section at desktop, laptop, tablet, and mobile widths.
- Do not publish product claims, prices, compatibility statements, integrations, or proof points without confirmation.

## Current repository state

The project is a static prototype using semantic HTML, CSS, and small amounts of vanilla JavaScript. `index.html` is currently a foundation verification page, not a homepage. No public sitemap or page routes are approved yet.
