import type { Metadata } from "next"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: 'Terms of Use | Doctor Bookings',
  description: 'Terms of Use for Doctor Bookings - Read our service terms, platform usage guidelines, and operational policies for our healthcare technology platform.',
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
        <p className="text-gray-500 mb-8">Last updated: June 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. About Our Platform</h2>
            <p className="text-gray-600 leading-relaxed">
              Doctor Bookings is a healthcare technology company that develops and operates software infrastructure for on-demand medical services. Our platform provides intelligent provider matching, automated scheduling, and real-time service coordination — connecting patients with independent, verified medical professionals for home-based clinical consultations. We currently operate across Visakhapatnam (Vizag), Tirupati, and Kakinada, with active expansion underway.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Service Scope</h2>
            <p className="text-gray-600 leading-relaxed">Our platform currently facilitates the following clinical service categories:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
              <li>On-demand general physician home consultations</li>
              <li>Geriatric and senior home healthcare coordination</li>
              <li>Post-operative follow-up and wound care management</li>
              <li>Pediatric home visit scheduling and coordination</li>
              <li>Preventive health assessments and routine monitoring</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              <strong>Important:</strong> Doctor Bookings is not an emergency response or ambulance dispatch service. For life-threatening emergencies, please dial 108 immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Booking &amp; Appointment Workflow</h2>
            <p className="text-gray-600 leading-relaxed">
              Upon submission of a service request through our platform, our coordination system initiates provider matching and dispatches a confirmation within 2 minutes. Consultation fees and applicable service charges are communicated during the confirmation phase. Payment settlement occurs post-consultation upon successful service delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Provider Qualifications &amp; Independence</h2>
            <p className="text-gray-600 leading-relaxed">
              All healthcare providers on our platform undergo a rigorous credential verification process. Practitioners are required to hold valid MBBS qualifications, maintain active MCI/NMC registration, and demonstrate a minimum of 3 years of clinical experience. Many are additionally affiliated with recognized tertiary-care institutions. Providers operate as independent medical practitioners and are not direct employees of Doctor Bookings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. User Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Provide accurate personal and clinical information during service requests</li>
              <li>Ensure a safe, accessible environment for the attending provider</li>
              <li>Disclose any known infectious conditions prior to consultation</li>
              <li>Complete payment obligations for services rendered</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Cancellation Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              Service requests may be cancelled prior to provider dispatch. Once a provider has been assigned and is en route, cancellation may not be feasible. For cancellation requests, contact our operations team at +91 9182296058.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Limitation of Liability &amp; Medical Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed">
              Doctor Bookings operates as a healthcare technology platform and does not directly provide medical advice, clinical diagnoses, or therapeutic treatment. Independent providers registered on the platform bear full professional responsibility for all clinical services, medical decisions, and patient outcomes. Doctor Bookings shall not be held liable for any medical negligence, malpractice claims, or clinical outcomes arising from consultations facilitated through the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Modifications to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to revise these terms at any time. Continued use of the platform following any modifications constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              For inquiries regarding these terms or our platform operations, reach us at:
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Email:</strong> <a href="mailto:founder@doctorbookings.in" className="text-blue-600 hover:underline">founder@doctorbookings.in</a><br />
              <strong>Phone:</strong> <a href="tel:+919182296058" className="text-blue-600 hover:underline">+91 9182296058</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
