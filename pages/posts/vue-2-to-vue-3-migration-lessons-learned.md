---
title: Vue 2 to Vue 3 Migration - Lessons Learned from Production
date: 2025-01-03T00:00:00.000Z
lang: en
duration: 12min
description: Real-world insights from migrating multiple critical Vue.js applications from version 2 to 3 at scale
---

[[toc]]

After leading several Vue 2 to Vue 3 migrations across production applications serving thousands of daily users, I've learned valuable lessons about the process. This post shares practical insights, gotchas, and strategies that worked in real-world scenarios.

## Why Migrate to Vue 3?

Before diving into the how, let's understand the why:

### Performance Improvements
- **Smaller bundle size** - 41% lighter than Vue 2
- **Faster rendering** - Proxy-based reactivity system
- **Better TypeScript support** - Built with TypeScript from the ground up
- **Composition API** - Better code organization and reusability

### Developer Experience
- **Better IDE support** - Improved IntelliSense and type inference
- **Fragment support** - Multiple root nodes in templates
- **Teleport** - Easy portal/modal implementation
- **Suspense** - Built-in async component handling

## Migration Strategy

### 1. Assessment Phase

First, audit your codebase:

```bash
# Install Vue 3 migration helper
npm install -g @vue/compat

# Analyze your project
vue-migration-helper .
```

**Key questions to answer:**
- How many components do we have?
- What dependencies are Vue 2 only?
- Are we using deprecated patterns?
- What's our test coverage?

### 2. Preparation

**Update dependencies first:**

```json
{
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.0.0",
    "pinia": "^2.1.0"  // Replaces Vuex
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "vite": "^5.0.0"
  }
}
```

**Note:** Vuex 4 exists for Vue 3, but Pinia is now the official recommendation.

### 3. Use Migration Build

Vue 3's compatibility build lets you migrate incrementally:

```javascript
import { createApp } from 'vue'
import { configureCompat } from '@vue/compat'

configureCompat({
  MODE: 3,
  FEATURE_A: false,  // Disable specific Vue 2 behaviors
  FEATURE_B: 'suppress-warning'
})

createApp(App).mount('#app')
```

## Breaking Changes & Solutions

### 1. Global API Changes

**Vue 2:**
```javascript
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App)
}).$mount('#app')
```

**Vue 3:**
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
```

**Lesson:** This affects plugins and third-party libraries significantly. Update all `Vue.use()` calls.

### 2. V-Model Changes

**Vue 2:**
```vue
<template>
  <CustomInput v-model="searchText" />
</template>

<script>
export default {
  props: ['value'],
  methods: {
    updateValue(val) {
      this.$emit('input', val)
    }
  }
}
</script>
```

**Vue 3:**
```vue
<template>
  <CustomInput v-model="searchText" />
</template>

<script setup>
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

function updateValue(val) {
  emit('update:modelValue', val)
}
</script>
```

**Lesson:** `value` prop is now `modelValue`, and `input` event is now `update:modelValue`.

### 3. Filters Removed

**Vue 2:**
```vue
<template>
  <p>{{ price | currency }}</p>
</template>

<script>
export default {
  filters: {
    currency(value) {
      return `$${value.toFixed(2)}`
    }
  }
}
</script>
```

**Vue 3 (use methods or computed):**
```vue
<template>
  <p>{{ formatCurrency(price) }}</p>
</template>

<script setup>
const formatCurrency = (value) => `$${value.toFixed(2)}`
</script>
```

**Lesson:** Create a composable for reusable formatting functions:

```javascript
// composables/useFormatters.js
export function useFormatters() {
  const formatCurrency = (value) => `$${value.toFixed(2)}`
  const formatDate = (date) => new Date(date).toLocaleDateString()

  return { formatCurrency, formatDate }
}
```

### 4. $listeners Removed

**Vue 2:**
```vue
<template>
  <div>
    <ChildComponent v-bind="$attrs" v-on="$listeners" />
  </div>
</template>
```

**Vue 3:**
```vue
<template>
  <div>
    <ChildComponent v-bind="$attrs" />
  </div>
</template>

<script setup>
// $attrs now includes event listeners
defineOptions({
  inheritAttrs: false
})
</script>
```

**Lesson:** `$attrs` now contains both attributes and event listeners.

## Composition API Migration

### Options API to Composition API

**Vue 2 (Options API):**
```vue
<script>
export default {
  data() {
    return {
      count: 0,
      message: 'Hello'
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    console.log('Component mounted')
  }
}
</script>
```

**Vue 3 (Composition API with `<script setup>`):**
```vue
<script setup>
import { ref, computed, onMounted } from 'vue'

const count = ref(0)
const message = ref('Hello')

const doubleCount = computed(() => count.value * 2)

const increment = () => {
  count.value++
}

onMounted(() => {
  console.log('Component mounted')
})
</script>
```

**Lesson:** `<script setup>` provides better TypeScript inference and less boilerplate.

### Creating Composables

Extract reusable logic into composables:

```javascript
// composables/useCounter.js
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const doubleCount = computed(() => count.value * 2)

  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue

  return {
    count,
    doubleCount,
    increment,
    decrement,
    reset
  }
}
```

**Usage:**
```vue
<script setup>
import { useCounter } from '@/composables/useCounter'

