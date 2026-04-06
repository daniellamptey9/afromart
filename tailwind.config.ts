import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        poppins: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
        geist: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "ui-sans-serif", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        sansSerif: ["var(--font-sans-serif)", "ui-sans-serif", "system-ui", "sans-serif"],
        dm_sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        dm_serif: ["var(--font-dm-serif)", "ui-sans-serif", "system-ui", "sans-serif"],
       
      },
    },
  },
  plugins: [],
} satisfies Config;