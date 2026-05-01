"use client"

import { MapPin, Layers, Mountain, Compass } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

// Detailed Geological Map SVG with rocks and formations
function DetailedGeologicalMap() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-auto rounded-xl">
      <defs>
        {/* Rock patterns */}
        <pattern id="granite-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill="#c9a66b"/>
          <circle cx="5" cy="5" r="1.5" fill="#8b7355" opacity="0.6"/>
          <circle cx="15" cy="12" r="1" fill="#8b7355" opacity="0.5"/>
          <circle cx="10" cy="18" r="1.2" fill="#8b7355" opacity="0.4"/>
        </pattern>
        <pattern id="basalt-pattern" patternUnits="userSpaceOnUse" width="15" height="15">
          <rect width="15" height="15" fill="#4a5568"/>
          <polygon points="0,0 7.5,5 0,10" fill="#3d4852" opacity="0.5"/>
          <polygon points="15,5 7.5,10 15,15" fill="#3d4852" opacity="0.5"/>
        </pattern>
        <pattern id="limestone-pattern" patternUnits="userSpaceOnUse" width="25" height="25">
          <rect width="25" height="25" fill="#e8dcc8"/>
          <line x1="0" y1="12" x2="25" y2="12" stroke="#d4c4a8" strokeWidth="0.5"/>
          <line x1="0" y1="6" x2="25" y2="6" stroke="#d4c4a8" strokeWidth="0.3"/>
          <line x1="0" y1="18" x2="25" y2="18" stroke="#d4c4a8" strokeWidth="0.3"/>
        </pattern>
        <pattern id="sandstone-pattern" patternUnits="userSpaceOnUse" width="30" height="30">
          <rect width="30" height="30" fill="#deb887"/>
          <circle cx="5" cy="8" r="0.8" fill="#c9a66b" opacity="0.5"/>
          <circle cx="15" cy="5" r="0.6" fill="#c9a66b" opacity="0.4"/>
          <circle cx="25" cy="15" r="0.7" fill="#c9a66b" opacity="0.5"/>
          <circle cx="10" cy="22" r="0.5" fill="#c9a66b" opacity="0.4"/>
          <circle cx="20" cy="28" r="0.6" fill="#c9a66b" opacity="0.5"/>
        </pattern>
        <pattern id="schist-pattern" patternUnits="userSpaceOnUse" width="20" height="10">
          <rect width="20" height="10" fill="#718096"/>
          <line x1="0" y1="5" x2="20" y2="5" stroke="#5a6a7e" strokeWidth="0.8"/>
          <line x1="0" y1="2" x2="20" y2="2" stroke="#5a6a7e" strokeWidth="0.4"/>
          <line x1="0" y1="8" x2="20" y2="8" stroke="#5a6a7e" strokeWidth="0.4"/>
        </pattern>
        <pattern id="alluvium-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill="#f0e6d3"/>
          <circle cx="5" cy="10" r="2" fill="#e0d5c0" opacity="0.6"/>
          <circle cx="15" cy="5" r="1.5" fill="#e0d5c0" opacity="0.5"/>
          <circle cx="12" cy="16" r="1.8" fill="#e0d5c0" opacity="0.6"/>
        </pattern>
        
        {/* Gradient for mountains */}
        <linearGradient id="mountain-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6b7280" />
          <stop offset="100%" stopColor="#9ca3af" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="800" height="500" className="fill-card"/>
      
      {/* Geological formations */}
      {/* Main granite body */}
      <path d="M50 300 Q100 250 200 280 Q300 200 400 250 Q500 180 550 220 Q600 200 650 250 Q700 230 750 280 L750 450 L50 450 Z" fill="url(#granite-pattern)"/>
      
      {/* Limestone layer */}
      <path d="M0 180 Q80 150 150 170 Q250 130 350 160 Q450 120 550 150 Q650 130 750 160 Q780 150 800 165 L800 280 Q700 250 600 270 Q500 230 400 260 Q300 220 200 250 Q100 230 0 260 Z" fill="url(#limestone-pattern)"/>
      
      {/* Sandstone formation */}
      <path d="M0 100 Q100 70 200 90 Q300 50 400 80 Q500 40 600 70 Q700 50 800 80 L800 180 Q700 150 600 160 Q500 130 400 150 Q300 120 200 140 Q100 120 0 150 Z" fill="url(#sandstone-pattern)"/>
      
      {/* Basalt intrusion */}
      <path d="M450 280 Q480 200 500 250 Q520 180 540 230 Q560 200 580 260 Q600 240 620 300 Q640 280 650 340 L620 380 L500 380 L470 340 Z" fill="url(#basalt-pattern)"/>
      
      {/* Schist body */}
      <path d="M100 350 Q150 320 200 350 Q250 300 300 340 Q350 310 380 360 L360 420 L120 420 Z" fill="url(#schist-pattern)"/>
      
      {/* Alluvium in valleys */}
      <path d="M200 420 Q250 400 300 420 Q350 390 400 415 Q450 400 500 420 L520 450 L180 450 Z" fill="url(#alluvium-pattern)"/>
      
      {/* Fault lines */}
      <path d="M300 50 Q320 150 350 250 Q370 350 380 450" fill="none" stroke="#1a202c" strokeWidth="2.5" strokeDasharray="12,6" opacity="0.7"/>
      <path d="M550 80 Q530 180 510 280 Q490 380 500 450" fill="none" stroke="#1a202c" strokeWidth="2.5" strokeDasharray="12,6" opacity="0.7"/>
      
      {/* Fold axis */}
      <path d="M150 200 Q250 180 350 200 Q450 220 550 200" fill="none" stroke="#2d3748" strokeWidth="2" opacity="0.6"/>
      <polygon points="550,200 540,195 540,205" fill="#2d3748" opacity="0.6"/>
      
      {/* Strike and dip symbols */}
      <g transform="translate(180, 220)">
        <line x1="-12" y1="0" x2="12" y2="0" stroke="#1a202c" strokeWidth="2"/>
        <line x1="0" y1="0" x2="0" y2="10" stroke="#1a202c" strokeWidth="2"/>
        <text x="5" y="18" fontSize="10" className="fill-foreground/70">35</text>
      </g>
      <g transform="translate(420, 180)">
        <line x1="-12" y1="0" x2="12" y2="0" stroke="#1a202c" strokeWidth="2"/>
        <line x1="0" y1="0" x2="0" y2="10" stroke="#1a202c" strokeWidth="2"/>
        <text x="5" y="18" fontSize="10" className="fill-foreground/70">42</text>
      </g>
      <g transform="translate(620, 220)">
        <line x1="-12" y1="0" x2="12" y2="0" stroke="#1a202c" strokeWidth="2"/>
        <line x1="0" y1="0" x2="0" y2="10" stroke="#1a202c" strokeWidth="2"/>
        <text x="5" y="18" fontSize="10" className="fill-foreground/70">28</text>
      </g>
      
      {/* Sample points */}
      <g className="text-primary">
        <circle cx="150" cy="300" r="8" fill="currentColor" opacity="0.9"/>
        <text x="160" y="295" fontSize="11" className="fill-foreground">S1</text>
        
        <circle cx="280" cy="260" r="8" fill="currentColor" opacity="0.9"/>
        <text x="290" y="255" fontSize="11" className="fill-foreground">S2</text>
        
        <circle cx="380" cy="320" r="8" fill="currentColor" opacity="0.9"/>
        <text x="390" y="315" fontSize="11" className="fill-foreground">S3</text>
        
        <circle cx="520" cy="280" r="8" fill="currentColor" opacity="0.9"/>
        <text x="530" y="275" fontSize="11" className="fill-foreground">S4</text>
        
        <circle cx="680" cy="300" r="8" fill="currentColor" opacity="0.9"/>
        <text x="690" y="295" fontSize="11" className="fill-foreground">S5</text>
      </g>
      
      {/* Mountain peaks illustration at top */}
      <path d="M0 60 L30 30 L60 50 L100 15 L140 45 L180 20 L220 55 L260 25 L300 50 L340 10 L380 40 L420 20 L460 50 L500 30 L540 55 L580 25 L620 45 L660 15 L700 40 L740 25 L780 50 L800 35 L800 0 L0 0 Z" fill="url(#mountain-grad)" opacity="0.15"/>
      
      {/* Contour lines */}
      <path d="M0 350 Q200 320 400 350 Q600 330 800 360" fill="none" stroke="#4a5568" strokeWidth="0.5" opacity="0.3"/>
      <path d="M0 370 Q200 340 400 370 Q600 350 800 380" fill="none" stroke="#4a5568" strokeWidth="0.5" opacity="0.3"/>
      <path d="M0 390 Q200 360 400 390 Q600 370 800 400" fill="none" stroke="#4a5568" strokeWidth="0.5" opacity="0.3"/>
      
      {/* Scale bar */}
      <g transform="translate(600, 470)">
        <rect x="0" y="0" width="150" height="6" fill="#1a202c" opacity="0.8"/>
        <rect x="0" y="0" width="50" height="6" fill="#f0e6d3"/>
        <rect x="100" y="0" width="50" height="6" fill="#f0e6d3"/>
        <text x="0" y="18" fontSize="10" className="fill-foreground/70">0</text>
        <text x="45" y="18" fontSize="10" className="fill-foreground/70">1km</text>
        <text x="95" y="18" fontSize="10" className="fill-foreground/70">2km</text>
        <text x="140" y="18" fontSize="10" className="fill-foreground/70">3km</text>
      </g>
      
      {/* North arrow */}
      <g transform="translate(50, 70)">
        <polygon points="0,30 10,0 20,30 10,25" className="fill-foreground/80"/>
        <text x="5" y="45" fontSize="12" fontWeight="bold" className="fill-foreground">N</text>
      </g>
    </svg>
  )
}

