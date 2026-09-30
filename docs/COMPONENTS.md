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

## Operational Flow Diagram

`.rst-flow` visually connects core restaurant workflows (`ORDER → KITCHEN → INVENTORY → CUSTOMER → REPORTING → INTELLIGENCE`) horizontally on desktop and seamlessly reflows on tablet and mobile without horizontal overflow.

## Capability Overview Grid

`.rst-capabilities` organizes operational capabilities into four concise groups (Serve, Control, Grow, Manage) and preserves all restaurant navigation deep links, including both the current and legacy aliases for POS and restaurant website destinations. The groups use typography and rules rather than a field of feature cards.

## Proactive Intelligence Showcase

`.rst-intelligence-loop` and `.rst-insight` present the continuous operational loop (Watch → Detect → Explain → Recommend → Act → Measure → Learn) and one qualitative diagnostic case (Observation → Reason → Prediction → Recommendation → Expected Impact → Action). The pattern must state that an authorised operator controls any resulting change.

## Intelligence Page Product Interfaces

The dedicated Intelligence page uses `.qi-today` for a small proactive attention feed, `.qi-loop` and `.qi-case` for the operating loop and one diagnostic path, and `.qi-briefing-ui` for the Daily / Weekly / Monthly briefing view. Briefing tabs follow the ARIA tabs pattern and support click, Left/Right arrow, Home, and End keys through `js/pages/intelligence.js`. `.qi-connected-map` shows approved Qavyo operational sources flowing into signals, briefings, explanations, and recommendations; `.qi-control-note` must remain alongside it to state that the operator controls any change.

## Transparent Pricing & Access Flow

`.rst-pricing-grid` and `.rst-plan` form the approved full comparison: Starter (£29/month) contains the core restaurant-operation list, Growth (£79/month) is the highlighted "Most Popular" plan with management capabilities, and Business (£149/month) adds centralised multi-location capabilities. `.rst-pricing-access` closes the comparison with the approved 30-day Full Qavyo message. `.rst-trial` then explains the trial journey (Start → Full Qavyo → 30 Days → Choose). Hardware and payment processing remain separate.

The canonical Pricing page uses `.pricing-plan-grid` for aligned plan summaries and `.pricing-table` for the detailed comparison. At mobile widths, `.pricing-plan-selector` shows one plan column at a time without horizontal page scrolling; `js/pages/pricing.js` keeps each selector's `aria-pressed` state synchronized with the visible column. The table retains explicit Included / Not included text so availability is never conveyed through colour alone.

## Device Progression Grid

`.rst-device-panel` explains the qualified hardware path: use supported phones, tablets, or compatible equipment; add dedicated restaurant hardware where needed; and confirm compatibility with Qavyo. It must not imply universal device support.

## Operational Support Showcase

`.rst-support` gives clear weight to the confirmed 24/7 support offer without inventing channels, service levels, onboarding promises, or response times.

## Closing Conversion Section

`.rst-final-cta` is a focused full-width dark surface (`section--dark`) providing authoritative closure to major product pages. It features a high-contrast headline, concise value proposition, primary and secondary CTA buttons, and tertiary metadata/pricing links.

## Marketing Customer Journey & Solutions Discovery

The Marketing Solutions overview uses `.hero-journey` for the hero composition around "Your Business", and `.journey-track` (`.journey-flow`) for the horizontal continuous customer journey on desktop that transforms into a vertical progression on mobile. The stages map `01 Get found` (Website SEO), `02 Attract` (Social Media), `03 Connect` (Website), `04 Reach` (SMS + Email), and `05 Return` (Ongoing communication & Returning Customer endpoint).

The solutions discovery section uses `.marketing-solution-grid` to present the five confirmed growth channels with intentional visual hierarchy: two featured cards on the top row (`.marketing-solution--featured`: Social Media Marketing and Website Building) and three compact cards on the second row (SMS Marketing, Email Marketing, Website SEO). Each card features illustrative UI compositions without claiming automation, performance results, or unconfirmed service scope. Links use prototype navigation until individual pages are constructed.

The value section (`.marketing-manage`) uses `.manage-flow` to show channel convergence (Social, SMS, Email, Website, SEO) through a single partner (Qavyo) to support "Your Business", visually reinforcing operational simplicity without claiming technical automation or backend synchronization.

## Responsive and accessibility requirements

Every component must keep a logical reading and tab order, visible keyboard focus, sufficient colour contrast, meaningful semantics, and reasonable touch targets. Responsive behaviour must be designed, not assumed. Motion must respect reduced-motion preferences.
