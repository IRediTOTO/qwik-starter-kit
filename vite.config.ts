import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint'

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(),],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
    build: {

    }
  };
});
