<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
 <div>
  <p>
    {{ t('greetings') }}
  </p>
  <p>
    {{ t('address') }}
  </p>
  <p>
    {{ t('message')}}
  </p>
</div>
</template>