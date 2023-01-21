<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Douglas Ochner',
  htmlAttrs: {
    prefix: 'og: https://ogp.me/ns/website#',
  },
})

// @unocss-safelist: bg-sky-400 bg-op-70 fixed z-1031 top-0 inset-x-0 h-2px
</script>

<template>
  <Header />
  <main class="pt-$header-height">
    <div class="px-6 py-10 md:py-16">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </main>
  <Footer />
</template>
