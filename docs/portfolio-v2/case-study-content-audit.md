# Portfolio V2 Case-Study Content Audit

Audit date: July 29, 2026

Scope: reusable case-study system for the approved Portfolio V2 priority projects:
Venora, FAHAD, and ResumeBridge.

## Sources Inspected

- `AGENTS.md`
- `README.md`
- `docs/portfolio-v2/current-state-audit.md`
- `docs/portfolio-v2/proposed-architecture.md`
- `docs/portfolio-v2/design-specification.md`
- `docs/portfolio-v2/architecture-decision.md`
- `docs/portfolio-v2/implementation-plan.md`
- `docs/portfolio-v2/content-inventory.md`
- `docs/portfolio-v2/static-homepage-structure.md`
- `src/types/portfolio.ts`
- `src/data/projects.ts`
- `src/content/projects/*.md`
- `src/components/projects/ProjectPreview.astro`
- `public/assets/projects/venora-venue-listing.png`
- `public/assets/projects/fahad-verification-result.png`
- `public/assets/projects/resumebridge-ai-job-finder.png`
- User-supplied project links and resume facts from earlier Portfolio V2 phases.

The Venora, FAHAD, and ResumeBridge source repositories are not cloned inside this
portfolio workspace. Public repository and deployment URLs were supplied in the
approved content phase and are treated as verified links, but this audit does
not claim a fresh repository code review.

## Classification Rules

- Verified: supported by current repository content, supplied project facts, or
  supplied screenshots.
- Partially verified: supported direction exists, but implementation depth,
  exact library choice, date, or completion level is not fully documented here.
- Missing: required for stronger publication, but not available in the portfolio
  workspace.
- Target rather than measured result: stated as an intended behavior or goal,
  not a completed metric.
- Outdated: superseded by Portfolio V2 direction.
- Not suitable for publication: would overstate evidence or expose claims that
  are not supported.

## Venora

### Verified

| Item | Source | Notes |
| --- | --- | --- |
| Event venue and supplier platform | Approved brief, `src/data/projects.ts` | Use as core overview. |
| Priority project order: first | Design spec, homepage data | Featured before FAHAD and ResumeBridge. |
| Technologies: Next.js, React, TypeScript, Supabase, PostgreSQL, Tailwind CSS, Radix UI, Zod, React Hook Form, pnpm | `src/data/projects.ts`, content inventory | Render as verified stack. |
| Authentication, email verification, password recovery, session refresh, protected routes, role-based access control | `src/data/projects.ts` | Discuss without claiming complete production security. |
| Target roles: customers, venue owners, suppliers, administrators | Approved brief | Use as target users. |
| Venue and supplier discovery, profile surfaces, location or map functionality | Approved brief, homepage data | Use as implemented/responsibility area where worded cautiously. |
| QA and UI/UX involvement | Approved brief, homepage data | Use as responsibility, not formal QA certification. |
| Repository link | User supplied | `https://github.com/Jassim3nidad/venora`. |
| Public deployment link | User supplied | `https://venora-web.vercel.app/`. |
| Screenshots | User supplied | Four mobile screens are verified: landing search, about overview, venue listing showing Amorita Resort, and supplier listing showing Sai's Photography. |

### Partially Verified

| Item | Notes |
| --- | --- |
| Team scope | The repository is under `Jassim3nidad/venora`, but the portfolio workspace does not document team size or exact ownership split. |
| Booking data model | Booking appears in the approved brief, but detailed schema and behavior are not locally audited. |
| Storage or external services | Supabase is verified; storage-specific behavior is not separately verified. |

### Missing

- Verified year or date range.
- Formal QA report or test coverage.
- Security review.
- Production user, booking, revenue, traffic, or conversion metrics.
- Additional screenshots for dashboards, booking flows, and authenticated role-specific areas.

### Intended Features

- Venue discovery.
- Supplier discovery.
- Role-aware account areas.
- Protected profile and dashboard flows.
- Location-aware or map-assisted browsing where supported by implementation.

### Implemented Features Supported By Current Sources

- Supabase authentication and protected routes.
- Role-based access control.
- Validated form/application logic through TypeScript, Zod, and React Hook Form.
- Responsive dashboards and profile components.
- Public demo deployment.

### Tested Behavior

No Venora repository test report is available in the portfolio workspace. The
Portfolio V2 site tests verify only that Venora facts, links, screenshots,
case-study route, metadata, accessibility, and responsive presentation render.

### Performance Targets

No Venora performance target is verified in the current sources.

### Measured Results

No measured Venora user, conversion, traffic, uptime, speed, or revenue result
is verified. The live deployment link is verified, but it is not evidence of
production completeness.

### Not Suitable For Publication

- Claims of complete production security.
- User counts, booking counts, revenue, conversion, or adoption metrics.
- Exact team size or employment relationship.

## FAHAD

### Verified

| Item | Source | Notes |
| --- | --- | --- |
| Offline mobile app for potentially manipulated or AI-generated static image verification | Approved brief, homepage data | Use as overview. |
| Scope: static images only, offline operation, mobile app, manual image selection, no video verification | Approved brief | Use as explicit scope and limitation. |
| Technologies: Flutter, Dart, TensorFlow Lite, Vision Transformer, SQLite, Python | Approved brief, homepage data, content inventory | Render as verified stack. |
| On-device inference | Approved brief, homepage data | Use as privacy-first architecture claim. |
| Result states: authentic, uncertain, manipulated | Approved brief, homepage data | Use as output-state language. |
| Encrypted local history | Approved brief, homepage data | Use without naming an unverified encryption library. |
| Repository link | User supplied | `https://github.com/BlackKaiser1121/FAHAD`. |
| Deployment status | User supplied | No web deployment link is expected because FAHAD is an Android application. |
| Screenshot | User supplied | Mobile verification result screen showing credibility score and fake classification. |

