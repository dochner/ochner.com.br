<script setup lang="ts">
useHead({
  meta: [
    { property: 'og:title', content: 'Douglas Ochner' },
    { property: 'og:image', content: 'https://ochner.com.br/og-icon.png' },
    { name: 'description', content: 'Douglas Ochner\'s Portfolio' },
    { name: 'twitter:card', content: 'summary' },
  ],
})
</script>

<template>
  <NavBar />
  <main class="px-7 py-10">
    <router-view />
    <Footer />
  </main>
</template>
