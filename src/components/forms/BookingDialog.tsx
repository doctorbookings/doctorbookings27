/**
 * BOOKING DIALOG COMPONENT - Patient Booking Popup Window
 * 
 * This creates the popup window that appears when visitors click "Book Doctor Now".
 * It's your primary lead capture tool - the main way visitors become patients.
 * Think of it as your "digital reception desk" that collects patient information.
 * 
 * KEY FEATURES:
 * - Modal popup that overlays the current page
 * - Contains the complete patient booking form
 * - Pre-fills city and service information when possible
 * - Tracks user interactions for business analytics
 * - Mobile-optimized for easy use on phones
 * - Accessible design for all users
 * 
 * BUSINESS PURPOSE:
 * Convert website visitors into confirmed patient bookings by:
 * - Making it easy to request a doctor visit
 * - Collecting all necessary patient information
 * - Providing clear next steps after form submission
 * - Tracking which buttons and pages generate the most bookings
 * 
 * USER EXPERIENCE:
 * 1. User clicks "Book Doctor Now" button anywhere on site
 * 2. Popup opens with booking form
 * 3. User fills out patient details (name, age, phone, city)
 * 4. Form submits and triggers immediate Telegram alert to you
 * 5. Success message shows with next steps
 */

"use client" // This component needs browser features for popup functionality and form handling

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm"
import { analytics } from "@/lib/analytics"

// COMPONENT CONFIGURATION - Settings that control the booking popup behavior
interface BookingDialogProps {
  children: React.ReactNode    // The button text (like "Book Doctor Now")
  selectedService?: string     // What type of medical service (General, Emergency, etc.)
  preselectedCity?: string     // Which city is pre-selected (Vizag, Tirupati, Kakinada)
  triggerClassName?: string    // How the button should look (colors, size, etc.)
}

/**
 * MAIN BOOKING DIALOG FUNCTION
 * 
 * Creates the complete booking popup experience including:
 * - Trigger button that opens the popup
 * - Modal dialog window with form
 * - Form submission handling
 * - Success state management
 * - Analytics tracking for business insights
 * 
 * PARAMETERS:
 * - children: Button text displayed to users
 * - selectedService: Pre-selected medical service type
 * - preselectedCity: Pre-selected city (for city-specific pages)
 * - triggerClassName: Custom styling for the trigger button
 */
export function BookingDialog({ 
  children,                                    // Button text from parent component
  selectedService = "General Consultation",   // Default service type
  preselectedCity = "",                       // Default city (empty = user chooses)
  triggerClassName = ""                       // Default button styling
}: BookingDialogProps) {
  
  // POPUP STATE MANAGEMENT - Controls whether the booking dialog is open or closed
  const [isOpen, setIsOpen] = useState(false)

  // FORM SUCCESS HANDLER - What happens after patient successfully submits booking
  const handleFormSuccess = () => {
    // Note: We don't auto-close the popup anymore
    // This lets patients see the success message and choose when to close
    // They can click "Book Another Appointment" if needed
    // setIsOpen(false)  // Removed auto-close for better user control
  }

  // DIALOG OPEN HANDLER - What happens when user clicks "Book Doctor Now"
  const handleDialogOpen = () => {
    setIsOpen(true)   // Open the booking popup
    
    // BUSINESS ANALYTICS - Track that someone started the booking process
    // This helps you understand which buttons and pages generate the most interest
    analytics.trackFormStart('booking_dialog', preselectedCity || 'unknown')
  }

  return (
    // DIALOG CONTAINER - Manages the popup window state and behavior
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      
      {/* TRIGGER BUTTON - The "Book Doctor Now" button that opens the popup */}
      <DialogTrigger asChild>
        <Button 
          className={triggerClassName}  // Custom styling from parent component
          onClick={handleDialogOpen}    // Opens popup and tracks analytics
        >
          {children}  {/* Button text like "Book Doctor Now" */}
        </Button>
      </DialogTrigger>
      
      {/* POPUP WINDOW - The actual booking dialog that appears over the page */}
      <DialogContent className="sm:max-w-md max-w-[90vw] w-full mx-auto max-h-[85vh] lg:max-h-[80vh] overflow-y-auto p-4 lg:p-6 scroll-smooth">
        
        {/* POPUP HEADER - Title and instructions for patients */}
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-gray-900">
            Book Doctor Visit  {/* Clear, professional heading */}
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Fill out this form and we'll call you to confirm your appointment.
            {/* Sets expectation: form submission → phone call → appointment confirmation */}
          </DialogDescription>
        </DialogHeader>
        
        {/* BOOKING FORM CONTAINER - Contains the actual patient information form */}
        <div className="mt-4">
          <LeadCaptureForm 
            selectedService={selectedService}    // Pre-selected medical service
            preselectedCity={preselectedCity}    // Pre-selected city (for city pages)
            onSubmitSuccess={handleFormSuccess}  // Callback when form submits successfully
            isOpen={isOpen}                      // Form needs to know if dialog is open
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}