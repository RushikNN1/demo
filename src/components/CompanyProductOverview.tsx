import React from 'react';
import { SattvaSaaraLogo } from './SattvaSaaraLogo';
import { SATTVA_SAARA_INFO } from '../data/packagingData';
import {
  Sparkles,
  ShieldCheck,
  Scale,
  Leaf,
  MapPin,
  ChevronDown,
  MessageSquare,
  Mail,
  Heart,
  Wheat,
  Clock,
  Award
} from 'lucide-react';

interface CompanyProductOverviewProps {
  onScrollToGallery: () => void;
}

export const CompanyProductOverview: React.FC<CompanyProductOverviewProps> = ({
  onScrollToGallery,
}) => {
  return (
    <div className="space-y-12">
      {/* 1. Hero Company Story Section */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-neutral-900/90 via-neutral-900/60 to-neutral-950 border border-neutral-800/90 p-6 sm:p-10 lg:p-12 shadow-2xl">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-8">
          {/* Top Brand Tag & Location Pill */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Sakleshpur, Western Ghats, Karnataka</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-400 font-mono font-medium">FSSAI Lic. 21226100000032</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700/80 font-mono text-[11px] text-amber-300">
              <Scale className="w-3.5 h-3.5" />
              <span>500g Standard Packets Only</span>
            </div>
          </div>

          {/* Hero Typography & Animated Brand Mark */}
          <div className="space-y-4 max-w-4xl">
            <SattvaSaaraLogo size="lg" showSubtitle={true} interactive={true} />

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-100 leading-[1.15]">
              Pure Karnataka Heritage Nutrition, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                Crafted for Every Household.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl font-normal">
              Born amidst the fertile foothills of Sakleshpur, <strong className="text-neutral-100 font-semibold">Sattva Saara Food Products</strong> is dedicated to reviving the sacred culinary wisdom of traditional Karnataka nourishment. We reject modern industrial shortcuts—our formulas rely strictly on stone-milled grains, unadulterated lentils, sprouted seeds, and pure regional botanicals.
            </p>
          </div>

          {/* Key Company Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
            <div className="p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Leaf className="w-4 h-4" />
                <span>100% Natural Purity</span>
              </div>
              <p className="text-xs text-neutral-300 leading-snug">
                Zero synthetic preservatives, zero maida, zero added artificial colors or chemicals.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Wheat className="w-4 h-4" />
                <span>Ancient Grains</span>
              </div>
              <p className="text-xs text-neutral-300 leading-snug">
                Wholesome sprouted millets, roasted pulses, California nuts, and authentic indigenous spices.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Scale className="w-4 h-4" />
                <span>500g Standard Pack</span>
              </div>
              <p className="text-xs text-neutral-300 leading-snug">
                Standardized exclusively in 500g airtight barrier pouches for optimal freshness retention.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
                <MessageSquare className="w-4 h-4" />
                <span>Direct Dispatch</span>
              </div>
              <p className="text-xs text-neutral-300 leading-snug">
                Dispatched directly from our Sakleshpur unit via WhatsApp or Email. No website cart fees.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onScrollToGallery}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs shadow-lg shadow-amber-500/15 transition-all active:scale-95 cursor-pointer"
            >
              <span>Explore 500g Packaging Gallery</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>

            <a
              href={`https://wa.me/${SATTVA_SAARA_INFO.rawWhatsApp}?text=${encodeURIComponent(
                'Hello Sattva Saara, I would like to inquire about ordering 500g packets.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Order</span>
            </a>

            <a
              href={`mailto:${SATTVA_SAARA_INFO.email}?subject=${encodeURIComponent(
                '500g Packet Inquiry - Sattva Saara'
              )}`}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-xs border border-neutral-700 transition-all active:scale-95"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Direct Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Detailed Product Overview Section (The Two 500g Products) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-mono uppercase tracking-wider">
              <span>Authentic Formulations</span>
              <span aria-hidden="true">·</span>
              <span>Sakleshpur Heritage Range</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-100 mt-1">
              Our 500g Packaging Lineup
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-400">Strictly 500g Packets Only</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Product 1: Instant Dosa Mix */}
          <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-5 flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 uppercase font-semibold">
                  01. Heritage Culinary
                </span>
                <span className="text-[11px] font-mono text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800">
                  500g Standee Pouch
                </span>
              </div>

              <div>
                <div className="text-2xl font-bold text-amber-400 font-sans">
                  ಸತ್ವ ಸಾರ ದೋಸಾ ಮಿಕ್ಸ್
                </div>
                <h3 className="text-xl font-bold text-neutral-100 mt-0.5">
                  Instant Dosa Mix (500g)
                </h3>
                <p className="text-xs text-amber-300/80 italic mt-0.5">
                  &ldquo;Crispy, Soft & Wholesome Dosas with Zero Waiting&rdquo;
                </p>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                Traditional dosa preparation usually requires overnight fermentation and industrial leavening agents. Sattva Saara Instant Dosa Mix is crafted purely from stone-ground Rice (73.8%), wholesome Urad Dal (18.45%), flattened Poha (7.38%), and fenugreek seeds (0.37%). Simply blend with fresh curd and water for a smooth batter that yields signature golden, lattice-crisp dosas on a hot tawa in under 5 minutes.
              </p>

              {/* Composition bullet tags */}
              <div className="space-y-1.5 pt-1 text-xs">
                <div className="flex items-center gap-2 text-neutral-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Natural — No Maida, No Added Preservatives, No Added Sugar</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Quick Preparation — Ready in 5 minutes with fresh whisked curd</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <Scale className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Standard Yield — One 500g packet yields approximately 18–20 crisp dosas</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
              <span className="font-mono text-neutral-400">Net Weight: 500g</span>
              <button
                onClick={onScrollToGallery}
                className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
              >
                <span>View Packaging Pouch & Specs</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Product 2: Everyday Health Drink */}
          <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-5 flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 uppercase font-semibold">
                  02. Daily Vitality
                </span>
                <span className="text-[11px] font-mono text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800">
                  500g Standee Pouch
                </span>
              </div>

              <div>
                <div className="text-2xl font-bold text-amber-400 font-sans">
                  ಸತ್ವ ಸಾರ ಆರೋಗ್ಯ ಪಾನೀಯ
                </div>
                <h3 className="text-xl font-bold text-neutral-100 mt-0.5">
                  Everyday Health Drink (500g)
                </h3>
                <p className="text-xs text-amber-300/80 italic mt-0.5">
                  &ldquo;Delivering the True Power of Nature in Every Sip&rdquo;
                </p>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                A nutrient-dense restorative blend inspired by ancient Ayurvedic dietary traditions. Handcrafted by slow-roasting sprouted grains and millets (Ragi, Wheat, Green Gram, Horse Gram, Bengal Gram) harmonized with California almonds, walnuts, cashews, pumpkin seeds, watermelon seeds, and fragrant spices like green cardamom and nutmeg. Ideal for children, active professionals, and elders.
              </p>

              {/* Composition bullet tags */}
              <div className="space-y-1.5 pt-1 text-xs">
                <div className="flex items-center gap-2 text-neutral-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Wholesome — Sprouted multi-seed and nut formulation</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Effortless Routine — Stir with warm water or hot milk in 3 minutes</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <Scale className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Standard Yield — One 500g packet provides approximately 16–20 glasses</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
              <span className="font-mono text-neutral-400">Net Weight: 500g</span>
              <button
                onClick={onScrollToGallery}
                className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
              >
                <span>View Packaging Pouch & Specs</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Visual Separator to Gallery */}
      <div className="pt-4 flex items-center justify-center">
        <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 uppercase tracking-widest bg-neutral-900/80 px-4 py-1.5 rounded-full border border-neutral-800">
          <span>Scroll down to inspect packaging gallery</span>
          <ChevronDown className="w-4 h-4 text-amber-400 animate-bounce" />
        </div>
      </div>
    </div>
  );
};
