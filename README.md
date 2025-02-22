# react-router-issue

This monorepo contains 2 packages/apps created in different ways: one with remix v2, and one with react-router v7.

The steps I took were:

```shell
cd packages;
npx create-remix@latest remix-app
npx create-react-router@latest react-router-app
```

(see [remix docs](https://remix.run/docs/en/main/start/quickstart) and [react-router docs](https://reactrouter.com/start/framework/installation))

After that I made `vite.config.ts` changes to both apps:

```typescript
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
```

and I set `ssr: false` in the respective framework configs.

After building both apps, the `build` folder output is not what I would expect. In react-router v7, my route files are showing up in `assets` (and not in the rollup entry folder that I configured).

## viewing build output

You can view the different build output in the [builds](./builds/) folder, or on github at:

- <https://github.com/skratchdot/react-router-issue/tree/main/builds>

## getting started

```shell
git clone git@github.com:skratchdot/react-router-issue.git
cd react-router-issue
pnpm install
pnpm build
```

you can also run both apps via:

```shell
pnpm dev
```
