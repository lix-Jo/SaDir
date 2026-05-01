"use client"

export function GeologicalMapSVG({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 800 500" 
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Granite pattern */}
        <pattern id="granite" patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill="#c9a66b"/>
          <circle cx="5" cy="5" r="1.5" fill="#8b7355"/>
          <circle cx="15" cy="12" r="1" fill="#6b5344"/>
          <circle cx="10" cy="18" r="1.2" fill="#8b7355"/>
          <circle cx="2" cy="14" r="0.8" fill="#5c4a3a"/>
        </pattern>
        
        {/* Sandstone pattern */}
        <pattern id="sandstone" patternUnits="userSpaceOnUse" width="30" height="8">
          <rect width="30" height="8" fill="#d4a574"/>
          <line x1="0" y1="4" x2="30" y2="4" stroke="#c9956a" strokeWidth="0.5"/>
        </pattern>
        
        {/* Basalt pattern */}
        <pattern id="basalt" patternUnits="userSpaceOnUse" width="15" height="15">
          <rect width="15" height="15" fill="#4a5568"/>
          <polygon points="7.5,0 15,15 0,15" fill="#3d4452" opacity="0.5"/>
        </pattern>
        
        {/* Limestone pattern */}
        <pattern id="limestone" patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill="#e8dcc8"/>
          <rect x="2" y="2" width="6" height="4" fill="#d4c9b5" rx="1"/>
          <rect x="12" y="10" width="5" height="3" fill="#d4c9b5" rx="1"/>
          <rect x="4" y="14" width="4" height="3" fill="#d4c9b5" rx="1"/>
        </pattern>
        
        {/* Metamorphic pattern */}
        <pattern id="metamorphic" patternUnits="userSpaceOnUse" width="25" height="10">
          <rect width="25" height="10" fill="#718096"/>
          <path d="M0 5 Q6 2 12.5 5 T25 5" fill="none" stroke="#5a6577" strokeWidth="1"/>
        </pattern>
        
        {/* Alluvium pattern */}
        <pattern id="alluvium" patternUnits="userSpaceOnUse" width="12" height="12">
          <rect width="12" height="12" fill="#f0e6d3"/>
          <circle cx="3" cy="3" r="1" fill="#d4c9b5"/>
          <circle cx="9" cy="8" r="1.5" fill="#c9bda8"/>
          <circle cx="6" cy="10" r="0.8" fill="#d4c9b5"/>
        </pattern>
      </defs>
      
      {/* Map background */}
      <rect width="800" height="500" fill="url(#sandstone)" opacity="0.3"/>
      
      {/* Geological formations */}
      {/* Arabian Shield - Precambrian basement */}
      <path 
        d="M50 100 Q150 80 250 120 Q350 100 400 150 Q450 120 500 180 Q400 250 300 220 Q200 280 100 200 Z" 
        fill="url(#granite)" 
        stroke="#8b7355" 
        strokeWidth="2"
        opacity="0.9"
      />
      
      {/* Volcanic basalt region */}
      <path 
        d="M500 50 Q600 30 700 80 Q750 150 720 220 Q650 180 580 200 Q520 150 500 100 Z" 
        fill="url(#basalt)" 
        stroke="#3d4452" 
        strokeWidth="2"
        opacity="0.9"
      />
      
      {/* Sedimentary basin */}
      <path 
        d="M100 300 Q200 280 350 320 Q450 300 550 350 Q500 420 400 400 Q250 450 150 380 Z" 
        fill="url(#limestone)" 
        stroke="#c9bda8" 
        strokeWidth="2"
        opacity="0.9"
      />
      
      {/* Metamorphic belt */}
      <path 
        d="M550 250 Q650 220 750 280 Q780 350 720 400 Q650 380 600 350 Q550 320 550 280 Z" 
        fill="url(#metamorphic)" 
        stroke="#5a6577" 
        strokeWidth="2"
        opacity="0.9"
      />
      
      {/* Alluvial deposits */}
      <path 
        d="M200 380 Q280 360 350 400 Q400 450 350 480 Q280 470 220 450 Q180 420 200 380 Z" 
        fill="url(#alluvium)" 
        stroke="#c9bda8" 
        strokeWidth="1.5"
        opacity="0.85"
      />
      
      {/* Fault lines */}
      <path 
        d="M100 150 Q200 180 300 160 Q400 200 500 170" 
        fill="none" 
        stroke="#1a202c" 
        strokeWidth="2.5"
        strokeDasharray="8 4"
      />
      <path 
        d="M450 100 Q500 200 480 300 Q500 380 520 450" 
        fill="none" 
        stroke="#1a202c" 
        strokeWidth="2.5"
        strokeDasharray="8 4"
      />
      
      {/* Strike and dip symbols */}
      <g transform="translate(180, 150)">
        <line x1="-12" y1="0" x2="12" y2="0" stroke="#1a202c" strokeWidth="2"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="#1a202c" strokeWidth="2"/>
        <text x="5" y="18" fontSize="10" fill="#1a202c" fontFamily="monospace">35</text>
      </g>
      
      <g transform="translate(350, 180) rotate(-30)">
        <line x1="-12" y1="0" x2="12" y2="0" stroke="#1a202c" strokeWidth="2"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="#1a202c" strokeWidth="2"/>
        <text x="5" y="18" fontSize="10" fill="#1a202c" fontFamily="monospace">45</text>
      </g>
      
      <g transform="translate(600, 150) rotate(15)">
        <line x1="-12" y1="0" x2="12" y2="0" stroke="#1a202c" strokeWidth="2"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="#1a202c" strokeWidth="2"/>
        <text x="5" y="18" fontSize="10" fill="#1a202c" fontFamily="monospace">28</text>
      </g>
      
      {/* Sample points */}
      <g>
        <circle cx="200" cy="160" r="6" fill="#c9a66b" stroke="#1a202c" strokeWidth="2"/>
        <text x="210" y="155" fontSize="9" fill="#1a202c" fontFamily="monospace">SP-01</text>
      </g>
      <g>
        <circle cx="400" cy="200" r="6" fill="#c9a66b" stroke="#1a202c" strokeWidth="2"/>
        <text x="410" y="195" fontSize="9" fill="#1a202c" fontFamily="monospace">SP-02</text>
      </g>
      <g>
        <circle cx="620" cy="120" r="6" fill="#4a5568" stroke="#1a202c" strokeWidth="2"/>
        <text x="630" y="115" fontSize="9" fill="#1a202c" fontFamily="monospace">SP-03</text>
      </g>
      <g>
        <circle cx="300" cy="350" r="6" fill="#e8dcc8" stroke="#1a202c" strokeWidth="2"/>
        <text x="310" y="345" fontSize="9" fill="#1a202c" fontFamily="monospace">SP-04</text>
      </g>
      
      {/* Contour lines */}
      <path 
        d="M50 350 Q150 330 250 360 Q350 340 450 370" 
        fill="none" 
        stroke="#8b7355" 
        strokeWidth="0.8"
        opacity="0.5"
      />
      <path 
        d="M50 380 Q150 360 250 390 Q350 370 450 400" 
        fill="none" 
        stroke="#8b7355" 
        strokeWidth="0.8"
        opacity="0.5"
      />
      
      {/* Scale bar */}
      <g transform="translate(600, 450)">
        <rect x="0" y="0" width="150" height="8" fill="#1a202c"/>
        <rect x="0" y="0" width="50" height="8" fill="#fff"/>
        <rect x="100" y="0" width="50" height="8" fill="#fff"/>
        <text x="0" y="22" fontSize="10" fill="currentColor" fontFamily="monospace">0</text>
        <text x="45" y="22" fontSize="10" fill="currentColor" fontFamily="monospace">5</text>
        <text x="95" y="22" fontSize="10" fill="currentColor" fontFamily="monospace">10</text>
        <text x="140" y="22" fontSize="10" fill="currentColor" fontFamily="monospace">15 km</text>
      </g>
      
      {/* North arrow */}
      <g transform="translate(750, 50)">
        <polygon points="0,-25 -8,10 0,5 8,10" fill="#1a202c"/>
        <text x="-5" y="-30" fontSize="14" fill="currentColor" fontWeight="bold" fontFamily="serif">N</text>
      </g>
      
      {/* Grid lines */}
      <g stroke="#1a202c" strokeWidth="0.3" opacity="0.2">
        <line x1="0" y1="100" x2="800" y2="100"/>
        <line x1="0" y1="200" x2="800" y2="200"/>
        <line x1="0" y1="300" x2="800" y2="300"/>
        <line x1="0" y1="400" x2="800" y2="400"/>
        <line x1="100" y1="0" x2="100" y2="500"/>
        <line x1="200" y1="0" x2="200" y2="500"/>
        <line x1="300" y1="0" x2="300" y2="500"/>
        <line x1="400" y1="0" x2="400" y2="500"/>
        <line x1="500" y1="0" x2="500" y2="500"/>
        <line x1="600" y1="0" x2="600" y2="500"/>
        <line x1="700" y1="0" x2="700" y2="500"/>
      </g>
    </svg>
  )
}

