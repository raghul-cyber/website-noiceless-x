import React, { useState, useEffect } from 'react';
import { useSimulationStore } from '../../store/useSimulationStore';
import { Cpu, GitBranch, Sliders, CheckCircle2, Shield, ArrowRight, RefreshCw, Zap } from 'lucide-react';

export const ControllerSection: React.FC = () => {
  const { telemetry, ancActive, speechEnabled, aiActive } = useSimulationStore();
  const [activeFSMState, setActiveFSMState] = useState<'NORMAL' | 'TRACKING' | 'IMPULSE' | 'RECOVERY'>('NORMAL');

  // Automatic state machine animation cycle
  useEffect(() => {
    if (telemetry.impulseActive) {
      setActiveFSMState('IMPULSE');
      return;
    }

    const interval = setInterval(() => {
      setActiveFSMState((prev) => {
        if (prev === 'NORMAL') return 'TRACKING';
        if (prev === 'TRACKING') return 'IMPULSE';
        if (prev === 'IMPULSE') return 'RECOVERY';
        return 'NORMAL';
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [telemetry.impulseActive]);

  return (
    <section id="controller" className="relative py-24 tactical-grid-bg border-b border-[#143526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <div className="flex items-center gap-2">
            <span className="badge-tactical">SECTION 15 // DECISION ENGINE</span>
            <span className="font-mono text-xs text-[#00e599]">HEURISTIC MULTI-MODAL CONTROLLER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f0fdf4] tracking-tight">
            INTELLIGENT CONTROLLER &amp; PARAMETER TUNING
          </h2>
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed">
            The intelligent controller acts as the executive arbiter between high-level YAMNet acoustic intelligence, 
            low-level VAD voice detection, and real-time DSP impulse flags—dynamically tuning the mathematical convergence 
            parameters of the adaptive filter.
          </p>
        </div>

        {/* 20. ANIMATED 2D STATE MACHINE: NORMAL ANC → ADAPTIVE TRACKING → IMPULSE PROTECT → FAST RECOVERY → NORMAL ANC */}
        <div className="chassis-panel p-6 sm:p-8 rounded-sm bg-[#0d1511] border border-[#3b4a41] mb-8">
          <div className="flex items-center justify-between border-b border-[#143526] pb-3 mb-6 font-mono text-xs">
            <div className="flex items-center gap-2">
              <RefreshCw size={14} className="text-[#00e599] animate-spin" style={{ animationDuration: '8s' }} />
              <span className="text-[#f0fdf4] font-bold">2D FINITE STATE MACHINE (FSM) CYCLE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#849589]">STATE:</span>
              <span className={`font-bold ${
                activeFSMState === 'IMPULSE' ? 'text-[#f59e0b]' : 'text-[#00e599]'
              }`}>
                {activeFSMState === 'NORMAL' && 'NORMAL ANC'}
                {activeFSMState === 'TRACKING' && 'ADAPTIVE TRACKING'}
                {activeFSMState === 'IMPULSE' && 'IMPULSE PROTECT (AMBER)'}
                {activeFSMState === 'RECOVERY' && 'FAST RECOVERY'}
              </span>
            </div>
          </div>

          {/* 4 State Nodes in Continuous Loop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            {/* State 1: NORMAL ANC */}
            <div
              onClick={() => setActiveFSMState('NORMAL')}
              className={`p-5 rounded cursor-pointer transition-all border ${
                activeFSMState === 'NORMAL'
                  ? 'bg-[#143526] border-[#00e599] text-[#f0fdf4] shadow-[0_0_15px_rgba(0,229,153,0.3)]'
                  : 'bg-[#161d19] border-[#3b4a41] text-[#849589] hover:border-[#143526]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-[#00e599] font-bold">STATE 01</span>
                <span className={`w-2 h-2 rounded-full ${activeFSMState === 'NORMAL' ? 'bg-[#00e599] animate-ping' : 'bg-[#3b4a41]'}`} />
              </div>
              <h3 className="text-base font-bold text-[#f0fdf4]">NORMAL ANC</h3>
              <p className="text-[11px] text-[#bacbbe] mt-2 font-sans leading-relaxed">
                Quiescent stationary noise reduction. Deep low-frequency harmonic cancellation using nominal step-size μ = 0.025.
              </p>
              <div className="mt-4 pt-2 border-t border-[#143526] text-[9px] text-[#00e599]">
                TARGET: HARMONIC BPF ROAR
              </div>
            </div>

            {/* State 2: ADAPTIVE TRACKING */}
            <div
              onClick={() => setActiveFSMState('TRACKING')}
              className={`p-5 rounded cursor-pointer transition-all border ${
                activeFSMState === 'TRACKING'
                  ? 'bg-[#143526] border-[#00e5ff] text-[#f0fdf4] shadow-[0_0_15px_rgba(0,229,255,0.3)]'
                  : 'bg-[#161d19] border-[#3b4a41] text-[#849589] hover:border-[#143526]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-[#00e5ff] font-bold">STATE 02</span>
                <span className={`w-2 h-2 rounded-full ${activeFSMState === 'TRACKING' ? 'bg-[#00e5ff] animate-ping' : 'bg-[#3b4a41]'}`} />
              </div>
              <h3 className="text-base font-bold text-[#f0fdf4]">ADAPTIVE TRACKING</h3>
              <p className="text-[11px] text-[#bacbbe] mt-2 font-sans leading-relaxed">
                YAMNet detects engine throttle or aircraft climb. Normalized LMS activates with dynamic energy scaling.
              </p>
              <div className="mt-4 pt-2 border-t border-[#143526] text-[9px] text-[#00e5ff]">
                TARGET: FREQUENCY SHIFTS
              </div>
            </div>

            {/* State 3: IMPULSE PROTECT (AMBER ONLY) */}
            <div
              onClick={() => setActiveFSMState('IMPULSE')}
              className={`p-5 rounded cursor-pointer transition-all border ${
                activeFSMState === 'IMPULSE'
                  ? 'bg-[#f59e0b]/20 border-[#f59e0b] text-[#f0fdf4] shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                  : 'bg-[#161d19] border-[#3b4a41] text-[#849589] hover:border-[#143526]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-[#f59e0b] font-bold">STATE 03 (AMBER)</span>
                <Zap size={14} className={activeFSMState === 'IMPULSE' ? 'text-[#f59e0b] animate-bounce' : 'text-[#3b4a41]'} />
              </div>
              <h3 className="text-base font-bold text-[#f59e0b]">IMPULSE PROTECT</h3>
              <p className="text-[11px] text-[#bacbbe] mt-2 font-sans leading-relaxed">
                Sudden explosive transient detected in &lt;100μs. Step-size instantly frozen to μ = 0.000 to prevent filter explosion.
              </p>
              <div className="mt-4 pt-2 border-t border-[#143526] text-[9px] text-[#f59e0b]">
                ACTION: GAIN CLAMP HALTED
              </div>
            </div>

            {/* State 4: FAST RECOVERY */}
            <div
              onClick={() => setActiveFSMState('RECOVERY')}
              className={`p-5 rounded cursor-pointer transition-all border ${
                activeFSMState === 'RECOVERY'
                  ? 'bg-[#143526] border-[#00e599] text-[#f0fdf4] shadow-[0_0_15px_rgba(0,229,153,0.3)]'
                  : 'bg-[#161d19] border-[#3b4a41] text-[#849589] hover:border-[#143526]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-[#00e599] font-bold">STATE 04</span>
                <span className={`w-2 h-2 rounded-full ${activeFSMState === 'RECOVERY' ? 'bg-[#00e599] animate-ping' : 'bg-[#3b4a41]'}`} />
              </div>
              <h3 className="text-base font-bold text-[#f0fdf4]">FAST RECOVERY</h3>
              <p className="text-[11px] text-[#bacbbe] mt-2 font-sans leading-relaxed">
                Exponential step-size restore within &lt;5ms. Smoothly returns system to Normal ANC without eardrum clicks.
              </p>
              <div className="mt-4 pt-2 border-t border-[#143526] text-[9px] text-[#00e599]">
                TRANSITION: RE-ENTER NOMINAL
              </div>
            </div>
          </div>
        </div>

        {/* Real-Time Parameter Telemetry Bar */}
        <div className="chassis-panel p-6 rounded-sm bg-[#161d19] border border-[#3b4a41] mb-8">
          <div className="flex items-center justify-between mb-4 border-b border-[#143526] pb-3">
            <span className="font-mono text-xs font-bold text-[#f0fdf4] uppercase">
              ACTIVE CONTROLLER STATE TELEMETRY
            </span>
            <span className="badge-tactical">REAL-TIME PARAMETER TUNING</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-3 rounded bg-[#0d1511] border border-[#3b4a41]">
              <span className="text-[#849589] text-[10px] block uppercase">CONVERGENCE STEP-SIZE (μ):</span>
              <span className="text-lg font-bold text-[#00e599] mt-1 block">
                {telemetry.impulseActive ? '0.000 (CLAMPED)' : speechEnabled ? '0.008 (VAD GATED)' : '0.024 (AGGRESSIVE)'}
              </span>
            </div>

            <div className="p-3 rounded bg-[#0d1511] border border-[#3b4a41]">
              <span className="text-[#849589] text-[10px] block uppercase">FILTER ALGORITHM:</span>
              <span className="text-lg font-bold text-[#00e5ff] mt-1 block">
                {telemetry.noiseClass === 'STATIONARY' ? 'FxLMS (HARMONIC)' : 'NLMS (NORMALIZED)'}
              </span>
            </div>

            <div className="p-3 rounded bg-[#0d1511] border border-[#3b4a41]">
              <span className="text-[#849589] text-[10px] block uppercase">YAMNet CONFIDENCE:</span>
              <span className="text-lg font-bold text-[#818cf8] mt-1 block">
                {aiActive ? 'HIGH (0.94)' : 'BYPASS (DEFAULT)'}
              </span>
            </div>

            <div className="p-3 rounded bg-[#0d1511] border border-[#3b4a41]">
              <span className="text-[#849589] text-[10px] block uppercase">VOICE PASS GATE (γ):</span>
              <span className="text-lg font-bold text-[#f0fdf4] mt-1 block">
                {speechEnabled ? 'ACTIVE (1.00)' : 'DORMANT (0.00)'}
              </span>
            </div>
          </div>
        </div>

        {/* Controller Decision Matrix Table */}
        <div className="chassis-panel rounded-sm overflow-hidden bg-[#0d1511] border border-[#3b4a41]">
          <div className="p-4 border-b border-[#143526] font-mono text-xs font-bold text-[#f0fdf4] uppercase">
            CONTROLLER HEURISTIC DECISION MATRIX
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-[#161d19] text-[#849589] border-b border-[#143526]">
                <tr>
                  <th className="p-3">ENVIRONMENT CLASSIFICATION</th>
                  <th className="p-3">VAD STATUS</th>
                  <th className="p-3">IMPULSE FLAG</th>
                  <th className="p-3">SELECTED DSP FILTER</th>
                  <th className="p-3">STEP SIZE (μ)</th>
                  <th className="p-3">TACTICAL OUTCOME</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#143526] text-[#dce5de]">
                <tr className="hover:bg-[#161d19]/50">
                  <td className="p-3 text-[#00e599] font-bold">STATIONARY (Helicopter BPF)</td>
                  <td className="p-3 text-[#849589]">NO SPEECH</td>
                  <td className="p-3 text-[#849589]">OFF</td>
                  <td className="p-3">FxLMS (Harmonic)</td>
                  <td className="p-3 text-[#00e599]">μ = 0.025 (Max)</td>
                  <td className="p-3">Deep low-frequency cancellation</td>
                </tr>
                <tr className="hover:bg-[#161d19]/50">
                  <td className="p-3 text-[#00e599] font-bold">STATIONARY (Helicopter BPF)</td>
                  <td className="p-3 text-[#00e599] font-bold">SPEECH DETECTED</td>
                  <td className="p-3 text-[#849589]">OFF</td>
                  <td className="p-3">FxLMS (Speech Gated)</td>
                  <td className="p-3 text-[#f59e0b]">μ = 0.008 (Constrained)</td>
                  <td className="p-3 text-[#00e599]">Rotor cancelled; voice preserved</td>
                </tr>
                <tr className="hover:bg-[#161d19]/50">
                  <td className="p-3 text-[#00e5ff] font-bold">NON-STATIONARY (Wind/Road)</td>
                  <td className="p-3 text-[#849589]">ANY</td>
                  <td className="p-3 text-[#849589]">OFF</td>
                  <td className="p-3">NLMS (Energy Norm)</td>
                  <td className="p-3 text-[#00e5ff]">μ(n) = μ₀ / (||x||² + ε)</td>
                  <td className="p-3">Prevents filter divergence</td>
                </tr>
                <tr className="hover:bg-[#161d19]/50 bg-[#f59e0b]/5">
                  <td className="p-3 text-[#f59e0b] font-bold">IMPULSIVE (Muzzle Shock)</td>
                  <td className="p-3 text-[#849589]">ANY</td>
                  <td className="p-3 text-[#f59e0b] font-bold">ACTIVE TRIP</td>
                  <td className="p-3 text-[#f59e0b]">FAST DSP CLAMP</td>
                  <td className="p-3 text-[#f59e0b]">μ = 0.000 (Halted)</td>
                  <td className="p-3 text-[#f59e0b]">Instant eardrum protection</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
