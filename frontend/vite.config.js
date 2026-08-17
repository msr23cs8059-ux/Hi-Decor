import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Hi-Decor/',
  plugins: [react()],
  server: { port: 5173 }
})
