/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["synthwave", "retro"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "2rem",
        },
      },
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

