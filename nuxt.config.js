
require("dotenv").config();
const config = require('./.contentful.json')
const contentful = require('contentful')
const client = contentful.createClient({
  space: config.CTF_SPACE_ID,
  accessToken: config.CTF_CDA_ACCESS_TOKEN
});

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */

  head: {
    htmlAttrs: {
      prefix: "og: http://ogp.me/ns#"
    },
    titleTemplate: "%s",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      {
        hid: "description",
        name: "description",
        content:
          "FitpoiはAIが自動で今のあなたに最適なワークアウトメニューを生成＋記録する次世代フィットネスアプリです。"
      },
      {
        name: "keywords",
        content: "Fitpoi, 運動, 筋トレ, モチベーション, 維持"
      },
      { 'http-equiv': "X-UA-Compatible", content: "IE=edge"},
      { hid: "og:site_name", property: "og:site_name", content: "fitpoi"},
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: "https://fitpoi.com/" },
      { hid: "og:title", property: "og:title", content: "今、あなたに、最適な運動を。" },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "FitpoiはAIが自動で今のあなたに最適なワークアウトメニューを生成＋記録する次世代フィットネスアプリです。"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "~/assets/insta/insta1.jpg"
      },
      { property: "og:locale",content: "ja_JP"},
      { name: "twitter:site",content: "@fitpoi_app"},
      { name: "twitter:card", content: "summary_large_image"}
      
    ],
    script: [
      { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"}
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.1/css/all.css"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // {
    //   src: '@/plugins/plugin',
    //   mode: 'client'
    // }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],

  serverMiddleware: [

  ],
  /*
   ** Nuxt.js modules
   */

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    vendor: ["aframe"]
  },
  env: {
    baseUrl: process.env.BASE_URL || "https://fitpoi.com",
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
  },
  router: {
    base: "/",
  },
  modules: [
    '@nuxtjs/dotenv',
    ['@nuxtjs/google-analytics', {
      id: 'UA-148428453-8'
    }]

  ],
  generate: {
    routes: function() {
      let posts = client.getEntries({
              content_type: config.CTF_BLOG_POST_TYPE_ID
            })
            .then((entries) => {
                return entries.items.map((entry) => {
                    return {
                      route: `posts/${entry.fields.slug}`,
                      payload: entry
                    }
                })
            }
          )
      let news = client.getEntries({
              content_type: 'news'
            })
            .then((entries) => {
                return entries.items.map((entry) => {
                    return {
                        route: `news/${entry.fields.slug}`,
                    }
                })
            }
        )
        return Promise.all([posts, news]).then(values => {
          return [...values[0], values[1]];
        });
    }
  }
};

