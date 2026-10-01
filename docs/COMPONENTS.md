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

The solutions discovery section uses `.marketing-solution-grid` to present the five confirmed growth channels with intentional visual hierarchy: two featured cards on the top row (`.marketing-solution--featured`: Social Media Marketing and Website Building) and three compact cards on the second row (SMS Marketing, Email Marketing, Website SEO). Each card features illustrative UI compositions without claiming automation, performance results, or unconfirmed service scope. All five services link to their canonical pages across global navigation, footers, and the discovery grid.

The value section (`.marketing-manage`) uses `.manage-flow` to show channel convergence (Social, SMS, Email, Website, SEO) through a single partner (Qavyo) to support "Your Business", visually reinforcing operational simplicity without claiming technical automation or backend synchronization.

The final conversion section (`.marketing-final`) provides authoritative closure on a full-width dark surface (`section--dark`) with a focused headline, concise invitation, and a single high-contrast primary CTA to talk to sales.

## Social Media Marketing Presence Ecosystem

The Social Media Marketing page hero uses `.social-presence` to depict an authentic content ecosystem around a local business (`Rowan & Co. Studio`). It illustrates the connection between upstream planning (`.social-plan-card`: Content Plan & ready status), an active social post composition (`.social-post-card`: business identity, editorial visual area, handcrafted caption, and restrained actions), and a downstream customer touchpoint (`.social-touchpoint-card`: customer discovery resulting in a studio visit). It purposefully omits fabricated engagement metrics, like counters, or follower statistics to maintain calm commercial credibility.

The "What Qavyo Helps With" section (`.social-helps`) pairs a four-principle strategic narrative (`01 Plan`, `02 Create`, `03 Stay Consistent`, `04 Connect`) with `.social-workspace`, an illustrative content-planning workspace. It represents a weekly rhythm (Mon, Wed, Fri), an active content blueprint, and a four-stage progression sequence (`Business moment → Content idea → Social content → Customer connection`) without claiming automated posting, artificial engagement guarantees, or unconfirmed service packages.

The "How It Works" section (`.social-process`) maps the continuous social media cycle through `.social-flow` (`01 Understand → 02 Plan → 03 Create → 04 Publish → 05 Improve`), reinforced by a visual return loop track that connects Step 05 back into the start of the next cycle. Underneath, a compact five-part worked example (`.social-example`) demonstrates how a single neutral business moment (such as a new studio collection) moves into customer communication and feedback without implying fixed turnaround promises or automated publishing.

The "A Consistent Presence" section (`.social-showcase`) serves as the editorial visual payoff of the page. It features `.social-mosaic`, an asymmetric presence wall presenting five distinct customer-facing moments for one fictional business (`Rowan & Co. Studio`): a dominant collection launch card, a business update (open workshop hours), a product feature (tableware spotlight), behind-the-scenes craft notes (kiln opening), and a weekend reminder. It demonstrates that consistency is about continuous varied touchpoints rather than repetitive advertising, without introducing platform logos, fake engagement numbers, or fabricated customer comments.

The "Part of the Customer Journey" section (`.social-journey`) bridges Social Media Marketing to the broader Qavyo Marketing Solutions ecosystem. It features a compact dual-endpoint relationship axis (`Customer ↔ Shared Touchpoints ↔ Your Business`) and a connected 5-node rail (`01 Get Found` / Website SEO, `02 Notice & Attract` / Social Media Marketing, `03 Visit & Connect` / Website Building, `04 Stay in Touch` / SMS & Email, and `05 Return` / Customer Relationship). Node 02 is visually emphasized with an active status badge (`Current service`), brand-blue accent ring, and subtle elevation to establish context ("You are here"). A restrained contextual link guides visitors to explore all Marketing Solutions on the canonical overview page without linking unbuilt services to 404 destinations or implying automated technical integrations.

The Social Media Marketing final CTA (`.social-cta`) closes the page on a full-width dark navy surface (`--color-dark`). It contains a strong two-line headline, one sentence of directional copy, and a single `button--on-dark` (Talk to Sales, `#prototype-navigation`). A purely decorative radial glow element (`.social-cta__bg`, `aria-hidden="true"`) adds very subtle brand-blue ambient warmth without distracting from the conversion action. There is no eyebrow, no secondary button, and no feature content — the section's only purpose is to give a clear next step after the story is complete. At 360 px the button stretches full width for easy tap access.

## SMS Marketing Direct Communication Ecosystem

The SMS Marketing page hero uses `.sms-composition` to illustrate direct, timely customer communication from a local business (`North & Co.`). It communicates the core three-stage communication sequence (`Business → Direct Message → Customer`) using Qavyo's signal and connection language. The focal object is a platform-neutral smartphone interface (`.sms-device`) showing a single grounded, clearly labeled illustrative message bubble (`Hi — a quick update from North & Co. Our new collection is now available in store.`), paired with an upstream business origin header and a downstream customer reception card (`.sms-touchpoint-card`). Contextual communication moment pills (`Business Update`, `Customer Reminder`, `Stay Connected`) demonstrate real-world communication moments without inventing automated campaigns, fake metrics, or two-way messaging mechanics.

The "Useful Customer Moments" section (`.sms-moments-section`) answers "When is SMS useful?" through a visual-first composition. It combines an editorial narrative with four selectable communication moments (`01 Business Update`, `02 Reminder`, `03 Something New`, `04 Announcement`) implemented as accessible tabs with keyboard navigation (`ArrowLeft`, `ArrowRight`, `ArrowUp`, `ArrowDown`, `Home`, `End`). Selecting a moment dynamically updates `.sms-studio-display`, a central platform-neutral phone interface previewing how each scenario translates into a focused, grounded customer notification for fictional local business `North & Co.`. The component strictly adheres to claims safety: no automated triggers, calendar/appointment integrations, audience segmentation, AI copywriting, bulk delivery metrics, or two-way conversational threads are represented.

