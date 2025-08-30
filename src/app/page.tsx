/**
 * MAIN HOME PAGE COMPONENT
 * 
 * This is the primary landing page for the Doctor Bookings website.
 * It serves as the main entry point where visitors learn about home healthcare services
 * and can book doctor visits in Vizag, Tirupati, and Kakinada.
 * 
 * KEY FEATURES:
 * - Hero section with main call-to-action
 * - Service areas and pricing information
 * - How it works process explanation
 * - Customer testimonials and FAQ
 * - SEO optimization with structured data
 * - Mobile-responsive design
 * - Sticky phone button for easy contact
 * 
 * BUSINESS PURPOSE:
 * Convert website visitors into booking leads by showcasing the value
 * of professional home healthcare services and making it easy to contact.
 */

"use client" // This tells Next.js this component runs in the browser (client-side)
import type React from "react"
import { HeaderPhoneButton, PhoneButton } from "@/components/ui/PhoneButton"
import { BookingDialog } from "@/components/forms/BookingDialog"

// Import all the main page sections - each section handles a specific part of the homepage
import { Hero } from "@/components/sections/Hero"
import { ServingCities } from "@/components/sections/ServingCities"
import { Pain } from "@/components/sections/Pain"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { Services } from "@/components/sections/Services"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/FAQ"
import { FinalCTA } from "@/components/sections/FinalCTA"

import { Button } from "@/components/ui/button"
import {
  Phone,
  Stethoscope,
  Mail
} from "lucide-react"
import Link from "next/link"
import Script from "next/script"

/**
 * MAIN COMPONENT FUNCTION
 * 
 * This function creates the entire homepage layout and functionality.
 * It combines all the different sections (Hero, Services, FAQ, etc.) into one complete page.
 * 
 * WHAT IT DOES:
 * 1. Sets up SEO data to help Google understand your business
 * 2. Creates the page structure (header, main content, footer)
 * 3. Adds a floating phone button for easy contact
 * 4. Makes the page mobile-friendly and accessible
 */
export default function DoctorBookings() {

  // SEO STRUCTURED DATA - This helps Google understand your business better
  // When people search for "doctor home visits in Vizag", this data helps your site appear
  // LOCAL BUSINESS SCHEMA - Tells Google you're a local healthcare business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Doctor Bookings",
    "description": "Professional home healthcare service providing certified doctor visits in Visakhapatnam, Tirupati, and Kakinada",
    "url": "https://doctorbookings.in",
    "telephone": "+91-9182296058",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN"
    },
    "areaServed": ["Visakhapatnam", "Tirupati", "Kakinada"],
    "serviceType": "Home Healthcare"
  };

  // ORGANIZATION SCHEMA - Provides basic company information to search engines
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Doctor Bookings",
    "description": "Professional home healthcare service",
    "url": "https://doctorbookings.in"
  };

  // WEBSITE SCHEMA - Identifies this as your main website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Doctor Bookings",
    "url": "https://doctorbookings.in"
  };

  // FAQ SCHEMA - Makes your frequently asked questions appear in Google search results
  // This can help your website show up when people ask questions about home doctor visits
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I book a doctor visit for my parents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Many of our bookings are made by children for their elderly parents. You can book on their behalf and be present during the consultation if needed.",
        },
      },
      {
        "@type": "Question",
        name: "What if my case is urgent or an emergency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For life-threatening emergencies, please call 108 immediately. Doctor Bookings is for non-emergency medical care. For urgent but non-emergency cases, we prioritize and can reach within 30-45 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "What's the typical response time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our standard response time is under 60 minutes. For urgent cases, we can reach within 30-45 minutes. You can also schedule appointments for a preferred time slot.",
        },
      },
      {
        "@type": "Question",
        name: "How are your doctors verified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All our doctors are MBBS-qualified with valid MCI registration. We verify their credentials, conduct background checks, and ensure they have relevant experience in home healthcare.",
        },
      },
    ],
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* WEBSITE HEADER - Navigation bar that stays at the top of the page */}
        {/* This header contains your logo, navigation menu, and is visible on all pages */}
        <header 
          className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm"
          role="banner"
          id="navigation"
        >
          <div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-500 shadow-lg">
                <Stethoscope className="h-5 w-5 md:h-6 md:w-6 text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">Doctor</span>
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight -mt-1">Bookings</span>
              </div>
            </div>

            <nav className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4" role="navigation" aria-label="Main navigation">
              <a 
                href="#services" 
                className="text-gray-700 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap px-1 py-1 sm:px-2 md:px-3 md:py-2 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Services
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-700 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap px-1 py-1 sm:px-2 md:px-3 md:py-2 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="hidden sm:inline">How&nbsp;It&nbsp;Works</span>
                <span className="sm:hidden">How&nbsp;It&nbsp;Works</span>
              </a>
              <a 
                href="#why-choose-us" 
                className="text-gray-700 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap px-1 py-1 sm:px-2 md:px-3 md:py-2 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="hidden sm:inline">Why&nbsp;Choose&nbsp;Us</span>
                <span className="sm:hidden">Why&nbsp;Us</span>
              </a>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT AREA - All the important sections of your homepage */}
        {/* This is where visitors learn about your services and decide to book */}
        <main id="main-content" role="main">
          <Hero />

          {/* PAGE SECTIONS - Each section serves a specific purpose in converting visitors to customers */}
          {/* Hero: Grabs attention and explains main value proposition */}
          {/* ServingCities: Shows which areas you cover */}
          {/* Pain: Addresses customer problems you solve */}
          {/* Services: Details what medical services you provide */}
          {/* HowItWorks: Explains the booking and service process */}
          {/* WhyChooseUs: Builds trust and credibility */}
          {/* Testimonials: Social proof from satisfied customers */}
          {/* FAQ: Answers common questions to remove booking barriers */}
          {/* FinalCTA: Last chance to convert visitors into leads */}
          <ServingCities />
          <Pain />
          <div id="services">
            <Services />
          </div>
          <div id="how-it-works">
            <HowItWorks />
          </div>
          <div id="why-choose-us">
            <WhyChooseUs />
          </div>
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>

        {/* WEBSITE FOOTER - Contains contact info, links, and legal information */}
        {/* Appears at the bottom of every page and provides additional ways to contact you */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-500">
                    <Stethoscope className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xl font-bold">Doctor Bookings</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Professional medical care delivered to your home by certified doctors across India.
                </p>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Quick Contact</h4>
                <div className="space-y-3">
                  <a href="tel:+919182296058" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <Phone className="h-4 w-5 mr-2" />
                    9182296058
                  </a>
                  <Button variant="ghost" className="justify-start p-0 h-auto text-gray-400 hover:text-white">
                    <Mail className="h-4 w-4 mr-2" />
                    doctorbookings2708@gmail.com
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Services</h4>
                <div className="space-y-2">
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    Home Doctor Visits
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    Elderly Care
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    Pediatric Care
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    Post-Surgery Care
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Cities We Serve</h4>
                <div className="space-y-2">
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    {"vizag"}
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    {"Tirupathi"}
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    {"Kakinada"}
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    {"more coming soon..."}
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2024 Doctor Bookings. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* FLOATING CALL BUTTON - Always visible phone button for immediate contact */}
        {/* This button floats on the screen so visitors can call you from anywhere on the page */}
        <div className="fixed bottom-6 right-6 z-50">
          <PhoneButton
            size="lg"
            className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
            source="sticky"
          >
            <span className="sr-only">Call Now</span>
          </PhoneButton>
        </div>

        {/* SEO Structured Data - App Router compatible */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
      </div>
    </>
  )
}
