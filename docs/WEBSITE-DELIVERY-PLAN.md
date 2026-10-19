# Qavyo website delivery plan

This document defines the work sequence, decision gates, dependencies, and acceptance criteria required to take the Qavyo public website from its current prototype state to a verified launch and continuous-improvement cycle.

It controls delivery order. It does not replace the other sources of truth:

- `BRAND.md` controls brand and visual decisions.
- `ARCHITECTURE.md` records approved information-architecture decisions.
- `SITEMAP.md` records the approved page hierarchy and connection model.
- `PAGE-INVENTORY.md` records every route and its current status.
- `COMPONENTS.md` records approved reusable interface patterns.
- `WEBSITE-CHECKLIST.md` records route-level completion.

When these documents disagree, stop affected page work and resolve the conflict before implementation.

## Planning assumptions

The plan currently assumes:

1. Restaurant Software is the primary commercial focus for the next 12 months.
2. Retail, Farm, Payments, Hardware, and Marketing work expands only as product scope and proof are confirmed.
3. Home and Pricing remain approved and frozen except for verified defects, metadata, accessibility, performance, and approved link-only changes.
4. The existing semantic HTML, CSS, and vanilla JavaScript stack remains in place.
5. The production domain, hosting platform, form destination, analytics stack, target launch regions, and legal requirements still require confirmation.

Changing assumption 1 requires a fresh navigation and sitemap decision. Changing assumptions 3 or 4 requires explicit approval.

## Current baseline

Repository audit on 20 October 2026 found:

- 108 HTML routes.
- 95 routes using the shared feature scaffold.
- 13 developed routes.
- Home and Pricing recorded as final in `PAGE-INVENTORY.md`.
- No canonical tags on current pages.
- No confirmed production-domain metadata.
- Duplicate page titles on Email Marketing, Website Building, and Website SEO.
- Conflicting documentation about which legacy and Marketing pages are final or frozen.
- Public navigation links to routes that documentation still classifies as scaffolded or unapproved.

The immediate goal is not to finish 108 pages. The immediate goal is to decide which pages deserve to exist, then finish them in dependency order.

## Delivery rules

1. Product truth precedes copy.
2. Research precedes page structure.
3. A hub precedes its focused feature pages.
4. A CTA destination precedes CTA rollout.
5. A page is not public merely because its file exists.
6. Each page has one canonical purpose, primary audience, parent, search intent, and next action.
7. Build one page and one section at a time.
8. Every claim requires an approved source or must be removed.
9. Every completed task follows the repository verification, commit, and push workflow.
10. Approval gates are pass/fail. Do not work around a failed gate by adding more copy or design.

## Work states and work-in-progress limit

Use these states for every page and shared-system task:

```text
Backlog
  -> Researching
  -> Blocked by product truth
  -> Ready for outline
  -> Copy and structure
  -> Design and implementation
  -> Verification
  -> Stakeholder review
  -> Approved
  -> Live
  -> Measuring
```

Only one page may be in design and implementation at a time. Research for the next page may run in parallel, but it cannot authorize unsupported claims.

## Roles and approvals

One person may hold several roles, but each responsibility must have a named owner before launch.

| Role | Required decisions |
|---|---|
| Business owner | Commercial priority, offer, price, risk, launch scope |
| Product owner | Capability truth, limits, availability, plans, integrations |
| Sales owner | Buyer objections, qualification, follow-up, lead handling |
| Research and copy owner | Market voice, awareness, page argument, claim wording |
| Design and frontend owner | Information design, implementation, responsive behaviour |
| QA and accessibility owner | Browser, keyboard, screen-reader, responsive, regression checks |
| Analytics owner | Event taxonomy, consent-aware measurement, reports, experiments |
| Legal and privacy reviewer | Terms, privacy, cookies, claims, guarantees, regulated language |

## Global gates

