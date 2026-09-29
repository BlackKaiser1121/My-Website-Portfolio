import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const caseStudies = [
  {
    slug: "venora",
    title: "Venora",
    repository: "https://github.com/Jassim3nidad/venora",
    live: "https://venora-web.vercel.app/",
    imageAlt: "Venora mobile venue listing screen showing Amorita Resort details",
    galleryImageAlts: [
      "Venora gallery image: Mobile venue discovery screen showing Amorita Resort details and venue metadata.",
      "Venora gallery image: Mobile landing screen with event category chips, value proposition, and venue search form.",
      "Venora gallery image: About section screen explaining Venora's venue, supplier, and booking marketplace purpose.",
      "Venora gallery image: Supplier discovery screen showing an accredited photography supplier, location, service metadata, and pricing."
    ]
  },
  {
    slug: "fahad",
    title: "FAHAD",
    repository: "https://github.com/BlackKaiser1121/FAHAD",
    live: undefined,
    imageAlt:
      "FAHAD mobile verification result screen showing a credibility score and fake classification",
    galleryImageAlts: [
      "FAHAD gallery image: Verification result interface showing a probability display, classification state, and save or discard actions."
    ]
  },
  {
    slug: "resumebridge",
    title: "ResumeBridge",
    repository: "https://github.com/BlackKaiser1121/ResumeBridge",
    live: undefined,
    imageAlt: "ResumeBridge AI Job Finder analyzer screen showing ranked job recommendations",
    galleryImageAlts: [
      "ResumeBridge gallery image: Analyzer screen showing AI-generated job recommendations and matching skills after resume review."
    ]
  }
];

const responsiveViewports = [
  { width: 1440, height: 1000 },
  { width: 768, height: 900 },
  { width: 390, height: 844 },
  { width: 320, height: 720 }
];

