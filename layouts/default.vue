<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen">
    <SOToolbar>
      <SOToolbarClock
        blink-dots
        show-seconds
      />
    </SOToolbar>

    <slot />

    <SODock class="absolute bottom-0 left-1/2 transform -translate-x-1/2" />
  </div>
</template>
