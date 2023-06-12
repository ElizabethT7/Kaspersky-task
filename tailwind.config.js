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
          'medium': '#444444',
          'dark': '#1D1D1B',
        },
        yellow: {
          'medium': '#FFE810',
        },
        green : {
          'light': '#00A88E',
        }
      },
      fontSize: {
        'smc': ['14px', '17px'],
        'lgc': ['18px', '22px'],
        'xlc': ['21px', '25px'],
        '4xlc': ['40px', '48px'],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
