module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1abc9c',
        secondary: '#5d9d8b',
        white: '#e9fef7',
        light: '#f3eada',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
