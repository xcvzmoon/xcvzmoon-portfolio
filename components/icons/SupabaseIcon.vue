<template>
  <UButton
    to="https://supabase.com/"
    target="_blank"
    color="neutral"
    variant="subtle"
    class="size-[6.125rem] flex-col justify-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
      class="size-4"
    >
      <path
        fill="url(#a)"
        d="M57.894 98.338c-2.554 3.217-7.734 1.455-7.796-2.653l-.9-60.082h40.4c7.316 0 11.397 8.451 6.847 14.182z"
      />
      <path
        fill="url(#b)"
        fill-opacity=".2"
        d="M57.894 98.338c-2.554 3.217-7.734 1.455-7.796-2.653l-.9-60.082h40.4c7.316 0 11.397 8.451 6.847 14.182z"
      />
      <path
        fill="#3ECF8E"
        d="M41.464 1.661c2.555-3.217 7.735-1.454 7.796 2.654l.395 60.082H9.76c-7.318 0-11.399-8.452-6.848-14.183z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="49.198"
          x2="85.103"
          y1="48.925"
          y2="63.983"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#249361" />
          <stop offset="1" stop-color="#3ECF8E" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="33.279"
          x2="49.654"
          y1="27.129"
          y2="57.954"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>

    <span>Supabase</span>
  </UButton>
</template>
