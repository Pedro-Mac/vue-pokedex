/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      minWidth: {
        '240': '240px',
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  
}
