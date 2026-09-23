import { useState, useEffect } from 'react';

export type NoiseType = 'helicopter' | 'vehicle' | 'wind' | 'machinery' | 'crowd' | 'impulse';
export type CameraPreset = 'default' | 'front' | 'left' | 'right' | 'rear' | 'top' | 'waist';
export type HardwarePartId = 
  | 'headband'
  | 'left_cup'
  | 'right_cup'
  | 'cushions'
  | 'ref_mic'
  | 'error_mic'
  | 'boom_mic'
  | 'speakers'
  | 'pcb'
  | 'wiring'
  | 'cable'
  | 'rpi_pouch'
  | 'raspberry_pi'
  | 'audio_hat'
  | null;

export interface SimulationState {
  // Playback control
  isPlaying: boolean;
  activeStateStep: number; // 1 to 10
  
  // Toggles
  noiseSources: Record<NoiseType, boolean>;
  speechEnabled: boolean;
  aiActive: boolean;
  ancActive: boolean;
  showFeedback: boolean;
  
  // Hardware Inspection Controls
  explodedPercent: number; // 0, 25, 50, 75, 100
  isolatedPart: HardwarePartId;
  cameraPreset: CameraPreset;
  
  // Real-time illustrative telemetry
  telemetry: {
    noiseSplDb: number;
    residualSplDb: number;
    noiseClass: 'STATIONARY' | 'NON_STATIONARY' | 'IMPULSIVE' | 'MIXED';
    speechDetected: boolean;
    impulseActive: boolean;
    filterStepMu: number;
    sampleRateHz: number;
    bufferLatencyMs: number;
  };

  // Video Background Controls
  heroVideoKey: 'soldierHelicopter' | 'helicopterEnvironment02' | 'aircraftVehicles' | 'cockpitHelicopter';

  // UI state
  mediaCreditsModalOpen: boolean;
}

// Initial state
const initialState: SimulationState = {
  isPlaying: true,
  activeStateStep: 1,
  heroVideoKey: 'soldierHelicopter',
  noiseSources: {
    helicopter: true,
    vehicle: false,
    wind: false,
    machinery: false,
    crowd: false,
    impulse: false,
  },
  speechEnabled: true,
  aiActive: true,
  ancActive: true,
  showFeedback: true,
  explodedPercent: 0,
  isolatedPart: null,
  cameraPreset: 'default',
  telemetry: {
    noiseSplDb: 114.5,
    residualSplDb: 86.2,
    noiseClass: 'STATIONARY',
    speechDetected: true,
    impulseActive: false,
    filterStepMu: 0.015,
    sampleRateHz: 48000,
    bufferLatencyMs: 3.8,
  },
  mediaCreditsModalOpen: false,
};

// Simple reactive subscriber pattern for high performance React state without extra dependencies
type Listener = () => void;
let globalState: SimulationState = { ...initialState };
const listeners = new Set<Listener>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

export const simulationStore = {
  getState: () => globalState,
  
  setState: (updater: Partial<SimulationState> | ((prev: SimulationState) => Partial<SimulationState>)) => {
    const nextState = typeof updater === 'function' ? updater(globalState) : updater;
    globalState = { ...globalState, ...nextState };
    emitChange();
  },

  setPlaying: (isPlaying: boolean) => {
    simulationStore.setState({ isPlaying });
  },

  setStateStep: (step: number) => {
    const clamped = Math.max(1, Math.min(10, step));
    simulationStore.setState({ activeStateStep: clamped });
  },

  toggleNoiseSource: (type: NoiseType) => {
    const next = { ...globalState.noiseSources, [type]: !globalState.noiseSources[type] };
    // Determine noise class
    let noiseClass: SimulationState['telemetry']['noiseClass'] = 'STATIONARY';
    if (next.impulse) noiseClass = 'IMPULSIVE';
    else if (next.wind || next.crowd) noiseClass = 'NON_STATIONARY';
    else if (next.helicopter && next.vehicle) noiseClass = 'MIXED';

    simulationStore.setState(prev => ({
      noiseSources: next,
      telemetry: {
        ...prev.telemetry,
        noiseClass,
        impulseActive: next.impulse,
      }
    }));
  },

  setSpeechEnabled: (speechEnabled: boolean) => {
    simulationStore.setState(prev => ({
      speechEnabled,
      telemetry: { ...prev.telemetry, speechDetected: speechEnabled }
    }));
  },

  setAiActive: (aiActive: boolean) => {
    simulationStore.setState({ aiActive });
  },

  setAncActive: (ancActive: boolean) => {
    simulationStore.setState(prev => ({
      ancActive,
      telemetry: {
        ...prev.telemetry,
        residualSplDb: ancActive ? 86.2 : prev.telemetry.noiseSplDb
      }
    }));
  },

  setShowFeedback: (showFeedback: boolean) => {
    simulationStore.setState({ showFeedback });
  },

  setExplodedPercent: (percent: number) => {
    simulationStore.setState({ explodedPercent: Math.max(0, Math.min(100, percent)) });
  },

  setIsolatedPart: (part: HardwarePartId) => {
    simulationStore.setState({ isolatedPart: part });
  },

  setCameraPreset: (preset: CameraPreset) => {
    simulationStore.setState({ cameraPreset: preset });
  },

  setHeroVideoKey: (key: SimulationState['heroVideoKey']) => {
    simulationStore.setState({ heroVideoKey: key });
  },

  setMediaCreditsModalOpen: (open: boolean) => {
    simulationStore.setState({ mediaCreditsModalOpen: open });
  },

  resetSimulation: () => {
    simulationStore.setState({
      activeStateStep: 1,
      noiseSources: {
        helicopter: true,
        vehicle: false,
        wind: false,
        machinery: false,
        crowd: false,
        impulse: false,
      },
      speechEnabled: true,
      aiActive: true,
      ancActive: true,
      showFeedback: true,
      explodedPercent: 0,
      isolatedPart: null,
      cameraPreset: 'default',
    });
  }
};

export function useSimulationStore(): SimulationState {
  const [, setTick] = useState(0);

  useEffect(() => {
    const handleChange = () => setTick(t => t + 1);
    listeners.add(handleChange);
    return () => {
      listeners.delete(handleChange);
    };
  }, []);

  return globalState;
}
