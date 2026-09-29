# Portfolio V2 Design Specification

Audit date: July 28, 2026

This specification turns the repository audit into an implementation-ready product, design, accessibility, performance, and motion contract. It does not implement the redesign.

## 1. Product Purpose

Primary audience:

- Recruiters evaluating internship or junior developer fit.
- Engineering leads or collaborators evaluating project thinking.
- Peers reviewing technical depth, UI/UX judgment, and reliability.

Visitor goals:

- Understand who Jared Baquirin is within the first viewport.
- Identify the professional positioning: **Full-Stack Developer - QA - UI/UX**.
- Find the three priority projects: Venora, FAHAD, and ResumeBridge.
- Open project case studies with enough detail to evaluate responsibilities, architecture, testing, accessibility, and trade-offs.
- Reach verified contact and profile links quickly.

Portfolio owner goals:

- Replace the current cyberpunk student portfolio with a professional, cinematic portfolio.
- Demonstrate senior-level practices through evidence, not inflated titles.
- Preserve accurate existing facts while making missing project details visible before publication.
- Keep the site static, accessible, maintainable, and deployment-friendly.

Success criteria:

- The homepage communicates name, role, value statement, and priority project CTA without requiring animation.
- Venora, FAHAD, and ResumeBridge have dedicated case-study routes before launch.
- The site passes production build, type check, lint, automated tests, accessibility checks, and responsive visual QA after implementation.
- The mobile experience is complete, readable, keyboard accessible, and free of horizontal clipping at 390px.
- Motion enhances hierarchy but never blocks navigation, reading, or case-study access.

Professional positioning:

- Use: **Full-Stack Developer - QA - UI/UX**.
- Do not call Jared a senior developer unless verified professional information later supports that title.
- Demonstrate senior-level practice through architecture notes, testing decisions, accessibility implementation, maintainability, and trade-off writing.

## 2. Design Principles

- Cinematic but usable: atmosphere supports orientation and momentum; content remains readable and reachable.
- Game-inspired but professional: use tactical interface details as accents, not as the whole personality of the site.
- Content-first storytelling: every section should answer a visitor question about ability, decision-making, or fit.
- Motion with purpose: animation must reveal structure, reinforce state, or clarify relationships.
- Progressive enhancement: static HTML is the baseline; CSS, JavaScript, GSAP, canvas, and WebGL enhance only when available.
- Mobile parity: mobile users get the same content, links, and case-study access as desktop users.
- Accessibility first: WCAG 2.2 AA is the target, and reduced motion must be first-class.
- Performance restraint: the celestial system should feel rich without expensive always-on effects.
- Visual consistency: color, spacing, typography, radius, borders, and motion timings come from shared tokens.

## 3. Information Architecture

Homepage order:

1. Optional initialization sequence
2. Hero
3. Professional profile
4. Selected projects
5. Architecture showcase
6. Engineering capabilities
7. Experience
8. Development principles
9. Contact
10. Footer

Dedicated Astro routes:

- `C:\Users\ranib\My-Website-Portfolio\src\pages\projects\[slug].astro`
- `/projects/venora/`
- `/projects/fahad/`
- `/projects/resumebridge/`

Content collection source:

- `C:\Users\ranib\My-Website-Portfolio\src\content\projects\venora.md`
- `C:\Users\ranib\My-Website-Portfolio\src\content\projects\fahad.md`
- `C:\Users\ranib\My-Website-Portfolio\src\content\projects\resumebridge.md`
- `C:\Users\ranib\My-Website-Portfolio\src\content\projects\nightbank.md`

Project priority:

1. Venora
2. FAHAD
3. ResumeBridge

Nightbank Finance can appear in a secondary archive if Jared wants it preserved.

## 4. Navigation

Desktop navigation:

- Use a semantic `<nav aria-label="Primary">`.
- Include links to Profile, Projects, Architecture, Capabilities, Experience, and Contact.
- Keep the logo/name link readable and avoid decorative text duplication.
- Use electric green only for active, hover, and focus accents.

