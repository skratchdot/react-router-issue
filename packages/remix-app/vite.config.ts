import { defineConfig } from 'vite';
import { vitePlugin as remix } from '@remix-run/dev';
import tsconfigPaths from 'vite-tsconfig-paths';

declare module '@remix-run/node' {
  interface Future {
    v3_singleFetch: true;
  }
}

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
  plugins: [
    remix({
      ssr: false,
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
});
