<script setup lang="ts">
interface PropsType {
  variant?:
  | 'basic'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  size?: 'normal' | 'larger'
  rounded?: boolean
  dot?: boolean
  showRemoveButton?: boolean
  clickable?: boolean
  onRemove?: () => void
}

const props = withDefaults(defineProps<PropsType>(), {
  variant: 'basic',
  size: 'normal',
  rounded: false,
  dot: false,
  showRemoveButton: false,
})

const classes = computed(() =>
  [
    props.variant === 'basic' ? 'bg-gray-100 text-gray-800' : '',
    props.variant === 'primary' ? 'bg-primary-100 text-primary-800' : '',
    props.variant === 'secondary' ? 'bg-secondary-100 text-secondary-800' : '',
    props.variant === 'success' ? 'bg-positive-100 text-positive-800' : '',
    props.variant === 'error' ? 'bg-negative-100 text-negative-800' : '',
    props.variant === 'warning' ? 'bg-warning-100 text-warning-800' : '',
    props.variant === 'info' ? 'bg-info-100 text-info-800' : '',
    props.size === 'larger' ? 'text-sm' : '',
    props.rounded ? 'rounded-full' : '',
    props.dot ? 'rounded-full' : '',
    props.showRemoveButton ? '!pr-1' : '',
    props.clickable ? 'cursor-pointer' : '',
  ].filter(Boolean),
)
</script>

<template>
  <div
    class="d-badge inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium relative w-max"
    :class="classes"
  >
    <slot />

    <button
      v-if="onRemove"
      type="button"
      className="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center"
      @click="onRemove"
    >
      <span className="sr-only">Remove small option</span>
      <svg
        className="h-2 w-2"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 8 8"
      >
        <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
      </svg>
    </button>
  </div>
</template>
