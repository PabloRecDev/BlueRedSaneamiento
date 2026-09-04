// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

/** iCloud + Tailwind/daisyUI can exceed Vite's 60s fetchModule timeout. */
function increaseSsrTimeout() {
  return {
    name: 'increase-ssr-timeout',
    configureServer(server) {
      let runner = server._ssrCompatModuleRunner;
      Object.defineProperty(server, '_ssrCompatModuleRunner', {
        configurable: true,
        enumerable: true,
        get() {
          return runner;
        },
        set(value) {
          if (value?.options?.transport) {
            value.options.transport.timeout = 0;
          }
          runner = value;
        },
      });
    },
  };
}

export default defineConfig({
  site: 'https://blueredsaneamiento.net',
  trailingSlash: 'never',
  vite: {
    plugins: [increaseSsrTimeout(), tailwindcss()],
    server: {
      watch: {
        ignored: ['**/.vercel/**', '**/.astro/**'],
      },
      warmup: {
        clientFiles: ['./src/styles/global.css'],
        ssrFiles: ['./src/styles/global.css', './src/layouts/BaseLayout.astro'],
      },
    },
  },
  adapter: vercel(),
  integrations: [mdx(), sitemap()],
});
