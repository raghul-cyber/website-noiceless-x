import React from 'react';
import { ExternalLink, Database, Star } from 'lucide-react';
import { DatasetItem } from '../../data/datasets';

interface DatasetCardProps {
  dataset: DatasetItem;
  isSelected?: boolean;
  onSelect: (dataset: DatasetItem) => void;
}

export const DatasetCard: React.FC<DatasetCardProps> = ({ dataset, isSelected, onSelect }) => {
  const isRepo = dataset.isRepository;

  return (
    <div
      onClick={() => onSelect(dataset)}
      className={`group relative p-4 rounded-sm border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
        isSelected
          ? 'bg-[#143526]/80 border-[#00e599] shadow-[0_0_15px_rgba(0,229,153,0.2)]'
          : 'bg-[#101713]/85 hover:bg-[#16201b]/95 border-[#23352b] hover:border-[#3b5747]'
      }`}
    >
      <div>
        {/* Top Header: ID & Category Tag */}
        <div className="flex items-center justify-between gap-2 mb-2 font-mono text-[10px]">
          <div className="flex items-center gap-1.5">
            <span className="text-[#00e599] font-bold tracking-wider">
              #{String(dataset.id).padStart(3, '0')}
            </span>
            {dataset.priority && (
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[#e5c100]/15 text-[#facc15] border border-[#e5c100]/30 font-semibold uppercase text-[9px]">
                <Star size={9} className="fill-current" />
                <span>Priority</span>
              </span>
            )}
          </div>
          <span className="text-[#728578] truncate max-w-[150px] uppercase tracking-wider text-[9px] bg-[#08100c] px-2 py-0.5 rounded border border-[#1b2b22]">
            {dataset.domain}
          </span>
        </div>

        {/* Dataset Name */}
        <h4 className="font-mono text-sm font-bold text-[#f0fdf4] group-hover:text-[#00e599] transition-colors line-clamp-1 mb-1.5">
          {dataset.name}
        </h4>

        {/* Category Pill */}
        <div className="inline-block px-2 py-0.5 mb-2.5 rounded text-[9px] font-mono tracking-wider uppercase font-semibold bg-[#14281e] text-[#4dffb2] border border-[#1c402e]">
          {dataset.category}
        </div>

        {/* Primary Use Description */}
        <p className="text-xs text-[#9eb3a4] line-clamp-2 leading-relaxed mb-4">
          {dataset.use}
        </p>
      </div>

      {/* Card Footer: Action Link */}
      <div className="pt-2 border-t border-[#1c2e24] flex items-center justify-between text-xs font-mono">
        <span className="text-[10px] text-[#5e7466] uppercase tracking-wider flex items-center gap-1">
          <Database size={11} className="text-[#00e599]/60" />
          <span>{isRepo ? 'Repository' : 'Official Page'}</span>
        </span>

        <a
          href={dataset.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Open ${dataset.name} in a new tab`}
          className="inline-flex items-center gap-1 text-[11px] font-bold text-[#00e599] hover:text-[#4dffb2] transition-colors py-0.5 px-1.5 -mr-1.5 rounded hover:bg-[#00e599]/10"
        >
          <span>OPEN DATASET ↗</span>
        </a>
      </div>
    </div>
  );
};
