/**
 * ROBOTS.TXT - Controls What Search Engines Can Access
 * 
 * This file tells Google and other search engines which parts of your website
 * they can index (show in search results) and which parts to ignore.
 * 
 * BUSINESS IMPACT:
 * - Protects your API endpoints from being indexed by Google
 * - Ensures only public pages appear in search results
 * - Points search engines to your sitemap for faster indexing
 * 
 * IMPORTANT: Update the sitemap URL with your actual domain when you deploy
 */

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',                    // Applies to all search engines (Google, Bing, etc.)
      allow: '/',                        // Allow indexing of all public pages
      disallow: '/api/',                 // 🔒 Block API endpoints (protects your backend)
    },
    // 🔥 IMPORTANT: Replace this with your actual domain after deployment
    // Examples:
    // - If using Vercel: 'https://doctor-bookings-abc123.vercel.app/sitemap.xml'
    // - If using custom domain: 'https://doctorbookings.com/sitemap.xml'
    sitemap: 'https://doctorbookings.in/sitemap.xml', // 👈 UPDATED WITH YOUR PRODUCTION DOMAIN
  }
}
