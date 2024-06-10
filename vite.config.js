import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['history', 'sweetalert2', 'sweetalert2/dist/sweetalert2.min.css']
    }
  }
})
