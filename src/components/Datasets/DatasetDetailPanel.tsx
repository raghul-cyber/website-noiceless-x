import React from 'react';
import { ExternalLink, X, Shield, Database, Globe, Info, CheckCircle2 } from 'lucide-react';
import { DatasetItem } from '../../data/datasets';

interface DatasetDetailPanelProps {
  dataset: DatasetItem | null;
  onClose: () => void;
}

export const DatasetDetailPanel: React.FC<DatasetDetailPanelProps> = ({ dataset, onClose }) => {
  if (!dataset) return null;

  return (
    <div className="p-5 bg-[#0f1712] border border-[#23382b] rounded-sm text-xs font-mono relative shadow-xl">
      {/* Top Header */}
      <div className="flex items-start justify-between gap-4 pb-3 border-b border-[#1b2b22] mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-[#143526] text-[#00e599] font-bold text-[11px] border border-[#00e599]/30">
              DATASET #{String(dataset.id).padStart(3, '0')}
            </span>
            <span className="text-[#849589] uppercase tracking-wider text-[10px]">
              {dataset.isRepository ? 'Research Repository' : 'Distribution Portal'}
            </span>
          </div>
          <h3 className="text-base font-bold text-[#f0fdf4] font-mono leading-tight">
            {dataset.name}
          </h3>
        </div>

        <button
          onClick={onClose}
          aria-label="Close detail panel"
          className="p-1 rounded text-[#718578] hover:text-[#f0fdf4] hover:bg-[#1b2b22] transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      {/* Grid Specs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div className="p-2.5 rounded bg-[#09110d] border border-[#1b2b22]">
          <span className="text-[#627769] block text-[9px] uppercase tracking-wider mb-0.5">
            Category
          </span>
          <span className="text-[#4dffb2] font-semibold text-[11px]">
            {dataset.category}
          </span>
        </div>

        <div className="p-2.5 rounded bg-[#09110d] border border-[#1b2b22]">
          <span className="text-[#627769] block text-[9px] uppercase tracking-wider mb-0.5">
            Host / Provider
          </span>
          <span className="text-[#f0fdf4] font-semibold text-[11px] truncate block">
            {dataset.domain}
          </span>
        </div>
      </div>

      {/* Primary Use */}
      <div className="mb-4 p-3 rounded bg-[#09110d] border border-[#1b2b22]">
        <span className="text-[#627769] block text-[9px] uppercase tracking-wider mb-1">
          Primary Research Use
        </span>
        <p className="text-[#bacbbe] text-xs leading-relaxed font-sans">
          {dataset.use}
        </p>
      </div>

      {/* External Action Button */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 border-t border-[#1b2b22]">
        <a
          href={dataset.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${dataset.name} official page in a new tab`}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#00e599] hover:bg-[#4dffb2] text-[#08100c] font-mono text-xs font-bold uppercase rounded tracking-wider transition-all shadow-[0_0_15px_rgba(0,229,153,0.3)]"
        >
          <span>OPEN DATASET / REPOSITORY</span>
          <ExternalLink size={13} />
        </a>

        <div className="text-[10px] text-[#697f70] flex items-center gap-1.5 px-2">
          <Info size={12} className="text-[#00e599]/60 shrink-0" />
          <span>Opens official external repository in new tab</span>
        </div>
      </div>
    </div>
  );
};
