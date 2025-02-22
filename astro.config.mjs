// @ts-check
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [partytown()],
  experimental: {
    responsiveImages: true,
  },
  image: {
    experimentalLayout: "responsive",
  },
});
