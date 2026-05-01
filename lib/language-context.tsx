"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Hero
    "hero.title": "SaDir",
    "hero.subtitle": "The Saudi Shield",
    "hero.tagline": "Geological Intelligence Platform",
    "hero.description": "A smart platform designed for geology students and professionals to collect, analyze, and visualize field data with ease.",
    "hero.explore": "Explore Features",
    "hero.learn": "Learn More",
    "hero.scroll": "Scroll to discover",
    
    // Map Showcase
    "map.title": "Geological Mapping & Analysis",
    "map.description": "Visualize complex geological structures with our interactive mapping tools. From stereonets to stratigraphic columns, analyze your field data with precision.",
    "map.legend": "Legend",
    "map.granite": "Granite",
    "map.basalt": "Basalt",
    "map.limestone": "Limestone",
    "map.sandstone": "Sandstone",
    "map.schist": "Schist",
    "map.alluvium": "Alluvium",
    "map.stereonet": "Stereonet Projection",
    "map.rose": "Rose Diagram",
    
    // About
    "about.title": "About SaDir",
    "about.description": "SaDir is a comprehensive geological intelligence platform built by students, for students. We understand the challenges of fieldwork and data management in geology.",
    "about.unified": "Unified Data Collection",
    "about.unified.desc": "All your field measurements, rock samples, and observations in one place",
    "about.analysis": "Automated Analysis",
    "about.analysis.desc": "Generate stereonets, rose diagrams, and statistical reports automatically",
    "about.offline": "Offline-First Architecture",
    "about.offline.desc": "Work in remote desert or mountain areas, sync when you're back online",
    "about.notebook": "Field Notebook",
    
    // Features
    "features.title": "Platform Features",
    "features.description": "Everything you need for geological fieldwork and analysis",
    "features.stereonet": "Stereonet Analysis",
    "features.stereonet.desc": "Plot and analyze structural geology data with equal-area projections",
    "features.rose": "Rose Diagrams",
    "features.rose.desc": "Visualize directional data for joints, faults, and lineaments",
    "features.mapping": "Field Mapping",
    "features.mapping.desc": "Create geological maps with GPS-linked sample locations",
    "features.rocks": "Rock Classification",
    "features.rocks.desc": "Identify and classify igneous, sedimentary, and metamorphic rocks",
    "features.minerals": "Mineral Database",
    "features.minerals.desc": "Access comprehensive mineral identification guides",
    "features.export": "Data Export",
    "features.export.desc": "Export your data in multiple formats for reports and presentations",
    
    // How it Works
    "how.title": "How It Works",
    "how.description": "Simple workflow for collecting and analyzing geological data",
    "how.step1": "Collect Data",
    "how.step1.desc": "Record measurements, photos, and observations in the field",
    "how.step2": "Analyze",
    "how.step2.desc": "Generate visualizations and statistical analyses automatically",
    "how.step3": "Share & Export",
    "how.step3.desc": "Export reports and share findings with your team",
    
    // Visualizations
    "viz.title": "Data Visualizations",
    "viz.description": "Professional-grade geological analysis tools",
    "viz.stereonet": "Stereonet Plot",
    "viz.stereonet.desc": "Equal-area projection for structural analysis",
    "viz.rose": "Rose Diagram",
    "viz.rose.desc": "Directional data visualization",
    "viz.strat": "Stratigraphic Column",
    "viz.strat.desc": "Vertical sequence representation",
    
    // Team
    "team.title": "Our Team",
    "team.description": "Meet the geology and technology students behind SaDir",
    
    // Footer
    "footer.about": "About",
    "footer.about.desc": "SaDir is a geological intelligence platform developed by students at King Abdulaziz University to simplify fieldwork data collection and analysis.",
    "footer.links": "Quick Links",
    "footer.features": "Features",
    "footer.team": "Team",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with care by KAU Geology & IT Students",
  },
  ar: {
    // Hero
    "hero.title": "SaDir",
    "hero.subtitle": "الدرع السعودي",
    "hero.tagline": "منصة الذكاء الجيولوجي",
    "hero.description": "منصة ذكية مصممة لطلاب الجيولوجيا والمتخصصين لجمع وتحليل وعرض البيانات الميدانية بسهولة.",
    "hero.explore": "استكشف الميزات",
    "hero.learn": "اعرف المزيد",
    "hero.scroll": "مرر للاستكشاف",
    
    // Map Showcase
    "map.title": "الخرائط والتحليل الجيولوجي",
    "map.description": "تصور الهياكل الجيولوجية المعقدة باستخدام أدوات الخرائط التفاعلية. من الستيريونيت إلى الأعمدة الطبقية، حلل بياناتك الميدانية بدقة.",
    "map.legend": "مفتاح الخريطة",
    "map.granite": "جرانيت",
    "map.basalt": "بازلت",
    "map.limestone": "حجر جيري",
    "map.sandstone": "حجر رملي",
    "map.schist": "شست",
    "map.alluvium": "رواسب طميية",
    "map.stereonet": "إسقاط ستيريونيت",
    "map.rose": "مخطط RoseS",
    
    // About
    "about.title": "عن SaDir",
    "about.description":" منصة ذكاء جيولوجي شاملة بناها طلاب، من أجل الطلاب. نحن نفهم تحديات العمل الميداني وإدارة البيانات في الجيولوجيا.",
    "about.unified": "جمع بيانات موحد",
    "about.unified.desc": "جميع قياساتك الميدانية وعينات الصخور والملاحظات في مكان واحد",
    "about.analysis": "تحليل آلي",
    "about.analysis.desc": "إنشاء الستيريونيت ومخططات الوردة والتقارير الإحصائية تلقائياً",
    "about.offline": "العمل بدون اتصال",
    "about.offline.desc": "اعمل في المناطق الصحراوية أو الجبلية النائية، وزامن البيانات عند العودة للاتصال",
    "about.notebook": "دفتر الميدان",
    
    // Features
    "features.title": "مميزات المنصة",
    "features.description": "كل ما تحتاجه للعمل الميداني والتحليل الجيولوجي",
    "features.stereonet": "تحليل الستيريونيت",
    "features.stereonet.desc": "رسم وتحليل بيانات الجيولوجيا البنيوية بإسقاطات متساوية المساحة",
    "features.rose": "مخططات الوردة",
    "features.rose.desc": "تصور البيانات الاتجاهية للفواصل والصدوع والخطوط",
    "features.mapping": "الخرائط الميدانية",
    "features.mapping.desc": "إنشاء خرائط جيولوجية مع مواقع العينات المرتبطة بنظام GPS",
    "features.rocks": "تصنيف الصخور",
    "features.rocks.desc": "تحديد وتصنيف الصخور النارية والرسوبية والمتحولة",
    "features.minerals": "قاعدة بيانات المعادن",
    "features.minerals.desc": "الوصول إلى أدلة شاملة لتحديد المعادن",
    "features.export": "تصدير البيانات",
    "features.export.desc": "تصدير بياناتك بتنسيقات متعددة للتقارير والعروض التقديمية",
    
    // How it Works
    "how.title": "كيف تعمل",
    "how.description": "سير عمل بسيط لجمع وتحليل البيانات الجيولوجية",
    "how.step1": "اجمع البيانات",
    "how.step1.desc": "سجل القياسات والصور والملاحظات في الميدان",
    "how.step2": "حلل",
    "how.step2.desc": "أنشئ التصورات والتحليلات الإحصائية تلقائياً",
    "how.step3": "شارك وصدّر",
    "how.step3.desc": "صدّر التقارير وشارك النتائج مع فريقك",
    
    // Visualizations
    "viz.title": "تصور البيانات",
    "viz.description": "أدوات تحليل جيولوجي احترافية",
    "viz.stereonet": "رسم الستيريونيت",
    "viz.stereonet.desc": "إسقاط متساوي المساحة للتحليل البنيوي",
    "viz.rose": "مخطط الوردة",
    "viz.rose.desc": "تصور البيانات الاتجاهية",
    "viz.strat": "العمود الطبقي",
    "viz.strat.desc": "تمثيل التتابع الرأسي",
    
    // Team
    "team.title": "فريقنا",
    "team.description": "تعرف على طلاب الجيولوجيا والتقنية خلف صادر",
    
    // Footer
    "footer.about": "عن المنصة",
    "footer.about.desc": "صادر هي منصة ذكاء جيولوجي طورها طلاب جامعة الملك عبدالعزيز لتبسيط جمع وتحليل بيانات العمل الميداني.",
    "footer.links": "روابط سريعة",
    "footer.features": "الميزات",
    "footer.team": "الفريق",
    "footer.contact": "تواصل معنا",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.built": "بُني بعناية من طلاب الجيولوجيا وتقنية المعلومات بجامعة الملك عبدالعزيز",
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "en" || saved === "ar")) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  const dir = language === "ar" ? "rtl" : "ltr"

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