test.describe("Portfolio V2 case-study routes", () => {
  for (const caseStudy of caseStudies) {
    test(`${caseStudy.title} renders a dedicated accessible case-study page`, async ({ page }) => {
      await page.goto(`projects/${caseStudy.slug}/`);

      await expect(page.getByRole("heading", { level: 1, name: caseStudy.title })).toBeVisible();
      await expect(page.getByRole("heading", { level: 2, name: "Overview" })).toBeVisible();
      await expect(page.getByRole("main")).toHaveAttribute("id", "main");
      await expect(page.getByRole("navigation", { name: "Breadcrumb" })).toBeVisible();
      await expect(page.getByRole("link", { name: "Back to selected projects" })).toHaveAttribute(
        "href",
        "../../#projects"
      );
      await expect(
        page.getByRole("link", { name: `Open ${caseStudy.title} repository` })
      ).toHaveAttribute("href", caseStudy.repository);

      if (caseStudy.live) {
        await expect(
          page.getByRole("link", { name: `Open ${caseStudy.title} live demo` })
        ).toHaveAttribute("href", caseStudy.live);
      } else {
        await expect(
          page.getByRole("link", { name: `Open ${caseStudy.title} live demo` })
        ).toHaveCount(0);
      }

      await expect(page.getByRole("img", { name: caseStudy.imageAlt })).toBeVisible();
      await expect(page.locator(".project-gallery figure")).toHaveCount(
        caseStudy.galleryImageAlts.length
      );
      for (const galleryImageAlt of caseStudy.galleryImageAlts) {
        await expect(page.getByRole("img", { name: galleryImageAlt })).toBeVisible();
      }
      await expect(
        page.getByRole("figure", { name: new RegExp(`${caseStudy.title} architecture`, "i") })
      ).toBeVisible();
      await expect(page.getByTestId(`${caseStudy.slug}-architecture-text`)).toBeVisible();
      await expect(
        page.getByRole("link", { name: `Email Jared Baquirin about ${caseStudy.title}` })
      ).toHaveAttribute("href", "mailto:jared.baquirin112@gmail.com");

      const headings = await page.locator("h1, h2, h3, h4, h5, h6").evaluateAll((nodes) =>
        nodes.map((node) => {
          const style = window.getComputedStyle(node);
          const rect = node.getBoundingClientRect();

          return {
            level: Number(node.tagName.slice(1)),
            text: (node.textContent ?? "").trim(),
            visible:
              style.display !== "none" &&
              style.visibility !== "hidden" &&
              Number(style.opacity) > 0 &&
              rect.width > 0 &&
              rect.height > 0
          };
        })
      );
      const pageHeadings = headings.filter((heading) => heading.level === 1);

      expect(
        pageHeadings,
        `Expected exactly one <h1> on ${new URL(page.url()).pathname}; found ${JSON.stringify(pageHeadings)}`
      ).toHaveLength(1);
      for (let index = 1; index < headings.length; index++) {
        const current = headings[index]?.level;
        const previous = headings[index - 1]?.level;

        if (current === undefined || previous === undefined) {
          throw new Error("Expected adjacent headings to exist");
        }

        expect(current - previous).toBeLessThanOrEqual(1);
      }
    });

    test(`${caseStudy.title} has project-specific metadata`, async ({ page }) => {
      await page.goto(`projects/${caseStudy.slug}/`);

      await expect(page).toHaveTitle(`${caseStudy.title} Case Study - Jared Baquirin`);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `https://blackkaiser1121.github.io/My-Website-Portfolio/projects/${caseStudy.slug}/`
      );
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
        "content",
        `${caseStudy.title} Case Study - Jared Baquirin`
      );
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
        "content",
        new RegExp(`/My-Website-Portfolio/assets/projects/`)
      );
    });
  }

  test("homepage project preview links reach the published case studies", async ({ page }) => {
    await page.goto("./");

    for (const caseStudy of caseStudies) {
      const link = page.getByRole("link", { name: `Open ${caseStudy.title} case study` });
      await expect(link).toHaveAttribute("href", `./projects/${caseStudy.slug}/`);
    }

    await page.getByRole("link", { name: "Open FAHAD case study" }).click();
    await expect(page).toHaveURL(/\/projects\/fahad\/$/);
    await expect(page.getByRole("heading", { level: 1, name: "FAHAD" })).toBeVisible();
  });

  test("unknown project slugs use the static not-found state", async ({ page }) => {
    const response = await page.goto("projects/unknown-project/");

    expect(response?.status()).toBe(404);
  });

  test("previous and next project links follow the published project order", async ({ page }) => {
    await page.goto("projects/fahad/");

    await expect(page.getByRole("link", { name: "Previous project: Venora" })).toHaveAttribute(
      "href",
      "../venora/"
    );
    await expect(page.getByRole("link", { name: "Next project: ResumeBridge" })).toHaveAttribute(
      "href",
      "../resumebridge/"
    );
  });

  for (const caseStudy of caseStudies) {
    test(`${caseStudy.title} has no obvious automated accessibility violations`, async ({
      page
    }) => {
      await page.goto(`projects/${caseStudy.slug}/`);

      const results = await new AxeBuilder({ page }).analyze();

      expect(results.violations).toEqual([]);
    });
  }

  for (const viewport of responsiveViewports) {
    test(`case-study pages do not horizontally overflow at ${viewport.width}px`, async ({
      page
    }) => {
      await page.setViewportSize(viewport);

      for (const caseStudy of caseStudies) {
        await page.goto(`projects/${caseStudy.slug}/`);

        const hasHorizontalOverflow = await page.evaluate(
          () => document.documentElement.scrollWidth > document.documentElement.clientWidth
        );

        expect(hasHorizontalOverflow).toBe(false);
        await expect(page.getByRole("heading", { level: 1, name: caseStudy.title })).toBeVisible();
        await expect(page.getByRole("img", { name: caseStudy.imageAlt })).toBeVisible();
        await expect(page.getByRole("navigation", { name: "Project" })).toBeVisible();
      }
    });
  }
});