// Stereonet projection
function StereonetDiagram() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Outer circle */}
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="2" className="text-border"/>
      
      {/* Great circles */}
      <ellipse cx="100" cy="100" rx="90" ry="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/30"/>
      <ellipse cx="100" cy="100" rx="90" ry="50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/30"/>
      <ellipse cx="100" cy="100" rx="90" ry="70" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/30"/>
      
      {/* Small circles */}
      <ellipse cx="100" cy="100" rx="30" ry="90" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/30"/>
      <ellipse cx="100" cy="100" rx="50" ry="90" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/30"/>
      <ellipse cx="100" cy="100" rx="70" ry="90" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/30"/>
      
      {/* Axes */}
      <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/40"/>
      <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/40"/>
      
      {/* Poles to planes - scattered points */}
      <circle cx="75" cy="55" r="4" className="fill-primary"/>
      <circle cx="85" cy="65" r="4" className="fill-primary"/>
      <circle cx="90" cy="50" r="4" className="fill-primary"/>
      <circle cx="110" cy="45" r="4" className="fill-primary"/>
      <circle cx="120" cy="60" r="4" className="fill-primary"/>
      <circle cx="130" cy="55" r="4" className="fill-primary"/>
      <circle cx="70" cy="75" r="4" className="fill-primary"/>
      <circle cx="95" cy="70" r="4" className="fill-primary"/>
      <circle cx="105" cy="62" r="4" className="fill-primary"/>
      <circle cx="115" cy="72" r="4" className="fill-primary"/>
      <circle cx="80" cy="80" r="4" className="fill-primary"/>
      <circle cx="125" cy="68" r="4" className="fill-primary"/>
      
      {/* N marker */}
      <text x="95" y="8" fontSize="12" fontWeight="bold" className="fill-foreground">N</text>
    </svg>
  )
}

