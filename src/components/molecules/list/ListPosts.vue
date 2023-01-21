<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const postRoutes = router.getRoutes()
  .filter(i => i.path.startsWith('/posts') && i.meta.frontmatter.date && !i.path.endsWith('.html'))
  .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))

const posts = computed(() => {
  if (route.query.tags) {
    const tags = Array.isArray(route.query.tags) ? route.query.tags : [route.query.tags]

    return postRoutes
      .filter(i => (i.meta.frontmatter.tags as string[])
        .map(tag => tag.toLocaleLowerCase())
        .includes(tags[0]?.toLowerCase() as string))
  }
  return postRoutes
})

onMounted(() => document.body.style.setProperty('--md-max-width', '768px'))
onUnmounted(() => {
  setTimeout(() => {
    document.body.style.removeProperty('--md-max-width')
  }, 0)
})
</script>

<template>
  <div
    un-max-w="screen-sm lg:screen-md"
    un-mx-auto
  >
    <ul un-grid="~ cosl-1 gap-4">
      <template
        v-for="post in posts"
        :key="`post-${post.path}`"
      >
        <ListItemPost
          :path="post?.path"
          :title="post?.meta.frontmatter.title"
          :date="post?.meta.frontmatter.date"
          :image="post?.meta.frontmatter.image"
          :categories="post?.meta.frontmatter.categories"
          class="shadow-md"
        />
      </template>
    </ul>
  </div>
</template>
