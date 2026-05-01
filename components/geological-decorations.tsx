"use client"

export function MountainSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Back mountain */}
      <path 
        d="M50 200 L150 60 L200 120 L250 80 L350 200 Z" 
        fill="currentColor" 
        opacity="0.3"
      />
      {/* Front mountain */}
      <path 
        d="M0 200 L100 80 L140 120 L200 40 L260 100 L300 60 L400 200 Z" 
        fill="currentColor" 
        opacity="0.5"
      />
      {/* Snow caps */}
      <path 
        d="M200 40 L180 80 L190 75 L200 85 L210 75 L220 80 Z" 
        fill="currentColor" 
        opacity="0.8"
      />
    </svg>
  )
}

export function ContourLinesSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 250 Q100 200 200 220 T350 180" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      <path d="M30 230 Q120 180 200 200 T370 160" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
      <path d="M40 210 Q140 160 200 180 T360 140" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <path d="M60 190 Q150 140 200 160 T340 120" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
      <path d="M80 170 Q160 120 200 140 T320 100" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
      {/* Peak marker */}
      <circle cx="200" cy="80" r="4" fill="currentColor" opacity="0.9"/>
      <text x="210" y="85" fontSize="12" fill="currentColor" opacity="0.7">1250m</text>
    </svg>
  )
}

export function GeologicalMapSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Geological formations */}
      <path d="M0 150 Q50 100 100 130 T200 110 T300 140 T400 120 V300 H0 Z" fill="currentColor" opacity="0.2"/>
      <path d="M0 180 Q60 140 120 160 T220 140 T320 170 T400 150 V300 H0 Z" fill="currentColor" opacity="0.3"/>
      <path d="M0 220 Q80 180 150 200 T250 180 T350 210 T400 190 V300 H0 Z" fill="currentColor" opacity="0.4"/>
      
      {/* Fault line */}
      <path d="M180 50 L200 300" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" opacity="0.6"/>
      
      {/* Strike and dip symbols */}
      <g transform="translate(100, 100)">
        <line x1="-15" y1="0" x2="15" y2="0" stroke="currentColor" strokeWidth="2" opacity="0.7"/>
        <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="2" opacity="0.7"/>
        <text x="5" y="20" fontSize="10" fill="currentColor" opacity="0.6">35°</text>
      </g>
      
      <g transform="translate(280, 150)">
        <line x1="-15" y1="0" x2="15" y2="0" stroke="currentColor" strokeWidth="2" opacity="0.7"/>
        <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="2" opacity="0.7"/>
        <text x="5" y="20" fontSize="10" fill="currentColor" opacity="0.6">42°</text>
      </g>
      
      {/* Compass */}
      <g transform="translate(350, 50)">
        <circle cx="0" cy="0" r="20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
        <path d="M0 -18 L4 5 L0 0 L-4 5 Z" fill="currentColor" opacity="0.7"/>
        <text x="-3" y="-22" fontSize="10" fill="currentColor" opacity="0.7">N</text>
      </g>
    </svg>
  )
}

export function StratigraphyColumnSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Column outline */}
      <rect x="20" y="10" width="60" height="280" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
      
      {/* Layers with different patterns */}
      <rect x="20" y="10" width="60" height="40" fill="currentColor" opacity="0.2"/>
      <rect x="20" y="50" width="60" height="50" fill="currentColor" opacity="0.35"/>
      <rect x="20" y="100" width="60" height="35" fill="currentColor" opacity="0.25"/>
      <rect x="20" y="135" width="60" height="45" fill="currentColor" opacity="0.4"/>
      <rect x="20" y="180" width="60" height="55" fill="currentColor" opacity="0.3"/>
      <rect x="20" y="235" width="60" height="55" fill="currentColor" opacity="0.45"/>
      
      {/* Sandstone pattern */}
      <g opacity="0.5">
        <circle cx="35" cy="25" r="2" fill="currentColor"/>
        <circle cx="50" cy="30" r="1.5" fill="currentColor"/>
        <circle cx="65" cy="22" r="2" fill="currentColor"/>
        <circle cx="40" cy="38" r="1" fill="currentColor"/>
        <circle cx="55" cy="40" r="1.5" fill="currentColor"/>
      </g>
      
      {/* Limestone pattern */}
      <g opacity="0.4">
        <path d="M25 160 Q35 155 45 160 Q55 165 65 160 Q72 156 75 160" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M25 170 Q35 165 45 170 Q55 175 65 170 Q72 166 75 170" stroke="currentColor" strokeWidth="1" fill="none"/>
      </g>
      
      {/* Layer labels */}
      <text x="85" y="35" fontSize="8" fill="currentColor" opacity="0.6">Ss</text>
      <text x="85" y="80" fontSize="8" fill="currentColor" opacity="0.6">Sh</text>
      <text x="85" y="120" fontSize="8" fill="currentColor" opacity="0.6">Ls</text>
      <text x="85" y="160" fontSize="8" fill="currentColor" opacity="0.6">Dol</text>
      <text x="85" y="210" fontSize="8" fill="currentColor" opacity="0.6">Sh</text>
      <text x="85" y="265" fontSize="8" fill="currentColor" opacity="0.6">Gn</text>
    </svg>
  )
}

export function CompassSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      
      {/* Cardinal directions */}
      <text x="46" y="15" fontSize="12" fill="currentColor" opacity="0.8" fontWeight="bold">N</text>
      <text x="47" y="95" fontSize="10" fill="currentColor" opacity="0.6">S</text>
      <text x="85" y="54" fontSize="10" fill="currentColor" opacity="0.6">E</text>
      <text x="5" y="54" fontSize="10" fill="currentColor" opacity="0.6">W</text>
      
      {/* Degree markings */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
        const rad = (deg - 90) * (Math.PI / 180)
        const x1 = 50 + 40 * Math.cos(rad)
        const y1 = 50 + 40 * Math.sin(rad)
        const x2 = 50 + 45 * Math.cos(rad)
        const y2 = 50 + 45 * Math.sin(rad)
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      })}
      
      {/* Needle */}
      <path d="M50 20 L54 50 L50 55 L46 50 Z" fill="currentColor" opacity="0.8"/>
      <path d="M50 80 L54 50 L50 45 L46 50 Z" fill="currentColor" opacity="0.3"/>
      <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.6"/>
    </svg>
  )
}

export function RockHammerSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Handle */}
      <rect x="45" y="35" width="10" height="55" rx="2" fill="currentColor" opacity="0.5"/>
      
      {/* Head */}
      <path d="M30 25 L70 25 L75 35 L70 45 L30 45 L25 35 Z" fill="currentColor" opacity="0.7"/>
      
      {/* Pick end */}
      <path d="M70 30 L90 20 L92 25 L75 38 Z" fill="currentColor" opacity="0.7"/>
      
      {/* Flat end detail */}
      <line x1="30" y1="28" x2="30" y2="42" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
    </svg>
  )
}
