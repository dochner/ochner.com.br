<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useFormatDate } from '~/composables/formatDate'
import { useEnglishOnly } from '~/composables/englishOnly'
import type { Post } from '~/types'

const props = defineProps<{
  type?: string
  posts?: Post[]
}>()

const router = useRouter()
const routes: Post[] = router
  .getRoutes()
  .filter(
    i => i.path.startsWith('/posts') && (i.meta.frontmatter as Post).date,
  )
  .sort(
    (a, b) =>
      +new Date((b.meta.frontmatter as Post).date)
      - +new Date((a.meta.frontmatter as Post).date),
  )
  .map(i => ({
    path: i.path,
    title: (i.meta.frontmatter as Post).title,
    date: (i.meta.frontmatter as Post).date,
    lang: (i.meta.frontmatter as Post).lang,
    duration: (i.meta.frontmatter as Post).duration,
    recording: (i.meta.frontmatter as Post).recording,
    upcoming: (i.meta.frontmatter as Post).upcoming,
  }))

const posts = computed(() =>
  (props.posts || routes).filter(
    i => !useEnglishOnly.value || i.lang !== 'pt-BR',
  ),
)

const getYear = (a: Date | string | number) => new Date(a).getFullYear()
const isSameYear = (a: Date | string | number, b: Date | string | number) =>
  a && b && getYear(a) === getYear(b)
</script>

<template>
  <ul>
    <template v-if="!posts.length">
      <div py2 op50>
        { nothing here yet }
      </div>
    </template>

    <template v-for="(route, idx) in posts" :key="route.path">
      <div
        v-if="!isSameYear(route.date, posts[idx - 1]?.date)"
        class="pointer-events-none h-20 relative flex items-center mt-10"
      >
        <h3 class="fw-bold text-7xl opacity-40">
          {{
            getYear(route.date)
          }}
        </h3>

        <div class="h-px flex-grow bg-dark-50" />
      </div>
      <AppLink
        class="item block font-normal mb-6 mt-2 no-underline"
        :to="route.path"
      >
        <li class="no-underline">
          <div class="title text-lg leading-1.2em">
            <span
              v-if="route.lang === 'pt-BR'"
              align-middle
              class="text-xs border border-current rounded px-1 pb-0.2 md:ml--10.5 mr2"
            >
              pt-BR
            </span>
            <span
              v-if="route.upcoming"
              align-middle
              class="text-xs border rounded px-1 pb-0.2 md:ml--19 mr2 bg-lime/10 border-lime text-lime"
            >
              upcoming
            </span>
            <span align-middle>{{ route.title }}</span>
            <span
              v-if="route.recording"
              align-middle
              mx1
              text-red5
              i-carbon-play-filled
              title="Has recording playback"
            />
          </div>

          <div class="time opacity-50 text-sm">
            {{ useFormatDate(route.date) }}
            <span v-if="route.duration" op80>· {{ route.duration }}</span>
            <span v-if="route.platform" op80>· {{ route.platform }}</span>
          </div>
        </li>
      </AppLink>
    </template>
  </ul>
</template>
