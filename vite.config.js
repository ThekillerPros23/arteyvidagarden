import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';
import Sitemap from 'vite-plugin-sitemap';

const baseUrl = 'https://arteyvidagardens.pages.dev';

export default defineConfig({
  plugins: [
    react(),
    Pages(),
    Sitemap({
      hostname: baseUrl,
      routes: ['/about', '/services', '/contact'], // Agrega tus rutas
    }),
  ],
});
