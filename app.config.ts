export default defineAppConfig({
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'zinc',
    },
    button: {
      defaultVariants: {
        size: 'lg',
      },
      slots: {
        base: 'font-semibold',
        leadingIcon: 'scale-80',
      },
    },
  },
});
