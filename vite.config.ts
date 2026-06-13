import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue()],
  base: '/fifa_2026_watcher/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
