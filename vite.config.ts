import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteMangleCss } from './src/utils/tailwind-mangle-class'

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), viteMangleCss()],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },

  };
});
