import React from 'react';
import { Cpu, Server, Cable, Zap, Shield, HardDrive, CheckCircle2 } from 'lucide-react';
import { simulationStore } from '../../store/useSimulationStore';

export const RaspberryPiSection: React.FC = () => {
  return (
    <section id="processor" className="relative py-24 tactical-grid-bg border-b border-[#143526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#00e599] tracking-widest uppercase font-bold">
              SECTION 09 // EMBEDDED EDGE COMPUTING
            </span>
            <span className="px-2 py-0.5 rounded bg-[#143526] border border-[#3b4a41] text-[#00e599] font-mono text-[9px] font-bold">
              PLATFORM: RASPBERRY PI
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f0fdf4] tracking-tight">
            WAIST-MOUNTED RASPBERRY PI PROCESSOR UNIT
          </h2>
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed">
            Unlike impractical high-wattage computing platforms, NOISELESS-X is purposefully engineered 
            for the tactical operator using an ultra-low-power <span className="text-[#f0fdf4] font-semibold">Raspberry Pi single-board computer</span> paired with a custom low-noise 
            audio interface HAT, housed in a shockproof cordura waist enclosure.
          </p>
        </div>

        {/* 2-Column Architecture Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Physical Cable Trajectory & Waist Enclosure */}
          <div className="lg:col-span-6 chassis-panel p-6 sm:p-8 rounded-sm bg-[#0d1511] border border-[#3b4a41] flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-[#00e5ff] font-bold uppercase tracking-wider">
                PHYSICAL ERGONOMIC ROUTING: 5-POINT TRAJECTORY
              </span>
              
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded bg-[#161d19] border border-[#3b4a41] flex items-center justify-between">
                  <span className="text-[#849589]">POINT 1:</span>
                  <span className="text-[#f0fdf4] font-bold">LEFT EAR CUP STRAIN RELIEF GLAND</span>
                </div>
                <div className="p-3 rounded bg-[#161d19] border border-[#3b4a41] flex items-center justify-between">
                  <span className="text-[#849589]">POINT 2:</span>
                  <span className="text-[#00e599] font-bold">LEFT SHOULDER RETENTION PADDING CLIP</span>
                </div>
                <div className="p-3 rounded bg-[#161d19] border border-[#3b4a41] flex items-center justify-between">
                  <span className="text-[#849589]">POINT 3:</span>
                  <span className="text-[#f0fdf4] font-bold">TORSO CHEST HARNESS STRAP ROUTING</span>
                </div>
                <div className="p-3 rounded bg-[#161d19] border border-[#3b4a41] flex items-center justify-between">
                  <span className="text-[#849589]">POINT 4:</span>
                  <span className="text-[#00e599] font-bold">COMBAT BELT WAIST MOUNT CLAMP</span>
                </div>
                <div className="p-3 rounded bg-[#161d19] border border-[#3b4a41] flex items-center justify-between">
                  <span className="text-[#849589]">POINT 5:</span>
                  <span className="text-[#e5c100] font-bold">RUGGEDIZED PROCESSOR POUCH INPUT</span>
                </div>
              </div>

              <p className="text-xs text-[#bacbbe] leading-relaxed mt-2">
                This uninterrupted mechanical path ensures maximum operator mobility without snagging risks 
                during high-G aircraft egress or vehicle dismount maneuvers.
              </p>
            </div>

            <button
              onClick={() => {
                simulationStore.setIsolatedPart('rpi_pouch');
                const el = document.getElementById('headset');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 w-full py-2.5 rounded bg-[#161d19] hover:bg-[#00e599] text-[#00e599] hover:text-[#08100c] border border-[#3b4a41] hover:border-[#00e599] font-mono text-xs font-bold uppercase tracking-wider transition-all"
            >
              Highlight Waist Routing on 2D Headset
            </button>
          </div>

          {/* Right Column: Hardware Specification Breakdown */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            
            <div className="p-5 rounded bg-[#161d19] border border-[#3b4a41] flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#f0fdf4] flex items-center gap-2">
                  <Cpu size={16} className="text-[#00e599]" />
                  <span>COMPUTE ARCHITECTURE</span>
                </span>
                <span className="badge-tactical">PREEMPT_RT LINUX</span>
              </div>
              <p className="text-xs text-[#bacbbe] leading-relaxed">
                Quad-Core 64-bit ARM CPU with isolated real-time cores dedicated to executing C++20 FxLMS 
                vectorized filtering without context-switching interruptions.
              </p>
            </div>

            <div className="p-5 rounded bg-[#161d19] border border-[#3b4a41] flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#f0fdf4] flex items-center gap-2">
                  <Server size={16} className="text-[#00e5ff]" />
                  <span>CUSTOM AUDIO INTERFACE HAT</span>
                </span>
                <span className="badge-cyan">24-BIT / 48 kHz</span>
              </div>
              <p className="text-xs text-[#bacbbe] leading-relaxed">
                Integrated high-SNR stereo ADCs and DACs communicating directly via the hardware I2S DMA bus, 
                eliminating USB latency overhead and maintaining microsecond sample synchronization.
              </p>
            </div>

            <div className="p-5 rounded bg-[#161d19] border border-[#3b4a41] flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#f0fdf4] flex items-center gap-2">
                  <Shield size={16} className="text-[#e5c100]" />
                  <span>TACTICAL COMPLIANCE &amp; POWER</span>
                </span>
                <span className="badge-amber">&lt; 7.5W DRAW</span>
              </div>
              <p className="text-xs text-[#bacbbe] leading-relaxed">
                Powered by standard 5V USB-PD combat vest power banks. Eliminates heavy thermal heat sinks 
                and excessive power draw associated with desktop-class edge GPUs.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
