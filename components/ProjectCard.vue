<script setup lang="ts">
defineProps<{
  title: string;
  to: string;
  description: string;
  stack: string[];
}>();
</script>

<template>
  <UCard class="w-full">
    <template #header>
      <h4 class="text-(--ui-secondary)">{{ title }}</h4>

      <UButton
        v-if="to"
        color="neutral"
        variant="subtle"
        icon="i-lucide-github"
        target="_blank"
        :to
      />
    </template>

    <template #default>
      {{ description }}
    </template>

    <template #footer>
      <UBadge v-for="(item, index) in stack" :key="index" :label="item" />
    </template>
  </UCard>
</template>
