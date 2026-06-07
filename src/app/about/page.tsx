import { Metadata } from 'next'
import { Shield, Clock, Award, Users, Code, Cpu } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BookingDialog } from '@/components/forms/BookingDialog'
import { PhoneButton } from '@/components/ui/PhoneButton'

// Advanced SEO Metadata for E-E-A-T signals
export const metadata: Metadata = {
  title: 'About Doctor Bookings | Healthcare Technology Platform',
  description: 'Doctor Bookings is a healthcare technology company building intelligent scheduling, provider coordination, and clinical workflow software for on-demand medical services.',
  alternates: {
    canonical: 'https://doctorbookings.in/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">Doctor Bookings</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We are a healthcare technology company building intelligent software infrastructure that powers on-demand clinical services — from provider scheduling and dispatch to patient workflow management.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Trust Signals Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Traditional healthcare access remains fragmented — long wait times, inefficient scheduling, and zero coordination between patients and providers. We are engineering a technology layer that makes on-demand medical services seamless, reliable, and scalable.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Our platform handles the full lifecycle — from intelligent provider matching and real-time dispatch to appointment orchestration and post-consultation follow-ups — enabling healthcare delivery at the patient&apos;s doorstep.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <BookingDialog triggerClassName="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg">
                    Book a Doctor Now
                  </BookingDialog>
                  <PhoneButton variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-600 bg-white rounded-full px-8 py-6 text-lg" />
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold mb-6">Why Trust Us?</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <Award className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">100% Verified MBBS Providers</h4>
                      <p className="text-gray-600 mt-1">Every provider undergoes credential verification, clinical experience validation, and NMC/MCI registration checks.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">24/7 Service Availability</h4>
                      <p className="text-gray-600 mt-1">Our scheduling systems operate round-the-clock — including nights, weekends, and public holidays — ensuring uninterrupted service access.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Clinical-Grade Safety Protocols</h4>
                      <p className="text-gray-600 mt-1">Providers carry sterilized equipment and adhere to standardized medical protocols for safe home-based examinations.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Founding Team Section */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Team</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Founded in 2025, Doctor Bookings is built by a cross-functional team of 6 — spanning software engineering, healthcare operations, clinical coordination, and product development.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto mb-4">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Engineering</h3>
                <p className="text-gray-600 text-sm">Platform architecture, scheduling systems, and provider-side tooling</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Clinical Operations</h3>
                <p className="text-gray-600 text-sm">Provider onboarding, credential verification, and service quality management</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 mx-auto mb-4">
                  <Cpu className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Product &amp; Design</h3>
                <p className="text-gray-600 text-sm">Patient experience, workflow automation, and data-driven product development</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-blue-50">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Active Service Regions</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Visakhapatnam</h3>
                <p className="text-gray-600 text-sm">Full coverage across all major localities with sub-30-minute provider dispatch.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Tirupati</h3>
                <p className="text-gray-600 text-sm">Dedicated healthcare coordination for residents and visitors requiring urgent consultations.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Kakinada</h3>
                <p className="text-gray-600 text-sm">Specialized geriatric care and general physician home visit coordination.</p>
              </div>
            </div>
            <p className="text-gray-500 mt-6 text-sm">Expansion to additional metro and tier-2 markets in active development.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
