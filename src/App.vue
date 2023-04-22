<script setup lang="ts">
import { APP_URL } from './constants'

useHead({
  meta: [
    { property: 'og:title', content: 'Douglas Ochner' },
    { property: 'og:image', content: `${APP_URL}/og-icon.png` },
    { property: 'og:type', content: 'website' },
    { property: 'og:description', content: 'I love develop websites and create amazing things' },
    { name: 'description', content: 'Douglas Ochner\'s Portfolio' },
    { name: 'twitter:card', content: 'summary' },
  ],
})
</script>

<template>
  <TheNavBar />
  <main class="px-7 py-10">
    <router-view />
    <TheFooter />
  </main>
</template>
