import colors from "./src/config/colors";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: colors.black,
        darkGrey: colors.darkGrey,
        lightGrey: colors.lightGrey,
        bgGrey: colors.bgGrey,
        green: colors.green,
      },
      fontSize: {
        '16': "16px",
        '20': "20px"
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
      },

    },
  },
  plugins: [],
} satisfies Config;
