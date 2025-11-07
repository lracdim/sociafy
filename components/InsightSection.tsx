
import React from 'react';

const InsightCard: React.FC<{ title: string; children: React.ReactNode; icon: string }> = ({ title, children, icon }) => (
    <div className="bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 dark:border-white/10 p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{children}</p>
    </div>
);

const InsightSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How It Works</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Understanding the numbers behind your earnings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <InsightCard title="What is CPM?" icon="💡">
          CPM stands for "Cost Per Mille" or cost per 1,000 views. It's the amount advertisers pay to show their ads. This is the primary metric used to estimate your ad revenue.
        </InsightCard>
        <InsightCard title="Why Country & Niche Matter" icon="🌍">
          Advertisers pay more for viewers in certain countries (like the USA) and for specific content niches (like finance or tech). Your actual CPM can vary greatly based on your audience.
        </InsightCard>
        <InsightCard title="How Creators Earn More" icon="🚀">
          Top creators diversify their income beyond ads with brand deals, affiliate marketing, merchandise, and direct support from their audience. Use this calculator as a starting point.
        </InsightCard>
      </div>
    </section>
  );
};

export default InsightSection;
