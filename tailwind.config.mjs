/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'blanco-principal': '#f2f2f2',
        'color-nav': '#f3f3f3',
        'texto-generico': '#333333',
        'color-morado': '#5757e0',
        'color-rojo': '#aa1212',
        'primary-brand': '#5b42f3',
        'secondary-brand': '#f0f4ff',
        'dark-background': '#1f2937',
      },
      fontFamily: {
        sans: ['Poppins', 'Open Sans', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
};
