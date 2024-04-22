/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl':"1025px",
        'lg':"769px",
        'md':"481px",
        'sm':"320px",
      },
    },
  },
  plugins: [],
}