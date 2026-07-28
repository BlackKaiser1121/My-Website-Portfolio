# Portfolio V2 Proposed Architecture

Audit date: July 28, 2026

The current repository is a two-file static site. The redesign should keep the simplicity and reliability of static output while introducing a scalable content model, semantic case-study pages, controlled animation, and automated quality checks.

## Architecture Options

### Option 1: Improve The Existing Static HTML/CSS/JS Site

- Development complexity: lowest. Work stays close to `C:\Users\ranib\My-Website-Portfolio\index.html` and `C:\Users\ranib\My-Website-Portfolio\style.css`.
- Animation support: good for CSS and small vanilla JavaScript interactions, weaker for complex orchestration.
- SEO: good if separate static HTML pages are hand-authored, but tedious to maintain.
- GitHub Pages compatibility: excellent.
- Vercel compatibility: excellent.
- Performance: excellent if kept disciplined.
- Maintainability: weak once case studies, project data, responsive states, and animation states grow.
- Accessibility: possible, but manual repetition increases risk.
- Case-study routing: possible through hand-created `projects/venora/index.html` style pages.
- Testing: mostly external tools unless a package setup is introduced.
- Deployment workflow: simplest branch-based GitHub Pages deployment, but no automated build guard.

Best when the portfolio remains one page with minimal animation. Not ideal for the requested cinematic interface and dedicated case studies.

### Option 2: Rebuild With Vite, React, And TypeScript

- Development complexity: moderate. Requires introducing `package.json`, Vite config, TypeScript, components, and routing.
- Animation support: strong. React works well with GSAP and optional React Three Fiber.
- SEO: acceptable for a single page, but weaker for case-study routes unless static generation or prerendering is added.
- GitHub Pages compatibility: good with correct Vite `base: "/My-Website-Portfolio/"` and GitHub Actions.
- Vercel compatibility: excellent.
- Performance: good if React hydration is scoped, but easy to ship unnecessary JavaScript.
- Maintainability: good component model and typed project data.
- Accessibility: good if components are designed semantically.
- Case-study routing: good with React Router, but static deep links need careful GitHub Pages fallback handling.
- Testing: good with Vitest, Testing Library, Playwright, axe checks, and TypeScript.
- Deployment workflow: straightforward Vite build to `dist`.

Best when the site is treated as an interactive frontend app. The risk is over-hydrating content that should remain static.

### Option 3: Rebuild With Astro, TypeScript, Content Collections, And Optional Islands

- Development complexity: moderate. It introduces a framework, but the mental model stays close to static HTML.
- Animation support: strong. CSS, SVG, small TypeScript modules, and GSAP can handle most motion; a React or React Three Fiber island should be added only if a later visual prototype proves CSS/SVG/canvas cannot meet the planet requirements.
- SEO: strongest option here because pages are static HTML by default.
- GitHub Pages compatibility: excellent with static output and correct base path.
- Vercel compatibility: excellent.
- Performance: strongest option here because JavaScript is opt-in per island.
- Maintainability: strong content collections for projects, case studies, experience, and skills.
- Accessibility: strong because semantic HTML is the default and interactive islands can stay isolated.
- Case-study routing: excellent through `src/pages/projects/[slug].astro` and typed project content.
- Testing: good with `astro check`, TypeScript, Playwright, axe checks, and Lighthouse CI.
- Deployment workflow: GitHub Actions can build `dist` and publish to Pages. Vercel can be used later without changing the content model.

Best match for this portfolio because the requested experience is content-led, static-friendly, SEO-sensitive, and animation-enhanced rather than app-like.

## Recommended Architecture

Recommended: Astro + TypeScript + content collections + CSS-first design system + progressive animation modules.

Why this fits this repository:

- The current site is static, so Astro preserves the deployment simplicity instead of jumping straight to a heavier app architecture.
- The redesign needs dedicated project case studies. Astro gives real static routes for Venora, FAHAD, and ResumeBridge without SPA routing workarounds.
- The brief says the actual content must remain normal semantic HTML and the site must not depend on WebGL. Astro supports that constraint directly because pages render static HTML by default.
- The celestial planet can start as CSS/SVG plus a small TypeScript pointer module. If JavaScript fails, the hero still renders; if WebGL is later added, it remains an enhancement rather than a dependency.
- GitHub Pages can remain the primary deployment target, while Vercel remains an easy future option.
- YAGNI: no backend, auth, database, CMS, or server runtime is needed for this portfolio right now.

Next.js is not recommended for the first v2 build unless Vercel preview workflows become the priority. Static export can work, but it adds more framework surface than this portfolio currently needs.

## Architecture Validation Against Current Repository

