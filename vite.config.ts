import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// PORT lets the harness assign a free port; 4173 is the local default.
const port = Number(process.env.PORT) || 4173

export default defineConfig({
  plugins: [react()],
  server: { port },
  preview: { port },
})
