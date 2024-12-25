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
        offwhite: colors.offwhite,
        black: colors.black,
        darkGrey: colors.darkGrey,
        lightGrey: colors.lightGrey,
        bgGrey: colors.bgGrey,
        green: colors.green,
      },
      fontSize: {
        '14': "14px",
        '16': "16px",
        '20': "20px",
        '50': '50px',
        '55': '55px',
        '80': '80px',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
      },
      keyframes: {
        popout: {
          '0%': {
            transform: 'scale(1)',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          },
          '100%': {
            transform: 'scale(1.01)',
            boxShadow: '0 5px 16px rgba(0, 0, 0, 0.1)',
          },
        },
      },
      animation: {
        popout: 'popout 0.3s ease forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
