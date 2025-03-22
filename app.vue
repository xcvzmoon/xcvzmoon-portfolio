<script setup lang="ts">
useHead({
  title: 'xcvzmoon | Mon Albert Gamil',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-96x96.png',
      sizes: '96x96',
    },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
});
</script>

<template>
  <UApp>
    <div
      bg="(--ui-bg)"
      text="(--ui-text)"
      class="h-svh font-mono grid place-items-center"
    >
      <UButton
        label="Hello World!"
        @click="
          $colorMode.preference =
            $colorMode.preference === 'dark' ? 'light' : 'dark'
        "
      />
    </div>
  </UApp>
</template>
