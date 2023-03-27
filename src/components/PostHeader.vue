<script setup lang="ts">
defineProps<{
  frontmatter: {}
}>()
</script>

<template>
  <code>
    <pre>
      {{ frontmatter }}
    </pre>
  </code>
</template>
