/**
 * LEAD CAPTURE FORM COMPONENT
 * 
 * This is the main booking form that converts website visitors into patient leads.
 * When someone wants to book a doctor visit, they fill out this form with their details.
 * 
 * KEY FEATURES:
 * - Real-time form validation (checks data as user types)
 * - Sends instant Telegram alerts to business owner
 * - Mobile-optimized design for easy use on phones
 * - Prevents spam with rate limiting
 * - Tracks form submissions for analytics
 * - Shows success confirmation after booking
 * 
 * BUSINESS PURPOSE:
 * Convert interested visitors into confirmed patient bookings by collecting
 * their contact information and medical needs, then alerting you immediately.
 * 
 * FORM FIELDS:
 * - Patient Name: Who needs medical care
 * - Age: Helps doctor prepare appropriate care
 * - Phone: Primary contact method for confirmation call
 * - City: Determines service availability and doctor assignment
 */

"use client" // This component needs browser features like form submission
import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { analytics } from '@/lib/analytics'
import { CheckCircle, AlertCircle, Loader2, Phone } from 'lucide-react'

// DATA TYPES - These define what information the form collects and validates

// FormData: The patient information we collect
interface FormData {
  name: string    // Patient's full name
  age: string     // Patient's age (helps doctor prepare)
  phone: string   // Contact number for confirmation call
  city: string    // Service location (Vizag, Tirupati, or Kakinada)
}

// FormErrors: Validation error messages for each field
interface FormErrors {
  name?: string     // Name validation errors
  age?: string      // Age validation errors
  phone?: string    // Phone number validation errors
  city?: string     // City selection errors
  general?: string  // Overall form errors
}

// LeadCaptureFormProps: Configuration options for the form component
interface LeadCaptureFormProps {
  selectedService?: string      // Pre-selected medical service type
  preselectedCity?: string      // Pre-selected city (from city-specific pages)
  onSubmitSuccess?: () => void  // Callback function when form submits successfully
  isOpen?: boolean              // Whether the form dialog is currently open
}

