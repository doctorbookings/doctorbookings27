"use client"

import Link from "next/link"
import { Stethoscope, ArrowLeft } from "lucide-react"

interface HeaderProps {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Left Section - Logo and Back Button */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {showBackButton && (
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-blue-50"
            >
              <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
              <span className="hidden sm:inline text-sm md:text-base font-medium">Back</span>
            </Link>
          )}

          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-500 shadow-lg">
              <Stethoscope className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <Link 
                href="/" 
                className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200 leading-tight"
              >
                Doctor
              </Link>
              <Link 
                href="/" 
                className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200 leading-tight -mt-1"
              >
                Bookings
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section - Navigation */}
        <nav className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4">
          <a 
            href="#services" 
            className={`text-gray-700 font-medium whitespace-nowrap px-1 py-1 sm:px-2 md:px-3 md:py-2 cursor-pointer ${
              showBackButton 
                ? "text-xs sm:text-sm md:text-base" 
                : "text-base sm:text-lg md:text-xl lg:text-2xl"
            }`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Services
          </a>
          <a 
            href="#how-it-works" 
            className={`text-gray-700 font-medium whitespace-nowrap px-1 py-1 sm:px-2 md:px-3 md:py-2 cursor-pointer ${
              showBackButton 
                ? "text-xs sm:text-sm md:text-base" 
                : "text-base sm:text-lg md:text-xl lg:text-2xl"
            }`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="hidden sm:inline">How&nbsp;It&nbsp;Works</span>
            <span className="sm:hidden">How&nbsp;It&nbsp;Works</span>
          </a>
          <a 
            href="#why-choose-us" 
            className={`text-gray-700 font-medium whitespace-nowrap px-1 py-1 sm:px-2 md:px-3 md:py-2 cursor-pointer ${
              showBackButton 
                ? "text-xs sm:text-sm md:text-base" 
                : "text-base sm:text-lg md:text-xl lg:text-2xl"
            }`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="hidden sm:inline">Why&nbsp;Choose&nbsp;Us</span>
            <span className="sm:hidden">Why&nbsp;Us</span>
          </a>
        </nav>
      </div>
    </header>
  )
}