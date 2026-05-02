// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    ['@wpnuxt/core', {
      wordpressUrl: process.env.WPNUXT_WORDPRESS_URL,
    }],
  ],
  graphqlMiddleware: {
    downloadSchema: 'dev-only',
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: 'https://gdlogin.greendeahan.com/wp-content/uploads/2026/04/GD-logo-1.png',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@400;500;600;700;800&display=swap',
        },
      ],
      script: [
        { src: 'https://cdn.tailwindcss.com' },
      ],
    },
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/.nuxt/**',
          '**/.output/**',
        ],
      },
    },
  },
})
