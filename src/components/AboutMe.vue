<script setup lang="ts">

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col md:flex-row items-center pt-4 mb-12">
    <div class="relative w-45 h-45 rounded-10px overflow-hidden flex-shrink-0 md:mr-10 lt-md:mb-10">
      <img src="/avatar.webp" alt="Douglas Ochner" class="absolute w-full h-full object-cover !m-0">
    </div>
    <div>
      <h1 class="text-4xl font-extrabold mb-4">
        Douglas Ochner
      </h1>
      <p class="leading-[1.75]">
        {{ t('who-am-i') }}
        <br>
        <a href="https://www.linkedin.com/company/multiplieroficial" class="font-semibold px-0" rel="noopener">@multiplier</a> team member.
      </p>
    </div>
  </div>
  <Intro />
  <hr class="text-gray-300 mx-45 my-4" />
  <p>
   {{ t('find-me') }} 
   <a href="https://github.com/dochner" rel="noopener" target="_blank" class="px-0">Github</a>, 
   <a href="https://www.linkedin.com/in/douglasochner" target="_blank" rel="noopener" class="px-0">Linkedin</a>,
   {{ t('mail-me')}} <a href="mailto:douglasochner@gmail.com" target="_blank" rel="noopener" class="px-0">douglas.ochner@gmail.com</a>.
  </p>
</template>
