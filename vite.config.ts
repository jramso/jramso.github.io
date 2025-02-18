import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/jramso.github.io/', // Altere para o nome do repositório
  plugins: [vue()],
})
