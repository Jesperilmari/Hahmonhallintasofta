import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production'
    ? '/Hahmonhallintasofta/' // GitHub Pages
    : '/',                     // dev/preview
});