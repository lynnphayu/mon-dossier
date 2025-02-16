// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    compress({
      // Compression options
      CSS: true,
      HTML: {
        "html-minifier-terser": {
          removeAttributeQuotes: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          minifyCSS: true,
          minifyJS: true,
          sortClassName: true,
          sortAttributes: true,
          collapseWhitespace: true,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
