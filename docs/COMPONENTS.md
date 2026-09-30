# Component guidance

This file records reusable patterns as they are approved. Update it whenever a reusable component or meaningful variant is introduced.

## Container

`.container` provides the standard maximum width and responsive gutter. `.container--narrow` controls readable text-led sections. Do not add arbitrary page-level widths when either pattern works.

## Typography

Global heading and body rules live in `css/base.css`; type tokens live in `css/tokens.css`. `.eyebrow` is a compact contextual label and should be used sparingly. `.lede`, `.text-large`, and `.text-small` cover common text hierarchy without local one-off sizes.

## Buttons

- `.button.button--primary`: the principal action in a section.
- `.button.button--secondary`: a lower-priority action on a light surface.
- `.button.button--on-dark`: a clear action on a dark surface.

Buttons use modest radii, strong labels, visible focus, and a minimum touch-friendly height. Avoid inventing colour variants without a semantic reason.

## Links

Default links retain browser-understandable semantics. `.text-link` provides a prominent inline or standalone directional link. Links and buttons must not be distinguished by colour alone when context is ambiguous.

## Sections

`.section` supplies standard responsive vertical rhythm. `.section--compact`, `.section--bordered`, and `.section--dark` are initial variants. A section variant should represent a reusable structural treatment, not a single page's decoration.

## Header and navigation

The global header is a compact sticky white surface with a fine lower border. It contains the replaceable text wordmark, primary navigation, account/sales utilities, and one primary conversion action.

Desktop navigation uses explicit buttons for dropdowns rather than hover-only interaction. Only one dropdown may be open at once. The three mega-menus use the same restrained visual system but have purpose-specific structures: Products presents three software families, Restaurants groups detailed operational capabilities into four scannable areas, and Solutions presents Marketing & Communication, Web & Growth, and Qavyo Intelligence. Resources is a restrained single-column menu and also houses company links.

At widths up to `60rem`, desktop navigation is replaced by a dedicated full-height mobile menu. Products, Restaurants, Solutions, and Resources retain top-level expandable panels, with only one panel open at a time. Their internal categories are presented as clearly divided, directly readable sections rather than recreating desktop columns or adding nested accordions. Opening the mobile menu locks background scrolling. Touch targets are at least approximately 44px.

Required behaviour lives in `js/main.js`: click and keyboard activation, `ArrowDown` entry into desktop menus, one-open-menu enforcement for desktop dropdowns and mobile top-level accordions, outside-click dismissal, Escape dismissal with focus restoration, mobile accordion state, and viewport-change cleanup. Triggers must retain accurate `aria-expanded` and `aria-controls` relationships.

Unavailable routes use `data-prototype-link` and are prevented from navigating until real destinations exist. Replace these placeholders with real URLs as pages are approved; do not create fake pages solely for navigation.

## Footer

`.site-footer` is the global public footer component using the deep navy background (`#0d2130`). It features a top brand/status block, a 4-column structured link grid (Products, Restaurants, Solutions, Resources) aligned with approved navigation destinations, and a bottom bar with dynamic current-year copyright and prototype legal links. Subordinate elements utilize `.wordmark--on-dark` and high-contrast links with visible focus outlines. Layout adapts responsively from a 4-column desktop grid to a 2-column tablet layout and stacked mobile sections.

## Cards

`.card` is a restrained bordered surface for content that needs containment. Do not default every feature or idea to a card. Prefer layout, typography, and dividers when grouping is already clear.

## Product UI frames

`.product-frame` demonstrates the initial framing language for illustrative operational UI. Frames need a clear explanatory purpose, legible content, and an illustrative label when not showing the real product. Avoid fake metrics and decorative dashboard clutter.

## Device Ecosystem Grid

`.rst-ecosystem` presents a clean architectural diagram illustrating device flexibility without looking like a consumer electronics catalog. It anchors on a central operational engine (`.rst-ecosystem__core`) connected via subtle operational signals to 4 device roles: supported phones, supported tablets, dedicated POS terminals, and kitchen display systems. Responsive rules collapse from 4 columns to 2 columns on tablet and 1 column on mobile.

## Connected Progression Journey

`.rst-switch-journey` visualises a multi-phase transition journey using numbered steps (`.rst-journey-step`) connected by horizontal rule lines (`.rst-journey-step__connector`). It clarifies process stages (Understand → Prepare → Get Ready → Ongoing Support) without relying on heavy isolated cards. Connectors hide automatically on tablet and mobile viewports.

## Operational Support Showcase

`.rst-support-showcase` gives prominent, high-contrast visual weight to confirmed business commitments (such as 24/7 continuous support) without creating disconnected alert boxes. It pairs a primary narrative block with structured operational pillars (`.rst-support-pillar`) using semantic checkmarks.

## Closing Conversion Section

`.rst-final-cta` is a focused full-width dark surface (`section--dark`) providing authoritative closure to major product pages. It features a high-contrast headline, concise value proposition, primary and secondary CTA buttons, and tertiary metadata/pricing links.

## Responsive and accessibility requirements

Every component must keep a logical reading and tab order, visible keyboard focus, sufficient colour contrast, meaningful semantics, and reasonable touch targets. Responsive behaviour must be designed, not assumed. Motion must respect reduced-motion preferences.
