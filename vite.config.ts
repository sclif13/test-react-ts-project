import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@shared': resolve(__dirname, 'src/shared/src'),
    },
  },
  plugins: [react(), svgr({ svgrOptions: { dimensions: false, svgProps: { focusable: '{false}' } } })],
})
