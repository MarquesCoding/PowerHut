import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const commitHash = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString();


// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  define: {
    __COMMIT_HASH__: JSON.stringify(commitHash),
  },
  plugins: [react(), tsconfigPaths()],
})
