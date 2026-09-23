import React, { useState } from 'react';
import { Eye, ShieldCheck, Activity, Radio, Cpu, Layers, Disc, CheckCircle2, ChevronRight } from 'lucide-react';

interface Hotspot {
  id: string;
  name: string;
  shortName: string;
  xPercent: number; // Position on photograph (%)
  yPercent: number;
  category: 'ACOUSTIC TRANSDUCER' | 'MECHANICAL ENCLOSURE' | 'ELECTRICAL HARNESS' | 'EDGE COMPUTE';
  role: string;
  acousticFunction: string;
  physicalSpec: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 'ref_mic',
    name: 'External Reference Microphone',
    shortName: 'REF MIC x(n)',
    xPercent: 44,
    yPercent: 48,
    category: 'ACOUSTIC TRANSDUCER',
    role: 'Captures incoming environmental sound field d(t) prior to acoustic penetration through ear cup aperture.',
    acousticFunction: 'Supplies primary reference signal vector x(n) to the FxLMS adaptive filter core.',
    physicalSpec: 'Omnidirectional high-SPL electret transducer mounted flush on the exterior shell of the left ear cup.'
  },
  {
    id: 'error_mic',
    name: 'Internal Error Microphone',
    shortName: 'ERROR MIC e(n)',
    xPercent: 52,
    yPercent: 52,
    category: 'ACOUSTIC TRANSDUCER',
    role: 'Monitors the residual sound pressure inside the ear cavity directly near the tympanic membrane entrance.',
    acousticFunction: 'Generates feedback error signal e(n) = d(n) - y\'(n) to drive gradient weight adaptation W(n+1).',
    physicalSpec: 'Sub-miniature electret capsule seated inside foam baffle adjacent to the 40mm speaker aperture.'
  },
  {
    id: 'comm_mic',
    name: 'Communication Microphone',
    shortName: 'COMMS BOOM MIC',
    xPercent: 62,
    yPercent: 68,
    category: 'ACOUSTIC TRANSDUCER',
    role: 'Captures the operator vocal communication for tactical radio transmission and intercom routing.',
    acousticFunction: 'Integrated with Voice Activity Detection (VAD) to freeze anti-noise synthesis during speech transmission.',
    physicalSpec: 'Flexible gooseneck boom with dual-port noise-canceling differential acoustic vents.'
  },
  {
    id: 'ear_cup',
    name: 'Acoustic Seal Ear Cup',
    shortName: 'EAR CUP & SEAL',
    xPercent: 38,
    yPercent: 42,
    category: 'MECHANICAL ENCLOSURE',
    role: 'Provides structural acoustic barrier against high-frequency environmental noise above 1 kHz.',
    acousticFunction: 'Delivers ~22 dB passive attenuation, allowing the active ANC system to focus entirely on low-frequency roar (<1 kHz).',
    physicalSpec: 'Milled graphite polymer chassis with viscoelastic memory foam cushions for airtight temporal seal.'
  },
  {
    id: 'cable',
    name: 'Tactical Harness Cabling',
    shortName: 'BRAIDED CABLE',
    xPercent: 32,
    yPercent: 72,
    category: 'ELECTRICAL HARNESS',
    role: 'Transmits analog microphone voltages and amplified speaker anti-noise between headset and processor.',
    acousticFunction: 'Shielded differential twisted-pair lines prevent electromagnetic interference from aircraft avionics.',
    physicalSpec: 'Mil-spec braided Kevlar jacket with IP67 sealed quick-disconnect bayonet terminal.'
  },
  {
    id: 'processor_conn',
    name: 'Processor Connection & Edge Unit',
    shortName: 'RASPBERRY PI LINK',
    xPercent: 24,
    yPercent: 88,
    category: 'EDGE COMPUTE',
    role: 'Routes multi-channel audio stream into the waist-mounted Raspberry Pi embedded processing unit.',
    acousticFunction: 'Connects to 24-bit 48kHz I2S Audio HAT executing C++20 FxLMS/NLMS and quantized YAMNet.',
    physicalSpec: 'Waist-mounted tactical pouch enclosure with passive heatsinking and isolated battery power pack.'
  }
];

