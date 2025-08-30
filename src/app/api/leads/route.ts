// API Route for Lead Capture - This handles booking form submissions
// When someone fills out your booking form, this code processes it
// It validates the data, sends you a Telegram alert, and responds to the user

import { NextRequest, NextResponse } from 'next/server'
import { sendLeadAlert } from '@/lib/integrations/telegram'
import { validateLeadData, checkRateLimit } from '@/lib/validation/form-validation'
import { logTelegramError, logFormSubmissionError } from '@/lib/utils/logger'

// Main Function - Handles booking form submissions (POST requests)
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Get client IP for rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown'
    
    // Rate limiting - prevent spam and abuse
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again in 5 minutes or call +91-9182296058 directly.' },
        { status: 429 }
      )
    }
    
    // Manual cleanup on each request to prevent memory buildup
    if (Math.random() < 0.1) { // 10% chance to cleanup
      const { cleanupRateLimit } = await import('@/lib/validation/form-validation')
      cleanupRateLimit()
    }
    
    // Get and validate form data
    const rawData = await request.json()
    
    // Server-side validation for security
    const validation = validateLeadData(rawData)
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.errors.join(', ') },
        { status: 400 }
      )
    }
    
    // Organize validated patient information
    const leadData = {
      ...validation.sanitizedData!,
      timestamp: new Date().toISOString(),
      source: 'website'
    }

    // Send you an instant Telegram alert about this new patient
    try {
      await sendLeadAlert(leadData)  // Alert sent to your Telegram
    } catch (error) {
      logTelegramError(error)  // Safe logging without patient data
    }

    // Future Enhancement: Save to database
    // In production, you might want to save leads to a database for record-keeping
    
    // Send success response back to your website
    return NextResponse.json({ 
      success: true,                    // Form submission worked
      message: 'Lead captured successfully'  // Message to show user
    })
    
  } catch (error) {
    // If anything goes wrong, log the error safely and tell the website
    logFormSubmissionError(error)
    return NextResponse.json(
      { error: 'Unable to process booking. Please call +91-9182296058 for immediate assistance.' },
      { status: 500 }
    )
  }
}
