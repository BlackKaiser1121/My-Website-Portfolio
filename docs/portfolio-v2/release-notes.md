# Portfolio V2 Release Notes

Portfolio V2 migrates Jared Baquirin's portfolio to static Astro output with strict TypeScript, typed content modules, and a GitHub Pages repository base path. The existing root `index.html` and `style.css` remain tracked as a rollback reference. This branch has not been deployed by this QA phase.

## Site Experience

- KAISER SYSTEM visual identity: graphite surfaces, restrained electric-green interface details, editorial content, and a CSS/SVG celestial planet. No WebGL, 3D, or remote font dependency is required.
- Responsive homepage with semantic hero, profile, selected projects, architecture preview, capabilities, experience, education, principles, and contact sections.
- Reusable dedicated Venora, FAHAD, and ResumeBridge case studies with verified scope, architecture text alternatives, screenshots, limitations, and project navigation. FAHAD has no web deployment; ResumeBridge does not claim a stable live deployment.
- Accessible desktop/mobile navigation, skip link, visible focus, meaningful image text, and a no-JavaScript content fallback.
- Centralized GSAP motion with a per-tab skippable initialization sequence. Reduced-motion users get a static complete state; the intro Skip control is keyboard reachable and restores focus to main content.

## Release QA

- Unique titles/descriptions, base-path-aware canonicals, JSON-LD, four-route sitemap, robots file, favicon/theme color, and static social preview images.
- Lightweight static 404 page with a home route and `noindex`.
- Below-fold project screenshots load lazily; image dimensions are reserved. No custom or remote fonts are loaded.
- Local automated coverage includes Vitest, Chromium Playwright/axe, and a separate Chromium/Firefox/WebKit smoke command. The GitHub Pages workflow gates formatting, lint, type checking, unit tests, and production-preview E2E before upload.
- The Venora repository and live-demo actions are available. LinkedIn remains a user-supplied link pending a normal-browser check because automated requests were blocked.

See `production-readiness.md` for command results, asset measurements, link classifications, deployment limits, and the release recommendation. No project usage, model-accuracy, conversion, or performance metric is claimed without source evidence.
