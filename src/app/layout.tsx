// Root Layout Component - This is the main wrapper for the entire website
// Think of this as the "frame" that goes around every page on your website
// It includes the HTML structure, SEO settings, and analytics tracking

import type { Metadata, Viewport } from "next"
import "./globals.css"
import { AnalyticsProvider } from "@/components/providers/AnalyticsProvider"
import Script from "next/script"

// SEO Settings - This tells Google and other search engines about your website
// These settings help your website appear in search results when people look for doctors
export const metadata: Metadata = {
  // Base URL for all relative URLs in metadata (fixes Next.js warning)
  metadataBase: new URL('https://doctorbookings.in'),
  title: 'Doctor Bookings - Doctor Home Visits in Vizag, Tirupati & Kakinada',
  description: 'Book certified doctors for home visits in Visakhapatnam, Tirupati, and Kakinada. Professional medical care at your doorstep within 30 minutes.',
  keywords: ['doctor home visits', 'healthcare', 'medical services', 'vizag', 'tirupati', 'kakinada', 'home healthcare', 'certified doctors', 'MBBS', 'elderly care', 'pediatric care'],
  authors: [{ name: 'Doctor Bookings' }],
  creator: 'Doctor Bookings',
  publisher: 'Doctor Bookings',
  robots: 'index, follow',
  
  // Social Media Sharing Settings - When someone shares your website on Facebook/WhatsApp
  // these settings control what image and text appears
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://doctorbookings.in',
    title: 'Doctor Bookings - Certified Doctors at Your Doorstep',
    description: 'Professional medical care delivered to your home by certified MBBS doctors in Vizag, Tirupati & Kakinada. Book now for immediate healthcare assistance.',
    siteName: 'Doctor Bookings',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Doctor Bookings - Doctor Home Visits'
    }]
  },
  
  // Twitter Sharing Settings - Similar to Facebook, but specifically for Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Doctor Bookings - Doctor Home Visits',
    description: 'Certified doctors at your doorstep in Vizag, Tirupati & Kakinada',
    images: ['/twitter-image.jpg']
  },
  
  // Website Verification - Proves to Google that you own this website
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://doctorbookings.in'
  }
}

// Next.js Viewport Configuration - Industry Standard Approach
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        
        {/* Preload critical resources for mobile */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="tel:+919182296058" />
        <link rel="preload" href="/api/leads" as="fetch" crossOrigin="anonymous" />
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
        
        
        {/* Emergency phone preload */}
        <Script
          id="emergency-preload"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              // Preload emergency contact
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js').catch(() => {});
              }
              
              // Cache critical API endpoint
              if ('caches' in window) {
                caches.open('healthcare-v1').then(cache => {
                  cache.add('/api/leads').catch(() => {});
                });
              }
            `
          }}
        />
      </body>
    </html>
  )
}