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
    "GSAP is installed only for controlled motion; 3D, smooth-scroll, and extra animation libraries remain excluded."
  ]
};

export const approvedMotionDependencies = ["gsap"] as const;

export const prohibitedMotionDependencies = [
  "@gsap/react",
  "@react-three/drei",
  "@react-three/fiber",
  "animejs",
  "framer-motion",
  "lenis",
  "three"
] as const;
