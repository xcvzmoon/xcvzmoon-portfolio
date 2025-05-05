<!-- eslint-disable vue/html-self-closing -->
<template>
  <section class="mt-4">
    <UContainer class="flex flex-col items-center gap-4 xl:hidden">
      <h1
        class="text-(--ui-primary) uppercase text-3xl text-center font-bold sm:text-4xl md:text-5xl"
      >
        Mon Albert Gamil
      </h1>

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
        <div
          class="mb-3 flex flex-col items-center gap-1 sm:flex-row sm:justify-center"
        >
          <UBadge
            color="neutral"
            variant="soft"
            label="Full Stack Developer"
            as="h3"
          />

          <UBadge
            color="neutral"
            variant="soft"
            label="UI/UX Designer"
            as="h3"
          />

          <UBadge color="neutral" variant="soft" label="Web Artisan" as="h3" />
        </div>

        <h4 class="text-xs text-balance sm:text-sm md:text-base">
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
        </h4>
      </div>

      <UButton
        to="https://fzdxu6armo.ufs.sh/f/bxc3epjzeNdBbR7OvTjzeNdB1jW35RxOkULYo2pSPGyZ9luX"
        target="_blank"
        label="Download my CV"
        icon="i-lucide-download"
        class="mt-3"
      />
    </UContainer>

    <UContainer class="hidden h-screen max-h-[35rem] grid-cols-2 xl:grid">
      <div class="flex flex-col items-center justify-center">
        <div class="text-center">
          <div class="flex items-center justify-center gap-1">
            <UBadge
              color="neutral"
              variant="soft"
              label="Full Stack Developer"
              as="h3"
            />

            <UBadge
              color="neutral"
              variant="soft"
              label="UI/UX Designer"
              as="h3"
            />

            <UBadge
              color="neutral"
              variant="soft"
              label="Web Artisan"
              as="h3"
            />
          </div>

          <h1
            class="text-(--ui-primary) uppercase text-6xl text-center font-bold"
          >
            Mon Albert Gamil
          </h1>

          <h4 class="mt-8 text-xl text-balance">
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
          </h4>
        </div>

        <UButton
          to="https://fzdxu6armo.ufs.sh/f/bxc3epjzeNdB65UecZiqwWEuHy4bNjg7kPVmoYQztSZsrLJF"
          target="_blank"
          label="Download my CV"
          icon="i-lucide-download"
          class="mt-3"
        />
      </div>

      <div class="grid place-items-center">
        <div class="size-[30rem] grid place-items-center relative">
          <div
            class="border-(--ui-border-accented) bg-(--ui-bg-muted) border rounded-full p-1 z-1"
          >
            <img
              src="~/assets/img/gamil-mon-albert.webp"
              alt="Mon Albert Gamil"
              width="300"
              height="300"
              class="rounded-full"
            />
          </div>

          <div class="rounded-full size-[22.5rem] absolute orb" />
        </div>
      </div>
    </UContainer>
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