- Existing codebase: suitable. The repository is currently static HTML/CSS, so moving to Astro is an incremental shift toward static pages, typed content, and components rather than a jump to a backend application.
- Static or dynamic deployment: suitable. No dynamic runtime is required; all pages should build to static files.
- GitHub Pages: suitable with `site: "https://blackkaiser1121.github.io"` and `base: "/My-Website-Portfolio/"`.
- Vercel: suitable as an optional host or preview platform because Astro static output can deploy there without introducing server features.
- Dedicated case studies: suitable through `src/pages/projects/[slug].astro` and content collections.
- SEO: suitable because homepage and case-study routes render actual HTML, metadata, canonical URLs, and social tags at build time.
- Accessibility: suitable because semantic HTML is the default output and interactive effects can be isolated.
- Automated testing: suitable with `astro check`, TypeScript, ESLint, Vitest, Playwright, axe checks, and Lighthouse.
- GSAP animation: suitable as a scoped dependency for timeline and scroll reveal orchestration after static layout is complete.
- Optional React Three Fiber usage: suitable but not recommended as the first planet implementation. Add it only if CSS/SVG/canvas cannot achieve the approved visual quality within the performance budget.
- Mobile performance: suitable because Astro avoids global hydration and keeps heavy visual work opt-in.
- Long-term maintainability: suitable because content collections separate project facts from presentation and prevent a return to one oversized page file.

## Proposed Folder Structure

Recommended future structure:

```text
C:\Users\ranib\My-Website-Portfolio\package.json
C:\Users\ranib\My-Website-Portfolio\astro.config.mjs
C:\Users\ranib\My-Website-Portfolio\tsconfig.json
C:\Users\ranib\My-Website-Portfolio\src\layouts\BaseLayout.astro
C:\Users\ranib\My-Website-Portfolio\src\pages\index.astro
C:\Users\ranib\My-Website-Portfolio\src\pages\projects\[slug].astro
C:\Users\ranib\My-Website-Portfolio\src\content\config.ts
C:\Users\ranib\My-Website-Portfolio\src\content\projects\venora.md
C:\Users\ranib\My-Website-Portfolio\src\content\projects\fahad.md
C:\Users\ranib\My-Website-Portfolio\src\content\projects\resumebridge.md
C:\Users\ranib\My-Website-Portfolio\src\content\projects\nightbank.md
C:\Users\ranib\My-Website-Portfolio\src\data\profile.ts
C:\Users\ranib\My-Website-Portfolio\src\components\navigation\SiteNav.astro
C:\Users\ranib\My-Website-Portfolio\src\components\hero\Hero.astro
C:\Users\ranib\My-Website-Portfolio\src\components\hero\CelestialPlanet.astro
C:\Users\ranib\My-Website-Portfolio\src\scripts\planet-pointer.ts
C:\Users\ranib\My-Website-Portfolio\src\components\projects\ProjectFeature.astro
C:\Users\ranib\My-Website-Portfolio\src\components\projects\ProjectCard.astro
C:\Users\ranib\My-Website-Portfolio\src\components\sections\ProfileSection.astro
C:\Users\ranib\My-Website-Portfolio\src\components\sections\CapabilitiesSection.astro
C:\Users\ranib\My-Website-Portfolio\src\components\sections\ExperienceSection.astro
C:\Users\ranib\My-Website-Portfolio\src\components\sections\ContactSection.astro
C:\Users\ranib\My-Website-Portfolio\src\styles\tokens.css
C:\Users\ranib\My-Website-Portfolio\src\styles\global.css
C:\Users\ranib\My-Website-Portfolio\src\styles\motion.css
C:\Users\ranib\My-Website-Portfolio\src\scripts\motion.ts
C:\Users\ranib\My-Website-Portfolio\public\assets\projects\
C:\Users\ranib\My-Website-Portfolio\public\assets\resume\
C:\Users\ranib\My-Website-Portfolio\public\favicon.svg
C:\Users\ranib\My-Website-Portfolio\tests\e2e\portfolio.spec.ts
C:\Users\ranib\My-Website-Portfolio\.github\workflows\deploy.yml
```

## Information Architecture

Proposed single-page structure plus case-study routes:

1. Initialization sequence
2. Hero
3. Professional profile
4. Selected projects
5. Architecture showcase
6. Engineering capabilities
7. Experience
8. Development principles
9. Contact
10. Footer

Dedicated case-study routes:

- `/projects/venora/`
- `/projects/fahad/`
- `/projects/resumebridge/`

Project priority:

1. Venora
2. FAHAD
3. ResumeBridge
4. Nightbank Finance as a secondary/archive project unless Jared wants it featured

Each major case-study page should include:

- Project overview
- Problem
- Target users
- My responsibilities
- Technology stack
- Architecture
- Core features
- Authentication and security decisions
- UI/UX decisions
- QA and testing
- Technical challenges
- Trade-offs
- Results
- Lessons learned
- GitHub repository
- Live demo when available

## Deployment Recommendation

Primary recommendation: GitHub Pages with a versioned GitHub Actions workflow.

Expected future deployment files:

