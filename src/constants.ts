// Canonical production origin for SEO tags (canonical, og:url, JSON-LD). Not env-driven on purpose:
// preview/local builds must still point crawlers at the production URL.
export const SITE_URL = 'https://ochner.com.br'
export const SENDGRID_API_KEY = import.meta.env.VITE_SENDGRID_API_KEY || ''
