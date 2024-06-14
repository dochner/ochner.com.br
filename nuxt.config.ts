// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxt/eslint',
    "@dochner/nuxt-ui"
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },
})