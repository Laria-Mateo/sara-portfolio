import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Instagram, Video } from 'lucide-react'

interface SocialStat {
  platform: string
  handle: string
  metric: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  highlight?: boolean
  link: string
}

export function SocialMediaSection() {
  const socialStats: SocialStat[] = [
    { 
      platform: "Instagram", 
      handle: "@saritariso", 
      metric: "Engagement Rate Alto",
      icon: Instagram,
      description: "Contenido de calidad",
      link: "https://www.instagram.com/saritariso/"
    },
    { 
      platform: "TikTok", 
      handle: "@saritaaaar", 
      metric: "+25K Seguidores",
      icon: Video,
      description: "+1.6M Me Gusta",
      highlight: true,
      link: "https://www.tiktok.com/@saritaaaar?lang=es-419"
    }
  ]

  return (
    <section className="mb-16">
      <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-gray-800 flex items-center justify-center gap-3">
            <TrendingUp className="w-8 h-8 text-pink-400" />
            Presencia Digital
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            {socialStats.map((stat, index) => (
              <a 
                key={index} 
                href={stat.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-105"
              >
                <div className={`text-center p-6 rounded-xl border cursor-pointer h-full flex flex-col justify-between ${stat.highlight ? 'bg-pink-200 border-pink-300 hover:border-pink-400' : 'bg-pink-100 border-pink-200 hover:border-pink-300'} transition-colors`}>
                  <div>
                    <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.highlight ? 'text-pink-600' : 'text-pink-500'}`} />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{stat.platform}</h3>
                    <p className="text-pink-500 font-semibold text-lg mb-2">{stat.handle}</p>
                    <p className={`font-bold text-xl mb-2 ${stat.highlight ? 'text-pink-600' : 'text-gray-700'}`}>{stat.metric}</p>
                    <p className="text-gray-600">{stat.description}</p>
                  </div>
                  {stat.highlight && (
                    <Badge className="mt-3 bg-pink-500 text-white">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Viral Content Creator
                    </Badge>
                  )}
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
} 