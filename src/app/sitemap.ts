/**
 * MAIN SITEMAP - Tells Google About All Your Website Pages
 * 
 * This file creates a sitemap.xml that Google uses to find and index your pages.
 * When you submit this to Google Search Console, your website appears in search results faster.
 * 
 * BUSINESS IMPACT:
 * - Faster Google indexing = More patients find your website
 * - Better SEO rankings for "doctor home visit" searches
 * - Helps all city pages rank in local search results
 * 
 * IMPORTANT: Update the baseUrl with your actual domain when you deploy
 */

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // 🔥 IMPORTANT: Replace this with your actual domain after deployment
  // Examples:
  // - If using Vercel: 'https://doctor-bookings-abc123.vercel.app'
  // - If using custom domain: 'https://doctorbookings.com'
  const baseUrl = 'https://doctorbookings.in' // 👈 UPDATED WITH YOUR PRODUCTION DOMAIN
  
  return [
    {
      url: baseUrl,                    // Homepage - highest priority
      lastModified: new Date(),
      changeFrequency: 'weekly',       // Updated weekly with new content
      priority: 1,                     // Most important page (1.0 = highest)
    },
    {
      url: `${baseUrl}/vizag`,         // Vizag city page
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,                   // Very important for local SEO
    },
    {
      url: `${baseUrl}/tirupati`,      // Tirupati city page
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,                   // Very important for local SEO
    },
    {
      url: `${baseUrl}/kakinada`,      // Kakinada city page
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,                   // Very important for local SEO
    },
  ]
}
