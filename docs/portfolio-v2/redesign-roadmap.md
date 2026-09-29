# Portfolio V2 Redesign Roadmap

Audit date: July 28, 2026

This roadmap is intentionally phased so each step can be reviewed, tested, and committed independently. It does not implement the redesign.

## Phase 1: Repository Cleanup And Project Foundation

- Goal: establish the chosen static-site foundation without changing content meaning.
- Expected deliverable: Astro/TypeScript project skeleton with current content preserved in data/content files.
- Likely files involved: `C:\Users\ranib\My-Website-Portfolio\package.json`, `C:\Users\ranib\My-Website-Portfolio\astro.config.mjs`, `C:\Users\ranib\My-Website-Portfolio\tsconfig.json`, `C:\Users\ranib\My-Website-Portfolio\src\pages\index.astro`, `C:\Users\ranib\My-Website-Portfolio\src\data\profile.ts`.
- Dependencies: approved architecture choice and package installation.
- Validation steps: install dependencies, run `npm run check`, run `npm run build`, verify current text appears on the page.
- Risks: accidental content rewrite, GitHub Pages base path mistakes, over-scaffolding.
- Suggested commit boundary: `chore: initialize portfolio v2 foundation`.

## Phase 2: Design Tokens And Typography

- Goal: define the KAISER SYSTEM visual language as reusable tokens.
- Expected deliverable: color, spacing, typography, shadow, border, and motion tokens.
- Likely files involved: `C:\Users\ranib\My-Website-Portfolio\src\styles\tokens.css`, `C:\Users\ranib\My-Website-Portfolio\src\styles\global.css`, `C:\Users\ranib\My-Website-Portfolio\src\layouts\BaseLayout.astro`.
- Dependencies: Phase 1.
- Validation steps: check contrast ratios, inspect desktop/mobile type scale, verify no viewport-width font scaling.
- Risks: drifting into a gaming fan page, overusing electric green, keeping Orbitron for too much body UI.
- Suggested commit boundary: `style: add portfolio v2 design tokens`.

## Phase 3: Static Page Structure

- Goal: build the semantic one-page structure without advanced animation.
- Expected deliverable: accessible page sections in the proposed information architecture.
- Likely files involved: `C:\Users\ranib\My-Website-Portfolio\src\pages\index.astro`, `C:\Users\ranib\My-Website-Portfolio\src\components\sections\ProfileSection.astro`, `C:\Users\ranib\My-Website-Portfolio\src\components\sections\CapabilitiesSection.astro`, `C:\Users\ranib\My-Website-Portfolio\src\components\sections\ContactSection.astro`.
- Dependencies: Phase 2.
- Validation steps: inspect heading order, keyboard tab order, landmark structure, and 390px layout.
- Risks: adding decorative wrappers that weaken semantics.
- Suggested commit boundary: `feat: build semantic portfolio page structure`.

## Phase 4: Navigation And Responsive Layout

- Goal: create reliable desktop, tablet, and mobile navigation.
- Expected deliverable: fixed or sticky nav with skip link, active states, mobile menu, and no clipping.
- Likely files involved: `C:\Users\ranib\My-Website-Portfolio\src\components\navigation\SiteNav.astro`, `C:\Users\ranib\My-Website-Portfolio\src\styles\global.css`, `C:\Users\ranib\My-Website-Portfolio\tests\e2e\portfolio.spec.ts`.
- Dependencies: Phase 3.
- Validation steps: Playwright screenshots at 1440, 1024, 768, and 390; keyboard navigation; focus visibility.
- Risks: scroll locking bugs, hidden nav content, touch targets too small.
- Suggested commit boundary: `feat: add responsive site navigation`.

## Phase 5: Hero And Celestial Planet

