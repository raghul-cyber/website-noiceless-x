# NOISELESS-X6 // DESIGN SYSTEM & SPECIFICATION (DESIGN.md)
*Transferred from Google Stitch to Google Antigravity | SIH 2026 Defence & Aerospace Track*

---

## 1. Design Vision & Philosophy
NOISELESS-X6 is a high-fidelity defence and aerospace acoustic engineering website designed for the Smart India Hackathon (SIH) 2026. The aesthetic is strictly **documentary, scientific, and editorial**—reminiscent of high-level aerospace technical disclosures, defence research presentations, and engineering whitepapers.

### Non-Negotiable Directives:
- **ZERO 3D**: Absolutely no Three.js, React Three Fiber, Drei, WebGL 3D, GLB/GLTF models, 3D headsets, 3D soldiers, or procedural 3D elements.
- **Authentic Media**: Grounded entirely in real field stock footage, real documentary photography, and 2D SVG engineering diagrams.
- **Topic-Aware Background Media**: Background media changes dynamically as the user traverses acoustic topics, using a smooth 700–1200ms crossfade.
- **No Fabrications**: No artificial AI soldier portraits, no exaggerated marketing claims, and no fabricated benchmark metrics.

---

## 2. Color Palette & Tactical Design Tokens

The palette is rooted in deep military olive, matte graphite, and surgical signal hues. High contrast, low eye fatigue, and functional semantic meaning are prioritized over flashy gaming aesthetics.

| Token Name | Hex Code | HSL / RGB | Purpose / Semantic Context |
| :--- | :--- | :--- | :--- |
| `--color-bg-base` | `#08100c` | `hsl(150, 33%, 5%)` | Deep tactical black-green; primary viewport ground |
| `--color-bg-surface` | `#0d1511` | `hsl(150, 23%, 7%)` | Chassis panel ground; card backgrounds |
| `--color-bg-elevated`| `#141d18` | `hsl(150, 16%, 10%)` | Interactive hover states, elevated control pods |
| `--color-border-subtle` | `#1c2821` | `hsl(150, 17%, 13%)` | Perimeter divider lines, chassis seams |
| `--color-border-medium` | `#2d3d33` | `hsl(150, 15%, 21%)` | Interactive borders, container framing |
| `--color-border-highlight`| `#3b4a41` | `hsl(150, 11%, 26%)` | Focused or active borders |
| `--color-text-primary` | `#f0fdf4` | `hsl(140, 60%, 97%)` | Headings, critical telemetry, primary copy |
| `--color-text-secondary`| `#bacbbe` | `hsl(135, 14%, 76%)` | Body narrative, technical descriptions |
| `--color-text-muted` | `#64746b` | `hsl(147, 8%, 43%)` | Micro-labels, serial numbers, metadata |
| `--color-signal-mint` | `#00e599` | `hsl(160, 100%, 45%)` | Normal ANC operational state, filtered audio line |
| `--color-signal-cyan` | `#00e5ff` | `hsl(186, 100%, 50%)` | Clean speech waveform, VAD active, audio capture |
| `--color-signal-ai` | `#818cf8` | `hsl(234, 89%, 74%)` | YAMNet feature embedding, latent classification |
| `--color-warning-amber`| `#f59e0b` | `hsl(38, 92%, 50%)` | Impulse detection transient, clipping guard |
| `--color-threat-red` | `#ef4444` | `hsl(0, 84%, 60%)` | Extreme acoustic threat (>125 dB SPL), unmitigated noise |

---

## 3. Typography & Information Hierarchy

Typography is built on modern, razor-sharp geometric and monospaced typefaces imported via Google Fonts:
- **Display & Section Headers**: `Inter`, `Space Grotesk` (Weight: 700 / 800)
- **Body & Editorial Copy**: `Inter` (Weight: 400 / 500, line-height: 1.6)
- **Telemetry, Metrics & Technical Callouts**: `JetBrains Mono` / `ui-monospace` (Weight: 500 / 700, letter-spacing: 0.05em to 0.15em)

### Scale:
- **Hero Title**: `48px` (Mobile) / `64px` (Tablet) / `80px` (Desktop), tracking-tighter, uppercase
- **Section Title (H2)**: `28px` (Mobile) / `36px` (Tablet) / `44px` (Desktop), uppercase
- **Subsection Title (H3)**: `18px` / `22px`, tracking-normal
- **Technical Subhead**: `12px` / `14px` Mono, tracking-widest, uppercase with section number prefix (`SECTION 02 // OPERATIONAL THREAT MATRIX`)
- **Body Regular**: `15px` / `16px`, leading-relaxed
- **Telemetry Readout**: `11px` / `13px` Mono, high contrast

---

## 4. Layout Architecture & Responsive Breakpoints

All sections adhere to a responsive grid system with maximum content width of `1280px` (`max-w-7xl`):
- **Desktop (`>= 1024px`)**:
  - Split editorial layouts (50/50 or 60/40 grid) pairing real photography/video with 2D technical schematics.
  - Full-width cinematic video background with dual dark gradient masking (`to-b from-[#08100c] via-transparent to-[#08100c]`).
  - Spatial 2D engineering schematics with animated SVG signal lines.
