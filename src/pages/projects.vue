<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    category: [
      {
        title: 'Vue.js',
        href: '#',
      },
      {
        title: 'Vite',
        href: '#',
      },
      {
        title: 'Pinia',
        href: '#',
      },
    ],
    description:
        'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    imageUrl:
        'https://images.unsplash.com/photo-1677391520646-7b3b4beb8555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: [
      {
        title: 'Nuxt.js',
        href: '#',
      },
    ],
    description:
        'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    imageUrl:
        'https://images.unsplash.com/photo-1677391520646-7b3b4beb8555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    category: [
      {
        title: 'React.js',
        href: '#',
      },
    ],
    description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
    imageUrl:
        'https://images.unsplash.com/photo-1677391520646-7b3b4beb8555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
]
</script>

<template>
  <article>
    <section class="max-w-7xl mx-auto py-24 sm:py-32 px-4 sm:px-6 lg:px-8 column justify-center text-center">
      <h1 class="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-5xl !leading-loose text-transparent bg-clip-text bg-gradient-to-b from-primary-500 to-secondary">
        My Projects
      </h1>
      <p class="mt-2 text-lg max-w-xl mx-auto leading-8 text-gray-600 dark:text-light-300">
        Here you can find some of my projects. I'm always working on new
        ones and I'm always open to new ideas.
      </p>

      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 dark:border-dark-50 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article
          v-for="project in projects"
          :key="project.id"
          class="flex max-w-xl flex-col items-start justify-between border rounded-lg h-sm bg-white dark:bg-dark-50 dark:border-stone-500 relative overflow-hidden"
        >
          <img
            :src="project?.imageUrl"
            class="absolute w-full top-0 left-0 h-full object-cover"
            alt=""
            aria-hidden
          >
          <div class="flex items-center gap-x-4 text-xs px-6 py-4">
            <template v-if="project?.category">
              <RouterLink v-for="(category, index) in project.category" :key="index" :to="category.href">
                <Badge>{{ category.title }}</Badge>
              </RouterLink>
            </template>
          </div>
          <div class="relative bg-white/30 dark:bg-dark/70 backdrop-blur-sm px-6 py-2 absolute bottom-0">
            <h3 class="mt-3 text-lg font-semibold leading-6 h-12">
              <a :href="project.href">
                <span class="absolute inset-0" />
                {{ project.title }}
              </a>
            </h3>
            <p class="mt-5 text-sm leading-6 text-dark-700 dark:text-gray-300 line-clamp-3 h-18">
              {{ project.description }}
            </p>
          </div>
        </article>
      </div>
    </section>
  </article>
</template>
