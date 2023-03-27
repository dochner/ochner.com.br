<script setup lang="ts">
import type { PropTypes as TabProps } from './Tab.vue'

defineProps<{
  tabs?: TabProps[]
}>()
</script>

<template>
  <nav class="-mb-px flex space-x-8 h-full" aria-label="Tabs">
    <Tab
      v-for="tab in tabs"
      :key="tab.label"
      :name="tab.name"
      :label="tab.label"
      :to="tab.to"
      :aria-current="tab.name ? 'page' : undefined"
    />
  </nav>
</template>
