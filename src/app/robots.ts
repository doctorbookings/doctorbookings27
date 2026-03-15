import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://doctorbookings.in'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Hide private endpoints/routes from Google
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
