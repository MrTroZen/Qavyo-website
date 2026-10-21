# Component guidance

This file records reusable patterns as they are approved. Update it whenever a reusable component or meaningful variant is introduced.

## Container

`.container` provides the standard maximum width and responsive gutter. `.container--narrow` controls readable text-led sections. Do not add arbitrary page-level widths when either pattern works.

## Typography

Global heading and body rules live in `css/base.css`; type tokens live in `css/tokens.css`. `.lede`, `.text-large`, and `.text-small` cover common text hierarchy without local one-off sizes.

Do not use `.eyebrow`, a kicker, or the blue-square-plus-uppercase-label pattern above page or section headings. Existing section-heading uses are legacy migration candidates and must not be copied into new work. Start sections directly with the heading and use supporting copy, spacing, or a structural divider when more hierarchy is needed. Compact uppercase text remains valid only when it carries real interface meaning, such as a product state, data label, or navigation group.

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

Desktop navigation uses explicit buttons for dropdowns rather than hover-only interaction. Only one dropdown may be open at once. Products, Restaurants, Solutions, and Resources open flat, full-width panels on the cool neutral canvas. Their columns use typography, whitespace, and thin vertical dividers rather than cards or decorative containers. Each destination uses `.mega-menu-link` with a clear title, optional description, and a directional arrow that appears on pointer hover, keyboard focus, or `aria-current="page"`. The interaction must not shift surrounding text.

At widths up to `60rem`, desktop navigation is replaced by a dedicated full-height mobile menu. Products, Restaurants, Solutions, and Resources retain top-level expandable panels, with only one panel open at a time. Their internal categories use `.mobile-nav-section` and the same `.mega-menu-link` destinations rather than nested accordions. Opening the mobile menu locks background scrolling. Touch targets are at least approximately 44px.

Restaurant navigation always includes the permanent Delivery Operations, Hardware & Devices, and Payments pages. Products is the first primary item and contains the approved Retail, Farm Software, and Healthcare Software groups in both desktop and mobile navigation.

Required behaviour lives in `js/main.js`: click and keyboard activation, `ArrowDown` entry into desktop menus, one-open-menu enforcement for desktop dropdowns and mobile top-level accordions, outside-click dismissal, Escape dismissal with focus restoration, mobile accordion state, and viewport-change cleanup. Triggers must retain accurate `aria-expanded` and `aria-controls` relationships.

Unavailable routes use `data-prototype-link` and are prevented from navigating until real destinations exist. Replace these placeholders with real URLs as pages are approved; do not create fake pages solely for navigation.

## Footer

`.site-footer` is the global public footer component using the deep navy background (`#0d2130`). It features a top brand/status block, a 4-column structured link grid (Products, Restaurants, Solutions, Resources) aligned with approved navigation destinations, and a bottom bar with dynamic current-year copyright and prototype legal links. Subordinate elements utilize `.wordmark--on-dark` and high-contrast links with visible focus outlines. Layout adapts responsively from a 4-column desktop grid to a 2-column tablet layout and stacked mobile sections.

## Cards

`.card` is a restrained bordered surface for content that needs containment. Do not default every feature or idea to a card. Prefer layout, typography, and dividers when grouping is already clear.

## Product UI frames

`.product-frame` demonstrates the initial framing language for illustrative operational UI. Frames need a clear explanatory purpose, legible content, and an illustrative label when not showing the real product. Avoid fake metrics and decorative dashboard clutter.

## Homepage Hero and Connected Ecosystem Stage

The Homepage Hero (`.home-hero`) establishes Qavyo as a comprehensive business technology company connecting operations, intelligence, and business solutions across restaurant, retail, and farm businesses:
- **Hero Grid**: Spacious two-column layout on desktop (~42/58%) pairing large dominant typography (`h1`) and scannable supporting copy with the illustrative `.hero-ecosystem` stage.
- **CTAs & Categories**: Primary CTA (`Explore Qavyo`) anchors to `#product-families`; secondary CTA links to `pricing.html`. Accompanied by a quiet category line (`Restaurant · Retail · Farm · Intelligence · Growth Solutions`).
- **Ecosystem Stage (`.hero-ecosystem`)**: A unified dark system tells one left-to-right story. Restaurant, Retail, and Farm Software enter from the left; the central Qavyo core visibly combines Marketing, Websites, Intelligence, and SMS & Email; the connected outcome on the right expresses supported business growth through `Get found`, `Reach customers`, and `Build momentum` without guaranteeing results or implying unsupported automation.
- **Motion**: Dashed signal paths, sequential product and capability emphasis, a quiet core pulse, and an Intelligence activity indicator reinforce the `Operate → Understand → Grow` relationship. All animations are decorative and disabled for `prefers-reduced-motion`.
- **Responsiveness**: Tablet preserves the full left-to-right relationship map. Mobile deliberately removes connection paths and presents the same story as a readable vertical sequence: Qavyo core, supporting capabilities, business families, then the growth outcome, without horizontal overflow.

## Page Hero Standard

All primary page heroes use the homepage H1 scale (`--text-page-hero`), minimum-height role (`--page-hero-min-height`), and top/bottom spacing role (`--page-hero-space`). These shared tokens preserve the same title prominence and distance from the global header across desktop, laptop, tablet, and mobile layouts. Page-specific CSS may control line length and composition, but must not redefine the hero title size or opening vertical spacing without explicit approval.

Use purposeful images, diagrams, and illustrative product interfaces whenever they make the page easier to understand. Every visual must explain a real concept or workflow, fit the page narrative, include meaningful alternative text when informative, reserve its layout dimensions, and be clearly labelled when illustrative. Do not add decorative filler, fabricated product screens, customer evidence, metrics, capabilities, or results.

## Homepage Business Workflow Selector

The homepage orientation section (`.home-workflow`) uses an accessible five-option tab selector to demonstrate how the same connected Retail foundation is shaped for Fashion, Electronics, Repair, Grocery, and Salon contexts. Selecting a business updates the Run and Understand examples together; the Grow story remains a consistent overview of Qavyo's business solutions. Fashion and Electronics may use their approved product-specific examples. Other retail contexts must stay within the confirmed sale or service activity, customer context, stock, reporting, and Intelligence foundation until specialist workflows are approved. The selector supports click, tap, arrow keys, Home, and End through `js/pages/home.js`, while all options remain fully readable in every state.

## Homepage Software Family Overview

The homepage product overview (`.software-overview`) uses an accessible Restaurant / Retail / Farm tab selector to replace the showcase content in place. Each panel has a distinct operational composition: a connected restaurant order flow, a multi-context retail workspace, or the currently defined Broiler Farming focus. Homepage CTAs route only to parent software pages; until a Farm Software page is approved, the Farm CTA retains safe prototype-link behavior. The selector supports click, tap, arrow keys, Home, and End through `js/pages/home.js`, and mobile panels simplify their diagrams rather than shrinking desktop UI.

