import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [vue(), react()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
