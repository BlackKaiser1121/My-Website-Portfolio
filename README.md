# Jared Baquirin Portfolio V2

Portfolio V2 is a static-first Astro portfolio for Jared Baquirin. The active toolchain is Astro, TypeScript, Astro content collections, pnpm, and GitHub Pages with the `/My-Website-Portfolio` base path. The legacy root `index.html` and `style.css` remain tracked for rollback.

The site includes typed homepage content, selected project previews, dedicated case studies for Venora, FAHAD, and ResumeBridge, reusable architecture diagrams, a controlled GSAP motion layer, a skippable first-entry initialization sequence, and CSS/SVG celestial visuals. It does not use WebGL, Three.js, React Three Fiber, Drei, Lenis, Framer Motion, Anime.js, smooth-scroll libraries, page transitions, or a 3D planet.

## Commands

| Purpose                            | Command                          |
| ---------------------------------- | -------------------------------- |
| Install dependencies               | `pnpm install --frozen-lockfile` |
| Development server                 | `pnpm dev`                       |
| Type and Astro check               | `pnpm type-check`                |
| Lint                               | `pnpm lint`                      |
| Format check                       | `pnpm format`                    |
| Unit tests                         | `pnpm test`                      |
| End-to-end and accessibility tests | `pnpm test:e2e`                  |
| Cross-browser release smoke        | `pnpm test:cross-browser`        |
| Production build                   | `pnpm build`                     |
| Production preview                 | `pnpm preview --port 4322`       |

After previewing on port `4322`, open `http://localhost:4322/My-Website-Portfolio/`.

## Foundation Stack

- `astro`: static site framework for semantic HTML output.
- `typescript`: strict type checking for portfolio content and app code.
- `@astrojs/check`: Astro-aware type validation.
- `eslint` with TypeScript and Astro support: linting.
- `prettier`: formatting checks.
- `prettier-plugin-astro`: explicit Astro file formatting support.
- `vitest`: unit tests for typed content and architecture guards.
- `@playwright/test`: browser validation across the GitHub Pages base path. The separate cross-browser command requires installed Playwright Firefox and WebKit binaries.
- `@axe-core/playwright`: automated accessibility smoke testing.
- `gsap`: controlled hero, section, project-preview, architecture, planet, and case-study motion.
- `cross-env`: disables Astro telemetry consistently across Windows and CI scripts.
- `pnpm-workspace.yaml`: approves `esbuild` build scripts required by Astro/Vite and denies optional `sharp` scripts for this foundation phase.

## Design System

- Tokens: `src/styles/tokens.css`
- Global styles: `src/styles/global.css`
- Page shell: `src/components/layout/PageShell.astro`
- Section primitive: `src/components/layout/SectionShell.astro`
- Navigation: `src/components/navigation/SiteNav.astro`
- Mobile navigation behavior: `src/scripts/navigation.ts`
- Font strategy: `public/assets/fonts/README.md`
- Static hero: `src/components/hero/HeroSection.astro`
- Static CSS/SVG planet: `src/components/hero/StaticPlanet.astro`
- Project preview component: `src/components/projects/ProjectPreview.astro`
- Motion tokens: `src/styles/tokens.css`
- Motion stylesheet: `src/styles/motion.css`
- Initialization sequence: `src/components/motion/InitializationSequence.astro`
- GSAP registration: `src/animation/gsap.ts`
- Shared motion config: `src/animation/motion-config.ts`
- Initialization controller: `src/animation/initialization.ts`
- Reduced-motion detection: `src/animation/reduced-motion.ts`
- Reveal and planet helpers: `src/animation/reveal.ts`
- Motion bootstrap: `src/scripts/motion.ts`
- Case-study content: `src/data/case-studies.ts`
- Case-study route: `src/pages/projects/[slug].astro`
- Case-study layout: `src/components/projects/CaseStudyLayout.astro`
- Case-study section renderer: `src/components/projects/CaseStudySection.astro`
- Case-study architecture diagram: `src/components/projects/ProjectArchitectureDiagram.astro`
- Case-study image gallery: `src/components/projects/ProjectGallery.astro`
- Homepage sections: `src/components/sections/`

The palette uses near-black, graphite, soft-white text, and electric green as a restrained accent for focus, active states, small labels, and thin interface details.

## Deployment

The repository includes `.github/workflows/deploy.yml` for GitHub Pages. The workflow installs frozen dependencies, installs Chromium for Playwright, runs formatting, linting, type checking, unit tests, and production-preview end-to-end checks, then uploads `dist`.

The workflow deploys only when the Git ref is `main`. Manual `workflow_dispatch` runs from other branches can validate the foundation without publishing it. This branch has not been deployed by Codex.

The local Playwright config uses installed Chrome on Windows when not running in CI. The GitHub Pages workflow installs Playwright Chromium before running E2E tests.

## Accessibility And SEO

Semantic page landmarks, one meaningful `h1` per route, accessible desktop/mobile navigation, keyboard focus styling, text alternatives, reduced-motion support, and static no-JavaScript content are covered by focused Playwright and axe checks. The intro Skip control is keyboard reachable and restores focus to main content.

The build generates four public canonical routes, `sitemap.xml`, a project-path `robots.txt`, and a static noindex 404 page. Each route has unique metadata, JSON-LD, and a static social preview image. Canonicals and public assets use the configured GitHub Pages repository base path. The project-path `robots.txt` does not control the GitHub Pages host-root crawler policy; that hosting limitation is not a pre-release blocker.

The release audit and remaining verification limits are recorded in `docs/portfolio-v2/production-readiness.md`; changes are summarized in `docs/portfolio-v2/release-notes.md`.

## Migration Status

- Existing `index.html` and `style.css` are preserved as the rollback path.
- Current verified portfolio facts are separated into typed data modules under `src/data/`.
- Shared content interfaces live in `src/types/portfolio.ts`.
- Current project facts are mirrored in `src/content/projects/`.
- The homepage route now renders the static content hierarchy: hero, profile, selected projects, architecture preview, capabilities, experience, education, development principles, and contact.
- `/projects/venora/`, `/projects/fahad/`, and `/projects/resumebridge/` render dedicated static case-study pages.
- The supplied resume DOCX is available at `public/assets/resume/jared-fahad-baquirin-resume.docx`.

## Content Editing

- Update typed homepage content in `src/data/`.
- Update case-study content in `src/data/case-studies.ts`.
- Keep unavailable URLs as omitted optional properties, not empty strings.
- Add project images only after files exist under `public/assets/projects/` with accurate alt text and dimensions.
- Update `docs/portfolio-v2/content-inventory.md` and `docs/portfolio-v2/case-study-content-audit.md` when facts move from missing or unverified to verified.
- Run `pnpm test` and `pnpm test:e2e` after content changes.

## Known Limitations

- The enhanced planet remains CSS/SVG only; WebGL and 3D planet work are intentionally absent.
- Page transitions are still deferred.
- Additional measured project results are still missing.
- FAHAD has no web deployment link because it is an Android application, so it is intentionally rendered without a live-demo anchor.
- ResumeBridge has no deployment link and has known system fixes pending before it should be presented as a stable public deployment.
- Venora repository and live-demo actions are available at their supplied URLs.
- LinkedIn blocked automated public verification. The user-supplied URL remains and needs a recorded normal-browser check before production release.
