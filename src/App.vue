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
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<style>
#app {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr max-content
}
</style>