| Gate | Requirement | Blocks |
|---|---|---|
| G0: Strategy | Commercial focus, audience, market, offer, and primary conversion are approved | Sitemap and navigation |
| G1: Product truth | Capability matrix is complete for the page being planned | Copy and design |
| G2: Research | Audience language, objections, alternatives, and intent are documented | Page outline |
| G3: Architecture | Parent, URL, page type, internal links, indexation, and CTA are approved | Implementation |
| G4: Content | Claims, proof, copy, metadata, and assets are approved | Final visual build |
| G5: Quality | Accessibility, responsive behaviour, links, performance, and errors pass | Stakeholder approval |
| G6: Release | Analytics, forms, legal, redirects, canonical, sitemap, and rollback are ready | Production launch |
| G7: Learning | Enough qualified data exists to support a decision | Permanent optimization |

## Phase 0: Stabilize planning and governance

### Objective

Create one trusted operating model before more pages are designed.

### Tasks

- Confirm whether Qavyo remains restaurant-first for the next 12 months.
- Confirm target countries, language, currency, and regional product availability.
- Confirm the production domain and hosting constraints.
- Confirm the primary conversion: free-trial signup, sales conversation, or both.
- Name owners for product claims, sales follow-up, legal review, and final approval.
- Create a decision log with date, owner, decision, evidence, and affected routes.
- Resolve conflicts between `ARCHITECTURE.md`, `SITEMAP.md`, `PAGE-INVENTORY.md`, and `WEBSITE-CHECKLIST.md`.
- Freeze new route creation until Phase 2 approves the final route disposition.

### Deliverables

- Approved planning assumptions.
- Named decision owners.
- Architecture conflict log.
- Launch-market and conversion brief.

### Exit criteria

- G0 passes.
- No unresolved source-of-truth conflict affects Phase 1 research.

## Phase 1: Establish product truth

### Objective

Separate confirmed product behaviour from ideas, future scope, and marketing language.

### Capability matrix

Create `docs/CAPABILITY-MATRIX.md`. Record one row per capability with:

- Product family.
- Capability name.
- Plain-language job.
- Current status: live, limited, planned, conceptual, or unknown.
- Eligible plan.
- Usage limit.
- Supported market.
- Supported device.
- Required hardware.
- Integration dependency.
- Offline behaviour.
- Human-control requirement.
- Data input and output.
- Support commitment.
- Commercial qualification.
- Evidence source.
- Product owner.
- Last verification date.
- Public-claim status: approved, qualified, or prohibited.

### Claims register

Create `docs/CLAIMS-REGISTER.md`. Every factual or comparative claim needs:

- Exact wording.
- Page and section.
- Evidence link or internal source.
- Qualification.
- Approval owner.
- Review date.

Delete unsupported statistics, results, compatibility statements, integrations, guarantees, testimonials, and customer references.

### Route disposition

Create `docs/ROUTE-DISPOSITION.md`. Classify all 108 routes:

| Status | Meaning |
|---|---|
| Keep | Unique audience or intent; build or preserve |
| Merge | Content belongs in a stronger parent or sibling page |
| Defer | Valid future route; do not expose or index yet |
| Retire | No durable purpose; remove through an approved redirect plan |
| Utility | Conversion, support, legal, or system destination |

Until disposition is approved, scaffold pages must not be treated as finished public content. If a staging or production host is reachable by crawlers, use an approved `noindex` approach for unfinished pages; do not rely on `robots.txt` alone.

### Exit criteria

- G1 passes for the first build wave.
- Every existing route has an owner, parent, purpose, and disposition.
- Product owners approve all claims used by the first build wave.

## Phase 2: Conduct market, buyer, and search research

### Objective

Build the architecture and copy from real buyer language and real evaluation behaviour.

### Audience groups

Research separately:

- Independent restaurant owner.
- Restaurant manager or operator.
- Multi-location restaurant group.
- Independent retailer.
- Multi-location retailer.
- Each approved Retail vertical when its workflow differs materially.
- Broiler-farm operator only after Farm scope is confirmed.
- Marketing-service buyer.

Do not combine audiences only because they can use the same feature.