Mobile navigation:

- Use a button with an explicit accessible name such as "Open navigation".
- Toggle a compact menu without trapping scroll permanently.
- Keep every link reachable by touch and keyboard.
- Minimum touch target is 44px by 44px.

Active-section behavior:

- Use IntersectionObserver after static layout is complete.
- Active state must not be the only way to identify location.
- If JavaScript fails, all nav links remain normal anchor links.

Skip-to-content link:

- First focusable element in the document.
- Targets `<main id="main">`.
- Becomes visible on keyboard focus.

Keyboard behavior:

- Tab order follows visual order.
- Escape closes mobile navigation when open.
- Focus returns to the menu button after the mobile menu closes.
- Case-study cards expose one clear primary link and optional secondary links.

Case-study navigation:

- Each case-study page includes a breadcrumb, previous/next project links when available, and a "Back to selected projects" link.
- Repository and demo actions must have project-specific accessible labels.

Back-navigation behavior:

- Browser back should work normally.
- Do not intercept native navigation.
- Page transitions must not hide focus or prevent immediate reading.

## 5. Visual System

Color roles:

- Space black: primary page background, near `#050706`.
- Graphite: section and panel surface, near `#101413`.
- Elevated graphite: repeated cards and code-like panels, near `#171C1A`.
- Soft white: primary text, near `#F2F5EF`.
- Muted text: secondary copy, near `#AEB8B0`.
- Electric green: active states, status indicators, primary actions, holographic lines, focus accents, and small interface details.
- Cool cyan: secondary holographic accents used sparingly.
- Warning amber: rare caution or missing-content states.

Electric green must not be used for large body-copy blocks.

Surface hierarchy:

- Page background stays darkest.
- Section bands use subtle tonal changes instead of floating card stacks.
- Cards are reserved for repeated project previews, case-study callouts, and compact tool-like panels.
- Avoid cards inside cards.

Typography roles:

- Editorial display: hero headline and major section titles.
- Professional sans: body copy and dense explanatory content.
- Monospace accent: metadata, tags, route labels, and small tactical interface labels.
- Do not use game-style display fonts for long paragraphs.

Spacing system:

- Use tokenized spacing such as `--space-1` through `--space-8`.
- Section padding changes by breakpoint instead of relying on one fixed `vh` layout.
- Hero must leave a hint of the next section visible on common desktop and mobile viewports.

Border treatment:

- Use 1px graphite borders for structure.
- Use electric green borders only for active or primary states.
- Holographic lines should be thin and low opacity.

Radius rules:

- Cards and panels use 4px to 8px radius.
- Icon buttons and compact controls may be circular only when the shape communicates the control.
- Avoid oversized rounded pill treatments except for clear status chips.

Icon usage:

- Use icons for navigation controls, external links, repository links, contact actions, and status metadata.
- Icons must have accessible labels when they stand alone.
- Do not use decorative icons to replace meaningful text.

Grid system:

- Use a responsive content grid with a maximum content width.
- Project previews use asymmetry on desktop and a single-column reading order on mobile.
- Architecture diagrams should align to the same grid as editorial content.

Maximum content width:

- Standard reading content: 720px to 820px.
- Project and architecture layouts: up to 1180px.
- Wide hero composition: up to 1280px.

Desktop and mobile layout behavior:

- Desktop supports two-column hero composition with text and planet.
- Tablet stacks or overlaps conservatively only when text remains readable.
- Mobile uses a single-column flow with the planet behind or above hero text at reduced detail.

## 6. Hero Specification

Content hierarchy:

1. Jared Baquirin
2. Full-Stack Developer - QA - UI/UX
3. Short value statement focused on building reliable, usable software
4. Primary CTA to selected projects
5. Secondary CTA to profile or contact
6. Restrained HUD metadata

Headline position:

