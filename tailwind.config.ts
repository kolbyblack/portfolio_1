import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
      },
      spacing: {
        'micro': 'var(--spacing-micro)',
        'small': 'var(--spacing-small)',
        'medium': 'var(--spacing-medium)',
        'large': 'var(--spacing-large)',
        'xl': 'var(--spacing-xl)',
        'xxl': 'var(--spacing-xxl)',
      },
      transitionTimingFunction: {
        'swiss': 'var(--ease-swiss)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
