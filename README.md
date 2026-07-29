# Jared Baquirin Portfolio V2

Portfolio V2 is being migrated from static `index.html` and `style.css` to a static-first Astro foundation. The active foundation toolchain is Astro, TypeScript, Astro content collections, pnpm, and GitHub Pages with the `/My-Website-Portfolio` base path.

The current phase implements the static homepage structure, typed portfolio content, selected project previews, and a CSS-only static celestial placeholder. It does not implement case-study pages, the enhanced holographic planet, GSAP, Three.js, React Three Fiber, Drei, Lenis, Framer Motion, Anime.js, or decorative animations.

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
- `@playwright/test`: browser validation across the GitHub Pages base path.
- `@axe-core/playwright`: automated accessibility smoke testing.
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
- Static planet placeholder: `src/components/hero/StaticPlanet.astro`
- Project preview component: `src/components/projects/ProjectPreview.astro`
- Homepage sections: `src/components/sections/`

The palette uses near-black, graphite, soft-white text, and electric green as a restrained accent for focus, active states, small labels, and thin interface details.

## Deployment

The repository now includes `.github/workflows/deploy.yml` for GitHub Pages. The workflow installs dependencies, installs the Chromium browser for Playwright, runs linting, unit tests, and end-to-end checks, then uploads `dist`.

The workflow deploys only when the Git ref is `main`. Manual `workflow_dispatch` runs from other branches can validate the foundation without publishing it. This branch has not been deployed by Codex.

The local Playwright config uses installed Chrome on Windows when not running in CI. The GitHub Pages workflow installs Playwright Chromium before running E2E tests.

## Migration Status

- Existing `index.html` and `style.css` are preserved as the rollback path.
- Current verified portfolio facts are separated into typed data modules under `src/data/`.
- Shared content interfaces live in `src/types/portfolio.ts`.
- Current project facts are mirrored in `src/content/projects/` to establish Astro content collections for later case-study routes.
- The homepage route now renders the static content hierarchy: hero, profile, selected projects, architecture preview, capabilities, experience, education, development principles, and contact.
- The supplied resume DOCX is available at `public/assets/resume/jared-fahad-baquirin-resume.docx`.

## Content Editing

- Update typed homepage content in `src/data/`.
- Keep unavailable URLs as omitted optional properties, not empty strings.
- Add project images only after files exist under `public/assets/projects/` with accurate alt text and dimensions.
- Update `docs/portfolio-v2/content-inventory.md` when facts move from missing or unverified to verified.
- Run `pnpm test` and `pnpm test:e2e` after content changes.

## Known Limitations

- Dedicated project case-study pages have not started.
- The enhanced holographic planet and animation system are intentionally absent.
- Project screenshots, favicon, and social preview images are still missing from the repository.
- ResumeBridge has no deployment link and is intentionally rendered without a live-demo anchor.
