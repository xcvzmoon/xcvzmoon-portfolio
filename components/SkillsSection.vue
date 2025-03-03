<script lang="ts" setup></script>

<template>
  <section class="flex items-center justify-center pb-8 z-20">
    <div class="w-full max-w-[100rem] p-4">
      <h5 class="text-2xl">Dive into my expertise</h5>

      <p class="text-zinc-400">
        Exploring new technologies and finding out how they work is a piece of
        art. I believe that expanding my knowledge and skills is a great
        investment
      </p>

      <div class="p-4 space-y-8">
        <!-- <AnimatedLogoCloud :logos title="Trusted by Companies like" /> -->

        <div class="space-y-2">
          <p class="text-center">Programming Languages</p>

          <div class="flex items-center justify-center flex-wrap gap-1">
            <SvgJsIcon />
            <SvgTsIcon />
            <SvgPhpIcon />
            <SvgCsharpIcon />
            <SvgVbIcon />
          </div>
        </div>

        <div class="space-y-2">
          <p class="text-center">Frontend Frameworks/Tools</p>

          <div class="flex items-center justify-center flex-wrap gap-1">
            <SvgVueIcon />
            <SvgSvelteIcon />
            <SvgReactIcon />
            <SvgAngularIcon />
            <SvgAstroIcon />
            <SvgTailwindIcon />
            <SvgJqueryIcon />
            <SvgBootstrapIcon />
            <SvgHtmlIcon />
            <SvgCssIcon />
            <SvgSassIcon />
          </div>
        </div>

        <div class="space-y-2">
          <p class="text-center">Backend Frameworks/Tools</p>

          <div class="flex items-center justify-center flex-wrap gap-1">
            <SvgFirebaseIcon />
            <SvgSupabaseIcon />
            <SvgAppwriteIcon />
            <SvgHonoIcon />
            <SvgExpressIcon />
            <SvgBunIcon />
            <SvgNodeIcon />
          </div>
        </div>

        <div class="space-y-2">
          <p class="text-center">Fullstack Frameworks/Tools</p>

          <div class="flex items-center justify-center flex-wrap gap-1">
            <SvgNuxtIcon />
            <SvgNextIcon />
            <SvgLaravelIcon />
          </div>
        </div>

        <div class="space-y-2">
          <p class="text-center">Desktop Application/Tools</p>

          <div class="flex items-center justify-center flex-wrap gap-1">
            <SvgElectronIcon />
          </div>
        </div>

        <div class="space-y-2">
          <p class="text-center">Database</p>

          <div class="flex items-center justify-center flex-wrap gap-1">
            <SvgMssqlIcon />
            <SvgMysqlIcon />
            <SvgPostgresqlIcon />
            <SvgMongoIcon />
          </div>
        </div>

        <div class="space-y-2">
          <p class="text-center">Others</p>

          <div class="flex items-center justify-center flex-wrap gap-1">
            <SvgGitIcon />
            <SvgGithubIcon />
            <SvgBitbucketIcon />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
