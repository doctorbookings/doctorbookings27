/**
 * TIRUPATI CITY PAGE - Dedicated Landing Page for Tirupati
 * 
 * This is a city-specific landing page optimized for people searching for
 * doctor home visits specifically in Tirupati. It's designed to rank high
 * in local search results and convert local visitors into patients.
 * 
 * SEO STRATEGY:
 * - Targets "doctor home visit tirupati" and related local keywords
 * - Mentions specific neighborhoods (Madhura Nagar, Balaji Colony, Temple Area)
 * - Optimized for local search rankings in Tirupati area
 * - Includes local business schema for Google Maps visibility
 * - Special focus on pilgrims and temple visitors
 * 
 * CONVERSION STRATEGY:
 * - Pre-selects "Tirupati" in booking forms for faster completion
 * - Emphasizes temple area coverage and pilgrim-friendly services
 * - Uses local landmarks and neighborhood names visitors recognize
 * - Provides city-specific phone number and contact information
 * 
 * BUSINESS PURPOSE:
 * Capture patients specifically in the Tirupati market by providing
 * a localized experience that serves both residents and temple pilgrims.
 */

import type { Metadata } from "next"

// SEO METADATA - Optimized for Tirupati local search results
export const metadata: Metadata = {
  title: 'Doctor Home Visits Tirupati | 24/7 MBBS Doctors | Temple Area Coverage',
  description: 'Book certified MBBS doctors for home visits in Tirupati within 30 minutes. Madhura Nagar, Balaji Colony, Chandragiri, Temple Area coverage. Perfect for pilgrims and residents.',
  keywords: [
    'doctor home visit tirupati', 'home doctor tirupati', 'emergency doctor tirupati',
    'MBBS doctor tirupati', 'doctor temple area tirupati', 'medical care tirupati',
    'doctor balaji colony', 'pilgrim medical care tirupati', 'home healthcare tirupati',
    'certified doctor tirupati', 'doctor visit chandragiri', 'medical service madhura nagar'
  ],
  openGraph: {
    title: 'Doctor Home Visits Tirupati - Temple Area Medical Care',
    description: 'Certified MBBS doctors for pilgrims and residents in Tirupati. Temple Area, Balaji Colony, Chandragiri coverage.',
        url: 'https://doctorbookings.in/tirupati',
    siteName: 'Doctor Bookings',
    images: [{
      url: '/tirupati-doctor-home-visit.jpg',
      width: 1200,
      height: 630,
      alt: 'Doctor Home Visits in Tirupati - Medical care for pilgrims and residents'
    }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doctor Home Visits Tirupati - Book Now',
    description: 'Certified doctors for pilgrims and residents in Tirupati within 30 minutes',
    images: ['/tirupati-doctor-home-visit.jpg'],
  },
  alternates: {
        canonical: 'https://doctorbookings.in/tirupati'
  }
}
import { Button } from "@/components/ui/button"
import { BookingDialog } from "@/components/forms/BookingDialog"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"
import { HeroPhoneButton, CTAPhoneButton, PhoneButton } from "@/components/ui/PhoneButton"
import {
  Stethoscope,
  Phone,
  Calendar,
  Shield,
  Heart,
  Activity,
  Thermometer,
  Droplet,
  Brain,
  Bone,
  Wind,
  Frown,
  Gauge,
  LigatureIcon as Bandage,
  CandyCaneIcon as Cane,
  MapPin,
  AlertTriangle,
  Bug,
  TreesIcon as Lungs,
  Home,
} from "lucide-react"
import Link from "next/link"
import { analytics } from "@/lib/analytics"
import ServicesSection from "@/components/sections/Services"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { BookingErrorBoundary } from "@/components/ErrorBoundary"
import { CityBusinessSchema } from "@/components/seo/CityBusinessSchema"

/**
 * MAIN TIRUPATI PAGE COMPONENT
 * 
 * Creates the complete Tirupati city page with:
 * - Hero section with Tirupati-specific messaging
 * - Local area coverage information (Madhura Nagar, Temple Area, etc.)
 * - Pre-selected city in booking forms
 * - Local SEO optimization
 * - City-specific contact information
 * - Special messaging for pilgrims and temple visitors
 */
export default function TirupatiPage() {
  // Analytics tracking handled by client-side components for performance

  return (
    <>
      <CityBusinessSchema city="tirupati" />
      <div className="min-h-screen bg-white">
        <Header showBackButton={true} />

        {/* HERO SECTION - Main banner that visitors see first */}
        {/* Emphasizes Tirupati coverage and temple area for pilgrims and residents */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-8 pb-0 md:pt-10 md:pb-2 overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-left">
                <div className="flex items-center justify-start mb-6">
                  <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    <Shield className="h-4 w-4 mr-2" />
                    Certified Doctors - Available 24/7 in Tirupati
                  </div>
                </div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-green-600 mb-6 text-left md:text-center">
                  Book Certified Doctors for Home Visit <span className="text-blue-600">in Tirupati</span>
                </h1>
                <p className="text-xl md:text-3xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed text-left md:text-center">
                  Get doctors at home in Tirupati within 30 minutes. Perfect for pilgrims and residents. Quality
                  healthcare delivered to your doorstep.
                </p>
                <p className="text-base text-gray-500 mb-12 max-w-3xl mx-auto text-left md:text-center">
                  <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    Serving all areas of Tirupati,
                  </span>{" "}
                  Madhura Nagar,KT road, Balaji Colony, Chandragiri,Bhavani Nagar, Renigunta areas
                  and many more....
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start md:justify-center mb-12">
                  <BookingErrorBoundary>
                    <BookingDialog
                      preselectedCity="tirupati"
                      triggerClassName="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-8 py-6 text-lg shadow-lg bg-transparent"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Doctor Now
                    </BookingDialog>
                  </BookingErrorBoundary>
                  <HeroPhoneButton />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION - Shows available medical services in Tirupati */}
        {/* Uses shared component but contextualizes for Tirupati residents and pilgrims */}
        <div id="services">
          <ServicesSection />
        </div>

        

        {/* HOW IT WORKS SECTION - Explains the booking process for Tirupati */}
        {/* Customized with Tirupati-specific messaging and response times */}
        <section id="how-it-works" className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-green-600 mb-6">
                How It Works in Tirupati
              </h2>
              <p className="text-xl text-gray-600">Professional medical care in just 3 simple steps</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Book/Call in 5 Seconds</h3>
                <p className="text-gray-600">
                  Quick online booking. Tell us your symptoms and preferred time in Tirupati.
                </p>
              </div>

              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Doctor Arrives Fast</h3>
                <p className="text-gray-600">
                  MBBS certified doctor reaches you within 30 minutes with medical equipment in Tirupati.
                </p>
              </div>

              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Safe Care at Home</h3>
                <p className="text-gray-600">
                  Complete examination, diagnosis, prescription, and follow-up - all at home in Tirupati.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookingDialog
                  preselectedCity="tirupati"
                  triggerClassName="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-8 py-6 text-lg shadow-lg bg-transparent"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Doctor Now
                </BookingDialog>
                <CTAPhoneButton />
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION - Trust building for Tirupati market */}
        {/* Shared component that builds credibility and addresses concerns */}
        <div id="why-choose-us">
          <WhyChooseUs />
        </div>

        {/* FOOTER SECTION - Tirupati-specific contact info and navigation */}
        {/* Contains local contact details and links to other city pages */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Stethoscope className="h-8 w-8 text-blue-400" />
                  <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition-colors">
                    Doctor Bookings
                  </Link>
                </div>
                <p className="text-gray-400 mb-4">
                  Bringing quality healthcare to your doorstep in Tirupati. MBBS-certified doctors available 24/7.
                </p>
                <div className="flex flex-col space-y-2">
                  <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center">
                    <Home className="h-4 w-4 mr-2" />
                    Back to Main Page
                  </Link>
                  <Link href="/vizag" className="text-gray-400 hover:text-white transition-colors">
                    Doctor Bookings Vizag
                  </Link>
                  <Link href="/kakinada" className="text-gray-400 hover:text-white transition-colors">
                    Doctor Bookings Kakinada
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Services in Tirupati</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Family Healthcare</li>
                  <li>Senior Healthcare</li>
                  <li>Pilgrim Healthcare</li>
                  <li>Emergency Visits</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Areas We Serve</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Madhura Nagar</li>
                  <li>Balaji Colony</li>
                  <li>Chandragiri</li>
                  <li>Bhavani Nagar</li>
                  <li>Renigunta</li>
                  <li>Temple Area</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Tirupati</h4>
                <div className="space-y-2 text-gray-400">
                  <a href="tel:9182296058" className="flex items-center hover:text-white transition-colors">
                    📞 9182296058
                  </a>
                  <p>📧 doctorbookings2708@gmail.com</p>
                  <p>📍 Tirupati, Andhra Pradesh</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                            <p>&copy; 2025 Doctor Bookings. All rights reserved. | Serving Tirupati with quality healthcare.</p>
              <div className="mt-4 flex justify-center space-x-6">
                <Link href="/" className="hover:text-white transition-colors">
                  Main Page
                </Link>
                <Link href="/vizag" className="hover:text-white transition-colors">
                  Vizag
                </Link>
                <Link href="/kakinada" className="hover:text-white transition-colors">
                  Kakinada
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* FLOATING CALL BUTTON - Always visible for immediate contact */}
        {/* Critical for mobile users who want to call while browsing */}
        <div className="fixed bottom-6 right-6 z-50">
          <PhoneButton
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
            phoneNumber="+91-9182296058"
            source="sticky"
          >
            <span className="sr-only">Call Now</span>
          </PhoneButton>
        </div>

      </div>
    </>
  )
}