import React, { useState } from 'react';
import { Mic, ShieldCheck, Radio, Activity, Volume2 } from 'lucide-react';
import { useSimulationStore, simulationStore } from '../../store/useSimulationStore';

export const VADSection: React.FC = () => {
  const { speechEnabled } = useSimulationStore();
  const [testBurst, setTestBurst] = useState(false);

  const triggerBurst = () => {
    setTestBurst(true);
    simulationStore.setSpeechEnabled(true);
    setTimeout(() => setTestBurst(false), 2500);
  };

  return (
    <section id="vad" className="relative py-24 tactical-grid-bg border-b border-[#143526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <div className="flex items-center gap-2">
            <span className="badge-tactical">SECTION 13 // SPEECH PRESERVATION</span>
            <span className="font-mono text-xs text-[#00e599]">ZERO TACTICAL VOICE ATTENUATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f0fdf4] tracking-tight">
            VOICE ACTIVITY DETECTION (VAD) ENGINE
          </h2>
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed">
            Conventional ANC filters erroneously identify human vocal cords as an unwanted acoustic disturbance—cancelling 
            out team commands. The NOISELESS-X VAD engine continuously isolates the 300 Hz – 3.4 kHz speech envelope 
            to freeze anti-noise synthesis across critical voice sub-bands.
          </p>
        </div>

        {/* VAD Demonstration Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual Waveform & Protection Badge */}
          <div className="lg:col-span-7 chassis-panel p-6 sm:p-8 rounded-sm bg-[#0d1511] border border-[#3b4a41] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#143526] pb-3 mb-4">
                <span className="font-mono text-xs font-bold text-[#f0fdf4] uppercase">
                  VAD SPEECH ENVELOPE MONITOR
                </span>
                
                {/* Dynamic Speech Protection Badge */}
                <div className={`px-2.5 py-1 rounded font-mono text-[10px] font-bold flex items-center gap-1.5 transition-all ${
                  speechEnabled
                    ? 'bg-[#00e599]/20 text-[#00e599] border border-[#00e599] shadow-[0_0_10px_rgba(0,229,153,0.3)]'
                    : 'bg-[#161d19] text-[#849589] border border-[#3b4a41]'
                }`}>
                  <ShieldCheck size={13} />
                  <span>{speechEnabled ? 'SPEECH PROTECTED' : 'AWAITING VOICE BURST'}</span>
                </div>
              </div>

              {/* Simulated Oscilloscope Waveform Display */}
              <div className="h-44 w-full bg-[#08100c] rounded border border-[#143526] relative flex items-center justify-center overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 500 120" preserveAspectRatio="none">
                  {/* Subtle Grid */}
                  <line x1="0" y1="60" x2="500" y2="60" stroke="#143526" strokeWidth="1" strokeDasharray="4 4" />

                  {speechEnabled ? (
                    /* White/Cyan Speech Formant Waveform */
                    <path
                      d="M0,60 Q25,30 50,60 T100,60 T150,20 T180,95 T220,15 T260,105 T300,30 T340,85 T380,50 T420,65 T460,58 T500,60"
                      fill="none"
                      stroke="#f0fdf4"
                      strokeWidth="2.5"
                      className="animate-pulse"
                    />
                  ) : (
                    /* Flat Baseline */
                    <line x1="0" y1="60" x2="500" y2="60" stroke="#3b4a41" strokeWidth="1.5" />
                  )}
                </svg>

                {speechEnabled && (
                  <div className="absolute top-2 right-3 font-mono text-[9px] text-[#00e599] bg-[#0d1511]/90 px-2 py-0.5 rounded border border-[#143526]">
                    HARMONICS: 320 Hz / 850 Hz / 1.8 kHz
                  </div>
                )}
              </div>
            </div>

            {/* Interactive Test Trigger Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-[#143526]">
              <button
                onClick={triggerBurst}
                className="px-5 py-2.5 rounded bg-[#00e599] hover:bg-[#4dffb2] text-[#08100c] font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_12px_rgba(0,229,153,0.3)]"
              >
                SIMULATE VOICE BURST
              </button>

              <div className="font-mono text-xs text-[#849589]">
                <span>STATUS: </span>
                <span className={speechEnabled ? 'text-[#00e599] font-bold' : 'text-[#849589]'}>
                  {speechEnabled ? 'VAD TRIGGER ACTIVE' : 'MONITORING STANDBY'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Mathematical & Functional Operation */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            <div className="p-5 rounded bg-[#161d19] border border-[#3b4a41] flex flex-col gap-2">
              <span className="font-mono text-xs font-bold text-[#f0fdf4] uppercase">
                VAD DUAL-METRIC THRESHOLDING
              </span>
              <p className="text-xs text-[#bacbbe] leading-relaxed">
                Computes short-time energy $E_m$ alongside zero-crossing rate ($ZCR$) in the 300–3400 Hz band. 
                When vocal cord periodicities are detected, VAD outputs flag $V(n) = 1$.
              </p>
            </div>

            <div className="p-5 rounded bg-[#161d19] border border-[#3b4a41] flex flex-col gap-2">
              <span className="font-mono text-xs font-bold text-[#00e599] uppercase">
                ADAPTIVE LEAKAGE SUPPRESSION
              </span>
              <p className="text-xs text-[#bacbbe] leading-relaxed">
                During $V(n) = 1$, the FxLMS weight vector updates are gated to avoid learning speech components as noise, 
                eliminating speech distortion and vocal attenuation.
              </p>
            </div>

            <div className="p-4 rounded bg-[#143526]/50 border border-[#3b4a41] font-mono text-xs text-[#849589]">
              <span className="text-[#00e5ff] font-bold block mb-1">ACOUSTIC EVALUATION PRINCIPLE:</span>
              Intelligibility preservation is validated purely through signal integrity without fabricated PESQ/STOI benchmarks.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