const { count, increment, decrement } = useCounter(10)
</script>
```

## State Management: Vuex to Pinia

### Vuex (Vue 2/3)

```javascript
// store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    }
  },
  actions: {
    async login({ commit }, credentials) {
      const user = await api.login(credentials)
      commit('SET_USER', user)
    }
  }
})
```

### Pinia (Vue 3 Recommended)

```javascript
// stores/user.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  async function login(credentials) {
    user.value = await api.login(credentials)
  }

  return { user, login }
})
```

**Benefits:**
- ✅ No mutations required
- ✅ Full TypeScript support
- ✅ Better devtools integration
- ✅ Modular by design

## Router Migration (Vue Router 3 → 4)

### Route Definition Changes

**Vue Router 3:**
```javascript
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      { path: 'profile', component: Profile }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
```

**Vue Router 4:**
```javascript
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      { path: 'profile', component: Profile }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
```

### Navigation Guards

The API is mostly the same, but return values changed:

**Vue Router 4:**
```javascript
router.beforeEach((to, from) => {
  if (!isAuthenticated && to.meta.requiresAuth) {
    return { name: 'login' }  // Return route location instead of next()
  }
  // Return nothing to continue
})
```

## Testing Strategy

### Unit Tests

Update test setup for Vue 3:

```javascript
// Vue 2 (Vue Test Utils 1.x)
import { shallowMount } from '@vue/test-utils'

const wrapper = shallowMount(Component, {
  propsData: { msg: 'Hello' }
})

// Vue 3 (Vue Test Utils 2.x)
import { shallowMount } from '@vue/test-utils'

const wrapper = shallowMount(Component, {
  props: { msg: 'Hello' }  // Changed from propsData
})
```

### E2E Tests

Minimal changes needed for Cypress/Playwright tests since they test the DOM, not Vue internals.

## Performance Optimization

### Tree Shaking

Vue 3 is designed for better tree-shaking:

**Good:**
```javascript
import { ref, computed } from 'vue'  // Only import what you need
```

**Bad:**
```javascript
import * as Vue from 'vue'  // Imports everything
```

### Lazy Loading

Both Vue 2 and 3 support lazy loading, but Vue 3 has better `<Suspense>`:

```vue
<template>
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      <LoadingSpinner />
    </template>
  </Suspense>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const AsyncComponent = defineAsyncComponent(() =>
  import('./HeavyComponent.vue')
)
</script>
```

## Common Gotchas

### 1. Reactive Arrays

**Issue:**
```javascript
const list = reactive([1, 2, 3])
list = [4, 5, 6]  // ❌ Breaks reactivity!
```

**Solution:**
```javascript
const list = ref([1, 2, 3])
list.value = [4, 5, 6]  // ✅ Maintains reactivity
```

### 2. Template Refs

**Vue 2:**
```vue
<template>
  <input ref="inputRef" />
</template>

<script>
export default {
  mounted() {
    this.$refs.inputRef.focus()
  }
}
</script>
```

**Vue 3:**
```vue
<template>
  <input ref="inputRef" />
</template>

<script setup>
import { ref, onMounted } from 'vue'

const inputRef = ref(null)

onMounted(() => {
  inputRef.value.focus()
})
</script>
```

### 3. Provide/Inject with TypeScript

```typescript
// types.ts
import type { InjectionKey, Ref } from 'vue'

export interface User {
  id: string
  name: string
}

export const userKey: InjectionKey<Ref<User | null>> = Symbol('user')

// Parent.vue
import { provide, ref } from 'vue'
import { userKey } from './types'

const user = ref<User | null>(null)
provide(userKey, user)

// Child.vue
import { inject } from 'vue'
import { userKey } from './types'

const user = inject(userKey)  // Fully typed!
```

## Migration Checklist

- [ ] Audit codebase and dependencies
- [ ] Update to latest Vue 2.7 (includes Composition API backport)
- [ ] Write tests for critical functionality
- [ ] Install migration build (`@vue/compat`)
- [ ] Update build tools (Vite recommended)
- [ ] Migrate global API (`createApp`)
- [ ] Update v-model usage
- [ ] Replace filters with methods/computed
- [ ] Migrate state management to Pinia
- [ ] Update Vue Router to v4
- [ ] Update test suite
- [ ] Test thoroughly in staging
- [ ] Monitor performance in production
- [ ] Remove `@vue/compat` when ready

## Conclusion

Migrating from Vue 2 to Vue 3 is a significant undertaking, but the benefits are worth it:

- ✅ **Better performance** - Smaller bundle, faster rendering
- ✅ **Improved DX** - Better TypeScript support, composition API
- ✅ **Modern features** - Teleport, Suspense, multiple root nodes
- ✅ **Future-proof** - Active development and ecosystem

**Key takeaways from production migrations:**
1. Use the migration build for gradual migration
2. Start with leaf components, work up to root
3. Migrate state management early (Pinia is great!)
4. Invest in comprehensive tests
5. Monitor performance metrics before/after

The Vue 3 ecosystem is mature and production-ready. If you're still on Vue 2, now is the time to plan your migration!

---

*Questions about Vue 3 migration? [Let's connect](mailto:douglas.ochner@gmail.com)!*