- Goal: introduce the cinematic celestial hero without making content depend on WebGL.
- Expected deliverable: semantic hero with static fallback and optional planet enhancement.
- Likely files involved: `C:\Users\ranib\My-Website-Portfolio\src\components\hero\Hero.astro`, `C:\Users\ranib\My-Website-Portfolio\src\components\hero\CelestialPlanet.astro`, `C:\Users\ranib\My-Website-Portfolio\src\scripts\planet-pointer.ts`, `C:\Users\ranib\My-Website-Portfolio\src\styles\planet.css`, `C:\Users\ranib\My-Website-Portfolio\src\styles\motion.css`, `C:\Users\ranib\My-Website-Portfolio\public\assets\hero\`.
- Dependencies: Phase 4.
- Validation steps: verify hero content appears with JavaScript disabled, reduced motion enabled, and WebGL unavailable; screenshot desktop/mobile.
- Risks: overbuilding the planet, excessive GPU usage, clipped hero text.
- Suggested commit boundary: `feat: add celestial hero centerpiece`.

## Phase 6: Project Archive

- Goal: model and render projects from structured content.
- Expected deliverable: selected-project and archive views driven by typed project data.
- Likely files involved: `C:\Users\ranib\My-Website-Portfolio\src\content\config.ts`, `C:\Users\ranib\My-Website-Portfolio\src\content\projects\venora.md`, `C:\Users\ranib\My-Website-Portfolio\src\content\projects\fahad.md`, `C:\Users\ranib\My-Website-Portfolio\src\content\projects\resumebridge.md`, `C:\Users\ranib\My-Website-Portfolio\src\content\projects\nightbank.md`, `C:\Users\ranib\My-Website-Portfolio\src\components\projects\ProjectCard.astro`.
- Dependencies: Phase 3 and verified project details.
- Validation steps: schema validation, render all project cards, verify no placeholder projects or fake stats.
- Risks: adding unsupported claims, omitting Venora, treating every project as equal priority.
- Suggested commit boundary: `feat: add structured project archive`.

## Phase 7: Case-Study Pages

- Goal: create dedicated case-study routes for Venora, FAHAD, and ResumeBridge.
- Expected deliverable: static case-study pages with architecture, QA, trade-offs, and links.
- Likely files involved: `C:\Users\ranib\My-Website-Portfolio\src\pages\projects\[slug].astro`, `C:\Users\ranib\My-Website-Portfolio\src\components\projects\ProjectFeature.astro`, `C:\Users\ranib\My-Website-Portfolio\src\content\projects\venora.md`, `C:\Users\ranib\My-Website-Portfolio\src\content\projects\fahad.md`, `C:\Users\ranib\My-Website-Portfolio\src\content\projects\resumebridge.md`.
- Dependencies: Phase 6 and real case-study source material.
- Validation steps: open each route directly on GitHub Pages-style base path, check SEO title/description, verify all links.
- Risks: thin case studies, unverified results, broken deep links.
- Suggested commit boundary: `feat: add project case study routes`.

## Phase 8: Capability And Architecture Sections

- Goal: show engineering strengths through evidence rather than generic skill lists.
- Expected deliverable: capability matrix and architecture showcase linked to real project decisions.
- Likely files involved: `C:\Users\ranib\My-Website-Portfolio\src\components\sections\CapabilitiesSection.astro`, `C:\Users\ranib\My-Website-Portfolio\src\components\sections\ArchitectureShowcase.astro`, `C:\Users\ranib\My-Website-Portfolio\src\data\capabilities.ts`.
- Dependencies: Phase 6 and project architecture notes.
- Validation steps: confirm every capability maps to a real project or verified experience.
- Risks: unsupported claims, decorative diagrams that do not explain decisions.
- Suggested commit boundary: `feat: add engineering capability sections`.

## Phase 9: Experience And Contact

- Goal: improve recruiter flow with verified experience, education, resume, and contact links.
- Expected deliverable: experience/education section, resume link, GitHub profile, LinkedIn, email, and contact CTA.
- Likely files involved: `C:\Users\ranib\My-Website-Portfolio\src\components\sections\ExperienceSection.astro`, `C:\Users\ranib\My-Website-Portfolio\src\components\sections\ContactSection.astro`, `C:\Users\ranib\My-Website-Portfolio\src\data\profile.ts`, `C:\Users\ranib\My-Website-Portfolio\public\assets\resume\`.
- Dependencies: supplied resume, LinkedIn URL, and GitHub profile URL are now available; phone visibility still needs a privacy decision before launch.
- Validation steps: check links, download resume, inspect mobile contact layout, verify no fake experience.
- Risks: exposing personal phone unintentionally, stale resume, unsupported experience claims.
- Suggested commit boundary: `feat: add experience and contact flow`.

## Phase 10: Motion And Page Transitions

- Goal: layer purposeful motion after static content is stable.
- Expected deliverable: initialization, reveals, nav states, hover states, and route transitions with reduced-motion support.
- Likely files involved: `C:\Users\ranib\My-Website-Portfolio\src\styles\motion.css`, `C:\Users\ranib\My-Website-Portfolio\src\scripts\motion.ts`, `C:\Users\ranib\My-Website-Portfolio\src\layouts\BaseLayout.astro`.
- Dependencies: Phases 3 through 9.
- Validation steps: test with `prefers-reduced-motion`, keyboard navigation, mobile touch, and JavaScript disabled.
- Risks: scroll hijacking, animation blocking content, performance regressions.
- Suggested commit boundary: `feat: add accessible motion system`.

## Phase 11: Accessibility And Reduced Motion

- Goal: harden the experience for keyboard, screen-reader, contrast, and motion-sensitive users.
- Expected deliverable: accessibility pass with automated and manual checks.
- Likely files involved: `C:\Users\ranib\My-Website-Portfolio\src\styles\global.css`, `C:\Users\ranib\My-Website-Portfolio\src\styles\motion.css`, `C:\Users\ranib\My-Website-Portfolio\tests\e2e\portfolio.spec.ts`.
- Dependencies: Phase 10.
- Validation steps: axe checks, keyboard walkthrough, screen-reader snapshot review, reduced-motion screenshot comparison.
- Risks: pseudo-element text duplication, hidden focus, canvas-only meaning.
- Suggested commit boundary: `test: add accessibility coverage`.

## Phase 12: Performance Optimization

- Goal: keep the cinematic design fast on mobile.
- Expected deliverable: optimized fonts, images, lazy-loaded media, animation budgets, and WebGL guardrails.
- Likely files involved: `C:\Users\ranib\My-Website-Portfolio\astro.config.mjs`, `C:\Users\ranib\My-Website-Portfolio\src\components\hero\CelestialPlanet.astro`, `C:\Users\ranib\My-Website-Portfolio\src\styles\planet.css`, `C:\Users\ranib\My-Website-Portfolio\public\assets\projects\`, `C:\Users\ranib\My-Website-Portfolio\src\styles\global.css`.
- Dependencies: media assets and Phase 10.
- Validation steps: production build size review, Lighthouse performance run, mobile CPU/GPU smoke test.
- Risks: heavy screenshots, font layout shifts, too many particles, high DPR canvas cost.
- Suggested commit boundary: `perf: optimize portfolio media and motion`.

## Phase 13: Automated Testing

- Goal: make regressions visible before deployment.
- Expected deliverable: package scripts and CI checks for build, type check, lint, e2e, accessibility, and smoke screenshots.
- Likely files involved: `C:\Users\ranib\My-Website-Portfolio\package.json`, `C:\Users\ranib\My-Website-Portfolio\tests\e2e\portfolio.spec.ts`, `C:\Users\ranib\My-Website-Portfolio\playwright.config.ts`, `C:\Users\ranib\My-Website-Portfolio\.github\workflows\ci.yml`.
- Dependencies: stable pages and components.
- Validation steps: run every package script locally and in CI.
- Risks: flaky animation screenshots, tests that only check happy paths.
- Suggested commit boundary: `test: add automated portfolio checks`.

## Phase 14: SEO And Deployment

- Goal: ship static pages with complete metadata and reliable GitHub Pages deployment.
- Expected deliverable: titles, descriptions, canonical URLs, OG images, sitemap, robots, favicon, and deploy workflow.
- Likely files involved: `C:\Users\ranib\My-Website-Portfolio\src\layouts\BaseLayout.astro`, `C:\Users\ranib\My-Website-Portfolio\src\pages\index.astro`, `C:\Users\ranib\My-Website-Portfolio\src\pages\projects\[slug].astro`, `C:\Users\ranib\My-Website-Portfolio\public\robots.txt`, `C:\Users\ranib\My-Website-Portfolio\public\favicon.svg`, `C:\Users\ranib\My-Website-Portfolio\.github\workflows\deploy.yml`.
- Dependencies: final route list and deployment target.
- Validation steps: build, preview, check source metadata, test direct route URLs, verify GitHub Pages deployment.
- Risks: incorrect base path, stale social preview images, missing canonical URLs.
- Suggested commit boundary: `chore: add SEO metadata and deployment workflow`.

## Phase 15: Final Visual QA

- Goal: verify the finished site against the creative direction and usability constraints.
- Expected deliverable: final QA report with screenshots, accessibility notes, performance notes, and launch checklist.
- Likely files involved: `C:\Users\ranib\My-Website-Portfolio\docs\portfolio-v2\final-visual-qa.md`, plus any small fixes in source files found during QA.
- Dependencies: Phases 1 through 14.
- Validation steps: inspect 1440, 1024, 768, and 390 screenshots; run build, tests, accessibility checks, Lighthouse, and link checks.
- Risks: last-minute visual tweaks causing regressions, desktop animation harming mobile usability.
- Suggested commit boundary: `docs: add final visual qa report`.
