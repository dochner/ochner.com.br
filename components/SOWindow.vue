<script setup lang="ts">
import type { UCard } from '#build/components';

const windowRef = ref<InstanceType<typeof UCard>>()
const element = computed(() => windowRef.value?.$el)

const { style } = useDraggable(element)
const localStyles = ref({ top: '0px', left: '0px' })

// prevent the window from going out of the screen
watch(style, (next) => {
// style is a string value like "top: 100px; left: 100px;" we need to extract the values
  const newStyle = next.split(';').reduce((acc: Record<string, number>, style) => {
    const [key, value] = style.split(':')
    acc[key.trim()] = parseInt(value, 10)
    return acc
  }, { top: 0, left: 0})

  localStyles.value = {
    top: Math.max(0, newStyle.top) + 'px',
    left: Math.max(0, newStyle.left) + 'px',
  }
})
</script>

<template>
  <UCard 
    ref="windowRef" 
    class="absolute rounded-lg shadow-lg min-w-32 pb-10 pt-8 px-2" 
    draggable="false"
    :style="localStyles"
  >
    <div class="flex flex-wrap gap-2 p-2 text-xl absolute top-0 left-0">
      <button>
        <UIcon class="bg-red-500" name="i-heroicons-x-circle-solid" />
      </button>
    </div>


    <slot></slot>
  </UCard>
</template>