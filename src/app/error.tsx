'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to your error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Something went wrong</h1>
          <p className="text-gray-600 mb-4">
            We're sorry, but something unexpected happened. Our team has been notified.
          </p>
          <p className="text-sm text-gray-500">
            Error ID: {error.digest || 'Unknown'}
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            onClick={reset}
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 w-full"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            Try Again
          </Button>
          
          <Button 
            variant="outline"
            size="lg" 
            className="px-8 py-3 w-full"
            onClick={() => window.location.href = '/'}
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Need immediate medical assistance?</p>
          <p className="font-semibold text-green-600">Call +91-9182296058 for home doctor visits</p>
        </div>
      </div>
    </div>
  )
}
