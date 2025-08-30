"use client"

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw, Phone } from 'lucide-react'
import { BUSINESS_CONTACT } from '@/lib/constants/healthcare'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Error caught - handled silently for production security
    
    // Track error for analytics (optional)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false
      })
    }
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined })
  }

  private handleCallSupport = () => {
    window.location.href = `tel:${BUSINESS_CONTACT.MAIN_PHONE}`
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-6">
          <div className="text-center max-w-md mx-auto">
            <div className="mb-6">
              <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Something went wrong
              </h2>
              <p className="text-gray-600 mb-6">
                We're sorry, but there was an error loading this section. 
                You can still book a doctor by calling us directly.
              </p>
            </div>
            
            <div className="space-y-3">
              <Button 
                onClick={this.handleRetry}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
              
              <Button 
                onClick={this.handleCallSupport}
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call {BUSINESS_CONTACT.MAIN_PHONE}
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              Error ID: {this.state.error?.message?.substring(0, 8) || 'Unknown'}
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Wrapper component for booking forms
export function BookingErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary
      fallback={
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
          <div className="text-center">
            <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              Booking Form Error
            </h3>
            <p className="text-red-700 mb-4">
              The booking form encountered an issue. Please call us directly for immediate assistance.
            </p>
            <Button 
              onClick={() => window.location.href = `tel:${BUSINESS_CONTACT.MAIN_PHONE}`}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call {BUSINESS_CONTACT.MAIN_PHONE}
            </Button>
          </div>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  )
}
