import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from 'lucide-react'

export function SkillsSection() {
  const skills = [
    "Campañas publicitarias",
    "Creación de contenido",
    "Presencia en cámara",
    "Redes sociales",
    "Danza y movimiento"
  ]

  return (
    <section className="mb-16">
      <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-gray-800 flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-pink-400" />
            Especialidades
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="text-center p-4 bg-pink-100 rounded-lg border border-pink-200 hover:shadow-md transition-shadow">
                <span className="text-gray-800 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
} 