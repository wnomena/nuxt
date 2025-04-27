import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr : false,
  modules: ["@pinia/nuxt", "nuxt-aos"],
  compatibilityDate: "2025-04-09"
})