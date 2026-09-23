import React, { useState } from 'react';
import { Plane, Truck, Wind, Zap, Disc, Radio } from 'lucide-react';

interface NoiseProfile {
  id: string;
  title: string;
  category: string;
  spl: string;
  frequencyRange: string;
  videoSrc: string;
  posterSrc: string;
  description: string;
  characteristics: string[];
}

const NOISE_PROFILES: NoiseProfile[] = [
  {
    id: 'rotor',
    title: 'Helicopter Rotor Aerodynamics (BPF)',
    category: 'STATIONARY HARMONIC',
    spl: '118–126 dB SPL',
    frequencyRange: '17 Hz – 250 Hz',
    videoSrc: '/media/video/pexels_military_helicopter_cockpit.mp4',
    posterSrc: '/media/images/pexels_soldier_headset_closeup.jpg',
    description: 'Main rotor blade passing frequency creates severe periodic pressure pulses with high acoustic energy concentrated below 200 Hz, shaking cockpit structures and inducing rapid auditory fatigue.',
    characteristics: [
      'Fundamental BPF: 17.5 Hz (4-blade rotor at 262 RPM)',
      'High-order harmonic series up to 200 Hz',
      'Penetrates passive ear muffs with minimal attenuation',
      'Optimal candidate for FxLMS adaptive cancellation'
    ]
  },
  {
    id: 'cabin',
    title: 'Aviation Cockpit & Turbine Whine',
    category: 'MIXED HARMONIC / TURBULENT',
    spl: '105–116 dB SPL',
    frequencyRange: '800 Hz – 4.5 kHz',
    videoSrc: '/media/video/pexels_soldier_inside_helicopter.mp4',
    posterSrc: '/media/images/unsplash_soldier_headset_vehicle.jpg',
    description: 'Compressor blade stage rotation and turboshaft gearboxes generate piercing tonal whine overlapping human speech perception, directly impairing radio reception intelligibility.',
    characteristics: [
      'Gearbox meshing frequencies: 1.2 kHz & 2.8 kHz',
      'High-frequency broadband airflow boundary layer',
      'Severe speech masking in 1 kHz to 3 kHz band',
      'Requires selective notch tracking and VAD protection'
    ]
  },
  {
    id: 'vehicle',
    title: 'Armored Vehicles & Tactical Transports',
    category: 'BROADBAND MECHANICAL',
    spl: '102–114 dB SPL',
    frequencyRange: '30 Hz – 600 Hz',
    videoSrc: '/media/video/pexels_aircraft_land_vehicles.mp4',
    posterSrc: '/media/images/unsplash_tactical_soldier.jpg',
    description: 'Diesel engine combustion strokes and track suspension vibration transmit severe structure-borne and airborne acoustic rumble inside armored personnel cabins.',
    characteristics: [
      'Combustion cycle rumble: 40 Hz to 120 Hz',
      'Track slap and suspension road turbulence',
      'Non-stationary during gear shifting and acceleration',
      'Demands normalized step-size (NLMS) adaptation'
    ]
  }
];

export const EnvironmentSection: React.FC = () => {
  const [activeProfileId, setActiveProfileId] = useState('rotor');
  const profile = NOISE_PROFILES.find(p => p.id === activeProfileId) || NOISE_PROFILES[0];

  return (
    <section id="environment" className="relative py-24 tactical-grid-bg border-b border-[#143526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <span className="font-mono text-xs text-[#00e599] tracking-widest uppercase font-bold">
            SECTION 03 // SPECTRAL BREAKDOWN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f0fdf4] tracking-tight">
            THE NOISY ENVIRONMENT &amp; HARMONIC TAXONOMY
          </h2>
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed">
            Different tactical vehicles exhibit radically divergent acoustic signatures. 
            Understanding the spectral differences between stationary rotor harmonics, turbulent wind shear, 
            and explosive transients is essential for the NOISELESS-X dual AI/DSP architecture.
          </p>
        </div>

        {/* Profile Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {NOISE_PROFILES.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveProfileId(p.id)}
              className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeProfileId === p.id
                  ? 'bg-[#00e599] text-[#08100c] font-bold shadow-[0_0_12px_rgba(0,229,153,0.3)]'
                  : 'bg-[#161d19] text-[#849589] hover:text-[#f0fdf4] border border-[#3b4a41]'
              }`}
            >
              <span>{p.title.split(' ')[0]}</span>
              <span className="text-[10px] opacity-70">({p.spl.split(' ')[0]})</span>
            </button>
          ))}
        </div>

        {/* Profile Details Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch chassis-panel p-6 sm:p-8 rounded-sm bg-[#0d1511] border border-[#3b4a41]">
          
          {/* Left Column: Video Context */}
          <div className="lg:col-span-6 relative rounded overflow-hidden min-h-[300px] border border-[#3b4a41] bg-[#08100c]">
            <video
              key={profile.videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={profile.posterSrc}
              className="w-full h-full object-cover filter contrast-125"
            >
              <source src={profile.videoSrc} type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#08100c] via-transparent to-transparent pointer-events-none" />

            {/* Profile Overlay Telemetry */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] bg-[#08100c]/85 p-2 rounded border border-[#3b4a41]">
              <span className="text-[#00e5ff] font-bold">{profile.category}</span>
              <span className="text-[#e5c100]">{profile.spl}</span>
            </div>
          </div>

          {/* Right Column: Physical & Mathematical Characteristics */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#00e599] font-bold">{profile.category}</span>
                <span className="text-xs font-mono text-[#849589]">FREQ: {profile.frequencyRange}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#f0fdf4] tracking-tight">{profile.title}</h3>
              <p className="text-sm text-[#bacbbe] mt-2 leading-relaxed">{profile.description}</p>
            </div>

            {/* Key Acoustic Characteristics */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase text-[#849589] tracking-wider font-bold">
                ACOUSTIC SIGNATURE PARAMETERS:
              </span>
              <div className="grid grid-cols-1 gap-2 font-mono text-xs">
                {profile.characteristics.map((c, i) => (
                  <div key={i} className="p-2.5 rounded bg-[#161d19] border border-[#3b4a41] flex items-center gap-2 text-[#dce5de]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e599]" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational Research Note */}
            <div className="p-3 rounded bg-[#143526]/50 border border-[#3b4a41] flex items-center justify-between font-mono text-[10px] text-[#849589]">
              <span>OPERATIONAL BENCHMARK TARGET:</span>
              <span className="text-[#00e599] font-bold">LOW-FREQ NOISE ATTENUATION &gt; 18 dB</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
