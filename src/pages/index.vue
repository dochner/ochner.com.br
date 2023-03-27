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
  <div>
    <section class="pb-8 sm:pb-12">
      <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div class="sm:max-w-xl">
              <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Douglas Gabriel Ochner
              </h1>
              <p class="mt-6 text-xl dark:text-gray-200">
                I am a skilled frontend developer with over 10 years of
                experience in the field of technology. During the past three
                years, I have focused on web development, specifically with
                Vue.js, and have built a solid reputation for creating dynamic
                and user-friendly interfaces for various applications.
              </p>
            </div>
            <p class="text-xl max-w-xl mt-md" />

            <div class="row space-x-sm mt-xl">
              <p class="text-lg max-w-xl mt-md">
                Do you want to discuss a project idea?
              </p>
            </div>
            <a
              href="#contact-me"
              class="text-2xl fw-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary underline-1 underline-primary-500 underline-dashed underline"
            >
              Let's talk!
            </a>
          </div>
        </div>

        <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div class="hidden sm:block">
              <div class="absolute inset-y-0 left-1/2 w-screen bg-gray-50 dark:bg-dark-50/4 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
              <svg
                class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x="{0}"
                    y="{0}"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="{0}"
                      y="{0}"
                      width="4"
                      height="4"
                      class="text-gray-200 dark:text-dark-50/20"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="392"
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <!-- Add my avatar photo later  -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="contact-me"
      class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div class="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div class="max-w-lg mx-auto">
            <h2 class="text-2xl font-extrabold tracking-tight sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary">
              <a href="#contact-me">Get in touch</a>
            </h2>
            <p class="mt-3 text-lg leading-6 text-gray-500 dark:text-gray-300">
              If you wanna get in touch, talk to me about a project
              collaboration or just say hi, fill up the awesome form or contact
              me via:
            </p>
            <dl class="mt-8 text-base text-gray-500 dark:text-gray-300">
              <div class="mt-6">
                <dt class="sr-only">
                  Phone number
                </dt>
                <dd class="flex">
                  <i
                    class="flex-shrink-0 h-6 w-6 i-carbon-logo-linkedin text-gray-400"
                    aria-hidden="true"
                  />
                  <a
                    href="https://www.linkedin.com/in/douglasochner/"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="underline underline-px underline-dashed ml-3"
                  >
                    in/douglasochner
                  </a>
                </dd>
              </div>
              <div class="mt-3">
                <dt class="sr-only">
                  Email
                </dt>
                <dd class="flex">
                  <i
                    class="flex-shrink-0 h-6 w-6 text-gray-400 i-carbon-at"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:douglas.ochner@gmail.com"
                    rel="noopener noreferrer"
                    class="underline underline-px underline-dashed ml-3"
                  >
                    douglas.ochner@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div class="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputText name="firstName" label="First Name" />
                <InputText name="lastName" label="Last Name" />
              </div>
              <div>
                <InputText name="email" label="E-mail" />
              </div>
              <div>
                <InputText name="phone" label="Phone" />
              </div>
              <div>
                <TextArea name="message" label="Message" />
              </div>
              <div>
                <Btn
                  variant="primary"
                  type="submit"
                  label="Send"
                  icon-right="i-carbon-arrow-right"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
