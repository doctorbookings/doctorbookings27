"use client"
import type React from "react"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "@/components/forms/BookingDialog"
import { Card, CardContent } from "@/components/ui/card"
import { CTAPhoneButton } from "@/components/ui/PhoneButton"
import { Bed, Clock, Users, Calendar } from "lucide-react"

export function Pain() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 mb-6">
            <span className="text-black">Can't visit hospital</span> due to health issues?{" "}
            <span className="text-red-600">we bring doctors to your home.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We understand the stress and challenges families face when seeking medical care, especially for elderly
            parents and young children.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card className="border-0 shadow-lg rounded-2xl bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-3 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                  <Bed className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Too Sick to Travel</h3>
                <p className="text-gray-600 text-sm">
                  When you're feeling unwell, the last thing you want is to leave your comfortable home environment
                  for a stressful hospital visit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-3 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Tired of Waiting for Hours</h3>
                <p className="text-gray-600 text-sm">
                  Avoid crowded waiting rooms and long delays. Get immediate attention from qualified doctors
                  without the endless wait times.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-3 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Elderly or Mobility Issues</h3>
                <p className="text-gray-600 text-sm">
                  Seniors and patients with mobility challenges deserve comfortable, accessible healthcare without
                  the strain of hospital visits.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mx-auto max-w-2xl">
              <p className="text-lg text-gray-700 mb-6 font-medium">
                There's a better way to get quality medical care for your family...
              </p>
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
        </div>
      </div>
    </section>
  )
}