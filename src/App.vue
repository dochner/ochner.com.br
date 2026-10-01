<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue'
import { SITE_URL } from './constants'

interface Frontmatter {
  title?: string
  description?: string
}

const SITE_TITLE = 'Douglas Ochner - Senior Frontend Engineer'
const SITE_DESCRIPTION = 'Senior Frontend Engineer specializing in Vue 3, Nuxt and TypeScript. 5+ years building scalable SaaS and health-tech apps. Remote from Portugal, open to US opportunities.'
const OG_IMAGE = `${SITE_URL}/og-icon.png`

const route = useRoute()

const frontmatter = computed<Frontmatter>(() => (route.meta.frontmatter as Frontmatter | undefined) ?? {})
const canonical = computed(() => `${SITE_URL}${route.path === '/' ? '/' : route.path.replace(/\/$/, '')}`)
const pageTitle = computed(() => frontmatter.value.title?.trim() || SITE_TITLE)
const pageDescription = computed(() => frontmatter.value.description?.trim() || SITE_DESCRIPTION)

const personSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': 'Douglas Ochner',
  'jobTitle': 'Senior Frontend Engineer',
  'url': SITE_URL,
  'image': `${SITE_URL}/avatar.webp`,
  'worksFor': { '@type': 'Organization', 'name': 'Sword Health' },
  'address': { '@type': 'PostalAddress', 'addressLocality': 'Lisbon', 'addressCountry': 'PT' },
  'knowsAbout': ['Vue.js', 'Nuxt', 'TypeScript', 'Tailwind CSS', 'UnoCSS', 'Design Systems', 'Frontend Architecture'],
  'sameAs': ['https://github.com/dochner', 'https://www.linkedin.com/in/douglasochner'],
})

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  meta: [
    { name: 'description', content: SITE_DESCRIPTION },
    { property: 'og:site_name', content: 'Douglas Ochner' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: canonical },
    { property: 'og:title', content: SITE_TITLE },
    { property: 'og:description', content: SITE_DESCRIPTION },
    { property: 'og:image', content: OG_IMAGE },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
  ],
  script: [{ type: 'application/ld+json', children: personSchema }],
})
</script>

<template>
  <Analytics />
  <CustomCursor />
  <TheNavBar />
  <main class="px-7 py-10">
    <router-view />
    <TheFooter />
  </main>
</template>
