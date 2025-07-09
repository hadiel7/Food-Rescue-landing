/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins', 'sans-serif'],
      },
      colors: {
        greenPrimary: '#16a34a',
      },
    },
  },
  plugins: [],
}
