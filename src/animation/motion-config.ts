export const motionDurations = {
  instant: 0,
  fast: 0.12,
  standard: 0.18,
  reveal: 0.42,
  cinematic: 0.76,
  ambient: 32,
  reduced: 0
} as const;

export const motionEase = {
  standard: "power2.out",
  emphasized: "power3.out",
  exit: "power2.in"
} as const;

export const motionSelectors = {
  hero: "[data-motion-hero]",
  heroItem: "[data-motion-hero-item]",
  heroVisual: "[data-motion-hero-visual]",
  initialization: "[data-init-sequence]",
  planet: "[data-motion-planet]",
  section: "[data-motion-section]",
  projectPreview: "[data-motion-project-preview]",
  projectVisual: "[data-motion-project-visual]",
  projectTech: "[data-motion-project-tech] li",
  architecture: "[data-motion-architecture]",
  architectureNode: "[data-motion-architecture-node]",
  caseStudy: "[data-motion-case-study]",
  caseStudyHero: "[data-motion-case-study-hero]",
  caseStudyContent: "[data-motion-case-study-content]",
  caseStudySection: "[data-motion-case-study-section]",
  caseStudySupport: "[data-motion-case-study-support]",
  caseStudyVisual: "[data-motion-case-study-visual]"
} as const;
