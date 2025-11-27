/** @type {import('tailwindcss').Config} */
export default {
  // CONFIGURACIÓN CRUCIAL:
  // Aquí le decimos a Tailwind que escanee todos los archivos de la carpeta 'src'
  // con las extensiones de Astro, JavaScript, JSX, etc.
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  
  theme: {
    // La sección 'extend' te permite añadir o modificar partes del tema
    // sin borrar los valores por defecto de Tailwind.
    extend: {
      colors: {
        // Colores personalizados usados en las clases del proyecto
        'blanco-principal': '#f2f2f2',
        'color-nav': '#f3f3f3',
        'texto-generico': '#333333',
        'color-morado': '#5757e0',
        'color-rojo': '#aa1212',
        // mantener ejemplos adicionales por compatibilidad
        'primary-brand': '#5b42f3',
        'secondary-brand': '#f0f4ff',
        'dark-background': '#1f2937',
      },
      fontFamily: {
        // Fuente definida en el HTML original (importada desde Google Fonts en Layout)
        sans: ['Poppins', 'Open Sans', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  // Plugins opcionales, por ejemplo, para formularios o tipografía.
  // Si no usas ninguno, déjalo vacío.
  plugins: [],
}
