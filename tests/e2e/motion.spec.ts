import { expect, test } from "@playwright/test";

const homepageSections = [
  "hero",
  "profile",
  "projects",
  "architecture",
  "capabilities",
  "experience",
  "education",
  "principles",
  "contact"
];

test.describe("Portfolio V2 controlled motion", () => {
  test("initializes full motion without hiding essential homepage content", async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") {
        consoleErrors.push(message.text());
      }
    });

    await page.goto("./");

    await expect(page.locator("html")).toHaveAttribute("data-motion", "ready");
    await expect(page.locator("html")).toHaveAttribute("data-motion-preference", "full");
    await expect(page.getByRole("heading", { level: 1, name: "Jared Baquirin" })).toBeVisible();
    await expect(page.getByRole("link", { name: "View Selected Projects" })).toBeVisible();
    await expect(page.locator('[data-motion-planet][aria-hidden="true"]')).toBeVisible();

    for (const sectionId of homepageSections) {
      await expect(page.locator(`#${sectionId}`)).toBeVisible();
    }

    expect(consoleErrors).toEqual([]);
  });

  test("keeps reduced-motion users in a static readable state", async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: "reduce" });
    const page = await context.newPage();

    await page.goto("./");

    await expect(page.locator("html")).toHaveAttribute("data-motion", "ready");
    await expect(page.locator("html")).toHaveAttribute("data-motion-preference", "reduced");
    await expect(page.getByRole("heading", { level: 1, name: "Jared Baquirin" })).toBeVisible();
    await expect(page.locator('[data-motion-planet][aria-hidden="true"]')).toBeVisible();

    const planetAnimation = await page
      .locator("[data-motion-planet]")
      .evaluate((planet) => getComputedStyle(planet).animationName);
    const hiddenMotionContent = await page
      .locator("[data-motion-section], [data-motion-project-preview], [data-motion-case-study]")
      .evaluateAll(
        (elements) =>
          elements.filter((element) => Number(getComputedStyle(element).opacity) === 0).length
      );

    expect(planetAnimation).toBe("none");
    expect(hiddenMotionContent).toBe(0);

    await context.close();
  });

  test("keeps case-study pages readable after motion initialization", async ({ page }) => {
    await page.goto("projects/venora/");

    await expect(page.locator("html")).toHaveAttribute("data-motion", "ready");
    await expect(page.locator("[data-motion-case-study]")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1, name: "Venora" })).toBeVisible();
    await expect(page.getByRole("navigation", { name: "Project" })).toBeVisible();
    await expect(page.getByRole("figure", { name: /Venora architecture/i })).toBeVisible();
  });

  test("keeps mobile navigation functional when reduced motion is active", async ({ browser }) => {
    const context = await browser.newContext({
      reducedMotion: "reduce",
      viewport: { width: 390, height: 844 }
    });
    const page = await context.newPage();

    await page.goto("./");

    const trigger = page.getByRole("button", { name: "Open navigation" });
    await trigger.click();
    await expect(page.getByRole("button", { name: "Close navigation" })).toHaveAttribute(
      "aria-expanded",
      "true"
    );

    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Open navigation" })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    await expect(page.getByRole("button", { name: "Open navigation" })).toBeFocused();

    await context.close();
  });
});
