import React from 'react';
import { PackageItem } from '../types';
import { SATTVA_SAARA_INFO } from '../data/packagingData';
import { SattvaSaaraLogo } from './SattvaSaaraLogo';
import { Type, ShieldCheck, Ruler, CheckCircle2, MessageSquare } from 'lucide-react';

interface DesignAnatomyProps {
  items: PackageItem[];
  onSelectPackage: (item: PackageItem) => void;
}

export const DesignAnatomy: React.FC<DesignAnatomyProps> = ({ items, onSelectPackage }) => {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-2 border-b border-neutral-800 pb-4">
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <span>Design Architecture & Print Systems</span>
          <span aria-hidden="true">·</span>
          <span className="text-amber-400 font-medium">Bilingual FMCG Packaging</span>
          <span aria-hidden="true">·</span>
          <span>500g Standard Packets Only</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100">
          Packaging Anatomy & Regulatory Engineering
        </h1>
        <p className="text-sm text-neutral-400 max-w-3xl">
          An in-depth breakdown of how authentic Karnataka vernacular typography, barrier film engineering, and FSSAI statutory regulations integrate in the Sattva Saara 500g product packaging.
        </p>
      </div>

      {/* Grid of Anatomy Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Card 1: Kannada & Latin Typography System */}
        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase">
              <Type className="w-4 h-4" />
              <span>01. Bilingual Typographic Hierarchy</span>
            </div>
            
            <h2 className="text-lg font-bold text-neutral-100">
              Kannada Script & Classical Serif Harmony
            </h2>

            <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-amber-400 tracking-wide font-sans">
                ಸತ್ವ ಸಾರ
              </div>
              <div className="text-xl sm:text-2xl font-serif text-neutral-100 tracking-widest uppercase">
                SATTVA SAARA
              </div>
              <p className="text-xs text-neutral-400 italic">
                &ldquo;The Core Value of Traditional Nourishment&rdquo;
              </p>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">
              Karnataka consumers recognize regional vernacular trust markers immediately. The Kannada wordmark <span className="text-amber-400 font-medium">ಸತ್ವ ಸಾರ</span> is crafted with uniform stroke terminals to ensure high-speed flexo print clarity on barrier films, while the Latin serif provides culinary authority.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-neutral-400 pt-3 border-t border-neutral-800">
            <div>Kannada Optical Axis: 90° Vertical</div>
            <div>Latin Display: Classical Serif</div>
            <div>Micro Text: Clear Legibility at 6pt</div>
            <div>Bilingual Recipe: 1:1 Parallel Layout</div>
          </div>
        </div>

        {/* Card 2: 500g Pouch Substrate & Barrier System */}
        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase">
              <Ruler className="w-4 h-4" />
              <span>02. Material Substrate & Barrier Foil</span>
            </div>
            
            <h2 className="text-lg font-bold text-neutral-100">
              500g Stand-Up Pouch Structure
            </h2>

            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center justify-between text-xs">
                <span className="text-neutral-300 font-medium">Layer 1 (Outer Surface)</span>
                <span className="font-mono text-amber-400">Matte BOPP Soft-Touch Film</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center justify-between text-xs">
                <span className="text-neutral-300 font-medium">Layer 2 (Moisture & Light Shield)</span>
                <span className="font-mono text-amber-400">EVOH Metallized Foil Barrier</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center justify-between text-xs">
                <span className="text-neutral-300 font-medium">Layer 3 (Inner Seal)</span>
                <span className="font-mono text-amber-400">Food-Grade Virgin Polyethylene (PE)</span>
              </div>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">
              Standardized exclusively in 500g packets. Built with a 60mm bottom gusset for stable self-standing retail presence, laser-scored tear notches for effortless consumer opening, and a premium airtight zip lock.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-neutral-400 pt-3 border-t border-neutral-800">
            <div>Net Quantity: 500g Format Only</div>
            <div>Bottom Gusset: 60mm Self-Standing</div>
            <div>Closure: Resealable Zip Lock</div>
            <div>Shelf-Life Barrier: 6 Months Moisture Proof</div>
          </div>
        </div>

      </div>

      {/* Regulatory Compliance Breakdown */}
      <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase">
          <ShieldCheck className="w-4 h-4" />
          <span>03. FSSAI & Statutory Food Labeling</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
            <h3 className="font-semibold text-neutral-200">Mandatory FSSAI License</h3>
            <p className="font-mono text-amber-400 text-sm font-bold">lic. No. 21226100000032</p>
            <p className="text-neutral-400 text-[11px]">
              Directly aligned under the official FSSAI seal on both product back panels with correct statutory proportions.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
            <h3 className="font-semibold text-neutral-200">100% Veg Symbol</h3>
            <p className="font-mono text-emerald-400 text-sm font-bold">100% VEG CERTIFIED</p>
            <p className="text-neutral-400 text-[11px]">
              Square border enclosing filled green circle positioned prominently in the upper right corner of the primary display panel.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
            <h3 className="font-semibold text-neutral-200">Standard Net Quantity</h3>
            <p className="font-mono text-neutral-200 text-sm font-bold">500g Packets Only</p>
            <p className="text-neutral-400 text-[11px]">
              Strictly standardized 500g net weight with clearly defined batch, manufacturing date, and 6-month shelf life stamping zones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
