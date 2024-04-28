import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
  plugins: [react()],
  //resolve: {
  //  preserveSymlinks: true // this is the fix!
  //},
  define: {
    'import.meta.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
  },
  optimizeDeps: {
    include: ['@catcode/catalog', '@catcode/core-api', '@catcode/core-app', '@catcode/core-components', '@catcode/core-plugin', '@catcode/dependencies', '@catcode/theme', '@catcode/catdocs'],
  },
  build: {
    commonjsOptions: {
      include: ['@catcode/catalog', '@catcode/core-api', '@catcode/core-app', '@catcode/core-components', '@catcode/core-plugin', '@catcode/dependencies', '@catcode/theme', '@catcode/catdocs', /node_modules/],
    },
  },
}
})
