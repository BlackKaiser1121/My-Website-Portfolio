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

test.describe("Portfolio V2 foundation shell", () => {
  test("loads from the GitHub Pages base path with required landmarks", async ({ page }) => {
    await page.goto("./");

    await expect(
      page.getByRole("heading", { level: 1, name: "Portfolio V2 foundation active" })
    ).toBeVisible();
    await expect(page.getByRole("main")).toHaveAttribute("id", "main");
    await expect(page.getByRole("contentinfo")).toBeVisible();
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
    await expect(page.getByRole("link", { name: "Profile" })).toBeFocused();
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

    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Skip to main content" })).toBeFocused();

    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Jared Baquirin", exact: true })).toBeFocused();

    for (const linkName of requiredNavLinks) {
      await page.keyboard.press("Tab");
      await expect(page.getByRole("link", { name: linkName })).toBeFocused();
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
    await page.getByRole("link", { name: "Contact" }).click();

    await expect(page.getByRole("button", { name: "Open navigation" })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    await expect(page.locator("#contact")).toBeFocused();
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

  for (const viewport of viewports) {
    test(`does not horizontally overflow at ${viewport.width}px`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto("./");

      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth
      );

      expect(hasHorizontalOverflow).toBe(false);
    });
  }
});
