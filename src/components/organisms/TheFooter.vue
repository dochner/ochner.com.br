<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const actualDate = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="bg-white dark:bg-dark-300">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          href="https://github.com/dochner"
          class="text-gray-400 hover:text-gray-500"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span class="sr-only">Github</span>
          <div class="h-6 w-6 i-carbon-logo-github" aria-hidden="true" />
        </a>
        <a
          href="https://linkedin.com/in/douglasochner"
          class="text-gray-400 hover:text-gray-500"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span class="sr-only">Linkedin</span>
          <div class="h-6 w-6 i-carbon-logo-linkedin" aria-hidden="true" />
        </a>
      </div>
      <div class="mt-8 md:mt-0 md:order-1">
        <p class="text-center text-base text-gray-400">
          &copy; {{ actualDate }} Douglas Gabriel Ochner.
        </p>
      </div>
    </div>
  </footer>
</template>
