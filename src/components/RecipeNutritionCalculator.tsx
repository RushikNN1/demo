import React, { useState } from 'react';
import { PackageItem } from '../types';
import { ChefHat, Flame, Scale, Clock, CheckCircle2, Play, Pause, RotateCcw, Utensils } from 'lucide-react';

interface RecipeNutritionCalculatorProps {
  items: PackageItem[];
}

export const RecipeNutritionCalculator: React.FC<RecipeNutritionCalculatorProps> = ({ items }) => {
  const [selectedProduct, setSelectedProduct] = useState<'dosa-mix' | 'health-drink'>('dosa-mix');
  const [dosaCount, setDosaCount] = useState<number>(4); // number of dosas to prepare
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(300); // 5 min resting timer
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeItem = items.find((i) => i.productId === selectedProduct && i.side === 'back') || items[1];

  // A 500g packet makes ~20 medium crisp dosas (approx 25g powder per dosa)
  const powderGrams = selectedProduct === 'dosa-mix' ? dosaCount * 25 : dosaCount * 30;
  const ratio = powderGrams / 100;
  const nutrition = activeItem.nutritionalFacts || {
    calories: 366,
    protein: 11.1,
    carbs: 79.3,
    sugar: 1.3,
    addedSugar: 0,
    fat: 0.5,
    saturatedFat: 0.2,
    sodium: 9.3,
  };

  React.useEffect(() => {
    let interval: any = null;
    if (timerActive && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timerSeconds]);

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-2 border-b border-neutral-800 pb-4">
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <span>Culinary Studio & Portion Engine</span>
          <span aria-hidden="true">·</span>
          <span className="text-amber-400 font-medium">Standard 500g Packets Only</span>
          <span aria-hidden="true">·</span>
          <span>Bilingual Step Walkthrough</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100">
          Recipe Walkthrough & Serving Calculator
        </h1>
        <p className="text-sm text-neutral-400 max-w-2xl">
          Scale your culinary preparation directly from the 500g packet. Measure dry mix, required curd/water, and calculate dynamic nutritional yield.
        </p>
      </div>

      {/* Switcher & Portion Slider */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Calculator & Timer (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Product selector buttons */}
          <div className="flex items-center gap-2 p-1.5 bg-neutral-900 border border-neutral-800 rounded-xl">
            <button
              onClick={() => {
                setSelectedProduct('dosa-mix');
                setDosaCount(4);
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedProduct === 'dosa-mix'
                  ? 'bg-amber-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Instant Dosa Mix (500g)
            </button>
            <button
              onClick={() => {
                setSelectedProduct('health-drink');
                setDosaCount(2);
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedProduct === 'health-drink'
                  ? 'bg-amber-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Health Drink (500g)
            </button>
          </div>

          {/* Portion Adjuster */}
          <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-neutral-200">
                {selectedProduct === 'dosa-mix' ? 'Target Dosa Yield' : 'Target Drink Servings'}
              </span>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-neutral-950 rounded-lg border border-neutral-800 font-mono text-amber-400 text-xs font-bold">
                <span>{dosaCount}</span>
                <span className="text-neutral-400 font-normal">
                  {selectedProduct === 'dosa-mix' ? 'Dosas' : 'Glasses'}
                </span>
              </div>
            </div>

            <input
              type="range"
              min="1"
              max={selectedProduct === 'dosa-mix' ? 20 : 16}
              value={dosaCount}
              onChange={(e) => setDosaCount(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer h-2 bg-neutral-800 rounded-lg"
            />

            <div className="flex justify-between text-[11px] font-mono text-neutral-400">
              <span>Quick Snack (1-2)</span>
              <span>Meal (4-6)</span>
              <span>Entire 500g Pack ({selectedProduct === 'dosa-mix' ? '20' : '16'})</span>
            </div>

            {/* Dry mix required from 500g packet */}
            <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-2 text-xs">
              <div className="flex justify-between text-neutral-300">
                <span>Dry Mix Required:</span>
                <span className="font-mono text-amber-400 font-semibold">{powderGrams}g of 500g packet</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Remaining in 500g Packet:</span>
                <span className="font-mono text-neutral-400">{Math.max(0, 500 - powderGrams)}g left</span>
              </div>
              {selectedProduct === 'dosa-mix' ? (
                <div className="flex justify-between text-neutral-300">
                  <span>Recommended Curd:</span>
                  <span className="font-mono text-emerald-400">{Math.round(powderGrams * 0.9)}g (whisked)</span>
                </div>
              ) : (
                <div className="flex justify-between text-neutral-300">
                  <span>Hot Milk/Water:</span>
                  <span className="font-mono text-emerald-400">{dosaCount * 180}ml</span>
                </div>
              )}
            </div>
          </div>

          {/* Dynamic Nutrition for this batch */}
          <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
            <span className="text-xs font-semibold text-neutral-200 block">
              Batch Nutritional Value ({powderGrams}g portion)
            </span>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] text-neutral-400 font-mono">ENERGY</span>
                <p className="font-bold text-amber-400 font-mono text-base">{Math.round(nutrition.calories * ratio)} kcal</p>
              </div>

              <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] text-neutral-400 font-mono">PROTEIN</span>
                <p className="font-bold text-neutral-100 font-mono text-base">{(nutrition.protein * ratio).toFixed(1)} g</p>
              </div>

              <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] text-neutral-400 font-mono">CARBOHYDRATES</span>
                <p className="font-bold text-neutral-100 font-mono text-base">{(nutrition.carbs * ratio).toFixed(1)} g</p>
              </div>

              <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] text-neutral-400 font-mono">ADDED SUGAR</span>
                <p className="font-bold text-emerald-400 font-mono text-base">0 g (Zero)</p>
              </div>
            </div>
          </div>

          {/* Resting Batter Timer (5 min) */}
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-200">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>5-Minute Batter Rest Timer</span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-0.5">
                Allows poha and fenugreek seeds to hydrate fully.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-lg font-bold text-amber-400 tabular-nums">
                {formatTimer(timerSeconds)}
              </span>
              <button
                onClick={() => setTimerActive(!timerActive)}
                className="p-2 rounded-lg bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-colors"
                title={timerActive ? 'Pause' : 'Start'}
              >
                {timerActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={() => {
                  setTimerActive(false);
                  setTimerSeconds(300);
                }}
                className="p-2 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                title="Reset"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Step-by-Step Bilingual Walkthrough (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-base font-bold text-neutral-200">
              {selectedProduct === 'dosa-mix'
                ? '5-Step Crispy Dosa Preparation Guide'
                : '4-Step Health Drink Preparation Guide'}
            </h2>
            <span className="text-xs font-mono text-amber-400">Kannada & English</span>
          </div>

          <div className="space-y-3">
            {activeItem.preparationSteps?.map((st, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <div
                  key={st.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'border-amber-400 bg-amber-500/10 ring-1 ring-amber-400/30'
                      : 'border-neutral-800 bg-neutral-900/40 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      STEP 0{st.step} — {st.title.toUpperCase()}
                    </span>
                    {isActive && (
                      <span className="text-[10px] font-mono text-amber-400/90 bg-amber-400/20 px-2 py-0.5 rounded">
                        Active Step
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-medium text-neutral-100">
                    {st.english}
                  </p>

                  <p className="text-sm font-sans font-medium text-amber-300/80 mt-1">
                    {st.kannada}
                  </p>

                  {st.tip && (
                    <div className="mt-2 pt-2 border-t border-neutral-800/80 text-xs text-neutral-400 italic flex items-center gap-1.5">
                      <Utensils className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{st.tip}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Storage instructions banner */}
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-300 space-y-1.5">
            <div className="font-semibold text-neutral-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Moisture Prevention Directives</span>
            </div>
            <p className="text-neutral-400">
              Store in a cool, dry place away from direct sunlight. Reseal the 500g packet zip lock immediately after every use. Always use a clean, dry spoon to prevent moisture contamination.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
