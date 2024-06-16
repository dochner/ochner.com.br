<script setup lang="ts">
const opened = ref(true)

const appStore = useAppStore()
</script>

<template>
  <SOWindow>
    <template #header>
      <h1>Contact</h1>
    </template>
    <UContainer>
      <p>Contact me via:</p>

      <ul>
        <li>
          Email: <a href="mailto:douglas@example.com" />
        </li>
        <li>
          Phone: <a href="tel:+1234567890">+1234567890</a>
        </li>
      </ul>
    </UContainer>
  </SOWindow>
</template>
