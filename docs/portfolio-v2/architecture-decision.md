# Portfolio V2 Architecture Decision

Audit date: July 28, 2026

## Decision

Build Portfolio V2 with Astro, TypeScript, Astro content collections, CSS-first styling, scoped TypeScript modules, and GSAP for selected motion orchestration. Implement the celestial planet first with CSS/SVG plus a small TypeScript pointer module. Do not add React Three Fiber in the initial build.

## Context

The current repository contains a static portfolio with only:

- `C:\Users\ranib\My-Website-Portfolio\index.html`
- `C:\Users\ranib\My-Website-Portfolio\style.css`

There is no `package.json`, no framework, no deployment workflow, no automated tests, no linting, and no typed content model. The live GitHub Pages site returns HTTP 200, but it also serves the same missing `script.js` reference and stray backticks found in local source.

Portfolio V2 needs:

- Static-friendly deployment.
- Dedicated project case-study pages.
- Strong SEO.
- Accessibility and reduced-motion support.
- A professional cinematic visual system.
- A decorative celestial planet that never controls essential content.
- Maintainable project data.
- Automated validation before deployment.

## Considered Options

### Static HTML/CSS/JS

Advantages:

- Lowest complexity.
- Excellent GitHub Pages compatibility.
- Smallest dependency surface.

Disadvantages:

- Manual case-study duplication.
- Weak content modeling.
- Harder to maintain as pages and media grow.
- Testing and quality tooling would need to be introduced separately.

### Vite, React, And TypeScript

Advantages:

- Strong component model.
- Good animation and testing ecosystem.
- Easy Vercel deployment.

Disadvantages:

- More client JavaScript than the content-led portfolio needs.
- SEO and static case-study routes require extra routing care.
- More risk of building an app shell for content that should be static.

### Astro, TypeScript, And Content Collections

Advantages:

- Static HTML by default.
- Strong SEO for homepage and case-study pages.
- Content collections separate project facts from presentation.
- Islands allow optional interactivity without global hydration.
- Good GitHub Pages and Vercel compatibility.
- Supports GSAP, SVG, canvas, or a future React island when justified.

Disadvantages:

- Requires introducing a package setup to a currently dependency-free repository.
- Team must learn Astro conventions.
- GitHub Pages base path must be configured correctly.

## Selected Architecture

Selected: Astro + TypeScript + content collections + CSS-first design system + scoped TypeScript modules.

Expected future core files:

- `C:\Users\ranib\My-Website-Portfolio\package.json`
- `C:\Users\ranib\My-Website-Portfolio\astro.config.mjs`
- `C:\Users\ranib\My-Website-Portfolio\tsconfig.json`
- `C:\Users\ranib\My-Website-Portfolio\src\pages\index.astro`
- `C:\Users\ranib\My-Website-Portfolio\src\pages\projects\[slug].astro`
- `C:\Users\ranib\My-Website-Portfolio\src\content\config.ts`
- `C:\Users\ranib\My-Website-Portfolio\src\content\projects\`
- `C:\Users\ranib\My-Website-Portfolio\src\styles\tokens.css`
- `C:\Users\ranib\My-Website-Portfolio\src\styles\global.css`
- `C:\Users\ranib\My-Website-Portfolio\src\styles\motion.css`

## Deployment Choice

Primary deployment: GitHub Pages with a versioned GitHub Actions workflow.

Reasons:

- The current live site already uses GitHub Pages.
- The portfolio does not need a backend.
- Static output is enough for all required routes.
- Repository-owned deployment workflow improves reliability over unversioned Pages settings.

Vercel remains a valid optional deployment target for previews or a future hosting change. It should not drive the architecture unless preview workflows become the main requirement.

## Animation Strategy

Recommended libraries and responsibilities:

- CSS transitions and keyframes: baseline states, hover/focus, static planet loops, orbital rings, and reduced-motion fallbacks.
- SVG: planet linework, architecture diagrams, and static visual fallbacks.
- Small TypeScript modules: pointer responsiveness, mobile nav state, active-section state, and animation feature detection.
- GSAP: initialization timing, hero entrance, section reveals, and SVG diagram sequencing after static layout is complete.
- React Three Fiber: not recommended initially. Revisit only if a documented planet prototype proves CSS/SVG/canvas cannot meet the visual target within performance budgets.

## Testing Strategy

Recommended future validation stack:

- `astro check` for Astro and TypeScript validation.
- ESLint for JavaScript and TypeScript.
- Stylelint or focused CSS linting for stylesheet quality.
- Vitest for data, utility, and schema tests.
- Playwright for route, keyboard, responsive, and visual smoke tests.
- `@axe-core/playwright` for accessibility checks.
- Lighthouse CI or local Lighthouse for performance and SEO budgets.

## Consequences

- The repository will gain a package manifest and build process.
- Source files will move from two root files to a structured `src` and `public` layout.
- Project facts will be stored as typed content instead of hard-coded card markup.
- The site can keep GitHub Pages as the production host.
- Case studies become real static pages instead of SPA views.
- Animation remains layered and optional.
- The implementation must preserve semantic HTML and avoid overusing client-side components.

## Conditions For Revisiting

Revisit the decision if:

- GitHub Pages cannot support the required static routes after correct Astro base-path configuration.
- The owner requires authenticated dashboards, CMS editing, server-side forms, or database-backed features.
- Vercel preview deployments become a required collaboration workflow.
- CSS/SVG planet prototypes fail visual acceptance and a measured canvas or React Three Fiber prototype stays within performance and accessibility budgets.
- The portfolio expands into an application with persistent state rather than a static professional site.
