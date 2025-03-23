<!-- eslint-disable vue/html-self-closing -->
<template>
  <section class="my-4 flex flex-col items-center gap-4">
    <h1 class="uppercase text-3xl font-bold">Mon Albert Gamil</h1>

    <div class="size-72 grid place-items-center relative">
      <div
        class="border-(--ui-border-accented) bg-(--ui-bg-muted) border rounded-full p-1 z-1"
      >
        <img
          src="~/assets/img/gamil-mon-albert.webp"
          alt="Mon Albert Gamil"
          width="200"
          height="200"
          class="rounded-full"
        />
      </div>

      <div class="rounded-full size-54 absolute orb" />
    </div>

    <div class="text-center">
      <div class="text-xs mb-3 flex flex-col items-center gap-1">
        <UBadge color="neutral" variant="soft" label="Full Stack Developer" />
        <UBadge color="neutral" variant="soft" label="UI/UX Designer" />
        <UBadge color="neutral" variant="soft" label="Web Artisan" />
      </div>

      <h3 class="text-xs text-balance">
        I'm a passionate developer who
        <span class="text-rose-500 dark:text-rose-400">
          loves creating great work
        </span>
        and
        <span class="text-sky-500 dark:text-sky-400">
          building a collaborative environment
        </span>
        where people can
        <span class="text-amber-500 dark:text-amber-400">
          grow, learn, and innovate together
        </span>
      </h3>
    </div>

    <div class="mt-3 flex flex-wrap gap-1">
      <UButton
        to="https://fzdxu6armo.ufs.sh/f/bxc3epjzeNdB65UecZiqwWEuHy4bNjg7kPVmoYQztSZsrLJF"
        target="_blank"
        label="Download CV"
        icon="i-lucide-download"
      />

      <UButton
        color="neutral"
        variant="subtle"
        label="Contact me"
        trailing-icon="i-lucide-send"
      />
    </div>
  </section>
</template>

<style lang="css" scoped>
.orb {
  filter: blur(25px);
  background: radial-gradient(circle at center, white, transparent 40%),
    conic-gradient(
      from 45deg,
      oklch(0.765 0.177 163.223) 52deg,
      oklch(0.845 0.143 164.978) 65deg,
      oklch(0.704 0.191 22.216) 120deg 307deg,
      oklch(0.696 0.17 162.48) 353deg
    );
}
</style>
