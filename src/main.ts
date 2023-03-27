import { createApp } from 'vue'
import { setupLayouts } from 'virtual:generated-layouts'
import { createMemoryHistory, createRouter } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'
import type { UserModule } from './types'

import '@unocss/reset/tailwind.css'
import './styles/index.css'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes,
})

const app = createApp(App)
app.use(router)

console.log('oroutes: ', routes)

const ctx = {
  app,
  router,
}

await Object.values(import.meta.glob<{ install: UserModule }>('./plugins/*.ts', { eager: true }))
  .forEach(i => i.install?.(ctx))

app.mount('#app')
