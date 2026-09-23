import React, { useEffect, useState } from 'react';
import { X, ExternalLink, ShieldCheck, FileCheck, CheckCircle2, Video, Camera, Compass } from 'lucide-react';
import { useSimulationStore, simulationStore } from '../../store/useSimulationStore';
import { MEDIA_MANIFEST } from '../../data/mediaManifest';

interface CreditRecord {
  filename: string;
  local_path: string;
  poster_path?: string;
  source_page: string;
  creator: string;
  license: string;
  type: string;
  use: string;
  size_bytes?: number;
}

export const MediaCreditsModal: React.FC = () => {
  const { mediaCreditsModalOpen } = useSimulationStore();
  const [credits, setCredits] = useState<CreditRecord[]>([]);
  const [activeTab, setActiveTab] = useState<'local' | 'pixabay'>('local');

  useEffect(() => {
    if (!mediaCreditsModalOpen) return;
    fetch('/media/credits.json')
      .then(res => res.json())
      .then(data => {
        if (data.asset_attribution) {
          setCredits(data.asset_attribution);
        }
      })
      .catch(err => console.error('Failed to load media credits:', err));
  }, [mediaCreditsModalOpen]);

  if (!mediaCreditsModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08100c]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl max-h-[85vh] bg-[#0d1511] border border-[#3b4a41] rounded-sm shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#143526] bg-[#161d19]">
          <div className="flex items-center gap-2">
            <FileCheck size={18} className="text-[#00e599]" />
            <h3 className="font-mono text-sm font-bold text-[#f0fdf4] uppercase tracking-wider">
              AUTHORIZED REAL MEDIA PROVENANCE &amp; LICENSES
            </h3>
          </div>
          <button
            onClick={() => simulationStore.setMediaCreditsModalOpen(false)}
            className="p-1 rounded text-[#849589] hover:text-[#f0fdf4] hover:bg-[#242c28] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#143526] bg-[#08100c] px-6 pt-3 gap-4 font-mono text-xs">
          <button
            onClick={() => setActiveTab('local')}
            className={`pb-3 border-b-2 font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'local'
                ? 'border-[#00e599] text-[#00e599]'
                : 'border-transparent text-[#849589] hover:text-[#dce5de]'
            }`}
          >
            <Video size={14} />
            <span>Pexels &amp; Unsplash Assets ({credits.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('pixabay')}
            className={`pb-3 border-b-2 font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'pixabay'
                ? 'border-[#00e599] text-[#00e599]'
                : 'border-transparent text-[#849589] hover:text-[#dce5de]'
            }`}
          >
            <Compass size={14} />
            <span>Pixabay Real Fallback Collections ({MEDIA_MANIFEST.pixabayFallbacks.length})</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="p-4 rounded bg-[#143526]/50 border border-[#3b4a41] text-xs font-mono text-[#bacbbe]">
            <span className="text-[#00e599] font-bold block mb-1">PROVENANCE &amp; ASSET COMPLIANCE POLICY:</span>
            All field videos and tactical photographs are downloaded through official approved source pages (Pexels, Unsplash, Pixabay) 
            under permissive commercial attribution licenses. ZERO fake AI-generated military soldier photos.
          </div>

          {activeTab === 'local' ? (
            /* Credits Cards */
            <div className="space-y-3 font-mono text-xs">
              {credits.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded bg-[#161d19] border border-[#3b4a41] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#00e5ff]">{item.filename}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#0d1511] border border-[#143526] text-[#849589] uppercase">
                        {item.type}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#849589]">
                      Contributor: <span className="text-[#dce5de]">{item.creator}</span>
                    </span>
                    <span className="text-[10px] text-[#bacbbe]">
                      Narrative Role: {item.use}
                    </span>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                    <span className="text-[10px] text-[#00e599] font-bold flex items-center gap-1">
                      <ShieldCheck size={12} />
                      <span>{item.license}</span>
                    </span>
                    <a
                      href={item.source_page}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] text-[#849589] hover:text-[#00e5ff] flex items-center gap-1 transition-colors"
                    >
                      <span>Official Source Page</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Pixabay Fallbacks */
            <div className="space-y-3 font-mono text-xs">
              {MEDIA_MANIFEST.pixabayFallbacks.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded bg-[#161d19] border border-[#3b4a41] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <span className="text-xs font-bold text-[#00e599] block">{item.name}</span>
                    <span className="text-[10px] text-[#849589] block mt-0.5">Search Query: "{item.searchQuery}"</span>
                    <span className="text-[11px] text-[#bacbbe] mt-1 block font-sans">{item.usageContext}</span>
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0d1511] hover:bg-[#00e5ff] text-[#00e5ff] hover:text-[#08100c] border border-[#3b4a41] text-[10px] font-bold uppercase transition-all shrink-0"
                  >
                    <span>View Pixabay Collection</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#161d19] border-t border-[#143526] flex items-center justify-between font-mono text-xs text-[#849589]">
          <span>NOISELESS-X6 // EMBEDDED ACOUSTIC INTELLIGENCE</span>
          <button
            onClick={() => simulationStore.setMediaCreditsModalOpen(false)}
            className="px-4 py-1.5 rounded bg-[#0d1511] hover:bg-[#242c28] text-[#f0fdf4] border border-[#3b4a41] uppercase tracking-wider"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
