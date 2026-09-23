import React, { useState } from 'react';
import { Camera, Shield, Eye, Award, ExternalLink } from 'lucide-react';
import { MEDIA_MANIFEST, MediaAsset } from '../../data/mediaManifest';

export const PhotoGallerySection: React.FC = () => {
  const images: MediaAsset[] = Object.values(MEDIA_MANIFEST.images);
  const [activeImage, setActiveImage] = useState<MediaAsset>(images[0]);

  return (
    <section id="gallery" className="relative py-24 tactical-grid-bg border-b border-[#143526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#00e599] tracking-widest uppercase font-bold">
              SECTION 19 // OPERATIONAL FIELD PHOTOGRAPHY
            </span>
            <span className="badge-tactical">DOCUMENTARY PROVENANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f0fdf4] tracking-tight">
            AUTHENTIC DEFENCE &amp; AVIATION VISUAL DOCUMENTATION
          </h2>
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed">
            Strict adherence to real documentary and field photography. Zero AI-generated soldiers, 
            zero synthetic photorealistic renders. Grounded in actual operational personnel and gear.
          </p>
        </div>

        {/* Featured Editorial Photo Viewport */}
        <div className="chassis-panel rounded-sm overflow-hidden bg-[#0d1511] border border-[#3b4a41] mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Main Image Display */}
            <div className="lg:col-span-8 relative aspect-[16/10] bg-[#08100c] overflow-hidden">
              <img
                src={activeImage.localPath}
                alt={activeImage.description}
                className="w-full h-full object-cover filter contrast-[112%] brightness-90 grayscale-[10%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08100c]/80 via-transparent to-transparent pointer-events-none" />

              {/* Top Corner Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded bg-[#08100c]/85 border border-[#3b4a41] text-xs font-mono text-[#00e599] backdrop-blur-sm">
                <Camera size={13} />
                <span className="font-bold">{activeImage.id.toUpperCase()}</span>
              </div>
            </div>

            {/* Image Metadata & Context Column */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-[#161d19] border-t lg:border-t-0 lg:border-l border-[#143526]">
              <div>
                <span className="font-mono text-[10px] text-[#00e599] uppercase font-bold tracking-wider block mb-2">
                  CURATED REAL MEDIA ARTIFACT
                </span>
                <h3 className="text-xl font-bold text-[#f0fdf4] leading-snug">
                  {activeImage.description}
                </h3>

                <div className="mt-6 space-y-3 font-mono text-xs">
                  <div className="p-3 rounded bg-[#0d1511] border border-[#143526]">
                    <span className="text-[#849589] text-[10px] block uppercase">PHOTOGRAPHER / SOURCE:</span>
                    <span className="text-[#f0fdf4] font-bold mt-0.5 block">{activeImage.creator}</span>
                  </div>

                  <div className="p-3 rounded bg-[#0d1511] border border-[#143526]">
                    <span className="text-[#849589] text-[10px] block uppercase">LICENSE:</span>
                    <span className="text-[#00e599] font-bold mt-0.5 block">{activeImage.license}</span>
                  </div>

                  <div className="p-3 rounded bg-[#0d1511] border border-[#143526]">
                    <span className="text-[#849589] text-[10px] block uppercase">NARRATIVE PURPOSE:</span>
                    <span className="text-[#00e5ff] font-bold mt-0.5 block capitalize">
                      {activeImage.sections.join(' // ')}
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={activeImage.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded bg-[#08100c] hover:bg-[#00e599] text-[#849589] hover:text-[#08100c] border border-[#3b4a41] hover:border-[#00e599] font-mono text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>VERIFY SOURCE PAGE</span>
                <ExternalLink size={13} />
              </a>
            </div>

          </div>
        </div>

        {/* Horizontal Strip of All Real Photos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {images.map((img) => {
            const isCurrent = img.id === activeImage.id;
            return (
              <button
                key={img.id}
                onClick={() => setActiveImage(img)}
                className={`relative aspect-[4/3] rounded-sm overflow-hidden text-left border transition-all ${
                  isCurrent
                    ? 'border-[#00e599] ring-2 ring-[#00e599]/30 shadow-[0_0_15px_rgba(0,229,153,0.3)]'
                    : 'border-[#3b4a41] opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={img.localPath}
                  alt={img.description}
                  className="w-full h-full object-cover filter contrast-[110%] brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08100c] via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 font-mono text-[9px] text-[#f0fdf4] truncate font-bold">
                  {img.id.replace('pexels_', '').replace('unsplash_', '').replace(/_/g, ' ').toUpperCase()}
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
