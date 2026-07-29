# Portfolio V2 Implementation Plan

> For agentic workers: implement this plan task by task. Do not skip validation gates. Do not begin a later task when the current task does not build or fails its documented checks.

Goal: rebuild the current static portfolio into the KAISER SYSTEM celestial developer interface using a static-first Astro architecture.

Architecture: Astro renders semantic static HTML for the homepage and project case studies. TypeScript content collections hold project facts. CSS/SVG and small TypeScript modules power the celestial interface first; GSAP is added later for purposeful motion; React Three Fiber is not part of the initial implementation.

Tech stack after setup: Astro, TypeScript, content collections, CSS tokens, GSAP, Vitest, Playwright, axe accessibility checks, GitHub Pages static deployment.

## Global Constraints

- Do not invent project facts, professional experience, metrics, links, or outcomes.
- Use the professional positioning: **Full-Stack Developer - QA - UI/UX**.
- Prioritize projects in this order: Venora, FAHAD, ResumeBridge.
- Essential content must render without animation, JavaScript, canvas, or WebGL.
- Every meaningful animation must support `prefers-reduced-motion`.
- Do not implement scroll hijacking, autoplay audio, fake loading metrics, or skill-percentage progress bars.
- Keep GitHub Pages compatibility with base path `/My-Website-Portfolio/`.
- Use small focused components; do not rebuild the portfolio as one oversized page component.
- Run all available validation commands before each completion claim.

## Task 1: Project Foundation And Branch Validation

**Goal:** verify the starting point, protect user changes, and record the migration boundary before source changes begin.

**Exact files expected to be created or modified:**

- Modify: `C:\Users\ranib\My-Website-Portfolio\docs\portfolio-v2\implementation-notes.md`

**Interfaces produced:**

- `implementation-notes.md` records branch, source files, current uncommitted changes, and the exact migration start state.

**Dependencies on previous tasks:** none.

**Implementation steps:**

1. Run `git status --short` and copy the result into `implementation-notes.md`.
2. Run `git branch --show-current` and record the active branch.
3. Run `rg --files` and record the current file list.
4. Confirm whether `AGENTS.md`, `README.md`, `package.json`, `.github\workflows`, and `.openai\hosting.json` exist.
5. Record that the current application source is `index.html` and `style.css`.

**Validation commands:**

- `git status --short`
- `rg --files`

**Manual checks:**

- Confirm unrelated user changes are listed and preserved.
- Confirm no source migration starts in this task.

**Accessibility checks:**

- Confirm no accessibility-affecting source files changed.

**Mobile checks:**

- No mobile UI changes occur in this task.

**Expected result:**

- A written baseline exists before the migration begins.

**Suggested commit message:**

- `docs: record portfolio v2 implementation baseline`

**Conditions that block progression:**

- Unknown uncommitted changes in application source that are not documented.
- Detached HEAD or a branch state the owner does not want to continue from.

## Task 2: Selected Architecture Setup

**Goal:** introduce Astro and TypeScript static output without redesigning content.

**Exact files expected to be created or modified:**

- Create: `C:\Users\ranib\My-Website-Portfolio\package.json`
- Create: `C:\Users\ranib\My-Website-Portfolio\astro.config.mjs`
- Create: `C:\Users\ranib\My-Website-Portfolio\tsconfig.json`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\pages\index.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\layouts\BaseLayout.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\styles\global.css`

**Interfaces produced:**

- `npm run dev`
- `npm run build`
- `npm run preview`
- Astro static output in `dist`.
- `BaseLayout` accepts title, description, and canonical path props.

**Dependencies on previous tasks:** Task 1.

**Implementation steps:**

1. Create `package.json` with scripts: `dev`, `build`, and `preview`.
2. Add Astro and TypeScript dependencies only.
3. Configure `astro.config.mjs` with `site: "https://blackkaiser1121.github.io"`, `base: "/My-Website-Portfolio/"`, and static output.
4. Configure `tsconfig.json` for strict TypeScript.
5. Create `BaseLayout.astro` with `<html lang="en">`, metadata slots, stylesheet import, and `<slot />`.
6. Create `src/pages/index.astro` that renders the existing factual content in plain semantic sections without final v2 visual styling.
7. Import `global.css` and set only baseline reset, body font fallback, color fallback, and link defaults.

**Validation commands:**

- `npm install`
- `npm run build`
- `npm run preview`

**Manual checks:**

- Confirm the homepage renders the existing name, about text, skills, projects, and contact facts.
- Confirm the generated URLs include `/My-Website-Portfolio/` correctly.

**Accessibility checks:**

- Confirm the rendered page has one `<main>` landmark and one `<h1>`.

**Mobile checks:**

- Open the preview at 390px and confirm there is no horizontal clipping in the baseline page.

**Expected result:**

- Astro builds a static homepage with preserved facts and no final redesign styling.

**Suggested commit message:**

- `chore: set up Astro portfolio foundation`

**Conditions that block progression:**

- `npm run build` fails.
- The homepage drops verified existing content.
- GitHub Pages base path is not configured.

## Task 3: Quality Tooling And Test Baseline

**Goal:** add validation commands before feature work expands.

**Exact files expected to be created or modified:**

- Modify: `C:\Users\ranib\My-Website-Portfolio\package.json`
- Create: `C:\Users\ranib\My-Website-Portfolio\eslint.config.mjs`
- Create: `C:\Users\ranib\My-Website-Portfolio\vitest.config.ts`
- Create: `C:\Users\ranib\My-Website-Portfolio\playwright.config.ts`
- Create: `C:\Users\ranib\My-Website-Portfolio\tests\e2e\homepage.spec.ts`
- Create: `C:\Users\ranib\My-Website-Portfolio\tests\unit\content-schema.test.ts`

**Interfaces produced:**

- `npm run check`
- `npm run lint`
- `npm run test`
- `npm run test:e2e`

**Dependencies on previous tasks:** Task 2.

**Implementation steps:**

1. Add `astro check` as `npm run check`.
2. Add ESLint with TypeScript support as `npm run lint`.
3. Add Vitest as `npm run test`.
4. Add Playwright as `npm run test:e2e`.
5. Create one unit test that validates the test runner is wired by asserting a known exported constant from a small test fixture.
6. Create one Playwright test that opens `/My-Website-Portfolio/`, verifies the `h1`, and checks that the Projects and Contact links are visible.
7. Add `@axe-core/playwright` and wire one homepage accessibility smoke check into the Playwright suite.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test`
- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- Confirm every script exits with a nonzero status when intentionally broken in a local experiment, then restore the valid state.

