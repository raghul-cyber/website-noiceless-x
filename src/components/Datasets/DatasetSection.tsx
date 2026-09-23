import React, { useState } from 'react';
import { Database, Shield, ExternalLink, ArrowRight, Layers, Sliders, Activity, Info, CheckCircle2, Star } from 'lucide-react';
import { HIGH_PRIORITY_DATASETS } from '../../data/datasets';
import { DatasetExplorer } from './DatasetExplorer';
import { DatasetPipelineMap } from './DatasetPipelineMap';

export const DatasetSection: React.FC = () => {
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);

  // Top 6 benchmark highlights to display on the page
  const featuredBenchmarks = HIGH_PRIORITY_DATASETS.slice(0, 6);

  return (
    <section id="datasets" className="relative py-24 tactical-grid-bg border-b border-[#143526] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#143526] border border-[#00e599]/30 text-xs font-mono text-[#00e599] font-bold uppercase mb-3">
              <Database size={13} />
              <span>DATASET LIBRARY // 118 RESEARCH CORPORA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-mono font-extrabold text-[#f0fdf4] tracking-tight mb-3">
              DATASETS USED
            </h2>
            <p className="text-sm sm:text-base text-[#9fb3a4] max-w-2xl font-mono leading-relaxed">
              118 audio datasets and research corpora supporting noise classification, speech protection, environmental robustness, and acoustic-path evaluation.
            </p>
          </div>

          {/* Prominent Action Button: EXPLORE 118 DATASETS */}
          <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
            <button
              onClick={() => setIsExplorerOpen(true)}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#00e599] hover:bg-[#4dffb2] text-[#08100c] font-mono text-xs sm:text-sm font-bold uppercase rounded tracking-wider transition-all shadow-[0_0_24px_rgba(0,229,153,0.35)] group"
            >
              <Database size={16} className="fill-current" />
              <span>EXPLORE 118 DATASETS</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="text-[10px] font-mono text-[#6c8273]">
              Open interactive dataset library
            </span>
          </div>
        </div>

        {/* Technical Statistic Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-16">
          <div className="p-4 sm:p-5 rounded bg-[#101713]/85 border border-[#1f3326] backdrop-blur-md">
            <div className="text-2xl sm:text-4xl font-mono font-extrabold text-[#00e599] mb-1">
              118
            </div>
            <div className="text-[10px] sm:text-xs font-mono text-[#82998a] uppercase tracking-wider">
              DATASETS / CORPORA
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded bg-[#101713]/85 border border-[#1f3326] backdrop-blur-md">
            <div className="text-2xl sm:text-4xl font-mono font-extrabold text-[#00e5ff] mb-1">
              8+
            </div>
            <div className="text-[10px] sm:text-xs font-mono text-[#82998a] uppercase tracking-wider">
              DATA CATEGORIES
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded bg-[#101713]/85 border border-[#1f3326] backdrop-blur-md">
            <div className="text-2xl sm:text-4xl font-mono font-extrabold text-[#f0fdf4] mb-1">
              MILITARY
            </div>
            <div className="text-[10px] sm:text-xs font-mono text-[#82998a] uppercase tracking-wider">
              PRIMARY DOMAIN
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded bg-[#101713]/85 border border-[#1f3326] backdrop-blur-md">
            <div className="text-2xl sm:text-4xl font-mono font-extrabold text-[#facc15] mb-1">
              3
            </div>
            <div className="text-[10px] sm:text-xs font-mono text-[#82998a] uppercase tracking-wider">
              CORE NOISE CLASSES
            </div>
          </div>
        </div>

        {/* Technical Explanatory Copy Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-sm bg-[#111914]/90 border border-[#23382b] backdrop-blur-md">
          <div className="flex items-center gap-2 mb-2 font-mono text-[10px] text-[#00e599] font-bold uppercase tracking-wider">
            <Shield size={13} />
            <span>RESEARCH METHODOLOGY // MULTI-SOURCE ACOUSTIC STRATEGY</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-mono font-bold text-[#f0fdf4] mb-3">
            WHY MULTIPLE DATA SOURCES?
          </h3>
          <p className="text-sm sm:text-base text-[#bacbbe] leading-relaxed font-sans max-w-4xl mb-4">
            NOISELESS-X6 is designed for acoustic conditions that vary across continuous, changing, impulsive, 
            environmental, mechanical and speech-related noise. A multi-source dataset strategy allows the system 
            to evaluate robustness across different acoustic domains rather than relying on a single recording source.
          </p>

          <div className="pt-4 border-t border-[#1b2b22] flex flex-wrap items-center gap-6 text-xs font-mono text-[#82998a]">
            <span className="flex items-center gap-1.5 text-[#f0fdf4]">
              <CheckCircle2 size={14} className="text-[#00e599]" />
              No single-source bias
            </span>
            <span className="flex items-center gap-1.5 text-[#f0fdf4]">
              <CheckCircle2 size={14} className="text-[#00e599]" />
              Separated train / val / test splits
            </span>
            <span className="flex items-center gap-1.5 text-[#f0fdf4]">
              <CheckCircle2 size={14} className="text-[#00e599]" />
              100% 2D empirical pipeline evaluation
            </span>
          </div>
        </div>

        {/* 2D Pipeline Map & Architectural Purpose Mapping */}
        <div className="mb-16">
          <DatasetPipelineMap />
        </div>

        {/* Featured High-Priority Benchmarks Preview */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-[10px] font-mono text-[#00e599] uppercase tracking-wider mb-1 font-bold">
                PRIORITY HIGHLIGHTS
              </div>
              <h3 className="text-xl font-mono font-bold text-[#f0fdf4]">
                Core Evaluation Benchmarks
              </h3>
            </div>
            <button
              onClick={() => setIsExplorerOpen(true)}
              className="text-xs font-mono text-[#00e599] hover:text-[#4dffb2] underline uppercase self-start sm:self-auto"
            >
              View all 118 datasets →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredBenchmarks.map((dataset) => (
              <div
                key={dataset.id}
                className="p-5 rounded-sm bg-[#101713]/85 border border-[#1f3326] hover:border-[#00e599]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 font-mono text-[10px]">
                    <span className="text-[#00e599] font-bold">#{String(dataset.id).padStart(3, '0')}</span>
                    <span className="text-[#facc15] font-semibold flex items-center gap-1">
                      <Star size={10} className="fill-current" />
                      Priority Corpus
                    </span>
                  </div>
                  <h4 className="font-mono text-sm font-bold text-[#f0fdf4] group-hover:text-[#00e599] transition-colors mb-1">
                    {dataset.name}
                  </h4>
                  <div className="inline-block px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-[#14281e] text-[#4dffb2] border border-[#1c402e] mb-2.5">
                    {dataset.category}
                  </div>
                  <p className="text-xs text-[#9eb3a4] leading-relaxed mb-4">
                    {dataset.use}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#1c2e24] flex items-center justify-between font-mono text-xs">
                  <span className="text-[10px] text-[#697f71] truncate max-w-[130px]">
                    {dataset.domain}
                  </span>
                  <a
                    href={dataset.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#00e599] hover:text-[#4dffb2] transition-colors"
                  >
                    <span>OPEN DATASET ↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Source Label & Notice */}
        <div className="p-4 rounded-sm bg-[#09110d]/90 border border-[#1a2d21] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#738a7c]">
          <div className="flex items-start gap-2.5">
            <Info size={16} className="text-[#00e599] shrink-0 mt-0.5" />
            <div>
              <span className="text-[#f0fdf4] font-bold block sm:inline">DATASET SOURCES: </span>
              External datasets are linked to their respective official, repository, or distribution pages. Dataset availability, licensing, access requirements and usage restrictions are determined by each dataset provider.
            </div>
          </div>

          <button
            onClick={() => setIsExplorerOpen(true)}
            className="shrink-0 px-3 py-1.5 rounded bg-[#143526] hover:bg-[#1f4a36] text-[#00e599] font-bold uppercase text-[11px] border border-[#00e599]/30 transition-colors"
          >
            LAUNCH EXPLORER
          </button>
        </div>

      </div>

      {/* Interactive 118 Datasets Modal Explorer */}
      <DatasetExplorer
        isOpen={isExplorerOpen}
        onClose={() => setIsExplorerOpen(false)}
      />
    </section>
  );
};
