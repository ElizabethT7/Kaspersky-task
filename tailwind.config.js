/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        'mwd': '1254px',
        'swd': '1107px',
      },
      backgroundImage: {
        'crumb-divided': "url('src/assets/svg/crumb-divided.svg')",
      },
      colors: {
        grey: {
          'light': '#666666',
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
