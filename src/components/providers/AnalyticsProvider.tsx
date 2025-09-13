"use client"
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { initAnalytics, trackPageView } from '@/lib/analytics'

interface AnalyticsProviderProps {
  children: React.ReactNode
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const pathname = usePathname()
  const analyticsInitialized = useRef(false)
  const pageViewTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Lazy initialize analytics after user interaction or delay
    if (!analyticsInitialized.current) {
      const initializeAnalytics = () => {
        if (!analyticsInitialized.current) {
          analyticsInitialized.current = true
          initAnalytics()
        }
      }

      // Initialize on first user interaction
      const handleUserInteraction = () => {
        initializeAnalytics()
        document.removeEventListener('click', handleUserInteraction)
        document.removeEventListener('scroll', handleUserInteraction)
        document.removeEventListener('keydown', handleUserInteraction)
      }

      document.addEventListener('click', handleUserInteraction, { passive: true })
      document.addEventListener('scroll', handleUserInteraction, { passive: true })
      document.addEventListener('keydown', handleUserInteraction, { passive: true })

      // Fallback: initialize after 3 seconds if no interaction
      const fallbackTimeout = setTimeout(initializeAnalytics, 3000)

      return () => {
        document.removeEventListener('click', handleUserInteraction)
        document.removeEventListener('scroll', handleUserInteraction)
        document.removeEventListener('keydown', handleUserInteraction)
        clearTimeout(fallbackTimeout)
      }
    }
  }, [])

  useEffect(() => {
    // Debounced page view tracking
    if (pathname && analyticsInitialized.current) {
      if (pageViewTimeout.current) {
        clearTimeout(pageViewTimeout.current)
      }
      
      pageViewTimeout.current = setTimeout(() => {
        trackPageView(window.location.href, document.title)
      }, 100) // Small delay to batch rapid navigation
    }

    return () => {
      if (pageViewTimeout.current) {
        clearTimeout(pageViewTimeout.current)
      }
    }
  }, [pathname])

  return <>{children}</>
}