### Market-voice collection

For each priority audience:

- Review 30 to 50 relevant 2-, 3-, and 4-star competitor reviews.
- Review at least 10 useful operator discussions across Reddit and specialist forums.
- Review sales-call transcripts, onboarding questions, lost-deal notes, support tickets, and cancellation reasons when available.
- Conduct 5 to 8 interviews before finalizing a major product-family message.
- Record exact language with source, date, audience, and context.
- Separate recurring patterns from isolated complaints.
- Treat anonymous forum comments as hypotheses, not proof.

Tag findings by:

- Trigger.
- Operational pain.
- Emotional consequence.
- Current workaround.
- Desired outcome.
- Switching fear.
- Objection.
- Alternative considered.
- Proof required.
- Buying language.
- Awareness stage.

### Competitor and category research

Audit direct and adjacent competitors for:

- Top-level navigation.
- Capability grouping.
- Industry grouping.
- Page depth.
- Pricing transparency.
- Trial or demo path.
- Onboarding and switching story.
- Proof format.
- Comparison strategy.
- Help and education structure.
- Mobile conversion path.

The research sample should include Toast, Square, Lightspeed, Petpooja, relevant Retail platforms, and any confirmed regional competitors. Record facts, not design imitation.

### Search-intent research

Build an intent map for:

- Product-family terms.
- Operational problem terms.
- Feature terms.
- Industry and business-type terms.
- Comparison and alternative terms.
- Pricing terms.
- Implementation and switching terms.
- Educational questions.

Assign one primary intent to each candidate page. Merge candidates that would compete for the same intent without adding unique value.

### Deliverables

- `docs/research/MARKET-VOICE.md`.
- `docs/research/AUDIENCE-MAPS.md`.
- `docs/research/OBJECTION-REGISTER.md`.
- `docs/research/COMPETITOR-ARCHITECTURE.md`.
- `docs/research/SEARCH-INTENT-MAP.md`.
- Message-angle matrix connecting pains, outcomes, mechanisms, evidence, and offers.

### Exit criteria

- G2 passes for the first product family.
- Repeated market patterns can be distinguished from unsupported assumptions.
- Every proposed page has a clear audience and primary intent.

## Phase 3: Approve sitemap, navigation, and URL strategy

### Objective

Create a scalable hierarchy before page production.

### Recommended discovery model

```text
Entry page
  -> Product or solution overview
    -> Major capability page
      -> Supporting feature sections
```

A separate feature page is exceptional. Create one only when buyers need substantial help understanding a distinct workflow and the page passes the focused-page score. Do not create a category page only to organize links.

Keep the current restaurant-led top-level model unless Phase 0 changes commercial priority:

```text
Products | Restaurants | Solutions | Pricing | Resources
```

When Retail and Farm become commercially mature, evaluate replacing Restaurants with Industries. Do not make that change automatically.

### Recommended Restaurant major pages

Use the research and capability matrix to test this consolidated model:

1. Restaurant POS.
2. Online & QR Ordering.
3. Kitchen Operations.
4. Inventory & Food Cost.
5. Customers & CRM.
6. HR, Payroll & Team.
7. Reporting & Day Close.
8. Multi-Location.
9. Qavyo Intelligence.

Specific decisions required:

- Make Floor Plan, Customer-Facing Display, Offline Mode, refunds, and voids sections inside Restaurant POS.
- Make Kiosk a section inside Online & QR Ordering.
- Make Kitchen Display, routing, preparation tracking, alerts, and performance sections inside Kitchen Operations.
- Merge Workforce into HR, Payroll & Team unless research proves that a separate page is necessary.
- Keep Customer App inside Customers & CRM unless it has independent demand.
- Keep Staff App inside HR, Payroll & Team unless it has independent demand.
- Keep Delivery within Online Ordering or Kitchen Operations unless it becomes a major product line.
- Keep Payments and Hardware as shared product pages after scope confirmation.
- Keep Marketing Solutions separate from core operational software.
- Make Intelligence use cases sections and examples on the main Intelligence page.
- Use `RESTAURANT-CONTENT-CONSOLIDATION-PROPOSAL.md` for the proposed route-by-route treatment and menu.

