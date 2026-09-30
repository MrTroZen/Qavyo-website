# Qavyo brand foundation

This document is the visual source of truth for the Qavyo public website. Read it before changing page composition, styling, imagery, product UI, diagrams, or motion.

## Brand character

Qavyo is a parent technology brand for software and technology products that help serious businesses operate. It should feel premium, modern, calm, credible, intelligent, operational, precise, product-led, and easy to understand.

Qavyo is not defined by restaurant POS. Qavyo Restaurant Software is the company's restaurant operating platform; POS is one capability within it. Qavyo also includes Retail Software and Farm Software categories, while marketing, web, growth, and intelligence services are organized separately as business solutions. Do not introduce separate product sub-brands without explicit approval.

## Visual principles

1. Communicate with strong typography before adding containers or decoration.
2. Show meaningful product behaviour, operational relationships, and useful signals.
3. Use restraint: high contrast, controlled whitespace, fine borders, and limited colour.
4. Let composition vary between pages while shared tokens and components preserve the brand.
5. Make every visual earn its place. Product UI and diagrams must explain a concept.

## Typography

Manrope is the primary typeface. Use the system sans-serif fallback when the web font is unavailable. Headings are strong but not excessively heavy, use tight letter spacing, and generally stay sentence case. Body copy should remain comfortably readable; avoid tiny text. Compact uppercase labels may introduce sections or operational states, but should not become a page-wide gimmick.

## Colour roles

- Brand blue is the primary action and signal colour. Use it sparingly for emphasis, connection, selected state, and focus.
- Deep navy is the core ink and dark-section colour. It conveys authority without becoming pure black.
- The canvas is a cool near-white neutral; surfaces are white or a quiet cool grey.
- Fine cool-grey borders define structure. They should rarely dominate a composition.
- Semantic success, warning, and danger colours are for real states, not decoration.

Approved values live in `css/tokens.css`. Do not introduce a new colour because a single section feels visually empty.

## Spacing and layout

Use generous but controlled spacing. Sections should have a deliberate rhythm, while content inside operational UI can be denser. Prefer a limited spacing scale and responsive `clamp()` values. Long-form text should use a narrower measure than product compositions.

## Surfaces and cards

Cards are containers, not the Qavyo identity. Use a card when information needs a meaningful boundary, grouping, state, or interaction. Prefer flat surfaces with subtle borders and modest shadows. Corner radii are restrained; avoid pill-shaped containers except for controls that semantically require them.

## Product UI

Product UI should demonstrate a real workflow or relationship and must be marked as illustrative when it is not a real product capture. Use credible hierarchy, legible labels, and operational states. Avoid decorative dashboards, invented metrics, or tiny unreadable interfaces.

## Imagery

Use selective real restaurant or business imagery when it adds human or operational context. Imagery should feel observational, premium, and grounded. Avoid generic corporate stock poses, fake customer imagery, generic AI visuals, glowing brains, and futuristic orbs.

## Diagrams and the connection language

Qavyo's visual signature can use thin lines, small nodes, restrained signal marks, and operational flows to connect systems such as orders, kitchen, stock, customers, and staff. The goal is to clarify connection, signals, operations, and intelligence. Do not turn every section into a network diagram.

## Qavyo Intelligence

Qavyo Intelligence is proactive and operational, not chatbot-first. It is currently particularly important within Restaurant Software, while its name and system belong to the Qavyo brand. Visual stories should reflect the loop:

`WATCH → DETECT → EXPLAIN → RECOMMEND → ACT → MEASURE → LEARN`

Show source signals becoming context, recommendations, actions, and measured outcomes. Keep people in control. Do not use unverified predictions or product capabilities as claims.

## Motion

Motion should explain change, state, causality, or direction. Keep it quiet and short. Avoid decorative loops, parallax for its own sake, and attention-seeking effects. Respect `prefers-reduced-motion` and ensure no interaction depends on animation.

## Mobile philosophy

Mobile is a deliberate composition, not simply a collapsed desktop layout. Preserve reading order, simplify dense operational diagrams, make actions easy to reach, and keep touch targets at least roughly 44px. Tables and complex comparisons require a specific small-screen treatment before approval.

## Anti-patterns

Do not use excessive gradients, glassmorphism, glowing blobs, neon effects, giant empty heroes, endless pill badges, feature-card grids, tiny text, decorative animation, generic SaaS or AI-startup motifs, fake logos, fake testimonials, fake statistics, or fabricated results. Never add claims about integrations, compatibility, customers, performance, or availability without confirmation.
