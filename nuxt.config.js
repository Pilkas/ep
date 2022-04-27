const axios = require('axios')
const myKeys = require('./myKeys')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ep',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'EP site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './img/favicon.ico' },
    ]
  },
  modules: [
    '@nuxtjs/font-awesome',
    ['@nuxtjs/google-tag-manager', { id: myKeys.gtmID }]
  ],
  css: [
    '~/assets/main.scss',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#a63a50',
    height: '3px'
  },
  router: {
    routes: [
      {
        name: 'index',
        path: '/',
        component: 'pages/index.vue'
      },
      {
        name: 'slug',
        path: '/:slug',
        component: 'pages/_slug/index.vue'
      }
    ]
  },
  env: {
    cockpit: {
      apiUrl: 'http://appetite.ahost.lt/cockpitCMS/api',
      apiToken: myKeys.cockpitToken,
      baseUrl: 'http://appetite.ahost.lt/cockpitCMS'
    }
  },
  generate: {
    routes: function () {
      return axios.get('http://appetite.ahost.lt/cockpitCMS/api/collections/get/page?token=' + myKeys.cockpitToken)
        .then((res) => {
          return res.data.entries.map((page) => { return page.URL })
        })
    },
    fallback: true
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
  },
  components: true,
  target: 'static'
}
