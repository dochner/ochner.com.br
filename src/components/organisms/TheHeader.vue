<script setup lang="ts">
import { Dialog, DialogPanel } from '@headlessui/vue'

const tabs = [
  {
    label: 'Home',
    name: 'home',
    to: '/',
  },
  {
    label: 'Projects',
    name: 'projects',
    to: '/projects',
  },
  {
    label: 'Blog',
    name: 'blog',
    to: '/blog',
  },
  {
    label: 'Bookmarks',
    name: 'bookmarks',
    to: '/bookmarks',
  },
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="bg-white dark:bg-dark-300 h-20 border-b-1 border-gray-200 dark:border-dark-100 shadow-sm dark:shadow-dark-50">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-6 h-full lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Douglas Gabriel Ochner</span>
          <img class="w-auto rounded-full h-12" src="/avatar.webp">
        </RouterLink>
      </div>
      <div class="flex lg:hidden items-center">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md p-2.5 text-dark dark:text-white"
          @click="() => (mobileMenuOpen = true)"
        >
          <span class="sr-only">Open main menu</span>
          <div class="h-6 w-6 i-carbon-menu" aria-hidden="true" />
        </button>
      </div>

      <div class="hidden lg:flex lg:gap-x-12 h-full">
        <Tabs :tabs="tabs" class="hidden lg:flex lg:gap-x-12 text-lg" />
      </div>

      <div class="hidden lg:flex lg:flex-1 items-center lg:justify-end space-x-md">
        <ToggleDark />
        <Btn
          href="/#contact-me"
          icon-right="i-carbon-arrow-right"
          variant="accent"
          size="sm"
          round
        >
          Contact me
        </Btn>
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      :open="mobileMenuOpen"
      @close="(e) => mobileMenuOpen = e"
    >
      <div class="fixed inset-0 z-10 bg-black/4 dark:bg-black/12 backdrop-blur-sm" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-dark-300 pl-4 pr-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between h-80px">
          <RouterLink to="/" class="p-1.5">
            <span class="sr-only">Douglas Gabriel Ochner</span>
            <img class="w-auto rounded-full h-12" src="/avatar.webp">
          </RouterLink>

          <div class="space-x-md row items-center">
            <ToggleDark />

            <button
              type="button"
              class="rounded-md flex items-center p-2.5 text-dark dark:text-white"
              @click="() => (mobileMenuOpen = false)"
            >
              <span class="sr-only">Close menu</span>
              <div class="h-6 w-6 i-carbon-close" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <RouterLink
                v-for="tab in tabs"
                :key="tab.name"
                :to="tab.to"
                class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-dark-900 dark:text-white hover:bg-gray-50 hover:text-dark-900"
              >
                {{ tab.label }}
              </RouterLink>
            </div>
            <div class="py-6">
              <RouterLink
                to="/#contact-me"
                class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-dark-900 dark:text-white hover:bg-gray-50 hover:text-dark-900"
              >
                Contact-me
              </RouterLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