**Accessibility checks:**

- Confirm the e2e smoke test includes an axe scan for the homepage.

**Mobile checks:**

- Add a 390px Playwright viewport check that verifies the document width does not exceed viewport width.

**Expected result:**

- The project has a reliable baseline validation suite before redesign components are added.

**Suggested commit message:**

- `test: add portfolio validation baseline`

**Conditions that block progression:**

- Any validation command fails.
- Playwright cannot open the local preview.
- The mobile width smoke check fails.

## Task 4: Design Tokens And Typography

**Goal:** define the visual foundation for KAISER SYSTEM without building final sections yet.

**Exact files expected to be created or modified:**

- Create: `C:\Users\ranib\My-Website-Portfolio\src\styles\tokens.css`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\styles\global.css`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\layouts\BaseLayout.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\public\assets\fonts\README.md`

**Interfaces produced:**

- CSS custom properties for color, typography, spacing, radius, surfaces, focus, and motion.
- Global `:focus-visible` style.

**Dependencies on previous tasks:** Task 3.

**Implementation steps:**

1. Add color tokens for space black, graphite, elevated graphite, soft white, muted text, electric green, cool cyan, and amber.
2. Add spacing tokens from `--space-1` through `--space-8`.
3. Add typography tokens for display, body, and monospace roles.
4. Add radius tokens with card radius capped at 8px.
5. Add focus tokens using electric green against dark surfaces.
6. Add `prefers-reduced-motion` global defaults for scroll behavior and animation duration.
7. Document font decisions in `public/assets/fonts/README.md`, including whether fonts are local or remote.

**Validation commands:**

- `npm run lint`
- `npm run build`

**Manual checks:**

- Inspect CSS colors and confirm the palette is not dominated by blue, purple, beige, brown, or orange.
- Confirm electric green is limited to accents and active states.

**Accessibility checks:**

- Check text contrast for primary text, muted text, links, and buttons against each surface token.

**Mobile checks:**

- Confirm font sizes use fixed/rem-based tokens, not viewport-width scaling.

**Expected result:**

- A reusable design token layer exists before components consume it.

**Suggested commit message:**

- `style: add Kaiser system design tokens`

**Conditions that block progression:**

- Contrast fails WCAG AA for text.
- Global styles introduce horizontal overflow.

## Task 5: Global Layout And Semantic Structure

**Goal:** create the semantic page skeleton and route layout.

**Exact files expected to be created or modified:**

- Modify: `C:\Users\ranib\My-Website-Portfolio\src\layouts\BaseLayout.astro`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\pages\index.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\components\layout\SkipLink.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\components\layout\SectionShell.astro`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\styles\global.css`

**Interfaces produced:**

- `SkipLink` targets `#main`.
- `SectionShell` accepts `id`, `label`, `heading`, and optional `variant`.
- Page includes `<header>`, `<main id="main">`, and `<footer>`.

**Dependencies on previous tasks:** Task 4.

**Implementation steps:**

1. Add `SkipLink` as the first focusable element in `BaseLayout`.
2. Wrap page body with a site shell that includes header, main, and footer slots.
3. Create `SectionShell` to standardize section spacing, labels, and headings.
4. Convert homepage sections to the final order from the design specification.
5. Remove decorative symbols from accessible heading text; visual markers must be separate decorative spans with `aria-hidden="true"`.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- Inspect rendered HTML and confirm landmarks are present.
- Confirm all existing factual content still appears.

**Accessibility checks:**

- Keyboard focus reaches skip link first.
- Heading order is logical.

**Mobile checks:**

- 390px viewport has no horizontal clipping.

**Expected result:**

- The site has a semantic, reusable layout ready for navigation and sections.

**Suggested commit message:**

- `feat: add semantic portfolio layout`

**Conditions that block progression:**

- Missing `<main id="main">`.
- Heading order breaks.
- Existing factual content disappears.

## Task 6: Accessible Navigation

**Goal:** build desktop and mobile navigation that works without routing hacks.

**Exact files expected to be created or modified:**

- Create: `C:\Users\ranib\My-Website-Portfolio\src\components\navigation\SiteNav.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\scripts\navigation.ts`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\layouts\BaseLayout.astro`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\styles\global.css`
- Modify: `C:\Users\ranib\My-Website-Portfolio\tests\e2e\homepage.spec.ts`

**Interfaces produced:**

- `SiteNav` renders name link, primary anchors, and mobile toggle.
- `navigation.ts` manages mobile menu open/close, Escape behavior, and active-section state.

