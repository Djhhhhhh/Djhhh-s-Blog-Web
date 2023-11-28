import { fileURLToPath, URL } from 'node:url'

import mdPlugin from 'vite-plugin-markdown'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mdPlugin({
      mode: ['html']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})