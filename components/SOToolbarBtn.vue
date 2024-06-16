<script setup lang="ts">
interface SOToolbarBtnProps {
  icon: string
  label: string
}

withDefaults(defineProps<SOToolbarBtnProps>(), {
  icon: '',
  label: '',
})
</script>

<template>
  <UButton
    color="black"
    variant="solid"
  >
    <UIcon
      v-if="icon"
      class="text-lg"
      :name="icon"
    />

    {{ label }}
  </UButton>
</template>
