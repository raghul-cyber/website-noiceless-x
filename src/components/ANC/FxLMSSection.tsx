import React from 'react';
import { Activity, RefreshCw, Zap, ArrowRight, CornerDownLeft } from 'lucide-react';
import { useSimulationStore } from '../../store/useSimulationStore';

export const FxLMSSection: React.FC = () => {
  const { ancActive, showFeedback } = useSimulationStore();

  return (
    <section id="fxlms" className="relative py-24 border-b border-[#143526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <div className="flex items-center gap-2">
            <span className="badge-cyan">SECTION 16 &amp; 17 // CORE MATHEMATICS &amp; CLOSED LOOP</span>
            <span className="font-mono text-xs text-[#00e5ff]">SECONDARY PATH S(z) COMPENSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f0fdf4] tracking-tight">
            FILTERED-X NORMALIZED LMS &amp; CLOSED-LOOP CONVERGENCE
          </h2>
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed">
            In physical acoustic systems, the anti-noise signal encounters delays through DACs, amplifiers, 
            speaker diaphragms, and air propagation. Filtered-X LMS compensates for this secondary path $S(z)$ 
            by pre-filtering the reference vector before updating the adaptive weights.
          </p>
        </div>

        {/* ============================================================ */}
        {/* SECTION 17: FULLY ANIMATED CLOSED-LOOP ANC DIAGRAM */}
        {/* ============================================================ */}
        <div className="chassis-panel p-6 sm:p-8 rounded-sm bg-[#08100c] border border-[#3b4a41] mb-12">
          <div className="flex items-center justify-between border-b border-[#143526] pb-3 mb-6">
            <div className="flex items-center gap-2">
              <RefreshCw size={16} className={`text-[#00e599] ${ancActive ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
              <span className="font-mono text-xs font-bold text-[#f0fdf4] uppercase">
                CLOSED-LOOP SIGNAL TOPOLOGY (LOOP VISIBLY CLOSES)
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#00e599]">CONVERGENCE: STABLE</span>
          </div>

          {/* SVG Animated Closed Loop Block Diagram */}
          <div className="relative w-full overflow-x-auto">
            <svg className="w-full min-w-[700px] h-[220px]" viewBox="0 0 850 220" fill="none">
              
              {/* Reference Signal Ingest Node */}
              <rect x="20" y="30" width="130" height="50" rx="4" fill="#161d19" stroke="#00e5ff" strokeWidth="1.5" />
              <text x="85" y="55" fill="#f0fdf4" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">REF MIC x(n)</text>
              <text x="85" y="70" fill="#849589" fontFamily="monospace" fontSize="8" textAnchor="middle">LEFT EAR CUP</text>

              {/* Forward Path: Ref -> Adaptive Filter */}
              <path d="M150 55 L210 55" stroke="#00e5ff" strokeWidth="2" markerEnd="url(#arrow-cyan)" />

              {/* Adaptive Filter W(z) Node */}
              <rect x="210" y="30" width="140" height="50" rx="4" fill="#161d19" stroke="#00e599" strokeWidth="1.5" />
              <text x="280" y="55" fill="#f0fdf4" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">FILTER W(z)</text>
              <text x="280" y="70" fill="#00e599" fontFamily="monospace" fontSize="8" textAnchor="middle">FxLMS / NLMS</text>

              {/* Filter -> Anti-Noise Output */}
              <path d="M350 55 L410 55" stroke="#00e599" strokeWidth="2" />

              {/* Anti-Noise DAC & Speaker Node */}
              <rect x="410" y="30" width="140" height="50" rx="4" fill="#161d19" stroke="#00e599" strokeWidth="1.5" />
              <text x="480" y="55" fill="#f0fdf4" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">SPEAKER DRIVER</text>
              <text x="480" y="70" fill="#849589" fontFamily="monospace" fontSize="8" textAnchor="middle">ANTI-NOISE -y(t)</text>

              {/* Speaker -> Acoustic Summation Node */}
              <path d="M550 55 L610 55" stroke="#00e5ff" strokeWidth="2" />

              {/* Acoustic Summation Circle Node */}
              <circle cx="635" cy="55" r="22" fill="#091811" stroke="#3b4a41" strokeWidth="2" />
              <text x="635" y="60" fill="#f0fdf4" fontFamily="monospace" fontSize="16" fontWeight="bold" textAnchor="middle">∑</text>

              {/* External Ambient Acoustic Noise entering Summation from Top */}
              <path d="M635 0 L635 33" stroke="#e5c100" strokeWidth="2" strokeDasharray="4 3" />
              <text x="645" y="16" fill="#e5c100" fontFamily="monospace" fontSize="8" fontWeight="bold">AMBIENT d(t)</text>

              {/* Summation -> Error Mic */}
              <path d="M657 55 L710 55" stroke="#00e599" strokeWidth="2" />

              {/* Error Microphone Node */}
              <rect x="710" y="30" width="120" height="50" rx="4" fill="#161d19" stroke="#00e599" strokeWidth="1.5" />
              <text x="770" y="55" fill="#f0fdf4" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">ERROR MIC e(n)</text>
              <text x="770" y="70" fill="#849589" fontFamily="monospace" fontSize="8" textAnchor="middle">RESIDUAL LEAK</text>

              {/* ============================================================ */}
              {/* FEEDBACK ADAPTATION PATH CLOSING THE LOOP */}
              {/* ============================================================ */}
              {/* Downward from Error Mic */}
              <path d="M770 80 L770 160" stroke="#00e599" strokeWidth="2" />

              {/* Gradient Adaptation Update Box */}
              <rect x="420" y="135" width="220" height="50" rx="4" fill="#143526" stroke="#00e599" strokeWidth="1.5" />
              <text x="530" y="158" fill="#f0fdf4" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">ADAPTIVE UPDATE ENGINE</text>
              <text x="530" y="173" fill="#4dffb2" fontFamily="monospace" fontSize="8" textAnchor="middle">W(n+1) = W(n) + μ e(n) x'(n)</text>

              {/* Horizontal line from Error Mic to Update Box */}
              <path d="M770 160 L640 160" stroke="#00e599" strokeWidth="2" />

              {/* Secondary Path Estimate Filter S^(z) receiving x(n) */}
              <rect x="180" y="135" width="160" height="50" rx="4" fill="#161d19" stroke="#8a7fff" strokeWidth="1.5" />
              <text x="260" y="158" fill="#f0fdf4" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">SECONDARY PATH Ŝ(z)</text>
              <text x="260" y="173" fill="#8a7fff" fontFamily="monospace" fontSize="8" textAnchor="middle">x'(n) = ŝ(n) * x(n)</text>

              {/* Tap from Ref Mic down to Secondary Path filter */}
              <path d="M85 80 L85 160 L180 160" stroke="#00e5ff" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* From Ŝ(z) into Update Engine */}
              <path d="M340 160 L420 160" stroke="#8a7fff" strokeWidth="2" />

              {/* Upward from Update Engine back into W(z) — CLOSING THE LOOP! */}
              <path d="M480 135 L480 105 L280 105 L280 80" stroke="#00e599" strokeWidth="2.5" strokeDasharray="4 2" className="animate-pulse" />
              <text x="380" y="100" fill="#00e599" fontFamily="monospace" fontSize="8" fontWeight="bold" textAnchor="middle">▲ WEIGHT INJECTION (LOOP CLOSED)</text>
            </svg>
          </div>

          <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-[#849589] border-t border-[#143526] pt-3">
            <span>FEEDBACK TOPOLOGY: FULLY CLOSED-LOOP</span>
            <span className="text-[#00e599]">CONVERGENCE TIME CONSTANT: &lt; 15 ms</span>
          </div>
        </div>

        {/* 2-Column Mathematical Derivations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
          
          <div className="p-6 rounded bg-[#161d19] border border-[#3b4a41] flex flex-col gap-3">
            <span className="font-bold text-[#00e599] uppercase text-sm">
              1. SECONDARY PATH ESTIMATE Ŝ(z)
            </span>
            <p className="text-[#bacbbe] text-xs leading-relaxed">
              Without secondary path pre-filtering, phase shifts introduced by the digital-to-analog converter, 
              headphone amplifier, and speaker physical cone cause the LMS gradient to point in the wrong direction—leading 
              to immediate constructive howl (positive feedback).
            </p>
            <div className="p-3 rounded bg-[#0d1511] border border-[#143526] text-[#00e5ff]">
              {"x'(n) = Σ ŝ_j · x(n - j)"}
            </div>
          </div>

          <div className="p-6 rounded bg-[#161d19] border border-[#3b4a41] flex flex-col gap-3">
            <span className="font-bold text-[#00e599] uppercase text-sm">
              2. NORMALIZED GRADIENT UPDATE
            </span>
            <p className="text-[#bacbbe] text-xs leading-relaxed">
              The weight update is normalized by the energy of the filtered reference vector ||x'(n)||², 
              ensuring robust convergence stability across varying acoustic amplitudes from 95 dB SPL up to 135 dB SPL.
            </p>
            <div className="p-3 rounded bg-[#0d1511] border border-[#143526] text-[#00e599]">
              {"w(n+1) = w(n) + [ μ / (||x'(n)||² + ε) ] · e(n) · x'(n)"}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
