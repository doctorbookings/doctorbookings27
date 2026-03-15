import type { Metadata } from "next"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: 'Privacy Policy | Doctor Bookings',
  description: 'Privacy Policy for Doctor Bookings - Learn how we collect, use, and protect your personal information when you use our doctor home visit services.',
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
        <p className="text-gray-500 mb-8">Last updated: March 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              When you use Doctor Bookings, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
              <li>Name, phone number, and email address provided during booking</li>
              <li>City and locality for service delivery</li>
              <li>Health symptoms or concerns shared for consultation purposes</li>
              <li>Device and browser information for website optimization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
              <li>Process and fulfill your doctor home visit bookings</li>
              <li>Contact you to confirm appointments and provide service updates</li>
              <li>Improve our services and website experience</li>
              <li>Send important service-related communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Data Protection</h2>
            <p className="text-gray-600 leading-relaxed">
              We take the security of your personal data seriously. We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. Your health-related information is handled with strict confidentiality in accordance with medical privacy standards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Information Sharing</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
              <li>Doctors assigned to your home visit for consultation purposes</li>
              <li>Service providers who assist in delivering our services (e.g., communication platforms)</li>
              <li>Legal authorities when required by applicable law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Cookies & Analytics</h2>
            <p className="text-gray-600 leading-relaxed">
              We may use cookies and similar technologies to improve website performance and understand how visitors use our site. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed">
              You have the right to access, update, or request deletion of your personal data. To exercise these rights, contact us at doctorbookings2708@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:
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
