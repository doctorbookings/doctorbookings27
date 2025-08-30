import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</h2>
          <p className="text-gray-600">
            Sorry, we couldn't find the page you're looking for. 
            Let's get you back to getting the medical care you need.
          </p>
        </div>
        
        <Link href="/">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </Link>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Need immediate medical assistance?</p>
          <p className="font-semibold text-green-600">Call us now for home doctor visits</p>
        </div>
      </div>
    </div>
  )
}