The "How It Works" section (`.sms-process`) articulates how direct SMS communication moves from business reason to customer reception through a clean, linear 5-stage progression (`01 Choose the moment → 02 Write the message → 03 Review details → 04 Send directly → 05 Stay connected`). Each stage features numbered indices, forward connector indicators, succinct descriptions, and tangible UI cues (such as occasion chips, drafted copy quotes, verification checklists, and delivery signals). A linear transmission rail visually anchors the workflow as intentional and direct, avoiding the cyclical loop used in social media publishing. Underneath, a compact 5-part worked example (`.sms-example`) demonstrates how a single operational moment (an opening hours update for fictional local business `North & Co.`) progresses to timely customer delivery without implying automation, CRM segmentation, bulk blast metrics, or two-way conversational mechanics.

The "Customer Message Showcase" section (`.sms-showcase`) delivers the visual payoff of the page by showcasing what clear, respectful SMS customer communication looks like in practice. It pairs an asymmetric editorial header (`Keep the message simple and useful.`) with `.sms-showcase__board`, an open customer communication board featuring one dominant focal preview (`Something New` framed inside a platform-neutral phone interface) surrounded by three supporting message fragment panels (`Update`, `Reminder`, `Announcement`) for fictional local business `North & Co.`. The composition establishes clear visual hierarchy without repeating identical cards, using multiple phones, or imitating third-party messaging platforms (Apple, WhatsApp, Google). It avoids all promotional hype, fake discounts, artificial engagement metrics, personalization tokens, automation icons, and two-way chat simulations.

The "Part of the Customer Journey" section (`.sms-journey`) bridges SMS Marketing to the wider customer relationship before the final conversion. It uses a compact two-column layout: a concise strategic narrative on the left (`Stay connected beyond one moment.`) with a restrained contextual link to `solutions.html`, and a relationship ecosystem visual on the right. The visual features a dual relationship axis (`Customer ↔ Touchpoints ↔ Your Business`) above a 5-node progression rail (`01 Get Found` / Website SEO, `02 Get Noticed` / Social Media Marketing, `03 Explore` / Website Building, `04 Stay Connected` / SMS Marketing & Email Marketing, and `05 Return` / Customer Relationship). Node 04 is actively highlighted with a `Current service` status tag, brand blue accent border, and subtle elevation to establish context. Node 02 provides a contextual link to `social-media-marketing.html`, while unbuilt services remain safely unlinked plain text. The section avoids all claims of automated cross-channel data syncing, CRM tracking, or attribution funnels.

## Email Marketing Communication Story

The Email Marketing page uses `.email-preview` for fictional customer-facing communication, `.email-composition` to explain the additional editorial room email provides, and `.email-workflow__steps` for the human-reviewed sequence from choosing a message through staying connected. `.email-journey` places Email in the broader conceptual customer relationship without implying automated channel integration. Examples are illustrative and must not introduce automation, targeting, performance, deliverability, or analytics claims.

## Website Building Portfolio Story

The Website Building page uses the scoped `.wb-browser`, `.wb-site`, and `.wb-phone` compositions to present one clearly illustrative fictional business website across larger and smaller screens. `.wb-anatomy` explains customer-facing page structure through an annotated vertical website, while `.wb-process__assembly` shows business information becoming site structure and a reviewed concept without implying automated generation, fixed delivery timelines, or a specific technical stack. `.wb-showcase` is the portfolio-style visual centerpiece, and `.wb-journey` positions the website as the active Explore touchpoint without implying technical integration or journey tracking.

## Website SEO Search-to-Page Story

The Website SEO page uses scoped `.seo-query`, `.seo-result`, and `.seo-page-panel` compositions to explain the conceptual relationship between search intent and relevant website content. `.seo-process__rail` keeps the Understand, Organize, Clarify, Connect, and Improve sequence continuous rather than card-based, while `.seo-journey` presents SEO as the active Get Found touchpoint. The pattern must never imply rankings, traffic outcomes, technical deliverables, or automatic cross-channel tracking.

## Retail Connected Operation Story

The Retail Software overview uses `.retail-system` for an illustrative sale connected to product, stock, customer context, reporting, and Intelligence, and `.retail-flow` for the wider operational story. `.retail-types-grid` identifies the eight approved retail business types without linking to unbuilt vertical pages or inventing vertical-specific capabilities. `.retail-briefing` provides qualitative retail Intelligence examples with the required human-control statement, while `.retail-device-stage` communicates qualified phone and tablet use with hardware kept commercially separate.

The SMS Marketing final CTA (`.sms-cta`) provides authoritative closure to the completed page on a full-width dark surface (`--color-dark`). It features a high-contrast two-line headline (`Stay connected more directly.`), a single sentence of directional copy, and a primary `button--on-dark` linked to `#prototype-navigation` (`data-prototype-link`). A subtle dual-radial brand-blue ambient glow element (`.sms-cta__bg`, `aria-hidden="true"`) provides background warmth without distracting from the primary conversion action.

## Responsive and accessibility requirements

Every component must keep a logical reading and tab order, visible keyboard focus, sufficient colour contrast, meaningful semantics, and reasonable touch targets. Responsive behaviour must be designed, not assumed. Motion must respect reduced-motion preferences.
