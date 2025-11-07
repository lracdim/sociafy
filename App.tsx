
import React, { useRef, useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CpmBreakdown from './components/CpmBreakdown';
import InsightSection from './components/InsightSection';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import PrivacyPage from './components/PrivacyPage';

type PageName = 'home' | 'about' | 'privacy';

function App() {
  const [currentPage, setCurrentPage] = useState<PageName>('home');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      return savedTheme;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const cpmRef = useRef<HTMLDivElement>(null);
  const insightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Wait for the home page to render before scrolling
      setTimeout(() => {
        ref.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    } else {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleNavigate = (page: PageName) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 selection:bg-purple-500/20">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-gray-950 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#c9d1ff,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#3b0764,transparent)]"></div>
      </div>

      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      <main className="container mx-auto px-4">
        {currentPage === 'home' && (
          <>
            <HeroSection
              onCompareClick={() => handleScrollTo(cpmRef)}
              onGuideClick={() => handleScrollTo(insightRef)}
            />
            <div ref={cpmRef}>
              <CpmBreakdown />
            </div>
            <div ref={insightRef}>
              <InsightSection />
            </div>
          </>
        )}
        {currentPage === 'about' && <AboutPage onBackToCalculator={() => handleNavigate('home')} />}
        {currentPage === 'privacy' && <PrivacyPage onBackToCalculator={() => handleNavigate('home')} />}
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
