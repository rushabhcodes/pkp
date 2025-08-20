/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#06b6d4', // Cyan-500
          dark: '#0e7490',    // Cyan-700
          light: '#67e8f9',   // Cyan-300
        },
        'secondary': {
          DEFAULT: '#8b5cf6', // Purple-500
          dark: '#6d28d9',    // Purple-700
          light: '#c4b5fd',   // Purple-300
        },
        'dark': {
          DEFAULT: '#111827', // Gray-900
          lighter: '#1f2937', // Gray-800
          darker: '#030712',  // Gray-950
        },
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(6, 182, 212, 0.5)',
      },
    },
  },
  plugins: [],
}
