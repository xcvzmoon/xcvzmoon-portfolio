<template>
  <header class="border-(--color-neutral-700) h-14 border-b">
    <div class="bg-transparent max-w-[125rem] h-full mx-auto px-4 flex items-center gap-4 justify-between">
      <div class="flex items-center gap-2">
        <UAvatar size="xs" src="gamil-mon-albert.webp" alt="Mon Albert Gamil" />
        <span class="select-none">/</span>
        <h4>Mon Albert Gamil</h4>
        <UBadge size="md" variant="outline" color="neutral" label="xcvzmoon" />
      </div>

      <div class="flex items-center gap-1">
        <UButton
          color="neutral"
          variant="ghost"
          icon="i-lucide-github"
          to="https://github.com/xcvzmoon"
          target="_blank"
        />

        <UButton
          color="neutral"
          variant="ghost"
          icon="i-lucide-facebook"
          to="https://www.facebook.com/xcvzmoon"
          target="_blank"
        />

        <UButton
          color="neutral"
          variant="ghost"
          icon="i-lucide-linkedin"
          to="https://www.linkedin.com/in/xcvzmoon"
          target="_blank"
        />
      </div>
    </div>
  </header>
</template>
