<script setup lang="ts">
defineProps({
  label: String,
})
</script>

<template>
  <div
    un-rounded-lg
    un-border="~ current"
    un-text="~ 10px current"
    un-max-w-max
    un-max-h="max"
    un-flex="~ items-center justify-center"
    un-p="x-2"
    un-h="4"
  >
    <div>
      {{ label }}
    </div>
  </div>
</template>
