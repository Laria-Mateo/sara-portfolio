"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Instagram, Video, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Footer() {
  const [showDeveloperCredit, setShowDeveloperCredit] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Mostrar el crédito solo cuando se llega al final y se sigue scrolleando
      if (scrollTop + windowHeight >= documentHeight - 10) {
        setShowDeveloperCredit(true)
      } else {
        setShowDeveloperCredit(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      </div>
      
      {/* Crédito del desarrollador - se despliega al final del scroll */}
      <div 
        className={`fixed bottom-0 right-0 p-2 pointer-events-none transition-all duration-300 ease-in-out ${
          showDeveloperCredit 
            ? 'translate-y-0 opacity-60' 
            : 'translate-y-full opacity-0'
        }`}
      >
        <p className="text-pink-200 text-xs">
          Desarrollado por Mateo Laria
        </p>
      </div>
    </footer>
  )
} 