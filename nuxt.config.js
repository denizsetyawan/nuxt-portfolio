export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dnz portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'dnz portfolio' },
      { name: 'keywords', content: 'Portfolio, Website, Web Developer' },
      { name: 'author', content: 'Deniz Setyawan' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "google-site-verification", content: "n7IDtG5QlrxeTAwQ-684f_uGJUNoWImfV0G7PVpGQGs" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap'
  ],

  // Sitemap
  sitemap: {
    hostname: 'https://www.dnz.my.id',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  //Vuetify
  vuetify: {
    theme: {
      options: {
        customProperties: true
      },
      dark: true,
      themes: {
        dark: {
          background: '#202023'
        },
        light: {
          background: '#F0E7DB'
        }
      }
    }
  }
}
