import React, { useState, useEffect } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';

interface SattvaSaaraLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  interactive?: boolean;
}

export const SattvaSaaraLogo: React.FC<SattvaSaaraLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  interactive = true,
}) => {
  const [animKey, setAnimKey] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const triggerAnimation = () => {
    setAnimKey((prev) => prev + 1);
  };

  return (
    <div
      key={animKey}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-flex items-center gap-3 select-none"
    >
      {/* Animated Circular Peacock / Sunburst Insignia */}
      <div className="relative shrink-0 flex items-center justify-center">
        {/* Ambient Pulsing Glow */}
        <div
          className={`absolute inset-0 rounded-full bg-amber-500/20 blur-md transition-all duration-700 ${
            isHovered ? 'scale-125 bg-amber-400/35' : 'scale-100'
          }`}
        />

        {/* SVG Peacock Emblem with Radiating Feathers */}
        <svg
          className={`relative z-10 transition-transform duration-500 ${
            size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-11 h-11' : 'w-16 h-16'
          } ${isHovered ? 'scale-105 rotate-3' : ''}`}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Ring with rotating subtle dash */}
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            className="animate-[spin_24s_linear_infinite]"
          />

          <circle
            cx="50"
            cy="50"
            r="42"
            fill="#12100E"
            stroke="url(#goldGradient)"
            strokeWidth="1"
          />

          {/* Radiating Peacock Feathers (Animated Scale / Opacity) */}
          <g className="origin-center animate-[pulse_4s_ease-in-out_infinite]">
            {/* Feathers radiating upward */}
            <path d="M50 48 C 47 30, 36 22, 28 20 C 34 26, 38 36, 44 45 Z" fill="url(#featherGradient)" opacity="0.85" />
            <path d="M50 48 C 45 28, 42 16, 38 12 C 43 18, 46 30, 48 45 Z" fill="url(#goldGradient)" opacity="0.95" />
            <path d="M50 48 C 48 24, 49 14, 50 8 C 51 14, 52 24, 50 48 Z" fill="url(#goldGradient)" />
            <path d="M50 48 C 55 28, 58 16, 62 12 C 57 18, 54 30, 52 45 Z" fill="url(#goldGradient)" opacity="0.95" />
            <path d="M50 48 C 53 30, 64 22, 72 20 C 66 26, 62 36, 56 45 Z" fill="url(#featherGradient)" opacity="0.85" />
            
            {/* Peacock Eyespots on Feathers */}
            <circle cx="28" cy="20" r="2.5" fill="#E69C24" />
            <circle cx="38" cy="12" r="2.5" fill="#E69C24" />
            <circle cx="50" cy="8" r="2.8" fill="#FDE68A" />
            <circle cx="62" cy="12" r="2.5" fill="#E69C24" />
            <circle cx="72" cy="20" r="2.5" fill="#E69C24" />
          </g>

          {/* Central Body & Head of Peacock */}
          <path
            d="M50 44 C 47 47, 45 52, 45 58 C 45 64, 48 70, 50 72 C 52 70, 55 64, 55 58 C 55 52, 53 47, 50 44 Z"
            fill="url(#goldGradient)"
          />
          <circle cx="50" cy="42" r="3.5" fill="#FDE68A" />
          <path d="M50 38.5 L 50 34" stroke="#FDE68A" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="50" cy="33.5" r="1.2" fill="#F59E0B" />

          {/* Base Pedestal Arch */}
          <path
            d="M38 78 Q 50 82 62 78"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Linear Gradients */}
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="50%" stopColor="#E69C24" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="featherGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animated Typographic Mark */}
      <div className="flex flex-col text-left">
        {/* Kannada Calligraphy with Golden Shimmer Sweep */}
        <div className="flex items-center gap-1.5">
          <span
            className={`font-sans font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 animate-[shimmer_4s_infinite] ${
              size === 'sm'
                ? 'text-base sm:text-lg'
                : size === 'md'
                ? 'text-lg sm:text-xl'
                : 'text-2xl sm:text-3xl'
            }`}
          >
            ಸತ್ವ ಸಾರ
          </span>

          {interactive && (
            <button
              onClick={triggerAnimation}
              className="opacity-0 group-hover:opacity-60 hover:opacity-100 p-0.5 text-amber-400 transition-opacity"
              title="Replay Brand Animation"
            >
              <Sparkles className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Latin Classical Serif Name */}
        <span
          className={`font-serif tracking-[0.25em] uppercase font-bold text-neutral-100 -mt-0.5 ${
            size === 'sm'
              ? 'text-[11px]'
              : size === 'md'
              ? 'text-xs sm:text-sm'
              : 'text-base sm:text-lg'
          }`}
        >
          SATTVA SAARA
        </span>

        {/* Tagline */}
        {showSubtitle && (
          <span className="text-[10px] sm:text-[11px] text-amber-300/80 italic font-sans -mt-0.5">
            The Core Value of Traditional Nourishment
          </span>
        )}
      </div>
    </div>
  );
};