- Desktop: left side, vertically centered above the fold with enough bottom room to reveal the next section.
- Tablet: headline remains first in reading order; planet shifts behind or beside it with lower opacity.
- Mobile: headline, role, value statement, and CTAs are fully visible without horizontal clipping.

Professional role:

- Use exactly: **Full-Stack Developer - QA - UI/UX**.
- Do not use "senior" in the hero.

Supporting statement:

- One or two short sentences.
- Focus on practical full-stack delivery, testing discipline, accessible UI, and thoughtful product decisions.
- Do not mention unverified metrics.

Calls to action:

- Primary: "View Selected Projects".
- Secondary: "Contact Jared" or "View Profile".
- CTAs must be visible, keyboard focusable, and usable without animation.

HUD metadata:

- Small, factual labels such as "Portfolio V2", "Static-first", "Case studies", and "Available for internship inquiries".
- Do not fake uptime, coordinates, system metrics, or skill percentages.

Planet placement:

- Desktop: supporting visual centerpiece on the right or centered behind the hero with clear text contrast.
- Tablet: reduce size and opacity so text remains dominant.
- Mobile: compact planet above, behind, or below text without interfering with CTAs.

Background treatment:

- Star field, subtle grid, orbital path lines, and atmospheric depth are allowed.
- No busy animation behind body copy.

Non-WebGL fallback:

- Render a static CSS/SVG planet before any JavaScript runs.
- Hide canvas/WebGL enhancements from assistive technology.

Reduced-motion version:

- No rotation loops.
- Static planet with subtle glow.
- Hero text visible immediately.

## 7. Celestial Planet Behavior

Visual layers:

- Base orb with graphite-to-green holographic shading.
- Thin latitude and longitude contour lines.
- Two or three orbital rings.
- Sparse particles near the planet.
- Subtle electric green highlights.
- Optional scan-line texture at low opacity.

Rotation behavior:

- Default CSS/SVG implementation rotates surface lines slowly over 18s to 40s.
- Rotation pauses in reduced-motion mode.
- Rotation pauses when the hero is offscreen.

Orbital-ring behavior:

- Rings use transform-only animation.
- Each ring has different duration and opacity.
- Mobile uses fewer rings.

Pointer interaction:

- Small TypeScript module updates CSS custom properties for pointer tilt and highlight location.
- Disable pointer tracking on coarse pointers or low-power mode.
- Pointer response must never move essential text.

Scroll interaction:

- Planet opacity or parallax may change slightly within the hero only.
- Do not bind the planet to scroll progress after the hero.
- Do not hijack native scroll.

Rendering strategy comparison:

| Option | Advantages | Disadvantages | Decision |
| --- | --- | --- | --- |
| CSS and SVG only | Smallest dependency surface, static fallback by default, easy to pause for reduced motion, strong GitHub Pages fit | Less true 3D depth than WebGL | Primary implementation |
| Canvas or Three.js | Better particle control and richer depth | More JavaScript, more performance risk, needs fallback | Optional prototype after CSS/SVG if visual quality is insufficient |
| React Three Fiber | Best React-friendly WebGL ergonomics and reusable scene structure | Requires React island, `three`, and `@react-three/fiber`; highest dependency and GPU cost | Not part of initial implementation; revisit only after a documented prototype review |

Primary implementation:

- Use CSS/SVG plus a small TypeScript pointer module.
- Use GSAP only for coordinated entrance or reveal timing around the hero, not for the planet's baseline loop.
- Do not add React Three Fiber in the first implementation phase.

Performance budget:

- Planet enhancement JavaScript target: under 20 KB gzip before optional GSAP.
- SVG node count target: under 80 visible planet-related nodes.
- Animation uses transform and opacity, not layout properties.
- Maintain 60fps on desktop and avoid sustained jank on mobile.

Mobile simplification:

- Fewer particles.
- No pointer responsiveness on touch-only devices.
- Smaller planet and lower opacity.
- No text overlap.

Reduced-motion behavior:

- Static planet.
- No orbit rotation.
- No reveal delay.
- CTAs and headings visible immediately.

