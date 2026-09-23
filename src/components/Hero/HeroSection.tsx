import React from 'react';
import { ArrowRight, Play, Shield, Activity, Radio, Cpu, Award, Zap, Volume2, CheckCircle2, Film } from 'lucide-react';
import { useSimulationStore, simulationStore } from '../../store/useSimulationStore';

export const HeroSection: React.FC = () => {
  const { ancActive, telemetry, speechEnabled, heroVideoKey } = useSimulationStore();

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* ============================================================ */}
        {/* LEFT COLUMN: MISSION BRIEFING & SYSTEM SPECIFICATION */}
        {/* ============================================================ */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Top Badges Row */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Tactical Defence Engineering Identification Pill with Official Logo */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#143526]/85 border border-[#00e599]/40 text-xs font-mono w-fit backdrop-blur-sm shadow-[0_0_15px_rgba(0,229,153,0.15)]">
              <img src="/logo.png" alt="NOISELESS-X6" className="w-5 h-5 rounded-full object-cover border border-[#00e599]/60" />
              <span className="text-[#f0fdf4] font-bold">TACTICAL ACOUSTIC R&amp;D</span>
              <span className="text-[#3b4a41]">|</span>
              <span className="text-[#00e599] font-bold">MISSION-CRITICAL DEFENCE SYSTEMS</span>
            </div>

            {/* Tactical Live Hero Footage Switcher */}
            <div className="inline-flex items-center gap-1.5 p-1 rounded bg-[#0d1511]/90 border border-[#3b4a41] text-xs font-mono backdrop-blur-sm shadow-md">
              <span className="px-2 py-0.5 text-[10px] text-[#849589] font-semibold flex items-center gap-1">
                <Film size={11} className="text-[#00e599]" />
                <span>FEED:</span>
              </span>
              <button
                type="button"
                onClick={() => simulationStore.setHeroVideoKey('soldierHelicopter')}
                className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all ${
                  heroVideoKey === 'soldierHelicopter'
                    ? 'bg-[#00e599] text-[#08100c] shadow-[0_0_10px_rgba(0,229,153,0.35)]'
                    : 'text-[#bacbbe] hover:text-[#f0fdf4] hover:bg-[#161d19]'
                }`}
                title="Tactical flight cabin footage: soldier wearing helmet and headset"
              >
                SOLDIER FLIGHT
              </button>
              <button
                type="button"
                onClick={() => simulationStore.setHeroVideoKey('helicopterEnvironment02')}
                className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all ${
                  heroVideoKey === 'helicopterEnvironment02'
                    ? 'bg-[#00e599] text-[#08100c] shadow-[0_0_10px_rgba(0,229,153,0.35)]'
                    : 'text-[#bacbbe] hover:text-[#f0fdf4] hover:bg-[#161d19]'
                }`}
                title="1080p Cockpit Avionics & flight maneuvers"
              >
                1080P COCKPIT
              </button>
            </div>
          </div>

          {/* Slogan & Main Headings */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00e5ff] font-bold">
              NOISELESS-X6 // EMBEDDED ACOUSTIC INTELLIGENCE
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#f0fdf4] leading-[1.05]">
              HEAR WHAT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e599] via-[#4dffb2] to-[#00e5ff]">
                MATTERS.
              </span>
            </h1>
            <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-[#849589] mt-1 font-semibold">
              AI-ENABLED ADAPTIVE NOISE CANCELLATION
            </p>
          </div>

          {/* Official Research Supporting Copy */}
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed max-w-xl">
            An embedded adaptive audio system designed to identify changing acoustic conditions, 
            protect speech and support real-time noise cancellation in demanding environments.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#headset"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#00e599] hover:bg-[#4dffb2] text-[#08100c] font-mono text-xs sm:text-sm font-bold uppercase rounded tracking-wider transition-all shadow-[0_0_20px_rgba(0,229,153,0.35)]"
            >
              <span>EXPLORE THE SYSTEM</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="#simulation"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#161d19]/90 hover:bg-[#242c28] text-[#f0fdf4] border border-[#3b4a41] hover:border-[#00e599] font-mono text-xs sm:text-sm font-semibold uppercase rounded tracking-wider transition-all backdrop-blur-sm"
            >
              <Play size={14} className="text-[#00e599] fill-current" />
              <span>RUN LIVE SIMULATION</span>
            </a>
          </div>

          {/* Live System Specification Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#143526]">
            <div className="p-3 rounded bg-[#161d19]/80 border border-[#3b4a41]/60 flex flex-col">
              <span className="text-[10px] font-mono text-[#849589] uppercase">EDGE COMPUTE</span>
              <span className="text-xs font-mono font-bold text-[#f0fdf4] mt-0.5">Raspberry Pi</span>
            </div>

            <div className="p-3 rounded bg-[#161d19]/80 border border-[#3b4a41]/60 flex flex-col">
              <span className="text-[10px] font-mono text-[#849589] uppercase">AI INFERENCE</span>
              <span className="text-xs font-mono font-bold text-[#8a7fff] mt-0.5">YAMNet MobileNet</span>
            </div>

            <div className="p-3 rounded bg-[#161d19]/80 border border-[#3b4a41]/60 flex flex-col">
              <span className="text-[10px] font-mono text-[#849589] uppercase">REF MIC</span>
              <span className="text-xs font-mono font-bold text-[#00e5ff] mt-0.5">Left Ear Cup Ext</span>
            </div>

            <div className="p-3 rounded bg-[#161d19]/80 border border-[#3b4a41]/60 flex flex-col">
              <span className="text-[10px] font-mono text-[#849589] uppercase">SPEECH VAD</span>
              <span className="text-xs font-mono font-bold text-[#00e599] mt-0.5">Zero Attenuation</span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: REAL FIELD PHOTOGRAPHY & 2D HUD OVERLAY */}
        {/* ============================================================ */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="relative rounded-sm overflow-hidden border border-[#3b4a41] bg-[#0d1511] shadow-2xl">
            
            {/* Real Field Photography Card (Zero 3D) */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#08100c]">
              <img
                src="/media/images/unsplash_soldier_headset_vehicle.jpg"
                alt="Tactical soldier wearing communication headset inside transport vehicle"
                className="w-full h-full object-cover filter contrast-[115%] brightness-90 grayscale-[15%] transition-transform duration-700 hover:scale-105"
              />

              {/* Tactical Vignette & HUD Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08100c] via-transparent to-[#08100c]/60 pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,153,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

              {/* Viewport Top Telemetry Header */}
              <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 bg-[#08100c]/85 px-2.5 py-1 rounded border border-[#3b4a41] backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-[#00e599] shadow-[0_0_8px_#00e599] animate-pulse" />
                  <span className="font-mono text-[10px] text-[#00e599] font-bold tracking-wider">
                    OPERATIONAL FIELD CONTEXT
                  </span>
                </div>
                <div className="font-mono text-[9px] text-[#849589] bg-[#08100c]/85 px-2 py-1 rounded border border-[#3b4a41] backdrop-blur-sm">
                  TACTICAL VEHICLE CABIN
                </div>
              </div>

              {/* 2D Audio Waveform Vector Overlay */}
              <div className="absolute bottom-12 left-4 right-4 z-10 pointer-events-none">
                <div className="bg-[#08100c]/90 p-3 rounded border border-[#3b4a41] backdrop-blur-md">
                  <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                    <span className="text-[#00e5ff] font-bold flex items-center gap-1.5">
                      <Activity size={12} />
                      <span>LIVE 2D SIGNAL MONITOR</span>
                    </span>
                    <span className="text-[#00e599] font-bold">
                      {ancActive ? 'CLOSED-LOOP ACTIVE' : 'OPEN-LOOP BYPASS'}
                    </span>
                  </div>

                  {/* 2D Waveform SVG */}
                  <svg className="w-full h-12" viewBox="0 0 400 48" fill="none">
                    {/* Background noise grid */}
                    <line x1="0" y1="24" x2="400" y2="24" stroke="#1c2821" strokeWidth="1" strokeDasharray="3 3" />
                    
                    {/* Primary Acoustic Threat (Amber) */}
                    <path
                      d="M0,24 Q20,6 40,24 T80,24 T120,4 T160,44 T200,8 T240,40 T280,12 T320,36 T360,20 T400,24"
                      stroke="#f59e0b"
                      strokeWidth="1.5"
                      opacity="0.75"
                    />

                    {/* Filtered Speech Output (Mint Cyan) */}
                    <path
                      d="M0,24 Q30,16 60,24 T120,24 T180,14 T210,34 T240,18 T300,28 T360,22 T400,24"
                      stroke="#00e599"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom Image Provenance Bar */}
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between font-mono text-[9px] text-[#849589]">
                <span>PHOTO: UNSPLASH // NAVY MEDICINE</span>
                <span className="text-[#00e5ff]">REFERENCE TRANSDUCER CONTEXT</span>
              </div>
            </div>

            {/* Tactical Card Bottom Data Bar */}
            <div className="p-4 bg-[#161d19] border-t border-[#143526] grid grid-cols-3 gap-2 font-mono text-center">
              <div>
                <span className="text-[10px] text-[#849589] block">EXTERNAL SPL</span>
                <span className="text-sm font-bold text-[#f59e0b] mt-0.5 block">{telemetry.noiseSplDb.toFixed(1)} dB</span>
              </div>
              <div className="border-x border-[#143526]">
                <span className="text-[10px] text-[#849589] block">RESIDUAL AT EAR</span>
                <span className="text-sm font-bold text-[#00e599] mt-0.5 block">{telemetry.residualSplDb.toFixed(1)} dB</span>
              </div>
              <div>
                <span className="text-[10px] text-[#849589] block">SPEECH FORMANT</span>
                <span className="text-sm font-bold text-[#00e5ff] mt-0.5 block">
                  {speechEnabled ? 'PROTECTED' : 'MUTED'}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
