/**
 * Healthcare Business Constants for Doctor Bookings - YOUR BUSINESS SETTINGS
 * 
 * This file contains all your business information in one place:
 * - Phone numbers for each city
 * - Email address
 * - Service areas and neighborhoods
 * - Business processes and timing
 * 
 * When you need to update your phone number or add new cities, edit this file.
 */

// Cities Where You Provide Doctor Home Visits
// Each city has specific neighborhoods you cover
export const SERVICE_CITIES = {
  VIZAG: {
    name: 'Visakhapatnam',           // Full official city name
    shortName: 'Vizag',              // What people commonly call it
    areas: ['MVP Colony', 'Beach Road', 'Madhurawada', 'Gajuwaka'],  // Neighborhoods you serve
    phone: process.env.NEXT_PUBLIC_MAIN_PHONE || '+91-9182296058',   // Your phone number for this city
  },
  TIRUPATI: {
    name: 'Tirupati',
    shortName: 'Tirupati', 
    areas: ['Madhura Nagar', 'Balaji Colony', 'Chandragiri'],        // Temple city neighborhoods
    phone: process.env.NEXT_PUBLIC_MAIN_PHONE || '+91-9182296058',
  },
  KAKINADA: {
    name: 'Kakinada',
    shortName: 'Kakinada',
    areas: ['Suryaraopet', 'Gandhinagar', 'Jagannadhapuram'],       // Port city neighborhoods
    phone: process.env.NEXT_PUBLIC_MAIN_PHONE || '+91-9182296058',
  },
} as const;

// Your Business Contact Information
// These are the phone numbers and email customers will use to reach you
export const BUSINESS_CONTACT = {
  MAIN_PHONE: process.env.NEXT_PUBLIC_MAIN_PHONE || '+91-9182296058',        // Primary business number
  EMERGENCY_PHONE: process.env.NEXT_PUBLIC_MAIN_PHONE || '+91-9182296058',   // For urgent medical cases
  EMAIL: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'doctorbookings2708@gmail.com',  // Business email
} as const;

// Your Service Promises - What you tell customers to expect
// These appear on your website and set customer expectations
export const BUSINESS_PROCESS = {
  RESPONSE_TIME: '2 minutes',        // How fast you call customers back
  DOCTOR_ARRIVAL_TIME: '30 minutes', // How fast doctor reaches patient
  SERVICE_HOURS: '24/7',             // When you're available
  PAYMENT_METHOD: 'After consultation', // When customers pay
} as const;

// Booking Form Settings - What information you collect from patients
export const LEAD_FORM_FIELDS = {
  REQUIRED: ['name', 'phone', 'city', 'address'],  // Must fill these fields
  OPTIONAL: ['age', 'symptoms', 'urgency'],        // Nice to have but not required
} as const;

// Types of Medical Services You Offer
// These appear in dropdowns and help categorize patient needs
export const SERVICE_TYPES = {
  GENERAL_CONSULTATION: 'General Consultation',  // Regular checkups, common illnesses
  EMERGENCY_CARE: 'Emergency Care',              // Urgent medical situations
  SENIOR_CARE: 'Senior Care',                    // Elderly patient care
  PEDIATRIC_CARE: 'Pediatric Care',              // Children's healthcare
  POST_SURGERY_CARE: 'Post Surgery Care',        // Recovery and wound care
} as const;

// Standard Messages Shown to Customers
// These appear after form submissions or errors
export const BUSINESS_MESSAGES = {
  SUCCESS_MESSAGE: 'Thank you! We will call you within 2 minutes to confirm your appointment.',  // After successful booking
  ERROR_MESSAGE: 'Sorry, there was an issue. Please call us directly for immediate assistance.',   // When something goes wrong
  LOADING_MESSAGE: 'Processing your request...',                                                   // While form is submitting
} as const;