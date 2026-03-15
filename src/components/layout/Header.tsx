"use client"

import Link from "next/link"
import { Stethoscope, ArrowLeft } from "lucide-react"

interface HeaderProps {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  // Define unified, highly responsive classes for the navigation links
  const navLinkClass = `text-gray-700 font-medium whitespace-nowrap cursor-pointer transition-colors hover:text-blue-600 hover:bg-blue-50/50 rounded-md ${
    showBackButton 
      ? "text-[11px] sm:text-xs md:text-sm px-1.5 sm:px-2 py-1" 
      : "text-xs sm:text-sm md:text-base px-1.5 sm:px-3 py-1.5 sm:py-2"
  }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Left Section - Logo and Back Button */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 min-w-0 shrink-0">
          {showBackButton && (
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 p-1 sm:p-1.5 rounded-lg hover:bg-blue-50 shrink-0"
              aria-label="Back to Home"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          )}

          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 shrink-0 group">
            <div className="flex h-7 w-7 sm:h-9 sm:w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-500 shadow-md group-hover:shadow-lg transition-shadow shrink-0">
              <Stethoscope className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
            </div>
            {/* The brand name scales down on very small screens so it doesn't push the nav off canvas */}
            <span className="text-[13px] sm:text-base md:text-xl font-bold text-gray-900 leading-tight whitespace-nowrap tracking-tight hover:text-blue-600 transition-colors">
              Doctor Bookings
            </span>
          </Link>
        </div>

        {/* Right Section - Navigation */}
        <nav className="flex items-center gap-0.5 sm:gap-1 md:gap-2 lg:gap-4 shrink-0">
          <a 
            href="#services" 
            className={navLinkClass}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Services
          </a>

          <a 
            href="#how-it-works" 
            className={navLinkClass}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="sm:hidden">How</span>
            <span className="hidden sm:inline">How It Works</span>
          </a>

          <a 
            href="#why-choose-us" 
            className={navLinkClass}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="sm:hidden">Why Us</span>
            <span className="hidden sm:inline">Why Choose Us</span>
          </a>
        </nav>
      </div>
    </header>
  )
}