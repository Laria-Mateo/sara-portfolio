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
            Soy Sara Riso, tengo 19 años y me especializo en campañas publicitarias y creación de contenido digital. 
            Con experiencia en comerciales para televisión y redes sociales, he trabajado con marcas reconocidas como 
            Dave Vitamine Care y Skip Argentina. Mi pasión por la actuación y mi presencia natural frente a cámara 
            me permiten conectar auténticamente con las audiencias, creando contenido que resuena y genera engagement.
          </p>
        </CardContent>
      </Card>
    </section>
  )
} 