## Homepage Qavyo Intelligence Showcase

The homepage Intelligence section (`.home-intelligence`) pairs a business question with one structured response surface: What changed, Why it matters, and Next move. Its accessible Restaurant / Retail / Repair / Salon selector updates the question, source labels, evidence, explanation, and recommendation together through `js/pages/home.js`. Restaurant and Retail examples may use their confirmed connected operating context; Repair and Salon must remain within approved service activity, customer, staff, operations, and reporting context until specialist workflows are defined. The component must remain human-controlled, non-chatbot, free of generic AI claims, and vertically readable on mobile.

## Homepage Business Solutions Showcase

The homepage Business Solutions section (`.home-solutions`) reuses the Pricing page segmented-control language for Website, SEO, Social, SMS, and Email. One service panel is visible at a time, pairing short outcome-focused copy with a customer-facing visual and canonical service CTA. The quiet parent link routes to `solutions.html`. The selector supports click, tap, arrow keys, Home, and End through `js/pages/home.js`; on narrow screens only the toggle itself may scroll horizontally, while each selected panel becomes a purpose-built vertical composition.

## Homepage Why Qavyo Showcase

The homepage Why Qavyo section (`.home-why`) uses the established segmented-control language to explain four ecosystem advantages without a comparison table: Connected, Flexible, Clear, and Supported. One stable-height panel appears at a time with a concise message and purpose-built visual. Compatibility language must remain qualified, pricing is limited to the confirmed starting software price with separate-cost context, and ecosystem support must not imply one team manages every service. The selector supports click, tap, arrow keys, Home, and End through `js/pages/home.js`; mobile deliberately places each visual before its supporting copy and CTA.

## Homepage Pricing Overview

The homepage Pricing overview (`.home-pricing`) is a compact two-path preview using the Pricing page segmented-control language. Restaurant Software presents only the confirmed monthly Starter, Growth, and Business rates, their canonical short descriptions, and the qualified 30-day Full Qavyo software message before linking to `pricing.html#plans`. Business Software communicates the approved singular-plan structure and current Retail / Farm family scope without displaying an unapproved price; its future pricing link remains on the safe prototype-link behavior until a canonical destination exists. The selector supports click, tap, arrow keys, Home, and End through `js/pages/home.js`, with stacked, immediately visible Restaurant prices on mobile.

## Homepage Final CTA

The homepage final conversion section (`.final-cta`) is the dark handoff into the public footer. Its accessible Software / Intelligence / Business Solutions selector presents one concise path at a time: Software returns to the homepage Product Families overview with an optional Pricing link, Intelligence routes to `intelligence.html`, and Business Solutions routes to `solutions.html`. Each state uses a minimal visual cue rather than repeating earlier product demonstrations. The selector supports click, tap, arrow keys, Home, and End through `js/pages/home.js`; mobile places the visual before the selected message and actions.

## Operational Flow Diagram

`.rst-flow` visually connects core restaurant workflows (`ORDER → KITCHEN → INVENTORY → CUSTOMER → REPORTING → INTELLIGENCE`) horizontally on desktop and seamlessly reflows on tablet and mobile without horizontal overflow.

## Capability Overview Grid

`.rst-capabilities` organizes operational capabilities into four concise groups (Serve, Control, Grow, Manage) and preserves all restaurant navigation deep links, including both the current and legacy aliases for POS and restaurant website destinations. The groups use typography and rules rather than a field of feature cards.

## Proactive Intelligence Showcase

`.rst-intelligence-loop` and `.rst-insight` present the continuous operational loop (Watch → Detect → Explain → Recommend → Act → Measure → Learn) and one qualitative diagnostic case (Observation → Reason → Prediction → Recommendation → Expected Impact → Action). The pattern must state that an authorised operator controls any resulting change.

## Intelligence Page Product Interfaces

The dedicated Intelligence page uses `.qi-today` for a small proactive attention feed, `.qi-loop` and `.qi-case` for the operating loop and one diagnostic path, and `.qi-briefing-ui` for the Daily / Weekly / Monthly briefing view. Briefing tabs follow the ARIA tabs pattern and support click, Left/Right arrow, Home, and End keys through `js/pages/intelligence.js`. `.qi-connected-map` shows approved Qavyo operational sources flowing into signals, briefings, explanations, and recommendations; `.qi-control-note` must remain alongside it to state that the operator controls any change.

## Transparent Pricing & Access Flow

`.rst-pricing-grid` and `.rst-plan` form the approved full comparison: Starter (£29/month) contains the core restaurant-operation list, Growth (£99/month) is the highlighted "Most Popular" plan with management capabilities, and Business (£249/month) adds centralised multi-location capabilities. `.rst-pricing-access` closes the comparison with the approved 30-day Full Qavyo message. `.rst-trial` then explains the trial journey (Start → Full Qavyo → 30 Days → Choose). Hardware and payment processing remain separate.

The canonical Pricing page uses `.pricing-plan-grid` for three separate, aligned plan summaries and `.pricing-billing__toggle` for Monthly, Yearly, and limited Founding Lifetime states. Yearly pricing presents monthly-equivalent figures to keep plan comparison familiar while clearly stating that payment is billed annually upfront; the 50%-off promotion applies to the first year only, with normal plan pricing afterward. Founding Lifetime is limited to 20 restaurants with a compact offer banner (`.pricing-lifetime-banner`), prominent lifetime pricing (`.pricing-price--lifetime`), supporting 5-year context, and a custom-plan sales panel. `.pricing-onboarding` presents the five-step setup pipeline (Download → Create → Menu → Kitchen → Orders) with compact illustrative micro-previews, reflowing from a 5-column desktop track to a vertical progression on mobile. `.pricing-connected` displays the unified operational ecosystem across six core capability blocks (Sell, Serve, Manage, Team, Grow, Understand) in a balanced 3×2 arrangement on desktop that stacks cleanly on mobile without horizontal scrolling. `.pricing-intelligence` presents a dark, product-focused query visual (prompt and diagnostic explanation with causes and recommendations) along with the approved Intelligence hierarchy: Qavyo Intelligence Essentials for Starter, Qavyo Intelligence Advanced for Growth, and Full Qavyo Intelligence for Business. `.pricing-compare` provides a concise capability matrix that preserves the distinction between Starter operations, Growth optimisation, and Business workforce/group capabilities, with mobile-responsive vertical plan cells and no horizontal scrolling. Delivery Operations are included from Growth onward, Growth Multi-Location Operations support up to three locations, and Restaurant Group Controls remain exclusive to Business.

