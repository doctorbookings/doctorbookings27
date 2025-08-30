/**
 * ANALYTICS HUB - Business Intelligence for Your Healthcare Platform
 * 
 * This is your business intelligence center that tracks everything happening on your website.
 * It tells you which cities generate the most leads, which buttons get clicked most,
 * and how visitors behave before booking a doctor visit.
 * 
 * WHAT IT TRACKS FOR YOUR BUSINESS:
 * - Form submissions (potential patients filling out booking forms)
 * - Phone button clicks (high-intent visitors wanting to call immediately)
 * - City-specific performance (which areas generate most business)
 * - Service interest (which medical services are most requested)
 * - Conversion funnel (how visitors move from viewing to booking)
 * 
 * BUSINESS VALUE:
 * - Identify your best-performing marketing channels
 * - Optimize website sections that convert visitors to patients
 * - Track neighborhood-level demand for expansion planning
 * - Measure ROI of different marketing campaigns
 * - Understand patient behavior patterns for better service
 * 
 * INTEGRATIONS:
 * - Google Analytics 4: Industry-standard web analytics
 * - Microsoft Clarity: User behavior recordings and heatmaps
 * - Local Storage: HIPAA-compliant temporary data for business insights
 */
import { initGA, trackLead, trackFormStart, trackFormSubmit, trackPhoneClick, trackCityInterest } from './google-analytics'
import { initClarity, trackFormInteraction, trackBookingFlow } from './microsoft-clarity'

// Safe gtag wrapper - prevents errors when GA4 not loaded
const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag(...args)
  }
}

// Initialize all analytics services on app startup
export const initAnalytics = () => {
  if (typeof window === 'undefined') return
  
  // Initialize Google Analytics
  initGA()
  
  // Initialize Microsoft Clarity
  initClarity()
}

// Enhanced Analytics Functions for Location-Based Healthcare Business
// These functions provide detailed tracking for neighborhood-level performance,
// search behavior analysis, and conversion funnel optimization
export const analytics = {
  // Lead generation tracking
  trackLead: (data: {
    city: string
    service: string
    method: 'form' | 'phone'
    value?: number
  }) => {
    trackLead(data)
  },

  // Form tracking
  trackFormStart: (formName: string, city?: string) => {
    trackFormStart(formName, city)
    trackBookingFlow('form_start', city)
  },

  trackFormSubmit: (formName: string, city?: string, service?: string) => {
    trackFormSubmit(formName, city, service)
    trackBookingFlow('form_submit', city, service)
    
    // Track as lead
    if (city && service) {
      trackLead({
        city,
        service,
        method: 'form',
        value: 500 // Estimated lead value
      })
    }
  },

  trackFormField: (formName: string, field: string, action: string) => {
    trackFormInteraction(formName, field, action)
  },

  // Phone call tracking
  trackPhoneClick: (city?: string, section?: string) => {
    trackPhoneClick(city, section)
    trackBookingFlow('phone_click', city)
    
    // Track as lead
    if (city) {
      trackLead({
        city,
        service: 'general_consultation',
        method: 'phone',
        value: 600 // Phone leads typically higher value
      })
    }
  },

  // City-specific tracking
  trackCityInterest: (city: string, action: string) => {
    trackCityInterest(city, action)
    trackBookingFlow('city_interest', city)
  },

  // Service-specific tracking
  trackServiceInterest: (service: string, city?: string) => {
    trackBookingFlow('service_interest', city, service)
  },

  // Enhanced neighborhood-level tracking
  trackNeighborhoodInterest: (city: string, neighborhood: string, action: string) => {
    if (typeof window === 'undefined') return
    
    // Track neighborhood-specific interactions
    gtag('event', 'neighborhood_interaction', {
      event_category: 'Location',
      event_label: `${city}_${neighborhood}`,
      city: city,
      neighborhood: neighborhood,
      action: action,
      value: 1
    })
    
    // Store for business analysis
    const neighborhoodData = {
      city,
      neighborhood,
      action,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer
    }
    
    const existing = JSON.parse(localStorage.getItem('neighborhood_analytics') || '[]')
    existing.push(neighborhoodData)
    localStorage.setItem('neighborhood_analytics', JSON.stringify(existing.slice(-100))) // Keep last 100 entries
  },

  // Search query analysis
  trackSearchQuery: (query: string, city?: string, results?: number) => {
    if (typeof window === 'undefined') return
    
    gtag('event', 'search_query', {
      event_category: 'Search',
      event_label: query,
      city: city || 'unknown',
      query: query,
      results_count: results || 0,
      value: 1
    })
    
    // Store search patterns for business insights
    const searchData = {
      query,
      city: city || 'unknown',
      results: results || 0,
      timestamp: new Date().toISOString(),
      page: window.location.pathname
    }
    
    const existing = JSON.parse(localStorage.getItem('search_analytics') || '[]')
    existing.push(searchData)
    localStorage.setItem('search_analytics', JSON.stringify(existing.slice(-50))) // Keep last 50 searches
  },

  // Conversion funnel by location
  trackConversionFunnel: (stage: 'page_view' | 'form_start' | 'form_submit' | 'phone_click' | 'booking_complete', city: string, neighborhood?: string) => {
    if (typeof window === 'undefined') return
    
    const funnelData = {
      stage,
      city,
      neighborhood: neighborhood || 'unknown',
      timestamp: new Date().toISOString(),
      sessionId: sessionStorage.getItem('session_id') || 'anonymous',
      page: window.location.pathname,
      referrer: document.referrer
    }
    
    // Track in Google Analytics
    gtag('event', 'conversion_funnel', {
      event_category: 'Funnel',
      event_label: `${stage}_${city}`,
      funnel_stage: stage,
      city: city,
      neighborhood: neighborhood || 'unknown',
      value: stage === 'booking_complete' ? 500 : 1
    })
    
    // Store for detailed funnel analysis
    const existing = JSON.parse(localStorage.getItem('conversion_funnel') || '[]')
    existing.push(funnelData)
    localStorage.setItem('conversion_funnel', JSON.stringify(existing.slice(-200))) // Keep last 200 funnel events
  },

  // Enhanced lead tracking with location details
  trackLocationLead: (data: {
    city: string
    neighborhood?: string
    service: string
    method: 'form' | 'phone'
    urgency?: 'normal' | 'urgent' | 'emergency'
    value?: number
  }) => {
    // Track the lead
    trackLead(data)
    
    // Track conversion funnel completion
    analytics.trackConversionFunnel('booking_complete', data.city, data.neighborhood)
    
    // Track neighborhood-specific lead
    if (data.neighborhood) {
      analytics.trackNeighborhoodInterest(data.city, data.neighborhood, 'lead_generated')
    }
  }
}

// Export individual functions
export { initGA, initClarity }
export * from './google-analytics'
export * from './microsoft-clarity'