**Dependencies on previous tasks:** Task 5.

**Implementation steps:**

1. Add nav links for Profile, Projects, Architecture, Capabilities, Experience, and Contact.
2. Use a `<button>` for the mobile menu with `aria-expanded` and `aria-controls`.
3. Close the menu on Escape and after link activation.
4. Return focus to the menu button when the menu closes.
5. Add active-section state through IntersectionObserver.
6. Keep normal anchor behavior if JavaScript fails.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- Click every nav link.
- Disable JavaScript and confirm anchors still move to sections.

**Accessibility checks:**

- Tab through nav in desktop and mobile states.
- Verify `aria-expanded` changes on the mobile button.
- Verify Escape closes the menu.

**Mobile checks:**

- At 390px, all nav links fit inside the opened menu.
- Touch targets meet 44px by 44px.

**Expected result:**

- Navigation is responsive, semantic, and keyboard safe.

**Suggested commit message:**

- `feat: add accessible responsive navigation`

**Conditions that block progression:**

- Mobile menu traps focus incorrectly.
- Nav clips at 390px.
- Anchor navigation fails without JavaScript.

## Task 7: Static Homepage Sections

**Goal:** render the full homepage content structure without final project data modeling.

**Exact files expected to be created or modified:**

- Create: `C:\Users\ranib\My-Website-Portfolio\src\components\sections\ProfileSection.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\components\sections\SelectedProjectsSection.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\components\sections\ArchitectureSection.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\components\sections\CapabilitiesSection.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\components\sections\ExperienceSection.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\components\sections\PrinciplesSection.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\components\sections\ContactSection.astro`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\pages\index.astro`

**Interfaces produced:**

- Section components consume temporary verified constants from `src\data\profile.ts` until content collections are introduced.

**Dependencies on previous tasks:** Task 6.

**Implementation steps:**

1. Create one component per homepage section.
2. Use verified current facts only.
3. Render Venora as a missing-content requirement rather than a fake project description.
4. Render FAHAD and ResumeBridge from verified current summaries.
5. Include a secondary archive area for Nightbank Finance.
6. Add verified resume, LinkedIn, GitHub profile, and Venora links when supplied; keep empty-state copy only for unavailable links and assets.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- Confirm homepage order matches the design specification.
- Confirm no fake Venora facts appear.

**Accessibility checks:**

- Each section has a programmatic heading.
- Empty states are plain text, not disabled controls.

**Mobile checks:**

- Sections stack in readable order at 390px.

**Expected result:**

- The full homepage IA exists as semantic static content.

**Suggested commit message:**

- `feat: add static homepage sections`

**Conditions that block progression:**

- Any unverified project claim is introduced.
- Section order diverges from the design specification.

## Task 8: Project Content Model

**Goal:** move project facts into a typed content collection.

**Exact files expected to be created or modified:**

- Create: `C:\Users\ranib\My-Website-Portfolio\src\content\config.ts`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\content\projects\venora.md`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\content\projects\fahad.md`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\content\projects\resumebridge.md`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\content\projects\nightbank.md`
- Modify: `C:\Users\ranib\My-Website-Portfolio\tests\unit\content-schema.test.ts`

**Interfaces produced:**

- `projectSchema` validates slug, title, priority, status, summary, technologies, responsibilities, links, media, and readiness fields.
- Project content exposes optional repository and demo URLs.

**Dependencies on previous tasks:** Task 7.

**Implementation steps:**

1. Define a Zod schema in `src/content/config.ts`.
2. Require `title`, `slug`, `priority`, `status`, `summary`, `technologies`, and `caseStudyReady`.
3. Make `repositoryUrl`, `demoUrl`, `screenshots`, `results`, and `lessonsLearned` optional.
4. Add `missingContent` as an array of exact strings explaining facts needed before publication.
5. Create markdown files with only verified facts from the audit.
6. For Venora, set `caseStudyReady: false` and list required missing content.

**Validation commands:**

- `npm run check`
- `npm run test`
- `npm run build`

**Manual checks:**

- Open each markdown file and confirm no invented facts appear.

**Accessibility checks:**

- Confirm screenshot metadata schema requires alt text when screenshots are present.

**Mobile checks:**

- No visual mobile check is required until project components consume the model.

**Expected result:**

- Projects are typed, ordered, and ready for reusable rendering.

**Suggested commit message:**

- `feat: add typed project content model`

**Conditions that block progression:**

- Content schema permits screenshots without alt text.
- Venora is published as complete without supplied facts.

## Task 9: Project Preview Components

**Goal:** render homepage project previews from content collection data.

**Exact files expected to be created or modified:**

- Create: `C:\Users\ranib\My-Website-Portfolio\src\components\projects\ProjectPreview.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\components\projects\ProjectMetaList.astro`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\components\sections\SelectedProjectsSection.astro`
- Modify: `C:\Users\ranib\My-Website-Portfolio\tests\e2e\homepage.spec.ts`

**Interfaces produced:**

- `ProjectPreview` accepts a project content entry and renders title, summary, metadata, case-study link, repository link, demo link, and missing-link state.
- `ProjectMetaList` renders technologies and status metadata.

**Dependencies on previous tasks:** Task 8.

**Implementation steps:**

1. Query project content entries in priority order.
2. Render Venora, FAHAD, and ResumeBridge as selected projects.
3. Render Nightbank Finance in secondary placement.
4. Use unique accessible labels for case-study, repository, and demo actions.
5. Use text-only missing states for absent repository or demo URLs.
6. Keep project card radius at 8px or less.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- Confirm selected project order is Venora, FAHAD, ResumeBridge.
- Confirm missing links are not rendered as dead buttons.

