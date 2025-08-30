"use client"

interface LocalBusinessSchemaProps {
  city: 'vizag' | 'tirupati' | 'kakinada'
  areas: string[]
}

const cityData = {
  vizag: {
    name: 'Visakhapatnam',
    coordinates: { lat: 17.6868, lng: 83.2185 },
    postalCode: '530001',
    phone: '+91-9182296058'
  },
  tirupati: {
    name: 'Tirupati',
    coordinates: { lat: 13.6288, lng: 79.4192 },
    postalCode: '517501',
    phone: '+91-9182296058'
  },
  kakinada: {
    name: 'Kakinada',
    coordinates: { lat: 16.9891, lng: 82.2475 },
    postalCode: '533001',
    phone: '+91-9182296058'
  }
}

export function LocalBusinessSchema({ city, areas }: LocalBusinessSchemaProps) {
  const data = cityData[city]
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Doctor Bookings ${data.name}`,
    "description": `Professional home healthcare services with certified MBBS doctors in ${data.name}. Emergency and routine medical care at your doorstep within 30 minutes.`,
    "url": `https://doctorbookings.in/${city}`,
    "telephone": data.phone,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": data.name,
      "addressRegion": "Andhra Pradesh",
      "postalCode": data.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": data.coordinates.lat,
      "longitude": data.coordinates.lng
    },
    "areaServed": areas.map(area => ({
      "@type": "Place",
      "name": area,
      "containedInPlace": {
        "@type": "City",
        "name": data.name
      }
    })),
    "serviceType": [
      "Home Healthcare",
      "Doctor Home Visits",
      "Emergency Medical Care",
      "Routine Medical Checkups",
      "Elderly Care",
      "Pediatric Care"
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Doctor Home Visit",
            "description": "Certified MBBS doctor visits your home for medical consultation"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Medical Care",
            "description": "Urgent medical care at your doorstep within 30 minutes"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
