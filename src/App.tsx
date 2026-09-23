import React from 'react';
import { BackgroundVideoManager } from './components/BackgroundVideo/BackgroundVideoManager';
import { Navbar } from './components/Header/Navbar';
import { HeroSection } from './components/Hero/HeroSection';
import { ProblemSection } from './components/Problem/ProblemSection';
import { EnvironmentSection } from './components/Environment/EnvironmentSection';
import { CommunicationSection } from './components/Communication/CommunicationSection';
import { HeadsetViewerSection } from './components/Hardware/HeadsetViewerSection';
import { MicrophoneTrioSection } from './components/Microphones/MicrophoneTrioSection';
import { RaspberryPiSection } from './components/Processor/RaspberryPiSection';
import { Exploded2DSection } from './components/Hardware/Exploded2DSection';
import { AudioPipelineSection } from './components/AudioPipeline/AudioPipelineSection';
import { YAMNetSection } from './components/AI/YAMNetSection';
import { VADSection } from './components/AI/VADSection';
import { ImpulseSection } from './components/AI/ImpulseSection';
import { ControllerSection } from './components/AI/ControllerSection';
import { FxLMSSection } from './components/ANC/FxLMSSection';
import { ClosedLoopANCSection } from './components/ANC/ClosedLoopANCSection';
import { LiveSimulationSection } from './components/Simulation/LiveSimulationSection';
import { SpatialArchitectureSection } from './components/Architecture/SpatialArchitectureSection';
import { PhotoGallerySection } from './components/Hardware/PhotoGallerySection';
import { DatasetSection } from './components/Datasets/DatasetSection';
import { ValidationSection } from './components/Validation/ValidationSection';
import { TechStackSection } from './components/TechStack/TechStackSection';
import { CTASection } from './components/CTA/CTASection';
import { MediaCreditsModal } from './components/Modal/MediaCreditsModal';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#08100c] text-[#dce5de] selection:bg-[#00e599] selection:text-[#08100c] relative">
      {/* Dynamic Topic-Specific Background Video Manager (Crossfading HTML5 Videos) */}
      <BackgroundVideoManager />

      {/* Tactical Fixed Navigation */}
      <Navbar />

      {/* Main Narrative Flow: 24 Sections */}
      <main className="relative z-10">
        {/* 01 HERO */}
        <HeroSection />

        {/* 02 THE PROBLEM */}
        <ProblemSection />

        {/* 03 THE NOISY ENVIRONMENT */}
        <EnvironmentSection />

        {/* 04 WHY SPEECH MATTERS / COMMUNICATION */}
        <CommunicationSection />

        {/* 05 THE HEADSET & HARDWARE (Click-to-Highlight 2D Hotspots) */}
        <HeadsetViewerSection />

        {/* 06, 07, 08 REF MIC, ERROR MIC, BOOM COMMS MIC */}
        <MicrophoneTrioSection />

        {/* 09 RASPBERRY PI PROCESSING UNIT */}
        <RaspberryPiSection />

        {/* 10 2D EAR CUP MECHANICAL & ACOUSTIC STACKUP */}
        <Exploded2DSection />

        {/* 11 20-STAGE AUDIO PIPELINE EXECUTION */}
        <AudioPipelineSection />

        {/* 12 YAMNET AUDIO INTELLIGENCE LAYER */}
        <YAMNetSection />

        {/* 13 VOICE ACTIVITY DETECTION (VAD) */}
        <VADSection />

        {/* 14 FAST DSP IMPULSE DETECTION */}
        <ImpulseSection />

        {/* 15 INTELLIGENT CONTROLLER & STATE MACHINE */}
        <ControllerSection />

        {/* 16 FXLMS / NLMS ADAPTIVE FILTERING */}
        <FxLMSSection />

        {/* 17 CLOSED-LOOP ANC SPLIT VIEW */}
        <ClosedLoopANCSection />

        {/* 18 LIVE 2D INTERACTIVE SIMULATION */}
        <LiveSimulationSection />

        {/* 19 COMPLETE 2D SYSTEM ARCHITECTURE SCHEMATIC */}
        <SpatialArchitectureSection />

        {/* 20 OPERATIONAL FIELD PHOTOGRAPHY */}
        <PhotoGallerySection />

        {/* 21 DATASETS USED — 118 AUDIO DATASETS & RESEARCH CORPORA */}
        <DatasetSection />

        {/* 22 PERFORMANCE & RESEARCH VALIDATION */}
        <ValidationSection />

        {/* 22 TECHNOLOGY STACK */}
        <TechStackSection />

        {/* 23 FINAL CTA & MISSION READINESS */}
        <CTASection />
      </main>

      {/* Media Attribution & Provenance Modal */}
      <MediaCreditsModal />
    </div>
  );
};

export default App;
