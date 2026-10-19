# Qavyo conversion page standard

This standard applies to public product, solution, vertical, and campaign pages. It defines the checks required before a page is treated as conversion-ready. It does not require every page to use the same section count or visual composition.

## 1. Page brief gate

Define these items before writing or design:

- Primary buyer and business context
- Visitor awareness and likely traffic source
- One page objective
- One primary conversion action
- One core promise
- The Qavyo mechanism that supports the promise
- Confirmed product facts and commercial terms
- Available product, customer, or operational proof
- Main buying objections

If a fact, capability, price, result, integration, compatibility statement, testimonial, or statistic is not confirmed, do not publish it as a claim.

## 2. Message hierarchy

Every conversion page should make these points clear in its first viewport:

1. Who the page is for
2. What Qavyo helps them do
3. Why the approach is different or useful
4. What action they should take next

Use one main promise and one primary call to action. Secondary actions may support visitors who need more information, such as pricing or a product explanation.

## 3. Recommended narrative

Adapt this order to the page objective:

1. Audience callout and clear promise
2. Factual commercial reassurance
3. Recognisable operational problem
4. Qavyo mechanism or connected workflow
5. Outcome-led product explanation
6. Proof placed next to the claim it supports
7. Major capability routes only
8. Buying and switching objections
9. Offer and commercial terms
10. Buyer-driven FAQ
11. Final call to action and concise postscript

Overview pages may use the full narrative. Focused feature pages should shorten it and explain one major workflow deeply. Small features belong inside the closest major page unless they have distinct buyer intent and enough verified depth.

## 4. Proof and claims

Maintain a claim-to-proof map during page development.

Acceptable proof includes:

- Verified product screens or clearly labelled illustrative workflows
- Demonstrable product behaviour
- Confirmed pricing, access, support, or commercial terms
- Approved customer evidence
- Approved credentials or third-party evidence

Illustrative interfaces explain a concept; they are not customer proof. If a claim lacks proof, qualify it, rewrite it as a factual capability, or remove it.

## 5. Offer and call to action

- The primary action must be visually dominant and repeated only at useful decision points.
- CTA labels must describe the next step.
- Prototype actions use the existing safe `data-prototype-link` behaviour until a destination is approved.
- Pricing, trials, hardware, and payment-processing boundaries must remain explicit.
- Do not use false urgency, fabricated scarcity, or unsupported guarantees.

## 6. Experience requirements

- Use the shared brand tokens, layout primitives, buttons, navigation, and footer.
- Prefer typography, rules, and operational diagrams over repetitive card grids.
- Use semantic HTML, one `h1`, logical headings, keyboard-operable controls, visible focus, and meaningful labels.
- Target WCAG 2.2 AA.
- Design mobile as a deliberate composition and verify at 320, 375, 768, 1024, and 1280 pixels.
- Respect reduced motion and avoid layout shift.
- Target good Core Web Vitals in field data: LCP no more than 2.5 seconds, INP no more than 200 milliseconds, and CLS no more than 0.1 at the 75th percentile.

## 7. Measurement

Track the primary conversion and the steps that explain it:

- Primary CTA clicks
- Secondary CTA clicks
- Form or signup starts and completions when implemented
- Qualified trials, leads, or sales
- Page and campaign source
- Downstream revenue, lifetime value, or earnings per click when available

Use scroll depth and time on page only as diagnostic signals. They are not conversion outcomes.

## 8. Release score

Score each page out of 100:

- Message-market fit: 20
- Proof and claim safety: 20
- Offer and CTA: 15
- Product mechanism and understanding: 15
- Objection handling: 10
- UX and accessibility: 10
- Performance and measurement readiness: 10

A page needs at least 80 points before release. Any invented claim, conflicting commercial term, broken primary action, missing mobile treatment, or serious accessibility failure blocks release regardless of score.

## 9. Definition of done

Before approval:

1. Review the claim-to-proof map.
2. Confirm commercial terms against their source of truth.
3. Test all links, controls, and prototype actions.
4. Verify desktop, laptop, tablet, and mobile layouts.
5. Complete keyboard, focus, reduced-motion, console, and automated accessibility checks.
6. Review page speed and layout stability.
7. Confirm analytics requirements for the primary action.
8. Update architecture and component documentation when the page introduces a reusable pattern.
