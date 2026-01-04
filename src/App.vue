<script setup lang="ts">
import { APP_URL } from './constants'

useHead({
  meta: [
    { property: 'og:title', content: 'Douglas Ochner - Senior Frontend Engineer' },
    { property: 'og:image', content: `${APP_URL}/og-icon.png` },
    { property: 'og:type', content: 'website' },
    { property: 'og:description', content: 'Senior Frontend Engineer specializing in Vue.js, TypeScript & Nuxt. 5+ years building scalable SaaS applications. Remote from Portugal, available for US opportunities.' },
    { name: 'description', content: 'Senior Frontend Engineer | Vue.js & TypeScript Specialist | Remote from Portugal 🇵🇹 → 🇺🇸' },
    { name: 'keywords', content: 'Senior Frontend Engineer, Vue.js, TypeScript, Nuxt, Remote Developer, Portugal, SaaS, Web Development' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Douglas Ochner - Senior Frontend Engineer' },
    { name: 'twitter:description', content: 'Senior Frontend Engineer specializing in Vue.js, TypeScript & Nuxt. Remote from Portugal.' },
  ],
})
</script>

<template>
  <CustomCursor />
  <TheNavBar />
  <main class="px-7 py-10">
    <router-view />
    <TheFooter />
  </main>
</template>
