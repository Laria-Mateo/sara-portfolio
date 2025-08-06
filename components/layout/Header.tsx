import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Instagram, Camera, Video, Heart } from 'lucide-react'

export function Header() {
  return (
    <section className="relative py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold bg-pink-400 bg-clip-text text-transparent mb-4">
              Sara Romanela Riso
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-light mb-4">
              Estudiante de Teatro Musical en IAM & Modelo Publicitaria
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Me gusta hacer campañas publicitarias y contenido digital
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <Badge className="bg-pink-200 text-pink-700 hover:bg-pink-300 px-4 py-2">
                <Camera className="w-4 h-4 mr-2" />
                Teatro Musical
              </Badge>
              <Badge className="bg-pink-200 text-pink-700 hover:bg-pink-300 px-4 py-2">
                <Video className="w-4 h-4 mr-2" />
                Canto & Baile
              </Badge>
              <Badge className="bg-pink-200 text-pink-700 hover:bg-pink-300 px-4 py-2">
                <Heart className="w-4 h-4 mr-2" />
                Actuación
              </Badge>
              <Badge className="bg-pink-200 text-pink-700 hover:bg-pink-300 px-4 py-2">
                <Camera className="w-4 h-4 mr-2" />
                Campañas Publicitarias
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <a href="https://www.instagram.com/saritariso/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-100">
                  <Instagram className="w-4 h-4 mr-2" />
                  Ver Instagram
                </Button>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-pink-300 rounded-full blur-2xl opacity-20 scale-110"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/images/sara-front.jpg"
                  alt="Sara Romanela Riso - Estudiante de Teatro Musical en IAM & Modelo Publicitaria"
                  className="object-cover object-center w-full h-full"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 