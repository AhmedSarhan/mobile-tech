export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Mobile Tech',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js' },
      {
        src:
          'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js',
      },
      {
        src: 'https://use.fontawesome.com/bf14e03edb.js',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap',
        rel: 'stylesheet',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css',
      },
    ],
  },

  loading: {
    color: '#fa923f',
    height: '4px',
    duration: 5000,
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://sarhan-food-menu.firebaseio.com/',
    hostUrl: process.env.HOST_URL || 'https://nuxt-color-picker.vercel.app',
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/styles/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/core-components',
    { src: '~/plugins/vuex-persist', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['vue-social-sharing/nuxt'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