### Focused-page scoring

Score every proposed focused page out of 100:

| Criterion | Weight |
|---|---:|
| Demonstrated buyer or search demand | 25 |
| Revenue or sales importance | 20 |
| Product readiness | 20 |
| Available proof | 15 |
| Distinct workflow and content | 10 |
| Internal-link value | 10 |

- 70 or more: eligible for a focused page.
- 50 to 69: keep as a hub section until stronger evidence exists.
- Below 50: defer.

This score prioritizes work. It does not override product-truth or legal gates.

### URL decision

Choose one canonical URL model before launch:

```text
Current static form: /restaurant-pos.html
Hierarchical form:  /restaurant/sales-service/restaurant-pos/
```

Do not migrate URLs until the production host can provide permanent redirects, canonical tags, sitemap consistency, and regression testing. Use the same canonical URL in internal links, XML sitemaps, and metadata.

### Validation

- Run open card sorting with representative buyers.
- Run tree testing against common tasks.
- Verify that each important page is reachable through normal HTML links.
- Verify that every focused page has one major parent page.
- Verify that cross-links are selective and useful.
- Verify desktop and mobile navigation expose the same essential destinations.

### Deliverables

- Approved `SITEMAP.md` revision.
- Approved navigation model.
- Approved URL and redirect plan.
- Approved internal-link map.
- Approved indexation policy.
- Updated `PAGE-INVENTORY.md`.

### Exit criteria

- G3 passes for every route in the first build wave.
- No public menu links to unfinished pages.
- No candidate pages compete for the same purpose without a documented reason.

## Phase 4: Define conversion and offer architecture

### Objective

Separate exploratory website journeys from focused cold-traffic funnels.

### Main website paths

The main website supports four visitor modes:

1. Explore a product family.
2. Solve an operational problem.
3. Compare price and scope.
4. Start or discuss the purchase.

Each page receives one primary CTA and no more than one contextual secondary CTA. The destination must be functional before rollout.

### CTA decisions

Confirm:

- Who can start the 30-day experience.
- Whether payment details are required.
- What happens after clicking Start Free.
- Who should Talk to Sales.
- What value a sales conversation provides before purchase.
- Required form fields.
- Response expectation.
- Qualification and routing logic.
- Success, error, duplicate-submission, and unavailable-service states.

### Campaign landing pages

Place paid-traffic pages in a separate campaign structure. Give each page:

- One audience.
- One problem.
- One awareness stage.
- One verified mechanism.
- One offer.
- One conversion action.
- Reduced navigation.
- Campaign-specific measurement.

Use the supplied 17-step selling framework as an argument checklist, not as 17 visible sections. A practical page sequence is:

1. Audience callout, promise, and subheadline.
2. Pain, stakes, and intrigue.
3. Why current approaches fail.
4. Qavyo solution and mechanism.
5. Workflow, benefits, and product evidence.
6. Credentials and proof.
7. Offer, risk handling, and buyer-derived FAQ.
8. Final CTA and P.S.

Do not invent timeframe promises, proprietary mechanisms, guarantees, scarcity, live booking notices, social proof, or competitor claims. Use Qavyo Intelligence's approved operating loop rather than inventing another AI framework.

### Angle validation

- Build an angle library from research.
- Test message angles before producing expensive long-form pages.
- Keep experiment variables isolated where the platform and budget allow.
- Define the decision metric before launch.
- Judge results using qualified leads, sales, earnings per click, and customer value when available.
- Do not declare a winner from low-volume directional data.

### Deliverables

- Offer and CTA brief.
- Form and follow-up specification.
- Campaign landing-page template.
- Experiment brief template.
- Proof acquisition backlog.

### Exit criteria

- Conversion destinations, ownership, and follow-up are approved.
- Every claim in the first funnel has matching evidence.
- G4 can be evaluated objectively.

