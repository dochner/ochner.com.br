<script setup lang="ts">
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionRoot,
} from '@headlessui/vue'
</script>

<template>
  <Menu as="div" class="relative flex text-left">
    <MenuButton
      class="inline-flex pa-xs w-full justify-center rounded-md border border-gray-300 dark:border-dark-50 dark:bg-dark-200"
    >
      <span class="sr-only">Open theme options</span>
      <div v-if="!isDark" class="h-5 w-5 i-carbon-sun" aria-hidden="true" />
      <div v-else class="h-5 w-5 i-carbon-moon" aria-hidden="true" />
    </MenuButton>
    <TransitionRoot
      enter="transition ease-out duration-100"
      enter-from="transform opacity-0 scale-95"
      enter-to="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leave-from="transform opacity-100 scale-100"
      leave-to="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-8 w-40 pa-sm origin-top-right rounded-md bg-white dark:bg-dark-300 ring-1 border-1 border-gray-300 dark:border-dark-100 ring-black ring-opacity-5 focus:outline-none space-y-xs"
        :class="!isDark ? 'bg-gray-200 dark:bg-dark-50' : ''"
      >
        <MenuItem>
          <div
            class="pa-sm row space-x-md items-center rounded-lg hover:bg-gray-200 dark:hover:bg-dark-100 cursor-pointer"
            @click="toggleDark(false)"
          >
            <div class="h-6 w-6 i-carbon-sun rounded-lg border border-gray-300 dark:border-dark-100 pa-xs bg-white dark:bg-dark-300" />
          </div>
        </MenuItem>
        <MenuItem>
          <div
            class="pa-sm row space-x-md items-center rounded-lg hover:bg-gray-200 dark:hover:bg-dark-100 cursor-pointer"
            @click="toggleDark(true)"
          >
            <div class="h-6 w-6 i-carbon-moon rounded-lg border border-gray-300 dark:border-dark-100 pa-xs bg-white dark:bg-dark-300" />
          </div>
        </MenuItem>
      </MenuItems>
    </TransitionRoot>
  </Menu>
</template>
