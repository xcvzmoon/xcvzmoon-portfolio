<script lang="ts" setup>
import { cn } from '~/lib/utils';

type Logo = {
  name: string;
  path: string;
};

type AnimateLogoCloudProps = {
  class?: string;
  title?: string;
  logos?: Logo[];
};

const props = defineProps<AnimateLogoCloudProps>();
</script>

<template>
  <div class="w-full py-12">
    <div class="mx-auto w-full px-4 md:px-8">
      <div
        v-if="props.title"
        class="text-center font-medium text-muted-foreground"
      >
        {{ props.title }}
      </div>
      <div
        :class="
          cn(
            'mask-animation group relative mt-6 flex gap-6 overflow-hidden p-2',
            props.class
          )
        "
      >
        <div
          v-for="index in Array(5).fill(null)"
          :key="index"
          class="animate-logo-cloud flex shrink-0 flex-row justify-around gap-6"
        >
          <NuxtImg
            v-for="(logo, key) in props.logos"
            :key="key"
            :src="logo.path"
            :alt="logo.name"
            class="h-10 w-28 px-2 brightness-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mask-animation {
  mask-image: linear-gradient(
    to left,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 95%
  );
}

.animate-logo-cloud {
  animation: logo-cloud 30s linear infinite;
}
</style>
