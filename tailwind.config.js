/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}", // Ensure this matches your file structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',    // Blue
        secondary: '#ffed4a',  // Yellow
        accent: '#e53e3e',     // Red
      },
      keyframes: {
        colorChange: {
          '0%, 100%': { color: '#4f46e5' }, // Indigo
          '50%': { color: '#f97316' },      // Orange
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        },
        swim: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        colorChange: 'colorChange 3s infinite',
        bounce: 'bounce 2s infinite',
        swim: 'swim 10s linear infinite',
      },
    },
  },
  plugins: [],
};