export function CrossSectionSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 250" className={className}>
      <defs>
        <pattern id="xs-granite" patternUnits="userSpaceOnUse" width="15" height="15">
          <rect width="15" height="15" fill="#c9a66b"/>
          <circle cx="4" cy="4" r="1.2" fill="#8b7355"/>
          <circle cx="11" cy="9" r="0.8" fill="#6b5344"/>
          <circle cx="7" cy="13" r="1" fill="#8b7355"/>
        </pattern>
        
        <pattern id="xs-sandstone" patternUnits="userSpaceOnUse" width="20" height="6">
          <rect width="20" height="6" fill="#d4a574"/>
          <line x1="0" y1="3" x2="20" y2="3" stroke="#c9956a" strokeWidth="0.5"/>
        </pattern>
        
        <pattern id="xs-limestone" patternUnits="userSpaceOnUse" width="15" height="15">
          <rect width="15" height="15" fill="#e8dcc8"/>
          <rect x="2" y="2" width="4" height="3" fill="#d4c9b5" rx="1"/>
          <rect x="9" y="8" width="3" height="2" fill="#d4c9b5" rx="0.5"/>
        </pattern>
        
        <pattern id="xs-shale" patternUnits="userSpaceOnUse" width="20" height="4">
          <rect width="20" height="4" fill="#718096"/>
          <line x1="0" y1="2" x2="20" y2="2" stroke="#5a6577" strokeWidth="0.5"/>
        </pattern>
      </defs>
      
      {/* Sky/Air */}
      <rect width="600" height="50" fill="transparent"/>
      
      {/* Surface topography */}
      <path 
        d="M0 80 Q50 60 100 70 Q150 50 200 65 Q250 45 300 55 Q350 40 400 50 Q450 35 500 45 Q550 55 600 40 L600 250 L0 250 Z" 
        fill="url(#xs-sandstone)"
      />
      
      {/* Limestone layer */}
      <path 
        d="M0 120 Q100 110 200 130 Q300 120 400 140 Q500 130 600 120 L600 170 Q500 160 400 180 Q300 170 200 185 Q100 175 0 165 Z" 
        fill="url(#xs-limestone)"
      />
      
      {/* Shale layer */}
      <path 
        d="M0 165 Q100 175 200 185 Q300 170 400 180 Q500 160 600 170 L600 200 Q500 190 400 210 Q300 200 200 215 Q100 205 0 195 Z" 
        fill="url(#xs-shale)"
      />
      
      {/* Granite basement */}
      <path 
        d="M0 195 Q100 205 200 215 Q300 200 400 210 Q500 190 600 200 L600 250 L0 250 Z" 
        fill="url(#xs-granite)"
      />
      
      {/* Fault */}
      <path 
        d="M300 40 L320 250" 
        stroke="#1a202c" 
        strokeWidth="3"
        strokeDasharray="8 4"
      />
      
      {/* Fault arrows */}
      <polygon points="290,100 300,90 300,110" fill="#1a202c"/>
      <polygon points="330,130 320,120 320,140" fill="#1a202c"/>
      
      {/* Labels */}
      <text x="50" y="100" fontSize="10" fill="#1a202c" fontFamily="monospace">Sandstone</text>
      <text x="450" y="145" fontSize="10" fill="#1a202c" fontFamily="monospace">Limestone</text>
      <text x="50" y="180" fontSize="10" fill="#1a202c" fontFamily="monospace">Shale</text>
      <text x="450" y="225" fontSize="10" fill="#1a202c" fontFamily="monospace">Granite Basement</text>
      
      {/* Depth scale */}
      <g transform="translate(20, 50)">
        <line x1="0" y1="0" x2="0" y2="200" stroke="#1a202c" strokeWidth="1"/>
        <line x1="-5" y1="0" x2="5" y2="0" stroke="#1a202c" strokeWidth="1"/>
        <line x1="-5" y1="50" x2="5" y2="50" stroke="#1a202c" strokeWidth="1"/>
        <line x1="-5" y1="100" x2="5" y2="100" stroke="#1a202c" strokeWidth="1"/>
        <line x1="-5" y1="150" x2="5" y2="150" stroke="#1a202c" strokeWidth="1"/>
        <line x1="-5" y1="200" x2="5" y2="200" stroke="#1a202c" strokeWidth="1"/>
        <text x="-18" y="5" fontSize="8" fill="currentColor" fontFamily="monospace">0m</text>
        <text x="-18" y="105" fontSize="8" fill="currentColor" fontFamily="monospace">50m</text>
        <text x="-18" y="205" fontSize="8" fill="currentColor" fontFamily="monospace">100m</text>
      </g>
      
      {/* Section line label */}
      <text x="280" y="25" fontSize="12" fill="currentColor" fontFamily="monospace" fontWeight="bold">A</text>
      <text x="580" y="25" fontSize="12" fill="currentColor" fontFamily="monospace" fontWeight="bold">{"A'"}</text>
      <line x1="295" y1="20" x2="575" y2="20" stroke="currentColor" strokeWidth="1"/>
    </svg>
  )
}

