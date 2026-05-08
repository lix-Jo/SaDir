"use client"

import Image from "next/image"
import { Linkedin, Twitter, Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const team = [
  {
    name: "Nawaf Yahya Almarwaee",
    nameAr: "نواف يحيى المروعي",
    role: "Hydrogeology",
    roleAr: "جيولوجيا المياة",
    initials: "NA",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bZIR2ScGfKFz2zdfjvtiBCF4Kftseh.png",
    social: {
      linkedin: "https://www.linkedin.com/in/nawaf-almarwaee-63880b232",
      twitter: "https://x.com/n_almarwaee"
    }
  },
  {
    name: "Mohammed Ali Khubrani",
    nameAr: "محمد علي خبراني",
    role: "Mineral Resources & Rocks",
    roleAr: "ثروة معدنية",
    initials: "MK",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D8%A7%D9%84%D8%B5%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9.jpg-3VmOgx1Jbx3JYZi1PHzPJmGHKcWkad.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/mohammed-a-khubrani-1619763a1",
      twitter: "https://x.com/geo_moha1"
    }
  },
  {
    name: "Almuhannad Ahmed Alshehri",
    nameAr: "المهند أحمد الشهري",
    role: "Minerals Resources & Rocks",
    roleAr: "ثروة معدنية",
    image:"https://i.postimg.cc/SKYCg1t9/Almohannad-photo-for-web.jpg",
    initials: "AA",
    social: {
      linkedin: "https://www.linkedin.com/in/almuhannad-alshehri-027938353",
      portfolio: "https://almuhannad-geologist.netlify.app/"
    }
  },
  {
    name: "Joud Khaled Balkhair",
    nameAr: "جود خالد بالخير",
    role: "Information System",
    roleAr: "نظم المعلومات",
    initials: "JB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OuY0YHXCuUU1ln8CJDFa55Wx2bTaVg.png",
    social: {
      linkedin: "https://linkedin.com/in/joud-balkhair-500ab1318",
      github: "https://github.com/lix-Jo"
    }
  },
  {
    name: "Fatima Siraj Al-Zahrani",
    nameAr: "فاطمة سراج الزهراني",
    role: "Information Technology",
    roleAr: "تقنية المعلومات",
    initials: "FA",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8y34wdQwPdMC3sM1G6TDh0DQP2LnLS.png",
    social: {
      linkedin: "https://www.linkedin.com/in/fatima-al-zahrani-a6b2ab37b"
    }
  },
  {
    name: "Layan Ahmed Al-bugami",
    nameAr: "ليان أحمد البقمي",
    role: "Computer Science",
    roleAr: "علوم حاسب",
    initials: "LB",
    image: "https://i.postimg.cc/PJvr77PX/Whats-App-Image-2026-05-01-at-15-56-35.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/layan-al-bugami-992558393"
    }
  }
]

export function TeamSection() {
  const { t, dir, language } = useLanguage()

  return (
    <section className="py-24 bg-background relative overflow-hidden" dir={dir}>
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            {t("team.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("team.description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                {member.image ? (
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-2 ring-border">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center font-medium text-primary text-lg mb-4">
                    {member.initials}
                  </div>
                )}

                <div>
                  <h3 className="font-medium text-foreground leading-tight">
                    {language === "ar" ? member.nameAr : member.name}
                  </h3>
                  <p className="text-sm text-primary mt-1">
                    {language === "ar" ? member.roleAr : member.role}
                  </p>
                </div>
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-2 mt-5 pt-5 border-t border-border">
                {member.social.linkedin && (
                  <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-full" asChild>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`}>
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                {member.social.twitter && (
                  <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-full" asChild>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} X/Twitter`}>
                      <Twitter className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                {member.social.github && (
                  <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-full" asChild>
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} GitHub`}>
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                {member.social.portfolio && (
                  <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-full" asChild>
                    <a href={member.social.portfolio} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} Portfolio`}>
                      <Globe className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
