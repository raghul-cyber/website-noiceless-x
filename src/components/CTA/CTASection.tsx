import React from 'react';
import { Play, ArrowRight, FileText, Shield, Award, ExternalLink } from 'lucide-react';
import { simulationStore } from '../../store/useSimulationStore';

export const CTASection: React.FC = () => {
  return (
    <footer id="cta" className="relative pt-24 pb-12 border-t border-[#143526] overflow-hidden">
      
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08100c]/60 via-transparent to-[#08100c]/60 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-[#00e599]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Heroic Closing Card */}
        <div className="chassis-panel p-8 sm:p-14 rounded-sm bg-[#161d19]/90 border border-[#3b4a41] text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#143526] border border-[#00e599]/40 text-xs font-mono text-[#00e599] font-bold uppercase mb-4">
            <Shield size={14} />
            <span>ADVANCED ACOUSTIC DEFENCE RESEARCH DEMONSTRATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f0fdf4] tracking-tight mb-4">
            EMBEDDED ACOUSTIC INTELLIGENCE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e599] to-[#00e5ff]">
              MISSION-READY FOR THE FIELD.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#bacbbe] max-w-2xl mx-auto mb-8 leading-relaxed">
            Eliminating auditory trauma and restoring mission-critical speech intelligibility in the world's most 
            demanding military environments. Grounded in real physics, verified embedded computing on Raspberry Pi, 
            and transparent research methodologies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#simulation"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#00e599] hover:bg-[#4dffb2] text-[#08100c] font-mono text-xs sm:text-sm font-bold uppercase rounded tracking-wider transition-all shadow-[0_0_24px_rgba(0,229,153,0.4)]"
            >
              <Play size={15} className="fill-current" />
              <span>RUN LIVE SIMULATION</span>
            </a>

            <a
              href="#headset"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0d1511] hover:bg-[#242c28] text-[#f0fdf4] border border-[#3b4a41] hover:border-[#00e599] font-mono text-xs sm:text-sm font-semibold uppercase rounded tracking-wider transition-all"
            >
              <span>INSPECT 2D HARDWARE</span>
              <ArrowRight size={15} />
            </a>

            <button
              onClick={() => simulationStore.setMediaCreditsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#143526]/50 hover:bg-[#143526] text-[#00e5ff] border border-[#3b4a41] font-mono text-xs sm:text-sm font-semibold uppercase rounded tracking-wider transition-all"
            >
              <FileText size={15} />
              <span>MEDIA SOURCES &amp; CREDITS</span>
            </button>
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#143526] font-mono text-xs text-[#849589]">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="NOISELESS-X6" className="w-8 h-8 rounded-full object-cover border border-[#00e599]/30 shadow-[0_0_10px_rgba(0,229,153,0.2)]" />
            <span className="font-bold text-[#f0fdf4]">NOISELESS-X6 // EMBEDDED ACOUSTIC INTELLIGENCE R&amp;D</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => simulationStore.setMediaCreditsModalOpen(true)}
              className="text-[#849589] hover:text-[#00e599] transition-colors uppercase tracking-wider flex items-center gap-1"
            >
              <span>Media Sources Modal</span>
              <ExternalLink size={12} />
            </button>
            <a href="#hero" className="text-[#849589] hover:text-[#f0fdf4] transition-colors uppercase tracking-wider">
              Back to Top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
