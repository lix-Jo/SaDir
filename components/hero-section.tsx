"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Mountain, Compass } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"
import { LanguageToggle } from "./language-toggle"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t, dir } = useLanguage()
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" dir={dir}>
      {/* Controls */}
      <div className="absolute top-6 right-6 z-50 flex gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Subtle topographic pattern */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="topo" patternUnits="userSpaceOnUse" width="120" height="120">
              <path d="M0 60 Q30 45 60 60 T120 60" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M0 80 Q30 65 60 80 T120 80" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M0 100 Q30 85 60 100 T120 100" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M0 40 Q30 25 60 40 T120 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M0 20 Q30 5 60 20 T120 20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)" className="text-primary"/>
        </svg>
      </div>
      
      {/* Soft mountain silhouette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 200" className="w-full h-auto" preserveAspectRatio="none">
          <path 
            d="M0 200 L0 120 Q100 80 200 100 Q350 60 450 90 Q550 50 650 80 Q800 30 900 70 Q1000 40 1100 60 Q1200 30 1300 50 Q1400 70 1440 60 L1440 200 Z" 
            className="fill-secondary/40 dark:fill-secondary/20"
          />
          <path 
            d="M0 200 L0 150 Q150 120 300 140 Q450 100 600 130 Q750 90 900 120 Q1050 80 1200 110 Q1350 130 1440 100 L1440 200 Z" 
            className="fill-secondary/60 dark:fill-secondary/30"
          />
        </svg>
      </div>

      {/* Decorative compass */}
      <div className="absolute top-32 right-16 opacity-10 dark:opacity-5 hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-32 h-32">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary"/>
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
          <line x1="50" y1="10" x2="50" y2="25" stroke="currentColor" strokeWidth="1" className="text-primary"/>
          <line x1="50" y1="75" x2="50" y2="90" stroke="currentColor" strokeWidth="1" className="text-primary"/>
          <line x1="10" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="1" className="text-primary"/>
          <line x1="75" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" className="text-primary"/>
          <text x="47" y="8" fontSize="8" className="fill-primary">N</text>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          {/* Logo Container - تم نقله هنا داخل الـ flex box */}
          <div className="mb-4 relative w-[400px] h-[200px] md:w-[600px] md:h-[300px]"> 
            <div className="absolute -inset-12 bg-primary/5 dark:bg-primary/3 rounded-full blur-3xl" />
            <Image
              src="https://i.postimg.cc/Gmb2zqJz/Sa-Dir-logo-(1).png"
              alt="SaDir Logo"
              fill 
              priority 
              className="relative drop-shadow-md object-contain" 
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 text-balance text-foreground">
            {t("hero.title")}
          </h1>
          
          <p className="text-lg md:text-xl text-primary font-medium mb-3">
            {t("hero.subtitle")}
          </p>

          <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-6">
            {t("hero.tagline")}
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            {t("hero.description")}
          </p>

          {/* Simple CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="rounded-full px-8 gap-2 shadow-sm">
              <Compass className="w-4 h-4" />
              {t("hero.explore")}
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 gap-2 border-border hover:bg-secondary">
              <Mountain className="w-4 h-4" />
              {t("hero.learn")}
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
            <span className="text-xs uppercase tracking-wider">{t("hero.scroll")}</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}