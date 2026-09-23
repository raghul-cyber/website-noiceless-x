import React from 'react';
import { Mic, Activity, Radio, Volume2, ShieldCheck } from 'lucide-react';
import { simulationStore } from '../../store/useSimulationStore';

export const MicrophoneTrioSection: React.FC = () => {
  return (
    <section id="microphones" className="relative py-24 border-b border-[#143526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <span className="font-mono text-xs text-[#00e5ff] tracking-widest uppercase font-bold">
            SECTIONS 06, 07 &amp; 08 // ACOUSTIC TRANSDUCER TRIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f0fdf4] tracking-tight">
            THE THREE SENSOR NODES
          </h2>
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed">
            The NOISELESS-X system relies on three spatially separated, specialized acoustic transducers. 
            Each transducer occupies a mathematically critical location in the active noise cancellation and speech transmission loop.
          </p>
        </div>

        {/* 3 Microphones Deep Dive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* ============================================================ */}
          {/* 06. EXTERNAL REFERENCE MICROPHONE (LEFT EAR CUP) */}
          {/* ============================================================ */}
          <div className="chassis-panel p-6 rounded-sm bg-[#161d19] border border-[#3b4a41] flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="badge-cyan">SECTION 06 // INPUT</span>
                <span className="font-mono text-[10px] text-[#00e5ff] font-bold">LEFT EAR CUP ONLY</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#f0fdf4]">External Reference Microphone</h3>
                <span className="text-xs font-mono text-[#849589] block mt-0.5">Transducer x(t) // Primary Ambient Field</span>
              </div>

              <p className="text-xs sm:text-sm text-[#bacbbe] leading-relaxed">
                Precision-mounted flush on the exterior shell of the <span className="text-[#00e5ff] font-semibold">LEFT ear cup</span>. 
                Captures the incoming primary environmental noise field before it enters the ear cup aperture.
              </p>

              <div className="flex flex-col gap-2 font-mono text-xs pt-2 border-t border-[#143526]">
                <div className="flex justify-between text-[#849589]">
                  <span>Polar Response:</span>
                  <span className="text-[#dce5de]">Omnidirectional with directional acoustic port</span>
                </div>
                <div className="flex justify-between text-[#849589]">
                  <span>Max SPL Tolerance:</span>
                  <span className="text-[#dce5de]">138 dB SPL (Acoustic Hardened)</span>
                </div>
                <div className="flex justify-between text-[#849589]">
                  <span>Acoustic Function:</span>
                  <span className="text-[#00e5ff]">Provides reference vector x(n) to FxLMS</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                simulationStore.setIsolatedPart('ref_mic');
                const el = document.getElementById('headset');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 w-full py-2 rounded bg-[#0d1511] hover:bg-[#00e5ff]/20 text-[#00e5ff] border border-[#3b4a41] hover:border-[#00e5ff] font-mono text-xs font-bold uppercase tracking-wider transition-all"
            >
              Highlight on 2D Headset
            </button>
          </div>

          {/* ============================================================ */}
          {/* 07. INTERNAL ERROR MICROPHONE (EAR CANAL CAVITY) */}
          {/* ============================================================ */}
          <div className="chassis-panel p-6 rounded-sm bg-[#161d19] border border-[#3b4a41] flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="badge-tactical">SECTION 07 // FEEDBACK</span>
                <span className="font-mono text-[10px] text-[#00e599] font-bold">INTERNAL CAVITY</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#f0fdf4]">Internal Error Microphone</h3>
                <span className="text-xs font-mono text-[#849589] block mt-0.5">Transducer e(t) // Residual Error Sensing</span>
              </div>

              <p className="text-xs sm:text-sm text-[#bacbbe] leading-relaxed">
                Positioned inside the internal acoustic cavity immediately adjacent to the speaker driver aperture and 
                operator ear canal entrance. Continuously measures residual acoustic leakage for closed-loop adaptation.
              </p>

              <div className="flex flex-col gap-2 font-mono text-xs pt-2 border-t border-[#143526]">
                <div className="flex justify-between text-[#849589]">
                  <span>Placement:</span>
                  <span className="text-[#dce5de]">Near speaker cone, inside foam cushion</span>
                </div>
                <div className="flex justify-between text-[#849589]">
                  <span>Secondary Path S(z):</span>
                  <span className="text-[#dce5de]">Models DAC → Amp → Speaker → Ear Path</span>
                </div>
                <div className="flex justify-between text-[#849589]">
                  <span>Acoustic Function:</span>
                  <span className="text-[#00e599]">Calibrates FxLMS weight updates e(n)</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                simulationStore.setIsolatedPart('error_mic');
                const el = document.getElementById('headset');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 w-full py-2 rounded bg-[#0d1511] hover:bg-[#00e599]/20 text-[#00e599] border border-[#3b4a41] hover:border-[#00e599] font-mono text-xs font-bold uppercase tracking-wider transition-all"
            >
              Highlight on 2D Headset
            </button>
          </div>

          {/* ============================================================ */}
          {/* 08. BOOM COMMUNICATION MICROPHONE (MOUTH) */}
          {/* ============================================================ */}
          <div className="chassis-panel p-6 rounded-sm bg-[#161d19] border border-[#3b4a41] flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="badge-tactical">SECTION 08 // COMMS</span>
                <span className="font-mono text-[10px] text-[#f0fdf4] font-bold">TACTICAL VOICE</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#f0fdf4]">Boom Communication Mic</h3>
                <span className="text-xs font-mono text-[#849589] block mt-0.5">Transducer s(t) // Tactical Radio Channel</span>
              </div>

              <p className="text-xs sm:text-sm text-[#bacbbe] leading-relaxed">
                Articulated gooseneck boom microphone positioned directly in front of the operator's lips. 
                Features extreme mechanical differential noise cancellation and acoustic foam windscreen.
              </p>

              <div className="flex flex-col gap-2 font-mono text-xs pt-2 border-t border-[#143526]">
                <div className="flex justify-between text-[#849589]">
                  <span>Polar Pattern:</span>
                  <span className="text-[#dce5de]">Bidirectional Noise-Cancelling Gradient</span>
                </div>
                <div className="flex justify-between text-[#849589]">
                  <span>Voice Bandwidth:</span>
                  <span className="text-[#dce5de]">300 Hz – 3,400 Hz (Military Comms)</span>
                </div>
                <div className="flex justify-between text-[#849589]">
                  <span>Acoustic Function:</span>
                  <span className="text-[#f0fdf4]">Direct radio transmission to team</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                simulationStore.setIsolatedPart('boom_mic');
                const el = document.getElementById('headset');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 w-full py-2 rounded bg-[#0d1511] hover:bg-[#4dffb2]/20 text-[#4dffb2] border border-[#3b4a41] hover:border-[#4dffb2] font-mono text-xs font-bold uppercase tracking-wider transition-all"
            >
              Highlight on 2D Headset
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
