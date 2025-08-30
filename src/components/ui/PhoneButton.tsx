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

// Phone Click Handler - What happens when someone clicks "Call Now"
// This is CRITICAL for your business - it means someone wants to call you!
const handlePhoneClick = async (phoneNumber: string, source: string, city?: string) => {
  // Track this click for business analytics
  analytics.trackPhoneClick(city, source);
  
  // HIPAA-Compliant: Prepare non-sensitive data for alert
  const clickData = {
    city: city || 'Unknown Location',
    phoneNumber,                        // Your business number they're calling
    timestamp: new Date().toISOString(), // Exact time they clicked
    userAgent: navigator.userAgent,     // What device they're using
    source: source || 'phone_button'    // Which button they clicked
  };
  
  // HIPAA-Compliant: Store only non-sensitive click metadata
  const clickMetadata = {
    timestamp: clickData.timestamp,
    city: clickData.city,
    source: clickData.source,
    device: clickData.userAgent.includes('Mobile') ? 'mobile' : 'desktop'
  };
  
  try {
    const existingMetadata = JSON.parse(localStorage.getItem('phone_click_metadata') || '[]');
    existingMetadata.push(clickMetadata);
    localStorage.setItem('phone_click_metadata', JSON.stringify(existingMetadata.slice(-10))); // Keep last 10
  } catch (error) {
    // Silent fail for localStorage issues
  }
  
  // Send you an instant Telegram alert - "Someone just clicked Call Now!"
  try {
    const { sendLeadAlert } = await import('@/lib/integrations/telegram');
    await sendLeadAlert({
      name: 'Phone Call Request',
      phone: 'Direct Call',
      age: '',
      city: clickData.city,
      service: 'Phone Call',
      timestamp: clickData.timestamp,
      source: 'phone_click'
    });
  } catch (error) {
    // Phone click alert failed - error handled silently
  }
  
  // Actually make the phone call (opens phone app on mobile, dialer on desktop)
  window.location.href = `tel:${phoneNumber}`;
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
      className="bg-green-600 hover:bg-green-700 rounded-full px-2 md:px-6 text-xs md:text-sm text-white"  // Green styling
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
      className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg shadow-lg"  // Large green styling
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
      className="bg-green-600 hover:bg-green-700 rounded-full px-8 py-6 text-lg shadow-lg text-white"  // Prominent green styling
      source="cta"                                                                                     // Tracks as "cta" click
    >
      Call Now  {/* Button text */}
    </PhoneButton>
  )
}
