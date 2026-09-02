import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://yourusername.github.io",
  base: "/ai-mysite",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
});
