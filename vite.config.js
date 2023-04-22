import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Set the output directory for the built files
    outDir: 'build',
    // Generate source maps for the built files
    sourcemap: true,
    // Specify any environment variables you want to use in the built files
    define: {
      'process.env': process.env,
    },
  },
});
