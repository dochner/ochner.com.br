<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()

const steps = [
  {
    name: 'IT Consultant / Aubay Portugal · 2022 → Present',
    description:
      'React, Angular, Angular Material, TypeScript, SASS, Node.js, Vue.js, Nuxt.js, Quasar, Agile Methodologies, Vue.js',
    href: '#',
    status: 'current',
  },
  {
    name: 'Freelancer · 2020 → Present',
    description:
      'Nuxt.js, Quasar, React, Angular, TypeScript, SASS, Node.js, Vue.js',
    href: '#',
    status: 'current',
  },
  {
    name: 'Fullstack Developer → Frontend Devloper / Multiplier · 2020 → 2022',
    description: 'Nuxt.js, Quasar, Agile Methodologies, JavaScript, Vue.js',
    href: '#',
    status: 'complete',
  },
  {
    name: 'IT Support Analyst / Lunelli  · 2013 → 2020',
    description:
      'Inèdit Software, Lansweeper, Bitdefender, Users training, IT Support, Helpdesk, ITIL',
    href: '#',
    status: 'complete',
  },
]
</script>

<template>
  <PublicHeroSection />
  <PublicSkillsetSection />
  <PublicExperiencesSection />
  <PublicContactSection />
</template>
