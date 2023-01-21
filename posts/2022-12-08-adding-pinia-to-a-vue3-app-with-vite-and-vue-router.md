---
date: 2022-12-08T00:00:00.000Z
title: "Adding Pinia Store to a Vue.js 3 App with Vite.js and Vue Router"
tags: [Vue.js, JavaScript, front-end development, web development, tutorial, Pinia, state management]
description: This article will provide a step-by-step guide on how to add Pinia store to a Vue.js 3 app built with Vite.js and Vue Router, including setting up the store and examples of how to use it in the application.
type: post
author: dochner
categories: [web development, pinia, state management, front-end development, JavaScript, Vue.js]
---

When building large and complex applications, it's important to have a centralized place to manage the state of the application. This is where state management libraries like Vuex and Pinia come in. In this tutorial, we will be using Pinia, a lightweight and modular state management library for Vue.js that provides a powerful and easy-to-use API.

## Step 1: Install Pinia

To start using Pinia in your Vue.js 3 app, you first need to install it. You can do this by running the following command in your project's root directory:

```bash
npm install pinia
```

## Step 2: Create a Store

Once Pinia is installed, you can create a new store by creating a new file in the "src" directory called "store.js". In this file, you can import Pinia, create a new instance of it and export it. Here is an example of what the store.js file might look like:

```js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', {
  state: () => {
    return {
      name: 'Douglas',
      isAdmin: true,
      hasChanged: true,
    }
  },
})
```

In this example, the store has a state object with a "count" property that is initialized to 0. It also has an "increment" action that commits a mutation that increments the count.

Step 3: Use the Store in the App
Now that you have created a store, you need to tell your Vue app to use it. To do this, open the "src/main.js" file and import the store, then pass it as a property to the Vue instance:

```js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'

const router = new createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
})

const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
```

Once the store is set up, you can use it in your components by accessing the "store"
object in the component's "this" context. Here's an example of how you might use the "increment" action in a component:

```html
<script setup>
import { computed } from 'vue'
import { mapWritableState } from 'pinia'
import { useUserStore } from '../store'

const store = useUserStore()

const userName = computed(() => mapWritableState(useUserStore, ['name']))
</script>

<template>
  <div>
    {{ userName }}
  </div>
</template>
```

In this example, there is a div showing the user name, that is a computed property that gets the name from the store's state.

You can also add more complex logic to your store, like adding more state properties, actions and mutations, and even modules.

In conclusion, adding Pinia store to a Vue.js 3 app with Vite.js and Vue Router provides a powerful and centralized way to manage the state of your application. With Pinia, you have a simple and easy-to-use API for managing state. If you want to learn more about Pinia, you can check out the [Pinia documentation](https://pinia.esm.dev/).