**Accessibility checks:**

- Project links have unique accessible names.
- Keyboard focus order follows card order.

**Mobile checks:**

- At 390px, each project card fits without horizontal clipping and CTAs wrap cleanly.

**Expected result:**

- Project previews are reusable, content-driven, and accessible.

**Suggested commit message:**

- `feat: render project previews from content`

**Conditions that block progression:**

- Selected project order is wrong.
- Repeated "View Project" links remain ambiguous.

## Task 10: Case-Study Routes And Templates

**Goal:** create dedicated project case-study pages.

**Exact files expected to be created or modified:**

- Create: `C:\Users\ranib\My-Website-Portfolio\src\pages\projects\[slug].astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\components\projects\CaseStudyLayout.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\components\projects\CaseStudySection.astro`
- Modify: `C:\Users\ranib\My-Website-Portfolio\tests\e2e\homepage.spec.ts`
- Create: `C:\Users\ranib\My-Website-Portfolio\tests\e2e\case-studies.spec.ts`

**Interfaces produced:**

- Static routes for `/projects/venora/`, `/projects/fahad/`, `/projects/resumebridge/`, and optional `/projects/nightbank/`.
- `CaseStudyLayout` consumes project content and renders all required case-study sections.

**Dependencies on previous tasks:** Task 9.

**Implementation steps:**

1. Use Astro `getStaticPaths()` to generate routes from project content.
2. Render required case-study sections in the order from the design specification.
3. For missing content, render a visible "Required before publication" note.
4. Add breadcrumb navigation and "Back to selected projects".
5. Add previous/next project navigation based on priority order.
6. Add project-specific title and description metadata through `BaseLayout`.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- Open each route directly under `/My-Website-Portfolio/projects/[slug]/`.
- Confirm missing sections are clearly marked instead of filled with invented text.

**Accessibility checks:**

- Breadcrumb is inside `<nav aria-label="Breadcrumb">`.
- Previous/next links have unique names.

**Mobile checks:**

- Case-study pages include a readable outline or section list at 390px.

**Expected result:**

- Dedicated case-study pages exist and handle incomplete content honestly.

**Suggested commit message:**

- `feat: add project case study routes`

**Conditions that block progression:**

- Direct route refresh fails.
- Case-study pages invent missing facts.

## Task 11: Hero Content

**Goal:** build the semantic hero content before adding the celestial planet.

**Exact files expected to be created or modified:**

- Create: `C:\Users\ranib\My-Website-Portfolio\src\components\hero\Hero.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\data\profile.ts`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\pages\index.astro`
- Modify: `C:\Users\ranib\My-Website-Portfolio\tests\e2e\homepage.spec.ts`

**Interfaces produced:**

- `Hero` renders name, role, supporting statement, primary CTA, secondary CTA, and HUD metadata.
- `profile.ts` exports verified owner identity and contact metadata.

**Dependencies on previous tasks:** Task 10.

**Implementation steps:**

1. Set hero role text to `Full-Stack Developer - QA - UI/UX`.
2. Write a concise value statement using verified skills and goals.
3. Add primary CTA to `#projects`.
4. Add secondary CTA to `#contact` or profile section.
5. Add factual HUD metadata only.
6. Keep the planet slot empty until Task 12.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- Confirm the first viewport identifies Jared and the role without animation.

**Accessibility checks:**

- Hero has the page `h1`.
- CTA links have visible focus states.

**Mobile checks:**

- At 390px, headline, role, value statement, and CTAs are visible without horizontal scrolling.

**Expected result:**

- The hero communicates professional identity with semantic HTML.

**Suggested commit message:**

- `feat: add semantic hero content`

**Conditions that block progression:**

- Hero uses "senior" without verified support.
- Hero content clips on mobile.

## Task 12: Celestial Planet Fallback

**Goal:** create the non-WebGL planet fallback.

**Exact files expected to be created or modified:**

