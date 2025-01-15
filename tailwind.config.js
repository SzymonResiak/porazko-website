/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px', // Full HD+ and 2K screens
      '4xl': '2560px', // WQHD and 4K screens
      '5xl': '3840px', // Ultra-wide and 5K screens
    },
    extend: {
      fontSize: {
        '3xl': '1.5rem',
        '4xl': '2.5rem',
        '5xl': '3.5rem',
      },
    },
  },
  plugins: [],
};