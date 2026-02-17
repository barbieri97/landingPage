// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image'],
  ssr: true,

  devtools: {
    enabled: true
  },
  app: {
    baseURL: '/',

    head: {
      title: 'Eliane Peres | Psicóloga Clínica em São Paulo',
      meta: [
        {
          name: 'description',
          content:
            'Psicoterapia online e presencial em Pinheiros (SP). Atendimento infantil, adolescentes e adultos. Agende sua sessão pelo WhatsApp.'
        },

        // Open Graph
        { property: 'og:title', content: 'Eliane Peres | Psicóloga Clínica' },
        {
          property: 'og:description',
          content: 'Psicoterapia com escuta ética e acolhedora. Online e presencial em São Paulo.'
        },
        { property: 'og:type', content: 'website' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    preset: 'static'
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})