## Phase 5: Stabilize the shared technical and design foundation

### Objective

Make every later page cheaper and safer to build.

### Shared technical work

- Confirm hosting, environments, deployment, preview, rollback, and cache policy.
- Establish production, preview, and local environment rules.
- Prevent previews and unfinished routes from accidental indexing.
- Decide production URL format and redirects.
- Add canonical tags after the production domain is confirmed.
- Add `robots.txt` and XML sitemap behaviour.
- Define the 404 response at hosting level.
- Define security headers, including an appropriate Content Security Policy.
- Confirm form processing, spam controls, data retention, and failure handling.
- Define third-party script approval and consent behaviour.
- Keep secrets outside frontend files and repository history.

### Shared interface work

Audit and approve:

- Design tokens.
- Typography and font delivery.
- Header and desktop menus.
- Mobile navigation.
- Footer.
- Breadcrumbs.
- Buttons and text links.
- Section headers.
- Hub summaries.
- Connected-workflow visual.
- Product UI illustration label.
- Related-page pattern.
- Next-step pattern.
- Forms, errors, loading, success, and disabled states.
- FAQ disclosure.
- Comparison tables and mobile treatment.
- Skip link, focus style, and visually hidden utility.

Document material reusable additions in `COMPONENTS.md`.

### Quality targets

- Target WCAG 2.2 Level AA.
- Preserve full keyboard operation and visible focus.
- Verify 320, 375, 768, 1024, and 1440 CSS-pixel widths.
- Verify 200% text zoom and reduced motion.
- Test current Chrome, Edge, Firefox, and Safari where available.
- Target field Core Web Vitals at the 75th percentile: LCP at or below 2.5 seconds, INP at or below 200 milliseconds, and CLS at or below 0.1.
- Set page-weight and request budgets after measuring the approved shared shell.
- Load no nonessential third-party script by default.

### Automation and checks

Select lightweight checks compatible with the static stack:

- HTML validation.
- Internal-link and duplicate-ID check.
- CSS and JavaScript error check.
- Accessibility scan plus manual keyboard review.
- Lighthouse or equivalent lab performance check.
- Metadata, canonical, robots, and structured-data check.
- Secret and generated-file review before commit.

### Exit criteria

- Shared patterns pass G5 on a representative page.
- Later pages can be composed without copying entire legacy page shells.
- No new framework, large library, or build system is introduced without approval.

## Phase 6: Build conversion destinations and supporting essentials

Build functional destinations before sending more traffic to them:

1. Start Free flow.
2. Talk to Sales page and form.
3. Form success and error states.
4. Sign In destination.
5. Contact.
6. Support overview.
7. Privacy policy.
8. Terms and conditions.
9. Cookie notice and consent behaviour when legally required.
10. Accessibility statement.
11. 404 page.

Legal and privacy language requires qualified review for the launch markets. Do not copy competitor policies.

## Phase 7: Build the public website in waves

### Wave 1: Restaurant discovery foundation

1. Audit Restaurant Software overview against approved architecture.
2. Make it the platform story and capability directory.
3. Build Sales & Service as the first approved hub.
4. Validate the hub pattern with users and stakeholders.
5. Build Kitchen & Fulfilment.
6. Build Inventory & Purchasing.
7. Build Customers & Growth.
8. Build Money & Reporting.
9. Build Team & Payroll after the merged-versus-separate decision.
10. Build Multi-Location.
11. Finish Qavyo Intelligence as the shared capability hub.
12. Build Payments and Hardware only after scope confirmation.

Home and Pricing receive only approved link, metadata, accessibility, and performance work during this wave.

### Wave 2: Priority Restaurant feature pages

Use the Phase 3 score. Likely candidates for research, not automatic approval:

- Restaurant POS.
- Kitchen Display System.
- Online and QR Ordering.
- Inventory and Food Cost.
- Recipes and Costing.
- Reservations and Waitlist.
- Customer Profiles and CRM.
- Scheduling and Attendance.
- Payroll.
- Cash Management and Day Close.
- Multi-Location Operations.