## Device Progression Grid

`.rst-device-panel` explains the qualified hardware path: use supported phones, tablets, or compatible equipment; add dedicated restaurant hardware where needed; and confirm compatibility with Qavyo. It must not imply universal device support.

## Operational Support Assurance

`.rst-start__support` integrates the confirmed 24/7 support offer into the 30-day Full Qavyo conversion panel. It should read as reassurance within the same decision, not as a separate oversized content section, and must not invent channels, service levels, onboarding promises, or response times.

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

## Clothing and Fashion Connected Product Story

The Clothing & Fashion page uses the scoped `.fashion-story`, `.fashion-wall`, and `.fashion-feed` compositions to connect a product example, its operational context, and an illustrative Intelligence briefing. Reuse the underlying signal-line, neutral-surface, and human-control principles for future retail verticals, but adapt the composition to the actual workflow rather than treating this page as a generic vertical template.

## Electronics Structured Product Story

The Electronics page uses the scoped `.electronics-catalog`, `.electronics-flow`, `.electronics-table`, and `.electronics-brief` compositions. Together they connect a structured product catalog, one sale event, qualitative product visibility, and a human-controlled Intelligence briefing. The table becomes a labeled stacked list on small screens; it must not introduce serial, warranty, repair, supplier, or automated inventory claims.

The SMS Marketing final CTA (`.sms-cta`) provides authoritative closure to the completed page on a full-width dark surface (`--color-dark`). It features a high-contrast two-line headline (`Stay connected more directly.`), a single sentence of directional copy, and a primary `button--on-dark` linked to `#prototype-navigation` (`data-prototype-link`). A subtle dual-radial brand-blue ambient glow element (`.sms-cta__bg`, `aria-hidden="true"`) provides background warmth without distracting from the primary conversion action.

## Pricing Plan Grid and Billing Modes

The Pricing Plan Grid (`.pricing-plan-grid`) presents the three tiers (Starter, Growth, Business) across Monthly, Yearly, and Founding Lifetime states:
- **Plan positioning**: Starter is £29/month with team basics for up to 10 team members; Growth is £99/month and includes workforce, HR, and payroll for up to 20 team members plus Multi-Location Operations for up to three locations; Business is £249/month and provides unlimited team members with advanced workforce controls.
- **Outcome summaries**: Plan introductions stay short and value-led: Starter runs daily restaurant operations; Growth improves purchasing, labour, and customer retention; Business controls locations, teams, and marketing centrally. Detailed limits remain in the feature groups below rather than the introductory line.
- **Feature inheritance**: Starter begins directly with its feature categories. Growth and Business use a compact checked inclusion strip (`.pricing-plan__inheritance`) to state that every feature from the preceding plan is included without treating that message as a feature heading.
- **Plan card CTA**: Monthly and Yearly cards use `Start 30 Days of Full Access` to make clear that customers begin with all eligible software features and Full Qavyo Intelligence rather than only the features in their eventual plan. Founding Lifetime keeps its plan-specific claim labels.
- **Trial payment terms**: Recurring plans clearly state that no payment card is required to begin the 30-day Full Qavyo period, no automatic charge occurs, and customers choose and pay for Starter, Growth, or Business only when they continue after the trial.
- **Monthly**: Clean primary rate display (`.pricing-price`) with consistent card baseline and single bottom CTA.
- **Yearly**: This is the default selected billing mode. It displays the promotional first-year monthly equivalent with the same large amount and compact `/month` hierarchy as Monthly pricing (`.pricing-price--annual`) against the standard monthly rate (`.pricing-plan__anchor`), maintaining an identical single-line horizontal layout across all three plan cards (Starter, Growth, and Business) without wrapping, while clearly stating that billing is annual and upfront. The savings pill (`.pricing-annual-saving-badge`: `↓ Save £.../year`) emphasizes the total first-year saving. The offer applies only to the first year, after which normal plan pricing applies.
- **Founding Lifetime**: Compact top scarcity banner (`.pricing-lifetime-banner`: `Only 20 restaurants`) with £999 Starter, £3,499 Growth, and £8,499 Business one-time prices, concise Core descriptions, highlighted five-year saving callouts (`.pricing-plan__lifetime-value`), and a lifetime-only custom-plan sales panel below the grid.
- **Managed Marketing & Customer Growth**: Business combines managed email, SMS, social media, content, local-search listings, reputation management, guest-retention campaigns, campaign reporting, and blog or website content. Growth continues to own the underlying CRM, loyalty, analytics, and automated-email software capabilities. Managed social media covers one restaurant brand across Facebook, Instagram, and TikTok; local listing work covers one primary location. Additional brands and location-specific accounts are quoted separately, and campaign reporting is qualified by the tracking that is reliably available.
- **Marketing allowance notes**: Business marketing features use compact question-mark tooltips that appear while the trigger is hovered or keyboard-focused and disappear when it is left or blurred. Included monthly allowances are 5,000 designed emails, 500 SMS messages, 15 designed images, 5 short-form videos, and 2 blog articles. Each note states that extra usage is charged separately. Guest-retention campaigns use eligible, opted-in customer data, and sensitive review responses remain subject to operator approval.
- **Growth automated-email allowance**: Growth includes up to 2,000 automated emails each month. The allowance uses the same hover and keyboard-focus tooltip pattern as the Business marketing allowances, and extra emails are charged by usage.

## Pricing Transparency, FAQ, and Final Conversion Section

The Pricing Transparency section (`.pricing-costs`) clarifies the boundary between software, optional hardware, and payment processing without unnecessary complexity. It features a responsive 3-column card grid (`.pricing-cost-cards` / `.pricing-cost-card`):
- **Software**: Details predictable monthly platform pricing starting from £29/month, enumerating core capabilities (POS, Kitchen, Ordering, Inventory, CRM, Reporting, Intelligence) and anchoring directly to the plans comparison.
- **Hardware**: Emphasizes compatibility with operators' existing tablets, phones, and laptops, making it explicit that hardware is separate from the software subscription.
- **Payments**: Keeps payment processing distinct and neutral, stating transaction fees depend on the connected provider without inventing rates or imposing software markups.

The competitor comparison places a dated public-source methodology note (`.competitor-costs__verification`) directly above the table and warns that plan details can vary by region and configuration. Refresh the review date only after rechecking the competitor information.

The Pricing FAQ (`.pricing-faq`) addresses verified buying objections with concise answers. It uses accessible native `<details>` and `<summary>` disclosure accordions with keyboard interaction, visible focus, and one open answer at a time; the two-column desktop layout reflows cleanly on mobile.

