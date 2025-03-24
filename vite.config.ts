import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',  // El punto de entrada de tu librería
      name: 'directus-cms-collections',       // El nombre global de tu librería
      fileName: (format) => `directus-cms-collections.${format}.js`,  // El nombre del archivo generado
    },
  },
});
