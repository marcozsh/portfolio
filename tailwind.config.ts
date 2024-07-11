import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
	'550px': { 'max': '550px' },
	'992px': { 'max': '992px' },
        '1366px': { 'max': '1366px' },
	'1777px': { 'max': '1777px' },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "width-custom": "calc(300% + 1.3px);",
      },
      backgroundColor: {
        "black-40": "rgba(0, 0, 0, 0.4)",
      },
      inset: {
	"custom":"calc(90%)",
	"customMD":"calc(85%)",
	"customMIN":"calc(70%)",
      },
      animation: {
        'shakeY': 'shakeY 0.9s ease-in infinite',
      },
      keyframes: {
        shakeY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      colors: {
	primary: '#5755ce',
	secondary: '#560bad',
        'custom-color': '#560bad',
        //'custom-bg': '#5d5bf1',
      },
    },
  },
  plugins: [],
};
export default config;
