/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
        spacing: {
            2: '0.5rem',
            4: '1rem',
        }
    },
  },
  plugins: [],
};
