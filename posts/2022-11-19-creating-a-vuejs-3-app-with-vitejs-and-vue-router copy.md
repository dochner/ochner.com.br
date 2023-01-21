---
date: 2022-11-19T00:00:00.000Z
title: Creating a Vue.js 3 App with Vite.js and Vue Router
tags: [Vue.js, JavaScript, front-end development, web development, tutorial, Vite.js, Vue-router]
description: This article will provide a step-by-step guide on how to create a Vue.js 3 app with Vite.js and Vue Router, including setting up the development environment, adding Vue Router and building a basic application.
type: post
author: dochner
categories: [web development, front-end development, JavaScript, Vue.js, Vite.js, Vue-router]
---

Vue (pronounced `/vjuː/`, like view) is a popular JavaScript framework for building user interfaces and single-page applications. With the release of version 3, Vue.js has become even more powerful and efficient, making it a great choice for front-end developers. Vite (French word for `quick`, pronounced /vit/, like `veet`) is a build tool that aims to provide a faster and leaner development experience for modern web projects.

In this tutorial, we will go over the steps to create a basic Vue.js 3 app with Vite.js and Vue Router.

## Step 1: Create a New Project

You can create a new project by running the following command:

```bash
npm create vite@latest my-vue-app --template vue
```

This will create a new directory called `my-app` and set up a basic Vue.js 3 project with the necessary files and dependencies.

## Step 3: Install Vue Router

Next, we need to install Vue Router, which is the official router for Vue.js. Vue Router allows you to define routes in your application and navigate between different pages.

To install Vue Router, run the following command in the project directory:

```bash
npm install vue-router
```

## Step 4: Configure Vue Router

Once Vue Router is installed, we need to configure it in our application. To do this, open the `src/main.js` file and add the following code:

```js main.js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: []
})

app.use(router)
app.mount('#app')
```

This code imports Vue Router and tells Vue to use it. It also creates a new instance of VueRouter with createRouter and assigns it to the `router` variable. Finally, it tells Vue to use the router when creating a new instance of the Vue app.

## Step 5: Create Routes

Now that Vue Router is configured, we can create routes for our application. To do this, add the following code to the `routes` array in the `router` object:

```js
const router = new createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
})
```

This code creates three routes: the root route (`/`), an `about` route (`/about`), and a `contact` route (`/contact`). Each route is associated with a Vue component(hosted in the `pages` folder or sometimes called `views` folder) that will be rendered when the route is visited.

You'll need to import these components as well, so add these lines before the router instantiation:

```js
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
```

The final main.js file should look like this:

```js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

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

app.use(router)
app.mount('#app')
```

## Step 6: Add Navigation Links

Now that we have routes defined, we need to add navigation links to our application so users can navigate between different pages. To do this, open the `src/App.vue` file and add the following code to the template section:

```vue
<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-view />
  </div>
</template>
```

This code adds three `router-link` elements to the template. Each element has a required `to` attribute that corresponds to a route in the `routes` array. When a user clicks on a `router-link` element, they will be taken to the corresponding route. The `router-view` component will render the component associated with the current route.

## Step 7: Serve the Application

Now that your application is set up, you can serve it by running the following command in the project directory:

```bash
npm run dev
```

This will start Vite.js development server and open the application in your default web browser. You should see the `Home` page as the default page. You can navigate between the different routes using the links you added in the previous step.

And that's it! You have successfully created a Vue.js 3 app with Vite.js and Vue Router. You can now continue building your application and adding more routes, components and features as needed.

Also, you can take advantage of Vite.js hot module replacement feature, this means that you don't need to refresh the page, when you make changes in your code, the changes will be reflected immediately in the browser.

Additionally, you can use the Vue devtools to inspect and debug your application. The devtools are a browser extension that allows you to inspect the component tree, view the component's state and props, and trace the component's lifecycle.

And also, you can add more features to your app, like adding a store, integrating with an API, adding authentication, and more.

In summary, creating a Vue.js 3 app with Vite.js and Vue Router is a fast and efficient way to build a powerful and scalable web application. With Vite.js and Vue Router, you have the tools you need to create a modern and dynamic user interface. 🎉
