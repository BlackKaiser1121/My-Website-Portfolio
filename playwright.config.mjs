import { defineConfig, devices } from "@playwright/test";

const previewUrl = "http://localhost:4322/My-Website-Portfolio/";
const localChromeChannel = process.platform === "win32" && !process.env.CI ? "chrome" : undefined;

export default defineConfig({
  testDir: "./tests/e2e",
  reporter: [["list"]],
  webServer: {
    command: "pnpm exec astro preview --host localhost --port 4322",
    url: previewUrl,
    reuseExistingServer: !process.env.CI,
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
