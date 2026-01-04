<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const cursorX = ref(0)
const cursorY = ref(0)
const isHovering = ref(false)
const hoverSize = ref({ width: 0, height: 0 })

let currentX = 0
let currentY = 0
let aimX = 0
let aimY = 0
let animationFrameId: number

const animate = () => {
  // Smooth cursor movement with easing
  currentX += (aimX - currentX) * 0.2
  currentY += (aimY - currentY) * 0.2

  cursorX.value = currentX
  cursorY.value = currentY

  animationFrameId = requestAnimationFrame(animate)
}

const handleMouseMove = (e: MouseEvent) => {
  aimX = e.clientX
  aimY = e.clientY
}

const handleMouseEnter = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  const rect = target.getBoundingClientRect()

  isHovering.value = true
  hoverSize.value = {
    width: rect.width + 12, // Add 12px padding for X
    height: rect.height + 8, // Add 8px padding for Y
  }
}

const handleMouseLeave = () => {
  isHovering.value = false
}

const setupInteractiveListeners = () => {
  // Remove old listeners
  const oldElements = document.querySelectorAll('a, button, .cursor-hover')
  oldElements.forEach((el) => {
    el.removeEventListener('mouseenter', handleMouseEnter as EventListener)
    el.removeEventListener('mouseleave', handleMouseLeave)
  })

  // Add new listeners to all interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .cursor-hover, input, textarea, select')
  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', handleMouseEnter as EventListener)
    el.addEventListener('mouseleave', handleMouseLeave)
  })
}

onMounted(() => {
  // Start animation loop
  animate()

  // Add event listeners
  document.addEventListener('mousemove', handleMouseMove)

  // Initial setup of interactive listeners
  setupInteractiveListeners()

  // Re-setup listeners on route changes (for SPAs)
  const observer = new MutationObserver(() => {
    setupInteractiveListeners()
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
})

onUnmounted(() => {
  if (animationFrameId)
    cancelAnimationFrame(animationFrameId)

  document.removeEventListener('mousemove', handleMouseMove)

  const interactiveElements = document.querySelectorAll('a, button, .cursor-hover, input, textarea, select')
  interactiveElements.forEach((el) => {
    el.removeEventListener('mouseenter', handleMouseEnter as EventListener)
    el.removeEventListener('mouseleave', handleMouseLeave)
  })
})
</script>

<template>
  <div
    class="custom-cursor"
    :class="{ hovering: isHovering }"
    :style="{
      left: `${cursorX}px`,
      top: `${cursorY}px`,
      width: isHovering ? `${hoverSize.width}px` : '20px',
      height: isHovering ? `${hoverSize.height}px` : '20px',
    }"
  />
</template>

<style>
.custom-cursor {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  border-radius: 50%;
  background: rgba(30, 41, 59, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              height 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              border-radius 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              background 0.3s ease;
}

.custom-cursor.hovering {
  background: rgba(30, 41, 59, 0.25);
  border-radius: 8px;
}

/* Dark mode support */
html.dark .custom-cursor {
  background: rgba(248, 248, 248, 0.2);
}

html.dark .custom-cursor.hovering {
  background: rgba(248, 248, 248, 0.25);
}

/* Mobile: hide custom cursor */
@media (pointer: coarse) {
  .custom-cursor {
    display: none;
  }
}
</style>
