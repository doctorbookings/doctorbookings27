/**
 * VIZAG CITY PAGE - Dedicated Landing Page for Visakhapatnam
 * 
 * This is a city-specific landing page optimized for people searching for
 * doctor home visits specifically in Visakhapatnam (Vizag). It's designed
 * to rank high in local search results and convert local visitors into patients.
 * 
 * SEO STRATEGY:
 * - Targets "doctor home visit vizag" and related local keywords
 * - Mentions specific neighborhoods (MVP Colony, Beach Road, etc.)
 * - Optimized for local search rankings in Visakhapatnam area
 * - Includes local business schema for Google Maps visibility
 * 
 * CONVERSION STRATEGY:
 * - Pre-selects "Vizag" in booking forms for faster completion
 * - Emphasizes local coverage areas to build trust
 * - Uses local landmarks and neighborhood names visitors recognize
 * - Provides city-specific phone number and contact information
 * 
 * BUSINESS PURPOSE:
 * Capture patients specifically in the Visakhapatnam market by providing
 * a localized experience that feels tailored to their specific area.
 */

import type { Metadata } from "next"

// SEO METADATA - Optimized for Vizag local search results
export const metadata: Metadata = {
  title: 'Doctor Home Visit Vizag | 24/7 MBBS Doctors at Doorstep in Visakhapatnam',
  description: 'Book certified MBBS doctors for home visits in Vizag (Visakhapatnam). Home healthcare at your doorstep — MVP Colony, Gajuwaka, Beach Road, Madhurawada. Available 24/7 for urgent & non-emergency visits.',
  keywords: [
    'doctor home visit vizag', 'home visit doctors in visakhapatnam', 'doctors care vizag',
    'home doctor visakhapatnam', 'MBBS doctor home visit vizag', 'doctor at home vizag',
    'medical care vizag', 'home healthcare visakhapatnam', 'vizag doctors',
    'visakhapatnam doctor', 'senior care services visakhapatnam', 'doctor vizag',
    'home care services vizag', 'certified doctor vizag', 'physician vizag',
    'gajuwaka home visit', 'doctor home visit near me vizag'
  ],
  openGraph: {
    title: 'Doctor Home Visit Vizag | MBBS Doctors at Your Doorstep',
    description: 'Book certified MBBS doctors for home visits in Visakhapatnam. At your doorstep within 30 minutes. Available 24/7.',
    url: 'https://doctorbookings.in/vizag',
    siteName: 'Doctor Bookings',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doctor Home Visit Vizag | 24/7 MBBS Doctors',
    description: 'Certified doctors at your doorstep in Visakhapatnam within 30 minutes. Available 24/7.',
  },
  alternates: {
    canonical: 'https://doctorbookings.in/vizag'
  }
}
import { Button } from "@/components/ui/button"
import { BookingDialog } from "@/components/forms/BookingDialog"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
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

export default function VizagPage() {
  // Analytics tracking moved to client components

  return (
    <>
      <CityBusinessSchema city="vizag" />
      <div className="min-h-screen bg-white">
        <Header showBackButton={true} />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-8 pb-0 md:pt-10 md:pb-2 overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-left">
                <div className="flex items-center justify-start mb-6">
                  <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    <Shield className="h-4 w-4 mr-2" />
                    Certified Doctors - Available 24/7 in Vizag
                  </div>
                </div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-green-600 mb-6 text-left md:text-center">
                  Doctor Home Visit in Vizag — <span className="text-blue-600">Certified Doctors at Your Doorstep</span>
                </h1>
                <p className="text-xl md:text-3xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed text-left md:text-center">
                  Get a certified doctor at your doorstep in Vizag within 30 minutes. Skip hospital visits — we bring quality healthcare to your home across Visakhapatnam.
                </p>
                <p className="text-base text-gray-500 mb-12 max-w-3xl mx-auto text-left md:text-center">
                  <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    Serving all areas of Vizag:
                  </span>{" "}
                  MVP Colony, Beach Road, Bheemli, Gajuwaka, Rushikonda, Hanumanthwaka, Seethammadhara, NAD Junction, Dwaraka Nagar, Asilmetta, Yendada, Madhurawada, Jagadamba, Murali Nagar and many more...
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start md:justify-center mb-12">
                  <BookingErrorBoundary>
                    <BookingDialog
                      preselectedCity="vizag"
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

        {/* Services Section */}
        <div id="services">
          <ServicesSection />
        </div>

        

        {/* How It Works */}
        <section id="how-it-works" className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-green-600 mb-6">
                How to Book a Doctor for Home Visit in Vizag
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
                  Quick online booking. Tell us your symptoms and preferred time in Vizag.
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
                  MBBS certified doctor reaches you within 30 minutes with medical equipment in Visakhapatnam.
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
                  Complete examination, diagnosis, prescription, and follow-up - all at home in Vizag.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookingDialog
                  preselectedCity="vizag"
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
        
        {/* Why Choose Us Section */}
        <div id="why-choose-us">
          <WhyChooseUs />
        </div>

        {/* Footer */}
        <Footer />

        {/* Sticky Call Button */}
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
