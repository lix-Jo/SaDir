"use client"

import { Mountain, MapPin } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t, dir, language } = useLanguage()
  
  return (
    <footer className="bg-secondary/30 border-t border-border relative overflow-hidden" dir={dir}>
      {/* Soft mountain silhouette */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-5">
        <svg viewBox="0 0 1440 100" className="w-full h-auto" preserveAspectRatio="none">
          <path 
            d="M0 100 L0 60 Q100 40 200 55 Q350 30 450 50 Q550 25 650 45 Q800 20 900 40 Q1000 25 1100 35 Q1200 20 1300 30 Q1400 40 1440 35 L1440 100 Z" 
            className="fill-foreground"
          />
        </svg>
      </div>
      
      {/* Main footer */}
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="https://i.postimg.cc/Gmb2zqJz/Sa-Dir-logo-(1).png"
                alt="SaDir Logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  {language === "ar" ? "SaDir" : "SaDir"}
                </h3>
                <p className="text-sm text-primary">
                  {language === "ar" ? "The Saudi Shield" : "The Saudi Shield"}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer.about.desc")}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{language === "ar" ? "جامعة الملك عبدالعزيز، جدة" : "King Abdulaziz University, Jeddah"}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-medium text-foreground flex items-center gap-2">
              <Mountain className="w-4 h-4 text-primary" />
              {t("footer.links")}
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  {language === "ar" ? "عن SaDir" : "About SaDir"}
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  {t("footer.features")}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-primary transition-colors">
                  {t("footer.team")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {language === "ar" ? "التوثيق" : "Documentation"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border relative">
        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>{t("footer.built")}</p>
            <div className="flex items-center gap-4">
              <span>v1.0.0</span>
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span>{language === "ar" ? "هاكاثون النادي الجيولوجي 2026" : "Hackathon 2025"}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
