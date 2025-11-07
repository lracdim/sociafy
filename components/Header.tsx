
import React from 'react';

type PageName = 'home' | 'about' | 'privacy';

interface HeaderProps {
    currentPage: string;
    onNavigate: (page: PageName) => void;
    theme: 'light' | 'dark';
    onToggleTheme: () => void;
}

const SunIcon = ({ className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
);

const MoonIcon = ({ className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);


const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, theme, onToggleTheme }) => {
    const navItems: { key: PageName; label: string }[] = [
        { key: 'home', label: 'Calculator' },
        { key: 'about', label: 'About' },
        { key: 'privacy', label: 'Privacy' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-950/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
            <nav className="container mx-auto px-4 flex justify-between items-center py-4">
                <button onClick={() => onNavigate('home')} className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                    Socmedify
                </button>
                <div className="flex items-center gap-2">
                    <div className="hidden md:flex items-center gap-6 mr-4">
                        {navItems.map(item => (
                            <button
                                key={item.key}
                                onClick={() => onNavigate(item.key)}
                                className={`font-semibold transition-colors px-2 py-1 rounded-md ${
                                    currentPage === item.key
                                        ? 'text-purple-600 dark:text-purple-400 bg-purple-500/10'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-purple-500/10'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={onToggleTheme}
                        className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
                    </button>
                </div>
                {/* A mobile menu button could be added here for smaller screens */}
            </nav>
        </header>
    );
};

export default Header;
