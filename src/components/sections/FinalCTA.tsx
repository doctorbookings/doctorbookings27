import { Phone } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Need a Doctor at Home? Book Now!</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Certified doctors at your doorstep within 30 minutes. Available 24/7 in Vizag, Tirupati & Kakinada.
              </p>
              <div className="flex justify-center">
                <a
                  href="tel:+919182296058"
                  className="inline-flex items-center bg-white text-blue-600 font-bold text-xl px-8 py-4 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Call Now — 9182296058
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FinalCTA }