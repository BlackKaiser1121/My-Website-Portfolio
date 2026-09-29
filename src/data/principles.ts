import type { DevelopmentPrinciple } from "../types/portfolio";

export const developmentPrinciples: readonly DevelopmentPrinciple[] = [
  {
    id: "user-focused-design",
    title: "User-focused design",
    explanation:
      "Shape features around the decisions users need to make, then keep the interface readable across devices.",
    evidence: "Venora discovery flows and ResumeBridge feedback screens"
  },
  {
    id: "privacy-aware-implementation",
    title: "Privacy-aware implementation",
    explanation:
      "Keep sensitive workflows local when the product allows it, and avoid unnecessary network dependency.",
    evidence: "FAHAD on-device inference and local encrypted history"
  },
  {
    id: "quality-before-polish",
    title: "Quality before polish",
    explanation:
      "Treat testing, black-box review, accessibility, and broken-link checks as part of the product surface.",
    evidence: "Portfolio V2 lint, type-check, unit, end-to-end, and axe validation"
  },
  {
    id: "maintainable-architecture",
    title: "Maintainable architecture",
    explanation:
      "Separate content, layout, and behavior so project facts can improve without rewriting the whole page.",
    evidence: "Astro, TypeScript data modules, and static-first Portfolio V2 structure"
  },
  {
    id: "responsible-ai-use",
    title: "Responsible AI use",
    explanation:
      "Present AI outputs as decision support and avoid unsupported accuracy or adoption claims.",
    evidence: "FAHAD classification states and ResumeBridge compatibility feedback"
  }
];
