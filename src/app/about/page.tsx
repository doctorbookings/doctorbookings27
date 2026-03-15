import { Metadata } from 'next'
import { Shield, Clock, Award, CheckCircle } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BookingDialog } from '@/components/forms/BookingDialog'
import { PhoneButton } from '@/components/ui/PhoneButton'

// Advanced SEO Metadata for E-E-A-T signals
export const metadata: Metadata = {
  title: 'About Doctor Bookings | Certified Home Visit Doctors',
  description: 'Learn about Doctor Bookings. We are a trusted network of certified MBBS doctors providing emergency and routine home visits in Vizag, Tirupati, and Kakinada.',
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
                We are a professional network of certified medical practitioners dedicated to bringing high-quality, hospital-level healthcare directly to your doorstep.
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
                  In times of sickness, traveling to a hospital or waiting in crowded clinics can worsen the patient's condition. Our mission is to make healthcare accessible, comfortable, and immediate by providing on-demand doctor home visits.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Whether it's an urgent midnight fever, routine senior care, or post-surgery wound dressing, our doctors are equipped to handle your medical needs safely in the comfort of your home.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <BookingDialog triggerClassName="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg">
                    Book a Doctor Now
                  </BookingDialog>
                  <PhoneButton className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 text-lg" />
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold mb-6">Why Trust Us?</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <Award className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">100% Certified MBBS Doctors</h4>
                      <p className="text-gray-600 mt-1">Every doctor in our network is fully licensed and strictly vetted for experience and professionalism.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">24/7 Availability</h4>
                      <p className="text-gray-600 mt-1">Illness doesn't check the time. We provide round-the-clock service including nights, weekends, and public holidays.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Patient Safety First</h4>
                      <p className="text-gray-600 mt-1">Doctors carry sterilized equipment and follow strict medical protocols for safe home examinations.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-blue-50">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Service Locations</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Visakhapatnam</h3>
                <p className="text-gray-600 text-sm">Serving all major neighborhoods across Vizag with 30-minute rapid response.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Tirupati</h3>
                <p className="text-gray-600 text-sm">Dedicated healthcare for residents and pilgrims needing urgent care.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Kakinada</h3>
                <p className="text-gray-600 text-sm">Professional physician home visits and reliable senior healthcare services.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