// Rose diagram
function RoseDiagram() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Circles */}
      <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="1" className="text-border"/>
      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/30"/>
      <circle cx="100" cy="100" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/30"/>
      
      {/* Rose petals */}
      <path d="M100 100 L105 30 L95 30 Z" className="fill-primary/80"/>
      <path d="M100 100 L115 35 L125 50 Z" className="fill-primary/60"/>
      <path d="M100 100 L130 55 L140 70 Z" className="fill-primary/70"/>
      <path d="M100 100 L145 85 L150 100 Z" className="fill-primary/50"/>
      <path d="M100 100 L85 35 L75 50 Z" className="fill-primary/55"/>
      <path d="M100 100 L70 55 L60 70 Z" className="fill-primary/45"/>
      <path d="M100 100 L55 85 L50 100 Z" className="fill-primary/40"/>
      <path d="M100 100 L65 140 L80 155 Z" className="fill-primary/50"/>
      <path d="M100 100 L135 140 L120 155 Z" className="fill-primary/55"/>
      
      {/* Cardinal directions */}
      <text x="95" y="12" fontSize="11" fontWeight="bold" className="fill-foreground">N</text>
      <text x="185" y="105" fontSize="10" className="fill-muted-foreground">E</text>
      <text x="95" y="197" fontSize="10" className="fill-muted-foreground">S</text>
      <text x="3" y="105" fontSize="10" className="fill-muted-foreground">W</text>
    </svg>
  )
}

