import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { capabilityGroups } from "../../src/data/capabilities";
import { contactChannels, missingContactLinks } from "../../src/data/contact";
import { educationEntries } from "../../src/data/education";
import { experienceEntries } from "../../src/data/experience";
import { architectureSummary, bannedFoundationDependencies } from "../../src/data/foundation";
import { navigationItems } from "../../src/data/navigation";
import { developmentPrinciples } from "../../src/data/principles";
import { profile } from "../../src/data/profile";
import {
  caseStudySlugs,
  getCaseStudyBySlug,
  getCaseStudyNavigation,
  getPublishedCaseStudies,
  validateCaseStudyContent
} from "../../src/data/case-studies";
import {
  getFeaturedProjects,
  portfolioProjects,
  validatePortfolioContent
} from "../../src/data/projects";

describe("portfolio content data", () => {
  it("matches the approved Portfolio V2 foundation architecture", () => {
    expect(architectureSummary.framework).toBe("Astro");
    expect(architectureSummary.language).toBe("TypeScript");
    expect(architectureSummary.packageManager).toBe("pnpm");
    expect(architectureSummary.deploymentTarget).toBe("GitHub Pages");
    expect(architectureSummary.changeType).toBe("migration");
    expect(architectureSummary.preservesCurrentStaticFiles).toBe(true);
  });

  it("preserves verified identity and contact facts from current sources", () => {
    expect(profile.name).toBe("Jared Baquirin");
    expect(profile.professionalRole).toBe("Full-Stack Developer - QA - UI/UX");
    expect(profile.email).toBe("jared.baquirin112@gmail.com");
    expect(profile.phone).toBe("+63 9055460641");
    expect(profile.location).toBe("Cavite, Philippines");
    expect(profile.currentPositioning).toContain("Computer Science");
  });

  it("features the approved static homepage projects in priority order", () => {
    expect(getFeaturedProjects().map((project) => project.slug)).toEqual([
      "venora",
      "fahad",
      "resumebridge"
    ]);
  });

  it("keeps project identifiers unique and required homepage fields populated", () => {
    const ids = new Set(portfolioProjects.map((project) => project.id));
    const slugs = new Set(portfolioProjects.map((project) => project.slug));

    expect(ids.size).toBe(portfolioProjects.length);
    expect(slugs.size).toBe(portfolioProjects.length);

    for (const project of portfolioProjects) {
      expect(project.title).not.toBe("");
      expect(project.shortTitle).not.toBe("");
      expect(project.summary).not.toBe("");
      expect(project.description).not.toBe("");
      expect(project.year).not.toBe("");
      expect(project.role).not.toBe("");
      expect(project.responsibilities.length).toBeGreaterThan(0);
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.accessibilityLabel).not.toBe("");
      expect(project.caseStudySections.length).toBeGreaterThan(0);
    }
  });

  it("preserves verified project repository and deployment links", () => {
    const repositories = portfolioProjects.flatMap((project) =>
      project.repositoryUrl ? [project.repositoryUrl] : []
    );
    const fahad = portfolioProjects.find((project) => project.slug === "fahad");
    const resumeBridge = portfolioProjects.find((project) => project.slug === "resumebridge");

    expect(repositories).toContain("https://github.com/Jassim3nidad/venora");
    expect(repositories).toContain("https://github.com/BlackKaiser1121/FAHAD");
    expect(repositories).toContain("https://github.com/BlackKaiser1121/ResumeBridge");
    expect(repositories).toContain("https://github.com/BlackKaiser1121/NightBank-Finance");
    expect(portfolioProjects.find((project) => project.slug === "venora")?.liveUrl).toBe(
      "https://venora-web.vercel.app/"
    );
    expect(fahad?.liveUrl).toBeUndefined();
    expect(fahad?.missingContent).not.toContain("live-url");
    expect(resumeBridge?.liveUrl).toBeUndefined();
    expect(resumeBridge?.missingContent).toEqual(["live-url", "system-fixes"]);
  });

  it("tracks missing assets and facts instead of inventing them", () => {
    expect(profile.missingContent).not.toContain("resume-file");
    expect(profile.missingContent).not.toContain("social-links");

    const projectsMissingScreenshots = portfolioProjects.filter(
      (project) => project.screenshots.length === 0
    );

    expect(projectsMissingScreenshots.map((project) => project.slug)).toEqual([
      "nightbank-finance"
    ]);
  });

  it("connects the supplied FAHAD screenshot to its project content", () => {
    const fahad = portfolioProjects.find((project) => project.slug === "fahad");
    const screenshotPath = new URL(
      "../../public/assets/projects/fahad-verification-result.png",
      import.meta.url
    );

    expect(fahad?.thumbnail).toEqual({
      kind: "asset",
      src: "assets/projects/fahad-verification-result.png",
      alt: "FAHAD mobile verification result screen showing a credibility score and fake classification",
      width: 720,
      height: 1544
    });
    expect(fahad?.screenshots).toEqual([fahad?.thumbnail]);
    expect(fahad?.missingContent).not.toContain("project-screenshots");
    expect(existsSync(screenshotPath)).toBe(true);
  });

  it("connects the supplied Venora screenshot to its project content", () => {
    const venora = portfolioProjects.find((project) => project.slug === "venora");
    const expectedScreenshots = [
      {
        kind: "asset" as const,
        src: "assets/projects/venora-venue-listing.png",
        alt: "Venora mobile venue listing screen showing Amorita Resort details",
        width: 910,
        height: 1607
      },
      {
        kind: "asset" as const,
        src: "assets/projects/venora-home-search.png",
        alt: "Venora mobile homepage search screen with event category chips and venue search form",
        width: 902,
        height: 1577
      },
      {
        kind: "asset" as const,
        src: "assets/projects/venora-about-overview.png",
        alt: "Venora mobile about screen explaining the event marketplace",
        width: 902,
        height: 1592
      },
      {
        kind: "asset" as const,
        src: "assets/projects/venora-supplier-listing.png",
        alt: "Venora mobile supplier listing screen showing Sai's Photography supplier details",
        width: 902,
        height: 1510
      }
    ];

    expect(venora?.thumbnail).toEqual({
      kind: "asset",
      src: "assets/projects/venora-venue-listing.png",
      alt: "Venora mobile venue listing screen showing Amorita Resort details",
      width: 910,
      height: 1607
    });
    expect(venora?.screenshots).toEqual(expectedScreenshots);
    expect(venora?.missingContent).not.toContain("project-screenshots");

    for (const screenshot of expectedScreenshots) {
      const screenshotPath = new URL(`../../public/${screenshot.src}`, import.meta.url);

      expect(existsSync(screenshotPath)).toBe(true);
    }
  });

  it("connects the supplied ResumeBridge screenshot to its project content", () => {
    const resumeBridge = portfolioProjects.find((project) => project.slug === "resumebridge");
    const screenshotPath = new URL(
      "../../public/assets/projects/resumebridge-ai-job-finder.png",
      import.meta.url
    );

    expect(resumeBridge?.thumbnail).toEqual({
      kind: "asset",
      src: "assets/projects/resumebridge-ai-job-finder.png",
      alt: "ResumeBridge AI Job Finder analyzer screen showing ranked job recommendations",
      width: 1896,
      height: 927
    });
    expect(resumeBridge?.screenshots).toEqual([resumeBridge?.thumbnail]);
    expect(resumeBridge?.missingContent).not.toContain("project-screenshots");
    expect(existsSync(screenshotPath)).toBe(true);
  });

  it("publishes verified portfolio contact channels and the downloadable resume asset", () => {
    const contactUrls = contactChannels.map((channel) => channel.url);
    const resumePath = new URL(
      "../../public/assets/resume/jared-fahad-baquirin-resume.docx",
      import.meta.url
    );

    expect(contactUrls).toContain("https://github.com/BlackKaiser1121");
    expect(contactUrls).toContain("https://www.linkedin.com/in/jared-baquirin-32679a384/");
    expect(contactUrls).toContain("assets/resume/jared-fahad-baquirin-resume.docx");
    expect(missingContactLinks).toEqual([]);
    expect(existsSync(resumePath)).toBe(true);
  });

  it("validates content constraints without needing a schema dependency", () => {
    expect(validatePortfolioContent().errors).toEqual([]);
  });

  it("centralizes navigation, contact, capability, experience, education, and principle content", () => {
    expect(navigationItems.map((item) => item.href)).toEqual([
      "#profile",
      "#projects",
      "#architecture",
      "#capabilities",
      "#experience",
      "#contact"
    ]);

    expect(
      contactChannels.some((channel) => channel.url === "mailto:jared.baquirin112@gmail.com")
    ).toBe(true);
    expect(capabilityGroups.length).toBeGreaterThanOrEqual(4);
    expect(experienceEntries.some((entry) => entry.kind === "academic-project")).toBe(true);
    expect(educationEntries[0]?.summary).toContain("Computer Science");
    expect(developmentPrinciples.length).toBeGreaterThanOrEqual(4);
  });

  it("keeps renderable external URLs valid and omits missing links", () => {
    const urls = [
      ...portfolioProjects.flatMap((project) =>
        [project.repositoryUrl, project.liveUrl].filter((url): url is string => Boolean(url))
      ),
      ...contactChannels.map((channel) => channel.url)
    ];

    for (const url of urls) {
      expect(url).toMatch(/^(https:\/\/|mailto:|tel:|assets\/)/);
      expect(url).not.toBe("");
    }
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

  it("publishes reusable case studies for the approved project routes only", () => {
    expect(caseStudySlugs).toEqual(["venora", "fahad", "resumebridge"]);
    expect(getPublishedCaseStudies().map((caseStudy) => caseStudy.slug)).toEqual(caseStudySlugs);
    expect(getCaseStudyBySlug("nightbank-finance")).toBeUndefined();
  });

  it("validates case-study content contracts and unique section IDs", () => {
    const validation = validateCaseStudyContent();

    expect(validation.errors).toEqual([]);
    expect(validation.warnings).toEqual([]);

    for (const caseStudy of getPublishedCaseStudies()) {
      const sectionIds = [
        caseStudy.overview.id,
        caseStudy.problem?.id,
        caseStudy.users?.id,
        caseStudy.goals?.id,
        caseStudy.constraints?.id,
        caseStudy.responsibilities?.id,
        caseStudy.security?.id,
        caseStudy.dataPrivacy?.id,
        caseStudy.ux?.id,
        caseStudy.qa?.id,
        caseStudy.results?.id,
        caseStudy.performance?.id,
        caseStudy.lessons?.id,
        caseStudy.futureWork?.id,
        ...caseStudy.features.map((section) => section.id),
        ...caseStudy.challenges.map((section) => section.id),
        ...caseStudy.solutions.map((section) => section.id),
        ...caseStudy.tradeOffs.map((section) => section.id)
      ].filter((sectionId): sectionId is string => Boolean(sectionId));

      expect(new Set(sectionIds).size).toBe(sectionIds.length);
      expect(caseStudy.title).not.toBe("");
      expect(caseStudy.summary).not.toBe("");
      expect(caseStudy.role.length).toBeGreaterThan(0);
      expect(caseStudy.technologies.length).toBeGreaterThan(0);
      expect(caseStudy.screenshots.length).toBeGreaterThan(0);
      expect(caseStudy.seo.title).toContain(caseStudy.title);
      expect(caseStudy.seo.description).not.toBe(portfolioProjects[0]?.description);
    }
  });

  it("generates previous and next project navigation from published ordering", () => {
    expect(getCaseStudyNavigation("venora")).toEqual({
      previous: undefined,
      next: expect.objectContaining({ slug: "fahad", title: "FAHAD" })
    });
    expect(getCaseStudyNavigation("fahad")).toEqual({
      previous: expect.objectContaining({ slug: "venora", title: "Venora" }),
      next: expect.objectContaining({ slug: "resumebridge", title: "ResumeBridge" })
    });
    expect(getCaseStudyNavigation("resumebridge")).toEqual({
      previous: expect.objectContaining({ slug: "fahad", title: "FAHAD" }),
      next: undefined
    });
  });

  it("distinguishes targets, verified results, and missing outcomes in case studies", () => {
    const fahad = getCaseStudyBySlug("fahad");
    const resumeBridge = getCaseStudyBySlug("resumebridge");
    const venora = getCaseStudyBySlug("venora");

    expect(fahad?.performance?.title).toBe("Performance and model evidence");
    expect(fahad?.performance?.bullets).toContain(
      "No measured accuracy, benchmark, or production performance result is verified in the portfolio sources."
    );
    expect(resumeBridge?.liveUrl).toBeUndefined();
    expect(resumeBridge?.results?.bullets).toContain(
      "No live deployment link, scoring accuracy, employer usage, or adoption metric is verified."
    );
    expect(resumeBridge?.futureWork?.bullets).toContain(
      "Fix the known system issues before presenting ResumeBridge as a stable public deployment."
    );
    expect(fahad?.results?.bullets).toContain(
      "No web deployment link is expected because FAHAD is an Android application."
    );
    expect(venora?.results?.bullets).toContain(
      "A public deployment link is verified, but no user, revenue, traffic, or conversion results are verified."
    );
  });
});
