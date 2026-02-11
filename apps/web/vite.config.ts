import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 配置 monorepo 包路径别名
      ui: fileURLToPath(new URL('../../packages/ui/src', import.meta.url)),
      utils: fileURLToPath(new URL('../../packages/utils/src', import.meta.url)),
      config: fileURLToPath(new URL('../../packages/config/src', import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 5173,
    open: false,
  },
})
