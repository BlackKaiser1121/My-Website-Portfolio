# Portfolio V2 Content Inventory

Inventory date: July 29, 2026

Scope: Portfolio V2 static homepage structure and typed content phase.

## Classification Key

- Verified and reusable: present in the repository or supplied in the approved phase brief.
- Verified but should be rewritten later: fact is usable, but wording needs stronger presentation or future case-study detail.
- Missing: required for launch or later phases, but not available yet.
- Outdated: superseded by the approved Portfolio V2 direction.
- Duplicate: repeated source content that should be centralized.
- Unverified: cannot be rendered as a claim or link until supplied.
- Should be removed: no longer appropriate for the Astro homepage surface.

## Profile And Contact

| Item | Source | Classification | Notes |
| --- | --- | --- | --- |
| Name: Jared Baquirin | `index.html`, `src/data/profile.ts` | Verified and reusable | Primary identity signal. |
| Professional role: Full-Stack Developer - QA - UI/UX | Approved phase brief, design specification | Verified and reusable | Required hero positioning for this phase. |
| Current headline: Aspiring Game Developer & AI Enthusiast | `index.html`, `src/data/profile.ts` | Verified but should be rewritten later | Keep as background context only; hero uses approved professional role. |
| Computer Science undergraduate | `index.html`, updated resume, `src/data/profile.ts`, `src/data/experience.ts` | Verified and reusable | Can support education and profile sections. |
| Bachelor of Science in Computer Science | Updated resume | Verified and reusable | Institution and timeline are now supplied. |
| Lyceum of the Philippines University - Cavite | Updated resume | Verified and reusable | Education institution. |
| Aug 2023 - Present; expected May 2027 | Updated resume | Verified and reusable | Education timeline. |
| Web Development and Software Development specialization | `index.html`, `src/data/profile.ts` | Verified and reusable | Use as current academic/professional focus. |
| Internship availability statement | `index.html`, `src/data/experience.ts` | Verified and reusable | Existing public copy says Jared is looking for software, game, and web development opportunities. |
| Email: `jared.baquirin112@gmail.com` | Updated resume, `src/data/profile.ts` | Verified and reusable | Primary contact action. Supersedes the old static-site email for Portfolio V2. |
| Phone: `+63 9055460641` | `index.html`, `src/data/profile.ts` | Verified and reusable with privacy caution | Existing static site exposed it publicly; keep secondary and document privacy review. |
| Location: Cavite, Philippines | Updated resume | Verified and reusable | Render as profile context. |
| GitHub profile URL | User supplied | Verified and reusable | `https://github.com/BlackKaiser1121`. |
| LinkedIn URL | User supplied | Verified and reusable | `https://www.linkedin.com/in/jared-baquirin-32679a384/`. |
| Resume file | User supplied, copied to `public/assets/resume/` | Verified and reusable | Render as a downloadable DOCX action. |

## Projects

| Item | Source | Classification | Notes |
| --- | --- | --- | --- |
| Venora title | Approved phase brief | Verified and reusable | Required as first featured project. |
| Venora event venue and supplier platform | Approved phase brief | Verified and reusable | Use without metrics or scale claims. |
| Venora Next.js, React, TypeScript, Supabase | Approved phase brief | Verified and reusable | Use as technology facts. |
| Venora authentication and role-based access control | Approved phase brief | Verified and reusable | Use as responsibility/system facts without overstating production maturity. |
| Venora venue and supplier discovery, profiles, location/map functionality | Approved phase brief | Verified and reusable | Use as feature facts. |
| Venora QA and UI/UX involvement | Approved phase brief | Verified and reusable | Use as role/responsibility evidence. |
| Venora repository URL | User supplied, public GitHub page checked | Verified and reusable | `https://github.com/Jassim3nidad/venora`. |
| Venora live demo URL | User supplied, public GitHub page checked | Verified and reusable | `https://venora-web.vercel.app/`. |
| Venora screenshot | User supplied, copied to `public/assets/projects/venora-venue-listing.png` | Verified and reusable | Mobile venue listing screen showing Amorita Resort. |
| FAHAD title and repository | `index.html`, `src/data/projects.ts`, `src/content/projects/fahad.md` | Verified and reusable | Repository: `https://github.com/BlackKaiser1121/FAHAD`. |
| FAHAD offline deepfake image verification | Repository content and approved phase brief | Verified and reusable | Use as homepage summary. |
| FAHAD Flutter, Dart, TensorFlow Lite, Vision Transformer, SQLite, Python | Repository content, approved phase brief, updated resume | Verified and reusable | Existing repo says `Tflite`; normalize display to TensorFlow Lite. |
| FAHAD on-device inference and privacy-first architecture | Approved phase brief | Verified and reusable | Do not add benchmark or accuracy claims. |
| FAHAD local encrypted history | Approved phase brief | Verified and reusable | Use as a feature/security consideration. |
| FAHAD real, uncertain, or manipulated classification | Approved phase brief | Verified and reusable | Use as output-state description only. |
| FAHAD live demo | Not found | Missing | Do not render live-demo anchor. |
| FAHAD screenshot | User supplied, copied to `public/assets/projects/fahad-verification-result.png` | Verified and reusable | Mobile verification result screen showing score and classification state. |
| ResumeBridge title and repository | `index.html`, `src/data/projects.ts`, `src/content/projects/resumebridge.md` | Verified and reusable | Repository: `https://github.com/BlackKaiser1121/ResumeBridge`. |
| ResumeBridge AI resume analysis and job-description comparison | Repository content and approved phase brief | Verified and reusable | Use without accuracy or adoption claims. |
| ResumeBridge PHP, OOP, PDO, MySQL, JavaScript, Tailwind CSS, Bootstrap | Approved phase brief plus updated resume | Verified and reusable | Existing static page lists PHP and MYSQL. |
| ResumeBridge Qwen3.6-Plus API integration through cURL | Updated resume | Verified and reusable | Use as integration fact. |
| ResumeBridge authentication, session isolation, compatibility scoring, skill-gap and keyword feedback | Approved phase brief | Verified and reusable | Use as system/responsibility facts. |
| ResumeBridge live demo | Not found | Missing | Do not render live-demo anchor. |
| ResumeBridge screenshot | User supplied, copied to `public/assets/projects/resumebridge-ai-job-finder.png` | Verified and reusable | AI Job Finder analyzer screen with ranked recommendations. |
| Nightbank Finance | `index.html`, `src/data/projects.ts`, `src/content/projects/nightbank-finance.md` | Verified but should be rewritten later | Preserve as archive/secondary content; not a priority project for this phase. |
| Project case-study pages | Not implemented | Missing | Deferred by this phase request. Case-study actions should state not available yet. |

