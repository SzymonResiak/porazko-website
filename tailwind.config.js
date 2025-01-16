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
      '3xl': '1920px',
      '4xl': '2560px',
      '5xl': '3840px',
    },
    extend: {
      fontSize: {
        '3xl': '1.5rem',
        '3.5xl': '2.15rem',
        '4xl': '2.5rem',
        '5xl': '3.5rem',
        '6xl': '4.5rem',
      },
      spacing: {
        128: '32rem',
      },
      gridTemplateColumns: {
        '3xl': 'repeat(4, minmax(0, 1fr))',
        '4xl': 'repeat(5, minmax(0, 1fr))',
        '5xl': 'repeat(3, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
