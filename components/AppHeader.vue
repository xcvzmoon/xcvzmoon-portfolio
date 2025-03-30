<script lang="ts" setup>
const links = [
  {
    key: "github",
    to: "https://github.com/xcvzmoon",
    icon: "i-lucide-github",
  },
  {
    key: "facebook",
    to: "https://www.facebook.com/xcvzmoon",
    icon: "i-lucide-facebook",
  },
  {
    key: "linkedin",
    to: "https://www.linkedin.com/in/xcvzmoon",
    icon: "i-lucide-linkedin",
  },
];

const { y } = useWindowScroll();
</script>

<template>
  <header
    :class="[
      Math.round(y)
        ? 'border-(--ui-border) bg-(--ui-bg)/80 backdrop-blur-[5px] backdrop-saturate-[180%]'
        : 'border-transparent',
      'border-b h-[calc(3.5rem+1px)] py-2 sticky top-0 left-0 z-50',
    ]"
  >
    <UContainer class="px-2 flex items-center justify-between">
      <div class="w-[7.956rem] h-9 relative">
        <USkeleton v-if="$colorMode.unknown" class="size-full" />

        <UButton v-else color="neutral" variant="ghost" @click="y = 0">
          <img
            src="~/assets/img/signature.png"
            alt="signature"
            :class="[
              'size-full absolute top-1.5',
              $colorMode.preference === 'dark' && 'invert',
            ]"
          />
        </UButton>
      </div>

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

        <USeparator
          orientation="vertical"
          color="neutral"
          class="w-1 h-4"
          :ui="{ border: 'rounded-md' }"
        />

        <UButton
          v-if="$colorMode.unknown"
          color="neutral"
          variant="subtle"
          class="size-9"
        />

        <template v-else>
          <ClientOnly v-if="!$colorMode.forced">
            <UButton
              color="neutral"
              variant="subtle"
              :icon="
                $colorMode.preference === 'dark'
                  ? 'i-lucide-sun'
                  : 'i-lucide-moon'
              "
              @click="
                $colorMode.preference =
                  $colorMode.preference === 'dark' ? 'light' : 'dark'
              "
            />
          </ClientOnly>
        </template>
      </div>
    </UContainer>
  </header>
</template>
