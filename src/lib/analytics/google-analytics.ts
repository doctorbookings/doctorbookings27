// Google Analytics 4 Configuration for Doctor Bookings
// This tracks how people use your website so you can improve your business
// It tells you which cities get most visitors, which pages work best, etc.

declare global {
  interface Window {
    gtag: (...args: any[]) => void  // Google's tracking function
    dataLayer: any[]                // Where tracking data is stored
  }
}

// Your Google Analytics ID - Set this in your environment variables
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// Start Google Analytics - This runs when your website loads
export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    // Google Analytics Measurement ID not found - silent handling
    return
  }

  // Load Google's tracking code into your website
  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`  // Google's script
  script.async = true  // Don't slow down your website
  document.head.appendChild(script)  // Add to website

  // Set up Google's tracking system
  window.dataLayer = window.dataLayer || []  // Create data storage
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)  // Store tracking data
  }
  
  window.gtag('js', new Date())  // Start tracking
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,      // What page they're on
    page_location: window.location.href,  // Full page URL
  })
}

// Track When People Visit Different Pages - Shows which pages are popular
export const trackPageView = (url: string, title: string) => {
  if (!GA_MEASUREMENT_ID || !window.gtag) return  // Skip if not set up
  
  // Record this page visit
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: title,    // Page name
    page_location: url,   // Page URL
  })
  
  // Track which section of your website they visited
  const route = url.split('/').pop() || 'home'  // Extract page name (vizag, tirupati, etc.)
  window.gtag('event', 'page_view', {
    page_title: title,
    page_location: url,
    page_route: route,           // Which city page or home
    event_category: 'navigation' // Type of action
  })
}

// Track Healthcare Business Actions - Your core business events
export const trackHealthcareEvent = (eventName: string, parameters: {
  city?: string           // Which city (Vizag, Tirupati, Kakinada)
  service_type?: string   // Type of medical service
  form_step?: string      // Which step of booking form
  phone_number?: string   // Which number they called
  [key: string]: any      // Any other data
}) => {
  if (!GA_MEASUREMENT_ID || !window.gtag) return  // Skip if not set up

  // Record this business action
  window.gtag('event', eventName, {
    event_category: 'healthcare',  // Mark as healthcare business event
    ...parameters,                 // Include all the details
  })
}

// Track New Patients - MOST IMPORTANT for your business!
// This tracks when someone becomes a potential customer
export const trackLead = (leadData: {
  city: string              // Which city they're in
  service: string           // What medical service they need
  method: 'form' | 'phone'  // How they contacted you
  value?: number            // How valuable this lead is
}) => {
  trackHealthcareEvent('generate_lead', {
    city: leadData.city,
    service_type: leadData.service,
    contact_method: leadData.method,
    value: leadData.value || 500, // Each lead worth ~₹500 to your business
  })
}

// Track Booking Form Usage - Shows conversion funnel
// Form Start = Someone opened the booking form (interested!)
export const trackFormStart = (formName: string, city?: string) => {
  trackHealthcareEvent('form_start', {
    form_name: formName,  // Which form (booking, contact, etc.)
    city: city,           // Which city page they were on
  })
}

// Form Submit = Someone completed booking (became a lead!)
export const trackFormSubmit = (formName: string, city?: string, service?: string) => {
  trackHealthcareEvent('form_submit', {
    form_name: formName,    // Which form they completed
    city: city,             // Which city
    service_type: service,  // What service they need
  })
}

// Track Phone Button Clicks - High-intent customers!
// When someone clicks "Call Now", they're ready to talk business
export const trackPhoneClick = (city?: string, section?: string) => {
  trackHealthcareEvent('phone_click', {
    city: city,                  // Which city page
    section: section,            // Which button (header, hero, etc.)
    contact_method: 'phone',     // They want to call
  })
}

// Track Interest in Specific Cities - Shows which markets are hot
export const trackCityInterest = (city: string, action: string) => {
  trackHealthcareEvent('city_interest', {
    city: city,      // Vizag, Tirupati, or Kakinada
    action: action,  // What they did (visited, clicked, etc.)
  })
}
