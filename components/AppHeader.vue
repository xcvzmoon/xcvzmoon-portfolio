<script lang="ts" setup>
const links = [
  {
    key: 'github',
    to: 'https://github.com/xcvzmoon',
    icon: 'i-lucide-github',
  },
  {
    key: 'facebook',
    to: 'https://www.facebook.com/xcvzmoon',
    icon: 'i-lucide-facebook',
  },
  {
    key: 'linkedin',
    to: 'https://www.linkedin.com/in/xcvzmoon',
    icon: 'i-lucide-linkedin',
  },
];

const { y } = useWindowScroll();

const colorMode = useColorMode();

const preferredColorModeIcon = computed(() =>
  colorMode.preference === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'
);

function toggleColorMode() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
}
</script>

<template>
  <header
    :class="[
      Math.round(y)
        ? 'border-(--ui-border) bg-(--ui-bg)/80 backdrop-blur-[5px] backdrop-saturate-[180%]'
        : 'border-transparent',
      'border-b h-[calc(3.5rem+1px)] p-2 sticky top-0 left-0 z-10',
    ]"
  >
    <div class="h-full mx-auto px-2 flex items-center justify-between">
      <div class="flex items-center gap-1">
        <UButton
          v-for="{ key, to, icon } in links"
          :key
          :to
          :icon
          target="_blank"
          color="neutral"
          variant="subtle"
        />
      </div>

      <div>
        <ClientOnly v-if="!colorMode?.forced">
          <UButton
            color="neutral"
            variant="subtle"
            :icon="preferredColorModeIcon"
            @click="toggleColorMode"
          />
        </ClientOnly>
      </div>
    </div>
  </header>
</template>