The Pricing Final CTA (`.pricing-final`) provides authoritative closure on a full-width dark surface (`--color-dark`). It combines a high-contrast headline (`Start with everything. Choose later.`), concise supporting copy, dual CTA actions (`Start 30 Days Free` as primary and `See Plans` as secondary), a strong one-line pricing summary, and a 4-point reassurance row (`No setup fee`, `No long-term contract`, `Use your own devices`, `Everything unlocked for 30 days`) with custom bullet checkmarks.

## Responsive and accessibility requirements

## Pricing-aligned restaurant navigation

The shared Restaurant mega menu uses four approved groups: Run service; Manage the business; Customers & growth; and Choose & start. It exposes major buyer destinations rather than every feature route. Delivery Operations, Hardware & Devices, and Payments remain permanent links. Products is the top-level entry for Retail, Farming, and Healthcare. Its desktop menu uses three columns: two for the established retail destinations and one containing the non-linked Farm Software and Healthcare Software category headings. Farm Software exposes only Broiler Farming; Healthcare Software exposes only Hospitals and Diagnostic Centers. Mobile preserves the same hierarchy as sequential sections. Healthcare destinations use safe prototype links until approved pages exist. Resources provides an `All Products & Features` link to `feature-directory.html`. Desktop and mobile menus must contain the same essential destinations.

## Restaurant capability directory

The Restaurant Software overview uses `.rst-directory` as the bridge between the platform story and major capability pages. It groups approved routes under Run service, Manage the business, Customers & growth, and Choose & start. The pattern uses typography, dividers, concise descriptions, and directional arrows revealed on hover or keyboard focus instead of a field of feature cards. Small features remain descriptive context inside their closest major route. Existing legacy deep-link anchors are preserved. The canonical Pricing page owns detailed plan comparison; the overview states only the confirmed starting software price and separate-cost boundaries.

## Restaurant conversion narrative

The Restaurant Software overview is a visual hub rather than a feature directory. `.rst-feature` alternates concise copy with a purpose-built illustrative interface for each major operating area; `.rst-feature--reverse` changes composition without changing reading order on mobile. `.rst-labels` names only the supporting capabilities needed to understand that visual. Every major section ends with a descriptive link to its established destination.

The hero uses `.rst-hero-ui` to show one order connecting POS, kitchen, inventory, and reporting. Other proof-safe visual patterns include `.rst-pos`, `.rst-kds`, `.rst-recipe`, `.rst-schedule`, `.rst-customer`, `.rst-report`, `.rst-locations`, and `.rst-intel`. All examples are explicitly illustrative, use qualitative or obviously demonstrative data, and must not be presented as customer evidence. `.rst-power-map` reconnects these stories as an orbital ecosystem around a white circular Your restaurant hub: compact linked capability pills feed into the hub through individual animated signal lines, while orbital paths reinforce continuous operation. The layout becomes a simple stacked directory at smaller widths, where decorative lines are removed. Its animation is disabled by the page-level reduced-motion rule. `.rst-start` owns the 30-day Full Qavyo handoff and integrates operational support as a compact reassurance row without duplicating plan cards; `.rst-duo` keeps Payments and Hardware visible while preserving their commercial boundaries.

## Restaurant POS workflow page

`restaurant-pos.html` is the canonical Restaurant POS major page. Its `.pos-terminal` hero demonstrates an illustrative table order moving from menu selection to a reviewed ticket and onward to the restaurant operation. `.pos-order-builder` explains categories, items, modifiers, and order review without asserting unsupported service behavior. `.pos-floor-ui` uses real buttons and a polite live summary so the illustrative table state can be explored with mouse, touch, or keyboard. Preserve the consolidation anchors `#tables-floor-plan`, `#customer-facing-display`, `#offline-mode`, and `#refunds-voids`.

`.pos-tabs` uses the WAI-ARIA tab pattern for Offline Mode and Refunds & Voids, including roving focus with arrow keys, Home, and End. Direct links to either panel activate and reveal the matching tab before scrolling to it. Offline wording must remain qualified by the supported workflow and restaurant setup; do not imply offline payment processing, unlimited offline duration, or universal feature availability. Kitchen, Online & QR Ordering, Reporting & Day Close, and Payments appear only as short POS handoffs with descriptive canonical links. All numerical interface content is illustrative, and payment providers, rates, hardware, approvals, permissions, and audit claims remain outside this page unless separately confirmed.

`.pos-system-flow` closes the operational story with a compact, semantic source-to-POS-to-operation rail. It uses a visible illustrative caption, real lists for order sources and connected operating areas, and a single highlighted POS block. Keep this treatment flat and concise: it must not return to a large orbital map, scattered nodes, or decorative animation. At narrow widths the rail stacks in the same reading order and its arrows turn downward.

## Online & QR Ordering capability page

`online-qr-ordering.html` is the canonical Online & QR Ordering major capability page within Restaurant Software (`Run service`). Its `.ord-multi-channel` hero demonstrates four distinct customer entry points (Website, Table QR, Touchscreen Kiosk, and Mobile View) channeling into a central Qavyo Orders intake node and routing onward to kitchen preparation. `.ord-web-ui` showcases a structured online ordering journey (Browse -> Choose -> Build order -> Confirm) with category selection, item choices, modifiers, and live basket summary. `.ord-qr-journey` presents the at-table QR sequence from table code to guest phone and kitchen notification. `.ord-kiosk-ui` provides an intentionally touch-proportioned kiosk interface with category navigation and item configuration. `.ord-mobile-ui` models a mobile-first viewport with tap-to-add items and immediate order total.

`.ord-tabs` implements the WAI-ARIA tab pattern for comparing the four ordering scenarios, complete with roving focus and keyboard arrow navigation. The page incorporates consolidation anchors (`#online-ordering`, `#qr-ordering`, `#self-service-kiosk`, `#mobile-ordering`, and `#kitchen-handoff`). Handoffs and bridges to Kitchen Operations, Restaurant POS, Customers & CRM, Restaurant Website, Delivery Operations, and Marketing Solutions provide clear contextual links without asserting unconfirmed automated capabilities or duplicating other major pages.

## Kitchen Operations capability page

`kitchen-service.html` is the canonical Kitchen Operations major capability page within Restaurant Software (`Run service`). Its `.kds-hero-screen` hero visual models an active Kitchen Display System showing live orders grouped into distinct operational columns: New, Preparing, and Ready at Pass with elapsed timers, modifiers, and station assignments.

`.kds-handoff-flow` illustrates the front-of-house intake to back-of-house kitchen ticket handoff (e.g., POS/QR burger modifiers routing to structured tickets). `.kds-live-display` provides a full-width multi-column KDS board supporting interactive ticket progression (`New` -> `Preparing` -> `Ready`) via click/Enter/Space with live polite screen-reader announcements. `.kds-routing-board` demonstrates multi-station order decomposition (Grill, Fry, Cold, Bar) from a single parent ticket. `.kds-timeline` shows an order milestone progression (`Received` 12:14 -> `Preparing` 12:16 -> `Ready` 12:22).