Failure fallback:

- If CSS loads but JavaScript fails, the static planet remains.
- If SVG fails, the hero remains readable with background atmosphere.
- If all animation fails, semantic content remains complete.

## 8. Project Presentation

Homepage project previews:

- Feature Venora, FAHAD, and ResumeBridge in that order.
- Each preview includes project name, short summary, role/responsibility summary, technology metadata, primary case-study link, repository link when verified, and live demo link when verified.
- Missing repository or demo links render as plain "Link unavailable" metadata, not disabled buttons.

Case-study page structure:

1. Project overview
2. Problem
3. Target users
4. Responsibilities
5. Technology stack
6. System architecture
7. Core features
8. Authentication and security
9. UI/UX decisions
10. QA and testing
11. Technical challenges
12. Solutions
13. Trade-offs
14. Results
15. Lessons learned
16. Repository link
17. Live demo link when available

Screenshot handling:

- Store optimized images under `C:\Users\ranib\My-Website-Portfolio\public\assets\projects\`.
- Use descriptive filenames such as `venora-dashboard.webp`.
- Provide width, height, alt text, and captions.
- Do not publish blurred, cropped, or decorative screenshots when a product screenshot is needed.

Video-preview behavior:

- No autoplay with sound.
- Prefer muted click-to-play or poster images.
- Provide captions or text summary for important video content.

Technology metadata:

- Use structured arrays in content frontmatter.
- Do not use skill percentages.
- Use technology tags as scanning aids, not as proof of expertise.

Project responsibilities:

- Each case study must state Jared's responsibilities clearly.
- If responsibility scope is not supplied, mark the case study as not ready to publish.

Architecture diagrams:

- Use semantic HTML/SVG diagrams with text alternatives.
- Animated diagram strokes are optional and must reduce to static diagrams.

Repository and demo actions:

- Use unique accessible names such as "Open FAHAD repository".
- External links use `rel="noopener noreferrer"`.

Missing-link states:

- Missing links are factual text, not dead buttons.
- Do not invent live demos or repository URLs.

Mobile presentation:

- Project previews stack in priority order.
- Screenshots use responsive images.
- Case-study contents include an in-page outline after the title.

## 9. Motion System

Avoid constant movement in every part of the screen. At most one major visual system should move prominently at a time.

| Motion category | Purpose | Technology | Duration range | Easing type | Trigger | Mobile behavior | Reduced-motion behavior | Fallback |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Initialization sequence | Establish system tone without blocking content | CSS plus small TypeScript state | 600ms to 1200ms | `cubic-bezier(0.22, 1, 0.36, 1)` | First page load | Shorter, skippable | Disabled | Content visible immediately |
| Hero entrance | Reveal hierarchy | CSS or GSAP timeline | 400ms to 900ms | Ease-out | Page load | Reduced distance | Disabled | Static hero |
| Planet | Atmospheric centerpiece | CSS/SVG plus TypeScript | 18s to 40s loops | Linear for rotation, ease-out for pointer | Page load and pointer | Fewer layers | Static | Static SVG/CSS orb |
| Orbital rings | Suggest system orbit | CSS transforms | 24s to 60s loops | Linear | Page load | One or two rings | Static | Static rings |
| Star field | Add depth | CSS background or lightweight canvas | 30s+ subtle drift | Linear | Page load | Static or lower density | Static | Static background |
| Navigation | Communicate state | CSS | 120ms to 220ms | Ease-out | Hover, focus, active section | Same | Same | Plain links |
| Section reveals | Guide scanning | IntersectionObserver plus CSS or GSAP | 250ms to 600ms | Ease-out | Section enters viewport | Fade only | Disabled | Sections visible |
| Project transitions | Emphasize priority | CSS or GSAP | 250ms to 500ms | Ease-out | Hover, focus, route entry | Minimal | Disabled | Static cards |
| Architecture diagrams | Show relationships | SVG stroke CSS or GSAP | 500ms to 1200ms | Ease-out | Diagram enters viewport | Static first | Static | Static SVG/HTML |
| Hover states | Confirm interactivity | CSS | 100ms to 180ms | Ease-out | Hover and focus | Tap active state | Same | Plain controls |
| Page transitions | Smooth route change | Astro view transitions or CSS | 150ms to 300ms | Ease-in-out | Navigation | Disabled if unstable | Disabled | Normal page load |

## 10. Accessibility Requirements

- Target WCAG 2.2 AA.
- Use `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` landmarks correctly.
- Maintain one clear `h1` per page.
- Keep heading levels in order.
- Support full keyboard navigation.
- Provide visible `:focus-visible` treatment with electric green or high-contrast outline.
- Maintain WCAG AA contrast for body text, links, buttons, and metadata.
- Provide alt text for informative images and empty alt text for decorative images.
- Use labels for every form field if a form is added.
- Provide clear error messages if a future contact form is added.
- Respect `prefers-reduced-motion`.
- Prevent screen readers from announcing decorative planets, particles, grids, and duplicate visual text.
- Keep touch targets at least 44px by 44px.
- Provide animation pause or skip behavior for any initialization sequence longer than 600ms.
- Never hide essential content behind canvas, video, or WebGL.

## 11. Performance Requirements

Targets for the implemented Astro site:

- Initial JavaScript: under 75 KB gzip for the homepage before optional WebGL. The planet pointer module target is under 20 KB gzip.
- CSS: under 80 KB gzip for global, token, and motion styles.
- Images: use AVIF or WebP where supported, provide dimensions, and lazy-load below-the-fold project media.
- Font loading: use local optimized fonts when possible; otherwise preconnect to font origins and use `font-display: swap`.
- Largest Contentful Paint: under 2.5s on a mid-range mobile connection in production preview.
- Cumulative Layout Shift: under 0.05.
- Interaction responsiveness: INP under 200ms.
- Animation frame rate: target 60fps desktop; avoid sustained drops below 30fps on mobile.
- WebGL fallback: no route requires WebGL to read content or navigate.
- Mobile GPU usage: disable high-density particles, pointer tracking, and expensive canvas work on coarse pointers.
- Lazy loading: load case-study media and enhanced planet modules only when needed.

## 12. SEO Requirements

Page title patterns:

- Homepage: `Jared Baquirin - Full-Stack Developer, QA, UI/UX`
- Case study: `[Project Name] Case Study - Jared Baquirin`

Descriptions:

- Each page has a unique 140 to 160 character description.
- Descriptions must use verified project facts only.

Canonical URLs:

- Homepage canonical: `https://blackkaiser1121.github.io/My-Website-Portfolio/`
- Case-study canonical pattern: `https://blackkaiser1121.github.io/My-Website-Portfolio/projects/[slug]/`

