import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.strict,
  ...astro.configs.recommended,
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**", "playwright-report/**", "test-results/**"]
  },
  {
    files: ["*.config.mjs", "eslint.config.mjs"],
    languageOptions: {
      globals: {
        process: "readonly"
      }
    }
  }
];
