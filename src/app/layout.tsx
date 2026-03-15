// Root Layout Component - This is the main wrapper for the entire website
// Think of this as the "frame" that goes around every page on your website
// It includes the HTML structure, SEO settings, and analytics tracking

import type { Metadata, Viewport } from "next"
import "./globals.css"
import { AnalyticsProvider } from "@/components/providers/AnalyticsProvider"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

// SEO Settings - This tells Google and other search engines about your website
// These settings help your website appear in search results when people look for doctors
export const metadata: Metadata = {
  // Base URL for all relative URLs in metadata (fixes Next.js warning)
  metadataBase: new URL('https://doctorbookings.in'),
  title: 'Doctor Home Visit Near Me | 24/7 MBBS Doctors at Doorstep - Doctor Bookings',
  description: 'Book a certified MBBS doctor for home visit in Vizag, Tirupati & Kakinada. Home visit doctors near you — at your doorstep within 30 minutes. Available 24/7 for urgent & non-emergency visits.',
  keywords: ['doctor home visit', 'home visit doctor near me', 'doctor home visit near me', 'home visit doctors near me', 'book doctor home visit', 'doctor on call home visit', 'doctor at doorstep', '24/7 doctor home visit', 'home healthcare', 'doctor booking', 'certified MBBS doctors', 'vizag', 'tirupati', 'kakinada', 'elderly care', 'senior care', 'home visit doctor'],
  authors: [{ name: 'Doctor Bookings' }],
  creator: 'Doctor Bookings',
  publisher: 'Doctor Bookings',
  applicationName: 'Doctor Bookings',
  robots: 'index, follow',
  other: {
    'application-name': 'Doctor Bookings',
  },
  
  // Social Media Sharing Settings
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://doctorbookings.in',
    title: 'Doctor Home Visit | MBBS Doctors at Your Doorstep in 30 Minutes',
    description: 'Book a certified MBBS doctor for home visit in Vizag, Tirupati & Kakinada. At your doorstep within 30 minutes. Available 24/7.',
    siteName: 'Doctor Bookings',
  },
  
  // Twitter Sharing Settings
  twitter: {
    card: 'summary_large_image',
    title: 'Doctor Home Visit | 24/7 MBBS Doctors at Doorstep',
    description: 'Book certified MBBS doctors for home visits in Vizag, Tirupati & Kakinada. Available 24/7.',
  },
  
  // Website Verification
  verification: {
    google: '3ZVA7CuMqsgLR5sEoimEzoVQl5LB9YRdgnBNV7wa7m0',
  },
  alternates: {
    canonical: 'https://doctorbookings.in'
  }
}

// Next.js Viewport Configuration - Industry Standard Approach
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

// Main Layout Function - This creates the HTML structure for every page on your website
// It includes accessibility features and analytics tracking
export default function RootLayout({
  children, // This represents the actual page content (home page, city pages, etc.)
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Mobile optimization meta tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body suppressHydrationWarning={true}>
        {/* Accessibility Features - Helps people with disabilities navigate your website */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        <a 
          href="#navigation" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to navigation
        </a>
        
        {/* Analytics Wrapper - Tracks visitor behavior and form submissions */}
        <AnalyticsProvider>
          {children} {/* Your actual page content goes here */}
        </AnalyticsProvider>
        
        {/* Vercel Analytics - Page view tracking */}
        <Analytics />
        
        {/* Vercel Speed Insights - Performance monitoring */}
        <SpeedInsights />

      </body>
    </html>
  )
}