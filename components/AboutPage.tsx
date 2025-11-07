
import React from 'react';

interface AboutPageProps {
  onBackToCalculator: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBackToCalculator }) => {
  return (
    <div className="py-20 md:py-24 max-w-4xl mx-auto animate-fade-in">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-6">About Sociafy</h1>
      <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
        Empowering creators with transparent earnings insights.
      </p>

      <div className="space-y-10">
        <div className="bg-white/50 dark:bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 dark:border-white/10 p-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Sociafy was born from a simple idea: to demystify social media earnings. The creator economy is booming, but understanding potential income can be confusing. We built this calculator to provide a free, simple, and powerful tool for aspiring and established creators to get a ballpark estimate of their ad revenue potential. Our goal is to empower you with data so you can make informed decisions about your content strategy.
          </p>
        </div>

        <div className="bg-white/50 dark:bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 dark:border-white/10 p-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">How The Calculator Works</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our tool calculates estimated earnings based on average CPM (Cost Per Mille, or cost per 1,000 views) ranges. These ranges are compiled from industry reports and public data. It's important to remember that this is an estimate. Actual earnings can vary significantly based on factors like your audience's geographic location, your content niche, video length, and specific platform policies.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Think of Sociafy as your starting point—a way to visualize potential, not a guarantee of income.
          </p>
        </div>

        <div className="bg-white/50 dark:bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 dark:border-white/10 p-8">
          <h2 className="text-2xl font-bold mb-4 text-pink-500 dark:text-pink-400">Our Vision</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We're passionate about the creator economy and believe in its power to enable individuals to build careers around their passions. Sociafy is just the beginning. We plan to expand our tools and resources to provide even more value to the creator community. Stay tuned!
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <button
          onClick={onBackToCalculator}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
        >
          Back to Calculator
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
