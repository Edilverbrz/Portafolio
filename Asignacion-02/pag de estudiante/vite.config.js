import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- 1. Importamos Tailwind
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portafolio/Asignacion-02/pag de estudiante/dist/',
  plugins: [
    react(),
    tailwindcss(), // <-- 2. Añadimos Tailwind a los plugins
  ],
  resolve: {
    alias: [
      { find: 'react', replacement: path.resolve(__dirname, 'node_modules/react') },
      { find: 'react-dom', replacement: path.resolve(__dirname, 'node_modules/react-dom') }
    ]
  },
  server: {
    fs: {
      allow: [
        path.resolve(__dirname, '..'),
        path.resolve(__dirname, '../../Asignacion-01'),
        path.resolve(__dirname, '../../Asignacion-03')
      ]
    }
  }
})