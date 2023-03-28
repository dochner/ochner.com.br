<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { RouterLinkProps } from 'vue-router'

interface PropsType extends Omit<RouterLinkProps, 'to'> {
  variant?: 'primary' | 'secondary' | 'white' | 'text' | 'accent'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  icon?: string
  iconRight?: string
  label?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  round?: boolean
  href?: string
  to?: string
  fab?: boolean
}

const props = defineProps<PropsType>()

const classes = computed(() =>
  [
    props.variant === 'primary'
      ? 'text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
      : '',
    props.variant === 'secondary'
      ? 'text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
      : '',
    props.variant === 'white'
      ? 'text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
      : '',
    props.variant === 'text'
      ? 'text-primary-600 hover:text-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
      : '',
    props.variant === 'accent'
      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
      : '',
    'px-4 py-2',
    props.size === 'xs' ? 'px-2.5 py-1.5 text-xs' : '',
    props.size === 'sm' ? 'px-3 py-2 text-sm' : '',
    props.size === 'md' ? 'px-4 py-2 text-sm' : '',
    props.size === 'lg' ? 'px-4 py-2 text-base' : '',
    props.size === 'xl' ? 'px-6 py-3 text-base' : '',
    props.fab ? '!rounded-full !p-4' : '',
    props.round ? 'rounded-full' : 'rounded-md',
  ].filter(Boolean),
)

const isLink = computed(() => props.to)
const isExternal = computed(() => props.to?.includes('http'))

const componentIs = computed(() => {
  if (isLink.value && isExternal.value)
    return 'a'
  else if (isLink.value)
    return RouterLink
  else return 'button'
})
</script>

<template>
  <component
    v-bind="$attrs"
    :is="componentIs"
    :class="classes"
    class="inline-flex items-center justify-center border border-transparent text-base font-semibold h-max"
  >
    <slot name="icon-left">
      <div v-if="icon" class="h-6 w-6 h-5 w-5" :class="[icon, !fab ? '-ml-1 mr-3' : '']" />
    </slot>
    <slot>
      <span>{{ label }}</span>
    </slot>
    <slot name="icon-right">
      <div
        v-if="iconRight"
        class="h-6 w-6 h-5 w-5" :class="[iconRight, !fab ? 'ml-3 -mr-1' : '']"
      />
    </slot>
  </component>
</template>
