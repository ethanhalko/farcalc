import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    alias: {"@/": new URL("./src/", import.meta.url).pathname}
  },
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src/app/'),
    },
  },
})