export function StratigraphicColumnSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 400" className={className}>
      <defs>
        <pattern id="strat-alluvium" patternUnits="userSpaceOnUse" width="10" height="10">
          <rect width="10" height="10" fill="#f0e6d3"/>
          <circle cx="3" cy="3" r="1" fill="#d4c9b5"/>
          <circle cx="7" cy="7" r="1.2" fill="#c9bda8"/>
        </pattern>
        
        <pattern id="strat-sandstone" patternUnits="userSpaceOnUse" width="20" height="5">
          <rect width="20" height="5" fill="#d4a574"/>
          <line x1="0" y1="2.5" x2="20" y2="2.5" stroke="#c9956a" strokeWidth="0.3"/>
        </pattern>
        
        <pattern id="strat-limestone" patternUnits="userSpaceOnUse" width="12" height="12">
          <rect width="12" height="12" fill="#e8dcc8"/>
          <rect x="1" y="1" width="4" height="3" fill="#d4c9b5" rx="0.5"/>
          <rect x="7" y="6" width="3" height="2" fill="#d4c9b5" rx="0.5"/>
        </pattern>
        
        <pattern id="strat-shale" patternUnits="userSpaceOnUse" width="15" height="3">
          <rect width="15" height="3" fill="#718096"/>
          <line x1="0" y1="1.5" x2="15" y2="1.5" stroke="#5a6577" strokeWidth="0.3"/>
        </pattern>
        
        <pattern id="strat-granite" patternUnits="userSpaceOnUse" width="12" height="12">
          <rect width="12" height="12" fill="#c9a66b"/>
          <circle cx="3" cy="3" r="1" fill="#8b7355"/>
          <circle cx="9" cy="8" r="0.7" fill="#6b5344"/>
        </pattern>
      </defs>
      
      {/* Column border */}
      <rect x="50" y="20" width="80" height="360" fill="none" stroke="#1a202c" strokeWidth="2"/>
      
      {/* Layers from top to bottom */}
      {/* Quaternary Alluvium */}
      <rect x="50" y="20" width="80" height="40" fill="url(#strat-alluvium)" stroke="#1a202c" strokeWidth="1"/>
      
      {/* Sandstone */}
      <rect x="50" y="60" width="80" height="60" fill="url(#strat-sandstone)" stroke="#1a202c" strokeWidth="1"/>
      
      {/* Limestone */}
      <rect x="50" y="120" width="80" height="80" fill="url(#strat-limestone)" stroke="#1a202c" strokeWidth="1"/>
      
      {/* Shale */}
      <rect x="50" y="200" width="80" height="50" fill="url(#strat-shale)" stroke="#1a202c" strokeWidth="1"/>
      
      {/* Sandstone 2 */}
      <rect x="50" y="250" width="80" height="40" fill="url(#strat-sandstone)" stroke="#1a202c" strokeWidth="1"/>
      
      {/* Granite basement */}
      <rect x="50" y="290" width="80" height="90" fill="url(#strat-granite)" stroke="#1a202c" strokeWidth="1"/>
      
      {/* Age labels on left */}
      <text x="45" y="45" fontSize="8" fill="currentColor" fontFamily="monospace" textAnchor="end">Q</text>
      <text x="45" y="95" fontSize="8" fill="currentColor" fontFamily="monospace" textAnchor="end">Pg</text>
      <text x="45" y="165" fontSize="8" fill="currentColor" fontFamily="monospace" textAnchor="end">K</text>
      <text x="45" y="230" fontSize="8" fill="currentColor" fontFamily="monospace" textAnchor="end">J</text>
      <text x="45" y="275" fontSize="8" fill="currentColor" fontFamily="monospace" textAnchor="end">Tr</text>
      <text x="45" y="340" fontSize="8" fill="currentColor" fontFamily="monospace" textAnchor="end">PC</text>
      
      {/* Formation names on right */}
      <text x="135" y="45" fontSize="7" fill="currentColor" fontFamily="monospace">Alluvium</text>
      <text x="135" y="95" fontSize="7" fill="currentColor" fontFamily="monospace">Sandstone Fm</text>
      <text x="135" y="165" fontSize="7" fill="currentColor" fontFamily="monospace">Limestone Fm</text>
      <text x="135" y="230" fontSize="7" fill="currentColor" fontFamily="monospace">Shale Fm</text>
      <text x="135" y="275" fontSize="7" fill="currentColor" fontFamily="monospace">Red Beds</text>
      <text x="135" y="340" fontSize="7" fill="currentColor" fontFamily="monospace">Basement</text>
      
      {/* Title */}
      <text x="100" y="12" fontSize="10" fill="currentColor" fontFamily="monospace" fontWeight="bold" textAnchor="middle">STRATIGRAPHY</text>
      
      {/* Thickness scale */}
      <line x1="35" y1="20" x2="35" y2="380" stroke="#1a202c" strokeWidth="1"/>
      <line x1="32" y1="20" x2="38" y2="20" stroke="#1a202c" strokeWidth="1"/>
      <line x1="32" y1="200" x2="38" y2="200" stroke="#1a202c" strokeWidth="1"/>
      <line x1="32" y1="380" x2="38" y2="380" stroke="#1a202c" strokeWidth="1"/>
      <text x="30" y="25" fontSize="7" fill="currentColor" fontFamily="monospace" textAnchor="end">0</text>
      <text x="30" y="205" fontSize="7" fill="currentColor" fontFamily="monospace" textAnchor="end">500</text>
      <text x="30" y="385" fontSize="7" fill="currentColor" fontFamily="monospace" textAnchor="end">1000m</text>
    </svg>
  )
}
