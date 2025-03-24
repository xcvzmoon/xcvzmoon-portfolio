<template>
  <section class="my-16 text-xs text-center flex flex-col gap-2">
    <span class="text-balance">
      Built with <span class="text-(--ui-info)">TypeScript</span>,
      <span class="text-(--ui-info)">TailwindCSS</span>,
      <span class="text-(--ui-primary)">NuxtUI</span>,
      <span class="text-(--ui-primary)">Vue</span>, and
      <span class="text-(--ui-primary)">Nuxt</span>
    </span>

    <span>@xcvmoon | {{ `${new Date(Date.now()).getUTCFullYear()}` }}</span>
  </section>
</template>
