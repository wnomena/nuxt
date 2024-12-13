import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css : ["../node_modules/bootstrap/dist/css/bootstrap.min.css",
    "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
  ],
  devtools: { enabled: false },

  // modules: ["pinia"]
  compatibilityDate: "2024-11-01",

  modules: ["@pinia/nuxt"]
})