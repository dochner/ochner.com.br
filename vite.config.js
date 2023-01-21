import { resolve } from 'path'
import { defineConfig } from 'vite'
import fs from 'fs-extra'
import Pages from 'vite-plugin-pages'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'vite-plugin-md'
import Inspect from 'vite-plugin-inspect'
import Vue from '@vitejs/plugin-vue'
import Prism from 'markdown-it-prism'
import matter from 'gray-matter'
import AutoImport from 'unplugin-auto-import/vite'
import anchor from 'markdown-it-anchor'
import markdownLinkAttr from 'markdown-it-link-attributes'
import markdownAttrs from 'markdown-it-attrs'
import Unocss from 'unocss/vite'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import { slugify } from './scripts/slugify'
import { codeBlockFilename, lazyLoadImage, prose } from './scripts/markdown'
import { buildBlogRSS } from './scripts/rss'
import { optimizeImages } from './scripts/image'

import 'prismjs/components/prism-regex'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-xml-doc'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javadoclike'
import 'prismjs/components/prism-javadoc'
import 'prismjs/components/prism-jsdoc'

export default defineConfig({
  resolve: {
    alias: [
      { find: '@/', replacement: `${resolve(__dirname, 'src')}/` },
    ],
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      'dayjs',
    ],
  },

  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    Pages({
      extensions: ['vue', 'md'],
      dirs: [
        { dir: './src/pages', baseRoute: '' },
        { dir: 'posts', baseRoute: 'posts' },
      ],
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))

        if (!path.includes('projects.md')) {
          const md = fs.readFileSync(path, 'utf-8')
          const { data } = matter(md)

          route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        }

        const routePath = route.path?.replace(/[0-9]{4}-[0-9]{2}-[0-9]{2}-/, '')
        const name = route.name?.replace(/[0-9]{4}-[0-9]{2}-[0-9]{2}-/, '')

        return {
          ...route,
          name,
          path: routePath,
          alias: routePath.endsWith('/')
            ? `${routePath}index.html`
            : `${routePath}.html`,
        }
      },
    }),

    Markdown({
      wrapperComponent: 'Post',
      markdownItOptions: {
        breaks: true,
        quotes: '""\'\'',
      },

      markdownItSetup(md) {
        md.use(Prism)
        md.use(anchor, {
          slugify,
          permalink: anchor.permalink.ariaHidden({
            placement: 'before',
          }),
        })

        md.use(markdownLinkAttr, {
          pattern: /^https?:/,
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })

        md.use(markdownAttrs)

        md.use(lazyLoadImage)
        md.use(codeBlockFilename)
        md.use(prose)
      },
    }),

    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve(__dirname, './locales/**')],
    }),

    Unocss(),

    AutoImport({
      imports: [
        '@vueuse/core',
        '@vueuse/head',
        'vue',
        'vue-router',
        'vue-i18n',
      ],

      dts: 'src/auto-import.d.ts',
    }),

    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          prefix: false,
        }),
      ],
      dts: 'src/components.d.ts',
    }),

    Icons({
      autoInstall: true,
    }),

    Inspect(),
  ],

  ssgOptions: {
    formatting: 'minify',
    async onFinished() {
      await buildBlogRSS()
      await optimizeImages()
    },
  },
})
