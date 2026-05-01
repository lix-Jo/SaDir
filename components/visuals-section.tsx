"use client"

import { Map, PieChart, BarChart3, Compass } from "lucide-react"

const visuals = [
  {
    icon: Map,
    title: "Interactive Map",
    description: "GPS-plotted samples and outcrops with geological boundaries"
  },
  {
    icon: PieChart,
    title: "Rose Diagram",
    description: "Directional data visualization for joint and fracture analysis"
  },
  {
    icon: BarChart3,
    title: "Stereonet",
    description: "Equal-area projections for structural geology analysis"
  },
  {
    icon: Compass,
    title: "Digital Compass",
    description: "Precise strike and dip measurements with digital recording"
  }
]

// SVG Components for visualizations
function MapVisualization() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full" fill="none">
      {/* Geological boundaries */}
      <path d="M0 90 Q50 70 100 80 T200 60" stroke="currentColor" strokeWidth="2" className="text-primary/50"/>
      <path d="M0 110 Q60 90 120 100 T200 80" stroke="currentColor" strokeWidth="2" className="text-primary/30"/>
      
      {/* Contour lines */}
      <path d="M20 40 Q60 30 100 45 T180 35" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/20"/>
      <path d="M30 55 Q70 45 110 60 T190 50" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/20"/>
      
      {/* Sample points */}
      <circle cx="50" cy="60" r="6" className="fill-primary/80"/>
      <circle cx="95" cy="75" r="6" className="fill-primary/80"/>
      <circle cx="145" cy="65" r="6" className="fill-primary/80"/>
      
      {/* Labels */}
      <text x="50" y="80" fontSize="9" textAnchor="middle" className="fill-muted-foreground">S1</text>
      <text x="95" y="95" fontSize="9" textAnchor="middle" className="fill-muted-foreground">S2</text>
      <text x="145" y="85" fontSize="9" textAnchor="middle" className="fill-muted-foreground">S3</text>
    </svg>
  )
}

function RoseDiagramVisualization() {
  return (
    <svg viewBox="0 0 140 140" className="w-full h-full" fill="none">
      <circle cx="70" cy="70" r="60" stroke="currentColor" strokeWidth="1" className="text-border"/>
      <circle cx="70" cy="70" r="40" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/20"/>
      <circle cx="70" cy="70" r="20" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/20"/>
      
      {/* Rose petals */}
      <path d="M70 70 L75 20 L65 20 Z" className="fill-primary/70"/>
      <path d="M70 70 L100 35 L95 45 Z" className="fill-primary/50"/>
      <path d="M70 70 L115 65 L110 75 Z" className="fill-primary/60"/>
      <path d="M70 70 L50 25 L45 38 Z" className="fill-primary/45"/>
      <path d="M70 70 L30 55 L28 68 Z" className="fill-primary/40"/>
      <path d="M70 70 L45 110 L55 115 Z" className="fill-primary/35"/>
      <path d="M70 70 L95 115 L85 112 Z" className="fill-primary/40"/>
      
      {/* N marker */}
      <text x="66" y="8" fontSize="11" fontWeight="500" className="fill-foreground">N</text>
    </svg>
  )
}

function StereonetVisualization() {
  return (
    <svg viewBox="0 0 140 140" className="w-full h-full" fill="none">
      {/* Outer circle */}
      <circle cx="70" cy="70" r="60" stroke="currentColor" strokeWidth="1.5" className="text-border"/>
      
      {/* Great circles */}
      <ellipse cx="70" cy="70" rx="60" ry="20" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/25"/>
      <ellipse cx="70" cy="70" rx="60" ry="40" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/25"/>
      
      {/* Small circles */}
      <ellipse cx="70" cy="70" rx="35" ry="60" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/20"/>
      
      {/* Axes */}
      <line x1="70" y1="10" x2="70" y2="130" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/30"/>
      <line x1="10" y1="70" x2="130" y2="70" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/30"/>
      
      {/* Poles */}
      <circle cx="55" cy="45" r="4" className="fill-primary"/>
      <circle cx="75" cy="40" r="4" className="fill-primary"/>
      <circle cx="88" cy="50" r="4" className="fill-primary"/>
      <circle cx="62" cy="58" r="4" className="fill-primary"/>
      <circle cx="80" cy="55" r="4" className="fill-primary"/>
      <circle cx="70" cy="48" r="4" className="fill-primary"/>
      <circle cx="95" cy="62" r="4" className="fill-primary"/>
      <circle cx="50" cy="55" r="4" className="fill-primary"/>
    </svg>
  )
}

function CompassVisualization() {
  return (
    <svg viewBox="0 0 140 140" className="w-full h-full" fill="none">
      <circle cx="70" cy="70" r="60" stroke="currentColor" strokeWidth="1.5" className="text-border"/>
      <circle cx="70" cy="70" r="52" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/20"/>
      
      {/* Degree marks */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg - 90) * (Math.PI / 180)
        const x1 = 70 + 50 * Math.cos(rad)
        const y1 = 70 + 50 * Math.sin(rad)
        const x2 = 70 + 60 * Math.cos(rad)
        const y2 = 70 + 60 * Math.sin(rad)
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.5" className="text-primary/40"/>
      })}
      
      {/* Needle */}
      <path d="M70 20 L76 70 L70 78 L64 70 Z" className="fill-primary"/>
      <path d="M70 120 L76 70 L70 62 L64 70 Z" className="fill-muted-foreground/25"/>
      
      <circle cx="70" cy="70" r="6" className="fill-primary"/>
      
      {/* Labels */}
      <text x="66" y="12" fontSize="10" fontWeight="500" className="fill-foreground">N</text>
      <text x="122" y="74" fontSize="9" className="fill-muted-foreground">E</text>
      <text x="66" y="135" fontSize="9" className="fill-muted-foreground">S</text>
      <text x="6" y="74" fontSize="9" className="fill-muted-foreground">W</text>
    </svg>
  )
}

export function VisualsSection() {
  const visualComponents = [MapVisualization, RoseDiagramVisualization, StereonetVisualization, CompassVisualization]
  
  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            Visualization Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Powerful tools for geological data analysis and field mapping
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visuals.map((visual, index) => {
            const VisualComponent = visualComponents[index]
            return (
              <div
                key={visual.title}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-sm transition-all duration-300"
              >
                {/* Visualization */}
                <div className="aspect-square p-8 flex items-center justify-center bg-secondary/30">
                  <div className="w-full h-full">
                    <VisualComponent />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 border-t border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <visual.icon className="w-4 h-4 text-primary" />
                    <h3 className="font-medium text-foreground">{visual.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{visual.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
