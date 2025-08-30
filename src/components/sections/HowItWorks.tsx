"use client"
import type React from "react"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "@/components/forms/BookingDialog"
import { CTAPhoneButton } from "@/components/ui/PhoneButton"
import { Phone, MapPin, Heart, Calendar } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-green-600">
            How It Works
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
            <h3 className="text-xl font-semibold mb-3">Fill Simple Form</h3>
            <p className="text-gray-600">Quick form with basic details - name, age, phone, symptoms.</p>
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
            <h3 className="text-xl font-semibold mb-3">We Call You in 2 Minutes</h3>
            <p className="text-gray-600">Our team calls immediately to confirm details and schedule visit.</p>
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
            <h3 className="text-xl font-semibold mb-3">Doctor Visits Your Home</h3>
            <p className="text-gray-600">
              MBBS doctor arrives with equipment. Pay after consultation.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingDialog
              selectedService="General Consultation"
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
  )
}