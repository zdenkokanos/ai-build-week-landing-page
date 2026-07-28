import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// PORT lets the harness assign a free port; 4173 is the local default.
const port = Number(process.env.PORT) || 4173

// The app consumes the design system from source so edits hot-reload; the
// published entry (packages/ui/dist) is what the design-system sync bundles.
const ui = fileURLToPath(new URL('./packages/ui/src', import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@mlask/ui/styles.css', replacement: ui + '/styles.css' },
      { find: '@mlask/ui', replacement: ui + '/index.ts' },
    ],
  },
  server: { port },
  preview: { port },
})
