export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-experiment',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/globalStyles.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  env: {
    mailUrl: process.env.MAIL_URL,
    locationAppId: process.env.LOCATION_APP_ID,
    locationAppCode: process.env.LOCATION_APP_CODE,
    formSubmitUrl: process.env.FORM_SUBMIT_URL,
    dictionaryApiKey: process.env.DICTIONARY_API_KEY,
  },

  // Tailwind configuration
  tailwindcss: {
    config: {
      variants: {
        extend: {
          backgroundColor: [
            'responsive',
            'hover',
            'focus',
            'active',
            'group-hover',
          ],
          zIndex: ['responsive', 'hover'],
          borderSize: ['focus-within'],
          borderColor: ['focus-within'],
        },
      },
    },
  },

  eslint: {
    fix: true,
  },
}
