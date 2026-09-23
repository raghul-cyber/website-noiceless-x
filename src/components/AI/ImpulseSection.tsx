import React, { useState } from 'react';
import { Zap, ShieldAlert, AlertTriangle, CheckCircle2, RotateCcw } from 'lucide-react';
import { simulationStore } from '../../store/useSimulationStore';

export const ImpulseSection: React.FC = () => {
  const [impulseState, setImpulseState] = useState<'IDLE' | 'FLASH' | 'CLAMP' | 'RECOVERY'>('IDLE');

  const triggerImpulse = () => {
    // Stage 1: Amber/Red Flash
    setImpulseState('FLASH');
    simulationStore.setState(prev => ({
      telemetry: { ...prev.telemetry, impulseActive: true }
    }));

    // Stage 2: Hardware Gain Clamp (200ms)
    setTimeout(() => {
      setImpulseState('CLAMP');
    }, 300);

    // Stage 3: Fast Recovery (<5ms time constant, visual demonstration 800ms)
    setTimeout(() => {
      setImpulseState('RECOVERY');
    }, 1100);

    // Reset to idle
    setTimeout(() => {
      setImpulseState('IDLE');
      simulationStore.setState(prev => ({
        telemetry: { ...prev.telemetry, impulseActive: false }
      }));
    }, 2200);
  };

  return (
    <section id="impulse" className="relative py-24 border-b border-[#143526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <div className="flex items-center gap-2">
            <span className="badge-amber">SECTION 14 // TRANSIENT PROTECTION</span>
            <span className="font-mono text-xs text-[#e5c100]">&lt; 1 ms DSP PEAK CLAMP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f0fdf4] tracking-tight">
            FAST DSP IMPULSE TRANSIENT DETECTOR
          </h2>
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed">
            Muzzle blasts, artillery shockwaves, and cabin canopy snaps generate explosive acoustic transients 
            exceeding 140 dB SPL within microseconds. NOISELESS-X deploys a pure time-domain DSP peak detector 
            that clamps amplifier gain instantaneously—without waiting for deep neural network framing latency.
          </p>
        </div>

        {/* Transient State Machine Card */}
        <div className={`chassis-panel p-6 sm:p-8 rounded-sm transition-all duration-300 border ${
          impulseState === 'FLASH'
            ? 'bg-[#e5c100]/20 border-[#e5c100] shadow-[0_0_30px_rgba(229,193,0,0.5)]'
            : impulseState === 'CLAMP'
            ? 'bg-[#ff3b5c]/15 border-[#ff3b5c] shadow-[0_0_20px_rgba(255,59,92,0.4)]'
            : impulseState === 'RECOVERY'
            ? 'bg-[#00e599]/15 border-[#00e599]'
            : 'bg-[#161d19] border-[#3b4a41]'
        }`}>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#143526] pb-4 mb-6">
            <div>
              <span className="font-mono text-xs text-[#849589] uppercase tracking-wider block">
                ACTIVE TRANSIENT PIPELINE STATUS
              </span>
              <span className={`text-xl font-bold font-mono ${
                impulseState === 'FLASH' ? 'text-[#e5c100]' :
                impulseState === 'CLAMP' ? 'text-[#ff3b5c]' :
                impulseState === 'RECOVERY' ? 'text-[#00e599]' : 'text-[#f0fdf4]'
              }`}>
                {impulseState === 'IDLE' && 'MONITORING PEAK ENVELOPE [NOMINAL]'}
                {impulseState === 'FLASH' && 'AMBER FLASH // IMPULSE DETECTED!'}
                {impulseState === 'CLAMP' && 'HARDWARE GAIN CLAMP ENGAGED'}
                {impulseState === 'RECOVERY' && 'SUB-5MS CONVERGENCE RECOVERY COMPLETE'}
              </span>
            </div>

            <button
              onClick={triggerImpulse}
              disabled={impulseState !== 'IDLE'}
              className="px-5 py-2.5 rounded bg-[#e5c100] hover:bg-[#f59e0b] disabled:opacity-50 text-[#08100c] font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_12px_rgba(229,193,0,0.4)]"
            >
              TRIGGER IMPULSE BURST
            </button>
          </div>

          {/* 4-Stage State Visualizer */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className={`p-4 rounded border ${impulseState === 'FLASH' ? 'bg-[#e5c100]/30 border-[#e5c100]' : 'bg-[#0d1511] border-[#3b4a41]'}`}>
              <span className="text-[10px] text-[#e5c100] font-bold block mb-1">STAGE 1</span>
              <span className="font-bold text-[#f0fdf4] block">AMBER FLASH</span>
              <span className="text-[#849589] text-[10px] block mt-1">Transient energy threshold tripped in &lt;100μs.</span>
            </div>

            <div className={`p-4 rounded border ${impulseState === 'FLASH' ? 'bg-[#e5c100]/30 border-[#e5c100]' : 'bg-[#0d1511] border-[#3b4a41]'}`}>
              <span className="text-[10px] text-[#e5c100] font-bold block mb-1">STAGE 2</span>
              <span className="font-bold text-[#f0fdf4] block">IMPULSE DETECTED</span>
              <span className="text-[#849589] text-[10px] block mt-1">Analog/DSP comparator latches transient event.</span>
            </div>

            <div className={`p-4 rounded border ${impulseState === 'CLAMP' ? 'bg-[#ff3b5c]/30 border-[#ff3b5c]' : 'bg-[#0d1511] border-[#3b4a41]'}`}>
              <span className="text-[10px] text-[#ff3b5c] font-bold block mb-1">STAGE 3</span>
              <span className="font-bold text-[#f0fdf4] block">PROTECTION CLAMP</span>
              <span className="text-[#849589] text-[10px] block mt-1">Speaker gain clamped to protect eardrum from acoustic trauma.</span>
            </div>

            <div className={`p-4 rounded border ${impulseState === 'RECOVERY' ? 'bg-[#00e599]/30 border-[#00e599]' : 'bg-[#0d1511] border-[#3b4a41]'}`}>
              <span className="text-[10px] text-[#00e599] font-bold block mb-1">STAGE 4</span>
              <span className="font-bold text-[#f0fdf4] block">FAST RECOVERY</span>
              <span className="text-[#849589] text-[10px] block mt-1">Adaptive filter weights smoothly restore baseline within 5ms.</span>
            </div>
          </div>

          {/* Sub-Millisecond Physics Rationale Note */}
          <div className="mt-6 p-3 rounded bg-[#08100c] border border-[#143526] font-mono text-xs text-[#849589]">
            <span className="text-[#e5c100] font-bold">RESEARCH DIRECTIVE: </span>
            Do not require YAMNet for the immediate transient response. 
            YAMNet operates on 960ms audio frames, which is too slow for ballistic shockwaves. 
            The fast DSP detector responds in under 0.5 milliseconds directly on the I2S sample stream.
          </div>

        </div>

      </div>
    </section>
  );
};
