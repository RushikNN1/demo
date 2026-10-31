import React, { useState } from 'react';
import { PackageItem } from '../types';
import { SattvaSaaraLogo } from './SattvaSaaraLogo';
import { SATTVA_SAARA_INFO } from '../data/packagingData';
import {
  RotateCcw,
  Maximize2,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Scale,
  Leaf,
  ChevronRight,
  MessageSquare,
  Mail,
  ExternalLink
} from 'lucide-react';

interface PackageGalleryProps {
  items: PackageItem[];
  selectedItem: PackageItem;
  onSelectItem: (item: PackageItem) => void;
  onOpenLightbox: () => void;
}

export const PackageGallery: React.FC<PackageGalleryProps> = ({
  items,
  selectedItem,
  onSelectItem,
  onOpenLightbox,
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'dosa-mix' | 'health-drink'>('all');
  const [activeTab, setActiveTab] = useState<'specs' | 'nutrition' | 'ingredients' | 'recipe' | 'origin'>('specs');
  const [servingPortion, setServingPortion] = useState<number>(100); // grams out of 500g packet

  // Filter items for gallery
  const displayedItems = items.filter((item) => {
    if (filterCategory === 'all') return true;
    return item.productId === filterCategory;
  });

  // Find opposite side for quick flipping (Front <-> Back)
  const oppositeSideItem = items.find(
    (item) => item.productId === selectedItem.productId && item.side !== selectedItem.side
  );

  // Switch between products
  const alternativeProductItem = items.find(
    (item) => item.productId !== selectedItem.productId && item.side === selectedItem.side
  );

  const handleFlip = () => {
    if (oppositeSideItem) {
      onSelectItem(oppositeSideItem);
    }
  };

  const handleSwitchProduct = () => {
    if (alternativeProductItem) {
      onSelectItem(alternativeProductItem);
    }
  };

  // Calculate scaled nutrients for 500g packet portions
  const nutrition = selectedItem.nutritionalFacts;
  const ratio = servingPortion / 100;

  return (
    <div className="w-full space-y-8">
      {/* Gallery Header and Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-neutral-800">
        <div>
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>500g Packaging Gallery</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-400 font-medium">Standard Packets Only</span>
            <span aria-hidden="true">·</span>
            <span>Sakleshpur Direct Dispatch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100 mt-1">
            Interactive Packaging & Pouch Inspector
          </h2>
        </div>

        {/* Product Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg self-start sm:self-auto">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
              filterCategory === 'all'
                ? 'bg-amber-400 text-neutral-950 font-semibold shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            All Views (4)
          </button>
          <button
            onClick={() => setFilterCategory('dosa-mix')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
              filterCategory === 'dosa-mix'
                ? 'bg-amber-400 text-neutral-950 font-semibold shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Dosa Mix (500g)
          </button>
          <button
            onClick={() => setFilterCategory('health-drink')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
              filterCategory === 'health-drink'
                ? 'bg-amber-400 text-neutral-950 font-semibold shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Health Drink (500g)
          </button>
        </div>
      </div>

      {/* Gallery Option Icons Strip (User Request: "pictures with design as a gallery option just like a small icon for it") */}
      <div className="bg-neutral-900/60 border border-neutral-800/90 rounded-2xl p-3 sm:p-4">
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Gallery Options
            </span>
          </div>
          <span className="text-[11px] text-neutral-400 font-mono">
            Click small icon to switch side-stage preview
          </span>
        </div>

        {/* Small Icon Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {displayedItems.map((item) => {
            const isSelected = item.id === selectedItem.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectItem(item)}
                className={`group relative flex items-center gap-3 p-2 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'border-amber-400 bg-amber-400/10 ring-2 ring-amber-400/30 shadow-lg shadow-amber-500/5'
                    : 'border-neutral-800/80 bg-neutral-950/70 hover:border-neutral-700 hover:bg-neutral-900'
                }`}
              >
                {/* Small Icon Thumbnail Image */}
                <div className="relative w-12 h-14 sm:w-14 sm:h-16 rounded-lg overflow-hidden bg-neutral-900 shrink-0 border border-neutral-800">
                  <img
                    src={item.imagePath}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-200"
                  />
                  <span className="absolute bottom-0 inset-x-0 bg-neutral-950/85 text-[9px] font-mono font-medium text-center py-0.5 text-neutral-300 uppercase">
                    {item.side}
                  </span>
                </div>

                {/* Text Metadata inside Icon Option */}
                <div className="flex flex-col min-w-0 pr-1">
                  <span className="text-[11px] font-semibold text-neutral-200 group-hover:text-amber-300 transition-colors truncate">
                    {item.productId === 'dosa-mix' ? 'Dosa Mix' : 'Health Drink'}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-medium capitalize">
                    {item.side === 'front' ? 'Front Design' : 'Back Specs'}
                  </span>
                  <div className="flex items-center gap-1 mt-1 text-[10px] text-amber-400/90 font-mono">
                    <Scale className="w-3 h-3 shrink-0" />
                    <span>500g Pack Only</span>
                  </div>
                </div>

                {/* Active Indicator Pin */}
                {isSelected && (
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Two-Column Stage: "displaying the main package in the side of the webpage" */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Prominent Main Package Display Stage (5 cols on lg) */}
        <div className="lg:col-span-5 lg:sticky lg:top-20 space-y-4">
          
          <div className="relative rounded-2xl bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-neutral-800 p-4 sm:p-6 overflow-hidden shadow-2xl flex flex-col items-center justify-center min-h-[440px] sm:min-h-[500px]">
            
            {/* Top Badges overlay on package stage */}
            <div className="w-full flex items-center justify-between gap-2 mb-3 z-10">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900/90 border border-neutral-700/80 text-[11px] font-mono text-neutral-300 shadow-sm">
                <Scale className="w-3.5 h-3.5 text-amber-400" />
                <span>500g Packets Only</span>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900/90 border border-neutral-700/80 text-[11px] font-mono text-emerald-400 shadow-sm">
                <Leaf className="w-3.5 h-3.5" />
                <span>100% Natural</span>
              </div>
            </div>

            {/* Main Package Image */}
            <div
              onClick={onOpenLightbox}
              className="relative w-full flex items-center justify-center cursor-zoom-in group my-auto py-2"
              title="Click to open high-resolution zoom inspector"
            >
              <img
                src={selectedItem.imagePath}
                alt={selectedItem.title}
                className="max-h-[380px] sm:max-h-[440px] w-auto object-contain rounded-xl drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] group-hover:scale-[1.02] transition-transform duration-300 ring-1 ring-white/5"
              />

              {/* Hover Zoom Hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-950/40 rounded-xl backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900/90 border border-neutral-700 rounded-lg text-xs font-medium text-white shadow-lg">
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                  <span>Click to Inspect Full Res</span>
                </div>
              </div>
            </div>

            {/* Quick Action Bar under Main Image */}
            <div className="w-full pt-4 mt-2 border-t border-neutral-800/80 flex items-center justify-between gap-2 z-10">
              {oppositeSideItem && (
                <button
                  onClick={handleFlip}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition-all active:scale-95 border border-neutral-700/70"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                  <span>Flip to {oppositeSideItem.side === 'front' ? 'Front Pouch' : 'Back Specs'}</span>
                </button>
              )}

              <button
                onClick={onOpenLightbox}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-medium transition-colors border border-neutral-800"
                title="Fullscreen Lightbox"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Inspect</span>
              </button>

              {alternativeProductItem && (
                <button
                  onClick={handleSwitchProduct}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-medium transition-colors border border-neutral-800"
                  title="Switch Product"
                >
                  <span>Switch</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              )}
            </div>

          </div>

          {/* Quick Notice: Direct Order Only, No Rates */}
          <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-2 text-xs text-neutral-300">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-neutral-200">Ordering Policy</span>
              <span className="font-mono text-[11px] text-amber-400">Strictly 500g Format</span>
            </div>
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              We do 500g packets only. The only way to order is directly via WhatsApp (<span className="text-neutral-200 font-mono">+91 91876 56607</span>) or direct email (<span className="text-neutral-200 font-mono">sattvasaara46@gmail.com</span>). No web cart or rates displayed.
            </p>
          </div>

        </div>

        {/* Right Side: Information Architecture (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Main Title Lockup */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-mono text-amber-400 font-bold text-sm tracking-wide">
                {selectedItem.kannadaTitle}
              </span>
              <span className="text-neutral-500">/</span>
              <span className="text-neutral-300 font-medium">{selectedItem.category}</span>
              <span className="text-neutral-500">·</span>
              <span className="text-emerald-400 font-mono text-[11px]">Standard 500g Packet</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-neutral-100">
              {selectedItem.title}
            </h2>

            <p className="text-sm text-neutral-400 leading-relaxed">
              {selectedItem.description}
            </p>
          </div>

          {/* Highlights checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
            {selectedItem.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* Tab Navigation Controls */}
          <div className="flex items-center gap-1 border-b border-neutral-800 pb-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'specs'
                  ? 'bg-amber-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
              }`}
            >
              Packaging Specs
            </button>

            <button
              onClick={() => setActiveTab('nutrition')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'nutrition'
                  ? 'bg-amber-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
              }`}
            >
              Nutritional Facts
            </button>

            <button
              onClick={() => setActiveTab('ingredients')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'ingredients'
                  ? 'bg-amber-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
              }`}
            >
              Ingredients
            </button>

            <button
              onClick={() => setActiveTab('recipe')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'recipe'
                  ? 'bg-amber-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
              }`}
            >
              Bilingual Recipe
            </button>

            <button
              onClick={() => setActiveTab('origin')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'origin'
                  ? 'bg-amber-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
              }`}
            >
              Origin & FSSAI
            </button>
          </div>

          {/* TAB 1: Packaging Specifications (Color switches REMOVED) */}
          {activeTab === 'specs' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1">
                  <span className="text-[11px] text-neutral-400 uppercase font-mono">Net Quantity</span>
                  <p className="font-semibold text-neutral-200 text-sm">500g Standard Packets Only</p>
                  <p className="text-[11px] text-neutral-400">Strictly 500g format, no smaller or bulk variations.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1">
                  <span className="text-[11px] text-neutral-400 uppercase font-mono">Substrate & Finish</span>
                  <p className="font-semibold text-neutral-200">{selectedItem.specifications.finish}</p>
                  <p className="text-[11px] text-neutral-400">{selectedItem.specifications.barrier}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1">
                  <span className="text-[11px] text-neutral-400 uppercase font-mono">Pouch Geometry</span>
                  <p className="font-semibold text-neutral-200">{selectedItem.specifications.dimensions}</p>
                  <p className="text-[11px] text-neutral-400">{selectedItem.specifications.packagingType}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1">
                  <span className="text-[11px] text-neutral-400 uppercase font-mono">Closure & Seal</span>
                  <p className="font-semibold text-neutral-200">{selectedItem.specifications.closure}</p>
                  <p className="text-[11px] text-neutral-400">Easy tear notch with resealable airtight zip lock.</p>
                </div>
              </div>

              {/* Direct Ordering Banner inside Specs */}
              <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-semibold text-neutral-200">Ready to Order 500g Packets?</span>
                  <p className="text-[11px] text-neutral-400">Direct dispatch from Sakleshpur via WhatsApp or Email.</p>
                </div>
                <a
                  href={`https://wa.me/${SATTVA_SAARA_INFO.rawWhatsApp}?text=${encodeURIComponent(
                    `Hello, I would like to order 500g packets of ${selectedItem.title}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs whitespace-nowrap transition-colors"
                >
                  WhatsApp: +91 91876 56607
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: Nutritional Facts Calculator (Per 500g packet) */}
          {activeTab === 'nutrition' && nutrition && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-semibold text-neutral-200">
                      Nutritional Metrics
                    </span>
                    <p className="text-[11px] text-neutral-400">
                      Standard values calculated from this 500g packet.
                    </p>
                  </div>

                  {/* Portion Slider */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-400 font-mono">Portion:</span>
                    <div className="flex items-center gap-1.5 bg-neutral-950 px-2.5 py-1 rounded-lg border border-neutral-800 text-xs font-mono text-amber-400">
                      <span>{servingPortion}g</span>
                      <span className="text-neutral-500">/ 500g</span>
                    </div>
                  </div>
                </div>

                <input
                  type="range"
                  min="50"
                  max="500"
                  step="50"
                  value={servingPortion}
                  onChange={(e) => setServingPortion(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-1.5 bg-neutral-800 rounded-lg"
                />

                <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                  <span>50g (Single Serving)</span>
                  <span>100g (Standard)</span>
                  <span>250g (Half Packet)</span>
                  <span>500g (Entire Packet)</span>
                </div>
              </div>

              {/* Nutritional Facts Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 text-center">
                  <span className="text-[11px] text-neutral-400 uppercase font-mono">Energy</span>
                  <div className="text-lg font-bold text-amber-400 font-mono tabular-nums mt-0.5">
                    {Math.round(nutrition.calories * ratio)} <span className="text-xs font-normal text-neutral-400">kcal</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 text-center">
                  <span className="text-[11px] text-neutral-400 uppercase font-mono">Protein</span>
                  <div className="text-lg font-bold text-neutral-100 font-mono tabular-nums mt-0.5">
                    {(nutrition.protein * ratio).toFixed(1)} <span className="text-xs font-normal text-neutral-400">g</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 text-center">
                  <span className="text-[11px] text-neutral-400 uppercase font-mono">Carbohydrates</span>
                  <div className="text-lg font-bold text-neutral-100 font-mono tabular-nums mt-0.5">
                    {(nutrition.carbs * ratio).toFixed(1)} <span className="text-xs font-normal text-neutral-400">g</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 text-center">
                  <span className="text-[11px] text-neutral-400 uppercase font-mono">Added Sugar</span>
                  <div className="text-lg font-bold text-emerald-400 font-mono tabular-nums mt-0.5">
                    0 <span className="text-xs font-normal text-neutral-400">g (Zero)</span>
                  </div>
                </div>
              </div>

              {/* Secondary details */}
              <div className="p-3 rounded-xl bg-neutral-900/30 border border-neutral-800 text-xs text-neutral-300 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-neutral-400">Total Fat:</span>
                  <span className="font-mono text-neutral-200">{(nutrition.fat * ratio).toFixed(1)}g</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-neutral-400">Saturated Fat:</span>
                  <span className="font-mono text-neutral-200">{(nutrition.saturatedFat * ratio).toFixed(1)}g</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-neutral-400">Sodium (Na):</span>
                  <span className="font-mono text-neutral-200">{(nutrition.sodium * ratio).toFixed(1)}mg</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[11px]">
                  <span>100% Preservative Free</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Ingredients */}
          {activeTab === 'ingredients' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold text-neutral-200">
                    Ingredient Breakdown (Per 500g Packet)
                  </h3>
                  <span className="text-[11px] font-mono text-emerald-400">100% Natural</span>
                </div>

                <div className="space-y-2">
                  {selectedItem.ingredients?.map((ing, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800/80 text-xs"
                    >
                      <span className="font-medium text-neutral-200">{ing.name}</span>
                      <div className="flex items-center gap-2 font-mono text-neutral-400">
                        {ing.amount && <span className="text-amber-400/90">{ing.amount}</span>}
                        {ing.percent && <span className="text-[11px] text-neutral-500">({ing.percent})</span>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-neutral-800/60 text-[11px] text-neutral-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero Maida, Zero Artificial Colors, Zero Preservatives.</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Bilingual Recipe Guide */}
          {activeTab === 'recipe' && (
            <div className="space-y-3 animate-in fade-in duration-150">
              {selectedItem.preparationSteps && selectedItem.preparationSteps.length > 0 ? (
                selectedItem.preparationSteps.map((st) => (
                  <div
                    key={st.step}
                    className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-semibold text-amber-400">
                        STEP 0{st.step} · {st.title.toUpperCase()}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-200 font-medium">
                      {st.english}
                    </p>

                    <p className="text-xs text-amber-300/80 font-medium font-sans">
                      {st.kannada}
                    </p>

                    {st.tip && (
                      <p className="text-[11px] text-neutral-400 italic pt-1 border-t border-neutral-800/60">
                        Pro-tip: {st.tip}
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 text-xs text-neutral-400 text-center">
                  Select Instant Dosa Mix to view the 5-step preparation instructions.
                </div>
              )}
            </div>
          )}

          {/* TAB 5: Origin & Traceability */}
          {activeTab === 'origin' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-3 text-xs">
                <div>
                  <span className="text-[11px] uppercase font-mono text-neutral-400">Manufacturer & Packer</span>
                  <h3 className="font-bold text-neutral-100 text-sm mt-0.5">{SATTVA_SAARA_INFO.manufacturer}</h3>
                  <p className="text-neutral-300 mt-1">{SATTVA_SAARA_INFO.address}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-neutral-800">
                  <div>
                    <span className="text-[11px] text-neutral-400 uppercase font-mono">FSSAI License</span>
                    <p className="font-mono text-amber-400 font-bold">{SATTVA_SAARA_INFO.fssaiLicense}</p>
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-400 uppercase font-mono">Package Format</span>
                    <p className="font-mono text-neutral-200">{SATTVA_SAARA_INFO.packStandard}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-neutral-800">
                  <div>
                    <span className="text-[11px] text-neutral-400 uppercase font-mono">Direct WhatsApp</span>
                    <p className="font-mono text-neutral-200">{SATTVA_SAARA_INFO.whatsappNumber}</p>
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-400 uppercase font-mono">Official Email</span>
                    <p className="font-mono text-neutral-200">{SATTVA_SAARA_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
