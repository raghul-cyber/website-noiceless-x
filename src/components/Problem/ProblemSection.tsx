import React, { useRef, useState } from 'react';
import { Volume2, VolumeX, AlertTriangle, ShieldAlert, Activity } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  return (
    <section id="problem" className="relative py-24 border-t border-b border-[#143526] overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#e5c100] tracking-widest uppercase font-bold">
              SECTION 02 // OPERATIONAL THREAT MATRIX
            </span>
            <span className="px-2 py-0.5 rounded bg-[#e5c100]/10 border border-[#e5c100]/30 text-[#e5c100] font-mono text-[9px] font-bold">
              115–130 dB SPL
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f0fdf4] tracking-tight">
            THE DEMANDING ACOUSTIC BATTLEFIELD
          </h2>
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed">
            In modern tactical rotary-wing insertions, armored personnel carriers, and close-air support, 
            environmental sound pressure levels routinely exceed <span className="text-[#e5c100] font-semibold">125 dB SPL</span>. 
            Conventional passive ear defenders muffle the entire acoustic spectrum—destroying verbal speech communication 
            when lives depend on clear tactical coordination.
          </p>
        </div>

        {/* Video & Acoustic Overlay Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Real Military Helicopter Video with Animated Acoustic Wave Overlay */}
          <div className="lg:col-span-7 relative rounded-sm overflow-hidden border border-[#3b4a41] bg-[#08100c] min-h-[380px] sm:min-h-[440px] flex items-center justify-center">
            
            {/* Real Field Video Footage */}
            {!videoError ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/media/posters/pexels_aircraft_land_vehicles_poster.jpg"
                onError={() => setVideoError(true)}
                className="absolute inset-0 w-full h-full object-cover opacity-60 filter contrast-125 grayscale-[20%]"
              >
                <source src="/media/video/pexels_aircraft_land_vehicles.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            ) : (
              <img
                src="/media/posters/pexels_aircraft_land_vehicles_poster.jpg"
                alt="Tactical Aircraft and Combat Vehicles"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
            )}

            {/* Dark Cinematic Vignette & Tactical Scanlines */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08100c] via-transparent to-[#08100c]/80 pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,153,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

            {/* Animated SVG Acoustic Wave Overlay */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 600 400" 
              fill="none" 
              preserveAspectRatio="none"
            >
              {/* Concentric Rotor Blast Wavefronts */}
              <circle cx="300" cy="180" r="80" stroke="#e5c100" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" />
              <circle cx="300" cy="180" r="140" stroke="#e5c100" strokeWidth="2" strokeDasharray="8 6" opacity="0.6" className="animate-ping" style={{ animationDuration: '3s' }} />
              <circle cx="300" cy="180" r="210" stroke="#e5c100" strokeWidth="1.5" opacity="0.3" />
              
              {/* Tactical Target Reticle on Insertion Zone */}
              <circle cx="300" cy="180" r="24" stroke="#00e599" strokeWidth="1" />
              <line x1="260" y1="180" x2="340" y2="180" stroke="#00e599" strokeWidth="1" />
              <line x1="300" y1="140" x2="300" y2="220" stroke="#00e599" strokeWidth="1" />
            </svg>

            {/* Telemetry Chips on Video */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-2.5 py-1 rounded bg-[#08100c]/85 border border-[#3b4a41] text-[10px] font-mono text-[#e5c100]">
              <AlertTriangle size={12} />
              <span>VEHICLE ACOUSTIC FLUX: 124.8 dB SPL</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between font-mono text-[10px] text-[#849589] bg-[#08100c]/90 p-2.5 rounded border border-[#3b4a41]">
              <span>FOOTAGE: PEXELS // AIRCRAFT &amp; COMBAT VEHICLES</span>
              <span className="text-[#00e599]">ACOUSTIC OVERLAY ACTIVE</span>
            </div>
          </div>

          {/* Right Column: Decibel Scale & Tactical Impact Assessment */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* Severe Threat Analysis Cards */}
            <div className="p-4 rounded bg-[#161d19] border border-[#3b4a41] flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#f0fdf4]">MILITARY NOISE EXPOSURE</span>
                <span className="text-xs font-mono text-[#ff3b5c] font-bold">HAZARD CRITICAL</span>
              </div>
              
              {/* dB Scale Visualizer */}
              <div className="flex flex-col gap-1.5 mt-2 font-mono text-[10px]">
                <div className="flex justify-between text-[#849589]">
                  <span>Safe Threshold (NIOSH)</span>
                  <span>85 dB</span>
                </div>
                <div className="w-full h-2 bg-[#08100c] rounded-full overflow-hidden border border-[#143526]">
                  <div className="h-full bg-[#00e599] w-[50%]" />
                </div>

                <div className="flex justify-between text-[#e5c100] mt-1">
                  <span>Helicopter Cabin / APC Transport</span>
                  <span>108–118 dB</span>
                </div>
                <div className="w-full h-2 bg-[#08100c] rounded-full overflow-hidden border border-[#143526]">
                  <div className="h-full bg-[#e5c100] w-[75%]" />
                </div>

                <div className="flex justify-between text-[#ff3b5c] mt-1">
                  <span>External Rotor / Gunfire Shockwave</span>
                  <span>125–135 dB</span>
                </div>
                <div className="w-full h-2 bg-[#08100c] rounded-full overflow-hidden border border-[#143526]">
                  <div className="h-full bg-[#ff3b5c] w-[95%]" />
                </div>
              </div>
            </div>

            {/* Three Critical Failure Modes of Legacy Systems */}
            <div className="grid grid-cols-1 gap-2.5 font-mono text-xs">
              <div className="p-3 rounded bg-[#161d19] border border-[#3b4a41] flex items-start gap-3">
                <ShieldAlert size={16} className="text-[#ff3b5c] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#f0fdf4]">Acoustic Trauma &amp; Hearing Loss:</span>
                  <p className="text-[#849589] text-[11px] mt-0.5 leading-relaxed">
                    Continuous 120+ dB exposure causes irreversible outer hair cell damage within 4 minutes.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded bg-[#161d19] border border-[#3b4a41] flex items-start gap-3">
                <VolumeX size={16} className="text-[#e5c100] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#f0fdf4]">Verbal Masking &amp; Speech Loss:</span>
                  <p className="text-[#849589] text-[11px] mt-0.5 leading-relaxed">
                    Low-frequency rotor harmonics mask human voice formants (300–3000 Hz), halting command execution.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded bg-[#161d19] border border-[#3b4a41] flex items-start gap-3">
                <Activity size={16} className="text-[#00e599] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#f0fdf4]">The NOISELESS-X Solution:</span>
                  <p className="text-[#849589] text-[11px] mt-0.5 leading-relaxed">
                    AI-classified active cancellation targets noise whilst leaving tactical human speech unattenuated.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
