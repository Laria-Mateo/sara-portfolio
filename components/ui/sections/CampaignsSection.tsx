import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Video } from 'lucide-react'

interface Campaign {
  brand: string
  description: string
  type: string
  year: string
  platforms: string[]
  link: string
}

export function CampaignsSection() {
  const campaigns: Campaign[] = [
    {
      brand: "DOVE",
      description: "Campaña digital para Dove Vitamine Care",
      type: "Contenido para Redes Sociales",
      year: "2025",
      platforms: ["Instagram", "TikTok"],
      link: "https://www.instagram.com/p/DLoImqNpCop/"
    },
    {
      brand: "SKIP",
      description: "Campaña digital para Skip Ciclos Cortos",
      type: "Contenido para Redes Sociales", 
      year: "2025",
      platforms: ["Instagram", "TikTok"],
      link: "https://www.instagram.com/p/DMymJ-uPBwG/"
    }
  ]

  return (
    <section className="mb-16">
      <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-gray-800 flex items-center justify-center gap-3">
            <Camera className="w-8 h-8 text-pink-400" />
            Campañas Publicitarias
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {campaigns.map((campaign, index) => (
              <a 
                key={index} 
                href={campaign.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-105"
              >
                <Card className="border-2 border-pink-200 hover:border-pink-400 transition-colors bg-pink-100 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{campaign.brand}</h3>
                      <Badge className="bg-pink-200 text-pink-700">{campaign.year}</Badge>
                    </div>
                    <p className="text-gray-700 mb-3">{campaign.description}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <Video className="w-4 h-4 text-pink-500" />
                      <span className="text-sm text-pink-500 font-medium">{campaign.type}</span>
                    </div>
                    <div className="flex gap-2">
                      {campaign.platforms.map((platform, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-pink-300 text-pink-600">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
} 