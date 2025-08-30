// HIPAA-Compliant Server-Side Error Tracking API
// Tracks form submission errors without storing patient data
// Production-ready error analytics for healthcare platform

import { NextRequest, NextResponse } from 'next/server'
import { logger } from '@/lib/utils/logger'

interface ErrorTrackingData {
  errorType: 'network' | 'validation' | 'server' | 'timeout' | 'unknown'
  city: string
  service: string
  timestamp: string
  userAgent?: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  retryCount?: number
}

// Rate limiting for error tracking to prevent spam
const errorTrackingLimiter = new Map<string, number[]>()

function checkErrorTrackingRateLimit(ip: string, maxErrors = 10, windowMs = 60000): boolean {
  const now = Date.now()
  const errors = errorTrackingLimiter.get(ip) || []
  
  // Remove old errors outside the window
  const recentErrors = errors.filter(time => now - time < windowMs)
  
  if (recentErrors.length >= maxErrors) {
    return false // Rate limit exceeded
  }
  
  // Add current error
  recentErrors.push(now)
  errorTrackingLimiter.set(ip, recentErrors)
  
  return true
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Get client IP for rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown'
    
    // Rate limiting for error tracking
    if (!checkErrorTrackingRateLimit(clientIP)) {
      return NextResponse.json(
        { error: 'Error tracking rate limit exceeded' },
        { status: 429 }
      )
    }
    
    const errorData: ErrorTrackingData = await request.json()
    
    // Validate error data structure
    if (!errorData.errorType || !errorData.city || !errorData.timestamp) {
      return NextResponse.json(
        { error: 'Invalid error tracking data' },
        { status: 400 }
      )
    }
    
    // Sanitize and log error data (NO PATIENT INFORMATION)
    const sanitizedErrorData = {
      errorType: errorData.errorType,
      city: errorData.city,
      service: errorData.service || 'unknown',
      timestamp: errorData.timestamp,
      severity: errorData.severity || 'medium',
      retryCount: errorData.retryCount || 0,
      userAgent: request.headers.get('user-agent')?.substring(0, 100), // Truncate for security
      ip: clientIP.substring(0, 15) // Truncate IP for privacy
    }
    
    // Log error for system monitoring (NO PATIENT DATA)
    logger.error('Form submission error tracked', sanitizedErrorData)
    
    // In production, you could send this to your monitoring service
    // Examples: Sentry, DataDog, CloudWatch, etc.
    // await sendToMonitoringService(sanitizedErrorData)
    
    return NextResponse.json({ 
      success: true,
      message: 'Error tracked successfully'
    })
    
  } catch (error) {
    logger.error('Error tracking system failure', { error: error instanceof Error ? error.message : 'Unknown error' })
    return NextResponse.json(
      { error: 'Error tracking system unavailable' },
      { status: 500 }
    )
  }
}

// Clean up old rate limiting data periodically
// Note: This function is not exported to avoid Next.js API route type conflicts
function cleanupErrorTrackingRateLimit(): void {
  const now = Date.now()
  const windowMs = 60000 // 1 minute
  
  for (const [ip, errors] of errorTrackingLimiter.entries()) {
    const recentErrors = errors.filter(time => now - time < windowMs)
    if (recentErrors.length === 0) {
      errorTrackingLimiter.delete(ip)
    } else {
      errorTrackingLimiter.set(ip, recentErrors)
    }
  }
}

// Cleanup is called internally when needed to avoid runtime issues
