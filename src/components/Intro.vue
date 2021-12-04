<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
 <div class="space-y-5"> 
  <p>
    {{ t('greetings') }}
  </p>
  <p>
    {{ t('message')}}
  </p>
</div>
</template>