export function MapShowcaseSection() {
  const { t, dir, language } = useLanguage()
  
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden" dir={dir}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              {language === "ar" ? "التصور الجيولوجي" : "Geological Visualization"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            {t("map.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("map.description")}
          </p>
        </div>

        {/* Main Geological Map */}
        <div className="mb-16">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-secondary/50 px-6 py-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mountain className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">Geological Map - Arabian Shield Region</span>
              </div>
              <span className="text-sm text-muted-foreground">Scale 1:50,000</span>
            </div>
            <div className="p-6 bg-card">
              <DetailedGeologicalMap />
            </div>
            {/* Legend */}
            <div className="px-6 py-4 border-t border-border bg-secondary/30">
              <div className="flex flex-wrap gap-6 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded" style={{ backgroundColor: '#c9a66b' }}/>
                  <span className="text-sm text-muted-foreground">{t("map.granite")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded" style={{ backgroundColor: '#4a5568' }}/>
                  <span className="text-sm text-muted-foreground">{t("map.basalt")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded" style={{ backgroundColor: '#e8dcc8' }}/>
                  <span className="text-sm text-muted-foreground">{t("map.limestone")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded" style={{ backgroundColor: '#deb887' }}/>
                  <span className="text-sm text-muted-foreground">{t("map.sandstone")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded" style={{ backgroundColor: '#718096' }}/>
                  <span className="text-sm text-muted-foreground">{t("map.schist")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded" style={{ backgroundColor: '#f0e6d3' }}/>
                  <span className="text-sm text-muted-foreground">{t("map.alluvium")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stereonet and Rose Diagram */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Stereonet */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-secondary/50 px-6 py-4 border-b border-border flex items-center gap-3">
              <Layers className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{t("map.stereonet")}</span>
            </div>
            <div className="p-8 flex justify-center bg-card">
              <div className="w-48 h-48">
                <StereonetDiagram />
              </div>
            </div>
            <div className="px-6 py-3 border-t border-border bg-secondary/30">
              <p className="text-sm text-muted-foreground text-center">
                Equal-area lower hemisphere projection - n=12 poles
              </p>
            </div>
          </div>

          {/* Rose Diagram */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-secondary/50 px-6 py-4 border-b border-border flex items-center gap-3">
              <Compass className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{t("map.rose")}</span>
            </div>
            <div className="p-8 flex justify-center bg-card">
              <div className="w-48 h-48">
                <RoseDiagram />
              </div>
            </div>
            <div className="px-6 py-3 border-t border-border bg-secondary/30">
              <p className="text-sm text-muted-foreground text-center">
                Joint orientation analysis - Primary trend N-NE
              </p>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-medium text-foreground mb-2">GPS Integration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Automatic coordinate capture and real-time position plotting on your geological maps.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-medium text-foreground mb-2">Layer Management</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Organize formations, structures, and sample points in customizable layers.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Mountain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-medium text-foreground mb-2">Export Ready</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Export to SVG, PDF, or GeoJSON for publications and GIS software.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
