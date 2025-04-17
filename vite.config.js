import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',  // This ensures that Vitest uses jsdom for DOM testing
    globals: true,          // Adds Jest-like globals (describe, it, expect)
    setupFiles: './src/setup.js',  // Corrected path to the setup file
    ui: true,
    reporters: ['html'],
    coverage: {
      provider:  'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
})
