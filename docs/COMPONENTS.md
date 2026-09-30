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

The current header only identifies the foundation preview. Public navigation is not implemented or approved. When introduced, it must support keyboard navigation, clear current states, mobile interaction, and future product families.

## Footer

The current footer is intentionally minimal and internal. A public footer architecture will be created alongside approved navigation and pages.

## Cards

`.card` is a restrained bordered surface for content that needs containment. Do not default every feature or idea to a card. Prefer layout, typography, and dividers when grouping is already clear.

## Product UI frames

`.product-frame` demonstrates the initial framing language for illustrative operational UI. Frames need a clear explanatory purpose, legible content, and an illustrative label when not showing the real product. Avoid fake metrics and decorative dashboard clutter.

## Responsive and accessibility requirements

Every component must keep a logical reading and tab order, visible keyboard focus, sufficient colour contrast, meaningful semantics, and reasonable touch targets. Responsive behaviour must be designed, not assumed. Motion must respect reduced-motion preferences.
