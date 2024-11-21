/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      height:{
        "dynamic": "calc(100dvh - 64px)"
      },
    },
  },
  plugins: [],
}