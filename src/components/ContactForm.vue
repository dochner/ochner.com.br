<script setup lang="ts">
function handleSubmit() {}

const userMessage = ref({
  fullName: '',
  email: '',
  message: '',
})

const isBtnDisabled = computed(() => {
  return !userMessage.value.fullName || !userMessage.value.email || !userMessage.value.message
})
</script>

<template>
  <form class="grid lg:grid-cols-2 gap-6" @submit.prevent="handleSubmit">
    <div>
      <InputText v-model="userMessage.fullName" name="fullName" label="Full Name" />
    </div>
    <div>
      <InputText v-model="userMessage.email" name="email" label="E-mail*" required />
    </div>
    <div class="lg:col-span-2">
      <TextArea v-model="userMessage.message" name="message" label="Message*" rows="10" required />
    </div>
    <div align="right" class="lg:col-span-2">
      <Btn
        variant="primary"
        type="submit"
        label="Send"
        icon-right="i-carbon-arrow-right"
      />
    </div>
  </form>
</template>
