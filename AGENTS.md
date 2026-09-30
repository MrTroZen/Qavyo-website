# Qavyo website instructions

These instructions apply to the entire repository.

1. Read `docs/BRAND.md` before any visual work.
2. Read `docs/ARCHITECTURE.md` before creating pages, routes, or navigation.
3. Review `docs/COMPONENTS.md` and reuse existing CSS tokens and components before adding new ones.
4. Do not invent colours, radii, shadows, type sizes, or button styles casually. Add a token only when a reusable role is clear, and document material additions.
5. Preserve approved sections unless the request explicitly requires changing them. Do not redesign unrelated work while fixing one component.
6. Never invent customer statistics, testimonials, logos, results, integrations, compatibility, pricing, or product capabilities. Clearly label illustrative UI and placeholder content.
7. Maintain semantic HTML, heading order, keyboard access, visible focus, contrast, meaningful alternative text, touch targets, and reduced-motion support.
8. Use semantic HTML5, CSS3, and vanilla JavaScript. Do not add a framework, large UI library, or build tool unless the user explicitly approves it.
9. Work page-by-page and section-by-section. Run and inspect changes at desktop, laptop, tablet, and mobile widths before presenting them for approval.
10. Update the relevant documentation when a reusable design pattern, component, architectural decision, or brand rule is approved.
11. Qavyo is the parent technology brand. Its software categories are Restaurant Software, Retail Software, and Farm Software; Qavyo Intelligence is a Qavyo capability. Do not introduce separate sub-brands without explicit approval, and keep Products conceptually distinct from business Solutions.
12. Build the homepage incrementally and do not add unrequested sections or pages. The current `index.html` contains the approved global navigation, homepage hero, and Product Families section only.
13. Keep commits logically separable. Do not commit caches, generated screenshots, editor state, credentials, or secrets.

## Mandatory Git and GitHub workflow

After every completed and verified development task:

1. Review `git status` and `git diff`.
2. Confirm that no temporary files, screenshots, credentials, secrets, editor files, caches, or unnecessary generated output are included.
3. Run or render the website and check for obvious errors before committing.
4. Stage only files belonging to the completed task.
5. Create one concise, descriptive commit using the appropriate conventional prefix, such as `feat:`, `fix:`, `style:`, `docs:`, or `chore:`.
6. Push the commit to the GitHub remote immediately and verify that the push succeeded.
7. Report the files changed, summary, commit message, commit hash, branch, and push result.

Do not consider a development task complete until its verified changes are committed and pushed successfully. Never force-push, rewrite shared history, delete branches, reset existing work, or use another destructive Git operation unless the user explicitly requests it. If a task changes an established reusable design pattern, update the relevant file in `docs/` within the same task and commit.