`.kds-alerts-grid` surfaces attention states (delayed orders, station volume) without claiming speculative AI intervention. Cross-functional bridge sections connect kitchen activity to ingredient depletion (`.kds-inventory-bridge`), staffing workload (`.kds-team-bridge`), service performance analytics (`.kds-metrics-grid`), end-of-day reconciliation (`.kds-report-panel`), and Qavyo Intelligence (`.kds-intel-card`). The full system architecture is unified in `.kds-system-map`. The page preserves consolidation anchors (`#kitchen-display`, `#routing-stations`, `#preparation-tracking`, `#alerts`, and `#performance`), fully supports keyboard accessibility, touch targets, and prefers-reduced-motion, and reflows into a single-column vertical sequence on mobile without horizontal clipping.

## Inventory & Food Cost capability page

`inventory-purchasing.html` is the canonical Inventory & Food Cost major capability page within Restaurant Software (`Run service`). Its `.inv-hero-visual` hero composition models a direct link between a Chicken Burger menu sale, its itemized recipe components (bun, chicken, cheese, sauce, lettuce), calculated plate food cost percentage (26.1%), and real-time ingredient deduction.

`.inv-mental-grid` establishes the restaurant-specific operational mental model across five stages (Menu Item -> Recipe Spec -> Stock Movement -> Food Cost -> Purchasing). `.inv-data-table` presents realistic ingredient tracking with units (kg, L, units), unit costs, last movements, and accessible status pills (`Healthy`, `Low Stock`, `Watch`), supported by accessible stock filter buttons. `.inv-recipe-card` implements interactive WAI-ARIA tabbed recipe builders (Margherita Pizza and Chicken Burger) showing portions, unit rates, total recipe cost, and gross margins.

`.inv-cost-impact-card` visualizes supplier price increases (e.g., +11.2% chicken cost shift) mapped across all affected menu items without unsupported automatic repricing claims. `.inv-waste-grid` models loss recording (spoilage, spills) and total inventory valuation. `.inv-alerts-cards` surface low-stock thresholds. Cross-functional bridge sections connect stock to kitchen ticket deductions (`.inv-bridge-flow`), vendor purchase orders (`.inv-po-card`), contextual purchasing evaluation (`.inv-decision-card`), daily gross profit reconciliation (`.inv-reporting-grid`), multi-location distribution (`.inv-loc-grid`), and Qavyo Intelligence (`.inv-intel-card`). The complete supply circuit is mapped in `.inv-system-map-box`.

The page incorporates consolidation anchors (`#ingredient-inventory`, `#recipes-food-cost`, `#cost-changes`, `#waste`, `#valuation`, `#stock-alerts`, `#kitchen-connection`, `#suppliers`, `#purchase-orders`, `#purchasing-decisions`, `#reporting-connection`, `#analysis`, `#multi-location-connection`, `#intelligence-connection`, and `#system-map`), enforces keyboard navigation, respects prefers-reduced-motion, and reflows into single-column vertical cards on mobile without horizontal clipping.

## HR, Payroll & Team capability page

`hr-payroll.html` is the canonical HR, Payroll & Team major capability page within Restaurant Software (`Manage the business`). Its `.team-hero-card` hero visual models an active shift roster (Sarah, James, Mia, Daniel) with live status pills (`Clocked in`, `Starts in 42m`), planned hours, and shift headcounts.

`.team-mental-grid` establishes the restaurant employment lifecycle across six stages (Employee Record -> Weekly Schedule -> Shift Attendance -> Worked Hours -> Payroll & Tips -> Labour Review). `.team-profile-card` organizes employee profiles without sensitive corporate HR bloat. `.team-roles-grid` presents a role-permission matrix comparing Manager, Floor Server, and Kitchen Line access across POS, refunds, reporting, and staff management. `.team-schedule-card` features an interactive WAI-ARIA tabbed weekly rota (Monday to Sunday) mapping staff shifts to specific floor and kitchen stations.

`.team-attendance-card` demonstrates side-by-side planned shift vs actual clock-in/out attendance with overtime and punctuality verification. `.team-payroll-card` and shift tip allocation summarize verified hours, overtime, and tip distributions for payroll export without making unsupported statutory HMRC filing claims. `.team-labour-card` evaluates daily labour cost percentage (23.1%) against sales (£5,420) across front-of-house, kitchen, and management departments. `.team-app-mockup` presents a dedicated mobile interface for the Qavyo Staff App. Cross-functional bridges link to multi-location distribution (`.team-loc-grid`), daily performance reporting (`.team-reporting-pipeline`), and Qavyo Intelligence (`.team-intel-card`). The complete workforce pipeline is unified in `.team-system-map-box`.

The page incorporates consolidation anchors (`#employee-records`, `#staff-accounts`, `#roles-permissions`, `#scheduling`, `#attendance-timesheets`, `#payroll`, `#tips`, `#labour-costs`, `#staff-performance`, `#staff-app`, `#multi-location-connection`, `#reporting-connection`, `#intelligence-connection`, and `#system-map`), enforces keyboard navigation, respects prefers-reduced-motion, and reflows into single-column vertical cards on mobile without horizontal clipping.

## Reporting & Day Close capability page

`money-reporting-close.html` is the canonical Reporting & Day Close major capability page within Restaurant Software (`Manage the business`). Its `.rep-hero-card` hero visual models an active end-of-day summary showing net sales (£5,420), order count (184), average order spend (£29.46), tender mix (card £4,418, cash £842, other £160), recorded shift expenses (£74), and cash drawer check (expected cash £988 vs counted cash £984 with an audited -£4 variance).

`.rep-pipeline` establishes the service-to-close operational mental model across seven stages (Orders -> Payments -> Sales -> Cash & Expenses -> Reconciliation -> Day Close -> Reporting). `.rep-today-board` presents essential daypart metrics (Lunch £1,840, Dinner £3,580) and connects POS discounts and line voids directly to net sales calculation. `.rep-ledger-card` tracks cash drawer floats and mid-shift paid-out receipts (£54 cash, £20 direct). `.rep-reconciliation-panel` implements an interactive expected vs counted till reconciliation interface with toggleable audit notes (`#rep-diff-explanation`) and controlled close confirmation.

