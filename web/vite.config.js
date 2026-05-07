import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const pagesRoot = path.resolve(fileURLToPath(new URL('../slash_fun_pages', import.meta.url)));

export default defineConfig({
  root: '../slash_fun_pages',
  server: {
    host: '127.0.0.1',
    port: 5173,
    fs: {
      allow: ['..'],
    },
  },
  build: {
    outDir: '../slash_fun_pages/dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: path.join(pagesRoot, 'index.html'),
        callouts: path.join(pagesRoot, 'callouts.html'),
        live: path.join(pagesRoot, 'live.html'),
        support: path.join(pagesRoot, 'support.html'),
        chat: path.join(pagesRoot, 'chat.html'),
        terminal: path.join(pagesRoot, 'terminal.html'),
        more: path.join(pagesRoot, 'more.html'),
      },
    },
  },
});
