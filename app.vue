<!-- eslint-disable vue/html-self-closing -->

<template>
  <main>
    <div
      class="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg lg:w-full md:w-full"
    >
      <div>
        <h2 class="text-xs space-x-1">
          <span
            class="bg-muted text-muted-foreground border rounded-md px-2 py-1"
          >
            Full Stack Web Developer
          </span>

          <span
            class="bg-muted text-muted-foreground border rounded-md px-2 py-1"
          >
            UI/UX Designer
          </span>

          <span
            class="bg-muted text-muted-foreground border rounded-md px-2 py-1"
          >
            Freelancer
          </span>
        </h2>

        <h1 class="text-8xl font-mono font-semibold uppercase">
          Mon Albert Gamil
        </h1>

        <div class="mt-8 mb-4">
          <h3 class="max-w-4xl text-lg text-balance">
            I'm a passionate developer who
            <span class="text-rose-400">loves creating great work</span> and
            <span class="text-sky-400"
              >building a collaborative environment</span
            >
            where people can
            <span class="text-amber-400"
              >grow, learn, and innovate together</span
            >.
          </h3>
        </div>
      </div>

      <Ripple
        class="bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"
        circle-class="border-[hsl(var(--primary))] bg-primary/25 blobed"
      />
    </div>
  </main>
</template>

<style scoped>
:deep(.blobed) {
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}
</style>
