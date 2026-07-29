# Portfolio V2 Static Homepage Structure

Document date: July 29, 2026

## Phase Scope

This phase implements the static homepage content hierarchy for KAISER SYSTEM - Celestial Developer Interface. It does not implement case-study pages, scroll-triggered animation, page transitions, GSAP motion, canvas, WebGL, Three.js, or the enhanced celestial planet.

## Content Model Paths

- Shared content types: `src/types/portfolio.ts`
- Profile content: `src/data/profile.ts`
- Contact channels and missing contact links: `src/data/contact.ts`
- Navigation items: `src/data/navigation.ts`
- Project content and validation: `src/data/projects.ts`
- Capability groups: `src/data/capabilities.ts`
- Experience entries: `src/data/experience.ts`
- Education entries: `src/data/education.ts`
- Development principles: `src/data/principles.ts`
- Architecture preview data: `src/data/architecture.ts`
- Astro project collection schema: `src/content/config.ts`
- Project collection stubs: `src/content/projects/*.md`

The homepage currently reads from `src/data/*`. The Markdown collection mirrors verified project facts for future case-study work, but no project route is created in this phase.

## Content Editing Process

1. Add or revise verified facts in the relevant `src/data/*` module.
2. Keep missing links as omitted optional properties, not empty strings.
3. Add screenshots only after files exist under `public/assets/projects/` with accurate alt text and dimensions.
4. Update matching `src/content/projects/*.md` entries when project facts change.
5. Run `pnpm test` to validate IDs, slugs, featured order, required labels, and URL protocols.
6. Run `pnpm test:e2e` to verify rendered anchors, section targets, accessibility smoke checks, and responsive behavior.

## Homepage Components

- Homepage route: `src/pages/index.astro`
- Hero section: `src/components/hero/HeroSection.astro`
- Static planet placeholder: `src/components/hero/StaticPlanet.astro`
- Profile section: `src/components/sections/ProfileSection.astro`
- Selected projects section: `src/components/sections/SelectedProjectsSection.astro`
- Project preview component: `src/components/projects/ProjectPreview.astro`
- Architecture preview section: `src/components/sections/ArchitecturePreviewSection.astro`
- Architecture diagram: `src/components/architecture/ArchitectureDiagram.astro`
- Capabilities section: `src/components/sections/CapabilitiesSection.astro`
- Experience section: `src/components/sections/ExperienceSection.astro`
- Education section: `src/components/sections/EducationSection.astro`
- Development principles section: `src/components/sections/PrinciplesSection.astro`
- Contact section: `src/components/sections/ContactSection.astro`

All sections render semantic headings and use the existing `PageShell`, `SectionShell`, navigation, footer, skip link, and global token system.

## Static Planet

`src/components/hero/StaticPlanet.astro` is decorative and marked with `aria-hidden="true"`. It uses CSS-only circular and orbital markup from `src/styles/global.css`. It has no canvas, WebGL, JavaScript, or animation loop, and it can be replaced later by the dedicated planet phase.

## Architecture Preview

The static architecture preview uses FAHAD because its offline AI workflow is the most accurately documented locally. The section presents:

- Flutter mobile interface
- On-device TensorFlow Lite and Vision Transformer model layer
- Real, uncertain, or manipulated classification output
- Local encrypted history

The visual flow is an ordered list with a visible text alternative, so it remains understandable without animation.

## Verified Featured Projects

1. Venora: event venue and supplier platform using Next.js, React, TypeScript, Supabase, PostgreSQL, Tailwind CSS, Radix UI, Zod, React Hook Form, pnpm, authentication, role-based access control, discovery, profiles, QA, and UI/UX involvement. Repository and live-demo links are verified.
2. FAHAD: offline deepfake image verification using Flutter, Dart, TensorFlow Lite, Vision Transformer, SQLite, Python, on-device inference, privacy-first architecture, local encrypted history, and real, uncertain, or manipulated classification states.
3. ResumeBridge: AI resume analysis and job-description comparison using PHP, object-oriented programming, PDO, MySQL, JavaScript, Tailwind CSS, Bootstrap, Qwen3.6-Plus API through cURL, authentication, session isolation, compatibility scoring, skill-gap feedback, and keyword feedback.

No project metrics, user counts, revenue, performance benchmarks, production scale, testimonials, or adoption claims were added.

## Missing Or Unverified Content

- Nightbank project screenshot.
- All project case-study pages and deeper case-study evidence.
- Paid employment or volunteer details.
- Favicon and social preview images.

## Asset Validation

Current public assets contain `public/assets/fonts/README.md`, the supplied resume file at `public/assets/resume/jared-fahad-baquirin-resume.docx`, and supplied Venora, FAHAD, and ResumeBridge screenshots under `public/assets/projects/`. Nightbank still uses a decorative placeholder and does not reference a missing project image path.

Assets requiring later replacement or recapture:

- Additional Venora and ResumeBridge screenshots if deeper case studies need them.
- Additional featured project screenshots if deeper case studies need them.
- PDF resume variant if Jared wants a browser-native resume format later.
- Favicon and social preview image.

## Deferred Work

- Dedicated project case-study pages.
- GSAP or any section-reveal motion.
- Enhanced celestial planet, pointer behavior, canvas, WebGL, Three.js, React Three Fiber, or Drei.
- Page transitions or initialization sequence.
- Active-section scroll tracking.
- SEO/social metadata beyond the current BaseLayout title and description.