## Capabilities

| Item | Source | Classification | Notes |
| --- | --- | --- | --- |
| HTML5, CSS3, JavaScript, PHP, Dart, Python, C# | `index.html`, `src/data/skills.ts` | Verified and reusable | Group by responsibility, not percentages. |
| Next.js, React, TypeScript, Supabase | Approved phase brief via Venora | Verified and reusable | Tie to Venora evidence. |
| Flutter | Existing FAHAD data and approved phase brief | Verified and reusable | Tie to FAHAD evidence. |
| PDO, MySQL, SQLite | Approved phase brief | Verified and reusable | PDO/MySQL tie to ResumeBridge; SQLite/local storage can tie to FAHAD local data only if worded cautiously. |
| TensorFlow Lite, Vision Transformers, on-device inference | `index.html`, approved phase brief | Verified and reusable | Tie to FAHAD. |
| Qwen API integration | `index.html`, approved phase brief | Verified and reusable | Tie to ResumeBridge. |
| Test-case design, black-box testing, UI/UX design, accessibility, design thinking, Scrum fundamentals | Approved phase brief | Verified and reusable | Present as practical capability areas, not expert claims. |
| Skill percentages or progress bars | Not applicable | Should be removed | Explicitly banned by the brief. |

## Experience And Education

| Item | Source | Classification | Notes |
| --- | --- | --- | --- |
| Computer Science undergraduate, third year | `index.html`, `src/data/experience.ts` | Verified and reusable | Education section can use this. |
| Institution name | Updated resume | Verified and reusable | Lyceum of the Philippines University - Cavite. |
| Expected graduation | Updated resume | Verified and reusable | Expected May 2027. |
| Paid professional role | Not found | Missing | Do not invent work experience. |
| Internship experience | Updated resume | Verified and reusable | Quality Assurance and UI/UX Intern at StartupLab Business Center, 2026. |
| Academic project work | Existing projects and approved phase brief | Verified and reusable | Clearly distinguish from paid employment. |
| Personal project work | Existing projects and approved phase brief | Verified and reusable | Use as project experience, not employment. |

## Assets

| Item | Source | Classification | Notes |
| --- | --- | --- | --- |
| Font strategy README | `public/assets/fonts/README.md` | Verified and reusable | No font binaries are present. |
| Featured project screenshots | `public/assets/projects/` | Verified and reusable | Venora, FAHAD, and ResumeBridge now use supplied screenshots. Nightbank still uses a placeholder. |
| Resume asset | `public/assets/resume/jared-fahad-baquirin-resume.docx` | Verified and reusable | User supplied updated DOCX. |
| Favicon / social image | Not found | Missing | Later SEO phase. |
| Static celestial visual | This phase | Missing before implementation | Should be CSS/SVG decorative markup with no WebGL or animation. |

## Items To Remove Or Avoid

| Item | Source | Classification | Notes |
| --- | --- | --- | --- |
| Stray backticks | `index.html` | Should be removed from active surface | Preserved static file remains rollback source; Astro route should not reproduce it. |
| Missing `script.js` reference | `index.html` | Should be removed from active surface | Astro route should not request it. |
| Glitch duplicate text | `index.html`, `style.css` | Should be removed from active surface | Avoid duplicated accessible text and constant glitch animation. |
| External Google Fonts | `index.html` | Outdated | Current foundation uses local-first font stacks. |
| Neon pink/blue cyberpunk treatment | `style.css` | Outdated | Replace with graphite/electric-green KAISER SYSTEM presentation. |

## Current Content Gaps For Later Phases

- Venora deeper case-study evidence.
- FAHAD live demo status, measured performance or accuracy evidence if it exists.
- ResumeBridge live demo status and deeper case-study evidence.
- Awards or certificates if Jared wants them public.
- Dedicated case-study pages.
- Production-ready social preview images and favicon.
