import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  rating: number
  comment: string
  serviceType: string
  serviceColor: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Poojitha",
    role: "Daughter for 72-year-old mother",
    rating: 5,
    comment: "My mother was hesitant to go to the hospital for her routine check-up. Dr. varun from Doctor Bookings was so patient and thorough. She felt comfortable throughout the examination.",
    serviceType: "Diabetes monitoring",
    serviceColor: "bg-green-100 text-green-800"
  },
  {
    id: 2,
    name: "P. Leeladhar",
    role: "Father of 3-year-old",
    rating: 5,
    comment: "My 3-year-old had high fever at midnight. Dr. varun arrived within 30 minutes with all equipment. She was gentle and explained everything clearly.",
    serviceType: "Pediatric emergency",
    serviceColor: "bg-blue-100 text-blue-800"
  },
  {
    id: 3,
    name: "Lavanya",
    role: "Post-surgery patient",
    rating: 5,
    comment: "After my knee surgery, daily wound dressing was needed. Dr. varun came every morning and monitored healing progress excellently.",
    serviceType: "Post-surgery care",
    serviceColor: "bg-purple-100 text-purple-800"
  },
  {
    id: 4,
    name: "Amit Patel",
    role: "Software engineer",
    rating: 5,
    comment: "Taking leave for doctor visits was stressful. Dr. varun came during lunch break, conducted thorough examination, and provided detailed health advice.",
    serviceType: "Executive health check",
    serviceColor: "bg-orange-100 text-orange-800"
  },
  {
    id: 5,
    name: "Sunita Agarwal",
    role: "Daughter-in-law for 68-year-old",
    rating: 5,
    comment: "My mother-in-law needed regular BP monitoring. Dr. varun's visits gave us peace of mind and helped manage her condition effectively.",
    serviceType: "Chronic care management",
    serviceColor: "bg-indigo-100 text-indigo-800"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-8 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-green-600">
            What Families Are Saying
          </h2>
          <p className="text-xl text-gray-600">Real experiences from real families across India</p>
        </div>

        <div className="relative">
          <div
            className="flex gap-6 overflow-x-auto pb-4 px-4 -mx-4"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="border-0 shadow-lg rounded-2xl flex-shrink-0 w-80 md:w-96"
                style={{ scrollSnapAlign: "start" }}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="font-semibold text-base text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow line-clamp-4">
                    "{testimonial.comment}"
                  </p>

                  <div className="mt-auto">
                    <div className={`${testimonial.serviceColor} px-3 py-1 rounded-full text-xs font-medium w-fit`}>
                      {testimonial.serviceType}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { TestimonialsSection as Testimonials }



