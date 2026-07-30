import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const viewports = [
  { width: 1680, height: 1000 },
  { width: 1440, height: 1000 },
  { width: 1024, height: 900 },
  { width: 768, height: 900 },
  { width: 390, height: 844 },
  { width: 320, height: 720 }
];

const requiredNavLinks = [
  "Profile",
  "Projects",
  "Architecture",
  "Capabilities",
  "Experience",
  "Contact"
];

const requiredHomepageSections = [
  "profile",
  "projects",
  "architecture",
  "capabilities",
  "experience",
  "education",
  "principles",
  "contact"
];

test.describe("Portfolio V2 foundation shell", () => {
  test("loads from the GitHub Pages base path with required landmarks", async ({ page }) => {
    await page.goto("./");

    await expect(page.getByRole("heading", { level: 1, name: "Jared Baquirin" })).toBeVisible();
    await expect(page.getByText("Full-Stack Developer - QA - UI/UX")).toBeVisible();
    await expect(page.getByRole("main")).toHaveAttribute("id", "main");
    await expect(page.getByRole("contentinfo")).toBeVisible();
  });

  test("renders every required static homepage section with valid navigation targets", async ({
    page
  }) => {
    await page.goto("./");

    for (const sectionId of requiredHomepageSections) {
      await expect(page.locator(`#${sectionId}`)).toBeVisible();
    }

    const hrefs = await page
      .getByRole("navigation", { name: "Primary" })
      .getByRole("link")
      .evaluateAll((links) =>
        links.flatMap((link) => {
          const href = link.getAttribute("href");
          return href?.startsWith("#") ? [href] : [];
        })
      );

    for (const href of hrefs) {
      await expect(page.locator(href)).toBeVisible();
    }
  });

  test("keeps the homepage heading hierarchy valid", async ({ page }) => {
    await page.goto("./");

    const headings = await page.locator("h1, h2, h3, h4, h5, h6").evaluateAll((nodes) =>
      nodes.map((node) => ({
        level: Number(node.tagName.replace("H", "")),
        text: node.textContent?.trim() ?? ""
      }))
    );

    expect(headings.filter((heading) => heading.level === 1)).toHaveLength(1);
    expect(headings[0]).toEqual({ level: 1, text: "Jared Baquirin" });

    for (let index = 1; index < headings.length; index++) {
      const current = headings[index];
      const previous = headings[index - 1];

      if (!current || !previous) {
        throw new Error("Expected adjacent headings to exist");
      }

      expect(current.level - previous.level).toBeLessThanOrEqual(1);
    }
  });

  test("provides a keyboard-accessible skip link and navigation", async ({ page }) => {
    await page.goto("./");

    const skipLink = page.getByRole("link", { name: "Skip to main content" });
    await expect(skipLink).toHaveAttribute("href", "#main");

    await page.keyboard.press("Tab");
    await expect(skipLink).toBeFocused();

    await page.keyboard.press("Enter");
    await expect(page.locator("#main")).toBeFocused();

    await page.goto("./");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Profile", exact: true })).toBeFocused();
  });

  test("renders desktop navigation with required anchors and current page state", async ({
    page
  }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto("./");

    const navigation = page.getByRole("navigation", { name: "Primary" });
    await expect(navigation).toBeVisible();
    await expect(navigation.getByRole("link", { name: "Jared Baquirin" })).toHaveAttribute(
      "aria-current",
      "page"
    );

    for (const linkName of requiredNavLinks) {
      await expect(navigation.getByRole("link", { name: linkName })).toBeVisible();
    }
  });

  test("moves keyboard focus through every desktop navigation link", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto("./");
    const navigation = page.getByRole("navigation", { name: "Primary" });

    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Skip to main content" })).toBeFocused();

    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Jared Baquirin", exact: true })).toBeFocused();

    for (const linkName of requiredNavLinks) {
      await page.keyboard.press("Tab");
      await expect(navigation.getByRole("link", { name: linkName, exact: true })).toBeFocused();
    }
  });

  test("opens and closes the mobile navigation accessibly", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("./");

    const trigger = page.getByRole("button", { name: "Open navigation" });
    await expect(trigger).toHaveAttribute("aria-expanded", "false");

    await trigger.click();
    await expect(page.getByRole("button", { name: "Close navigation" })).toHaveAttribute(
      "aria-expanded",
      "true"
    );
    await expect(page.getByRole("link", { name: "Capabilities" })).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Open navigation" })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    await expect(page.getByRole("button", { name: "Open navigation" })).toBeFocused();
  });

  test("closes the mobile navigation after selecting an anchor link", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("./");

    await page.getByRole("button", { name: "Open navigation" }).click();
    await page
      .getByRole("navigation", { name: "Primary" })
      .getByRole("link", { name: "Contact", exact: true })
      .click();

    await expect(page.getByRole("button", { name: "Open navigation" })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    await expect(page.locator("#contact")).toBeFocused();
  });

  test("hero call to action reaches selected projects", async ({ page }) => {
    await page.goto("./");

    await page.getByRole("link", { name: "View Selected Projects" }).click();

    await expect(page.locator("#projects")).toBeInViewport();
    await expect(
      page.getByRole("heading", { level: 2, name: "Selected Project Previews" })
    ).toBeVisible();
  });

  test("renders featured project previews without broken unavailable links", async ({ page }) => {
    await page.goto("./");

    await expect(page.getByRole("heading", { name: "Venora" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "FAHAD" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "ResumeBridge" })).toBeVisible();
    await expect(
      page.getByRole("img", {
        name: "Venora mobile venue listing screen showing Amorita Resort details"
      })
    ).toHaveAttribute("src", "assets/projects/venora-venue-listing.png");
    await expect(
      page.getByRole("img", {
        name: "FAHAD mobile verification result screen showing a credibility score and fake classification"
      })
    ).toHaveAttribute("src", "assets/projects/fahad-verification-result.png");
    await expect(
      page.getByRole("img", {
        name: "ResumeBridge AI Job Finder analyzer screen showing ranked job recommendations"
      })
    ).toHaveAttribute("src", "assets/projects/resumebridge-ai-job-finder.png");

    await expect(page.getByRole("list", { name: "Venora technologies" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Open Venora repository" })).toHaveAttribute(
      "href",
      "https://github.com/Jassim3nidad/venora"
    );
    await expect(page.getByRole("link", { name: "Open Venora live demo" })).toHaveAttribute(
      "href",
      "https://venora-web.vercel.app/"
    );
    await expect(page.getByRole("link", { name: "Open FAHAD repository" })).toHaveAttribute(
      "href",
      "https://github.com/BlackKaiser1121/FAHAD"
    );
    await expect(page.getByRole("link", { name: "Open ResumeBridge repository" })).toHaveAttribute(
      "href",
      "https://github.com/BlackKaiser1121/ResumeBridge"
    );
    await expect(page.getByRole("link", { name: "Open Venora case study" })).toHaveAttribute(
      "href",
      "./projects/venora/"
    );
    await expect(page.getByRole("link", { name: "Open FAHAD case study" })).toHaveAttribute(
      "href",
      "./projects/fahad/"
    );
    await expect(page.getByRole("link", { name: "Open ResumeBridge case study" })).toHaveAttribute(
      "href",
      "./projects/resumebridge/"
    );
    const loadedProjectImages = await page
      .locator(".project-preview__visual--asset img")
      .evaluateAll((images) =>
        images.map((image) => ({
          src: image.getAttribute("src"),
          naturalWidth: (image as HTMLImageElement).naturalWidth,
          naturalHeight: (image as HTMLImageElement).naturalHeight
        }))
      );

    expect(loadedProjectImages).toEqual([
      expect.objectContaining({
        src: "assets/projects/venora-venue-listing.png",
        naturalWidth: expect.any(Number),
        naturalHeight: expect.any(Number)
      }),
      expect.objectContaining({
        src: "assets/projects/fahad-verification-result.png",
        naturalWidth: expect.any(Number),
        naturalHeight: expect.any(Number)
      }),
      expect.objectContaining({
        src: "assets/projects/resumebridge-ai-job-finder.png",
        naturalWidth: expect.any(Number),
        naturalHeight: expect.any(Number)
      })
    ]);
    for (const image of loadedProjectImages) {
      expect(image.naturalWidth).toBeGreaterThan(0);
      expect(image.naturalHeight).toBeGreaterThan(0);
    }
    const assetImagesCoverFrameCenters = await page
      .locator(".project-preview__visual--asset")
      .evaluateAll((visuals) =>
        visuals.map((visual) => {
          const visualBounds = visual.getBoundingClientRect();
          const imageBounds = visual.querySelector("img")?.getBoundingClientRect();
          const centerX = visualBounds.left + visualBounds.width / 2;
          const centerY = visualBounds.top + visualBounds.height / 2;

          return Boolean(
            imageBounds &&
            imageBounds.left <= centerX &&
            imageBounds.right >= centerX &&
            imageBounds.top <= centerY &&
            imageBounds.bottom >= centerY
          );
        })
      );

    expect(assetImagesCoverFrameCenters).toEqual([true, true, true]);
    await expect(page.getByRole("link", { name: "Open ResumeBridge live demo" })).toHaveCount(0);
    await expect(page.getByText("Case study not available yet")).toHaveCount(0);
  });

  test("renders the static planet as decorative fallback content", async ({ page }) => {
    await page.goto("./");

    const planet = page.locator('[data-portfolio-visual="static-planet"]');
    await expect(planet).toHaveAttribute("aria-hidden", "true");
    await expect(planet).toBeVisible();
    await expect(page.getByRole("heading", { level: 1, name: "Jared Baquirin" })).toBeVisible();
  });

  test("renders architecture, principles, and contact content from verified data", async ({
    page
  }) => {
    await page.goto("./");

    await expect(page.getByText("On-device verification flow")).toBeVisible();
    await expect(page.getByText("Privacy-aware implementation")).toBeVisible();
    await expect(
      page.locator("#contact").getByRole("link", { name: "Email Jared Baquirin" })
    ).toHaveAttribute("href", "mailto:jared.baquirin112@gmail.com");
    await expect(
      page.getByRole("link", { name: "Open Jared Baquirin GitHub profile" })
    ).toHaveAttribute("href", "https://github.com/BlackKaiser1121");
    await expect(
      page.getByRole("link", { name: "Open Jared Baquirin LinkedIn profile" })
    ).toHaveAttribute("href", "https://www.linkedin.com/in/jared-baquirin-32679a384/");
    await expect(
      page.getByRole("link", { name: "Download Jared Baquirin resume" })
    ).toHaveAttribute("href", "assets/resume/jared-fahad-baquirin-resume.docx");
  });

  test("honors reduced-motion preferences in the global shell", async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: "reduce" });
    const page = await context.newPage();

    await page.goto("./");

    const rootDuration = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue("--duration-standard").trim()
    );

    expect(rootDuration).toBe("0ms");

    await context.close();
  });

  test("has no obvious automated accessibility violations", async ({ page }) => {
    await page.goto("./");

    const results = await new AxeBuilder({ page }).analyze();

    expect(results.violations).toEqual([]);
  });

  test("references a favicon asset under the GitHub Pages base path", async ({ page }) => {
    await page.goto("./");

    await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
      "href",
      "/My-Website-Portfolio/favicon.svg"
    );
  });

  for (const viewport of viewports) {
    test(`does not horizontally overflow at ${viewport.width}px`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto("./");

      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth
      );

      expect(hasHorizontalOverflow).toBe(false);

      await expect(page.getByRole("heading", { level: 1, name: "Jared Baquirin" })).toBeVisible();
      await expect(page.locator('[data-portfolio-visual="static-planet"]')).toBeVisible();
      await expect(page.getByRole("heading", { name: "Selected Project Previews" })).toBeVisible();
    });
  }
});
