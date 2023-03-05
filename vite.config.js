import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import glsl from 'vite-plugin-glsl'
import path from 'path'
import config from './config'

export default defineConfig({
  plugins: [vue(), glsl(), ViteEjsPlugin({ config })],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.')[1]
          if (/png|jpe?g|svg|gif/i.test(extType)) {
            extType = 'img'
          }
          return `assets/${extType}/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://web/',
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './')
    }
  },
  base: config.publicPath
})
