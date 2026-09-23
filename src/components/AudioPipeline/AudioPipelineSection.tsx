import React, { useState } from 'react';
import { ArrowRight, Cpu, Radio, Activity, Volume2, ShieldCheck, Zap } from 'lucide-react';

interface PipelineNode {
  id: string;
  name: string;
  domain: 'ACOUSTIC' | 'HARDWARE' | 'DIGITAL' | 'AI_LAYER' | 'DSP_CORE';
  desc: string;
  color: string;
}

const PIPELINE_NODES: PipelineNode[] = [
  { id: '1', name: 'SURROUNDING NOISE', domain: 'ACOUSTIC', desc: 'Primary noise sound field d(t)', color: '#e5c100' },
  { id: '2', name: 'REFERENCE MICROPHONE', domain: 'HARDWARE', desc: 'LEFT ear cup exterior acoustic sensor', color: '#00e5ff' },
  { id: '3', name: 'AUDIO CAPTURE', domain: 'HARDWARE', desc: '24-bit 48kHz ADC on Audio Interface HAT', color: '#00e599' },
  { id: '4', name: 'PREPROCESSING', domain: 'DIGITAL', desc: 'High-pass DC offset & normalization', color: '#00e599' },
  { id: '5', name: 'STFT SPECTROGRAM', domain: 'DIGITAL', desc: 'Short-Time Fourier Transform & Log-Mel', color: '#00e599' },
  { id: '6', name: 'YAMNET CORE', domain: 'AI_LAYER', desc: 'MobileNet embedding extraction (1024-D)', color: '#8a7fff' },
  { id: '7', name: 'TASK CLASSIFIER', domain: 'AI_LAYER', desc: 'Softmax noise classification head', color: '#8a7fff' },
  { id: '8', name: 'NOISE CATEGORY', domain: 'AI_LAYER', desc: 'Stationary / Non-Stationary / Impulsive', color: '#8a7fff' },
  { id: '9', name: 'VAD (VOICE ACTIVITY)', domain: 'AI_LAYER', desc: 'Speech formant detection (300-3400 Hz)', color: '#00e599' },
  { id: '10', name: 'IMPULSE DETECTOR', domain: 'DSP_CORE', desc: 'Fast time-domain peak detector (<1 ms)', color: '#ff3b5c' },
  { id: '11', name: 'INTELLIGENT CONTROLLER', domain: 'DSP_CORE', desc: 'Heuristic parameter & step-size selector', color: '#00e599' },
  { id: '12', name: 'FxLMS / NLMS FILTER', domain: 'DSP_CORE', desc: 'Secondary path compensated adaptive FIR', color: '#00e599' },
  { id: '13', name: 'ANTI-NOISE SIGNAL', domain: 'DSP_CORE', desc: 'Phase-inverted acoustic synthesis -y(n)', color: '#00e5ff' },
  { id: '14', name: 'AUDIO OUTPUT DAC', domain: 'HARDWARE', desc: 'Low-jitter digital-to-analog converter', color: '#00e599' },
  { id: '15', name: 'POWER AMPLIFIER', domain: 'HARDWARE', desc: 'High-current headphone amp stage', color: '#00e599' },
  { id: '16', name: 'SPEAKER DRIVER', domain: 'HARDWARE', desc: 'Neodymium driver inside ear cup', color: '#00e5ff' },
  { id: '17', name: 'ACOUSTIC PATH', domain: 'ACOUSTIC', desc: 'Destructive wave interference in ear cavity', color: '#00e599' },
  { id: '18', name: 'ERROR MICROPHONE', domain: 'HARDWARE', desc: 'Internal residual error pickup sensor', color: '#00e599' },
  { id: '19', name: 'RESIDUAL ERROR e(n)', domain: 'DIGITAL', desc: 'Digitized feedback error voltage', color: '#00e5ff' },
  { id: '20', name: 'ADAPTIVE UPDATE', domain: 'DSP_CORE', desc: 'Gradient update W(n+1) = W(n) + μ e(n) x\'(n)', color: '#00e599' },
];

export const AudioPipelineSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<PipelineNode>(PIPELINE_NODES[0]);

  return (
    <section id="pipeline" className="relative py-24 tactical-grid-bg border-b border-[#143526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <span className="font-mono text-xs text-[#00e599] tracking-widest uppercase font-bold">
            SECTION 11 // END-TO-END DSP SIGNAL ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f0fdf4] tracking-tight">
            20-STAGE AUDIO PIPELINE EXECUTION CHAIN
          </h2>
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed">
            From the ambient acoustic pressure pulse hitting the left reference microphone, through the Raspberry Pi 
            dual AI/DSP pipeline, to physical phase cancellation in the ear canal and closed-loop feedback adaptation.
          </p>
        </div>

        {/* Selected Node Technical Briefing */}
        <div className="chassis-panel p-6 rounded-sm bg-[#161d19] border border-[#3b4a41] mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-[#3b4a41] text-[#00e599] font-bold">
                STAGE {selectedNode.id} OF 20
              </span>
              <span className="font-mono text-[10px] text-[#849589]">DOMAIN: {selectedNode.domain}</span>
            </div>
            <h3 className="text-2xl font-bold text-[#f0fdf4]" style={{ color: selectedNode.color }}>
              {selectedNode.name}
            </h3>
            <p className="text-sm text-[#bacbbe] mt-1">{selectedNode.desc}</p>
          </div>

          <div className="px-4 py-2 rounded bg-[#0d1511] border border-[#143526] font-mono text-xs text-[#849589] shrink-0">
            <span>PIPELINE STATUS: </span>
            <span className="text-[#00e599] font-bold">SYNCHRONIZED DMA STREAM</span>
          </div>
        </div>

        {/* Interactive 20-Node Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2.5 font-mono text-xs">
          {PIPELINE_NODES.map((node, i) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`p-3 rounded text-left transition-all flex flex-col justify-between min-h-[90px] border ${
                  isSelected
                    ? 'bg-[#00e599] text-[#08100c] border-[#00e599] font-bold shadow-[0_0_12px_rgba(0,229,153,0.35)]'
                    : 'bg-[#0d1511] border-[#3b4a41] text-[#849589] hover:text-[#dce5de] hover:border-[#143526]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] opacity-75">{node.id.padStart(2, '0')}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#08100c]' : 'bg-[#3b4a41]'}`} />
                </div>
                <span className="text-[11px] leading-tight font-bold mt-2">{node.name}</span>
                <span className="text-[9px] opacity-60 mt-1">{node.domain}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
