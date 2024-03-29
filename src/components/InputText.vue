<script setup lang="ts">
interface PropTypes {
  id?: string
  name: string
  label?: string
  modelValue?: string
  prependIcon?: string
  appendIcon?: string
  cornerHint?: string
  addon?: string
  inlineAddon?: string
  error?: string
  hint?: string
  placeholder?: string
  required?: boolean
  debounce?: number
}

const props = withDefaults(defineProps<PropTypes>(), {
  debounce: 0,
})

const emits = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const onInputValue = useDebounceFn((event) => {
  emits('update:modelValue', (event.target as HTMLInputElement).value)
}, props.debounce)
</script>

<template>
  <div>
    <div>
      <label class="block font-medium text-dark-300 dark:text-white" :for="name">{{ label }}</label>
    </div>
    <input
      :id="id"
      type="text"
      :name="name"
      :placeholder="placeholder"
      class="block w-full p-3 border border-gray-300 hover:border-dark-500 dark:border-dark-100 placeholder-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md bg-white dark:bg-dark-50 dark:text-white focus:ring-1 transition-all" :class="[
        error ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : '',
        prependIcon ? 'pl-10' : '',
        appendIcon ? 'pr-10' : '',
      ]"
      :value="modelValue"
      :required="required"
      @input="onInputValue"
    >

    <div class="transition-height transition-duration-300">
      <p v-if="error" class="mt-2 text-sm text-red-600 dark:text-red-400">
        {{ error }}
      </p>
      <p v-else-if="hint" class="mt-2 text-sm text-gray-500 dark:text-dark-100">
        {{ hint }}
      </p>
    </div>
  </div>
</template>
