"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: "booking-parents",
    question: "Can I book a doctor visit for my parents?",
    answer: "Yes! Many of our bookings are made by children for their elderly parents. You can book on their behalf and be present during the consultation if needed."
  },
  {
    id: "urgent-emergency",
    question: "What if my case is urgent or an emergency?",
    answer: "For life-threatening emergencies, please call 108 immediately. Doctor Bookings is for non-emergency medical care. For urgent but non-emergency cases, we prioritize and can reach within 30-45 minutes."
  },
  {
    id: "response-time",
    question: "What's the typical response time?",
    answer: "Our standard response time is under 60 minutes. For urgent cases, we can reach within 30-45 minutes. You can also schedule appointments for a preferred time slot."
  },
  {
    id: "doctor-verification",
    question: "How are your doctors verified?",
    answer: "All our doctors are MBBS-qualified with valid MCI registration. We verify their credentials, conduct background checks, and ensure they have relevant experience in home healthcare."
  },
  {
    id: "payment-methods",
    question: "What payment methods do you accept?",
    answer: "We accept cash, UPI, credit/debit cards, and digital wallets. Payment is collected after the consultation is completed."
  },
  {
    id: "service-areas",
    question: "Which areas do you serve?",
    answer: "We currently serve Visakhapatnam (Vizag), Tirupati, and Kakinada. We're expanding to more cities soon. Check our website for the latest service area updates."
  },
  {
    id: "consultation-cost",
    question: "How much does a home consultation cost?",
    answer: "Our consultation fees vary based on the type of service and time of visit. We provide transparent pricing with no hidden charges. Contact us for detailed pricing information."
  },
  {
    id: "medical-equipment",
    question: "Do doctors bring medical equipment?",
    answer: "Yes, our doctors come equipped with essential medical equipment including stethoscope, BP monitor, thermometer, pulse oximeter, and basic diagnostic tools."
  }
]

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-green-600 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our home healthcare services
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                >
                  <h3 className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { FAQSection as FAQ }