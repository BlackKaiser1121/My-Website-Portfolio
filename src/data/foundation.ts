export interface ArchitectureSummary {
  framework: string;
  language: string;
  packageManager: string;
  deploymentTarget: string;
  changeType: "migration" | "upgrade";
  preservesCurrentStaticFiles: boolean;
  notes: readonly string[];
}

export const architectureSummary: ArchitectureSummary = {
  framework: "Astro",
  language: "TypeScript",
  packageManager: "pnpm",
  deploymentTarget: "GitHub Pages",
  changeType: "migration",
  preservesCurrentStaticFiles: true,
  notes: [
    "Current static index.html and style.css stay in place until the Astro replacement builds.",
    "Astro is configured for static output and the /My-Website-Portfolio base path.",
    "No animation, 3D, or scroll libraries are part of this foundation phase."
  ]
};

export const bannedFoundationDependencies = [
  "@gsap/react",
  "@react-three/drei",
  "@react-three/fiber",
  "animejs",
  "framer-motion",
  "gsap",
  "lenis",
  "three"
] as const;
