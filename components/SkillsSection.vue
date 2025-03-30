<template>
  <section class="my-16">
    <UContainer class="flex flex-col items-center justify-center">
      <p
        class="bg-linear-to-bl from-amber-500 to-fuchsia-500 text-zinc-100 rounded-md px-4 py-2 uppercase font-bold text-4xl dark:from-amber-400 dark:to-fuchsia-400 dark:text-zinc-900"
      >
        Skills
      </p>

      <p
        class="text-(--ui-text-muted) px-2 py-4 text-center text-sm text-balance"
      >
        Exploring new technologies and finding out how they work is a piece of
        art. For me, expanding my knowledge and skills is a great investment
      </p>

      <div
        class="w-[100%] relative before:content-[''] before:bg-linear-to-r before:from-(--ui-bg) before:to-(--ui-bg)/0 before:blur-[4px] before:w-[20%] before:h-full before:absolute before:top-0 before:-left-1.5 before:z-10 after:content-[''] after:bg-linear-to-l after:from-(--ui-bg) after:to-(--ui-bg)/0 after:blur-[4px] after:w-[20%] after:h-full after:absolute after:top-0 after:-right-1.5"
      >
        <div
          class="group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]"
        >
          <div
            v-for="index in 5"
            :key="index"
            class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee"
          >
            <IconsAngularIcon />
            <IconsAppwriteIcon />
            <IconsAstroIcon />
            <IconsBitbucketIcon />
            <IconsBootstrapIcon />
            <IconsBunIcon />
            <IconsCsharpIcon />
            <IconsCssIcon />
          </div>
        </div>

        <div
          class="group flex overflow-hidden p-2 [--duration:60s] [--gap:1rem] [gap:var(--gap)]"
        >
          <div
            v-for="index in 5"
            :key="index"
            class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-reverse"
          >
            <IconsElectronIcon />
            <IconsExpressIcon />
            <IconsFirebaseIcon />
            <IconsGithubIcon />
            <IconsGitIcon />
            <IconsHonoIcon />
            <IconsHtmlIcon />
            <IconsJqueryIcon />
          </div>
        </div>

        <div
          class="group flex overflow-hidden p-2 [--duration:50s] [--gap:1rem] [gap:var(--gap)]"
        >
          <div
            v-for="index in 5"
            :key="index"
            class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee"
          >
            <IconsJsIcon />
            <IconsLaravelIcon />
            <IconsMongoIcon />
            <IconsMssqlIcon />
            <IconsNextIcon />
            <IconsNodeIcon />
            <IconsNuxtIcon />
            <IconsPhpIcon />
          </div>
        </div>

        <div
          class="group flex overflow-hidden p-2 [--duration:30s] [--gap:1rem] [gap:var(--gap)]"
        >
          <div
            v-for="index in 5"
            :key="index"
            class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-reverse"
          >
            <IconsPostgresqlIcon />
            <IconsReactIcon />
            <IconsSassIcon />
            <IconsSupabaseIcon />
            <IconsSvelteIcon />
            <IconsTailwindIcon />
            <IconsTsIcon />
            <IconsVbIcon />
            <IconsVueIcon />
          </div>
        </div>
      </div>

      <div class="border-(--ui-border) border-y w-full my-8">
        <div
          class="border-(--ui-border) bg-(--ui-border) border-x w-[90%] mx-auto flex flex-col gap-px"
        >
          <div class="bg-zinc-50 p-3 grid gap-2 dark:bg-zinc-950">
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-globe" class="size-4" />
              <p class="text-(--ui-primary) uppercase">Web Development</p>
            </div>

            <p class="text-(--ui-text-muted) text-xs indent-5">
              I personally like
              <HighlightedSpan>javascript</HighlightedSpan> and/or
              <HighlightedSpan>typescript</HighlightedSpan>
              because I tend to work more on frontend tasks than backend, and it
              is easy to use on the client side, where most of the designing
              happens
            </p>

            <p class="text-(--ui-text-muted) text-xs indent-5">
              I love using <HighlightedSpan>vue</HighlightedSpan> and
              <HighlightedSpan>nuxt</HighlightedSpan>
              and its my most used framework. I can also use
              <HighlightedSpan>react</HighlightedSpan>,
              <HighlightedSpan>angular</HighlightedSpan>, and
              <HighlightedSpan>blazor</HighlightedSpan>
              for the frontend development
            </p>

            <p class="text-(--ui-text-muted) text-xs indent-5">
              I typically use BaaS platforms like
              <HighlightedSpan>Firebase</HighlightedSpan>,
              <HighlightedSpan>Supabase</HighlightedSpan>, and
              <HighlightedSpan>AppWrite</HighlightedSpan> with TypeScript for
              creating backends. Additionally, I have professional experience
              working with <HighlightedSpan>ASP.NET</HighlightedSpan> as a
              backend and <HighlightedSpan>Laravel</HighlightedSpan>
              through my freelancing projects
            </p>
          </div>

          <div class="bg-zinc-50 p-3 grid gap-2 dark:bg-zinc-950">
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-monitor" class="size-4" />
              <p class="text-(--ui-primary) uppercase">Desktop Development</p>
            </div>

            <p class="text-(--ui-text-muted) text-xs indent-5">
              I build desktop apps using
              <HighlightedSpan>C# WinForms</HighlightedSpan>,
              <HighlightedSpan>VB.NET WinForms</HighlightedSpan> (both with
              Bunifu, Guna, and Material UI), and
              <HighlightedSpan>Electron</HighlightedSpan>
              with frontend framework integration using electron forge
            </p>
          </div>

          <div class="bg-zinc-50 p-3 grid gap-2 dark:bg-zinc-950">
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-database" class="size-4" />
              <p class="text-(--ui-primary) uppercase">Database and Hosting</p>
            </div>

            <p class="text-(--ui-text-muted) text-xs indent-5">
              I have experience using
              <HighlightedSpan>MS SQL Server</HighlightedSpan> at work, as well
              as <HighlightedSpan>PostgreSQL</HighlightedSpan>,
              <HighlightedSpan>MongoDB</HighlightedSpan>, and
              <HighlightedSpan>MySQL</HighlightedSpan> in my freelancing
              projects. I usually host projects at
              <HighlightedSpan>Vercel</HighlightedSpan> or
              <HighlightedSpan>Netlify</HighlightedSpan> and
              <HighlightedSpan>IIS</HighlightedSpan> from my previous work
            </p>
          </div>

          <div class="bg-zinc-50 p-3 grid gap-2 dark:bg-zinc-950">
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-package-search" class="size-4" />
              <p class="text-(--ui-primary) uppercase">Productivity</p>
            </div>

            <p class="text-(--ui-text-muted) text-xs indent-5">
              I use <HighlightedSpan>Figma</HighlightedSpan> for creating web
              designs, mockups, and wireframes. For coding, I use
              <HighlightedSpan>VS Code</HighlightedSpan> and
              <HighlightedSpan>Visual Studio</HighlightedSpan>. I use
              <HighlightedSpan>Git</HighlightedSpan> to control my source code's
              version and <HighlightedSpan>GitHub</HighlightedSpan> to store and
              share my codes
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style lang="css" scoped>
.animate-marquee {
  animation: marquee var(--duration) linear infinite;
  animation-direction: reverse;
}

.animate-marquee-reverse {
  animation: marquee-reverse var(--duration) linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

@keyframes marquee-reverse {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}
</style>
