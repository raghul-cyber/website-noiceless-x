import React, { useState } from 'react';
import { Layers, ShieldCheck, Activity, Cpu, Disc, CheckCircle2 } from 'lucide-react';

interface LayerItem {
  id: string;
  number: string;
  name: string;
  category: 'CHASSIS' | 'ACOUSTIC' | 'SENSOR' | 'ELECTRONICS';
  thickness: string;
  material: string;
  engineeringRole: string;
}

const LAYERS: LayerItem[] = [
  {
    id: 'layer-1',
    number: '01',
    name: 'Milled Graphite Polymer Outer Shell',
    category: 'CHASSIS',
    thickness: '2.4 mm',
    material: 'Carbon-loaded Nylon 12 (PA12)',
    engineeringRole: 'High-impact structural armor shielding internal components and reflecting incident high-angle sound waves.'
  },
  {
    id: 'layer-2',
    number: '02',
    name: 'External Reference Microphone Port',
    category: 'SENSOR',
    thickness: 'Flush Aperture',
    material: 'Stainless Steel Mesh + Sintered Bronze Filter',
    engineeringRole: 'Direct acoustic path for reference vector x(t) while preventing dust, moisture, and high-velocity wind turbulence ingress.'
  },
  {
    id: 'layer-3',
    number: '03',
    name: 'Electromagnetic Interference (EMI) RF Shield',
    category: 'ELECTRONICS',
    thickness: '0.15 mm',
    material: 'Vapor-deposited Mu-Metal / Copper Foil',
    engineeringRole: 'Suppresses radio-frequency interference originating from military aircraft avionics, UHF radars, and jamming suites.'
  },
  {
    id: 'layer-4',
    number: '04',
    name: '40mm Neodymium Acoustic Cancellation Driver',
    category: 'ACOUSTIC',
    thickness: '12.0 mm',
    material: 'Titanium-coated Mylar Diaphragm (N45 NdFeB)',
    engineeringRole: 'Synthesizes inverted anti-phase acoustic pressure waves -y(t) with ultra-low total harmonic distortion (<0.2% at 100 dB SPL).'
  },
  {
    id: 'layer-5',
    number: '05',
    name: 'Internal Error Microphone Node',
    category: 'SENSOR',
    thickness: '3.0 mm Capsule',
    material: 'Omnidirectional Electret Condenser Transducer',
    engineeringRole: 'Measures residual acoustic cancellation error e(t) near the ear canal opening to dynamically update filter weights.'
  },
  {
    id: 'layer-6',
    number: '06',
    name: 'Viscoelastic Memory Foam Acoustic Cushion',
    category: 'ACOUSTIC',
    thickness: '22.0 mm',
    material: 'Slow-recovery Open-cell Polyurethane Foam',
    engineeringRole: 'Provides airtight acoustic sealing against helmet straps and temporal bone, delivering ~22 dB passive attenuation above 1 kHz.'
  }
];

export const Exploded2DSection: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<LayerItem>(LAYERS[0]);

  return (
    <section id="exploded" className="relative py-24 border-b border-[#143526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#00e599] tracking-widest uppercase font-bold">
              SECTION 10 // 2D MECHANICAL &amp; ACOUSTIC STACKUP
            </span>
            <span className="badge-tactical">SCHEMATIC STACKUP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f0fdf4] tracking-tight">
            2D EAR CUP TRANSDUCER &amp; ACOUSTIC SCHEMATIC
          </h2>
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed">
            A strictly 2D layered engineering breakdown detailing the mechanical enclosure, 
            acoustic isolation seals, and transducer integration inside each ear cup assembly.
          </p>
        </div>

        {/* 2D Layer Breakdown Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 2D Schematic Graphic Viewport */}
          <div className="lg:col-span-7 chassis-panel p-6 rounded-sm bg-[#08100c] border border-[#3b4a41]">
            <div className="flex items-center justify-between border-b border-[#143526] pb-3 mb-6 font-mono text-xs">
              <span className="text-[#f0fdf4] font-bold">2D SCHEMATIC CROSS-SECTION</span>
              <span className="text-[#00e599]">SELECT LAYER TO INSPECT SPECIFICATION</span>
            </div>

            {/* Interactive 2D Layer Visualizer */}
            <div className="space-y-3 font-mono">
              {LAYERS.map((layer) => {
                const isSelected = selectedLayer.id === layer.id;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setSelectedLayer(layer)}
                    className={`w-full p-4 rounded text-left transition-all border flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#143526] border-[#00e599] text-[#f0fdf4] shadow-[0_0_15px_rgba(0,229,153,0.25)]'
                        : 'bg-[#161d19] border-[#3b4a41] text-[#849589] hover:text-[#dce5de] hover:border-[#143526]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold ${
                        isSelected ? 'bg-[#00e599] text-[#08100c]' : 'bg-[#0d1511] text-[#849589]'
                      }`}>
                        {layer.number}
                      </span>
                      <div>
                        <span className="text-sm font-bold block">{layer.name}</span>
                        <span className="text-[10px] text-[#849589]">{layer.category} // {layer.material}</span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs text-[#00e5ff] font-bold">{layer.thickness}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-[#143526] flex items-center justify-between font-mono text-[10px] text-[#849589]">
              <span>ZERO 3D // SCIENTIFIC 2D SCHEMATIC</span>
              <span className="text-[#00e599]">TOTAL PASSIVE ISOLATION: ~22 dB SPL</span>
            </div>
          </div>

          {/* Right Column: Layer Specification Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="chassis-panel p-6 rounded-sm bg-[#161d19] border border-[#3b4a41]">
              <div className="flex items-center justify-between mb-3 border-b border-[#143526] pb-3 font-mono text-xs">
                <span className="text-[#00e599] font-bold">LAYER {selectedLayer.number} DETAILS</span>
                <span className="text-[#849589]">{selectedLayer.category}</span>
              </div>

              <h3 className="text-2xl font-bold text-[#f0fdf4] mb-2">
                {selectedLayer.name}
              </h3>

              <div className="space-y-4 font-mono text-xs mt-4">
                <div className="p-3 rounded bg-[#0d1511] border border-[#143526]">
                  <span className="text-[#849589] text-[10px] uppercase block mb-1">MATERIAL SPECIFICATION:</span>
                  <span className="text-[#f0fdf4] font-bold">{selectedLayer.material}</span>
                </div>

                <div className="p-3 rounded bg-[#0d1511] border border-[#143526]">
                  <span className="text-[#849589] text-[10px] uppercase block mb-1">CALCULATED THICKNESS:</span>
                  <span className="text-[#00e5ff] font-bold">{selectedLayer.thickness}</span>
                </div>

                <div>
                  <span className="text-[#849589] text-[10px] uppercase block mb-1">ENGINEERING ROLE:</span>
                  <p className="text-[#bacbbe] font-sans text-sm leading-relaxed">
                    {selectedLayer.engineeringRole}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded bg-[#08100c] border border-[#3b4a41] font-mono text-xs text-[#849589] flex items-center gap-3">
              <CheckCircle2 size={16} className="text-[#00e599] shrink-0" />
              <span>
                Engineered to meet military aerospace temperature (-40°C to +85°C) and salt-fog environmental durability.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