`.rep-channel-bars` visualizes net sales split across supported ordering streams (POS £3,160, Online £1,140, QR £620, Kiosk £500). `.rep-pay-tender-card` presents tender breakdowns with direct handoffs to Payments. `.rep-pnl-card` models an operational restaurant Profit & Loss waterfall (Sales £5,420 − Food Cost £1,472 = Gross Profit £3,948 − Labour £1,252 − Expenses £74 = Operating Result £2,622 / 48.4%), clearly qualified as management reporting rather than statutory audited accounts.

Cross-functional bridge sections connect sales to recipe food costing (`.rep-inv-flow-card` showing 26.1% food cost on a Chicken Burger), shift labour review (`.rep-shift-roster-card` comparing 54.5 worked hours to sales intake during dinner trade), tabbed reporting navigation (`.rep-reports-wrapper` supporting Sales, Payments, Inventory, Labour, and Channels with accessible roving keyboard focus), structured data export (`.rep-export-card`), group-level multi-location comparisons (`.rep-multi-table` comparing Soho, Camden, Manchester, and Bristol), and Qavyo Intelligence (`.rep-intel-card` surfacing Friday margin variance). An 8-step closing sequence (`.rep-eod-sequence`) and unified system architecture map (`.rep-system-map-box`) complete the workflow.

The page incorporates consolidation anchors (`#hero`, `#daily-summary`, `#reporting-workflow`, `#today-view`, `#cash-expenses`, `#cash-management`, `#expenses`, `#day-close`, `#reconciliation`, `#sales-by-channel`, `#channels`, `#payment-view`, `#payments`, `#profit-loss`, `#inventory-connection`, `#food-cost`, `#labour-connection`, `#labour`, `#reports`, `#reporting`, `#export`, `#multi-location-reporting`, `#locations`, `#intelligence-connection`, `#workflow-map`, `#end-of-day-workflow`, `#system-map`, `#get-started`, and `#related-capabilities`), enforces keyboard accessibility, supports live polite screen-reader announcements, respects prefers-reduced-motion, and reflows into single-column vertical cards on mobile without horizontal clipping.

## Multi-Location capability page

`multi-location-groups.html` is the canonical Multi-Location major capability page within Restaurant Software (`Manage the business`). Its `.mloc-hero-card` hero visual models an active multi-site group dashboard showing live trading status across four sites (Soho £8,240, Camden £6,880, Manchester £7,410, Bristol £5,960) and total consolidated group takings (£28,490.00 across 966 orders).

`.mloc-model-diagram` establishes the group operational mental model: independent store service below (POS, kitchen displays, local stock) and group-level coordination above (central menus, stock transfers, permissions, consolidated reporting, and Intelligence). `.mloc-overview-grid` pairs an interactive location selector (`[data-site-id]`) with a live detail panel (`.mloc-detail-panel`) for rapid store-by-store performance review.

`.mloc-menu-table` presents a central menu matrix showing core item distribution across stores while highlighting supported local price adaptations (`.mloc-price-tag--override` e.g., Manchester £11.20 vs £10.90 group standard). `.mloc-inv-transfers-grid` tracks multi-location ingredient positions and models an interactive stock transfer dispatch workflow (Bristol to Camden 8 kg Chicken Breast replenishment) that updates store inventory live with screen-reader announcements.

`.mloc-purchasing-teams-grid` and `.mloc-permissions-wrap` organize store staffing headcounts, active general managers, and role-based access control (Group Owner, Area Manager, Store GM) across locations without enterprise clutter. `.mloc-reporting-split-grid` contrasts single-store reporting against consolidated group totals and location contribution percentages (Soho 28.9%, Manchester 26.0%, Camden 24.1%, Bristol 20.9%). Cross-site benchmarking is organized in `.mloc-compare-table-wrap`, while `.mloc-intel-card` surfaces single-site margin shifts (Camden 29.1% food cost variance review). The section sequence concludes with an executive dashboard (`.mloc-exec-dashboard`) and unified platform architecture map (`.mloc-map-box`).

The page incorporates consolidation anchors (`#hero`, `#group-summary`, `#group-model`, `#locations-overview`, `#locations`, `#locations-menus`, `#central-menus`, `#local-differences`, `#multi-inventory`, `#stock-transfers`, `#central-purchasing`, `#teams-across-locations`, `#group-control`, `#permissions`, `#location-reporting`, `#consolidated-reporting`, `#compare-locations`, `#location-comparisons`, `#benchmarking`, `#intelligence-connection`, `#executive-view`, `#system-map`, `#get-started`, and `#related-capabilities`), enforces keyboard accessibility, supports live polite screen-reader announcements, respects prefers-reduced-motion, and reflows into single-column vertical cards on mobile without horizontal clipping.

## Customers & CRM capability page

`customers-growth.html` is the canonical Customers & CRM major capability page within Restaurant Software (`Customers & growth`). Its `.crm-hero-card` hero visual models an active restaurant customer profile for Sarah Mitchell showing visits (18), orders (24), last visit (Saturday), favourite item (Margherita Pizza), lifetime spend (£814), recent dining activity, and loyalty points (1,240 pts with reward available).

`.crm-mental-steps` establishes the customer relationship mental model across four distinct operational stages (Touchpoint -> Customer Profile -> Retention & Return -> Insight & Growth). `.crm-profiles-card` organizes customer profiles with an interactive switcher comparing regular guests (Sarah Mitchell, Daniel Clarke, Mia Patel) without sensitive or invasive profiling. `.crm-timeline-card` presents an expandable receipt timeline demonstrating how orders and visits build the customer history over time.

`.crm-pref-grid` organizes observational dining preferences (favourite items, preferred locations, visit timing, ordering format) without automated health/allergy profiling. `.crm-reservations-card` and `.crm-waitlist-card` link bookings and live waitlists (`#reservations-loyalty`) directly to customer arrival and visit completion. `.crm-loyalty-card` and `.crm-gift-card` demonstrate realistic points progression (1,240/1,500 pts toward a dessert reward) and gift voucher balance management (QAV-8924-M, £50 value, £32.40 remaining).

`.crm-website-mockup` presents a polished restaurant website touchpoint ("Luca's Italian Kitchen") connecting menu discovery, online ordering, and table booking back to the customer profile. `.crm-app-frame` models a restaurant customer mobile experience with upcoming bookings, loyalty status, and verified notification updates. `.crm-kpi-grid` and cohort comparisons evaluate monthly unique customers (1,284), returning guests (486), new diners (798), and average customer spend (£42.10). Bridge sections link to Online & QR Ordering (`online-qr-ordering.html`), Marketing Solutions (`solutions.html`), and Qavyo Intelligence (`intelligence.html`), culminating in the unified `.crm-map-box` operational journey map.

