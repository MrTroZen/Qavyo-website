# Qavyo public website

The permanent source repository for Qavyo's public website. Qavyo is a parent technology company spanning Restaurant Software, Retail Software, Farm Software, Qavyo Intelligence, and business solutions.

The project is being built incrementally from its design-system foundation. The root `index.html` contains the approved Qavyo homepage, with dedicated pages for Restaurant Software, Qavyo Intelligence, Pricing, and Marketing Solutions.

## Technology

- Semantic HTML5
- CSS3 with custom properties
- Minimal vanilla JavaScript
- Manrope served by Google Fonts, with system fallbacks

There is no framework, package manager, bundler, or build step.

## Structure

```text
.
├── index.html              # Qavyo homepage
├── restaurant.html         # Qavyo Restaurant Software page
├── retail.html             # Canonical Qavyo Retail Software overview
├── intelligence.html       # Canonical Qavyo Intelligence page
├── pricing.html            # Canonical Qavyo Restaurant Software pricing page
├── solutions.html          # Canonical Qavyo Marketing Solutions overview
├── social-media-marketing.html # Canonical Qavyo Social Media Marketing page
├── sms-marketing.html       # Canonical Qavyo SMS Marketing page
├── email-marketing.html     # Canonical Qavyo Email Marketing page
├── website-building.html    # Canonical Qavyo Website Building page
├── website-seo.html         # Canonical Qavyo Website SEO page
├── assets/
│   ├── icons/              # Approved icon assets
│   ├── images/             # Approved photography and imagery
│   └── product-ui/         # Product captures and UI illustrations
├── css/
│   ├── tokens.css          # Approved design values
│   ├── base.css            # Reset, typography, and global semantics
│   ├── layout.css          # Containers, sections, and grids
│   ├── components.css      # Reusable components and variants
│   └── pages/              # Page-specific styles when pages are added
├── js/
│   └── main.js             # Small shared enhancements
├── docs/
│   ├── BRAND.md
│   ├── ARCHITECTURE.md
│   └── COMPONENTS.md
└── AGENTS.md               # Persistent instructions for coding agents
```

Asset directories intentionally contain `.gitkeep` placeholders until approved assets are added.

## Run locally

Opening `index.html` directly works for basic review. A local server is recommended so behaviour matches normal hosting:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

Any simple static server is acceptable; no repository dependency is required.

## Design documentation

Read these before implementation work:

1. [`docs/BRAND.md`](docs/BRAND.md) before visual design.
2. [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) before creating pages or navigation.
3. [`docs/COMPONENTS.md`](docs/COMPONENTS.md) before adding or changing reusable UI.

## Development principles

Work incrementally: build, run, inspect, check responsive behaviour, fix, approve, commit, and then continue. Reuse approved tokens and components, preserve approved sections, and do not invent product claims or proof. Keep accessibility and small-screen behaviour part of every component's definition of done.

Every completed and verified task must be committed as a focused change and pushed to the GitHub remote. See `AGENTS.md` for the mandatory review, verification, commit, push, and reporting checklist.

Never place secrets, credentials, or private API keys in frontend code.
