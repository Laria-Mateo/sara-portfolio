import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Instagram, MapPin, MessageCircle } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="mb-16">
      <Card className="border-0 shadow-xl bg-pink-200">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-gray-800 flex items-center justify-center gap-3">
            <Mail className="w-8 h-8 text-pink-500" />
            Contacto Profesional
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <a href="tel:+5493434525560" className="flex items-center gap-3 p-3 bg-white/70 rounded-lg hover:bg-white/80 transition-colors">
                <Phone className="w-5 h-5 text-pink-500" />
                <span className="text-gray-700">+54 9 3434525560</span>
              </a>
              <a href="mailto:saruliriso2006@gmail.com" className="flex items-center gap-3 p-3 bg-white/70 rounded-lg hover:bg-white/80 transition-colors">
                <Mail className="w-5 h-5 text-pink-500" />
                <span className="text-gray-700">saruliriso2006@gmail.com</span>
              </a>
            </div>
            <div className="space-y-4">
              <a href="https://www.instagram.com/saritariso/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-white/70 rounded-lg hover:bg-white/80 transition-colors">
                <Instagram className="w-5 h-5 text-pink-500" />
                <span className="text-gray-700">@saritariso</span>
              </a>
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
                <MapPin className="w-5 h-5 text-pink-500" />
                <span className="text-gray-700">Buenos Aires, Recoleta</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">¿Interesado en trabajar conmigo?</p>
            <a 
              href="https://wa.me/5493434525560?text=Hola%20Sara!%20Me%20interesa%20trabajar%20contigo%20para%20una%20campaña%20publicitaria.%20¿Podrías%20brindarme%20más%20información?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
                Solicitar Cotización
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  )
} 