### Partially Verified

| Item | Notes |
| --- | --- |
| Encryption implementation | Encrypted local history is verified, but SQLCipher is not verified in the portfolio workspace. |
| Model performance | Model direction is verified; measured accuracy and benchmark results are not. |
| Dataset details | Dataset limitations are listed as limitations, but exact training/evaluation sources are not documented here. |

### Missing

- Verified year or date range.
- Model accuracy, confusion matrix, benchmark, or device performance report.
- Formal app test plan or completed QA report.
- Exact encrypted-storage implementation detail.
- More screenshots for selection, history, uncertain result, and settings flows.

### Intended Features

- Offline static-image verification.
- Privacy-first on-device processing.
- Local verification history.
- Classification into authentic, uncertain, or manipulated states.

### Implemented Features Supported By Current Sources

- Flutter mobile verification flow.
- TensorFlow Lite and Vision Transformer model usage.
- On-device processing.
- Encrypted local history.
- Result screen with credibility score and save/discard actions.

### Tested Behavior

No FAHAD app test report is available in the portfolio workspace. Portfolio V2
tests verify only that FAHAD facts, route, links, images, architecture text
alternative, accessibility, and responsive presentation render correctly.

### Performance Targets

- Offline operation.
- Mobile-compatible model size and inference path.
- Privacy-first operation without required transmission.

These are targets/design goals unless a measured benchmark is later supplied.

### Measured Results

No measured FAHAD accuracy, speed, device benchmark, or production validation is
verified. The screenshot result is a UI state, not a model-performance metric.
No web deployment link is expected because FAHAD is an Android application.

### Not Suitable For Publication

- Target accuracy presented as a completed measured result.
- Claims that FAHAD detects all deepfakes or is immune to security risks.
- SQLCipher claims until source evidence verifies that library.
- Video-verification claims.

## ResumeBridge

### Verified

| Item | Source | Notes |
| --- | --- | --- |
| Web-based AI resume analyzer | Approved brief, homepage data | Use as overview. |
| User flow: authentication, resume input, job-description input, backend validation, Qwen API through PHP cURL, structured response processing, compatibility score, skill-gap and keyword feedback, user-specific result display | Approved brief | Use as verified flow. |
| Technologies: PHP, object-oriented PHP, PDO, MySQL, JavaScript, Tailwind CSS, Bootstrap, Qwen3.6-Plus API, cURL | Approved brief, resume facts, homepage data | Render as verified stack. |
| Session-based authentication and user isolation | Approved brief, homepage data | Use as backend design/security claim with caution. |
| Prepared statements through PDO | Approved brief | Use as verified security measure. |
| Repository link | User supplied | `https://github.com/BlackKaiser1121/ResumeBridge`. |
| Screenshot | User supplied | AI Job Finder analyzer screen with ranked recommendations and matching skills. |
| Current system status | User supplied | The system has several issues to fix before it should be presented as stable. |

### Partially Verified

| Item | Notes |
| --- | --- |
| Input validation | Backend validation is verified in the approved flow, but exact validation rules are not locally audited. |
| AI response processing | Structured processing is verified at a high level; schema details are not documented here. |
| Database setup workflow | Mentioned in the brief, but exact setup steps are not audited inside this portfolio workspace. |

### Missing

- Verified live deployment link.
- Verified year or date range.
- Formal test suite or QA report.
- Scoring accuracy or validation study.
- Data-retention/privacy policy.
- Additional screenshots for auth, resume input, job-description input, history, and saved analyses.
- Fixes for known system issues before any stable public deployment claim.

### Intended Features

- Authenticated resume analysis.
- Job-description comparison.
- Compatibility scoring.
- Skill-gap and keyword feedback.
- User-specific result display.

### Implemented Features Supported By Current Sources

- Object-oriented PHP backend.
- PDO/MySQL data access.
- Session-based authentication and user isolation.
- Qwen3.6-Plus API integration through PHP cURL.
- Dashboard-style analysis presentation.

### Tested Behavior

No ResumeBridge repository test report is available in the portfolio workspace.
Portfolio V2 tests verify only that ResumeBridge facts, route, repository link,
missing live link, image, architecture text alternative, accessibility, and
responsive presentation render correctly.

### Performance Targets

No measured ResumeBridge performance target is verified. Any expected API
latency, scoring consistency, or response-quality goal must remain unpublished
until evidence exists.

### Measured Results

No live deployment link, scoring accuracy, employer usage, adoption metric, or
production result is verified.
ResumeBridge is presented as active work with fixes pending, not as a stable
public system.

### Not Suitable For Publication

- Employer adoption or hiring-success claims.
- AI scoring accuracy claims.
- Complete security claims.
- Stable public deployment claims before known system issues are fixed.
- Live-demo link until a verified deployment is supplied.

## Cross-Project Publication Rules

- Use only structured content from `src/data/case-studies.ts`.
- Omit unavailable links rather than rendering disabled buttons.
- Keep missing metrics as limitations, not marketing copy.
- Keep architecture diagrams readable through text alternatives.
- Do not add animation, WebGL, canvas, or 3D dependencies in this phase.
- Update this audit whenever a project fact moves from missing or partial to verified.
