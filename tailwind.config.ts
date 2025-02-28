import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  module: {
    darkMode: 'class'
  },
  
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
      colors: {
        textdark: '#16180c',
        textlight: '#d4d8ca',
        textblue: '#214859',
        tris: {
          blue: '#214859',
          light: '#ffe680',
          soft: '#decd87',
          DEFAULT: '#d3bc5f',
          dim: '#786721',
          dark: '#28220b', 
        }
      }
    }
  }
}