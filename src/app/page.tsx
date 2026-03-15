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
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
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
    "@type": "MedicalBusiness",
    "name": "Doctor Bookings",
    "description": "Book certified MBBS doctors for home visits in Vizag, Tirupati & Kakinada. At your doorstep within 30 minutes. Available 24/7.",
    "url": "https://doctorbookings.in",
    "telephone": "+91-9182296058",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "City", "name": "Visakhapatnam" },
      { "@type": "City", "name": "Tirupati" },
      { "@type": "City", "name": "Kakinada" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "availableService": [
      { "@type": "MedicalProcedure", "name": "Doctor Home Visit" },
      { "@type": "MedicalProcedure", "name": "Elderly Home Healthcare" },
      { "@type": "MedicalProcedure", "name": "Post-Surgery Home Care" },
      { "@type": "MedicalProcedure", "name": "Urgent Doctor Home Visit" },
      { "@type": "MedicalProcedure", "name": "Pediatric Home Visit" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500",
      "bestRating": "5"
    }
  };

  // ORGANIZATION SCHEMA — Full production-grade entity for Google Knowledge Panel
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://doctorbookings.in/#organization",
    "name": "Doctor Bookings",
    "alternateName": ["DoctorBookings", "Doctor Booking", "doctorbookings"],
    "description": "Professional home healthcare service providing certified MBBS doctor home visits in Vizag, Tirupati & Kakinada. Available 24/7.",
    "url": "https://doctorbookings.in",
    "logo": "https://doctorbookings.in/icon.svg",
    "telephone": "+91-9182296058",
    "email": "doctorbookings.in@gmail.com",
    "foundingDate": "2025",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9182296058",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Telugu", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-9182296058",
        "contactType": "emergency",
        "areaServed": "IN",
        "availableLanguage": ["English", "Telugu", "Hindi"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "City", "name": "Visakhapatnam" },
      { "@type": "City", "name": "Tirupati" },
      { "@type": "City", "name": "Kakinada" }
    ],
    "sameAs": [
      "https://doctorbookings.in"
      // Add social media URLs here when created:
      // "https://www.facebook.com/doctorbookings",
      // "https://www.instagram.com/doctorbookings",
      // "https://www.linkedin.com/company/doctorbookings"
    ]
  };

  // WEBSITE SCHEMA — Controls how Google displays your site name in search results
  // Google shows "Doctor Bookings" instead of "doctorbookings.in" because of this schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://doctorbookings.in/#website",
    "name": "Doctor Bookings",
    "alternateName": [
      "DoctorBookings",
      "Doctor Booking", 
      "doctorbookings",
      "doctorbookings.in",
      "Doctor Bookings India",
      "Doctor Bookings Home Visit"
    ],
    "url": "https://doctorbookings.in",
    "publisher": { "@id": "https://doctorbookings.in/#organization" },
    "inLanguage": "en-IN",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://doctorbookings.in/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
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
          text: "For life-threatening emergencies, please call 108 immediately. Doctor Bookings is for non-emergency medical care. For urgent but non-emergency cases, we prioritize and can reach within 30–45 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "Are your doctors available 24/7?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our home visit doctors are available 24/7, including weekends and holidays. Whether it's early morning or late night, you can book a certified MBBS doctor for a home visit anytime.",
        },
      },
      {
        "@type": "Question",
        name: "What's the typical response time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our standard response time is under 60 minutes. For urgent cases, we can reach within 30–45 minutes. You can also schedule appointments for a preferred time slot.",
        },
      },
      {
        "@type": "Question",
        name: "How are your doctors verified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All our doctors are MBBS-qualified with valid MCI/NMC registration. We verify their credentials, conduct background checks, and ensure they have relevant experience in home healthcare.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide regular home visits for elderly or bedridden patients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We specialize in senior care and home healthcare for elderly and bedridden patients. You can schedule regular check-ups, post-surgery follow-ups, or ongoing health monitoring at home.",
        },
      },
      {
        "@type": "Question",
        name: "When should I book a home doctor visit instead of going to a hospital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A home doctor visit is ideal for non-emergency situations like fever, cold, flu, body pain, blood pressure check, blood sugar monitoring, elderly check-ups, post-surgery care, and routine health assessments. For severe chest pain, difficulty breathing, or accidents, please call 108.",
        },
      },
    ],
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* WEBSITE HEADER - Navigation bar that stays at the top of the page */}
        {/* This header contains your logo, navigation menu, and is visible on all pages */}
        <Header />

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
        <Footer />

        {/* FLOATING CALL BUTTON - Always visible phone button for immediate contact */}
        {/* This button floats on the screen so visitors can call you from anywhere on the page */}
        <div className="fixed bottom-6 right-6 z-50">
          <PhoneButton
            size="lg"
            className="w-14 h-14 rounded-full bg-green-700 hover:bg-green-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
            source="sticky"
          >
            <span className="sr-only">Call Now</span>
          </PhoneButton>
        </div>

        {/* Combined SEO Structured Data - Optimized for performance */}
        <Script
          id="combined-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              faqSchema,
              localBusinessSchema,
              organizationSchema,
              websiteSchema
            ])
          }}
        />
      </div>
    </>
  )
}
