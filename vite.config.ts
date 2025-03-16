import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        'react-obsidian/dist/transformers/babel-plugin-obsidian',
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-transform-class-properties',
        '@babel/plugin-transform-class-static-block'
      ],
    },
  })],
})
