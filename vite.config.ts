import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/jramso.github.io/', // ⚠️ Ajuste conforme seu repositório
})
