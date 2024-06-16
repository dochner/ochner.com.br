<script setup lang="ts">
import type { UCard } from '#build/components'

const emit = defineEmits(['update:modelValue'])

const modelValue = defineModel({
  type: Boolean,
  default: false,
})

const windowRef = ref<InstanceType<typeof UCard>>()
const element = computed(() => windowRef.value?.$el)

const { style } = useDraggable(element, {
  initialValue: { x: 150, y: 150 },
})
const localStyles = ref({ top: '0px', left: '0px' })

function toggle() {
  emit('update:modelValue', !modelValue.value)
}

watch(style, (next) => {
  const newStyle = next.split(';').reduce((acc: Record<string, number>, style) => {
    const [key, value] = style.split(':')
    acc[key.trim()] = Number.parseInt(value, 10)
    return acc
  }, { top: 0, left: 0 })

  localStyles.value = {
    top: `${Math.max(0, newStyle.top)}px`,
    left: `${Math.max(0, newStyle.left)}px`,
  }
}, { immediate: true })
</script>

<template>
  <UCard
    v-show="modelValue"
    ref="windowRef"
    class="absolute rounded-lg shadow-lg min-w-full sm:min-w-80 px-2 resize"
    draggable="false"
    :style="localStyles"
  >
    <div class="flex flex-wrap gap-2 p-2 text-xl absolute top-0 left-0">
      <button
        class="rounded-full p-1.5 bg-red-500 hover:bg-red-600 active:bg-red-700"
        @click="toggle"
      />
    </div>

    <slot name="header" />

    <slot />
  </UCard>
</template>
