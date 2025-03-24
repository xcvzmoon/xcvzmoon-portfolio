<template>
  <section class="my-16 flex flex-col items-center justify-center">
    <p
      class="bg-linear-to-bl from-amber-500 to-fuchsia-500 text-zinc-100 rounded-md px-4 py-2 uppercase font-bold text-4xl dark:from-amber-400 dark:to-fuchsia-400 dark:text-zinc-900"
    >
      Projects
    </p>

    <p
      class="text-(--ui-text-muted) px-2 py-4 text-center text-sm text-balance"
    >
      Here are some of the projects that I have developed and collaborated on
      with my co-developers
    </p>

    <div class="flex flex-col items-center justify-center gap-1">
      <div class="bg-(--ui-bg-elevated) w-[95%] rounded-md p-4 space-y-4">
        <UButton
          to="https://github.com/xcvzmoon/XploreTech-POS"
          target="_blank"
          variant="link"
          label="Point of Sale System"
          icon="i-lucide-external-link"
        />

        <p class="text-xs">
          Created using Visual Basic with MySQL for the database. I used Bunifu
          Framework and Guna UI Framework to design the user interface. Its main
          purpose is to handle transactions and manage stocks
        </p>
      </div>

      <div class="bg-(--ui-bg-elevated) w-[95%] rounded-md p-4 space-y-4">
        <UButton
          to="https://github.com/xcvzmoon/pflrmlmsmsafg"
          target="_blank"
          variant="link"
          label="IoT Driven Monitoring System"
          icon="i-lucide-external-link"
        />

        <p class="text-xs">
          Created using VueJS for the frontend and Firebase for the backend with
          realtime database using realtime database. Used for monitor fish
          growth
        </p>
      </div>

      <div class="bg-(--ui-bg-elevated) w-[95%] rounded-md p-4 space-y-4">
        <UButton
          to="https://github.com/xcvzmoon/speech-to-text"
          target="_blank"
          variant="link"
          label="Speech to Text AI"
          icon="i-lucide-external-link"
        />

        <p class="text-xs">
          Created using react, typescript, and deepgram. Intentionally created
          to be used for medical settings
        </p>
      </div>

      <div class="bg-(--ui-bg-elevated) w-[95%] rounded-md p-4 space-y-4">
        <UButton
          to="https://github.com/xcvzmoon/mbms"
          target="_blank"
          variant="link"
          label="Monitoring System - Vue"
          icon="i-lucide-external-link"
        />

        <UButton
          to="https://github.com/xcvzmoon/mbms-react"
          target="_blank"
          variant="link"
          label="Monitoring System - React"
          icon="i-lucide-external-link"
        />

        <p class="text-xs">
          Created using vue and react for monitoring water transportation from
          port to port
        </p>
      </div>

      <div class="bg-(--ui-bg-elevated) w-[95%] rounded-md p-4 space-y-4">
        <UButton
          to="https://github.com/xcvzmoon/alumni-portal"
          target="_blank"
          variant="link"
          label="Portal System"
          icon="i-lucide-external-link"
        />

        <p class="text-xs">
          Created using vue and firebase to simply create a portal for alumni
        </p>
      </div>

      <div class="bg-(--ui-bg-elevated) w-[95%] rounded-md p-4 space-y-4">
        <UButton variant="link" label="Learning Management System" />

        <p class="text-xs">
          Created through freelancing using Vue, Laravel, MySQL, and Firestore
          for storing assets
        </p>
      </div>

      <div class="bg-(--ui-bg-elevated) w-[95%] rounded-md p-4 space-y-4">
        <UButton variant="link" label="Appointment System" />

        <p class="text-xs">
          Created through both freelancing and work. Used Vue, Nuxt, and Blazor
        </p>
      </div>

      <div class="bg-(--ui-bg-elevated) w-[95%] rounded-md p-4 space-y-4">
        <UButton variant="link" label="Electronic Health Record" />

        <p class="text-xs">
          Created as part of work projects, utilizing Blazor, Vue, ASP.NET, and
          MS SQL Server, and hosted on IIS
        </p>
      </div>

      <div class="bg-(--ui-bg-elevated) w-[95%] rounded-md p-4 space-y-4">
        <UButton variant="link" label="Quotator and Insurance System" />

        <p class="text-xs">
          Created as part of work projects, utilizing Angular, ASP.NET, and MS
          SQL Server, and hosted on IIS
        </p>
      </div>
    </div>
  </section>
</template>