Do not build the whole existing scaffold inventory. Build one focused workflow when its parent hub proves that more depth is useful.

### Wave 3: Retail

1. Confirm shared versus Retail-specific capabilities.
2. Finish Retail overview.
3. Finish Clothing & Fashion.
4. Finish Electronics.
5. Score other vertical routes.
6. Build Repair Shops, Grocery & Convenience, Salon & Spa, Hardware & Sanitary, and Paint & Tiles only when each has confirmed scope and unique workflow.

Do not route Retail buyers into Restaurant feature pages unless the content is genuinely shared and written neutrally.

### Wave 4: Farm

1. Confirm Broiler Farming scope.
2. Finish Farm overview.
3. Build Broiler Farming.
4. Keep other farming verticals outside public architecture until approved.

### Wave 5: Marketing Solutions

1. Resolve whether the existing Marketing family is final, frozen, or still under review.
2. Audit its relationship to Business pricing without presenting services as core operational software.
3. Fix verified metadata and link defects.
4. Preserve approved page identities.
5. Add no new service page without scope and demand evidence.

### Wave 6: Resources and trust

Build only supported resource types:

- About Qavyo.
- Feature directory after final route disposition.
- Help and support entry.
- Buying and switching guides based on real buyer questions.
- Case studies only when customer approval and evidence exist.
- Comparison pages only with dated, attributable, maintained sources.
- Public HTML sitemap if user testing shows value.

### Wave 7: Campaign funnels

Build campaign pages only after:

- The corresponding product pages are truthful and functional.
- Conversion destinations work.
- Analytics and consent are verified.
- The angle has enough evidence or test signal.
- Sales can handle and qualify the resulting leads.

## Standard page workflow

Run this sequence for every page:

1. **Brief:** Confirm audience, intent, parent, primary CTA, and commercial purpose.
2. **Truth:** Approve relevant capability and claim rows.
3. **Research:** Attach market language, objections, and search intent.
4. **Outline:** Approve section order before visual work.
5. **Copy:** Write the argument, metadata, labels, alt text, and FAQ.
6. **Evidence:** Attach proof to every material claim.
7. **Structure:** Write semantic HTML and heading order.
8. **Design:** Compose with approved tokens and components.
9. **Interaction:** Implement all reachable states and keyboard behaviour.
10. **Responsive QA:** Inspect desktop, laptop, tablet, mobile, zoom, and reduced motion.
11. **Technical QA:** Check links, IDs, console, metadata, indexation, performance, and structured data.
12. **Content QA:** Recheck claims, price, limits, spelling, and parent/related links.
13. **Approval:** Obtain product, business, and required legal approval.
14. **Delivery:** Update documentation, review diff, commit, push, and verify.
15. **Measurement:** Monitor search, behaviour, qualified conversion, sales outcome, and support feedback.

## Page definition of ready

A page may enter implementation only when:

- Its route disposition is Keep or Utility.
- Its parent and page type are approved.
- Product scope is confirmed.
- Audience and intent are documented.
- Primary CTA destination exists or is being built first.
- Claims and evidence are available.
- Outline is approved.
- Required assets are available or explicitly scoped.
- No unresolved dependency blocks truthful completion.

## Page definition of done

A page is done only when:

- Purpose, audience, intent, parent, and next action are clear.
- Claims match the approved capability matrix and claims register.
- Copy and visual evidence are approved.
- Semantic structure and heading order are correct.
- Keyboard access, focus, contrast, names, labels, errors, and touch targets pass.
- Responsive layouts pass required widths and 200% text zoom.
- Reduced-motion behaviour passes.
- Internal links and CTA destinations work.
- Title, description, canonical, robots, social metadata, and applicable structured data are correct.
- No console error, duplicate ID, broken link, or obvious layout shift remains.
- Performance stays within approved budgets.
- Analytics events fire once and respect consent requirements.
- Documentation is updated.
- Task-only changes are committed and pushed.
- Stakeholders approve the result.

