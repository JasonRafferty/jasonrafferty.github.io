import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        subjects: resolve(__dirname, 'subjects.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        availability: resolve(__dirname, 'availability.html'),
        resources: resolve(__dirname, 'resources.html'),
        faq: resolve(__dirname, 'faq.html'),
      },
    },
  },
});
