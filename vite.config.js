// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.svg', 'robots.txt', 'icons/*.png', 'manifest.json'],
      manifest: {
        name: 'Hotelin',
        short_name: 'Hotelin',
        description: 'Hotel Reservation Platform',
        theme_color: '#22212b',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '.',
        icons: [
          { src: 'icons/16x16.png', sizes: '16x16', type: 'image/png' },
          { src: 'icons/32x32.png', sizes: '32x32', type: 'image/png' },
          { src: 'icons/72x72.png', sizes: '72x72', type: 'image/png' },
          { src: 'icons/96x96.png', sizes: '96x96', type: 'image/png' },
          { src: 'icons/120x120.png', sizes: '120x120', type: 'image/png' },
          { src: 'icons/128x128.png', sizes: '128x128', type: 'image/png' },
          { src: 'icons/144x144.png', sizes: '144x144', type: 'image/png' },
          { src: 'icons/152x152.png', sizes: '152x152', type: 'image/png' },
          { src: 'icons/180x180.png', sizes: '180x180', type: 'image/png' },
          { src: 'icons/192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/384x384.png', sizes: '384x384', type: 'image/png' },
          { src: 'icons/512x512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'icons/512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        shortcuts: [
          {
            name: 'Map Plugin',
            short_name: 'Map',
            description: 'Search for hotels near your destination',
            url: '/map',
            icons: [
              {
                src: 'icons/map-192x192.png',
                sizes: '192x192',
                type: 'image/png'
              }
            ]
          },
          {
            name: 'Profile',
            short_name: 'Profile',
            description: 'manage your account',
            url: '/profile',
            icons: [
              {
                src: 'icons/profile-192x192.png',
                sizes: '192x192',
                type: 'image/png'
              }
            ]
          }
        ]
      },
      workbox: {
        navigateFallback: '/index.html',
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        runtimeCaching: [
          {
            urlPattern: ({ request }) =>
              ['document', 'script', 'style'].includes(request.destination),
            handler: 'StaleWhileRevalidate',
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /manifest\.json$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'manifest-cache',
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^http:\/\/localhost:5000\/hotels/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-hotels-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 24 * 60 * 60,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],

      }
    })
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
})
