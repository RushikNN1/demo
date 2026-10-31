/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { PACKAGING_ITEMS, SATTVA_SAARA_INFO } from './data/packagingData';
import { PackageItem, ScreenId } from './types';
import { Header } from './components/Header';
import { CompanyProductOverview } from './components/CompanyProductOverview';
import { PackageGallery } from './components/PackageGallery';
import { DesignAnatomy } from './components/DesignAnatomy';
import { RecipeNutritionCalculator } from './components/RecipeNutritionCalculator';
import { DirectOrderContact } from './components/DirectOrderContact';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('gallery');
  const [selectedItem, setSelectedItem] = useState<PackageItem>(PACKAGING_ITEMS[0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollToGallery = () => {
    if (currentScreen !== 'gallery') {
      setCurrentScreen('gallery');
      setTimeout(() => {
        galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (item: PackageItem) => {
    setSelectedItem(item);
    setCurrentScreen('gallery');
    setTimeout(() => {
      galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100">
      {/* 1. Header Navigation */}
      <Header
        currentScreen={currentScreen}
        onNavigate={(screen) => setCurrentScreen(screen)}
        onScrollToGallery={scrollToGallery}
      />

      {/* 2. Main Content Canvas */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {currentScreen === 'gallery' && (
          <div className="space-y-12">
            {/* Top Section: Rich Description about the Company & the Products */}
            <CompanyProductOverview onScrollToGallery={scrollToGallery} />

            {/* As user scrolls down: The Packaging Gallery with small icons and side stage */}
            <div id="packaging-gallery" ref={galleryRef} className="pt-4 scroll-mt-24">
              <PackageGallery
                items={PACKAGING_ITEMS}
                selectedItem={selectedItem}
                onSelectItem={(item) => setSelectedItem(item)}
                onOpenLightbox={() => setIsLightboxOpen(true)}
              />
            </div>
          </div>
        )}

        {currentScreen === 'anatomy' && (
          <DesignAnatomy
            items={PACKAGING_ITEMS}
            onSelectPackage={handleSelectPackage}
          />
        )}

        {currentScreen === 'recipe' && (
          <RecipeNutritionCalculator items={PACKAGING_ITEMS} />
        )}

        {currentScreen === 'order' && (
          <DirectOrderContact />
        )}
      </main>

      {/* 3. High-Resolution Inspection Lightbox */}
      <LightboxModal
        isOpen={isLightboxOpen}
        activeItem={selectedItem}
        allItems={PACKAGING_ITEMS}
        onClose={() => setIsLightboxOpen(false)}
        onSelect={(item) => setSelectedItem(item)}
      />

      {/* 4. Footer */}
      <footer className="border-t border-neutral-800/80 bg-neutral-950 py-8 px-4 sm:px-6 mt-16 text-xs text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span className="font-bold text-neutral-200">
              {SATTVA_SAARA_INFO.kannadaName} · {SATTVA_SAARA_INFO.name}
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>{SATTVA_SAARA_INFO.manufacturer}</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-amber-400 font-mono">{SATTVA_SAARA_INFO.packStandard}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-neutral-400 font-mono text-[11px]">
            <span>FSSAI: {SATTVA_SAARA_INFO.fssaiLicense}</span>
            <span>WhatsApp: {SATTVA_SAARA_INFO.whatsappNumber}</span>
            <span>Email: {SATTVA_SAARA_INFO.email}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
