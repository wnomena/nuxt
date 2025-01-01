import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({

  devtools: { enabled: false },
  plugins : [],
  compatibilityDate: "2024-11-01",

  modules: ["@pinia/nuxt","nuxt-aos"]
})
