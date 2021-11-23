<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-8 px-6">
    <div class="max-w-$md-max-width mx-auto opacity-50 flex">
      <span class="text-sm">
        <a target="_blank" rel="noopener" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" style="color:inherit" class="!font-normal">
          CC BY-NC-SA 4.0
        </a>
        {{ year }} © <a href="https://github.com/dochner" rel="noopener" target="_blank">dochner</a>
      </span>
    </div>
  </footer>
</template>
