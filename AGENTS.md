# Repository Operating Guide

## Project Purpose

This repository contains the professional Portfolio V2 website for Jared Baquirin. The selected identity is **KAISER SYSTEM - Celestial Developer Interface**: a cinematic, space-holographic developer portfolio with electric green accents, graphite surfaces, semantic content, and restrained tactical interface details.

## Source Of Truth

Read these files before planning or implementing Portfolio V2 work:

- `C:\Users\ranib\My-Website-Portfolio\docs\portfolio-v2\current-state-audit.md`
- `C:\Users\ranib\My-Website-Portfolio\docs\portfolio-v2\proposed-architecture.md`
- `C:\Users\ranib\My-Website-Portfolio\docs\portfolio-v2\design-specification.md`
- `C:\Users\ranib\My-Website-Portfolio\docs\portfolio-v2\implementation-plan.md`

## Repository Commands

The current repository has no `package.json`, no package scripts, and no build configuration. Do not invent commands until the selected architecture setup phase creates them.

| Purpose | Current verified command |
| --- | --- |
| Installation | No repository-defined install command exists. |
| Development | No repository-defined development command exists. |
| Linting | No repository-defined lint command exists. |
| Type checking | No repository-defined type-check command exists. |
| Testing | No repository-defined test command exists. |
| Production build | No repository-defined build command exists. |
| Preview | No repository-defined preview command exists. |

Verified inspection commands:

- `rg --files`
- `git status --short`
- `git diff --stat`

## Coding Rules

- Use strict TypeScript once the selected Astro architecture is introduced.
- Prefer small components with one responsibility.
- Keep content separate from presentation where practical.
- Do not place an entire page in one oversized component.
- Preserve semantic HTML and real document landmarks.
- Maintain keyboard accessibility and visible focus states.
- Every meaningful animation must support `prefers-reduced-motion`.
- Essential content must remain usable without animation, JavaScript, canvas, or WebGL.
- Do not add dependencies without documenting their purpose.
- Do not add multiple libraries for the same animation responsibility.
- Do not use fake statistics or skill-percentage progress bars.
- Do not invent professional experience, project metrics, links, or outcomes.
- Do not copy code, branding, text, or assets from inspiration websites.
- Do not autoplay audio.
- Do not implement scroll hijacking.
- Avoid unnecessary client-side components.
- Optimize images and fonts before launch.
- Keep the mobile version functionally complete.
- Run all available validation commands before claiming completion.

## Change Discipline

- Work in small independently testable phases.
- Inspect files before modifying them.
- Preserve unrelated user changes.
- Do not delete content without a written justification.
- Summarize modified files after every task.
- Report failed checks honestly.
- Use focused commits.
- Do not proceed to the next phase when the current phase does not build.
