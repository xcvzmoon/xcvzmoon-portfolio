<script setup lang="ts"></script>

<!-- eslint-disable vue/html-self-closing -->
<template>
  <section class="flex items-center justify-center pb-8 z-20">
    <div class="w-full max-w-[100rem] h-96 p-4">
      <h5 class="text-2xl">Embark on My Journey</h5>

      <p class="text-zinc-400">
        My passion for coding was nurtured by the dream of becoming an excellent
        developer and by the group of people surrounding me who love technology
      </p>

      <div class="p-4 grid grid-cols-12 gap-2">
        <div
          class="bg-card text-secondary-foreground border rounded-md col-span-5 col-start-2 h-40 p-4 flex items-start gap-2"
        >
          <img
            src="~/assets/img/tssi-logo.png"
            alt="tssi"
            width="56"
            height="56"
          />

          <div class="space-y-2">
            <span class="bg-secondary border rounded-md text-sm px-2 py-1">
              November 2023 - February 2024
            </span>

            <NuxtLink
              to="http://thurstonsoft.com/"
              target="_blank"
              class="flex items-center gap-1 transition-colors hover:border-b hover:border-secondary-foreground"
            >
              <h4>Thurston Software Solutions Inc.</h4>
              <LucideArrowUpRight :size="16" />
            </NuxtLink>
          </div>
        </div>

        <!-- <div
          class="bg-card text-secondary-foreground border rounded-md col-span-6 col-start-3 h-40"
        ></div>

        <div
          class="bg-card text-secondary-foreground border rounded-md col-span-7 col-start-4 h-40"
        ></div>

        <div
          class="bg-card text-secondary-foreground border rounded-md col-span-8 col-start-5 h-40"
        ></div> -->
      </div>
    </div>
  </section>
</template>
