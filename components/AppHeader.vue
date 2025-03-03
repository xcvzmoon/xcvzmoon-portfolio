<script lang="ts" setup>
const { y } = useWindowScroll();
</script>

<!-- eslint-disable vue/html-self-closing -->
<template>
  <header
    :class="[
      'border w-full h-14 fixed top-0 left-0 z-20 transition-colors',
      y === 0 ? 'border-transparent' : 'border-border backdrop-blur',
    ]"
  >
    <div class="w-[90%] h-full mx-auto flex items-center justify-between gap-1">
      <Button variant="ghost" @click="y = 0">
        <img
          src="@/assets/img/mon-albert-gamil.webp"
          alt="mon-albert-gamil"
          width="16"
          height="16"
          class="rounded-full"
        />

        <div class="flex items-center gap-1">
          <span class="text-primary">Mon Albert Gamil</span>
          <span
            class="bg-card text-card-foreground border rounded-md text-xs px-2 py-1"
          >
            xcvzmoon
          </span>
        </div>
      </Button>

      <div class="space-x-1">
        <Button variant="outline" as-child>
          <NuxtLink to="https://github.com/xcvzmoon" target="_blank">
            <LucideGithub />
            <span>/xcvzmoon</span>
          </NuxtLink>
        </Button>

        <Button variant="outline" as-child>
          <NuxtLink to="https://www.facebook.com/xcvzmoon" target="_blank">
            <LucideFacebook />
            <span>/xcvzmoon</span>
          </NuxtLink>
        </Button>

        <Button variant="outline" as-child>
          <NuxtLink to="https://www.linkedin.com/in/xcvzmoon" target="_blank">
            <LucideLinkedin />
            <span>/xcvzmoon</span>
          </NuxtLink>
        </Button>
      </div>
    </div>
  </header>
</template>
