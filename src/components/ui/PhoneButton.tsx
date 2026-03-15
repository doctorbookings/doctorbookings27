/**
 * PHONE BUTTON COMPONENT - "Call Now" Buttons Throughout Your Website
 * 
 * This component creates clickable phone buttons that directly call your business number.
 * It's one of your most important conversion tools - when someone clicks these buttons,
 * they have high intent to use your medical services.
 * 
 * KEY FEATURES:
 * - Direct phone calling (opens phone app on mobile, dialer on desktop)
 * - Instant Telegram alerts when buttons are clicked
 * - Multiple pre-styled variants for different page sections
 * - Analytics tracking to measure which buttons perform best
 * - HIPAA-compliant data handling (no patient info stored)
 * 
 * BUSINESS IMPACT:
 * - Phone leads typically convert 60-80% higher than form leads
 * - Immediate contact opportunity (no waiting for callbacks)
 * - Builds trust through direct human interaction
 * - Tracks high-intent user behavior for optimization
 * 
 * BUTTON LOCATIONS:
 * - Header: Small button in top navigation
 * - Hero: Large prominent button in main banner
 * - CTA: Call-to-action buttons in promotional sections
 * - Sticky: Floating button always visible on screen
 */

"use client" // This component needs browser features for phone calling and analytics

import React from "react"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { analytics } from '@/lib/analytics'
import { BUSINESS_CONTACT } from "@/lib/constants/healthcare"

// Phone Button Settings - How the call button should look and behave
interface PhoneButtonProps {
  size?: "sm" | "lg" | "default"     // Button size (small, large, normal)
  variant?: "default" | "outline" | "secondary"  // Button style
  className?: string                 // Custom styling
  phoneNumber?: string              // Which number to call (defaults to your main number)
  children?: React.ReactNode        // Button text (like "Call Now")
  source?: 'header' | 'sticky' | 'hero' | 'cta' | 'phone_button'  // Which button was clicked (for tracking)
  city?: string
}

// Optimized Phone Click Handler - Non-blocking performance
const handlePhoneClick = (phoneNumber: string, source: string, city?: string) => {
  // Immediately initiate phone call for best UX
  window.location.href = `tel:${phoneNumber}`;
  
  // Defer analytics and alerts to avoid blocking UI
  setTimeout(() => {
    // Track this click for business analytics (non-blocking)
    try {
      analytics.trackPhoneClick(city, source);
    } catch (error) {
      // Silent fail for analytics
    }
    
    // HIPAA-Compliant: Store only non-sensitive click metadata (non-blocking)
    try {
      const clickMetadata = {
        timestamp: new Date().toISOString(),
        city: city || 'Unknown Location',
        source: source || 'phone_button',
        device: navigator.userAgent.includes('Mobile') ? 'mobile' : 'desktop'
      };
      
      const existingMetadata = JSON.parse(localStorage.getItem('phone_click_metadata') || '[]');
      existingMetadata.push(clickMetadata);
      localStorage.setItem('phone_click_metadata', JSON.stringify(existingMetadata.slice(-10)));
    } catch (error) {
      // Silent fail for localStorage issues
    }
    
    // Send Telegram alert asynchronously (non-blocking)
    import('@/lib/integrations/telegram').then(({ sendLeadAlert }) => {
      sendLeadAlert({
        name: 'Phone Call Request',
        phone: 'Direct Call',
        age: '',
        city: city || 'Unknown Location',
        service: 'Phone Call',
        timestamp: new Date().toISOString(),
        source: 'phone_click'
      }).catch(() => {
        // Silent fail for telegram alert
      });
    }).catch(() => {
      // Silent fail for import
    });
  }, 0);
};

// Main Phone Button Function - Creates a clickable call button
export function PhoneButton({ 
  size = "default",                           // Default button size
  variant = "default",                       // Default button style
  className = "",                            // No custom styling by default
  phoneNumber = BUSINESS_CONTACT.MAIN_PHONE, // Your main business number
  children,                                   // Button text from parent
  source = 'phone_button'                    // Default tracking source
}: PhoneButtonProps) {
  
  return (
    <Button
      onClick={() => handlePhoneClick(phoneNumber, source, undefined)}  // Calls your number when clicked
      size={size}                                            // Button size
      variant={variant}                                      // Button style
      className={`${className} flex items-center space-x-1 md:space-x-2`}  // Styling
      aria-label={`Call Doctor Bookings at ${phoneNumber} for immediate healthcare assistance`}  // Accessibility
    >
      <Phone className="h-3 w-3 md:h-4 md:w-4" aria-hidden="true" />  {/* Phone icon */}
      {children || <span>Call Now</span>}  {/* Button text */}
    </Button>
  )
}

// Pre-made Phone Buttons for Different Parts of Your Website
// These are ready-to-use buttons with specific styling for each location

// Header Phone Button - Small button in top navigation
export function HeaderPhoneButton() {
  return (
    <PhoneButton
      size="sm"                                                                                    // Small size for header
      className="bg-green-700 hover:bg-green-800 rounded-full px-2 md:px-6 text-xs md:text-sm text-white"  // Green styling
      source="header"                                                                             // Tracks as "header" click
    >
      Call Now  {/* Button text */}
    </PhoneButton>
  )
}

// Hero Phone Button - Large prominent button in main banner
export function HeroPhoneButton() {
  return (
    <PhoneButton
      size="lg"                                                                                      // Large size for prominence
      className="bg-green-700 hover:bg-green-800 text-white rounded-full px-8 py-6 text-lg shadow-lg"  // Large green styling
      source="hero"                                                                                 // Tracks as "hero" click
    >
      Call Now  {/* Button text */}
    </PhoneButton>
  )
}

// CTA Phone Button - Call-to-action button in promotional sections
export function CTAPhoneButton() {
  return (
    <PhoneButton
      size="lg"                                                                                        // Large for call-to-action
      className="bg-green-700 hover:bg-green-800 rounded-full px-8 py-6 text-lg shadow-lg text-white"  // Prominent green styling
      source="cta"                                                                                     // Tracks as "cta" click
    >
      Call Now  {/* Button text */}
    </PhoneButton>
  )
}
