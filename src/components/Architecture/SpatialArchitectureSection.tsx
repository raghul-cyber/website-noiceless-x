import React, { useState } from 'react';
import { Cpu, Activity, Zap, Radio, Layers, RefreshCw, CheckCircle2, ChevronRight } from 'lucide-react';

interface ArchModule {
  id: string;
  name: string;
  shortTag: string;
  domain: 'HARDWARE' | 'DSP_PIPELINE' | 'AI_LAYER' | 'ACOUSTIC';
  x: number; // SVG coordinate
  y: number;
  width: number;
  height: number;
  color: string;
  desc: string;
  formula?: string;
}

const MODULES: ArchModule[] = [
  // Input Ingest Stage
  {
    id: 'audio_in',
    name: 'AUDIO INPUT (ADC)',
    shortTag: 'INGEST',
    domain: 'HARDWARE',
    x: 40,
    y: 80,
    width: 130,
    height: 60,
    color: '#00e5ff',
    desc: 'Stereo 24-bit 48kHz ADC acquisition from left reference microphone transducer.',
    formula: 'x(n) = ADC\\{d(t)\\}'
  },
  {
    id: 'preproc',
    name: 'PREPROCESSING',
    shortTag: 'DSP',
    domain: 'DSP_PIPELINE',
    x: 205,
    y: 80,
    width: 130,
    height: 60,
    color: '#00e599',
    desc: 'DC-blocking IIR high-pass filtering and circular DMA ring buffer frame windowing.',
    formula: 'y(n) = x(n) - x(n-1) + 0.995 y(n-1)'
  },
  {
    id: 'stft',
    name: 'STFT SPECTROGRAM',
    shortTag: 'TRANSFORM',
    domain: 'DSP_PIPELINE',
    x: 370,
    y: 50,
    width: 140,
    height: 55,
    color: '#00e599',
    desc: 'Short-Time Fourier Transform extracting 64-band log-mel energy distribution.',
    formula: 'X(m, \\omega) = \\sum x(n) w(n-m) e^{-j\\omega n}'
  },
  {
    id: 'yamnet',
    name: 'YAMNET BACKBONE',
    shortTag: 'AI CORE',
    domain: 'AI_LAYER',
    x: 545,
    y: 50,
    width: 140,
    height: 55,
    color: '#818cf8',
    desc: 'Quantized MobileNetV1 depthwise separable CNN outputting 1024-D temporal embeddings.',
    formula: '\\mathbf{e} = \\text{YAMNet}(\\mathbf{M}_{mel})'
  },
  {
    id: 'classifier',
    name: 'TASK CLASSIFIER',
    shortTag: 'AI HEAD',
    domain: 'AI_LAYER',
    x: 720,
    y: 50,
    width: 140,
    height: 55,
    color: '#818cf8',
    desc: 'Categorizes noise into Stationary (BPF), Non-Stationary (Turbulent), or Impulsive (Shock).',
    formula: '\\mathbf{p} = \\text{Softmax}(\\mathbf{W}_c \\mathbf{e})'
  },
  // VAD & Impulse Parallel Tracks
  {
    id: 'vad',
    name: 'VAD ENGINE',
    shortTag: 'SPEECH GUARD',
    domain: 'DSP_PIPELINE',
    x: 370,
    y: 125,
    width: 140,
    height: 55,
    color: '#00e599',
    desc: 'Voice Activity Detection isolating 300-3400 Hz voice formants to freeze cancellation.',
    formula: 'VAD \\in \\{0, 1\\}, \\quad \\gamma = 1.0'
  },
  {
    id: 'impulse',
    name: 'IMPULSE DETECTOR',
    shortTag: 'TRANSIENT',
    domain: 'DSP_PIPELINE',
    x: 370,
    y: 200,
    width: 140,
    height: 55,
    color: '#f59e0b',
    desc: 'Sub-millisecond analog/DSP peak detector triggering instant digital gain clamp.',
    formula: '|x(n)| > \\theta_{thresh} \\implies \\text{Clamp}'
  },
  // Executive Decision Engine
  {
    id: 'controller',
    name: 'INTELLIGENT CONTROLLER',
    shortTag: 'EXECUTIVE',
    domain: 'DSP_PIPELINE',
    x: 545,
    y: 145,
    width: 155,
    height: 65,
    color: '#00e599',
    desc: 'Dynamic state controller scheduling filter step-size μ and algorithm choice.',
    formula: '\\mu(n) = f(\\text{Class}, VAD, \\text{Impulse})'
  },
  // Adaptive Filter Engines
  {
    id: 'fxlms',
    name: 'FXLMS FILTER',
    shortTag: 'ADAPTIVE FIR',
    domain: 'DSP_PIPELINE',
    x: 735,
    y: 130,
    width: 125,
    height: 50,
    color: '#00e599',
    desc: 'Filtered-X Least Mean Squares FIR synthesizing destructive anti-noise.',
    formula: 'y(n) = \\mathbf{w}^T(n) \\mathbf{x}(n)'
  },
  {
    id: 'nlms',
    name: 'NLMS FILTER',
    shortTag: 'NORMALIZED',
    domain: 'DSP_PIPELINE',
    x: 735,
    y: 195,
    width: 125,
    height: 50,
    color: '#00e5ff',
    desc: 'Normalized LMS operating during non-stationary stochastic turbulence.',
    formula: '\\mu_{eff} = \\mu / (\\|\\mathbf{x}(n)\\|^2 + \\epsilon)'
  },
  // Output & Acoustic Stage
  {
    id: 'audio_out',
    name: 'AUDIO OUTPUT (DAC)',
    shortTag: 'HARDWARE',
    domain: 'HARDWARE',
    x: 895,
    y: 150,
    width: 130,
    height: 55,
    color: '#00e599',
    desc: 'Low-jitter 24-bit I2S DAC driving headphone preamplifier stage.',
    formula: 'v_{out}(t) = DAC\\{-y(n)\\}'
  },
  {
    id: 'amp',
    name: 'AMPLIFIER',
    shortTag: 'POWER STAGE',
    domain: 'HARDWARE',
    x: 895,
    y: 235,
    width: 130,
    height: 50,
    color: '#00e599',
    desc: 'Class-D high-current tactical speaker driver amplifier.',
    formula: 'I_{drive} = A_v \\cdot v_{out}'
  },
  {
    id: 'speaker',
    name: 'SPEAKER DRIVER',
    shortTag: 'ACOUSTIC',
    domain: 'ACOUSTIC',
    x: 735,
    y: 275,
    width: 130,
    height: 50,
    color: '#00e5ff',
    desc: '40mm neodymium transducer generating physical anti-phase pressure wave.',
    formula: 'P_{anti}(t) = S(z) * y(n)'
  },
  {
    id: 'error_mic',
    name: 'ERROR MICROPHONE',
    shortTag: 'FEEDBACK',
    domain: 'ACOUSTIC',
    x: 545,
    y: 275,
    width: 140,
    height: 50,
    color: '#00e599',
    desc: 'Internal error capsule measuring residual leakage for closed-loop adaptation.',
    formula: 'e(n) = d(n) - y\'(n)'
  },
  {
    id: 'rpi',
    name: 'RASPBERRY PI COMPUTE',
    shortTag: 'EDGE EMBEDDED',
    domain: 'HARDWARE',
    x: 40,
    y: 235,
    width: 170,
    height: 80,
    color: '#00e599',
    desc: 'Quad-core edge computer running real-time Linux ALSA C++20 DSP engine.',
    formula: 'PREEMPT\\_RT \\quad 48\\text{kHz} \\quad \\Delta t < 3\\text{ms}'
  }
];

