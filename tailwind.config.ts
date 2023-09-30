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
        'footer': "url('~/assets/images/bg-footer.jpg')",
      }
    },
    fontFamily: {
      'heavitas': ['Heavitas'],
    },
    colors: {
      "xr-primary":"#FF3601",
      "xr-black":"#000000",
      "xr-gray":"#6B7280",
      "xr-white":"#FFFFFF",
      // "deepxr-bg-dark": "#111928",
    }
  },
  plugins: [
    require("flowbite/plugin")
  ]
} satisfies Config;
