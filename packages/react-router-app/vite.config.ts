import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    rollupOptions: {
      // https://vitejs.dev/config/build-options.html#build-rollupoptions
      output: {
        // https://rollupjs.org/configuration-options/#output-assetfilenames
        assetFileNames: 'myapp-assets/myapp-[name]-[hash][extname]',
        // https://rollupjs.org/configuration-options/#output-chunkfilenames
        chunkFileNames: 'myapp-chunks/myapp-[name]-[hash].js',
        // https://rollupjs.org/configuration-options/#output-entryfilenames
        entryFileNames: 'myapp-entries/myapp-[name]-[hash].js',
      },
    },
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
