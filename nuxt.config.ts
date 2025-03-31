import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  vite: { plugins: [tailwindcss()] },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/device",
    "@nuxtjs/seo",
  ],
  site: {
    url: "https://xcvzmoon.vercel.app",
    name: "XCVZMOON | Mon Albert Gamil - Portfolio",
  },
});
