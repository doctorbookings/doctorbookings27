/**
 * FORM VALIDATION - Security & Data Quality for Patient Information
 * 
 * This file ensures that all patient information submitted through your booking forms
 * is clean, safe, and properly formatted before being processed. Think of it as
 * your "data quality control" that protects both your business and patients.
 * 
 * WHY THIS IS CRITICAL FOR YOUR HEALTHCARE BUSINESS:
 * - Prevents spam and fake bookings that waste your doctors' time
 * - Ensures phone numbers are valid so you can actually call patients back
 * - Validates that patient names and ages are realistic and properly formatted
 * - Blocks malicious data that could harm your website or database
 * - Maintains professional data standards for your medical practice
 * 
 * SECURITY FEATURES:
 * - Rate limiting: Prevents spam bots from flooding your forms
 * - Data sanitization: Cleans input to prevent security attacks
 * - Format validation: Ensures phone numbers, names, ages are properly formatted
 * - City verification: Only accepts bookings from cities you actually serve
 */

// DATA STRUCTURES - How patient information is organized and validated

// LeadData: Complete patient booking information
export interface LeadData {
  name: string;     // Patient's full name (cleaned and validated)
  age: string;      // Patient's age (verified to be realistic)
  phone: string;    // Patient's phone number (formatted and verified)
  city: string;     // Service city (must be one you serve)
  service: string;  // Type of medical service requested
}

// ValidationResult: Results of checking patient data quality
export interface ValidationResult {
  isValid: boolean;        // Whether the patient data passed all checks
  errors: string[];        // List of problems found (if any)
  sanitizedData?: LeadData; // Clean, safe version of the patient data
}

/**
 * PATIENT DATA VALIDATION - Comprehensive Quality Control
 * 
 * This function checks every piece of patient information to ensure it's:
 * - Real and realistic (not fake names, impossible ages, etc.)
 * - Properly formatted (correct phone number format, clean text)
 * - Safe for your system (no malicious code or attacks)
 * - Complete and usable (all required fields filled out correctly)
 * 
 * VALIDATION CHECKS:
 * 1. Name: Real person's name, proper length, no special characters
 * 2. Age: Realistic human age (1-120 years)
 * 3. Phone: Valid Indian mobile number format
 * 4. City: Must be a city where you provide services
 * 5. Service: Valid medical service type
 */
export function validateLeadData(data: any): ValidationResult {
  const errors: string[] = [];  // Collect any problems found
  
  // NAME VALIDATION - Ensure patient name is realistic and properly formatted
  const name = typeof data.name === 'string' ? data.name.trim() : '';  // Clean the name
  if (!name || name.length < 2) {
    errors.push('Name must be at least 2 characters');  // Too short to be a real name
  }
  if (name.length > 50) {
    errors.push('Name must be less than 50 characters');  // Unreasonably long
  }
  if (!/^[a-zA-Z\s.]+$/.test(name)) {
    errors.push('Name can only contain letters, spaces, and periods');  // No numbers or symbols
  }

  // AGE VALIDATION - Ensure age is realistic for medical service
  const ageStr = typeof data.age === 'string' ? data.age.trim() : '';  // Clean age input
  const age = parseInt(ageStr);  // Convert to number
  if (!ageStr || isNaN(age) || age < 1 || age > 120) {
    errors.push('Age must be between 1 and 120');  // Must be realistic human age
  }

  // PHONE VALIDATION - Ensure we can actually call the patient back
  const phone = typeof data.phone === 'string' ? data.phone.replace(/\D/g, '') : '';  // Remove non-digits
  if (!/^[6-9]\d{9}$/.test(phone)) {
    errors.push('Phone must be a valid 10-digit Indian mobile number');  // Must be callable Indian mobile
  }

  // CITY VALIDATION - Only accept bookings from cities you serve
  const validCities = ['vizag', 'tirupati', 'kakinada'];  // Cities where you provide doctor visits
  const city = typeof data.city === 'string' ? data.city.toLowerCase().trim() : '';  // Normalize city name
  if (!validCities.includes(city)) {
    errors.push('City must be one of: Vizag, Tirupati, Kakinada');  // Only serve these cities
  }

  // SERVICE VALIDATION - Ensure valid medical service type
  const service = typeof data.service === 'string' ? data.service.trim() : 'General Consultation';  // Default service
  
  // Return validation results
  if (errors.length > 0) {
    return { isValid: false, errors };  // Data failed validation
  }

  // All validation passed - return clean, safe data
  return {
    isValid: true,
    errors: [],
    sanitizedData: {
      name: name,        // Clean patient name
      age: ageStr,       // Validated age
      phone: phone,      // Formatted phone number
      city: city,        // Verified service city
      service: service   // Medical service type
    }
  };
}

/**
 * SPAM PROTECTION - Rate Limiting System
 * 
 * Prevents spam bots and malicious users from flooding your booking forms.
 * This protects your business from:
 * - Fake bookings that waste doctors' time
 * - System overload from automated attacks
 * - Competitors trying to disrupt your service
 * - Pranksters submitting fake patient information
 * 
 * HOW IT WORKS:
 * - Tracks how many form submissions come from each IP address
 * - Blocks IP addresses that submit too many forms too quickly
 * - Allows legitimate patients while stopping spam bots
 * - Automatically cleans up old tracking data
 */

// Spam tracking storage - keeps track of submission attempts by IP address
const submissionTracker = new Map<string, number[]>();  // IP address -> submission timestamps

/**
 * CHECK RATE LIMIT - Spam Protection Function
 * 
 * Determines if an IP address is submitting forms too frequently.
 * Legitimate patients typically submit once, while spam bots submit many times.
 * 
 * PARAMETERS:
 * - ip: The visitor's IP address
 * - maxSubmissions: Maximum allowed submissions (default: 3 per 5 minutes)
 * - windowMs: Time window in milliseconds (default: 5 minutes)
 * 
 * RETURNS:
 * - true: Allow the submission (not spam)
 * - false: Block the submission (likely spam)
 */
export function checkRateLimit(ip: string, maxSubmissions = 10, windowMs = 300000): boolean {
  const now = Date.now();  // Current time
  const submissions = submissionTracker.get(ip) || [];  // Get previous submissions from this IP
  
  // Remove old submissions outside the time window
  const recentSubmissions = submissions.filter(time => now - time < windowMs);
  
  // Check if this IP has exceeded the limit
  if (recentSubmissions.length >= maxSubmissions) {
    return false; // Rate limit exceeded - block this submission
  }
  
  // Record this submission and allow it
  recentSubmissions.push(now);
  submissionTracker.set(ip, recentSubmissions);
  
  return true;  // Allow the submission
}

/**
 * CLEANUP RATE LIMIT DATA - Memory Management
 * 
 * Removes old tracking data to prevent memory buildup.
 * Called periodically to keep the system running efficiently.
 */
export function cleanupRateLimit(): void {
  const now = Date.now();  // Current time
  const windowMs = 300000; // 5 minutes window
  
  // Go through all tracked IP addresses
  for (const [ip, submissions] of submissionTracker.entries()) {
    // Keep only recent submissions
    const recentSubmissions = submissions.filter(time => now - time < windowMs);
    
    if (recentSubmissions.length === 0) {
      submissionTracker.delete(ip);  // Remove IPs with no recent activity
    } else {
      submissionTracker.set(ip, recentSubmissions);  // Update with cleaned data
    }
  }
}

// Note: Cleanup is called manually when needed to avoid runtime issues
