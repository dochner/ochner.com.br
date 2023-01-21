<script setup lang="ts">
import { formatDate } from '@/composables/use-format-date'

defineProps({
  path: {
    type: String,
    default: '/',
  },
  image: String,
  categories: Array,
  title: String,
  date: String,
})
</script>

<template>
  <li
    class="list-item-post"
    un-transition="colors duration-300 ease"
    un-border="~ solid black/12 dark:white/12 rounded-md"
    un-box-border
    un-block
  >
    <router-link
      :to="path"
      class="flex flex-col justify-between text-gray-800 dark:text-gray-400 hover:text-black dark:hover:text-white p-4"
      un-transition="colors duration-300 ease-in-out"
    >
      <div>
        <div un-flex="~ items-start gap-4">
          <h2
            un-text="xl"
            un-font="sans 300"
          >
            {{ title }}
          </h2>
        </div>
        <div
          un-text="sm"
          un-font-thin
        >
          {{ formatDate(date) }}
        </div>
      </div>
      <div class="flex gap-2 mt-4">
        <BadgeCategory
          v-for="(category, index) in categories"
          :key="`category-${index}`"
          :label="category"
        />
      </div>
    </router-link>
  </li>
</template>
