<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    class="h-svh max-h-[120rem] p-4 flex items-center justify-center gap-48 relative"
  >
    <div class="flex flex-col items-start justify-center gap-4 z-10">
      <h2 class="space-x-1">
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
          <span class="text-sky-400">building a collaborative environment</span>
          where people can
          <span class="text-amber-400">grow, learn, and innovate together</span
          >.
        </h3>
      </div>

      <div class="flex items-center gap-1">
        <Button>Know more about me 🚀</Button>
        <Button variant="outline">
          <span>Resume</span>
          <LucideDownload />
        </Button>
      </div>
    </div>

    <div class="flex items-center z-10">
      <div
        class="bg-card text-card-foreground border rounded-md size-fit p-2 -skew-x-3 -skew-y-3"
      >
        <img
          src="@/assets/img/mon-albert-gamil.webp"
          alt="mon-albert-gamil"
          width="400"
          height="400"
          class="rounded-md"
        />
      </div>
    </div>

    <InteractiveGridPatten
      class="[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] skew-y-12"
    />
  </section>
</template>