- Create: `C:\Users\ranib\My-Website-Portfolio\src\components\hero\CelestialPlanet.astro`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\components\hero\Hero.astro`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\styles\global.css`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\styles\planet.css`

**Interfaces produced:**

- `CelestialPlanet` renders decorative CSS/SVG planet markup with `aria-hidden="true"`.
- Static planet fallback appears without JavaScript.

**Dependencies on previous tasks:** Task 11.

**Implementation steps:**

1. Build the planet with SVG rings, contour lines, and CSS gradients.
2. Mark all decorative planet markup as hidden from assistive technology.
3. Add static electric-green highlights at low opacity.
4. Add responsive sizing tokens for desktop, tablet, and mobile.
5. Add reduced-motion styles that keep the planet static.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- Disable JavaScript and confirm the planet fallback still appears.
- Confirm hero text remains readable over the background.

**Accessibility checks:**

- Screen-reader snapshot does not announce planet layers.

**Mobile checks:**

- At 390px, planet does not overlap CTAs or clip hero text.

**Expected result:**

- A lightweight decorative planet exists before enhanced motion.

**Suggested commit message:**

- `feat: add celestial planet fallback`

**Conditions that block progression:**

- Planet is announced as content by screen readers.
- Hero text contrast fails.

## Task 13: Enhanced Celestial Planet

**Goal:** add restrained interaction and motion to the fallback planet without WebGL.

**Exact files expected to be created or modified:**

- Create: `C:\Users\ranib\My-Website-Portfolio\src\scripts\planet-pointer.ts`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\components\hero\CelestialPlanet.astro`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\styles\planet.css`
- Modify: `C:\Users\ranib\My-Website-Portfolio\tests\e2e\homepage.spec.ts`

**Interfaces produced:**

- `planet-pointer.ts` updates CSS custom properties for pointer tilt and highlight position.
- Enhanced planet pauses when offscreen or reduced motion is active.

**Dependencies on previous tasks:** Task 12.

**Implementation steps:**

1. Add CSS rotation loops for contour lines and orbital rings.
2. Add `planet-pointer.ts` with feature checks for fine pointer devices.
3. Disable pointer tracking on coarse pointers.
4. Use IntersectionObserver to pause planet animation outside the hero.
5. Respect `prefers-reduced-motion` in CSS and TypeScript.
6. Keep all transforms on `transform` and `opacity`.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- Move pointer over hero and confirm subtle response.
- Scroll past hero and confirm animation pauses.

**Accessibility checks:**

- Enable reduced motion and confirm planet is static.

**Mobile checks:**

- On mobile emulation, confirm pointer tracking is inactive and frame rate remains smooth.

**Expected result:**

- The planet feels alive but remains decorative, cheap, and optional.

**Suggested commit message:**

- `feat: enhance celestial planet motion`

**Conditions that block progression:**

- Pointer motion moves text.
- Reduced motion does not stop loops.

## Task 14: GSAP Motion Foundation

**Goal:** add GSAP only for coordinated, purposeful motion.

**Exact files expected to be created or modified:**

- Modify: `C:\Users\ranib\My-Website-Portfolio\package.json`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\scripts\motion.ts`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\styles\motion.css`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\layouts\BaseLayout.astro`

**Interfaces produced:**

- `motion.ts` exports initialization functions for hero entrance, section reveals, and diagram reveals.
- `motion.css` contains reduced-motion defaults and no-JS safe states.

**Dependencies on previous tasks:** Task 13.

**Implementation steps:**

1. Add the `gsap` dependency and document its purpose in `package.json` comments are not valid JSON, so record the purpose in `docs/portfolio-v2/implementation-notes.md`.
2. Register GSAP only in `motion.ts`.
3. Add a `prefers-reduced-motion` guard before any timeline starts.
4. Add data attributes for motion targets instead of coupling scripts to visual class names.
5. Ensure hidden-before-reveal states apply only when JavaScript marks motion as ready.

**Validation commands:**

- `npm install`
- `npm run check`
- `npm run lint`
- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- Disable JavaScript and confirm all sections are visible.

**Accessibility checks:**

- Enable reduced motion and confirm no GSAP timelines run.

**Mobile checks:**

- Confirm motion target setup does not create layout shifts at 390px.

**Expected result:**

- GSAP exists as a scoped orchestration layer, not a requirement for content visibility.

**Suggested commit message:**

- `feat: add GSAP motion foundation`

**Conditions that block progression:**

- Content starts hidden without JavaScript.
- GSAP runs in reduced-motion mode.

## Task 15: Section Reveal Animations

**Goal:** add gentle reveal motion to sections and project previews.

**Exact files expected to be created or modified:**

- Modify: `C:\Users\ranib\My-Website-Portfolio\src\scripts\motion.ts`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\styles\motion.css`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\components\layout\SectionShell.astro`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\components\projects\ProjectPreview.astro`

**Interfaces produced:**

- Elements with `data-motion="section"` and `data-motion="project"` reveal once when entering the viewport.

**Dependencies on previous tasks:** Task 14.

**Implementation steps:**

1. Add data attributes to section shells and project previews.
2. Use IntersectionObserver to start GSAP reveal timelines.
3. Reveal with opacity and vertical transform only.
4. Limit stagger duration for project groups to under 600ms total.
5. Mark revealed elements so animations do not repeat during normal scrolling.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- Scroll through homepage and confirm reveals do not distract from reading.

**Accessibility checks:**

- Reduced motion shows all content immediately.

**Mobile checks:**

- At 390px, reveal transforms do not cause horizontal overflow.

**Expected result:**

- Sections reveal with purpose and remain accessible.

**Suggested commit message:**

- `feat: add section reveal motion`

**Conditions that block progression:**

- Reveals delay essential content.
- Animations repeat aggressively.

## Task 16: Architecture Showcase

**Goal:** show engineering thinking through a real, accessible architecture section.

**Exact files expected to be created or modified:**

- Modify: `C:\Users\ranib\My-Website-Portfolio\src\components\sections\ArchitectureSection.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\components\architecture\ArchitectureDiagram.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\data\architecture-notes.ts`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\scripts\motion.ts`

**Interfaces produced:**

- `ArchitectureDiagram` renders SVG/HTML diagrams with text alternatives.
- `architecture-notes.ts` maps project slugs to verified architecture notes and missing-information requirements.

**Dependencies on previous tasks:** Task 15.

**Implementation steps:**

