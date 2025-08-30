/**
 * SERVICES SECTION COMPONENT - Medical Services You Offer
 * 
 * This section displays all the healthcare services your doctors provide at home.
 * It's designed to help visitors understand exactly what medical conditions you treat
 * and which service category fits their needs.
 * 
 * KEY FEATURES:
 * - Three main service categories: Family Care, Senior Care, Recovery Care
 * - Visual icons for each medical condition (fever, diabetes, injuries, etc.)
 * - Target audience labels ("Perfect for: Busy Families")
 * - Comprehensive list of treatable conditions
 * - Professional medical iconography for trust building
 * 
 * BUSINESS PURPOSE:
 * - Educate visitors about your service scope
 * - Help them self-identify which category they need
 * - Build confidence that you can treat their specific condition
 * - Reduce "Do you treat X?" phone calls by being comprehensive
 * 
 * SERVICE CATEGORIES:
 * 1. Family Doctor & Child Care - Common illnesses, vaccinations, pediatric care
 * 2. Senior Care & Monitoring - Chronic conditions, medication management, elderly care
 * 3. Physiotherapy & Post Surgery - Recovery care, wound management, mobility issues
 */

"use client" // This component needs browser features for interactive elements

import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  Activity,
  Thermometer,
  WindIcon,
  Brain,
  Ear,
  LigatureIcon as Bandage,
  Syringe,
  Droplet,
  HeartHandshake,
  Bone,
  Pill,
  TreesIcon as Lungs,
  Gauge,
  LeafIcon as Leg,
  CuboidIcon as Crutch,
  ShipWheelIcon as Wheelchair,
  Dumbbell,
  Stethoscope,
  HeartPulse,
  Recycle,
  Zap,
  ShieldAlert,
  Wind,
  Scissors,
  BoneIcon,
  Cast,
  PersonStanding
} from "lucide-react"

// DATA STRUCTURES - How service information is organized

// ServiceItem: Individual medical condition or treatment
interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>
  text: string
  color: string  // Icon color for visual distinction
}

// Service: Complete service category with all its treatments
interface Service {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  bgColor: string
  iconBg: string
  textColor: string
  borderColor: string
  items: ServiceItem[]
  targetAudience: string  // Who this service category is designed for
}

// MEDICAL SERVICES DATA - All the healthcare services you provide
// This is the complete list of what your doctors can treat at home
const services: Service[] = [
  {
    id: "family",  // Unique identifier for this service category
    title: "Family Doctor and Child Care",  // Main service category name
    icon: Stethoscope,
    bgColor: "bg-blue-50",
    iconBg: "from-blue-100 to-blue-200",
    textColor: "text-blue-600",
    borderColor: "border-blue-100",
    targetAudience: "Perfect for: Busy Families & Working Parents",  // Target customer group
    items: [  // List of specific medical conditions treated in this category
      { icon: Thermometer, text: "Fever & high temperature", color: "text-red-500" },     // Common illness symptoms
      { icon: WindIcon, text: "Cold, cough, sore throat", color: "text-blue-500" },        // Respiratory conditions
      { icon: Zap, text: "Stomach pain & vomiting", color: "text-green-500" },            // Digestive issues
      { icon: Brain, text: "Headaches & body aches", color: "text-purple-500" },          // Pain management
      { icon: Ear, text: "Ear infections & runny nose", color: "text-orange-500" },       // ENT conditions
      { icon: ShieldAlert, text: "Skin rashes & allergic reactions", color: "text-pink-500" }, // Dermatological issues
      { icon: Syringe, text: "Vaccinations at home", color: "text-teal-500" }             // Preventive care
    ]
  },
  {
    id: "senior",  // Service category identifier
    title: "Senior Care and Monitoring",  // Specialized elderly healthcare
    icon: HeartPulse,
    bgColor: "bg-green-50",
    iconBg: "from-green-100 to-green-200",
    textColor: "text-green-600",
    borderColor: "border-green-100",
    targetAudience: "Perfect for: Elderly Parents & Caregivers",  // Target demographic
    items: [  // Chronic conditions and elderly-specific healthcare needs
      { icon: Heart, text: "High blood pressure monitoring", color: "text-red-500" },      // Cardiovascular care
      { icon: Droplet, text: "Diabetes & blood sugar checks", color: "text-blue-500" },     // Diabetic management
      { icon: HeartHandshake, text: "Heart condition follow-ups", color: "text-pink-500" }, // Cardiac monitoring
      { icon: Bone, text: "Arthritis & joint pain", color: "text-orange-500" },            // Musculoskeletal issues
      { icon: Pill, text: "Medication side effects", color: "text-purple-500" },           // Drug monitoring
      { icon: Wind, text: "Breathing difficulties", color: "text-teal-500" },              // Respiratory care
      { icon: Brain, text: "Memory & cognitive concerns", color: "text-indigo-500" }       // Neurological assessment
    ]
  },
  {
    id: "recovery",  // Recovery and rehabilitation services
    title: "Physiotherapy and Post Surgery Care",  // Specialized recovery healthcare
    icon: Recycle,
    bgColor: "bg-purple-50",
    iconBg: "from-purple-100 to-purple-200",
    textColor: "text-purple-600",
    borderColor: "border-purple-100",
    targetAudience: "Perfect for: Recovering Patients",  // Post-operative and injury recovery
    items: [  // Recovery, rehabilitation, and post-surgical care services
      { icon: Scissors, text: "Surgical wound care & infections", color: "text-red-500" },    // Post-surgical care
      { icon: Gauge, text: "Post-operative pain management", color: "text-orange-500" },      // Pain control
      { icon: Bone, text: "Back pain & spine problems", color: "text-blue-500" },            // Spinal issues
      { icon: BoneIcon, text: "Knee, shoulder, hip injuries", color: "text-green-500" },     // Joint injuries
      { icon: Cast, text: "Fracture & cast monitoring", color: "text-purple-500" },          // Bone healing
      { icon: PersonStanding, text: "Mobility & walking difficulties", color: "text-teal-500" }, // Movement therapy
      { icon: Dumbbell, text: "Sports injury recovery", color: "text-pink-500" }             // Athletic rehabilitation
    ]
  }
]

