"use client"
import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Shield, Clock, CheckCircle } from "lucide-react"

export function ServingCities() {
  return (
    <section className="py-8 bg-gradient-to-br from-blue-50 via-white to-green-50 border-b">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🏥 Now Available
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
            Currently Serving: <span className="text-blue-600">Vizag, Tirupati & Kakinada</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Quality healthcare at your doorstep.{" "}
            <span className="text-green-600 font-semibold">Expanding to more cities soon!</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto">
            <Link href="/vizag" className="w-full sm:w-auto" prefetch={true}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl transition-all hover:scale-105 hover:shadow-3xl border-2 border-blue-600"
              >
                <MapPin className="mr-3 h-6 w-6" />
                Book Doctor in Vizag
              </Button>
            </Link>

            <Link href="/tirupati" className="w-full sm:w-auto" prefetch={true}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 md:px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl transition-all hover:scale-105 hover:shadow-3xl border-2 border-green-600"
              >
                <MapPin className="mr-3 h-6 w-6" />
                Book Doctor in Tirupati
              </Button>
            </Link>

            <Link href="/kakinada" className="w-full sm:w-auto" prefetch={true}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-8 md:px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl transition-all hover:scale-105 hover:shadow-3xl border-2 border-purple-600"
              >
                <MapPin className="mr-3 h-6 w-6" />
                Book Doctor in Kakinada
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">Certified Doctors</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium"> 2 Min Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium"> Happy Families</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}