- `C:\Users\ranib\My-Website-Portfolio\.github\workflows\deploy.yml`
- `C:\Users\ranib\My-Website-Portfolio\astro.config.mjs`
- `C:\Users\ranib\My-Website-Portfolio\package.json`

Deployment requirements:

- Use static output only.
- Configure site URL as `https://blackkaiser1121.github.io`.
- Configure base path as `/My-Website-Portfolio/` for GitHub Pages.
- Build to `dist`.
- Deploy only after type check, lint, tests, accessibility smoke tests, and production build pass.
- Keep Vercel as optional later for preview URLs, not as a backend requirement.

## Animation Technology Recommendations

| Animation | Technology | Purpose | Mobile behavior | Reduced-motion alternative | Performance limit | Fallback |
| --- | --- | --- | --- | --- | --- | --- |
| Initialization sequence | CSS plus small JS state | Establish system tone quickly | Shorter or skipped | Show content immediately | Under 1200ms, skippable | Render hero content immediately |
| Celestial holographic planet | CSS/SVG plus small TypeScript pointer module first; optional canvas or React Three Fiber only after prototype review | Primary visual centerpiece | Lower detail, fewer layers, pause offscreen | Static planet image or CSS orb | No dependency on WebGL, cap active particle count, no layout work per frame | Static image/SVG/gradient-free CSS object |
| Orbital rings | CSS transforms or canvas | Suggest celestial system | Fewer rings | Static rings | Transform-only | Static ring outlines |
| Background stars | CSS radial layers or lightweight canvas | Atmosphere | Reduced density | Static star field | No per-star DOM explosion | Static CSS background |
| Grid movement | CSS background-position | Subtle system interface | Slower or static | Static grid | Low opacity, no layout animation | Static background |
| Hero text entrance | CSS transition or GSAP | Focus attention on identity | Shorter stagger | No entrance motion | Transform/opacity only | Text visible by default |
| Project reveals | IntersectionObserver plus CSS or GSAP | Guide scanning | Minimal fade | No reveal delay | Do not block content | Cards visible by default |
| Scroll transitions | GSAP ScrollTrigger only after static UX review approves a specific transition | Section continuity | Fewer transforms | Disabled | No scroll hijacking | Native scrolling |
| Architecture diagrams | CSS/SVG stroke animation | Explain systems | Static diagram first | Static diagram | Animate stroke/opacity only | Static SVG/HTML diagram |
| Navigation states | CSS | Orientation and focus | Same behavior | Same behavior | No heavy JS | Standard links |
| Hover interactions | CSS | Affordance | Tap-safe active states | Same behavior | Transform/box-shadow only | Plain links/buttons |
| Page transitions | Astro view transitions or CSS | Smooth route changes | Disabled if costly | Disabled | No content delay | Normal page load |

Animations that should not be implemented:

- Scroll hijacking.
- Unskippable loading screens.
- Autoplay audio.
- Constant full-screen glitch effects on body text.
- WebGL-only navigation or content.
- Skill-percentage progress bars.
- Particle effects with many DOM nodes.

## Testing Recommendations

Future commands should be defined in `C:\Users\ranib\My-Website-Portfolio\package.json`:

- `npm run check`: Astro and TypeScript checks.
- `npm run lint`: ESLint and style checks.
- `npm run test`: unit tests for data formatting and small utilities.
- `npm run test:e2e`: Playwright checks for navigation, case-study routes, and responsive behavior.
- `npm run build`: production static build.
- `npm run preview`: local production preview.

Recommended test coverage:

- Project data schema validation.
- All featured projects render with title, summary, links, tech stack, and case-study route.
- Keyboard navigation reaches all interactive controls.
- Reduced-motion mode disables nonessential motion.
- 1440, 1024, 768, and 390 viewport screenshots are non-clipped.
- Lighthouse CI or equivalent budget for performance, accessibility, best practices, and SEO.

## Accessibility Requirements

- Use semantic HTML as the primary content layer.
- Add a skip link before navigation.
- Use a `<main>` landmark and a real `<footer>`.
- Keep heading order logical and avoid decorative symbols inside accessible heading text.
- Give project links unique accessible names.
- Use visible `:focus-visible` states.
- Respect `prefers-reduced-motion`.
- Never duplicate visual text through pseudo-elements in the accessibility tree.
- Keep color contrast at WCAG AA or better for text and controls.
- Ensure all WebGL/canvas visuals have equivalent HTML content nearby.
- Keep mobile navigation keyboard and touch friendly.

## Performance Requirements

- Initial route must not depend on WebGL.
- Use optimized local fonts or add preconnect and `font-display: swap` if remote fonts remain.
- Use responsive, compressed project images with explicit dimensions.
- Lazy-load below-the-fold media and heavy animation islands.
- Cap WebGL device pixel ratio and particle counts.
- Pause animations when offscreen.
- Keep core content visible before JavaScript loads.
- Avoid layout shifts from fonts, images, and hero canvas sizing.
- Keep JavaScript budgets small; Astro islands should be opt-in, not global hydration.
