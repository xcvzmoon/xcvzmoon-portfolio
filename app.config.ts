export default defineAppConfig({
  ui: {
    colors: {
      primary: "emerald",
      neutral: "zinc",
    },
    button: {
      defaultVariants: {
        size: "lg",
      },
      slots: {
        base: "font-semibold",
        leadingIcon: "scale-80",
        trailingIcon: "scale-80",
      },
    },
    card: {
      slots: {
        header:
          "bg-zinc-50 rounded-t-[inherit] flex items-center justify-between dark:bg-zinc-950",
        body: "bg-zinc-50 text-(--ui-text-accented) text-xs md:text-base dark:bg-zinc-950",
        footer:
          "bg-zinc-50 rounded-b-[inherit] flex items-center flex-wrap gap-1 dark:bg-zinc-950",
      },
    },
  },
});
