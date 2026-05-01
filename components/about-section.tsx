"use client"

import { Layers, Cpu, Zap, Mountain, Compass, Map } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t, dir } = useLanguage()
  
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden" dir={dir}>
      {/* Soft background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="about-topo" patternUnits="userSpaceOnUse" width="100" height="100">
              <path d="M0 50 Q25 35 50 50 T100 50" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M0 70 Q25 55 50 70 T100 70" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M0 30 Q25 15 50 30 T100 30" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-topo)" className="text-primary"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
              <Mountain className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{t("about.title")}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
              {t("about.title")}
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t("about.description")}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl">
                <div className="p-2.5 bg-secondary rounded-lg">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-foreground">{t("about.unified")}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t("about.unified.desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl">
                <div className="p-2.5 bg-secondary rounded-lg">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-foreground">{t("about.analysis")}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t("about.analysis.desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl">
                <div className="p-2.5 bg-secondary rounded-lg">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-foreground">{t("about.offline")}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t("about.offline.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Field notebook style */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="flex items-center gap-2 px-6 py-4 bg-secondary/50 border-b border-border">
              <Compass className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{t("about.notebook")}</span>
              <span className="ml-auto text-sm text-muted-foreground">Sample Entry</span>
            </div>
            
            <div className="p-6 space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-sm text-muted-foreground">Date</span>
                <span className="font-medium text-foreground">April 27, 2026</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <div className="text-xs text-muted-foreground mb-1">Latitude</div>
                  <div className="font-medium text-foreground">24.7136° N</div>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <div className="text-xs text-muted-foreground mb-1">Longitude</div>
                  <div className="font-medium text-foreground">46.6753° E</div>
                </div>
              </div>
              
              <div className="bg-secondary/50 rounded-xl p-4">
                <div className="text-xs text-muted-foreground mb-2">Rock Type</div>
                <div className="font-medium text-foreground">Granite - Biotite Rich</div>
                <div className="text-sm text-muted-foreground mt-1">Precambrian basement complex</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <div className="text-xs text-muted-foreground mb-1">Strike</div>
                  <div className="font-medium text-foreground">N45°E</div>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <div className="text-xs text-muted-foreground mb-1">Dip</div>
                  <div className="font-medium text-foreground">35° SE</div>
                </div>
              </div>
              
              <div className="bg-secondary/50 rounded-xl p-4">
                <div className="text-xs text-muted-foreground mb-2">Field Notes</div>
                <p className="text-sm text-foreground leading-relaxed">
                  Outcrop shows well-developed foliation with quartz veins. 
                  Joint sets trending NE-SW with 2-3m spacing.
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <Map className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Location saved</span>
                </div>
                <span className="text-xs text-muted-foreground">Sample ID: GEO-2026-0042</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
