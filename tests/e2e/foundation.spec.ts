import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const viewports = [
  { width: 1440, height: 1000 },
  { width: 1024, height: 900 },
  { width: 768, height: 900 },
  { width: 390, height: 844 }
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
    await expect(page.getByRole("link", { name: "Profile" })).toBeFocused();
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
