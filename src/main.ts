import { createApp } from 'vue'
import App from './App.vue'

// Import global styles
import '@unocss/reset/tailwind.css'

import 'uno.css'
import './assets/css/main.css'

import { router } from './router'

const app = createApp(App)

app
  .use(router)
  .mount('#app')
