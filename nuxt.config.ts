import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr : true,
  devtools: { enabled: false },
  plugins : [],
  compatibilityDate: "2024-11-01",

  modules: ["@pinia/nuxt", "nuxt-aos", "nuxt-swiper"]
})
