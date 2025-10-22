/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          start: '#370CAF',
          end: '#391CDC',
        },
        accent: '#E5C742',
        background: '#F6F9FE',
        text: {
          primary: '#363534',
          secondary: '#8F84CE',
          light: '#FFFFFF',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #370CAF 0%, #391CDC 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
