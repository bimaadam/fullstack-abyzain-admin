import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Penting untuk NextUI
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",

        surface0: "var(--surface0)",
        surface1: "var(--surface1)",
        surface2: "var(--surface2)",
        overlay0: "var(--overlay0)",
        overlay1: "var(--overlay1)",
        overlay2: "var(--overlay2)",
        subtext0: "var(--subtext0)",
        subtext1: "var(--subtext1)",

        rosewater: "var(--rosewater)",
        flamingo: "var(--flamingo)",
        mauve: "var(--mauve)",
        maroon: "var(--maroon)",
        yellow: "var(--yellow)",
        teal: "var(--teal)",
        sky: "var(--sky)",
        sapphire: "var(--sapphire)",
        blue: "var(--blue)",
        lavender: "var(--lavender)",
        mantle: "var(--mantle)",
        crust: "var(--crust)",
      },
    },
  },
  plugins: [],
} satisfies Config;