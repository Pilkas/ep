const axios = require('axios')

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
    script: [
      { src: '/js/fa-solid.js' },
      { src: '/js/fontawesome.min.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
    ]
  },
  css: [
    '@/assets/main.scss',
    '@/static/css/custom.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: 'blue',
    height: '5px'
  },
  transition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter (el) {
      // console.log('Before enter...');
    }
  },
  env: {
    cockpit: {
      apiUrl: 'http://appetite.ahost.lt/cockpitCMS/api',
      apiToken: '42a4ea47475e32209cff82187a050b',
      baseUrl: 'http://appetite.ahost.lt/cockpitCMS'
    }
  },
  generate: {
    routes: function () {
      return axios.get('http://appetite.ahost.lt/cockpitCMS/api/collections/get/page?token=42a4ea47475e32209cff82187a050b')
      .then((res) => {
        return res.data.entries.map((page) => {return page.URL})
      })
    }
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
    extractCSS: true,
  }
}
