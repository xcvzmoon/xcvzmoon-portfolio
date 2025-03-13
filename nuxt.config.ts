import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/fonts'],
  css: ['~/assets/css/styles.css'],
  vite: {
    plugins: [tailwindcss()],
  },
});
