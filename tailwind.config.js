/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      //* Colores personalizados que se aplicarán a mi app como en los bg-, text-, border- y otros (ejemplo: text-primary, bg-secondary). 
      colors: {
        primary: '#49129C',
        secondary: {
          DEFAULT: '#B40086',
          100: '#C51297',
          200: '#831266',
        },
        tertiary: '#EF2967',
      },
      //* Creando utilidades para mi familia de fuentes descargado de google fonts(las alojé en el directorio assets/fonts).
      //* Crearia las utilidades pero anteponiendo font- y luego el nombre de la fuente (ejemplo: font-work-black).
      fontFamily: {
        'work-black': ['WorkSans-Black','sans-serif'],
        'work-light': ['WorkSans-Light','sans-serif'],
        'work-medium': ['WorkSans-Medium','sans-serif'],
      }
    },
  },
  plugins: [],
}

