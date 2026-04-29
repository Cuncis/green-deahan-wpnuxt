// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    ['@wpnuxt/core', {
      wordpressUrl: 'https://greendeahan.com',
    }],
  ],
  app: {
    head: {
      link: [
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
