# Portfolio V2 Design System Foundation

Date: 2026-07-28

## Scope

This phase implements the KAISER SYSTEM design system foundation, typography, reusable page shell, responsive navigation, footer, focus states, and reduced-motion defaults.

This phase does not implement the final homepage sections, celestial planet, section-reveal animations, case-study pages, page transitions, WebGL, canvas, or animation libraries.

## Style Audit

- Preserved: global reset, semantic landmarks, skip link behavior, focus-visible baseline, reduced-motion media query, verified content, GitHub Pages base-path testing.
- Replaced: temporary color variables, one-off shell classes, temporary navigation layout, temporary footer copy.
- Consolidated: all design roles now flow through `src/styles/tokens.css` and `src/styles/global.css`.
- Removed from the active Astro shell: duplicate temporary nav/footer structure inside `src/pages/index.astro`.
- Deferred: celestial planet, scroll-reveal motion, active-section scroll tracking, final homepage content sections, project case-study pages, resume/social assets.

## Token Location

Semantic tokens live in:

- `src/styles/tokens.css`

Global reset, typography classes, layout behavior, shell styling, navigation states, footer styles, focus states, atmospheric CSS, and reduced-motion overrides live in:

- `src/styles/global.css`

## Color System

| Token | Value | Purpose |
| --- | --- | --- |
| `--color-background` | `#050706` | Primary near-black page background |
| `--color-background-elevated` | `#0b0e0d` | Subtle elevated background |
| `--color-surface` | `#101413` | Graphite section and navigation surfaces |
| `--color-panel` | `#171c1a` | Repeated compact panels |
| `--color-interactive` | `#1c241f` | Hoverable and button surfaces |
| `--color-text-primary` | `#f2f5ef` | Main readable text |
| `--color-text-secondary` | `#c3cbc2` | Supporting paragraphs |
| `--color-text-muted` | `#9fa99f` | Metadata and lower-emphasis labels |
| `--color-accent` | `#74f28f` | Electric-green accent, focus, status, small labels |
| `--color-status-warning` | `#f0b35a` | Missing-content and caution states |
| `--color-status-error` | `#ff7a7a` | Error states |
| `--color-status-info` | `#7bded8` | Rare informational status |

Electric green is limited to focus, active accents, small labels, and thin interface details. It is not used for long body copy, large surfaces, or every heading.

## Typography

No custom font files are bundled yet. Font strategy is documented in `public/assets/fonts/README.md`.

- Primary sans: `Aptos`, `Helvetica Neue`, `Noto Sans`, `sans-serif`.
- Monospace: `Cascadia Mono`, `SFMono-Regular`, `Liberation Mono`, `monospace`.
- Typography tokens cover display heading, page heading, section heading, subsection heading, body large, body, supporting text, caption, metadata, nav, and button labels.
- Font sizes are rem-based and adjusted with breakpoint token overrides rather than viewport-width scaling.

## Layout Primitives

- `src/components/layout/PageShell.astro`: skip link, atmospheric layer, header, primary navigation, main landmark, and footer.
- `src/components/layout/SectionShell.astro`: semantic section wrapper with `id`, label, heading, variant, focus target, and consistent spacing.
- `src/components/layout/SkipLink.astro`: first focusable control targeting `#main`.
- `src/components/layout/SiteFooter.astro`: verified name, current positioning, email link, and back-to-top link.

The design also provides CSS primitives for content grids, project lists, architecture summaries, compact content cards, and responsive container spacing.

## Navigation

- `src/components/navigation/SiteNav.astro` renders the brand link, desktop links, and mobile menu button.
- `src/scripts/navigation.ts` progressively enhances the mobile disclosure menu.
- Desktop navigation is semantic, keyboard reachable, and includes Profile, Projects, Architecture, Capabilities, Experience, and Contact anchors.
- Mobile navigation uses a button with `aria-expanded`, `aria-controls`, and changing accessible labels.
- Escape closes the menu and restores focus to the trigger.
- Selecting an anchor closes the menu and focuses the target section.
- Without JavaScript, mobile links remain visible and usable.

Active-section scroll tracking is deferred until the static section structure is final.

## Accessibility And Motion

- `:focus-visible` uses a high-contrast electric-green outline, not glow alone.
- Touch targets are at least 44px in navigation and footer controls.
- E2E tests run an axe accessibility smoke check.
- Unit tests verify color contrast for primary, secondary, and accent text on dark surfaces.
- `prefers-reduced-motion: reduce` disables transition and animation durations and sets semantic duration tokens to `0ms`.
- The atmospheric background is static CSS only: faint grid, subtle radial wash, and a dark mask. It never contains animated stars, particles, canvas, or WebGL.

## Responsive Approach

Breakpoints are content-driven:

- Mobile starts with a simple disclosure navigation and single-column content.
- Tablet and desktop switch to inline navigation and multi-column grids when there is enough width.
- Validation covers 320px, 390px, 768px, 1024px, 1440px, and 1680px widths with no horizontal overflow.

## Later Phase Status

- Later phases added the static homepage sections, case-study pages, verified project media, social/profile links, and controlled GSAP motion system.
- The foundation decisions still apply: shared tokens, semantic landmarks, visible focus states, and reduced-motion behavior remain required.
- WebGL, canvas, page transitions, and a 3D planet remain deferred.
