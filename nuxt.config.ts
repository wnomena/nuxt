import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr : false,
  modules: ["@pinia/nuxt", "nuxt-aos", "nuxt-swiper"],
  compatibilityDate: "2025-04-09"
})
