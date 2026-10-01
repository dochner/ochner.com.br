import fg from 'fast-glob'
import fs from 'fs-extra'
import matter from 'gray-matter'

const DOMAIN = 'https://ochner.com.br'
const EXCLUDE = ['admin/**', '404.html']

interface SitemapEntry {
  loc: string
  lastmod?: string
}

function toLoc(file: string): string {
  const path = file.replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '')
  return `${DOMAIN}/${path}`.replace(/\/$/, '') || DOMAIN
}

async function getLastmod(file: string): Promise<string | undefined> {
  const source = `pages/${file.replace(/\.html$/, '.md')}`
  if (!(await fs.pathExists(source)))
    return undefined

  const { data } = matter(await fs.readFile(source, 'utf-8'))
  return data.date ? new Date(data.date).toISOString().slice(0, 10) : undefined
}

async function run(): Promise<void> {
  const files = await fg('**/*.html', { cwd: 'dist', ignore: EXCLUDE })

  const entries: SitemapEntry[] = await Promise.all(
    files.sort().map(async file => ({ loc: toLoc(file), lastmod: await getLastmod(file) })),
  )

  const urls = entries
    .map(({ loc, lastmod }) => `  <url><loc>${loc === DOMAIN ? `${DOMAIN}/` : loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`)
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

  await fs.writeFile('dist/sitemap.xml', xml, 'utf-8')
}

run()