Open Graph metadata:

- `og:title`, `og:description`, `og:type`, `og:url`, and `og:image` on every route.
- Project pages use project-specific social images when screenshots are available.

Structured data:

- Homepage uses `Person` and `WebSite` JSON-LD.
- Case studies use `CreativeWork` or `SoftwareSourceCode` only when fields are accurate.

Sitemap and robots:

- Generate or maintain `C:\Users\ranib\My-Website-Portfolio\public\sitemap.xml`.
- Add `C:\Users\ranib\My-Website-Portfolio\public\robots.txt`.

Project-specific metadata:

- Slug, title, short summary, repository URL, demo URL, technologies, and social image are defined in content frontmatter.
- Missing URLs are represented as absent optional fields, not invented strings.

## 13. Content Requirements

Existing content that can be reused:

- Jared Baquirin name.
- Computer Science undergrad context.
- About paragraph facts.
- Skill facts: HTML5, CSS3, JS, PHP, Dart, Python, C#, Unity, TensorFlow Lite, Vision Transformers, LLM API integration.
- Existing project facts for Nightbank Finance, ResumeBridge, and FAHAD.
- Existing repository links for Nightbank Finance, ResumeBridge, and FAHAD.
- Email and phone contact details after privacy review.

Content that must be rewritten:

