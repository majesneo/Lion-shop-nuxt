export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Lion-shop',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.css',
    '@/node_modules/bootstrap-vue/dist/bootstrap-vue.css',
    '@/assets/css/line-awesome.min.css',
    '@/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: 'plugins/owl.js', ssr: false },
    '@/plugins/bootstrap',
    '@/plugins/vuelidate',
    '@/plugins/axios',
    '@/plugins/dateFilter',
    { src: '@/plugins/productZoomer', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/eslint-module'],

  serverMiddleware: {
    '/api': '~/api'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  /*  axios: {
    proxy: true
  },

  proxy: {
    '/api/': { target: 'http://nuxt-shop.quando.pro', pathRewrite: { '^/api/': '' } }
  }, */

  // Build Configuration: https://go.nuxtjs.dev/config-build

  loading: {
    color: '#c96'
  }
}
