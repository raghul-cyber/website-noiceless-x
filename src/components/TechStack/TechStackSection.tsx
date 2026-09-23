import React from 'react';
import { Cpu, Terminal, Code2, Layers, CheckCircle2 } from 'lucide-react';

interface TechItem {
  name: string;
  role: string;
  environment: 'RASPBERRY PI EMBEDDED' | 'HOST / RESEARCH' | 'BROWSER CLIENT' | 'TEST / QA';
  color: string;
}

const TECH_ITEMS: TechItem[] = [
  // Embedded Edge DSP
  { name: 'C++20', role: 'Real-time vectorized FxLMS/NLMS adaptive filter execution engine with NEON SIMD optimizations', environment: 'RASPBERRY PI EMBEDDED', color: '#00e599' },
  { name: 'Raspberry Pi OS / Linux', role: 'PREEMPT_RT low-latency real-time kernel with dedicated core CPU pinning', environment: 'RASPBERRY PI EMBEDDED', color: '#00e599' },
  { name: 'Linux ALSA & I2S', role: 'Direct hardware DMA ring buffer interface with microsecond audio frame synchronization', environment: 'RASPBERRY PI EMBEDDED', color: '#00e599' },
  { name: 'CMake', role: 'Cross-compilation build system targeting ARM Cortex-A72 / A76 embedded processors', environment: 'RASPBERRY PI EMBEDDED', color: '#00e599' },

  // AI & Acoustic ML
  { name: 'TensorFlow Lite / YAMNet', role: 'Quantized neural network extracting 1024-D acoustic embeddings on edge hardware', environment: 'RASPBERRY PI EMBEDDED', color: '#818cf8' },
  { name: 'Python 3.12', role: 'Dataset hygiene, preprocessing pipelines, and offline filter convergence evaluation', environment: 'HOST / RESEARCH', color: '#818cf8' },
  { name: 'PyTorch', role: 'Acoustic feature research, task-specific classifier training, and export pipeline', environment: 'HOST / RESEARCH', color: '#818cf8' },
  { name: 'NumPy & SciPy', role: 'Secondary path transfer function S(z) offline identification and filter coefficient synthesis', environment: 'HOST / RESEARCH', color: '#818cf8' },

  // Web Platform & 2D Scientific Visuals
  { name: 'React 18 & TypeScript', role: 'Componentized tactical engineering telemetry and interactive signal simulation platform', environment: 'BROWSER CLIENT', color: '#00e5ff' },
  { name: 'Vite', role: 'High-speed frontend development server and optimized bundle compiler', environment: 'BROWSER CLIENT', color: '#00e5ff' },
  { name: '2D SVG & HTML5 Canvas', role: 'Mathematical waveform oscilloscope, 16-band spectrum visualizer, and closed-loop diagrams', environment: 'BROWSER CLIENT', color: '#00e599' },
  { name: 'Google Stitch Design System', role: 'Tactical design tokens: deep military green, matte graphite, and phosphor signal palette', environment: 'BROWSER CLIENT', color: '#00e599' },

  // Verification & Testing
  { name: 'GoogleTest (gtest)', role: 'Unit testing C++ adaptive filter convergence, numerical stability, and circular buffer bounds', environment: 'TEST / QA', color: '#f59e0b' },
  { name: 'pytest', role: 'Automated test suite for dataset audio integrity and YAMNet taxonomy mapping verification', environment: 'TEST / QA', color: '#f59e0b' },
];

export const TechStackSection: React.FC = () => {
  return (
    <section id="techstack" className="relative py-24 border-b border-[#143526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <div className="flex items-center gap-2">
            <span className="badge-tactical">SECTION 21 // ENGINEERING STACK</span>
            <span className="font-mono text-xs text-[#00e599]">VERIFIED COMPLIANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f0fdf4] tracking-tight">
            TECHNOLOGY STACK &amp; TARGET PLATFORMS
          </h2>
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed">
            A transparent architectural inventory detailing each software and hardware technology, 
            strictly demarcating embedded Raspberry Pi code from workstation training pipelines and 2D browser visualization.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
          {TECH_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-sm bg-[#161d19] border border-[#3b4a41] hover:border-[#143526] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#08100c] border border-[#3b4a41] text-[#849589]">
                    {item.environment}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                </div>
                <h3 className="text-base font-bold text-[#f0fdf4]" style={{ color: item.color }}>
                  {item.name}
                </h3>
                <p className="text-[#bacbbe] text-xs mt-1.5 leading-relaxed font-sans">
                  {item.role}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#143526] text-[10px] text-[#849589] flex items-center justify-between">
                <span>VERIFIED COMPLIANCE</span>
                <CheckCircle2 size={12} className="text-[#00e599]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
