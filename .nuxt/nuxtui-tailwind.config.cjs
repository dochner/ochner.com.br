
      const { defaultExtractor: createDefaultExtractor } = require('tailwindcss/lib/lib/defaultExtractor.js')
      const { customSafelistExtractor, generateSafelist } = require("/Users/douglasochner/projects/studies/ochner.com.br/node_modules/.pnpm/@dochner+nuxt-ui@0.0.0_nuxt@3.12.1_vite@5.3.1_vue@3.4.28/node_modules/@dochner/nuxt-ui/dist/runtime/utils/colors")
      const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

      const defaultExtractor = createDefaultExtractor({ tailwindConfig: { separator: ':' } })

      module.exports = {
        plugins: [
          require('@tailwindcss/forms')({ strategy: 'class' }),
          require('@tailwindcss/aspect-ratio'),
          require('@tailwindcss/typography'),
          require('@tailwindcss/container-queries'),
          require('@headlessui/tailwindcss'),
          iconsPlugin({ collections: getIconCollections(["heroicons"]) })
        ],
        content: {
          files: [
            "/Users/douglasochner/projects/studies/ochner.com.br/node_modules/.pnpm/@dochner+nuxt-ui@0.0.0_nuxt@3.12.1_vite@5.3.1_vue@3.4.28/node_modules/@dochner/nuxt-ui/dist/runtime/components/**/*.{vue,mjs,ts}",
            "/Users/douglasochner/projects/studies/ochner.com.br/node_modules/.pnpm/@dochner+nuxt-ui@0.0.0_nuxt@3.12.1_vite@5.3.1_vue@3.4.28/node_modules/@dochner/nuxt-ui/dist/runtime/ui.config/**/*.{mjs,js,ts}"
          ],
          transform: {
            vue: (content) => {
              return content.replaceAll(/(?:\r\n|\r|\n)/g, ' ')
            }
          },
          extract: {
            vue: (content) => {
              return [
                ...defaultExtractor(content),
                ...customSafelistExtractor("U", content, ["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","primary"], ["primary"])
              ]
            }
          }
        },
        safelist: generateSafelist(["primary"], ["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","primary"]),
      }
    