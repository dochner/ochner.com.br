<script setup lang="ts">
const props = withDefaults(defineProps<{
  label?: string
  variant?: 'primary' | 'transparent'
  size?: 'sm' | 'md' | 'lg'
  leadingIcon?: string
  trailingIcon?: string
}>(), {
  label: 'Button',
  variant: 'primary',
  size: 'md',
  leadingIcon: '',
  trailingIcon: '',
})

const buttonSize = computed(() => {
  if (props.size === 'sm') {
    return 'py-1.5 px-3 text-xs'
  }
  else if (props.size === 'lg') {
    return 'py-4 px-6 text-lg'
  }
  else {
    return 'py-3 px-5 text-base'
  }
})

const buttonStyle = computed(() => {
  if (props.variant === 'primary') {
    return 'bg-indigo-500 hover:bg-indigo-600 text-white hover:text-white border-indigo-500 hover:border-white'
  }
  else {
    return 'border-transparent hover:bg-stone-900/10 hover:border-stone-900/10 active:bg-stone-900/20 active:text-white text-black'
  }
})
</script>

<template>
  <button
    class="inline-flex group items-center justify-center text-sm border font-medium rounded-full transition duration-200"
    :class="[
      buttonSize,
      buttonStyle,
    ]"
  >
    <div
      v-if="leadingIcon"
      class="mr-2 flex items-center justify-center"
    >
      <slot name="leading-icon">
        <div :class="leadingIcon" />
      </slot>
    </div>

    <slot>
      {{ props.label }}
    </slot>

    <div
      v-if="trailingIcon"
      class="ml-2 flex items-center justify-center"
    >
      <slot name="trailing-icon">
        <div :class="trailingIcon" />
      </slot>
    </div>
  </button>
</template>
