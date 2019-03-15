const pkg = require('./package')
const axios = require('axios')
module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/components',
    '~/plugins/filters'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ['storyblok-nuxt', {
      accessToken: process.env.NODE_ENV == 'production' ? '7qHGKJxaGEWvTGrg9fUAgwtt' : 'moS7iRLxjDiEC9ZoVMiEvgtt',
      cacheProvider: 'memory'
    }]
  ],
  generate: {
    routes: [function () {
      return axios.get('https://api.storyblok.com/v1/cdn/stories?&version=published&token=7qHGKJxaGEWvTGrg9fUAgwtt&start_with=blog&cv=' + Math.floor(Date.now() / 1e3), ).then(res => {
        const blogPosts = res.data.stories.map(bp => bp.full_slug);
        return [
          '/',
          '/blog',
          '/about',
          ...blogPosts
        ]
      })
    }]
  },

  /*
   ** Router middleware
   */
  router: {
    middleware: 'setCacheVersion'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  }
}
