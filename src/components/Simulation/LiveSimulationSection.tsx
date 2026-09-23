import React, { useRef, useEffect, useState } from 'react';
import { useSimulationStore, simulationStore, NoiseType } from '../../store/useSimulationStore';
import { SIMULATION_STEPS, generateWaveformSamples } from '../../simulation/controller/SimulationEngine';
import { Play, Pause, RotateCcw, AlertTriangle, CheckCircle2, ChevronRight, Activity, Radio, Cpu, Mic, Speaker } from 'lucide-react';

export const LiveSimulationSection: React.FC = () => {
  const {
    isPlaying,
    activeStateStep,
    noiseSources,
    speechEnabled,
    aiActive,
    ancActive,
    showFeedback,
    telemetry
  } = useSimulationStore();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameId = useRef<number>(0);
  const timeRef = useRef<number>(0);

  // Active step info
  const stepInfo = SIMULATION_STEPS.find(s => s.step === activeStateStep) || SIMULATION_STEPS[0];

  // Auto-progress state steps when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      simulationStore.setState(prev => ({
        activeStateStep: prev.activeStateStep >= 10 ? 1 : prev.activeStateStep + 1
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Render Dual Oscilloscope & FFT Spectrum onto Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      timeRef.current += 0.02;
      const width = canvas.width;
      const height = canvas.height;

      // Clear Canvas Void
      ctx.fillStyle = '#08100c';
      ctx.fillRect(0, 0, width, height);

      // Draw Grid Lines (Green Chassis Seam)
      ctx.strokeStyle = 'rgba(20, 53, 38, 0.4)';
      ctx.lineWidth = 1;
      const gridSpacing = 24;
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Generate Waveform & FFT Data
      const sampleCount = 240;
      const { before, after, spectrumBefore, spectrumAfter } = generateWaveformSamples(
        sampleCount,
        timeRef.current,
        noiseSources,
        speechEnabled,
        ancActive,
        telemetry.impulseActive
      );

      // Center Divider Line
      ctx.strokeStyle = '#143526';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.stroke();

      const halfWidth = width / 2;
      const waveHeight = height * 0.45;
      const fftHeight = height * 0.35;

      // ============================================================
      // LEFT SIDE: BEFORE (NOISE + SPEECH)
      // ============================================================
      const midYLeft = waveHeight * 0.55;
      ctx.beginPath();
      ctx.strokeStyle = telemetry.impulseActive ? '#ff3b5c' : '#e5c100'; // Amber noise / Red impulse
      ctx.lineWidth = 1.8;
      for (let i = 0; i < sampleCount; i++) {
        const x = 12 + (i / sampleCount) * (halfWidth - 24);
        const y = midYLeft + before[i] * (waveHeight * 0.35);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // FFT Spectrum Bins (Left)
      const binWidthLeft = (halfWidth - 24) / spectrumBefore.length;
      for (let b = 0; b < spectrumBefore.length; b++) {
        const binH = spectrumBefore[b] * (fftHeight - 10);
        const bx = 12 + b * binWidthLeft;
        const by = height - 12 - binH;
        ctx.fillStyle = b < 8 ? 'rgba(229, 193, 0, 0.7)' : 'rgba(132, 149, 137, 0.5)';
        ctx.fillRect(bx, by, binWidthLeft - 2, binH);
      }

      // ============================================================
      // RIGHT SIDE: AFTER (CLEANER SPEECH REPRESENTATION)
      // ============================================================
      const midYRight = waveHeight * 0.55;
      ctx.beginPath();
      ctx.strokeStyle = '#00e599'; // Mint green clean speech
      ctx.lineWidth = 2.0;
      for (let i = 0; i < sampleCount; i++) {
        const x = halfWidth + 12 + (i / sampleCount) * (halfWidth - 24);
        const y = midYRight + after[i] * (waveHeight * 0.35);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // FFT Spectrum Bins (Right)
      const binWidthRight = (halfWidth - 24) / spectrumAfter.length;
      for (let b = 0; b < spectrumAfter.length; b++) {
        const binH = spectrumAfter[b] * (fftHeight - 10);
        const bx = halfWidth + 12 + b * binWidthRight;
        const by = height - 12 - binH;
        // Low frequencies attenuated, speech formants highlighted in mint
        ctx.fillStyle = b >= 4 && b <= 18 ? 'rgba(0, 229, 153, 0.85)' : 'rgba(20, 53, 38, 0.6)';
        ctx.fillRect(bx, by, binWidthRight - 2, binH);
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animFrameId.current);
  }, [noiseSources, speechEnabled, ancActive, telemetry.impulseActive]);

  const noiseButtons: { type: NoiseType; label: string }[] = [
    { type: 'helicopter', label: 'Helicopter BPF' },
    { type: 'vehicle', label: 'Diesel Transport' },
    { type: 'wind', label: 'Wind Turbulence' },
    { type: 'machinery', label: 'Gearbox Machinery' },
    { type: 'crowd', label: 'Ambient Noise' },
    { type: 'impulse', label: 'Gunfire Impulse' },
  ];

  return (
    <section id="simulation" className="relative py-24 border-b border-[#143526] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Mandatory Disclaimers */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#00e599] tracking-widest uppercase font-bold">
                SECTION 04 // REAL-TIME EVALUATION
              </span>
              <span className="badge-tactical">
                LIVE VISUAL SIMULATION
              </span>
              <span className="badge-amber">
                ILLUSTRATIVE SIMULATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f0fdf4] tracking-tight">
              LIVE SYSTEM ACOUSTIC SIMULATION
            </h2>
            <p className="text-xs sm:text-sm text-[#849589] font-mono">
              Note: Telemetry represents browser-synthesized acoustic models. Empirical hardware figures marked as NOT BENCHMARKED.
            </p>
          </div>

          {/* Master Transport Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => simulationStore.setPlaying(!isPlaying)}
              className={`flex items-center gap-2 px-4 py-2 rounded font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                isPlaying 
                  ? 'bg-[#161d19] text-[#e5c100] border border-[#e5c100]/40 hover:bg-[#e5c100]/10' 
                  : 'bg-[#00e599] text-[#08100c] hover:bg-[#4dffb2]'
              }`}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} className="fill-current" />}
              <span>{isPlaying ? 'PAUSE STEPPER' : 'START SIMULATION'}</span>
            </button>

            <button
              onClick={() => simulationStore.resetSimulation()}
              className="p-2 rounded bg-[#161d19] hover:bg-[#242c28] text-[#849589] hover:text-[#f0fdf4] border border-[#3b4a41] transition-colors"
              title="Reset Simulation"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* DUAL OSCILLOSCOPE & FFT SPECTRUM DISPLAY */}
        {/* ============================================================ */}
        <div className="chassis-panel rounded-sm overflow-hidden bg-[#08100c] border border-[#3b4a41] mb-8">
          
          {/* Viewport Headers */}
          <div className="grid grid-cols-2 border-b border-[#143526] p-3 font-mono text-xs">
            <div className="flex items-center justify-between pr-4 border-r border-[#143526]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e5c100]" />
                <span className="font-bold text-[#f0fdf4]">BEFORE: NOISE + SPEECH</span>
              </div>
              <span className="text-[10px] text-[#e5c100]">RAW INGEST (LEFT REF MIC)</span>
            </div>

            <div className="flex items-center justify-between pl-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00e599]" />
                <span className="font-bold text-[#f0fdf4]">AFTER: CLEANER SPEECH REPRESENTATION</span>
              </div>
              <span className="text-[10px] text-[#00e599]">ATTENUATED EAR CAVITY</span>
            </div>
          </div>

          {/* Canvas Rendering Area */}
          <div className="relative h-[280px] sm:h-[340px] w-full bg-[#08100c]">
            <canvas
              ref={canvasRef}
              width={1000}
              height={340}
              className="w-full h-full block"
            />

            {/* Scope Center Labels */}
            <div className="absolute top-2 left-3 font-mono text-[9px] text-[#849589] pointer-events-none">
              TIME DOMAIN WAVEFORM [±1.5 V]
            </div>
            <div className="absolute top-2 right-3 font-mono text-[9px] text-[#849589] pointer-events-none">
              TIME DOMAIN RESIDUAL [±1.5 V]
            </div>
            <div className="absolute bottom-2 left-3 font-mono text-[9px] text-[#849589] pointer-events-none">
              FFT SPECTRUM: 0 Hz – 4 kHz
            </div>
            <div className="absolute bottom-2 right-3 font-mono text-[9px] text-[#849589] pointer-events-none">
              FFT SPECTRUM: 0 Hz – 4 kHz
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* INTERACTIVE CONTROLS & TOGGLES MATRIX */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
          
          {/* Noise Source Selector Bank */}
          <div className="md:col-span-6 chassis-panel p-5 rounded-sm bg-[#161d19] border border-[#3b4a41]">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-[#f0fdf4] uppercase tracking-wider">
                NOISE SOURCE GENERATOR
              </span>
              <span className="font-mono text-[10px] text-[#e5c100]">MULTI-SOURCE FIELD</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {noiseButtons.map((btn) => {
                const active = noiseSources[btn.type];
                return (
                  <button
                    key={btn.type}
                    onClick={() => simulationStore.toggleNoiseSource(btn.type)}
                    className={`p-2.5 rounded font-mono text-xs font-semibold uppercase tracking-wider text-left transition-all border ${
                      active
                        ? btn.type === 'impulse'
                          ? 'bg-[#ff3b5c]/20 border-[#ff3b5c] text-[#ff3b5c] shadow-[0_0_8px_rgba(255,59,92,0.4)]'
                          : 'bg-[#e5c100]/20 border-[#e5c100] text-[#e5c100] shadow-[0_0_8px_rgba(229,193,0,0.3)]'
                        : 'bg-[#0d1511] border-[#3b4a41] text-[#849589] hover:text-[#dce5de]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px]">{btn.label}</span>
                      <span className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-current' : 'bg-[#3b4a41]'}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* DSP & Speech Processing Mode Toggles */}
          <div className="md:col-span-6 chassis-panel p-5 rounded-sm bg-[#161d19] border border-[#3b4a41]">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-[#f0fdf4] uppercase tracking-wider">
                DSP &amp; VOICE PROTECTION MODES
              </span>
              <span className="font-mono text-[10px] text-[#00e599]">CLOSED-LOOP CONTROLS</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
              {/* Speech Voice Activity Toggle */}
              <button
                onClick={() => simulationStore.setSpeechEnabled(!speechEnabled)}
                className={`p-2.5 rounded font-mono text-xs font-semibold uppercase tracking-wider text-left transition-all border ${
                  speechEnabled
                    ? 'bg-[#00e599]/20 border-[#00e599] text-[#00e599] shadow-[0_0_8px_rgba(0,229,153,0.3)]'
                    : 'bg-[#0d1511] border-[#3b4a41] text-[#849589]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>VOICE SIGNAL (VAD)</span>
                  <span className={`w-2 h-2 rounded-full ${speechEnabled ? 'bg-[#00e599]' : 'bg-[#3b4a41]'}`} />
                </div>
                <span className="text-[9px] text-[#849589] block mt-1">300 Hz - 3.4 kHz Formants</span>
              </button>

              {/* ANC Active Destructive Filter Toggle */}
              <button
                onClick={() => simulationStore.setAncActive(!ancActive)}
                className={`p-2.5 rounded font-mono text-xs font-semibold uppercase tracking-wider text-left transition-all border ${
                  ancActive
                    ? 'bg-[#00e599]/20 border-[#00e599] text-[#00e599] shadow-[0_0_8px_rgba(0,229,153,0.3)]'
                    : 'bg-[#ff3b5c]/20 border-[#ff3b5c] text-[#ff3b5c]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>ANC FILTER [FxLMS]</span>
                  <span className={`w-2 h-2 rounded-full ${ancActive ? 'bg-[#00e599]' : 'bg-[#ff3b5c]'}`} />
                </div>
                <span className="text-[9px] text-[#849589] block mt-1">{ancActive ? 'Phase Inversion ON' : 'Bypass (Direct Noise)'}</span>
              </button>

              {/* AI Classifier Active */}
              <button
                onClick={() => simulationStore.setAiActive(!aiActive)}
                className={`p-2.5 rounded font-mono text-xs font-semibold uppercase tracking-wider text-left transition-all border ${
                  aiActive
                    ? 'bg-[#8a7fff]/20 border-[#8a7fff] text-[#8a7fff]'
                    : 'bg-[#0d1511] border-[#3b4a41] text-[#849589]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>YAMNet AI CORE</span>
                  <span className={`w-2 h-2 rounded-full ${aiActive ? 'bg-[#8a7fff]' : 'bg-[#3b4a41]'}`} />
                </div>
                <span className="text-[9px] text-[#849589] block mt-1">Dynamic μ Step-Size</span>
              </button>

              {/* Feedback Loop Show */}
              <button
                onClick={() => simulationStore.setShowFeedback(!showFeedback)}
                className={`p-2.5 rounded font-mono text-xs font-semibold uppercase tracking-wider text-left transition-all border ${
                  showFeedback
                    ? 'bg-[#00e5ff]/20 border-[#00e5ff] text-[#00e5ff]'
                    : 'bg-[#0d1511] border-[#3b4a41] text-[#849589]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>ERROR FEEDBACK</span>
                  <span className={`w-2 h-2 rounded-full ${showFeedback ? 'bg-[#00e5ff]' : 'bg-[#3b4a41]'}`} />
                </div>
                <span className="text-[9px] text-[#849589] block mt-1">Secondary Path S(z)</span>
              </button>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* 10-STATE PROGRESSION TIMELINE */}
        {/* ============================================================ */}
        <div className="chassis-panel p-6 rounded-sm bg-[#161d19] border border-[#3b4a41]">
          
          <div className="flex items-center justify-between mb-4 border-b border-[#143526] pb-3">
            <span className="font-mono text-xs font-bold text-[#00e599] uppercase tracking-wider">
              10-STAGE DSP SIGNAL TRAJECTORY ({activeStateStep}/10)
            </span>
            <span className="font-mono text-[10px] text-[#849589]">CLICK ANY STAGE TO INSPECT</span>
          </div>

          {/* 10 Step Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-1.5 mb-6">
            {SIMULATION_STEPS.map((s) => (
              <button
                key={s.step}
                onClick={() => simulationStore.setStateStep(s.step)}
                className={`p-2 rounded font-mono text-center transition-all flex flex-col items-center gap-1 ${
                  activeStateStep === s.step
                    ? 'bg-[#00e599] text-[#08100c] font-bold shadow-[0_0_10px_rgba(0,229,153,0.3)]'
                    : 'bg-[#0d1511] text-[#849589] hover:text-[#f0fdf4] border border-[#3b4a41]'
                }`}
              >
                <span className="text-[10px] leading-none">STAGE</span>
                <span className="text-xs font-bold leading-none">{s.step.toString().padStart(2, '0')}</span>
              </button>
            ))}
          </div>

          {/* Active Step Detailed Card */}
          <div className="p-5 rounded bg-[#0d1511] border border-[#143526] flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="badge-tactical">{stepInfo.badge}</span>
              <span className="font-mono text-xs text-[#00e5ff]">HARDWARE: {stepInfo.hardwareStage}</span>
            </div>

            <h4 className="text-xl font-bold text-[#f0fdf4]">{stepInfo.title}</h4>
            <p className="text-sm text-[#bacbbe] leading-relaxed">{stepInfo.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-[#143526] font-mono text-xs">
              <div className="p-2.5 rounded bg-[#161d19] border border-[#3b4a41]">
                <span className="text-[#849589] text-[10px] block uppercase">Physical Signal Flow:</span>
                <span className="text-[#00e599] font-medium">{stepInfo.signalFlow}</span>
              </div>
              <div className="p-2.5 rounded bg-[#161d19] border border-[#3b4a41]">
                <span className="text-[#849589] text-[10px] block uppercase">Mathematical Formulation:</span>
                <span className="text-[#e5c100] font-mono">{stepInfo.mathFormula}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
