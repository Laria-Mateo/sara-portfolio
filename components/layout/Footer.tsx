import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Instagram, Video, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-pink-500 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Sara Romanela Riso</h3>
        <p className="text-pink-200 mb-6">Modelo & Creadora de Contenido para Campañas Publicitarias</p>
        
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://www.instagram.com/saritariso/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
          </a>
          <a href="https://www.tiktok.com/@saritaaaar?lang=es-419" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <Video className="w-5 h-5 mr-2" />
              TikTok
            </Button>
          </a>
          <a href="mailto:saruliriso2006@gmail.com">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Button>
          </a>
        </div>
        
        <Separator className="bg-pink-300 mb-6" />
        <p className="text-pink-300 text-sm">
          © 2025 Sara Romanela Riso. Disponible para campañas publicitarias y colaboraciones.
        </p>
        <p className="text-pink-200 text-xs mt-2">
          Desarrollado por Mateo Laria - Técnico Universitario en Programación
        </p>
      </div>
    </footer>
  )
} 