- **Tablet (`768px – 1023px`)**:
  - High-density stacked technical sections.
  - Side-by-side metric pods collapsing to 2x2 grids.
  - Video regions cropped with `object-fit: cover` and preserved aspect ratios.
- **Mobile (`< 768px`)**:
  - Verticalized technical storytelling.
  - Full-bleed media strips with high-legibility typographic cards.
  - Technical schematics equipped with horizontal scroll or auto-wrapping blocks.
  - Video play controls / fallback posters to respect mobile data and battery policies.

---

## 5. Media Treatment & Topic-Specific Video Manager

### Principles:
1. **No Generic Video Loops**: Every section has an intentional reason for its background footage.
2. **Crossfade Transitions**: 700ms–1200ms ease-in-out opacity transitions between videos via `BackgroundVideoManager`.
3. **Single Active Playback**: Inactive background videos are paused immediately to maintain smooth 60fps rendering and minimize CPU/GPU load.
4. **Legibility Masking**: All background media is overlaid with:
   - Base opacity reduction (30% to 55%)
   - Contrast enhancement (`contrast-115`, `brightness-90`)
   - Directional radial & linear dark gradient scrims so text remains 100% accessible.
5. **Mobile & Autoplay Fallbacks**: Every video specifies a high-resolution local poster image (`.jpg`). If browser autoplay policy rejects unmuted or low-power video, the poster renders cleanly with an optional interactive toggle.

---

## 6. 2D Engineering Visualizations (Zero 3D)

### A. Click-to-Highlight Hardware Photography (`HeadsetViewerSection`)
- Real photography (`pexels_soldier_headset_closeup.jpg` and `unsplash_soldier_headset_vehicle.jpg`) deployed inside an aerospace chassis frame.
- Interactive 2D SVG hotspot pins:
  1. **External Reference Microphone**: Captures ambient noise field outside acoustic ear cup.
  2. **Internal Error Microphone**: Measures residual acoustic error in ear cavity near the tympanic membrane.
  3. **Noise-Canceling Boom Microphone**: Directional electret capsule with dual-port noise rejection for operator speech.
  4. **Acoustic Seal Cushion**: High-density memory foam providing 22 dB passive high-frequency attenuation.
  5. **Milled Graphite Polymer Shell**: Lightweight, RF-shielded acoustic enclosure.
  6. **Reinforced Braided Wiring Harness**: Mil-spec braided Kevlar cabling routed to waist pouch.
  7. **Raspberry Pi Audio Processing Unit**: Quad-core edge computer running real-time ALSA C++20 DSP engine.

### B. Audio Signal Pipeline (`AudioPipelineSection`)
- 2D SVG signal path connecting:
  `Ref Mic` ➔ `Audio Acquisition` ➔ `STFT & Framing` ➔ `YAMNet Classifier` ➔ `VAD` ➔ `Impulse Detector` ➔ `Intelligent Controller` ➔ `FxLMS / NLMS Filter` ➔ `Anti-Noise Output` ➔ `Speaker Driver` ➔ `Error Mic` ➔ `Adaptive Weight Update`.

### C. FxLMS / NLMS Closed-Loop Diagram (`FxLMSSection`)
- True mathematical feedback loop:
  - Reference signal `x(n)`
  - Primary path transfer function `P(z)`
  - Secondary path estimate `Ŝ(z)`
  - Adaptive FIR filter `W(z)`
  - Anti-noise generation `y(n)`
  - Acoustic summation `d(n) - y'(n) = e(n)`
  - Normalized LMS weight adaptation: `W(n+1) = W(n) + μ e(n) x'(n) / (||x'(n)||^2 + ε)`
  - Animated closed SVG loop visibly circulating feedback.

### D. Intelligent Controller State Machine (`ControllerSection`)
- 2D finite-state diagram with active pulse transitions:
  - `STATE 01: NORMAL ANC` (Quiescent stationary noise reduction)
  - `STATE 02: ADAPTIVE TRACKING` (Dynamic frequency shift tracking)
  - `STATE 03: IMPULSE CLAMP` (Sub-millisecond transient mute & step size freeze)
  - `STATE 04: FAST RECOVERY` (Exponential step size restore to prevent divergence)

### E. Live 2D Visual Simulation (`LiveSimulationSection`)
- Dual-channel real-time visual canvas:
  - Channel A: Time-domain Oscilloscope (Time vs. Amplitude).
  - Channel B: Frequency-domain 16-band Spectrum Analyzer (0 Hz to 8 kHz).
- Interactive parameter panel:
  - Noise sources: Helicopter Rotor, Armored Vehicle, Turboshaft Whine, Wind Turbulence, Machinery, Impulse Shock.
  - Speech preservation toggle.
  - AI classification and ANC active states.
  - Real-time illustrative telemetry: SPL dB, residual dB, active noise class, latency.

