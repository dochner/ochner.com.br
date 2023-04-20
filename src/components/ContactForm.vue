<script setup lang="ts">
import sendGrid from '@sendgrid/mail'
import { SENDGRID_API_KEY } from '~/constants'

const userMessage = ref({
  fullName: '',
  email: '',
  message: '',
})

function handleSubmit() {
  sendGrid.setApiKey(SENDGRID_API_KEY)

  const msg = {
    to: 'douglas.ochner@gmail.com',
    from: 'douglas.ochner@gmail.com',
    subject: 'Contact from ochner.com.br',
    html: `
      <h2>Full Name: ${userMessage.value.fullName}</h2>
      <strong>E-mail: ${userMessage.value.email}</strong>
      <p style="margin-top:16px;">Message: ${userMessage.value.message}</p>
    `,
  }

  sendGrid.send(msg)
    .then(() => {
      userMessage.value = {
        fullName: '',
        email: '',
        message: '',
      }
    })
    .catch((error) => {
      console.error(error)
    })
}
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
