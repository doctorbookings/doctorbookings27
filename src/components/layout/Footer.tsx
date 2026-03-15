import Link from 'next/link'
import { Stethoscope, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-500">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Doctor Bookings</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Professional medical care delivered to your home by certified doctors across India.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Phone className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Quick Contact</h4>
            <div className="space-y-3">
              <a href="tel:+919182296058" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone className="h-4 w-5 mr-2" />
                9182296058
              </a>
              <Button variant="ghost" className="justify-start p-0 h-auto text-gray-400 hover:text-white">
                <Mail className="h-4 w-4 mr-2" />
                doctorbookings2708@gmail.com
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Company & Services</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Home Doctor Visits
              </Link>
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Elderly Care
              </Link>
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Post-Surgery Care
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Cities We Serve</h4>
            <div className="space-y-2">
              <Link href="/vizag" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Vizag (Visakhapatnam)
              </Link>
              <Link href="/tirupati" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Tirupati
              </Link>
              <Link href="/kakinada" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Kakinada
              </Link>
              <span className="block text-gray-500 text-sm">
                More cities coming soon...
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Doctor Bookings. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