// COMPONENT PROPS - Configuration options for the Services section
interface ServicesSectionProps {
  onBookingClick?: (serviceName: string) => void  // Optional callback when service is selected
}

/**
 * MAIN SERVICES SECTION COMPONENT
 * 
 * Creates the complete services display with:
 * - Section header explaining your comprehensive care
 * - Three service category cards (Family, Senior, Recovery)
 * - Visual icons for each medical condition
 * - Target audience identification
 * - Professional medical presentation
 */
export default function ServicesSection({ onBookingClick }: ServicesSectionProps) {
  // Handle service selection - triggers booking with pre-selected service type
  const handleBookingClick = (serviceName: string) => {
    if (onBookingClick) {
      onBookingClick(serviceName)  // Pass selected service to parent component
    }
  }

  return (
    // Main Services Section Container
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Explains your comprehensive medical services */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-green-600 mb-6">
            Services we offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our certified doctors and healthcare professionals bring hospital-quality treatment directly to your
            doorstep
          </p>
        </div>

        {/* SERVICE CARDS GRID - Three main service categories */}
        {/* Each card shows a complete service category with all treatable conditions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon  // Get the icon component for this service
            return (
              // Individual Service Card - Shows one complete service category
              <Card 
                key={service.id}
                className={`border-0 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 group ${service.bgColor} h-full`}
              >
                <CardContent className="p-4 flex flex-col h-full justify-center">
                  {/* SERVICE HEADER - Icon and title */}
                  <div className="text-center mb-6">
                    {/* Service Icon - Visual representation of the service category */}
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${service.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`h-8 w-8 ${service.textColor}`} />
                    </div>
                    {/* Service Category Title */}
                    <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                  </div>

                  {/* MEDICAL CONDITIONS LIST - All treatable conditions in this category */}
                  <div className="space-y-3 mb-4 max-w-sm mx-auto">
                    {service.items.map((item, index) => {
                      const ItemIcon = item.icon  // Icon for this specific medical condition
                      return (
                        // Individual Medical Condition - Shows what you can treat
                        <div key={index} className="flex items-center space-x-3 text-lg sm:text-base text-gray-700">
                          <ItemIcon className={`h-6 w-6 ${item.color} flex-shrink-0`} />  {/* Condition icon */}
                          <span>{item.text}</span>  {/* Condition description */}
                        </div>
                      )
                    })}
                    {/* Indicates you treat more than just the listed conditions */}
                    <p className="text-sm text-gray-700 text-center">...and many more conditions</p>
                  </div>
                  
                  {/* TARGET AUDIENCE BADGE - Who this service is designed for */}
                  <div className="text-center">
                    <span className={`inline-block text-xs font-semibold ${service.textColor} bg-white px-4 py-2 rounded-lg shadow-sm border ${service.borderColor}`}>
                      {service.targetAudience}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Export both default and named export for flexibility
export { ServicesSection as Services }