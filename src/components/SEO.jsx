import { useEffect } from 'react'

const SITE_NAME = 'ANTI.AI'
const BASE_URL = 'https://antiai.ltd'
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`
const DEFAULT_DESCRIPTION =
  'ANTI.AI builds responsible, human-governed artificial intelligence. From deepfake detection to enterprise security — powerful, auditable, and aligned with real-world accountability.'

/**
 * SEO component — updates document title, meta description, Open Graph,
 * Twitter Card, and canonical link on every route change.
 *
 * @param {string} title        - Page title (without site name suffix)
 * @param {string} description  - Meta description
 * @param {string} canonical    - Canonical path e.g. '/capabilities'
 * @param {string} ogImage      - Absolute URL to OG image (optional)
 * @param {Object} jsonLd       - JSON-LD structured data object or array (optional)
 */
export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical = '/',
  ogImage = DEFAULT_OG_IMAGE,
  jsonLd = null,
}) {
  const fullTitle = !title
    ? `${SITE_NAME} — Human-Governed AI Software Company`
    : title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`
  const canonicalUrl = `${BASE_URL}${canonical}`

  useEffect(() => {
    // --- Title ---
    document.title = fullTitle

    // Helper to set or create a <meta> tag
    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        const [attrName, attrValue] = attr.split('=').map((s) => s.replace(/"/g, ''))
        el.setAttribute(attrName, attrValue)
        document.head.appendChild(el)
      }
      el.setAttribute('content', value)
    }

    // Helper to set or create a <link> tag
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    // --- Standard Meta ---
    setMeta('meta[name="description"]', 'name="description"', description)

    // --- Canonical ---
    setLink('canonical', canonicalUrl)

    // --- Open Graph ---
    setMeta('meta[property="og:title"]', 'property="og:title"', fullTitle)
    setMeta('meta[property="og:description"]', 'property="og:description"', description)
    setMeta('meta[property="og:url"]', 'property="og:url"', canonicalUrl)
    setMeta('meta[property="og:image"]', 'property="og:image"', ogImage)
    setMeta('meta[property="og:type"]', 'property="og:type"', 'website')
    setMeta('meta[property="og:site_name"]', 'property="og:site_name"', SITE_NAME)

    // --- Twitter Card ---
    setMeta('meta[name="twitter:title"]', 'name="twitter:title"', fullTitle)
    setMeta('meta[name="twitter:description"]', 'name="twitter:description"', description)
    setMeta('meta[name="twitter:image"]', 'name="twitter:image"', ogImage)
    setMeta('meta[name="twitter:card"]', 'name="twitter:card"', 'summary_large_image')

    // --- JSON-LD Structured Data ---
    // Remove any previous injected script
    const existingScript = document.getElementById('seo-jsonld')
    if (existingScript) existingScript.remove()

    if (jsonLd) {
      const script = document.createElement('script')
      script.id = 'seo-jsonld'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
  }, [fullTitle, description, canonicalUrl, ogImage, jsonLd])

  return null
}
