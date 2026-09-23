import React, { useState } from 'react';
import { Cpu, Layers, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

export const YAMNetSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'STATIONARY' | 'NON_STATIONARY' | 'IMPULSIVE'>('STATIONARY');

  const categories = {
    STATIONARY: {
      name: 'Stationary Periodic Noise',
      examples: 'Helicopter BPF (22 Hz harmonics), Jet turbofan whine, Diesel engine steady-state',
      action: 'Controller selects aggressive step-size μ = 0.025 with narrow notch tracking. Maximum attenuation achieved.',
      color: '#00e599'
    },
    NON_STATIONARY: {
      name: 'Non-Stationary Stochastic Noise',
      examples: 'Wind turbulence, Road surface slap, Cabin ventilation buffet',
      action: 'Controller switches to Normalized LMS (NLMS) with energy normalization to prevent gradient divergence.',
      color: '#00e5ff'
    },
    IMPULSIVE: {
      name: 'Impulsive Shockwave Transients',
      examples: 'Gunfire muzzle blast, Explosive shock, Canopy acoustic snap',
      action: 'Immediate DSP gain clamp activated. YAMNet records event context while fast analog/DSP clamps filter weights.',
      color: '#ff3b5c'
    }
  };

  return (
    <section id="yamnet" className="relative py-24 border-b border-[#143526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <div className="flex items-center gap-2">
            <span className="badge-ai">SECTION 12 // AUDIO INTELLIGENCE</span>
            <span className="font-mono text-xs text-[#8a7fff]">MOBILENET DEPTHWISE CONVOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f0fdf4] tracking-tight">
            YAMNET AUDIO INTELLIGENCE LAYER
          </h2>
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed">
            NOISELESS-X deploys a lightweight YAMNet deep neural network to extract 1024-dimensional acoustic embeddings 
            from incoming audio frames—classifying the threat environment to intelligently optimize DSP adaptation parameters.
          </p>
        </div>

        {/* ============================================================ */}
        {/* MANDATORY RESEARCH & ARCHITECTURAL DISCLAIMER ALERT */}
        {/* ============================================================ */}
        <div className="p-4 sm:p-5 rounded bg-[#143526]/50 border border-[#3b4a41] mb-10 flex items-start gap-3">
          <AlertCircle size={20} className="text-[#8a7fff] shrink-0 mt-0.5" />
          <div className="text-xs text-[#dce5de] leading-relaxed">
            <span className="font-bold text-[#f0fdf4] block font-mono text-[11px] mb-1">
              ARCHITECTURAL INTEGRITY NOTICE:
            </span>
            <span className="text-[#bacbbe]">
              YAMNet does <strong>NOT</strong> perform the active noise cancellation itself. Pretrained generic AudioSet classes 
              are not used as the raw taxonomy. Instead, YAMNet's temporal embeddings feed a custom NOISELESS-X 
              task-specific classifier that categorizes noise into <strong>STATIONARY</strong>, <strong>NON-STATIONARY</strong>, 
              and <strong>IMPULSIVE</strong> to govern the adaptive FxLMS filter's convergence step size.
            </span>
          </div>
        </div>

        {/* Sequence Flow: AUDIO → FRAMING → FEATURE PROCESSING → YAMNET → EMBEDDING → CLASSIFIER → CATEGORY */}
        <div className="chassis-panel p-6 rounded-sm bg-[#161d19] border border-[#3b4a41] mb-10">
          <span className="font-mono text-xs font-bold text-[#8a7fff] uppercase tracking-wider block mb-4">
            AI EXTRACTION INFERENCE SEQUENCE
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2 font-mono text-xs">
            <div className="p-3 rounded bg-[#0d1511] border border-[#3b4a41] text-center">
              <span className="text-[10px] text-[#849589] block">INPUT</span>
              <span className="font-bold text-[#f0fdf4] mt-1 block">AUDIO</span>
              <span className="text-[9px] text-[#849589]">16 kHz Resampled</span>
            </div>

            <div className="p-3 rounded bg-[#0d1511] border border-[#3b4a41] text-center">
              <span className="text-[10px] text-[#849589] block">STAGE 1</span>
              <span className="font-bold text-[#f0fdf4] mt-1 block">FRAMING</span>
              <span className="text-[9px] text-[#849589]">0.96s Window</span>
            </div>

            <div className="p-3 rounded bg-[#0d1511] border border-[#3b4a41] text-center">
              <span className="text-[10px] text-[#849589] block">STAGE 2</span>
              <span className="font-bold text-[#f0fdf4] mt-1 block">LOG-MEL</span>
              <span className="text-[9px] text-[#849589]">64 Mel Bands</span>
            </div>

            <div className="p-3 rounded bg-[#143526] border border-[#8a7fff] text-center">
              <span className="text-[10px] text-[#8a7fff] block">CORE</span>
              <span className="font-bold text-[#f0fdf4] mt-1 block">YAMNET</span>
              <span className="text-[9px] text-[#8a7fff]">MobileNet V1</span>
            </div>

            <div className="p-3 rounded bg-[#0d1511] border border-[#3b4a41] text-center">
              <span className="text-[10px] text-[#849589] block">REPRESENTATION</span>
              <span className="font-bold text-[#8a7fff] mt-1 block">EMBEDDING</span>
              <span className="text-[9px] text-[#849589]">1024-D Vector</span>
            </div>

            <div className="p-3 rounded bg-[#0d1511] border border-[#3b4a41] text-center">
              <span className="text-[10px] text-[#849589] block">TASK HEAD</span>
              <span className="font-bold text-[#00e599] mt-1 block">CLASSIFIER</span>
              <span className="text-[9px] text-[#849589]">Softmax Dense Head</span>
            </div>

            <div className="p-3 rounded bg-[#143526] border border-[#00e599] text-center">
              <span className="text-[10px] text-[#00e599] block">DECISION</span>
              <span className="font-bold text-[#f0fdf4] mt-1 block">CATEGORY</span>
              <span className="text-[9px] text-[#00e599]">3-Class Threat</span>
            </div>
          </div>
        </div>

        {/* Interactive 3-Category Exploration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(['STATIONARY', 'NON_STATIONARY', 'IMPULSIVE'] as const).map((cat) => {
            const data = categories[cat];
            const isSelected = activeCategory === cat;
            return (
              <div
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`chassis-panel p-5 rounded-sm cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-[#161d19] border-[#8a7fff] shadow-[0_0_12px_rgba(138,127,255,0.25)]'
                    : 'bg-[#0d1511] border-[#3b4a41] hover:border-[#143526]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold" style={{ color: data.color }}>
                    {cat}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#8a7fff]' : 'bg-[#3b4a41]'}`} />
                </div>
                <h4 className="text-base font-bold text-[#f0fdf4]">{data.name}</h4>
                <div className="mt-3 text-xs text-[#849589] font-mono">
                  <span className="text-[#dce5de] block mb-1">Examples:</span>
                  <p className="leading-relaxed">{data.examples}</p>
                </div>
                <div className="mt-3 p-2.5 rounded bg-[#08100c] border border-[#143526] text-xs font-mono text-[#bacbbe]">
                  <span className="text-[#8a7fff] block mb-0.5">DSP Control Action:</span>
                  {data.action}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
