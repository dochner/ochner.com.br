<script setup lang="ts">
const props = withDefaults(defineProps<{
  showSeconds?: boolean
  blinkDots?: boolean
}>(), {
  showSeconds: false,
  blinkDots: true,
})

const time = ref(new Date())

const formattedTime = computed(() => time.value.toLocaleTimeString([], {
  hour: 'numeric',
  minute: '2-digit',
  second: props.showSeconds ? '2-digit' : undefined,
}))

function updateTime() {
  time.value = new Date()
}

let intervalId: ReturnType<typeof setInterval> | undefined
const hasInitialized = ref(false)

onBeforeMount(() => {
  updateTime()
  intervalId = setInterval(updateTime, 1000)

  hasInitialized.value = true
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div
    v-show="hasInitialized"
    class="flex items-center text-sm text-black font-medium w-14"
  >
    {{ formattedTime }}
  </div>
</template>
