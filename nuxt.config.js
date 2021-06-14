import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '',
    title: 'KINJYO SHOTARO’s portfolio',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '自分の今までのやってきたことや自己紹介などをまとめています。' },
      { hid: 'keywords', name: 'keywords', content: '金城,きんじょう,キンジョウ' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'KINJYO SHOTARO’s portfolio' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://kinjyo.me' },
      { hid: 'og:title', property: 'og:title', content: 'KINJYO SHOTARO’s portfolio' },
      { hid: 'og:description', property: 'og:description', content: 'KINJYO SHOTARO’s portfolio' },
      { hid: 'og:image', property: 'og:image', content: '@/assets/image/image.png' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Twitter' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      
      
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    
  ],
  
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: "#F44537",
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          speakerDeck:'#019287',
          facebook: '#448AFF',
          twitter: '#1DA1F2',
          qiita: '#4cb10d'
        },
        light: {
          primary: colors.red.darken2,
          accent: colors.blue.darken3,
          speakerDeck:'#019287',
          github: '#211F1F',
          facebook: '#448AFF',
          twitter: '#1DA1F2',
          qiita: '#4cb10d'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
