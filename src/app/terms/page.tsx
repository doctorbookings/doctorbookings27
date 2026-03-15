import type { Metadata } from "next"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: 'Terms of Use | Doctor Bookings',
  description: 'Terms of Use for Doctor Bookings - Read our service terms, booking conditions, and usage guidelines for our doctor home visit services.',
  alternates: {
    canonical: 'https://doctorbookings.in/terms'
  }
}

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white">
      <Header showBackButton={true} />

      <main className="container px-4 md:px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Use</h1>
        <p className="text-gray-500 mb-8">Last updated: March 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. About Our Service</h2>
            <p className="text-gray-600 leading-relaxed">
              Doctor Bookings is a platform that connects patients with certified MBBS doctors for home visits in Visakhapatnam (Vizag), Tirupati, and Kakinada. We facilitate booking and coordination of medical consultations at your home.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Service Scope</h2>
            <p className="text-gray-600 leading-relaxed">Our services include:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
              <li>General doctor home visits and consultations</li>
              <li>Elderly and senior home healthcare</li>
              <li>Post-surgery follow-up care at home</li>
              <li>Pediatric home visits</li>
              <li>Routine health check-ups and monitoring</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              <strong>Important:</strong> Doctor Bookings is not an emergency or ambulance service. For life-threatening emergencies, please call 108 immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Booking & Appointments</h2>
            <p className="text-gray-600 leading-relaxed">
              When you submit a booking request through our website, our team will contact you within 2 minutes to confirm the details and assign a doctor. Consultation fees and service charges will be discussed during this confirmation call. Payment is collected after the consultation is completed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Doctor Qualifications</h2>
            <p className="text-gray-600 leading-relaxed">
              All doctors on our platform are MBBS-qualified with valid MCI/NMC registration. We verify credentials and conduct background checks to ensure quality healthcare delivery at your home.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. User Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Provide accurate personal and health information during booking</li>
              <li>Ensure a safe and accessible environment for the visiting doctor</li>
              <li>Inform us of any known infectious conditions in advance</li>
              <li>Complete payment for services rendered</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Cancellation</h2>
            <p className="text-gray-600 leading-relaxed">
              You may cancel a booking by contacting us before the doctor departs for your location. Once the doctor is en route, cancellation may not be possible. Please contact us at 9182296058 for cancellation requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              Doctor Bookings acts as a facilitator connecting patients with qualified doctors. While we ensure doctor quality, medical outcomes depend on individual health conditions. We are not liable for medical decisions made during consultations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about these terms, contact us at:
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Email:</strong> doctorbookings2708@gmail.com<br />
              <strong>Phone:</strong> <a href="tel:+919182296058" className="text-blue-600 hover:underline">9182296058</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
