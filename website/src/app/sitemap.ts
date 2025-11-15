import type { MetadataRoute } from 'next'
import FetchNavData from '@/utils/fetchNavData'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  // Fetch navigation data
  const navData = await FetchNavData()

  const paths = new Set<string>()

  // Check if navItems exist
  if (navData.navItems && navData.navItems.length > 0) {
    navData.navItems.forEach((item) => {
      if (item.link) {
        // Add main link
        paths.add(`/${item.link}`)
      }

      // Add subpage links
      if (item.subpageLinks && item.subpageLinks.length > 0) {
        item.subpageLinks.forEach((sub) => {
          if (sub.link) {
            // Assuming sub links are relative paths
            paths.add(`/${sub.link}`)
          }
        })
      }
    })
  }

  // Optionally, include static paths
  paths.add('/kontakt')
  paths.add('/texte')
  paths.add('/biographie')

  return Array.from(paths).map((path) => ({
    url: baseUrl + path,
  }))
}
