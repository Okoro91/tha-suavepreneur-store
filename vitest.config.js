import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.js"],
    css: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
    // Include all test files from the test folder
    include: ["src/test/**/*.{test,spec}.{js,jsx}"],
    // Exclude node_modules
    exclude: ["node_modules", "dist"],
  },
});
