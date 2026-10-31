import React from 'react';
import { ScreenId } from '../types';
import { SattvaSaaraLogo } from './SattvaSaaraLogo';
import { SATTVA_SAARA_INFO } from '../data/packagingData';
import { Package, Compass, Utensils, MessageSquare, BookOpen } from 'lucide-react';

interface HeaderProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onScrollToGallery?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate, onScrollToGallery }) => {
  const handleGalleryClick = () => {
    if (currentScreen === 'gallery') {
      if (onScrollToGallery) onScrollToGallery();
    } else {
      onNavigate('gallery');
      setTimeout(() => {
        if (onScrollToGallery) onScrollToGallery();
      }, 100);
    }
  };

  const handleHomeClick = () => {
    onNavigate('gallery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3">
        
        {/* Zone 1: Single brand wordmark with animated emblem */}
        <button
          onClick={handleHomeClick}
          className="group focus:outline-none shrink-0"
        >
          <SattvaSaaraLogo size="sm" showSubtitle={false} />
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          <button
            onClick={handleHomeClick}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentScreen === 'gallery'
                ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            About & Products
          </button>

          <button
            onClick={handleGalleryClick}
            className="text-neutral-400 hover:text-neutral-200 whitespace-nowrap shrink-0 transition-colors py-1"
          >
            Packaging Gallery
          </button>
          
          <button
            onClick={() => onNavigate('anatomy')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentScreen === 'anatomy'
                ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Design & Materials
          </button>

          <button
            onClick={() => onNavigate('recipe')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentScreen === 'recipe'
                ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Recipe & Nutrition
          </button>

          <button
            onClick={() => onNavigate('order')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentScreen === 'order'
                ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Direct Order (WhatsApp & Email)
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`https://wa.me/${SATTVA_SAARA_INFO.rawWhatsApp}?text=${encodeURIComponent(
              'Hello Sattva Saara, I would like to order 500g packets.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-amber-500/20 active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Order via WhatsApp</span>
          </a>
        </div>

      </div>

      {/* Mobile Navigation Strip */}
      <div className="lg:hidden flex items-center justify-around border-t border-neutral-800/80 bg-neutral-900/90 px-2 py-1.5 text-xs overflow-x-auto">
        <button
          onClick={handleHomeClick}
          className={`flex flex-col items-center py-1 px-2.5 rounded-md transition-colors ${
            currentScreen === 'gallery' ? 'text-amber-400 font-semibold' : 'text-neutral-400'
          }`}
        >
          <BookOpen className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] whitespace-nowrap">About</span>
        </button>
        <button
          onClick={handleGalleryClick}
          className="flex flex-col items-center py-1 px-2.5 rounded-md text-neutral-400 transition-colors"
        >
          <Package className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] whitespace-nowrap">Gallery</span>
        </button>
        <button
          onClick={() => onNavigate('anatomy')}
          className={`flex flex-col items-center py-1 px-2.5 rounded-md transition-colors ${
            currentScreen === 'anatomy' ? 'text-amber-400 font-semibold' : 'text-neutral-400'
          }`}
        >
          <Compass className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] whitespace-nowrap">Design</span>
        </button>
        <button
          onClick={() => onNavigate('recipe')}
          className={`flex flex-col items-center py-1 px-2.5 rounded-md transition-colors ${
            currentScreen === 'recipe' ? 'text-amber-400 font-semibold' : 'text-neutral-400'
          }`}
        >
          <Utensils className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] whitespace-nowrap">Recipe</span>
        </button>
        <button
          onClick={() => onNavigate('order')}
          className={`flex flex-col items-center py-1 px-2.5 rounded-md transition-colors ${
            currentScreen === 'order' ? 'text-amber-400 font-semibold' : 'text-neutral-400'
          }`}
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] whitespace-nowrap">Order</span>
        </button>
      </div>
    </header>
  );
};
