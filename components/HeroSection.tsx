
import React, { useState, useEffect } from 'react';
import { PLATFORMS } from '../constants';
import { PlatformName } from '../types';
import PlatformIcon from './PlatformIcons';

interface HeroSectionProps {
  onCompareClick: () => void;
  onGuideClick: () => void;
}

const AnimatedCounter: React.FC<{ value: number }> = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const animationDuration = 500;
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(animationDuration / frameDuration);
        let frame = 0;

        const startValue = displayValue;
        const endValue = value;

        if (endValue === startValue) return;

        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const current = startValue + (endValue - startValue) * progress;

            if (frame >= totalFrames) {
                setDisplayValue(endValue);
                clearInterval(counter);
            } else {
                setDisplayValue(current);
            }
        }, frameDuration);

        return () => clearInterval(counter);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <span className="tabular-nums">
            {displayValue.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            })}
        </span>
    );
};


const HeroSection: React.FC<HeroSectionProps> = ({ onCompareClick, onGuideClick }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformName>('YouTube');
  const [views, setViews] = useState('');
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    const platformData = PLATFORMS.find(p => p.name === selectedPlatform);
    if (!platformData) return;

    const averageCpm = (platformData.cpmMin + platformData.cpmMax) / 2;
    const numViews = parseInt(views.replace(/,/g, ''), 10);

    if (!isNaN(numViews) && numViews > 0) {
      const calculatedEarnings = (numViews / 1000) * averageCpm;
      setEarnings(calculatedEarnings);
    } else {
      setEarnings(0);
    }
  }, [views, selectedPlatform]);
  
  const handleViewsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value === '') {
        setViews('');
        return;
    }
    const num = parseInt(value, 10);
    setViews(num.toLocaleString('en-US'));
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
        Turn Your Views Into Real Numbers <span role="img" aria-label="money bag emoji">💰</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
        Instantly calculate how much your views are worth across every major platform.
      </p>

      <div className="w-full max-w-2xl p-6 md:p-8 bg-white/50 dark:bg-black/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 dark:border-white/10">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {PLATFORMS.map(platform => (
            <button
              key={platform.name}
              onClick={() => setSelectedPlatform(platform.name)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 border-2 ${
                selectedPlatform === platform.name
                  ? `${platform.borderColor} ${platform.color} bg-white dark:bg-gray-800 shadow-md`
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
              }`}
            >
              <PlatformIcon platform={platform.name} className="w-5 h-5" />
              {platform.name}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <label htmlFor="views-input" className="sr-only">Enter Your Total Views</label>
          <input
            id="views-input"
            type="text"
            value={views}
            onChange={handleViewsChange}
            placeholder="Enter Your Total Views"
            className="w-full text-center text-2xl md:text-3xl font-bold bg-gray-100/50 dark:bg-gray-800/50 border-2 border-gray-300 dark:border-gray-700 rounded-lg py-4 px-5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-300"
          />
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-lg p-6 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            <p className="text-lg font-medium opacity-80">💰 Estimated Income</p>
            <div className="text-4xl md:text-5xl font-extrabold tracking-tight my-2">
                <AnimatedCounter value={earnings} />
            </div>
            <p className="text-sm opacity-70">Based on average CPM rates for {selectedPlatform}.</p>
        </div>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xl mx-auto mt-6 text-center">
        ⚠️ <strong>Disclaimer:</strong> The estimated income shown is for informational purposes only. Actual earnings vary based on CPM rates, audience location, content type, and platform policies.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button
          onClick={onCompareClick}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
        >
          Compare Platforms
        </button>
        <button
          onClick={onGuideClick}
          className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
        >
          See CPM Guide
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