1. Create a diagram component that supports nodes, relationships, and a text summary.
2. Populate architecture notes only from verified project information.
3. Render missing architecture details as "Required before publication" text.
4. Add optional stroke reveal animation through existing motion infrastructure.
5. Ensure diagram remains readable when animation is disabled.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test`
- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- Confirm diagrams explain actual decisions rather than decorative system lines.

**Accessibility checks:**

- Diagram has a text alternative that communicates the same relationships.

**Mobile checks:**

- Diagram stacks or scrolls within its container without page-level horizontal overflow.

**Expected result:**

- Architecture content demonstrates engineering practice without inventing details.

**Suggested commit message:**

- `feat: add architecture showcase`

**Conditions that block progression:**

- Diagram meaning is only available visually.
- Architecture claims are unverified.

## Task 17: Experience And Capability Sections

**Goal:** present skills, education, experience, and development practices through verified evidence.

**Exact files expected to be created or modified:**

- Modify: `C:\Users\ranib\My-Website-Portfolio\src\components\sections\CapabilitiesSection.astro`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\components\sections\ExperienceSection.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\data\capabilities.ts`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\data\profile.ts`

**Interfaces produced:**

- `capabilities.ts` exports grouped capabilities with evidence links to projects.
- `profile.ts` exports education, availability, and contact facts.

**Dependencies on previous tasks:** Task 16.

**Implementation steps:**

1. Group capabilities into Full-Stack, QA, UI/UX, AI/ML, and Game Development.
2. Link each capability to a verified project or mark it as general skill context.
3. Add education details only if verified.
4. Add experience entries only if supplied and verified.
5. Render missing experience or resume information as content requirements, not placeholders.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test`
- `npm run build`

**Manual checks:**

- Confirm no skill percentages are used.
- Confirm no invented work experience appears.

**Accessibility checks:**

- Capability cards or lists are readable in source order.

**Mobile checks:**

- Capability groups remain scannable in one column at 390px.

**Expected result:**

- Skills and experience support the professional identity with evidence.

**Suggested commit message:**

- `feat: add verified capabilities and experience`

**Conditions that block progression:**

- Capability claims cannot be traced to verified facts or marked as general skill context.
- The section implies professional experience that is not supplied.

## Task 18: Contact Section

**Goal:** create a clear, privacy-conscious contact flow.

**Exact files expected to be created or modified:**

- Modify: `C:\Users\ranib\My-Website-Portfolio\src\components\sections\ContactSection.astro`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\data\profile.ts`
- Modify: `C:\Users\ranib\My-Website-Portfolio\tests\e2e\homepage.spec.ts`

**Interfaces produced:**

- Contact section renders email, optional phone, optional LinkedIn, optional GitHub profile, and resume link when verified.

**Dependencies on previous tasks:** Task 17.

**Implementation steps:**

1. Keep the latest verified resume email, `mailto:jared.baquirin112@gmail.com`, as the primary contact action.
2. Confirm whether phone number should remain public before rendering it.
3. Add LinkedIn and GitHub profile links only after verification.
4. Add resume link only after a real file exists under `public/assets/resume/`.
5. Use missing-content text for absent profile links or resume.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- Click email link and confirm it opens a mail action.
- Confirm no fake social links appear.

**Accessibility checks:**

- Contact links have clear accessible names.
- Focus states are visible.

**Mobile checks:**

- Contact content wraps cleanly at 390px.

**Expected result:**

- Contact flow is direct, accessible, and factual.

**Suggested commit message:**

- `feat: add contact section`

**Conditions that block progression:**

- Public phone display has not been reviewed.
- Missing links appear as active controls.

## Task 19: Responsive Refinement

**Goal:** make every section work across requested viewport widths.

**Exact files expected to be created or modified:**

- Modify: `C:\Users\ranib\My-Website-Portfolio\src\styles\global.css`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\styles\planet.css`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\styles\motion.css`
- Modify: `C:\Users\ranib\My-Website-Portfolio\tests\e2e\homepage.spec.ts`
- Create: `C:\Users\ranib\My-Website-Portfolio\tests\e2e\responsive.spec.ts`

**Interfaces produced:**

- Responsive layout rules for small mobile, large mobile, tablet, laptop, desktop, and wide desktop.
- E2E viewport checks at 390, 768, 1024, and 1440 widths.

**Dependencies on previous tasks:** Task 18.

**Implementation steps:**

1. Add breakpoint rules based on layout behavior, not device names alone.
2. Constrain max content width for reading and hero layouts.
3. Ensure hero leaves a hint of the next section on desktop and mobile.
4. Stack project and architecture layouts on mobile.
5. Add tests that assert `document.documentElement.scrollWidth <= window.innerWidth` at required widths.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- Inspect screenshots at 1440, 1024, 768, and 390 widths.

**Accessibility checks:**

- Confirm zoom to 200% does not hide content.

**Mobile checks:**

- Confirm nav, hero, projects, case-study pages, and contact all fit at 390px.

**Expected result:**

- Layout is responsive and functionally complete on all target widths.

**Suggested commit message:**

- `style: refine responsive layouts`

**Conditions that block progression:**

- Any target viewport has horizontal clipping.
- Mobile omits desktop content.

## Task 20: Reduced-Motion Implementation

**Goal:** make reduced-motion behavior complete and testable.

**Exact files expected to be created or modified:**

- Modify: `C:\Users\ranib\My-Website-Portfolio\src\styles\global.css`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\styles\motion.css`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\styles\planet.css`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\scripts\motion.ts`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\scripts\planet-pointer.ts`
- Create: `C:\Users\ranib\My-Website-Portfolio\tests\e2e\reduced-motion.spec.ts`

**Interfaces produced:**

- Reduced-motion mode disables reveal delays, planet loops, orbital loops, and scroll-linked effects.

**Dependencies on previous tasks:** Task 19.

**Implementation steps:**

1. Add CSS media query for `prefers-reduced-motion: reduce`.
2. Stop CSS animation loops inside reduced motion.
3. Make `motion.ts` return before GSAP timelines initialize when reduced motion is active.
4. Make `planet-pointer.ts` skip pointer setup when reduced motion is active.
5. Add Playwright reduced-motion context checks.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- Enable reduced motion at browser or OS level and reload the site.

**Accessibility checks:**

- Confirm no content waits for animation to become visible.

**Mobile checks:**

- Confirm reduced-motion mobile view is visually stable and complete.

**Expected result:**

- Motion-sensitive users get the full site without nonessential movement.

**Suggested commit message:**

- `feat: support reduced motion`

**Conditions that block progression:**

- Any required content is hidden until animation.
- Planet or reveal loops continue in reduced-motion mode.

## Task 21: Accessibility Testing

**Goal:** add deeper automated and manual accessibility coverage.

**Exact files expected to be created or modified:**

- Modify: `C:\Users\ranib\My-Website-Portfolio\tests\e2e\homepage.spec.ts`
- Modify: `C:\Users\ranib\My-Website-Portfolio\tests\e2e\case-studies.spec.ts`
- Create: `C:\Users\ranib\My-Website-Portfolio\tests\e2e\accessibility.spec.ts`
- Modify: `C:\Users\ranib\My-Website-Portfolio\package.json`
- Create: `C:\Users\ranib\My-Website-Portfolio\docs\portfolio-v2\accessibility-checklist.md`

**Interfaces produced:**

- Automated axe checks for homepage and case-study routes.
- Manual accessibility checklist for keyboard, focus, headings, landmarks, reduced motion, and screen-reader behavior.

**Dependencies on previous tasks:** Task 20.

**Implementation steps:**

1. Add axe scans to homepage and case-study e2e tests.
2. Test keyboard navigation through nav, project cards, case-study links, and contact links.
3. Test heading hierarchy on homepage and project routes.
4. Add checklist steps for screen-reader snapshot review.
5. Document any accepted accessibility risk in `accessibility-checklist.md`.

**Validation commands:**

- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- Complete the checklist in `accessibility-checklist.md`.

**Accessibility checks:**

- Axe returns no serious or critical violations.
- Keyboard-only navigation reaches all interactive elements.

**Mobile checks:**

- Touch targets remain at least 44px by 44px.

**Expected result:**

- Accessibility is validated by automated checks and human review.

**Suggested commit message:**

- `test: add accessibility coverage`

**Conditions that block progression:**

- Serious or critical accessibility violations remain.
- Keyboard navigation gets trapped or loses focus.

## Task 22: Performance Optimization

**Goal:** meet static-site performance budgets.

**Exact files expected to be created or modified:**

- Modify: `C:\Users\ranib\My-Website-Portfolio\astro.config.mjs`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\components\hero\CelestialPlanet.astro`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\styles\global.css`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\styles\planet.css`
- Create: `C:\Users\ranib\My-Website-Portfolio\docs\portfolio-v2\performance-budget.md`

