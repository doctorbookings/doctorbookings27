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
              Doctor Bookings operates as a technology and facilitation platform. We provide an online marketplace that connects patients in Visakhapatnam (Vizag), Tirupati, and Kakinada with independent, experienced medical professionals for home visits. We facilitate the booking and coordination of these consultations.
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
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Doctor Qualifications & Independence</h2>
            <p className="text-gray-600 leading-relaxed">
              We rigorously vet the independent medical professionals on our platform. The doctors utilizing our platform to connect with patients are highly experienced (typically 3+ years), MCI/NMC registered, MBBS-qualified, and often affiliated with top-tier hospitals. However, these doctors act as independent practitioners and are not direct employees of Doctor Bookings.
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
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Limitation of Liability (Medical Disclaimer)</h2>
            <p className="text-gray-600 leading-relaxed">
              Doctor Bookings is strictly a technology platform and does not provide medical advice, diagnoses, or treatment directly. The independent doctors are solely responsible for all medical services, outcomes, and decisions made during the home visits. Doctor Bookings shall not be held liable for any medical negligence, malpractice, or outcomes resulting from consultations facilitated through our platform.
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
