// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    vue: {
      overrides: {
        'vue/define-macros-order': [
          'error',
          {
            order: [
              'defineProps',
              'defineEmits',
            ],
          },
        ],
        'vue/component-tags-order': [
          'error',
          {
            order: [
              'script',
              'template',
              'style',
            ],
          },
        ],
        'vue/max-attributes-per-line': [
          'error',
          {
            singleline: {
              max: 1,
            },
            multiline: {
              max: 1,
            },
          },
        ],
        'vue/attributes-order': [
          'error',
          {
            order: [
              'DEFINITION',
              'LIST_RENDERING',
              'CONDITIONALS',
              'RENDER_MODIFIERS',
              'GLOBAL',
              [
                'UNIQUE',
                'SLOT',
              ],
              'TWO_WAY_BINDING',
              'OTHER_DIRECTIVES',
              'OTHER_ATTR',
              'EVENTS',
              'CONTENT',
            ],
            alphabetical: true,
          },
        ],
      },
    },
  },
)
