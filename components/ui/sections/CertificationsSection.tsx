import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from 'lucide-react'

export function CertificationsSection() {
  const certifications = [
    {
      certificate: "Curso de modelo publicitaria",
      company: "High | Academia de Modelos",
      date: "5 de junio - 27 de junio"
    }
  ]

  return (
    <section className="mb-16">
      <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-gray-800 flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-pink-400" />
            Certificaciones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="p-6 bg-pink-50 rounded-lg border border-pink-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {cert.certificate}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      Empresa: {cert.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-pink-600 font-medium">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
