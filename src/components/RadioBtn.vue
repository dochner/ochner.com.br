<script setup lang="ts">
const props = defineProps({
  label: String,
  id: String,
  name: String,
  modelValue: null,
  value: null,
})

const emits = defineEmits([
  'update:model-value'
])

const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:model-value', value)
  }
})
</script>

<template>
<label :for="id" class=" flex flex-row flex-nowrap space-x-4 items-center">
  <input type="radio" :name="name" :id="id" v-model="model" :value="value">
  <div class="text-sm leading-8">
    {{ label }}
  </div>
</label>
</template>
