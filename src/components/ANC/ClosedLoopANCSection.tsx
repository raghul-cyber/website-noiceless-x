import React from 'react';
import { RefreshCw, Activity, ArrowRight, ShieldCheck } from 'lucide-react';
import { useSimulationStore } from '../../store/useSimulationStore';

export const ClosedLoopANCSection: React.FC = () => {
  const { ancActive } = useSimulationStore();

  return (
    <section id="closed-loop" className="relative py-24 tactical-grid-bg border-b border-[#143526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <div className="flex items-center gap-2">
            <span className="badge-tactical">SECTION 16 // CLOSED-LOOP ANC</span>
            <span className="font-mono text-xs text-[#00e599]">SPLIT LAYOUT // REAL MEDIA + 2D LOOP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f0fdf4] tracking-tight">
            CLOSED-LOOP ACOUSTIC ATTENUATION IN ACTION
          </h2>
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed">
            A split-screen engineering analysis pairing operational field photography with 
            the mathematically closed acoustic adaptation loop.
          </p>
        </div>

        {/* Center Narrative Strip: ENVIRONMENT → REF SIGNAL → ADAPTIVE FILTER → ANTI-NOISE → SPEAKER → EAR → ERROR MIC → ADAPTATION */}
        <div className="chassis-panel p-4 rounded-sm bg-[#161d19] border border-[#3b4a41] mb-8 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[760px] font-mono text-[11px] text-[#849589]">
            <span className="px-2 py-1 rounded bg-[#0d1511] text-[#f59e0b] font-bold">01 ENVIRONMENT</span>
            <ArrowRight size={12} className="text-[#3b4a41]" />
            <span className="px-2 py-1 rounded bg-[#0d1511] text-[#00e5ff] font-bold">02 REF SIGNAL x(n)</span>
            <ArrowRight size={12} className="text-[#3b4a41]" />
            <span className="px-2 py-1 rounded bg-[#0d1511] text-[#00e599] font-bold">03 ADAPTIVE FILTER W(z)</span>
            <ArrowRight size={12} className="text-[#3b4a41]" />
            <span className="px-2 py-1 rounded bg-[#0d1511] text-[#00e5ff] font-bold">04 ANTI-NOISE -y(n)</span>
            <ArrowRight size={12} className="text-[#3b4a41]" />
            <span className="px-2 py-1 rounded bg-[#0d1511] text-[#f0fdf4] font-bold">05 SPEAKER DRIVER</span>
            <ArrowRight size={12} className="text-[#3b4a41]" />
            <span className="px-2 py-1 rounded bg-[#0d1511] text-[#00e599] font-bold">06 EAR CANAL</span>
            <ArrowRight size={12} className="text-[#3b4a41]" />
            <span className="px-2 py-1 rounded bg-[#0d1511] text-[#00e5ff] font-bold">07 ERROR MIC e(n)</span>
            <ArrowRight size={12} className="text-[#3b4a41]" />
            <span className="px-2 py-1 rounded bg-[#143526] text-[#00e599] font-bold border border-[#00e599]">
              08 ADAPTATION ↺
            </span>
          </div>
        </div>

        {/* Split Layout: LEFT = Real soldier/headset photo | RIGHT = 2D ANC diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Real Soldier / Headset Photograph */}
          <div className="lg:col-span-6 chassis-panel rounded-sm overflow-hidden bg-[#0d1511] border border-[#3b4a41] flex flex-col justify-between">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#08100c]">
              <img
                src="/media/images/unsplash_soldier_headset_vehicle.jpg"
                alt="Real soldier wearing communication headset inside transport vehicle"
                className="w-full h-full object-cover filter contrast-[112%] brightness-90 grayscale-[10%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08100c]/85 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded bg-[#08100c]/90 border border-[#3b4a41] text-[10px] font-mono text-[#00e599]">
                <ShieldCheck size={12} />
                <span>REAL FIELD CONTEXT // ZERO 3D</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] text-[#849589]">
                <span>PHOTO: UNSPLASH // NAVY MEDICINE</span>
                <span className="text-[#00e5ff]">HEADSET ACOUSTIC CAVITY</span>
              </div>
            </div>

            <div className="p-5 bg-[#161d19] border-t border-[#143526] text-xs font-mono">
              <span className="text-[#849589] block uppercase text-[10px] mb-1">FIELD ACOUSTIC DYNAMICS:</span>
              <p className="text-[#bacbbe] font-sans leading-relaxed text-xs">
                In vehicle transport cabins, the soldier's head experiences fluctuating standing wave nodes. 
                The left reference microphone samples the exterior wave, while the internal error microphone 
                measures the acoustic sum inside the cushion seal.
              </p>
            </div>
          </div>

          {/* Right: 2D Closed-Loop Signal Diagram */}
          <div className="lg:col-span-6 chassis-panel p-6 rounded-sm bg-[#161d19] border border-[#3b4a41] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#143526] pb-3 mb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <RefreshCw size={14} className={`text-[#00e599] ${ancActive ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
                  <span className="text-[#f0fdf4] font-bold">2D CLOSED-LOOP TOPOLOGY</span>
                </div>
                <span className="text-[#00e599]">W(n+1) CONVERGING</span>
              </div>

              {/* 2D SVG Closed Loop Schematic */}
              <div className="w-full bg-[#08100c] p-4 rounded border border-[#143526] mb-4">
                <svg className="w-full h-48" viewBox="0 0 360 190" fill="none">
                  {/* Reference Signal Ingest */}
                  <rect x="10" y="20" width="85" height="38" rx="3" fill="#161d19" stroke="#00e5ff" strokeWidth="1.5" />
                  <text x="52" y="38" fill="#f0fdf4" fontFamily="monospace" fontSize="8" fontWeight="bold" textAnchor="middle">REF x(n)</text>
                  <text x="52" y="49" fill="#849589" fontFamily="monospace" fontSize="6.5" textAnchor="middle">LEFT EAR CUP</text>

                  {/* Arrow Ref -> Filter */}
                  <path d="M95 39 L130 39" stroke="#00e5ff" strokeWidth="1.5" />

                  {/* Adaptive Filter Box */}
                  <rect x="130" y="20" width="95" height="38" rx="3" fill="#161d19" stroke="#00e599" strokeWidth="1.5" />
                  <text x="177" y="38" fill="#f0fdf4" fontFamily="monospace" fontSize="8" fontWeight="bold" textAnchor="middle">FILTER W(z)</text>
                  <text x="177" y="49" fill="#00e599" fontFamily="monospace" fontSize="6.5" textAnchor="middle">FxLMS / NLMS</text>

                  {/* Arrow Filter -> Anti-Noise */}
                  <path d="M225 39 L260 39" stroke="#00e599" strokeWidth="1.5" />

                  {/* Anti-Noise Speaker */}
                  <rect x="260" y="20" width="90" height="38" rx="3" fill="#161d19" stroke="#00e5ff" strokeWidth="1.5" />
                  <text x="305" y="38" fill="#f0fdf4" fontFamily="monospace" fontSize="8" fontWeight="bold" textAnchor="middle">SPEAKER</text>
                  <text x="305" y="49" fill="#849589" fontFamily="monospace" fontSize="6.5" textAnchor="middle">-y(t) ANTI-NOISE</text>

                  {/* Downward into Ear Canal Cavity */}
                  <path d="M305 58 L305 90" stroke="#00e5ff" strokeWidth="1.5" />

                  {/* Ear Cavity Summation */}
                  <circle cx="305" cy="105" r="15" fill="#0d1511" stroke="#3b4a41" strokeWidth="1.5" />
                  <text x="305" y="109" fill="#f0fdf4" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">∑</text>

                  {/* Error Mic Sensor */}
                  <rect x="250" y="135" width="100" height="36" rx="3" fill="#161d19" stroke="#00e599" strokeWidth="1.5" />
                  <text x="300" y="152" fill="#f0fdf4" fontFamily="monospace" fontSize="8" fontWeight="bold" textAnchor="middle">ERROR MIC e(n)</text>
                  <text x="300" y="163" fill="#849589" fontFamily="monospace" fontSize="6.5" textAnchor="middle">RESIDUAL LEAK</text>

                  {/* Summation to Error Mic */}
                  <path d="M305 120 L305 135" stroke="#00e599" strokeWidth="1.5" />

                  {/* Feedback Path Closing Leftwards */}
                  <path d="M250 153 L100 153 L100 100 L140 100" stroke="#00e599" strokeWidth="1.5" strokeDasharray="4 2" />

                  {/* Gradient Adaptation Update Box */}
                  <rect x="140" y="80" width="105" height="40" rx="3" fill="#143526" stroke="#00e599" strokeWidth="1.5" />
                  <text x="192" y="98" fill="#f0fdf4" fontFamily="monospace" fontSize="8" fontWeight="bold" textAnchor="middle">WEIGHT ADAPT</text>
                  <text x="192" y="110" fill="#4dffb2" fontFamily="monospace" fontSize="6.5" textAnchor="middle">W(n+1) = W(n) + μ e x'</text>

                  {/* Adaptation back into Filter */}
                  <path d="M192 80 L192 58" stroke="#00e599" strokeWidth="1.5" />
                  <text x="202" y="70" fill="#00e599" fontFamily="monospace" fontSize="7">ΔW</text>
                </svg>
              </div>
            </div>

            <div className="font-mono text-xs space-y-2 pt-2 border-t border-[#143526]">
              <div className="flex justify-between text-[#849589]">
                <span>Convergence Criterion:</span>
                <span className="text-[#00e599] font-bold">||e(n)|| minimized (MMSE)</span>
              </div>
              <div className="flex justify-between text-[#849589]">
                <span>Secondary Path Model:</span>
                <span className="text-[#00e5ff] font-bold">FIR Offline S^(z) Compensation</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
