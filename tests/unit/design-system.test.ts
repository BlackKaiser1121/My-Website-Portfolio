import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const tokensPath = "src/styles/tokens.css";
const tokensCss = existsSync(tokensPath) ? readFileSync(tokensPath, "utf8") : "";

function readToken(name: string): string {
  const match = tokensCss.match(new RegExp(`${name}:\\s*([^;]+);`));

  if (!match) {
    throw new Error(`Missing token ${name}`);
  }

  const tokenValue = match[1];

  if (!tokenValue) {
    throw new Error(`Missing token value for ${name}`);
  }

  return tokenValue.trim();
}

function hexToRgb(hex: string): [number, number, number] {
  const normalized = hex.replace("#", "");

  if (normalized.length !== 6) {
    throw new Error(`Expected six-digit hex color, received ${hex}`);
  }

  return [
    Number.parseInt(normalized.slice(0, 2), 16),
    Number.parseInt(normalized.slice(2, 4), 16),
    Number.parseInt(normalized.slice(4, 6), 16)
  ];
}

function channelToLinear(channel: number): number {
  const normalized = channel / 255;

  return normalized <= 0.03928 ? normalized / 12.92 : Math.pow((normalized + 0.055) / 1.055, 2.4);
}

function luminance(hex: string): number {
  const [red, green, blue] = hexToRgb(hex);

  return (
    0.2126 * channelToLinear(red) + 0.7152 * channelToLinear(green) + 0.0722 * channelToLinear(blue)
  );
}

function contrastRatio(foreground: string, background: string): number {
  const foregroundLuminance = luminance(foreground);
  const backgroundLuminance = luminance(background);
  const lighter = Math.max(foregroundLuminance, backgroundLuminance);
  const darker = Math.min(foregroundLuminance, backgroundLuminance);

  return (lighter + 0.05) / (darker + 0.05);
}

describe("design system tokens", () => {
  it("has a centralized token stylesheet", () => {
    expect(tokensCss).not.toBe("");
  });

  it("defines the approved semantic color roles", () => {
    expect(readToken("--color-background")).toBe("#050706");
    expect(readToken("--color-surface")).toBe("#101413");
    expect(readToken("--color-panel")).toBe("#171c1a");
    expect(readToken("--color-text-primary")).toBe("#f2f5ef");
    expect(readToken("--color-accent")).toBe("#74f28f");
    expect(readToken("--color-status-warning")).toBe("#f0b35a");
  });

  it("defines spacing, layout, radius, and motion tokens", () => {
    expect(readToken("--space-1")).toBe("0.25rem");
    expect(readToken("--space-8")).toBe("4rem");
    expect(readToken("--layout-content-max")).toBe("72rem");
    expect(readToken("--radius-panel")).toBe("0.5rem");
    expect(readToken("--duration-fast")).toBe("120ms");
  });

  it("keeps text color contrast at WCAG AA levels on dark surfaces", () => {
    expect(
      contrastRatio(readToken("--color-text-primary"), readToken("--color-background"))
    ).toBeGreaterThanOrEqual(4.5);
    expect(
      contrastRatio(readToken("--color-text-secondary"), readToken("--color-surface"))
    ).toBeGreaterThanOrEqual(4.5);
    expect(
      contrastRatio(readToken("--color-accent"), readToken("--color-background"))
    ).toBeGreaterThanOrEqual(4.5);
  });
});