**Interfaces produced:**

- Documented budgets for JavaScript, CSS, images, LCP, CLS, INP, and animation behavior.

**Dependencies on previous tasks:** Task 21.

**Implementation steps:**

1. Audit built assets in `dist`.
2. Record JavaScript and CSS sizes in `performance-budget.md`.
3. Optimize font loading through local files or preconnect plus `font-display: swap`.
4. Add explicit dimensions for all images.
5. Lazy-load below-the-fold media.
6. Reduce planet layers if animation cost exceeds budget.

**Validation commands:**

- `npm run build`
- `npm run preview`
- `npm run test:e2e`

**Manual checks:**

- Run Lighthouse against local preview and record scores in `performance-budget.md`.

**Accessibility checks:**

- Confirm performance changes do not remove focus styles or reduced-motion behavior.

**Mobile checks:**

- Test homepage on mobile emulation and confirm no long animation jank is visible.

**Expected result:**

- The site meets the performance requirements from the design specification.

**Suggested commit message:**

- `perf: optimize portfolio delivery`

**Conditions that block progression:**

- LCP exceeds 2.5s in local production testing without documented external cause.
- CLS exceeds 0.05.
- Initial JavaScript exceeds the documented budget without owner approval.

## Task 23: SEO And Metadata

**Goal:** add route-specific metadata for search and social previews.

**Exact files expected to be created or modified:**

- Modify: `C:\Users\ranib\My-Website-Portfolio\src\layouts\BaseLayout.astro`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\pages\index.astro`
- Modify: `C:\Users\ranib\My-Website-Portfolio\src\pages\projects\[slug].astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\src\components\seo\StructuredData.astro`
- Create: `C:\Users\ranib\My-Website-Portfolio\public\robots.txt`
- Create: `C:\Users\ranib\My-Website-Portfolio\public\sitemap.xml`
- Create: `C:\Users\ranib\My-Website-Portfolio\public\favicon.svg`

**Interfaces produced:**

- `BaseLayout` accepts `title`, `description`, `canonicalPath`, `ogImage`, and structured data.
- Homepage and case-study pages render unique metadata.

**Dependencies on previous tasks:** Task 22.

**Implementation steps:**

1. Add title and meta description props to `BaseLayout`.
2. Add canonical URL generation using GitHub Pages site and base path.
3. Add Open Graph and Twitter card tags.
4. Add Person and WebSite JSON-LD for homepage.
5. Add project-specific structured data only from verified project fields.
6. Add `robots.txt`, `sitemap.xml`, and `favicon.svg`.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- View page source for homepage and each case-study route.
- Confirm canonical URLs match `/My-Website-Portfolio/`.

**Accessibility checks:**

- Favicon and metadata changes have no focus or screen-reader impact.

**Mobile checks:**

- Social metadata has no mobile layout impact.

**Expected result:**

- Every public route has complete metadata and static SEO support.

**Suggested commit message:**

- `feat: add SEO metadata`

**Conditions that block progression:**

- Canonical URLs use the wrong base path.
- Project metadata invents missing facts.

## Task 24: Deployment Configuration

**Goal:** add versioned GitHub Pages deployment.

**Exact files expected to be created or modified:**

- Create: `C:\Users\ranib\My-Website-Portfolio\.github\workflows\deploy.yml`
- Modify: `C:\Users\ranib\My-Website-Portfolio\package.json`
- Modify: `C:\Users\ranib\My-Website-Portfolio\astro.config.mjs`
- Create: `C:\Users\ranib\My-Website-Portfolio\docs\portfolio-v2\deployment-notes.md`

**Interfaces produced:**

- GitHub Actions workflow installs dependencies, runs validation, builds Astro, and publishes `dist` to GitHub Pages.

**Dependencies on previous tasks:** Task 23.

**Implementation steps:**

1. Create `deploy.yml` using GitHub Pages official actions.
2. Run install, check, lint, test, e2e if available in CI environment, and build before deploy.
3. Upload `dist` as the Pages artifact.
4. Document branch/source settings required in `deployment-notes.md`.
5. Keep Vercel notes as optional, not primary.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test`
- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- Review workflow YAML for correct `dist` upload path.
- Confirm base path remains `/My-Website-Portfolio/`.

