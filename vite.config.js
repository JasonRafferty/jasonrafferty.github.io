import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        subjects: resolve(__dirname, 'src/subjects.html'),
        pricing: resolve(__dirname, 'src/pricing.html'),
        availability: resolve(__dirname, 'src/availability.html'),
        resources: resolve(__dirname, 'src/resources.html'),
        faq: resolve(__dirname, 'src/faq.html'),
      },
    },
  },
});
