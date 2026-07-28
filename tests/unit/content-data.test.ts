import { describe, expect, it } from "vitest";
import { architectureSummary, bannedFoundationDependencies } from "../../src/data/foundation";
import { profile } from "../../src/data/profile";
import { getSelectedProjects, portfolioProjects } from "../../src/data/projects";

describe("portfolio content data", () => {
  it("matches the approved Portfolio V2 foundation architecture", () => {
    expect(architectureSummary.framework).toBe("Astro");
    expect(architectureSummary.language).toBe("TypeScript");
    expect(architectureSummary.packageManager).toBe("pnpm");
    expect(architectureSummary.deploymentTarget).toBe("GitHub Pages");
    expect(architectureSummary.changeType).toBe("migration");
    expect(architectureSummary.preservesCurrentStaticFiles).toBe(true);
  });

  it("preserves verified identity and contact facts from the current static site", () => {
    expect(profile.name).toBe("Jared Baquirin");
    expect(profile.email).toBe("jaredfahad@gmail.com");
    expect(profile.phone).toBe("+63 9055460641");
    expect(profile.currentPositioning).toContain("Computer Science");
  });

  it("keeps selected project order ready for the future redesign without inventing details", () => {
    expect(getSelectedProjects().map((project) => project.slug)).toEqual([
      "fahad",
      "resumebridge",
      "nightbank-finance"
    ]);
  });

  it("preserves existing verified repository links", () => {
    const repositories = portfolioProjects.flatMap((project) =>
      project.links.map((link) => link.href)
    );

    expect(repositories).toContain("https://github.com/BlackKaiser1121/FAHAD");
    expect(repositories).toContain("https://github.com/BlackKaiser1121/ResumeBridge");
    expect(repositories).toContain("https://github.com/BlackKaiser1121/NightBank-Finance");
  });

  it("tracks missing assets and facts instead of inventing them", () => {
    expect(profile.missingContent).toContain("resume-file");
    expect(profile.missingContent).toContain("social-links");

    const projectsMissingScreenshots = portfolioProjects.filter((project) =>
      project.missingContent.includes("project-screenshot")
    );

    expect(projectsMissingScreenshots).toHaveLength(portfolioProjects.length);
  });

  it("keeps prohibited animation and 3D packages out of the foundation dependency list", () => {
    expect(bannedFoundationDependencies).toEqual([
      "@gsap/react",
      "@react-three/drei",
      "@react-three/fiber",
      "animejs",
      "framer-motion",
      "gsap",
      "lenis",
      "three"
    ]);
  });
});
