import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { AboutSection } from "@/components/ui/sections/AboutSection"

import { SocialMediaSection } from "@/components/ui/sections/SocialMediaSection"
import { CampaignsSection } from "@/components/ui/sections/CampaignsSection"
import { SkillsSection } from "@/components/ui/sections/SkillsSection"
import { CertificationsSection } from "@/components/ui/sections/CertificationsSection"
import { ContactSection } from "@/components/ui/sections/ContactSection"

export function PortfolioView() {
  return (
    <>
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <AboutSection />
        <SocialMediaSection />
        <CampaignsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </div>

      <Footer />
    </>
  )
} 