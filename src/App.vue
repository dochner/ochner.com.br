<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Douglas Ochner',
  meta: [
    { property: 'og:title', content: 'Douglas Ochner' },
    { property: 'og:image', content: 'https://ochner.com.br/avatar.webp' },
    { property: 'og:type', content: 'website' },
    { name: 'description', content: 'Douglas Ochner\'s Portfolio' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: '@dochner' },
  ],
  htmlAttrs: {
    prefix: 'og: http://ogp.me/ns#',
  },
})

// @unocss-safelist: bg-sky-400 bg-op-70 fixed z-1031 top-0 inset-x-0 h-2px
</script>

<template>
  <Header />
  <main class="pt-$header-height">
    <div class="px-6 py-10 md:py-16">
      <router-view />
    </div>
  </main>
  <Footer />
</template>
