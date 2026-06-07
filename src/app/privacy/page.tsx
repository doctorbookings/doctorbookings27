import type { Metadata } from "next"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: 'Privacy Policy | Doctor Bookings',
  description: 'Privacy Policy for Doctor Bookings - Learn how we collect, use, and protect your personal information when you use our healthcare technology platform.',
  alternates: {
    canonical: 'https://doctorbookings.in/privacy'
  }
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header showBackButton={true} />

      <main className="container px-4 md:px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: June 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              When you interact with the Doctor Bookings platform, our systems may collect and process the following categories of data:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
              <li>Personally identifiable information (name, phone number, email) submitted during service requests</li>
              <li>Geolocation and locality data for provider dispatch and service coordination</li>
              <li>Health-related inputs and symptom data shared for clinical consultation routing</li>
              <li>Device metadata, session identifiers, and browser telemetry for platform optimization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed">Your data is processed for the following operational purposes:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
              <li>Executing end-to-end service fulfillment including provider matching and dispatch orchestration</li>
              <li>Appointment confirmation, scheduling coordination, and real-time service status updates</li>
              <li>Platform analytics, performance monitoring, and service quality benchmarking</li>
              <li>Transactional and operational communications critical to service delivery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Data Protection &amp; Security Infrastructure</h2>
            <p className="text-gray-600 leading-relaxed">
              We employ industry-standard encryption protocols, access control mechanisms, and secure data handling procedures to safeguard user information against unauthorized access, modification, or disclosure. All health-related data is processed in compliance with applicable medical data privacy standards and handled under strict confidentiality protocols throughout our system architecture.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Information Sharing &amp; Third-Party Access</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell, trade, or commercially distribute your personal information to third parties. Data sharing is restricted to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
              <li>Assigned healthcare providers for the purpose of clinical consultation delivery</li>
              <li>Infrastructure and communication service providers integral to platform operations</li>
              <li>Regulatory and legal authorities when mandated by applicable jurisdiction</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Cookies, Analytics &amp; Tracking Technologies</h2>
            <p className="text-gray-600 leading-relaxed">
              Our platform utilizes cookies, session storage, and analytical instrumentation to monitor application performance, track user engagement patterns, and optimize the overall service experience. Users retain full control over cookie preferences through their browser configuration settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights &amp; Data Control</h2>
            <p className="text-gray-600 leading-relaxed">
              You have the right to access, rectify, or request permanent deletion of your personal data from our systems. To exercise any of these rights, contact our data operations team at founder@doctorbookings.in.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              For inquiries regarding this Privacy Policy or our data handling practices, reach us at:
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