The page incorporates consolidation anchors (`#hero`, `#customer-profiles`, `#order-history`, `#preferences`, `#reservations-waitlist`, `#reservations-loyalty`, `#loyalty`, `#gift-cards`, `#loyalty-gift-cards`, `#restaurant-website`, `#online-ordering-connection`, `#customer-app`, `#customer-analytics`, `#new-vs-returning`, `#visit-patterns`, `#marketing-connection`, `#intelligence-connection`, `#journey-map`, `#get-started`, and `#related-capabilities`), enforces keyboard accessibility, respects prefers-reduced-motion, and reflows into single-column vertical cards on mobile without horizontal clipping.

## Reservations & Loyalty capability page

`reservations-waitlist.html` is the canonical Reservations & Loyalty major capability page within Restaurant Software (`Customers & growth`). It uses `.rl-hero-ui` to pair the evening reservation book with a connected customer profile, then carries one continuous customer story through website booking, reservation detail, service demand, waitlist, arrival, visit history, points progress, rewards, gift-card balance, and a return visit. All interface figures are labelled illustrative; reservation demand is presented as known booked covers rather than forecasting.

The page uses `.rl-flow` as the shared connected-journey pattern. It is horizontal on wider screens and becomes a vertical, arrow-linked reading sequence on mobile. `.rl-table` converts the reservation book from a labelled row layout into stacked records below 36rem, while `.rl-waitlist` uses stacked party records and explicit text states so status never depends on colour. Marketing Solutions remains a contextual related link rather than an asserted automatic integration. Motion is limited to existing control transitions and is removed under `prefers-reduced-motion`.

## Delivery Operations capability page

