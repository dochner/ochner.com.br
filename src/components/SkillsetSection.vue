<script setup lang="ts">
const skills = [
  {
    name: 'Vue.js & Nuxt',
    level: 'Expert',
    years: '5+',
    description:
      'Deep expertise in Vue 3 Composition API, Nuxt, Pinia, Vue Router. Led multiple Vue 2→3 migrations at scale. Co-architected design systems and component libraries used across enterprise applications.',
    technologies: 'Vue 3, Nuxt 3, Pinia, Vuex, Vue Router, Composition API',
  },
  {
    name: 'TypeScript',
    level: 'Advanced',
    years: '4+',
    description:
      'Strong typing for scalable applications. Implemented type-safe APIs, custom type guards, and complex generics. Established TypeScript best practices across engineering teams.',
    technologies: 'TypeScript, Type Safety, Generics, Advanced Types',
  },
  {
    name: 'Modern CSS & Design Systems',
    level: 'Expert',
    years: '5+',
    description:
      'Built design systems from scratch using Tailwind CSS, UnoCSS, SASS, and BEM methodology. Co-architected internal design system at Sword Health ensuring consistency across products.',
    technologies: 'Tailwind CSS, UnoCSS, SASS, BEM, CSS-in-JS, Responsive Design',
  },
  {
    name: 'Testing & Quality Assurance',
    level: 'Advanced',
    years: '3+',
    description:
      'Established comprehensive testing strategies including unit tests (Vitest, Jest) and E2E testing (Cypress). Created testing standards that reduced bugs and improved code quality organization-wide.',
    technologies: 'Vitest, Jest, Cypress, Testing Library, E2E, Unit Testing',
  },
  {
    name: 'GraphQL & APIs',
    level: 'Advanced',
    years: '3+',
    description:
      'Implemented GraphQL with Apollo Client, reducing API calls by 40%. Experience with RESTful APIs, real-time data, and backend integration. Collaborated with backend teams on API design.',
    technologies: 'GraphQL, Apollo Client, REST APIs, WebSockets, API Design',
  },
  {
    name: 'Build Tools & DevOps',
    level: 'Advanced',
    years: '4+',
    description:
      'Expert in modern build tools and development workflows. Optimized build performance, implemented CI/CD pipelines, and improved developer experience across teams.',
    technologies: 'Vite, Webpack, Git, GitHub Actions, CI/CD, Performance Optimization',
  },
  {
    name: 'Leadership & Mentoring',
    level: 'Senior',
    years: '2+',
    description:
      'Mentored 3+ engineers through code reviews and pair programming. Established frontend best practices, led architectural decisions, and drove technical direction for patient-facing applications.',
    technologies: 'Code Review, Mentoring, Architecture, Technical Leadership',
  },
  {
    name: 'Performance & Accessibility',
    level: 'Advanced',
    years: '3+',
    description:
      'Focus on web performance optimization and accessibility compliance. Improved Lighthouse scores, optimized bundle sizes, and ensured WCAG compliance for healthcare applications.',
    technologies: 'Performance Optimization, Accessibility (a11y), WCAG, Lighthouse',
  },
]
</script>

<template>
  <section
    id="my-skills"
    class="grid"
  >
    <div>
      <h2 class="mt-2 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary">
        <a href="#my-skills">Technical Expertise</a>
      </h2>
      <p class="mt-3 text-lg leading-6 text-gray-500 dark:text-gray-300">
        Senior-level proficiency in modern frontend technologies with proven track record of delivering production applications at scale.
      </p>
    </div>
    <div class="mt-4">
      <dl class="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:gap-x-8">
        <div v-for="skill in skills" :key="skill.name" class="relative border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-primary-400 transition-all">
          <dt>
            <div class="flex items-center justify-between mb-2">
              <p class="text-lg leading-6 font-semibold text-gray-900 dark:text-gray-100">
                {{ skill.name }}
              </p>
              <div class="flex gap-2">
                <span class="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded">
                  {{ skill.level }}
                </span>
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                  {{ skill.years }} years
                </span>
              </div>
            </div>
          </dt>
          <dd class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {{ skill.description }}
          </dd>
          <dd class="mt-3 flex flex-wrap gap-1">
            <span
              v-for="tech in skill.technologies.split(',')"
              :key="tech"
              class="text-xs px-2 py-1 bg-secondary/10 text-secondary-700 dark:text-secondary-300 rounded"
            >
              {{ tech.trim() }}
            </span>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
