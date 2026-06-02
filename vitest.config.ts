import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@": rootDir,
    },
  },
  test: {
    css: true,
    environment: "jsdom",
    exclude: [
      "**/node_modules/**",
      "**/.git/**",
      ".next/**",
      "out/**",
      "playwright-report/**",
      "test-results/**",
      "tests/e2e/**",
    ],
    globals: true,
    passWithNoTests: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});