---

## 7. Component Library & File Organization
```
src/
├── components/
│   ├── BackgroundVideo/
│   │   └── BackgroundVideoManager.tsx     # Section-aware video crossfader & controller
│   ├── Header/
│   │   └── Navbar.tsx                     # Tactical fixed navigation bar
│   ├── Hero/
│   │   └── HeroSection.tsx                # Hero section with real footage & 2D overlay
│   ├── Problem/
│   │   └── ProblemSection.tsx             # Acoustic threat matrix & vehicle video
│   ├── Environment/
│   │   └── EnvironmentSection.tsx         # Multi-noise profile switcher & helicopter video
│   ├── Communication/
│   │   └── CommunicationSection.tsx       # Tactical speech & cockpit comms video
│   ├── Hardware/
│   │   ├── HeadsetViewerSection.tsx       # 2D click-to-highlight photo annotation
│   │   ├── Exploded2DSection.tsx          # 2D engineering schematic breakdown
│   │   └── PhotoGallerySection.tsx        # Multi-angle editorial photo strip
│   ├── Microphones/
│   │   └── MicrophoneTrioSection.tsx      # Ref mic, Error mic, Comms boom mic details
│   ├── Processor/
│   │   └── RaspberryPiSection.tsx         # Raspberry Pi 4/5 edge architecture schematic
│   ├── AudioPipeline/
│   │   └── AudioPipelineSection.tsx       # 2D SVG signal flow diagram
│   ├── AI/
│   │   ├── YAMNetSection.tsx              # Audio classifier & taxonomy breakdown
│   │   ├── VADSection.tsx                 # Speech preservation & energy envelope
│   │   ├── ImpulseSection.tsx             # Transient detector & fast DSP clamp
│   │   └── ControllerSection.tsx          # 2D state machine diagram
│   ├── ANC/
│   │   └── FxLMSSection.tsx               # 2D closed-loop FxLMS mathematical model
│   ├── Simulation/
│   │   └── LiveSimulationSection.tsx      # 100% 2D oscilloscope & spectrum visualizer
│   ├── Architecture/
│   │   └── SpatialArchitectureSection.tsx # Comprehensive 2D system schematic
│   ├── Datasets/
│   │   ├── DatasetSection.tsx             # 118 Corpora technical header, stats & highlights
│   │   ├── DatasetExplorer.tsx            # Interactive modal explorer, search & filters
│   │   ├── DatasetCard.tsx                # Compact research-style card with external link
│   │   ├── DatasetDetailPanel.tsx         # Detailed inspection panel with provenance
│   │   └── DatasetPipelineMap.tsx         # 2D signal pipeline & architectural purpose matrix
│   ├── Validation/
│   │   └── ValidationSection.tsx          # Verified lab metrics & illustrative simulation
│   ├── TechStack/
│   │   └── TechStackSection.tsx           # Production stack (C++20, RPi, PyTorch, React)
│   ├── CTA/
│   │   └── CTASection.tsx                 # Final call to action & background comms video
│   └── Modal/
│       └── MediaCreditsModal.tsx          # Comprehensive media provenance modal
├── data/
│   ├── datasets.ts                        # Master list of 118 research datasets & corpora
│   ├── mediaManifest.ts                   # Manifest of all videos, photos, and fallbacks
│   └── sectionMedia.ts                    # Section-to-media configuration
├── store/
│   └── useSimulationStore.ts              # Lightweight reactive store for telemetry & states
├── App.tsx                                # Main application coordinating all sections
└── index.css                              # Tailwind & custom tactical CSS utilities
```

---

## 8. Dataset Library Design System (118 Corpora)

The **DATASETS USED** subsystem adheres to a strict military research laboratory editorial standard:
- **Visual Tone**: Deep olive/graphite chassis (`#09110d` to `#111914`), thin surgical borders (`#1e3025`), high-contrast mint accents (`#00e599`), and clean typography.
- **ZERO 3D**: No 3D floating dataset cubes, no WebGL graphs, no spinning 3D nodes. All visualizations are strictly 2D SVG signal pipelines and responsive tabular matrices.
- **Search & Filtering**: Instantaneous client-side keyword search across `name`, `category`, `use`, and `domain`. Live counter (`SHOWING X OF 118 DATASETS`).
- **Research Attribution**: Direct external links with `target="_blank" rel="noopener noreferrer"`. Explicit disclaimer that dataset licensing, access, and redistribution are governed by respective providers.
- **Accessibility**: Full keyboard control (ESC closes explorer modal, tab navigation, aria-labels for external links).

---

## 9. Motion & Micro-Interactions
- Transitions are crisp and purposeful: `150ms–300ms` for button hovers and toggles; `700ms–1200ms` for video crossfades.
- Respects `prefers-reduced-motion`: all CSS animations pause when reduced motion is preferred by the operating system.
- Zero gratuitous 3D rotations, zero bouncing cards, zero generic particle clouds.

