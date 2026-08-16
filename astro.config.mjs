// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    AstroPWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          // ⏱️ Regla de Caché para la API de Google Apps Script (Refresco cada 5 minutos)
          {
            urlPattern: /^https:\/\/script\.google\.com\/macros\/s\/.*\/exec.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-recursos-cache',
              networkTimeoutSeconds: 3, // Si la red responde despacio o no hay conexión, sirve caché
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 5, // Expira automáticamente en 5 minutos (300 seg)
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          // Regla general para assets y documentos estáticos del sitio
          {
            urlPattern: ({ request }) => request.destination === 'document' || request.destination === 'script',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'site-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24, // 1 día
              },
            },
          },
        ],
      },
      manifest: {
        name: 'Red de Albergues Cali - Emergencia',
        short_name: 'Albergues Cali',
        description: 'Información en tiempo real sobre albergues y centros de acopio en Cali.',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});