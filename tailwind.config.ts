import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'jumbotron': "url('~/assets/images/bg-jumbotron.jpg')",
      }
    },
    colors: {
      "deepxr-bg-dark": "#111928",
    }
  },
  plugins: [
    require("flowbite/plugin")
  ]
} satisfies Config;
