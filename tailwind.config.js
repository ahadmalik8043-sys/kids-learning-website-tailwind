/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        'brand-primary': '#FF6B35',
        'brand-secondary': '#4ECDC4',
        'brand-third': '#FFE66D',
        'brand-fourth': '#E8F8F5',
        'brand-accent': '#FF8B94',
      },
    },
  },
  plugins: [],
}
