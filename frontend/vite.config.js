import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv'

config()

// https://vitejs.dev/config/
exports.default = defineConfig({
  plugins: [react()],
  proxy: {
    '/api': 'http://localhost:8000/api', 
  },
  
})