## Phase 8: SEO and indexation release

Before public indexing:

- Remove, merge, redirect, or `noindex` unfinished routes according to disposition.
- Confirm one canonical URL per page.
- Add unique titles and descriptions.
- Add crawlable HTML navigation and contextual internal links.
- Add breadcrumbs to hub and focused pages.
- Add validated breadcrumb structured data where appropriate.
- Add accurate Organization or SoftwareApplication data only when required properties are verified.
- Generate an XML sitemap containing only canonical, indexable URLs.
- Verify `robots.txt` does not block pages that depend on a `noindex` directive.
- Configure correct 200, redirect, 404, and server-error responses.
- Verify Google Search Console after the production domain is available.
- Create a redirect map before any route migration.

## Phase 9: Measurement and experimentation

### Event taxonomy

Measure decisions, not decorative interaction:

- Product-family selection.
- Hub and feature navigation.
- Pricing view.
- Billing-mode change.
- Plan CTA.
- Start Free click and completion.
- Talk to Sales form start, error, and completion.
- Phone or email contact when applicable.
- Campaign landing-page conversion.
- Qualified lead.
- Sales opportunity.
- Customer and revenue outcome when systems permit.

Define event name, trigger, parameters, consent dependency, owner, and validation method before implementation.

### Reporting

Create separate views for:

- Acquisition source and landing page.
- Main-site exploration.
- Campaign funnel.
- Qualified lead rate.
- Sales acceptance rate.
- Opportunity and customer rate.
- Earnings per click and customer value when data is available.
- Search queries and landing pages.
- Core Web Vitals and technical health.

Exclude internal traffic and document attribution limitations.

### Experiment rules

- State one hypothesis.
- Change one main variable where practical.
- Define the primary metric and stopping rule first.
- Check lead quality, not form volume alone.
- Record inconclusive results.
- Do not permanently ship a winner that harms trust, accessibility, performance, or downstream sales quality.

## Phase 10: Pre-launch verification

### Content and product

- Confirm every price, limit, capability, support promise, device statement, and commercial qualification.
- Confirm no placeholder, scaffold language, fabricated proof, or fake urgency remains.
- Confirm all illustrative product UI is labelled.
- Confirm approval for customer names, quotes, logos, images, and results.

### User experience

- Test primary tasks with representative users.
- Test every menu, tab, accordion, form, dialog, and CTA with keyboard only.
- Test mobile touch targets and dense comparisons.
- Test 200% text zoom and 320px reflow.
- Test reduced motion.
- Test form errors, network errors, duplicate submissions, and success states.

### Technical

- Crawl all indexable pages for broken links, redirect chains, titles, descriptions, canonicals, and status codes.
- Validate HTML, structured data, sitemap, robots, and social previews.
- Check console and network errors.
- Verify security headers and HTTPS behaviour.
- Verify forms, spam controls, notifications, storage, and deletion process.
- Verify analytics and consent choices.
- Measure performance on representative mobile and desktop conditions.
- Confirm deployment and rollback procedure.

### Release gate

G6 passes only when every critical defect has an owner and all launch-blocking defects are closed.

## Phase 11: Launch and stabilization

### Launch sequence

1. Freeze noncritical changes.
2. Back up the last known-good release.
3. Deploy to production.
4. Smoke-test navigation, conversion paths, forms, status codes, analytics, consent, and key pages.
5. Verify Search Console access, sitemap delivery, and indexing controls.
6. Monitor errors, form delivery, lead routing, performance, and unexpected traffic behaviour.
7. Roll back if a critical conversion, security, privacy, or accessibility failure cannot be fixed safely.

### Stabilization window

During the first two weeks:

- Review critical errors daily.
- Verify every lead reaches the correct owner.
- Watch search crawling and indexation.
- Review real-user performance when enough data exists.
- Record buyer confusion and sales objections.
- Fix defects before starting broad experiments.