- Hero role and value statement.
- About/profile copy.
- Project summaries.
- Skills presentation.
- Contact section copy.

Content still missing:

- Venora project facts.
- Venora repository link.
- Venora live demo link if available.
- Project screenshots for Venora, FAHAD, ResumeBridge, and optionally Nightbank Finance.
- Resume asset or resume page.
- LinkedIn URL.
- GitHub profile URL.
- Education details beyond "Computer Science undergrad".
- Experience entries, if any.
- Responsibilities, architecture, QA, security, UI/UX decisions, trade-offs, results, and lessons learned for each priority case study.

Screenshots that must be captured:

- Venora primary UI.
- FAHAD detection or verification flow.
- ResumeBridge analysis or recommendation flow.
- Responsive screenshots for 1440, 1024, 768, and 390 viewport widths after implementation.

Links that must be verified:

- GitHub profile.
- LinkedIn.
- Resume file.
- Venora repository and demo.
- FAHAD repository and demo.
- ResumeBridge repository and demo.
- Email link.
- Any public project media.

Project details that must not be invented:

- User counts.
- Performance metrics.
- Revenue or adoption.
- Professional titles.
- Team size.
- Security claims.
- Production status.
- Live demo availability.
- Awards or certifications.

## 14. Responsive Breakpoints

Small mobile:

- Approximate range: 360px to 429px.
- Single-column layout.
- Mobile nav menu.
- Planet simplified or placed behind text at low opacity.
- Hero text wraps without clipping.
- Project previews stack in priority order.

Large mobile:

- Approximate range: 430px to 639px.
- Single-column layout with larger spacing.
- CTAs can sit side by side only if labels fit.
- Case-study outline remains compact.

Tablet:

- Approximate range: 640px to 899px.
- Hero can use a soft two-layer composition, but text remains first.
- Project cards may use one or two columns depending on content density.
- Navigation may remain compact if full nav would crowd.

Laptop:

- Approximate range: 900px to 1199px.
- Hero supports two-column composition.
- Selected projects can use featured card plus secondary cards.
- Architecture showcase may use two columns.

Desktop:

- Approximate range: 1200px to 1535px.
- Full editorial grid.
- Planet acts as a supporting visual centerpiece.
- Project previews become larger and more immersive.

Wide desktop:

- Approximate range: 1536px and up.
- Constrain content width to avoid stretched text.
- Add atmospheric space, not longer line lengths.
- Keep next section hint visible in the first viewport.

## 15. Acceptance Criteria

- `C:\Users\ranib\My-Website-Portfolio\package.json` defines install, dev, check, lint, test, e2e, build, and preview scripts after architecture setup.
- `npm run check`, `npm run lint`, `npm run test`, `npm run test:e2e`, and `npm run build` pass before launch.
- Homepage renders semantic HTML content with JavaScript disabled.
- The hero identifies Jared Baquirin and the role "Full-Stack Developer - QA - UI/UX".
- The hero has a celestial planet fallback that does not require WebGL.
- Venora, FAHAD, and ResumeBridge appear as the top three projects in that order.
- `/projects/venora/`, `/projects/fahad/`, and `/projects/resumebridge/` render dedicated case-study pages.
- Missing project facts are not replaced with fake text, links, or metrics.
- Navigation works by mouse, touch, and keyboard.
- Skip link is present and targets `#main`.
- Focus states are visible in all themes and breakpoints.
- Reduced-motion mode disables nonessential movement and reveal delays.
- No horizontal clipping appears at 390px, 768px, 1024px, or 1440px.
- External links use unique accessible labels and `rel="noopener noreferrer"`.
- Project images have alt text, dimensions, and optimized formats.
- Homepage and case-study pages have unique titles, descriptions, canonical URLs, and Open Graph metadata.
- The site deploys as static output to GitHub Pages.
