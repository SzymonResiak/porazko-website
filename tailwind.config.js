/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: { max: '767px' },
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
      'xl-desktop': '1600px',
      'mobile-landscape': {
        raw: '(max-width: 767px) and (orientation: landscape)',
      },
      'tablet-landscape': {
        raw: '(min-width: 768px) and (max-width: 1023px) and (orientation: landscape)',
      },
      'laptop-landscape': {
        raw: '(min-width: 1024px) and (max-width: 1279px) and (orientation: landscape)',
      },
      'desktop-landscape': {
        raw: '(min-width: 1280px) and (orientation: landscape)',
      },
      'xl-desktop-landscape': {
        raw: '(min-width: 1600px) and (orientation: landscape)',
      },
    },
    extend: {
      height: {
        '4vh': '4vh',
        '5vh': '5vh',
        '6vh': '6vh',
        '7vh': '7vh',
        '10vh': '10vh',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
