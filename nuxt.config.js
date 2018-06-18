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
      { rel: 'alternate', href: '', hreflang : 'lt' }
    ]
  },
  modules: [
    '@nuxtjs/font-awesome',
    ['@nuxtjs/google-tag-manager', { id: myKeys.gtmID }]
  ],
  css: [
    '@/assets/main.scss',
    '@/static/css/custom.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#a63a50',
    height: '3px'
  },
  // router: {
  //   base: '/bandymas/'
  // },
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
        return res.data.entries.map((page) => {return page.URL})
      })
    },
    fallback: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'axios'
    ],
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    // extractCSS: true
    extractCSS: {
      allChunks: true
    }
  }
}
