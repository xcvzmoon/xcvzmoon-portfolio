<script setup lang="ts">
useHead({
  title: "XCVZMOON | Mon Albert Gamil - Portfolio",
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-96x96.png",
      sizes: "96x96",
    },
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "shortcut icon", href: "/favicon.ico" },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    { rel: "manifest", href: "/site.webmanifest" },
  ],
  meta: [
    {
      name: "description",
      content:
        "I'm a passionate developer who loves creating great work and building a collaborative environment where people can grow, learn, and innovate together.",
    },
    {
      name: "keywords",
      content:
        "web development, portfolio, developer, collaboration, innovation, programming, software engineer",
    },
    { name: "author", content: "Mon Albert Gamil" },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://xcvzmoon.vercel.app/" },
    { property: "og:site_name", content: "XCVZMOON | Mon Albert Gamil - Portfolio" },
    {
      property: "og:title",
      content: "XCVZMOON | Mon Albert Gamil - Portfolio",
    },
    {
      property: "og:description",
      content:
        "I'm a passionate developer who loves creating great work and building a collaborative environment where people can grow, learn, and innovate together.",
    },
    {
      property: "og:image",
      content:
        "https://xcvzmoon.vercel.app/_nuxt/gamil-mon-albert.BH2bm-ef.webp",
    },

    // Twitter
    {
      property: "twitter:card",
      content:
        "https://xcvzmoon.vercel.app/_nuxt/gamil-mon-albert.BH2bm-ef.webp",
    },
    { property: "twitter:url", content: "https://xcvzmoon.vercel.app/" },
    {
      property: "twitter:title",
      content: "XCVZMOON | Mon Albert Gamil - Portfolio",
    },
    {
      property: "twitter:description",
      content:
        "I'm a passionate developer who loves creating great work and building a collaborative environment where people can grow, learn, and innovate together.",
    },
    {
      property: "twitter:image",
      content:
        "https://xcvzmoon.vercel.app/_nuxt/gamil-mon-albert.BH2bm-ef.webp",
    },
  ],
});
</script>

<template>
  <UApp>
    <div class="bg-(--ui-bg) text-(--ui-text) min-h-screen font-mono relative">
      <AppHeader />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AppFooter />
    </div>
  </UApp>
</template>