`delivery-operations.html` is the canonical Delivery Operations major capability page within Restaurant Software (`Customers & growth`). It models delivery as an integrated restaurant workflow rather than an isolated third-party logistics platform. Its `.del-hero-card` hero visual displays an active delivery order for Sarah Mitchell (Order #342, £28.40) showing items (2 × Chicken Burger, 1 × Fries, 2 × Cola), kitchen timestamps (18:22 received, 18:36 cleared), and a live 4-stage operational stepper (Received -> Preparing -> Ready -> Dispatched).

`.del-model-steps` establishes the five-step restaurant delivery mental model (Online Order -> Qavyo Order -> Kitchen Routing -> Ready -> Supported Handoff). `.del-order-list` and `.del-detail-card` provide an interactive order intake interface (`[data-del-order-id]`) that distinguishes delivery tickets (#342, #344) from seated dine-in tickets (#343) and QR orders (#345), displaying modifier details (No onion, Extra cheese) without fake marketplace aggregators.

`.del-connections-grid` bridges delivery into direct digital ordering (`online-qr-ordering.html`) and station-level kitchen routing (`kitchen-service.html` grill, fry, and pack passes). `.del-status-grid` pairs a prep timeline (18:22 to 18:36) with an interactive handoff state switcher simulating collection pass handover. `.del-dispatch-grid` organizes ready, runner-assigned, and completed deliveries, while `.del-fleet-box` sets out sensible local delivery radii (up to 2.5 miles) and flat/distance-based fees without courier fleet overreach.

Bridge sections connect delivery orders to customer history (`customers-growth.html`), order logs, channel breakdown reporting (`money-reporting-close.html` showing 24% delivery contribution), multi-site volume comparisons (`multi-location-groups.html` comparing Soho, Camden, and Manchester), and Qavyo Intelligence (`intelligence.html` surfacing a Friday dinner prep pacing shift of +2m 20s). The full-width `.del-map-box` synthesizes the complete 10-step connected delivery lifecycle.

The page incorporates consolidation anchors (`#hero`, `#order-intake`, `#kitchen-connection`, `#ready-handoff`, `#order-completion`, `#fleet-assignment`, `#routes-tracking`, `#performance`, `#distance-fees`, `#customer-connection`, `#delivery-reporting`, `#intelligence-connection`, `#connected-map`, `#get-started`, and `#related-title`), enforces keyboard accessibility, respects prefers-reduced-motion, and reflows into single-column vertical cards on mobile without horizontal clipping.

## Qavyo Intelligence canonical page

`intelligence.html` is the shared canonical Qavyo Intelligence page. It articulates Intelligence not as an autonomous chatbot or opaque "black box", but as a correlation layer that watches operational signals across orders, stock, staffing, customers, locations, and daily close reporting to surface what changed and what may deserve human attention.

The `.qi-hero` uses the shared homepage hero size and vertical spacing tokens. Its `.qi-today` visual is a restrained illustrative briefing with qualitative Stock & Cost, Team & Service, and Location signals. Each signal links directly to the relevant operating route in the page's focused route index.

The `.qi-loop` presents the approved operating loop (Watch -> Detect -> Explain -> Recommend -> Act -> Measure -> Learn) as one connected line and follows a qualitative ingredient-cost signal through context, source review, and operator decision. `.qi-briefing` provides accessible WAI-ARIA Daily, Weekly, and Monthly tabs using `data-briefing-tab` and `data-briefing-panel`, without fabricated performance totals.

`.qi-focus` contrasts a manual report-by-report review with a connected Qavyo review without claiming quantified time savings. `.qi-system` maps Orders, Stock, Team, Customers, Locations, and Reporting through Intelligence to an operator review. `.qi-control__principles` makes the human-control boundary explicit: Qavyo surfaces context; people verify, decide, and approve.

`.qi-route-list` connects signals to the canonical Inventory & Food Cost, HR/Payroll/Team, Customers & CRM, Multi-Location, and Reporting & Day Close pages. The final `.qi-cta` presents the confirmed 30-day Full Qavyo path and Restaurant Pricing route.

The page incorporates stable anchors (`#hero`, `#how-it-works`, `#briefings`, `#connected-control`, `#intelligence-details`, and `#get-started`), enforces keyboard navigation, respects prefers-reduced-motion, and deliberately reformats dense flows for small screens.

## Payments capability page

`payments.html` is the canonical Payments major capability page within Restaurant Software (`Choose & start`). It models payments as the natural completion of the restaurant order rather than a disconnected card-processing or fintech product. Its `.pay-receipt-terminal` hero visual displays an authentic restaurant check for Table 14 (Order #482, £30.20: 2 × Chicken Burger @ £10.90 = £21.80, 1 × Fries = £3.40, 2 × Cola @ £2.50 = £5.00, subtotal £25.17, VAT £5.03) with an interactive tender selector (Card vs Cash) and simulated transaction completion logging directly to Day Close and Reporting (+£30.20).

`.pay-model-strip` establishes the five-step restaurant transaction mental model (Restaurant POS or Online -> Order Total -> Payment -> Completed Sale -> Day Close & Reporting). `.pay-split-grid` and `.pay-screen-card` demonstrate POS checkout settlement, emphasizing that payment happens where the order was taken without re-keying amounts. Supported payment tenders (`.pay-methods-grid`) represent physical cards, cash at the till, and setup-dependent methods (house accounts/vouchers) while explicitly rejecting unverified logo walls and commercial exaggeration.

Sequential workflows define card processing (`.pay-flow-steps`: Order Total -> Tender Prompt -> Processing -> Approved -> Order Complete) and cash till handling (`.pay-calc-card` with an interactive cash change calculator simulating £40.00 tendered on a £30.20 total, yielding £9.80 change due and updating the expected till drawer balance). Digital ordering checkout bridges online and QR table ordering (`online-qr-ordering.html`), ensuring kitchen tickets arrive marked paid and ready for prep.

Explicit transaction statuses are mapped in `.pay-status-table` (`Paid`, `Unpaid`, `Refunded`), while `.pay-refund-card` models manager-authorized transaction corrections tied directly to original receipt audit trails without unsupported chargeback claims. `.pay-close-comparison` pairs daily takings (£5,420 across 184 transactions: Card £4,418 / 81.5%, Cash £842 / 15.5%, Other £160 / 3.0%) with shift drawer reconciliation (Expected Cash £842 vs Counted Cash £838, surfacing the -£4 variance). Cross-branch visibility is highlighted in `.pay-locations-grid` (Soho £8,240 vs Camden £6,880), hardware topology is mapped in `.pay-hardware-topology`, and setup qualification (`.pay-setup-grid`) and commercial terms (`#fees-processing`) maintain strict separation between the 30-day free software trial and third-party merchant acquiring approval. The full-width `.pay-map-flow` synthesizes the end-to-end 7-step connected payment lifecycle.

The page incorporates consolidation anchors (`#hero`, `#taking-payments`, `#order-to-payment`, `#pos-payment`, `#payment-methods`, `#card-flow`, `#cash-payment`, `#online-payments`, `#order-status`, `#refunds`, `#day-close`, `#reconciliation`, `#payment-reporting`, `#multi-location-payments`, `#hardware-connection`, `#payment-setup`, `#providers`, `#fees-processing`, `#security`, `#connected-map`, `#get-started`, and `#related-capabilities`), enforces keyboard accessibility, supports live polite screen-reader announcements, respects prefers-reduced-motion, and reflows into single-column vertical cards on mobile without horizontal clipping.

## Hardware & Devices capability page

`hardware.html` is the canonical Hardware & Devices major capability page within Restaurant Software (`Choose & start`). It models hardware as physical access points to the single unified Qavyo platform across service, kitchen, customer, self-service, and payment operations. Its `.hw-stage-card` hero visual presents an interactive multi-station stage with accessible WAI-ARIA tabs (`data-station-tab`) toggling between Counter POS (Table 14 active check £30.20), Kitchen Display (stations #214 New, #211 Prep, #208 Ready), Customer-Facing Display, Self-Service Kiosk (interactive menu items and basket £18.90), and Payment Reader, demonstrating "Same platform, different places in the restaurant."

`.hw-jobs-grid` organizes the hardware mental model across the five core operational stations. Individual deep-dive sections present Counter POS touchscreens (`.hw-device-mock`), station-level kitchen routing and bump screens (`#kitchen-hardware`), dual-screen customer transparency (`.hw-dual-screen`), large touchscreen kiosks (`.hw-kiosk-frame`), portable table-service tablets (`#portable-devices`), and integrated card readers (`#payment-hardware`), paired with customer and docket receipt printers (`#printers`).

An interactive configuration selector (`.hw-config-tabs` / `.hw-config-card` in `#hardware-needs`) allows restaurant operators to compare illustrative setups for Small Counter Service, Table Service Restaurants, and Self-Service Venues without prescribing rigid or mandatory hardware packages. Device compatibility (`.hw-compat-grid`), existing device qualification (`#existing-hardware`), and procurement sourcing (`#new-hardware`) make it explicit that hardware compatibility depends on product setup and is priced separately from software subscriptions.

Workflow bridge sections connect physical hardware back to software capabilities: Restaurant POS (`restaurant-pos.html`), Kitchen Operations (`kitchen-service.html`), Online & QR Ordering (`online-qr-ordering.html`), and Payments (`payments.html`). Implementation is framed through a 5-step rollout pipeline (`.hw-steps-grid`: Choose Setup -> Confirm Compatibility -> Configure Devices -> Connect Qavyo -> Test Workflow) backed by 24/7 technical assistance (`#support`). The full-width `.hw-map-container` synthesizes the connected physical layout across counter, customer, kitchen, lobby, and payment zones.

The page incorporates consolidation anchors (`#hero`, `#platform-jobs`, `#roles`, `#pos-hardware`, `#kitchen-hardware`, `#customer-display`, `#kiosk-hardware`, `#portable-devices`, `#payment-hardware`, `#printers`, `#hardware-needs`, `#configurations`, `#workflow-fit`, `#compatibility`, `#existing-hardware`, `#new-hardware`, `#pos-connection`, `#kitchen-connection`, `#ordering-connection`, `#payments-connection`, `#setup-steps`, `#support`, `#connected-map`, `#get-started`, and `#related-capabilities`), enforces keyboard navigation, supports live polite screen-reader announcements, respects prefers-reduced-motion, and reflows into single-column vertical cards on mobile without horizontal clipping.

## Structural hub and feature pages

`css/pages/feature-scaffold.css` provides the temporary shared content structure for connected hub, focused feature, retail vertical, farm, and scope-confirmation pages. Scaffold pages use the approved global desktop/mobile header and navigation, followed by breadcrumbs, a clearly labelled content-status panel, parent and sibling navigation, a Pricing route, and responsive desktop-to-mobile layouts. Scaffold text must clearly state that detailed content is pending and must not be treated as final marketing copy. Replace the scaffold page-by-page as content is approved; do not silently promote placeholders to final pages.

Every component must keep a logical reading and tab order, visible keyboard focus, sufficient colour contrast, meaningful semantics, and reasonable touch targets. Responsive behaviour must be designed, not assumed. Motion must respect reduced-motion preferences.

## Public utility pages and forms

`css/pages/utility.css` and `js/pages/utility.js` provide the shared public utility-page system for company, contact, sales, access, support, legal, accessibility, not-found, and form-result routes. `.utility-hero`, `.utility-section__grid`, `.utility-prose`, and `.utility-state` support text-led pages without inventing a competing visual system. `.utility-form` uses visible labels, native controls, inline text errors, focus transfer to the first invalid field, and polite form-level status feedback.

Until a submission backend is connected, utility forms validate locally and route to `form-success.html` with an explicit notice that no information was transmitted. `sign-in.html` never collects a password in the static public prototype. Privacy and Terms are clearly labelled as drafts requiring legal review before production use.