**Accessibility checks:**

- Deployment config has no direct accessibility impact.

**Mobile checks:**

- After deployment, repeat 390px smoke check on production URL.

**Expected result:**

- Deployment is versioned and guarded by validation.

**Suggested commit message:**

- `ci: add GitHub Pages deployment`

**Conditions that block progression:**

- Build is not required before deployment.
- Workflow deploys the wrong directory.

## Task 25: Cross-Browser And Visual QA

**Goal:** verify the finished implementation across browsers and target viewports.

**Exact files expected to be created or modified:**

- Create: `C:\Users\ranib\My-Website-Portfolio\docs\portfolio-v2\final-visual-qa.md`
- Modify: `C:\Users\ranib\My-Website-Portfolio\tests\e2e\responsive.spec.ts`
- Modify: source files only for defects found during QA, with each defect named in the QA document.

**Interfaces produced:**

- Final QA report with screenshots, browser results, accessibility notes, performance notes, and unresolved risks.

**Dependencies on previous tasks:** Task 24.

**Implementation steps:**

1. Capture screenshots at 1440, 1024, 768, and 390 widths.
2. Test Chromium, Firefox, and WebKit through Playwright.
3. Verify homepage and all priority case-study routes.
4. Verify reduced-motion mode.
5. Verify keyboard navigation and focus order.
6. Record every issue and fix only scoped defects.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test`
- `npm run test:e2e`
- `npm run build`

**Manual checks:**

- Compare final visuals against KAISER SYSTEM direction: 60% cinematic space atmosphere, 25% professional editorial portfolio, 15% tactical game interface.

**Accessibility checks:**

- Repeat keyboard walkthrough and axe checks on homepage and case-study routes.

**Mobile checks:**

- Confirm no horizontal clipping, hidden CTAs, or unreadable project cards at 390px.

**Expected result:**

- Final implementation has documented visual, responsive, accessibility, and browser evidence.

**Suggested commit message:**

- `docs: add final visual QA`

**Conditions that block progression:**

- Any required route is broken.
- Any target viewport has critical clipping.
- Serious accessibility failures remain.

## Task 26: Final Documentation

**Goal:** update repository documentation to reflect the completed implementation.

**Exact files expected to be created or modified:**

- Create or modify: `C:\Users\ranib\My-Website-Portfolio\README.md`
- Modify: `C:\Users\ranib\My-Website-Portfolio\AGENTS.md`
- Modify: `C:\Users\ranib\My-Website-Portfolio\docs\portfolio-v2\implementation-notes.md`
- Modify: `C:\Users\ranib\My-Website-Portfolio\docs\portfolio-v2\deployment-notes.md`
- Modify: `C:\Users\ranib\My-Website-Portfolio\docs\portfolio-v2\final-visual-qa.md`

**Interfaces produced:**

- README documents project purpose, setup, commands, architecture, deployment, and validation.
- AGENTS command table reflects scripts that now exist.

**Dependencies on previous tasks:** Task 25.

**Implementation steps:**

1. Create README with project overview, local setup, commands, architecture summary, and deployment notes.
2. Update AGENTS command table with actual scripts now present in `package.json`.
3. Add final build and test evidence to `implementation-notes.md`.
4. Add production deployment status to `deployment-notes.md`.
5. Confirm `final-visual-qa.md` includes all target viewport evidence.

**Validation commands:**

- `npm run check`
- `npm run lint`
- `npm run test`
- `npm run test:e2e`
- `npm run build`
- `git status --short`
- `git diff --stat`

**Manual checks:**

- Follow README setup commands from a clean checkout or clean local state.
- Confirm AGENTS does not list commands that are absent from `package.json`.

**Accessibility checks:**

- Confirm documentation does not instruct future agents to bypass accessibility gates.

**Mobile checks:**

- Confirm final QA screenshots are linked or listed for 390px and 768px.

**Expected result:**

- The repository has accurate human and agent-facing documentation for maintaining Portfolio V2.

**Suggested commit message:**

- `docs: finalize portfolio v2 documentation`

**Conditions that block progression:**

- README commands do not match `package.json`.
- Final validation commands fail.
- Documentation claims deployment success without evidence.
