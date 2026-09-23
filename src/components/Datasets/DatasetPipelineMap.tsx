import React from 'react';
import { Database, Cpu, Activity, Shield, ArrowDown, ArrowRight, Radio, Layers, Mic, Sliders } from 'lucide-react';

export const DatasetPipelineMap: React.FC = () => {
  const pipelineSteps = [
    { label: 'DATA SOURCES', sub: '118 Audio Corpora', icon: Database, color: '#00e599' },
    { label: 'AUDIO PREPROCESSING', sub: '16kHz Resampling & Normalization', icon: Radio, color: '#4dffb2' },
    { label: 'FEATURE EXTRACTION', sub: '64-channel Mel-Spectrogram', icon: Activity, color: '#00e5ff' },
    { label: 'YAMNet', sub: 'MobileNet Neural Backbone', icon: Cpu, color: '#38bdf8' },
    { label: 'TASK-SPECIFIC CLASSIFIER', sub: 'Tactical Acoustic Signatures', icon: Layers, color: '#818cf8' },
    { label: 'NOISE REGIME CLASSIFICATION', sub: 'Stationary / Non-Stat / Impulsive', icon: Sliders, color: '#a78bfa' },
    { label: 'VAD (VOICE ACTIVITY)', sub: 'Spectral Formant Isolation', icon: Mic, color: '#00e599' },
    { label: 'INTELLIGENT CONTROLLER', sub: 'Dynamic DSP State Engine', icon: Shield, color: '#00e5ff' },
    { label: 'FxLMS / NLMS', sub: 'Real-time Adaptive Filtering', icon: Activity, color: '#4dffb2' },
    { label: 'ANC & SPEECH PROTECTION', sub: 'Anti-Noise & Vocal Intelligibility', icon: Shield, color: '#00e599' }
  ];

  const purposeMappings = [
    {
      domain: 'Military / Defence',
      arrow: '↓',
      target: 'Noise Classification',
      desc: 'Vehicle, rotary-wing, weaponry, and battleground acoustic threat identification.'
    },
    {
      domain: 'Environmental Noise',
      arrow: '↓',
      target: 'Environmental Robustness',
      desc: 'Broadband urban, field, and indoor ambient interference mitigation.'
    },
    {
      domain: 'Speech Corpora',
      arrow: '↓',
      target: 'Speech Protection / VAD',
      desc: 'Formant tracking and voice activity boundary detection under roar conditions.'
    },
    {
      domain: 'Noisy Speech',
      arrow: '↓',
      target: 'Speech Enhancement',
      desc: 'Recovering critical verbal commands from low SNR radio transmissions.'
    },
    {
      domain: 'RIR / Acoustic Data',
      arrow: '↓',
      target: 'Acoustic Path Simulation',
      desc: 'Primary and secondary transfer path S(z) modeling inside ear cup chassis.'
    },
    {
      domain: 'Machinery / Industrial',
      arrow: '↓',
      target: 'Anomaly & Non-Stationary',
      desc: 'Mechanical vibrations, gearbox whine, and transient mechanical shifts.'
    }
  ];

  return (
    <div className="space-y-12">
      {/* 2D Research Pipeline Execution Architecture */}
      <div className="p-6 sm:p-8 rounded-sm bg-[#111914]/90 border border-[#23382b] backdrop-blur-md relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#1b2b22]">
          <div>
            <div className="text-[10px] font-mono text-[#00e599] uppercase tracking-wider mb-1 font-bold">
              2D SYSTEM PIPELINE FLOW
            </div>
            <h3 className="text-lg font-mono font-bold text-[#f0fdf4]">
              Data-Driven Audio Intelligence Pipeline
            </h3>
          </div>
          <span className="text-[11px] font-mono text-[#849589] bg-[#09110d] px-3 py-1 rounded border border-[#1b2b22] self-start sm:self-auto">
            10-STAGE END-TO-END EXECUTION
          </span>
        </div>

        {/* Pipeline Step Grid with 2D Connectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
          {pipelineSteps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === pipelineSteps.length - 1;

            return (
              <div
                key={step.label}
                className="relative p-3.5 rounded bg-[#09110d] border border-[#1e3025] hover:border-[#00e599]/60 transition-all flex flex-col justify-between group"
              >
                {/* Step Index Badge */}
                <div className="flex items-center justify-between gap-2 mb-2 font-mono text-[9px]">
                  <span className="text-[#00e599] font-bold">STAGE 0{idx + 1}</span>
                  <Icon size={13} style={{ color: step.color }} />
                </div>

                <div className="mb-2">
                  <h4 className="font-mono text-xs font-bold text-[#f0fdf4] group-hover:text-[#00e599] transition-colors leading-tight mb-1">
                    {step.label}
                  </h4>
                  <p className="text-[10px] text-[#819889] font-mono leading-relaxed">
                    {step.sub}
                  </p>
                </div>

                {/* Subtle Directional Arrow for non-last */}
                {!isLast && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#00e599]/60 font-mono text-[10px] pointer-events-none">
                    ▶
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 2D Signal Flow Pulse Line */}
        <div className="mt-5 pt-3 border-t border-[#1b2b22] flex items-center justify-between text-[10px] font-mono text-[#6e8576]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e599] animate-pulse" />
            SYNTHETIC NOISY MIXTURES (CLEAN SPEECH + DEFENCE NOISE + RIR)
          </span>
          <span className="hidden sm:inline text-[#00e599] font-bold">
            LATENCY TARGET: &lt;1.8ms ON RASPBERRY PI
          </span>
        </div>
      </div>

      {/* Dataset Purpose Mapping (2D Matrix) */}
      <div className="p-6 sm:p-8 rounded-sm bg-[#111914]/90 border border-[#23382b] backdrop-blur-md">
        <div className="mb-6 pb-4 border-b border-[#1b2b22]">
          <div className="text-[10px] font-mono text-[#00e599] uppercase tracking-wider mb-1 font-bold">
            ARCHITECTURAL PURPOSE MAPPING
          </div>
          <h3 className="text-lg font-mono font-bold text-[#f0fdf4]">
            Corpora Domain to NOISELESS-X6 Engine Role
          </h3>
          <p className="text-xs text-[#9cb1a2] mt-1 font-sans">
            How specialized acoustic domains train and stress-test specific subsystems in the embedded audio pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
          {purposeMappings.map((map) => (
            <div
              key={map.domain}
              className="p-4 rounded bg-[#09110d] border border-[#1e3025] flex flex-col justify-between hover:border-[#355240] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold mb-1.5">
                  <span className="text-[#f0fdf4]">{map.domain}</span>
                  <span className="text-[#00e599] font-bold">{map.arrow}</span>
                  <span className="text-[#4dffb2]">{map.target}</span>
                </div>
                <div className="h-px bg-[#18281e] my-2" />
                <p className="text-[11px] text-[#8ea495] font-sans leading-relaxed">
                  {map.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
