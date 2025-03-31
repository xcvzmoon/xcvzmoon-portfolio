<script setup lang="ts">
const PROJECTS = [
  {
    title: "SignalR with Vue",
    to: "https://github.com/xcvzmoon/use-signalr-with-vue",
    description:
      "Vue SignalR composable with reactive events, automatic connection handling, and TypeScript support",
    stack: ["Vue", "TypeScript"],
  },
  {
    title: "Vue Starter Template",
    to: "https://github.com/xcvzmoon/vue-template",
    description: "Starter template for Vue with ShadcnUI",
    stack: ["Vue", "TypeScript"],
  },
  {
    title: "Nuxt Starter Template",
    to: "https://github.com/xcvzmoon/nuxt-starter-template",
    description: "Starter template for Nuxt with ShadcnUI",
    stack: ["Nuxt", "Vue", "TypeScript"],
  },
  {
    title: "Point of Sale System",
    to: "https://github.com/xcvzmoon/XploreTech-POS",
    description:
      'A point of sale (POS) system created using VB.net with MySQL for database. This was created for the store "D\'Creamy Milktea House" as a capstone project of Xplore Tech',
    stack: ["VB.NET", "MySQL"],
  },
  {
    title: "IoT Driven Monitoring System",
    to: "https://github.com/xcvzmoon/pflrmlmsmsafg",
    description:
      "Proposed Features for Linear Regression Machine Learning Model of a Smart Monitoring System for Ayungin Fish Growth",
    stack: ["Vue", "TypeScript", "Firebase"],
  },
  {
    title: "Speech to Text",
    to: "https://github.com/xcvzmoon/speech-to-text",
    description:
      "Created using react, typescript, and deepgram. Intentionally created to be used for medical settings",
    stack: ["React", "TypeScript", "Deepgram AI"],
  },
  {
    title: "Monitoring System - Vue",
    to: "https://github.com/xcvzmoon/mbms",
    description:
      "Created for monitoring water transportation from port to port",
    stack: ["Vue", "TypeScript", "Firebase"],
  },
  {
    title: "Monitoring System - React",
    to: "https://github.com/xcvzmoon/mbms-react",
    description:
      "Created for monitoring water transportation from port to port",
    stack: ["React", "TypeScript", "Firebase"],
  },
  {
    title: "Portal System",
    to: "https://github.com/xcvzmoon/alumni-portal",
    description: "Created  to simply create a portal for alumni",
    stack: ["Vue", "JavaScript", "Firebase"],
  },
  {
    title: "Learning Management System",
    to: "",
    description: "This project was created through freelancing",
    stack: ["Vue", "Laravel", "MySQL", "PHP", "FireStore"],
  },
  {
    title: "Appointment System",
    to: "",
    description: "Created through both freelancing and work",
    stack: ["Vue", "Nuxt", "Blazor", "ASP.NET", "TypeScript", "C#", "MSSQL"],
  },
  {
    title: "Electronic Health Record",
    to: "",
    description: "This project was created through work",
    stack: ["Vue", "Blazor", "ASP.NET", "TypeScript", "C#", "MSSQL"],
  },
  {
    title: "Quotator and Insurance System",
    to: "",
    description: "This project was created through work",
    stack: ["Angular", "ASP.NET", "TypeScript", "C#", "MSSQL"],
  },
];
</script>

<template>
  <section class="my-16">
    <UContainer class="flex flex-col items-center justify-center">
      <p
        class="bg-linear-to-bl from-amber-500 to-fuchsia-500 text-zinc-100 rounded-md px-4 py-2 uppercase font-bold text-4xl dark:from-amber-400 dark:to-fuchsia-400 dark:text-zinc-900"
      >
        Projects
      </p>

      <p
        class="text-(--ui-text-muted) px-2 py-4 text-center text-sm text-balance md:text-lg"
      >
        Here are some of the projects that I have developed and collaborated on
        with my co-developers
      </p>

      <div
        class="flex flex-col items-center justify-center gap-4 sm:grid sm:grid-cols-2"
      >
        <ProjectCard
          v-for="{ title, to, description, stack } in PROJECTS"
          :key="to"
          :title
          :to
          :description
          :stack
        />
      </div>
    </UContainer>
  </section>
</template>
