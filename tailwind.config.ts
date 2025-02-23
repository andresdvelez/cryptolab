import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            background: "hsl(222.2 84% 4.9%)",
            foreground: "hsl(210 40% 98%)",
            primary: "hsl(142.1 70.6% 45.3%)",
            secondary: "#8641e0",
          },
        },
      },
    }),
  ],
} satisfies Config;
