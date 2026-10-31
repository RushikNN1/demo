import React, { useEffect, useState } from 'react';
import { PackageItem } from '../types';
import { X, ZoomIn, ZoomOut, RotateCcw, ArrowLeft, ArrowRight, Layers, ShieldCheck, Check } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  activeItem: PackageItem;
  allItems: PackageItem[];
  onClose: () => void;
  onSelect: (item: PackageItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  activeItem,
  allItems,
  onClose,
  onSelect,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setZoomLevel(1);
      setPan({ x: 0, y: 0 });
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, activeItem]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-' || e.key === '_') handleZoomOut();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeItem]);

  if (!isOpen) return null;

  const currentIndex = allItems.findIndex((it) => it.id === activeItem.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allItems.length;
    onSelect(allItems[nextIndex]);
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + allItems.length) % allItems.length;
    onSelect(allItems[prevIndex]);
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const oppositeSide = allItems.find(
    (it) => it.productId === activeItem.productId && it.side !== activeItem.side
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col bg-neutral-950/95 backdrop-blur-xl animate-in fade-in duration-200"
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-neutral-800 bg-neutral-950/80">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            {activeItem.productId === 'dosa-mix' ? 'Instant Dosa Mix' : 'Health Drink'} · {activeItem.side.toUpperCase()}
          </span>
          <h2 className="text-sm font-semibold text-neutral-200 hidden sm:inline-block">
            {activeItem.title}
          </h2>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {oppositeSide && (
            <button
              onClick={() => onSelect(oppositeSide)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 bg-neutral-800 hover:bg-neutral-700 hover:text-white rounded-lg transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Flip to {oppositeSide.side}</span>
            </button>
          )}

          <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-lg p-0.5">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 1}
              className="p-1.5 text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 transition-colors"
              title="Zoom Out (-)"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono px-2 text-neutral-400 tabular-nums">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 3.5}
              className="p-1.5 text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 transition-colors"
              title="Zoom In (+)"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            {zoomLevel > 1 && (
              <button
                onClick={handleResetZoom}
                className="p-1.5 text-neutral-400 hover:text-white border-l border-neutral-800 transition-colors"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors ml-2"
            title="Close (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="flex-1 relative flex items-center justify-center p-4 overflow-hidden select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
      >
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/60 shadow-lg backdrop-blur-md transition-all active:scale-95"
          title="Previous Image (Left Arrow)"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/60 shadow-lg backdrop-blur-md transition-all active:scale-95"
          title="Next Image (Right Arrow)"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Display Image with Pan & Zoom */}
        <div
          className="relative transition-transform duration-100 ease-out max-h-full max-w-full flex items-center justify-center"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
          }}
        >
          <img
            src={activeItem.imagePath}
            alt={activeItem.title}
            className="max-h-[82vh] max-w-[90vw] md:max-w-[75vw] object-contain rounded-xl shadow-2xl ring-1 ring-white/10"
            draggable={false}
          />
        </div>

        {/* Zoom Hint */}
        {zoomLevel === 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none text-xs text-neutral-400 bg-neutral-900/80 border border-neutral-800 px-3 py-1.5 rounded-full backdrop-blur-md">
            Click zoom icons or use +/- keys to inspect fine print & ingredients
          </div>
        )}
      </div>

      {/* Bottom Thumbnail Strip for Gallery Quick Selection */}
      <div className="border-t border-neutral-800/80 bg-neutral-950/90 px-4 py-2.5">
        <div className="max-w-xl mx-auto flex items-center justify-center gap-3 overflow-x-auto">
          {allItems.map((item) => {
            const isSelected = item.id === activeItem.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelect(item);
                  setZoomLevel(1);
                  setPan({ x: 0, y: 0 });
                }}
                className={`relative flex items-center gap-2 p-1.5 rounded-lg border transition-all text-left ${
                  isSelected
                    ? 'border-amber-400 bg-amber-500/10 ring-1 ring-amber-400/40'
                    : 'border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 hover:bg-neutral-900'
                }`}
              >
                <img
                  src={item.imagePath}
                  alt={item.title}
                  className="w-10 h-10 object-cover rounded shadow-sm shrink-0"
                />
                <div className="hidden sm:flex flex-col pr-2">
                  <span className="text-[11px] font-semibold text-neutral-200 whitespace-nowrap">
                    {item.productId === 'dosa-mix' ? 'Dosa Mix' : 'Health Drink'}
                  </span>
                  <span className="text-[10px] text-amber-400/90 font-mono capitalize">
                    {item.side} View
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
