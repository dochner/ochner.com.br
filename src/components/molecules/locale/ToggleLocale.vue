<script setup lang="ts">
const { locale, t, availableLocales } = useI18n({

})
</script>

<template>
  <div class="d-translate-btn">
    <ri-translate-2 />
    <div class="d-translate-menu">
      <div class="rounded shadow-lg bg-white border border-light-800 dark:bg-dark-700 dark:border-dark-900 py-2 px-4 w-50">
        <Radio v-for="(language, index) in availableLocales" :key="`language-${index}`" v-model="locale" :value="language" :label="t(language)" name="translate" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
 .d-translate-btn {
  position: relative;
}

.d-translate-btn {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.7;
  outline: none;
  padding: .5rem;
}

.d-translate-btn:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.d-translate-menu {
  opacity: 0;
  visibility: invisible;
  display: none;
  transition: all 0.3s ease;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}

 .d-translate-btn:hover .d-translate-menu {
  display: block;
  opacity: 1;
  visibility: visible;
}
</style>
