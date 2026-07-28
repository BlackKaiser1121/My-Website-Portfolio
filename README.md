# Jared Baquirin Portfolio V2

Portfolio V2 is being migrated from static `index.html` and `style.css` to a static-first Astro foundation. The active foundation toolchain is Astro, TypeScript, Astro content collections, pnpm, and GitHub Pages with the `/My-Website-Portfolio` base path.

The current phase implements the design-system foundation and responsive shell. It does not implement the full homepage, holographic planet, GSAP, Three.js, React Three Fiber, Drei, Lenis, Framer Motion, Anime.js, or decorative animations.

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

The palette uses near-black, graphite, soft-white text, and electric green as a restrained accent for focus, active states, small labels, and thin interface details.

## Deployment

The repository now includes `.github/workflows/deploy.yml` for GitHub Pages. The workflow installs dependencies, installs the Chromium browser for Playwright, runs linting, unit tests, and end-to-end checks, then uploads `dist`.

The workflow deploys only when the Git ref is `main`. Manual `workflow_dispatch` runs from other branches can validate the foundation without publishing it. This branch has not been deployed by Codex.

The local Playwright config uses installed Chrome on Windows when not running in CI. The GitHub Pages workflow installs Playwright Chromium before running E2E tests.

## Migration Status

- Existing `index.html` and `style.css` are preserved as the rollback path.
- Current verified portfolio facts are separated into typed data modules under `src/data/`.
- Current project facts are mirrored in `src/content/projects/` to establish Astro content collections.
- The homepage route has the design-system shell with header, main, footer, skip link, responsive navigation, and preserved contact/project facts.

## Known Limitations

- The design-system foundation is in place, but the final homepage content sections have not started.
- The holographic planet and animation system are intentionally absent.
- Resume file, social links, and project screenshots are still missing from the repository.
- Only the homepage foundation route exists in this phase.
