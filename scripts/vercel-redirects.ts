import fs from 'fs-extra'

interface VercelRedirect {
  source: string
  destination: string
  permanent: boolean
}

/**
 * Converts the Netlify-style `_dist_redirects` into Vercel `redirects`
 * and merges them into `vercel.json` (Vercel ignores `_redirects`).
 */
async function run(): Promise<void> {
  const raw = await fs.readFile('_dist_redirects', 'utf-8')

  const redirects: VercelRedirect[] = raw
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'))
    .map((line) => {
      const [source, destination] = line.split(/\s+/)
      return { source, destination: destination.replace(/^<|>$/g, ''), permanent: false }
    })
    .filter(({ source, destination }) => source?.startsWith('/') && /^https?:\/\//.test(destination))

  const config = await fs.readJson('vercel.json')
  await fs.writeJson('vercel.json', { ...config, redirects }, { spaces: 2 })
}

run()
