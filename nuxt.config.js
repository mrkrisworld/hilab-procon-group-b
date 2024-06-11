import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'hilab | %s',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/styles.scss',
    '~/assets/css/fonts.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/day.js',
    '~/plugins/full_calendar.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/firebase'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  firebase: {
    config: {
      apiKey: 'AIzaSyDat8GLF8HoorMCNfD3XWTmKvwZSGev2Fc',
      authDomain: 'proconbulletinboard.firebaseapp.com',
      databaseURL: 'https://proconbulletinboard-default-rtdb.firebaseio.com',
      projectId: 'proconbulletinboard',
      storageBucket: 'proconbulletinboard.appspot.com',
      messagingSenderId: '1073896450744',
      appId: '1:1073896450744:web:417c6b08a05a328c39a24d',
      measurementId: 'G-S92VLC6CXJ'
    },
    services: {
      firestore: true
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: [
      '~/assets/css/variables.scss'
    ],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: { //TODO: use colors from variable.scss
          primary: '#06A098',
          accent: '#E7F6F5',
          secondary: '#036560',
          info: '#E7F6F5',
          warning: '#CFC382',
          error: '#CF8282',
          success: '#82CFCB'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
