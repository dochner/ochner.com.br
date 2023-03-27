<script setup lang="ts">
import { RouterLink } from 'vue-router'

export interface PropTypes {
  modelValue?: string
  to?: string
  icon?: string
  label?: string
  name?: string
  iconRight?: string
}

const props = defineProps<PropTypes>()

const emits = defineEmits<{
  (event: 'update:modelValue', value?: string): void
}>()

const isActive = computed(() => props.modelValue !== undefined ? props.modelValue === 'name' : false)

const onClickUpdate = () => {
  emits('update:modelValue', props.name)
}
const isLink = computed(() => props?.to)
const componentIs = computed(() => (isLink.value ? RouterLink : 'div'))
</script>

<template>
  <component
    :is="componentIs"
    class="cursor-pointer group inline-flex items-center px-1 pt-1 border-b-2 font-medium h-full cursor-pointer group inline-flex items-center px-1 pt-1 border-b-2 font-medium h-full"
    :class="[
      isActive
        ? 'border-primary-500 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500'
        : 'border-transparent text-gray-600 dark:text-gray-200 hover:text-primary-500 hover:border-primary-400',
    ]"
    :active-class="
      isLink
        ? 'border-primary-500 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500'
        : ''
    "
    :to="to"
    @click="(event: MouseEvent) => modelValue ? onClickUpdate : event"
  >
    <slot name="icon">
      <div class="h-5 w-5 mr-4" :class="icon" />
    </slot>
    <slot>
      <span>{{ label }}</span>
    </slot>

    <slot name="icon-right">
      <div class="h-5 w-5 ml-4" :class="iconRight" />
    </slot>
  </component>
</template>
