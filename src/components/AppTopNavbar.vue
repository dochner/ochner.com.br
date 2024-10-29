<script setup lang="ts">
import getImageUrl from '~/assets/images/img'

const tabs = ref([
  { id: 'home', label: 'Início', to: '/' },
  { id: 'about', label: 'Sobre', to: '/sobre' },
  { id: 'contact', label: 'Contato', to: '/contato' },
])
</script>

<template>
  <div class="fixed left-0 top-0 right-0 bottom-auto z-100 py-3 h-$header-height border-b-px border-stone-400/10 bg-stone-300/10 backdrop-blur-md">
    <div class="page-padding">
      <div class="max-w-screen-xl mx-auto">
        <div class="relative flex md:justify-center items-center">
          <router-link
            class="md:absolute left-0 top-0 right-auto bottom-auto z-102 -ml-4 py-3 px-4 text-xl font-medium"
            to="/"
          >
            Douglas Ochner
          </router-link>

          <nav class="hidden md:flex">
            <router-link
              v-for="tab in tabs"
              :key="tab.id"
              active-class="pointer-events-none drop-shadow-none"
              class="relative select-none z-102 py-4.5 px-2 text-stone-600"
              :to="tab.to"
            >
              {{ tab.label }}
            </router-link>
          </nav>

          <button
            class="select-none ml-auto -mr-5 z-102 px-5 py-4 md:absolute right-0 top-0 left-auto text-shadow-sm flex items-center text-indigo-800"
            to="/"
          >
            Novo projeto <div class="i-carbon-chevron-right" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
