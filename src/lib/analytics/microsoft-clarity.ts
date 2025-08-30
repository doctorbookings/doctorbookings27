// Microsoft Clarity Configuration for Doctor Bookings
// Clarity records how people actually use your website (like a video recording)
// You can see where they click, scroll, and what confuses them
// This helps you improve your website to get more patients

declare global {
  interface Window {
    clarity: (...args: any[]) => void  // Microsoft's tracking function
  }
}

// Your Microsoft Clarity Project ID - Set this in your environment variables
export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID

// Start Microsoft Clarity - This runs when your website loads
export const initClarity = () => {
  if (!CLARITY_PROJECT_ID) {
    // Microsoft Clarity Project ID not found - silent handling
    return
  }

  // Load Microsoft's tracking code into your website
  const script = document.createElement('script')
  script.innerHTML = `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
  `  // Microsoft's standard tracking code
  document.head.appendChild(script)  // Add to your website
}

// Track Custom Business Events in Clarity
// This lets you see exactly what happened when important events occur
export const trackClarityEvent = (eventName: string, data?: Record<string, any>) => {
  if (!window.clarity) return  // Skip if Clarity not loaded
  
  window.clarity('event', eventName, data)  // Record the event with details
}

// Track Form Usage - See exactly how people fill out your booking form
// This shows if people get stuck on certain fields or abandon the form
export const trackFormInteraction = (formName: string, field: string, action: string) => {
  trackClarityEvent('form_interaction', {
    form: formName,   // Which form (booking, contact)
    field: field,     // Which field (name, phone, city)
    action: action,   // What they did (focus, blur, type)
  })
}

// Track Booking Process - See the patient journey from start to finish
// This shows where people drop off in your booking process
export const trackBookingFlow = (step: string, city?: string, service?: string) => {
  trackClarityEvent('booking_flow', {
    step: step,        // Which step (opened_form, filled_name, submitted)
    city: city,        // Which city they selected
    service: service,  // What service they need
  })
}
