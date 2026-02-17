// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', 'nuxt-gtag'],

  devtools: {
    enabled: true
  },
  app: {
    head: {
      title: 'Psicólogos | landing Pages para psicólogos',
      meta: [
        {
          name: 'description',
          content:
            'Psicoterapia online e presencial em São Paulo (SP). Atendimento infantil, adolescentes e adultos. Agende sua sessão pelo WhatsApp.'
        },

        // Open Graph
        { property: 'og:title', content: 'Nome Psicólogo | Psicóloga Clínica' },
        {
          property: 'og:description',
          content: 'Psicoterapia com escuta ética e acolhedora. Online e presencial em São Paulo.'
        },
        { property: 'og:type', content: 'website' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],

  // routeRules: {
  //   '/': { prerender: true }
  // },

  compatibilityDate: '2025-01-15',

  // nitro: {
  //   preset: 'static'
  // },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  gtag: {},
  image: {
    provider: 'none'
  }
})
