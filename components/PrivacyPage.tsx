
import React from 'react';

interface PrivacyPageProps {
  onBackToCalculator: () => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBackToCalculator }) => {
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
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-6">Privacy Policy</h1>
      <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
        Your privacy is important to us. Last updated: [Date].
      </p>

      <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
        <div className="bg-white/50 dark:bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 dark:border-white/10 p-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">Introduction</h2>
          <p>
            Welcome to Sociafy. We are committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our Views Calculator and website. By using our service, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        <div className="bg-white/50 dark:bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 dark:border-white/10 p-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Information We Do Not Collect</h2>
          <p>
            <strong>We do not collect any personal data.</strong> Sociafy is a client-side application, which means all calculations are performed directly within your web browser.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>We do not ask for your name, email address, or any other personal identifiers.</li>
            <li>The number of views you enter is not stored, transmitted, or linked to you in any way.</li>
            <li>We do not use tracking cookies to monitor your behavior across websites.</li>
          </ul>
        </div>

        <div className="bg-white/50 dark:bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 dark:border-white/10 p-8">
          <h2 className="text-2xl font-bold mb-4 text-pink-500 dark:text-pink-400">Anonymous Usage Data</h2>
          <p>
            To improve our website and services, we may collect anonymous, aggregated usage data. This data is completely non-personal and cannot be used to identify you. Examples include the number of visitors to the site or which features are most popular. We do not use third-party analytics services that would compromise your privacy.
          </p>
        </div>
        
        <div className="bg-white/50 dark:bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 dark:border-white/10 p-8">
          <h2 className="text-2xl font-bold mb-4 text-green-500 dark:text-green-400">Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
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

export default PrivacyPage;
