import { writeFile } from 'node:fs/promises'

const siteUrl = 'https://cgstudio.theclosinggap.net'
const publicPages = ['', 'gallery']

const paths = [...publicPages]

function urlForPath(path) {
  return path ? `${siteUrl}/${path}` : `${siteUrl}/`
}

function priorityForPath(path) {
  if (!path) {
    return '1.0'
  }
  return '0.7'
}

function changefreqForPath(path) {
  if (!path) {
    return 'weekly'
  }
  return 'monthly'
}

function indiaDate(value = new Date()) {
  return new Date(value.getTime() + 330 * 60 * 1000).toISOString().slice(0, 10)
}

const lastmod = indiaDate()
const urls = paths
  .map(
    (path) => `  <url>
    <loc>${urlForPath(path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreqForPath(path)}</changefreq>
    <priority>${priorityForPath(path)}</priority>
  </url>`,
  )
  .join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

await writeFile('public/sitemap.xml', sitemap, 'utf8')
console.log(`Generated public/sitemap.xml with ${paths.length} URLs.`)
