import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const packageJson = JSON.parse(readFileSync("package.json", "utf8")) as {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
};

function readFile(path: string): string {
  if (!existsSync(path)) {
    throw new Error(`Missing expected file: ${path}`);
  }

  return readFileSync(path, "utf8");
}

describe("controlled motion system", () => {
  it("installs only the approved GSAP dependency for this Astro project", () => {
    expect(packageJson.dependencies).toEqual({ gsap: "^3.15.0" });
    expect(packageJson.dependencies).not.toHaveProperty("@gsap/react");
    expect(packageJson.dependencies).not.toHaveProperty("three");
    expect(packageJson.dependencies).not.toHaveProperty("@react-three/fiber");
    expect(packageJson.dependencies).not.toHaveProperty("@react-three/drei");
    expect(packageJson.dependencies).not.toHaveProperty("lenis");
    expect(packageJson.dependencies).not.toHaveProperty("framer-motion");
    expect(packageJson.dependencies).not.toHaveProperty("animejs");
  });

  it("centralizes GSAP setup and shared motion utilities", () => {
    const gsapSetup = readFile("src/animation/gsap.ts");
    const motionConfig = readFile("src/animation/motion-config.ts");
    const reducedMotion = readFile("src/animation/reduced-motion.ts");
    const reveal = readFile("src/animation/reveal.ts");
    const motionScript = readFile("src/scripts/motion.ts");

    expect(gsapSetup).toContain("gsap.registerPlugin(ScrollTrigger)");
    expect(gsapSetup).toContain("ensureGsapPlugins");
    expect(motionConfig).toContain("motionDurations");
    expect(motionConfig).toContain("motionEase");
    expect(reducedMotion).toContain("createMotionPreference");
    expect(reveal).toContain("initMotionReveals");
    expect(motionScript).toContain("initPortfolioMotion");
  });

  it("loads the motion script from the shared page shell", () => {
    const pageShell = readFile("src/components/layout/PageShell.astro");

    expect(pageShell).toContain('import "../../scripts/motion"');
  });

  it("marks homepage, project, architecture, and case-study surfaces for scoped motion", () => {
    const hero = readFile("src/components/hero/HeroSection.astro");
    const planet = readFile("src/components/hero/StaticPlanet.astro");
    const sectionShell = readFile("src/components/layout/SectionShell.astro");
    const projectPreview = readFile("src/components/projects/ProjectPreview.astro");
    const architecture = readFile("src/components/architecture/ArchitectureDiagram.astro");
    const caseStudyLayout = readFile("src/components/projects/CaseStudyLayout.astro");

    expect(hero).toContain("data-motion-hero");
    expect(planet).toContain("data-motion-planet");
    expect(planet).toContain("data-motion-planet-orb");
    expect(sectionShell).toContain("data-motion-section");
    expect(projectPreview).toContain("data-motion-project-preview");
    expect(architecture).toContain("data-motion-architecture");
    expect(caseStudyLayout).toContain("data-motion-case-study");
  });
});
