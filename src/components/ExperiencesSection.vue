<script setup lang="ts">
const steps = [
  {
    name: 'Senior Frontend Engineer / Sword Health · Nov 2025 → Present',
    role: 'Senior Frontend Engineer',
    company: 'Sword Health',
    location: 'Porto, Portugal (Remote)',
    period: 'Nov 2025 - Present',
    description: 'Vue.js, TypeScript, SASS, TailwindCSS, Vitest, Cypress',
    achievements: [
      'Promoted to Senior role at $2B+ health tech unicorn',
      'Leading technical direction for patient-facing applications',
      'Mentoring team members and driving engineering excellence',
      'Contributing to strategic initiatives impacting product scalability',
    ],
    href: '#',
    status: 'current',
  },
  {
    name: 'Frontend Engineer / Sword Health · May 2023 → Nov 2025',
    role: 'Frontend Engineer',
    company: 'Sword Health',
    location: 'Porto, Portugal (Remote)',
    period: 'May 2023 - Nov 2025 (2 years 7 months)',
    description: 'Vue.js, TypeScript, SASS, TailwindCSS, Vitest, Cypress',
    achievements: [
      'Led Vue 2 → Vue 3 migration across multiple critical projects',
      'Co-architected internal design system with design team',
      'Mentored 3+ engineers through code reviews and pair programming',
      'Established code standards and testing strategies (unit + E2E)',
      'Improved patient satisfaction metrics through accessibility focus',
    ],
    href: '#',
    status: 'current',
  },
  {
    name: 'IT Consultant / Aubay Portugal · Nov 2022 → May 2023',
    role: 'IT Consultant',
    company: 'Aubay Portugal',
    location: 'Portugal (Remote)',
    period: 'Nov 2022 - May 2023 (7 months)',
    description: 'Vue.js, TypeScript, Angular, Angular Material, Node.js',
    achievements: [
      'Built healthcare management systems for SPMS (50,000+ professionals)',
      'Developed secure, GDPR-compliant interfaces for sensitive health data',
      'Collaborated with cross-functional teams on healthcare infrastructure',
      'Implemented responsive designs for clinical environments',
    ],
    href: '#',
    status: 'complete',
  },
  {
    name: 'Frontend Engineer / Multiplier · Jan 2021 → Nov 2022',
    role: 'Frontend Engineer',
    company: 'Multiplier',
    location: 'Santa Catarina, Brasil (Remote)',
    period: 'Jan 2021 - Nov 2022 (1 year 11 months)',
    description: 'Vue 3, Nuxt, Vite, GraphQL, Tailwind CSS, UnoCSS, SASS',
    achievements: [
      'Architected greenfield e-commerce platform with Vue 3 + Nuxt + Vite',
      'Led Laravel Blade → Vue 3 CRM rewrite, improving load times',
      'Built design system using Tailwind CSS, UnoCSS, BEM methodology',
      'Implemented modern state management patterns across applications',
      'Created reusable component library used across client projects',
    ],
    href: '#',
    status: 'complete',
  },
  {
    name: 'Full Stack Developer / Multiplier · Nov 2020 → Jan 2021',
    role: 'Full Stack Developer',
    company: 'Multiplier',
    location: 'Jaraguá do Sul, Brasil',
    period: 'Nov 2020 - Jan 2021 (3 months)',
    description: 'Vue.js, Node.js, JavaScript',
    achievements: [
      'Transitioned from IT Support to Software Development',
      'Built full-stack applications using modern JavaScript',
    ],
    href: '#',
    status: 'complete',
  },
  {
    name: 'IT Support Analyst / Grupo Lunelli · Aug 2013 → Nov 2020',
    role: 'IT Support Analyst',
    company: 'Grupo Lunelli',
    location: 'Brasil',
    period: 'Aug 2013 - Nov 2020 (7 years 4 months)',
    description: 'IT Support, Networking, Customer Service, Technical Support',
    achievements: [
      'Provided tier 1-2 technical support for 600+ employees',
      'Managed network infrastructure and troubleshooting',
      'Developed strong problem-solving and communication skills',
      'Completed intensive training in modern web technologies (2020)',
    ],
    href: '#',
    status: 'complete',
  },
]
</script>

