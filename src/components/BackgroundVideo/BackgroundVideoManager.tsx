import React, { useEffect, useState, useRef, useCallback } from 'react';
import { SECTION_MEDIA_MAP, SectionMediaConfig } from '../../data/sectionMedia';
import { MEDIA_MANIFEST, MediaAsset } from '../../data/mediaManifest';
import { useSimulationStore } from '../../store/useSimulationStore';

// Specific trim start times to strip initial disclaimers / text title cards
const VIDEO_TRIM_STARTS: Record<string, number> = {
  soldiersHelicopter: 4.5, // Strips the 0.0s - 4.4s unclassified text disclaimer card and black transition screen
};

export const BackgroundVideoManager: React.FC = () => {
  const { heroVideoKey } = useSimulationStore();
  const [activeSectionId, setActiveSectionId] = useState<string>('hero');
  const [activeConfig, setActiveConfig] = useState<SectionMediaConfig>(SECTION_MEDIA_MAP.hero);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  // All 5 distinct background videos deployed across different topics
  const videoKeys = [
    'soldierHelicopter',        // Topic 01 (Hero: Tactical Soldier Flight Operations)
    'aircraftVehicles',         // Topic 02 (Problem: Vehicle & Combat Threat Matrix)
    'helicopterEnvironment02',  // Topic 03 (Noisy Environment: 1080p Cockpit Avionics & Rotor Dynamics)
    'cockpitHelicopter',        // Topic 04 (Communication: Cockpit & Radio Intelligibility)
    'soldiersHelicopter'        // Topic 05 (CTA: Tactical Perimeter Insertion, Trimmed >4.5s)
  ];

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Continuous playback engine:
  // All 5 videos run continuously in an unpaused loop in the background.
  // This guarantees zero stutter, zero freeze, instant crossfading, and non-stuck looping.
  const playAllVideos = useCallback(() => {
    if (reducedMotion) return;
    videoKeys.forEach((key) => {
      const vid = videoRefs.current[key];
      if (vid) {
        vid.muted = true;
        vid.playsInline = true;
        vid.loop = true;

        const trimStart = VIDEO_TRIM_STARTS[key] || 0;
        if (trimStart > 0 && vid.currentTime < 1.0) {
          vid.currentTime = trimStart;
        }

        if (vid.paused) {
          vid.play().catch(() => {
            // Autoplay will be resumed on first user interaction
          });
        }
      }
    });
  }, [reducedMotion]);

  useEffect(() => {
    // Initial start
    playAllVideos();

    // Watchdog: ensures no video ever remains paused or stuck
    const watchdogTimer = setInterval(playAllVideos, 1500);

    // Resume immediately upon any user interaction (scroll, click, keydown, touch)
    const handleInteraction = () => {
      playAllVideos();
    };

    window.addEventListener('scroll', handleInteraction, { passive: true });
    window.addEventListener('click', handleInteraction, { passive: true });
    window.addEventListener('keydown', handleInteraction, { passive: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true });

    return () => {
      clearInterval(watchdogTimer);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [playAllVideos]);

  // Deterministic high-performance scroll tracker to detect active section dynamically as user scrolls
  useEffect(() => {
    const sectionIds = Object.keys(SECTION_MEDIA_MAP);

    const updateActiveSection = () => {
      // Find the section that intersects the viewport reading line (38% from top)
      const viewportTrigger = window.scrollY + window.innerHeight * 0.38;

      let foundId = 'hero';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (viewportTrigger >= top && viewportTrigger < top + height) {
            foundId = id;
            break;
          }
        }
      }

      if (foundId && SECTION_MEDIA_MAP[foundId]) {
        setActiveSectionId((prev) => {
          if (prev !== foundId) {
            setActiveConfig(SECTION_MEDIA_MAP[foundId]);
            return foundId;
          }
          return prev;
        });
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const isHero = activeSectionId === 'hero';
  const effectiveMediaKey = (isHero && activeConfig.mediaType === 'video')
    ? heroVideoKey
    : (activeConfig.mediaType === 'video' ? activeConfig.mediaKey : null);

  const activeVideoKey = effectiveMediaKey;

  // Video timeupdate handler: when soldiersHelicopter loops (every 133s) and resets to 0,
  // immediately jump past the 4.5s disclaimer so it never flashes or displays
  const handleTimeUpdate = (key: string) => {
    const trimStart = VIDEO_TRIM_STARTS[key] || 0;
    if (trimStart > 0) {
      const vid = videoRefs.current[key];
      if (vid && !vid.seeking && vid.currentTime < 1.0) {
        vid.currentTime = trimStart;
      }
    }
  };

  // Video loaded metadata handler: position immediately at trimStart on first load
  const handleLoadedMetadata = (key: string) => {
    const trimStart = VIDEO_TRIM_STARTS[key] || 0;
    if (trimStart > 0) {
      const vid = videoRefs.current[key];
      if (vid && vid.currentTime < trimStart) {
        vid.currentTime = trimStart;
      }
    }
  };

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#08100c]"
    >
      {/* Dynamic Video Layers for all 5 background videos */}
      {videoKeys.map((key) => {
        const asset: MediaAsset | undefined = MEDIA_MANIFEST.videos[key];
        if (!asset) return null;

        const isCurrent = key === activeVideoKey;

        return (
          <div
            key={key}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out will-change-[opacity]"
            style={{
              opacity: isCurrent && !reducedMotion ? 1 : 0,
              zIndex: isCurrent ? 2 : 1
            }}
          >
            <video
              ref={(el) => (videoRefs.current[key] = el)}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={asset.posterPath}
              onTimeUpdate={() => handleTimeUpdate(key)}
              onLoadedMetadata={() => handleLoadedMetadata(key)}
              onWaiting={(e) => {
                // If video enters waiting/buffering state, ensure it resumes playback when ready
                const v = e.currentTarget;
                if (v.paused) v.play().catch(() => {});
              }}
              className="w-full h-full object-cover filter contrast-[106%] brightness-100 saturate-[105%]"
            >
              <source
                src={asset.localPath}
                type="video/mp4"
              />
            </video>
          </div>
        );
      })}

      {/* Dynamic Directional Gradient & Legibility Masking */}
      <div
        className="absolute inset-0 z-10 transition-opacity duration-700 ease-in-out"
        style={{
          backgroundColor: '#08100c',
          opacity: activeConfig.overlayOpacity
        }}
      />

      {/* Cinematic Edge Vignettes (Balanced for clear video visibility & UI contrast) */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#08100c]/70 via-transparent to-[#08100c]/80 opacity-40" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_45%,#08100c_95%)] opacity-35" />

      {/* Discrete Tactical Scanlines */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(0,229,153,0.015)_1px,transparent_1px)] bg-[size:100%_4px]" />
    </div>
  );
};
