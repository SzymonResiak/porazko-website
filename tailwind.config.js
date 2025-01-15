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
        '4xl': '2.5rem', // Increased for better visibility on 4xl screens
        '5xl': '3.5rem', // Increased for better visibility on 5xl screens
        '6xl': '4.5rem', // Larger font for 5k screens
      },
      spacing: {
        128: '32rem', // Custom spacing for larger screens
      },
      gridTemplateColumns: {
        '3xl': 'repeat(4, minmax(0, 1fr))', // 3xl screen: 4 columns
        '4xl': 'repeat(5, minmax(0, 1fr))', // 4xl screen: 5 columns
        '5xl': 'repeat(3, minmax(0, 1fr))', // 5xl screen: 3 columns (Reduced from 6 for better layout)
      },
    },
  },
  plugins: [],
};
