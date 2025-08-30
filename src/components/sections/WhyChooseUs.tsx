"use client"
import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Calendar, Verified } from "lucide-react"

export function WhyChooseUs() {
  return (
    <section className="py-8 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 mb-6">
            Why Choose <span className="text-green-600">Doctor Bookings?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our qualified doctors deliver hospital-quality care with the comfort and convenience of home visits.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-12">
          <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow h-full">
            <CardContent className="p-6 flex flex-col h-full justify-center">
              <div className="w-12 h-12 mb-4 bg-green-100 rounded-xl flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-medium mb-3 w-fit">
                PAY AFTER CONSULTATION
              </div>
              <h3 className="font-semibold text-lg mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">
                {"Quality healthcare with complete transparency. No advance payment, pay only after consultation."}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow h-full">
            <CardContent className="p-6 flex flex-col h-full justify-center">
              <div className="w-12 h-12 mb-4 bg-purple-100 rounded-xl flex items-center justify-center">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <div className="bg-purple-50 text-purple-700 px-2 py-1 rounded-full text-xs font-medium mb-3 w-fit">
                2min-response time
              </div>
              <h3 className="font-semibold text-lg mb-2">24/7 Follow-up Care</h3>
              <p className="text-gray-600">
                Scheduled follow-ups and round-the-clock support for ongoing health needs.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow h-full">
            <CardContent className="p-6 flex flex-col h-full justify-center">
              <div className="w-12 h-12 mb-4 bg-blue-100 rounded-xl flex items-center justify-center">
                <Verified className="h-6 w-6 text-blue-600" />
              </div>
              <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium mb-3 w-fit">
                VERIFIED DOCTORS
              </div>
              <h3 className="font-semibold text-lg mb-2">Caring MBBS Professionals</h3>
              <p className="text-gray-600">
                100% qualified and verified medical professionals with years of compassionate experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}