
import React from 'react';
import { PLATFORMS } from '../constants';
import PlatformIcon from './PlatformIcons';

const CpmBreakdown: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Platform CPM Breakdown</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Typical Cost Per 1,000 Views (CPM) ranges by platform.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PLATFORMS.map((platform) => (
          <div key={platform.name} className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <PlatformIcon platform={platform.name} className={`w-8 h-8 mr-3 ${platform.color}`} />
              <h3 className="text-xl font-bold">{platform.name}</h3>
            </div>
            <p className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              ${platform.cpmMin.toFixed(2)} - ${platform.cpmMax.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">per 1,000 views</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CpmBreakdown;
