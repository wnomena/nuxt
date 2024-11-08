// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css : ["../node_modules/bootstrap/dist/css/bootstrap.min.css",
    "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
  ],

  // modules: ['usebootstrap']
  devtools: { enabled: false },

  compatibilityDate: "2024-11-01"
})