<template>
  <section
    id="experiences"
    class="grid"
  >
    <div>
      <h2>
        <a href="#experiences">Professional Experience</a>
      </h2>

      <p class="mt-3 text-lg leading-6 text-gray-500 dark:text-gray-300">
        5+ years of specialized frontend development experience, with proven track record of leading critical migrations, mentoring engineers, and building scalable applications for health tech, SaaS, and e-commerce platforms.
      </p>
    </div>
    <div>
      <nav aria-label="Progress">
        <ul role="list" class="overflow-hidden !list-none">
          <li
            v-for="(step, stepIdx) in steps"
            :key="step.name"
            class="relative"
            :class="stepIdx !== steps.length - 1 ? 'pb-10' : ''"
          >
            <template v-if="step.status === 'complete'">
              <div
                v-if="stepIdx !== steps.length - 1"
                class="-ml-px absolute mt-0.5 top-4 left-11 w-0.5 h-full bg-primary-400"
                aria-hidden="true"
              />

              <div class="relative flex items-start group">
                <span class="h-9 flex items-center">
                  <span
                    class="relative z-10 w-8 h-8 flex items-center justify-center bg-primary-400 rounded-full"
                  >
                    <div
                      class="w-5 h-5 text-white i-carbon-checkmark"
                      aria-hidden="true"
                    />
                  </span>
                </span>
                <span class="ml-4 min-w-0 flex flex-col">
                  <span class="text-xs font-semibold tracking-wide uppercase">
                    {{ step.name }}
                  </span>
                  <ul v-if="step.achievements" class="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                    <li v-for="(achievement, achIdx) in step.achievements" :key="achIdx">
                      {{ achievement }}
                    </li>
                  </ul>
                  <div class="row gap-sm mt-sm">
                    <template v-if="step?.description">
                      <Badge
                        v-for="(badge, badgeIdx) in step.description.split(',')"
                        :key="badgeIdx"
                        variant="info"
                      >
                        {{ badge }}
                      </Badge>
                    </template>
                  </div>
                </span>
              </div>
            </template>
            <template v-else-if="step.status === 'current'">
              <div
                v-if="stepIdx !== steps.length - 1"
                class="-ml-px absolute mt-0.5 top-4 left-11 w-0.5 h-full bg-gray-300"
                aria-hidden="true"
              />
              <div class="relative flex items-start group" aria-current="step">
                <span class="h-9 flex items-center" aria-hidden="true">
                  <span
                    class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-primary-400 rounded-full"
                  >
                    <span class="h-2.5 w-2.5 bg-primary-400 rounded-full" />
                  </span>
                </span>
                <span class="ml-4 min-w-0 flex flex-col">
                  <span
                    class="text-xs font-semibold tracking-wide uppercase text-primary-400"
                  >
                    {{ step.name }}
                  </span>
                  <ul v-if="step.achievements" class="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                    <li v-for="(achievement, achIdx) in step.achievements" :key="achIdx">
                      {{ achievement }}
                    </li>
                  </ul>
                  <div class="row gap-sm mt-sm">
                    <template v-if="step?.description">
                      <Badge
                        v-for="(badge, badgeIdx) in step.description.split(',')"
                        :key="badgeIdx"
                        variant="info"
                      >
                        {{ badge }}
                      </Badge>
                    </template>
                  </div>
                </span>
              </div>
            </template>
            <template v-else>
              <div
                v-if="stepIdx !== steps.length - 1"
                class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                aria-hidden="true"
              />
              <a :href="step.href" class="relative flex items-start group">
                <span class="h-9 flex items-center" aria-hidden="true">
                  <span
                    class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400"
                  >
                    <span
                      class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                    />
                  </span>
                </span>
                <span class="ml-4 min-w-0 flex flex-col">
                  <span
                    class="text-xs font-semibold tracking-wide uppercase text-gray-500"
                  >
                    {{ step.name }}
                  </span>
                  <div class="row gap-sm mt-sm">
                    <template v-if="step?.description">
                      <Badge
                        v-for="(badge, badgeIdx) in step.description.split(',')"
                        :key="badgeIdx"
                        variant="info"
                      >
                        {{ badge }}
                      </Badge>
                    </template>
                  </div>
                </span>
              </a>
            </template>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>