export const SpatialArchitectureSection: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<ArchModule>(MODULES[7]); // Controller default

  return (
    <section id="architecture" className="relative py-24 tactical-grid-bg border-b border-[#143526] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#00e599] tracking-widest uppercase font-bold">
              SECTION 18 &amp; 24 // SYSTEM SCHEMATIC
            </span>
            <span className="badge-tactical">100% 2D SCHEMATIC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f0fdf4] tracking-tight">
            COMPLETE 2D SYSTEM ARCHITECTURE SCHEMATIC
          </h2>
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed">
            An engineering schematic illustrating the 15 interlinked software, hardware, 
            and acoustic processing modules across the Raspberry Pi edge embedded platform.
          </p>
        </div>

        {/* Selected Module Detail Banner */}
        <div className="chassis-panel p-5 rounded-sm bg-[#161d19] border border-[#3b4a41] mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1 font-mono text-[10px]">
              <span className="px-2 py-0.5 rounded bg-[#0d1511] text-[#00e599] font-bold border border-[#143526]">
                {selectedModule.domain}
              </span>
              <span className="text-[#849589]">NODE: {selectedModule.id.toUpperCase()}</span>
            </div>
            <h3 className="text-xl font-bold text-[#f0fdf4]" style={{ color: selectedModule.color }}>
              {selectedModule.name}
            </h3>
            <p className="text-xs text-[#bacbbe] mt-1">{selectedModule.desc}</p>
          </div>

          {selectedModule.formula && (
            <div className="p-2.5 rounded bg-[#0d1511] border border-[#143526] font-mono text-xs text-[#00e5ff] shrink-0">
              <span className="text-[9px] text-[#849589] block uppercase">MATHEMATICAL FORMULATION:</span>
              <span className="font-bold">{selectedModule.formula}</span>
            </div>
          )}
        </div>

        {/* 2D Spatial Engineering Schematic (SVG Canvas) */}
        <div className="chassis-panel rounded-sm overflow-hidden bg-[#0d1511] border border-[#3b4a41] p-4 sm:p-6 mb-8">
          <div className="flex items-center justify-between font-mono text-xs text-[#849589] mb-4 border-b border-[#143526] pb-2">
            <span>SCHEMATIC GROUND: RASPBERRY PI + I2S AUDIO CODEC HAT</span>
            <span className="text-[#00e599]">CLICK ANY MODULE TO INSPECT</span>
          </div>

          <div className="w-full overflow-x-auto">
            <svg
              className="w-full min-w-[1020px] h-[370px]"
              viewBox="0 0 1060 370"
              fill="none"
            >
              {/* Raspberry Pi Hardware Boundary Box */}
              <rect
                x="195"
                y="20"
                width="675"
                height="235"
                rx="6"
                fill="#143526"
                fillOpacity="0.12"
                stroke="#143526"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              <text x="210" y="38" fill="#849589" fontFamily="monospace" fontSize="9" fontWeight="bold">
                RASPBERRY PI EMBEDDED DSP / LINUX PREEMPT_RT BOUNDARY
              </text>

              {/* Connecting Signal Lines */}
              {/* Audio In -> Preproc */}
              <path d="M170 110 L205 110" stroke="#00e5ff" strokeWidth="2" markerEnd="url(#arrow-head)" />

              {/* Preproc -> STFT */}
              <path d="M335 95 L370 77" stroke="#00e599" strokeWidth="2" />
              {/* Preproc -> VAD */}
              <path d="M335 110 L370 152" stroke="#00e599" strokeWidth="2" />
              {/* Preproc -> Impulse */}
              <path d="M335 125 L370 227" stroke="#f59e0b" strokeWidth="2" />

              {/* STFT -> YAMNet */}
              <path d="M510 77 L545 77" stroke="#818cf8" strokeWidth="2" />
              {/* YAMNet -> Classifier */}
              <path d="M685 77 L720 77" stroke="#818cf8" strokeWidth="2" />

              {/* Classifier -> Controller */}
              <path d="M790 105 L790 177 L700 177" stroke="#818cf8" strokeWidth="2" />
              {/* VAD -> Controller */}
              <path d="M510 152 L545 165" stroke="#00e599" strokeWidth="2" />
              {/* Impulse -> Controller */}
              <path d="M510 227 L545 190" stroke="#f59e0b" strokeWidth="2" />

              {/* Controller -> FxLMS */}
              <path d="M700 160 L735 155" stroke="#00e599" strokeWidth="2" />
              {/* Controller -> NLMS */}
              <path d="M700 190 L735 220" stroke="#00e5ff" strokeWidth="2" />

              {/* Filters -> Audio Out */}
              <path d="M860 155 L895 175" stroke="#00e599" strokeWidth="2" />
              <path d="M860 220 L895 180" stroke="#00e5ff" strokeWidth="2" />

              {/* Audio Out -> Amp */}
              <path d="M960 205 L960 235" stroke="#00e599" strokeWidth="2" />

              {/* Amp -> Speaker */}
              <path d="M895 260 L865 295" stroke="#00e5ff" strokeWidth="2" />

              {/* Speaker -> Error Mic (Acoustic Cavity) */}
              <path d="M735 300 L685 300" stroke="#00e599" strokeWidth="2" strokeDasharray="4 3" />
              <text x="710" y="318" fill="#849589" fontFamily="monospace" fontSize="8" textAnchor="middle">AIR</text>

              {/* Error Mic -> Adaptive Feedback Loop back to Controller/Filters */}
              <path d="M545 300 L490 300 L490 180 L545 180" stroke="#00e599" strokeWidth="2" strokeDasharray="4 2" />
              <text x="475" y="240" fill="#00e599" fontFamily="monospace" fontSize="8" textAnchor="middle" transform="rotate(-90,475,240)">e(n) FEEDBACK</text>

              {/* RPi Node to Ingest Bus */}
              <path d="M125 235 L125 140" stroke="#143526" strokeWidth="2" strokeDasharray="3 3" />

              {/* Render All 15 Module Nodes */}
              {MODULES.map((m) => {
                const isSelected = selectedModule.id === m.id;
                return (
                  <g
                    key={m.id}
                    onClick={() => setSelectedModule(m)}
                    className="cursor-pointer group"
                  >
                    {/* Node Container Box */}
                    <rect
                      x={m.x}
                      y={m.y}
                      width={m.width}
                      height={m.height}
                      rx="4"
                      fill={isSelected ? '#16281e' : '#0d1511'}
                      stroke={isSelected ? '#00e599' : m.color}
                      strokeWidth={isSelected ? '2.5' : '1.5'}
                      className="transition-all"
                    />

                    {/* Tag Badge */}
                    <rect
                      x={m.x + 8}
                      y={m.y + 8}
                      width={m.width - 16}
                      height="14"
                      rx="2"
                      fill="#08100c"
                      opacity="0.8"
                    />
                    <text
                      x={m.x + m.width / 2}
                      y={m.y + 18}
                      fill={m.color}
                      fontFamily="monospace"
                      fontSize="7.5"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {m.shortTag}
                    </text>

                    {/* Main Name */}
                    <text
                      x={m.x + m.width / 2}
                      y={m.y + 36}
                      fill="#f0fdf4"
                      fontFamily="monospace"
                      fontSize="9.5"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {m.name.split(' ')[0]}
                    </text>
                    {m.name.split(' ').slice(1).join(' ') && (
                      <text
                        x={m.x + m.width / 2}
                        y={m.y + 48}
                        fill="#849589"
                        fontFamily="monospace"
                        fontSize="8"
                        textAnchor="middle"
                      >
                        {m.name.split(' ').slice(1).join(' ')}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="mt-4 pt-3 border-t border-[#143526] flex flex-wrap items-center justify-between font-mono text-[10px] text-[#849589] gap-4">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00e5ff]" />
                <span>Ingest &amp; Conversion</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#818cf8]" />
                <span>YAMNet AI Layer</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00e599]" />
                <span>DSP Execution</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                <span>Transient Protection</span>
              </span>
            </div>
            <span className="text-[#00e599] font-bold">15 MODULE SCHEMATIC // ZERO 3D</span>
          </div>
        </div>

      </div>
    </section>
  );
};
