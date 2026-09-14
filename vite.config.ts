import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Genera robots.txt y sitemap.xml en el build y vuelve absolutas las URLs
 * de Open Graph cuando se define VITE_SITE_URL (p. ej. https://dominio.com) o cuando
 * Netlify aporta la variable URL durante el build.
 */
function seoFiles(): Plugin {
  // VITE_SITE_URL manual > URL que Netlify inyecta en cada build (dominio del sitio).
  const siteUrl = (process.env.VITE_SITE_URL ?? process.env.URL ?? '').trim().replace(/\/+$/, '')

  return {
    name: 'seo-files',
    apply: 'build',
    transformIndexHtml(html) {
      if (!siteUrl) return html
      return html
        .replaceAll('content="/images/', `content="${siteUrl}/images/`)
        .replace(
          '</head>',
          `    <link rel="canonical" href="${siteUrl}/" />\n    <meta property="og:url" content="${siteUrl}/" />\n  </head>`,
        )
    },
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /', '']
      if (siteUrl) {
        robots.push(`Sitemap: ${siteUrl}/sitemap.xml`, '')
        const today = new Date().toISOString().slice(0, 10)
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source:
            `<?xml version="1.0" encoding="UTF-8"?>\n` +
            `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
            `  <url>\n    <loc>${siteUrl}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n` +
            `</urlset>\n`,
        })
      } else {
        this.warn('VITE_SITE_URL no está definido: no se generó sitemap.xml ni URLs absolutas de Open Graph.')
      }
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots.join('\n') })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoFiles()],
})
