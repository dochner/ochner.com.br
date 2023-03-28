<script setup lang="ts">
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
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
    <transition
      enter-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-dark-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
      >
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <button
              class="group w-full items-center grid grid-cols-[max-content_1fr] rounded-md px-2 py-2 text-sm dark:text-white" :class="[
                active ? 'bg-violet-500 text-white' : 'text-gray-900',
              ]"
              @click="toggleDark(false)"
            >
              <div
                :active="active"
                class="mr-2 h-5 w-5 text-indigo-300 i-carbon-sun"
                aria-hidden="true"
              />
              Light
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              class="group w-full items-center grid grid-cols-[max-content_1fr] rounded-md px-2 py-2 text-sm dark:text-white" :class="[
                active ? 'bg-violet-500 text-white' : 'text-gray-900',
              ]"
              @click="toggleDark(true)"
            >
              <div
                :active="active"
                class="mr-2 h-5 w-5 text-indigo-300 i-carbon-moon"
                aria-hidden="true"
              />
              Dark
            </button>
          </MenuItem>
        </div>
      </MenuItems>
      <!-- <MenuItems
        class="absolute right-0 z-10 mt-8 w-40 pa-sm origin-top-right rounded-md bg-white dark:bg-dark-300 ring-1 border-1 border-gray-300 dark:border-dark-100 ring-black ring-opacity-5 focus:outline-none space-y-xs"
      >
        <MenuItem v-slot="{ active }">
          <div
            class="pa-sm row space-x-md items-center rounded-lg hover:bg-gray-200 dark:hover:bg-dark-100 cursor-pointer"
            :class="active ? 'bg-gray-200 dark:bg-dark-50' : ''"
            @click="toggleDark(false)"
          >
            <div class="h-6 w-6 i-carbon-sun rounded-lg border border-gray-300 dark:border-dark-100 pa-xs bg-white dark:bg-dark-300" />
          </div>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <div
            class="pa-sm row space-x-md items-center rounded-lg hover:bg-gray-200 dark:hover:bg-dark-100 cursor-pointer"
            :class="active ? 'bg-gray-200 dark:bg-dark-50' : ''"
            @click="toggleDark(true)"
          >
            <div class="h-6 w-6 i-carbon-moon rounded-lg border border-gray-300 dark:border-dark-100 pa-xs bg-white dark:bg-dark-300" />
          </div>
        </MenuItem>
      </MenuItems> -->
    </transition>
  </Menu>
</template>
