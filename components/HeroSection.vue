<template>
  <UContainer as="header" class="h-[calc(100svh-3.5rem)] max-h-[67.5rem] pb-4">
    <div class="h-full p-4 grid grid-cols-2">
      <div class="flex flex-col justify-center">
        <div class="mb-1 flex items-center gap-1">
          <UBadge color="neutral" variant="subtle" label="Full Stack Developer" />
          <UBadge color="neutral" variant="subtle" label="UI/UX Designer" />
          <UBadge color="neutral" variant="subtle" label="Freelancer" />
          <UBadge color="neutral" variant="subtle" label="Web Artisan" />
        </div>

        <h1 class="font-mono uppercase text-8xl font-bold">Mon Albert Gamil</h1>

        <h3 class="text-(--color-neutral-400) max-w-4xl mt-4 mb-8 text-lg text-balance">
          I'm a passionate developer who
          <span class="text-emerald-400">loves creating great work</span> and
          <span class="text-sky-400">building a collaborative environment</span>
          where people can
          <span class="text-amber-400">grow, learn, and innovate together</span>.
        </h3>

        <div class="flex items-center gap-1">
          <UButton size="xl" label="Get to know me" trailing-icon="i-lucide-move-right" />
          <UButton size="xl" color="neutral" variant="outline" label="Download my CV" />
        </div>
      </div>

      <div class="grid place-items-center relative">
        <UCard variant="subtle" class="rounded-full z-10">
          <UAvatar src="gamil-mon-albert.webp" alt="Mon Albert Gamil" class="size-96" />
        </UCard>

        <div class="bg-(--color-primary-400) blur-[120px] absolute size-96 rounded-full z-0" />
      </div>
    </div>
  </UContainer>
</template>
