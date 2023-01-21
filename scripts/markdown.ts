import type MarkdownIt from 'markdown-it'
import { toArray } from '@antfu/utils'

type Mapping = Record<string, string | string[]>

export const codeBlockFilename = (md: MarkdownIt) => {
  const fence = md.renderer.rules.fence

  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args
    const token = tokens[idx]
    const langInfo = token.info.split(/\s+/)
    const langName = langInfo?.length ? langInfo[0] : ''
    const fileName = langName.length && langInfo[1] ? langInfo[1] : null

    token.info = langName

    const rawCode = fence(...args)
    const finalCode = fileName
      ? rawCode.replace(/<pre class="language-(\w+)">/, `<pre class="language-$1 with-filename"><div class="code-block-filename">${fileName}</div>`)
      : rawCode

    return finalCode
  }
}

export const lazyLoadImage = (md: MarkdownIt) => {
  const image = md.renderer.rules.image!
  md.renderer.rules.image = (...args) => {
    return image(...args).replace(/src="(.*?)"/g, 'v-lazy="\'$1\'"')
  }
}

const mapping: Mapping = {
  h1: ['text-4xl', 'font-extrabold', 'mb-1rem', 'next:mt-0'],
  h2: ['text-2xl', 'font-bold', 'mt-2rem', 'mb-1rem', 'next:mt-0'],
  h3: ['text-xl', 'font-semibold', 'mt-1.6rem', 'mb-0.6rem', 'next:mt-0'],
  h4: ['font-semibold', 'mt-1.5em', 'mb-0.5rem', 'next:mt-0'],
  p: ['my-1.25rem last:mt-0 first:mb-0 leading-[1.75]'],
  blockquote: ['px-5 py-2 op-80 border-l-3 my-1.6rem italic last:mt-0 first:mb-0 color-inherit'],
  a: ['text-sky-500 dark:text-sky-400 font-medium hover:underline'],
  ul: ['my-1.25rem', 'list-disc', 'list-inside', 'px-2'],
  li: ['my-0.5rem'],
  hr: ['w-50px', 'mx-auto', 'my-2rem', 'dark:border-cool-gray-300', 'border-dark-100'],
  img: ['w-full', 'my-2rem', 'rounded-lg', 'md:rounded-xl'],
  strong: ['font-semibold'],
  table: ['w-full', 'my-2rem', 'text-left', 'table-auto', 'font-0.875rem'],
  video: ['my-2rem'],
  figure: ['my-2rem children:my-2rem'],
}

const splitWithSpace = (s: string) => (s ? s.split(/\/s+/) : [])

const parseTokens = (tokens: any[]) => {
  tokens.forEach((token) => {
    if (/(_open$|image|hr)/.test(token.type) && mapping[token.tag]) {
      const origin = splitWithSpace(token.attrGet('class'))
      const addition = toArray(mapping[token.tag])
      token.attrSet('class', [...origin, ...addition].join(' '))
    }

    if (token.children)
      parseTokens(token.children)
  })
}

export const prose = (md: MarkdownIt) => {
  md.core.ruler.push('prose', state => parseTokens(state.tokens))
}
