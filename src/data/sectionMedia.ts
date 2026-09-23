export type BackgroundMediaType = 'video' | 'image' | 'dark_technical';

export interface SectionMediaConfig {
  sectionId: string;
  topicName: string;
  mediaType: BackgroundMediaType;
  mediaKey?: string; // Key in MEDIA_MANIFEST.videos or MEDIA_MANIFEST.images
  overlayOpacity: number; // 0.0 to 1.0 (darkness level for text legibility)
  audioReason: string;
  trimStartTime?: number; // In seconds
}

export const SECTION_MEDIA_MAP: Record<string, SectionMediaConfig> = {
  hero: {
    sectionId: 'hero',
    topicName: 'Tactical Aviation & Soldier Flight Operations',
    mediaType: 'video',
    mediaKey: 'soldierHelicopter',
    overlayOpacity: 0.38,
    audioReason: 'Soldier in flight wearing tactical helmet and headset in high-noise rotary cabin.'
  },
  problem: {
    sectionId: 'problem',
    topicName: 'Vehicle & Combat Acoustic Threat Matrix',
    mediaType: 'video',
    mediaKey: 'aircraftVehicles',
    overlayOpacity: 0.45,
    audioReason: 'Multi-vehicle and combat air threat matrix generating 115-130 dB SPL.'
  },
  environment: {
    sectionId: 'environment',
    topicName: '1080p Cockpit Avionics & Rotor Acoustics',
    mediaType: 'video',
    mediaKey: 'helicopterEnvironment02',
    overlayOpacity: 0.42,
    audioReason: 'Full 1080p military cockpit instrument panel and flight maneuvers.'
  },
  communication: {
    sectionId: 'communication',
    topicName: 'Tactical Team Radio & Speech Intelligibility',
    mediaType: 'video',
    mediaKey: 'cockpitHelicopter',
    overlayOpacity: 0.44,
    audioReason: 'Cockpit and team radio communication where clear vocal transmission is vital.'
  },
  headset: {
    sectionId: 'headset',
    topicName: 'Hardware Transducer Enclosure & Architecture',
    mediaType: 'video',
    mediaKey: 'soldierHelicopter',
    overlayOpacity: 0.48,
    audioReason: 'Scientific inspection of external ear cup shell and acoustic seals in flight.'
  },
  microphones: {
    sectionId: 'microphones',
    topicName: 'Acoustic Transducer Trio Physical Placements',
    mediaType: 'video',
    mediaKey: 'soldierHelicopter',
    overlayOpacity: 0.48,
    audioReason: 'Reference, error, and boom microphone nodes in tactical air cabin.'
  },
  processor: {
    sectionId: 'processor',
    topicName: 'Raspberry Pi Embedded ALSA C++20 Processing',
    mediaType: 'video',
    mediaKey: 'aircraftVehicles',
    overlayOpacity: 0.48,
    audioReason: 'Low-latency real-time embedded computing in vehicle fleets.'
  },
  exploded: {
    sectionId: 'exploded',
    topicName: '2D Mechanical & Acoustic Stackup',
    mediaType: 'video',
    mediaKey: 'soldiersHelicopter',
    trimStartTime: 4.5,
    overlayOpacity: 0.48,
    audioReason: 'Transducer chassis layer-by-layer schematic analysis.'
  },
  pipeline: {
    sectionId: 'pipeline',
    topicName: '20-Stage End-to-End Audio Pipeline Execution',
    mediaType: 'video',
    mediaKey: 'aircraftVehicles',
    overlayOpacity: 0.48,
    audioReason: 'Continuous real-time audio frame execution across combat scenarios.'
  },
  yamnet: {
    sectionId: 'yamnet',
    topicName: 'YAMNet MobileNet Feature Extraction & Classification',
    mediaType: 'video',
    mediaKey: 'helicopterEnvironment02',
    overlayOpacity: 0.45,
    audioReason: 'Neural network inference classifying rotorcraft and jet acoustics.'
  },
  vad: {
    sectionId: 'vad',
    topicName: 'Voice Activity Detection Formant Protection',
    mediaType: 'video',
    mediaKey: 'helicopterEnvironment02',
    overlayOpacity: 0.45,
    audioReason: 'Isolating tactical speech envelope amidst cockpit acoustic roar.'
  },
  impulse: {
    sectionId: 'impulse',
    topicName: 'Fast Sub-Millisecond Impulse Transient Detector',
    mediaType: 'video',
    mediaKey: 'cockpitHelicopter',
    overlayOpacity: 0.48,
    audioReason: 'Clamping high-amplitude blast transients in operational zones.'
  },
  controller: {
    sectionId: 'controller',
    topicName: 'Intelligent Decision Engine & State Machine',
    mediaType: 'video',
    mediaKey: 'cockpitHelicopter',
    overlayOpacity: 0.48,
    audioReason: 'Adapting filter parameters dynamically across flight conditions.'
  },
  fxlms: {
    sectionId: 'fxlms',
    topicName: 'Filtered-X LMS Secondary Path S(z) Feedback Loop',
    mediaType: 'video',
    mediaKey: 'soldiersHelicopter',
    trimStartTime: 4.5,
    overlayOpacity: 0.48,
    audioReason: 'Real-time anti-noise synthesis in high-vibration tactical deployment.'
  },
  'closed-loop': {
    sectionId: 'closed-loop',
    topicName: 'Closed-Loop ANC System Architecture',
    mediaType: 'video',
    mediaKey: 'soldierHelicopter',
    overlayOpacity: 0.45,
    audioReason: 'Continuous secondary path modeling for active soldier headset.'
  },
  simulation: {
    sectionId: 'simulation',
    topicName: 'Live Interactive 2D Oscilloscope & Spectrum Simulation',
    mediaType: 'video',
    mediaKey: 'cockpitHelicopter',
    overlayOpacity: 0.48,
    audioReason: 'Real-time oscilloscope telemetry backed by live cockpit flight footage.'
  },
  architecture: {
    sectionId: 'architecture',
    topicName: 'Complete Spatial 2D System Architecture Schematic',
    mediaType: 'video',
    mediaKey: 'soldiersHelicopter',
    trimStartTime: 4.5,
    overlayOpacity: 0.48,
    audioReason: 'Integrated sensor array, edge DSP, and driver transducer layout.'
  },
  gallery: {
    sectionId: 'gallery',
    topicName: 'Operational Field Photography Showcase',
    mediaType: 'video',
    mediaKey: 'soldiersHelicopter',
    trimStartTime: 4.5,
    overlayOpacity: 0.42,
    audioReason: 'Authentic military operational field context photography.'
  },
  datasets: {
    sectionId: 'datasets',
    topicName: '118 Audio Datasets & Research Corpora Library',
    mediaType: 'video',
    mediaKey: 'aircraftVehicles',
    overlayOpacity: 0.46,
    audioReason: 'Multi-source training corpora for military noise classification, speech enhancement, and acoustic path modeling.'
  },
  validation: {
    sectionId: 'validation',
    topicName: 'Empirical Verification & Laboratory Protocol',
    mediaType: 'video',
    mediaKey: 'aircraftVehicles',
    overlayOpacity: 0.48,
    audioReason: 'Standardized acoustic chamber testing under vehicle sound pressure.'
  },
  techstack: {
    sectionId: 'techstack',
    topicName: 'Validated Engineering Stack & Execution Targets',
    mediaType: 'video',
    mediaKey: 'helicopterEnvironment02',
    overlayOpacity: 0.45,
    audioReason: 'Modern software and hardware execution on military edge platforms.'
  },
  cta: {
    sectionId: 'cta',
    topicName: 'Tactical Insertion & Mission Readiness',
    mediaType: 'video',
    mediaKey: 'soldiersHelicopter',
    trimStartTime: 4.5,
    overlayOpacity: 0.38,
    audioReason: 'Mission-ready tactical insertion and troop deployment in extreme acoustic fields.'
  }
};
