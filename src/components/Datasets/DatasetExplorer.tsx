import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, Filter, Database, Shield, ExternalLink, ArrowUpDown, Check, AlertCircle } from 'lucide-react';
import { DATASETS_LIST, DATASET_CATEGORIES, DatasetCategory, DatasetItem } from '../../data/datasets';
import { DatasetCard } from './DatasetCard';
import { DatasetDetailPanel } from './DatasetDetailPanel';

interface DatasetExplorerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DatasetExplorer: React.FC<DatasetExplorerProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<DatasetCategory>('ALL');
  const [selectedDataset, setSelectedDataset] = useState<DatasetItem | null>(null);
  const [sortBy, setSortBy] = useState<'id' | 'name' | 'priority'>('id');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedDataset) {
          setSelectedDataset(null);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, selectedDataset, onClose]);

  // Client-side instant filtering & sorting
  const filteredDatasets = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return DATASETS_LIST.filter((item) => {
      // Category match
      if (selectedCategory !== 'ALL' && item.category !== selectedCategory) {
        return false;
      }

      // Query match (name, use, category, domain)
      if (query) {
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesUse = item.use.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        const matchesDomain = item.domain.toLowerCase().includes(query);
        const matchesId = String(item.id).includes(query);
        return matchesName || matchesUse || matchesCat || matchesDomain || matchesId;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'priority') {
        if (a.priority && !b.priority) return -1;
        if (!a.priority && b.priority) return 1;
        return a.id - b.id;
      }
      return a.id - b.id;
    });
  }, [searchQuery, selectedCategory, sortBy]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="118 Audio Datasets Explorer"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#040806]/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-[#0b130e] border border-[#23382b] rounded-sm shadow-2xl overflow-hidden font-sans">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-[#1b2b22] bg-[#0d1611]/90 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#143526] border border-[#00e599]/30 text-[#00e599]">
              <Database size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-[#00e599] uppercase tracking-wider font-bold">
                  DATASET LIBRARY // NOISELESS-X6 RESEARCH SOURCES
                </span>
                <span className="hidden sm:inline-block px-2 py-0.2 rounded bg-[#16271e] text-[#4dffb2] font-mono text-[9px] border border-[#214330]">
                  118 CORPORA
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-mono font-bold text-[#f0fdf4] tracking-tight">
                Interactive Audio Research Corpus Explorer
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dataset explorer (Esc)"
            className="p-2 rounded bg-[#121c16] hover:bg-[#1c2c22] border border-[#24372c] hover:border-[#00e599]/50 text-[#85998b] hover:text-[#f0fdf4] transition-all font-mono text-xs flex items-center gap-1.5"
          >
            <span className="hidden sm:inline text-[10px] uppercase">ESC</span>
            <X size={16} />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 border-b border-[#1b2b22] bg-[#09110d] flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5a7263]"
              />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 118 datasets (e.g. military, helicopter, speech, RIR, DNS, MAD)..."
                className="w-full pl-10 pr-10 py-2.5 rounded bg-[#111914] border border-[#203427] focus:border-[#00e599] text-xs font-mono text-[#f0fdf4] placeholder-[#5a7263] focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5a7263] hover:text-[#f0fdf4]"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Sort Toggle */}
            <div className="flex items-center gap-2 font-mono text-xs shrink-0 self-end sm:self-auto">
              <span className="text-[#647c6d] text-[10px] uppercase tracking-wider">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-2.5 py-2 rounded bg-[#111914] border border-[#203427] text-xs text-[#00e599] font-mono focus:outline-none focus:border-[#00e599]"
              >
                <option value="id">ID (01-118)</option>
                <option value="priority">Priority First</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            {DATASET_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded text-[10px] font-mono whitespace-nowrap uppercase tracking-wider transition-all border ${
                    isSelected
                      ? 'bg-[#00e599] text-[#08100c] font-bold border-[#00e599]'
                      : 'bg-[#121c16] text-[#869b8d] hover:text-[#f0fdf4] border-[#1d2d23] hover:border-[#2d4637]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Dynamic Result Counter */}
          <div className="flex items-center justify-between text-[11px] font-mono text-[#6c8273]">
            <div>
              SHOWING <span className="text-[#00e599] font-bold">{filteredDatasets.length}</span> OF 118 DATASETS
              {selectedCategory !== 'ALL' && (
                <span className="text-[#89a190]"> in [{selectedCategory}]</span>
              )}
            </div>
            {(searchQuery || selectedCategory !== 'ALL') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('ALL');
                }}
                className="text-[#00e599] hover:underline text-[10px] uppercase"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Selected Dataset Detail Panel (if active) */}
        {selectedDataset && (
          <div className="p-4 bg-[#0a120e] border-b border-[#1b2b22]">
            <DatasetDetailPanel
              dataset={selectedDataset}
              onClose={() => setSelectedDataset(null)}
            />
          </div>
        )}

        {/* Dataset Cards Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#0b140f] scrollbar-thin">
          {filteredDatasets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredDatasets.map((dataset) => (
                <DatasetCard
                  key={dataset.id}
                  dataset={dataset}
                  isSelected={selectedDataset?.id === dataset.id}
                  onSelect={(d) => setSelectedDataset(d)}
                />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-[#708778] font-mono">
              <AlertCircle size={28} className="mx-auto mb-2 text-[#00e599]/60" />
              <p className="text-sm font-bold text-[#f0fdf4] mb-1">No datasets matched your query</p>
              <p className="text-xs max-w-sm mx-auto mb-4">
                No corpora found matching "{searchQuery}". Try searching for broader terms like "speech", "military", or "RIR".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('ALL');
                }}
                className="px-4 py-2 bg-[#143526] hover:bg-[#1e4e37] text-[#00e599] text-xs font-mono font-bold uppercase rounded border border-[#00e599]/40"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer / Legal Notice */}
        <div className="p-3 sm:p-4 bg-[#08100c] border-t border-[#1b2b22] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-[#6c8072]">
          <div className="flex items-center gap-2">
            <Shield size={12} className="text-[#00e599] shrink-0" />
            <span>
              <strong className="text-[#96aca0]">RESEARCH DATA NOTICE:</strong> Dataset names &amp; links provided for research reference. Licensing, attribution, &amp; usage restrictions are determined by each respective dataset provider.
            </span>
          </div>

          <div className="shrink-0 flex items-center gap-4">
            <span className="text-[#4e6456]">NOISELESS-X6 ARCHIVE</span>
            <button
              onClick={() => {
                const el = document.querySelector('.overflow-y-auto');
                if (el) el.scrollTop = 0;
              }}
              className="text-[#849a8c] hover:text-[#00e599] transition-colors uppercase"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
