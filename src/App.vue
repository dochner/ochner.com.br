<script setup lang="ts">
import { APP_URL } from './constants'

useHead({
  meta: [
    { property: 'og:title', content: 'Douglas Ochner' },
    { property: 'og:image', content: `${APP_URL}/og-icon.png` },
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