export function LeadCaptureForm({ 
  selectedService = "",
  preselectedCity = "",
  onSubmitSuccess,
  isOpen
}: LeadCaptureFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    phone: "",
    city: preselectedCity || '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitAttempted, setSubmitAttempted] = useState(false)

  // FORM RESET LOGIC - Clears all data when the booking dialog closes
  // This ensures each new booking starts with a clean form
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: "",
        age: "",
        phone: "",
        city: preselectedCity || '',
      })
      setErrors({})
      setIsSuccess(false)
      setSubmitAttempted(false)
    }
  }, [isOpen, preselectedCity])

  // SERVICE AREAS - Cities where doctor home visits are available
  // These match the cities mentioned throughout the website
  const cities = ['Vizag', 'Tirupati', 'Kakinada']

  // FIELD VALIDATION LOGIC - Checks each form field for correct data
  // This runs as users type to give immediate feedback on errors
  const validateField = useCallback((field: keyof FormData, value: string): string | undefined => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        if (value.trim().length > 50) return 'Name must be less than 50 characters'
        if (!/^[a-zA-Z\s.]+$/.test(value.trim())) return 'Name can only contain letters, spaces, and periods'
        return undefined
      
      case 'age':
        if (!value.trim()) return 'Age is required'
        const age = parseInt(value)
        if (isNaN(age) || age < 1 || age > 120) return 'Age must be between 1 and 120'
        return undefined
      
      case 'phone':
        if (!value.trim()) return 'Phone number is required'
        const phone = value.replace(/\D/g, '')
        if (!/^[6-9]\d{9}$/.test(phone)) return 'Enter a valid 10-digit mobile number'
        return undefined
      
      case 'city':
        if (!value) return 'Please select your city'
        return undefined
      
      default:
        return undefined
    }
  }, [])

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    // Use proper TypeScript iteration over known object keys
    const fields: (keyof FormData)[] = ['name', 'age', 'phone', 'city']
    fields.forEach((field) => {
      const error = validateField(field, formData[field])
      if (error) {
        newErrors[field] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }, [formData, validateField])

  // FORM SUBMISSION HANDLER - Processes the booking request
  // This function:
  // 1. Validates all form data
  // 2. Sends data to your API
  // 3. Triggers Telegram alert to you
  // 4. Shows success message to patient
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitAttempted(true)
    
    if (!validateForm()) {
      setErrors(prev => ({ ...prev, general: 'Please fix the errors above' }))
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      // Safe analytics tracking before submission
      try {
        analytics.trackFormSubmit('booking_form', formData.city, selectedService)
      } catch (analyticsError) {
        console.log('Pre-submission analytics failed, continuing with form submission')
      }

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: selectedService || 'General Consultation',
          timestamp: new Date().toISOString()
        }),
      })

      if (!response.ok) {
        const errorResult = await response.json().catch(() => ({ error: 'Network error' }))
        throw new Error(errorResult.error || `Server error: ${response.status}`)
      }

      const result = await response.json()
      
      // Form submission successful
      setIsSuccess(true)
      
      // Safe analytics tracking after success - won't crash if analytics fails
      try {
        analytics.trackLead({
          city: formData.city,
          service: selectedService || 'general_consultation',
          method: 'form'
        })
      } catch (analyticsError) {
        console.log('Post-submission analytics failed, but booking was successful')
      }

      // Success callback if provided
      if (onSubmitSuccess) {
        try {
          onSubmitSuccess()
        } catch (callbackError) {
          console.log('Success callback failed, but booking was successful')
        }
      }

    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ 
        general: error instanceof Error ? error.message : 'Unable to submit booking. Please call +91-9182296058 directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // INPUT CHANGE HANDLER - Updates form data and validates in real-time
  // Provides immediate feedback to users as they fill out the form
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear field error and validate on blur if form was attempted
    if (submitAttempted) {
      const error = validateField(field, value)
      setErrors(prev => ({ ...prev, [field]: error, general: undefined }))
    }
  }

  // Mobile scroll handler for input focus
  const handleInputFocus = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    // Only apply on mobile devices (below 1024px)
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        event.target.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        })
      }, 300) // Wait for keyboard to appear
    }
  }, [])


  if (isSuccess) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <div className="text-green-600 text-xl font-semibold">
          Booking confirmed
        </div>
        <p className="text-gray-600 text-lg">
         We will reach out to you within a short time.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-center space-x-2 text-blue-700">
            <Phone className="h-5 w-5" />
            <span className="font-medium">For urgent cases: +91-9182296058</span>
          </div>
        </div>
        
        {/* Add back button for user control */}
        <div className="pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setIsSuccess(false)
              setFormData({
                name: "",
                age: "",
                phone: "",
                city: preselectedCity || '',
              })
              setErrors({})
              setSubmitAttempted(false)
              // Call the success callback to allow dialog to close if needed
              onSubmitSuccess?.()
            }}
            className="px-6 py-2"
          >
            Book Another Appointment
          </Button>
        </div>
      </div>
    )
  }


  return (
    <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-4">
      {/* General Error */}
      {errors.general && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3 flex items-center space-x-2">
          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
          <span className="text-red-700 text-sm">{errors.general}</span>
        </div>
      )}

      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
          Patient Name *
        </Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          onFocus={handleInputFocus}
          placeholder="Enter patient's full name"
          className={`${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-red-600 flex items-center space-x-1">
            <AlertCircle className="h-4 w-4" />
            <span>{errors.name}</span>
          </p>
        )}
      </div>

      {/* Age Field */}
      <div className="space-y-2">
        <Label htmlFor="age" className="text-sm font-medium text-gray-700">
          Age *
        </Label>
        <Input
          id="age"
          type="number"
          min="1"
          max="120"
          value={formData.age}
          onChange={(e) => handleInputChange('age', e.target.value)}
          onFocus={handleInputFocus}
          placeholder="Patient's age"
          className={`${errors.age ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
          aria-invalid={!!errors.age}
          aria-describedby={errors.age ? 'age-error' : undefined}
        />
        {errors.age && (
          <p id="age-error" className="text-sm text-red-600 flex items-center space-x-1">
            <AlertCircle className="h-4 w-4" />
            <span>{errors.age}</span>
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone Number *
        </Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          onFocus={handleInputFocus}
          placeholder="Enter 10-digit mobile number"
          className={`${errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-sm text-red-600 flex items-center space-x-1">
            <AlertCircle className="h-4 w-4" />
            <span>{errors.phone}</span>
          </p>
        )}
      </div>

      {/* City Selection */}
      <div className="space-y-2">
        <Label htmlFor="city" className="text-sm font-medium text-gray-700">
          City *
        </Label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowDropdown(!showDropdown)}
            className={`w-full px-3 py-2 text-left bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.city ? 'border-red-300' : 'border-gray-300'
            }`}
            aria-invalid={!!errors.city}
            aria-describedby={errors.city ? 'city-error' : undefined}
          >
            {formData.city || "Select your city"}
          </button>
          
          {showDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
              {cities.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => {
                    handleInputChange('city', city)
                    setShowDropdown(false)
                  }}
                  className="w-full px-3 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                >
                  {city}
                </button>
              ))}
            </div>
          )}
        </div>
        {errors.city && (
          <p id="city-error" className="text-sm text-red-600 flex items-center space-x-1">
            <AlertCircle className="h-4 w-4" />
            <span>{errors.city}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3 px-4 rounded-md font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <span>Book Doctor Visit</span>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center leading-relaxed">
        By submitting, you agree to receive a call from our medical team within 2 minutes.
      </p>
    </form>
  )
}
