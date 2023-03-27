<script setup lang="ts">
useHead({
  title: 'Douglas Ochner',
  meta: [
    { name: 'description', content: 'Douglas Ochner\'s Website' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#1d1d1d' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
