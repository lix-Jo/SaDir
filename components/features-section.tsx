"use client"

import { 
  FolderKanban, 
  MapPin, 
  Camera, 
  Mountain, 
  Compass, 
  Map, 
  BarChart3, 
  PieChart, 
  Network,
  FileSpreadsheet,
  FileText,
  WifiOff
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FeaturesSection() {
  const { t, dir, language } = useLanguage()
  
  const features = [
    {
      icon: FolderKanban,
      title: language === "ar" ? "تنظيم المشاريع" : "Project Organization",
      description: language === "ar" ? "هيكلة العمل الميداني في مجموعات قائمة على المشاريع" : "Structure fieldwork into project-based collections with easy navigation"
    },
    {
      icon: MapPin,
      title: language === "ar" ? "تتبع العينات بـ GPS" : "GPS Sample Tracking",
      description: language === "ar" ? "التقاط الإحداثيات تلقائياً لكل عينة وموقع" : "Auto-capture coordinates for every sample and outcrop location"
    },
    {
      icon: Camera,
      title: language === "ar" ? "توثيق بالصور" : "Photo Documentation",
      description: language === "ar" ? "إرفاق صور عالية الدقة بالعينات مع البيانات الوصفية" : "Attach high-resolution images to samples with metadata"
    },
    {
      icon: Mountain,
      title: language === "ar" ? "تصنيف الصخور" : "Rock Classification",
      description: language === "ar" ? "إدخال موحد لأنواع الصخور مع ملاحظات المعادن" : "Standardized rock type input with mineralogy notes"
    },
    {
      icon: Compass,
      title: language === "ar" ? "القياسات البنيوية" : "Structural Measurements",
      description: language === "ar" ? "تسجيل الاتجاه والميل بدقة عالية" : "Record strike, dip, trend, and plunge with precision"
    },
    {
      icon: Map,
      title: language === "ar" ? "خرائط تفاعلية" : "Interactive Maps",
      description: language === "ar" ? "عرض جميع نقاط البيانات على خرائط جيولوجية ديناميكية" : "Visualize all data points on dynamic geological maps"
    },
    {
      icon: BarChart3,
      title: language === "ar" ? "تحليل البيانات" : "Data Analysis",
      description: language === "ar" ? "تحليل إحصائي وتصور للبيانات المجمعة" : "Statistical analysis and visualization of collected data"
    },
    {
      icon: PieChart,
      title: language === "ar" ? "مخططات Rose" : "Rose Diagrams",
      description: language === "ar" ? "إنشاء مخططات Rose اتجاهية تلقائياً" : "Auto-generate directional rose diagrams from measurements"
    },
    {
      icon: Network,
      title: language === "ar" ? "رسومات الستيريونيت" : "Stereonet Plots",
      description: language === "ar" ? "رسم البيانات البنيوية على شبكات ستيريوغرافية" : "Plot structural data on equal-area stereonets"
    },
    {
      icon: FileSpreadsheet,
      title: language === "ar" ? "تصدير Excel" : "Excel Export",
      description: language === "ar" ? "تصدير جميع البيانات لتنسيق جداول البيانات" : "Export all data to spreadsheet format for further analysis"
    },
    {
      icon: FileText,
      title: language === "ar" ? "تقارير PDF" : "PDF Reports",
      description: language === "ar" ? "إنشاء تقارير ميدانية شاملة تلقائياً" : "Generate comprehensive field reports automatically"
    }
  ]

  return (
    <section className="py-24 bg-background relative" dir={dir}>
      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            {t("features.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("features.description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="p-3 bg-secondary rounded-xl group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
