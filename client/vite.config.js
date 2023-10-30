import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, './src/api'),
      '@atoms': path.resolve(__dirname, './src/atoms'),
      '@base': path.resolve(__dirname, './src/base'),
      '@organism': path.resolve(__dirname, './src/organism'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
  
  server: {
    open: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000/',
        changeOrigin: true,
      },
    },
  },
})
