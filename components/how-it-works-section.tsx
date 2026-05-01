"use client"

import { FolderPlus, Clipboard, LineChart } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HowItWorksSection() {
  const { t, dir, language } = useLanguage()
  
  const steps = [
    {
      number: "1",
      icon: FolderPlus,
      title: language === "ar" ? "إنشاء مشروع" : "Create Project",
      description: language === "ar" ? "إعداد مشروع ميداني جديد مع تفاصيل الموقع ومعلومات التكوين ومعايير المشروع." : "Set up a new field project with location details, formation info, and project parameters."
    },
    {
      number: "2",
      icon: Clipboard,
      title: language === "ar" ? "جمع البيانات" : "Collect Data",
      description: language === "ar" ? "تسجيل العينات والقياسات البنيوية والصور والملاحظات مع تتبع GPS التلقائي." : "Record samples, structural measurements, photos, and observations with automatic GPS tracking."
    },
    {
      number: "3",
      icon: LineChart,
      title: language === "ar" ? "تحليل وتصدير" : "Analyze & Export",
      description: language === "ar" ? "إنشاء الستيريونيت ومخططات الوردة وتصدير تقارير شاملة إلى PDF أو Excel." : "Generate stereonets, rose diagrams, and export comprehensive reports to PDF or Excel."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background relative" dir={dir}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            {t("how.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("how.description")}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-border rtl:left-auto rtl:right-[calc(50%+40px)]" />
              )}

              <div className="flex flex-col items-center text-center">
                {/* Number circle */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center shadow-sm">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <span className="absolute -top-2 -right-2 rtl:-left-2 rtl:right-auto w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-medium mb-3 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
