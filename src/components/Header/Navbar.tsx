import React from 'react';
import { simulationStore, useSimulationStore } from '../../store/useSimulationStore';
import { Shield, Play, Layers, Cpu, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { isPlaying, ancActive } = useSimulationStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08100c]/92 backdrop-blur-md border-b border-[#143526]">
      <div className="w-full max-w-[1480px] mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 xl:gap-6 whitespace-nowrap">
        {/* Official Brand & Logo - strictly single line */}
        <a href="#hero" className="flex items-center gap-2.5 shrink-0 group whitespace-nowrap">
          <img
            src="/logo.png"
            alt="NOISELESS-X6"
            className="h-9 w-9 rounded-full object-cover border border-[#00e599]/40 shadow-[0_0_12px_rgba(0,229,153,0.3)] transition-transform group-hover:scale-105 shrink-0"
          />
          <div className="flex flex-col whitespace-nowrap">
            <span className="font-mono text-xs sm:text-sm font-extrabold tracking-widest text-[#f0fdf4] group-hover:text-[#00e599] transition-colors leading-none whitespace-nowrap">
              NOISELESS-X6
            </span>
            <span className="font-mono text-[8px] sm:text-[9px] tracking-wider text-[#00e599] font-bold leading-none mt-1 whitespace-nowrap">
              TACTICAL ACOUSTIC AI
            </span>
          </div>
        </a>

        {/* Navigation Anchors - strictly single line, no wrapping */}
        <nav className="hidden lg:flex items-center gap-2.5 xl:gap-4 2xl:gap-6 font-mono text-[11px] xl:text-xs tracking-wider uppercase shrink min-w-0 whitespace-nowrap">
          <a href="#problem" className="text-[#849589] hover:text-[#00e599] transition-colors whitespace-nowrap">Problem</a>
          <a href="#simulation" className="text-[#849589] hover:text-[#00e599] transition-colors whitespace-nowrap">Live Sim</a>
          <a href="#headset" className="text-[#849589] hover:text-[#00e599] transition-colors whitespace-nowrap">Headset</a>
          <a href="#exploded" className="text-[#849589] hover:text-[#00e599] transition-colors whitespace-nowrap">Hardware</a>
          <a href="#microphones" className="text-[#849589] hover:text-[#00e599] transition-colors whitespace-nowrap">Sensors</a>
          <a href="#yamnet" className="text-[#849589] hover:text-[#00e599] transition-colors whitespace-nowrap">AI Core</a>
          <a href="#architecture" className="text-[#849589] hover:text-[#00e599] transition-colors whitespace-nowrap">Architecture</a>
          <a href="#datasets" className="text-[#849589] hover:text-[#00e599] transition-colors whitespace-nowrap">Datasets</a>
          <a href="#validation" className="text-[#849589] hover:text-[#00e599] transition-colors whitespace-nowrap">Validation</a>
          <a href="#techstack" className="text-[#849589] hover:text-[#00e599] transition-colors whitespace-nowrap">Tech Stack</a>
        </nav>

        {/* Quick Simulation Status & Action - strictly single line */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 whitespace-nowrap">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#161d19] border border-[#3b4a41] text-[10px] font-mono whitespace-nowrap shrink-0">
            <span className={`w-2 h-2 rounded-full shrink-0 ${ancActive ? 'bg-[#00e599] shadow-[0_0_8px_#00e599]' : 'bg-[#e5c100]'}`} />
            <span className="text-[#dce5de] whitespace-nowrap">{ancActive ? 'ANC ACTIVE' : 'ANC BYPASS'}</span>
          </div>

          <a 
            href="#simulation"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#00e599] hover:bg-[#4dffb2] text-[#08100c] font-mono text-xs font-bold uppercase rounded tracking-wider transition-all shadow-[0_0_12px_rgba(0,229,153,0.3)] whitespace-nowrap shrink-0"
          >
            <Play size={12} className="fill-current shrink-0" />
            <span className="whitespace-nowrap">Launch Sim</span>
          </a>

          <button
            onClick={() => simulationStore.setMediaCreditsModalOpen(true)}
            className="p-1.5 text-[#849589] hover:text-[#f0fdf4] hover:bg-[#161d19] rounded border border-transparent hover:border-[#3b4a41] transition-all shrink-0"
            title="Media Credits & Licensing"
            aria-label="Media Credits & Licensing"
          >
            <FileText size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};