## Phase 12: Continuous improvement

### Weekly

- Review forms, errors, lead routing, and critical page health.
- Review active experiment integrity.

### Monthly

- Review qualified conversion by source and landing page.
- Review sales objections, support questions, and search queries.
- Refresh the research and proof backlog.
- Check broken links, outdated claims, and performance regressions.

### Quarterly

- Re-score deferred feature pages.
- Recheck competitor claims used in comparisons.
- Review sitemap and navigation against buyer behaviour.
- Revalidate prices, limits, support commitments, and regional availability.
- Review accessibility with manual testing.
- Archive or merge content that no longer has a distinct purpose.

G7 requires enough qualified evidence. Traffic or click volume alone is insufficient.

## Critical path

```text
Commercial focus
  -> Product truth
    -> Buyer research
      -> Route disposition
        -> Sitemap and URL approval
          -> Conversion destinations
            -> Shared foundation
              -> Restaurant overview
                -> First hub
                  -> Hub validation
                    -> Remaining hubs
                      -> Priority focused pages
                        -> Retail, Farm, resources, and campaigns
                          -> SEO release
                            -> Launch
                              -> Measurement and optimization
```

The following work can run in parallel without breaking the critical path:

- Proof and asset collection.
- Legal drafting after launch markets are known.
- Research for the next approved page.
- Analytics planning before implementation.
- Retail product-scope confirmation while Restaurant hubs are built.

## Research basis

This plan uses the following external guidance and market signals. Sources were reviewed on 20 October 2026.

### Search and site structure

- [Google: Help Google understand site structure](https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure)
- [Google: URL structure guidance](https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites)
- [Google: Canonicalization](https://developers.google.com/search/docs/crawling-indexing/canonicalization)
- [Google: Robots meta rules](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
- [Google: Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: Breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)

### Accessibility and performance

- [W3C: WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C: Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/)
- [web.dev: Core Web Vitals](https://web.dev/articles/vitals)
- [web.dev: Measuring Web Vitals](https://web.dev/articles/vitals-measurement-getting-started)

### Measurement and experimentation

- [Google Analytics: Consent types](https://support.google.com/analytics/answer/12334711)
- [Meta Blueprint: A/B tests, creative tests, and lift studies](https://www.facebookblueprint.com/student/path/219763-ab-test-conversion-brand-lift-course)

### Category architecture

- [Toast Restaurant POS](https://pos.toasttab.com/restaurant-pos/)
- [Square for Restaurants features](https://squareup.com/gb/en/point-of-sale/restaurants/features)
- [Square for Retail features](https://squareup.com/gb/en/point-of-sale/retail/features)
- [Lightspeed Restaurant and Retail POS](https://www.lightspeedhq.com/uk/pos/)
- [Lightspeed Retail features](https://www.lightspeedhq.com/uk/pos/retail/features/)

### Market-voice starting points

- [Capterra: Toast POS reviews](https://www.capterra.com/p/136301/Toast-POS/reviews/)
- [G2: Restaurant POS reviews](https://www.g2.com/categories/restaurant-pos)
- [Restaurant-owner discussion about software operations](https://www.reddit.com/r/restaurantowners/comments/1wbkalz/restaurant_operations_software_for_managing_a/)
- [Restaurant-owner discussion about inventory and purchasing](https://www.reddit.com/r/restaurantowners/comments/1ihp0nn/looking_for_inventory_and_purchase_tracking_for_a/)

Review sites and forums provide language and hypotheses. They do not prove Qavyo capabilities or results.

## Immediate next tasks

Start with these tasks only:

1. Confirm Restaurant-first commercial priority.
2. Confirm target launch market and production domain status.
3. Assign product-claim and final-approval owners.
4. Create `CAPABILITY-MATRIX.md`.
5. Create `ROUTE-DISPOSITION.md` for all 108 routes.
6. Resolve documentation conflicts.
7. Begin Restaurant buyer research.
8. Approve Sitemap v2 before further page builds.
