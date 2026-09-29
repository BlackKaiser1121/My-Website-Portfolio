import { defineConfig, devices } from "@playwright/test";

const previewPort = 4323;
const previewUrl = `http://localhost:${previewPort}/My-Website-Portfolio/`;
const localChromeChannel = process.platform === "win32" && !process.env.CI ? "chrome" : undefined;

export default defineConfig({
  testDir: "./tests/e2e",
  reporter: [["list"]],
  webServer: {
    command: `pnpm exec astro preview --host localhost --port ${previewPort}`,
    url: previewUrl,
    reuseExistingServer: false,
    timeout: 120000
  },
  use: {
    baseURL: previewUrl,
    trace: "on-first-retry"
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], channel: localChromeChannel }
    }
  ]
});
