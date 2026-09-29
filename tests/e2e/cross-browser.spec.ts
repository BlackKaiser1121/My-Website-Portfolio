import { expect, test } from "@playwright/test";

const basePath = "/My-Website-Portfolio";
const projects = ["venora", "fahad", "resumebridge"];

test.describe("cross-browser release smoke", () => {
  test("navigates homepage, case studies, and browser history", async ({ page }) => {
    await page.goto(`${basePath}/`);
    await expect(page.getByRole("heading", { level: 1, name: "Jared Baquirin" })).toBeVisible();
    await page.getByRole("link", { name: "View Selected Projects" }).click();
    await expect(page.locator("#projects")).toBeInViewport();

    for (const slug of projects) {
      await page.goto(`${basePath}/projects/${slug}/`);
      await expect(
        page.getByRole("heading", { level: 1, name: new RegExp(slug, "i") })
      ).toBeVisible();
      await page.reload();
      await expect(page.getByRole("main")).toBeVisible();
    }

    await page.goBack();
    await expect(page.getByRole("heading", { level: 1, name: "FAHAD" })).toBeVisible();
    await page.goForward();
    await expect(page.getByRole("heading", { level: 1, name: "ResumeBridge" })).toBeVisible();
  });

  test("mobile navigation and reduced-motion fallback work", async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      reducedMotion: "reduce"
    });
    const page = await context.newPage();

    await page.goto(`${basePath}/`);
    await expect(page.locator("html")).toHaveAttribute("data-intro-sequence", "skipped");
    await expect(page.locator("[data-motion-planet]")).toBeVisible();
    await page.getByRole("button", { name: "Open navigation" }).click();
    await expect(page.getByRole("button", { name: "Close navigation" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Open navigation" })).toBeFocused();
    await context.close();
  });

  test("first-entry initialization remains skippable", async ({ page }) => {
    await page.addInitScript(() => sessionStorage.clear());
    await page.goto(`${basePath}/`, { waitUntil: "domcontentloaded" });

    await expect(page.locator("[data-init-sequence]")).toHaveAttribute("data-init-state", "active");
    await page.keyboard.press("Escape");
    await expect(page.locator("[data-init-sequence]")).toHaveAttribute(
      "data-init-state",
      "complete"
    );
    await expect(page.getByRole("heading", { level: 1, name: "Jared Baquirin" })).toBeVisible();
  });
});
