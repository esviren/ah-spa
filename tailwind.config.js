/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.ts",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        textdark: '#16180c',
        textlight: '#d4d8ca',
        textblue: '#214859',
        logodark: '#3a5522',
        logolight: '#729951',
        tris: {
          blue: '#214859',
          light: '#ffe680',
          soft: '#decd87',
          DEFAULT: '#d3bc5f',
          dim: '#786721',
          dark: '#28220b',         
        }
      },
    },
    
  },
  plugins: [],
}

