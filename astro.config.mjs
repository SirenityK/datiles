// @ts-check
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [partytown(), solidJs()],
  experimental: {
    responsiveImages: true,
  },
  image: {
    experimentalLayout: "responsive",
  },
  env: {
    schema: {
      GOOGLE_ANALYTICS_ID: envField.string({
        context: "client",
        access: "public",
      }),
    },
  },
});