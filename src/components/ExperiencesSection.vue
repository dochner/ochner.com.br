<script setup lang="ts">
const steps = [
  {
    name: 'IT Consultant / Aubay Portugal · 2022 → Present',
    description:
      ' Vue.js, TypeScript, SASS, Agile Methodologies, Angular, Angular Material, Node.js, Nuxt.js, Quasar',
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
  <section
    id="experiences"
    class="grid"
  >
    <div>
      <h2>
        <a href="#experiences">My Experience</a>
      </h2>

      <p class="mt-3 text-lg leading-6 text-gray-500 dark:text-gray-300">
        With my experience in web development and support analysis, I am
        confident in my ability to tackle the challenges that comes my way, and
        excited to grow up with them.
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
