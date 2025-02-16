/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      letterSpacing: {
        wide: "0.04em",
        tighter: "0.01em",
        normal: "0.03em",
      },
      lineHeight: {
        normal: "1.5",
        wide: "1.8",
        tighter: "1.2",
      },
      colors: {
        accent: {
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["hover"],
      scale: ["hover"],
      textColor: ["dark", "hover"],
      backgroundColor: ["dark", "hover"],
      borderColor: ["dark"],
    },
  },
  corePlugins: {
    container: false,
    float: false,
    clear: false,
    skew: false,
    scale: false,
    rotate: false,
    translate: false,
    transform: false,
    cursor: false,
    userSelect: false,
    resize: false,
    listStyleType: false,
    listStylePosition: false,
    backgroundAttachment: false,
    backgroundClip: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    borderCollapse: false,
    tableLayout: false,
  },
  safelist: [
    "dark",
    {
      pattern: /bg-(white|neutral)-(800|900)/,
    },
    {
      pattern: /text-(gray|accent)-(light|dark|[3-7]00)/,
    },
    {
      pattern: /border-(gray|neutral)-[2-7]00/,
    },
  ],
};
