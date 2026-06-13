import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  build: {
    // Keep Vite's fingerprinted bundles in /_assets so they don't share a path
    // prefix with the static images in public/assets (which keep stable names).
    // Lets netlify.toml cache /_assets immutably without freezing real images.
    assetsDir: '_assets',
    rollupOptions: {
      output: {
        // Split heavy libs into separate, independently-cacheable chunks.
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) return 'motion';
          if (id.includes('lenis')) return 'lenis';
          if (id.includes('react-router') || id.includes('react-dom') || id.includes('/react/')) return 'react';
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
