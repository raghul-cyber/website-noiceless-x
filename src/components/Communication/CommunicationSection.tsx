import React from 'react';
import { Radio, Volume2, ShieldCheck, Activity, Award, MessageSquare, AlertTriangle } from 'lucide-react';
import { useSimulationStore } from '../../store/useSimulationStore';

export const CommunicationSection: React.FC = () => {
  const { speechEnabled } = useSimulationStore();

  return (
    <section id="communication" className="relative py-24 border-b border-[#143526] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#00e5ff] tracking-widest uppercase font-bold">
              SECTION 04 // TACTICAL COMMUNICATION
            </span>
            <span className="px-2 py-0.5 rounded bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] font-mono text-[9px] font-bold">
              SPEECH PROTECTION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f0fdf4] tracking-tight">
            WHEN THE ENVIRONMENT GETS LOUD, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#00e599]">
              SPEECH MATTERS MORE.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed">
            In extreme acoustic environments, high ambient noise degrades verbal intelligibility, 
            endangering mission coordination. NOISELESS-X6 isolates vocal frequencies to ensure critical 
            commands remain clear without aggressive over-cancellation.
          </p>
        </div>

        {/* Narrative Chain: ENVIRONMENT → NOISE → SPEECH → INTELLIGIBILITY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 font-mono text-xs">
          <div className="p-4 rounded bg-[#161d19] border border-[#3b4a41] flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-[#849589] block">STAGE 01</span>
              <span className="text-base font-bold text-[#f0fdf4] mt-1 block">ENVIRONMENT</span>
              <p className="text-xs text-[#bacbbe] mt-2 font-sans">
                Rotary aviation cabins, armored transports, and dynamic forward combat operating bases.
              </p>
            </div>
            <div className="text-[10px] text-[#00e5ff] mt-4 pt-2 border-t border-[#143526]">115–130 dB SPL</div>
          </div>

          <div className="p-4 rounded bg-[#161d19] border border-[#3b4a41] flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-[#f59e0b] block">STAGE 02</span>
              <span className="text-base font-bold text-[#f59e0b] mt-1 block">NOISE THREAT</span>
              <p className="text-xs text-[#bacbbe] mt-2 font-sans">
                Continuous harmonic rotor blades, mechanical rumble, and transient weapon discharges.
              </p>
            </div>
            <div className="text-[10px] text-[#f59e0b] mt-4 pt-2 border-t border-[#143526]">ACOUSTIC MASKING</div>
          </div>

          <div className="p-4 rounded bg-[#161d19] border border-[#3b4a41] flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-[#00e599] block">STAGE 03</span>
              <span className="text-base font-bold text-[#00e599] mt-1 block">SPEECH FORMANTS</span>
              <p className="text-xs text-[#bacbbe] mt-2 font-sans">
                Human vocal tract energy focused between 300 Hz and 3.4 kHz protected by VAD gating.
              </p>
            </div>
            <div className="text-[10px] text-[#00e599] mt-4 pt-2 border-t border-[#143526]">VOICE PASS-BAND</div>
          </div>

          <div className="p-4 rounded bg-[#161d19] border border-[#3b4a41] flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-[#00e5ff] block">STAGE 04</span>
              <span className="text-base font-bold text-[#00e5ff] mt-1 block">INTELLIGIBILITY</span>
              <p className="text-xs text-[#bacbbe] mt-2 font-sans">
                Tactical radio instructions heard accurately during high-tempo field operations.
              </p>
            </div>
            <div className="text-[10px] text-[#00e5ff] mt-4 pt-2 border-t border-[#143526]">RESTORED COGNITION</div>
          </div>
        </div>

        {/* Media & 2D Speech Waveform Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Real Photography */}
          <div className="lg:col-span-6 chassis-panel rounded-sm overflow-hidden bg-[#08100c] border border-[#3b4a41]">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src="/media/images/unsplash_soldier_radio.jpg"
                alt="Soldier in camouflage gear with helmet and communication radio"
                className="w-full h-full object-cover filter contrast-[112%] brightness-90 grayscale-[10%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08100c] via-transparent to-[#08100c]/50 pointer-events-none" />

              {/* Real-time 2D Speech Waveform Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
                <div className="bg-[#08100c]/90 p-3 rounded border border-[#3b4a41] backdrop-blur-md">
                  <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                    <span className="text-[#00e5ff] font-bold flex items-center gap-1.5">
                      <Radio size={12} />
                      <span>2D SPEECH TRANSMISSION FORMANT</span>
                    </span>
                    <span className="text-[#00e599] font-bold">VAD PROTECTED</span>
                  </div>

                  <svg className="w-full h-10" viewBox="0 0 300 40" fill="none">
                    <line x1="0" y1="20" x2="300" y2="20" stroke="#1c2821" strokeWidth="1" strokeDasharray="3 3" />
                    {/* Animated Vocal Waveform */}
                    <path
                      d="M0,20 Q15,5 30,20 T60,20 T90,5 T120,35 T150,10 T180,30 T210,12 T240,28 T270,18 T300,20"
                      stroke="#f0fdf4"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#161d19] border-t border-[#143526] flex items-center justify-between font-mono text-[10px] text-[#849589]">
              <span>PHOTO: UNSPLASH // MIKHAIL MAMAEV</span>
              <span className="text-[#00e5ff]">TACTICAL RADIO FIELD CONTEXT</span>
            </div>
          </div>

          {/* Right Column: Communication Engineering Principles */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-6 rounded-sm bg-[#161d19] border border-[#3b4a41]">
              <h3 className="text-xl font-bold text-[#f0fdf4] mb-3">
                Why Standard ANC Fails In Tactical Communications
              </h3>
              <p className="text-sm text-[#bacbbe] leading-relaxed mb-4">
                Consumer ANC headsets assume all acoustic input is unwanted disturbance. In high-stakes defence situations, 
                this indiscriminately erodes consonants and vocal formants (particularly between 1.5 kHz and 3.4 kHz), 
                rendering radio transmissions muffled and unintelligible.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded bg-[#0d1511] border border-[#143526] flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-[#00e599] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#f0fdf4] font-bold block">Selective Sub-Band Freezing</span>
                    <span className="text-[#bacbbe] text-[11px] font-sans">
                      The FxLMS weight adaptation freezes across vocal formant bins when Voice Activity Detection trips.
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#0d1511] border border-[#143526] flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-[#00e5ff] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#f0fdf4] font-bold block">Differential Boom Noise Rejection</span>
                    <span className="text-[#bacbbe] text-[11px] font-sans">
                      Dual-port differential acoustic cancellation rejects ambient cockpit noise arriving from distant angles.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded bg-[#143526]/40 border border-[#3b4a41] font-mono text-xs text-[#bacbbe] flex items-center gap-3">
              <AlertTriangle size={18} className="text-[#f59e0b] shrink-0" />
              <span>
                Empirical Notice: Intelligibility improvements are subject to certified laboratory acoustic mastoid testing.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
