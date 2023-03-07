import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import glsl from 'vite-plugin-glsl'
import path from 'path'
import config from './config'

export default defineConfig({
  plugins: [vue(), glsl()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    proxy: {
      '/dev-api': {
        target: 'https://adm.xinapp.net/api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev-api/, '')
      }
    },
    cors: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './')
    }
  },
  base: config.publicPath
})
