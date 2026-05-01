"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Languages } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="rounded-full h-9 px-3 gap-2 border-border bg-card/80 backdrop-blur-sm hover:bg-secondary"
    >
      <Languages className="w-4 h-4" />
      <span className="text-xs font-medium">
        {language === "en" ? "Arabic" : "English"}
      </span>
    </Button>
  )
}
