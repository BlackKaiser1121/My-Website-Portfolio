import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const basePath = "/My-Website-Portfolio";
const publicOrigin = "https://blackkaiser1121.github.io";
const routes = ["/", "/projects/venora/", "/projects/fahad/", "/projects/resumebridge/"];

test.describe("production readiness", () => {
  test("publishes only the intended canonical routes in the sitemap", async ({ request }) => {
    const response = await request.get(`${basePath}/sitemap.xml`);
    expect(response.ok()).toBe(true);
    expect(response.headers()["content-type"]).toContain("xml");

    const xml = await response.text();
    const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
    expect(locations).toEqual(routes.map((route) => `${publicOrigin}${basePath}${route}`));
  });

  test("project-path robots file has no disallow and references the sitemap", async ({
    request
  }) => {
    const response = await request.get(`${basePath}/robots.txt`);
    expect(response.ok()).toBe(true);

    const robots = await response.text();
    expect(robots).toContain("User-agent: *");
    expect(robots).not.toContain("Disallow: /");
    expect(robots).toContain(`Sitemap: ${publicOrigin}${basePath}/sitemap.xml`);
  });

  for (const route of routes) {
    test(`${route} has complete, unique metadata and valid JSON-LD`, async ({ page }) => {
      await page.goto(`${basePath}${route}`);

      const title = await page.title();
      const description = await page.locator('meta[name="description"]').getAttribute("content");
      expect(title.length).toBeGreaterThan(20);
      expect(description?.length).toBeGreaterThan(40);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `${publicOrigin}${basePath}${route}`
      );
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", title);
      await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
        "content",
        description ?? ""
      );
      const ogImage = await page.locator('meta[property="og:image"]').getAttribute("content");
      expect(ogImage).toMatch(new RegExp(`^${publicOrigin}${basePath}/`));
      expect((await page.request.get(new URL(ogImage ?? "").pathname)).ok()).toBe(true);
      await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
        "content",
        ogImage ?? ""
      );

      const scripts = await page.locator('script[type="application/ld+json"]').allTextContents();
      expect(scripts).toHaveLength(1);
      const structuredData: unknown = JSON.parse(scripts[0] ?? "");
      const entries = Array.isArray(structuredData) ? structuredData : [structuredData];
      for (const entry of entries) {
        expect(entry["@context"]).toBe("https://schema.org");
      }
    });
  }

  test("unknown routes return a useful static 404", async ({ page }) => {
    const response = await page.goto(`${basePath}/projects/unknown-project/`);
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1, name: "Page not found" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Return home" })).toHaveAttribute(
      "href",
      `${basePath}/`
    );
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex");
  });

  test("homepage and case studies retain essential content without JavaScript", async ({
    browser
  }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 390, height: 844 }
    });
    const page = await context.newPage();

    await page.goto(`${basePath}/`);
    await expect(page.getByRole("heading", { level: 1, name: "Jared Baquirin" })).toBeVisible();
    await expect(
      page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Projects" })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Open Venora case study" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Email Jared Baquirin" }).first()).toBeVisible();
    await expect(page.locator('[data-portfolio-visual="static-planet"]')).toBeVisible();

    await page.getByRole("link", { name: "Open Venora case study" }).click();
    await expect(page.getByRole("heading", { level: 1, name: "Venora" })).toBeVisible();
    for (const [slug, title] of [
      ["fahad", "FAHAD"],
      ["resumebridge", "ResumeBridge"]
    ] as const) {
      await page.goto(`${basePath}/projects/${slug}/`);
      await expect(page.getByRole("heading", { level: 1, name: title })).toBeVisible();
      await expect(page.getByRole("navigation", { name: "Project" })).toBeVisible();
    }
    await context.close();
  });

  test("mobile menu and reduced-motion state pass axe", async ({ browser }) => {
    const context = await browser.newContext({
      reducedMotion: "reduce",
      viewport: { width: 390, height: 844 }
    });
    const page = await context.newPage();

    await page.goto(`${basePath}/`);
    await page.getByRole("button", { name: "Open navigation" }).click();
    await expect(page.getByRole("button", { name: "Close navigation" })).toBeVisible();
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
    await context.close();
  });

  test("all local links resolve and external new-tab links are isolated", async ({ page }) => {
    const destinations = new Set<string>();

    for (const route of routes) {
      await page.goto(`${basePath}${route}`);
      const links = await page.locator("a[href]").evaluateAll((elements) =>
        elements.map((element) => ({
          href: element.getAttribute("href") ?? "",
          target: element.getAttribute("target"),
          rel: element.getAttribute("rel")
        }))
      );

      for (const link of links) {
        expect(link.href.trim()).not.toBe("");
        if (link.target === "_blank") {
          expect(link.rel).toContain("noopener");
          expect(link.rel).toContain("noreferrer");
        }

        const url = new URL(link.href, page.url());
        if (url.origin === new URL(page.url()).origin) {
          destinations.add(url.href);
        }
      }
    }

    for (const destination of destinations) {
      const url = new URL(destination);
      const response = await page.request.get(url.pathname);
      expect(response.ok(), `Broken local link: ${destination}`).toBe(true);

      if (url.hash) {
        const html = await response.text();
        const targetExists = await page.evaluate(
          ({ html, id }) =>
            Boolean(new DOMParser().parseFromString(html, "text/html").getElementById(id)),
          { html, id: decodeURIComponent(url.hash.slice(1)) }
        );
        expect(targetExists, `Missing anchor target: ${destination}`).toBe(true);
      }
    }
  });

  test("the public resume downloads from its base-path URL", async ({ page }) => {
    await page.goto(`${basePath}/`);
    const resume = page.getByRole("link", { name: "Download Jared Baquirin resume" });
    const href = await resume.getAttribute("href");
    expect(href).toBe("assets/resume/jared-fahad-baquirin-resume.docx");

    const response = await page.request.get(new URL(href ?? "", page.url()).pathname);
    expect(response.ok()).toBe(true);
    expect((await response.body()).length).toBeGreaterThan(1000);
  });

  test("public routes have no application console errors or failed assets", async ({ page }) => {
    const errors: string[] = [];
    const failedAssets: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error" || message.type() === "warning") {
        errors.push(message.text());
      }
    });
    page.on("response", (response) => {
      if (response.status() >= 400 && response.url().startsWith("http://localhost:4323/")) {
        failedAssets.push(`${response.status()} ${response.url()}`);
      }
    });

    for (const route of routes) {
      await page.goto(`${basePath}${route}`);
      await expect(page.getByRole("main")).toBeVisible();
    }

    expect(errors).toEqual([]);
    expect(failedAssets).toEqual([]);
  });

  test("session storage failure does not hide the portfolio", async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(window, "sessionStorage", {
        get() {
          throw new Error("Storage unavailable");
        }
      });
    });
    await page.goto(`${basePath}/`);

    await expect(page.getByRole("heading", { level: 1, name: "Jared Baquirin" })).toBeVisible();
    await expect(page.locator("[data-init-sequence]")).toHaveAttribute(
      "data-init-state",
      "complete"
    );
  });
});
