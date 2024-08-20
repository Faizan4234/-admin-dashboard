/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',  // Change this to your desired color
        secondary: '#ffed4a',  // Optional: Add more colors as needed
        accent: '#f56565',  // Optional: Another color example
      },
    },
  },
  plugins: [],
}

