"use client"

import { BUSINESS_CONTACT } from '@/lib/constants/healthcare'

interface CityBusinessSchemaProps {
  city: 'vizag' | 'tirupati' | 'kakinada'
}

const cityData = {
  vizag: {
    name: 'Doctor Bookings Visakhapatnam',
    address: {
      streetAddress: 'MVP Colony',
      addressLocality: 'Visakhapatnam',
      addressRegion: 'Andhra Pradesh',
      postalCode: '530017',
      addressCountry: 'IN'
    },
    geo: {
      latitude: '17.6868',
      longitude: '83.2185'
    },
    areaServed: ['MVP Colony', 'Beach Road', 'Madhurawada', 'Gajuwaka', 'Rushikonda', 'Pendurthi'],
    url: 'https://doctorbookings.in/vizag'
  },
  tirupati: {
    name: 'Doctor Bookings Tirupati',
    address: {
      streetAddress: 'Madhura Nagar',
      addressLocality: 'Tirupati',
      addressRegion: 'Andhra Pradesh',
      postalCode: '517501',
      addressCountry: 'IN'
    },
    geo: {
      latitude: '13.6288',
      longitude: '79.4192'
    },
    areaServed: ['Madhura Nagar', 'Balaji Colony', 'Chandragiri', 'Bhavani Nagar', 'Renigunta', 'Alipiri'],
    url: 'https://doctorbookings.in/tirupati'
  },
  kakinada: {
    name: 'Doctor Bookings Kakinada',
    address: {
      streetAddress: 'Suryaraopet',
      addressLocality: 'Kakinada',
      addressRegion: 'Andhra Pradesh',
      postalCode: '533001',
      addressCountry: 'IN'
    },
    geo: {
      latitude: '16.9891',
      longitude: '82.2475'
    },
    areaServed: ['Suryaraopet', 'Gandhinagar', 'Jagannadhapuram', 'Ramanayyapeta', 'Vakalapudi', 'Sarpavaram'],
    url: 'https://doctorbookings.in/kakinada'
  }
}

export function CityBusinessSchema({ city }: CityBusinessSchemaProps) {
  const data = cityData[city]
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${data.url}#business`,
    "name": data.name,
    "description": `Professional home healthcare service providing certified MBBS doctor visits in ${data.address.addressLocality}. 24/7 emergency medical care at your doorstep.`,
    "url": data.url,
    "telephone": BUSINESS_CONTACT.MAIN_PHONE,
    "address": {
      "@type": "PostalAddress",
      ...data.address
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": data.geo.latitude,
      "longitude": data.geo.longitude
    },
    "areaServed": data.areaServed.map(area => ({
      "@type": "Place",
      "name": area,
      "containedInPlace": {
        "@type": "City",
        "name": data.address.addressLocality,
        "addressRegion": data.address.addressRegion,
        "addressCountry": data.address.addressCountry
      }
    })),
    "serviceType": "Home Healthcare",
    "medicalSpecialty": ["General Practice", "Emergency Medicine", "Geriatric Medicine", "Pediatrics"],
    "availableService": [
      {
        "@type": "MedicalService",
        "name": "Home Doctor Visits",
        "description": "Certified MBBS doctors visit your home for medical consultation and treatment"
      },
      {
        "@type": "MedicalService", 
        "name": "Emergency Medical Care",
        "description": "24/7 emergency medical assistance at your doorstep"
      },
      {
        "@type": "MedicalService",
        "name": "Senior Healthcare",
        "description": "Specialized medical care for elderly patients at home"
      }
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "₹₹",
    "paymentAccepted": ["Cash", "UPI", "Card"],
    "currenciesAccepted": "INR",
    "hasMap": `https://maps.google.com/?q=${data.geo.latitude},${data.geo.longitude}`,
    "sameAs": [
      "https://doctorbookings.in",
      `https://doctorbookings.in/${city}`
    ]
  }

  const medicalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${data.url}#organization`,
    "name": data.name,
    "description": `Certified home healthcare provider in ${data.address.addressLocality}`,
    "url": data.url,
    "telephone": BUSINESS_CONTACT.MAIN_PHONE,
    "address": {
      "@type": "PostalAddress",
      ...data.address
    },
    "medicalSpecialty": ["General Practice", "Emergency Medicine"],
    "availableService": [
      "Home Medical Consultation",
      "Emergency Care",
      "Senior Care",
      "Pediatric Care"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalOrganizationSchema)
        }}
      />
    </>
  )
}
