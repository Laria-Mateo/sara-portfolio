import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="mb-16">
      <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-gray-800 flex items-center justify-center gap-3">
            <Heart className="w-8 h-8 text-pink-400" />
            Sobre Mí
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Mi nombre es Sara Riso, tengo 19 años. Actualmente me estoy formando en IAM. Desde muy chica, he encontrado en las artes escénicas mi verdadera pasión. Mi formación en teatro musical me ha dado las herramientas para expresarme naturalmente frente a cámara, lo que me permite conectar auténticamente con las audiencias en campañas publicitarias. Disfruto explorando diversos estilos y géneros, y mi meta es continuar creciendo como actriz publicitaria, manteniendo siempre mi identidad y compromiso con el arte escénico.
          </p>
        </CardContent>
      </Card>
    </section>
  )
} 