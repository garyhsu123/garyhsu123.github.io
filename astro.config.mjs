import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://garyhsu123.github.io",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
});
