/**
 * HERO SECTION COMPONENT - Your Website's Main Banner
 * 
 * This is the most important section of your website - it's the first thing visitors see.
 * Think of it as your "digital storefront" that convinces people to book a doctor visit.
 * 
 * KEY ELEMENTS:
 * - Compelling headline that promises fast, certified medical care
 * - Two clear action buttons: "Book Doctor Now" and "Call Now"
 * - Professional doctor image to build trust and credibility
 * - Trust badges showing 24/7 availability and certified doctors
 * 
 * BUSINESS PURPOSE:
 * Convert website visitors into leads by clearly communicating your value proposition:
 * "Get a certified doctor at your home within 30 minutes"
 * 
 * CONVERSION STRATEGY:
 * - Primary CTA: Opens booking form to capture lead information
 * - Secondary CTA: Direct phone call for immediate contact
 * - Visual trust signals: Doctor image, certification badges, availability status
 */

"use client" // This component needs browser features for interactive buttons

import type React from "react"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "@/components/forms/BookingDialog"
import { HeroPhoneButton } from "@/components/ui/PhoneButton"
import { Calendar, Shield, CheckCircle, Users, Clock, Heart } from "lucide-react"
import Image from "next/image"

// Main Hero Function - Creates the entire top banner section
export function Hero() {
  return (
    // Main Hero Container - Light blue/green gradient background
    <section 
      className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 overflow-hidden"
      aria-labelledby="hero-heading"  // Accessibility: Links to main heading
    >
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Responsive Layout - 2 columns on desktop, 1 column on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Main Text and Buttons */}
            <div className="text-left">
              {/* Trust Badge - Shows credibility */}
              <div className="flex items-center justify-start mb-6">
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Shield className="h-4 w-4 mr-2" aria-hidden="true" />  {/* Shield icon */}
                  Certified Doctors - Available 24/7  {/* Trust message */}
                </div>
              </div>
              {/* Main Headline - The most important text on your website */}
              <h1 
                id="hero-heading"  // Accessibility identifier
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-blue-600 mb-6 text-left md:text-center"
              >
                Certified Doctors at Your Doorstep <span className="text-green-600">in under 30 minutes</span>
                {/* This headline promises: Qualified doctors + Home service + Fast delivery */}
              </h1>
              {/* Subheadline - Explains the simple process */}
              <p className="text-xl md:text-3xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed text-left md:text-center">
                Tell us your symptoms, we'll call you within 2 minutes to confirm details and send a certified doctor to your home within 30 minutes.
                {/* Clear process: 1) Tell symptoms 2) We call back 3) Doctor arrives */}
              </p>
              {/* Action Buttons - Primary ways for customers to contact you */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start md:justify-center mb-12">
                {/* Primary Button - Opens booking form popup */}
                <BookingDialog
                  selectedService="General Consultation"  // Default service type
                  triggerClassName="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-8 py-6 text-lg shadow-lg bg-transparent"
                >
                  <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />  {/* Calendar icon */}
                  Book Doctor Now  {/* Button text */}
                </BookingDialog>
                {/* Secondary Button - Direct phone call */}
                <HeroPhoneButton />  {/* Calls your business phone number */}
              </div>
            </div>

            {/* Right Side - Doctor Image */}
            <div className="relative lg:block">
              <div className="relative">
                {/* Professional Doctor Image - Builds trust and credibility */}
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%2015%2C%202025%2C%2008_49_47%20PM-m9yXBPGNG5FPUPceS7H3Qw7unooqbo.png"
                  alt="Certified MBBS doctor with medical equipment including stethoscope and blood pressure monitor, ready for home visit healthcare service in Vizag, Tirupati, and Kakinada"
                  className="w-full h-auto rounded-2xl shadow-2xl"  // Styling: full width, rounded corners, shadow
                  priority  // Loads this image first (important for page speed)
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  // Responsive sizing
                />
                {/* Trust Badge Overlay - Reinforces credibility */}
                <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 bg-white rounded-2xl p-3 md:p-4 shadow-lg border max-w-xs z-10 mx-4 md:mx-0">
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    {/* Green checkmark circle */}
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>  {/* Checkmark symbol */}
                      </div>
                    </div>
                    {/* Trust message */}
                    <div className="text-center md:text-left">
                      <p className="font-semibold text-sm text-gray-900">Certified Doctors</p>  {/* Main trust message */}
                      <p className="text-xs text-gray-500">Available Now</p>  {/* Availability status */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}