export const HeadsetViewerSection: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(HOTSPOTS[0]);
  const [activePhoto, setActivePhoto] = useState<'closeup' | 'vehicle'>('closeup');

  const photoPath = activePhoto === 'closeup'
    ? '/media/images/pexels_soldier_headset_closeup.jpg'
    : '/media/images/unsplash_soldier_headset_vehicle.jpg';

  return (
    <section id="headset" className="relative py-24 tactical-grid-bg border-b border-[#143526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <span className="font-mono text-xs text-[#00e599] tracking-widest uppercase font-bold">
            SECTION 05 // UNBRANDED TACTICAL HARDWARE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f0fdf4] tracking-tight">
            NOISELESS-X6 OVER-EAR TACTICAL HEADSET
          </h2>
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed">
            Real hardware photography annotated with 2D technical telemetry. Grounded in authentic military 
            operational equipment—incorporating dual acoustic sensing microphones, directional vocal boom, 
            and ruggedized cable routing to the waist-mounted Raspberry Pi processing unit.
          </p>
        </div>

        {/* 2D Click-to-Highlight Photography Viewport & Detail Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Annotated Real Photograph */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="chassis-panel rounded-sm overflow-hidden bg-[#0d1511] border border-[#3b4a41] relative">
              
              {/* Telemetry Header */}
              <div className="p-3 bg-[#161d19] border-b border-[#143526] flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00e599] animate-pulse" />
                  <span className="text-[#f0fdf4] font-bold">2D TECHNICAL ANNOTATION VIEWPORT</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActivePhoto('closeup')}
                    className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold transition-all ${
                      activePhoto === 'closeup'
                        ? 'bg-[#00e599] text-[#08100c]'
                        : 'bg-[#08100c] text-[#849589] hover:text-[#dce5de] border border-[#3b4a41]'
                    }`}
                  >
                    CLOSE-UP
                  </button>
                  <button
                    onClick={() => setActivePhoto('vehicle')}
                    className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold transition-all ${
                      activePhoto === 'vehicle'
                        ? 'bg-[#00e599] text-[#08100c]'
                        : 'bg-[#08100c] text-[#849589] hover:text-[#dce5de] border border-[#3b4a41]'
                    }`}
                  >
                    VEHICLE CONTEXT
                  </button>
                </div>
              </div>

              {/* Main Photo with Interactive 2D Hotspot Pins */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#08100c]">
                <img
                  src={photoPath}
                  alt="NOISELESS-X6 Tactical Headset Real Photography"
                  className="w-full h-full object-cover filter contrast-[112%] brightness-90 grayscale-[10%]"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08100c]/80 via-transparent to-[#08100c]/40 pointer-events-none" />

                {/* Click-to-Highlight 2D Hotspot Pins */}
                {HOTSPOTS.map((spot) => {
                  const isSelected = selectedHotspot.id === spot.id;
                  return (
                    <button
                      key={spot.id}
                      onClick={() => setSelectedHotspot(spot)}
                      style={{
                        top: `${spot.yPercent}%`,
                        left: `${spot.xPercent}%`
                      }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none transition-transform ${
                        isSelected ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                      }`}
                      aria-label={spot.name}
                    >
                      {/* Pulse Ring */}
                      <span
                        className={`absolute -inset-2 rounded-full animate-ping opacity-60 ${
                          isSelected ? 'bg-[#00e599]' : 'bg-[#00e5ff]'
                        }`}
                        style={{ animationDuration: '2.5s' }}
                      />

                      {/* Center Pin Node */}
                      <span
                        className={`relative flex items-center justify-center w-7 h-7 rounded-full font-mono text-[10px] font-bold border-2 transition-all shadow-lg ${
                          isSelected
                            ? 'bg-[#00e599] text-[#08100c] border-[#f0fdf4] shadow-[0_0_16px_rgba(0,229,153,0.8)]'
                            : 'bg-[#0d1511]/90 text-[#00e5ff] border-[#00e5ff] hover:bg-[#00e5ff] hover:text-[#08100c]'
                        }`}
                      >
                        {spot.id === 'ref_mic' ? '06' : spot.id === 'error_mic' ? '07' : spot.id === 'comm_mic' ? '08' : '•'}
                      </span>

                      {/* Tooltip Tag */}
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 rounded bg-[#08100c]/95 border border-[#3b4a41] text-[9px] font-mono text-[#f0fdf4] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {spot.shortName}
                      </span>
                    </button>
                  );
                })}

                {/* Hotspot Guide Callout */}
                <div className="absolute bottom-3 left-3 z-10 font-mono text-[10px] text-[#849589] bg-[#08100c]/90 px-2.5 py-1 rounded border border-[#3b4a41] backdrop-blur-sm">
                  CLICK HOTSPOTS TO INSPECT 2D HARDWARE NODES
                </div>
              </div>

              {/* Bottom Photo Attribution Bar */}
              <div className="p-2.5 bg-[#08100c] border-t border-[#143526] flex items-center justify-between font-mono text-[9px] text-[#849589]">
                <span>
                  SOURCE: {activePhoto === 'closeup' ? 'PEXELS // TACTICAL CLOSEUP' : 'UNSPLASH // NAVY MEDICINE'}
                </span>
                <span className="text-[#00e599]">ZERO 3D // 100% REAL PHOTOGRAPHY</span>
              </div>
            </div>

            {/* Quick Hotspot Select Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-xs">
              {HOTSPOTS.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  className={`p-2 rounded text-left transition-all border ${
                    selectedHotspot.id === spot.id
                      ? 'bg-[#00e599] text-[#08100c] border-[#00e599] font-bold shadow-[0_0_10px_rgba(0,229,153,0.3)]'
                      : 'bg-[#161d19] border-[#3b4a41] text-[#849589] hover:text-[#f0fdf4] hover:border-[#143526]'
                  }`}
                >
                  <div className="text-[9px] opacity-75">{spot.category}</div>
                  <div className="text-[11px] truncate font-bold mt-0.5">{spot.shortName}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Selected Hotspot Engineering Briefing */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="chassis-panel p-6 rounded-sm bg-[#161d19] border border-[#3b4a41]">
              <div className="flex items-center justify-between mb-3 border-b border-[#143526] pb-3">
                <span className="font-mono text-[10px] text-[#00e599] font-bold px-2 py-0.5 rounded bg-[#0d1511] border border-[#143526]">
                  {selectedHotspot.category}
                </span>
                <span className="font-mono text-[10px] text-[#849589]">
                  NODE ID: {selectedHotspot.id.toUpperCase()}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#f0fdf4] tracking-tight">
                {selectedHotspot.name}
              </h3>

              <div className="mt-4 flex flex-col gap-4 text-xs font-mono">
                <div>
                  <span className="text-[#849589] text-[10px] uppercase block mb-1">ACOUSTIC ROLE:</span>
                  <p className="text-[#dce5de] font-sans leading-relaxed text-sm">
                    {selectedHotspot.role}
                  </p>
                </div>

                <div className="p-3 rounded bg-[#0d1511] border border-[#143526]">
                  <span className="text-[#00e5ff] text-[10px] uppercase font-bold block mb-1">
                    MATHEMATICAL DSP FUNCTION:
                  </span>
                  <p className="text-[#bacbbe] text-xs font-sans leading-relaxed">
                    {selectedHotspot.acousticFunction}
                  </p>
                </div>

                <div>
                  <span className="text-[#849589] text-[10px] uppercase block mb-1">PHYSICAL INTEGRATION:</span>
                  <p className="text-[#bacbbe] text-xs font-sans leading-relaxed">
                    {selectedHotspot.physicalSpec}
                  </p>
                </div>
              </div>
            </div>

            {/* 2D Schematic Cutaway Preview (No 3D) */}
            <div className="chassis-panel p-5 rounded-sm bg-[#0d1511] border border-[#3b4a41]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-[#f0fdf4] uppercase">
                  2D EAR CUP ACOUSTIC CUTAWAY
                </span>
                <span className="font-mono text-[9px] text-[#00e5ff]">INTERNAL CAVITY SCHEMATIC</span>
              </div>

              {/* 2D SVG Cross-Section Schematic */}
              <svg className="w-full h-32" viewBox="0 0 320 120" fill="none">
                {/* Outer graphite shell */}
                <path d="M40 20 Q160 5 280 20 L280 100 Q160 115 40 100 Z" fill="#161d19" stroke="#3b4a41" strokeWidth="2" />
                
                {/* Acoustic foam cushion */}
                <rect x="250" y="25" width="25" height="70" rx="3" fill="#143526" stroke="#00e599" strokeWidth="1" strokeDasharray="3 2" />
                <text x="262" y="65" fill="#00e599" fontFamily="monospace" fontSize="7" textAnchor="middle" transform="rotate(-90,262,65)">SEAL FOAM</text>

                {/* 40mm Neodymium Speaker Driver */}
                <rect x="180" y="35" width="20" height="50" rx="2" fill="#0d1511" stroke="#00e5ff" strokeWidth="1.5" />
                <path d="M200 42 L230 30 L230 90 L200 78 Z" fill="#1c2821" stroke="#00e5ff" strokeWidth="1" />
                <text x="190" y="63" fill="#00e5ff" fontFamily="monospace" fontSize="6.5" textAnchor="middle" transform="rotate(-90,190,63)">DRIVER</text>

                {/* Error Mic Sensor (inside cavity) */}
                <circle cx="238" cy="60" r="5" fill="#00e599" stroke="#f0fdf4" strokeWidth="1" />
                <text x="238" y="76" fill="#00e599" fontFamily="monospace" fontSize="6" textAnchor="middle">ERR MIC</text>

                {/* External Ref Mic Sensor (outer shell) */}
                <circle cx="40" cy="60" r="5" fill="#00e5ff" stroke="#f0fdf4" strokeWidth="1" />
                <text x="32" y="76" fill="#00e5ff" fontFamily="monospace" fontSize="6" textAnchor="middle">REF MIC</text>

                {/* Sound field annotations */}
                <path d="M10 60 L30 60" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <text x="15" y="52" fill="#f59e0b" fontFamily="monospace" fontSize="6.5">d(t)</text>
              </svg>

              <div className="mt-2 text-[10px] font-mono text-[#849589] flex justify-between">
                <span>ACOUSTIC PATH: P(z)</span>
                <span>SECONDARY PATH: S(z)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
