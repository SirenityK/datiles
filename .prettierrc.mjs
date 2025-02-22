/** @type {import('prettier').Config} */
export default {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-organize-imports",
    "prettier-plugin-css-order",
    "prettier-plugin-tailwindcss",
  ],
  tailwindStylesheet: "./src/styles/global.css",
  tailwindFunctions: ["cn"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
